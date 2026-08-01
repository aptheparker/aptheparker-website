"use client";

import { useEffect, useRef } from "react";

const BLOBS = [
  {
    position: "absolute -top-[12%] left-[6%] h-[680px] w-[680px]",
    gradient: "bg-[radial-gradient(closest-side,rgba(49,130,246,0.3),transparent)]",
    speed: -0.06,
    delay: "0s",
  },
  {
    position: "absolute top-[24%] -right-[14%] h-[620px] w-[620px]",
    gradient: "bg-[radial-gradient(closest-side,rgba(99,102,241,0.24),transparent)]",
    speed: 0.05,
    delay: "-8s",
  },
  {
    position: "absolute top-[54%] -left-[12%] h-[580px] w-[580px]",
    gradient: "bg-[radial-gradient(closest-side,rgba(45,212,191,0.22),transparent)]",
    speed: -0.04,
    delay: "-15s",
  },
  {
    position: "absolute -bottom-[18%] right-[4%] h-[640px] w-[640px]",
    gradient: "bg-[radial-gradient(closest-side,rgba(49,130,246,0.26),transparent)]",
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
