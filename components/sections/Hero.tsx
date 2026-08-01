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
    <section className="relative overflow-hidden pt-36 pb-20 md:pt-52 md:pb-28">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-56 left-1/2 h-[560px] w-[920px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(49,130,246,0.09),transparent)] blur-2xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-24 -right-44 h-[420px] w-[420px] rounded-full bg-[radial-gradient(closest-side,rgba(99,102,241,0.07),transparent)] blur-2xl"
      />

      <div className="relative mx-auto max-w-5xl px-6">
        <div className="animate-rise" style={{ animationDelay: "0ms" }}>
          <span className="inline-flex items-center gap-2 rounded-full border border-grey-200/80 bg-white px-4 py-2 text-sm font-semibold text-grey-700 shadow-card">
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
            className="rounded-full bg-toss-blue px-7 py-3.5 text-base font-semibold text-white shadow-[0_8px_20px_-6px_rgba(49,130,246,0.55)] transition-all hover:bg-toss-blue-strong hover:shadow-[0_10px_24px_-6px_rgba(49,130,246,0.6)] active:scale-[0.98]"
          >
            {hero.ctaPrimary}
          </a>
          <a
            href="#experience"
            className="rounded-full bg-grey-100 px-7 py-3.5 text-base font-semibold text-grey-800 transition-colors hover:bg-grey-200 active:scale-[0.98]"
          >
            {hero.ctaSecondary}
          </a>
        </div>

        <dl
          className="animate-rise mt-18 grid grid-cols-2 gap-y-8 border-t border-grey-100 pt-10 md:mt-24 md:grid-cols-4 md:gap-y-0 md:divide-x md:divide-grey-100"
          style={{ animationDelay: "320ms" }}
        >
          {hero.stats.map(({ value, label }) => (
            <div key={label} className="md:px-8 md:first:pl-0 md:last:pr-0">
              <dd className="text-[26px] font-extrabold tracking-tight tabular-nums text-grey-900 md:text-3xl">
                {value}
              </dd>
              <dt className="mt-1 text-sm font-medium text-grey-500">{label}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
