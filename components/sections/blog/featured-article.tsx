"use client";

import { motion } from "framer-motion";
import { Article } from "@/config/blog";
import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import { Clock, Calendar, ArrowRight, Bookmark, Sparkles } from "lucide-react";

export function FeaturedArticle({ article }: { article: Article }) {
  if (!article) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="mb-16"
    >
      <GlassCard className="p-0 overflow-hidden border-primary-blue/30 shadow-[0_0_50px_rgba(37,99,235,0.15)] flex flex-col md:flex-row group relative">
        
        {/* Featured Ribbon Badge */}
        <div className="absolute top-4 right-4 z-20 inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 text-black text-xs font-black tracking-wider uppercase shadow-md">
          <Sparkles className="w-3.5 h-3.5" /> FEATURED ARTICLE
        </div>

        {/* Thumbnail */}
        <div className="md:w-1/2 relative h-64 md:h-auto overflow-hidden">
          <img 
            src={article.thumbnail} 
            alt={article.title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
          />
          <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-background via-background/60 to-transparent" />
          
          <div className="absolute top-6 left-6 px-3.5 py-1 rounded-full bg-primary-blue/20 text-primary-blue border border-primary-blue/50 text-xs font-extrabold tracking-widest backdrop-blur-md">
            {article.category}
          </div>
        </div>

        {/* Content */}
        <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center relative z-10">
          <div className="flex items-center gap-4 text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-4">
            <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-primary-blue" /> {article.readingTime}</span>
            <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5 text-primary-green" /> {article.publishedDate}</span>
          </div>

          <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4 group-hover:text-primary-blue transition-colors leading-tight">
            {article.title}
          </h3>
          <p className="text-muted-foreground mb-8 text-sm md:text-base leading-relaxed">
            {article.excerpt}
          </p>

          <div className="flex items-center gap-4 mt-auto">
            <Button className="rounded-full bg-gradient-to-r from-primary-blue to-primary-green text-white shadow-md hover:shadow-lg inline-flex items-center gap-2">
              <span>Read Full Article</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full border-white/20 dark:border-white/20 border-slate-300 hover:border-primary-blue/50 hover:text-primary-blue hover:bg-primary-blue/10">
              <Bookmark className="w-4 h-4" />
            </Button>
          </div>
        </div>

      </GlassCard>
    </motion.div>
  );
}
