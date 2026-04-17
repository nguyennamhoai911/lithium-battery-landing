import { Battery, Zap, Shield, Settings, Leaf, Cpu, Award, Users } from 'lucide-react';

export interface ProductModel {
  id: string;
  name: string;
  voltage: string;
  capacity: string;
  application: string[];
  dimensions: string;
  weight: string;
  cycleLife: string;
  image: string;
  featured?: boolean;
}

export const PRODUCT_LINE_DATA = {
  title: "Lithium Batteries for Electric Sightseeing Vehicles",
  subtitle: "Bình Ắc Quy Lithium Cho Xe Điện Du Lịch",
  heroDescription: "High-performance energy solutions engineered for reliability, longevity, and efficiency in the hospitality and tourism sectors. Powering the next generation of eco-friendly transport.",
  keyStats: [
    { label: "Cycle Life", value: "3500+", suffix: "Cycles", icon: <Battery className="w-5 h-5" /> },
    { label: "Charge Speed", value: "2", suffix: "Hrs (Typical)", icon: <Zap className="w-5 h-5" /> },
    { label: "Safety", value: "BMS", suffix: "Smart 5.0", icon: <Shield className="w-5 h-5" /> },
    { label: "Weight", value: "1/3", suffix: "of Lead Acid", icon: <Settings className="w-5 h-5" /> },
  ],
  sections: [
    { id: 'overview', label: 'Overview' },
    { id: 'products', label: 'Products' },
    { id: 'applications', label: 'Applications' },
    { id: 'technology', label: 'Technology' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contact' },
  ]
};

export const PRODUCT_MODELS: ProductModel[] = [
  {
    id: 'pkg-ls-48100',
    name: "PKG-LS 48V 100Ah",
    voltage: "48V",
    capacity: "100Ah / 4.8kWh",
    application: ["Golf Carts", "Buggy", "Utility Vehicles"],
    dimensions: "380 x 240 x 220 mm",
    weight: "42 kg",
    cycleLife: "3500 Cycles @ 80% DOD",
    image: "/battery-48v-100ah.png",
    featured: true
  },
  {
    id: 'pkg-ls-48200',
    name: "PKG-LS 48V 200Ah",
    voltage: "48V",
    capacity: "200Ah / 9.6kWh",
    application: ["Resort Buses", "Sightseeing Trams"],
    dimensions: "520 x 270 x 220 mm",
    weight: "78 kg",
    cycleLife: "4000 Cycles @ 80% DOD",
    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 'pkg-ls-72150',
    name: "PKG-LS 72V 150Ah",
    voltage: "72V",
    capacity: "150Ah / 10.8kWh",
    application: ["Multi-passenger Shuttle", "Electric Buses"],
    dimensions: "610 x 320 x 240 mm",
    weight: "95 kg",
    cycleLife: "3500 Cycles @ 80% DOD",
    image: "https://images.unsplash.com/photo-1617650728468-8581e439c864?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 'pkg-ls-80210',
    name: "PKG-LS 80V 210Ah",
    voltage: "80V",
    capacity: "210Ah / 16.8kWh",
    application: ["Heavy Duty Utility", "Industrial Personnel Carriers"],
    dimensions: "720 x 400 x 280 mm",
    weight: "140 kg",
    cycleLife: "4500 Cycles @ 80% DOD",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=800"
  }
];

export const APPLICATIONS = [
  {
    title: "Eco-Resorts & Hospitality",
    desc: "Silent and emission-free transport for guests. Reliable performance for all-day shuttle services.",
    image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Theme Parks & Tourism",
    desc: "Powering sightseeing vehicles with high-capacity batteries that handle multiple charging cycles per day.",
    image: "https://images.unsplash.com/photo-1563299796-17596ed6b017?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Corporate & Industrial Campuses",
    desc: "Efficient moving of personnel across large facilities with minimal maintenance and high durability.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800"
  }
];

export const TECH_HIGHLIGHTS = [
  {
    title: "Smart BMS 5.0",
    desc: "Proprietary battery management system with real-time monitoring of cell voltage, temperature, and SOC/SOH.",
    icon: <Cpu className="w-8 h-8 text-pkg-red" />
  },
  {
    title: "Thermal Management",
    desc: "Advanced cooling architecture ensures stable performance even in peak summer temperatures and high-load usage.",
    icon: <Settings className="w-8 h-8 text-pkg-red" />
  },
  {
    title: "Eco-Efficiency",
    desc: "Clean energy storage that significantly reduces carbon footprint compared to lead-acid or combustion alternatives.",
    icon: <Leaf className="w-8 h-8 text-pkg-red" />
  }
];

export const CREDIBILITY_FACTORS = [
  {
    title: "Custom Engineering",
    desc: "Tailoring voltage and capacity to meet specific OEM vehicle requirements.",
    icon: <Award className="w-10 h-10" />
  },
  {
    title: "Technical Support",
    desc: "Dedicated engineering team for installation, integration, and diagnostics.",
    icon: <Users className="w-10 h-10" />
  }
];
