import Image from "next/image";
import Reveal from "@/components/Reveal";
import SocialLinks from "@/components/SocialLinks";
import { profile, type SiteContent } from "@/lib/content";

export default function Contact({ c }: { c: SiteContent }) {
  const { contact } = c;

  return (
    <section id="contact" className="scroll-mt-20 py-28 md:py-36">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-[36px] bg-[linear-gradient(180deg,rgba(22,29,41,0.9)_0%,rgba(25,31,40,0.94)_100%)] px-8 py-16 text-center ring-1 ring-white/15 backdrop-blur-2xl md:px-16 md:py-24">
            <div
              aria-hidden
              className="pointer-events-none absolute -top-32 left-1/2 h-[340px] w-[620px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(49,130,246,0.3),transparent)] blur-2xl"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-40 -left-24 h-[320px] w-[320px] rounded-full bg-[radial-gradient(closest-side,rgba(99,102,241,0.16),transparent)] blur-2xl"
            />
            <div aria-hidden className="border-beam" />

            <div className="relative">
              <div className="mx-auto mb-7 h-20 w-20 overflow-hidden rounded-full ring-2 ring-white/25 shadow-[0_12px_32px_-8px_rgba(0,0,0,0.5)]">
                <Image
                  src="/profile.png"
                  alt={profile.name}
                  width={160}
                  height={160}
                  className="h-full w-full object-cover object-top"
                />
              </div>

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
                  className="rounded-full bg-toss-blue px-8 py-4 text-base font-semibold text-white shadow-[0_10px_28px_-8px_rgba(49,130,246,0.7)] transition-all hover:-translate-y-0.5 hover:bg-toss-blue-strong hover:shadow-[0_14px_36px_-8px_rgba(49,130,246,0.8)] active:scale-[0.98]"
                >
                  {profile.email}
                </a>

                <div className="mt-2">
                  <SocialLinks variant="dark" />
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
