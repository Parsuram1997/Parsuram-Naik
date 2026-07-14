"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, Loader2 } from "lucide-react";
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
      
      // Reset success after 3 seconds
      setTimeout(() => setStatus("idle"), 3000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <GlassCard className="p-8 h-full border-primary-green/20 shadow-[0_0_40px_rgba(0,255,170,0.05)] relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-green/10 rounded-full blur-[100px] pointer-events-none" />

      <h3 className="text-2xl font-bold mb-2">Send a Message</h3>
      <p className="text-muted-foreground mb-8">Fill out the form below and I'll get back to you soon.</p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-xs font-semibold uppercase tracking-widest text-muted-foreground ml-1">Your Name</label>
            <input 
              required 
              type="text" 
              id="name" 
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe" 
              className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary-blue/50 focus:bg-white/10 transition-all placeholder:text-muted-foreground/50"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-xs font-semibold uppercase tracking-widest text-muted-foreground ml-1">Your Email</label>
            <input 
              required 
              type="email" 
              id="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john@example.com" 
              className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary-blue/50 focus:bg-white/10 transition-all placeholder:text-muted-foreground/50"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="subject" className="text-xs font-semibold uppercase tracking-widest text-muted-foreground ml-1">Subject</label>
          <input 
            required 
            type="text" 
            id="subject" 
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Project Collaboration" 
            className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary-blue/50 focus:bg-white/10 transition-all placeholder:text-muted-foreground/50"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="text-xs font-semibold uppercase tracking-widest text-muted-foreground ml-1">Message</label>
          <textarea 
            required 
            id="message" 
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            placeholder="Tell me about your project..." 
            className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary-blue/50 focus:bg-white/10 transition-all placeholder:text-muted-foreground/50 resize-none"
          />
        </div>

        <Button 
          type="submit" 
          disabled={status !== "idle"}
          className={`w-full py-6 rounded-xl font-bold mt-2 transition-all ${
            status === "success" 
              ? "bg-green-500/20 text-green-400 border-green-500/50 hover:bg-green-500/30" 
              : "bg-gradient-to-r from-primary-blue to-primary-green text-white"
          }`}
        >
          {status === "idle" && <><Send className="w-4 h-4 mr-2" /> Send Message</>}
          {status === "submitting" && <><Loader2 className="w-5 h-5 animate-spin" /></>}
          {status === "success" && <><CheckCircle2 className="w-5 h-5 mr-2" /> Message Sent Successfully</>}
        </Button>
      </form>
    </GlassCard>
  );
}
