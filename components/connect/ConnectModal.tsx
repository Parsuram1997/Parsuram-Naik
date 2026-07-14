"use client";

import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useConnect } from "@/components/providers/connect-provider";
import { X, Zap } from "lucide-react";
import { QuickActions } from "./QuickActions";
import { BusinessInfo } from "./BusinessInfo";
import { ContactForm } from "./ContactForm";

export function ConnectModal() {
  const { isOpen, closeConnect } = useConnect();
  const modalRef = useRef<HTMLDivElement>(null);

  // Focus trap and keyboard handlers
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeConnect();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, closeConnect]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-background/80 backdrop-blur-md"
            onClick={closeConnect}
          />

          {/* Modal Container */}
          <motion.div
            ref={modalRef}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-5xl bg-black/60 border border-white/10 rounded-3xl shadow-2xl overflow-hidden glass flex flex-col max-h-[90vh]"
            role="dialog"
            aria-modal="true"
            aria-labelledby="connect-modal-title"
          >
            {/* Header */}
            <div className="flex items-start justify-between p-6 sm:p-8 border-b border-white/5 relative overflow-hidden shrink-0">
              {/* Background gradient for header */}
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary-blue/10 to-primary-green/10 pointer-events-none" />
              
              <div className="relative z-10 flex items-start gap-4 sm:gap-6">
                <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-primary-blue to-primary-green text-white shadow-lg shrink-0">
                  <Zap className="w-6 h-6 sm:w-7 sm:h-7 fill-white" />
                </div>
                <div>
                  <h2 id="connect-modal-title" className="text-2xl sm:text-3xl font-bold font-heading text-white mb-2 tracking-tight">
                    Let's Connect
                  </h2>
                  <p className="text-sm sm:text-base text-muted-foreground max-w-md">
                    I'd love to hear about your project, collaboration idea or business inquiry.
                  </p>
                </div>
              </div>
              
              <button
                onClick={closeConnect}
                className="relative z-10 p-2 rounded-full glass hover:bg-white/10 text-muted-foreground hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content Area */}
            <div className="flex flex-col lg:flex-row overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
              
              {/* Left Column: Quick Actions & Business Info */}
              <div className="w-full lg:w-5/12 p-6 sm:p-8 border-b lg:border-b-0 lg:border-r border-white/5 bg-black/20 flex flex-col gap-8">
                <div>
                  <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Quick Actions</h3>
                  <QuickActions />
                </div>
                
                <div className="mt-auto pt-8 border-t border-white/5">
                  <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Business Information</h3>
                  <BusinessInfo />
                </div>
              </div>
              
              {/* Right Column: Contact Form */}
              <div className="w-full lg:w-7/12 p-6 sm:p-8 flex flex-col">
                <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4 shrink-0">Send a Message</h3>
                <div className="flex-1">
                  <ContactForm onSuccess={closeConnect} />
                </div>
              </div>
              
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
