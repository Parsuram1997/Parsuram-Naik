export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
  featured?: boolean;
  searchKeywords?: string[];
}

export const faqCategories = [
  "All",
  "Apps",
  "Websites",
  "Courses",
  "YouTube",
  "General",
  "Business",
  "Career"
];

export const faqData: FAQItem[] = [
  {
    id: "f1",
    question: "How can I download your apps?",
    answer: "You can download my apps directly from the Google Play Store. Visit the 'Apps' section on this website to find direct links to CashFlowAI, FitnessPro, and all my other mobile applications.",
    category: "Apps",
    featured: true,
    searchKeywords: ["download", "apps", "play store", "install"]
  },
  {
    id: "f2",
    question: "Where can I watch your tutorials?",
    answer: "All my free video tutorials and educational tech content are available on my YouTube channel. You can subscribe to get notified about new uploads.",
    category: "YouTube",
    featured: true,
    searchKeywords: ["videos", "youtube", "tutorials", "watch"]
  },
  {
    id: "f3",
    question: "How can I enroll in your courses?",
    answer: "Go to the 'Learning Academy' section on this website, browse through the available Free and Premium courses, and click the 'Enroll' button to get started immediately.",
    category: "Courses",
    featured: true,
    searchKeywords: ["enroll", "buy", "course", "learn"]
  },
  {
    id: "f4",
    question: "How do I contact you?",
    answer: "You can use the Contact Form in the 'Contact' section of this website, or reach out to me directly via email at hello@parsuram.com.",
    category: "General",
    searchKeywords: ["contact", "email", "reach out", "message"]
  },
  {
    id: "f5",
    question: "Are your apps free?",
    answer: "Most of my apps have a generous free tier that you can use indefinitely. Some advanced AI features in apps like CashFlowAI might require a premium upgrade.",
    category: "Apps",
    searchKeywords: ["free", "paid", "premium", "cost", "price"]
  },
  {
    id: "f6",
    question: "How often do you upload videos?",
    answer: "I aim to upload new, high-quality technical tutorials and project walkthroughs every week. Make sure to subscribe to the newsletter to never miss an update.",
    category: "YouTube",
    searchKeywords: ["schedule", "frequency", "upload", "new"]
  },
  {
    id: "f7",
    question: "Can I collaborate with you?",
    answer: "Yes! I am open to freelance projects, business collaborations, and speaking opportunities. Please check my availability status in the Contact section and send me a proposal.",
    category: "Business",
    searchKeywords: ["collaborate", "work together", "freelance", "hire"]
  },
  {
    id: "f8",
    question: "Do you build websites?",
    answer: "Yes, I build premium, scalable websites and web applications using modern stacks like Next.js, React, and Tailwind CSS for clients worldwide.",
    category: "Websites",
    searchKeywords: ["website", "build", "create", "freelance"]
  },
  {
    id: "f9",
    question: "How do I report a bug?",
    answer: "If you find a bug in any of my apps or websites, please use the Contact form or message me on Twitter. I appreciate your help in making my products better!",
    category: "General",
    searchKeywords: ["bug", "issue", "error", "report", "fix"]
  },
  {
    id: "f10",
    question: "How can I request a feature?",
    answer: "I'm always open to feedback. If you have a feature idea for an app or a video tutorial request, drop me an email or a DM on my social platforms.",
    category: "General",
    searchKeywords: ["feature", "request", "idea", "suggestion"]
  }
];
