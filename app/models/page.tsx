'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, SlidersHorizontal } from 'lucide-react';
import { VEHICLES } from '@/data/cars';
import PageTransition from '@/components/PageTransition';
import SectionHeading from '@/components/SectionHeading';

const CATEGORIES = ['ALL', 'HYPER-TOURER', 'ALL-TERRAIN', 'ELECTRIC', 'GRAN TURISMO'];

export default function ModelsPage() {
  const [activeFilter, setActiveFilter] = useState('ALL');

  const filteredVehicles = VEHICLES.filter((vehicle) => {
    if (activeFilter === 'ALL') return true;
    if (activeFilter === 'HYPER-TOURER') return vehicle.slug === 'v1';
    if (activeFilter === 'ALL-TERRAIN') return vehicle.slug === 'x1';
    if (activeFilter === 'ELECTRIC') return vehicle.slug === 's1';
    if (activeFilter === 'GRAN TURISMO') return vehicle.slug === 'gt';
    return true;
  });

  return (
    <PageTransition>
      <div className="min-h-screen bg-[#090909] text-[#F2F0EB] pt-32 md:pt-40 pb-28 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 md:mb-20">
            <SectionHeading
              category="The Portfolio"
              title="Instruments of Pure Motion"
              description="Four distinct automotive philosophies unified by uncompromising engineering, architectural sculpture, and visceral driver engagement."
            />

            <div className="flex items-center space-x-2 md:space-x-4 overflow-x-auto pb-4 no-scrollbar border-b border-white/[0.08]">
              <div className="flex items-center space-x-1.5 text-xs text-[#999999] mr-2">
                <SlidersHorizontal className="w-3.5 h-3.5 text-[#B89B5E]" />
                <span className="text-[10px] uppercase tracking-widest hidden sm:inline">Filter</span>
              </div>
              {CATEGORIES.map((cat) => {
                const isActive = activeFilter === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveFilter(cat)}
                    className={`px-4 py-2 text-[10px] md:text-xs uppercase tracking-[0.2em] transition-all duration-300 relative whitespace-nowrap ${
                      isActive
                        ? 'text-[#090909] bg-[#F2F0EB] font-medium'
                        : 'text-[#999999] hover:text-[#F2F0EB] bg-white/[0.02] border border-white/5'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="space-y-24 md:space-y-36">
            <AnimatePresence mode="wait">
              {filteredVehicles.map((car, index) => {
                const isEven = index % 2 === 0;
                return (
                  <motion.article
                    key={car.slug}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                    className="group border-b border-white/[0.08] pb-20 md:pb-28"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
                      <div className={`lg:col-span-7 ${!isEven ? 'lg:order-2' : ''}`}>
                        <Link
                          href={`/models/${car.slug}`}
                          className="block relative aspect-[16/10] w-full overflow-hidden bg-[#111111] border border-white/[0.08] group-hover:border-[#B89B5E]/50 transition-all duration-700"
                        >
                          <Image
                            src={car.heroImage}
                            alt={car.name}
                            fill
                            priority={index === 0}
                            sizes="(max-width: 1024px) 100vw, 60vw"
                            className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 opacity-70 group-hover:opacity-50 transition-opacity duration-500" />

                          <div className="absolute top-6 left-6 px-3 py-1.5 bg-black/70 backdrop-blur-md border border-white/10 text-[10px] uppercase tracking-[0.25em] text-[#B89B5E]">
                            {car.category}
                          </div>

                          <div className="absolute bottom-6 right-6 px-4 py-2 bg-[#090909]/80 backdrop-blur-md border border-white/10 text-[11px] uppercase tracking-[0.2em] text-[#F2F0EB] flex items-center space-x-2 group-hover:bg-[#B89B5E] group-hover:text-[#090909] transition-all duration-500">
                            <span>Explore Vehicle</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </div>
                        </Link>
                      </div>

                      <div className={`lg:col-span-5 flex flex-col justify-between ${!isEven ? 'lg:order-1' : ''}`}>
                        <div>
                          <div className="flex items-center space-x-3 mb-3">
                            <span className="w-6 h-[1px] bg-[#B89B5E]" />
                            <span className="text-[10px] uppercase tracking-[0.3em] text-[#B89B5E] font-medium">
                              Series Production
                            </span>
                          </div>

                          <h2 className="font-serif text-4xl md:text-5xl font-light text-[#F2F0EB] mb-4 group-hover:text-[#B89B5E] transition-colors duration-300">
                            <Link href={`/models/${car.slug}`}>{car.name}</Link>
                          </h2>

                          <p className="text-xs font-mono tracking-widest text-[#B89B5E] mb-4">
                            MSRP Starting at {car.price}
                          </p>

                          <p className="text-sm text-[#999999] font-light leading-relaxed mb-8">
                            {car.overview}
                          </p>
                        </div>

                        <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/[0.08] mb-8">
                          <div>
                            <span className="font-serif text-2xl md:text-3xl font-light text-[#F2F0EB] block">
                              {car.stats.horsepower}
                            </span>
                            <span className="text-[9px] uppercase tracking-[0.2em] text-[#999999]">
                              Horsepower
                            </span>
                          </div>

                          <div>
                            <span className="font-serif text-2xl md:text-3xl font-light text-[#F2F0EB] block">
                              {car.stats.acceleration}
                            </span>
                            <span className="text-[9px] uppercase tracking-[0.2em] text-[#999999]">
                              0–100 KM/H
                            </span>
                          </div>

                          <div>
                            <span className="font-serif text-2xl md:text-3xl font-light text-[#F2F0EB] block">
                              {car.stats.topSpeed}
                            </span>
                            <span className="text-[9px] uppercase tracking-[0.2em] text-[#999999]">
                              Top Speed
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center space-x-4">
                          <Link
                            href={`/models/${car.slug}`}
                            className="px-6 py-3 bg-[#F2F0EB] text-[#090909] text-[11px] uppercase tracking-[0.25em] font-medium hover:bg-[#B89B5E] transition-colors"
                          >
                            Configure & View Details
                          </Link>

                          <Link
                            href={`/contact?model=${car.slug}`}
                            className="px-6 py-3 border border-white/20 text-[#F2F0EB] text-[11px] uppercase tracking-[0.25em] font-light hover:border-[#B89B5E] hover:text-[#B89B5E] transition-colors"
                          >
                            Test Drive
                          </Link>
                        </div>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}