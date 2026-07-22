"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  X, 
  Download, 
  Eye, 
  Share2, 
  Briefcase, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  Clock, 
  FileText, 
  Smartphone, 
  Award, 
  FolderGit2, 
  GraduationCap, 
  Users, 
  Code2, 
  Calendar,
  Loader2,
  Check,
  ExternalLink,
  MapPin
} from "lucide-react";
import { useResumeModal } from "@/components/providers/resume-provider";
import { resumeConfig } from "@/config/resume";
import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";

export function ResumeModal() {
  const { 
    isOpen, 
    closeResumeModal, 
    openResumePreview, 
    openShareModal, 
    downloadCount, 
    triggerFileDownload 
  } = useResumeModal();

  const [downloadState, setDownloadState] = useState<"idle" | "downloading" | "success">("idle");
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [downloadStepText, setDownloadStepText] = useState("Preparing Resume...");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen && downloadState === "idle") {
        closeResumeModal();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, downloadState, closeResumeModal]);

  if (!isOpen) return null;

  const handleStartDownload = () => {
    setDownloadState("downloading");
    setDownloadProgress(0);
    setDownloadStepText("Preparing Resume...");

    // Step 1: 0% -> 25%
    setTimeout(() => {
      setDownloadProgress(25);
      setDownloadStepText("Checking Latest Version (v3.2)...");
    }, 400);

    // Step 2: 25% -> 50%
    setTimeout(() => {
      setDownloadProgress(50);
      setDownloadStepText("Compressing PDF & Assets...");
    }, 800);

    // Step 3: 50% -> 75%
    setTimeout(() => {
      setDownloadProgress(75);
      setDownloadStepText("Generating Secure Download Token...");
    }, 1200);

    // Step 4: 75% -> 100%
    setTimeout(() => {
      setDownloadProgress(100);
      setDownloadStepText("Download Ready!");
      
      // Trigger actual browser download
      triggerFileDownload();

      // Show success screen
      setTimeout(() => {
        setDownloadState("success");
      }, 500);
    }, 1600);
  };

  const resetDownloadState = () => {
    setDownloadState("idle");
    setDownloadProgress(0);
  };

  const handleExploreProjects = () => {
    closeResumeModal();
    const el = document.getElementById("apps") || document.getElementById("websites");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/#apps";
    }
  };

  const handleContactMe = () => {
    closeResumeModal();
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/#contact";
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto">
        {/* Dark Backdrop with Glass Blur */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => {
            if (downloadState !== "downloading") closeResumeModal();
          }}
          className="fixed inset-0 bg-black/85 backdrop-blur-xl"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 25 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 25 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="relative w-full max-w-4xl rounded-3xl glass border border-white/20 dark:border-white/20 border-slate-300 bg-slate-950/95 shadow-2xl overflow-hidden z-10 my-auto max-h-[92vh] flex flex-col"
        >
          {/* Top Bar Header */}
          <div className="px-6 md:px-8 py-5 border-b border-white/10 flex items-center justify-between gap-4 bg-black/60 shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-primary-blue to-primary-green p-0.5 shadow-lg shrink-0">
                <div className="w-full h-full bg-black rounded-[14px] flex items-center justify-center text-primary-blue">
                  <FileText className="w-5 h-5" />
                </div>
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-bold font-heading text-white flex items-center gap-2">
                  Download Resume
                  <span className="px-2.5 py-0.5 rounded-full bg-primary-blue/20 border border-primary-blue/40 text-xs font-mono font-bold text-cyan-400">
                    {resumeConfig.version}
                  </span>
                </h2>
                <p className="text-xs text-muted-foreground">
                  Download the latest verified version of my professional CV
                </p>
              </div>
            </div>

            {/* Close Button */}
            <button
              onClick={closeResumeModal}
              disabled={downloadState === "downloading"}
              className="p-2 rounded-full bg-white/5 border border-white/10 text-muted-foreground hover:text-white hover:bg-white/15 transition-all cursor-pointer disabled:opacity-30 shrink-0"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Scrollable Content */}
          <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-8 scrollbar-thin scrollbar-thumb-white/10">
            
            {/* 1. DOWNLOADING PROGRESS STATE VIEW */}
            {downloadState === "downloading" && (
              <div className="py-16 px-6 text-center max-w-lg mx-auto space-y-8">
                <div className="relative w-24 h-24 mx-auto flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-blue to-primary-green opacity-30 blur-xl animate-pulse" />
                  <div className="w-20 h-20 rounded-full bg-black border-2 border-primary-blue/50 flex items-center justify-center shadow-2xl">
                    <Loader2 className="w-10 h-10 text-cyan-400 animate-spin" />
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold font-heading text-white mb-2">
                    Preparing Your Resume PDF
                  </h3>
                  <p className="text-sm text-cyan-400 font-mono font-semibold">
                    {downloadStepText}
                  </p>
                </div>

                {/* Progress Bar */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-mono font-bold text-muted-foreground">
                    <span>PROGRESS</span>
                    <span>{downloadProgress}%</span>
                  </div>
                  <div className="w-full h-3 rounded-full bg-white/10 overflow-hidden p-0.5 border border-white/10">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-primary-blue via-teal-400 to-primary-green shadow-[0_0_15px_rgba(0,255,170,0.8)]"
                      initial={{ width: "0%" }}
                      animate={{ width: `${downloadProgress}%` }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* 2. SUCCESS DOWNLOAD VIEW */}
            {downloadState === "success" && (
              <div className="py-12 px-6 text-center max-w-lg mx-auto space-y-6">
                <motion.div 
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="w-20 h-20 rounded-full bg-emerald-500/20 border-2 border-emerald-500/50 flex items-center justify-center text-emerald-400 mx-auto shadow-[0_0_40px_rgba(52,211,153,0.4)]"
                >
                  <CheckCircle2 className="w-10 h-10" />
                </motion.div>

                <div>
                  <h3 className="text-2xl md:text-3xl font-black font-heading text-white mb-2">
                    Resume Downloaded Successfully! 🎉
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Thank you for downloading my resume. Feel free to explore my live apps or reach out for collaboration.
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
                  <Button 
                    className="rounded-2xl py-6 font-bold bg-gradient-to-r from-primary-blue to-primary-green text-white border-0 cursor-pointer shadow-lg"
                    onClick={handleExploreProjects}
                  >
                    <Briefcase className="w-4 h-4 mr-2" /> Explore Projects
                  </Button>
                  <Button 
                    variant="outline"
                    className="rounded-2xl py-6 font-bold border-white/20 hover:bg-white/10 text-white cursor-pointer"
                    onClick={handleContactMe}
                  >
                    <Users className="w-4 h-4 mr-2" /> Hire / Contact Me
                  </Button>
                </div>

                <button
                  onClick={resetDownloadState}
                  className="text-xs font-bold text-muted-foreground hover:text-white underline cursor-pointer pt-2 inline-block"
                >
                  Back to Resume Overview
                </button>
              </div>
            )}

            {/* 3. NORMAL OVERVIEW VIEW */}
            {downloadState === "idle" && (
              <>
                {/* Metadata Pills Bar */}
                <div className="flex flex-wrap items-center justify-between gap-3 p-4 rounded-2xl bg-white/5 border border-white/10 text-xs">
                  <div className="flex flex-wrap items-center gap-4">
                    <span className="flex items-center gap-1.5 font-bold text-white">
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                      Verified Document
                    </span>
                    <span className="text-muted-foreground">•</span>
                    <span className="text-muted-foreground">Size: <strong className="text-white">{resumeConfig.fileSize}</strong></span>
                    <span className="text-muted-foreground">•</span>
                    <span className="text-muted-foreground">Updated: <strong className="text-white">{resumeConfig.lastUpdated}</strong></span>
                    <span className="text-muted-foreground">•</span>
                    <span className="text-muted-foreground">Speed: <strong className="text-cyan-400">{resumeConfig.estimatedDownloadTime}</strong></span>
                  </div>

                  <span className="text-[11px] font-mono text-muted-foreground">
                    Downloads: <strong className="text-emerald-400">{downloadCount.toLocaleString()}</strong>
                  </span>
                </div>

                {/* Main Grid: Resume Preview Card + Summary */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                  
                  {/* Left Column: Interactive Resume Preview Card (5 cols) */}
                  <div className="lg:col-span-5 flex flex-col">
                    <div 
                      onClick={openResumePreview}
                      className="group relative flex-1 rounded-3xl overflow-hidden border border-white/15 dark:border-white/15 border-slate-300 bg-slate-900 shadow-2xl cursor-pointer p-6 flex flex-col justify-between hover:border-primary-blue/50 transition-all duration-300 hover:scale-[1.02]"
                    >
                      {/* Top Badges */}
                      <div className="flex items-center justify-between gap-2 mb-6">
                        <span className="px-3 py-1 rounded-full bg-primary-blue/20 border border-primary-blue/40 text-[10px] font-extrabold text-cyan-400 uppercase tracking-wider flex items-center gap-1">
                          <FileText className="w-3 h-3" /> PDF Preview
                        </span>
                        <span className="px-3 py-1 rounded-full bg-white/10 text-[10px] font-bold text-white uppercase tracking-wider">
                          Page 1 of {resumeConfig.pageCount}
                        </span>
                      </div>

                      {/* Mockup Resume Sheet Preview */}
                      <div className="bg-black/60 rounded-2xl p-5 border border-white/10 space-y-4 shadow-inner">
                        <div className="flex items-center gap-3 border-b border-white/10 pb-3">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary-blue to-primary-green p-0.5 shrink-0">
                            <img src="/parsuram.png" alt="Parsuram Naik" className="w-full h-full object-cover rounded-full" />
                          </div>
                          <div>
                            <h4 className="font-bold text-white text-sm">{resumeConfig.summary.name}</h4>
                            <p className="text-[11px] text-primary-blue font-semibold">{resumeConfig.summary.title}</p>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <div className="h-2 w-3/4 rounded bg-white/20" />
                          <div className="h-2 w-full rounded bg-white/10" />
                          <div className="h-2 w-5/6 rounded bg-white/10" />
                        </div>

                        <div className="grid grid-cols-2 gap-2 pt-2">
                          <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-[9px] font-bold text-emerald-400">
                            Android Development
                          </div>
                          <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-[9px] font-bold text-cyan-400">
                            React & Next.js 16
                          </div>
                        </div>
                      </div>

                      {/* Hover Overlay Button */}
                      <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-bold text-primary-blue group-hover:text-cyan-300 transition-colors">
                        <span className="flex items-center gap-1.5">
                          <Eye className="w-4 h-4" /> Click to Open Fullscreen Preview
                        </span>
                        <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Professional Summary Box (7 cols) */}
                  <div className="lg:col-span-7 flex flex-col">
                    <GlassCard className="p-6 md:p-8 h-full border-white/10 dark:border-white/10 border-slate-300 rounded-3xl flex flex-col justify-between bg-black/40">
                      <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[11px] font-extrabold text-emerald-400 tracking-wider uppercase mb-4">
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                          Professional Profile
                        </div>

                        <h3 className="text-2xl font-bold font-heading text-white mb-2">
                          {resumeConfig.summary.name}
                        </h3>
                        <p className="text-primary-blue font-bold text-base mb-4">
                          {resumeConfig.summary.title}
                        </p>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                          {resumeConfig.summary.bio}
                        </p>
                      </div>

                      {/* Detail Badges Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                        <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                          <span className="text-[10px] font-bold text-muted-foreground uppercase block">Experience</span>
                          <span className="font-bold text-white">{resumeConfig.summary.yearsOfExperience}</span>
                        </div>

                        <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                          <span className="text-[10px] font-bold text-muted-foreground uppercase block">Location</span>
                          <span className="font-bold text-white flex items-center gap-1">
                            <MapPin className="w-3 h-3 text-primary-blue" /> {resumeConfig.summary.location}
                          </span>
                        </div>

                        <div className="p-3 rounded-2xl bg-white/5 border border-white/10 sm:col-span-2">
                          <span className="text-[10px] font-bold text-muted-foreground uppercase block">Current Focus</span>
                          <span className="font-bold text-emerald-400">{resumeConfig.summary.currentFocus}</span>
                        </div>
                      </div>
                    </GlassCard>
                  </div>

                </div>

                {/* 2. HIGHLIGHTS FEATURE CARDS */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="text-lg font-bold font-heading text-white flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-yellow-400" /> Key Technical Highlights
                    </h4>
                    <span className="text-xs text-muted-foreground">12 Core Competencies</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                    {resumeConfig.highlights.map(item => (
                      <div 
                        key={item.id}
                        className={`p-4 rounded-2xl bg-gradient-to-br ${item.gradient} border border-white/10 hover:border-white/30 transition-all duration-300 group hover:-translate-y-1`}
                      >
                        <span className="text-[9px] font-extrabold uppercase tracking-widest text-primary-blue block mb-1">
                          {item.category}
                        </span>
                        <h5 className="font-bold text-foreground text-sm mb-1 group-hover:text-white transition-colors">
                          {item.title}
                        </h5>
                        <p className="text-[11px] text-muted-foreground leading-snug line-clamp-2">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 3. CAREER STATS GRID */}
                <div className="space-y-4">
                  <h4 className="text-lg font-bold font-heading text-white flex items-center gap-2">
                    <Award className="w-5 h-5 text-cyan-400" /> Career Metrics & Stats
                  </h4>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {resumeConfig.stats.map(stat => (
                      <div key={stat.id} className="p-4 rounded-2xl bg-black/40 border border-white/10 text-center hover:border-primary-blue/40 transition-colors">
                        <span className="text-2xl font-black font-mono text-cyan-400 block mb-0.5">
                          {stat.value}
                        </span>
                        <span className="text-xs font-bold text-muted-foreground">
                          {stat.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}

          </div>

          {/* Bottom Action Bar */}
          {downloadState === "idle" && (
            <div className="p-6 border-t border-white/10 bg-black/70 flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
              {/* Primary Download Button */}
              <Button 
                size="lg"
                onClick={handleStartDownload}
                className="w-full sm:w-auto px-8 py-6 rounded-2xl font-black text-base bg-gradient-to-r from-primary-blue via-teal-400 to-primary-green text-white border-0 shadow-[0_0_25px_rgba(37,99,235,0.4)] hover:shadow-[0_0_35px_rgba(52,211,153,0.6)] hover:scale-[1.02] cursor-pointer"
              >
                <Download className="w-5 h-5 mr-2" /> Download Resume PDF
              </Button>

              {/* Secondary Actions */}
              <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
                <Button 
                  variant="outline"
                  onClick={openResumePreview}
                  className="flex-1 sm:flex-none rounded-2xl py-6 font-bold border-white/20 text-white hover:bg-white/10 cursor-pointer"
                >
                  <Eye className="w-4 h-4 mr-2" /> Preview
                </Button>

                <Button 
                  variant="outline"
                  onClick={openShareModal}
                  className="flex-1 sm:flex-none rounded-2xl py-6 font-bold border-white/20 text-white hover:bg-white/10 cursor-pointer"
                >
                  <Share2 className="w-4 h-4 mr-2" /> Share
                </Button>

                <Button 
                  variant="outline"
                  onClick={handleExploreProjects}
                  className="flex-1 sm:flex-none rounded-2xl py-6 font-bold border-white/20 text-white hover:bg-white/10 cursor-pointer hidden md:flex"
                >
                  <Briefcase className="w-4 h-4 mr-2" /> Projects
                </Button>
              </div>
            </div>
          )}

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
