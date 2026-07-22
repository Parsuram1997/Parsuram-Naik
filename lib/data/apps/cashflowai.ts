import { AppData } from "@/types/app";

export const cashflowai: AppData = {
  id: "cashflowai",
  slug: "cashflowai",
  name: "CashFlowAI",
  icon: "/cashflowai.png",
  description: "Your intelligent personal finance manager. Track expenses, analyze spending patterns with AI, and achieve your financial goals effortlessly.",
  features: [
    "AI-powered expense categorization",
    "Real-time budget tracking",
    "Interactive financial charts and insights",
    "Secure cloud sync",
    "Goal setting and tracking"
  ],
  developer: "PARSURAM NAIK",
  version: "1.2.0",
  lastUpdated: "October 15, 2025",
  category: "Finance",
  downloads: "10K+",
  rating: 4.8,
  platform: "Android",
  cloudSync: "Firebase",
  authentication: "Google Sign-In",
  status: "Stable",
  playStoreUrl: "https://play.google.com/store/apps/details?id=com.parsuramnaik.cashflowai",
  supportEmail: "support@parsuramnaik.in",
  
  screenshots: [
    { url: "/CashflowAi_Screenshot_1.jpeg", alt: "Register Screen - Start your money story" },
    { url: "/CashflowAi_Screenshot_2.jpeg", alt: "Login Screen - Welcome back" },
    { url: "/CashflowAi_Screenshot_3.jpeg", alt: "Dashboard - Manage your money all in one place" },
    { url: "/CashflowAi_Screenshot_4.jpeg", alt: "Profile Screen - Your profile, your way" },
    { url: "/CashflowAi_Screenshot_5.jpeg", alt: "CashFlowAI Screen 5" },
    { url: "/CashflowAi_Screenshot_6.jpeg", alt: "CashFlowAI Screen 6" },
    { url: "/CashflowAi_Screenshot_7.jpeg", alt: "CashFlowAI Screen 7" }
  ],
  
  privacyPolicy: {
    lastUpdated: "July 14, 2026",
    sections: [
      {
        title: "1. Introduction",
        content: [
          "Welcome to <strong>CashFlowAI</strong>. We are committed to protecting your personal information and your right to privacy.",
          "CashFlowAI is an intelligent personal finance application designed to help you track income, expenses, and budgets securely. Your privacy is critically important to us.",
          "By accessing or using the CashFlowAI application, you agree to this Privacy Policy. If you do not agree with our policies and practices, please do not use our application."
        ]
      },
      {
        title: "2. Information We Collect",
        content: [
          "We collect information to provide better services to our users. The information we collect falls into the following categories:",
          "<strong>Account Information</strong><ul class='list-disc pl-5 mt-2 mb-4 space-y-1'><li>Name</li><li>Email Address</li><li>Profile Photo (Google Sign-In only)</li></ul>",
          "<strong>Financial Information</strong><ul class='list-disc pl-5 mt-2 mb-4 space-y-1'><li>Income Records</li><li>Expense Records</li><li>Categories</li><li>Budgets</li><li>Notes</li><li>Reports</li></ul>",
          "<strong>Device Information</strong><ul class='list-disc pl-5 mt-2 mb-4 space-y-1'><li>Device Model</li><li>Android Version</li><li>App Version</li></ul>",
          "<strong>Usage Information</strong><ul class='list-disc pl-5 mt-2 mb-4 space-y-1'><li>App usage behavior</li><li>Crash reports</li><li>Performance logs</li></ul>"
        ]
      },
      {
        title: "3. How We Use Your Information",
        content: [
          "We use the information we collect for various purposes, including:",
          "<ul class='list-disc pl-5 mt-2 space-y-1'><li>Creating and managing your user account</li><li>Cloud synchronization across multiple devices</li><li>Authentication and security verification</li><li>Data backup and restoration</li><li>Delivering a personalized experience (e.g., currency preferences)</li><li>Improving our application and developing new features</li><li>Providing customer support and responding to inquiries</li><li>Security monitoring and fraud prevention</li></ul>"
        ]
      },
      {
        title: "4. Firebase Services",
        content: [
          "CashFlowAI utilizes Firebase services, which are provided by Google, to function securely and efficiently.",
          "The specific Firebase services we use include:<ul class='list-disc pl-5 mt-2 space-y-1'><li><strong>Firebase Authentication:</strong> To securely manage user logins.</li><li><strong>Cloud Firestore:</strong> To store and sync your financial data in real-time.</li><li><strong>Firebase Cloud Messaging:</strong> For sending notifications (if enabled by you).</li><li><strong>Firebase Analytics:</strong> (Planned for future updates) To understand app usage and improve UX.</li><li><strong>Firebase Crashlytics:</strong> (Planned for future updates) To identify and fix app crashes quickly.</li></ul>",
          "By using our app, you acknowledge that your data is processed through Google's Firebase infrastructure."
        ]
      },
      {
        title: "5. Google Sign-In",
        content: [
          "If you choose to register or log in using Google Sign-In, we will receive certain profile information from your Google account.",
          "This information is strictly limited to your <strong>Name, Email Address, and Profile Photo</strong>.",
          "We do <strong>not</strong> have access to your Google password, nor do we store any passwords on our servers when you use Google Sign-In."
        ]
      },
      {
        title: "6. Local Data",
        content: [
          "To provide a fast and seamless experience, some information is stored locally on your device rather than in the cloud.",
          "Locally stored data includes:<ul class='list-disc pl-5 mt-2 space-y-1'><li>Theme preferences (Dark/Light mode)</li><li>Selected base currency</li><li>Notification Settings</li><li>App Lock Settings (PIN or Biometrics)</li><li>Temporary Cache for faster loading</li></ul>"
        ]
      },
      {
        title: "7. Data Security",
        content: [
          "We implement enterprise-grade security measures designed to protect your information:",
          "<strong>Encryption:</strong> All data transmitted between your device and our servers is encrypted using industry-standard TLS/SSL protocols.",
          "<strong>Infrastructure:</strong> Your data is stored on secure Firebase infrastructure governed by strict access controls.",
          "<strong>Authentication:</strong> We use token-based authentication to ensure that only you can access your account.",
          "While we use reasonable security practices, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure."
        ]
      },
      {
        title: "8. User Rights",
        content: [
          "Depending on your location, you may have specific rights regarding your personal information.",
          "Users of CashFlowAI have the right to:<ul class='list-disc pl-5 mt-2 space-y-1'><li><strong>Access their data:</strong> View all financial records directly in the app.</li><li><strong>Update their data:</strong> Modify or correct any existing entries or profile information.</li><li><strong>Delete their account:</strong> Permanently erase their account and all associated data.</li><li><strong>Contact support:</strong> Reach out to us for privacy-related inquiries.</li></ul>"
        ]
      },
      {
        title: "9. Delete Account",
        content: [
          "You can permanently delete your account and all associated data directly from the application.",
          "Account deletion removes your:<ul class='list-disc pl-5 mt-2 space-y-1'><li>User Account</li><li>Cloud Backup</li><li>Transactions</li><li>Categories</li><li>Budgets</li><li>Reports</li><li>Settings</li></ul>",
          "<strong>Please Note:</strong> Account deletion is permanent and cannot be undone.",
          "For more details or to initiate a manual deletion request, visit our <a href='/apps/cashflowai/delete-account' class='text-primary-blue hover:underline'>Delete Account</a> page."
        ]
      },
      {
        title: "10. Third-Party Services",
        content: [
          "CashFlowAI utilizes trusted third-party services to operate effectively.",
          "These include:<ul class='list-disc pl-5 mt-2 space-y-1'><li>Google Play Services</li><li>Google Firebase</li><li>Google Authentication</li></ul>",
          "These third-party providers have their own privacy policies addressing how they use such information."
        ]
      },
      {
        title: "11. Children's Privacy",
        content: [
          "CashFlowAI is not intended for children under 13 years of age.",
          "We do not knowingly collect personally identifiable information from children under 13. If you are a parent or guardian and you are aware that your child has provided us with personal data, please contact us."
        ]
      },
      {
        title: "12. Changes to this Privacy Policy",
        content: [
          "We may update our Privacy Policy from time to time.",
          "We will notify you of any changes by posting the new Privacy Policy on this page and updating the 'Last Updated' date.",
          "You are advised to review this Privacy Policy periodically for any changes. Changes are effective immediately after they are posted."
        ]
      },
      {
        title: "13. Contact Us",
        content: [
          "If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us.",
          "<strong>Developer Name:</strong> Parsuram Naik",
          "<strong>Brand:</strong> PARSURAM NAIK",
          "<strong>Support Email:</strong> <a href='mailto:support@parsuramnaik.in' class='text-primary-blue hover:underline'>support@parsuramnaik.in</a>",
          "<strong>Website:</strong> <a href='https://parsuramnaik.in' target='_blank' class='text-primary-blue hover:underline'>https://parsuramnaik.in</a>"
        ]
      }
    ]
  },
  
  terms: {
    lastUpdated: "July 14, 2026",
    sections: [
      {
        title: "1. Acceptance of Terms",
        content: [
          "By accessing, downloading, or using CashFlowAI, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access or use the application.",
          "These Terms apply to all visitors, users, and others who access or use the Service."
        ]
      },
      {
        title: "2. Description of Service",
        content: [
          "CashFlowAI is a personal finance management application that allows users to track their income, expenses, and budgets.",
          "The Service is provided for informational and tracking purposes only. It is not intended to provide financial, tax, or legal advice."
        ]
      },
      {
        title: "3. User Accounts",
        content: [
          "When you create an account with us, you must provide information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms.",
          "You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password.",
          "You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account."
        ]
      },
      {
        title: "4. Intellectual Property",
        content: [
          "The Service and its original content, features, and functionality are and will remain the exclusive property of PARSURAM NAIK and its licensors.",
          "The Service is protected by copyright, trademark, and other laws of both the local and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of PARSURAM NAIK."
        ]
      },
      {
        title: "5. Termination",
        content: [
          "We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.",
          "Upon termination, your right to use the Service will immediately cease. If you wish to terminate your account, you may simply discontinue using the Service or delete your account through the settings."
        ]
      },
      {
        title: "6. Limitation of Liability",
        content: [
          "In no event shall PARSURAM NAIK, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service."
        ]
      },
      {
        title: "7. Disclaimer",
        content: [
          "The materials within CashFlowAI are provided on an 'as is' basis. PARSURAM NAIK makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties.",
          "We do not warrant that the Service will function uninterrupted, secure or available at any particular time or location; any errors or defects will be corrected; or that the Service is free of viruses or other harmful components."
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
      date: "July 14, 2026",
      changes: [
        "Initial release of CashFlowAI",
        "Added income and expense tracking",
        "Added basic budgeting features",
        "Added visual reports and charts",
        "Implemented secure local storage"
      ]
    }
  ]
};
