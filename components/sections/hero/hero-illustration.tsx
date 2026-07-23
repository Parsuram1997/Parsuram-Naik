"use client";

import { motion, MotionValue, useTransform } from "framer-motion";
import { FaGooglePlay, FaDesktop, FaYoutube, FaRobot } from "react-icons/fa";

interface HeroIllustrationProps {
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
}

export function HeroIllustration({ mouseX, mouseY }: HeroIllustrationProps) {
  // Parallax transforms with different depths
  const layer1X = useTransform(mouseX, [-1, 1], [-15, 15]);
  const layer1Y = useTransform(mouseY, [-1, 1], [-15, 15]);
  
  const layer2X = useTransform(mouseX, [-1, 1], [-30, 30]);
  const layer2Y = useTransform(mouseY, [-1, 1], [-30, 30]);
  
  const layer3X = useTransform(mouseX, [-1, 1], [40, -40]);
  const layer3Y = useTransform(mouseY, [-1, 1], [40, -40]);

  return (
    <div className="relative w-full h-[500px] lg:h-[700px] flex items-center justify-center pointer-events-none">
      
      {/* 1. Decorative Rings */}
      <motion.div
        style={{ x: layer1X, y: layer1Y }}
        className="absolute z-0 flex items-center justify-center w-full h-full"
      >
        <div className="absolute w-[300px] h-[300px] md:w-[450px] md:h-[450px] rounded-full border border-primary-blue/10 border-dashed animate-[spin_60s_linear_infinite]" />
        <div className="absolute w-[380px] h-[380px] md:w-[550px] md:h-[550px] rounded-full border border-primary-green/10" />
      </motion.div>

      {/* 2. Portrait */}
      <motion.div
        style={{ x: layer1X, y: layer1Y }}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border border-white/20 shadow-[0_0_50px_rgba(37,99,235,0.4)] bg-background flex items-center justify-center backdrop-blur-md group"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-primary-blue via-primary-green to-primary-blue bg-[length:200%_auto] opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
        <div className="absolute bottom-0 w-[96%] h-[96%] bg-muted/80 rounded-full overflow-hidden flex items-end justify-center backdrop-blur-xl border border-white/10 shadow-[inset_0_0_20px_rgba(16,185,129,0.2)] transition-transform duration-500 group-hover:scale-105 pt-2">
           <img src="/parsuram.png" alt="Parsuram Naik" className="w-full h-full object-contain object-bottom group-hover:scale-105 transition-all duration-500" />
           <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent pointer-events-none" />
        </div>
      </motion.div>

      {/* 3. Floating Text Chips — kept inside bounds on mobile */}
      <motion.div
        style={{ x: layer2X, y: layer2Y }}
        className="absolute w-full h-full z-20 flex items-center justify-center"
      >
        <div className="absolute top-[15%] left-[5%] px-4 py-2 rounded-full glass text-xs font-semibold shadow-soft">
          🤖 AI Builder
        </div>
        <div className="absolute top-[20%] right-[5%] px-4 py-2 rounded-full glass text-xs font-semibold shadow-soft text-primary-green">
          📱 Android Developer
        </div>
        <div className="absolute bottom-[20%] left-[5%] px-4 py-2 rounded-full glass text-xs font-semibold shadow-soft text-primary-blue">
          💻 Web Developer
        </div>
        <div className="absolute bottom-[15%] right-[5%] px-4 py-2 rounded-full glass text-xs font-semibold shadow-soft text-red-500">
          ▶ YouTube Creator
        </div>
      </motion.div>

      {/* 4. Floating Detail Cards — negative offsets only on md+ */}
      <motion.div
        style={{ x: layer3X, y: layer3Y }}
        className="absolute w-full h-full z-30 flex items-center justify-center"
      >
        {/* CashFlowAI - top right */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="absolute top-[5%] right-[2%] md:right-[-5%] glass p-3 md:p-4 rounded-xl shadow-elevation flex items-center gap-3 backdrop-blur-xl border-white/20 pointer-events-auto cursor-pointer hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:border-primary-green/40 transition-all duration-300 group"
        >
          <div className="bg-primary-green/20 p-2 md:p-3 rounded-lg text-primary-green group-hover:scale-110 transition-transform">
            <FaGooglePlay className="w-4 h-4 md:w-5 md:h-5" />
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-bold text-foreground leading-none mb-1 group-hover:text-primary-green transition-colors">CashFlowAI</p>
            <p className="text-[10px] text-muted-foreground leading-none">Finance App</p>
          </div>
        </motion.div>

        {/* MakeMyPC - bottom left */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="absolute bottom-[5%] left-[2%] md:left-[-5%] glass p-3 md:p-4 rounded-xl shadow-elevation flex items-center gap-3 backdrop-blur-xl border-white/20 pointer-events-auto cursor-pointer hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(37,99,235,0.3)] hover:border-primary-blue/40 transition-all duration-300 group"
        >
          <div className="bg-primary-blue/20 p-2 md:p-3 rounded-lg text-primary-blue group-hover:scale-110 transition-transform">
            <FaDesktop className="w-4 h-4 md:w-5 md:h-5" />
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-bold text-foreground leading-none mb-1 group-hover:text-primary-blue transition-colors">MakeMyPC</p>
            <p className="text-[10px] text-muted-foreground leading-none">Custom PC Builder</p>
          </div>
        </motion.div>

        {/* YouTube - middle left */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="absolute top-[40%] left-[2%] md:left-[-10%] glass p-3 rounded-xl shadow-elevation flex items-center gap-3 backdrop-blur-xl border-white/20 pointer-events-auto cursor-pointer hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(239,68,68,0.3)] hover:border-red-500/40 transition-all duration-300 group"
        >
          <div className="bg-red-500/20 p-2 rounded-lg text-red-500 group-hover:scale-110 transition-transform">
            <FaYoutube className="w-4 h-4" />
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-bold text-foreground leading-none mb-1 group-hover:text-red-500 transition-colors">YouTube</p>
            <p className="text-[10px] text-muted-foreground leading-none">Latest Tutorials</p>
          </div>
        </motion.div>

        {/* AI Projects - middle right */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="absolute bottom-[40%] right-[2%] md:right-[-10%] glass p-3 rounded-xl shadow-elevation flex items-center gap-3 backdrop-blur-xl border-white/20 pointer-events-auto cursor-pointer hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] hover:border-purple-500/40 transition-all duration-300 group"
        >
          <div className="bg-purple-500/20 p-2 rounded-lg text-purple-400 group-hover:scale-110 transition-transform">
            <FaRobot className="w-4 h-4" />
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-bold text-foreground leading-none mb-1 group-hover:text-purple-400 transition-colors">AI Projects</p>
            <p className="text-[10px] text-muted-foreground leading-none">Coming Soon</p>
          </div>
        </motion.div>
      </motion.div>

    </div>
  );
}
