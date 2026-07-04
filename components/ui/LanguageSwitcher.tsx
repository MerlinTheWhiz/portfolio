"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useTransition } from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Languages } from "lucide-react";

const languages: { code: string; label: string }[] = [
  { code: "en", label: "English" },
  { code: "es", label: "Español" },
  { code: "fr", label: "Français" },
  { code: "ko", label: "한국어" },
  { code: "ja", label: "日本語" },
  { code: "zh", label: "中文" },
  { code: "de", label: "Deutsch" },
  { code: "hi", label: "हिन्दी" },
  { code: "pt", label: "Português" },
  { code: "ar", label: "العربية" },
];

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  function switchLocale(next: string) {
    startTransition(() => {
      router.replace(pathname, { locale: next });
    });
  }

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button
          className="p-1.5 flex items-center justify-center rounded-full transition-all duration-300 ease-in-out hover:text-text-primary hover:bg-gray-200 dark:hover:bg-white/10 text-gray-500"
          aria-label="Switch language"
        >
          <Languages className="w-5 h-5" />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          align="end"
          sideOffset={8}
          className="z-50 min-w-[140px] rounded-xl border border-border-default bg-background p-1.5 shadow-lg backdrop-blur-md"
        >
          {languages.map((lang) => (
            <DropdownMenu.Item
              key={lang.code}
              onClick={() => switchLocale(lang.code)}
              className={`cursor-pointer rounded-lg px-3 py-2 text-sm transition-colors duration-150 flex items-center gap-2 ${
                locale === lang.code
                  ? "text-accent-primary font-semibold"
                  : "text-text-secondary hover:text-text-primary hover:bg-gray-100 dark:hover:bg-white/5"
              }`}
            >
              {lang.label}
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
