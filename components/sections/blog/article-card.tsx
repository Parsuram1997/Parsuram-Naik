"use client";

import { motion } from "framer-motion";
import { Article } from "@/config/blog";
import { GlassCard } from "@/components/ui/glass-card";
import { Clock, Calendar, ArrowRight } from "lucide-react";

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
      <GlassCard className="p-0 overflow-hidden h-full flex flex-col border-white/5 hover:border-primary-green/30 transition-all duration-300 group-hover:-translate-y-2">
        <div className="relative h-48 overflow-hidden shrink-0">
          <img 
            src={article.thumbnail} 
            alt={article.title} 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
          />
          <div className="absolute top-4 left-4 px-3 py-1 bg-black/60 border border-white/20 backdrop-blur-md rounded-full text-[10px] font-bold text-white uppercase tracking-widest">
            {article.category}
          </div>
        </div>
        
        <div className="p-6 flex flex-col flex-grow">
          <h4 className="text-xl font-bold mb-3 group-hover:text-primary-green transition-colors line-clamp-2">
            {article.title}
          </h4>
          <p className="text-sm text-muted-foreground mb-6 line-clamp-3 flex-grow">
            {article.excerpt}
          </p>
          
          <div className="flex items-center justify-between text-xs text-muted-foreground mt-auto pt-4 border-t border-white/5">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {article.readingTime}</span>
              <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {article.publishedDate}</span>
            </div>
            <ArrowRight className="w-4 h-4 text-primary-green opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
          </div>
        </div>
      </GlassCard>
    </motion.a>
  );
}
