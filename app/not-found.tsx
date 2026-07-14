import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-4 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-blue/10 rounded-full blur-[120px] pointer-events-none" />
      
      <h1 className="text-[150px] md:text-[200px] font-heading font-black leading-none text-transparent bg-clip-text bg-gradient-to-b from-white/20 to-transparent relative z-10 select-none">
        404
      </h1>
      
      <div className="relative z-20 -mt-10 md:-mt-16">
        <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
          Page Not Found
        </h2>
        
        <p className="text-muted-foreground mb-10 max-w-md mx-auto">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            href="/"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-bold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-11 px-8 bg-gradient-to-r from-primary-blue to-primary-green text-white w-full sm:w-auto"
          >
            <Home className="w-5 h-5 mr-2" /> Back to Home
          </Link>
          <Link 
            href="/#websites"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-bold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-white/20 hover:bg-white/10 hover:text-white h-11 px-8 w-full sm:w-auto"
          >
            <Compass className="w-5 h-5 mr-2" /> Explore Projects
          </Link>
        </div>
      </div>
    </div>
  );
}
