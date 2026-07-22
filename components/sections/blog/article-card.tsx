"use client";

import { motion } from "framer-motion";
import { Article } from "@/config/blog";
import { GlassCard } from "@/components/ui/glass-card";
import { Clock, Calendar, ArrowRight, BookOpen } from "lucide-react";

export function ArticleCard({ article, index }: { article: Article; index: number }) {
  return (
    <motion.a
      href="#"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="block h-full group"
    >
      <GlassCard className="p-0 overflow-hidden h-full flex flex-col border-white/10 dark:border-white/10 border-slate-200 hover:border-primary-blue/40 transition-all duration-500 group-hover:-translate-y-2 shadow-soft hover:shadow-elevation">
        
        {/* Thumbnail Image Container */}
        <div className="relative h-52 overflow-hidden shrink-0">
          <img 
            src={article.thumbnail} 
            alt={article.title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
          />
          
          {/* Ambient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
          
          {/* Category Pill */}
          <div className="absolute top-4 left-4 px-3 py-1 bg-background/80 border border-white/20 dark:border-white/20 border-slate-300 backdrop-blur-md rounded-full text-[10px] font-bold text-foreground uppercase tracking-widest shadow-md">
            {article.category}
          </div>
        </div>
        
        {/* Card Body */}
        <div className="p-6 flex flex-col flex-grow">
          <h4 className="text-lg md:text-xl font-bold font-heading mb-3 text-foreground group-hover:text-primary-blue transition-colors line-clamp-2 leading-snug">
            {article.title}
          </h4>
          
          <p className="text-xs md:text-sm text-muted-foreground mb-6 line-clamp-3 leading-relaxed flex-grow">
            {article.excerpt}
          </p>
          
          {/* Card Footer */}
          <div className="flex items-center justify-between text-xs text-muted-foreground mt-auto pt-4 border-t border-white/10 dark:border-white/10 border-slate-200 font-medium">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-primary-blue" /> {article.readingTime}</span>
              <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5 text-primary-green" /> {article.publishedDate}</span>
            </div>
            
            <div className="flex items-center gap-1 text-primary-blue font-semibold group-hover:translate-x-1 transition-transform">
              <span>Read</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>

      </GlassCard>
    </motion.a>
  );
}
