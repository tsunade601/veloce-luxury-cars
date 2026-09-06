'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Counter from './Counter';

interface StatItem {
  value: number;
  decimals?: number;
  suffix?: string;
  prefix?: string;
  label: string;
  description?: string;
}

interface PerformanceStatsProps {
  stats: StatItem[];
  title?: string;
  subtitle?: string;
}

export default function PerformanceStats({
  stats,
  title = 'UNCOMPROMISING METRICS',
  subtitle = 'Measured against the purest laws of physics.',
}: PerformanceStatsProps) {
  return (
    <section className="py-24 bg-[#090909] text-[#F2F0EB] border-y border-white/[0.06] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <span className="text-[10px] uppercase tracking-[0.35em] text-[#B89B5E] font-semibold block mb-2">
              Telemetry & Dynamics
            </span>
            <h3 className="font-serif text-2xl md:text-4xl font-light tracking-wide text-[#F2F0EB]">
              {title}
            </h3>
          </div>
          <p className="text-xs uppercase tracking-[0.2em] text-[#999999] mt-3 md:mt-0 font-light">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              className="relative p-8 bg-white/[0.02] border border-white/[0.06] hover:border-[#B89B5E]/30 transition-colors group"
            >
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#B89B5E]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="flex items-baseline space-x-1 mb-3">
                <Counter
                  to={stat.value}
                  decimals={stat.decimals || 0}
                  suffix={stat.suffix || ''}
                  prefix={stat.prefix || ''}
                  duration={2.2}
                  className="font-serif text-5xl md:text-7xl font-light text-[#F2F0EB] tracking-tight"
                />
              </div>

              <div className="text-xs uppercase tracking-[0.25em] text-[#B89B5E] font-medium mb-2">
                {stat.label}
              </div>

              {stat.description && (
                <p className="text-xs text-[#999999] leading-relaxed font-light">
                  {stat.description}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}