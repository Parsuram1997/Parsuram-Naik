"use client";

import { AppData, AppLegal } from "@/types/app";
import { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Container } from "@/components/ui/container";
import Link from "next/link";
import { ChevronLeft, Link as LinkIcon, Check, FileText, Trash2, Info, ShieldAlert } from "lucide-react";
import { cn } from "@/lib/utils";

interface LegalPageClientProps {
  app: AppData;
  legalData: AppLegal;
  pageTitle: string;
}

export function LegalPageClient({ app, legalData, pageTitle }: LegalPageClientProps) {
  const [activeSection, setActiveSection] = useState<string>("");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Reading progress
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Generate URL-friendly IDs for TOC
  const generateId = (title: string) => title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

  useEffect(() => {
    if (!legalData) return;

    const observers = legalData.sections.map((section) => {
      const id = generateId(section.title);
      const element = document.getElementById(id);
      if (!element) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { rootMargin: "-20% 0px -80% 0px" }
      );
      observer.observe(element);
      return { observer, element };
    });

    return () => {
      observers.forEach((obs) => {
        if (obs) obs.observer.unobserve(obs.element);
      });
    };
  }, [legalData]);

  const copyLink = (id: string) => {
    const url = `${window.location.origin}${window.location.pathname}#${id}`;
    navigator.clipboard.writeText(url);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  if (!legalData) return null;

  return (
    <div className="relative">
      {/* Reading Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-blue to-primary-green transform origin-left z-50 print:hidden"
        style={{ scaleX }}
      />

      <Container className="max-w-7xl pt-32 pb-24">
        {/* Top Navigation */}
        <div className="mb-8 print:hidden">
          <Link 
            href={`/apps/${app.slug}`}
            className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-white transition-colors"
          >
            <ChevronLeft className="w-4 h-4 mr-1" />
            Back to {app.name}
          </Link>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Sticky Table of Contents (Sidebar) */}
          <aside className="lg:w-1/4 shrink-0 print:hidden">
            <div className="sticky top-32 bg-white/5 border border-white/10 p-6 rounded-2xl glass">
              <h3 className="font-heading font-bold text-white mb-4 uppercase tracking-wider text-sm">Contents</h3>
              <nav className="flex flex-col gap-2 max-h-[60vh] overflow-y-auto scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent pr-2">
                {legalData.sections.map((section, index) => {
                  const id = generateId(section.title);
                  return (
                    <a
                      key={index}
                      href={`#${id}`}
                      className={cn(
                        "text-sm transition-colors block py-1",
                        activeSection === id
                          ? "text-primary-blue font-semibold"
                          : "text-muted-foreground hover:text-white"
                      )}
                    >
                      {section.title}
                    </a>
                  );
                })}
              </nav>
            </div>
          </aside>

          {/* Main Content Area */}
          <div className="lg:w-3/4">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 glass print:bg-transparent print:border-none print:p-0">
              
              {/* Header */}
              <div className="mb-12 border-b border-white/10 pb-8 print:border-black/20">
                <h1 className="text-3xl md:text-5xl font-heading font-bold text-white tracking-tight mb-4 print:text-black">
                  {pageTitle}
                </h1>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 text-muted-foreground print:text-gray-600">
                  <p>App: <strong className="text-white print:text-black">{app.name}</strong></p>
                  <p>Last Updated: <strong className="text-white print:text-black">{legalData.lastUpdated}</strong></p>
                </div>
              </div>
              
              {/* Content Sections */}
              <div className="space-y-12 text-muted-foreground leading-relaxed print:text-gray-800">
                {legalData.sections.map((section, index) => {
                  const id = generateId(section.title);
                  return (
                    <section key={index} id={id} className="scroll-mt-32">
                      <div className="group flex items-center gap-3 mb-6">
                        <h2 className="text-2xl font-bold text-white print:text-black">
                          {section.title}
                        </h2>
                        <button
                          onClick={() => copyLink(id)}
                          className="opacity-0 group-hover:opacity-100 transition-opacity p-2 rounded-lg bg-white/5 hover:bg-white/10 text-muted-foreground hover:text-white print:hidden"
                          title="Copy link to section"
                        >
                          {copiedId === id ? (
                            <Check className="w-4 h-4 text-primary-green" />
                          ) : (
                            <LinkIcon className="w-4 h-4" />
                          )}
                        </button>
                      </div>
                      
                      <div className="space-y-4">
                        {section.content.map((paragraph, pIndex) => (
                          <div 
                            key={pIndex} 
                            dangerouslySetInnerHTML={{ __html: paragraph }} 
                            className="text-[15px] md:text-base prose prose-invert max-w-none print:prose-p:text-gray-800 print:prose-strong:text-black print:prose-a:text-blue-600"
                          />
                        ))}
                      </div>
                    </section>
                  );
                })}
              </div>

            </div>

            {/* Footer Navigation Buttons */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 print:hidden">
              <Link href={`/apps/${app.slug}`} className="flex flex-col items-center justify-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-center group">
                <ChevronLeft className="w-6 h-6 text-muted-foreground group-hover:text-white mb-2 transition-colors" />
                <span className="text-sm font-medium text-white">Back to App</span>
              </Link>
              
              {pageTitle !== "Privacy Policy" && (
                <Link href={`/apps/${app.slug}/privacy-policy`} className="flex flex-col items-center justify-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-center group">
                  <ShieldAlert className="w-6 h-6 text-green-400 mb-2" />
                  <span className="text-sm font-medium text-white">Privacy Policy</span>
                </Link>
              )}

              {pageTitle !== "Terms of Service" && (
                <Link href={`/apps/${app.slug}/terms-of-service`} className="flex flex-col items-center justify-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-center group">
                  <FileText className="w-6 h-6 text-purple-400 mb-2" />
                  <span className="text-sm font-medium text-white">Terms of Service</span>
                </Link>
              )}

              {pageTitle !== "Support" && (
                <Link href={`/apps/${app.slug}/support`} className="flex flex-col items-center justify-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-center group">
                  <Info className="w-6 h-6 text-orange-400 mb-2" />
                  <span className="text-sm font-medium text-white">Support</span>
                </Link>
              )}

              {pageTitle !== "Delete Account" && (
                <Link href={`/apps/${app.slug}/delete-account`} className="flex flex-col items-center justify-center p-6 rounded-2xl bg-red-500/5 border border-red-500/10 hover:bg-red-500/10 transition-colors text-center group">
                  <Trash2 className="w-6 h-6 text-red-500 mb-2" />
                  <span className="text-sm font-medium text-red-400">Delete Account</span>
                </Link>
              )}
            </div>
          </div>

        </div>
      </Container>
    </div>
  );
}
