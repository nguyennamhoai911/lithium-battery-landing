/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Search, ArrowRight, Download, FileText, Settings, ShieldCheck } from 'lucide-react';

export function Hero({ onSearch }: { onSearch: (val: string) => void }) {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden technical-grid">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-brand-red font-bold tracking-[0.2em] text-xs uppercase mb-4"
          >
            PKG Battery Technical Resources
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold text-industrial-black mb-6 tracking-tight leading-tight"
          >
            Technical Resource <br />
            <span className="text-industrial-black/90 font-light">Center</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-industrial-black/60 mb-10 max-w-2xl leading-relaxed font-normal"
          >
            Access official datasheets, manuals, catalogues, BMS software, firmware packages and certification documents for PKG Battery industrial lithium systems.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="relative max-w-2xl group shadow-2xl"
          >
            <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none text-industrial-black/40 group-focus-within:text-brand-red transition-colors">
              <Search size={22} strokeWidth={2.5} />
            </div>
            <input 
              type="text" 
              placeholder="Search by model, voltage, product type..."
              onChange={(e) => onSearch(e.target.value)}
              className="w-full pl-14 pr-6 py-5 bg-white border-none focus:ring-2 focus:ring-brand-red outline-none text-lg font-medium placeholder:text-gray-400 placeholder:font-normal"
            />
            <div className="absolute right-3 inset-y-0 flex items-center">
               <button className="bg-industrial-black text-white px-6 py-3 font-bold text-sm tracking-wider uppercase hover:bg-brand-red transition-colors">
                 Search
               </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-xs font-bold uppercase tracking-widest text-industrial-black/40"
          >
            <span>Popular:</span>
            {['48V Forklift', 'AGV Manual', 'BMS Configurator', 'UN38.3 Certificate'].map(tag => (
               <button key={tag} className="hover:text-brand-red decoration-brand-red decoration-2 underline-offset-4 cursor-pointer">
                 {tag}
               </button>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Visual Element */}
      <div className="hidden lg:block absolute bottom-0 right-0 w-1/3 h-full overflow-hidden opacity-5 pointer-events-none select-none">
        <div className="absolute bottom-0 right-0 text-[30rem] font-black italic tracking-tighter text-industrial-black leading-none">
          PKG
        </div>
      </div>
    </section>
  );
}

export function QuickAccess() {
  const intents = [
    {
      title: "Evaluating a product",
      description: "Compare specifications, product catalogues and application-fit documents before selecting a system.",
      cta: "View datasheets",
      icon: FileText,
      large: true
    },
    {
      title: "Installing or operating",
      description: "Find manuals, operation guides and troubleshooting documents for existing PKG systems.",
      cta: "View manuals",
      icon: Settings,
      large: false
    },
    {
      title: "BMS Software",
      description: "Download configuration tools and firmware packages for PKG BMS.",
      cta: "Open software center",
      icon: Download,
      large: false
    },
    {
      title: "Certification",
      description: "Access compliance certificates, test reports and safety data sheets.",
      cta: "View certificates",
      icon: ShieldCheck,
      large: true
    }
  ];

  return (
    <section className="py-24 container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
        {intents.map((intent, idx) => (
          <motion.div 
            key={idx}
            whileHover={{ y: -5 }}
            className={`relative p-10 border border-industrial-gray-200 group overflow-hidden ${
              intent.large ? 'lg:col-span-8' : 'lg:col-span-4'
            }`}
          >
            <div className="absolute top-0 left-0 w-1 h-0 bg-brand-red transition-all duration-300 group-hover:h-full" />
            
            <div className="flex items-start justify-between mb-8">
              <div className="p-3 bg-industrial-gray-50 text-industrial-black group-hover:bg-brand-red group-hover:text-white transition-colors duration-300">
                <intent.icon size={28} strokeWidth={1.5} />
              </div>
              <ArrowRight size={24} className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-brand-red" />
            </div>

            <h3 className="text-2xl font-bold mb-4">{intent.title}</h3>
            <p className="text-industrial-black/60 mb-10 max-w-sm leading-relaxed">{intent.description}</p>
            
            <button className="text-sm font-bold uppercase tracking-widest text-brand-red flex items-center gap-2 group-hover:gap-4 transition-all">
              {intent.cta}
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
