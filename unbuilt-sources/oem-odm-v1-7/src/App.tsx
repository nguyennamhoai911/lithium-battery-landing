/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustMarkers from "./components/TrustMarkers";
import Capabilities from "./components/Capabilities";
import Process from "./components/Process";
import Manufacturing from "./components/Manufacturing";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import { motion, useScroll, useSpring } from "motion/react";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative">
      {/* Global Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-brand-red z-[100] origin-left"
        style={{ scaleX }}
      />

      <Navbar />
      
      <main>
        <Hero />
        
        <div id="trust">
          <TrustMarkers />
        </div>
        
        <Capabilities />
        
        <Process />
        
        <Manufacturing />
        
        {/* Quality Section - Quick Technical Reassurance */}
        <section className="py-24 bg-white border-y border-brand-dark/5">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12 text-center">
            {[
              { label: "100% Cell Grade A", desc: "Chúng tôi chỉ sử dụng cell chuẩn AAA với chu kỳ sống tối đa." },
              { label: "BMS Thông Minh", desc: "Hệ thống cân bằng chủ động và bảo vệ đa tầng tích hợp sẵn." },
              { label: "Bảo Hành B2B", desc: "Chính sách hậu mãi ưu tiên cho dự án sản xuất theo yêu cầu." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="space-y-4"
              >
                <div className="inline-block px-4 py-1 bg-brand-red/5 text-brand-red text-[10px] font-black uppercase tracking-[0.2em] rounded-sm">
                  Technical Standard
                </div>
                <h3 className="text-xl font-bold">{item.label}</h3>
                <p className="text-sm text-brand-dark/60 font-medium leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        <ContactForm />
      </main>

      <Footer />

      {/* Floating CTA for Mobile */}
      <div className="md:hidden fixed bottom-6 right-6 z-[60]">
        <button className="w-14 h-14 bg-brand-red text-white rounded-full shadow-2xl flex items-center justify-center animate-bounce">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
        </button>
      </div>
    </div>
  );
}

