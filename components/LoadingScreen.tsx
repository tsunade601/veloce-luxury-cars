'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const hasLoaded = sessionStorage.getItem('veloce_loaded');
    if (hasLoaded) {
      setIsLoading(false);
      return;
    }

    const timer = setTimeout(() => {
      setIsLoading(false);
      sessionStorage.setItem('veloce_loaded', 'true');
    }, 2100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#090909] text-[#F2F0EB] select-none"
        >
          <div className="relative flex flex-col items-center text-center px-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
              className="flex items-center space-x-3 mb-4"
            >
              <span className="w-1.5 h-1.5 bg-[#B89B5E] rounded-full inline-block animate-ping" />
              <span className="text-xs uppercase tracking-[0.4em] text-[#B89B5E] font-medium">
                Atelier VÉLOCÉ
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-5xl md:text-7xl font-light tracking-[0.25em] text-[#F2F0EB] pl-[0.25em] mb-4"
            >
              VÉLOCÉ
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, letterSpacing: '0.2em' }}
              animate={{ opacity: 0.7, letterSpacing: '0.35em' }}
              transition={{ duration: 1.2, delay: 0.4, ease: 'easeOut' }}
              className="text-[11px] md:text-xs uppercase text-[#999999] font-sans font-light"
            >
              PERFORMANCE, REFINED.
            </motion.p>

            <div className="w-48 h-[1px] bg-white/10 mt-8 overflow-hidden relative">
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ repeat: Infinity, duration: 1.4, ease: 'easeInOut' }}
                className="w-full h-full bg-gradient-to-r from-transparent via-[#B89B5E] to-transparent"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}