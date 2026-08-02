"use client";

import { useEffect, useRef } from "react";

const BLOBS = [
  {
    position: "absolute -top-[8%] left-[4%] h-[520px] w-[520px]",
    gradient: "bg-[radial-gradient(closest-side,rgba(49,130,246,0.28),transparent)]",
    speed: -0.06,
    delay: "0s",
  },
  {
    position: "absolute top-[18%] -right-[8%] h-[480px] w-[480px]",
    gradient: "bg-[radial-gradient(closest-side,rgba(139,92,246,0.22),transparent)]",
    speed: 0.05,
    delay: "-8s",
  },
  {
    position: "absolute top-[52%] -left-[8%] h-[460px] w-[460px]",
    gradient: "bg-[radial-gradient(closest-side,rgba(16,185,129,0.18),transparent)]",
    speed: -0.04,
    delay: "-15s",
  },
  {
    position: "absolute top-[38%] right-[16%] h-[380px] w-[380px]",
    gradient: "bg-[radial-gradient(closest-side,rgba(244,114,182,0.16),transparent)]",
    speed: 0.06,
    delay: "-11s",
  },
  {
    position: "absolute -bottom-[12%] right-[2%] h-[500px] w-[500px]",
    gradient: "bg-[radial-gradient(closest-side,rgba(49,130,246,0.24),transparent)]",
    speed: 0.07,
    delay: "-4s",
  },
];

export default function AmbientBackground() {
  const wrapRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const y = window.scrollY;
        wrapRefs.current.forEach((el, i) => {
          if (el) el.style.transform = `translateY(${y * BLOBS[i].speed}px)`;
        });
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {BLOBS.map((blob, i) => (
        <div
          key={i}
          ref={(el) => {
            wrapRefs.current[i] = el;
          }}
          className={blob.position}
        >
          <div
            className={`animate-drift h-full w-full rounded-full blur-3xl ${blob.gradient}`}
            style={{ animationDelay: blob.delay }}
          />
        </div>
      ))}
    </div>
  );
}
