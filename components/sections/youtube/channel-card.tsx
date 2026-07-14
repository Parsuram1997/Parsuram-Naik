"use client";

import { motion } from "framer-motion";
import { ChannelData } from "@/config/youtube";
import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Users, Video, Eye, Calendar } from "lucide-react";
import { FiYoutube } from "react-icons/fi";

export function ChannelCard({ channel }: { channel: ChannelData }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="max-w-5xl mx-auto mb-24"
    >
      <GlassCard className="overflow-hidden p-0 border-white/10 shadow-elevation">
        {/* Banner Area */}
        <div className="relative h-48 md:h-64 w-full">
          <img src={channel.bannerUrl} alt="Channel Banner" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
        </div>

        {/* Content Area */}
        <div className="relative px-6 md:px-12 pb-8 -mt-16">
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center md:items-end">
            
            {/* Avatar */}
            <div className="w-32 h-32 rounded-full border-4 border-background overflow-hidden relative z-10 shadow-2xl shrink-0">
              <img src={channel.avatarUrl} alt={channel.name} className="w-full h-full object-cover" />
            </div>

            {/* Info & Buttons */}
            <div className="flex-grow text-center md:text-left flex flex-col md:flex-row justify-between items-center md:items-end gap-6 w-full">
              <div className="mb-2">
                <h3 className="text-3xl font-heading font-bold text-foreground mb-1">{channel.name}</h3>
                <p className="text-sm text-muted-foreground max-w-md">{channel.description}</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                <Button className="rounded-full bg-red-600 hover:bg-red-700 text-white border-0 group w-full sm:w-auto" asChild>
                  <a href={channel.youtubeUrl} target="_blank" rel="noopener noreferrer">
                    <FiYoutube className="w-4 h-4 mr-2" />
                    Subscribe
                  </a>
                </Button>
                <Button variant="outline" className="rounded-full group w-full sm:w-auto" asChild>
                  <a href={channel.youtubeUrl} target="_blank" rel="noopener noreferrer">
                    Visit Channel
                    <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </a>
                </Button>
              </div>
            </div>

          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 pt-8 border-t border-white/5">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-muted-foreground mb-1">
                <Users className="w-4 h-4" />
                <span className="text-xs uppercase tracking-wider font-semibold">Subscribers</span>
              </div>
              <p className="text-2xl font-bold text-foreground">{channel.stats.subscribers}</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-muted-foreground mb-1">
                <Video className="w-4 h-4" />
                <span className="text-xs uppercase tracking-wider font-semibold">Videos</span>
              </div>
              <p className="text-2xl font-bold text-foreground">{channel.stats.videos}</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-muted-foreground mb-1">
                <Eye className="w-4 h-4" />
                <span className="text-xs uppercase tracking-wider font-semibold">Views</span>
              </div>
              <p className="text-2xl font-bold text-foreground">{channel.stats.views}</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-muted-foreground mb-1">
                <Calendar className="w-4 h-4" />
                <span className="text-xs uppercase tracking-wider font-semibold">Years</span>
              </div>
              <p className="text-2xl font-bold text-foreground">{channel.stats.years}</p>
            </div>
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
}
