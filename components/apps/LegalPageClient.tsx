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
    <div className="relative z-0">
      {/* Background Decor Ambient Mesh Glows */}
      <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-primary-blue/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-primary-green/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Reading Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-blue to-primary-green transform origin-left z-50 print:hidden"
        style={{ scaleX }}
      />

      <Container className="max-w-7xl pt-32 pb-24 relative z-10">


        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Sticky Table of Contents (Sidebar) */}
          <aside className="lg:w-1/4 shrink-0 print:hidden sticky top-32 self-start">
            <div className="h-[calc(100vh-10rem)] bg-white/[0.03] border border-white/5 p-6 lg:p-8 rounded-[2rem] shadow-2xl backdrop-blur-2xl flex flex-col relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary-blue/30 to-transparent"></div>
              <h3 className="font-heading font-bold text-white mb-6 uppercase tracking-wider text-xs flex items-center gap-2 shrink-0">
                <span className="w-2 h-2 rounded-full bg-primary-blue animate-pulse" />
                Contents
              </h3>
              <nav className="flex-1 flex flex-col gap-1.5 overflow-y-auto scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent pr-2">
                {legalData.sections.map((section, index) => {
                  const id = generateId(section.title);
                  return (
                    <a
                      key={index}
                      href={`#${id}`}
                      className={cn(
                        "text-sm transition-all duration-300 block py-3 px-4 rounded-xl border-l-2 mb-1",
                        activeSection === id
                          ? "text-white font-medium bg-gradient-to-r from-primary-blue/15 to-transparent border-primary-blue shadow-[inset_0_0_20px_rgba(37,99,235,0.05)]"
                          : "text-muted-foreground hover:text-white border-transparent hover:bg-white/5"
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
            <div className="bg-white/[0.02] border border-white/5 rounded-[2.5rem] p-8 md:p-14 shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-2xl print:bg-transparent print:border-none print:p-0 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-primary-blue/5 rounded-full blur-[100px] pointer-events-none"></div>
              
              {/* Header */}
              <div className="mb-14 border-b border-white/5 pb-10 print:border-black/20 relative z-10">
                <h1 className="text-4xl md:text-6xl font-heading font-extrabold tracking-tight mb-6 print:text-black">
                  <span className="bg-clip-text text-transparent bg-gradient-to-br from-white via-white/90 to-white/30">{pageTitle}</span>
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
                    <section key={index} id={id} className="scroll-mt-32 relative z-10">
                      <div className="group flex items-center gap-4 mb-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-white print:text-black flex items-center gap-4">
                          <span className="w-1.5 h-8 rounded-full bg-gradient-to-b from-primary-blue to-primary-green shadow-[0_0_12px_rgba(37,99,235,0.6)] print:hidden" />
                          {section.title}
                        </h2>
                        <button
                          onClick={() => copyLink(id)}
                          className="opacity-0 group-hover:opacity-100 transition-opacity p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 text-muted-foreground hover:text-white print:hidden"
                          title="Copy link to section"
                        >
                          {copiedId === id ? (
                            <Check className="w-4 h-4 text-primary-green" />
                          ) : (
                            <LinkIcon className="w-4 h-4" />
                          )}
                        </button>
                      </div>
                      
                      <div className="space-y-6 text-muted-foreground/90 font-light">
                        {section.content.map((paragraph, pIndex) => (
                          <div 
                            key={pIndex} 
                            dangerouslySetInnerHTML={{ __html: paragraph }} 
                            className="text-[15px] md:text-lg leading-relaxed prose prose-invert max-w-none prose-headings:text-white prose-a:text-primary-blue hover:prose-a:text-primary-green prose-a:transition-colors prose-strong:text-white prose-strong:font-semibold prose-li:marker:text-primary-blue prose-ul:space-y-3 print:prose-p:text-gray-800 print:prose-strong:text-black print:prose-a:text-blue-600"
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
