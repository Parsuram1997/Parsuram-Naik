"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSearch } from "@/components/providers/search-provider";
import { SearchInput } from "./SearchInput";
import { SearchResults } from "./SearchResults";
import { searchData, popularSearches, SearchItemType } from "./searchData";
import { Clock, TrendingUp } from "lucide-react";

import { useRouter } from "next/navigation";

export function SearchModal() {
  const router = useRouter();
  const { isOpen, closeSearch } = useSearch();
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [results, setResults] = useState<SearchItemType[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);

  const categories = ["All", "App", "Website", "Course", "Blog", "FAQ"];

  // Load recent searches on mount
  useEffect(() => {
    const stored = localStorage.getItem("parsu_recent_searches");
    if (stored) {
      setRecentSearches(JSON.parse(stored));
    }
  }, []);

  // Filter results
  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }
    const lowerQuery = query.toLowerCase();
    const filtered = searchData.filter(item => {
      const matchQuery = 
        item.title.toLowerCase().includes(lowerQuery) ||
        item.description.toLowerCase().includes(lowerQuery) ||
        item.category.toLowerCase().includes(lowerQuery) ||
        item.keywords.some(k => k.toLowerCase().includes(lowerQuery));
      
      const matchCategory = activeCategory === "All" || item.category === activeCategory;
      
      return matchQuery && matchCategory;
    });
    setResults(filtered);
    setSelectedIndex(0);
  }, [query, activeCategory]);

  const handleSelect = useCallback((item: SearchItemType | string) => {
    let targetHref = "/";
    let searchTerm = "";

    if (typeof item === "string") {
      searchTerm = item;
      setQuery(item);
      return; // Just set query for recent/popular chips
    } else {
      targetHref = item.href;
      searchTerm = item.title;
    }

    // Save recent search
    const updatedRecent = [searchTerm, ...recentSearches.filter(s => s !== searchTerm)].slice(0, 5);
    setRecentSearches(updatedRecent);
    localStorage.setItem("parsu_recent_searches", JSON.stringify(updatedRecent));

    closeSearch();

    // Smooth scroll navigation / Router push
    setTimeout(() => {
      if (targetHref.startsWith("#")) {
        if (window.location.pathname === "/") {
          const id = targetHref.substring(1);
          const element = document.getElementById(id);
          if (element) {
            const offset = 80;
            const targetPosition = element.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top: targetPosition, behavior: "smooth" });
            history.pushState(null, "", targetHref);
          }
        } else {
          router.push("/" + targetHref);
        }
      } else {
        router.push(targetHref);
      }
    }, 300);
  }, [recentSearches, closeSearch, router]);

  // Modal keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeSearch();
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev < results.length - 1 ? prev + 1 : prev));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : prev));
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (results.length > 0 && results[selectedIndex]) {
          handleSelect(results[selectedIndex]);
        } else if (query.trim()) {
           handleSelect(query.trim());
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, results, selectedIndex, handleSelect, closeSearch, query]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 sm:pt-32">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-background/80 backdrop-blur-md"
            onClick={closeSearch}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="relative w-full max-w-2xl bg-background border border-white/10 rounded-2xl shadow-2xl overflow-hidden glass flex flex-col max-h-[70vh]"
          >
            <SearchInput query={query} setQuery={setQuery} />

            {/* Category Filters */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 overflow-x-auto scrollbar-none shrink-0">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors ${
                    activeCategory === cat
                      ? "bg-white text-black"
                      : "bg-white/5 text-muted-foreground hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {cat === "All" ? "All Results" : cat}
                </button>
              ))}
            </div>

            {!query ? (
              <div className="p-6 overflow-y-auto">
                {recentSearches.length > 0 && (
                  <div className="mb-8">
                    <h4 className="flex items-center text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                      <Clock className="w-3.5 h-3.5 mr-2" /> Recent Searches
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {recentSearches.map(term => (
                        <button
                          key={term}
                          onClick={() => setQuery(term)}
                          className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 text-sm text-foreground transition-colors"
                        >
                          {term}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                <div>
                  <h4 className="flex items-center text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                    <TrendingUp className="w-3.5 h-3.5 mr-2" /> Popular Searches
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {popularSearches.map(term => (
                      <button
                        key={term}
                        onClick={() => setQuery(term)}
                        className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 text-sm text-primary-blue transition-colors"
                      >
                        {term}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <SearchResults 
                results={results} 
                selectedIndex={selectedIndex} 
                onSelect={handleSelect} 
                query={query}
              />
            )}
            
            <div className="flex items-center justify-between px-4 py-3 border-t border-white/5 bg-black/20 text-xs text-muted-foreground hidden sm:flex">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1"><kbd className="px-1.5 py-0.5 rounded bg-white/10 font-sans">↑</kbd> <kbd className="px-1.5 py-0.5 rounded bg-white/10 font-sans">↓</kbd> to navigate</span>
                <span className="flex items-center gap-1"><kbd className="px-1.5 py-0.5 rounded bg-white/10 font-sans">Enter</kbd> to select</span>
              </div>
              <span className="flex items-center gap-1"><kbd className="px-1.5 py-0.5 rounded bg-white/10 font-sans">Esc</kbd> to close</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
