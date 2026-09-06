'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  category?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  light?: boolean;
}

export default function SectionHeading({
  category,
  title,
  description,
  align = 'left',
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 md:mb-16 ${align === 'center' ? 'text-center mx-auto' : ''} max-w-3xl`}>
      {category && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center space-x-2 mb-3 justify-start"
          style={align === 'center' ? { justifyContent: 'center' } : {}}
        >
          <span className="w-6 h-[1px] bg-[#B89B5E]" />
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#B89B5E] font-medium">
            {category}
          </span>
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="font-serif text-3xl md:text-5xl lg:text-6xl font-light text-[#F2F0EB] tracking-tight leading-[1.1] mb-6"
      >
        {title}
      </motion.h2>

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-sm md:text-base text-[#999999] leading-relaxed font-light"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}