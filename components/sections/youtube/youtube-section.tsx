"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { GradientText } from "@/components/ui/gradient-text";
import { channelData, videosData, playlistsData, youtubeStats } from "@/config/youtube";
import { ChannelCard } from "./channel-card";
import { VideoCard } from "./video-card";
import { PlaylistCard } from "./playlist-card";
import { StatsCard } from "./stats-card";
import { YouTubeCTA } from "./youtube-cta";

export function YouTubeSection() {
  const featuredVideo = videosData.find(v => v.featured);
  const regularVideos = videosData.filter(v => !v.featured);

  return (
    <section id="youtube" className="relative py-24 md:py-32 overflow-hidden dark:bg-black/20 bg-slate-50 border-y dark:border-white/5 border-slate-200">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,0,0,0.03)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute top-[20%] right-[-10%] w-[50%] h-[50%] bg-red-500/5 rounded-full blur-[150px] pointer-events-none -z-10" />

      <Container>
        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-[700px] mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-white/10 text-xs font-semibold text-red-500 tracking-wider uppercase mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            ▶ YouTube Channel
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-heading font-bold mb-6 text-foreground leading-tight"
          >
            Learn Technology <br />
            <GradientText>Through Real Projects</GradientText>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground"
          >
            I create educational content covering Android development, AI tools, web development, computer education and practical technology tutorials.
          </motion.p>
        </div>

        {/* Featured Channel Card */}
        <ChannelCard channel={channelData} />

        {/* Videos Grid */}
        <div className="mb-32">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-heading font-bold">Latest Videos</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredVideo && <VideoCard video={featuredVideo} index={0} />}
            {regularVideos.map((video, idx) => (
              <VideoCard key={video.id} video={video} index={idx + 1} />
            ))}
          </div>
        </div>

        {/* Playlists */}
        <div className="mb-32">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-heading font-bold">Featured Playlists</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {playlistsData.map((playlist, idx) => (
              <PlaylistCard key={playlist.id} playlist={playlist} index={idx} />
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div className="mb-32">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-heading font-bold mb-2">Channel Highlights</h3>
            <p className="text-muted-foreground">A quick look at the impact we've made so far.</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {youtubeStats.map((stat, idx) => (
              <StatsCard key={stat.id} stat={stat} index={idx} />
            ))}
          </div>
        </div>

        {/* CTA */}
        <YouTubeCTA />

      </Container>
    </section>
  );
}
