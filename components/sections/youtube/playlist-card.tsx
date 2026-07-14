"use client";

import { motion } from "framer-motion";
import { PlaylistData } from "@/config/youtube";
import { GlassCard } from "@/components/ui/glass-card";
import { ListVideo } from "lucide-react";

export function PlaylistCard({ playlist, index }: { playlist: PlaylistData; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full"
    >
      <a href={playlist.youtubeUrl} target="_blank" rel="noopener noreferrer" className="block h-full group">
        <GlassCard className="p-4 flex items-center gap-6 border-white/5 group-hover:border-primary-green/30 transition-all duration-300 h-full group-hover:-translate-y-1">
          <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-xl overflow-hidden shrink-0">
            <img src={playlist.thumbnailUrl} alt={playlist.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm">
              <ListVideo className="w-6 h-6 text-white mb-1" />
              <span className="text-[10px] font-bold text-white uppercase tracking-wider">Play All</span>
            </div>
          </div>
          
          <div className="flex flex-col">
            <div className="bg-white/10 px-2 py-0.5 rounded text-[10px] font-bold tracking-wider text-primary-green uppercase mb-2 w-max border border-white/5">
              {playlist.videoCount} Videos
            </div>
            <h4 className="text-lg font-bold text-foreground mb-1 group-hover:text-primary-green transition-colors line-clamp-1">
              {playlist.title}
            </h4>
            <p className="text-sm text-muted-foreground line-clamp-2">
              {playlist.description}
            </p>
          </div>
        </GlassCard>
      </a>
    </motion.div>
  );
}
