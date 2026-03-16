"use client";

import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

type Props = {
  logo: string | StaticImageData;
};

const thoughts = [
  "Hire me so I can feed my pet cat 🐈",
  "Hire me and get free dance lessons (I'll break it down hehe) 💃",
  "Hire me and I promise to buy a yacht and make it open source 😁",
  "Hire me so I can become world president 🌍 and stop world hunger",
  "Seriously… still reading my thoughts? Hire me already! 😅",
];

export default function ThoughtAvatar({ logo }: Props) {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(false);

  const advance = () => {
    setIndex((i) => (i + 1) % thoughts.length);
  };

  return (
    <div className="relative inline-block shrink-0 z-10">
      {visible && (
        <>
          {/* Small dot */}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.15, delay: 0.1 }}
            className="absolute left-1/2 -translate-x-1/2 sm:left-[calc(100%-1rem)] sm:translate-x-0 top-[calc(110%-1.25rem)] sm:top-[calc(95%-1.25rem)] z-20 h-3 w-3 rounded-full bg-white/70 dark:bg-black/70 border border-white/30 backdrop-blur-md"
          />
          {/* Big dot */}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.15, delay: 0.25 }}
            className="absolute left-1/2 -translate-x-1/2 sm:left-[calc(100%-0.25rem)] sm:translate-x-0 top-[calc(110%-0.75rem)] sm:top-[calc(95%-0.75rem)] z-20 h-4 w-4 rounded-full bg-white/70 dark:bg-black/70 border border-white/30 backdrop-blur-md"
          />
          {/* Bubble */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2, delay: 0.4 }}
            className="absolute z-20 top-[110%] sm:top-[calc(95%-0.25rem)] sm:left-1/1 sm:translate-x-0 left-1/2 -translate-x-1/2 max-w-60 w-max px-4 py-3 rounded-2xl text-center text-sm sm:text-base leading-snug bg-white/70 dark:bg-black/70 border border-white/30 backdrop-blur-md shadow-lg shadow-black/20 text-text-secondary"
          >
            {thoughts[index]}
          </motion.div>
        </>
      )}
      <div className="cursor-pointer rounded-full flex items-center justify-center md:hover:scale-105 transition-all duration-300">
        <Image
          src={logo}
          width={96}
          height={96}
          alt="Profile"
          className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full"
          onMouseEnter={() => {
            setVisible(true);
            advance();
          }}
          onMouseLeave={() => setVisible(false)}
          onClick={() => {
            setVisible(true);
            advance();
          }}
        />
      </div>
    </div>
  );
}
