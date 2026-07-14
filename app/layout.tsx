import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll-provider";
import { SearchProvider } from "@/components/providers/search-provider";
import { ConnectProvider } from "@/components/providers/connect-provider";
import { Navbar } from "@/components/layout/navbar";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { BackToTop } from "@/components/ui/back-to-top";
import { Analytics } from "@/components/providers/analytics";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#00ffaa",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://parsuramnaik.com"),
  title: {
    default: "Parsuram Naik | Premium Portfolio & Digital Identity",
    template: "%s | Parsuram Naik",
  },
  description: "Official digital identity of Parsuram Naik. Explore Android apps, modern websites, courses, and educational tech content.",
  keywords: ["Parsuram Naik", "Parsuram Naik", "Android Developer", "Web Developer", "React", "Next.js", "AI", "Portfolio", "Courses"],
  authors: [{ name: "Parsuram Naik", url: "https://parsuramnaik.com" }],
  creator: "Parsuram Naik",
  publisher: "Parsuram Naik",
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://parsuramnaik.com",
    title: "Parsuram Naik | Premium Portfolio",
    description: "Official digital identity of Parsuram Naik. Explore Android apps, modern websites, courses, and educational tech content.",
    siteName: "Parsuram Naik",
  },
  twitter: {
    card: "summary_large_image",
    title: "Parsuram Naik | Premium Portfolio",
    description: "Official digital identity of Parsuram Naik.",
    creator: "@ParsuramNaik",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Parsuram Naik",
  url: "https://parsuramnaik.com",
  jobTitle: "Software Developer",
  worksFor: {
    "@type": "Organization",
    name: "Parsuram Naik"
  },
  sameAs: [
    "https://twitter.com/ParsuramNaik",
    "https://github.com/ParsuramNaik",
    "https://www.youtube.com/@ParsuramNaik"
  ]
};

import Script from "next/script";
import { Footer } from "@/components/layout/footer/footer";
import { SearchModal } from "@/components/search/SearchModal";
import { ConnectModal } from "@/components/connect/ConnectModal";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${poppins.variable} antialiased min-h-screen bg-background text-foreground overflow-x-hidden`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ConnectProvider>
            <SearchProvider>
              <SmoothScrollProvider>
                <ScrollProgress />
                <Navbar />
                {children}
                <Footer />
                <BackToTop />
                <SearchModal />
                <ConnectModal />
              </SmoothScrollProvider>
            </SearchProvider>
          </ConnectProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
