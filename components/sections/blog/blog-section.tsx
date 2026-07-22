"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/container";
import { GradientText } from "@/components/ui/gradient-text";
import { blogCategories, popularTags, articles, resources, prompts } from "@/config/blog";
import { FeaturedArticle } from "./featured-article";
import { ArticleCard } from "./article-card";
import { ResourceCard } from "./resource-card";
import { PromptCard } from "./prompt-card";
import { NewsletterCTA } from "./newsletter-cta";

export function BlogSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const featuredArticle = articles.find(a => a.featured);
  
  const filteredArticles = articles.filter(a => {
    if (activeCategory === "All") return !a.featured;
    return a.category === activeCategory && !a.featured;
  });

  return (
    <section id="blog" className="relative py-24 md:py-32 overflow-hidden dark:bg-black/40 bg-slate-100/70 border-t dark:border-white/5 border-slate-200">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(0,255,170,0.05)_0%,transparent_70%)] pointer-events-none" />
      
      <Container className="relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-[700px] mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-primary-green/30 text-xs font-semibold text-primary-green tracking-wider uppercase mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-primary-green animate-pulse" />
            📚 Knowledge & Resources Hub
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-heading font-bold mb-6 text-foreground leading-tight"
          >
            Learn. Explore. <br />
            <GradientText>Build Better Systems.</GradientText>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground"
          >
            Discover practical articles, architecture deep-dives, AI prompts, Android development guides, and downloadable resources.
          </motion.p>
        </div>

        {/* Categories Filter */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-16">
          {blogCategories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-2 rounded-full text-xs font-bold tracking-wide transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-primary-blue to-primary-green text-white shadow-[0_0_20px_rgba(37,99,235,0.4)]"
                  : "glass bg-white/5 border border-white/10 dark:border-white/10 border-slate-200 text-muted-foreground hover:text-foreground hover:bg-white/10"
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* Featured Article */}
        {(activeCategory === "All" || activeCategory === featuredArticle?.category) && featuredArticle && (
          <FeaturedArticle article={featuredArticle} />
        )}

        {/* SECTION 1: LATEST ARTICLES (Full-Width 3-Column Grid) */}
        <div className="mb-28">
          <div className="flex items-center justify-between mb-8 border-b border-white/10 dark:border-white/10 border-slate-200 pb-4">
            <h3 className="text-2xl sm:text-3xl font-heading font-bold text-foreground">Latest Articles</h3>
            <span className="text-xs font-bold px-3 py-1 rounded-full glass border border-white/10 text-muted-foreground">
              Showing {filteredArticles.length} publications
            </span>
          </div>
          
          <AnimatePresence mode="popLayout">
            {filteredArticles.length > 0 ? (
              <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredArticles.map((article, idx) => (
                  <ArticleCard key={article.id} article={article} index={idx} />
                ))}
              </motion.div>
            ) : (
              <motion.div 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                className="py-16 text-center border border-dashed border-white/10 dark:border-white/10 border-slate-200 rounded-3xl glass"
              >
                <p className="text-muted-foreground">No articles found in this category yet.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* SECTION 2: FREE RESOURCES (Full-Width 4-Column Grid) */}
        <div className="mb-28">
          <div className="flex items-center justify-between mb-8 border-b border-white/10 dark:border-white/10 border-slate-200 pb-4">
            <h3 className="text-2xl sm:text-3xl font-heading font-bold text-foreground flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-primary-green" /> 
              <span>Free Resources & Cheat Sheets</span>
            </h3>
            <span className="text-xs font-bold tracking-wider text-primary-green uppercase px-3 py-1 rounded-full bg-primary-green/10 border border-primary-green/30">
              Instant PDF Downloads
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource, idx) => (
              <ResourceCard key={resource.id} resource={resource} index={idx} />
            ))}
          </div>
        </div>

        {/* SECTION 3: POPULAR TAGS (Full-Width Pill Bar) */}
        <div className="mb-28 p-8 rounded-3xl glass border border-white/10 dark:border-white/10 border-slate-200 shadow-md">
          <div className="flex items-center justify-between mb-6 border-b border-white/10 dark:border-white/10 border-slate-200 pb-4">
            <h3 className="text-xl font-heading font-bold text-foreground flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-primary-blue" /> Popular Engineering Topics
            </h3>
            <span className="text-xs font-bold tracking-wider text-primary-blue uppercase">EXPLORE TAGS</span>
          </div>

          <div className="flex flex-wrap gap-3 justify-center">
            {popularTags.map((tag, idx) => (
              <motion.a
                key={tag}
                href={`#tag-${tag}`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.03 }}
                className="px-4 py-2 rounded-full bg-white/5 border border-white/10 dark:border-white/10 border-slate-200 text-xs sm:text-sm font-semibold text-muted-foreground hover:text-foreground hover:border-primary-blue/50 hover:bg-primary-blue/10 transition-all duration-300 shadow-sm"
              >
                #{tag}
              </motion.a>
            ))}
          </div>
        </div>

        {/* SECTION 4: FEATURED AI PROMPTS (Full-Width 3-Column Grid) */}
        <div className="mb-32">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-primary-blue/30 text-xs font-semibold text-primary-blue tracking-wider uppercase mb-3">
              ⚡ Productivity Boosters
            </span>
            <h3 className="text-3xl font-heading font-bold text-foreground mb-4">Featured AI Prompts</h3>
            <p className="text-muted-foreground">Copy and paste these engineered prompts to accelerate your daily workflow.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {prompts.map((prompt, idx) => (
              <PromptCard key={prompt.id} prompt={prompt} index={idx} />
            ))}
          </div>
        </div>

        {/* Newsletter CTA */}
        <NewsletterCTA />

      </Container>
    </section>
  );
}
