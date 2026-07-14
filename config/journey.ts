export interface Achievement {
  id: string;
  icon: string;
  title: string;
  value: number;
  suffix?: string;
  description: string;
}

export interface TimelineEvent {
  id: string;
  year: string;
  title: string;
  description: string;
  icon: string;
}

export interface FocusItem {
  id: string;
  title: string;
  icon: string;
}

export interface Goal {
  id: string;
  title: string;
  phase: string;
}

export interface Value {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const achievementsData: Achievement[] = [
  { id: "apps", icon: "📱", title: "Android Apps", value: 5, suffix: "+", description: "Published on Play Store" },
  { id: "web", icon: "🌐", title: "Web Projects", value: 10, suffix: "+", description: "Full-stack platforms" },
  { id: "youtube", icon: "🎥", title: "YouTube Videos", value: 100, suffix: "+", description: "Educational tutorials" },
  { id: "students", icon: "👨‍🎓", title: "Students Reached", value: 50, suffix: "K+", description: "Across the globe" },
  { id: "downloads", icon: "⬇️", title: "Downloads", value: 10, suffix: "K+", description: "Active users" },
  { id: "projects", icon: "🚀", title: "Current Projects", value: 3, suffix: "", description: "In active development" }
];

export const timelineData: TimelineEvent[] = [
  { id: "edu", year: "2018", title: "Started Computer Education", description: "Began my journey into the world of technology and programming.", icon: "BookOpen" },
  { id: "android", year: "2020", title: "Started Android Development", description: "Dived deep into Java, Kotlin, and Android Studio.", icon: "Smartphone" },
  { id: "firstapp", year: "2021", title: "Created First Android Application", description: "Launched my very first app to the public.", icon: "Rocket" },
  { id: "youtube", year: "2022", title: "Started YouTube Channel", description: "Began sharing my knowledge and teaching others.", icon: "Youtube" },
  { id: "cashflow", year: "2023", title: "Built CashFlowAI", description: "Developed an AI-powered financial tracking application.", icon: "LineChart" },
  { id: "makemypc", year: "2023", title: "Started MakeMyPC", description: "Launched a platform for custom PC building.", icon: "Monitor" },
  { id: "ai", year: "2024", title: "Learning AI Development", description: "Integrating Large Language Models into digital products.", icon: "Brain" },
  { id: "future", year: "Present", title: "Building Future Products", description: "Continuously creating SaaS and Mobile applications.", icon: "Code2" }
];

export const focusData: FocusItem[] = [
  { id: "android", title: "Building Android Applications", icon: "📱" },
  { id: "ai", title: "Exploring Artificial Intelligence", icon: "🤖" },
  { id: "web", title: "Developing Modern Websites", icon: "🌐" },
  { id: "edu", title: "Creating Educational Content", icon: "🎓" },
  { id: "saas", title: "Building SaaS Products", icon: "🚀" }
];

export const goalsData: Goal[] = [
  { id: "current", phase: "Current", title: "Launch More Android Apps" },
  { id: "next", phase: "Next Goal", title: "Expand YouTube Channel" },
  { id: "future", phase: "Future Goal", title: "Publish Premium Courses" },
  { id: "ai", phase: "Future Goal", title: "Build AI Products" },
  { id: "vision", phase: "Long-Term Vision", title: "Create Digital Ecosystem" }
];

export const valuesData: Value[] = [
  { id: "innovation", title: "Innovation", description: "Always exploring cutting-edge technologies to build better solutions.", icon: "Lightbulb" },
  { id: "quality", title: "Quality", description: "Writing clean, scalable code and designing pixel-perfect interfaces.", icon: "Star" },
  { id: "learning", title: "Continuous Learning", description: "Never stopping the pursuit of new knowledge and skills.", icon: "GraduationCap" },
  { id: "user", title: "User First", description: "Building products that genuinely help and delight the end-user.", icon: "Users" },
  { id: "consistency", title: "Consistency", description: "Showing up every day to build, learn, and improve.", icon: "Repeat" },
  { id: "problem", title: "Problem Solving", description: "Tackling real-world challenges through elegant engineering.", icon: "Puzzle" }
];
