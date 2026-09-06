'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="relative py-32 md:py-48 bg-[#090909] text-[#F2F0EB] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?q=80&w=2000&auto=format&fit=crop"
          alt="Experience VÉLOCÉ"
          fill
          sizes="100vw"
          className="object-cover object-center opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#090909] via-[#090909]/80 to-[#090909]" />
      </div>

      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center relative z-10">
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs uppercase tracking-[0.4em] text-[#B89B5E] font-medium block mb-4"
        >
          Private Commissions & Appointments
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-light text-[#F2F0EB] tracking-tight mb-8"
        >
          Experience VÉLOCÉ.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-base md:text-lg text-[#999999] max-w-xl mx-auto font-light leading-relaxed mb-12"
        >
          Step beyond conventional motoring. Schedule a private viewing at our Geneva atelier or arrange an enclosed test drive with our lead dynamics test pilot.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
        >
          <Link
            href="/contact"
            className="w-full sm:w-auto px-8 py-4 bg-[#F2F0EB] text-[#090909] text-xs uppercase tracking-[0.25em] font-medium hover:bg-[#B89B5E] transition-all duration-300 flex items-center justify-center space-x-2 group"
          >
            <span>BOOK A TEST DRIVE</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>

          <Link
            href="/models"
            className="w-full sm:w-auto px-8 py-4 border border-white/20 text-[#F2F0EB] text-xs uppercase tracking-[0.25em] font-light hover:border-[#B89B5E] hover:text-[#B89B5E] transition-colors"
          >
            EXPLORE THE COLLECTION
          </Link>
        </motion.div>
      </div>
    </section>
  );
}