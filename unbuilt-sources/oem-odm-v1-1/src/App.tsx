import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Solutions from "./components/Solutions";
import PainPoints from "./components/PainPoints";
import Capabilities from "./components/Capabilities";
import Process from "./components/Process";
import Trust from "./components/Trust";
import CaseStudies from "./components/CaseStudies";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Solutions />
        <PainPoints />
        <Capabilities />
        <Process />
        <Trust />
        <CaseStudies />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

