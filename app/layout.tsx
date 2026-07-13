import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll-provider";
import { Navbar } from "@/components/layout/navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "Parsu Tech | Premium Portfolio & Digital Identity",
    template: "%s | Parsu Tech",
  },
  description: "Official digital identity of Parsuram Naik. Explore Android apps, modern websites, courses, and more.",
  keywords: ["Parsuram Naik", "Parsu Tech", "Android Developer", "Web Developer", "Courses", "Portfolio"],
  authors: [{ name: "Parsuram Naik" }],
  creator: "Parsuram Naik",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://parsutech.com",
    title: "Parsu Tech | Premium Portfolio",
    description: "Official digital identity of Parsuram Naik. Explore Android apps, websites, and courses.",
    siteName: "Parsu Tech",
  },
  twitter: {
    card: "summary_large_image",
    title: "Parsu Tech | Premium Portfolio",
    description: "Official digital identity of Parsuram Naik.",
    creator: "@ParsuTech",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable} antialiased min-h-screen bg-background text-foreground`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <SmoothScrollProvider>
            <Navbar />
            {children}
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
