export interface TechItem {
  id: string;
  name: string;
  icon: string;
  category: string;
  description: string;
  experience: "Beginner" | "Intermediate" | "Advanced" | "Expert";
  featured?: boolean;
}

export const techCategories = [
  "All",
  "Android Development",
  "Web Development",
  "Backend",
  "Cloud",
  "AI Tools",
  "UI/UX",
  "Development Tools"
];

export const techData: TechItem[] = [
  // Android Development
  { id: "android", name: "Android Studio", icon: "android", category: "Android Development", description: "Official IDE for Android development.", experience: "Expert", featured: true },
  { id: "kotlin", name: "Kotlin", icon: "kotlin", category: "Android Development", description: "Modern, expressive programming language.", experience: "Expert", featured: true },
  { id: "java", name: "Java", icon: "java", category: "Android Development", description: "Legacy enterprise and Android language.", experience: "Advanced" },
  { id: "compose", name: "Jetpack Compose", icon: "compose", category: "Android Development", description: "Modern native UI toolkit for Android.", experience: "Advanced", featured: true },
  { id: "material3", name: "Material 3", icon: "material", category: "Android Development", description: "Google's latest design system.", experience: "Expert" },
  { id: "room", name: "Room Database", icon: "database", category: "Android Development", description: "SQLite object mapping library.", experience: "Advanced" },
  { id: "nav", name: "Navigation Compose", icon: "route", category: "Android Development", description: "In-app navigation for Compose.", experience: "Advanced" },
  { id: "mvvm", name: "MVVM", icon: "architecture", category: "Android Development", description: "Model-View-ViewModel pattern.", experience: "Expert" },
  { id: "clean", name: "Clean Architecture", icon: "layers", category: "Android Development", description: "Separation of concerns in code.", experience: "Advanced" },
  { id: "coroutines", name: "Coroutines", icon: "zap", category: "Android Development", description: "Asynchronous programming in Kotlin.", experience: "Expert" },
  
  // Web Development
  { id: "nextjs", name: "Next.js", icon: "nextjs", category: "Web Development", description: "React framework for production.", experience: "Advanced", featured: true },
  { id: "react", name: "React", icon: "react", category: "Web Development", description: "Library for web and native UIs.", experience: "Advanced" },
  { id: "typescript", name: "TypeScript", icon: "typescript", category: "Web Development", description: "Strongly typed JavaScript.", experience: "Advanced", featured: true },
  { id: "javascript", name: "JavaScript", icon: "javascript", category: "Web Development", description: "Core language of the web.", experience: "Expert" },
  { id: "html", name: "HTML5", icon: "html", category: "Web Development", description: "Web page structure and semantic markup.", experience: "Expert" },
  { id: "css", name: "CSS3", icon: "css", category: "Web Development", description: "Styling and visual design.", experience: "Expert" },
  { id: "tailwind", name: "Tailwind CSS", icon: "tailwind", category: "Web Development", description: "Utility-first CSS framework.", experience: "Expert" },
  { id: "framer", name: "Framer Motion", icon: "framer", category: "Web Development", description: "Production-ready animation library.", experience: "Advanced", featured: true },
  
  // Backend & Cloud
  { id: "firebase", name: "Firebase", icon: "firebase", category: "Backend", description: "Google's mobile platform.", experience: "Expert", featured: true },
  { id: "firestore", name: "Firestore", icon: "database", category: "Backend", description: "NoSQL document database.", experience: "Expert" },
  { id: "auth", name: "Authentication", icon: "lock", category: "Backend", description: "Secure user login systems.", experience: "Expert" },
  { id: "storage", name: "Storage", icon: "cloud", category: "Cloud", description: "Cloud file storage solutions.", experience: "Advanced" },
  { id: "functions", name: "Cloud Functions", icon: "server", category: "Cloud", description: "Serverless backend logic.", experience: "Advanced" },
  { id: "rest", name: "REST API", icon: "api", category: "Backend", description: "API design and integration.", experience: "Expert" },
  
  // AI Tools
  { id: "chatgpt", name: "ChatGPT", icon: "chatgpt", category: "AI Tools", description: "Advanced conversational AI.", experience: "Expert" },
  { id: "gemini", name: "Gemini", icon: "gemini", category: "AI Tools", description: "Google's multimodal AI.", experience: "Advanced" },
  { id: "claude", name: "Claude", icon: "claude", category: "AI Tools", description: "Anthropic's helpful assistant.", experience: "Advanced" },
  { id: "antigravity", name: "Antigravity AI", icon: "rocket", category: "AI Tools", description: "Agentic coding and automation.", experience: "Expert" },
  { id: "copilot", name: "GitHub Copilot", icon: "copilot", category: "AI Tools", description: "AI pair programmer.", experience: "Expert" },
  { id: "cursor", name: "Cursor AI", icon: "cursor", category: "AI Tools", description: "AI-first code editor.", experience: "Advanced" },
  
  // UI/UX & Design
  { id: "figma", name: "Figma", icon: "figma", category: "UI/UX", description: "Collaborative interface design.", experience: "Advanced" },
  { id: "glass", name: "Glassmorphism", icon: "droplet", category: "UI/UX", description: "Modern frosted glass UI.", experience: "Expert" },
  { id: "anim", name: "Animation Design", icon: "play", category: "UI/UX", description: "Smooth micro-interactions.", experience: "Advanced" },
  
  // Development Tools
  { id: "git", name: "Git", icon: "git", category: "Development Tools", description: "Version control system.", experience: "Expert" },
  { id: "github", name: "GitHub", icon: "github", category: "Development Tools", description: "Code hosting and collaboration.", experience: "Expert" },
  { id: "vscode", name: "VS Code", icon: "vscode", category: "Development Tools", description: "Extensible code editor.", experience: "Expert" },
  { id: "postman", name: "Postman", icon: "postman", category: "Development Tools", description: "API development and testing.", experience: "Advanced" },
  { id: "hostinger", name: "Hostinger", icon: "hostinger", category: "Development Tools", description: "Web hosting and domain management.", experience: "Advanced" }
];
