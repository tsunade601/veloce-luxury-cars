'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Zap, Gauge } from 'lucide-react';
import Counter from './Counter';

export default function VehicleShowcase() {
  return (
    <section className="py-28 md:py-36 bg-[#090909] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-[#B89B5E]/5 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-3xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center space-x-3 mb-3"
          >
            <span className="w-8 h-[1px] bg-[#B89B5E]" />
            <span className="text-[11px] uppercase tracking-[0.35em] text-[#B89B5E] font-medium">
              Flagship Vehicle
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-4xl md:text-6xl lg:text-7xl font-light text-[#F2F0EB] tracking-tight mb-6"
          >
            VÉLOCÉ V1
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base md:text-lg text-[#999999] leading-relaxed font-light"
          >
            Sculpted from carbon composite and tuned for emotional resonance. The V1 brings together an atmospheric 4.0-liter twin-turbocharged flat-plane V8 with instantaneous hybrid torque delivery.
          </motion.p>
        </div>

        <div className="relative mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative aspect-[16/9] w-full overflow-hidden border border-white/[0.08] bg-[#111111]"
          >
            <Image
              src="https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=2000&auto=format&fit=crop"
              alt="VÉLOCÉ V1 Flagship Hyper-Tourer"
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
              className="object-cover object-center transition-transform duration-1000 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#090909] via-transparent to-black/30" />

            <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 md:right-10 flex flex-col md:flex-row items-start md:items-end justify-between">
              <div>
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#B89B5E] block mb-1">
                  Atelier Production No. 01
                </span>
                <span className="font-serif text-2xl md:text-3xl text-[#F2F0EB]">
                  The Anatomy of Pure Speed
                </span>
              </div>

              <Link
                href="/models/v1"
                className="mt-4 md:mt-0 inline-flex items-center space-x-2 px-6 py-3 bg-[#F2F0EB] text-[#090909] text-xs uppercase tracking-[0.25em] font-medium hover:bg-[#B89B5E] transition-colors group"
              >
                <span>Discover V1</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="p-8 bg-white/[0.02] border border-white/[0.06] hover:border-[#B89B5E]/40 transition-colors"
          >
            <div className="flex items-center space-x-3 text-[#B89B5E] mb-4">
              <Zap className="w-5 h-5" />
              <span className="text-[10px] uppercase tracking-[0.3em] font-semibold">Engine Power</span>
            </div>
            <div className="font-serif text-5xl md:text-6xl font-light text-[#F2F0EB] mb-2">
              <Counter to={620} suffix=" HP" duration={2} />
            </div>
            <p className="text-xs text-[#999999] leading-relaxed font-light">
              Flat-plane twin-turbo V8 augmented by front axial hybrid torque fill.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="p-8 bg-white/[0.02] border border-white/[0.06] hover:border-[#B89B5E]/40 transition-colors"
          >
            <div className="flex items-center space-x-3 text-[#B89B5E] mb-4">
              <Gauge className="w-5 h-5" />
              <span className="text-[10px] uppercase tracking-[0.3em] font-semibold">Acceleration</span>
            </div>
            <div className="font-serif text-5xl md:text-6xl font-light text-[#F2F0EB] mb-2">
              <Counter to={3.1} decimals={1} suffix=" SEC" duration={2} />
            </div>
            <p className="text-xs text-[#999999] leading-relaxed font-light">
              Zero to one hundred kilometers per hour via all-wheel launch control.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="p-8 bg-white/[0.02] border border-white/[0.06] hover:border-[#B89B5E]/40 transition-colors"
          >
            <div className="flex items-center space-x-3 text-[#B89B5E] mb-4">
              <ShieldCheck className="w-5 h-5" />
              <span className="text-[10px] uppercase tracking-[0.3em] font-semibold">Terminal Velocity</span>
            </div>
            <div className="font-serif text-5xl md:text-6xl font-light text-[#F2F0EB] mb-2">
              <Counter to={312} suffix=" KM/H" duration={2} />
            </div>
            <p className="text-xs text-[#999999] leading-relaxed font-light">
              Aero-stabilized top speed calibrated across European high-speed proving grounds.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}