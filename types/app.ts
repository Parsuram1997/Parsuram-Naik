export interface AppFAQ {
  question: string;
  answer: string;
  category?: string;
}

export interface AppChangelog {
  version: string;
  date: string;
  changes: string[];
}

export interface AppScreenshot {
  url: string;
  alt: string;
}

export interface AppLegalSection {
  title: string;
  content: string[]; // Paragraphs or HTML strings
}

export interface AppLegal {
  lastUpdated: string;
  sections: AppLegalSection[];
}

export interface AppData {
  id: string;
  slug: string;
  name: string;
  icon: string;
  description: string;
  features: string[];
  developer: string;
  version: string;
  lastUpdated: string;
  category?: string;
  downloads?: string;
  rating?: number;
  platform?: string;
  cloudSync?: string;
  authentication?: string;
  status?: string;
  downloadUrl?: string; // e.g. direct APK
  playStoreUrl?: string;
  supportEmail: string;
  
  screenshots: AppScreenshot[];
  
  // Legal & Support pages data
  privacyPolicy: AppLegal;
  terms: AppLegal;
  deleteAccount: {
    howItWorks: string[];
    dataDeleted: string[];
    dataRetained: string[];
  };
  faq: AppFAQ[];
  changelog: AppChangelog[];
}
