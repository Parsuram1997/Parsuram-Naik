"use client";

import { useState, useEffect, useMemo, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/container";
import { GradientText } from "@/components/ui/gradient-text";
import { Button } from "@/components/ui/button";
import { appsData, appCategories, appSortOptions, AppData } from "@/config/apps";
import { AppCard } from "./app-card";
import { NotifyModal } from "./notify-modal";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function AppsSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeSort, setActiveSort] = useState("Latest");
  const [notifyModalOpen, setNotifyModalOpen] = useState(false);
  const [notifyAppName, setNotifyAppName] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const cards = container.children;
    const containerCenter = container.scrollLeft + container.clientWidth / 2;

    let closestIndex = 0;
    let minDistance = Infinity;

    for (let i = 0; i < cards.length; i++) {
      const card = cards[i] as HTMLElement;
      const cardCenter = card.offsetLeft + card.clientWidth / 2;
      const distance = Math.abs(containerCenter - cardCenter);
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = i;
      }
    }

    setActiveIndex(closestIndex);
  };

  const scrollToIndex = (index: number) => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const cards = container.children;
    if (cards[index]) {
      (cards[index] as HTMLElement).scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
      setActiveIndex(index);
    }
  };

  const scrollLeft = () => {
    if (activeIndex > 0) {
      scrollToIndex(activeIndex - 1);
    } else if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -750, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (activeIndex < filteredAndSortedApps.length - 1) {
      scrollToIndex(activeIndex + 1);
    } else if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 750, behavior: "smooth" });
    }
  };

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
        break;
    }

    return result;
  }, [activeCategory, activeSort]);

  // Keyboard Arrow Navigation (Left / Right)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't intercept if user is typing in an input/textarea/select
      if (
        document.activeElement?.tagName === "INPUT" ||
        document.activeElement?.tagName === "TEXTAREA" ||
        document.activeElement?.tagName === "SELECT"
      ) {
        return;
      }

      if (e.key === "ArrowLeft") {
        e.preventDefault();
        scrollLeft();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        scrollRight();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex, filteredAndSortedApps.length]);

  return (
    <section id="apps" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-[10%] right-[-5%] w-[50%] h-[50%] bg-primary-blue/5 rounded-full blur-[150px] pointer-events-none -z-10" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary-green/5 rounded-full blur-[150px] pointer-events-none -z-10" />
      <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay -z-10" style={{ backgroundImage: "url('/noise.png')" }} />

      <Container className="max-w-[1300px]">
        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-[700px] mx-auto mb-12 lg:mb-16">
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

        {/* Filters, Sorting & Navigation Controls */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
          {/* Categories */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {appCategories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setActiveCategory(cat);
                  setActiveIndex(0);
                }}
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

          {/* Controls: Sort + Left/Right Navigation Arrows */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider hidden sm:inline">Sort:</span>
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

            {/* Slider Arrow Buttons */}
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={scrollLeft}
                className="rounded-full w-10 h-10 border-white/10 glass hover:bg-white/20 hover:scale-110 active:scale-95 transition-all text-white"
                aria-label="Previous App"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={scrollRight}
                className="rounded-full w-10 h-10 border-white/10 glass hover:bg-white/20 hover:scale-110 active:scale-95 transition-all text-white"
                aria-label="Next App"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Horizontal Scrollable Carousel Container */}
        <div className="relative group/carousel">
          {/* Side Floating Left Navigation Button */}
          <button
            onClick={scrollLeft}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/70 border border-white/20 text-white backdrop-blur-md items-center justify-center shadow-2xl hover:bg-primary-blue hover:border-primary-blue hover:scale-110 active:scale-95 transition-all duration-300 hidden xl:flex"
            aria-label="Scroll Left"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Horizontal Scroll Container */}
          <div
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="flex items-stretch gap-6 lg:gap-8 overflow-x-auto scrollbar-none snap-x snap-mandatory py-4 px-4 md:px-[calc(50%-340px)] lg:px-[calc(50%-410px)] focus:outline-none"
            tabIndex={0}
            style={{ scrollBehavior: "smooth" }}
          >
            <AnimatePresence mode="popLayout">
              {filteredAndSortedApps.map((app, index) => (
                <motion.div
                  key={app.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="w-[88vw] sm:w-[580px] md:w-[680px] lg:w-[820px] shrink-0 snap-center"
                >
                  <AppCard app={app} index={index} onNotifyClick={handleNotifyClick} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Side Floating Right Navigation Button */}
          <button
            onClick={scrollRight}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/70 border border-white/20 text-white backdrop-blur-md items-center justify-center shadow-2xl hover:bg-primary-blue hover:border-primary-blue hover:scale-110 active:scale-95 transition-all duration-300 hidden xl:flex"
            aria-label="Scroll Right"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {filteredAndSortedApps.length === 0 && (
            <div className="text-center py-24 text-muted-foreground w-full">
              No apps found in this category.
            </div>
          )}
        </div>

        {/* Ultra-Smooth Animated Pagination Dots Indicator below Cards */}
        {filteredAndSortedApps.length > 1 && (
          <div className="flex items-center justify-center gap-3 mt-10">
            {filteredAndSortedApps.map((app, idx) => {
              const isActive = activeIndex === idx;
              return (
                <button
                  key={app.id || idx}
                  onClick={() => scrollToIndex(idx)}
                  className="relative p-1.5 focus:outline-none cursor-pointer group flex items-center justify-center"
                  aria-label={`Go to slide ${idx + 1}`}
                >
                  {isActive ? (
                    <motion.span
                      layoutId="activeAppDotPill"
                      className="block w-8 h-2.5 rounded-full bg-gradient-to-r from-primary-blue via-teal-400 to-primary-green shadow-[0_0_14px_rgba(37,99,235,0.8)]"
                      transition={{ type: "spring", stiffness: 350, damping: 25 }}
                    />
                  ) : (
                    <span className="block w-2.5 h-2.5 rounded-full bg-white/20 group-hover:bg-white/40 transition-colors" />
                  )}
                </button>
              );
            })}
          </div>
        )}
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
