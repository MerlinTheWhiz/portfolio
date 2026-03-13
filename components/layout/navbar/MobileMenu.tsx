"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { LuMenu, LuX, LuGithub, LuLinkedin, LuDownload } from "react-icons/lu";
import { BsTwitterX } from "react-icons/bs";

const MobileMenu = () => {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const drawer = (
    <div
      className={`fixed top-20 left-4 right-4 z-40
        rounded-2xl bg-transparent backdrop-blur-md mx-2
        shadow-lg shadow-black/10 p-4 transition-all duration-200
        ${open ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}
      `}
    >
      <div className="flex justify-center gap-6 text-gray-600">
        <a
          href="https://github.com/MerlinTheWhiz"
          onClick={() => setOpen(false)}
          target="_blank"
          rel="noopener noreferrer"
          className="p-1.5"
        >
          <LuGithub className="w-5 h-5" />
        </a>
        <a
          href="https://www.linkedin.com/in/michaelanokamcodes/"
          onClick={() => setOpen(false)}
          target="_blank"
          rel="noopener noreferrer"
          className="p-1.5"
        >
          <LuLinkedin className="w-5 h-5" />
        </a>
        <a
          href="https://x.com/madebymichael_"
          onClick={() => setOpen(false)}
          target="_blank"
          rel="noopener noreferrer"
          className="p-1.5"
        >
          <BsTwitterX className="w-5 h-5" />
        </a>
      </div>
      <div className="flex justify-between items-center mt-6">
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
  );

  return (
    <div className="sm:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="pr-2 py-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 dark:text-white transition"
        aria-label="Toggle menu"
      >
        {open ? <LuX className="w-5 h-5" /> : <LuMenu className="w-5 h-5" />}
      </button>

      {mounted && createPortal(drawer, document.body)}
    </div>
  );
};

export default MobileMenu;
