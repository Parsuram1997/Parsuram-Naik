"use client";

import { SearchItemType } from "./searchData";
import { SearchItem } from "./SearchItem";
import { motion } from "framer-motion";
import { FolderSearch } from "lucide-react";

interface SearchResultsProps {
  results: SearchItemType[];
  selectedIndex: number;
  onSelect: (item: SearchItemType) => void;
  query: string;
}

export function SearchResults({ results, selectedIndex, onSelect, query }: SearchResultsProps) {
  if (query && results.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
        <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4">
          <FolderSearch className="w-8 h-8 text-muted-foreground" />
        </div>
        <p className="text-lg font-medium text-white mb-2">No results found.</p>
        <p className="text-sm text-muted-foreground">We couldn&apos;t find anything matching &quot;{query}&quot;.</p>
      </div>
    );
  }

  return (
    <div className="flex-1 overflow-y-auto p-2 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
      {results.map((item, index) => (
        <SearchItem 
          key={item.id} 
          item={item} 
          isSelected={index === selectedIndex} 
          onSelect={() => onSelect(item)} 
          query={query}
        />
      ))}
    </div>
  );
}
