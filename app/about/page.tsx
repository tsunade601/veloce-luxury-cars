'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Compass, Shield, Wind, Sparkles } from 'lucide-react';
import PageTransition from '@/components/PageTransition';
import SectionHeading from '@/components/SectionHeading';
import FinalCTA from '@/components/FinalCTA';

const TIMELINE_EVENTS = [
  {
    year: '2014',
    title: 'The Silent Inception',
    location: 'Geneva, Switzerland',
    description:
      'Etienne Veloce establishes a confidential skunkworks atelier on the shores of Lake Geneva with an uncompromising manifesto: strip the supercar of digital veneer and restore absolute mechanical purity.',
  },
  {
    year: '2017',
    title: 'Aerospace Monocoque Breakthrough',
    location: 'Modena Atelier',
    description:
      'Development of our proprietary single-piece autoclaved carbon fiber tub with integrated titanium hardpoints, attaining 42,000 Nm/deg of torsional stiffness at a mass under 140 kg.',
  },
  {
    year: '2020',
    title: 'VÉLOCÉ V1 World Unveiling',
    location: 'Villa d’Este, Lake Como',
    description:
      'The flagship V1 debuts before a private consortium of collectors. Featuring 620 HP from a bespoke flat-plane V8 and axial hybrid assist, it immediately redefines the hyper-touring benchmark.',
  },
  {
    year: '2023',
    title: 'Expansion of the Quadrant',
    location: 'Geneva & Tokyo',
    description:
      'Launch of the all-terrain X1 and pure electric S1, validating that aerodynamic elegance and sovereign luxury apply across high-altitude mountain passes and silent zero-emission corridors.',
  },
  {
    year: 'Present',
    title: 'The Pursuit of Absolute Form',
    location: 'Global Ateliers',
    description:
      'Operating with strictly capped production volumes, VÉLOCÉ manufactures fewer than one hundred automobiles annually, ensuring each commission is an irreproducible masterpiece of mechanical art.',
  },
];

export default function AboutPage() {
  return (
    <PageTransition>
      <div className="bg-[#090909] text-[#F2F0EB]">
        {/* 1. CINEMATIC HERO */}
        <section className="relative min-h-[85vh] flex flex-col justify-end pb-20 px-6 md:px-12 overflow-hidden pt-36">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2400&auto=format&fit=crop"
              alt="VÉLOCÉ Atelier Heritage"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center brightness-[0.65]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#090909] via-black/40 to-black/70" />
            <div className="absolute inset-0 bg-radial-vignette opacity-80" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto w-full">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-center space-x-3 mb-4 text-xs uppercase tracking-[0.35em] text-[#B89B5E]"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#B89B5E]" />
              <span>The Atelier Story</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-5xl sm:text-7xl md:text-8xl font-light text-[#F2F0EB] tracking-tight max-w-5xl leading-[1]"
            >
              Born from Obsession. Refined by Wind.
            </motion.h1>
          </div>
        </section>

        {/* 2. PHILOSOPHY & MANIFESTO */}
        <section className="py-28 md:py-36 px-6 md:px-12 border-b border-white/[0.06]">
          <div className="max-w-4xl mx-auto">
            <span className="text-[11px] uppercase tracking-[0.35em] text-[#B89B5E] font-medium block mb-6">
              Our Manifesto
            </span>

            <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#F2F0EB] leading-tight mb-12">
              “In an era where automobiles have become ephemeral software platforms on wheels, VÉLOCÉ builds timeless monuments of mechanical poetry.”
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-base text-[#999999] leading-relaxed font-light">
              <p>
                We do not pursue trends, artificial gimmicks, or synthetic exhaust synthesizers. Every sound that emanates from a VÉLOCÉ is genuine mechanical combustion and aerodynamic harmonic resonance. Every surface you touch is honest metal, aniline leather, or autoclaved structural carbon.
              </p>
              <p>
                Our philosophy balances extreme aerospace aerodynamics with the classical coachbuilding heritage of northern Italy and the micro-mechanical precision of Swiss horology. When you step inside, you do not feel the weight of technology; you feel the unmediated sensation of speed.
              </p>
            </div>
          </div>
        </section>

        {/* 3. PILLARS: DESIGN, ENGINEERING, CRAFTSMANSHIP */}
        <section id="engineering" className="py-28 md:py-36 px-6 md:px-12 bg-[#0B0B0C] border-b border-white/[0.06]">
          <div className="max-w-7xl mx-auto">
            <SectionHeading
              category="The Pillars"
              title="Form Dictated by Physics"
              description="Three disciplined crafts harmonized into a singular driving experience."
            />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 md:gap-12">
              <div className="bg-[#111111] border border-white/[0.06] p-8 md:p-10 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center text-[#B89B5E] mb-8">
                    <Wind className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.3em] text-[#B89B5E] block mb-2">Pillar I</span>
                  <h3 className="font-serif text-3xl font-light text-[#F2F0EB] mb-4">Sculptural Aerodynamics</h3>
                  <p className="text-xs text-[#999999] leading-relaxed font-light">
                    Every intake, venturi tunnel, and vortex generator is integrated directly into the bodywork. We eliminate aggressive, tacked-on wings in favor of organic laminar flow channels that produce maximum downforce with minimal drag.
                  </p>
                </div>
                <div className="mt-8 pt-6 border-t border-white/5 text-[10px] uppercase tracking-widest text-[#999999]">
                  Zero Parasitic Aero
                </div>
              </div>

              <div className="bg-[#111111] border border-white/[0.06] p-8 md:p-10 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center text-[#B89B5E] mb-8">
                    <Shield className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.3em] text-[#B89B5E] block mb-2">Pillar II</span>
                  <h3 className="font-serif text-3xl font-light text-[#F2F0EB] mb-4">Aerospace Metallurgy</h3>
                  <p className="text-xs text-[#999999] leading-relaxed font-light">
                    Suspension wishbones milled from solid blocks of 7075-T6 aeronautical aluminum. Exhaust headers 3D-printed in inconel alloy with wall thicknesses under 0.9 millimeters. Strength without mass.
                  </p>
                </div>
                <div className="mt-8 pt-6 border-t border-white/5 text-[10px] uppercase tracking-widest text-[#999999]">
                  Military-Spec Composites
                </div>
              </div>

              <div id="craftsmanship" className="bg-[#111111] border border-white/[0.06] p-8 md:p-10 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center text-[#B89B5E] mb-8">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.3em] text-[#B89B5E] block mb-2">Pillar III</span>
                  <h3 className="font-serif text-3xl font-light text-[#F2F0EB] mb-4">Saddle & Horology Craft</h3>
                  <p className="text-xs text-[#999999] leading-relaxed font-light">
                    No artificial simulated leathers or plastic-painted bezels. Our instrument dials feature sapphire crystal and physical Swiss movements, while cockpits are trimmed by master artisans with four decades of luxury saddlery pedigree.
                  </p>
                </div>
                <div className="mt-8 pt-6 border-t border-white/5 text-[10px] uppercase tracking-widest text-[#999999]">
                  340 Hours per Interior
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. LARGE EDITORIAL SPLIT SHOWCASE */}
        <section className="py-24 md:py-36 px-6 md:px-12 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#111111] border border-white/[0.08]">
              <Image
                src="https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?q=80&w=1600&auto=format&fit=crop"
                alt="VÉLOCÉ Craftsmanship"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#B89B5E] block mb-1">
                  Atelier Workshop
                </span>
                <p className="font-serif text-2xl text-[#F2F0EB]">Hand-Tuned Exhaust Resonance Chambers</p>
              </div>
            </div>

            <div className="space-y-8">
              <span className="text-[10px] uppercase tracking-[0.35em] text-[#B89B5E] font-medium block">
                The Modena & Geneva Studios
              </span>
              <h2 className="font-serif text-3xl md:text-5xl font-light text-[#F2F0EB] leading-tight">
                Where Hand Craft Meets Computational Aerodynamics
              </h2>
              <p className="text-sm text-[#999999] leading-relaxed font-light">
                Our facilities do not resemble traditional factories. In Geneva, our styling studio overlooks the Alps, where clay sculptors shape 1:1 scale models by hand over hundreds of hours before scanning them into fluid-dynamic simulators.
              </p>
              <p className="text-sm text-[#999999] leading-relaxed font-light">
                In Modena, our engine builders hand-assemble each flat-plane V8 and naturally aspirated V12. Each engine is run on an acoustic dyno for 48 hours and signed by the single master technician responsible for its creation.
              </p>

              <div className="pt-4 border-t border-white/10">
                <Link
                  href="/models"
                  className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-[#B89B5E] hover:text-[#F2F0EB] transition-colors"
                >
                  <span>Explore the Resulting Collection</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 5. HERITAGE & TIMELINE SECTION */}
        <section id="heritage" className="py-28 md:py-36 px-6 md:px-12 bg-[#080808] border-t border-white/[0.06]">
          <div className="max-w-5xl mx-auto">
            <SectionHeading
              category="Chronicle"
              title="A Decade of Relentless Focus"
              description="Milestones marking our transition from a confidential Swiss design studio to a premier independent hyper-atelier."
            />

            <div className="relative border-l border-white/[0.1] ml-4 md:ml-8 pl-8 md:pl-12 space-y-16 py-6">
              {TIMELINE_EVENTS.map((event, idx) => (
                <motion.div
                  key={event.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: idx * 0.1 }}
                  className="relative"
                >
                  <div className="absolute -left-[41px] md:-left-[57px] top-1.5 w-4 h-4 rounded-full bg-[#090909] border-2 border-[#B89B5E]" />

                  <div className="flex flex-col sm:flex-row sm:items-baseline space-y-1 sm:space-y-0 sm:space-x-4 mb-2">
                    <span className="font-serif text-3xl font-light text-[#B89B5E]">
                      {event.year}
                    </span>
                    <h3 className="font-serif text-2xl font-light text-[#F2F0EB]">
                      {event.title}
                    </h3>
                  </div>

                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#999999] block mb-3 font-mono">
                    {event.location}
                  </span>

                  <p className="text-sm text-[#999999] leading-relaxed font-light max-w-2xl">
                    {event.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <FinalCTA />
      </div>
    </PageTransition>
  );
}