'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { CarColor } from '@/data/cars';

interface ColorSelectorProps {
  colors: CarColor[];
  vehicleName: string;
}

export default function ColorSelector({ colors, vehicleName }: ColorSelectorProps) {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const activeColor = colors[selectedIdx] || colors[0];

  return (
    <div className="w-full bg-[#111111] border border-white/[0.06] p-8 md:p-12 relative overflow-hidden">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-6 border-b border-white/[0.06]">
        <div>
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#B89B5E] font-medium block mb-1">
            Bespoke Paintwork Atelier
          </span>
          <h3 className="font-serif text-2xl md:text-3xl font-light text-[#F2F0EB]">
            Bespoke Colorways
          </h3>
        </div>
        <div className="mt-4 md:mt-0 text-right">
          <p className="text-sm font-serif text-[#F2F0EB]">{activeColor.name}</p>
          <p className="text-xs text-[#999999] tracking-wider uppercase font-mono">{activeColor.finish}</p>
        </div>
      </div>

      <div className="relative aspect-[16/9] w-full max-w-4xl mx-auto overflow-hidden rounded-sm my-6 border border-white/5 bg-black/40">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeColor.name}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            className="relative w-full h-full"
          >
            <Image
              src={activeColor.image}
              alt={`${vehicleName} in ${activeColor.name}`}
              fill
              sizes="(max-width: 1024px) 100vw, 896px"
              className="object-cover object-center"
            />
            <div
              className="absolute inset-0 mix-blend-overlay opacity-25 pointer-events-none transition-colors duration-700"
              style={{ backgroundColor: activeColor.hex }}
            />
            <div className="absolute inset-0 bg-radial-vignette pointer-events-none" />
          </motion.div>
        </AnimatePresence>

        <div className="absolute bottom-4 left-4 px-3 py-1.5 bg-black/70 backdrop-blur-md border border-white/10 text-[10px] uppercase tracking-widest text-[#F2F0EB]">
          {activeColor.name} · {activeColor.finish}
        </div>
      </div>

      <div className="flex items-center justify-center space-x-5 pt-6">
        {colors.map((color, idx) => {
          const isSelected = idx === selectedIdx;
          return (
            <button
              key={color.name}
              onClick={() => setSelectedIdx(idx)}
              className="group flex flex-col items-center focus:outline-none"
              aria-label={`Select ${color.name} colorway`}
            >
              <div
                className={`w-9 h-9 md:w-11 md:h-11 rounded-full p-0.5 transition-all duration-300 relative flex items-center justify-center ${
                  isSelected
                    ? 'ring-2 ring-[#B89B5E] scale-110'
                    : 'ring-1 ring-white/20 hover:ring-white/60'
                }`}
              >
                <span
                  className="w-full h-full rounded-full block border border-white/10 shadow-inner"
                  style={{ backgroundColor: color.hex }}
                />
              </div>
              <span
                className={`text-[9px] uppercase tracking-widest mt-2 font-medium transition-colors ${
                  isSelected ? 'text-[#B89B5E]' : 'text-transparent group-hover:text-[#999999]'
                }`}
              >
                {color.name.split(' ')[0]}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}