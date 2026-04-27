/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Segments from './components/Segments';
import PainPoints from './components/PainPoints';
import Customization from './components/Customization';
import WhyChooseUs from './components/WhyChooseUs';
import Process from './components/Process';
import Certifications from './components/Certifications';
import CaseStudies from './components/CaseStudies';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Segments />
        <PainPoints />
        <Customization />
        <WhyChooseUs />
        <Process />
        <Certifications />
        <CaseStudies />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

