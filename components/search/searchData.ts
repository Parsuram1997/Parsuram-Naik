export interface SearchItemType {
  id: string;
  title: string;
  category: "App" | "Website" | "Course" | "Blog" | "Section" | "FAQ";
  description: string;
  href: string;
  keywords: string[];
}

export const searchData: SearchItemType[] = [
  // Sections
  { id: "home", title: "Home", category: "Section", description: "Return to the hero section.", href: "/", keywords: ["hero", "start", "welcome"] },
  { id: "about", title: "About Me", category: "Section", description: "Learn about my journey and skills.", href: "#about", keywords: ["about", "bio", "experience", "journey"] },
  { id: "contact", title: "Contact", category: "Section", description: "Let's build something amazing together.", href: "#contact", keywords: ["email", "message", "hire"] },
  
  // Apps
  { id: "cashflow", title: "CashFlowAI", category: "App", description: "Track your income and expenses with AI.", href: "/apps/cashflowai", keywords: ["finance", "money", "tracker", "android", "cashflow", "app"] },
  { id: "makemypc", title: "MakeMyPC", category: "App", description: "Custom PC Builder mobile application.", href: "#apps", keywords: ["pc", "computer", "build", "hardware"] },
  
  // Websites
  { id: "makemypc-web", title: "MakeMyPC Web", category: "Website", description: "Custom PC Builder website.", href: "#websites", keywords: ["pc", "computer", "build", "hardware", "web"] },
  
  // Courses
  { id: "course-android", title: "Android Development", category: "Course", description: "Master Android app development.", href: "#courses", keywords: ["android", "java", "kotlin", "app", "mobile"] },
  { id: "course-ai", title: "AI Fundamentals", category: "Course", description: "Learn the basics of Artificial Intelligence.", href: "#courses", keywords: ["ai", "machine learning", "neural networks"] },
  
  // YouTube
  { id: "youtube", title: "YouTube Channel", category: "Section", description: "Watch tutorials and tech videos.", href: "#youtube", keywords: ["video", "channel", "tutorials", "subscribe"] },
  
  // Blog
  { id: "blog-ai-prompts", title: "AI Prompts Guide", category: "Blog", description: "Learn how to write effective AI prompts.", href: "#blog", keywords: ["ai", "prompting", "chatgpt", "guide"] },
  { id: "blog-android-tips", title: "Android Pro Tips", category: "Blog", description: "Best practices for Android development.", href: "#blog", keywords: ["android", "tips", "development", "tricks"] },
  
  // FAQ
  { id: "faq", title: "Frequently Asked Questions", category: "FAQ", description: "Find answers to common questions.", href: "#faq", keywords: ["help", "questions", "answers", "support"] },
];

export const popularSearches = [
  "CashFlowAI",
  "MakeMyPC",
  "Android",
  "AI",
  "YouTube",
  "Courses"
];
