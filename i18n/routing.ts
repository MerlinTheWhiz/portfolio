import { defineRouting } from "next-intl/routing";

export const locales = [
  "en",
  "es",
  "fr",
  "ko",
  "ja",
  "zh",
  "de",
  "hi",
  "pt",
  "ar",
] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale = "en" as const;

export const routing = defineRouting({
  locales,
  defaultLocale,
  localePrefix: "always",
});
