import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/navbar/Navbar";
import ThemeWrapper from "@/components/ui/ThemeWrapper";
import ScrollToTopButton from "@/components/ui/ScrollToTop";

export const metadata: Metadata = {
  title: {
    default: "Michael Anokam - Software Engineer",
    template: "%s | Michael Anokam",
  },
  description:
    "Software engineer focused on building fast, accessible, and scalable web applications with modern frontend technologies.",
  
  keywords: [
    "Software Engineer",
    "Frontend Developer",
    "React",
    "Next.js",
    "Portfolio",
    "Web Developer",
  ],

  authors: [{ name: "Michael Anokam", url: "https://michaelanokam.vercel.app" }],
  creator: "Michael Anokam",
  publisher: "Michael Anokam",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  openGraph: {
    title: "Michael Anokam - Software Engineer",
    description:
      "Building fast, accessible, and scalable web applications with modern frontend technologies.",
    url: "https://michaelanokam.vercel.app",
    siteName: "Michael Anokam Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Michael Anokam Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Michael Anokam - Software Engineer",
    description:
      "Building fast, accessible, and scalable web applications with modern frontend technologies.",
    creator: "@YourTwitterHandle",
    images: ["/og-image.png"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
    android: "/android-chrome-192x192.png",
    android512: "/android-chrome-512x512.png",
  },

  themeColor: "#057ef6",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeWrapper>
          <Navbar />
          {children}
          <ScrollToTopButton />
        </ThemeWrapper>
      </body>
    </html>
  );
}
