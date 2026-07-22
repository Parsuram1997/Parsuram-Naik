"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  X, 
  ZoomIn, 
  ZoomOut, 
  Download, 
  Printer, 
  Maximize2, 
  Minimize2, 
  ChevronLeft, 
  ChevronRight, 
  FileText, 
  ShieldCheck, 
  Sparkles,
  RotateCcw
} from "lucide-react";
import { useResumeModal } from "@/components/providers/resume-provider";
import { resumeConfig } from "@/config/resume";

export function PdfPreviewModal() {
  const { isPreviewOpen, closeResumePreview, triggerFileDownload } = useResumeModal();
  const [zoom, setZoom] = useState(100);
  const [currentPage, setCurrentPage] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isPreviewOpen) {
        closeResumePreview();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isPreviewOpen, closeResumePreview]);

  if (!isPreviewOpen) return null;

  const handleZoomIn = () => setZoom(prev => Math.min(prev + 25, 200));
  const handleZoomOut = () => setZoom(prev => Math.max(prev - 25, 50));
  const handleResetZoom = () => setZoom(100);

  const handlePrint = () => {
    window.print();
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6">
        {/* Dark Glass Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeResumePreview}
          className="absolute inset-0 bg-black/90 backdrop-blur-xl"
        />

        {/* Fullscreen PDF Viewer Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className={`relative w-full ${
            isFullscreen ? "h-full max-w-none rounded-none" : "max-w-5xl h-[92vh] rounded-3xl"
          } glass border border-white/20 dark:border-white/20 border-slate-300 bg-slate-950/95 shadow-2xl flex flex-col overflow-hidden z-10`}
        >
          {/* Top Control Bar */}
          <div className="px-4 py-3.5 border-b border-white/10 flex flex-wrap items-center justify-between gap-3 bg-black/60 shrink-0">
            {/* Title & Document Badge */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-primary-blue/20 border border-primary-blue/30 flex items-center justify-center text-primary-blue shadow-inner">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  Parsuram_Naik_Resume_{resumeConfig.version}.pdf
                  <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[10px] font-extrabold text-emerald-400">
                    PDF
                  </span>
                </h3>
                <p className="text-[11px] text-muted-foreground flex items-center gap-2">
                  <span>{resumeConfig.fileSize}</span> • <span>Updated {resumeConfig.lastUpdated}</span>
                </p>
              </div>
            </div>

            {/* Middle Toolbar Controls (Zoom, Pagination) */}
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-2xl p-1.5 backdrop-blur-md">
              {/* Pagination */}
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(1)}
                className="p-1.5 rounded-xl hover:bg-white/10 disabled:opacity-30 transition-all text-muted-foreground hover:text-white cursor-pointer"
                title="Page 1"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="text-xs font-mono font-bold text-white px-2">
                {currentPage} / {resumeConfig.pageCount}
              </span>
              <button
                disabled={currentPage === resumeConfig.pageCount}
                onClick={() => setCurrentPage(2)}
                className="p-1.5 rounded-xl hover:bg-white/10 disabled:opacity-30 transition-all text-muted-foreground hover:text-white cursor-pointer"
                title="Page 2"
              >
                <ChevronRight className="w-4 h-4" />
              </button>

              <div className="h-4 w-px bg-white/10 mx-1" />

              {/* Zoom Controls */}
              <button
                onClick={handleZoomOut}
                className="p-1.5 rounded-xl hover:bg-white/10 transition-all text-muted-foreground hover:text-white cursor-pointer"
                title="Zoom Out"
              >
                <ZoomOut className="w-4 h-4" />
              </button>
              <span className="text-xs font-mono font-bold text-white w-12 text-center">
                {zoom}%
              </span>
              <button
                onClick={handleZoomIn}
                className="p-1.5 rounded-xl hover:bg-white/10 transition-all text-muted-foreground hover:text-white cursor-pointer"
                title="Zoom In"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
              <button
                onClick={handleResetZoom}
                className="p-1.5 rounded-xl hover:bg-white/10 transition-all text-muted-foreground hover:text-white cursor-pointer"
                title="Reset Zoom"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Right Actions (Print, Download, Fullscreen, Close) */}
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                className="p-2 rounded-xl bg-white/5 border border-white/10 text-muted-foreground hover:text-white hover:bg-white/10 transition-all cursor-pointer hidden sm:flex"
                title="Print Resume"
              >
                <Printer className="w-4 h-4" />
              </button>

              <button
                onClick={triggerFileDownload}
                className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-primary-blue to-primary-green text-white text-xs font-bold flex items-center gap-1.5 hover:opacity-90 transition-all cursor-pointer shadow-md"
              >
                <Download className="w-4 h-4" /> Download
              </button>

              <button
                onClick={toggleFullscreen}
                className="p-2 rounded-xl bg-white/5 border border-white/10 text-muted-foreground hover:text-white hover:bg-white/10 transition-all cursor-pointer hidden sm:flex"
                title={isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
              >
                {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
              </button>

              <button
                onClick={closeResumePreview}
                className="p-2 rounded-xl bg-white/5 border border-white/10 text-muted-foreground hover:text-white hover:bg-white/10 transition-all cursor-pointer"
                title="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Main Document Viewer Canvas */}
          <div className="flex-1 overflow-auto p-4 sm:p-8 flex justify-center bg-slate-950/80">
            <div 
              style={{ transform: `scale(${zoom / 100})`, transformOrigin: "top center" }}
              className="transition-transform duration-200 ease-out max-w-3xl w-full"
            >
              {/* High-Definition Mockup Resume Document Sheet */}
              <div className="bg-slate-900 border border-white/15 rounded-2xl p-8 md:p-12 shadow-2xl text-slate-100 space-y-8 select-none">
                
                {/* Resume Header */}
                <div className="border-b border-white/10 pb-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div>
                    <h1 className="text-3xl font-heading font-black text-white tracking-tight">
                      {resumeConfig.summary.name}
                    </h1>
                    <p className="text-primary-blue font-bold text-lg mt-0.5">
                      {resumeConfig.summary.title}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {resumeConfig.summary.location} • {resumeConfig.summary.yearsOfExperience}
                    </p>
                  </div>

                  <div className="flex flex-col gap-1 text-xs text-right font-mono text-muted-foreground">
                    <span>Email: {resumeConfig.summary.email}</span>
                    <span>Github: {resumeConfig.summary.github}</span>
                    <span>Status: {resumeConfig.summary.availability}</span>
                  </div>
                </div>

                {/* Executive Summary */}
                <div className="space-y-2">
                  <h2 className="text-xs font-black uppercase tracking-widest text-primary-green flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" /> Executive Summary
                  </h2>
                  <p className="text-sm leading-relaxed text-slate-300 font-medium">
                    {resumeConfig.summary.bio}
                  </p>
                </div>

                {/* Technical Stack Grid */}
                <div className="space-y-3">
                  <h2 className="text-xs font-black uppercase tracking-widest text-primary-blue flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5" /> Primary Technical Architecture
                  </h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {resumeConfig.highlights.map(item => (
                      <div key={item.id} className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs">
                        <span className="font-bold text-white block">{item.title}</span>
                        <span className="text-[10px] text-muted-foreground">{item.category}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Page Watermark Footer */}
                <div className="pt-6 border-t border-white/10 flex items-center justify-between text-[11px] text-muted-foreground">
                  <span>Official Verified Portfolio Resume</span>
                  <span>Page {currentPage} of {resumeConfig.pageCount}</span>
                </div>

              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
