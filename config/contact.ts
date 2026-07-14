export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  workingHours: string;
  responseTime: string;
  availability: "Available" | "Busy";
}

export interface SocialLink {
  id: string;
  name: string;
  url: string;
  icon: string;
}

export interface QuickAction {
  id: string;
  title: string;
  description: string;
  icon: string;
  actionUrl: string;
}

export const contactInfo: ContactInfo = {
  email: "hello@parsuram.com",
  phone: "+91 98765 43210",
  location: "Bhubaneswar, Odisha, India",
  workingHours: "10:00 AM - 06:00 PM (IST)",
  responseTime: "Within 24 Hours",
  availability: "Available", // Set to "Busy" to change status
};

export const socialLinks: SocialLink[] = [
  { id: "s1", name: "YouTube", url: "https://youtube.com/@parsuram", icon: "youtube" },
  { id: "s2", name: "LinkedIn", url: "https://linkedin.com/in/parsuram", icon: "linkedin" },
  { id: "s3", name: "GitHub", url: "https://github.com/parsuram", icon: "github" },
  { id: "s4", name: "Instagram", url: "https://instagram.com/parsuram", icon: "instagram" },
  { id: "s5", name: "Facebook", url: "https://facebook.com/parsuram", icon: "facebook" },
  { id: "s6", name: "X", url: "https://twitter.com/parsuram", icon: "twitter" },
  { id: "s7", name: "Telegram", url: "https://t.me/parsuram", icon: "telegram" },
  { id: "s8", name: "Email", url: "mailto:hello@parsuram.com", icon: "mail" },
];

export const quickActions: QuickAction[] = [
  { id: "q1", title: "Download Resume", description: "Get my detailed professional CV", icon: "Download", actionUrl: "#" },
  { id: "q2", title: "Book Collaboration", description: "Schedule a video meeting", icon: "Calendar", actionUrl: "#" },
  { id: "q3", title: "View Apps", description: "Explore my mobile applications", icon: "Smartphone", actionUrl: "#apps" },
  { id: "q4", title: "Visit YouTube", description: "Watch my free tutorials", icon: "Play", actionUrl: "#youtube" },
];
