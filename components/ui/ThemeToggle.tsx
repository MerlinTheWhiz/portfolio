"use client";

import { useTheme } from "next-themes";
import { LuSun, LuMoon } from "react-icons/lu";
import { useState, useCallback } from "react";

export default function ThemeToggle() {
  const { theme, systemTheme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const isDark = currentTheme === "dark";
  const [animating, setAnimating] = useState(false);

  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      if (animating) return;
      setAnimating(true);

      const x = e.clientX;
      const y = e.clientY;

      if (document.startViewTransition) {
        const style = document.createElement("style");
        style.textContent = `
          @keyframes wipe-new {
            from { clip-path: circle(0% at ${x}px ${y}px); }
            to { clip-path: circle(150% at ${x}px ${y}px); }
          }
        `;
        document.head.appendChild(style);

        const transition = document.startViewTransition(() => {
          setTheme(isDark ? "light" : "dark");
        });

        transition.finished.then(() => {
          style.remove();
          setAnimating(false);
        });
      } else {
        setTheme(isDark ? "light" : "dark");
        setAnimating(false);
      }
    },
    [animating, isDark, setTheme],
  );

  return (
    <button
      onClick={handleClick}
      className="hover:cursor-pointer p-1.5 rounded-full transition-colors hover:text-text-primary duration-300 hover:bg-gray-200 dark:hover:bg-white/10"
    >
      {isDark ? (
        <LuSun className="w-5 h-5" />
      ) : (
        <LuMoon className="w-5 h-5" />
      )}
    </button>
  );
}
