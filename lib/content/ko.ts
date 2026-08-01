import type { SiteContent } from "./types";

export const ko: SiteContent = {
  meta: {
    title: "박지환 (Jihwan Park) — 소프트웨어 엔지니어",
    description:
      "고객의 문제를 확장 가능한 기술 솔루션으로 풀어내는, 서울의 3개 국어(한국어·영어·중국어) 소프트웨어 엔지니어입니다.",
  },
  nav: {
    links: [
      { href: "#about", label: "소개" },
      { href: "#experience", label: "경력" },
      { href: "#projects", label: "프로젝트" },
      { href: "#skills", label: "기술" },
      { href: "#education", label: "학력" },
    ],
    contact: "연락하기",
  },
  hero: {
    status: "새로운 기회를 찾고 있어요",
    headlineBefore: "고객의 문제를\n",
    headlineAccent: "확장 가능한 솔루션",
    headlineAfter: "으로.",
    sub: "박지환 — 서울에서 일하는 3개 국어(한국어·영어·중국어) 소프트웨어 엔지니어입니다. ThinkingAI에서 백엔드 시스템, 데이터 파이프라인, 엔터프라이즈 AI를 다뤄요.",
    ctaPrimary: "연락하기",
    ctaSecondary: "경력 보기",
    stats: [
      { value: "3", label: "개 국어 원어민" },
      { value: "2년+", label: "백엔드 실무 경험" },
      { value: "10+", label: "엔터프라이즈 고객" },
      { value: "4.05", label: "학점 / 4.5 (성균관대)" },
    ],
  },
  about: {
    eyebrow: "소개",
    title: "저에 대한 세 가지",
    description:
      "세 문화 속에서 자란 엔지니어 — 시스템 깊숙한 곳에서도, 고객 앞에서도 편안해요.",
    highlights: [
      {
        icon: "🌏",
        title: "3개 국어가 기본값",
        body: "한국어·영어·중국어 모두 원어민 수준이에요. 상하이 국제학교(SHSID)를 졸업했고, HSK 6급과 OPIc AL로 증명했어요. 언어 장벽 없이 일해요.",
      },
      {
        icon: "⚙️",
        title: "확장을 견디는 시스템",
        body: "심리상담·광고·게임 산업을 넘나들며 시스템 설계와 대규모 데이터 파이프라인을 경험했어요. 유지보수성과 관측성을 갖춘 시스템을 지향해요.",
      },
      {
        icon: "🤝",
        title: "고객을 마주하는 엔지니어",
        body: "요구사항 분석부터 기술 지원까지, 고객과 제품 사이에서 실제 문제를 확장 가능한 기술 솔루션으로 풀어내요.",
      },
    ],
    beyondWork: "일 밖에서는",
    interests: [
      { icon: "🏃", label: "매달 80km 러닝" },
      { icon: "💪", label: "매일 아침 운동" },
      { icon: "📚", label: "매달 한 권 독서" },
    ],
  },
  experience: {
    eyebrow: "경력",
    title: "이런 곳에서 일했어요",
    description: "프로덕션 백엔드 시스템부터 엔터프라이즈 AI 배포까지.",
    items: [
      {
        company: "ThinkingAI",
        descriptor: "게임 분석 플랫폼 & 엔터프라이즈 AI",
        role: "테크니컬 서포트 엔지니어",
        period: "2026년 5월 — 현재",
        current: true,
        groups: [
          {
            product: "Agentic Engine · 엔터프라이즈 AI 플랫폼",
            bullets: [
              "서버 구성, 설치, 방화벽 설정, 플랫폼 사용 등 배포·인프라·플랫폼 이슈를 해결하며 10곳 이상의 엔터프라이즈 고객을 지원했어요.",
              "SDK 연동, 인프라 구성, 데이터 마이그레이션을 포함한 SaaS·온프레미스 온보딩 및 마이그레이션 전략을 설계했어요.",
              "고객 요구사항을 AI 기반 기능과 제품 개선으로 연결했어요.",
              "이슈 진단과 고객 지원 프로세스를 자동화하는 AI 기반 내부 워크플로를 구축했어요.",
            ],
          },
        ],
        tags: ["SaaS & 온프레미스", "SDK 연동", "AI 워크플로"],
      },
      {
        company: "Smartdoctor",
        descriptor: "병원 CRM & 광고 리워드 플랫폼",
        role: "백엔드 개발자",
        period: "2023년 9월 — 2025년 10월",
        current: false,
        groups: [
          {
            product: "상담투데이 · 심리상담 CRM",
            bullets: [
              "자동화된 데이터 마이그레이션 파이프라인을 설계해 10곳 이상 엔터프라이즈 고객의 온보딩 시간을 줄였어요.",
            ],
          },
          {
            product: "캐시리뷰 · 광고 리워드 플랫폼",
            bullets: [
              "M&A 과정에서 AWS Elastic Beanstalk, RDS, Route 53, DMS를 활용한 인프라·데이터베이스 마이그레이션을 이끌었어요.",
              "흩어져 있던 크론 잡을 전용 스케줄러로 모아 푸시 알림 아키텍처를 재설계하고, 유지보수성과 관측성을 높였어요.",
            ],
          },
        ],
        tags: ["AWS", "데이터 마이그레이션", "스케줄러 아키텍처"],
      },
    ],
  },
  projects: {
    eyebrow: "프로젝트",
    title: "이런 걸 만들었어요",
    description: "RAG 기반 챗봇부터 클라이언트 의뢰 웹 플랫폼까지.",
    items: [
      {
        icon: "🤖",
        name: "Agentic Kingobot",
        subtitle: "맞춤형 학사 정보 챗봇",
        role: "풀스택 개발 · 4인 팀",
        period: "2025년 10월 — 12월",
        bullets: [
          "LangChain과 벡터 데이터베이스를 활용해 RAG 시스템을 구현했어요.",
          "Redis 캐시를 연동해 세션 기반 대화 기록을 관리했어요.",
        ],
        tags: ["RAG", "LangChain", "Redis"],
      },
      {
        icon: "🩺",
        name: "Biolens",
        subtitle: "건강검진 분석 챗봇",
        role: "백엔드 개발 · 4인 팀",
        period: "2025년 10월 — 12월",
        bullets: [
          "임상 항목별 참고치 등 표준화된 건강검진 데이터를 처리·저장하는 RAG 시스템을 설계했어요.",
          "신뢰할 수 있는 검진 설명을 위해 인용 기반 응답 생성을 개발했어요.",
        ],
        tags: ["RAG", "벡터 DB", "인용 기반 응답"],
      },
      {
        icon: "🏨",
        name: "Raum Stay",
        subtitle: "숙박시설 웹사이트",
        role: "풀스택 개발 · 1인 클라이언트 프로젝트",
        period: "2026년 2월 — 3월",
        bullets: [
          "모노레포 구조로 홈페이지·관리자 대시보드·포털 페이지를 함께 관리했어요.",
          "DAU·WAU·MAU를 추적하는 로컬 스토리지 기반 분석 모듈을 개발했어요.",
        ],
        tags: ["모노레포", "분석 모듈"],
      },
    ],
    githubCta: "더 많은 프로젝트는 GitHub에서",
  },
  skills: {
    eyebrow: "기술",
    title: "이런 기술을 다뤄요",
    description: "프로덕션 백엔드, 클라우드 마이그레이션, 고객 대면 엔지니어링으로 다져졌어요.",
    groups: [
      {
        icon: "🧠",
        title: "AI & 데이터",
        items: ["RAG 시스템", "LangChain", "벡터 데이터베이스", "Redis", "데이터 파이프라인"],
      },
      {
        icon: "⚙️",
        title: "백엔드 & 시스템",
        items: ["시스템 설계", "백엔드 개발", "알림 아키텍처", "모노레포 구조"],
      },
      {
        icon: "☁️",
        title: "클라우드 & 인프라",
        items: ["AWS Elastic Beanstalk", "RDS", "Route 53", "DMS", "SaaS·온프레미스 배포"],
      },
      {
        icon: "🤝",
        title: "고객 엔지니어링",
        items: ["기술 지원", "고객 요구사항 분석", "온보딩·마이그레이션 전략", "SDK 연동"],
      },
    ],
  },
  education: {
    eyebrow: "학력",
    title: "학력과 자격",
    description: "공학 복수전공과 학생 리더십, 그리고 3개 국어와 클라우드 자격까지.",
    schools: [
      {
        school: "성균관대학교",
        degree: "산업공학 학사 · 컴퓨터공학 복수전공",
        period: "2020년 9월 — 2026년 8월 (졸업 예정)",
        gpa: "학점 4.05 / 4.5",
        activities: [
          "CoMit, SKKU 프로그래밍 동아리 — 회장 (2022.09 – 2023.08)",
          "SKKRYPTO, SKKU 블록체인 학회 — 회장 (2022.09 – 2023.08)",
          "산업공학 학생회 — 부원 (2021.09 – 2022.06)",
        ],
      },
      {
        school: "상하이중학교 국제부 (SHSID)",
        degree: "고등학교 졸업",
        period: "2014년 9월 — 2020년 6월",
        gpa: null,
        activities: [],
      },
    ],
    certsTitle: "자격증",
    certifications: [
      { name: "HSK 6급 — 272 / 300", issuer: "중국어 능력", date: "2026.02" },
      { name: "OPIc 영어 — AL", issuer: "영어 능력 · 최고 등급", date: "2026.01" },
      { name: "AWS Cloud Practitioner", issuer: "Amazon Web Services", date: "2024.01" },
    ],
    otherTitle: "참고로",
    other: [
      {
        label: "병역",
        value: "군필 — Smartdoctor에서 대체복무 (2023.09 – 2025.10)",
      },
    ],
  },
  contact: {
    eyebrow: "연락하기",
    title: "함께 만들어 가요.",
    description: "새로운 기회와 협업을 기다리고 있어요 — 한국어, 영어, 중국어 모두 환영해요.",
  },
  footer: {
    rights: "© 2026 Jihwan Park. All rights reserved.",
    email: "이메일",
  },
};
