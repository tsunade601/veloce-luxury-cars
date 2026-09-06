'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { VEHICLES } from '@/data/cars';

export default function ModelGrid() {
  return (
    <section className="py-28 md:py-36 bg-[#090909] text-[#F2F0EB] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20">
          <div>
            <span className="text-[11px] uppercase tracking-[0.35em] text-[#B89B5E] font-medium block mb-3">
              The Lineup
            </span>
            <h2 className="font-serif text-4xl md:text-6xl font-light tracking-tight text-[#F2F0EB]">
              Four Interpretations of Mastery
            </h2>
          </div>
          <Link
            href="/models"
            className="mt-6 md:mt-0 text-xs uppercase tracking-[0.25em] text-[#B89B5E] hover:text-[#F2F0EB] transition-colors flex items-center space-x-2"
          >
            <span>View Full Portfolio</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {VEHICLES.map((car, idx) => (
            <motion.div
              key={car.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              className="group relative flex flex-col bg-[#111111] border border-white/[0.06] hover:border-[#B89B5E]/50 transition-all duration-700 overflow-hidden"
            >
              <Link href={`/models/${car.slug}`} className="block relative w-full aspect-[16/10] overflow-hidden">
                <Image
                  src={car.heroImage}
                  alt={car.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-black/20 opacity-80 group-hover:opacity-60 transition-opacity duration-700" />
                
                <div className="absolute top-6 left-6 px-3 py-1 bg-black/60 backdrop-blur-sm border border-white/10 text-[10px] uppercase tracking-[0.25em] text-[#B89B5E]">
                  {car.category}
                </div>

                <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 flex items-center justify-center text-[#F2F0EB] group-hover:bg-[#B89B5E] group-hover:text-[#090909] group-hover:border-[#B89B5E] transition-all duration-500">
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </Link>

              <div className="p-8 flex flex-col justify-between flex-grow">
                <div>
                  <div className="flex items-baseline justify-between mb-2">
                    <h3 className="font-serif text-3xl font-light text-[#F2F0EB] group-hover:text-[#B89B5E] transition-colors duration-300">
                      {car.name}
                    </h3>
                    <span className="text-xs font-mono tracking-wider text-[#999999]">
                      Starting at {car.price}
                    </span>
                  </div>
                  <p className="text-xs text-[#999999] font-light leading-relaxed mb-6 line-clamp-2">
                    {car.tagline}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/[0.06] grid grid-cols-3 gap-4 text-center">
                  <div>
                    <span className="block font-serif text-xl font-light text-[#F2F0EB]">
                      {car.stats.horsepower} HP
                    </span>
                    <span className="text-[9px] uppercase tracking-widest text-[#999999]">Power</span>
                  </div>
                  <div>
                    <span className="block font-serif text-xl font-light text-[#F2F0EB]">
                      {car.stats.acceleration}
                    </span>
                    <span className="text-[9px] uppercase tracking-widest text-[#999999]">0–100</span>
                  </div>
                  <div>
                    <span className="block font-serif text-xl font-light text-[#F2F0EB]">
                      {car.stats.topSpeed}
                    </span>
                    <span className="text-[9px] uppercase tracking-widest text-[#999999]">Top Speed</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}