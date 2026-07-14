export type CourseStatus = "Free" | "Premium" | "Coming Soon";
export type CourseDifficulty = "Beginner" | "Intermediate" | "Advanced" | "All Levels";

export interface CourseData {
  id: string;
  title: string;
  description: string;
  category: string;
  difficulty: CourseDifficulty;
  duration: string;
  language: string;
  students: number;
  rating: number;
  price?: number;
  status: CourseStatus;
  thumbnailUrl: string;
  previewVideoUrl?: string;
  lessons: number;
  projects: number;
  certificate: boolean;
  lastUpdated: string;
  instructor: string;
  featured?: boolean;
}

export const courseCategories = [
  "All",
  "Free",
  "Premium",
  "Coming Soon",
  "Android",
  "AI",
  "Programming",
  "Computer",
  "Web Development",
  "Firebase"
];

export const coursesData: CourseData[] = [
  // --- Android Courses ---
  {
    id: "c1",
    title: "Master Android Development (2024)",
    description: "Learn to build production-ready Android apps from scratch using Kotlin, Jetpack Compose, and Firebase. Includes 5 real-world projects.",
    category: "Android",
    difficulty: "All Levels",
    duration: "45 Hours",
    language: "English / Hindi",
    students: 12500,
    rating: 4.9,
    price: 49.99,
    status: "Premium",
    thumbnailUrl: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?q=80&w=800&auto=format&fit=crop",
    lessons: 120,
    projects: 5,
    certificate: true,
    lastUpdated: "January 2024",
    instructor: "Parsuram Naik",
    featured: true
  },
  {
    id: "a2",
    title: "Jetpack Compose UI Masterclass",
    description: "Build beautiful, fluid, and complex user interfaces on Android with the modern declarative UI toolkit.",
    category: "Android",
    difficulty: "Intermediate",
    duration: "15 Hours",
    language: "English",
    students: 7500,
    rating: 4.8,
    status: "Free",
    thumbnailUrl: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?q=80&w=800&auto=format&fit=crop",
    lessons: 40,
    projects: 3,
    certificate: true,
    lastUpdated: "March 2024",
    instructor: "Parsuram Naik"
  },
  {
    id: "a3",
    title: "Advanced Android Architecture",
    description: "Master MVVM, Clean Architecture, Dependency Injection (Dagger Hilt), and Coroutines.",
    category: "Android",
    difficulty: "Advanced",
    duration: "25 Hours",
    language: "English / Hindi",
    students: 0,
    rating: 0,
    status: "Coming Soon",
    thumbnailUrl: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=800&auto=format&fit=crop",
    lessons: 65,
    projects: 2,
    certificate: true,
    lastUpdated: "Upcoming",
    instructor: "Parsuram Naik"
  },
  // --- AI Courses ---
  {
    id: "c2",
    title: "AI Integration for Web Apps",
    description: "A complete guide to integrating OpenAI, Gemini, and Claude APIs into your Next.js and React applications.",
    category: "AI",
    difficulty: "Intermediate",
    duration: "15 Hours",
    language: "English",
    students: 8300,
    rating: 4.8,
    status: "Free",
    thumbnailUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop",
    lessons: 45,
    projects: 2,
    certificate: true,
    lastUpdated: "February 2024",
    instructor: "Parsuram Naik"
  },
  {
    id: "ai2",
    title: "Prompt Engineering & LLM Basics",
    description: "Master the art of prompt engineering and understand how Large Language Models work under the hood.",
    category: "AI",
    difficulty: "Beginner",
    duration: "10 Hours",
    language: "English / Hindi",
    students: 12000,
    rating: 4.9,
    price: 19.99,
    status: "Premium",
    thumbnailUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop",
    lessons: 30,
    projects: 1,
    certificate: true,
    lastUpdated: "April 2024",
    instructor: "Parsuram Naik"
  },
  {
    id: "ai3",
    title: "Build AI Agents with LangChain",
    description: "Create autonomous AI agents, RAG systems, and AI workflows using LangChain and Python.",
    category: "AI",
    difficulty: "Advanced",
    duration: "30 Hours",
    language: "English",
    students: 0,
    rating: 0,
    status: "Coming Soon",
    thumbnailUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=800&auto=format&fit=crop",
    lessons: 75,
    projects: 4,
    certificate: true,
    lastUpdated: "Upcoming",
    instructor: "Parsuram Naik"
  },
  // --- Web Development Courses ---
  {
    id: "c3",
    title: "Full-Stack Next.js 14 Bootcamp",
    description: "Build scalable web applications using Next.js 14, React Server Components, Tailwind CSS, and PostgreSQL.",
    category: "Web Development",
    difficulty: "Advanced",
    duration: "60 Hours",
    language: "English / Hindi",
    students: 0,
    rating: 0,
    status: "Coming Soon",
    thumbnailUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
    lessons: 150,
    projects: 10,
    certificate: true,
    lastUpdated: "Upcoming",
    instructor: "Parsuram Naik"
  },
  {
    id: "w2",
    title: "HTML, CSS & JavaScript for Beginners",
    description: "The complete foundation for Web Development. Learn the core technologies of the web by building 10 projects.",
    category: "Web Development",
    difficulty: "Beginner",
    duration: "35 Hours",
    language: "Hindi",
    students: 25000,
    rating: 4.7,
    status: "Free",
    thumbnailUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop",
    lessons: 90,
    projects: 10,
    certificate: true,
    lastUpdated: "January 2024",
    instructor: "Parsuram Naik"
  },
  {
    id: "w3",
    title: "React.js Mastery (2024)",
    description: "Go from React beginner to expert. Master Hooks, State Management, Redux, and modern React patterns.",
    category: "Web Development",
    difficulty: "Intermediate",
    duration: "40 Hours",
    language: "English / Hindi",
    students: 18000,
    rating: 4.9,
    price: 39.99,
    status: "Premium",
    thumbnailUrl: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=800&auto=format&fit=crop",
    lessons: 110,
    projects: 6,
    certificate: true,
    lastUpdated: "May 2024",
    instructor: "Parsuram Naik"
  },
  // --- Programming Courses ---
  {
    id: "p1",
    title: "Master Java Programming",
    description: "Learn Java from scratch. Understand OOPS concepts, data structures, and algorithms to crack interviews.",
    category: "Programming",
    difficulty: "Beginner",
    duration: "30 Hours",
    language: "English / Hindi",
    students: 15400,
    rating: 4.8,
    status: "Free",
    thumbnailUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
    lessons: 85,
    projects: 3,
    certificate: true,
    lastUpdated: "March 2024",
    instructor: "Parsuram Naik"
  },
  {
    id: "p2",
    title: "Advanced Data Structures & Algorithms",
    description: "Deep dive into DSA using C++ & Java. Perfect for competitive programming and tech interviews.",
    category: "Programming",
    difficulty: "Advanced",
    duration: "50 Hours",
    language: "English",
    students: 9200,
    rating: 4.9,
    price: 39.99,
    status: "Premium",
    thumbnailUrl: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=800&auto=format&fit=crop",
    lessons: 140,
    projects: 5,
    certificate: true,
    lastUpdated: "April 2024",
    instructor: "Parsuram Naik"
  },
  {
    id: "p3",
    title: "Python for Automation",
    description: "Learn Python to automate boring tasks, scrape websites, and build useful scripts.",
    category: "Programming",
    difficulty: "Intermediate",
    duration: "20 Hours",
    language: "English / Hindi",
    students: 0,
    rating: 0,
    status: "Coming Soon",
    thumbnailUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop",
    lessons: 60,
    projects: 10,
    certificate: true,
    lastUpdated: "Upcoming",
    instructor: "Parsuram Naik"
  },
  // --- Computer Courses ---
  {
    id: "comp1",
    title: "Computer Basics & Hardware",
    description: "Understand how a computer works inside out. Learn about CPU, RAM, Motherboards, and building PCs.",
    category: "Computer",
    difficulty: "Beginner",
    duration: "10 Hours",
    language: "Hindi",
    students: 22000,
    rating: 4.7,
    status: "Free",
    thumbnailUrl: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?q=80&w=800&auto=format&fit=crop",
    lessons: 35,
    projects: 0,
    certificate: true,
    lastUpdated: "January 2024",
    instructor: "Parsuram Naik"
  },
  {
    id: "comp2",
    title: "Master Microsoft Office 2024",
    description: "Become an expert in Word, Excel, and PowerPoint. Essential skills for corporate and office jobs.",
    category: "Computer",
    difficulty: "All Levels",
    duration: "25 Hours",
    language: "English / Hindi",
    students: 18500,
    rating: 4.8,
    price: 19.99,
    status: "Premium",
    thumbnailUrl: "https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=800&auto=format&fit=crop",
    lessons: 90,
    projects: 4,
    certificate: true,
    lastUpdated: "May 2024",
    instructor: "Parsuram Naik"
  },
  {
    id: "comp3",
    title: "Networking & Security Fundamentals",
    description: "Learn the basics of computer networks, IP addresses, routers, and how to stay safe online.",
    category: "Computer",
    difficulty: "Intermediate",
    duration: "15 Hours",
    language: "English",
    students: 0,
    rating: 0,
    status: "Coming Soon",
    thumbnailUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop",
    lessons: 45,
    projects: 2,
    certificate: true,
    lastUpdated: "Upcoming",
    instructor: "Parsuram Naik"
  },
  // --- Firebase Courses ---
  {
    id: "fb1",
    title: "Firebase Authentication Mastery",
    description: "Implement secure login systems using Email, Google, Apple, and Phone auth in your apps.",
    category: "Firebase",
    difficulty: "Beginner",
    duration: "8 Hours",
    language: "English",
    students: 8400,
    rating: 4.9,
    status: "Free",
    thumbnailUrl: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=800&auto=format&fit=crop",
    lessons: 25,
    projects: 2,
    certificate: true,
    lastUpdated: "February 2024",
    instructor: "Parsuram Naik"
  },
  {
    id: "fb2",
    title: "Build Scalable Backends with Firestore",
    description: "Master NoSQL database design, complex queries, and security rules in Cloud Firestore.",
    category: "Firebase",
    difficulty: "Intermediate",
    duration: "18 Hours",
    language: "English / Hindi",
    students: 6100,
    rating: 4.8,
    price: 29.99,
    status: "Premium",
    thumbnailUrl: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=800&auto=format&fit=crop",
    lessons: 55,
    projects: 3,
    certificate: true,
    lastUpdated: "June 2024",
    instructor: "Parsuram Naik"
  },
  {
    id: "fb3",
    title: "Firebase Cloud Functions & Stripe",
    description: "Write backend serverless logic and integrate Stripe for payments in your mobile and web apps.",
    category: "Firebase",
    difficulty: "Advanced",
    duration: "22 Hours",
    language: "English",
    students: 0,
    rating: 0,
    status: "Coming Soon",
    thumbnailUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    lessons: 40,
    projects: 1,
    certificate: false,
    lastUpdated: "Upcoming",
    instructor: "Parsuram Naik"
  }
];

export const whyLearnData = [
  { title: "Real Projects", description: "Build actual applications you can put on your resume, not just hello-world apps.", icon: "Briefcase" },
  { title: "Practical Learning", description: "Focus on real-world engineering problems and modern industry practices.", icon: "Code" },
  { title: "Industry Standards", description: "Learn scalable architecture, clean code, and production deployment.", icon: "Award" },
  { title: "Lifetime Updates", description: "Get free access to new content whenever technologies or frameworks update.", icon: "RefreshCw" },
  { title: "Hands-on Exercises", description: "Practice with coding challenges, quizzes, and assigned homework.", icon: "Edit3" },
  { title: "Community Support", description: "Join a private community of developers to ask questions and network.", icon: "Users" }
];
