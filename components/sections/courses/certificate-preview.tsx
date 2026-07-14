"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/glass-card";
import { Award, ShieldCheck } from "lucide-react";

export function CertificatePreview() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="max-w-4xl mx-auto mb-32"
    >
      <div className="text-center mb-12">
        <h3 className="text-3xl font-heading font-bold mb-4">Verifiable Certificates</h3>
        <p className="text-muted-foreground">Earn a verified certificate of completion for every premium course.</p>
      </div>

      <div className="relative p-1 md:p-2 bg-gradient-to-r from-primary-blue/30 via-primary-green/30 to-primary-blue/30 rounded-2xl md:rounded-3xl shadow-[0_0_50px_rgba(0,255,170,0.15)]">
        <GlassCard className="relative p-8 md:p-16 border-white/20 bg-background/95 overflow-hidden">
          
          {/* Certificate Decor */}
          <div className="absolute top-0 left-0 w-32 h-32 border-t-4 border-l-4 border-primary-blue/20 rounded-tl-3xl m-4" />
          <div className="absolute bottom-0 right-0 w-32 h-32 border-b-4 border-r-4 border-primary-green/20 rounded-br-3xl m-4" />
          
          <div className="text-center relative z-10 flex flex-col items-center">
            <Award className="w-16 h-16 text-primary-green mb-6" />
            <h4 className="text-2xl md:text-4xl font-heading font-serif tracking-widest text-foreground uppercase mb-2">
              Certificate of Completion
            </h4>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary-green to-transparent mb-8" />
            
            <p className="text-muted-foreground mb-4 italic">This is to certify that</p>
            <h5 className="text-3xl md:text-5xl font-bold text-foreground mb-4 font-serif">Student Name</h5>
            <p className="text-muted-foreground mb-8 italic">has successfully completed the course</p>
            
            <h6 className="text-xl md:text-2xl font-bold text-primary-blue mb-12">
              Master Android Development (2024)
            </h6>
            
            <div className="flex w-full justify-between items-end mt-8 border-t border-white/10 pt-8 px-4 md:px-12">
              <div className="text-center">
                <div className="w-32 h-px bg-white/20 mb-2" />
                <p className="text-xs text-muted-foreground uppercase tracking-widest">Date</p>
              </div>
              <div className="flex flex-col items-center">
                <ShieldCheck className="w-10 h-10 text-primary-green mb-2 opacity-50" />
                <p className="text-[10px] text-muted-foreground uppercase tracking-widest">ID: 987654321</p>
              </div>
              <div className="text-center">
                <h4 className="font-signature text-2xl text-foreground mb-1">P. Naik</h4>
                <div className="w-32 h-px bg-white/20 mb-2" />
                <p className="text-xs text-muted-foreground uppercase tracking-widest">Instructor</p>
              </div>
            </div>
          </div>
        </GlassCard>
      </div>
    </motion.div>
  );
}
