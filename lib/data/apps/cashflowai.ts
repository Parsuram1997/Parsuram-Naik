import { AppData } from "@/types/app";

export const cashflowai: AppData = {
  id: "cashflowai",
  slug: "cashflowai",
  name: "CashFlowAI",
  icon: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&q=80&w=256&h=256",
  description: "Your intelligent personal finance manager. Track expenses, analyze spending patterns with AI, and achieve your financial goals effortlessly.",
  features: [
    "AI-powered expense categorization",
    "Real-time budget tracking",
    "Interactive financial charts and insights",
    "Secure cloud sync",
    "Goal setting and tracking"
  ],
  developer: "PARSU TECH",
  version: "1.2.0",
  lastUpdated: "October 15, 2025",
  playStoreUrl: "https://play.google.com/store/apps/details?id=com.parsutech.cashflowai",
  supportEmail: "support@parsutech.com",
  
  screenshots: [
    { url: "https://images.unsplash.com/photo-1616489953149-ff44bea2c1dd?auto=format&fit=crop&q=80&w=1080&h=1920", alt: "Dashboard" },
    { url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1080&h=1920", alt: "Analytics" },
    { url: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1080&h=1920", alt: "Budgeting" }
  ],
  
  privacyPolicy: {
    lastUpdated: "September 1, 2025",
    sections: [
      {
        title: "1. Information We Collect",
        content: [
          "We collect information you provide directly to us when you create an account, such as your name and email address.",
          "We also automatically collect certain information about your device and how you interact with the app, including crash reports and usage statistics."
        ]
      },
      {
        title: "2. How We Use Your Information",
        content: [
          "We use the information we collect to provide, maintain, and improve CashFlowAI, as well as to communicate with you and personalize your experience."
        ]
      },
      {
        title: "3. Data Security",
        content: [
          "We implement reasonable security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. All financial data is encrypted."
        ]
      }
    ]
  },
  
  terms: {
    lastUpdated: "September 1, 2025",
    sections: [
      {
        title: "1. Acceptance of Terms",
        content: [
          "By accessing or using CashFlowAI, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access the app."
        ]
      },
      {
        title: "2. Use License",
        content: [
          "Permission is granted to temporarily download one copy of CashFlowAI for personal, non-commercial transitory viewing only."
        ]
      },
      {
        title: "3. Disclaimer",
        content: [
          "The materials within CashFlowAI are provided on an 'as is' basis. PARSU TECH makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties."
        ]
      }
    ]
  },
  
  deleteAccount: {
    howItWorks: [
      "Submit an account deletion request using the form below or via the app's settings menu.",
      "We will verify your identity via email.",
      "Upon verification, your account and associated data will be permanently deleted within 30 days."
    ],
    dataDeleted: [
      "Personal profile information",
      "All transaction history and custom categories",
      "Saved budgets and financial goals",
      "Cloud backups"
    ],
    dataRetained: [
      "Anonymized analytics data used for app improvement",
      "Records of financial transactions if legally required (though we typically do not process payments directly)"
    ]
  },
  
  faq: [
    {
      category: "General",
      question: "Is CashFlowAI free to use?",
      answer: "Yes, the core features of CashFlowAI are completely free. We also offer a premium subscription for advanced AI insights."
    },
    {
      category: "Data & Privacy",
      question: "Is my financial data secure?",
      answer: "Absolutely. We use industry-standard encryption to protect your data. We never sell your personal information to third parties."
    },
    {
      category: "Account",
      question: "Can I sync my data across multiple devices?",
      answer: "Yes! If you create a free account, your data is securely synced across all your devices using our cloud infrastructure."
    }
  ],
  
  changelog: [
    {
      version: "1.2.0",
      date: "October 15, 2025",
      changes: [
        "Introduced AI-powered spending insights",
        "Added support for custom categories",
        "Performance improvements and bug fixes"
      ]
    },
    {
      version: "1.1.0",
      date: "September 10, 2025",
      changes: [
        "Added dark mode support",
        "New interactive charts for monthly overview",
        "Fixed sync issues on slow connections"
      ]
    },
    {
      version: "1.0.0",
      date: "August 1, 2025",
      changes: [
        "Initial release of CashFlowAI",
        "Basic expense tracking and budgeting features"
      ]
    }
  ]
};
