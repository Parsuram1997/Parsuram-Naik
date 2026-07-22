"use client";

import { GlassCard } from "@/components/ui/glass-card";
import { MapPin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export function LocationMap() {
  return (
    <GlassCard className="h-[300px] md:h-[350px] p-0 overflow-hidden relative group border-white/10 rounded-3xl shadow-elevation">
      {/* Dark-styled Embedded Google Map */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119743.53374246879!2d85.75041285!3d20.2960587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909d2d5170aa5%3A0xfc580e2b68b33fa8!2sBhubaneswar%2C%20Odisha!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0, filter: "grayscale(100%) invert(92%) contrast(83%)" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Bhubaneswar Location Map"
        className="w-full h-full pointer-events-auto opacity-75 group-hover:opacity-100 transition-opacity duration-500"
      />

      {/* Top Floating Live Badge */}
      <div className="absolute top-4 left-4 z-10 flex items-center gap-2 px-3.5 py-1.5 rounded-full glass border border-white/10 text-xs font-semibold text-foreground backdrop-blur-md shadow-lg">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-green opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-green"></span>
        </span>
        <span>Based in Bhubaneswar, India</span>
      </div>

      {/* Bottom Action Bar */}
      <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between p-3 rounded-2xl glass border border-white/10 backdrop-blur-xl bg-background/80 shadow-elevation">
        <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
          <MapPin className="w-4 h-4 text-primary-green shrink-0" />
          <span className="truncate">Bhubaneswar, Odisha</span>
        </div>
        <Button
          size="sm"
          variant="outline"
          className="rounded-full h-8 text-xs border-white/20 hover:bg-white/10 hover:text-white shrink-0 group/btn"
          onClick={() => window.open("https://maps.google.com/?q=Bhubaneswar,+Odisha,+India", "_blank")}
        >
          Open Map <ExternalLink className="w-3 h-3 ml-1 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
        </Button>
      </div>
    </GlassCard>
  );
}
