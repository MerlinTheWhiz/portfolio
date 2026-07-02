"use client";

import { useTheme } from "next-themes";
import { motion, animate } from "framer-motion";
import { LuSun, LuMoon } from "react-icons/lu";
import { useState, useRef, useCallback, useEffect } from "react";
import { createPortal } from "react-dom";

export default function ThemeToggleSlider() {
  const { theme, systemTheme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const isDark = currentTheme === "dark";
  const [animating, setAnimating] = useState(false);
  const [overlay, setOverlay] = useState<{
    bg: string;
    x: number;
    y: number;
  } | null>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  const handleClick = useCallback(() => {
    if (animating) return;

    const btn = btnRef.current;
    if (!btn) return;

    const rect = btn.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    const bg =
      getComputedStyle(document.documentElement)
        .getPropertyValue("--color-background")
        .trim() || (isDark ? "#0a0a0a" : "#f6faff");

    setAnimating(true);
    setOverlay({ bg, x, y });

    requestAnimationFrame(() => {
      setTheme(isDark ? "light" : "dark");
    });
  }, [animating, isDark, setTheme]);

  return (
    <>
      <button
        ref={btnRef}
        onClick={handleClick}
        className="relative w-[86px] h-[40px] rounded-full bg-background-card border border-border-default shadow-lg hover:shadow-accent-primary/20 hover:shadow-md transition-shadow duration-300 cursor-pointer"
        aria-label="Toggle theme"
        disabled={animating}
      >
        <span className="absolute inset-0 flex items-center justify-between px-[11px]">
          <LuSun className={`w-5 h-5 ${isDark ? 'text-gray-400' : 'text-accent-primary'}`} />
          <LuMoon className={`w-5 h-5 ${isDark ? 'text-accent-primary' : 'text-gray-400'}`} />
        </span>
        <motion.span
          className="absolute top-[4px] w-[32px] h-[32px] rounded-full bg-white dark:bg-gray-700 shadow-sm border border-border-default flex items-center justify-center"
          animate={{ x: isDark ? 50 : 4 }}
          transition={{ duration: 1.0, ease: [0.65, 0, 0.35, 1] }}
        >
        {isDark ? (
          <LuMoon className="w-5 h-5 text-accent-primary" />
        ) : (
          <LuSun className="w-5 h-5 text-accent-primary" />
        )}
        </motion.span>
      </button>

      {overlay &&
        typeof document !== "undefined" &&
        createPortal(
          <ThemeReveal
            bg={overlay.bg}
            x={overlay.x}
            y={overlay.y}
            onComplete={() => {
              setAnimating(false);
              setOverlay(null);
            }}
          />,
          document.body,
        )}
    </>
  );
}

function ThemeReveal({
  bg,
  x,
  y,
  onComplete,
}: {
  bg: string;
  x: number;
  y: number;
  onComplete: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const controls = animate(0, 1, {
      duration: 1.0,
      ease: [0.65, 0, 0.35, 1],
      onUpdate: (latest) => {
        const pct = latest * 180;
        el.style.maskImage = `radial-gradient(circle at ${x}px ${y}px, transparent ${pct}%, black ${pct}%)`;
        el.style.webkitMaskImage = `radial-gradient(circle at ${x}px ${y}px, transparent ${pct}%, black ${pct}%)`;
      },
      onComplete,
    });

    return () => controls.stop();
  }, []);

  return (
    <div
      ref={ref}
      className="fixed inset-0 z-[9999] pointer-events-none"
      style={{ backgroundColor: bg }}
    />
  );
}
