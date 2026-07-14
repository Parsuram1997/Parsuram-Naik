"use client";

import { MapPin, Clock, CircleDot } from "lucide-react";

export function BusinessInfo() {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/5">
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-blue/10 text-primary-blue shrink-0">
          <MapPin className="w-4 h-4" />
        </div>
        <div>
          <p className="text-xs text-muted-foreground mb-0.5">Location</p>
          <p className="text-sm font-medium text-white">India</p>
        </div>
      </div>
      
      <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/5">
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-green/10 text-primary-green shrink-0">
          <Clock className="w-4 h-4" />
        </div>
        <div>
          <p className="text-xs text-muted-foreground mb-0.5">Response Time</p>
          <p className="text-sm font-medium text-white">Usually within 24 hours</p>
        </div>
      </div>
      
      <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/5">
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-500/10 text-green-500 shrink-0 relative">
          <CircleDot className="w-4 h-4 relative z-10" />
          <div className="absolute inset-0 rounded-full bg-green-500/20 animate-ping" />
        </div>
        <div>
          <p className="text-xs text-muted-foreground mb-0.5">Status</p>
          <p className="text-sm font-medium text-white">Available for Collaboration</p>
        </div>
      </div>
    </div>
  );
}
