"use client";

import { getAppBySlug } from "@/lib/data/apps";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/container";
import Link from "next/link";
import { ChevronLeft, ChevronDown } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default async function FAQPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const app = getAppBySlug(slug);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (!app || !app.faq) {
    notFound();
  }

  return (
    <main className="min-h-screen pt-32 pb-24">
      <Container className="max-w-4xl">
        <Link href={`/apps/${app.slug}`} className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-white transition-colors mb-8">
          <ChevronLeft className="w-4 h-4 mr-1" />
          Back to {app.name}
        </Link>
        
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 glass">
          <div className="mb-12 border-b border-white/10 pb-8">
            <h1 className="text-3xl md:text-5xl font-heading font-bold text-white tracking-tight mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-muted-foreground">
              Common questions and answers about {app.name}.
            </p>
          </div>
          
          <div className="space-y-4">
            {app.faq.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={index} className="border border-white/10 rounded-xl overflow-hidden bg-black/20">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left transition-colors hover:bg-white/5"
                  >
                    <span className="font-semibold text-white">{item.question}</span>
                    <motion.div animate={{ rotate: isOpen ? 180 : 0 }} className="text-muted-foreground shrink-0 ml-4">
                      <ChevronDown className="w-5 h-5" />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="p-6 pt-0 text-muted-foreground leading-relaxed border-t border-white/5">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </main>
  );
}
