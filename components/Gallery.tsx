'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const GALLERY_ITEMS = [
  {
    url: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=2000&auto=format&fit=crop',
    title: 'Monocoque Aerodynamics',
    location: 'Wind Tunnel Testing, Weissach',
  },
  {
    url: 'https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?q=80&w=2000&auto=format&fit=crop',
    title: 'Kinetic Light Signature',
    location: 'Atelier Dark Room, Geneva',
  },
  {
    url: 'https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=1600&auto=format&fit=crop',
    title: 'Hand-Milled Titanium Console',
    location: 'Interior Studio, Modena',
  },
  {
    url: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop',
    title: 'High-Altitude Cold Shakedown',
    location: 'Stelvio Pass, Italian Alps',
  },
  {
    url: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2000&auto=format&fit=crop',
    title: 'Silent Electric Fastback',
    location: 'Gotthard Tunnel Approach, Switzerland',
  },
  {
    url: 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?q=80&w=1600&auto=format&fit=crop',
    title: 'Carbon Ceramic Braking',
    location: 'Nürburgring Nordschleife, Germany',
  },
];

export default function Gallery() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -450, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 450, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-28 md:py-36 bg-[#070707] text-[#F2F0EB] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12 flex flex-col md:flex-row md:items-end justify-between">
        <div>
          <span className="text-[11px] uppercase tracking-[0.35em] text-[#B89B5E] font-medium block mb-3">
            Visual Archive
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-light text-[#F2F0EB]">
            Moments in Stillness & Motion
          </h2>
        </div>

        <div className="hidden md:flex items-center space-x-3 mt-6 md:mt-0">
          <button
            onClick={scrollLeft}
            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-[#F2F0EB] hover:border-[#B89B5E] hover:text-[#B89B5E] transition-colors"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={scrollRight}
            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-[#F2F0EB] hover:border-[#B89B5E] hover:text-[#B89B5E] transition-colors"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div
        ref={scrollContainerRef}
        className="flex space-x-6 px-6 md:px-12 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory py-4"
      >
        {GALLERY_ITEMS.map((item, idx) => (
          <motion.div
            key={idx}
            className="flex-shrink-0 w-[85vw] sm:w-[450px] md:w-[540px] snap-start group relative aspect-[16/10] overflow-hidden bg-[#121212] border border-white/[0.06]"
          >
            <Image
              src={item.url}
              alt={item.title}
              fill
              sizes="(max-width: 768px) 85vw, 540px"
              className="object-cover object-center transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#B89B5E] block mb-1">
                {item.location}
              </span>
              <h4 className="font-serif text-xl font-light text-[#F2F0EB]">
                {item.title}
              </h4>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}