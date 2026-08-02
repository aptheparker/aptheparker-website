import { profile } from "@/lib/content";

const items = [
  {
    label: "Email",
    href: `mailto:${profile.email}`,
    external: false,
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 6.75A2.25 2.25 0 0 1 6 4.5h12a2.25 2.25 0 0 1 2.25 2.25v10.5A2.25 2.25 0 0 1 18 19.5H6a2.25 2.25 0 0 1-2.25-2.25V6.75zm.75.75 6.72 5.04a1.5 1.5 0 0 0 1.86 0l6.72-5.04"
      />
    ),
    stroke: true,
  },
  {
    label: "LinkedIn",
    href: profile.links.linkedin,
    external: true,
    icon: (
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    ),
    stroke: false,
  },
  {
    label: "GitHub",
    href: profile.links.github,
    external: true,
    icon: (
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    ),
    stroke: false,
  },
];

export default function SocialLinks({ variant }: { variant: "light" | "dark" }) {
  const base =
    "flex h-11 w-11 items-center justify-center rounded-full transition-all hover:scale-110 active:scale-95";
  const styles =
    variant === "light"
      ? "border border-white/75 bg-white/50 text-grey-600 backdrop-blur-lg hover:bg-white/85 hover:text-grey-900"
      : "border border-white/15 bg-white/5 text-grey-300 hover:border-white/30 hover:bg-white/10 hover:text-white";

  return (
    <div className="flex gap-3">
      {items.map(({ label, href, external, icon, stroke }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          className={`${base} ${styles}`}
        >
          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            aria-hidden
            {...(stroke
              ? { fill: "none", stroke: "currentColor", strokeWidth: 1.7 }
              : { fill: "currentColor" })}
          >
            {icon}
          </svg>
        </a>
      ))}
    </div>
  );
}
