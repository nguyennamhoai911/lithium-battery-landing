/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from "./components/Header";
import Hero from "./components/Hero";
import PainPoints from "./components/PainPoints";
import Solutions from "./components/Solutions";
import InteractiveModule from "./components/InteractiveModule";
import IndustryPanels from "./components/IndustryPanels";
import Comparison from "./components/Comparison";
import Process from "./components/Process";
import FactoryStats from "./components/FactoryStats";
import CaseStudies from "./components/CaseStudies";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

export default function App() {
  return (
    <main className="font-sans antialiased">
      <Header />
      <Hero />
      <PainPoints />
      <Solutions />
      <InteractiveModule />
      <IndustryPanels />
      <Comparison />
      <Process />
      <FactoryStats />
      <CaseStudies />
      <ContactForm />
      <Footer />
    </main>
  );
}
