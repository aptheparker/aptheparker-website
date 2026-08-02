import type { SiteContent } from "./types";

export const zh: SiteContent = {
  meta: {
    title: "Jihwan Park — 软件工程师",
    description:
      "常驻首尔的三语（韩语·英语·中文）软件工程师，擅长把客户的挑战转化为可扩展的技术方案。",
  },
  nav: {
    links: [
      { href: "#about", label: "关于" },
      { href: "#experience", label: "经历" },
      { href: "#projects", label: "项目" },
      { href: "#skills", label: "技能" },
      { href: "#education", label: "教育" },
    ],
    contact: "联系我",
  },
  hero: {
    headlineBefore: "把客户的挑战\n转化为",
    headlineAccent: "可扩展的解决方案。",
    headlineAfter: "",
    sub: "Jihwan Park — 常驻首尔的三语（韩语·英语·中文）软件工程师，目前在 ThinkingAI 负责后端系统、数据管道与企业级 AI。",
    ctaPrimary: "联系我",
    ctaSecondary: "查看经历",
    stats: [
      { value: "3", label: "门母语级语言" },
      { value: "2年+", label: "后端实战经验" },
      { value: "4.05", label: "GPA / 4.5（成均馆大学）" },
    ],
  },
  about: {
    eyebrow: "关于我",
    title: "关于我的三件事",
    description: "在三种文化中成长的工程师——既能深入系统内部，也能从容面对客户。",
    highlights: [
      {
        icon: "🌏",
        title: "三语是默认配置",
        body: "韩语、英语、中文均为母语水平——毕业于上海中学国际部，持有 HSK 六级与 OPIc AL 认证。工作中没有语言障碍。",
      },
      {
        icon: "⚙️",
        title: "经得起扩展的系统",
        body: "在心理咨询、广告与游戏行业积累了系统设计与大规模数据管道经验——始终注重可维护性与可观测性。",
      },
      {
        icon: "🤝",
        title: "面向客户的工程师",
        body: "从需求分析到技术支持，我站在客户与产品之间，把真实的挑战转化为可扩展的技术方案。",
      },
    ],
    beyondWork: "工作之外",
    interests: [
      { icon: "🏃", label: "每月跑步 80 公里" },
      { icon: "💪", label: "每天晨练" },
      { icon: "📚", label: "每月读一本书" },
    ],
  },
  experience: {
    eyebrow: "工作经历",
    title: "我工作过的地方",
    description: "从生产环境的后端系统，到企业级 AI 的部署落地。",
    items: [
      {
        company: "ThinkingAI",
        descriptor: "游戏分析平台 & 企业级 AI",
        role: "技术支持工程师",
        period: "2026年5月 — 至今",
        current: true,
        groups: [
          {
            product: "Agentic Engine · 企业级 AI 平台",
            bullets: [
              "为 10+ 企业客户排查部署、基础设施与平台问题——包括服务器配置、安装、防火墙设置与平台使用。",
              "为 SaaS 与本地化部署设计上线与迁移方案，覆盖 SDK 集成、基础设施配置与数据迁移。",
              "把客户需求转化为 AI 功能与产品改进。",
              "构建 AI 驱动的内部工作流，自动化问题诊断与客户支持流程。",
            ],
          },
        ],
        tags: ["SaaS 与本地部署", "SDK 集成", "AI 工作流"],
      },
      {
        company: "Smartdoctor",
        descriptor: "医院 CRM & 广告奖励平台",
        role: "后端开发工程师",
        period: "2023年9月 — 2025年10月",
        current: false,
        groups: [
          {
            product: "Sangdam Today · 心理咨询 CRM",
            bullets: [
              "设计自动化数据迁移管道，缩短了 10+ 企业客户的上线时间。",
            ],
          },
          {
            product: "Cash Review · 广告奖励平台",
            bullets: [
              "在并购期间主导基础设施与数据库迁移，使用 AWS Elastic Beanstalk、RDS、Route 53 与 DMS。",
              "重构分布式推送通知架构，把分散的定时任务收敛到专用调度器——提升了可维护性与可观测性。",
            ],
          },
        ],
        tags: ["AWS", "数据迁移", "调度器架构"],
      },
    ],
  },
  projects: {
    eyebrow: "项目",
    title: "精选项目",
    description: "从 RAG 聊天机器人到客户委托的网站平台。",
    items: [
      {
        icon: "🤖",
        name: "Agentic Kingobot",
        subtitle: "个性化学业信息聊天机器人",
        role: "全栈开发 · 4人团队",
        period: "2025年10月 — 12月",
        bullets: [
          "基于 LangChain 与向量数据库实现 RAG 系统。",
          "集成 Redis 缓存，维护并管理基于会话的对话历史。",
        ],
        tags: ["RAG", "LangChain", "Redis"],
      },
      {
        icon: "🩺",
        name: "Biolens",
        subtitle: "体检报告分析聊天机器人",
        role: "后端开发 · 4人团队",
        period: "2025年10月 — 12月",
        bullets: [
          "设计 RAG 系统，处理并存储标准化体检数据（如各临床项目的参考范围）。",
          "开发基于引用的回答生成，让体检解读可靠可信。",
        ],
        tags: ["RAG", "向量数据库", "引用式回答"],
      },
      {
        icon: "🏨",
        name: "Raum Stay",
        subtitle: "住宿设施网站",
        role: "全栈开发 · 独立客户项目",
        period: "2026年2月 — 3月",
        bullets: [
          "采用 Monorepo 结构，统一管理官网、管理后台与门户页面。",
          "开发基于本地存储的分析模块，追踪 DAU、WAU 与 MAU。",
        ],
        tags: ["Monorepo", "数据分析"],
      },
    ],
    githubCta: "更多项目请见 GitHub",
  },
  skills: {
    eyebrow: "技能",
    title: "我的技术栈",
    description: "在生产后端、云迁移与面向客户的工程实践中打磨而成。",
    groups: [
      {
        icon: "🧠",
        title: "AI 与数据",
        items: ["RAG 系统", "LangChain", "向量数据库", "Redis", "数据管道"],
      },
      {
        icon: "⚙️",
        title: "后端与系统",
        items: ["系统设计", "后端开发", "推送通知架构", "Monorepo 结构"],
      },
      {
        icon: "☁️",
        title: "云与基础设施",
        items: ["AWS Elastic Beanstalk", "RDS", "Route 53", "DMS", "SaaS 与本地部署"],
      },
      {
        icon: "🤝",
        title: "客户工程",
        items: ["技术支持", "客户需求分析", "上线与迁移策略", "SDK 集成"],
      },
    ],
  },
  education: {
    eyebrow: "教育",
    title: "教育与资质",
    description: "工程双学位、学生组织领导经验，以及横跨三门语言与云计算的认证。",
    schools: [
      {
        school: "成均馆大学",
        degree: "工业工程学士 · 计算机科学双学位",
        period: "2020年9月 — 2026年8月（预计毕业）",
        gpa: "GPA 4.05 / 4.5",
        activities: [
          "CoMit · SKKU 编程社团 — 社长（2022.09 – 2023.08）",
          "SKKRYPTO · SKKU 区块链学会 — 会长（2022.09 – 2023.08）",
          "工业工程学生会 — 成员（2021.09 – 2022.06）",
        ],
      },
      {
        school: "上海中学国际部 (SHSID)",
        degree: "高中毕业",
        period: "2014年9月 — 2020年6月",
        gpa: null,
        activities: [],
      },
    ],
    certsTitle: "证书",
    certifications: [
      { name: "HSK 六级 — 272 / 300", issuer: "中文能力", date: "2026.02" },
      { name: "OPIc 英语 — AL", issuer: "英语能力 · 最高等级", date: "2026.01" },
      { name: "AWS Cloud Practitioner", issuer: "Amazon Web Services", date: "2024.01" },
    ],
    otherTitle: "其他信息",
    other: [
      {
        label: "兵役",
        value: "已完成 — 于 Smartdoctor 服替代役（2023.09 – 2025.10）",
      },
    ],
  },
  contact: {
    eyebrow: "联系我",
    title: "一起创造点什么吧。",
    description: "期待新的机会与合作——韩语、英语、中文均可。",
  },
  footer: {
    rights: "© 2026 Jihwan Park. All rights reserved.",
    email: "邮箱",
  },
};
