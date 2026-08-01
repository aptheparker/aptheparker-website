import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import type { SiteContent } from "@/lib/content";

export default function Skills({ c }: { c: SiteContent }) {
  const { skills } = c;

  return (
    <section id="skills" className="scroll-mt-20 py-28 md:py-36">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <SectionHeading
            eyebrow={skills.eyebrow}
            title={skills.title}
            description={skills.description}
          />
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2">
          {skills.groups.map(({ icon, title, items }, i) => (
            <Reveal key={title} delay={(i % 2) * 80}>
              <article className="card card-hover h-full p-8">
                <div className="flex items-center gap-4">
                  <div className="icon-tile h-12 w-12 text-xl">
                    {icon}
                  </div>
                  <h3 className="text-lg font-bold tracking-tight text-grey-900">{title}</h3>
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-grey-100 px-3.5 py-2 text-sm font-medium text-grey-700"
                    >
                      {item}
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
