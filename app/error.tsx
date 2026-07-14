"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Home, RotateCcw } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-4">
      <div className="w-24 h-24 rounded-3xl glass bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-500 mb-8">
        <AlertTriangle className="w-12 h-12" />
      </div>
      
      <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
        Something went wrong!
      </h2>
      
      <p className="text-muted-foreground mb-8 max-w-md">
        An unexpected error occurred while loading this page. We've been notified and are looking into it.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4">
        <Button 
          onClick={() => reset()}
          className="rounded-full bg-white text-black hover:bg-white/90 font-bold"
        >
          <RotateCcw className="w-4 h-4 mr-2" /> Try again
        </Button>
        <Button 
          variant="outline" 
          onClick={() => window.location.href = '/'}
          className="rounded-full border-white/20 font-bold"
        >
          <Home className="w-4 h-4 mr-2" /> Go Home
        </Button>
      </div>
    </div>
  );
}
