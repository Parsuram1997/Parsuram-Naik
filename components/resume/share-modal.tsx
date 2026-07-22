"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Copy, Check, Share2, Mail, Send } from "lucide-react";
import { FaLinkedin, FaWhatsapp, FaTelegram, FaFacebook, FaTwitter } from "react-icons/fa";
import { useResumeModal } from "@/components/providers/resume-provider";
import { resumeConfig } from "@/config/resume";

export function ShareModal() {
  const { isShareOpen, closeShareModal, incrementShare } = useResumeModal();
  const [copied, setCopied] = useState(false);

  if (!isShareOpen) return null;

  const currentUrl = typeof window !== "undefined" ? window.location.origin + "/#resume" : "https://parsuramnaik.com/#resume";
  const shareText = `Check out Parsuram Naik's official Resume (${resumeConfig.version}) - ${resumeConfig.summary.title}`;

  const shareOptions = [
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      color: "bg-[#0A66C2]/20 text-[#0A66C2] border-[#0A66C2]/40 hover:bg-[#0A66C2] hover:text-white",
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`
    },
    {
      name: "WhatsApp",
      icon: FaWhatsapp,
      color: "bg-[#25D366]/20 text-[#25D366] border-[#25D366]/40 hover:bg-[#25D366] hover:text-white",
      url: `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText + " " + currentUrl)}`
    },
    {
      name: "Telegram",
      icon: FaTelegram,
      color: "bg-[#0088cc]/20 text-[#0088cc] border-[#0088cc]/40 hover:bg-[#0088cc] hover:text-white",
      url: `https://t.me/share/url?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(shareText)}`
    },
    {
      name: "X (Twitter)",
      icon: FaTwitter,
      color: "bg-white/10 text-white border-white/20 hover:bg-white hover:text-black",
      url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(currentUrl)}`
    },
    {
      name: "Facebook",
      icon: FaFacebook,
      color: "bg-[#1877F2]/20 text-[#1877F2] border-[#1877F2]/40 hover:bg-[#1877F2] hover:text-white",
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`
    },
    {
      name: "Email",
      icon: Mail,
      color: "bg-amber-500/20 text-amber-400 border-amber-500/40 hover:bg-amber-500 hover:text-white",
      url: `mailto:?subject=${encodeURIComponent(`Parsuram Naik - Professional Resume ${resumeConfig.version}`)}&body=${encodeURIComponent(shareText + "\n\n" + currentUrl)}`
    }
  ];

  const handleCopy = () => {
    navigator.clipboard.writeText(currentUrl);
    setCopied(true);
    incrementShare();
    setTimeout(() => setCopied(false), 2500);
  };

  const handleShareClick = (url: string) => {
    incrementShare();
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeShareModal}
          className="absolute inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Share Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-lg rounded-3xl glass border border-white/20 dark:border-white/20 border-slate-300 p-6 md:p-8 bg-slate-950/90 shadow-2xl z-10"
        >
          {/* Close Button */}
          <button
            onClick={closeShareModal}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/5 border border-white/10 text-muted-foreground hover:text-white hover:bg-white/10 transition-all cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-primary-blue/20 border border-primary-blue/30 flex items-center justify-center text-primary-blue shadow-inner">
              <Share2 className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold font-heading text-white">Share Resume</h3>
              <p className="text-xs text-muted-foreground">Spread the word or send directly to hiring managers</p>
            </div>
          </div>

          {/* Share Grid */}
          <div className="grid grid-cols-3 gap-3 mb-6">
            {shareOptions.map((option, idx) => (
              <button
                key={idx}
                onClick={() => handleShareClick(option.url)}
                className={`flex flex-col items-center justify-center gap-2 p-3.5 rounded-2xl border transition-all duration-300 cursor-pointer ${option.color}`}
              >
                <option.icon className="w-6 h-6" />
                <span className="text-xs font-bold">{option.name}</span>
              </button>
            ))}
          </div>

          {/* Copy Link Input */}
          <div className="flex items-center gap-2 p-2 rounded-2xl bg-white/5 border border-white/10">
            <input
              type="text"
              readOnly
              value={currentUrl}
              className="flex-1 bg-transparent px-3 text-xs font-mono text-muted-foreground focus:outline-none truncate"
            />
            <button
              onClick={handleCopy}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-primary-blue to-primary-green text-white text-xs font-bold flex items-center gap-1.5 hover:opacity-90 transition-all cursor-pointer shadow-md"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-white" /> Copied!
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" /> Copy Link
                </>
              )}
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
