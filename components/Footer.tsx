'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { VEHICLES } from '@/data/cars';

export default function Footer() {
  return (
    <footer className="bg-[#070707] text-[#F2F0EB] border-t border-white/[0.06] pt-20 pb-12 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#B89B5E]/5 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 pb-16 border-b border-white/[0.06]">
          <div className="md:col-span-4 flex flex-col justify-between">
            <div>
              <Link href="/" className="inline-block mb-4">
                <span className="font-serif text-3xl md:text-4xl font-light tracking-[0.25em] text-[#F2F0EB]">
                  VÉLOCÉ
                </span>
              </Link>
              <p className="text-xs uppercase tracking-[0.35em] text-[#B89B5E] mb-6">
                Performance, Refined.
              </p>
              <p className="text-sm text-[#999999] leading-relaxed max-w-sm font-light">
                An ultra-luxury automotive atelier dedicated to mechanical perfection, aerodynamic elegance, and unadulterated driving emotion.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/5">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#999999] block mb-2">
                Private Inquiries
              </span>
              <a
                href="mailto:concierge@veloce-atelier.com"
                className="text-xs text-[#F2F0EB] hover:text-[#B89B5E] transition-colors flex items-center space-x-1 tracking-wider"
              >
                <span>concierge@veloce-atelier.com</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-xs uppercase tracking-[0.3em] text-[#B89B5E] mb-6 font-medium">
              Collection
            </h3>
            <ul className="space-y-3.5">
              {VEHICLES.map((vehicle) => (
                <li key={vehicle.slug}>
                  <Link
                    href={`/models/${vehicle.slug}`}
                    className="text-sm text-[#999999] hover:text-[#F2F0EB] transition-colors flex items-center justify-between group"
                  >
                    <span className="font-light">{vehicle.name}</span>
                    <span className="text-[10px] text-white/30 group-hover:text-[#B89B5E] transition-colors">
                      {vehicle.stats.horsepower} HP
                    </span>
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  href="/models"
                  className="text-xs uppercase tracking-[0.2em] text-[#B89B5E] hover:text-[#F2F0EB] transition-colors inline-flex items-center"
                >
                  <span>Explore All Vehicles</span>
                  <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-xs uppercase tracking-[0.3em] text-[#B89B5E] mb-6 font-medium">
              Atelier
            </h3>
            <ul className="space-y-3 text-sm font-light text-[#999999]">
              <li>
                <Link href="/about" className="hover:text-[#F2F0EB] transition-colors">
                  Philosophy
                </Link>
              </li>
              <li>
                <Link href="/about#engineering" className="hover:text-[#F2F0EB] transition-colors">
                  Engineering
                </Link>
              </li>
              <li>
                <Link href="/about#craftsmanship" className="hover:text-[#F2F0EB] transition-colors">
                  Craftsmanship
                </Link>
              </li>
              <li>
                <Link href="/about#heritage" className="hover:text-[#F2F0EB] transition-colors">
                  Heritage & Timeline
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#F2F0EB] transition-colors">
                  Private Showrooms
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-xs uppercase tracking-[0.3em] text-[#B89B5E] mb-6 font-medium">
              Global Ateliers
            </h3>
            <div className="space-y-4 text-xs font-light text-[#999999]">
              <div>
                <p className="text-[#F2F0EB] font-normal uppercase tracking-wider">Geneva</p>
                <p>Rue du Rhône 42, 1204 Genève, Switzerland</p>
              </div>
              <div>
                <p className="text-[#F2F0EB] font-normal uppercase tracking-wider">London</p>
                <p>14 Berkeley Square, Mayfair, London W1J 6BQ</p>
              </div>
              <div>
                <p className="text-[#F2F0EB] font-normal uppercase tracking-wider">Tokyo</p>
                <p>6-10-1 Roppongi, Minato-ku, Tokyo 106-6108</p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-[#999999]/60 space-y-4 md:space-y-0">
          <p className="tracking-widest">
            © {new Date().getFullYear()} VÉLOCÉ AUTOMOTIVE S.A. ALL RIGHTS RESERVED.
          </p>

          <div className="flex items-center space-x-6 tracking-wider">
            <span className="hover:text-[#F2F0EB] transition-colors cursor-pointer">PRIVACY POLICY</span>
            <span className="hover:text-[#F2F0EB] transition-colors cursor-pointer">LEGAL TERMS</span>
            <span className="hover:text-[#F2F0EB] transition-colors cursor-pointer">CONFIGURATOR</span>
          </div>
        </div>
      </div>
    </footer>
  );
}