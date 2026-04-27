/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { Hero, QuickAccess } from './components/Hero';
import ResourceLibrary from './components/ResourceLibrary';
import SoftwareCenter from './components/SoftwareCenter';
import SupportAndFAQ, { FinalCTA, EnergyLine } from './components/SupportAndFAQ';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <main className="min-h-screen bg-white selection:bg-brand-red selection:text-white">
      {/* Premium Header */}
      <Header />

      {/* Hero Section with Search functionality */}
      <Hero onSearch={setSearchQuery} />

      <EnergyLine />

      {/* User Intent Selection */}
      <QuickAccess />

      {/* Main Document Library & Filter System */}
      <div id="resources">
        <ResourceLibrary searchQuery={searchQuery} />
      </div>

      {/* Software & Firmware Zone (Dark Themed) */}
      <SoftwareCenter />

      {/* FAQ & Technical Support */}
      <SupportAndFAQ />

      {/* Final Brand Trust Section */}
      <FinalCTA />

      {/* Comprehensive Footer */}
      <Footer />
    </main>
  );
}

