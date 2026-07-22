"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, Loader2, User, Mail as MailIcon, MessageSquare, Sparkles } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    // Simulate API call / Firebase saving
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      // Reset success after 3.5 seconds
      setTimeout(() => setStatus("idle"), 3500);
    }, 1200);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <GlassCard className="p-8 md:p-10 h-full border-emerald-500/20 dark:border-emerald-500/30 border-slate-300 shadow-[0_0_50px_rgba(0,255,170,0.08)] relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-950/20 via-black/50 to-blue-950/20 backdrop-blur-2xl">
      
      {/* Background Glow */}
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary-green/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Top Header Badge */}
      <div className="flex items-center justify-between gap-4 mb-2 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[11px] font-extrabold text-emerald-400 tracking-wider uppercase">
          <Sparkles className="w-3 h-3 text-emerald-400" />
          Quick Message Form
        </div>
        <span className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest hidden sm:inline">
          Reply: &lt; 2 Hours
        </span>
      </div>

      <div className="relative z-10 mb-6">
        <h3 className="text-2xl md:text-3xl font-heading font-extrabold text-foreground mb-2">
          Send a Message
        </h3>
        <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
          Fill out the details below and I'll get back to you with a personal response promptly.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Name Field */}
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-xs font-extrabold uppercase tracking-widest text-muted-foreground flex items-center gap-1.5 ml-1">
              <User className="w-3.5 h-3.5 text-primary-green" /> Your Name
            </label>
            <input 
              required 
              type="text" 
              id="name" 
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Rahul Sharma" 
              className="bg-black/40 border border-white/10 dark:border-white/15 border-slate-300 rounded-2xl px-4 py-3.5 text-sm font-medium text-foreground focus:outline-none focus:border-emerald-400 focus:bg-black/60 focus:ring-2 focus:ring-emerald-400/20 transition-all placeholder:text-muted-foreground/40 shadow-inner"
            />
          </div>

          {/* Email Field */}
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-xs font-extrabold uppercase tracking-widest text-muted-foreground flex items-center gap-1.5 ml-1">
              <MailIcon className="w-3.5 h-3.5 text-cyan-400" /> Your Email
            </label>
            <input 
              required 
              type="email" 
              id="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="rahul@example.com" 
              className="bg-black/40 border border-white/10 dark:border-white/15 border-slate-300 rounded-2xl px-4 py-3.5 text-sm font-medium text-foreground focus:outline-none focus:border-cyan-400 focus:bg-black/60 focus:ring-2 focus:ring-cyan-400/20 transition-all placeholder:text-muted-foreground/40 shadow-inner"
            />
          </div>
        </div>

        {/* Subject Field */}
        <div className="flex flex-col gap-2">
          <label htmlFor="subject" className="text-xs font-extrabold uppercase tracking-widest text-muted-foreground flex items-center gap-1.5 ml-1">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" /> Subject / Topic
          </label>
          <input 
            required 
            type="text" 
            id="subject" 
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="e.g. Mobile App Development / Website Inquiry" 
            className="bg-black/40 border border-white/10 dark:border-white/15 border-slate-300 rounded-2xl px-4 py-3.5 text-sm font-medium text-foreground focus:outline-none focus:border-amber-400 focus:bg-black/60 focus:ring-2 focus:ring-amber-400/20 transition-all placeholder:text-muted-foreground/40 shadow-inner"
          />
        </div>

        {/* Message Field */}
        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="text-xs font-extrabold uppercase tracking-widest text-muted-foreground flex items-center gap-1.5 ml-1">
            <MessageSquare className="w-3.5 h-3.5 text-purple-400" /> Message
          </label>
          <textarea 
            required 
            id="message" 
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            placeholder="Describe your project scope, requirements or question..." 
            className="bg-black/40 border border-white/10 dark:border-white/15 border-slate-300 rounded-2xl px-4 py-3.5 text-sm font-medium text-foreground focus:outline-none focus:border-purple-400 focus:bg-black/60 focus:ring-2 focus:ring-purple-400/20 transition-all placeholder:text-muted-foreground/40 resize-none shadow-inner"
          />
        </div>

        {/* Submit Button */}
        <Button 
          type="submit" 
          disabled={status !== "idle"}
          className={`w-full py-7 rounded-2xl font-extrabold text-base mt-2 transition-all cursor-pointer shadow-xl ${
            status === "success" 
              ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white border-0 shadow-[0_0_30px_rgba(52,211,153,0.5)]" 
              : "bg-gradient-to-r from-primary-blue via-teal-400 to-primary-green hover:opacity-95 text-white border-0 shadow-[0_0_25px_rgba(37,99,235,0.4)] hover:shadow-[0_0_35px_rgba(52,211,153,0.6)] active:scale-[0.99]"
          }`}
        >
          {status === "idle" && (
            <span className="flex items-center justify-center gap-2">
              <Send className="w-5 h-5" /> Send Message Now
            </span>
          )}
          {status === "submitting" && (
            <span className="flex items-center justify-center gap-2">
              <Loader2 className="w-5 h-5 animate-spin" /> Sending Message...
            </span>
          )}
          {status === "success" && (
            <span className="flex items-center justify-center gap-2 text-white">
              <CheckCircle2 className="w-6 h-6 text-white animate-bounce" /> Message Delivered Successfully!
            </span>
          )}
        </Button>
      </form>
    </GlassCard>
  );
}
