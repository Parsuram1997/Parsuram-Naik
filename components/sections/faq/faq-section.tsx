"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/container";
import { GradientText } from "@/components/ui/gradient-text";
import { faqData } from "@/config/faq";
import { SearchBar } from "./search-bar";
import { CategoryFilter } from "./category-filter";
import { FAQCard } from "./faq-card";
import { HelpCTA } from "./help-cta";

export function FAQSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [openId, setOpenId] = useState<string | null>(null);

  const filteredFaqs = faqData.filter((faq) => {
    // 1. Filter by search query
    const matchesSearch = 
      searchQuery === "" || 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.searchKeywords?.some(kw => kw.toLowerCase().includes(searchQuery.toLowerCase()));

    // 2. Filter by category
    const matchesCategory = activeCategory === "All" || faq.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="relative py-24 md:py-32 overflow-hidden border-t border-white/5">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(var(--primary-blue),0.03)_0%,transparent_70%)] pointer-events-none" />
      
      <Container className="max-w-[900px] relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-white/10 text-xs font-semibold text-primary-blue tracking-wider uppercase mb-6"
          >
            ❓ Help Center
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-heading font-bold mb-6 text-foreground leading-tight"
          >
            Frequently Asked <GradientText>Questions</GradientText>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground"
          >
            Find answers to the most common questions about my apps, websites, YouTube content, and courses.
          </motion.p>
        </div>

        {/* Search & Filters */}
        <SearchBar value={searchQuery} onChange={setSearchQuery} />
        
        {/* Hide category filters if user is typing a search query to prevent confusion */}
        <AnimatePresence>
          {searchQuery === "" && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
            >
              <CategoryFilter active={activeCategory} onChange={setActiveCategory} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* FAQ Accordion List */}
        <div className="flex flex-col gap-4 min-h-[400px]">
          <AnimatePresence mode="popLayout">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, index) => (
                <motion.div
                  key={faq.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <FAQCard 
                    faq={faq} 
                    isOpen={openId === faq.id} 
                    onToggle={() => toggleFaq(faq.id)} 
                    index={index}
                  />
                </motion.div>
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="py-16 text-center text-muted-foreground border border-dashed border-white/10 rounded-2xl"
              >
                No questions found matching your search. Please try a different keyword or contact me directly.
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* CTA */}
        <HelpCTA />

      </Container>
    </section>
  );
}
