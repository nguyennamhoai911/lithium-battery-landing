import { HeroSection } from "./components/HeroSection";
import { TrustBar } from "./components/TrustBar";
import { CompanyIntro } from "./components/CompanyIntro";
import { VisionMission } from "./components/VisionMission";
import { ProductEcosystem } from "./components/ProductEcosystem";
import { WhyPKG } from "./components/WhyPKG";
import { Manufacturing } from "./components/Manufacturing";
import { Certifications } from "./components/Certifications";
import { CaseStudies } from "./components/CaseStudies";
import { DealerNetwork } from "./components/DealerNetwork";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="w-full overflow-x-hidden">
      <HeroSection />
      <TrustBar />
      <CompanyIntro />
      <VisionMission />
      <ProductEcosystem />
      <WhyPKG />
      <Manufacturing />
      <Certifications />
      <CaseStudies />
      <DealerNetwork />
      <ContactSection />
      <Footer />
    </div>
  );
}