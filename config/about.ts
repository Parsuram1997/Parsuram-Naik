export const aboutData = {
  header: {
    title: "About Me",
    heading: "Passionate Developer, Educator & Creator",
    description: [
      "I specialize in building premium Android applications, intelligent web platforms, and creating high-quality educational content.",
      "With a strong foundation in modern technologies and a passion for UI/UX, I help thousands of students and developers master technology while continuously building products that solve real-world problems.",
    ],
    experienceBadge: "5+ Years",
  },
  highlights: [
    {
      id: "android",
      title: "Android Apps",
      description: "Building scalable, high-performance native apps.",
      icon: "smartphone", // Will map to Lucide icon in component
      color: "blue",
    },
    {
      id: "web",
      title: "Websites",
      description: "Crafting premium, responsive modern web experiences.",
      icon: "layout",
      color: "green",
    },
    {
      id: "courses",
      title: "Courses",
      description: "Teaching technology through structured learning paths.",
      icon: "graduation-cap",
      color: "purple",
    },
    {
      id: "youtube",
      title: "YouTube",
      description: "Sharing knowledge with a growing community.",
      icon: "youtube",
      color: "red",
    },
  ],
  skills: [
    { name: "Android", progress: 95 },
    { name: "Kotlin", progress: 90 },
    { name: "Java", progress: 85 },
    { name: "React", progress: 88 },
    { name: "Next.js", progress: 85 },
    { name: "Firebase", progress: 92 },
    { name: "AI Integration", progress: 75 },
    { name: "UI/UX Design", progress: 80 },
  ],
  timeline: [
    {
      year: "Future",
      title: "Future Projects",
      description: "Expanding into advanced AI and cross-platform ecosystems.",
      active: true,
    },
    {
      year: "2023",
      title: "Started MakeMyPC",
      description: "Launched an intelligent platform to help users build custom PCs.",
    },
    {
      year: "2022",
      title: "Launched CashFlowAI",
      description: "Built and published an AI-powered personal finance management app.",
    },
    {
      year: "2020",
      title: "Built First Android App",
      description: "Developed and published my first successful Android application.",
    },
    {
      year: "2019",
      title: "Started YouTube",
      description: "Began creating video content to share programming tutorials.",
    },
    {
      year: "2018",
      title: "Started Computer Education",
      description: "Began formal journey into computer science and software development.",
    },
  ],
  techStack: [
    { name: "Android Studio", icon: "android" },
    { name: "Kotlin", icon: "kotlin" },
    { name: "Java", icon: "java" },
    { name: "Firebase", icon: "firebase" },
    { name: "React", icon: "react" },
    { name: "Next.js", icon: "nextjs" },
    { name: "GitHub", icon: "github" },
    { name: "VS Code", icon: "vscode" },
    { name: "Figma", icon: "figma" },
    { name: "Google Play", icon: "playstore" },
  ],
  achievements: [
    { label: "Apps Built", value: 10, suffix: "+" },
    { label: "Downloads", value: 50, suffix: "K+" },
    { label: "Projects", value: 20, suffix: "+" },
    { label: "Students", value: 100, suffix: "K+" },
    { label: "Tutorials", value: 500, suffix: "+" }
  ],
  workEthics: [
    { title: "Innovation", icon: "lightbulb" },
    { title: "Quality", icon: "award" },
    { title: "Performance", icon: "zap" },
    { title: "Learning", icon: "book-open" },
    { title: "Consistency", icon: "repeat" },
    { title: "User Experience", icon: "users" }
  ],
  cta: {
    heading: "Let's Build Something Amazing Together",
    buttons: [
      { text: "View My Projects", variant: "default", href: "#apps" },
      { text: "Contact Me", variant: "outline", href: "#contact" }
    ]
  }
};
