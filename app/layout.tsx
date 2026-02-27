import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/navbar/Navbar";
import ThemeWrapper from "@/components/ui/ThemeWrapper";
import ScrollToTopButton from "@/components/ui/ScrollToTop";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://michaelanokam.vercel.app"),

  title: {
    default: "Michael Anokam - Software Engineer",
    template: "%s | Michael Anokam",
  },
  description:
    "Software engineer focused on building fast, accessible, and scalable web applications with modern technologies.",

  keywords: [
    "Software Engineer",
    "Frontend Developer",
    "Backend Developer",
    "Fullstack Developer",
    "TypeScript",
    "Tailwind CSS",
    "React",
    "Next.js",
    "Django",
    "Node.js",
    "PostgreSQL",
    "MongoDB",
    "Portfolio",
    "Web Developer",
    "Remote Software Engineer",
  ],

  authors: [
    { name: "Michael Anokam", url: "https://michaelanokam.vercel.app" },
  ],
  creator: "Michael Anokam",
  publisher: "Michael Anokam",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Michael Anokam - Software Engineer",
    description:
      "Building fast, accessible, and scalable web applications with modern technologies.",
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
      "Building fast, accessible, and scalable web applications with modern technologies.",
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


export const viewport = {
  themeColor: "#057ef6",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="googlebot"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
      </head>
      <body>
        <ThemeWrapper>
          <Navbar />
          {children}
          <ScrollToTopButton />
          <Footer />
        </ThemeWrapper>
      </body>
    </html>
  );
}
