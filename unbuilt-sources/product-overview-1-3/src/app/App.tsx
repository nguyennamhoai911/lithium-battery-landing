import { useState, useEffect } from 'react';
import { HeroSection } from './components/HeroSection';
import { StickyNav } from './components/StickyNav';
import { ValueProposition } from './components/ValueProposition';
import { ProductList } from './components/ProductList';
import { Applications } from './components/Applications';
import { Technology } from './components/Technology';
import { WhyPKG } from './components/WhyPKG';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';

export default function App() {
  const [activeSection, setActiveSection] = useState('overview');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['overview', 'products', 'applications', 'technology', 'faq', 'contact'];
      const scrollPosition = window.scrollY + 150;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <StickyNav activeSection={activeSection} />
      <ValueProposition />
      <ProductList />
      <Applications />
      <Technology />
      <WhyPKG />
      <FAQ />
      <FinalCTA />
    </div>
  );
}
