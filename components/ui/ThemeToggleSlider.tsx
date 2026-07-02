"use client";

import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { LuSun, LuMoon } from "react-icons/lu";

export default function ThemeToggleSlider() {
  const { theme, systemTheme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const isDark = currentTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative w-[86px] h-[40px] rounded-full bg-background-card border border-border-default shadow-lg hover:shadow-accent-primary/20 hover:shadow-md transition-shadow duration-300 cursor-pointer"
      aria-label="Toggle theme"
    >
      <span className="absolute inset-0 flex items-center justify-between px-[11px]">
        <LuSun className="w-5 h-5 text-amber-400" />
        <LuMoon className="w-5 h-5 text-blue-400" />
      </span>
      <motion.span
        className="absolute top-[4px] w-[32px] h-[32px] rounded-full bg-white dark:bg-gray-700 shadow-sm border border-border-default flex items-center justify-center"
        animate={{ x: isDark ? 50 : 4 }}
        transition={{ type: "spring", stiffness: 200, damping: 35, mass: 1.1 }}
      >
        {isDark ? (
          <LuMoon className="w-5 h-5 text-blue-400" />
        ) : (
          <LuSun className="w-5 h-5 text-amber-500" />
        )}
      </motion.span>
    </button>
  );
}
