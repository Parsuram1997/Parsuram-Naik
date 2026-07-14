"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Zap } from "lucide-react";
import { contactInfo } from "@/config/contact";
import { GlassCard } from "@/components/ui/glass-card";

export function ContactCard() {
  const infoItems = [
    { id: "email", icon: Mail, label: "Email Address", value: contactInfo.email },
    { id: "phone", icon: Phone, label: "Phone Number", value: contactInfo.phone },
    { id: "location", icon: MapPin, label: "Location", value: contactInfo.location },
    { id: "hours", icon: Clock, label: "Working Hours", value: contactInfo.workingHours },
    { id: "response", icon: Zap, label: "Response Time", value: contactInfo.responseTime },
  ];

  return (
    <GlassCard className="p-8 h-full border-white/5 flex flex-col gap-6 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary-blue/10 rounded-full blur-[100px] pointer-events-none" />

      <h3 className="text-2xl font-bold mb-2">Direct Contact</h3>
      <p className="text-muted-foreground mb-4">Reach out to me directly through any of these channels.</p>

      <div className="flex flex-col gap-6 relative z-10">
        {infoItems.map((item, idx) => (
          <motion.div 
            key={item.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            className="flex items-center gap-4 group"
          >
            <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary-blue group-hover:bg-primary-blue/20 group-hover:text-primary-green transition-all duration-300 group-hover:scale-110">
              <item.icon className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-widest font-semibold">{item.label}</p>
              <p className="text-sm font-medium text-foreground group-hover:text-primary-blue transition-colors mt-0.5">{item.value}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </GlassCard>
  );
}
