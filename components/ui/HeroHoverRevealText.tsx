"use client";

import { useState, useRef } from "react";

export default function HoverRevealText() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const textRef = useRef<HTMLHeadingElement>(null);

  const radius = 100;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setPosition({ x, y });

    if (textRef.current) {
      const textRect = textRef.current.getBoundingClientRect();
      // Check if cursor is inside text bounding box
      const inside =
        e.clientX >= textRect.left &&
        e.clientX <= textRect.right &&
        e.clientY >= textRect.top &&
        e.clientY <= textRect.bottom;

      setHovered(inside);
    }
  };

  return (
    <div
      className="relative inline-block cursor-pointer"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Base Text */}
      <h1
        ref={textRef}
        className="text-5xl text-text-primary dark:text-text-primary sm:text-6xl md:text-7xl lg:text-8xl font-bold relative z-10"
        style={{
          WebkitMaskImage: hovered
            ? `radial-gradient(circle ${radius}px at ${position.x}px ${position.y}px, transparent 100%, black 100%)`
            : "none",
          maskImage: hovered
            ? `radial-gradient(circle ${radius}px at ${position.x}px ${position.y}px, transparent 100%, black 100%)`
            : "none",
        }}
      >
        Michael Anokam
      </h1>

      {/* Hover Circle */}
      {hovered && (
        <div
          className="absolute pointer-events-none rounded-full"
          style={{
            width: radius * 2,
            height: radius * 2,
            left: position.x - radius,
            top: position.y - radius,
            backgroundColor: "#057ef6",
            opacity: 1,
            zIndex: 5,
          }}
        />
      )}

      {/* Reveal Text */}
      <h1
        className="absolute font-cinzel inset-0 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold pointer-events-none text-white dark:text-black z-20"
        style={{
          clipPath: hovered
            ? `circle(${radius}px at ${position.x}px ${position.y}px)`
            : "circle(0px at 0 0)",
        }}
      >
        MerlinTheWhiz
      </h1>
    </div>
  );
}
