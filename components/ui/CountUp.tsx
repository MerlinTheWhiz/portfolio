"use client";

import { useEffect, useRef, useState } from "react";

interface CountUpProps {
  target: number;
  duration?: number;
  delay?: number;
}

export default function CountUp({
  target,
  duration = 1500,
  delay = 0,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setTimeout(() => setStarted(true), delay);
        observer.disconnect();
      }
    });

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [delay]);

  useEffect(() => {
    if (!started) return;

    let startTime: number | null = null;

    function animate(time: number) {
      if (!startTime) startTime = time;

      const elapsed = time - startTime;
      const rawProgress = Math.min(elapsed / duration, 1);
      const progress = 1 - Math.pow(1 - rawProgress, 3);

      setValue(Math.floor(progress * target));

      if (rawProgress < 1) requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
  }, [started, target, duration]);

  return <span ref={ref}>{value.toLocaleString()}</span>;
}
