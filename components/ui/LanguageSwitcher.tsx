"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useTransition, useState, useRef, useEffect } from "react";
import { Languages, ChevronRight } from "lucide-react";

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

export default function LanguageSwitcher({ variant = "mobile" }: { variant?: "desktop" | "mobile" }) {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  function switchLocale(next: string) {
    startTransition(() => {
      router.replace(pathname, { locale: next });
      setIsOpen(false);
    });
  }

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setIsOpen((o) => !o)}
        className={variant === "desktop"
            ? "flex items-center justify-center gap-1.5 w-[72px] h-10 rounded-full border border-border-default bg-background-card shadow-lg transition-all duration-300 hover:shadow-accent-primary/20 hover:shadow-md cursor-pointer"
            : "p-1.5 flex items-center justify-center rounded-full transition-all duration-300 ease-in-out hover:text-text-primary hover:bg-gray-200 dark:hover:bg-white/10 text-gray-500 cursor-pointer"
          }
          aria-label="Switch language"
        >
          <Languages className={variant === "desktop" ? "w-5 h-5 text-gray-400" : "w-5 h-5"} />
          {variant === "desktop" && (
            <ChevronRight
              className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${
                isOpen ? "rotate-90" : ""
              }`}
            />
          )}
        </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 z-[100] min-w-[140px] rounded-xl border border-border-default bg-background p-1.5 shadow-lg">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => switchLocale(lang.code)}
              className={`w-full text-left rounded-lg px-3 py-2 text-sm transition-colors duration-150 cursor-pointer ${
                locale === lang.code
                  ? "text-accent-primary font-semibold"
                  : "text-text-secondary hover:text-text-primary hover:bg-gray-100 dark:hover:bg-white/5"
              }`}
            >
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
