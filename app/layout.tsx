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
