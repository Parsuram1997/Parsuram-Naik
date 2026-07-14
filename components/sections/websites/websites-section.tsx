"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/container";
import { GradientText } from "@/components/ui/gradient-text";
import { websitesData, websiteCategories } from "@/config/websites";
import { WebsiteCard } from "./website-card";

export function WebsitesSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredWebsites = useMemo(() => {
    if (activeCategory === "All") return websitesData;
    return websitesData.filter(site => site.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="websites" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-[20%] left-[-10%] w-[40%] h-[40%] bg-primary-green/5 rounded-full blur-[150px] pointer-events-none -z-10" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[50%] h-[50%] bg-primary-blue/5 rounded-full blur-[150px] pointer-events-none -z-10" />

      <Container className="max-w-[1200px]">
        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-[700px] mx-auto mb-16 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-white/10 text-xs font-semibold text-primary-green tracking-wider uppercase mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-primary-green animate-pulse" />
            🌐 Websites
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-heading font-bold mb-6 text-foreground leading-tight"
          >
            Web Platforms <br />
            I've <GradientText>Designed & Built</GradientText>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground"
          >
            A collection of modern web applications, business platforms and digital products built using modern technologies.
          </motion.p>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-16">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {websiteCategories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeCategory === cat 
                    ? "bg-white text-black shadow-lg shadow-white/20 scale-105" 
                    : "glass text-muted-foreground hover:text-foreground hover:bg-white/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Websites Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <AnimatePresence mode="popLayout">
            {filteredWebsites.map((website, index) => (
              <motion.div
                key={website.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="h-full"
              >
                <WebsiteCard website={website} index={index} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredWebsites.length === 0 && (
          <div className="text-center py-24 text-muted-foreground">
            No websites found in this category.
          </div>
        )}
      </Container>
    </section>
  );
}
