export interface AppFeature {
  id: string;
  name: string;
}

export interface AppStat {
  label: string;
  value: string;
}

export interface AppData {
  id: string;
  name: string;
  description: string;
  shortDescription: string;
  status: "LIVE" | "BETA" | "COMING SOON";
  category: "Finance" | "Productivity" | "Education" | "AI" | "Utilities";
  icon: string;
  technologies: string[];
  features: AppFeature[];
  stats: AppStat[];
  screenshots: string[];
  playStoreUrl?: string;
  websiteUrl?: string;
  githubUrl?: string;
  releaseDate?: string;
  featured: boolean;
  comingSoon: boolean;
}

export const appsData: AppData[] = [
  {
    id: "cashflowai",
    name: "CashFlowAI",
    shortDescription: "AI-powered personal finance & budget manager.",
    description: "Modern personal finance application that helps users track income, expenses, budgets, analytics and cloud backup using AI insights.",
    status: "LIVE",
    category: "Finance",
    icon: "https://images.unsplash.com/photo-1616077168079-7e09a677fb2c?q=80&w=200&auto=format&fit=crop",
    technologies: ["Android", "Kotlin", "Jetpack Compose", "Firebase", "Room", "Material 3"],
    features: [
      { id: "expense", name: "Expense Tracking" },
      { id: "income", name: "Income Tracking" },
      { id: "analytics", name: "Analytics" },
      { id: "reports", name: "Reports" },
      { id: "budgets", name: "Budgets" },
      { id: "cloud", name: "Cloud Sync" },
      { id: "dark", name: "Dark Mode" },
      { id: "ai", name: "AI Ready" },
    ],
    stats: [
      { label: "Downloads", value: "50K+" },
      { label: "Rating", value: "4.8" },
      { label: "Version", value: "2.1.0" },
    ],
    screenshots: [
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=800&auto=format&fit=crop",
    ],
    playStoreUrl: "https://play.google.com",
    releaseDate: "2022",
    featured: true,
    comingSoon: false,
  },
  {
    id: "makemypc-mobile",
    name: "MakeMyPC Mobile",
    shortDescription: "Intelligent PC building companion app.",
    description: "An intelligent platform to help users build custom PCs, check compatibility, and track component prices on the go.",
    status: "COMING SOON",
    category: "Productivity",
    icon: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?q=80&w=200&auto=format&fit=crop",
    technologies: ["Android", "Kotlin", "Jetpack Compose", "Room"],
    features: [
      { id: "builder", name: "PC Builder" },
      { id: "compat", name: "Compatibility Check" },
      { id: "prices", name: "Price Tracking" },
      { id: "offline", name: "Offline Mode" },
    ],
    stats: [
      { label: "Release", value: "Q3 2026" },
      { label: "Category", value: "Tools" },
    ],
    screenshots: [
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop",
    ],
    releaseDate: "2026",
    featured: true,
    comingSoon: true,
  },
  {
    id: "ai-expense-scanner",
    name: "AI Expense Scanner",
    shortDescription: "Scan receipts and extract data instantly.",
    description: "Scan receipts, invoices, and bills to automatically extract expense data and categorize them using advanced AI vision models.",
    status: "COMING SOON",
    category: "AI",
    icon: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=200&auto=format&fit=crop",
    technologies: ["Android", "Kotlin", "ML Kit", "TensorFlow Lite"],
    features: [
      { id: "scan", name: "Smart Scanning" },
      { id: "ocr", name: "OCR Extraction" },
      { id: "auto", name: "Auto Categorization" },
      { id: "export", name: "CSV Export" },
    ],
    stats: [
      { label: "Release", value: "Q4 2026" },
      { label: "Category", value: "Finance" },
    ],
    screenshots: [
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop",
    ],
    releaseDate: "2026",
    featured: false,
    comingSoon: true,
  },
  {
    id: "barberconnect",
    name: "BarberConnect",
    shortDescription: "Smart barber booking & salon management.",
    description: "A comprehensive platform connecting users with local barbers, featuring real-time appointment booking, salon management, and seamless payments.",
    status: "LIVE",
    category: "Utilities",
    icon: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=200&auto=format&fit=crop",
    technologies: ["Android", "Kotlin", "Firebase", "Google Maps", "Material Design"],
    features: [
      { id: "booking", name: "Live Booking" },
      { id: "notifications", name: "Push Notifications" },
      { id: "payments", name: "Digital Payments" },
      { id: "reviews", name: "Ratings & Reviews" },
    ],
    stats: [
      { label: "Downloads", value: "10K+" },
      { label: "Rating", value: "4.7" },
      { label: "Version", value: "1.2.4" },
    ],
    screenshots: [
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop",
    ],
    playStoreUrl: "https://play.google.com",
    releaseDate: "2023",
    featured: true,
    comingSoon: false,
  },
  {
    id: "credit-debit-tracker",
    name: "Credit/Debit Tracker",
    shortDescription: "Simple and secure ledger for daily transactions.",
    description: "An intuitive ledger application to easily record and manage credit (Udhaar) and debit transactions with friends, clients, or for personal expenses.",
    status: "LIVE",
    category: "Finance",
    icon: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=200&auto=format&fit=crop",
    technologies: ["Android", "Kotlin", "Room DB", "Coroutines"],
    features: [
      { id: "ledger", name: "Digital Ledger" },
      { id: "export", name: "PDF Export" },
      { id: "reminders", name: "Payment Reminders" },
      { id: "offline", name: "Offline First" },
    ],
    stats: [
      { label: "Downloads", value: "25K+" },
      { label: "Rating", value: "4.9" },
      { label: "Version", value: "3.0.1" },
    ],
    screenshots: [
      "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=800&auto=format&fit=crop",
    ],
    playStoreUrl: "https://play.google.com",
    releaseDate: "2024",
    featured: true,
    comingSoon: false,
  }
];

export const appCategories = ["All", "Finance", "Productivity", "Education", "AI", "Utilities"];
export const appSortOptions = ["Latest", "Popular", "Coming Soon", "A-Z"];
