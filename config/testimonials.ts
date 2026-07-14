export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  review: string;
  date: string;
  type: "Student" | "App User" | "Client" | "Developer";
  featured?: boolean;
  appName?: string;
  courseName?: string;
  country?: string;
}

export interface Stat {
  id: string;
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
}

export const testimonialsData: Testimonial[] = [
  {
    id: "t1",
    name: "Rahul Sharma",
    role: "Android Developer",
    type: "Student",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    review: "The Jetpack Compose course completely changed how I build apps. The clean architecture concepts were explained brilliantly with real-world examples.",
    date: "May 2024",
    courseName: "Master Android Development",
    featured: true,
    country: "India"
  },
  {
    id: "t2",
    name: "Sarah Jenkins",
    role: "Freelance Designer",
    type: "App User",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    review: "I've been using CashFlowAI for my freelance business. It is by far the most intuitive and beautifully designed expense tracker I've ever used. The AI categorizations are magic!",
    date: "April 2024",
    appName: "CashFlowAI",
    country: "USA"
  },
  {
    id: "t3",
    name: "Amit Patel",
    role: "Computer Science Student",
    type: "Student",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    review: "The DSA and Programming tutorials on YouTube helped me crack my first tech internship. The explanations are to the point and very easy to grasp.",
    date: "June 2024",
    courseName: "DSA Quick Notes"
  },
  {
    id: "t4",
    name: "Elena Rodriguez",
    role: "Small Business Owner",
    type: "Client",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    review: "Parsuram built an incredibly fast and scalable e-commerce website for my business. The attention to detail and premium design exceeded all my expectations.",
    date: "March 2024",
    country: "Spain"
  }
];

export const trustStats: Stat[] = [
  { id: "s1", label: "Happy Users", value: 50000, suffix: "+" },
  { id: "s2", label: "Students", value: 25000, suffix: "+" },
  { id: "s3", label: "App Downloads", value: 100000, suffix: "+" },
  { id: "s4", label: "Projects Delivered", value: 40, suffix: "+" },
  { id: "s5", label: "Average Rating", value: 4.9, prefix: "★ " }
];
