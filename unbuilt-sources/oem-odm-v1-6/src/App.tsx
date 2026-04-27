import { Header, Hero } from "./components/HeaderHero";
import { PainPoints, Audience } from "./components/ContentSections";
import { CustomCapabilities, Applications } from "./components/TechSections";
import { Differentiation, CaseStudies } from "./components/ExtraSections";
import { Process, Quality } from "./components/ProcessQuality";
import { FAQ, ContactForm, Footer } from "./components/FooterContact";
import { motion, useScroll, useSpring } from "motion/react";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative selection:bg-red-100 selection:text-red-900">
      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-red-600 origin-left z-[60]"
        style={{ scaleX }}
      />
      
      <Header />
      
      <main>
        <Hero />
        <PainPoints />
        <Audience />
        <CustomCapabilities />
        <Applications />
        <Differentiation />
        <Process />
        <Quality />
        <CaseStudies />
        <FAQ />
        <ContactForm />
      </main>

      <Footer />

      {/* Industrial Grid Overlay (global subtle effect) */}
      <div className="fixed inset-0 pointer-events-none z-[1] opacity-5 overflow-hidden">
        <div 
          className="absolute inset-0"
          style={{ 
            backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)", 
            backgroundSize: "40px 40px" 
          }}
        />
      </div>
    </div>
  );
}
