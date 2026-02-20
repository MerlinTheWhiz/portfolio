"use client";

import { useEffect, useRef } from "react";

const HeroCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const posRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const heroSection = document.getElementById("hero");
    if (!heroSection) return;

    // Store last known position
    const onGlobalMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY };
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    const onEnter = () => {
      cursor.style.opacity = "1";
    };
    const onLeave = () => {
      cursor.style.opacity = "0";
    };

    document.addEventListener("mousemove", onGlobalMove);
    heroSection.addEventListener("mouseenter", onEnter);
    heroSection.addEventListener("mouseleave", onLeave);

    // Use WeakMap to store handlers for cleanup
    const handlerMap = new WeakMap<
      HTMLElement,
      { enter: () => void; leave: () => void }
    >();

    const interactiveEls = Array.from(
      heroSection.querySelectorAll<HTMLElement>("button, a, span"),
    );

    interactiveEls.forEach((el) => {
      const enter = () => {
        cursor.classList.add("scale-125");
        cursor.classList.add("no-transition");
      };
      const leave = () => {
        cursor.classList.remove("scale-125");
        cursor.classList.remove("no-transition");
      };

      handlerMap.set(el, { enter, leave });

      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
    });

    // Handle HeroHoverRevealText - hide cursor on hover
    const hoverRevealParent = heroSection.querySelector<HTMLElement>(
      ".relative.inline-block",
    );

    if (hoverRevealParent) {
      const enter = () => {
        cursor.style.opacity = "0";
      };
      const leave = () => {
        cursor.style.opacity = "1";
      };

      handlerMap.set(hoverRevealParent, { enter, leave });
      hoverRevealParent.addEventListener("mouseenter", enter);
      hoverRevealParent.addEventListener("mouseleave", leave);
    }

    return () => {
      document.removeEventListener("mousemove", onGlobalMove);
      heroSection.removeEventListener("mouseenter", onEnter);
      heroSection.removeEventListener("mouseleave", onLeave);

      interactiveEls.forEach((el) => {
        const handlers = handlerMap.get(el);
        if (handlers) {
          el.removeEventListener("mouseenter", handlers.enter);
          el.removeEventListener("mouseleave", handlers.leave);
        }
      });
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed w-6 h-6 rounded-full bg-accent-primary pointer-events-none z-50 opacity-0"
      style={{
        left: 0,
        top: 0,
        transform: "translate(-50%, -50%)",
        transition: "opacity 0.2s ease",
      }}
    />
  );
};

export default HeroCursor;
