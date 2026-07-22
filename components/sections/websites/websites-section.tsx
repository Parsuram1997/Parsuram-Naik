"use client";

import { useState, useEffect, useMemo, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/container";
import { GradientText } from "@/components/ui/gradient-text";
import { Button } from "@/components/ui/button";
import { websitesData, websiteCategories } from "@/config/websites";
import { WebsiteCard } from "./website-card";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function WebsitesSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const filteredWebsites = useMemo(() => {
    if (activeCategory === "All") return websitesData;
    return websitesData.filter(site => site.category === activeCategory);
  }, [activeCategory]);

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
      scrollContainerRef.current.scrollBy({ left: -700, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (activeIndex < filteredWebsites.length - 1) {
      scrollToIndex(activeIndex + 1);
    } else if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 700, behavior: "smooth" });
    }
  };

  // Keyboard Arrow Navigation (Left / Right)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        document.activeElement?.tagName === "INPUT" ||
        document.activeElement?.tagName === "TEXTAREA" ||
        document.activeElement?.tagName === "SELECT"
      ) {
        return;
      }

      if (e.key === "ArrowLeft") {
        // Only scroll if section is in viewport or scroll container focused
        const rect = scrollContainerRef.current?.getBoundingClientRect();
        if (rect && rect.top < window.innerHeight && rect.bottom > 0) {
          e.preventDefault();
          scrollLeft();
        }
      } else if (e.key === "ArrowRight") {
        const rect = scrollContainerRef.current?.getBoundingClientRect();
        if (rect && rect.top < window.innerHeight && rect.bottom > 0) {
          e.preventDefault();
          scrollRight();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex, filteredWebsites.length]);

  return (
    <section id="websites" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-[20%] left-[-10%] w-[40%] h-[40%] bg-primary-green/5 rounded-full blur-[150px] pointer-events-none -z-10" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[50%] h-[50%] bg-primary-blue/5 rounded-full blur-[150px] pointer-events-none -z-10" />

      <Container>
        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-[700px] mx-auto mb-12 lg:mb-16">
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

        {/* Filters & Navigation Controls */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
          {/* Category Filters */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {websiteCategories.map((cat, idx) => (
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

          {/* Slider Navigation Buttons */}
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={scrollLeft}
              className="rounded-full w-10 h-10 border-white/10 glass hover:bg-white/20 hover:scale-110 active:scale-95 transition-all text-white"
              aria-label="Previous Website"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={scrollRight}
              className="rounded-full w-10 h-10 border-white/10 glass hover:bg-white/20 hover:scale-110 active:scale-95 transition-all text-white"
              aria-label="Next Website"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Horizontal Scrollable Carousel Container */}
        <div className="relative group/carousel">
          {/* Side Floating Left Navigation Button */}
          <button
            onClick={scrollLeft}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/70 border border-white/20 text-white backdrop-blur-md items-center justify-center shadow-2xl hover:bg-primary-green hover:border-primary-green hover:scale-110 active:scale-95 transition-all duration-300 hidden xl:flex"
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
              {filteredWebsites.map((website, index) => (
                <motion.div
                  key={website.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="w-[88vw] sm:w-[580px] md:w-[680px] lg:w-[820px] shrink-0 snap-center"
                >
                  <WebsiteCard website={website} index={index} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Side Floating Right Navigation Button */}
          <button
            onClick={scrollRight}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/70 border border-white/20 text-white backdrop-blur-md items-center justify-center shadow-2xl hover:bg-primary-green hover:border-primary-green hover:scale-110 active:scale-95 transition-all duration-300 hidden xl:flex"
            aria-label="Scroll Right"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {filteredWebsites.length === 0 && (
            <div className="text-center py-24 text-muted-foreground w-full">
              No websites found in this category.
            </div>
          )}
        </div>

        {/* Ultra-Smooth Animated Pagination Dots Indicator below Cards */}
        {filteredWebsites.length > 1 && (
          <div className="flex items-center justify-center gap-3 mt-10">
            {filteredWebsites.map((website, idx) => {
              const isActive = activeIndex === idx;
              return (
                <button
                  key={website.id || idx}
                  onClick={() => scrollToIndex(idx)}
                  className="relative p-1.5 focus:outline-none cursor-pointer group flex items-center justify-center"
                  aria-label={`Go to slide ${idx + 1}`}
                >
                  {isActive ? (
                    <motion.span
                      layoutId="activeWebsiteDotPill"
                      className="block w-8 h-2.5 rounded-full bg-gradient-to-r from-primary-green via-teal-400 to-primary-blue shadow-[0_0_14px_rgba(16,185,129,0.8)]"
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
    </section>
  );
}
