import { profile, type SiteContent } from "@/lib/content";

export default function Footer({ c }: { c: SiteContent }) {
  return (
    <footer className="border-t border-white/60 py-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
        <p className="text-sm font-medium text-grey-500">{c.footer.rights}</p>
        <div className="flex items-center gap-6">
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-grey-500 transition-colors hover:text-grey-900"
          >
            LinkedIn
          </a>
          <a
            href={profile.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-grey-500 transition-colors hover:text-grey-900"
          >
            GitHub
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="text-sm font-medium text-grey-500 transition-colors hover:text-grey-900"
          >
            {c.footer.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
