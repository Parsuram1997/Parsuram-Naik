"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Bell, X } from "lucide-react";

interface NotifyModalProps {
  isOpen: boolean;
  onClose: () => void;
  appName: string;
}

export function NotifyModal({ isOpen, onClose, appName }: NotifyModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-md glass border border-white/10 p-8 rounded-3xl shadow-elevation overflow-hidden text-center"
            >
              {/* Background Glow */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary-blue/20 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-primary-green/20 rounded-full blur-3xl pointer-events-none" />

              <button 
                onClick={onClose}
                className="absolute top-4 right-4 p-2 text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-white/5"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="w-16 h-16 mx-auto bg-gradient-to-tr from-primary-blue to-primary-green rounded-full flex items-center justify-center mb-6 shadow-lg shadow-primary-blue/20">
                <Bell className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-heading font-bold text-foreground mb-3">
                Thanks for your interest!
              </h3>
              
              <p className="text-muted-foreground mb-8">
                <strong className="text-foreground">{appName}</strong> is currently under active development. We'll notify you as soon as it becomes available.
              </p>
              
              <Button onClick={onClose} className="w-full rounded-full" size="lg">
                Got it, Thanks!
              </Button>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
