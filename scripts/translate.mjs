import { GoogleAuth } from 'google-auth-library';
import { readFileSync, writeFileSync, existsSync } from 'fs';

const CREDENTIALS_PATH = 'google-credentials.json';
const SOURCE_FILE = 'messages/en.json';

const TARGET_LOCALES = [
  { out: 'es', name: 'Spanish' },
  { out: 'fr', name: 'French' },
  { out: 'ko', name: 'Korean' },
  { out: 'ja', name: 'Japanese' },
  { out: 'zh', name: 'Chinese (Simplified)' },
  { out: 'de', name: 'German' },
  { out: 'hi', name: 'Hindi' },
  { out: 'pt', name: 'Portuguese' },
  { out: 'ar', name: 'Arabic' },
];

const SKIP_PATHS = new Set([
  'metadata.author',
  'metadata.ogLocale',
  'about.techAlias',
  'hoverReveal.name',
  'hoverReveal.alias',
  'contact.emailValue',
  'contact.locationValue',
  'languageSwitcher.en',
  'languageSwitcher.es',
  'languageSwitcher.fr',
  'languageSwitcher.ko',
  'languageSwitcher.ja',
  'languageSwitcher.zh',
  'languageSwitcher.de',
  'languageSwitcher.hi',
  'languageSwitcher.pt',
  'languageSwitcher.ar',
]);

function shouldSkip(path) {
  if (SKIP_PATHS.has(path)) return true;

  // Tech brand names — skip translation so "React" doesn't become "Reaccionar"
  if (path.startsWith('skills.items.') || path === 'logoMarquee.items') return true;

  // Project tags are tech brand names
  if (/^projects\.items\.\w+\.tags$/.test(path)) return true;

  // Project titles are proper names
  if (/^projects\.items\.\w+\.title$/.test(path)) return true;

  return false;
}

function flatten(obj, prefix = '') {
  const result = {};
  for (const [key, value] of Object.entries(obj)) {
    const path = prefix ? `${prefix}.${key}` : key;
    if (value !== null && typeof value === 'object' && !Array.isArray(value)) {
      Object.assign(result, flatten(value, path));
    } else if (Array.isArray(value)) {
      const hasObjects = value.some(v => v !== null && typeof v === 'object');
      if (hasObjects) {
        Object.assign(result, flatten(value, path));
      } else {
        result[path] = value;
      }
    } else {
      result[path] = value;
    }
  }
  return result;
}

function unflatten(flat) {
  const result = {};
  for (const [path, value] of Object.entries(flat)) {
    const parts = path.split('.');
    let current = result;
    for (let i = 0; i < parts.length; i++) {
      const part = parts[i];
      const isLast = i === parts.length - 1;
      if (isLast) {
        current[part] = value;
      } else {
        const nextPart = parts[i + 1];
        if (!(part in current)) {
          current[part] = /^\d+$/.test(nextPart) ? [] : {};
        }
        current = current[part];
      }
    }
  }
  return result;
}

async function translateBatch(strings, targetLang, authToken) {
  const https = (await import('https')).default;
  return new Promise((resolve, reject) => {
    const data = JSON.stringify({ q: strings, target: targetLang, source: 'en' });
    const req = https.request({
      hostname: 'translation.googleapis.com',
      path: '/language/translate/v2',
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${authToken}`,
        'Content-Type': 'application/json; charset=utf-8',
        'Accept': 'application/json',
        'Content-Length': Buffer.byteLength(data),
      },
    }, res => {
      res.setEncoding('utf-8');
      let body = '';
      res.on('data', (c) => body += c);
      res.on('end', () => {
        try {
          const parsed = JSON.parse(body);
          if (parsed.error) {
            reject(new Error(parsed.error.message));
          } else {
            resolve(parsed.data.translations.map(t => t.translatedText));
          }
        } catch (e) {
          reject(new Error(`Failed to parse response: ${body.slice(0, 200)}`));
        }
      });
    });
    req.on('error', reject);
    req.write(data);
    req.end();
  });
}

// Protect {placeholders} so Google Translate doesn't corrupt them
const PH_REGEX = /\{[^}]+\}/g;

function protectPlaceholders(strings) {
  const phMap = new Map();
  let counter = 0;

  const out = strings.map(s => {
    return s.replace(PH_REGEX, match => {
      const key = `__PH_${counter}__`;
      phMap.set(key, match);
      counter++;
      return key;
    });
  });

  return { protected: out, phMap };
}

function restorePlaceholders(strings, phMap) {
  return strings.map(s => {
    let result = s;
    for (const [key, value] of phMap) {
      result = result.replaceAll(key, value);
    }
    return result;
  });
}

const ENTITY_MAP = {
  '&quot;': '"',
  '&#39;': "'",
  '&apos;': "'",
  '&amp;': '&',
  '&lt;': '<',
  '&gt;': '>',
};

function decodeEntities(str) {
  let result = str;
  for (const [entity, char] of Object.entries(ENTITY_MAP)) {
    result = result.replaceAll(entity, char);
  }
  return result;
}

async function translateAll() {
  if (!existsSync(CREDENTIALS_PATH)) {
    console.error('❌ google-credentials.json not found');
    process.exit(1);
  }

  const auth = new GoogleAuth({
    keyFile: CREDENTIALS_PATH,
    scopes: ['https://www.googleapis.com/auth/cloud-translation'],
  });
  const authToken = await auth.getAccessToken();

  const enMessages = JSON.parse(readFileSync(SOURCE_FILE, 'utf-8'));
  const flat = flatten(enMessages);

  for (const { out, name } of TARGET_LOCALES) {
    console.log(`\n🌐 Translating to ${name}...`);

    const pathMap = [];

    for (const [path, value] of Object.entries(flat)) {
      if (shouldSkip(path)) continue;

      if (typeof value === 'string') {
        if (value.trim()) {
          pathMap.push({ path, type: 'string' });
        }
      } else if (Array.isArray(value)) {
        value.forEach((item, idx) => {
          if (typeof item === 'string' && item.trim()) {
            pathMap.push({ path, type: 'array', index: idx });
          }
        });
      }
    }

    const stringsToTranslate = pathMap.map(p =>
      p.type === 'string'
        ? flat[p.path]
        : flat[p.path][p.index]
    );

    if (stringsToTranslate.length === 0) {
      console.log(`  ⚠️  Nothing to translate`);
      continue;
    }

    // Protect placeholders before sending
    const { protected: protectedStrings, phMap } = protectPlaceholders(stringsToTranslate);

    const newFlat = { ...flat };
    const BATCH_SIZE = 128;

    for (let i = 0; i < protectedStrings.length; i += BATCH_SIZE) {
      const batch = protectedStrings.slice(i, i + BATCH_SIZE);
      const batchPaths = pathMap.slice(i, i + BATCH_SIZE);

      console.log(`  Batch ${Math.floor(i / BATCH_SIZE) + 1}/${Math.ceil(protectedStrings.length / BATCH_SIZE)}...`);

      const translated = await translateBatch(batch, out, authToken);

      // Restore placeholders in the translated batch
      const restored = restorePlaceholders(translated, phMap);
      const decoded = restored.map(decodeEntities);

      decoded.forEach((text, idx) => {
        const p = batchPaths[idx];

        if (p.type === 'string') {
          newFlat[p.path] = text;
        } else if (p.type === 'array') {
          const arr = [...newFlat[p.path]];
          arr[p.index] = text;
          newFlat[p.path] = arr;
        }
      });
    }

    const result = unflatten(newFlat);
    const outPath = `messages/${out}.json`;
    writeFileSync(outPath, JSON.stringify(result, null, 2) + '\n');
    console.log(`  ✅ Wrote ${outPath} (${stringsToTranslate.length} strings translated)`);
  }

  console.log('\n🎉 All translations complete!');
}

translateAll().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
