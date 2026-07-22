export interface ChannelData {
  id: string;
  name: string;
  description: string;
  bannerUrl: string;
  avatarUrl: string;
  youtubeUrl: string;
  stats: {
    subscribers: string;
    videos: string;
    views: string;
    years: string;
  };
}

export interface VideoData {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  duration: string;
  publishedAt: string;
  youtubeUrl: string;
  featured?: boolean;
}

export interface PlaylistData {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  videoCount: number;
  youtubeUrl: string;
}

export interface YouTubeStatistic {
  id: string;
  title: string;
  value: number;
  suffix?: string;
  icon: string;
}

export const channelData: ChannelData = {
  id: "UCxxxxxxxx",
  name: "Parsuram Naik",
  description: "I create educational content covering Android development, AI tools, web development, and practical technology tutorials.",
  bannerUrl: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1200&auto=format&fit=crop",
  avatarUrl: "/parsuram.png",
  youtubeUrl: "https://youtube.com",
  stats: {
    subscribers: "10K+",
    videos: "150+",
    views: "500K+",
    years: "3+"
  }
};

export const videosData: VideoData[] = [
  {
    id: "v1",
    title: "Build a Full-Stack Android App in 2024 (Kotlin + Firebase)",
    description: "Learn how to build a complete, production-ready Android application from scratch using modern tools.",
    thumbnailUrl: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?q=80&w=800&auto=format&fit=crop",
    duration: "45:20",
    publishedAt: "2 weeks ago",
    youtubeUrl: "https://youtube.com",
    featured: true
  },
  {
    id: "v2",
    title: "Integrate Gemini AI into Your Next.js App",
    description: "A step-by-step guide to adding Google's powerful Gemini AI capabilities to your web applications.",
    thumbnailUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop",
    duration: "18:45",
    publishedAt: "1 month ago",
    youtubeUrl: "https://youtube.com"
  },
  {
    id: "v3",
    title: "Mastering Jetpack Compose: UI Design",
    description: "Deep dive into building beautiful, responsive UIs with modern Jetpack Compose for Android.",
    thumbnailUrl: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=800&auto=format&fit=crop",
    duration: "24:10",
    publishedAt: "2 months ago",
    youtubeUrl: "https://youtube.com"
  },
  {
    id: "v4",
    title: "Computer Basics: Understanding Hardware",
    description: "A complete beginner's guide to how computers work, hardware components, and operating systems.",
    thumbnailUrl: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?q=80&w=800&auto=format&fit=crop",
    duration: "32:15",
    publishedAt: "3 months ago",
    youtubeUrl: "https://youtube.com"
  }
];

export const playlistsData: PlaylistData[] = [
  {
    id: "p1",
    title: "Android Development",
    description: "Complete roadmap to becoming an Android engineer.",
    thumbnailUrl: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?q=80&w=600&auto=format&fit=crop",
    videoCount: 24,
    youtubeUrl: "https://youtube.com"
  },
  {
    id: "p2",
    title: "AI Tutorials",
    description: "Learn to build with LLMs, Gemini, and ChatGPT.",
    thumbnailUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=600&auto=format&fit=crop",
    videoCount: 12,
    youtubeUrl: "https://youtube.com"
  },
  {
    id: "p3",
    title: "Web Development",
    description: "Next.js, React, Tailwind CSS, and full-stack projects.",
    thumbnailUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop",
    videoCount: 30,
    youtubeUrl: "https://youtube.com"
  }
];

export const youtubeStats: YouTubeStatistic[] = [
  { id: "edu", title: "Educational Videos", value: 150, suffix: "+", icon: "PlaySquare" },
  { id: "streams", title: "Live Streams", value: 20, suffix: "+", icon: "Radio" },
  { id: "shorts", title: "Shorts", value: 50, suffix: "+", icon: "Smartphone" },
  { id: "subs", title: "Subscribers", value: 10, suffix: "K+", icon: "Users" },
  { id: "views", title: "Total Views", value: 500, suffix: "K+", icon: "Eye" },
  { id: "years", title: "Years Creating", value: 3, suffix: "+", icon: "Calendar" }
];
