# VÉLOCÉ — Luxury Automotive Digital Experience

> *Performance, refined.*

A digital flagship experience for **VÉLOCÉ**, a fictional ultra-luxury automotive atelier based in Geneva and Modena. Designed with editorial aesthetics, dark monochrome tones, muted gold accents, and cinema-grade scroll-driven interactions.

---

## Brand Identity & Aesthetic
- **Philosophy**: An uncompromising fusion of analog soul, aerospace aerodynamics, and Swiss horology standards.
- **Palette**:
  - Near Black: `#090909`
  - Warm White: `#F2F0EB`
  - Atelier Gray: `#999999`
  - Muted Gold: `#B89B5E`

---

## Architectural Highlights & Features

### 1. Home (`/`)
- **Branded Loading Sequence**: Minimalist brand typography and gold telemetry loading transition.
- **Full-Screen Parallax Hero**: Cinematic car reveal with staggered typography, live atelier coordinates, and smooth scroll indicator.
- **Atelier Creed / Brand Statement**: Large editorial typography scroll animation: *“We don’t build cars for attention. We build them for the moment after it.”*
- **Flagship Vehicle (VÉLOCÉ V1)**: Dedicated showcase with animated telemetry counters (620 HP, 3.1s 0–100 km/h, 312 km/h top speed).
- **Telemetry & Performance**: Animated metric counters for lateral G-force (1.6G), shift latency (12ms), and laminar downforce (580 kg).
- **Editorial Model Lineup**: Asymmetrical grid for the 4 fictional models with hover scaling, coordinate tags, and micro-interactions.
- **Core Tenets / Philosophy**: Four distinct deep dives into *Precision*, *Power*, *Craft*, and *Aerodynamics*.
- **Visual Archive Gallery**: High-resolution photography carousel with desktop scroll controls and swipeable mobile layout.
- **Cinematic CTA**: Seamless gateway to private viewing and test-drive reservations.

### 2. Collection (`/models`)
- Interactive vehicle filtering by category: *All*, *Hyper-Tourer*, *All-Terrain*, *Electric*, *Gran Turismo*.
- High-impact editorial cards featuring specifications, powertrain metrics, and pricing.

### 3. Vehicle Deep Dive (`/models/[slug]`)
- Dynamic routes for all 4 models:
  - **VÉLOCÉ V1**: Flagship Hyper-Tourer (620 HP, 3.1s 0–100 km/h, 312 km/h)
  - **VÉLOCÉ X1**: Ultra-Luxury All-Terrain SUV (710 HP, 3.3s 0–100 km/h, 305 km/h)
  - **VÉLOCÉ S1**: Pure Electric Grand Coupe (840 HP, 2.4s 0–100 km/h, 325 km/h)
  - **VÉLOCÉ GT**: Transcontinental V12 Gran Turismo (680 HP, 2.9s 0–100 km/h, 335 km/h)
- **Interactive Bespoke Paintwork Configurator**: Real-time crossfade between bespoke exterior finishes and hues with interactive swatches.
- **Exterior & Interior Highlights**: Detailed breakdown of active venturi aerodynamics, Connolly saddle hides, and sapphire crystal chronometer clusters.
- **Technical Specifications**: Homologated data tables covering powertrain, chassis dynamics, dimensions, and bespoke amenities.

### 4. Heritage & Philosophy (`/about`)
- Brand story covering the founding of the Geneva atelier.
- The three pillars of coachbuilding: Sculptural Aerodynamics, Aerospace Metallurgy, and Saddle & Horology Craft.
- Interactive timeline spanning from the 2014 inception to current limited-run commissions.

### 5. Private Concierge & Test-Drive (`/contact`)
- Test-drive reservation portal with automatic model pre-selection via URL queries (`/contact?model=v1`).
- VIP dossier booking form with simulated transmission feedback and discrete confidentiality guarantee.
- Global Atelier directory with coordinates and contact channels for Geneva, London, Tokyo, and New York.

---

## Tech Stack
- **Framework**: [Next.js 14 (App Router)](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Motion & Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Smooth Scrolling**: [Lenis](https://github.com/darkroomengineering/lenis)
- **Icons**: [Lucide React](https://lucide.dev/)

---

## Getting Started

```bash
# Clone repository
git clone https://github.com/tsunade601/veloce-luxury-cars.git

# Enter project directory
cd veloce-luxury-cars

# Install dependencies
npm install

# Run local development server
npm run dev
```

Visit `http://localhost:3000` to experience the website.

---

## License
Proprietary design study for VÉLOCÉ Automotive S.A.
