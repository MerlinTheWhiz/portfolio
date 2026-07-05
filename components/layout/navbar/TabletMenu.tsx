"use client";

import { useState, useRef, useEffect } from "react";
import { EllipsisVertical } from "lucide-react";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";
import ThemeToggleSlider from "@/components/ui/ThemeToggleSlider";

export default function TabletMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setIsOpen((o) => !o)}
        className="flex items-center justify-center w-10 h-10 rounded-full border border-border-default bg-background-card shadow-lg transition-all duration-300 hover:shadow-accent-primary/20 hover:shadow-md cursor-pointer"
        aria-label="More options"
      >
        <EllipsisVertical className="w-5 h-5 text-gray-400" />
      </button>
      {isOpen && (
        <div className="absolute right-0 top-full mt-2 z-50 flex flex-col items-center gap-3 rounded-xl border border-border-default bg-background p-3 shadow-lg min-w-[140px]">
          <ThemeToggleSlider />
          <LanguageSwitcher variant="desktop" />
        </div>
      )}
    </div>
  );
}
