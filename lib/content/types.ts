export type SiteContent = {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    links: { href: string; label: string }[];
    contact: string;
  };
  hero: {
    status: string;
    headlineBefore: string;
    headlineAccent: string;
    headlineAfter: string;
    sub: string;
    ctaPrimary: string;
    ctaSecondary: string;
    stats: { value: string; label: string }[];
  };
  about: {
    eyebrow: string;
    title: string;
    description: string;
    highlights: { icon: string; title: string; body: string }[];
    beyondWork: string;
    interests: { icon: string; label: string }[];
  };
  experience: {
    eyebrow: string;
    title: string;
    description: string;
    items: {
      company: string;
      descriptor: string;
      role: string;
      period: string;
      current: boolean;
      groups: { product: string; bullets: string[] }[];
      tags: string[];
    }[];
  };
  projects: {
    eyebrow: string;
    title: string;
    description: string;
    items: {
      icon: string;
      name: string;
      subtitle: string;
      role: string;
      period: string;
      bullets: string[];
      tags: string[];
    }[];
    githubCta: string;
  };
  skills: {
    eyebrow: string;
    title: string;
    description: string;
    groups: { icon: string; title: string; items: string[] }[];
  };
  education: {
    eyebrow: string;
    title: string;
    description: string;
    schools: {
      school: string;
      degree: string;
      period: string;
      gpa: string | null;
      activities: string[];
    }[];
    certsTitle: string;
    certifications: { name: string; issuer: string; date: string }[];
    otherTitle: string;
    other: { label: string; value: string }[];
  };
  contact: {
    eyebrow: string;
    title: string;
    description: string;
  };
  footer: {
    rights: string;
    email: string;
  };
};
