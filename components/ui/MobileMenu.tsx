"use client";

import { useState } from "react";
import { LuMenu, LuX, LuGithub, LuLinkedin, LuDownload } from "react-icons/lu";
import { BsTwitterX } from "react-icons/bs";
import ThemeToggle from "../ui/ThemeToggle";

const MobileMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="sm:hidden">
      {/* Toggle button */}
      <button
        onClick={() => setOpen(!open)}
        className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/80 transition"
        aria-label="Toggle menu"
      >
        {open ? <LuX className="w-5 h-5" /> : <LuMenu className="w-5 h-5" />}
      </button>

      {/* Menu */}
      <div
        className={`absolute top-full mt-3 left-0 right-0
          rounded-2xl bg-background pt-6 backdrop-blur-lg border border-border-default
          shadow-xl p-4 transition-all duration-200
          ${
            open
              ? "opacity-100 scale-100"
              : "opacity-0 scale-95 pointer-events-none"
          }
        `}
      >
        <div className="flex justify-center gap-6 text-gray-600">
          <LuGithub className="w-5 h-5 m-1.5" />
          <LuLinkedin className="w-5 h-5 m-1.5" />
          <BsTwitterX className="w-5 h-5 m-1.5" />
          <div className="p-1.5 flex items-center justify-center rounded-full bg-gray-200 dark:bg-white/10">
            <ThemeToggle />
          </div>
        </div>
        <div className="flex justify-between items-center mt-4">
          <a
            href="/resume.pdf"
            download
            className="flex items-center justify-center gap-2 px-4 w-full py-2 rounded-full bg-accent-primary text-white text-sm font-semibold"
          >
            <LuDownload className="w-4 h-4" />
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
