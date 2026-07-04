import type { ReactNode } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { routing, type Locale } from "@/i18n/routing";
import Navbar from "@/components/layout/navbar/Navbar";
import ThemeWrapper from "@/components/ui/ThemeWrapper";
import ScrollToTopButton from "@/components/ui/ScrollToTop";
import Footer from "@/components/layout/Footer";
import CursorGlow from "@/components/ui/CursorGlow";
import Preloader from "@/components/ui/Preloader";
import { Toaster } from "sonner";
import { ReactLenis } from "lenis/react";

const rtlLocales: Locale[] = ["ar"];

type Props = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  const t = await getTranslations({ locale, namespace: "metadata" });

  const ogLocaleMap: Record<string, string> = {
    en: "en_US",
    es: "es_ES",
    fr: "fr_FR",
    ko: "ko_KR",
    ja: "ja_JP",
    zh: "zh_CN",
    de: "de_DE",
    hi: "hi_IN",
    pt: "pt_BR",
    ar: "ar_SA",
  };

  return {
    metadataBase: new URL("https://michaelanokam.vercel.app"),
    title: {
      default: t("title"),
      template: t("titleTemplate"),
    },
    description: t("description"),
    keywords: t("keywords"),
    authors: [{ name: t("author"), url: "https://michaelanokam.vercel.app" }],
    creator: t("author"),
    publisher: t("author"),
    robots: { index: true, follow: true },
    openGraph: {
      title: t("ogTitle"),
      description: t("ogDescription"),
      url: "https://michaelanokam.vercel.app",
      siteName: t("ogSiteName"),
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: t("ogImageAlt"),
        },
      ],
      locale: ogLocaleMap[locale] || "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: t("twitterTitle"),
      description: t("twitterDescription"),
      creator: "@madebymichael_",
      images: ["/og-image.png"],
    },
    icons: {
      icon: "/favicon.ico",
      shortcut: [
        { url: "/favicon-16x16.png", sizes: "16x16" },
        { url: "/favicon-32x32.png", sizes: "32x32" },
        { url: "/android-chrome-192x192.png", sizes: "192x192" },
        { url: "/android-chrome-512x512.png", sizes: "512x512" },
      ],
      apple: "/apple-touch-icon.png",
    },
  };
}

export const viewport = {
  themeColor: "#057ef6",
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  const messages = await getMessages();
  const isRtl = rtlLocales.includes(locale as Locale);

  return (
    <html lang={locale} dir={isRtl ? "rtl" : "ltr"}>
      <head>
        <meta
          name="googlebot"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
      </head>
      <body>
        <ReactLenis root>
          <ThemeWrapper>
            <Preloader />
            <NextIntlClientProvider messages={messages}>
              <Navbar />
              {children}
              <CursorGlow />
              <Toaster position="top-right" richColors />
              <ScrollToTopButton />
              <Footer />
            </NextIntlClientProvider>
          </ThemeWrapper>
        </ReactLenis>
      </body>
    </html>
  );
}
