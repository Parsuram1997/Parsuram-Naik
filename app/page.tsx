"use client";

import { Navbar } from "@/components/layout/navbar";
import { HeroSection } from "@/components/sections/hero/hero-section";
import { AboutSection } from "@/components/sections/about/about-section";
import { AppsSection } from "@/components/sections/apps/apps-section";
import { WebsitesSection } from "@/components/sections/websites/websites-section";
import { SkillsSection } from "@/components/sections/skills/skills-section";
import { JourneySection } from "@/components/sections/journey/journey-section";
import { YouTubeSection } from "@/components/sections/youtube/youtube-section";
import { AcademySection } from "@/components/sections/courses/academy-section";
import { BlogSection } from "@/components/sections/blog/blog-section";
import { TestimonialsSection } from "@/components/sections/testimonials/testimonials-section";
import { FAQSection } from "@/components/sections/faq/faq-section";
import { ContactSection } from "@/components/sections/contact/contact-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative selection:bg-primary-blue/30 selection:text-white">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <AppsSection />
      <WebsitesSection />
      <SkillsSection />
      <JourneySection />
      <YouTubeSection />
      <AcademySection />
      <BlogSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
    </main>
  );
}
