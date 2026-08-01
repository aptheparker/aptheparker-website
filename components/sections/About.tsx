import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import type { SiteContent } from "@/lib/content";

export default function About({ c }: { c: SiteContent }) {
  const { about } = c;

  return (
    <section id="about" className="scroll-mt-20 bg-grey-50 py-28 md:py-36">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <SectionHeading
            eyebrow={about.eyebrow}
            title={about.title}
            description={about.description}
          />
        </Reveal>

        <div className="grid gap-5 md:grid-cols-3">
          {about.highlights.map(({ icon, title, body }, i) => (
            <Reveal key={title} delay={i * 80}>
              <article className="card card-hover h-full p-8">
                <div className="icon-tile h-13 w-13 text-2xl">
                  {icon}
                </div>
                <h3 className="mt-6 text-lg font-bold tracking-tight text-grey-900">{title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-grey-600">{body}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-8 flex flex-wrap items-center gap-x-2 gap-y-3">
            <span className="mr-2 text-sm font-semibold text-grey-500">{about.beyondWork}</span>
            {about.interests.map(({ icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 rounded-full border border-grey-200/80 bg-white px-4 py-2 text-sm font-medium text-grey-700 shadow-card"
              >
                <span aria-hidden>{icon}</span>
                {label}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
