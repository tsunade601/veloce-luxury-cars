import React from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { VEHICLES, getVehicleBySlug, getAllVehicleSlugs } from '@/data/cars';
import ColorSelector from '@/components/ColorSelector';

interface PageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return getAllVehicleSlugs().map((slug) => ({
    slug: slug,
  }));
}

export function generateMetadata({ params }: PageProps) {
  const vehicle = getVehicleBySlug(params.slug);
  if (!vehicle) return { title: 'Vehicle Not Found — VÉLOCÉ' };

  return {
    title: `${vehicle.name} — VÉLOCÉ`,
    description: `${vehicle.tagline} Discover technical specifications, craftsmanship, and performance metrics for the ${vehicle.name}.`,
    openGraph: {
      title: `${vehicle.name} — VÉLOCÉ Atelier`,
      description: vehicle.overview,
      images: [{ url: vehicle.heroImage }],
    },
  };
}

export default function VehicleDetailPage({ params }: PageProps) {
  const vehicle = getVehicleBySlug(params.slug);

  if (!vehicle) {
    notFound();
  }

  const currentIndex = VEHICLES.findIndex((v) => v.slug === vehicle.slug);
  const nextVehicle = VEHICLES[(currentIndex + 1) % VEHICLES.length];

  return (
    <div className="bg-[#090909] text-[#F2F0EB]">
      {/* 1. FULL-SCREEN HERO */}
      <section className="relative min-h-screen flex flex-col justify-between pt-32 pb-16 px-6 md:px-12 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={vehicle.heroImage}
            alt={vehicle.name}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center brightness-[0.75]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#090909] via-black/40 to-black/70" />
          <div className="absolute inset-0 bg-radial-vignette opacity-80" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <Link
            href="/models"
            className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-[#999999] hover:text-[#B89B5E] transition-colors mb-6 group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Return to Collection</span>
          </Link>
          <div className="flex items-center space-x-3 text-xs uppercase tracking-[0.35em] text-[#B89B5E]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B89B5E]" />
            <span>{vehicle.category}</span>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full my-auto py-12">
          <div className="max-w-4xl">
            <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-light text-[#F2F0EB] tracking-tight leading-[0.95] mb-6">
              {vehicle.name}
            </h1>
            <p className="font-serif text-xl sm:text-2xl md:text-3xl text-[#F2F0EB]/90 font-light italic mb-8 max-w-2xl">
              {vehicle.tagline}
            </p>
            <p className="text-sm font-mono tracking-widest text-[#B89B5E] mb-10">
              Acquisition from {vehicle.price}
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href={`/contact?model=${vehicle.slug}`}
                className="px-8 py-4 bg-[#F2F0EB] text-[#090909] text-xs uppercase tracking-[0.25em] font-medium hover:bg-[#B89B5E] transition-all duration-300"
              >
                RESERVE COMMISSION
              </Link>
              <a
                href="#specifications"
                className="px-8 py-4 border border-white/20 text-[#F2F0EB] text-xs uppercase tracking-[0.25em] font-light hover:border-[#B89B5E] hover:text-[#B89B5E] transition-colors"
              >
                VIEW SPECIFICATIONS
              </a>
            </div>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full pt-8 border-t border-white/[0.08] grid grid-cols-2 sm:grid-cols-4 gap-6 text-left">
          <div>
            <span className="font-serif text-3xl md:text-4xl font-light text-[#F2F0EB]">
              {vehicle.stats.horsepower} HP
            </span>
            <span className="block text-[9px] uppercase tracking-[0.2em] text-[#B89B5E]">
              {vehicle.stats.horsepowerLabel}
            </span>
          </div>

          <div>
            <span className="font-serif text-3xl md:text-4xl font-light text-[#F2F0EB]">
              {vehicle.stats.acceleration}
            </span>
            <span className="block text-[9px] uppercase tracking-[0.2em] text-[#B89B5E]">
              {vehicle.stats.accelerationLabel}
            </span>
          </div>

          <div>
            <span className="font-serif text-3xl md:text-4xl font-light text-[#F2F0EB]">
              {vehicle.stats.topSpeed}
            </span>
            <span className="block text-[9px] uppercase tracking-[0.2em] text-[#B89B5E]">
              {vehicle.stats.topSpeedLabel}
            </span>
          </div>

          <div>
            <span className="font-serif text-3xl md:text-4xl font-light text-[#F2F0EB]">
              {vehicle.stats.rangeOrTorque}
            </span>
            <span className="block text-[9px] uppercase tracking-[0.2em] text-[#B89B5E]">
              {vehicle.stats.rangeOrTorqueLabel}
            </span>
          </div>
        </div>
      </section>

      {/* 2. EDITORIAL NARRATIVE & OVERVIEW */}
      <section className="py-24 md:py-36 px-6 md:px-12 max-w-5xl mx-auto">
        <div className="space-y-6">
          <span className="text-[10px] uppercase tracking-[0.35em] text-[#B89B5E] font-medium block">
            The Commission Philosophy
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-light text-[#F2F0EB] leading-tight">
            {vehicle.overview}
          </h2>
          <div className="pt-6 grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-[#999999] leading-relaxed font-light">
            {vehicle.narrative.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE BESPOKE COLOR SELECTOR */}
      <section className="py-16 md:py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <ColorSelector colors={vehicle.colors} vehicleName={vehicle.name} />
      </section>

      {/* 4. EXTERIOR SHOWCASE */}
      <section className="py-24 md:py-36 bg-[#0B0B0C] border-y border-white/[0.06] px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-16">
            <span className="text-[10px] uppercase tracking-[0.35em] text-[#B89B5E] font-medium block mb-2">
              Aerodynamics & Architecture
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-light text-[#F2F0EB]">
              Sculpted by Pressure & Velocity
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
            {vehicle.exteriorHighlights.map((feat) => (
              <div
                key={feat.title}
                className="bg-[#111111] border border-white/[0.06] overflow-hidden group"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <Image
                    src={feat.image}
                    alt={feat.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent" />
                </div>
                <div className="p-8">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#B89B5E] block mb-1">
                    {feat.subtitle}
                  </span>
                  <h3 className="font-serif text-2xl font-light text-[#F2F0EB] mb-3">
                    {feat.title}
                  </h3>
                  <p className="text-xs text-[#999999] leading-relaxed font-light">
                    {feat.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. INTERIOR CRAFTSMANSHIP */}
      <section className="py-24 md:py-36 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="max-w-2xl mb-16">
          <span className="text-[10px] uppercase tracking-[0.35em] text-[#B89B5E] font-medium block mb-2">
            Tactile Sanctuary
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-light text-[#F2F0EB]">
            Horology Standards in the Cockpit
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
          {vehicle.interiorHighlights.map((feat) => (
            <div
              key={feat.title}
              className="bg-[#111111] border border-white/[0.06] overflow-hidden group"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <Image
                  src={feat.image}
                  alt={feat.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent" />
              </div>
              <div className="p-8">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#B89B5E] block mb-1">
                  {feat.subtitle}
                </span>
                <h3 className="font-serif text-2xl font-light text-[#F2F0EB] mb-3">
                  {feat.title}
                </h3>
                <p className="text-xs text-[#999999] leading-relaxed font-light">
                  {feat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. TECHNOLOGY & INNOVATION */}
      <section className="py-24 md:py-36 bg-[#0B0B0C] border-y border-white/[0.06] px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-16">
            <span className="text-[10px] uppercase tracking-[0.35em] text-[#B89B5E] font-medium block mb-2">
              Advanced Engineering
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-light text-[#F2F0EB]">
              Zero-Latency Propulsion & Control
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
            {vehicle.technologyHighlights.map((feat) => (
              <div
                key={feat.title}
                className="bg-[#111111] border border-white/[0.06] overflow-hidden group"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <Image
                    src={feat.image}
                    alt={feat.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent" />
                </div>
                <div className="p-8">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#B89B5E] block mb-1">
                    {feat.subtitle}
                  </span>
                  <h3 className="font-serif text-2xl font-light text-[#F2F0EB] mb-3">
                    {feat.title}
                  </h3>
                  <p className="text-xs text-[#999999] leading-relaxed font-light">
                    {feat.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FULL TECHNICAL SPECIFICATIONS */}
      <section id="specifications" className="py-24 md:py-36 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="text-[10px] uppercase tracking-[0.35em] text-[#B89B5E] font-medium block mb-2">
            Homologation & Data
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-light text-[#F2F0EB]">
            Technical Specifications
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vehicle.specifications.map((group) => (
            <div
              key={group.category}
              className="p-8 bg-white/[0.02] border border-white/[0.06]"
            >
              <h3 className="text-xs uppercase tracking-[0.3em] text-[#B89B5E] font-medium mb-6 pb-3 border-b border-white/[0.08]">
                {group.category}
              </h3>
              <dl className="space-y-4">
                {group.items.map((item) => (
                  <div key={item.label} className="flex justify-between items-baseline text-xs">
                    <dt className="text-[#999999] font-light">{item.label}</dt>
                    <dd className="font-mono text-[#F2F0EB] font-normal text-right pl-4">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>
      </section>

      {/* 8. TEST DRIVE CTA & NEXT VEHICLE */}
      <section className="py-24 bg-[#080808] border-t border-white/[0.06] px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <span className="text-[10px] uppercase tracking-[0.35em] text-[#B89B5E] block mb-2">
              Bespoke Viewing
            </span>
            <h3 className="font-serif text-3xl md:text-4xl font-light text-[#F2F0EB]">
              Configure {vehicle.name}
            </h3>
            <p className="text-xs text-[#999999] mt-2 font-light">
              Connect with your dedicated regional client director for private track trials.
            </p>
          </div>

          <div className="flex items-center space-x-4">
            <Link
              href={`/contact?model=${vehicle.slug}`}
              className="px-8 py-4 bg-[#F2F0EB] text-[#090909] text-xs uppercase tracking-[0.25em] font-medium hover:bg-[#B89B5E] transition-colors"
            >
              BOOK TEST DRIVE
            </Link>

            <Link
              href={`/models/${nextVehicle.slug}`}
              className="px-6 py-4 border border-white/10 text-xs uppercase tracking-[0.2em] text-[#999999] hover:text-[#F2F0EB] hover:border-white/30 transition-colors flex items-center space-x-2"
            >
              <span>Next: {nextVehicle.shortName}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}