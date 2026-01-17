"use client";

import { useState } from "react";
import Image, { StaticImageData } from "next/image";

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
    <div className="relative inline-block">
      {visible && (
        <div className="absolute top-[110%] left-auto translate-x-0 sm:left-1/2 sm:-translate-x-1/2 max-w-60 w-max px-4 py-3 rounded-2xl text-center text-sm leading-snug bg-white/70 dark:bg-black/70 border border-border-default backdrop-blur-md shadow-lg shadow-black/20 text-text-secondary animate-[pop_.2s_ease-out]">
          {thoughts[index]}

          {/* Thought tail */}
          <span className="absolute -top-2 left-4 sm:left-1/2 sm:-translate-x-1/2 h-3 w-3 rounded-full bg-white/70 dark:bg-black/70 border border-white/30 backdrop-blur-md mb-10" />
        </div>
      )}
      <div className="bg-accent-primary/15 cursor-pointer rounded-full flex items-center justify-center md:hover:scale-105 transition-all duration-300">
        <Image
          src={logo}
          width={45}
          height={45}
          alt="Avatar"
          className="p-1"
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
