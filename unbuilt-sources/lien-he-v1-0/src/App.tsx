/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { InquiryType } from './types';
import Navbar from './components/layout/Navbar';
import Hero from './components/contact/Hero';
import InquirySelector from './components/contact/InquirySelector';
import DynamicForm from './components/contact/DynamicForm';
import DealerNetwork from './components/contact/DealerNetwork';
import SocialProof from './components/contact/SocialProof';
import TrustStrip from './components/contact/TrustStrip';
import OfficeMap from './components/contact/OfficeMap';
import StickyActions from './components/contact/StickyActions';
import Footer from './components/layout/Footer';

export default function App() {
  const [inquiryType, setInquiryType] = useState<InquiryType>(InquiryType.QUOTE);

  return (
    <div className="min-h-screen bg-white selection:bg-brand-red selection:text-white">
      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        
        <div id="inquiry-section" className="relative technical-grid py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <InquirySelector 
              selected={inquiryType} 
              onSelect={setInquiryType} 
            />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={inquiryType}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="mt-12"
              >
                <DynamicForm type={inquiryType} />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <DealerNetwork />
        <OfficeMap />
        <SocialProof />
        <TrustStrip />
        
        {/* Final CTA Section */}
        <section className="bg-brand-dark py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(227,30,36,0.1),transparent_70%)]" />
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <h2 className="text-3xl md:text-5xl font-display font-semibold text-white mb-6">
              Sẵn sàng trao đổi về nhu cầu pin của bạn?
            </h2>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
              Liên hệ đội ngũ PKGbattery để nhận tư vấn giải pháp phù hợp cho doanh nghiệp hoặc dự án của bạn.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:0989000000" className="bg-brand-red hover:bg-red-700 text-white px-10 py-5 rounded-full font-semibold transition-all hover:scale-105 active:scale-95 shadow-xl shadow-brand-red/20">
                Gọi sale ngay
              </a>
              <button className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-md px-10 py-5 rounded-full font-semibold transition-all border border-white/10">
                Chat Zalo
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <StickyActions />
    </div>
  );
}

