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
    date: "May 2026",
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
    date: "April 2026",
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
    date: "June 2026",
    courseName: "DSA Quick Notes",
    country: "India"
  },
  {
    id: "t4",
    name: "Elena Rodriguez",
    role: "Small Business Owner",
    type: "Client",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    review: "Parsuram built an incredibly fast and scalable e-commerce website for my business. The attention to detail and premium design exceeded all my expectations.",
    date: "March 2026",
    country: "Spain"
  },
  {
    id: "t5",
    name: "Marcus Vance",
    role: "Senior Kotlin Engineer",
    type: "Developer",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    review: "Parsuram's open-source repositories demonstrate top-tier architecture patterns. Clean code, MVVM, Coroutines, and Dependency Injection executed masterfully.",
    date: "May 2026",
    country: "Germany"
  },
  {
    id: "t6",
    name: "Priya Nair",
    role: "Product Manager",
    type: "App User",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    review: "Credit/Debit Tracker has made keeping track of daily transactions effortless for our team. Zero bloat, super fast, and offline-first reliability.",
    date: "June 2026",
    appName: "Credit/Debit Tracker",
    country: "India"
  },
  {
    id: "t7",
    name: "David Chen",
    role: "Full-Stack Developer",
    type: "Student",
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    review: "The Next.js 14 & Gemini AI integration guide is gold! Saved me weeks of research. Clear step-by-step instructions with working code snippets.",
    date: "April 2026",
    courseName: "Full-Stack AI Masterclass",
    country: "Canada"
  },
  {
    id: "t8",
    name: "Jessica Taylor",
    role: "Salon Chain Director",
    type: "Client",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    review: "BarberConnect completely transformed our customer booking workflow. Online appointments doubled within two months of launching the mobile app.",
    date: "February 2026",
    appName: "BarberConnect",
    country: "UK"
  },
  {
    id: "t9",
    name: "Vikram Malhotra",
    role: "Software Engineer",
    type: "Student",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    review: "Parsuram's YouTube videos are the best Android tutorials available online. Concise, modern, and focused on production code standards.",
    date: "June 2026",
    country: "India"
  },
  {
    id: "t10",
    name: "Sophia Martinez",
    role: "Fintech Analyst",
    type: "App User",
    avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    review: "CashFlowAI's smart budgeting alerts have saved me over $400 every month. The security and cloud backup give me total peace of mind.",
    date: "May 2026",
    appName: "CashFlowAI",
    country: "USA"
  },
  {
    id: "t11",
    name: "Arjun Reddy",
    role: "Tech Entrepreneur",
    type: "Client",
    avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    review: "Working with Parsuram on our custom PC Builder platform was seamless. Outstanding communication, punctual delivery, and top-tier code quality.",
    date: "January 2026",
    appName: "MakeMyPC",
    country: "India"
  },
  {
    id: "t12",
    name: "Chloe Dubois",
    role: "UX Designer",
    type: "Developer",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    review: "The micro-animations and glassmorphism styling across Parsuram's applications are pure perfection. An inspiration for developers and designers alike.",
    date: "April 2026",
    country: "France"
  },
  {
    id: "t13",
    name: "Karan Mehta",
    role: "Mobile Developer",
    type: "Student",
    avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    review: "I went from beginner Kotlin syntax to building production Jetpack Compose apps in 30 days thanks to Parsuram's structured roadmap.",
    date: "June 2026",
    courseName: "Android Engineering Roadmap",
    country: "India"
  },
  {
    id: "t14",
    name: "Emily Watson",
    role: "Tech Blogger",
    type: "App User",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    review: "Featured AI Expense Scanner in my weekly tech newsletter. Readers loved the instant OCR scanning speed and zero-friction user interface.",
    date: "May 2026",
    appName: "AI Expense Scanner",
    country: "Australia"
  },
  {
    id: "t15",
    name: "Tariq Al-Mansoor",
    role: "Solutions Architect",
    type: "Client",
    avatar: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    review: "Parsuram architected a high-throughput backend infrastructure for our enterprise portal. Zero downtime and lightning-fast API responses.",
    date: "March 2026",
    country: "UAE"
  },
  {
    id: "t16",
    name: "Neha Joshi",
    role: "Junior Web Developer",
    type: "Student",
    avatar: "https://images.unsplash.com/photo-1534751516642-a171e261f52c?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    review: "The free downloadable Cheat Sheets on Parsuram's portfolio are my daily desk reference. Packed with essential Git and Android shortcuts!",
    date: "June 2026",
    country: "India"
  },
  {
    id: "t17",
    name: "Lucas Moreira",
    role: "DevOps Specialist",
    type: "Developer",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    review: "Impressed by the CI/CD pipeline automation and Next.js 16 build performance in Parsuram's project ecosystem. Super clean setup.",
    date: "May 2026",
    country: "Brazil"
  },
  {
    id: "t18",
    name: "Ananya Iyer",
    role: "Data Analyst",
    type: "App User",
    avatar: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    review: "CashFlowAI's interactive charts and breakdown breakdown give me total clarity on my monthly investments. Absolutely indispensable app!",
    date: "June 2026",
    appName: "CashFlowAI",
    country: "India"
  },
  {
    id: "t19",
    name: "Oliver Smith",
    role: "Startup Founder",
    type: "Client",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    review: "Parsuram delivered our mobile product MVP ahead of schedule. The user onboarding flow is silky smooth and conversion rates are up 35%.",
    date: "February 2026",
    country: "UK"
  },
  {
    id: "t20",
    name: "Sneha Kulkarni",
    role: "B.Tech Student",
    type: "Student",
    avatar: "https://images.unsplash.com/photo-1548142813-c348350df52b?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    review: "I learned more from Parsuram's YouTube series than 4 semesters of college coding labs. Highly practical, engaging, and easy to follow.",
    date: "June 2026",
    country: "India"
  },
  {
    id: "t21",
    name: "Benjamin Lee",
    role: "iOS Engineer",
    type: "Developer",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    review: "Even as an iOS dev, I watch Parsuram's Kotlin & AI tutorials to stay ahead of cross-platform design trends. Exceptional teaching style.",
    date: "April 2026",
    country: "Singapore"
  },
  {
    id: "t22",
    name: "Rohan Das",
    role: "Digital Marketer",
    type: "App User",
    avatar: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    review: "Credit/Debit Tracker solved my daily client billing chaos. Sending PDF transaction summaries directly over WhatsApp is a game-changer.",
    date: "May 2026",
    appName: "Credit/Debit Tracker",
    country: "India"
  },
  {
    id: "t23",
    name: "Hannah Schmidt",
    role: "Frontend Developer",
    type: "Student",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    review: "The Tailwind CSS & React UI components shared in the portfolio resources section saved me dozens of engineering hours. Thank you Parsuram!",
    date: "June 2026",
    country: "Germany"
  },
  {
    id: "t24",
    name: "Manish Agarwal",
    role: "E-Commerce Director",
    type: "Client",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    review: "Parsuram is a true technical powerhouse. From database schema optimization to mobile UI design, his versatility is rare and invaluable.",
    date: "April 2026",
    country: "India"
  }
];

export const trustStats: Stat[] = [
  { id: "s1", label: "Happy Users", value: 50000, suffix: "+" },
  { id: "s2", label: "Students", value: 25000, suffix: "+" },
  { id: "s3", label: "App Downloads", value: 100000, suffix: "+" },
  { id: "s4", label: "Projects Delivered", value: 40, suffix: "+" },
  { id: "s5", label: "Average Rating", value: 4.9, prefix: "★ " }
];
