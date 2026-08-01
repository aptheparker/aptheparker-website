"use client";

import { useEffect } from "react";

/** Tracks the cursor over any `.card` and feeds --mx/--my for the spotlight glow. */
export default function PointerGlow() {
  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches) return;

    const onMove = (e: PointerEvent) => {
      const card = (e.target as Element | null)?.closest?.(".card") as HTMLElement | null;
      if (!card) return;
      const rect = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${e.clientX - rect.left}px`);
      card.style.setProperty("--my", `${e.clientY - rect.top}px`);
    };

    document.addEventListener("pointermove", onMove, { passive: true });
    return () => document.removeEventListener("pointermove", onMove);
  }, []);

  return null;
}
