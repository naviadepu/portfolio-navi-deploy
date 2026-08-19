export const statusConfig = {
  building: "building clutch",
  listening: "listening to chromonicci",
  lastCommit: "2h ago",
};

export const nowConfig = {
  building: {
    title: "Clutch",
    description:
      "Building Clutch — a daily women's health platform that helps users track symptoms, share anonymously, and discover community. Currently in beta, focused on the sharing flow and onboarding experience.",
  },
  reading: "The Creative Act by Rick Rubin",
  learning: "React Server Components and Next.js 15 App Router patterns",
  listening: "Chromonicci, Tame Impala, TV Girl",
  creating: "posting Clutch behind-the-scenes as @clutchhq_",
  lastUpdated: "08.19.26",
};

export interface ContentPost {
  platform: "Instagram" | "TikTok";
  hook: string;
  note: string;
}

export const contentConfig = {
  handle: "@clutchhq_",
  since: "April 2026",
  platforms: [
    {
      name: "Instagram",
      url: "https://www.instagram.com/clutchhq_",
      description:
        "Behind-the-scenes of building Clutch — product decisions, design pulls, and the day-to-day of a two-person startup.",
    },
    {
      name: "TikTok",
      url: "https://www.tiktok.com/@clutchhq_",
      description:
        "Short-form build logs, founder-engineer takes, and the messier parts of shipping a startup that don't make it into a pitch deck.",
    },
  ],
  pillars: [
    "building in public",
    "founder + frontend lead POV",
    "product & design decisions",
    "startup life, unfiltered",
  ],
};

export interface LeadershipRole {
  org: string;
  role: string;
  dates: string;
  description: string;
  highlights: string[];
}

export const leadership: LeadershipRole[] = [
  {
    org: "Women in Tech",
    role: "President",
    dates: "Oct 2023 – Oct 2025",
    description:
      "Led the GSU chapter for two years — grew membership, ran the exec board, and built out programming that got more women into technical roles and internships.",
    highlights: [
      "Ran the exec board and set chapter strategy across two academic years",
      "Built recruiting and workshop programming aimed at technical internship prep",
      "Grew active membership and chapter visibility on campus",
    ],
  },
  {
    org: "ProgSU",
    role: "VP of Operations",
    dates: "Jul 2025 – Jan 2026",
    description:
      "Ran the operational backbone of GSU's programming club — event logistics, budget, and the systems that let the technical side of the club actually ship.",
    highlights: [
      "Owned event logistics and budget for club programming",
      "Coordinated across officers to keep workshops and events running on schedule",
      "Handled the operational work that let technical leads focus on content",
    ],
  },
];

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  stack: string[];
  year: string;
  role: string;
  isLead: boolean;
  isStartup: boolean;
  liveUrl: string;
  githubUrl: string;
  problem: string;
  myRole: string;
  decisions: { title: string; description: string }[];
  outcome: string;
}

export const projects: Project[] = [
  {
    slug: "clutch",
    title: "Clutch",
    tagline:
      "A daily women's health platform for tracking, sharing, and discovering community.",
    description:
      "Co-founded Clutch to give women a trusted daily space to understand their health. Built the full frontend — mobile in React Native, web in Next.js.",
    image: "/clutch-tabling-1.jpg",
    stack: ["React Native", "Next.js", "Firebase", "TypeScript", "Expo"],
    year: "2024–present",
    role: "Co-founder · Frontend Lead",
    isLead: true,
    isStartup: true,
    liveUrl: "",
    githubUrl: "https://github.com/naviadepu",
    problem:
      "Women's health apps collect data but miss the emotional and social layer. There's no trusted daily space to understand what's normal — or to hear that other people feel the same way.",
    myRole:
      "Co-founded Clutch and led all frontend development. Designed the core sharing and discovery flows, built the React Native mobile app, and shipped the web platform in Next.js. Also drove product decisions on anonymity, daily prompts, and onboarding.",
    decisions: [
      {
        title: "Anonymous by default",
        description:
          "We made sharing anonymous from day one. Health is personal. Removing identity pressure unlocked more honest content and grew beta engagement faster than we expected.",
      },
      {
        title: "Daily prompt system",
        description:
          "Instead of an open post feed, a daily prompt anchors the experience. This reduced blank-screen anxiety and dramatically improved daily active use in early testing.",
      },
      {
        title: "React Native over pure native",
        description:
          "Chose RN for a two-person team. We ship iOS and Android from one codebase. The animation fidelity tradeoff was partially solved with Reanimated for the key transitions.",
      },
    ],
    outcome:
      "In active beta with 200+ users on the waitlist. Work presented at IEEE ComSoc student chapter. Continuing to iterate on the sharing and discovery experience.",
  },
  {
    slug: "vivience",
    title: "Vivience AI",
    tagline:
      "AI-driven UX research tooling for qualitative analysis at Animasentio Lab.",
    description:
      "Research contributor at the Animasentio Lab. Built AI tooling to accelerate qualitative analysis of user interview transcripts. Paper accepted to IEEE ComComAp 2025.",
    image: "/vivience_ai.png",
    stack: ["Python", "OpenAI API", "Next.js", "React", "TypeScript"],
    year: "2024",
    role: "Research Contributor · Animasentio Lab",
    isLead: false,
    isStartup: false,
    liveUrl:
      "https://cmii.gsu.edu/2025/11/04/exploring-empathy-in-artificial-intelligence-the-emergence-of-lightarch-and-annelore/",
    githubUrl: "",
    problem:
      "Qualitative UX research generates enormous amounts of unstructured interview data. Researchers spend more time coding themes than acting on insights — slowing the entire design cycle.",
    myRole:
      "Research contributor at Animasentio Lab under faculty supervision. Built the frontend interface for the AI-powered analysis dashboard and contributed to prompt engineering for theme extraction from interview transcripts.",
    decisions: [
      {
        title: "LLM-first theme extraction",
        description:
          "We used GPT-4 for initial theme extraction from transcripts. The key was structuring output as a JSON schema the frontend could render directly — no post-processing layer needed.",
      },
      {
        title: "Lightweight frontend over BI tools",
        description:
          "Rather than integrating with Tableau or PowerBI, we built a lean Next.js dashboard. Researchers needed speed and portability, not enterprise scale.",
      },
    ],
    outcome:
      "Paper accepted to IEEE ComComAp 2025. Research continuing into the next lab cycle. Results demonstrated 40% reduction in manual coding time in pilot study.",
  },
  {
    slug: "binder",
    title: "Binder",
    tagline:
      "An all-in-one academic workspace for course management, scheduling, and AI assistance.",
    description:
      "Built for students juggling too many tabs. Binder brings course management, scheduling, and an AI study assistant into one organized workspace.",
    image: "/binder1.png",
    stack: ["Next.js", "React", "Firebase", "OpenAI API", "TypeScript"],
    year: "2023",
    role: "Solo Developer",
    isLead: false,
    isStartup: true,
    liveUrl: "https://binder-ivory.vercel.app/",
    githubUrl: "https://github.com/naviadepu",
    problem:
      "Students manage coursework across 5–7 apps: LMS, calendar, notes, chat. Context switching is the silent productivity killer that nobody talks about.",
    myRole:
      "Solo project from concept to deployed product. Built the full stack — auth, course data model, AI chat integration with course context, and the schedule view. Designed and shipped in 3 weeks.",
    decisions: [
      {
        title: "AI as co-pilot, not search engine",
        description:
          "The AI assistant has context about your courses — syllabus, upcoming deadlines, study history — so it gives targeted answers, not generic ones. The context injection was the hardest engineering problem.",
      },
      {
        title: "Firebase over a custom backend",
        description:
          "Speed to MVP was the priority. Firebase handled auth, real-time updates, and storage in one SDK. The tradeoff was querying flexibility, which became a constraint when adding filters.",
      },
    ],
    outcome:
      "Live at binder-ivory.vercel.app. Used by 50+ GSU students. Pitched at entrepreneurship competition. Still getting occasional sign-ups organically.",
  },
];

export const archiveProjects = [
  {
    title: "Notion Clone",
    description: "A connected workspace for documents, reading, and planning.",
    url: "https://notion-clone-ebon-ten.vercel.app/",
  },
  {
    title: "UN Goals Website",
    description: "A site focused on the UN Sustainable Development Goals.",
    url: "",
  },
  {
    title: "Flashcards-Telugu",
    description: "An interactive flashcard app for learning Telugu.",
    url: "",
  },
  {
    title: "Adventure Game in Python",
    description: "A text-based adventure game built in Python.",
    url: "",
  },
];
