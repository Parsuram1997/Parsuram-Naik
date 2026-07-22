export interface ResumeHighlight {
  id: string;
  title: string;
  category: string;
  icon: string;
  description: string;
  gradient: string;
}

export interface ResumeStat {
  id: string;
  label: string;
  value: string;
  suffix?: string;
  icon: string;
}

export interface ResumeConfig {
  version: string;
  lastUpdated: string;
  pdfUrl: string;
  fileSize: string;
  estimatedDownloadTime: string;
  verified: boolean;
  pageCount: number;
  
  summary: {
    name: string;
    title: string;
    yearsOfExperience: string;
    currentFocus: string;
    location: string;
    availability: string;
    bio: string;
    email: string;
    github: string;
    linkedin: string;
  };
  
  highlights: ResumeHighlight[];
  stats: ResumeStat[];
}

export const resumeConfig: ResumeConfig = {
  version: "v3.2",
  lastUpdated: "July 2026",
  pdfUrl: "/resume.pdf",
  fileSize: "1.8 MB",
  estimatedDownloadTime: "~0.8s",
  verified: true,
  pageCount: 2,

  summary: {
    name: "Parsuram Naik",
    title: "Android Developer & Full-Stack Engineer",
    yearsOfExperience: "3+ Years Experience",
    currentFocus: "Native Mobile (Kotlin / Jetpack Compose), AI Systems & Next.js 16",
    location: "Bhubaneswar, Odisha, India",
    availability: "Available for Freelance & Full-Time Roles",
    bio: "Passionate mobile & web software engineer crafting production-grade Android apps, AI-powered tools, and scalable web architectures used by 100,000+ users worldwide.",
    email: "hello@parsuram.com",
    github: "https://github.com",
    linkedin: "https://linkedin.com"
  },

  highlights: [
    {
      id: "h1",
      title: "Android Development",
      category: "Mobile",
      icon: "Smartphone",
      description: "Jetpack Compose, MVVM Architecture, Kotlin Coroutines, Clean Code & Hilt DI",
      gradient: "from-emerald-500/20 to-teal-500/10"
    },
    {
      id: "h2",
      title: "Kotlin & Java Core",
      category: "Language",
      icon: "Code2",
      description: "Idiomatic Kotlin syntax, Java OOP design patterns, multithreading & memory tuning",
      gradient: "from-purple-500/20 to-indigo-500/10"
    },
    {
      id: "h3",
      title: "Jetpack Compose UI",
      category: "UI Framework",
      icon: "Layers",
      description: "Declarative UI rendering, custom canvas graphics, fluid animations & dark mode themes",
      gradient: "from-cyan-500/20 to-blue-500/10"
    },
    {
      id: "h4",
      title: "Firebase Cloud Infra",
      category: "Backend",
      icon: "Flame",
      description: "Firestore NoSQL database, Auth, Cloud Messaging, Storage & Crashlytics real-time analytics",
      gradient: "from-amber-500/20 to-orange-500/10"
    },
    {
      id: "h5",
      title: "React & Next.js 16",
      category: "Web Architecture",
      icon: "Globe",
      description: "Turbopack server components, SSR/SSG rendering, Tailwind CSS & glassmorphism UX",
      gradient: "from-blue-500/20 to-cyan-500/10"
    },
    {
      id: "h6",
      title: "Node.js REST APIs",
      category: "Backend",
      icon: "Server",
      description: "Express microservices, JWT authentication, MongoDB schemas & WebSocket streaming",
      gradient: "from-green-500/20 to-emerald-500/10"
    },
    {
      id: "h7",
      title: "AI & ML Applications",
      category: "AI Integration",
      icon: "Sparkles",
      description: "Gemini AI API integration, OCR document parsing, ML Kit on-device intelligence",
      gradient: "from-violet-500/20 to-fuchsia-500/10"
    },
    {
      id: "h8",
      title: "Play Store Publishing",
      category: "DevOps",
      icon: "Play",
      description: "Google Play Console release management, AAB bundling, ASO & privacy compliance",
      gradient: "from-rose-500/20 to-pink-500/10"
    },
    {
      id: "h9",
      title: "Backend APIs & SQL",
      category: "Data",
      icon: "Database",
      description: "RESTful API contracts, Room SQLite persistence, caching & sync algorithms",
      gradient: "from-teal-500/20 to-cyan-500/10"
    },
    {
      id: "h10",
      title: "UI/UX & Glassmorphism",
      category: "Design",
      icon: "Palette",
      description: "Figma design system conversion, micro-interactions, responsive layouts & accessibility",
      gradient: "from-pink-500/20 to-rose-500/10"
    },
    {
      id: "h11",
      title: "Business Applications",
      category: "Product",
      icon: "Briefcase",
      description: "Expense tracking, appointment scheduling, inventory management & customer portals",
      gradient: "from-sky-500/20 to-blue-500/10"
    },
    {
      id: "h12",
      title: "CI/CD & Git Automation",
      category: "DevOps",
      icon: "Workflow",
      description: "GitHub Actions automation pipelines, version tagging, automated APK builds & testing",
      gradient: "from-amber-500/20 to-yellow-500/10"
    }
  ],

  stats: [
    { id: "s1", label: "Projects Completed", value: "40+", icon: "CheckCircle2" },
    { id: "s2", label: "Certificates", value: "12+", icon: "Award" },
    { id: "s3", label: "Play Store Apps", value: "10+", icon: "Smartphone" },
    { id: "s4", label: "Years Experience", value: "3+", icon: "Calendar" },
    { id: "s5", label: "Technologies", value: "15+", icon: "Code2" },
    { id: "s6", label: "Repositories", value: "50+", icon: "FolderGit2" },
    { id: "s7", label: "Published Courses", value: "5+", icon: "GraduationCap" },
    { id: "s8", label: "Global Clients", value: "25+", icon: "Users" }
  ]
};
