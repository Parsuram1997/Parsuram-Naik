"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ProjectChips } from "./ProjectChips";
import { motion } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";

export function ContactForm({ onSuccess }: { onSuccess: () => void }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call for Firebase
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => {
        onSuccess();
      }, 2000);
    }, 1500);
  };

  const handleChipSelect = (chip: string) => {
    setFormData({ ...formData, subject: chip });
  };

  if (isSuccess) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center h-full min-h-[300px] text-center"
      >
        <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-4 text-green-500 shadow-[0_0_30px_rgba(34,197,94,0.3)]">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
        <p className="text-sm text-muted-foreground">Thank you for reaching out. I'll get back to you soon.</p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col h-full">
      <ProjectChips selected={formData.subject} onSelect={handleChipSelect} />
      
      <div className="space-y-4 flex-1">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-muted-foreground ml-1">Name</label>
            <input 
              required
              type="text" 
              placeholder="John Doe"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-primary-blue/50 focus:border-transparent transition-all"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-muted-foreground ml-1">Email</label>
            <input 
              required
              type="email" 
              placeholder="john@example.com"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-primary-blue/50 focus:border-transparent transition-all"
            />
          </div>
        </div>
        
        <div className="space-y-1.5">
          <label className="text-xs font-medium text-muted-foreground ml-1">Subject</label>
          <input 
            required
            type="text" 
            placeholder="How can I help you?"
            value={formData.subject}
            onChange={(e) => setFormData({...formData, subject: e.target.value})}
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-primary-blue/50 focus:border-transparent transition-all"
          />
        </div>
        
        <div className="space-y-1.5 flex-1 flex flex-col">
          <label className="text-xs font-medium text-muted-foreground ml-1">Message</label>
          <textarea 
            required
            placeholder="Tell me about your project..."
            value={formData.message}
            onChange={(e) => setFormData({...formData, message: e.target.value})}
            className="w-full flex-1 min-h-[120px] bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-primary-blue/50 focus:border-transparent transition-all resize-none"
          />
        </div>
      </div>
      
      <div className="mt-6">
        <Button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full rounded-lg bg-gradient-to-r from-primary-blue to-primary-green text-white font-bold h-12 hover:shadow-[0_0_20px_rgba(0,255,170,0.3)] transition-all"
        >
          {isSubmitting ? (
            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          ) : (
            <span className="flex items-center gap-2">
              Send Message <Send className="w-4 h-4" />
            </span>
          )}
        </Button>
      </div>
    </form>
  );
}
