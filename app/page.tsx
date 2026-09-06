'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Compass, Shield, Wind, Wrench } from 'lucide-react';
import VehicleShowcase from '@/components/VehicleShowcase';
import ModelGrid from '@/components/ModelGrid';
import Gallery from '@/components/Gallery';
import PerformanceStats from '@/components/PerformanceStats';
import FinalCTA from '@/components/FinalCTA';
import PageTransition from '@/components/PageTransition';

export default function HomePage() {
  const { scrollY } = useScroll();
  const heroImageY = useTransform(scrollY, [0, 800], [0, 140]);
  const heroOpacity = useTransform(scrollY, [0, 600], [1, 0.2]);

  return (
    <PageTransition>
      <div className="relative bg-[#090909] text-[#F2F0EB]">
        {/* 1 & 2. HERO SECTION */}
        <section className="relative min-h-screen flex flex-col justify-between pt-32 pb-12 px-6 md:px-12 overflow-hidden">
          <motion.div
            style={{ y: heroImageY, opacity: heroOpacity }}
            className="absolute inset-0 z-0 pointer-events-none"
          >
            <Image
              src="https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=2400&auto=format&fit=crop"
              alt="VÉLOCÉ Cinematic Hero"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center brightness-75 scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#090909] via-black/40 to-black/70" />
            <div className="absolute inset-0 bg-radial-vignette opacity-80" />
          </motion.div>

          <div className="relative z-10 max-w-7xl mx-auto w-full">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="flex items-center space-x-3 text-xs uppercase tracking-[0.35em] text-[#B89B5E]"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#B89B5E]" />
              <span>Series IV Commission</span>
            </motion.div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto w-full my-auto py-12 md:py-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-4xl"
            >
              <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-light text-[#F2F0EB] tracking-tight leading-[0.95] mb-6">
                VÉLOCÉ
              </h1>
              <p className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#F2F0EB]/90 font-light italic tracking-wide max-w-2xl mb-8">
                Performance, refined.
              </p>
              <p className="text-sm md:text-base text-[#999999] max-w-xl font-light leading-relaxed mb-10">
                Sculpted from carbon composite and tuned for emotional resonance. An uncompromising fusion of analog soul and hyper-velocity engineering.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
                <Link
                  href="/models"
                  className="px-8 py-4 bg-[#F2F0EB] text-[#090909] text-xs uppercase tracking-[0.25em] font-medium hover:bg-[#B89B5E] hover:text-[#090909] transition-all duration-300 text-center"
                >
                  EXPLORE THE COLLECTION
                </Link>

                <Link
                  href="/contact"
                  className="px-8 py-4 border border-white/25 text-[#F2F0EB] text-xs uppercase tracking-[0.25em] font-light hover:border-[#B89B5E] hover:text-[#B89B5E] transition-colors text-center"
                >
                  BOOK A TEST DRIVE
                </Link>
              </div>
            </motion.div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto w-full flex items-center justify-between pt-6 border-t border-white/[0.08] text-xs text-[#999999]">
            <div className="flex items-center space-x-2 tracking-widest uppercase text-[10px]">
              <span className="text-[#B89B5E]">Geneva Atelier</span>
              <span>·</span>
              <span>46.2044° N, 6.1432° E</span>
            </div>

            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
              className="flex items-center space-x-2 text-[10px] tracking-widest uppercase cursor-pointer"
              onClick={() => {
                window.scrollTo({ top: window.innerHeight * 0.95, behavior: 'smooth' });
              }}
            >
              <span>Scroll to explore</span>
              <ArrowDown className="w-3.5 h-3.5 text-[#B89B5E]" />
            </motion.div>
          </div>
        </section>

        {/* 3. BRAND STATEMENT */}
        <section className="py-32 md:py-48 px-6 md:px-12 bg-[#090909] border-t border-white/[0.06] relative">
          <div className="max-w-5xl mx-auto text-center">
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[11px] uppercase tracking-[0.4em] text-[#B89B5E] font-medium block mb-8"
            >
              Atelier Creed
            </motion.span>

            <motion.blockquote
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-[#F2F0EB] tracking-tight leading-[1.15] mb-12"
            >
              “We don’t build cars for attention. We build them for the moment after it.”
            </motion.blockquote>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex items-center justify-center space-x-4 text-xs tracking-widest uppercase text-[#999999]"
            >
              <span className="w-8 h-[1px] bg-white/20" />
              <span>Etienne Veloce — Founder & Head of Design</span>
              <span className="w-8 h-[1px] bg-white/20" />
            </motion.div>
          </div>
        </section>

        {/* 4. FEATURED VEHICLE (V1) */}
        <VehicleShowcase />

        {/* 5. PERFORMANCE SECTION */}
        <PerformanceStats
          title="MEASURED IN INSTANTS"
          subtitle="Engineered to redefine physical equilibrium."
          stats={[
            {
              value: 1.6,
              decimals: 1,
              suffix: ' G',
              label: 'LATERAL CORNERING GRIP',
              description: 'Generated through active ground-effect venturi channels without aerodynamic drag penalty.',
            },
            {
              value: 12,
              decimals: 0,
              suffix: ' MS',
              label: 'DUAL-CLUTCH SHIFT LATENCY',
              description: 'Carbon-synchro paddle shifts faster than a single optical human blink.',
            },
            {
              value: 580,
              decimals: 0,
              suffix: ' KG',
              label: 'DOWNFORCE @ 250 KM/H',
              description: 'Ground-hugging stability calibrated via aerodynamic simulation and wind tunnels.',
            },
          ]}
        />

        {/* 6. MODEL LINEUP */}
        <ModelGrid />

        {/* 7. ENGINEERING & PHILOSOPHY SECTIONS */}
        <section className="py-28 md:py-36 bg-[#0B0B0C] border-t border-white/[0.06]">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="max-w-3xl mb-20">
              <span className="text-[11px] uppercase tracking-[0.35em] text-[#B89B5E] font-medium block mb-3">
                Core Tenets
              </span>
              <h2 className="font-serif text-4xl md:text-6xl font-light text-[#F2F0EB]">
                The Architecture of Obsession
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="p-8 bg-white/[0.02] border border-white/[0.06] hover:border-[#B89B5E]/40 transition-colors group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center text-[#B89B5E] mb-6 group-hover:scale-110 transition-transform">
                    <Compass className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-2xl font-light text-[#F2F0EB] mb-3">
                    Precision
                  </h3>
                  <p className="text-xs text-[#999999] leading-relaxed font-light">
                    Every titanium fastener and suspension rocker arm is CNC-milled to tolerances within 5 microns. Nothing is left to approximation.
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-white/5 text-[10px] uppercase tracking-widest text-[#B89B5E]">
                  0.005mm Tolerance
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="p-8 bg-white/[0.02] border border-white/[0.06] hover:border-[#B89B5E]/40 transition-colors group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center text-[#B89B5E] mb-6 group-hover:scale-110 transition-transform">
                    <Shield className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-2xl font-light text-[#F2F0EB] mb-3">
                    Power
                  </h3>
                  <p className="text-xs text-[#999999] leading-relaxed font-light">
                    Linear, unyielding thrust delivered through flat-plane architecture and zero-lag axial-flux kinetic e-motors.
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-white/5 text-[10px] uppercase tracking-widest text-[#B89B5E]">
                  8,500 RPM Redline
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="p-8 bg-white/[0.02] border border-white/[0.06] hover:border-[#B89B5E]/40 transition-colors group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center text-[#B89B5E] mb-6 group-hover:scale-110 transition-transform">
                    <Wrench className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-2xl font-light text-[#F2F0EB] mb-3">
                    Craft
                  </h3>
                  <p className="text-xs text-[#999999] leading-relaxed font-light">
                    Vegetable-tanned full-grain aniline hides, brushed aluminum switchgear, and bookmatched carbon fiber laid by single master artisans.
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-white/5 text-[10px] uppercase tracking-widest text-[#B89B5E]">
                  340 Hours Hand Assembly
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="p-8 bg-white/[0.02] border border-white/[0.06] hover:border-[#B89B5E]/40 transition-colors group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center text-[#B89B5E] mb-6 group-hover:scale-110 transition-transform">
                    <Wind className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-2xl font-light text-[#F2F0EB] mb-3">
                    Aerodynamics
                  </h3>
                  <p className="text-xs text-[#999999] leading-relaxed font-light">
                    Fluid dynamics guided by computational aerospace simulation to shape every millimeter for negative lift without parasitic drag.
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-white/5 text-[10px] uppercase tracking-widest text-[#B89B5E]">
                  0.19 Cd Coefficient
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 8. GALLERY */}
        <Gallery />

        {/* 9. FINAL CTA */}
        <FinalCTA />
      </div>
    </PageTransition>
  );
}