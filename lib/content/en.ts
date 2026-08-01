import type { SiteContent } from "./types";

export const en: SiteContent = {
  meta: {
    title: "Jihwan Park — Software Engineer",
    description:
      "Trilingual (Korean · English · Chinese) software engineer in Seoul who translates customer challenges into scalable technical solutions.",
  },
  nav: {
    links: [
      { href: "#about", label: "About" },
      { href: "#experience", label: "Experience" },
      { href: "#projects", label: "Projects" },
      { href: "#skills", label: "Skills" },
      { href: "#education", label: "Education" },
    ],
    contact: "Contact",
  },
  hero: {
    status: "Open to new opportunities",
    headlineBefore: "Turning customer challenges\ninto ",
    headlineAccent: "scalable solutions.",
    headlineAfter: "",
    sub: "Jihwan Park — a trilingual (Korean · English · Chinese) software engineer in Seoul, working across backend systems, data pipelines, and enterprise AI at ThinkingAI.",
    ctaPrimary: "Get in touch",
    ctaSecondary: "View experience",
    stats: [
      { value: "3", label: "Native languages" },
      { value: "2+ yrs", label: "Production backend" },
      { value: "10+", label: "Enterprise clients" },
      { value: "4.05", label: "GPA / 4.5 at SKKU" },
    ],
  },
  about: {
    eyebrow: "About",
    title: "Three things about me",
    description:
      "An engineer shaped by three cultures — comfortable deep in systems, and just as comfortable in front of customers.",
    highlights: [
      {
        icon: "🌏",
        title: "Trilingual by default",
        body: "Native in Korean, English, and Chinese — educated at Shanghai High School International Division, certified with HSK 6 and OPIc AL. I work without language barriers.",
      },
      {
        icon: "⚙️",
        title: "Systems that scale",
        body: "Experienced in system design and large-scale data pipelines across the psychological counseling, advertising, and gaming industries — built to be maintainable and observable.",
      },
      {
        icon: "🤝",
        title: "Customer-facing engineer",
        body: "From requirements analysis to technical support, I sit between customers and the product — translating real challenges into scalable technical solutions.",
      },
    ],
    beyondWork: "Beyond work",
    interests: [
      { icon: "🏃", label: "Running 80km a month" },
      { icon: "💪", label: "Daily morning workout" },
      { icon: "📚", label: "One book a month" },
    ],
  },
  experience: {
    eyebrow: "Experience",
    title: "Where I've built",
    description: "From production backend systems to enterprise AI deployments.",
    items: [
      {
        company: "ThinkingAI",
        descriptor: "Game Analysis Platform & Enterprise AI",
        role: "Technical Support Engineer",
        period: "May 2026 — Present",
        current: true,
        groups: [
          {
            product: "Agentic Engine · Enterprise AI Platform",
            bullets: [
              "Supported 10+ enterprise clients by troubleshooting deployment, infrastructure, and platform issues — including server configuration, installation, firewall settings, and platform usage.",
              "Designed onboarding and migration strategies for SaaS and on-premise deployments, covering SDK integration, infrastructure configuration, and data migration.",
              "Translated customer requirements into AI-powered features and product enhancements.",
              "Built AI-powered internal workflows to automate issue diagnosis and customer support processes.",
            ],
          },
        ],
        tags: ["SaaS & On-premise", "SDK Integration", "AI Workflows"],
      },
      {
        company: "Smartdoctor",
        descriptor: "Hospital CRM & Ad-Reward Platform",
        role: "Backend Developer",
        period: "Sep 2023 — Oct 2025",
        current: false,
        groups: [
          {
            product: "Sangdam Today · Psychological Counseling CRM",
            bullets: [
              "Designed an automated data-migration pipeline, reducing customer onboarding time for 10+ enterprise clients.",
            ],
          },
          {
            product: "Cash Review · Ad-Reward Platform",
            bullets: [
              "Led infrastructure and database migration during an M&A using AWS Elastic Beanstalk, RDS, Route 53, and DMS.",
              "Redesigned the distributed push-notification architecture by centralizing distributed cron jobs into a dedicated scheduler — improving maintainability and observability.",
            ],
          },
        ],
        tags: ["AWS", "Data Migration", "Scheduler Architecture"],
      },
    ],
  },
  projects: {
    eyebrow: "Projects",
    title: "Selected work",
    description: "From RAG-powered chatbots to a client-commissioned web platform.",
    items: [
      {
        icon: "🤖",
        name: "Agentic Kingobot",
        subtitle: "Personalized academic-information chatbot",
        role: "Full Stack Developer · Team of 4",
        period: "Oct — Dec 2025",
        bullets: [
          "Implemented a RAG system utilizing LangChain and a vector database.",
          "Integrated a Redis cache to maintain and manage session-based conversation history.",
        ],
        tags: ["RAG", "LangChain", "Redis"],
      },
      {
        icon: "🩺",
        name: "Biolens",
        subtitle: "Health-checkup analysis chatbot",
        role: "Backend Developer · Team of 4",
        period: "Oct — Dec 2025",
        bullets: [
          "Architected a RAG system to process and store standardized health-checkup data, such as reference ranges for clinical categories.",
          "Developed citation-based response generation for reliable health-checkup explanations.",
        ],
        tags: ["RAG", "Vector DB", "Citations"],
      },
      {
        icon: "🏨",
        name: "Raum Stay",
        subtitle: "Accommodation facility website",
        role: "Full Stack Developer · Solo, client project",
        period: "Feb — Mar 2026",
        bullets: [
          "Adopted a monorepo structure to manage the client homepage, admin dashboard, and portal page.",
          "Developed a local-storage-based analytics module to track DAU, WAU, and MAU.",
        ],
        tags: ["Monorepo", "Analytics"],
      },
    ],
    githubCta: "More projects on GitHub",
  },
  skills: {
    eyebrow: "Skills",
    title: "What I work with",
    description:
      "Shaped by production backend work, cloud migrations, and customer-facing engineering.",
    groups: [
      {
        icon: "🧠",
        title: "AI & Data",
        items: ["RAG Systems", "LangChain", "Vector Database", "Redis", "Data Pipelines"],
      },
      {
        icon: "⚙️",
        title: "Backend & Systems",
        items: [
          "System Design",
          "Backend Development",
          "Notification Architecture",
          "Monorepo Structure",
        ],
      },
      {
        icon: "☁️",
        title: "Cloud & Infrastructure",
        items: [
          "AWS Elastic Beanstalk",
          "RDS",
          "Route 53",
          "DMS",
          "SaaS & On-premise Deployment",
        ],
      },
      {
        icon: "🤝",
        title: "Customer Engineering",
        items: [
          "Technical Support",
          "Customer Requirements Analysis",
          "Onboarding & Migration Strategy",
          "SDK Integration",
        ],
      },
    ],
  },
  education: {
    eyebrow: "Education",
    title: "Education & credentials",
    description:
      "An engineering double major, student leadership, and certifications across three languages and the cloud.",
    schools: [
      {
        school: "Sungkyunkwan University",
        degree: "B.S. in Industrial Engineering · Double major in Computer Science",
        period: "Sep 2020 — Aug 2026 (expected)",
        gpa: "GPA 4.05 / 4.5",
        activities: [
          "CoMit, SKKU Programming Club — Leader (Sep 2022 – Aug 2023)",
          "SKKRYPTO, SKKU Blockchain Academy — Leader (Sep 2022 – Aug 2023)",
          "Industrial Engineering Student Union — Member (Sep 2021 – Jun 2022)",
        ],
      },
      {
        school: "Shanghai High School International Division",
        degree: "High School Diploma",
        period: "Sep 2014 — Jun 2020",
        gpa: null,
        activities: [],
      },
    ],
    certsTitle: "Certifications",
    certifications: [
      { name: "HSK Level 6 — 272 / 300", issuer: "Chinese proficiency", date: "Feb 2026" },
      { name: "OPIc English — AL", issuer: "English proficiency · Highest level", date: "Jan 2026" },
      { name: "AWS Certified Cloud Practitioner", issuer: "Amazon Web Services", date: "Jan 2024" },
    ],
    otherTitle: "Also good to know",
    other: [
      {
        label: "Military service",
        value: "Completed — alternative military service at Smartdoctor (Sep 2023 – Oct 2025)",
      },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Let's build something together.",
    description: "Open to new opportunities and collaborations — in Korean, English, or Chinese.",
  },
  footer: {
    rights: "© 2026 Jihwan Park. All rights reserved.",
    email: "Email",
  },
};
