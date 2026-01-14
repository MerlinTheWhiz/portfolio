"use client";

import { useTheme } from "next-themes";
import { LuSun, LuMoon } from "react-icons/lu";

export default function ThemeToggle() {
  const { theme, systemTheme, setTheme } = useTheme();

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <button
      onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
      className="hover:cursor-pointer p-1.5 rounded-full transition-colors  hover:text-text-primary  duration-300 hover:bg-gray-200 dark:hover:bg-white/10"
    >
      {currentTheme === "dark" ? (
        <LuSun className="w-5 h-5 text-white" />
      ) : (
        <LuMoon className="w-5 h-5" />
      )}
    </button>
  );
}
