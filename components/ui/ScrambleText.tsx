"use client";

import { useState, useEffect, useRef } from "react";

const chars = "!<>-_\\/[]{}—=+*^?#________";

interface ScrambleTextProps {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "span" | "p";
}

export default function ScrambleText({
  text,
  className = "",
  as: Tag = "span",
}: ScrambleTextProps) {
  const [display, setDisplay] = useState(text);
  const [revealed, setRevealed] = useState(false);
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !revealed) {
          setRevealed(true);
          let iteration = 0;
          const total = text.length * 2 + 15;

          const id = window.setInterval(() => {
            iteration++;
            setDisplay(
              text
                .split("")
                .map((char, i) => {
                  if (char === " ") return " ";
                  if (i < iteration / 2) return text[i];
                  return chars[Math.floor(Math.random() * chars.length)];
                })
                .join(""),
            );

            if (iteration >= total) {
              window.clearInterval(id);
              setDisplay(text);
            }
          }, 35);
        }
      },
      { threshold: 0.5 },
    );

    const el = ref.current;
    if (el) observer.observe(el);

    return () => observer.disconnect();
  }, [text, revealed]);

  const Component = Tag;
  return (
    <Component ref={ref} className={className}>
      {display}
    </Component>
  );
}
