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
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <GlassCard className="group relative overflow-hidden p-6 md:p-8 flex flex-col gap-8 h-full border-white/5 hover:border-primary-green/30 transition-colors duration-500">
        
        {/* Header Row */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl overflow-hidden bg-white/5 border border-white/10 shrink-0">
              <img src={website.logo} alt={website.name} className="w-full h-full object-cover" />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-heading font-bold text-foreground">
                {website.name}
              </h3>
              <p className="text-primary-green text-xs font-semibold tracking-wide uppercase mt-1">
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

        {/* Browser Mockup */}
        <div className="w-full mt-2 mb-4">
          <BrowserMockup screenshots={website.screenshots} />
        </div>

        {/* Content Column */}
        <div className="flex flex-col flex-grow">
          <p className="text-muted-foreground text-base md:text-lg mb-6 leading-relaxed">
            {website.description}
          </p>

          {/* Features */}
          <div className="mb-6">
            <div className="flex flex-wrap gap-2">
              {website.features.map(feature => (
                <FeatureChip key={feature.id} name={feature.name} />
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div className="mb-8">
            <h4 className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-3">Built With</h4>
            <div className="flex flex-wrap gap-2">
              {website.technologies.map((tech, idx) => (
                <TechBadge key={idx} name={tech} />
              ))}
            </div>
          </div>

          <div className="mt-auto pt-6 border-t border-white/5">
            {/* Actions */}
            <div className="flex flex-wrap gap-4">
              {website.status === 'COMING SOON' ? (
                <Button 
                  disabled
                  variant="outline"
                  className="rounded-full opacity-70"
                >
                  Coming Soon
                </Button>
              ) : (
                <>
                  {website.url && (
                    <Button className="rounded-full bg-gradient-to-r from-primary-blue to-primary-green hover:opacity-90 text-white border-0 group/btn" asChild>
                      <a href={website.url} target="_blank" rel="noopener noreferrer" className="flex items-center">
                        Visit Website
                        <ExternalLink className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                      </a>
                    </Button>
                  )}
                  <Button variant="outline" className="rounded-full group/btn2">
                    View Details
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn2:translate-x-1 transition-transform" />
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
