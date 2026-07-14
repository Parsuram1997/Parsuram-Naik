export interface WebsiteFeature {
  id: string;
  name: string;
}

export interface WebsiteData {
  id: string;
  name: string;
  description: string;
  status: "LIVE" | "COMING SOON";
  category: "Portfolio" | "Business" | "Dashboard" | "SaaS" | "Upcoming";
  logo: string;
  technologies: string[];
  features: WebsiteFeature[];
  screenshots: string[];
  url?: string;
  releaseDate?: string;
  featured: boolean;
}

export const websitesData: WebsiteData[] = [
  {
    id: "makemypc",
    name: "MakeMyPC",
    description: "Build your own custom PC with intelligent compatibility checking.",
    status: "COMING SOON",
    category: "Business",
    logo: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?q=80&w=200&auto=format&fit=crop",
    technologies: ["Next.js", "React", "Firebase", "TypeScript"],
    features: [
      { id: "res", name: "Responsive" },
      { id: "seo", name: "SEO Optimized" },
      { id: "fast", name: "Fast Loading" },
      { id: "modern", name: "Modern UI" }
    ],
    screenshots: [
      "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?q=80&w=800&auto=format&fit=crop"
    ],
    featured: true,
  },
  {
    id: "parsu-tech-portfolio",
    name: "Parsuram Naik Portfolio",
    description: "Official personal portfolio website showcasing projects and skills.",
    status: "LIVE",
    category: "Portfolio",
    logo: "https://images.unsplash.com/photo-1553028826-f4804a6dba3b?q=80&w=200&auto=format&fit=crop",
    technologies: ["Next.js", "React", "Framer Motion", "Hostinger"],
    features: [
      { id: "modern", name: "Modern UI" },
      { id: "fast", name: "Fast Loading" },
      { id: "cloud", name: "Cloud Hosted" },
      { id: "res", name: "Responsive" }
    ],
    screenshots: [
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop"
    ],
    url: "https://parsuram-naik.firebaseapp.com",
    releaseDate: "2026",
    featured: true,
  },
  {
    id: "future-admin-dashboard",
    name: "Future Admin Dashboard",
    description: "Modern Firebase Admin Panel with robust analytics and management.",
    status: "COMING SOON",
    category: "Dashboard",
    logo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=200&auto=format&fit=crop",
    technologies: ["Next.js", "Firebase", "TypeScript", "Tailwind CSS"],
    features: [
      { id: "secure", name: "Secure" },
      { id: "cloud", name: "Cloud Hosted" },
      { id: "res", name: "Responsive" }
    ],
    screenshots: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop"
    ],
    featured: false,
  },
  {
    id: "future-saas-products",
    name: "Future SaaS Products",
    description: "Innovative Software-as-a-Service platforms currently in planning phase.",
    status: "COMING SOON",
    category: "SaaS",
    logo: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=200&auto=format&fit=crop",
    technologies: ["Next.js", "React", "Node.js", "Firebase"],
    features: [
      { id: "modern", name: "Modern UI" },
      { id: "fast", name: "Fast Loading" },
      { id: "secure", name: "Secure" }
    ],
    screenshots: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop"
    ],
    featured: false,
  },
  {
    id: "speedtool-hub",
    name: "SpeedTool Hub",
    description: "A comprehensive suite of high-performance web tools and utilities designed to boost productivity for developers and creators.",
    status: "LIVE",
    category: "SaaS",
    logo: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=200&auto=format&fit=crop",
    technologies: ["Next.js", "React", "Tailwind CSS"],
    features: [
      { id: "fast", name: "Fast Loading" },
      { id: "res", name: "Responsive" },
      { id: "tools", name: "Utility Suite" }
    ],
    screenshots: [
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop"
    ],
    featured: true,
  },
  {
    id: "courseflow",
    name: "CourseFlow",
    description: "An interactive Learning Management System (LMS) platform designed for creators to seamlessly host, manage, and sell digital courses.",
    status: "LIVE",
    category: "SaaS",
    logo: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=200&auto=format&fit=crop",
    technologies: ["Next.js", "Firebase", "TypeScript", "Stripe"],
    features: [
      { id: "lms", name: "Video Hosting" },
      { id: "payments", name: "Secure Payments" },
      { id: "secure", name: "Secure" }
    ],
    screenshots: [
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop"
    ],
    featured: true,
  },
  {
    id: "dokanii",
    name: "Dokanii.com",
    description: "A robust digital e-commerce storefront and marketplace platform enabling small businesses to sell online with zero friction.",
    status: "LIVE",
    category: "Business",
    logo: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=200&auto=format&fit=crop",
    technologies: ["React", "Node.js", "MongoDB", "Redux"],
    features: [
      { id: "ecommerce", name: "E-Commerce" },
      { id: "cart", name: "Smart Cart" },
      { id: "modern", name: "Modern UI" }
    ],
    screenshots: [
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=800&auto=format&fit=crop"
    ],
    url: "https://dokanii.com",
    featured: true,
  }
];

export const websiteCategories = ["All", "Portfolio", "Business", "Dashboard", "SaaS", "Upcoming"];
