"use client";

import { HeroSection } from "@/components/sections/hero/hero-section";
import { AboutSection } from "@/components/sections/about/about-section";

export default function Home() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <AboutSection />
    </main>
  );
}
