export interface Article {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  thumbnail: string;
  readingTime: string;
  publishedDate: string;
  author: string;
  featured?: boolean;
}

export interface Resource {
  id: string;
  title: string;
  fileType: "PDF" | "ZIP" | "TXT" | "FIG";
  fileSize: string;
  icon: string;
}

export interface Prompt {
  id: string;
  title: string;
  description: string;
  promptText: string;
}

export const blogCategories = [
  "All",
  "Android",
  "AI",
  "Web Development",
  "Programming",
  "Computer Basics",
  "Firebase",
  "Career",
  "Downloads"
];

export const popularTags = [
  "Android",
  "Jetpack Compose",
  "Kotlin",
  "AI",
  "React",
  "Firebase",
  "Next.js",
  "GitHub",
  "Material 3"
];

export const articles: Article[] = [
  {
    id: "a1",
    title: "Mastering Jetpack Compose State Management",
    excerpt: "Learn how to effectively manage state in Jetpack Compose using State, derivedStateOf, and ViewModels to build reactive UI.",
    category: "Android",
    thumbnail: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?q=80&w=800&auto=format&fit=crop",
    readingTime: "5 min read",
    publishedDate: "March 15, 2024",
    author: "Parsuram Naik",
    featured: true
  },
  {
    id: "a2",
    title: "How to Build AI Agents with LangChain",
    excerpt: "A step-by-step guide to building autonomous AI agents capable of web searching and reasoning using LangChain and Python.",
    category: "AI",
    thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop",
    readingTime: "8 min read",
    publishedDate: "April 2, 2024",
    author: "Parsuram Naik"
  },
  {
    id: "a3",
    title: "React Server Components Explained",
    excerpt: "Understand the core concepts behind React Server Components (RSC) and how they optimize web performance in Next.js 14.",
    category: "Web Development",
    thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=800&auto=format&fit=crop",
    readingTime: "6 min read",
    publishedDate: "May 10, 2024",
    author: "Parsuram Naik"
  },
  {
    id: "a4",
    title: "Firestore Security Rules Best Practices",
    excerpt: "Protect your Firebase backend from unauthorized access. Learn how to write robust security rules for Cloud Firestore.",
    category: "Firebase",
    thumbnail: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=800&auto=format&fit=crop",
    readingTime: "4 min read",
    publishedDate: "June 1, 2024",
    author: "Parsuram Naik"
  }
];

export const resources: Resource[] = [
  { id: "r1", title: "Android Cheat Sheet 2024", fileType: "PDF", fileSize: "2.4 MB", icon: "Smartphone" },
  { id: "r2", title: "Essential Git Commands", fileType: "PDF", fileSize: "1.1 MB", icon: "GitBranch" },
  { id: "r3", title: "Firebase Security Guide", fileType: "PDF", fileSize: "3.5 MB", icon: "Database" },
  { id: "r4", title: "Developer Resume Template", fileType: "FIG", fileSize: "5.0 MB", icon: "FileText" },
  { id: "r5", title: "DSA Quick Notes", fileType: "TXT", fileSize: "500 KB", icon: "Code2" },
  { id: "r6", title: "UI Components Library", fileType: "ZIP", fileSize: "15 MB", icon: "Layout" },
];

export const prompts: Prompt[] = [
  { 
    id: "p1", 
    title: "Android Development Prompt", 
    description: "Generate Kotlin/Compose code adhering to Clean Architecture.", 
    promptText: "You are an expert Android developer. Write Jetpack Compose UI code following Material 3 guidelines and MVVM architecture. Ensure code is production-ready."
  },
  { 
    id: "p2", 
    title: "Next.js UI Component Prompt", 
    description: "Create accessible and responsive React components.", 
    promptText: "Write a React functional component using Next.js 14, Tailwind CSS, and Framer Motion. Ensure it is accessible, mobile-first, and uses Lucide icons."
  },
  { 
    id: "p3", 
    title: "Firebase Rules Prompt", 
    description: "Generate secure Firestore rules based on data models.", 
    promptText: "Write Firebase Firestore security rules for a collection named 'users'. Only authenticated users can read their own documents, and only admins can write."
  }
];
