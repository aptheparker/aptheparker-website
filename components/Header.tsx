"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { locales, localeNames, type Locale } from "@/lib/i18n";
import type { SiteContent } from "@/lib/content/types";

function GlobeIcon() {
  return (
    <svg className="h-[17px] w-[17px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} aria-hidden>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" strokeLinecap="round" />
      <path d="M12 3c2.5 2.7 3.8 5.8 3.8 9s-1.3 6.3-3.8 9c-2.5-2.7-3.8-5.8-3.8-9S9.5 5.7 12 3z" strokeLinejoin="round" />
    </svg>
  );
}

export default function Header({
  locale,
  nav,
}: {
  locale: Locale;
  nav: SiteContent["nav"];
}) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!langOpen && !open) return;
    const onDown = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setLangOpen(false);
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [langOpen, open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-white/55 backdrop-blur-2xl backdrop-saturate-150 transition-shadow duration-300 ${
        scrolled ? "shadow-[0_1px_0_0_rgba(255,255,255,0.65),0_12px_32px_-12px_rgba(25,31,40,0.12)]" : ""
      }`}
    >
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <Link
          href={`/${locale}`}
          onClick={() => setOpen(false)}
          className="text-[17px] font-extrabold tracking-tight text-grey-900 transition-opacity hover:opacity-70"
        >
          Jihwan Park<span className="text-toss-blue">.</span>
        </Link>

        {/* Desktop */}
        <nav className="hidden items-center gap-0.5 md:flex">
          {nav.links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="rounded-full px-3.5 py-2 text-[15px] font-medium text-grey-700 transition-colors hover:bg-grey-100 hover:text-grey-900"
            >
              {label}
            </a>
          ))}

          <div ref={langRef} className="relative ml-2">
            <button
              type="button"
              onClick={() => setLangOpen(!langOpen)}
              aria-haspopup="listbox"
              aria-expanded={langOpen}
              className="flex items-center gap-1.5 rounded-full px-3.5 py-2 text-[14px] font-semibold text-grey-700 transition-colors hover:bg-grey-100 hover:text-grey-900"
            >
              <GlobeIcon />
              {localeNames[locale]}
              <svg
                className={`h-3.5 w-3.5 text-grey-400 transition-transform duration-300 ${langOpen ? "rotate-180" : ""}`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.2}
                aria-hidden
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
              </svg>
            </button>

            <div
              inert={!langOpen}
              className={`pop-panel absolute top-full right-0 mt-2 w-40 rounded-2xl border border-white/70 bg-white/80 p-1.5 shadow-lift backdrop-blur-2xl ${
                langOpen ? "open" : ""
              }`}
            >
              {locales.map((loc, i) => (
                <Link
                  key={loc}
                  href={`/${loc}`}
                  onClick={() => setLangOpen(false)}
                  style={{ transitionDelay: langOpen ? `${i * 35 + 50}ms` : "0ms" }}
                  className={`menu-item flex items-center justify-between rounded-xl px-3.5 py-2.5 text-[14px] font-semibold ${
                    loc === locale
                      ? "bg-white/70 text-toss-blue"
                      : "text-grey-700 hover:bg-white/70 hover:text-grey-900"
                  }`}
                >
                  {localeNames[loc]}
                  {loc === locale && (
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} aria-hidden>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </Link>
              ))}
            </div>
          </div>

          <a
            href="#contact"
            className="ml-2 rounded-full bg-toss-blue px-5 py-2.5 text-[15px] font-semibold text-white shadow-[0_6px_16px_-6px_rgba(49,130,246,0.55)] transition-all hover:-translate-y-0.5 hover:bg-toss-blue-strong hover:shadow-[0_10px_24px_-6px_rgba(49,130,246,0.6)] active:scale-[0.97]"
          >
            {nav.contact}
          </a>
        </nav>

        {/* Mobile hamburger — morphs into X */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="relative flex h-10 w-10 items-center justify-center rounded-full text-grey-700 transition-colors hover:bg-grey-100 md:hidden"
        >
          <span
            className={`ham-bar ${
              open ? "top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45" : "top-[13px] -translate-x-1/2"
            }`}
          />
          <span
            className={`ham-bar top-1/2 -translate-x-1/2 -translate-y-1/2 ${open ? "scale-x-0 opacity-0" : ""}`}
          />
          <span
            className={`ham-bar ${
              open ? "top-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-45" : "top-[25px] -translate-x-1/2"
            }`}
          />
        </button>
      </div>

      {/* Mobile menu — animated collapse with staggered items */}
      <div className={`collapse-grid md:hidden ${open ? "open" : ""}`}>
        <div className="collapse-inner" inert={!open}>
          <nav className="border-t border-white/60 bg-white/85 px-6 pt-2 pb-6 backdrop-blur-2xl">
            {nav.links.map(({ href, label }, i) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                style={{ transitionDelay: open ? `${i * 40 + 80}ms` : "0ms" }}
                className="menu-item block rounded-xl px-3 py-3 text-base font-medium text-grey-800 hover:bg-white/70"
              >
                {label}
              </a>
            ))}

            <div
              className="menu-item mt-4 border-t border-white/60 pt-4"
              style={{ transitionDelay: open ? `${nav.links.length * 40 + 100}ms` : "0ms" }}
            >
              <p className="flex items-center gap-2 px-3 text-[13px] font-semibold text-grey-500">
                <GlobeIcon />
                Language
              </p>
              <div className="mt-3 flex gap-2 px-3">
                {locales.map((loc) => (
                  <Link
                    key={loc}
                    href={`/${loc}`}
                    onClick={() => setOpen(false)}
                    className={`rounded-full px-4 py-2 text-sm font-semibold transition-all active:scale-95 ${
                      loc === locale
                        ? "bg-grey-900 text-white"
                        : "chip text-grey-600 hover:text-grey-900"
                    }`}
                  >
                    {localeNames[loc]}
                  </Link>
                ))}
              </div>
            </div>

            <a
              href="#contact"
              onClick={() => setOpen(false)}
              style={{ transitionDelay: open ? `${nav.links.length * 40 + 160}ms` : "0ms" }}
              className="menu-item mt-5 block rounded-full bg-toss-blue px-5 py-3 text-center text-base font-semibold text-white shadow-[0_6px_16px_-6px_rgba(49,130,246,0.55)] hover:bg-toss-blue-strong active:scale-[0.98]"
            >
              {nav.contact}
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
