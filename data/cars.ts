export interface CarColor {
  name: string;
  hex: string;
  image: string;
  finish: string;
}

export interface SpecificationCategory {
  category: string;
  items: { label: string; value: string }[];
}

export interface HighlightFeature {
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

export interface Vehicle {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  category: string;
  price: string;
  priceNumeric: number;
  heroImage: string;
  secondaryImage: string;
  stats: {
    horsepower: number;
    horsepowerLabel: string;
    acceleration: string;
    accelerationLabel: string;
    topSpeed: string;
    topSpeedLabel: string;
    rangeOrTorque: string;
    rangeOrTorqueLabel: string;
  };
  overview: string;
  narrative: string[];
  colors: CarColor[];
  exteriorHighlights: HighlightFeature[];
  interiorHighlights: HighlightFeature[];
  technologyHighlights: HighlightFeature[];
  specifications: SpecificationCategory[];
  gallery: { url: string; caption: string; aspect?: string }[];
}

export const VEHICLES: Vehicle[] = [
  {
    slug: 'v1',
    name: 'VÉLOCÉ V1',
    shortName: 'V1',
    tagline: 'The Flagship Hyper-Tourer. Pure analog soul married to hyper-hybrid velocity.',
    category: 'Flagship Hyper-Tourer',
    price: '$2,850,000',
    priceNumeric: 2850000,
    heroImage: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=2000&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?q=80&w=2000&auto=format&fit=crop',
    stats: {
      horsepower: 620,
      horsepowerLabel: 'HORSEPOWER',
      acceleration: '3.1 SEC',
      accelerationLabel: '0–100 KM/H',
      topSpeed: '312 KM/H',
      topSpeedLabel: 'TOP SPEED',
      rangeOrTorque: '780 NM',
      rangeOrTorqueLabel: 'PEAK TORQUE',
    },
    overview: 'Engineered as our magnum opus, the V1 is an uncompromising testament to mechanical perfection. Every curve serves aerodynamic laminar flow, sculpted by wind tunnels and refined by hand artisans.',
    narrative: [
      'The VÉLOCÉ V1 represents an uncompromising bridge between classical mechanical sensation and modern aerospace materials. At its heart beats a bespoke 4.0-liter twin-turbocharged flat-plane V8, hand-assembled in our Modena atelier and augmented by an axial-flux kinetic e-motor.',
      'Inside, modern digital distractions vanish. Polished titanium toggles, hand-stitched Tuscan aniline leather, and open-pore forged carbon monocoque create a tactile sanctuary where the driver is not merely a passenger, but the central instrument of velocity.',
    ],
    colors: [
      {
        name: 'Obsidian Noir',
        hex: '#0D0D0E',
        finish: 'Deep Satin Metallic',
        image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=2000&auto=format&fit=crop',
      },
      {
        name: 'Liquid Argentum',
        hex: '#9DA2A6',
        finish: 'Liquid Metal Anodized',
        image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop',
      },
      {
        name: 'Aureum Champagne',
        hex: '#B89B5E',
        finish: 'Bespoke Muted Gold',
        image: 'https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?q=80&w=2000&auto=format&fit=crop',
      },
      {
        name: 'Verde Monolith',
        hex: '#112219',
        finish: 'Heritage Deep Racing Green',
        image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2000&auto=format&fit=crop',
      },
    ],
    exteriorHighlights: [
      {
        title: 'Active Venturi Channels',
        subtitle: 'Passive Ground Effect Mastery',
        description: 'Underbody floor channels pull the chassis to the asphalt without the aerodynamic drag penalty of massive wings, generating 580 kg of clean downforce.',
        image: 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?q=80&w=1600&auto=format&fit=crop',
      },
      {
        title: 'Forged Carbon Monocoque',
        subtitle: 'Sub-1,500 kg Structural Architecture',
        description: 'Constructed from single-piece autoclaved carbon composite with integrated titanium mounting points, providing 42,000 Nm/deg of torsional rigidity.',
        image: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=1600&auto=format&fit=crop',
      },
    ],
    interiorHighlights: [
      {
        title: 'Analogue Chronograph Cluster',
        subtitle: 'Swiss Horology Engineering',
        description: 'A physical tachometer crafted from sapphire glass and CNC-machined titanium, operating with jewel bearings and backlit by warm-white micro-LEDs.',
        image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=1600&auto=format&fit=crop',
      },
      {
        title: 'Tuscan Full-Grain Aniline',
        subtitle: 'Zero-Artificial Treatment',
        description: 'Vegetable-tanned leather sourced from regenerative Tuscan pastures, left unembossed to retain the natural grain and breathable micro-texture.',
        image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=1600&auto=format&fit=crop',
      },
    ],
    technologyHighlights: [
      {
        title: 'Axial-Flux Hybrid Vectoring',
        subtitle: 'Zero-Latency Torque Deployment',
        description: 'A supplementary 140 HP axial electric motor on the front axle delivers instantaneous torque fill during gear transitions, erasing turbo lag completely.',
        image: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?q=80&w=1600&auto=format&fit=crop',
      },
      {
        title: 'Brembo Carbon-Silicon Brakes',
        subtitle: '410mm Front / 390mm Rear Rotors',
        description: '10-piston front monobloc calipers clamping composite ceramic discs, maintaining thermal stability under continuous 1.6G deceleration.',
        image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=1600&auto=format&fit=crop',
      },
    ],
    specifications: [
      {
        category: 'Powertrain & Drivetrain',
        items: [
          { label: 'Combustion Engine', value: '4.0L Twin-Turbo 90° V8 Flat-Plane Crank' },
          { label: 'Hybrid Drive', value: 'Single Axial-Flux Front Motor (48V 14 kWh)' },
          { label: 'Combined Power', value: '620 HP @ 7,800 RPM' },
          { label: 'Peak Torque', value: '780 Nm @ 2,200 – 6,400 RPM' },
          { label: 'Transmission', value: '8-Speed Seamless Dual-Clutch with Paddle Shift' },
          { label: 'Drivetrain', value: 'Rear-Bias All-Wheel Drive with E-Differential' },
        ],
      },
      {
        category: 'Chassis & Dynamics',
        items: [
          { label: 'Chassis', value: 'Full Carbon Fiber Monocoque with Aluminum Subframes' },
          { label: 'Suspension', value: 'Pushrod Double Wishbone with Active Magnetorheological Dampers' },
          { label: 'Steering', value: 'Electro-Hydraulic Rack & Pinion (11.4:1 ratio)' },
          { label: 'Kerb Weight', value: '1,485 kg (3,274 lbs)' },
          { label: 'Weight Distribution', value: '44% Front / 56% Rear' },
        ],
      },
      {
        category: 'Dimensions & Capacities',
        items: [
          { label: 'Length', value: '4,780 mm' },
          { label: 'Width (with mirrors)', value: '2,040 mm' },
          { label: 'Height', value: '1,195 mm' },
          { label: 'Wheelbase', value: '2,740 mm' },
          { label: 'Fuel Capacity', value: '75 Liters' },
          { label: 'Luggage Volume', value: '180 Liters (Tailored Bespoke Leather Set)' },
        ],
      },
    ],
    gallery: [
      { url: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=2000&auto=format&fit=crop', caption: 'Sculpted carbon profile against twilight' },
      { url: 'https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?q=80&w=2000&auto=format&fit=crop', caption: 'Rear light signature and carbon venturi tunnels' },
      { url: 'https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=1600&auto=format&fit=crop', caption: 'Driver-centric cockpit with sapphire crystal instrument cluster' },
      { url: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop', caption: 'Aerodynamic silhouette in wind tunnel testing' },
      { url: 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?q=80&w=1600&auto=format&fit=crop', caption: 'Active rear aero deck in high-downforce attitude' },
    ],
  },
  {
    slug: 'x1',
    name: 'VÉLOCÉ X1',
    shortName: 'X1',
    tagline: 'The All-Terrain Sovereign. Extreme high-speed capability across any continent or altitude.',
    category: 'Ultra-Luxury All-Terrain',
    price: '$1,450,000',
    priceNumeric: 1450000,
    heroImage: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=2000&auto=format&fit=crop',
    stats: {
      horsepower: 710,
      horsepowerLabel: 'HORSEPOWER',
      acceleration: '3.3 SEC',
      accelerationLabel: '0–100 KM/H',
      topSpeed: '305 KM/H',
      topSpeedLabel: 'TOP SPEED',
      rangeOrTorque: '900 NM',
      rangeOrTorqueLabel: 'TORQUE',
    },
    overview: 'The X1 transcends conventional SUV architecture. Combining a twin-turbo V8 powertrain with air suspension capable of 120mm ride-height articulation, it commands mountain passes and city grand boulevards with equal composure.',
    narrative: [
      'Built for transcontinental expeditions that know no physical borders, the X1 blends high-ground-clearance capability with the center of gravity of a grand tourer. Quad-chamber air springs continuously scan terrain 500 times per second.',
      'Inside, four individual heated and ventilated rear lounge thrones recline up to 42 degrees, separated by an acoustic glass partition and a refrigerated cellar for champagne.',
    ],
    colors: [
      {
        name: 'Nocturne Black',
        hex: '#080809',
        finish: 'Satin Carbon Metallic',
        image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop',
      },
      {
        name: 'Alpine Dolomite',
        hex: '#E5E7EB',
        finish: 'Pearl Frozen White',
        image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=2000&auto=format&fit=crop',
      },
      {
        name: 'Sahara Dune',
        hex: '#C8B28B',
        finish: 'Metallic Matte Sand',
        image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2000&auto=format&fit=crop',
      },
      {
        name: 'Nordic Slate',
        hex: '#3B424A',
        finish: 'Deep Arctic Mica',
        image: 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?q=80&w=1600&auto=format&fit=crop',
      },
    ],
    exteriorHighlights: [
      {
        title: 'Variable Air Dynamics',
        subtitle: '140mm to 260mm Ground Clearance',
        description: 'High-speed active aero slashes aerodynamic drag by dropping the car 40mm at highway speeds, while lifting up to 80mm for desert sands or alpine snow.',
        image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=1600&auto=format&fit=crop',
      },
      {
        title: 'Armored Carbon Underbelly',
        subtitle: 'Kevlar-Shielded Battery & Drivetrain',
        description: 'Multi-layer composite bash plates protect the chassis and vital systems from jagged stone impacts without penalizing highway acceleration.',
        image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1600&auto=format&fit=crop',
      },
    ],
    interiorHighlights: [
      {
        title: 'Executive Lounge Seating',
        subtitle: 'First-Class Transcontinental Cabin',
        description: 'Independent zero-gravity executive captain chairs with hot-stone massage programs and noise-canceling headrest audio transducers.',
        image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=1600&auto=format&fit=crop',
      },
      {
        title: 'Smoked Walnut & Cashmere',
        subtitle: 'Sustainable Natural Materials',
        description: 'Open-pore architectural walnut sustainably harvested from fallen European trees, complemented by pure Mongolian cashmere roof lining.',
        image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=1600&auto=format&fit=crop',
      },
    ],
    technologyHighlights: [
      {
        title: 'Active Anti-Roll Stabilization',
        subtitle: '48V Electronic Sway Control',
        description: 'Decouples stabilizer bars over rocky washboards for plush articulation, then locks within 20 milliseconds in tight bends to eliminate body roll.',
        image: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?q=80&w=1600&auto=format&fit=crop',
      },
      {
        title: 'Night-Vision LiDAR Mapping',
        subtitle: '300-Meter Forward Predictive Terrain',
        description: 'Dual infrared cameras and solid-state LiDAR paint real-time 3D elevation maps on the heads-up display even through dense fog or blizzards.',
        image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=1600&auto=format&fit=crop',
      },
    ],
    specifications: [
      {
        category: 'Powertrain & Performance',
        items: [
          { label: 'Engine', value: '4.4L Twin-Turbo Hot-V V8' },
          { label: 'Horsepower', value: '710 HP @ 6,500 RPM' },
          { label: 'Torque', value: '900 Nm @ 1,800 – 5,500 RPM' },
          { label: '0–100 km/h', value: '3.3 seconds' },
          { label: 'Top Speed', value: '305 km/h' },
          { label: 'Towing Capacity', value: '3,500 kg' },
        ],
      },
      {
        category: 'Chassis & All-Terrain',
        items: [
          { label: 'Suspension', value: 'Adaptive 3-Chamber Air Suspension with Roll-Control' },
          { label: 'Wading Depth', value: '850 mm' },
          { label: 'Approach / Departure', value: '31° / 29°' },
          { label: 'Braking', value: '420mm Carbon-Ceramic Discs with 10-Piston Calipers' },
          { label: 'Wheels', value: '23-inch Forged Alloy with Titanium Lug Nuts' },
        ],
      },
    ],
    gallery: [
      { url: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop', caption: 'X1 navigating high altitude mountain pass' },
      { url: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=2000&auto=format&fit=crop', caption: 'Sleek roofline and flared architectural fenders' },
      { url: 'https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=1600&auto=format&fit=crop', caption: 'Executive rear console and champagne refrigerator' },
      { url: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2000&auto=format&fit=crop', caption: 'Night stance under coastal starlight' },
    ],
  },
  {
    slug: 's1',
    name: 'VÉLOCÉ S1',
    shortName: 'S1',
    tagline: 'Silent Velocity. The pure electric grand coupe with instantaneous torque and aerospace silence.',
    category: 'Pure Electric Grand Coupe',
    price: '$1,920,000',
    priceNumeric: 1920000,
    heroImage: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2000&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?q=80&w=2000&auto=format&fit=crop',
    stats: {
      horsepower: 840,
      horsepowerLabel: 'HORSEPOWER',
      acceleration: '2.4 SEC',
      accelerationLabel: '0–100 KM/H',
      topSpeed: '325 KM/H',
      topSpeedLabel: 'TOP SPEED',
      rangeOrTorque: '620 KM',
      rangeOrTorqueLabel: 'WLTP RANGE',
    },
    overview: 'The S1 reimagines luxury propulsion without mechanical combustion. Utilizing quad axial-flux electric motors and a 900V silicon-carbide architecture, it accelerates in complete stillness while isolating passengers from external vibrations.',
    narrative: [
      'In the S1, the pursuit of power yields absolute calm. Four independent motors control each wheel millisecond by millisecond, eradicating understeer and granting physics-defying agility to a sleek five-meter silhouette.',
      'Our acoustic isolation chamber utilizes double-glazed electrochromic glass and active noise cancelation, turning continental voyages into meditative journeys of undisturbed reflection.',
    ],
    colors: [
      {
        name: 'Matte Carbon',
        hex: '#121314',
        finish: 'Raw Woven Carbon Matte',
        image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2000&auto=format&fit=crop',
      },
      {
        name: 'Liquid Titanium',
        hex: '#A3A8AE',
        finish: 'High-Gloss Polished Titanium',
        image: 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?q=80&w=2000&auto=format&fit=crop',
      },
      {
        name: 'Pale Gold Aurum',
        hex: '#C5AE82',
        finish: 'Satin Champagne Gold',
        image: 'https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?q=80&w=2000&auto=format&fit=crop',
      },
      {
        name: 'Cobalt Nocturne',
        hex: '#0A1826',
        finish: 'Midnight Blue Pearl',
        image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=2000&auto=format&fit=crop',
      },
    ],
    exteriorHighlights: [
      {
        title: 'Cd 0.19 Aero Silhouette',
        subtitle: 'Lowest Drag in Automotive History',
        description: 'Flush cameras, hidden door actuators, and active rear diffusers channel air around the cabin with aerodynamic friction near aerospace levels.',
        image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1600&auto=format&fit=crop',
      },
      {
        title: 'Electrochromic Canopy',
        subtitle: 'Variable Opacity Glass Roof',
        description: 'Micro-crystal liquid polymers switch from 99% UV-blocking mirror finish to crystal transparent sky views at the touch of an aluminum slider.',
        image: 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?q=80&w=1600&auto=format&fit=crop',
      },
    ],
    interiorHighlights: [
      {
        title: 'Continuous Curved OLED',
        subtitle: 'Paper-Thin Organic Light Display',
        description: 'A seamless 38-inch curved display integrated behind smoked glass that appears only when illuminated, retaining clean minimalist design when idle.',
        image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=1600&auto=format&fit=crop',
      },
      {
        title: 'Acoustic Sound Cloaking',
        subtitle: 'Active Anti-Phase Neutralization',
        description: '28 microphones sample road vibration and project inverted acoustic waves through 32 studio-grade Bowers transducers.',
        image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=1600&auto=format&fit=crop',
      },
    ],
    technologyHighlights: [
      {
        title: '900V Ultra-Fast Architecture',
        subtitle: '10% to 80% Charge in 12 Minutes',
        description: 'Solid-state electrolyte battery chemistry supporting up to 400 kW DC charging speeds without thermal degradation.',
        image: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?q=80&w=1600&auto=format&fit=crop',
      },
      {
        title: 'Millisecond Torque Vectoring',
        subtitle: 'Independent 4-Motor Precision',
        description: 'Instantaneous torque delivery distributed across all four corners ensures laser-sharp turn-in and total traction in wet or icy surfaces.',
        image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=1600&auto=format&fit=crop',
      },
    ],
    specifications: [
      {
        category: 'Battery & Electric Drive',
        items: [
          { label: 'Architecture', value: '900V Silicon Carbide Inverters' },
          { label: 'Motors', value: 'Quad Permanent Magnet Axial-Flux Motors' },
          { label: 'Total Output', value: '840 HP (626 kW)' },
          { label: 'Torque', value: '1,150 Nm Instantaneous' },
          { label: 'Battery Capacity', value: '108 kWh Solid-State Hybrid Pack' },
          { label: 'Charging Speed', value: 'Up to 400 kW DC Fast Charging' },
        ],
      },
      {
        category: 'Chassis & Dimensions',
        items: [
          { label: 'Length', value: '5,020 mm' },
          { label: 'Width', value: '1,980 mm' },
          { label: 'Drag Coefficient', value: '0.19 Cd' },
          { label: 'Kerb Weight', value: '2,090 kg' },
          { label: 'Range (WLTP)', value: '620 km (385 miles)' },
        ],
      },
    ],
    gallery: [
      { url: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2000&auto=format&fit=crop', caption: 'S1 aerodynamic fastback in evening mist' },
      { url: 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?q=80&w=2000&auto=format&fit=crop', caption: 'Illuminated front light blade cutting darkness' },
      { url: 'https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=1600&auto=format&fit=crop', caption: 'Minimalist cockpit with open-pore ash timber' },
      { url: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=2000&auto=format&fit=crop', caption: 'Sleek profile under architectural lighting' },
    ],
  },
  {
    slug: 'gt',
    name: 'VÉLOCÉ GT',
    shortName: 'GT',
    tagline: 'The Art of Continental Crossing. Classic grand touring proportions built for cross-European odysseys.',
    category: 'Transcontinental Gran Turismo',
    price: '$1,680,000',
    priceNumeric: 1680000,
    heroImage: 'https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?q=80&w=2000&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=2000&auto=format&fit=crop',
    stats: {
      horsepower: 680,
      horsepowerLabel: 'HORSEPOWER',
      acceleration: '2.9 SEC',
      accelerationLabel: '0–100 KM/H',
      topSpeed: '335 KM/H',
      topSpeedLabel: 'TOP SPEED',
      rangeOrTorque: '820 NM',
      rangeOrTorqueLabel: 'TORQUE',
    },
    overview: 'A long bonnet, sculpted muscular haunches, and a symphony of twelve cylinders. The GT is an ode to the golden age of grand touring, engineered with modern lightweight metallurgy to cross whole continents in a single afternoon.',
    narrative: [
      'The VÉLOCÉ GT is crafted for drivers who believe the journey between Monaco and St. Moritz is sacred. Its front-mid mounted naturally-aspirated V12 sings up to 8,500 RPM, delivering power with poetic linearity.',
      'Fitted with luggage tailored to fit the rear deck seamlessly, the GT envelops you in glove-soft Connolly leather and custom-milled aluminum switches that click with watchmaker precision.',
    ],
    colors: [
      {
        name: 'Midnight Onyx',
        hex: '#0A0A0B',
        finish: 'Deep Gloss Piano Black',
        image: 'https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?q=80&w=2000&auto=format&fit=crop',
      },
      {
        name: 'Liquid Platinum',
        hex: '#D0D4D9',
        finish: 'Frosted Silver Silk',
        image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop',
      },
      {
        name: 'Muted Bronze',
        hex: '#9A7D54',
        finish: 'Warm Bronze Metallic',
        image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2000&auto=format&fit=crop',
      },
      {
        name: 'Rosso Velvet',
        hex: '#3D0D12',
        finish: 'Deep Wine Candy Coat',
        image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=2000&auto=format&fit=crop',
      },
    ],
    exteriorHighlights: [
      {
        title: 'Front-Mid Engine Proportions',
        subtitle: 'Classic Grand Tourer Stance',
        description: 'Engine set entirely behind the front axle line yields an instinctive 48:52 weight balance and an elongated bonnet of breathtaking elegance.',
        image: 'https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?q=80&w=1600&auto=format&fit=crop',
      },
      {
        title: 'Hand-Beaten Aluminum Skin',
        subtitle: 'Crafted by Italian Master Panel-Beaters',
        description: 'Superformed alloy body panels created using aerospace superplastic forming methods, eliminating visible panel gaps across the rear quarter.',
        image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=1600&auto=format&fit=crop',
      },
    ],
    interiorHighlights: [
      {
        title: 'Connolly Saddle Leather',
        subtitle: 'Diamond Quilted Craftsmanship',
        description: 'Finished with hand-rolled seams and contrasted stitching in warm champagne thread, conditioned to age with timeless patina.',
        image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=1600&auto=format&fit=crop',
      },
      {
        title: 'Machined Billet Knurling',
        subtitle: 'Tactile Dial Feedback',
        description: 'Every rotary control is cut from aircraft-grade aluminum billet with 0.2mm diamond knurling, providing weighted, satisfying mechanical feedback.',
        image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=1600&auto=format&fit=crop',
      },
    ],
    technologyHighlights: [
      {
        title: 'Titanium Inconel Exhaust',
        subtitle: 'Harmonic Resonance Valve Control',
        description: 'Electronically modulated butterfly valves open under acceleration to produce an operatic V12 resonance, quieting to a whisper on motorways.',
        image: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?q=80&w=1600&auto=format&fit=crop',
      },
      {
        title: 'Rear-Wheel Active Steering',
        subtitle: '3.5 Degrees of Counter-Phase',
        description: 'Shortens the perceived wheelbase in tight Alpine hairpins and extends virtual wheelbase at 250+ km/h autobahn speeds for unshakeable stability.',
        image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=1600&auto=format&fit=crop',
      },
    ],
    specifications: [
      {
        category: 'Engine & Performance',
        items: [
          { label: 'Engine Type', value: '5.2L Naturally Aspirated 65° V12' },
          { label: 'Max RPM', value: '8,500 RPM' },
          { label: 'Power', value: '680 HP @ 8,100 RPM' },
          { label: 'Torque', value: '820 Nm @ 4,800 RPM' },
          { label: '0–100 km/h', value: '2.9 seconds' },
          { label: 'Top Speed', value: '335 km/h' },
        ],
      },
      {
        category: 'Bespoke Amenities',
        items: [
          { label: 'Audio System', value: '1,400W 22-Speaker Burmester 3D Reference' },
          { label: 'Luggage Set', value: '4-Piece Schedoni Leather Set tailored to trunk' },
          { label: 'Fuel Tank', value: '92 Liters (Over 700km highway range)' },
          { label: 'Dry Weight', value: '1,620 kg' },
        ],
      },
    ],
    gallery: [
      { url: 'https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?q=80&w=2000&auto=format&fit=crop', caption: 'GT resting in Monaco harbour at dusk' },
      { url: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=2000&auto=format&fit=crop', caption: 'Sculpted muscular rear haunches and quad titanium tips' },
      { url: 'https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=1600&auto=format&fit=crop', caption: 'Billet aluminum center console and analog chronometers' },
      { url: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop', caption: 'Poised on the mountain switchbacks above Lake Como' },
    ],
  },
];

export function getVehicleBySlug(slug: string): Vehicle | undefined {
  return VEHICLES.find((v) => v.slug.toLowerCase() === slug.toLowerCase());
}

export function getAllVehicleSlugs(): string[] {
  return VEHICLES.map((v) => v.slug);
}