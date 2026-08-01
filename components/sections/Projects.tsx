import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { profile, type SiteContent } from "@/lib/content";

export default function Projects({ c }: { c: SiteContent }) {
  const { projects } = c;

  return (
    <section id="projects" className="scroll-mt-20 py-28 md:py-36">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <SectionHeading
            eyebrow={projects.eyebrow}
            title={projects.title}
            description={projects.description}
          />
        </Reveal>

        <div className="grid gap-5 md:grid-cols-3">
          {projects.items.map((project, i) => (
            <Reveal key={project.name} delay={i * 80} className="h-full">
              <article className="card card-hover flex h-full flex-col p-8">
                <div className="icon-tile h-13 w-13 text-2xl">
                  {project.icon}
                </div>

                <h3 className="mt-6 text-lg font-bold tracking-tight text-grey-900">
                  {project.name}
                </h3>
                <p className="mt-1 text-[15px] font-medium text-grey-600">{project.subtitle}</p>
                <p className="mt-3 text-[13px] font-medium text-grey-500">
                  {project.role} · {project.period}
                </p>

                <ul className="mt-5 flex-1 space-y-2.5">
                  {project.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3 text-[15px] leading-relaxed text-grey-600">
                      <span
                        aria-hidden
                        className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-grey-400"
                      />
                      {bullet}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="chip px-3 py-1.5 text-[13px] font-medium text-grey-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <a
            href={profile.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="card card-hover group mt-6 flex items-center justify-between p-7"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-grey-900 text-white">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold tracking-tight text-grey-900">{projects.githubCta}</h4>
                <p className="text-sm text-grey-600">github.com/{profile.alias}</p>
              </div>
            </div>
            <svg
              className="h-5 w-5 text-grey-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-toss-blue"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
              aria-hidden
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
