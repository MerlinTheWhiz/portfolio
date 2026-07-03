"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import logo from "@/public/logo.png";

export default function Preloader() {
  const [visible, setVisible] = useState(true);
  const [phase, setPhase] = useState<"enter" | "breathe" | "wipe">("enter");
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (phase !== "enter") return;
    const t = setTimeout(() => setPhase("breathe"), 300);
    return () => clearTimeout(t);
  }, [phase]);

  useEffect(() => {
    if (phase !== "breathe") return;
    const t = setTimeout(() => setPhase("wipe"), 1800);
    return () => clearTimeout(t);
  }, [phase]);

  useEffect(() => {
    if (phase !== "wipe" || !overlayRef.current) return;

    const el = overlayRef.current;
    let start: number | null = null;
    const duration = 1000;

    function animate(timestamp: number) {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const p = Math.min(elapsed / duration, 1);

      const ease =
        p < 0.5
          ? 4 * p * p * p
          : 1 - Math.pow(-2 * p + 2, 3) / 2;

      const radius = ease * 100;
      const mask = `radial-gradient(circle at 50% 50%, transparent ${radius}%, black ${Math.min(radius + 0.01, 100)}%)`;
      el.style.maskImage = mask;
      el.style.webkitMaskImage = mask;

      if (p < 1) {
        requestAnimationFrame(animate);
      } else {
        setVisible(false);
      }
    }

    requestAnimationFrame(animate);
  }, [phase]);

  if (!visible) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-background/10 backdrop-blur-md transition-opacity duration-500"
    >
      <div className="relative" style={{ width: 160, height: 160 }}>
        {/* Rotating ring */}
        <span
          className="absolute inset-0 rounded-full border border-accent-primary/30"
          style={{
            animation:
              phase === "enter"
                ? "none"
                : phase === "wipe"
                  ? "preloader-expand 0.8s cubic-bezier(0.65, 0, 0.35, 1) forwards"
                  : "preloader-ring-rotate 4s linear infinite",
          }}
        />

        {/* Orbiting planet */}
        <span
          className="absolute rounded-full bg-accent-primary shadow-[0_0_6px_#057ef6]"
          style={{
            width: 10,
            height: 10,
            top: -5,
            left: "50%",
            marginLeft: -5,
            transformOrigin: "5px 85px",
            animation:
              phase === "breathe"
                ? "preloader-orbit 4s linear infinite"
                : "none",
            opacity: phase === "wipe" ? 0 : 1,
            transition: "opacity 0.4s ease",
          }}
        />

        {/* Logo centered */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="rounded-full bg-accent-primary/10 overflow-hidden"
            style={{
              width: 80,
              height: 80,
              opacity: phase === "enter" ? 0 : phase === "wipe" ? 0 : 1,
              transform:
                phase === "enter"
                  ? "scale(0.8)"
                  : phase === "wipe"
                    ? "scale(1.3)"
                    : "scale(1)",
              transition:
                "opacity 0.4s ease, transform 0.6s cubic-bezier(0.65, 0, 0.35, 1)",
            }}
          >
            <div
              style={{
                animation:
                  phase === "breathe"
                    ? "preloader-breathe 2.4s ease-in-out infinite"
                    : "none",
              }}
            >
              <Image
                src={logo}
                alt=""
                width={80}
                height={80}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
