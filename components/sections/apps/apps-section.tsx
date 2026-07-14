"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/container";
import { GradientText } from "@/components/ui/gradient-text";
import { appsData, appCategories, appSortOptions, AppData } from "@/config/apps";
import { AppCard } from "./app-card";
import { NotifyModal } from "./notify-modal";

export function AppsSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeSort, setActiveSort] = useState("Latest");
  const [notifyModalOpen, setNotifyModalOpen] = useState(false);
  const [notifyAppName, setNotifyAppName] = useState("");

  const handleNotifyClick = (appName: string) => {
    setNotifyAppName(appName);
    setNotifyModalOpen(true);
  };

  const filteredAndSortedApps = useMemo(() => {
    let result = [...appsData];

    // Filter
    if (activeCategory !== "All") {
      result = result.filter(app => app.category === activeCategory);
    }

    // Sort
    switch (activeSort) {
      case "Popular":
        // In real app, sort by actual downloads/rating values
        result.sort((a, b) => (a.featured === b.featured ? 0 : a.featured ? -1 : 1));
        break;
      case "Coming Soon":
        result.sort((a, b) => (a.comingSoon === b.comingSoon ? 0 : a.comingSoon ? -1 : 1));
        break;
      case "A-Z":
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "Latest":
      default:
        // Default order from array or based on releaseDate
        break;
    }

    return result;
  }, [activeCategory, activeSort]);

  return (
    <section id="apps" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-[10%] right-[-5%] w-[50%] h-[50%] bg-primary-blue/5 rounded-full blur-[150px] pointer-events-none -z-10" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary-green/5 rounded-full blur-[150px] pointer-events-none -z-10" />
      <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay -z-10" style={{ backgroundImage: "url('/noise.png')" }} />

      <Container className="max-w-[1200px]">
        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-[700px] mx-auto mb-16 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-white/10 text-xs font-semibold text-primary-blue tracking-wider uppercase mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-primary-blue animate-pulse" />
            📱 My Products
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-heading font-bold mb-6 text-foreground leading-tight"
          >
            Apps I've Built <br />
            to <GradientText>Solve Real Problems</GradientText>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground"
          >
            A collection of Android applications designed to improve productivity, finance, education and everyday digital life.
          </motion.p>
        </div>

        {/* Filters & Sorting */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-16">
          {/* Categories */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {appCategories.map((cat, idx) => (
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

          {/* Sort */}
          <div className="flex items-center gap-3">
            <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Sort by:</span>
            <select
              value={activeSort}
              onChange={(e) => setActiveSort(e.target.value)}
              className="glass border border-white/10 rounded-full px-4 py-2 text-sm font-semibold text-foreground bg-transparent focus:outline-none focus:border-primary-blue/50 cursor-pointer appearance-none"
              style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg fill=\"white\" height=\"24\" viewBox=\"0 0 24 24\" width=\"24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M7 10l5 5 5-5z\"/><path d=\"M0 0h24v24H0z\" fill=\"none\"/></svg>')", backgroundRepeat: "no-repeat", backgroundPositionX: "100%", backgroundPositionY: "50%" }}
            >
              {appSortOptions.map((opt, idx) => (
                <option key={idx} value={opt} className="bg-black text-foreground">
                  {opt}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Apps Grid */}
        <div className="grid grid-cols-1 gap-12 lg:gap-16">
          <AnimatePresence mode="popLayout">
            {filteredAndSortedApps.map((app, index) => (
              <motion.div
                key={app.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
              >
                <AppCard app={app} index={index} onNotifyClick={handleNotifyClick} />
              </motion.div>
            ))}
          </AnimatePresence>

          {filteredAndSortedApps.length === 0 && (
            <div className="text-center py-24 text-muted-foreground">
              No apps found in this category.
            </div>
          )}
        </div>
      </Container>

      {/* Modal */}
      <NotifyModal 
        isOpen={notifyModalOpen} 
        onClose={() => setNotifyModalOpen(false)} 
        appName={notifyAppName} 
      />
    </section>
  );
}
