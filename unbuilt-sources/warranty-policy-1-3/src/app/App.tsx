import { Hero } from './components/Hero';
import { TrustStory } from './components/TrustStory';
import { ProductCoverage } from './components/ProductCoverage';
import { WarrantyDuration } from './components/WarrantyDuration';
import { WarrantyDetails } from './components/WarrantyDetails';
import { FinalCTA } from './components/FinalCTA';
import { BackgroundSystem } from './components/BackgroundSystem';

export default function App() {
  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      <BackgroundSystem />

      <div className="relative z-10">
        <Hero />
        <TrustStory />
        <ProductCoverage />
        <WarrantyDuration />
        <WarrantyDetails />
        <FinalCTA />
      </div>
    </div>
  );
}
