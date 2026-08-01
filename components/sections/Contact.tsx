import Reveal from "@/components/Reveal";
import { profile, type SiteContent } from "@/lib/content";

const socials = [
  {
    label: "LinkedIn",
    href: profile.links.linkedin,
    icon: (
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    ),
  },
  {
    label: "GitHub",
    href: profile.links.github,
    icon: (
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    ),
  },
];

export default function Contact({ c }: { c: SiteContent }) {
  const { contact } = c;

  return (
    <section id="contact" className="scroll-mt-20 py-28 md:py-36">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-[36px] bg-[linear-gradient(180deg,#161d29_0%,#191f28_100%)] px-8 py-16 text-center ring-1 ring-white/10 md:px-16 md:py-24">
            <div
              aria-hidden
              className="pointer-events-none absolute -top-32 left-1/2 h-[340px] w-[620px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(49,130,246,0.3),transparent)] blur-2xl"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-40 -left-24 h-[320px] w-[320px] rounded-full bg-[radial-gradient(closest-side,rgba(99,102,241,0.16),transparent)] blur-2xl"
            />

            <div className="relative">
              <p className="text-sm font-bold text-toss-blue md:text-base">{contact.eyebrow}</p>
              <h2 className="mt-4 text-3xl leading-[1.25] font-bold tracking-[-0.02em] text-white md:text-[44px] md:leading-[1.2]">
                {contact.title}
              </h2>
              <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-grey-400 md:text-lg">
                {contact.description}
              </p>

              <div className="mt-10 flex flex-col items-center gap-4">
                <a
                  href={`mailto:${profile.email}`}
                  className="rounded-full bg-toss-blue px-8 py-4 text-base font-semibold text-white shadow-[0_10px_28px_-8px_rgba(49,130,246,0.7)] transition-all hover:bg-toss-blue-strong hover:shadow-[0_12px_32px_-8px_rgba(49,130,246,0.8)] active:scale-[0.98]"
                >
                  {profile.email}
                </a>

                <div className="mt-2 flex gap-3">
                  {socials.map(({ label, href, icon }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/5 text-grey-300 transition-colors hover:border-white/30 hover:bg-white/10 hover:text-white"
                    >
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                        {icon}
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
