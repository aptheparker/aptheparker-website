import Image from "next/image";
import CountUp from "@/components/CountUp";
import SocialLinks from "@/components/SocialLinks";
import { profile, type SiteContent } from "@/lib/content";

function Lines({ text }: { text: string }) {
  const lines = text.split("\n");
  return (
    <>
      {lines.map((line, i) => (
        <span key={i}>
          {line}
          {i < lines.length - 1 && <br />}
        </span>
      ))}
    </>
  );
}

export default function Hero({ c }: { c: SiteContent }) {
  const { hero } = c;

  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-28">
      <div className="relative mx-auto max-w-5xl px-6">
        <div className="grid items-center gap-12 md:grid-cols-[1.2fr_auto] md:gap-16">
          <div>
            <h1
              className="animate-rise text-[34px] leading-[1.18] font-extrabold tracking-[-0.03em] text-grey-900 md:text-[54px] md:leading-[1.12] md:tracking-[-0.035em]"
              style={{ animationDelay: "0ms" }}
            >
              <Lines text={hero.headlineBefore} />
              <span className="text-toss-blue">
                <Lines text={hero.headlineAccent} />
              </span>
              <Lines text={hero.headlineAfter} />
            </h1>

            <p
              className="animate-rise mt-6 max-w-xl text-[17px] leading-relaxed text-pretty text-grey-600 md:text-lg"
              style={{ animationDelay: "100ms" }}
            >
              {hero.sub}
            </p>

            <div
              className="animate-rise mt-9 flex flex-wrap items-center gap-3"
              style={{ animationDelay: "200ms" }}
            >
              <a
                href="#contact"
                className="rounded-full bg-toss-blue px-7 py-3.5 text-base font-semibold text-white shadow-[0_8px_20px_-6px_rgba(49,130,246,0.55)] transition-all hover:-translate-y-0.5 hover:bg-toss-blue-strong hover:shadow-[0_12px_28px_-6px_rgba(49,130,246,0.6)] active:scale-[0.98]"
              >
                {hero.ctaPrimary}
              </a>
              <a
                href="#experience"
                className="rounded-full border border-white/70 bg-white/55 px-7 py-3.5 text-base font-semibold text-grey-800 backdrop-blur-lg transition-all hover:-translate-y-0.5 hover:bg-white/85 active:scale-[0.98]"
              >
                {hero.ctaSecondary}
              </a>
            </div>

            <div className="animate-rise mt-7" style={{ animationDelay: "280ms" }}>
              <SocialLinks variant="light" />
            </div>
          </div>

          <div
            className="animate-rise relative mx-auto w-[220px] max-md:order-first md:w-[290px]"
            style={{ animationDelay: "120ms" }}
          >
            <div
              aria-hidden
              className="absolute -inset-8 rounded-full bg-[radial-gradient(closest-side,rgba(49,130,246,0.28),transparent)] blur-2xl"
            />

            <div className="card overflow-hidden rounded-[36px] p-2.5">
              <Image
                src="/profile.png"
                alt={profile.name}
                width={413}
                height={531}
                priority
                className="w-full rounded-[28px] object-cover"
              />
            </div>

            <span
              className="animate-float chip absolute -bottom-3 -left-5 gap-1.5 px-3.5 py-2 text-sm font-semibold text-grey-800 shadow-card"
              style={{ animationDelay: "-2.7s" }}
            >
              💼 ThinkingAI
            </span>
          </div>
        </div>

        <dl
          className="card animate-rise mt-16 grid grid-cols-3 gap-x-4 px-7 py-8 md:mt-20 md:divide-x md:divide-grey-200/50 md:px-9"
          style={{ animationDelay: "360ms" }}
        >
          {hero.stats.map(({ value, label }) => (
            <div key={label} className="md:px-8 md:first:pl-0 md:last:pr-0">
              <dd className="text-[26px] font-extrabold tracking-tight tabular-nums text-grey-900 md:text-3xl">
                <CountUp value={value} />
              </dd>
              <dt className="mt-1 text-sm font-medium text-grey-500">{label}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
