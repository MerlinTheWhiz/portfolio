import { readFileSync, writeFileSync, existsSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const messagesDir = join(__dirname, "..", "messages");

const locales = ["en", "es", "fr", "ko", "ja", "zh", "de", "hi", "pt", "ar"];

const enContent = readFileSync(join(messagesDir, "en.json"), "utf-8");

for (const locale of locales) {
  if (locale === "en") continue;
  const filePath = join(messagesDir, `${locale}.json`);
  if (!existsSync(filePath)) {
    writeFileSync(filePath, enContent, "utf-8");
    console.log(`Created ${locale}.json`);
  } else {
    console.log(`Skipped ${locale}.json (already exists)`);
  }
}
