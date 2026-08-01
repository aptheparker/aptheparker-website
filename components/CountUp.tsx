"use client";

import { useEffect, useRef } from "react";

/** Counts a stat value up from 0 when it enters the viewport (e.g. "10+", "4.05", "2년+"). */
export default function CountUp({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const match = value.match(/^([0-9]+(?:\.[0-9]+)?)(.*)$/);
    if (!match || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.textContent = value;
      return;
    }

    const target = parseFloat(match[1]);
    const suffix = match[2] ?? "";
    const decimals = (match[1].split(".")[1] || "").length;
    const duration = 1400;
    let raf = 0;

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return;
        observer.disconnect();

        let start: number | null = null;
        const step = (t: number) => {
          if (start === null) start = t;
          const p = Math.min(1, (t - start) / duration);
          const eased = 1 - Math.pow(1 - p, 4);
          el.textContent = (target * eased).toFixed(decimals) + suffix;
          if (p < 1) raf = requestAnimationFrame(step);
        };
        raf = requestAnimationFrame(step);
      },
      { threshold: 0.5 },
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value]);

  return <span ref={ref}>{value}</span>;
}
