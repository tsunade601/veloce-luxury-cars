'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Clock, MapPin, Phone, Mail, ArrowRight, Shield } from 'lucide-react';
import { VEHICLES } from '@/data/cars';
import PageTransition from '@/components/PageTransition';
import SectionHeading from '@/components/SectionHeading';

const SHOWROOMS = [
  {
    city: 'Geneva',
    country: 'Switzerland',
    address: 'Rue du Rhône 42, 1204 Genève',
    phone: '+41 22 819 9000',
    email: 'geneva@veloce-atelier.com',
    hours: 'By Private Appointment · Mon–Sat 10:00–18:00',
  },
  {
    city: 'London',
    country: 'United Kingdom',
    address: '14 Berkeley Square, Mayfair, London W1J 6BQ',
    phone: '+44 20 7946 0192',
    email: 'mayfair@veloce-atelier.com',
    hours: 'By Private Appointment · Mon–Fri 09:30–18:30',
  },
  {
    city: 'Tokyo',
    country: 'Japan',
    address: '6-10-1 Roppongi, Minato-ku, Tokyo 106-6108',
    phone: '+81 3 5555 0148',
    email: 'tokyo@veloce-atelier.com',
    hours: 'By Private Appointment · Tue–Sun 11:00–19:00',
  },
  {
    city: 'New York',
    country: 'United States',
    address: '740 Madison Avenue, New York, NY 10065',
    phone: '+1 212 555 0199',
    email: 'newyork@veloce-atelier.com',
    hours: 'By Private Appointment · Mon–Sat 10:00–18:00',
  },
];

function ContactFormContent() {
  const searchParams = useSearchParams();
  const initialModelParam = searchParams.get('model');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    preferredModel: 'v1',
    preferredDate: '',
    preferredLocation: 'Geneva',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (initialModelParam) {
      const found = VEHICLES.find(
        (v) => v.slug.toLowerCase() === initialModelParam.toLowerCase()
      );
      if (found) {
        setFormData((prev) => ({ ...prev, preferredModel: found.slug }));
      }
    }
  }, [initialModelParam]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
      <div className="lg:col-span-7 bg-[#111111] border border-white/[0.08] p-8 md:p-12 relative overflow-hidden">
        <AnimatePresence mode="wait">
          {!isSubmitted ? (
            <motion.form
              key="form"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div>
                <span className="text-[10px] uppercase tracking-[0.35em] text-[#B89B5E] font-medium block mb-2">
                  VIP Test-Drive Request
                </span>
                <h3 className="font-serif text-3xl font-light text-[#F2F0EB] mb-2">
                  Arrange a Private Trial
                </h3>
                <p className="text-xs text-[#999999] font-light leading-relaxed mb-6">
                  Complimentary track trials and enclosed transport viewing can be arranged at any of our global ateliers or your private residence.
                </p>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-[0.2em] text-[#999999] mb-2 font-medium">
                  Full Legal Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Lord Sterling Vance"
                  className="w-full bg-[#18181A] border border-white/10 text-sm text-[#F2F0EB] px-4 py-3.5 focus:outline-none focus:border-[#B89B5E] transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[11px] uppercase tracking-[0.2em] text-[#999999] mb-2 font-medium">
                    Corporate / Personal Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="vance@heritage.ch"
                    className="w-full bg-[#18181A] border border-white/10 text-sm text-[#F2F0EB] px-4 py-3.5 focus:outline-none focus:border-[#B89B5E] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[11px] uppercase tracking-[0.2em] text-[#999999] mb-2 font-medium">
                    Direct Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+41 22 819 9000"
                    className="w-full bg-[#18181A] border border-white/10 text-sm text-[#F2F0EB] px-4 py-3.5 focus:outline-none focus:border-[#B89B5E] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[11px] uppercase tracking-[0.2em] text-[#999999] mb-2 font-medium">
                    Preferred Vehicle *
                  </label>
                  <select
                    name="preferredModel"
                    value={formData.preferredModel}
                    onChange={handleChange}
                    className="w-full bg-[#18181A] border border-white/10 text-sm text-[#F2F0EB] px-4 py-3.5 focus:outline-none focus:border-[#B89B5E] transition-colors"
                  >
                    {VEHICLES.map((car) => (
                      <option key={car.slug} value={car.slug} className="bg-[#18181A] text-[#F2F0EB]">
                        {car.name} ({car.stats.horsepower} HP)
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-[0.2em] text-[#999999] mb-2 font-medium">
                    Showroom Atelier *
                  </label>
                  <select
                    name="preferredLocation"
                    value={formData.preferredLocation}
                    onChange={handleChange}
                    className="w-full bg-[#18181A] border border-white/10 text-sm text-[#F2F0EB] px-4 py-3.5 focus:outline-none focus:border-[#B89B5E] transition-colors"
                  >
                    <option value="Geneva">Geneva Atelier (Switzerland)</option>
                    <option value="London">Mayfair Suite (London)</option>
                    <option value="Tokyo">Roppongi Atelier (Tokyo)</option>
                    <option value="New York">Madison Avenue (New York)</option>
                    <option value="Private Residence">Private Residence Delivery</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-[0.2em] text-[#999999] mb-2 font-medium">
                  Target Viewing Date
                </label>
                <input
                  type="date"
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleChange}
                  className="w-full bg-[#18181A] border border-white/10 text-sm text-[#F2F0EB] px-4 py-3.5 focus:outline-none focus:border-[#B89B5E] transition-colors"
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-[0.2em] text-[#999999] mb-2 font-medium">
                  Bespoke Notes or Commission Preferences
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Specify track trial requirements, private airstrip preferences, or custom coachbuilding requests..."
                  className="w-full bg-[#18181A] border border-white/10 text-sm text-[#F2F0EB] px-4 py-3.5 focus:outline-none focus:border-[#B89B5E] transition-colors"
                />
              </div>

              <div className="flex items-start space-x-3 text-xs text-[#999999]/70 pt-2">
                <Shield className="w-4 h-4 text-[#B89B5E] flex-shrink-0 mt-0.5" />
                <p className="text-[11px] font-light leading-relaxed">
                  Confidentiality guaranteed. All inquiries are managed under Swiss non-disclosure standards by your dedicated personal client director.
                </p>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-[#F2F0EB] text-[#090909] text-xs uppercase tracking-[0.3em] font-medium hover:bg-[#B89B5E] transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50"
              >
                <span>{isSubmitting ? 'TRANSMITTING INQUIRY...' : 'REQUEST TEST-DRIVE DOSSIER'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.form>
          ) : (
            <motion.div
              key="confirmation"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="py-12 text-center"
            >
              <div className="w-16 h-16 rounded-full bg-[#B89B5E]/10 border border-[#B89B5E]/30 flex items-center justify-center text-[#B89B5E] mx-auto mb-6">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <span className="text-[10px] uppercase tracking-[0.3em] text-[#B89B5E] block mb-2">
                Protocol Initiated
              </span>
              <h3 className="font-serif text-3xl font-light text-[#F2F0EB] mb-4">
                Thank You, {formData.name || 'Valued Guest'}.
              </h3>
              <p className="text-sm text-[#999999] font-light leading-relaxed max-w-md mx-auto mb-8">
                Your dossier has been routed to our Senior Client Director at the {formData.preferredLocation} Atelier. We will reach out within four business hours to finalize your track trial itinerary.
              </p>

              <div className="p-4 bg-white/[0.02] border border-white/5 max-w-sm mx-auto text-left text-xs mb-8">
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-[#999999]">Vehicle:</span>
                  <span className="text-[#F2F0EB] font-serif uppercase">
                    {VEHICLES.find((v) => v.slug === formData.preferredModel)?.name || 'VÉLOCÉ V1'}
                  </span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-[#999999]">Atelier:</span>
                  <span className="text-[#F2F0EB]">{formData.preferredLocation}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-[#999999]">Direct Contact:</span>
                  <span className="text-[#B89B5E]">{formData.email}</span>
                </div>
              </div>

              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    preferredModel: 'v1',
                    preferredDate: '',
                    preferredLocation: 'Geneva',
                    message: '',
                  });
                }}
                className="text-xs uppercase tracking-[0.25em] text-[#B89B5E] hover:text-[#F2F0EB] transition-colors"
              >
                Submit another inquiry
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="lg:col-span-5 space-y-8">
        <div>
          <span className="text-[10px] uppercase tracking-[0.35em] text-[#B89B5E] font-medium block mb-2">
            Global Network
          </span>
          <h3 className="font-serif text-3xl font-light text-[#F2F0EB] mb-4">
            Private Ateliers
          </h3>
          <p className="text-xs text-[#999999] font-light leading-relaxed">
            Every VÉLOCÉ atelier is an acoustic sanctuary designed by award-winning architects, featuring private configuration suites, material libraries, and VIP tasting salons.
          </p>
        </div>

        <div className="space-y-6">
          {SHOWROOMS.map((room) => (
            <div
              key={room.city}
              className="p-6 bg-[#111111] border border-white/[0.06] hover:border-[#B89B5E]/30 transition-colors"
            >
              <div className="flex items-baseline justify-between mb-3">
                <h4 className="font-serif text-2xl font-light text-[#F2F0EB]">
                  {room.city}
                </h4>
                <span className="text-[10px] uppercase tracking-widest text-[#B89B5E]">
                  {room.country}
                </span>
              </div>

              <div className="space-y-2 text-xs text-[#999999] font-light">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-3.5 h-3.5 text-[#B89B5E] flex-shrink-0" />
                  <span>{room.address}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-3.5 h-3.5 text-[#B89B5E] flex-shrink-0" />
                  <span>{room.phone}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-3.5 h-3.5 text-[#B89B5E] flex-shrink-0" />
                  <span>{room.email}</span>
                </div>
                <div className="flex items-center space-x-2 text-[11px] text-white/50 pt-1">
                  <Clock className="w-3.5 h-3.5 text-[#B89B5E] flex-shrink-0" />
                  <span>{room.hours}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-[#090909] text-[#F2F0EB] pt-32 md:pt-40 pb-28 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            category="Client Concierge"
            title="Initiate Your Commission"
            description="Our client liaison team is at your disposal to schedule closed-circuit test drives, atelier tours, or bespoke vehicle configuration sessions."
          />

          <Suspense fallback={<div className="text-[#999999] text-xs">Loading concierge portal...</div>}>
            <ContactFormContent />
          </Suspense>
        </div>
      </div>
    </PageTransition>
  );
}