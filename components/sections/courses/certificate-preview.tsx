"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Sparkles, QrCode } from "lucide-react";

export function CertificatePreview() {
  const [studentName, setStudentName] = useState("PARSURAM NAIK");

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="w-full max-w-4xl mx-auto flex flex-col gap-5"
    >
      {/* Live Name Input Tester */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 p-3.5 rounded-2xl glass border border-white/10 dark:border-white/10 border-slate-200">
        <div className="flex items-center gap-2.5">
          <Sparkles className="w-4 h-4 text-amber-400 animate-pulse shrink-0" />
          <span className="text-xs font-semibold text-foreground">
            Test Your Certificate Name:
          </span>
        </div>
        <div className="w-full sm:w-auto flex items-center gap-2">
          <input
            type="text"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value.toUpperCase())}
            placeholder="ENTER YOUR NAME..."
            className="w-full sm:w-60 px-3.5 py-1.5 rounded-xl text-xs font-bold bg-background/80 border border-white/20 text-foreground uppercase focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all"
          />
        </div>
      </div>

      {/* Outer Certificate Frame Container (Compact Landscape Aspect Ratio) */}
      <div className="relative w-full p-2 sm:p-3 bg-gradient-to-br from-amber-500/30 via-yellow-600/20 to-amber-500/30 rounded-[2rem] shadow-[0_0_50px_rgba(245,158,11,0.2)]">
        
        {/* Certificate Card Body */}
        <div className="relative w-full bg-[#060D19] border border-amber-500/60 rounded-[1.75rem] p-4 sm:p-6 md:p-8 overflow-hidden text-amber-100 shadow-2xl">
          
          {/* Inner Golden Double Border Line */}
          <div className="absolute inset-2.5 sm:inset-3.5 border border-amber-400/40 rounded-[1.25rem] pointer-events-none" />
          <div className="absolute inset-3.5 sm:inset-4.5 border border-amber-500/20 rounded-[1.1rem] pointer-events-none" />

          {/* SVG Ornate Corner Flourish Ornaments */}
          <svg className="absolute top-4 left-4 w-8 sm:w-12 h-8 sm:h-12 text-amber-400/70 pointer-events-none" viewBox="0 0 100 100" fill="currentColor">
            <path d="M10,10 L40,10 C30,15 20,25 20,40 L20,70 C15,50 15,30 10,10 Z M15,15 L15,35 C18,25 25,18 35,15 L15,15 Z" />
            <circle cx="15" cy="15" r="3" fill="currentColor" />
          </svg>

          <svg className="absolute top-4 right-4 w-8 sm:w-12 h-8 sm:h-12 text-amber-400/70 pointer-events-none" viewBox="0 0 100 100" fill="currentColor">
            <path d="M90,10 L60,10 C70,15 80,25 80,40 L80,70 C85,50 85,30 90,10 Z M85,15 L85,35 C82,25 75,18 65,15 L85,15 Z" />
            <circle cx="85" cy="15" r="3" fill="currentColor" />
          </svg>

          <svg className="absolute bottom-4 left-4 w-8 sm:w-12 h-8 sm:h-12 text-amber-400/70 pointer-events-none" viewBox="0 0 100 100" fill="currentColor">
            <path d="M10,90 L40,90 C30,85 20,75 20,60 L20,30 C15,50 15,70 10,90 Z M15,85 L15,65 C18,75 25,82 35,85 L15,85 Z" />
            <circle cx="15" cy="85" r="3" fill="currentColor" />
          </svg>

          <svg className="absolute bottom-4 right-4 w-8 sm:w-12 h-8 sm:h-12 text-amber-400/70 pointer-events-none" viewBox="0 0 100 100" fill="currentColor">
            <path d="M90,90 L60,90 C70,85 80,75 80,60 L80,30 C85,50 85,70 90,90 Z M85,85 L85,65 C82,75 75,82 65,85 L85,85 Z" />
            <circle cx="85" cy="85" r="3" fill="currentColor" />
          </svg>

          {/* Background Ambient Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.05)_0%,transparent_70%)] pointer-events-none" />

          {/* Top-Right QR Code Verification Box (Compact & Positioned Clear of Text) */}
          <div className="hidden lg:flex absolute top-6 right-6 flex-col items-center p-2 rounded-xl bg-[#0a1428] border border-amber-500/40 shadow-lg z-20 w-24">
            <div className="flex items-center gap-1 text-amber-400 mb-0.5">
              <ShieldCheck className="w-3 h-3 fill-amber-400/20" />
              <span className="text-[8px] font-black tracking-wider uppercase">VERIFIED</span>
            </div>
            <div className="text-[7px] text-amber-400/80 font-mono mb-1 tracking-widest">★★★★★</div>
            
            <div className="w-12 h-12 bg-white p-0.5 rounded flex items-center justify-center shadow-inner mb-1">
              <QrCode className="w-full h-full text-black" />
            </div>
            <span className="text-[7px] text-amber-200/70 uppercase tracking-wider font-mono">Scan to verify</span>
          </div>

          <div className="relative z-10 flex flex-col items-center text-center">
            
            {/* Top Logo Emblem */}
            <div className="flex flex-col items-center mb-2">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-amber-400/80 bg-gradient-to-br from-amber-500/20 to-yellow-600/10 flex items-center justify-center mb-1 shadow-sm">
                <span className="text-base sm:text-lg font-serif font-black text-amber-400">P</span>
              </div>
              <h4 className="text-[10px] sm:text-xs font-extrabold tracking-[0.2em] text-amber-300 uppercase">
                PARSURAM AI ACADEMY
              </h4>
              <p className="text-[8px] font-mono tracking-[0.25em] text-amber-400/70 uppercase">
                — LEARN • BUILD • GROW —
              </p>
            </div>

            {/* Title: CERTIFICATE OF COMPLETION */}
            <h2 className="text-xl sm:text-3xl md:text-4xl font-serif font-bold tracking-[0.15em] text-amber-400 uppercase mb-0.5 drop-shadow-sm">
              CERTIFICATE
            </h2>
            
            <div className="flex items-center gap-2 mb-3">
              <div className="w-10 sm:w-16 h-px bg-gradient-to-r from-transparent via-amber-400 to-amber-400/50" />
              <span className="text-[10px] sm:text-xs font-serif italic text-amber-200 tracking-widest uppercase">
                OF COMPLETION
              </span>
              <div className="w-10 sm:w-16 h-px bg-gradient-to-l from-transparent via-amber-400 to-amber-400/50" />
            </div>

            {/* Recipient Subtitle */}
            <p className="text-[10px] sm:text-xs font-serif italic text-amber-200/80 mb-1">
              This certificate is proudly presented to
            </p>

            {/* Recipient Name */}
            <div className="flex items-center gap-2 my-1">
              <span className="text-amber-400 text-xs sm:text-sm">❖</span>
              <h3 className="whitespace-nowrap text-lg sm:text-2xl md:text-3xl font-serif font-bold text-amber-300 tracking-widest uppercase drop-shadow-sm border-b border-amber-400/40 pb-0.5 px-3">
                {studentName.trim() || "PARSURAM NAIK"}
              </h3>
              <span className="text-amber-400 text-xs sm:text-sm">❖</span>
            </div>

            <p className="text-[10px] sm:text-xs font-serif italic text-amber-200/80 mt-1 mb-2">
              for successfully completing the course
            </p>

            {/* Course Ribbon Banner */}
            <div className="relative my-1 max-w-xl w-full">
              <div className="relative px-4 sm:px-6 py-2 bg-[#0a162c] border border-amber-400/70 rounded-lg shadow-sm text-center">
                <h5 className="whitespace-nowrap text-xs sm:text-sm md:text-base font-bold font-heading text-white uppercase tracking-wider">
                  MASTER ANDROID DEVELOPMENT <span className="text-amber-400 text-xs">(ALL PRODUCTS INCLUDED)</span>
                </h5>
              </div>

              {/* Lifetime Duration Badge */}
              <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/40 text-[9px] font-mono font-bold tracking-wider uppercase mt-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                LIVE DURATION : LIFETIME
              </div>
            </div>

            {/* 5-Column Metrics Bar (Compact Single Row) */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 sm:gap-0 w-full my-4 border-y border-amber-400/30 py-2.5 px-1 bg-amber-400/[0.02]">
              
              <div className="flex flex-col items-center justify-center sm:border-r border-amber-400/20 px-1">
                <span className="text-[9px] font-mono uppercase tracking-wider text-amber-300/70">CERTIFICATE ID</span>
                <span className="text-[10px] sm:text-xs font-mono font-bold text-amber-200 whitespace-nowrap">PAA-2025-0718-1001</span>
              </div>

              <div className="flex flex-col items-center justify-center sm:border-r border-amber-400/20 px-1">
                <span className="text-[9px] font-mono uppercase tracking-wider text-amber-300/70">ISSUE DATE</span>
                <span className="text-[10px] sm:text-xs font-mono font-bold text-amber-200 whitespace-nowrap">18 July 2026</span>
              </div>

              <div className="flex flex-col items-center justify-center sm:border-r border-amber-400/20 px-1">
                <span className="text-[9px] font-mono uppercase tracking-wider text-amber-300/70">COMPLETION DATE</span>
                <span className="text-[10px] sm:text-xs font-mono font-bold text-amber-200 whitespace-nowrap">18 July 2026</span>
              </div>

              <div className="flex flex-col items-center justify-center sm:border-r border-amber-400/20 px-1">
                <span className="text-[9px] font-mono uppercase tracking-wider text-amber-300/70">GRADE</span>
                <span className="text-[10px] sm:text-xs font-mono font-black text-emerald-400">A+</span>
              </div>

              <div className="flex flex-col items-center justify-center col-span-2 sm:col-span-1 px-1 mt-1 sm:mt-0">
                <span className="text-[9px] font-mono uppercase tracking-wider text-amber-300/70">COURSE DURATION</span>
                <span className="text-[10px] sm:text-xs font-mono font-bold text-amber-200 whitespace-nowrap">Lifetime Access</span>
              </div>

            </div>

            {/* Bottom Row: Signatures + Golden Embossed Wax Seal */}
            <div className="flex flex-row w-full justify-between items-center gap-2 mt-1 px-2 sm:px-6">
              
              {/* Left Signature */}
              <div className="text-center flex flex-col items-center w-1/3">
                <h4 className="whitespace-nowrap font-serif italic text-sm sm:text-lg text-amber-300 font-bold tracking-wide">
                  Amit Verma
                </h4>
                <div className="w-24 sm:w-32 h-px bg-amber-400/40 my-0.5" />
                <p className="whitespace-nowrap text-[9px] font-bold text-amber-400 uppercase tracking-widest">INSTRUCTOR</p>
                <p className="whitespace-nowrap text-[8px] text-amber-200/60 hidden sm:block">Android Developer & Educator</p>
              </div>

              {/* Center Golden Embossed Wax Seal Stamp */}
              <div className="flex flex-col items-center shrink-0">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-amber-300 via-yellow-500 to-amber-600 p-0.5 shadow-md flex items-center justify-center border border-amber-200/80">
                  <div className="w-full h-full rounded-full bg-[#081224] flex flex-col items-center justify-center p-0.5 text-center border border-dashed border-amber-400/50">
                    <span className="text-[7px] font-mono font-bold text-amber-400 tracking-tighter uppercase leading-none">
                      PARSURAM
                    </span>
                    <span className="text-[10px] font-black text-amber-300 leading-none">AI</span>
                    <span className="text-[6px] font-mono font-bold text-amber-400 tracking-tighter uppercase leading-none">
                      ACADEMY
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Signature */}
              <div className="text-center flex flex-col items-center w-1/3">
                <h4 className="whitespace-nowrap font-serif italic text-sm sm:text-lg text-amber-300 font-bold tracking-wide">
                  Parsuram Naik
                </h4>
                <div className="w-24 sm:w-32 h-px bg-amber-400/40 my-0.5" />
                <p className="whitespace-nowrap text-[9px] font-bold text-amber-400 uppercase tracking-widest">DIRECTOR</p>
                <p className="whitespace-nowrap text-[8px] text-amber-200/60 hidden sm:block">Parsuram AI Academy</p>
              </div>

            </div>

            {/* Bottom Edge Website URL */}
            <div className="mt-4 pt-2 border-t border-amber-400/20 w-full text-center">
              <span className="text-[9px] font-mono tracking-[0.2em] text-amber-400/70 uppercase">
                ❖ www.parsuramaiacademy.com ❖
              </span>
            </div>

          </div>

        </div>

      </div>
    </motion.div>
  );
}
