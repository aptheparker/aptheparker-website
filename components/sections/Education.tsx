import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import type { SiteContent } from "@/lib/content";

export default function Education({ c }: { c: SiteContent }) {
  const { education } = c;

  return (
    <section id="education" className="scroll-mt-20 py-28 md:py-36">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <SectionHeading
            eyebrow={education.eyebrow}
            title={education.title}
            description={education.description}
          />
        </Reveal>

        <div className="grid items-start gap-5 lg:grid-cols-[1.35fr_1fr]">
          <div className="space-y-5">
            {education.schools.map((edu, i) => (
              <Reveal key={edu.school} delay={i * 80}>
                <article className="card card-hover p-8 md:p-9">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <h3 className="text-xl font-bold tracking-tight text-grey-900">
                      {edu.school}
                    </h3>
                    {edu.gpa && (
                      <span className="rounded-full bg-toss-blue-soft px-4 py-1.5 text-sm font-semibold text-toss-blue">
                        {edu.gpa}
                      </span>
                    )}
                  </div>
                  <p className="mt-2 text-[15px] font-medium text-grey-700">{edu.degree}</p>
                  <p className="mt-1 text-sm font-medium text-grey-500">{edu.period}</p>

                  {edu.activities.length > 0 && (
                    <ul className="mt-6 space-y-2.5 border-t border-grey-100 pt-6">
                      {edu.activities.map((activity) => (
                        <li key={activity} className="flex gap-3 text-[15px] leading-relaxed text-grey-600">
                          <span
                            aria-hidden
                            className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-grey-400"
                          />
                          {activity}
                        </li>
                      ))}
                    </ul>
                  )}
                </article>
              </Reveal>
            ))}
          </div>

          <div className="space-y-5">
            <Reveal delay={160}>
              <aside className="card p-8 md:p-9">
                <h3 className="text-lg font-bold tracking-tight text-grey-900">
                  {education.certsTitle}
                </h3>
                <ul className="mt-6 space-y-5">
                  {education.certifications.map((cert) => (
                    <li key={cert.name} className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-[15px] font-bold text-grey-900">{cert.name}</p>
                        <p className="mt-0.5 text-sm text-grey-500">{cert.issuer}</p>
                      </div>
                      <span className="shrink-0 text-sm font-medium text-grey-400">
                        {cert.date}
                      </span>
                    </li>
                  ))}
                </ul>
              </aside>
            </Reveal>

            <Reveal delay={240}>
              <aside className="card p-8 md:p-9">
                <h3 className="text-lg font-bold tracking-tight text-grey-900">
                  {education.otherTitle}
                </h3>
                <ul className="mt-5 space-y-3">
                  {education.other.map(({ label, value }) => (
                    <li key={label}>
                      <p className="text-sm font-semibold text-grey-500">{label}</p>
                      <p className="mt-1 text-[15px] leading-relaxed text-grey-700">{value}</p>
                    </li>
                  ))}
                </ul>
              </aside>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
