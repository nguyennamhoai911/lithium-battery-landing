/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Plus, Minus, MessageSquare, Phone, Mail, ChevronRight, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { FAQS } from '../lib/data';

export default function SupportAndFAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-24">
          
          {/* FAQ */}
          <div className="lg:w-1/2">
            <h4 className="text-brand-red font-bold tracking-[0.2em] text-[10px] uppercase mb-4">Support Hub</h4>
            <h2 className="text-4xl font-bold mb-12">Frequently Asked Questions</h2>
            
            <div className="space-y-4">
              {FAQS.map((faq, idx) => (
                <div key={idx} className="border-b border-industrial-gray-100 last:border-none">
                  <button 
                    onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                    className="flex items-center justify-between w-full py-6 text-left group"
                  >
                    <span className={`font-bold text-lg transition-colors ${openIdx === idx ? 'text-brand-red' : 'hover:text-brand-red'}`}>
                      {faq.question}
                    </span>
                    {openIdx === idx ? <Minus size={20} className="text-brand-red" /> : <Plus size={20} className="text-industrial-black/20 group-hover:text-industrial-black" />}
                  </button>
                  {openIdx === idx && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="pb-6 text-industrial-black/60 leading-relaxed font-normal"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Support CTA Card */}
          <div className="lg:w-1/2">
            <div className="bg-industrial-gray-50 p-12 relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-8 opacity-5 text-industrial-black group-hover:opacity-10 transition-opacity">
                  <MessageSquare size={160} strokeWidth={1} />
               </div>
               
               <h3 className="text-3xl font-bold mb-6 relative z-10">Still can't find what you need?</h3>
               <p className="text-industrial-black/60 mb-10 relative z-10 leading-relaxed max-w-md">
                 Some technical documents are project-specific or restricted to certified partners. Contact our engineering team for specialized assistance.
               </p>

               <div className="space-y-6 mb-12 relative z-10">
                 <div className="flex items-center gap-6 group/item cursor-pointer">
                    <div className="w-12 h-12 bg-white flex items-center justify-center border border-industrial-gray-200 group-hover/item:border-brand-red transition-all">
                       <Phone size={20} className="text-industrial-black group-hover/item:text-brand-red" />
                    </div>
                    <div>
                       <p className="text-[10px] font-black uppercase tracking-widest text-industrial-black/30">Hotline</p>
                       <p className="font-bold text-lg">+84 28 8888 9999</p>
                    </div>
                    <ChevronRight size={18} className="ml-auto opacity-0 group-hover/item:opacity-100 transition-opacity text-brand-red" />
                 </div>

                 <div className="flex items-center gap-6 group/item cursor-pointer">
                    <div className="w-12 h-12 bg-white flex items-center justify-center border border-industrial-gray-200 group-hover/item:border-brand-red transition-all">
                       <Mail size={20} className="text-industrial-black group-hover/item:text-brand-red" />
                    </div>
                    <div>
                       <p className="text-[10px] font-black uppercase tracking-widest text-industrial-black/30">Email Support</p>
                       <p className="font-bold text-lg">support@pkgbattery.com</p>
                    </div>
                    <ChevronRight size={18} className="ml-auto opacity-0 group-hover/item:opacity-100 transition-opacity text-brand-red" />
                 </div>
               </div>

               <button className="w-full bg-industrial-black text-white py-5 font-bold uppercase tracking-[0.2em] text-xs hover:bg-brand-red transition-all flex items-center justify-center gap-4">
                 Request Specific Document
                 <ArrowRight size={18} />
               </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function FinalCTA() {
  return (
    <section className="bg-industrial-black py-32 border-t border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 text-center">
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 tracking-tighter">
          Ready for your next <br /> <span className="text-brand-red">industrial project?</span>
        </h2>
        <p className="text-white/40 max-w-2xl mx-auto mb-12 text-lg font-light">
          Partner with PKG Battery for world-class lithium systems, localized technical expertise and reliable lifecycle support.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button className="w-full sm:w-auto bg-brand-red text-white border-2 border-brand-red px-12 py-5 font-bold uppercase tracking-[0.2em] text-xs hover:bg-transparent transition-all">
            Talk to an Engineer
          </button>
          <button className="w-full sm:w-auto border-2 border-white/20 text-white px-12 py-5 font-bold uppercase tracking-[0.2em] text-xs hover:border-white transition-all">
            Explore products
          </button>
        </div>
      </div>
      
      {/* Background Graphic */}
      <div className="absolute top-0 left-0 w-full h-full opacity-2 dark-technical-grid pointer-events-none" />
    </section>
  );
}

export function EnergyLine() {
  return (
    <div className="h-0.5 w-full bg-industrial-gray-100 relative overflow-hidden">
       <div className="absolute top-0 left-[-100%] w-full h-full bg-brand-red animate-[scan_5s_linear_infinite]" />
    </div>
  );
}
