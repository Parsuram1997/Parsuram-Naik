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
    <section id="blog" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(var(--primary-green),0.05)_0%,transparent_70%)] pointer-events-none" />
      
      <Container className="max-w-[1200px] relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-[700px] mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-white/10 text-xs font-semibold text-primary-green tracking-wider uppercase mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-primary-green animate-pulse" />
            📚 Blog & Resources
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-heading font-bold mb-6 text-foreground leading-tight"
          >
            Learn. Explore. <br />
            <GradientText>Build Better.</GradientText>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground"
          >
            Discover practical articles, tutorials, AI prompts, Android tips, programming guides and downloadable resources.
          </motion.p>
        </div>

        {/* Categories Filter */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-16">
          {blogCategories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-primary-blue to-primary-green text-white shadow-[0_0_15px_rgba(0,255,170,0.3)]"
                  : "glass bg-white/5 border border-white/10 text-muted-foreground hover:text-foreground hover:bg-white/10"
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

        <div className="grid lg:grid-cols-3 gap-12 mb-24">
          
          {/* Main Articles Content (2 Columns on Desktop) */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-4">
              <h3 className="text-2xl font-heading font-bold">Latest Articles</h3>
            </div>
            
            <AnimatePresence mode="popLayout">
              {filteredArticles.length > 0 ? (
                <motion.div layout className="grid md:grid-cols-2 gap-6">
                  {filteredArticles.map((article, idx) => (
                    <ArticleCard key={article.id} article={article} index={idx} />
                  ))}
                </motion.div>
              ) : (
                <motion.div 
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  className="py-12 text-center border border-dashed border-white/10 rounded-2xl"
                >
                  <p className="text-muted-foreground">No articles found in this category yet.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Sidebar Content (Resources, Prompts, Tags) */}
          <div className="space-y-12">
            
            {/* Free Resources */}
            <div>
              <h3 className="text-xl font-heading font-bold mb-6 flex items-center gap-2">
                <span className="w-8 h-px bg-primary-green/50" /> Free Resources
              </h3>
              <div className="flex flex-col gap-4">
                {resources.slice(0, 4).map((resource, idx) => (
                  <ResourceCard key={resource.id} resource={resource} index={idx} />
                ))}
              </div>
            </div>

            {/* Popular Tags */}
            <div>
              <h3 className="text-xl font-heading font-bold mb-6 flex items-center gap-2">
                <span className="w-8 h-px bg-primary-blue/50" /> Popular Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {popularTags.map((tag, idx) => (
                  <motion.a
                    key={tag}
                    href={`#tag-${tag}`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    className="px-3 py-1.5 rounded bg-white/5 border border-white/10 text-xs text-muted-foreground hover:text-white hover:border-primary-blue/50 hover:bg-primary-blue/10 transition-colors"
                  >
                    #{tag}
                  </motion.a>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Featured AI Prompts */}
        <div className="mb-32">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-heading font-bold mb-4">Featured AI Prompts</h3>
            <p className="text-muted-foreground">Copy and paste these prompts to accelerate your workflow.</p>
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
