"use client";

import { motion } from "framer-motion";
import { VideoData } from "@/config/youtube";
import { GlassCard } from "@/components/ui/glass-card";
import { PlayCircle } from "lucide-react";

export function VideoCard({ video, index }: { video: VideoData; index: number }) {
  const isFeatured = video.featured;

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "150px" }}
      transition={{ duration: 0.3, delay: Math.min(index * 0.05, 0.2) }}
      className={`h-full ${isFeatured ? 'md:col-span-2 lg:col-span-3 mb-8' : ''}`}
    >
      <a href={video.youtubeUrl} target="_blank" rel="noopener noreferrer" className="block h-full group">
        <GlassCard className={`p-0 overflow-hidden border-white/5 group-hover:border-primary-blue/30 transition-all duration-500 h-full flex ${isFeatured ? 'flex-col lg:flex-row' : 'flex-col'}`}>
          
          {/* Thumbnail */}
          <div className={`relative overflow-hidden ${isFeatured ? 'lg:w-2/3 h-64 lg:h-96' : 'w-full h-48 sm:h-56'}`}>
            <img 
              src={video.thumbnailUrl} 
              alt={video.title} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
            />
            {/* Play Overlay */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <PlayCircle className="w-16 h-16 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)] group-hover:scale-110 transition-transform duration-300" />
            </div>
            {/* Duration Badge */}
            <div className="absolute bottom-3 right-3 bg-black/80 px-2 py-1 rounded text-xs font-bold text-white border border-white/10 backdrop-blur-md">
              {video.duration}
            </div>
          </div>

          {/* Content */}
          <div className={`p-6 md:p-8 flex flex-col justify-center ${isFeatured ? 'lg:w-1/3' : 'flex-grow'}`}>
            {isFeatured && (
              <span className="text-[10px] font-bold tracking-widest uppercase text-red-500 mb-4 block">
                Featured Video
              </span>
            )}
            <h4 className={`font-bold text-foreground mb-3 group-hover:text-primary-blue transition-colors line-clamp-2 ${isFeatured ? 'text-2xl md:text-3xl' : 'text-lg'}`}>
              {video.title}
            </h4>
            <p className="text-sm text-muted-foreground mb-6 line-clamp-3">
              {video.description}
            </p>
            <div className="mt-auto flex items-center gap-2 text-xs text-muted-foreground/70 font-semibold uppercase tracking-wider">
              <span>{video.publishedAt}</span>
              <span className="w-1 h-1 rounded-full bg-white/20" />
              <span className="group-hover:text-primary-blue transition-colors">Watch Now</span>
            </div>
          </div>
        </GlassCard>
      </a>
    </motion.div>
  );
}
