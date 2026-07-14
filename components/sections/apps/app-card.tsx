"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { AppData } from "@/config/apps";
import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import { PhoneMockup } from "./phone-mockup";
import { FeatureChip } from "./feature-chip";
import { TechBadge } from "./tech-badge";
import { AppStats } from "./app-stats";
import { ArrowRight, Bell, Play } from "lucide-react";
import Link from "next/link";

interface AppCardProps {
  app: AppData;
  index: number;
  onNotifyClick: (appName: string) => void;
}

export function AppCard({ app, index, onNotifyClick }: AppCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <GlassCard className="group relative overflow-hidden p-6 md:p-8 lg:p-10 flex flex-col lg:flex-row gap-10 lg:gap-16 items-center lg:items-start h-full border-white/5 hover:border-primary-blue/30 transition-colors duration-500">
        
        {/* Visual Column (Phone Mockup) */}
        <div className="w-full lg:w-5/12 flex-shrink-0">
          <PhoneMockup screenshots={app.screenshots} />
        </div>

        {/* Content Column */}
        <div className="w-full lg:w-7/12 flex flex-col flex-grow">
          
          {/* Header Row */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl overflow-hidden bg-white/5 border border-white/10 shrink-0">
                <img src={app.icon} alt={app.name} className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
                  {app.name}
                </h3>
                <p className="text-primary-blue text-sm font-semibold tracking-wide uppercase mt-1">
                  {app.category}
                </p>
              </div>
            </div>
            
            {/* Status Badge */}
            <div className={`px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase border ${
              app.status === 'LIVE' ? 'bg-primary-green/10 text-primary-green border-primary-green/20' : 
              app.status === 'BETA' ? 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20' : 
              'bg-primary-blue/10 text-primary-blue border-primary-blue/20'
            }`}>
              {app.status}
            </div>
          </div>

          <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
            {app.description}
          </p>

          {/* Features */}
          <div className="mb-6">
            <div className="flex flex-wrap gap-2">
              {app.features.map(feature => (
                <FeatureChip key={feature.id} name={feature.name} />
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div className="mb-8">
            <h4 className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-3">Built With</h4>
            <div className="flex flex-wrap gap-2">
              {app.technologies.map((tech, idx) => (
                <TechBadge key={idx} name={tech} />
              ))}
            </div>
          </div>

          <div className="mt-auto">
            {/* Stats */}
            <AppStats stats={app.stats} />

            {/* Actions */}
            <div className="flex flex-wrap gap-4 mt-8 pt-6 border-t border-white/5">
              {app.comingSoon ? (
                <Button 
                  onClick={() => onNotifyClick(app.name)} 
                  className="rounded-full bg-gradient-to-r from-primary-blue to-primary-green hover:opacity-90 text-white border-0"
                >
                  <Bell className="w-4 h-4 mr-2" />
                  Notify Me
                </Button>
              ) : (
                <>
                  <Link href={`/apps/${app.id}`}>
                    <Button className="rounded-full bg-gradient-to-r from-primary-blue to-primary-green hover:opacity-90 text-white border-0 group/btn">
                      View Details
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  
                  {app.playStoreUrl && (
                    <Button variant="outline" className="rounded-full group/btn2" onClick={() => window.open(app.playStoreUrl, "_blank")}>
                      <Play className="w-4 h-4 mr-2 text-foreground group-hover/btn2:text-primary-green transition-colors" />
                      Google Play
                    </Button>
                  )}
                </>
              )}
            </div>
          </div>

        </div>
      </GlassCard>
    </motion.div>
  );
}
