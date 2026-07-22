"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { resumeConfig } from "@/config/resume";

interface ResumeContextType {
  isOpen: boolean;
  openResumeModal: () => void;
  closeResumeModal: () => void;

  isPreviewOpen: boolean;
  openResumePreview: () => void;
  closeResumePreview: () => void;

  isShareOpen: boolean;
  openShareModal: () => void;
  closeShareModal: () => void;

  downloadCount: number;
  previewCount: number;
  shareCount: number;

  incrementDownload: () => void;
  incrementPreview: () => void;
  incrementShare: () => void;

  triggerFileDownload: () => void;
}

const ResumeContext = createContext<ResumeContextType | undefined>(undefined);

export function ResumeProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [isShareOpen, setIsShareOpen] = useState(false);

  const [downloadCount, setDownloadCount] = useState(1420);
  const [previewCount, setPreviewCount] = useState(3890);
  const [shareCount, setShareCount] = useState(512);

  // Load analytics counts from localStorage
  useEffect(() => {
    try {
      const savedDownloads = localStorage.getItem("resume_download_count");
      const savedPreviews = localStorage.getItem("resume_preview_count");
      const savedShares = localStorage.getItem("resume_share_count");

      if (savedDownloads) setDownloadCount(parseInt(savedDownloads, 10));
      if (savedPreviews) setPreviewCount(parseInt(savedPreviews, 10));
      if (savedShares) setShareCount(parseInt(savedShares, 10));
    } catch {
      // Storage fallback
    }
  }, []);

  const openResumeModal = () => setIsOpen(true);
  const closeResumeModal = () => setIsOpen(false);

  const openResumePreview = () => {
    setIsPreviewOpen(true);
    incrementPreview();
  };
  const closeResumePreview = () => setIsPreviewOpen(false);

  const openShareModal = () => setIsShareOpen(true);
  const closeShareModal = () => setIsShareOpen(false);

  const incrementDownload = () => {
    setDownloadCount(prev => {
      const next = prev + 1;
      try { localStorage.setItem("resume_download_count", next.toString()); } catch {}
      return next;
    });
  };

  const incrementPreview = () => {
    setPreviewCount(prev => {
      const next = prev + 1;
      try { localStorage.setItem("resume_preview_count", next.toString()); } catch {}
      return next;
    });
  };

  const incrementShare = () => {
    setShareCount(prev => {
      const next = prev + 1;
      try { localStorage.setItem("resume_share_count", next.toString()); } catch {}
      return next;
    });
  };

  const triggerFileDownload = () => {
    incrementDownload();
    
    // Programmatically trigger download of latest resume PDF from config
    const link = document.createElement("a");
    link.href = resumeConfig.pdfUrl || "/resume.pdf";
    link.download = `Parsuram_Naik_Resume_${resumeConfig.version}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <ResumeContext.Provider
      value={{
        isOpen,
        openResumeModal,
        closeResumeModal,
        isPreviewOpen,
        openResumePreview,
        closeResumePreview,
        isShareOpen,
        openShareModal,
        closeShareModal,
        downloadCount,
        previewCount,
        shareCount,
        incrementDownload,
        incrementPreview,
        incrementShare,
        triggerFileDownload
      }}
    >
      {children}
    </ResumeContext.Provider>
  );
}

export function useResumeModal() {
  const context = useContext(ResumeContext);
  if (!context) {
    throw new Error("useResumeModal must be used within a ResumeProvider");
  }
  return context;
}
