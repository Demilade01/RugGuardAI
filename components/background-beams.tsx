"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const BackgroundBeams = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-background transition-colors duration-1000" />
      <div className="absolute top-0 left-1/4 w-[50vw] h-[50vh] bg-primary/20 dark:bg-primary/10 rounded-full blur-[120px] mix-blend-screen opacity-50" />
      <div className="absolute bottom-1/4 right-1/4 w-[40vw] h-[40vw] bg-brand-glow/20 rounded-full blur-[100px] mix-blend-screen opacity-40" />

      {/* Animated Polygons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0"
      >
        <svg
          className="absolute w-full h-full opacity-30 dark:opacity-20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="poly-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1C4DFF" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#4F7CFF" stopOpacity="0.1" />
            </linearGradient>
          </defs>

          {/* Polygon 1 */}
          <motion.polygon
            points="100,100 300,50 400,200 200,300"
            fill="url(#poly-grad)"
            animate={{
              x: [0, 20, 0, -20, 0],
              y: [0, -30, 0, 30, 0],
              rotate: [0, 5, -5, 0],
              scale: [1, 1.05, 0.95, 1],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
            className="hidden md:block"
            style={{ transformOrigin: "center" }}
          />

          {/* Polygon 2 */}
           <motion.polygon
            points="80vw,20vh 90vw,10vh 95vw,40vh 85vw,50vh"
            fill="url(#poly-grad)"
            animate={{
              x: [0, -30, 0, 30, 0],
              y: [0, 20, 0, -20, 0],
              rotate: [0, -5, 5, 0],
              scale: [1, 0.95, 1.05, 1],
            }}
            transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
            className="hidden md:block"
            style={{ transformOrigin: "center" }}
          />
          
          {/* Small Particles */}
          <motion.circle
            cx="20vw"
            cy="70vh"
            r="4"
            fill="#4F7CFF"
            animate={{ 
              y: [0, -100, 0], 
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.circle
            cx="75vw"
            cy="30vh"
            r="3"
            fill="#1C4DFF"
            animate={{ 
              y: [0, 100, 0], 
              opacity: [0.1, 0.6, 0.1],
              scale: [1, 1.5, 1]
            }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>
      </motion.div>
    </div>
  );
};
