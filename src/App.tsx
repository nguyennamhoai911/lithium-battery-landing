import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { 
  ChevronRight, 
  ArrowRight, 
  Zap, 
  Battery, 
  Shield, 
  Settings, 
  CheckCircle2, 
  Plus, 
  Minus,
  ExternalLink,
  Phone,
  Mail,
  Menu,
  X,
  ArrowUpRight
} from 'lucide-react';
import {
  PRODUCT_LINE_DATA,
  PRODUCT_MODELS,
  APPLICATIONS,
  TECH_HIGHLIGHTS,
  CREDIBILITY_FACTORS,
  ProductModel
} from './constants';

// --- Components ---

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-md py-4 shadow-sm border-b border-pkg-black/5' : 'bg-transparent py-8'}`}>
      <div className="section-container flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-pkg-red flex items-center justify-center font-display font-black text-white text-xl">P</div>
          <span className={`font-display font-bold text-2xl tracking-tighter transition-colors ${scrolled ? 'text-pkg-black' : 'text-pkg-black'}`}>
            PKG <span className="text-pkg-red">BATTERY</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {['Solutions', 'Products', 'Innovation', 'About', 'Support'].map((item) => (
            <a key={item} href="#" className="text-sm font-medium tracking-wide uppercase hover:text-pkg-red transition-colors">
              {item}
            </a>
          ))}
          <button className="btn-secondary py-2.5 px-6 text-sm">Portals</button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-pkg-black" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-pkg-black/5 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-6">
              {['Solutions', 'Products', 'Innovation', 'About', 'Support'].map((item) => (
                <a key={item} href="#" className="font-display font-medium text-lg border-b border-pkg-black/5 pb-2">
                  {item}
                </a>
              ))}
              <button className="btn-primary w-full">Contact Support</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const StickySubmenu = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [isSticky, setIsSticky] = useState(false);
  const submenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!submenuRef.current) return;
      const top = submenuRef.current.getBoundingClientRect().top;
      setIsSticky(top <= 80);

      // Detect active section
      PRODUCT_LINE_DATA.sections.forEach(section => {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={submenuRef} className="h-16 relative z-40 bg-pkg-white">
      <div className={`w-full transition-all duration-300 ${isSticky ? 'fixed top-[72px] left-0 bg-white/90 backdrop-blur-md shadow-sm border-b border-pkg-black/5' : ''}`}>
        <div className="section-container flex items-center justify-between h-16">
          <div className="flex items-center gap-1 md:gap-8 overflow-x-auto no-scrollbar scroll-smooth">
            {PRODUCT_LINE_DATA.sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className={`text-[10px] md:text-xs font-bold uppercase tracking-widest whitespace-nowrap transition-all border-b-2 py-5 px-1 ${
                  activeSection === section.id 
                    ? 'text-pkg-red border-pkg-red' 
                    : 'text-pkg-gray border-transparent hover:text-pkg-black'
                }`}
              >
                {section.label}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex items-center gap-4 border-l border-pkg-black/10 pl-6 ml-4">
            <span className="text-[10px] font-bold text-pkg-gray uppercase tracking-widest">Other Lines</span>
            <button className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest hover:text-pkg-red transition-colors group">
              ESS Solutions <ExternalLink className="w-3 h-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductCard: React.FC<{ product: ProductModel }> = ({ product }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`group relative flex flex-col bg-white border border-pkg-black/5 hover:border-pkg-red/30 transition-all duration-700 ${product.featured ? 'md:col-span-2 md:flex-row' : ''}`}
    >
      <div className={`relative overflow-hidden bg-pkg-gray-light ${product.featured ? 'md:w-1/2 aspect-[4/3] md:aspect-auto' : 'aspect-[4/3]'}`}>
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        {product.featured && (
          <div className="absolute top-6 left-6 bg-pkg-red text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 flex items-center gap-2">
            <Zap className="w-3 h-3 fill-white" /> Featured Model
          </div>
        )}
      </div>

      <div className={`p-8 flex flex-col flex-1 justify-between ${product.featured ? 'md:w-1/2' : ''}`}>
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="text-[10px] font-black tracking-widest text-pkg-red uppercase">Industrial Grade</span>
            <div className="h-px flex-1 bg-pkg-black/5"></div>
          </div>
          <h3 className="text-2xl font-bold mb-4 group-hover:text-pkg-red transition-colors">{product.name}</h3>
          
          <div className="grid grid-cols-2 gap-y-4 gap-x-6">
            <div>
              <p className="text-[10px] uppercase tracking-wider text-pkg-gray font-bold mb-1">Voltage</p>
              <p className="text-sm font-semibold">{product.voltage}</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-wider text-pkg-gray font-bold mb-1">Capacity</p>
              <p className="text-sm font-semibold">{product.capacity}</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-wider text-pkg-gray font-bold mb-1">Cycle Life</p>
              <p className="text-sm font-semibold whitespace-nowrap overflow-hidden text-ellipsis">{product.cycleLife}</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-wider text-pkg-gray font-bold mb-1">Weight</p>
              <p className="text-sm font-semibold">{product.weight}</p>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {product.application.map((app: string) => (
              <span key={app} className="text-[9px] font-bold uppercase tracking-wider px-2 py-1 bg-pkg-gray-light text-pkg-gray rounded">
                {app}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-8 flex items-center gap-4 pt-6 border-t border-pkg-black/5">
          <button className="flex-1 btn-secondary py-3 text-xs uppercase tracking-widest">Inquiry</button>
          <button className="w-12 h-12 flex items-center justify-center border border-pkg-black/10 hover:border-pkg-red hover:text-pkg-red transition-all group/btn">
            <ArrowUpRight className="w-5 h-5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const FAQItem: React.FC<{ question: string, answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-pkg-black/10">
      <button 
        className="w-full py-6 flex items-center justify-between text-left group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h4 className={`text-lg font-bold transition-colors ${isOpen ? 'text-pkg-red' : 'group-hover:text-pkg-red'}`}>{question}</h4>
        <div className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pb-8 text-pkg-gray leading-relaxed max-w-3xl">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// --- Main Application ---

export default function App() {
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.1]);

  return (
    <div className="min-h-screen selection:bg-pkg-red selection:text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden bg-pkg-black">
        <motion.div style={{ opacity: heroOpacity, scale: heroScale }} className="absolute inset-0">
          <img 
            src="/engineering-bg.png" 
            alt="Engineering Background" 
            className="w-full h-full object-cover opacity-30 grayscale hover:grayscale-0 transition-all duration-1000"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-pkg-black via-pkg-black/80 to-transparent"></div>
        </motion.div>

        <div className="section-container relative z-10 grid lg:grid-cols-2 gap-12 items-center pt-20">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="w-12 h-px bg-pkg-red"></span>
              <span className="text-xs font-black uppercase tracking-[0.3em] text-pkg-red">B2B Industrial Solution</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.9] mb-8 uppercase tracking-tighter">
              Powering <br />
              <span className="text-pkg-red italic underline decoration-pkg-red/30 underline-offset-8">Next-Gen</span> <br />
              Transport
            </h1>
            <p className="text-pkg-gray text-lg md:text-xl max-w-xl leading-relaxed mb-10">
              {PRODUCT_LINE_DATA.heroDescription}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary group">
                Engineering Consultation 
                <ChevronRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
              <button className="btn-secondary flex items-center justify-center border border-white/10 hover:bg-white hover:text-pkg-black">
                Technical Data Sheets
              </button>
            </div>
          </motion.div>

          <div className="hidden lg:grid grid-cols-2 gap-px bg-white/10 border border-white/10 backdrop-blur-sm">
            {PRODUCT_LINE_DATA.keyStats.map((stat, idx) => (
              <motion.div 
                key={stat.label}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 + idx * 0.1 }}
                className="p-8 hover:bg-white/5 transition-colors group"
              >
                <div className="text-white/40 mb-4 transition-colors group-hover:text-pkg-red">{stat.icon}</div>
                <div className="text-3xl font-bold text-white mb-1">
                  {stat.value}<span className="text-xs text-pkg-red ml-1">{stat.suffix}</span>
                </div>
                <div className="text-[10px] font-black uppercase tracking-widest text-pkg-gray">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-4">
          <span className="text-[10px] font-black uppercase tracking-[0.5em] text-pkg-gray">Scroll Down</span>
          <div className="w-px h-16 bg-gradient-to-b from-pkg-red to-transparent"></div>
        </div>
      </section>

      <StickySubmenu />

      {/* Overview Section */}
      <section id="overview" className="py-24 md:py-32 bg-white">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <div>
              <div className="text-xs font-black uppercase tracking-[0.3em] text-pkg-red mb-4">Depth-First Approach</div>
              <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
                Specialized Energy For <span className="text-pkg-gray">Electric Tourism.</span>
              </h2>
              <p className="text-pkg-gray text-lg leading-relaxed mb-8">
                The PKG LS-Series is not just another battery. It's a complete power architecture designed specifically for the rigorous demands of electric sightseeing fleets. We've eliminated the pain points of lead-acid—long charging, heavy weight, and short life—with aerospace-grade lithium technology.
              </p>
              <div className="grid gap-6">
                {[
                  "Optimized for 24/7 Resort Operations",
                  "Modular configuration for custom chassis",
                  "Integrated Smart BMS with Wi-Fi/CAN telemetry",
                  "Environmentally stable cells for high humidity regions"
                ].map((item) => (
                  <div key={item} className="flex items-start gap-4 p-4 border-l-2 border-pkg-black/5 hover:border-pkg-red transition-all group">
                    <CheckCircle2 className="w-6 h-6 text-pkg-red mt-0.5 shrink-0" />
                    <span className="font-semibold text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-pkg-red/5 rounded-full blur-3xl"></div>
              <div className="relative grid grid-cols-2 gap-4">
                <div className="aspect-[3/4] overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=800" alt="Electric Bus" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="aspect-[3/4] overflow-hidden translate-y-12">
                  <img src="https://images.unsplash.com/photo-1617650728468-8581e439c864?auto=format&fit=crop&q=80&w=800" alt="Resort Shuttle" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-24 md:py-32 bg-pkg-gray-light">
        <div className="section-container">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div className="max-w-2xl">
              <div className="text-xs font-black uppercase tracking-[0.3em] text-pkg-red mb-4">The LS-Series Roadmap</div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Model Architecture</h2>
              <p className="text-pkg-gray">Engineered precision across every voltage and capacity. Choose the exact configuration for your vehicle fleet or OEM project.</p>
            </div>
            <div className="flex gap-4">
              <button className="px-6 py-2 text-xs font-bold uppercase tracking-widest border border-pkg-red text-pkg-red bg-white hover:bg-pkg-red hover:text-white transition-all">48V Range</button>
              <button className="px-6 py-2 text-xs font-bold uppercase tracking-widest border border-pkg-black/10 text-pkg-black bg-white hover:border-pkg-red hover:text-pkg-red transition-all">72V/80V Range</button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-pkg-black/5 border-l border-t border-pkg-black/5">
            {PRODUCT_MODELS.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
            
            {/* Custom Request Placeholder */}
            <div className="bg-white p-12 flex flex-col items-center justify-center text-center border-r border-b border-pkg-black/5 group cursor-pointer hover:bg-pkg-gray-dark transition-all duration-500 overflow-hidden relative">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity">
                <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" alt="Custom engineering" />
              </div>
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-full border border-pkg-black/10 flex items-center justify-center mb-6 mx-auto group-hover:bg-pkg-red group-hover:border-pkg-red transition-all">
                  <Plus className="w-8 h-8 text-pkg-black group-hover:text-white" />
                </div>
                <h4 className="text-xl font-bold mb-3 group-hover:text-white transition-colors">ODM/OEM Solutions</h4>
                <p className="text-sm text-pkg-gray mb-6 group-hover:text-white/60 transition-colors">Need a custom form factor or specialized discharge rate for a new vehicle platform?</p>
                <div className="flex items-center justify-center gap-2 text-xs font-black uppercase tracking-widest text-pkg-red group-hover:text-white transition-colors">
                  Request Custom Parameters <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section id="applications" className="py-24 md:py-32 bg-pkg-black text-white overflow-hidden">
        <div className="section-container">
          <div className="grid lg:grid-cols-3 gap-16 items-center mb-20">
            <div className="lg:col-span-1">
              <div className="text-xs font-black uppercase tracking-[0.3em] text-pkg-red mb-4">Application Environments</div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Built For Reality.</h2>
              <p className="text-gray-400 leading-relaxed">
                Our batteries operate in diverse environments, from high-humidity coastal resorts to steep-incline theme parks. Reliability isn't just a spec—it's the foundation of your customer experience.
              </p>
            </div>
            <div className="lg:col-span-2 grid md:grid-cols-3 gap-8">
              {APPLICATIONS.map((app, idx) => (
                <motion.div 
                  key={app.title} 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="aspect-square mb-6 overflow-hidden relative grayscale group-hover:grayscale-0 transition-all duration-700">
                    <img src={app.image} alt={app.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-pkg-red/0 group-hover:bg-pkg-red/20 transition-all"></div>
                  </div>
                  <h4 className="text-lg font-bold mb-2 group-hover:text-pkg-red transition-colors">{app.title}</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">{app.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="p-12 border border-white/5 bg-white/5 backdrop-blur-sm grid md:grid-cols-4 gap-12">
            {[
              { label: "Water Resistance", value: "IP67 Rating" },
              { label: "Operation Temp", value: "-20°C to 65°C" },
              { label: "Shock Resistance", value: "Industrial Grade" },
              { label: "Connectivity", value: "CAN Bus 2.0" }
            ].map(item => (
              <div key={item.label}>
                <p className="text-[10px] uppercase font-black tracking-widest text-pkg-gray mb-1">{item.label}</p>
                <p className="text-xl font-bold text-white">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="technology" className="py-24 md:py-32 bg-white">
        <div className="section-container">
          <div className="max-w-3xl mb-20">
            <div className="text-xs font-black uppercase tracking-[0.3em] text-pkg-red mb-4">Innovation Deep Dive</div>
            <h2 className="text-4xl md:text-6xl font-bold mb-8">The Engineering Edge</h2>
            <p className="text-pkg-gray text-lg">Inside every PKG LS-Series unit is a sophisticated ecosystem of electronic protection, thermal management, and power distribution.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {TECH_HIGHLIGHTS.map((tech) => (
              <div key={tech.title} className="p-10 border border-pkg-black/5 hover:bg-pkg-gray-light/50 transition-all group">
                <div className="mb-8 p-4 bg-pkg-gray-light inline-block group-hover:bg-white group-hover:shadow-sm transition-all">{tech.icon}</div>
                <h4 className="text-2xl font-bold mb-4">{tech.title}</h4>
                <p className="text-pkg-gray leading-relaxed mb-6">{tech.desc}</p>
                <a href="#" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-pkg-red hover:gap-4 transition-all">
                  Read Whitepaper <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>

          <div className="mt-20 relative aspect-video md:aspect-[21/9] bg-pkg-black overflow-hidden group">
            <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-all duration-1000 group-hover:scale-105" alt="Production Line" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
              <div className="w-20 h-20 rounded-full bg-pkg-red flex items-center justify-center mb-6 cursor-pointer hover:scale-110 transition-transform">
                <div className="w-0 h-0 border-l-[15px] border-l-white border-y-[10px] border-y-transparent ml-2"></div>
              </div>
              <h3 className="text-white text-3xl font-bold mb-2 uppercase tracking-tighter italic">Factory Excellence</h3>
              <p className="text-white/60 text-sm font-bold uppercase tracking-[0.3em]">Watch Our Production Quality Standards</p>
            </div>
          </div>
        </div>
      </section>

      {/* Credibility Section */}
      <section className="py-24 bg-pkg-gray-light">
        <div className="section-container">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <div className="text-xs font-black uppercase tracking-[0.3em] text-pkg-red mb-4">Why Partner With PKG</div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">Your Technical Implementation Partner.</h2>
              <div className="space-y-8">
                {CREDIBILITY_FACTORS.map((factor) => (
                  <div key={factor.title} className="flex gap-6 p-8 bg-white shadow-sm border border-pkg-black/5 hover:border-pkg-red/30 transition-all">
                    <div className="shrink-0 text-pkg-red">{factor.icon}</div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{factor.title}</h4>
                      <p className="text-pkg-gray leading-relaxed">{factor.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-8">
              {[
                { label: "Active Project", count: "500+" },
                { label: "Export Nations", count: "12+" },
                { label: "Support Staff", count: "40+" },
                { label: "Energy Capacity", count: "2.4GWh" }
              ].map(stat => (
                <div key={stat.label} className="p-8 border border-pkg-black/5 flex flex-col items-center text-center">
                  <span className="text-4xl font-black text-pkg-black mb-2">{stat.count}</span>
                  <span className="text-[10px] font-black uppercase tracking-widest text-pkg-red">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 md:py-32 bg-white">
        <div className="section-container">
          <div className="grid lg:grid-cols-3 gap-16">
            <div>
              <div className="text-xs font-black uppercase tracking-[0.3em] text-pkg-red mb-4">Support Hub</div>
              <h2 className="text-4xl font-bold mb-6">Expert <br /> Insights.</h2>
              <p className="text-pkg-gray leading-relaxed mb-8">
                Common questions about switching from lead-acid to lithium for sightseeing vehicles.
              </p>
              <button className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-pkg-black hover:text-pkg-red transition-all">
                View Full Documentation <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            <div className="lg:col-span-2">
              <FAQItem
                question="How much weight can we save by switching to PKG Lithium?"
                answer="Standard lead-acid configurations for a 14-seater touring bus typically weigh around 350-400kg. Our equivalent PKG-LS system weighs approximately 120-140kg, saving over 60% in battery weight, which directly translates to improved range and less suspension wear."
              />
              <FAQItem
                question="Can your batteries be charged from 110V/220V standard outlets?"
                answer="Yes, with our integrated charging solutions. We offer on-board chargers that plug directly into standard facility AC outlets, as well as high-speed DC charging stations for 2-hour rapid turnaround."
              />
              <FAQItem
                question="Are custom dimensions available for legacy vehicles?"
                answer="Absolutely. One of PKG Battery's strengths is our OEM/ODM capability. While we have standard case sizes, we can engineer custom physical enclosures and specialized wiring harnesses to retrofit legacy lead-acid battery bays without modifying the vehicle chassis."
              />
              <FAQItem
                question="What is the real-world lifespan of the LS-Series?"
                answer="Based on resort operation cycles (approx. 2 cycles per day), our batteries are designed to last 5-7 years before reaching 80% of original capacity. In comparison, lead-acid batteries in similar conditions often need replacement every 12-18 months."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="contact" className="py-24 bg-pkg-black relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-pkg-red opacity-10 skew-x-[-20deg] translate-x-1/2"></div>
        <div className="section-container relative z-10 text-center max-w-4xl mx-auto">
          <div className="text-xs font-black uppercase tracking-[0.3em] text-pkg-red mb-6">Start Your Transition</div>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-10 uppercase tracking-tighter">
            Ready to <span className="italic underline decoration-pkg-red underline-offset-8">Scale</span> Your Fleet?
          </h2>
          <p className="text-gray-400 text-lg mb-12">
            Speak directly with a PKG system engineer. No generic sales pitches—just technical solutions for your energy challenges.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="btn-primary w-full sm:w-auto h-16 px-12 text-lg">
              Get Technical Consultation
            </button>
            <div className="flex flex-col items-start">
              <div className="flex items-center gap-3 text-white mb-2">
                <Phone className="w-5 h-5 text-pkg-red" />
                <span className="font-bold">+84 (0) 123 456 789</span>
              </div>
              <div className="flex items-center gap-3 text-white">
                <Mail className="w-5 h-5 text-pkg-red" />
                <span className="font-bold">engineering@pkg-battery.vn</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-white border-t border-pkg-black/5">
        <div className="section-container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-pkg-red flex items-center justify-center font-display font-black text-white text-base">P</div>
              <span className="font-display font-bold text-xl tracking-tighter text-pkg-black">
                PKG <span className="text-pkg-red">BATTERY</span>
              </span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
              {['Sitemap', 'Privacy Policy', 'Terms of Service', 'Corporate Governance', 'Contact'].map(item => (
                <a key={item} href="#" className="text-[10px] font-bold uppercase tracking-widest text-pkg-gray hover:text-pkg-red transition-colors">{item}</a>
              ))}
            </div>
          </div>
          <div className="h-px bg-pkg-black/5 mb-8"></div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center">
            <p className="text-[10px] text-pkg-gray font-bold uppercase tracking-widest">
              © {new Date().getFullYear()} PKG Battery Solutions. All rights reserved.
            </p>
            <p className="text-[10px] text-pkg-gray font-bold uppercase tracking-widest">
              Engineered Excellence in Energy Storage
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
