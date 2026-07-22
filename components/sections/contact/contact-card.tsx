"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Zap, Copy, Check, ExternalLink } from "lucide-react";
import { contactInfo } from "@/config/contact";
import { GlassCard } from "@/components/ui/glass-card";

export function ContactCard() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const infoItems = [
    { 
      id: "email", 
      icon: Mail, 
      label: "Email Address", 
      value: contactInfo.email,
      href: `mailto:${contactInfo.email}`,
      badge: "Fastest Response",
      gradient: "from-blue-500/20 via-cyan-500/10 to-transparent",
      iconColor: "text-cyan-400",
      borderColor: "border-cyan-500/30",
      glowColor: "group-hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]"
    },
    { 
      id: "phone", 
      icon: Phone, 
      label: "Phone Number", 
      value: contactInfo.phone,
      href: `tel:${contactInfo.phone}`,
      badge: "WhatsApp / Direct Call",
      gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
      iconColor: "text-emerald-400",
      borderColor: "border-emerald-500/30",
      glowColor: "group-hover:shadow-[0_0_20px_rgba(52,211,153,0.3)]"
    },
    { 
      id: "location", 
      icon: MapPin, 
      label: "Location", 
      value: contactInfo.location,
      badge: "Remote / Onsite",
      gradient: "from-purple-500/20 via-indigo-500/10 to-transparent",
      iconColor: "text-purple-400",
      borderColor: "border-purple-500/30",
      glowColor: "group-hover:shadow-[0_0_20px_rgba(192,132,252,0.3)]"
    },
    { 
      id: "hours", 
      icon: Clock, 
      label: "Working Hours", 
      value: contactInfo.workingHours,
      badge: "Mon - Sat",
      gradient: "from-amber-500/20 via-orange-500/10 to-transparent",
      iconColor: "text-amber-400",
      borderColor: "border-amber-500/30",
      glowColor: "group-hover:shadow-[0_0_20px_rgba(251,191,36,0.3)]"
    },
    { 
      id: "response", 
      icon: Zap, 
      label: "Response Time", 
      value: contactInfo.responseTime,
      badge: "Guaranteed Reply",
      gradient: "from-rose-500/20 via-pink-500/10 to-transparent",
      iconColor: "text-rose-400",
      borderColor: "border-rose-500/30",
      glowColor: "group-hover:shadow-[0_0_20px_rgba(251,113,133,0.3)]"
    },
  ];

  const handleCopy = (id: string, value: string) => {
    navigator.clipboard.writeText(value);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <GlassCard className="p-8 md:p-10 h-full border-white/10 dark:border-white/10 border-slate-200 flex flex-col gap-6 relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-950/20 via-black/50 to-purple-950/20 shadow-2xl backdrop-blur-2xl">
      
      {/* Background Decor Ambient Mesh Glows */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-primary-blue/15 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-emerald-500/10 rounded-full blur-[110px] pointer-events-none" />

      {/* Top Header Badge */}
      <div className="flex items-center justify-between gap-4 mb-2 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-blue/10 border border-primary-blue/30 text-[11px] font-extrabold text-primary-blue tracking-wider uppercase">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          Direct Channels
        </div>
      </div>

      <div className="relative z-10">
        <h3 className="text-2xl md:text-3xl font-heading font-extrabold text-foreground mb-2">
          Direct Contact
        </h3>
        <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
          Reach out directly via email, phone, or connect on instant messaging.
        </p>
      </div>

      {/* Contact Channels Pods */}
      <div className="flex flex-col gap-4 relative z-10 mt-2">
        {infoItems.map((item, idx) => (
          <motion.div 
            key={item.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.08, duration: 0.4 }}
            className={`group relative p-4 rounded-2xl bg-gradient-to-r ${item.gradient} border ${item.borderColor} backdrop-blur-md flex items-center justify-between gap-4 hover:border-white/40 transition-all duration-300 ${item.glowColor} hover:-translate-y-0.5`}
          >
            <div className="flex items-center gap-4 min-w-0">
              <div className={`w-12 h-12 rounded-xl bg-black/40 border ${item.borderColor} flex items-center justify-center ${item.iconColor} shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                <item.icon className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">{item.label}</p>
                  {item.badge && (
                    <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-white/70">
                      {item.badge}
                    </span>
                  )}
                </div>
                <p className="text-sm md:text-base font-bold text-foreground truncate group-hover:text-primary-blue transition-colors mt-0.5">
                  {item.value}
                </p>
              </div>
            </div>

            {/* Quick Action (Copy or External Link) */}
            <div className="flex items-center gap-2 shrink-0">
              {item.href ? (
                <a
                  href={item.href}
                  target={item.id === "email" || item.id === "phone" ? "_self" : "_blank"}
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-muted-foreground hover:text-white hover:bg-white/20 transition-all"
                  title={`Open ${item.label}`}
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              ) : null}

              {(item.id === "email" || item.id === "phone") && (
                <button
                  onClick={() => handleCopy(item.id, item.value)}
                  className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-muted-foreground hover:text-white hover:bg-white/20 transition-all cursor-pointer"
                  title="Copy to clipboard"
                >
                  {copiedId === item.id ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              )}
            </div>
          </motion.div>
        ))}
      </div>

    </GlassCard>
  );
}
