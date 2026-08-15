import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader({ onComplete }) {
  const [count, setCount] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Stepped counter matching video (28 -> 54 -> 79 -> 100)
    const steps = [0, 18, 34, 52, 71, 88, 96, 100];
    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      if (currentStep < steps.length) {
        setCount(steps[currentStep]);
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setIsDone(true);
          if (onComplete) onComplete();
        }, 350);
      }
    }, 140);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ 
            y: '-100%',
            transition: { duration: 0.85, ease: [0.76, 0, 0.24, 1] } 
          }}
          className="fixed inset-0 z-[9999] bg-[#1C1D20] text-[#ECEAE5] flex flex-col justify-between p-8 sm:p-14 select-none"
        >
          {/* Top Info */}
          <div className="flex items-center justify-between font-mono text-xs text-white/50 tracking-widest uppercase">
            <span>PASIT PUKANG</span>
            <span className="text-emerald-400">● PORTFOLIO 2026</span>
          </div>

          {/* Center Brand */}
          <div className="flex flex-col items-center justify-center text-center">
            <span className="font-display font-black text-3xl sm:text-5xl md:text-6xl tracking-widest text-[#ECEAE5] uppercase animate-pulse">
              FULLSTACK / DEVELOPER
            </span>
            <span className="text-xs font-mono text-white/40 tracking-widest mt-2 uppercase">
              Kasetsart University
            </span>
          </div>

          {/* Bottom Counter (Matching video reference at 00:11 - 00:12) */}
          <div className="flex items-end justify-between">
            <div className="text-xs font-mono text-white/40 tracking-wider">
              LOADING ASSETS & EXPERIENCE...
            </div>
            
            <div className="font-display font-black text-6xl sm:text-8xl md:text-9xl text-[#ECEAE5] tracking-tight leading-none">
              {count}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
