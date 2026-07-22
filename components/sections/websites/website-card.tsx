"use client";

import { motion } from "framer-motion";
import { WebsiteData } from "@/config/websites";
import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import { BrowserMockup } from "./browser-mockup";
import { FeatureChip } from "@/components/sections/apps/feature-chip";
import { TechBadge } from "@/components/sections/apps/tech-badge";
import { ArrowRight, ExternalLink } from "lucide-react";

interface WebsiteCardProps {
  website: WebsiteData;
  index: number;
}

export function WebsiteCard({ website, index }: WebsiteCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "150px" }}
      transition={{ duration: 0.3, delay: Math.min(index * 0.05, 0.2) }}
    >
      <GlassCard className="group relative overflow-hidden p-5 md:p-6 lg:p-7 flex flex-col lg:flex-row gap-6 lg:gap-8 items-center lg:items-start h-full border-white/5 hover:border-primary-green/30 transition-colors duration-500">
        
        {/* Visual Column (Browser Mockup) */}
        <div className="w-full lg:w-5/12 flex-shrink-0">
          <BrowserMockup screenshots={website.screenshots} />
        </div>

        {/* Content Column */}
        <div className="w-full lg:w-7/12 flex flex-col flex-grow">
          {/* Header Row */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl overflow-hidden bg-white/5 border border-white/10 shrink-0">
                <img src={website.logo} alt={website.name} className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-heading font-bold text-foreground">
                  {website.name}
                </h3>
                <p className="text-primary-green text-xs font-semibold tracking-wide uppercase mt-0.5">
                  {website.category}
                </p>
              </div>
            </div>
            
            {/* Status Badge */}
            <div className={`px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase border ${
              website.status === 'LIVE' ? 'bg-primary-green/10 text-primary-green border-primary-green/20' : 
              'bg-yellow-500/10 text-yellow-500 border-yellow-500/20'
            }`}>
              {website.status}
            </div>
          </div>

          <p className="text-muted-foreground text-sm md:text-base mb-4 leading-relaxed line-clamp-3">
            {website.description}
          </p>

          {/* Features */}
          <div className="mb-4">
            <div className="flex flex-wrap gap-1.5">
              {website.features.map(feature => (
                <FeatureChip key={feature.id} name={feature.name} />
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div className="mb-6">
            <h4 className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold mb-2">Built With</h4>
            <div className="flex flex-wrap gap-1.5">
              {website.technologies.map((tech, idx) => (
                <TechBadge key={idx} name={tech} />
              ))}
            </div>
          </div>

          <div className="mt-auto pt-4 border-t border-white/5">
            {/* Actions */}
            <div className="flex flex-wrap gap-3">
              {website.status === 'COMING SOON' ? (
                <Button 
                  disabled
                  variant="outline"
                  size="sm"
                  className="rounded-full opacity-70"
                >
                  Coming Soon
                </Button>
              ) : (
                <>
                  {website.url && (
                    <Button size="sm" className="rounded-full bg-gradient-to-r from-primary-blue to-primary-green hover:opacity-90 text-white border-0 group/btn" asChild>
                      <a href={website.url} target="_blank" rel="noopener noreferrer" className="flex items-center">
                        Visit Website
                        <ExternalLink className="w-3.5 h-3.5 ml-1.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                      </a>
                    </Button>
                  )}
                  <Button size="sm" variant="outline" className="rounded-full group/btn2">
                    View Details
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover/btn2:translate-x-0.5 transition-transform" />
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
}
