'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, ChevronRight } from 'lucide-react';
import { VEHICLES } from '@/data/cars';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: 'COLLECTION', href: '/models' },
    { name: 'PHILOSOPHY', href: '/about' },
    { name: 'CONCIERGE', href: '/contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#090909]/80 backdrop-blur-md border-b border-white/[0.06] py-4'
            : 'bg-gradient-to-b from-black/70 via-black/30 to-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <Link
            href="/"
            className="group flex items-center space-x-3 cursor-pointer select-none"
            aria-label="VÉLOCÉ Home"
          >
            <div className="relative flex flex-col">
              <span className="font-serif text-2xl md:text-3xl font-light tracking-[0.25em] text-[#F2F0EB] transition-colors duration-300 group-hover:text-[#B89B5E]">
                VÉLOCÉ
              </span>
              <span className="text-[8px] tracking-[0.35em] text-[#999999] uppercase font-sans font-medium -mt-1 group-hover:text-[#F2F0EB] transition-colors duration-300">
                Performance, Refined
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-10" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-xs uppercase tracking-[0.25em] transition-all duration-300 relative py-1 ${
                    isActive ? 'text-[#B89B5E]' : 'text-[#F2F0EB]/80 hover:text-[#F2F0EB]'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="navIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#B89B5E]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:flex items-center space-x-6">
            <Link
              href="/contact"
              className="group relative inline-flex items-center justify-center px-5 py-2.5 text-[11px] uppercase tracking-[0.25em] font-medium text-[#090909] bg-[#F2F0EB] transition-all duration-500 hover:bg-[#B89B5E] hover:text-[#090909] overflow-hidden"
            >
              <span className="relative z-10">TEST DRIVE</span>
              <ArrowUpRight className="relative z-10 w-3.5 h-3.5 ml-1.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-[#F2F0EB] p-2 hover:text-[#B89B5E] transition-colors focus:outline-none focus:ring-1 focus:ring-[#B89B5E]"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-[#090909] flex flex-col justify-between px-8 pt-28 pb-12 overflow-y-auto md:hidden"
          >
            <div className="flex flex-col space-y-8">
              <div className="border-b border-white/10 pb-4">
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#B89B5E]">
                  Navigation Directory
                </span>
              </div>

              <div className="flex flex-col space-y-6">
                <Link
                  href="/"
                  className="font-serif text-3xl font-light text-[#F2F0EB] hover:text-[#B89B5E] transition-colors flex items-center justify-between"
                >
                  <span>HOME</span>
                  <ChevronRight className="w-5 h-5 text-[#999999]" />
                </Link>

                <Link
                  href="/models"
                  className="font-serif text-3xl font-light text-[#F2F0EB] hover:text-[#B89B5E] transition-colors flex items-center justify-between"
                >
                  <span>COLLECTION</span>
                  <ChevronRight className="w-5 h-5 text-[#999999]" />
                </Link>

                <Link
                  href="/about"
                  className="font-serif text-3xl font-light text-[#F2F0EB] hover:text-[#B89B5E] transition-colors flex items-center justify-between"
                >
                  <span>PHILOSOPHY</span>
                  <ChevronRight className="w-5 h-5 text-[#999999]" />
                </Link>

                <Link
                  href="/contact"
                  className="font-serif text-3xl font-light text-[#F2F0EB] hover:text-[#B89B5E] transition-colors flex items-center justify-between"
                >
                  <span>CONCIERGE & TEST DRIVE</span>
                  <ChevronRight className="w-5 h-5 text-[#999999]" />
                </Link>
              </div>

              <div className="pt-6 border-t border-white/10">
                <p className="text-[10px] uppercase tracking-[0.25em] text-[#999999] mb-4">
                  Flagship Models
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {VEHICLES.map((vehicle) => (
                    <Link
                      key={vehicle.slug}
                      href={`/models/${vehicle.slug}`}
                      className="p-3 bg-white/[0.03] border border-white/5 hover:border-[#B89B5E]/40 transition-colors"
                    >
                      <p className="text-sm font-serif text-[#F2F0EB]">{vehicle.name}</p>
                      <p className="text-[10px] text-[#999999]">{vehicle.stats.horsepower} HP</p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-white/10 flex flex-col space-y-4">
              <Link
                href="/contact"
                className="w-full text-center py-4 bg-[#F2F0EB] text-[#090909] text-xs uppercase tracking-[0.25em] font-medium hover:bg-[#B89B5E] transition-colors"
              >
                BOOK A PRIVATE APPOINTMENT
              </Link>
              <div className="flex justify-between items-center text-[10px] text-[#999999] tracking-widest uppercase">
                <span>Geneva · London · Tokyo</span>
                <span>© {new Date().getFullYear()} VÉLOCÉ</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}