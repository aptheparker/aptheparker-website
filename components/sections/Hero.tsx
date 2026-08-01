import CountUp from "@/components/CountUp";
import type { SiteContent } from "@/lib/content";

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
    <section className="relative pt-36 pb-20 md:pt-52 md:pb-28">
      <div className="relative mx-auto max-w-5xl px-6">
        <div className="animate-rise" style={{ animationDelay: "0ms" }}>
          <span className="chip gap-2 px-4 py-2 text-sm font-semibold text-grey-700 backdrop-blur-lg">
            <span className="h-2 w-2 rounded-full bg-mint" />
            {hero.status}
          </span>
        </div>

        <h1
          className="animate-rise mt-8 text-[36px] leading-[1.18] font-extrabold tracking-[-0.03em] text-grey-900 md:text-[64px] md:leading-[1.1] md:tracking-[-0.035em]"
          style={{ animationDelay: "80ms" }}
        >
          <Lines text={hero.headlineBefore} />
          <span className="text-toss-blue">
            <Lines text={hero.headlineAccent} />
          </span>
          <Lines text={hero.headlineAfter} />
        </h1>

        <p
          className="animate-rise mt-7 max-w-2xl text-lg leading-relaxed text-pretty text-grey-600 md:text-xl"
          style={{ animationDelay: "160ms" }}
        >
          {hero.sub}
        </p>

        <div className="animate-rise mt-10 flex flex-wrap gap-3" style={{ animationDelay: "240ms" }}>
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

        <dl
          className="card animate-rise mt-18 grid grid-cols-2 gap-x-4 gap-y-8 px-7 py-8 md:mt-24 md:grid-cols-4 md:gap-y-0 md:divide-x md:divide-grey-200/50 md:px-9"
          style={{ animationDelay: "320ms" }}
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
