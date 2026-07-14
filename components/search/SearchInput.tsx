"use client";

import { Search } from "lucide-react";

interface SearchInputProps {
  query: string;
  setQuery: (val: string) => void;
}

export function SearchInput({ query, setQuery }: SearchInputProps) {
  return (
    <div className="relative flex items-center border-b border-white/10 px-4 py-4 shrink-0">
      <Search className="w-5 h-5 text-muted-foreground mr-3" />
      <input
        type="text"
        autoFocus
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search apps, websites, courses, blogs..."
        className="w-full bg-transparent border-none outline-none text-white placeholder:text-muted-foreground/70 text-lg"
      />
      {query && (
        <button 
          onClick={() => setQuery("")}
          className="text-xs text-muted-foreground hover:text-white px-2 py-1 rounded bg-white/10 transition-colors"
        >
          Clear
        </button>
      )}
    </div>
  );
}
