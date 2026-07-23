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
  "Material 3",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "System Design",
  "GraphQL",
  "Microservices",
  "Docker",
  "Framer Motion",
  "Web3",
  "Python"
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
  { id: "r7", title: "Next.js Performance Guide", fileType: "PDF", fileSize: "1.8 MB", icon: "Layout" },
  { id: "r8", title: "System Architecture Notes", fileType: "TXT", fileSize: "800 KB", icon: "Database" },
];

export const prompts: Prompt[] = [
  { 
    id: "p1", 
    title: "Android Architecture", 
    description: "Generate Kotlin code for Clean Architecture.", 
    promptText: "You are an expert Android developer. Write a complete MVVM + Clean Architecture implementation for a UseCase and Repository using Kotlin Coroutines."
  },
  { 
    id: "p2", 
    title: "Next.js 14 App Router", 
    description: "Create Server Components and Actions.", 
    promptText: "Write a React Server Component using Next.js 14 App Router. Implement a Server Action for form submission and handle loading states using useFormStatus."
  },
  { 
    id: "p3", 
    title: "Firebase Security Rules", 
    description: "Generate secure Firestore rules.", 
    promptText: "Write Firebase Firestore security rules for a 'posts' collection. Users can read all posts, but only authenticated authors can create, update, or delete their own posts."
  },
  { 
    id: "p4", 
    title: "Tailwind UI Components", 
    description: "Build beautiful, responsive UI.", 
    promptText: "Write a fully responsive, dark-mode compatible React component using Tailwind CSS. Use glassmorphism effects and ensure WAI-ARIA accessibility compliance."
  },
  { 
    id: "p5", 
    title: "SQL Query Optimizer", 
    description: "Analyze and optimize slow SQL queries.", 
    promptText: "You are a database expert. Analyze the following SQL query for performance bottlenecks, explain the EXPLAIN ANALYZE output, and suggest indexing strategies."
  },
  { 
    id: "p6", 
    title: "System Design API", 
    description: "Design RESTful and GraphQL APIs.", 
    promptText: "Design a RESTful API for an e-commerce checkout flow. Provide the OpenAPI swagger spec, including rate limiting, pagination, and idempotency keys."
  },
  { 
    id: "p7", 
    title: "Docker Compose Setup", 
    description: "Containerize multi-tier applications.", 
    promptText: "Write a docker-compose.yml file for a Node.js backend, PostgreSQL database, and Redis cache. Include healthchecks, persistent volumes, and custom networks."
  },
  { 
    id: "p8", 
    title: "Framer Motion Animations", 
    description: "Add buttery smooth UI animations.", 
    promptText: "Create a complex React layout animation using Framer Motion (AnimatePresence, layoutId, and variants) for a grid-to-modal transition."
  },
  { 
    id: "p9", 
    title: "Jest & Testing Library", 
    description: "Write comprehensive unit tests.", 
    promptText: "Write a suite of unit tests using Jest and React Testing Library for a custom hook that fetches data. Mock the API responses and test loading/error states."
  },
  { 
    id: "p10", 
    title: "Kubernetes Deployment", 
    description: "Deploy apps to K8s clusters.", 
    promptText: "Write Kubernetes manifest files (Deployment, Service, Ingress) for a stateless web application. Include resource requests/limits and a HorizontalPodAutoscaler."
  },
  { 
    id: "p11", 
    title: "Regex Builder", 
    description: "Generate complex regular expressions.", 
    promptText: "Write a regular expression to parse log files. It must capture the timestamp, log level (INFO/WARN/ERROR), and the message string, ignoring empty lines."
  },
  { 
    id: "p12", 
    title: "Git Workflow Master", 
    description: "Resolve complex merge conflicts.", 
    promptText: "Explain how to cleanly perform an interactive rebase to squash the last 5 commits into a single commit, reword the message, and force push to origin."
  },
  { 
    id: "p13", 
    title: "TypeScript Generics", 
    description: "Create advanced TS utility types.", 
    promptText: "Write an advanced TypeScript generic type that recursively makes all properties of a deeply nested object partial, except for a specific keys array."
  },
  { 
    id: "p14", 
    title: "Python Data Analysis", 
    description: "Process data with Pandas.", 
    promptText: "Write a Python script using Pandas to read a large CSV file in chunks, filter rows based on a complex date condition, and aggregate the results into a pivot table."
  },
  { 
    id: "p15", 
    title: "Nginx Config Generator", 
    description: "Setup reverse proxies and SSL.", 
    promptText: "Write an Nginx configuration file for a reverse proxy routing traffic to a Node.js app on port 3000. Include SSL/TLS configurations and gzip compression."
  },
  { 
    id: "p16", 
    title: "Rust CLI Application", 
    description: "Build fast command-line tools.", 
    promptText: "Write a complete Rust CLI application using the `clap` crate. The tool should accept a file path, read its contents asynchronously, and output the word count."
  },
  { 
    id: "p17", 
    title: "AWS CDK Infrastructure", 
    description: "Infrastructure as Code with AWS CDK.", 
    promptText: "Write an AWS CDK stack in TypeScript that provisions an S3 bucket with versioning, a CloudFront distribution, and an IAM policy for a Serverless frontend."
  },
  { 
    id: "p18", 
    title: "Go Microservice", 
    description: "Build scalable backends in Go.", 
    promptText: "Write a Go microservice using the standard `net/http` library. Implement graceful shutdown, structured JSON logging, and middleware for JWT authentication."
  },
  { 
    id: "p19", 
    title: "React Native Performance", 
    description: "Optimize React Native apps.", 
    promptText: "Identify memory leaks and render bottlenecks in this React Native component. Suggest optimizations using React.memo, useMemo, and the FlashList component."
  },
  { 
    id: "p20", 
    title: "Bash Script Automation", 
    description: "Automate repetitive terminal tasks.", 
    promptText: "Write a robust bash script with error handling (set -e) that takes a directory path, finds all images, compresses them using ImageMagick, and logs the output."
  },
  { 
    id: "p21", 
    title: "Web3 Smart Contract", 
    description: "Write secure Solidity contracts.", 
    promptText: "Write a Solidity smart contract for an ERC-721 NFT collection. Implement security best practices, reentrancy guards, and an owner-only minting function."
  }
];

export function getArticleById(id: string): Article | undefined {
  return articles.find((article) => article.id === id);
}
