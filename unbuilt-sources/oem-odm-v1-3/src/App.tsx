/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { 
  Battery, 
  Zap, 
  Cpu, 
  Settings, 
  ShieldCheck, 
  Factory, 
  ChevronRight, 
  ArrowRight, 
  Phone, 
  Mail, 
  Globe, 
  Layers, 
  Box, 
  Truck, 
  CheckCircle2, 
  Menu, 
  X,
  Clock,
  Briefcase,
  FileText,
  Activity,
  HardHat,
  Monitor,
  MessageCircle,
  Wrench
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-brand-red flex items-center justify-center rounded-sm">
            <span className="text-white font-display font-bold text-xl italic">PK</span>
          </div>
          <span className={`text-2xl font-display font-bold tracking-tighter ${isScrolled ? 'text-brand-black' : 'text-brand-black'}`}>
            PKGBattery
          </span>
        </div>

        <div className="hidden md:flex items-center gap-10">
          {['Solutions', 'Customization', 'Factory', 'Process', 'Case Studies'].map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-sm font-medium uppercase tracking-widest text-brand-black/70 hover:text-brand-red transition-colors">
              {item}
            </a>
          ))}
          <button className="bg-brand-black text-white px-6 py-2 rounded-sm text-sm font-medium hover:bg-brand-red transition-all">
            GET A QUOTE
          </button>
        </div>

        <button className="md:hidden text-brand-black" onClick={() => setIsMobileMenuOpen(true)}>
          <Menu size={24} />
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 bg-white z-[60] flex flex-col p-8"
          >
            <div className="flex justify-end">
              <button onClick={() => setIsMobileMenuOpen(false)}><X size={32} /></button>
            </div>
            <div className="flex flex-col gap-8 mt-12">
              {['Solutions', 'Customization', 'Factory', 'Process', 'Case Studies'].map((item) => (
                <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-2xl font-display font-bold text-brand-black" onClick={() => setIsMobileMenuOpen(false)}>
                  {item}
                </a>
              ))}
              <button className="bg-brand-red text-white py-4 rounded-sm font-bold mt-4">
                GET A QUOTE
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const SectionHeader = ({ title, subtitle, light = false }) => (
  <div className="mb-16">
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex items-center gap-4 mb-4"
    >
      <div className="w-12 h-[2px] bg-brand-red" />
      <span className="text-brand-red font-bold uppercase tracking-[0.2em] text-xs">PKGBattery Industrial</span>
    </motion.div>
    <motion.h2 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      className={`text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6 max-w-4xl ${light ? 'text-white' : 'text-brand-black'}`}
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className={`text-lg md:text-xl max-w-2xl leading-relaxed ${light ? 'text-white/70' : 'text-brand-black/60'}`}
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);

  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-white">
      <div className="absolute inset-0 technical-grid pointer-events-none" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-gray/50 -skew-x-12 translate-x-1/4 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[0.9] tracking-tighter mb-8 italic">
              ENGINEERED <br />
              <span className="text-brand-red">LITHIUM</span> <br />
              SYSTEMS.
            </h1>
            <p className="text-xl text-brand-black/70 mb-10 max-w-xl leading-relaxed">
              PKGBattery designs and manufactures custom lithium battery packs in Vietnam — built to match your machine’s voltage, dimensions, runtime, and safety requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary">Get a Custom Quote <ChevronRight size={18} /></button>
              <button className="btn-secondary">Talk to an Engineer</button>
            </div>
            
            <div className="mt-16 flex items-center gap-8 text-[10px] font-bold tracking-[0.2em] text-brand-black/40 uppercase">
              <div className="flex items-center gap-2"><ShieldCheck size={14} className="text-brand-red" /> ISO Controlled</div>
              <div className="flex items-center gap-2"><Settings size={14} className="text-brand-red" /> Custom BMS</div>
              <div className="flex items-center gap-2"><Globe size={14} className="text-brand-red" /> Global Support</div>
            </div>
          </motion.div>
        </div>

        <div className="lg:col-span-5 relative">
          <motion.div 
            style={{ y: y1 }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative z-10"
          >
            <div className="relative aspect-square md:aspect-auto md:h-[600px] bg-gradient-to-br from-brand-charcoal to-black rounded-sm overflow-hidden p-1 shadow-2xl">
                <div className="absolute inset-0 blueprint-lines opacity-20" />
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="relative">
                      <motion.div 
                        animate={{ rotateY: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="w-64 h-48 bg-brand-red/20 border-2 border-brand-red flex items-center justify-center rounded-lg backdrop-blur-sm"
                      >
                         <Battery size={80} className="text-brand-red" />
                      </motion.div>
                      <div className="absolute -top-10 -right-10 w-32 h-32 border-t border-r border-brand-red/50" />
                      <div className="absolute -bottom-10 -left-10 w-32 h-32 border-b border-l border-brand-red/50" />
                   </div>
                </div>
                
                {/* Simulated Telemetry Overlay */}
                <div className="absolute bottom-6 left-6 font-mono text-[10px] text-brand-red space-y-1">
                  <div>VOLTAGE: 48.2V [STABLE]</div>
                  <div>TEMP: 24.5°C</div>
                  <div>SOC: 98.4%</div>
                  <div>CYCLES: 00000</div>
                </div>
                <div className="absolute top-6 right-6 font-mono text-[10px] text-white/50 text-right">
                  <div>DESIGN_REV: V2.4</div>
                  <div>CELL_TYP: LiFePO4</div>
                  <div>BMS_COMM: CANBUS</div>
                </div>
            </div>
          </motion.div>
          {/* Decorative elements */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-red/10 blur-3xl rounded-full" />
        </div>
      </div>
    </section>
  );
};

const PartnershipSection = () => {
  return (
    <section id="solutions" className="py-24 bg-brand-gray/30 relative">
       <div className="max-w-7xl mx-auto px-6">
          <SectionHeader 
            title="Not Just a Seller. A Battery Engineering Partner."
            subtitle="Your equipment has its own load profile, space limitation, and communication protocol. We design the system around your machine — not the other way around."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mt-20">
            <div className="relative group">
              <div className="absolute -inset-4 bg-brand-red/5 rounded-xl scale-95 group-hover:scale-100 transition-transform duration-500" />
              <div className="relative bg-white p-12 shadow-sm border border-brand-black/5">
                <h3 className="text-2xl font-display font-bold mb-8 flex items-center gap-3">
                  <Cpu className="text-brand-red" /> Integrated Design Flow
                </h3>
                <div className="space-y-8">
                  {[
                    { title: "Load Analysis", desc: "We study your motor's peak and continuous current demands." },
                    { title: "Geometric Fitting", desc: "Custom casing designed to fit precisely within your chassis." },
                    { title: "BMS Calibration", desc: "Communication protocol matching (CANBUS, RS485) for your controller." },
                    { title: "Thermal Modeling", desc: "Ensuring heat dissipation under your specific working environment." }
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-6">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full border border-brand-red/30 flex items-center justify-center text-xs font-bold text-brand-red">
                        0{idx + 1}
                      </div>
                      <div>
                        <h4 className="font-bold text-sm uppercase tracking-wider mb-1">{item.title}</h4>
                        <p className="text-brand-black/60 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="p-8 border-l-2 border-brand-red bg-white shadow-sm">
                <p className="text-2xl font-display font-medium leading-tight">
                  "Most suppliers give you a catalog. We give you an <span className="text-brand-red">engineered solution</span> that works for your specific machine."
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="w-10 h-10 bg-brand-charcoal rounded-full" />
                  <div>
                    <div className="font-bold text-sm">Tech Director</div>
                    <div className="text-xs text-brand-black/40">Industrial Automation Partner</div>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                 {[
                   { label: "Manufacturing", val: "Vietnam" },
                   { label: "Engineering", val: "Local & Fast" },
                   { label: "Prototypes", val: "Available" },
                   { label: "Support", val: "24h Response" }
                 ].map((stat, i) => (
                   <div key={i} className="bg-brand-black p-6">
                      <div className="text-white/40 text-[10px] uppercase font-bold tracking-widest mb-1">{stat.label}</div>
                      <div className="text-white font-display font-bold text-lg">{stat.val}</div>
                   </div>
                 ))}
              </div>
            </div>
          </div>
       </div>
    </section>
  );
};

const TargetGroups = () => {
    const apps = [
        { title: "Equipment Manufacturers", desc: "Custom packs for specialized machinery.", icon: <Settings /> },
        { title: "AGV / Robot Integrators", desc: "High-precision, smart BMS solutions.", icon: <Monitor /> },
        { title: "Forklift & Material Handling", desc: "Heavy-duty LiFePO4 replacements.", icon: <Layers /> },
        { title: "Golf Carts / Utility EVs", desc: "Efficient, long-range power systems.", icon: <Battery /> },
        { title: "Industrial Automation", desc: "Reliable power for continuous operation.", icon: <Activity /> },
        { title: "Energy Storage Projects", desc: "Scalable modular battery banks.", icon: <Box /> }
    ];

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <SectionHeader 
                    title="Built for Professionals Who Demand Reliability"
                    subtitle="We partner with equipment brands that can't afford downtime."
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-brand-black/5">
                    {apps.map((app, idx) => (
                        <div key={idx} className="p-12 border-b border-r border-brand-black/5 hover:bg-brand-gray transition-colors group relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-10 scale-150 group-hover:opacity-100 group-hover:scale-100 transition-all text-brand-red">
                                {app.icon}
                            </div>
                            <div className="relative z-10">
                                <div className="text-brand-red mb-6 scale-125 transform origin-left">{app.icon}</div>
                                <h3 className="text-xl font-display font-bold mb-4">{app.title}</h3>
                                <p className="text-brand-black/50 text-sm leading-relaxed mb-6">{app.desc}</p>
                                <div className="flex items-center gap-2 text-xs font-bold text-brand-black/80 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                                    View Requirements <ArrowRight size={14} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const CustomizationSection = () => {
    const specs = [
        { label: "Voltage Range", value: "12V - 96V+" },
        { label: "Cells", value: "LiFePO4 / NMC" },
        { label: "Chemistry", value: "Prismatic / Cylindrical" },
        { label: "BMS Protocols", value: "CAN, RS485, Bluetooth" },
        { label: "IP Ratings", value: "IP54 / IP65 / IP67" },
        { label: "Connectors", value: "Anderson / Custom" }
    ];

    return (
        <section id="customization" className="py-24 bg-brand-charcoal text-white relative">
            <div className="absolute inset-0 technical-grid opacity-10" />
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div>
                        <SectionHeader 
                            light
                            title="Every Critical Parameter Can Be Customized"
                            subtitle="Don't compromise your product design. We adapt our battery chemistry, safety systems, and housing to your exact needs."
                        />
                        
                        <div className="grid grid-cols-2 gap-x-12 gap-y-10 mt-12">
                            {specs.map((spec, i) => (
                                <motion.div 
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    key={i}
                                    className="border-b border-white/10 pb-4"
                                >
                                    <div className="text-brand-red text-[10px] font-bold uppercase tracking-widest mb-1">{spec.label}</div>
                                    <div className="text-lg font-display font-medium italic">{spec.value}</div>
                                </motion.div>
                            ))}
                        </div>

                        <div className="mt-16">
                            <button className="btn-primary hover:bg-white hover:text-brand-black">Request Specs Sheet</button>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="relative aspect-square border border-white/5 bg-white/5 backdrop-blur-sm p-12 flex items-center justify-center">
                            <div className="absolute inset-0 blueprint-lines opacity-10" />
                            <motion.div 
                                animate={{ y: [0, -20, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <div className="w-80 h-40 bg-zinc-900 border border-white/20 rounded-md relative shadow-2xl">
                                    <div className="absolute inset-x-0 bottom-0 h-1 bg-brand-red shadow-[0_0_15px_rgba(227,30,36,0.5)]" />
                                    <div className="p-6 flex justify-between items-start">
                                        <div className="space-y-2">
                                            <div className="w-12 h-1 bg-white/20" />
                                            <div className="w-20 h-1 bg-white/10" />
                                        </div>
                                        <div className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center">
                                            <Zap size={16} className="text-brand-red" />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                            
                            {/* Annotations */}
                            {[
                                { t: "20%", l: "15%", label: "Custom Enclosure" },
                                { t: "15%", r: "10%", label: "Thermal Management" },
                                { b: "25%", r: "15%", label: "Smart BMS Control" },
                                { b: "10%", l: "20%", label: "Heavy Duty Terminals" }
                            ].map((note, i) => (
                                <div key={i} className="absolute text-[9px] font-bold uppercase tracking-tighter text-white/40 flex items-center gap-2" style={note}>
                                    <div className="w-2 h-2 rounded-full bg-brand-red" /> {note.label}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const ProcessSection = () => {
    const steps = [
        { t: "Requirement Review", d: "We collect voltage, runtime, dimensions, and certification needs." },
        { t: "Technical Proposal", d: "Our engineers propose cell type, BMS, casing, and estimated cost." },
        { t: "Prototype Design", d: "A functional sample is built for performance testing." },
        { t: "Sample Testing", d: "Capacity, discharge, and safety tests are performed under load." },
        { t: "Mass Production", d: "Controlled production in Vietnam with 100% QC inspection." }
    ];

    return (
        <section id="process" className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <SectionHeader 
                    title="A Clear Process That Reduces Project Risk"
                    subtitle="From initial concept to mass production, we ensure every step is validated."
                />

                <div className="mt-20 space-y-4">
                    {steps.map((step, i) => (
                        <motion.div 
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group flex flex-col md:flex-row items-start md:items-center p-8 bg-brand-gray/50 hover:bg-brand-black transition-all duration-500 rounded-sm"
                        >
                            <div className="text-4xl md:text-5xl font-display font-bold text-brand-black/10 group-hover:text-brand-red transition-colors w-20">0{i+1}</div>
                            <div className="flex-1">
                                <h3 className="text-xl font-display font-bold group-hover:text-white transition-colors">{step.t}</h3>
                                <p className="text-brand-black/50 group-hover:text-white/50 transition-colors text-sm max-w-xl">{step.d}</p>
                            </div>
                            <div className="mt-4 md:mt-0 opacity-0 group-hover:opacity-100 transition-opacity">
                                <ChevronRight className="text-brand-red" size={24} />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const ContactForm = () => {
    return (
        <section id="contact" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                    <div>
                        <SectionHeader 
                            title="Ready to Build Your Battery System?"
                            subtitle="Send us your requirements. Our engineers will review your project and recommend a custom solution within 24 hours."
                        />
                        <div className="mt-12 space-y-8">
                            <div className="flex items-center gap-6 p-6 border border-brand-black/5 rounded-sm">
                                <div className="w-12 h-12 bg-zinc-100 flex items-center justify-center rounded-full"><Mail size={20} className="text-brand-red" /></div>
                                <div>
                                    <div className="text-[10px] font-bold uppercase tracking-widest text-brand-black/40">Email Support</div>
                                    <div className="font-bold">engineering@pkgbattery.com</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-6 p-6 border border-brand-black/5 rounded-sm">
                                <div className="w-12 h-12 bg-zinc-100 flex items-center justify-center rounded-full"><MessageCircle size={20} className="text-brand-red" /></div>
                                <div>
                                    <div className="text-[10px] font-bold uppercase tracking-widest text-brand-black/40">Chat / Zalo / WhatsApp</div>
                                    <div className="font-bold">+84 9xx xxx xxx</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-brand-gray p-10 rounded-sm shadow-xl">
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold uppercase tracking-widest text-brand-black/60">Full Name</label>
                                    <input type="text" className="w-full bg-white border border-brand-black/10 px-4 py-3 text-sm focus:border-brand-red outline-none transition-colors" placeholder="John Doe" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold uppercase tracking-widest text-brand-black/60">Email Address</label>
                                    <input type="email" className="w-full bg-white border border-brand-black/10 px-4 py-3 text-sm focus:border-brand-red outline-none transition-colors" placeholder="john@company.com" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-bold uppercase tracking-widest text-brand-black/60">Application Type</label>
                                <select className="w-full bg-white border border-brand-black/10 px-4 py-3 text-sm focus:border-brand-red outline-none transition-colors">
                                    <option>AGV / Robot</option>
                                    <option>Forklift / Material Handling</option>
                                    <option>Energy Storage</option>
                                    <option>Custom Machinery</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-bold uppercase tracking-widest text-brand-black/60">Project Requirements</label>
                                <textarea rows={4} className="w-full bg-white border border-brand-black/10 px-4 py-3 text-sm focus:border-brand-red outline-none transition-colors" placeholder="Voltage, capacity, dimensions, etc."></textarea>
                            </div>
                            <button className="w-full btn-primary justify-center py-5">Submit Project Request</button>
                            <p className="text-[10px] text-center text-brand-black/40 italic">We respect your privacy. All technical data is kept confidential.</p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

const Footer = () => (
    <footer className="bg-brand-black text-white pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                <div className="md:col-span-1">
                    <div className="flex items-center gap-2 mb-6">
                        <div className="w-8 h-8 bg-brand-red flex items-center justify-center rounded-sm">
                            <span className="text-white font-display font-bold italic">PK</span>
                        </div>
                        <span className="text-xl font-display font-bold tracking-tighter">PKGBattery</span>
                    </div>
                    <p className="text-sm text-white/50 leading-relaxed max-w-xs">
                        Leading manufacturer of custom industrial lithium battery systems in Vietnam.
                    </p>
                </div>
                <div>
                  <h4 className="font-bold text-xs uppercase tracking-[0.2em] mb-6 text-brand-red">Solutions</h4>
                  <ul className="space-y-3 text-sm text-white/60">
                    <li><a href="#" className="hover:text-white transition-colors">OEM Production</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">ODM Engineering</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Custom BMS</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Battery Analytics</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-xs uppercase tracking-[0.2em] mb-6 text-brand-red">Industries</h4>
                  <ul className="space-y-3 text-sm text-white/60">
                    <li><a href="#" className="hover:text-white transition-colors">Robotics</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Material Handling</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Electric Vehicles</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Power Storage</a></li>
                  </ul>
                </div>
                <div>
                   <h4 className="font-bold text-xs uppercase tracking-[0.2em] mb-6 text-brand-red">Contact</h4>
                   <div className="space-y-4 text-sm text-white/60">
                      <p>Hanoi, Vietnam Factory</p>
                      <p>engineering@pkgbattery.com</p>
                      <p>+84 000 000 000</p>
                   </div>
                </div>
            </div>
            <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
                <p className="text-[10px] text-white/30 uppercase tracking-[0.2em]">© 2026 PKGBATTERY. All rights reserved.</p>
                <div className="flex gap-8">
                  <Globe size={18} className="text-white/30 hover:text-white transition-colors cursor-pointer" />
                  <Briefcase size={18} className="text-white/30 hover:text-white transition-colors cursor-pointer" />
                </div>
            </div>
        </div>
    </footer>
);

// --- Main Page ---

export default function App() {
  return (
    <div className="relative">
      <Navbar />
      <main>
        <Hero />
        <PartnershipSection />
        <TargetGroups />
        <CustomizationSection />
        <ProcessSection />
        {/* Quality Check Section */}
        <section className="py-24 bg-brand-gray/20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
               <div className="p-10 bg-white shadow-sm border-t-2 border-brand-red">
                  <ShieldCheck size={40} className="text-brand-red mb-6" />
                  <h3 className="text-xl font-display font-bold mb-4">100% Safety Compliance</h3>
                  <p className="text-brand-black/50 text-sm">Every pack undergoes extreme discharge, temperature, and impact testing in accordance with UN38.3 standards.</p>
               </div>
               <div className="p-10 bg-white shadow-sm border-t-2 border-brand-red">
                  <Settings size={40} className="text-brand-red mb-6" />
                  <h3 className="text-xl font-display font-bold mb-4">Advanced BMS Logic</h3>
                  <p className="text-brand-black/50 text-sm">Smart balancing, precise SOC estimation, and multi-protocol communication (CAN/RS485) as standard.</p>
               </div>
               <div className="p-10 bg-white shadow-sm border-t-2 border-brand-red">
                  <Factory size={40} className="text-brand-red mb-6" />
                  <h3 className="text-xl font-display font-bold mb-4">Vietnam Manufacturing</h3>
                  <p className="text-brand-black/50 text-sm">Reduced logistics risk and faster turnaround times for regional partners and global equipment brands.</p>
               </div>
            </div>
          </div>
        </section>
        <ContactForm />
      </main>
      <Footer />
      
      {/* Floating Action Button for Zalo/WhatsApp */}
      <div className="fixed bottom-8 right-8 z-40 flex flex-col gap-4">
         <motion.button 
            whileHover={{ scale: 1.1 }}
            className="w-14 h-14 bg-brand-red text-white flex items-center justify-center rounded-full shadow-2xl"
          >
            <Phone size={24} />
         </motion.button>
      </div>
    </div>
  );
}

// Minimal placeholder for missing icons used in code (removed as now imported)
