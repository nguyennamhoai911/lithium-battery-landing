/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Download, Cpu, Monitor, Zap, Info, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export default function SoftwareCenter() {
  const [activeTab, setActiveTab] = useState('Configuration');

  const apps = [
    {
      title: "PKG BMS Configurator v3.2",
      description: "Complete tool for voltage thresholds, balancing settings and CAN communication parameters.",
      platform: "Windows 10/11",
      size: "28 MB",
      category: "Configuration",
      compatibility: "Forklift, AGV, ESS Series"
    },
    {
      title: "PKG Monitor Pro v2.5",
      description: "Real-time dashboard for SOC, SOH, cell temperature and active alarm monitoring.",
      platform: "Win/macOS/Linux",
      size: "42 MB",
      category: "Monitoring",
      compatibility: "All Smart PKG Systems"
    },
    {
      title: "CAN Bootloader v1.8",
      description: "Secure firmware deployment and hardware revision verification tool.",
      platform: "Windows 10",
      size: "12 MB",
      category: "Update Tools",
      compatibility: "PKG BMS Revision 2.0+"
    }
  ];

  const filteredApps = apps.filter(app => app.category === activeTab || activeTab === 'All');

  return (
    <section className="bg-industrial-black py-32 text-white relative overflow-hidden dark-technical-grid">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mb-20">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="flex items-center gap-4 mb-6">
            <span className="w-12 h-0.5 bg-brand-red" />
            <span className="text-brand-red font-bold uppercase tracking-[0.3em] text-[10px]">Technical Software</span>
          </motion.div>
          <h2 className="text-5xl font-bold mb-6 tracking-tight">BMS & Software Center</h2>
          <p className="text-industrial-gray-200/60 text-lg max-w-2xl leading-relaxed">
            Download professional configuration tools, real-time monitoring software and secure firmware packages refined for PKG industrial management systems.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-16">
          {/* Tabs */}
          <div className="lg:w-1/4 space-y-4">
            {['All', 'Configuration', 'Monitoring', 'Update Tools'].map(tab => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex items-center justify-between w-full px-6 py-4 text-left font-bold tracking-wider text-sm border transition-all ${
                  activeTab === tab ? 'bg-white text-industrial-black border-white' : 'border-white/10 text-white/50 hover:border-white/30'
                }`}
              >
                {tab.toUpperCase()}
                {activeTab === tab && <ArrowRight size={16} />}
              </button>
            ))}
            
            <div className="mt-12 p-6 bg-brand-red/10 border border-brand-red/20">
               <div className="flex items-start gap-3 text-brand-red mb-4">
                  <Zap size={20} />
                  <span className="font-bold uppercase tracking-widest text-xs">Firmware Warning</span>
               </div>
               <p className="text-xs text-brand-red/80 leading-relaxed font-medium">
                 Always verify product model and hardware revision before applying firmware updates. System mismatch may cause operational failure.
               </p>
            </div>
          </div>

          {/* Software Grid */}
          <div className="lg:w-3/4 grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredApps.map((app, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="bg-white/5 border border-white/10 p-8 group hover:bg-white/10 transition-all flex flex-col justify-between"
              >
                <div>
                   <div className="flex justify-between items-start mb-8">
                     <div className="p-3 bg-brand-red/20 text-brand-red">
                       {app.category === 'Monitoring' ? <Monitor size={24} /> : <Cpu size={24} />}
                     </div>
                     <span className="text-[10px] font-black uppercase tracking-widest text-white/20 whitespace-nowrap">{app.platform}</span>
                   </div>
                   <h3 className="text-xl font-bold mb-3">{app.title}</h3>
                   <p className="text-sm text-white/50 leading-relaxed mb-6">{app.description}</p>
                   
                   <div className="space-y-3 mb-10">
                     <div className="flex items-center gap-2 text-[10px] font-bold text-white/30 uppercase tracking-widest leading-none">
                        <Info size={12} className="text-brand-red" />
                        <span>Comp: {app.compatibility}</span>
                     </div>
                   </div>
                </div>

                <button className="w-full flex items-center justify-center gap-3 py-4 border border-white text-white text-xs font-bold uppercase tracking-[0.2em] group-hover:bg-white group-hover:text-industrial-black transition-all">
                  <Download size={16} />
                  Download Package ({app.size})
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative pulse element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-red/5 rounded-full blur-[120px] pointer-events-none" />
    </section>
  );
}
