"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsLoading(false), 500);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 150);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#04070D]"
        >
          <div className="flex flex-col items-center gap-8">
            <div className="relative w-24 h-24">
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 90, 180],
                  borderRadius: ["20%", "50%", "20%"],
                }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                  times: [0, 0.5, 1],
                  repeat: Infinity,
                }}
                className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 opacity-80 mix-blend-screen"
              />
              <motion.div
                animate={{
                  scale: [1.2, 1, 1.2],
                  rotate: [180, 90, 0],
                  borderRadius: ["50%", "20%", "50%"],
                }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                  times: [0, 0.5, 1],
                  repeat: Infinity,
                }}
                className="absolute inset-0 bg-gradient-to-bl from-cyan-400 to-blue-600 opacity-80 mix-blend-screen"
              />
            </div>
            
            <div className="flex flex-col items-center gap-2">
              <div className="text-4xl font-bold text-white font-mono tracking-tighter">
                {Math.min(progress, 100)}%
              </div>
              <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-white"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ ease: "linear" }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
