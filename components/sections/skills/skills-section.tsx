"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/container";
import { GradientText } from "@/components/ui/gradient-text";
import { techData, techCategories } from "@/config/skills-tech";
import { TechCard } from "./tech-card";
import { PrimaryStackCard } from "./primary-stack-card";

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const isManualScrolling = useRef(false);

  const groupedCategories = useMemo(() => {
    const categories = techCategories.filter((c) => c !== "All");
    return categories.map((catName) => ({
      name: catName,
      id: `cat-${catName.toLowerCase().replace(/[^a-z0-9]/g, "-")}`,
      items: techData.filter((item) => item.category === catName),
    }));
  }, []);

  const primaryStack = useMemo(() => {
    return techData.filter((tech) => tech.featured);
  }, []);

  // IntersectionObserver to auto-update active category when scrolling
  useEffect(() => {
    const handleObserver: IntersectionObserverCallback = (entries) => {
      if (isManualScrolling.current) return;

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const categoryName = entry.target.getAttribute("data-category");
          if (categoryName) {
            setActiveCategory(categoryName);
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleObserver, {
      root: null,
      rootMargin: "-20% 0px -50% 0px",
      threshold: 0.1,
    });

    groupedCategories.forEach((group) => {
      const el = document.getElementById(group.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [groupedCategories]);

  // Smooth scroll to category when clicked
  const handleCategoryClick = (catName: string) => {
    setActiveCategory(catName);

    if (catName === "All") {
      const section = document.getElementById("skills");
      if (section) {
        isManualScrolling.current = true;
        section.scrollIntoView({ behavior: "smooth" });
        setTimeout(() => {
          isManualScrolling.current = false;
        }, 800);
      }
      return;
    }

    const targetId = `cat-${catName.toLowerCase().replace(/[^a-z0-9]/g, "-")}`;
    const targetEl = document.getElementById(targetId);

    if (targetEl) {
      isManualScrolling.current = true;
      const yOffset = -100;
      const y = targetEl.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });

      setTimeout(() => {
        isManualScrolling.current = false;
      }, 800);
    }
  };

  return (
    <section id="skills" className="relative py-24 md:py-32 dark:bg-black/40 bg-slate-100/70 border-y dark:border-white/5 border-slate-200">
      {/* Background Decor */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(var(--primary-blue),0.05)_0%,transparent_70%)]" />
        <div className="absolute top-[30%] right-[-5%] w-[40%] h-[40%] bg-primary-green/5 rounded-full blur-[120px] -z-10" />
      </div>

      <Container>
        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-[800px] mx-auto mb-16 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-white/10 text-xs font-semibold text-primary-green tracking-wider uppercase mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-primary-green animate-pulse" />
            ⚡ Skills & Technologies
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-heading font-bold mb-6 text-foreground leading-tight"
          >
            Technologies I Use <br className="hidden md:block" />
            To Build <GradientText>Modern Digital Products</GradientText>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground"
          >
            I build Android applications, premium websites and AI-powered solutions using modern tools, frameworks and cloud technologies.
          </motion.p>
        </div>

        {/* Primary Stack Highlight */}
        <PrimaryStackCard stack={primaryStack} />

        {/* 2-Column Layout */}
        <div className="grid lg:grid-cols-[240px_1fr] gap-6 lg:gap-8 items-start mt-12">
          {/* LEFT: Sticky Categories Sidebar with Scroll Spy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-2 sticky top-28 z-20 glass p-4 rounded-2xl border border-white/10 dark:border-white/10 border-slate-200 hidden lg:flex shadow-soft"
          >
            <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2 px-4">
              Categories
            </h3>
            {techCategories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => handleCategoryClick(cat)}
                  className={`text-left px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-300 flex items-center justify-between group ${
                    isActive
                      ? "bg-gradient-to-r from-primary-blue to-primary-green text-white shadow-lg shadow-primary-blue/20 scale-[1.02]"
                      : "text-muted-foreground hover:text-foreground hover:bg-white/5 border border-transparent"
                  }`}
                >
                  <span>{cat}</span>
                  {isActive && (
                    <motion.span
                      layoutId="activeCategoryDot"
                      className="w-2 h-2 rounded-full bg-white animate-pulse"
                    />
                  )}
                </button>
              );
            })}
          </motion.div>

          {/* Mobile Categories Bar */}
          <div className="lg:hidden sticky top-20 z-20 w-full overflow-x-auto py-3 px-2 scrollbar-hide flex gap-2 glass rounded-2xl border border-white/10 dark:border-white/10 border-slate-200 shadow-md">
            {techCategories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => handleCategoryClick(cat)}
                  className={`whitespace-nowrap px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 ${
                    isActive
                      ? "bg-gradient-to-r from-primary-blue to-primary-green text-white shadow-md"
                      : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* RIGHT: Grouped Category Skill Sections */}
          <div className="space-y-12">
            {groupedCategories.map((group) => (
              <div
                key={group.name}
                id={group.id}
                data-category={group.name}
                className="scroll-mt-28"
              >
                {/* Category Group Header */}
                <div className="flex items-center gap-3 mb-6 pb-3 border-b border-white/10 dark:border-white/10 border-slate-200">
                  <h3 className="text-xl md:text-2xl font-bold font-heading text-foreground">
                    {group.name}
                  </h3>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary-blue/10 text-primary-blue border border-primary-blue/20">
                    {group.items.length} {group.items.length === 1 ? "skill" : "skills"}
                  </span>
                </div>

                {/* Grid for this Category */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
                  {group.items.map((tech, index) => (
                    <motion.div
                      key={tech.id}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                    >
                      <TechCard tech={tech} index={index} />
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
