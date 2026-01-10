"use client";

import { ThemeProvider } from "next-themes";
import { ReactNode, useState, useEffect } from "react";

export default function ThemeWrapper({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);

  // Only render after the component mounts on the client
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      enableColorScheme
    >
      {children}
    </ThemeProvider>
  );
}
