"use client";

import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      requestAnimationFrame(() => {
        el.style.background = `radial-gradient(600px circle at ${pos.current.x}px ${pos.current.y}px, rgba(5,126,246,0.06), transparent 40%)`;
      });
    };

    const onLeave = () => {
      el.style.background = "none";
    };

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="fixed inset-0 pointer-events-none z-10 dark:opacity-100 opacity-70"
    />
  );
}
