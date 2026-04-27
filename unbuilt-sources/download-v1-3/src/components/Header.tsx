/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Search, Globe, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Products', href: '#' },
    { name: 'Solutions', href: '#' },
    { name: 'Technology', href: '#' },
    { name: 'Resources', href: '#', active: true },
    { name: 'Company', href: '#' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-brand-red flex items-center justify-center">
            <span className="text-white font-bold text-xl italic">P</span>
          </div>
          <span className="font-bold text-xl tracking-tighter">PKG <span className="font-light">BATTERY</span></span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`text-sm font-medium tracking-wide hover:text-brand-red transition-colors relative group ${
                item.active ? 'text-brand-red' : 'text-industrial-black'
              }`}
            >
              {item.name}
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-red transition-all duration-300 group-hover:w-full ${item.active ? 'w-full' : ''}`} />
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden lg:flex items-center gap-6">
          <button className="p-2 hover:bg-industrial-gray-100 rounded-full transition-colors">
            <Search size={20} />
          </button>
          <button className="flex items-center gap-1 text-sm font-medium hover:text-brand-red transition-colors">
            <Globe size={18} />
            <span>EN</span>
          </button>
          <button className="bg-industrial-black text-white px-6 py-2.5 text-sm font-semibold hover:bg-brand-red transition-colors">
            CONTACT SALES
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden absolute top-full left-0 w-full bg-white border-t border-industrial-gray-100 py-6 px-6 shadow-xl"
        >
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a key={item.name} href={item.href} className="text-lg font-medium">{item.name}</a>
            ))}
            <hr />
            <button className="w-full bg-industrial-black text-white py-3 font-semibold">CONTACT SALES</button>
          </div>
        </motion.div>
      )}
    </header>
  );
}
