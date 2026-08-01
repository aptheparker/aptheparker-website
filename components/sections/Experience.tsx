import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import type { SiteContent } from "@/lib/content";

export default function Experience({ c }: { c: SiteContent }) {
  const { experience } = c;

  return (
    <section id="experience" className="scroll-mt-20 py-28 md:py-36">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <SectionHeading
            eyebrow={experience.eyebrow}
            title={experience.title}
            description={experience.description}
          />
        </Reveal>

        <div className="space-y-6">
          {experience.items.map((exp, i) => (
            <Reveal key={exp.company} delay={i * 80}>
              <article className="card card-hover p-8 md:p-10">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div
                      className={`flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl text-lg font-extrabold ${
                        exp.current
                          ? "bg-gradient-to-b from-[#4a94ff] to-[#2e7cf0] text-white shadow-[0_6px_16px_-6px_rgba(49,130,246,0.6)]"
                          : "border border-white/70 bg-white/60 text-grey-600"
                      }`}
                    >
                      {exp.company.charAt(0)}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold tracking-tight text-grey-900 md:text-[22px]">
                        {exp.role}
                      </h3>
                      <p className="mt-0.5 text-[15px] font-medium text-grey-600">
                        {exp.company} · {exp.descriptor}
                      </p>
                    </div>
                  </div>
                  <span
                    className={`rounded-full px-4 py-1.5 text-sm font-semibold ${
                      exp.current
                        ? "border border-toss-blue/15 bg-toss-blue/10 text-toss-blue"
                        : "chip text-grey-600"
                    }`}
                  >
                    {exp.period}
                  </span>
                </div>

                <div className="mt-8 space-y-7">
                  {exp.groups.map((group) => (
                    <div key={group.product}>
                      <p className="text-[15px] font-bold text-grey-900">{group.product}</p>
                      <ul className="mt-3 space-y-2.5">
                        {group.bullets.map((bullet) => (
                          <li key={bullet} className="flex gap-3 text-[15px] leading-relaxed text-grey-600">
                            <span
                              aria-hidden
                              className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-grey-400"
                            />
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="chip px-3.5 py-1.5 text-[13px] font-medium text-grey-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
