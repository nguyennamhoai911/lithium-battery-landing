import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Sản phẩm', href: '#customization' },
    { name: 'Năng lực', href: '#factory' },
    { name: 'Quy trình', href: '#process' },
    { name: 'Case Study', href: '#case-studies' },
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-brand-red flex items-center justify-center rounded-sm">
            <span className="text-white font-bold text-xl">P</span>
          </div>
          <span className={`font-bold text-2xl tracking-tighter ${scrolled ? 'text-charcoal' : 'text-white'}`}>
            PKGBATTERY
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-brand-red ${
                scrolled ? 'text-charcoal/70' : 'text-white/80 hover:text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="bg-brand-red text-white px-6 py-2.5 text-sm font-semibold hover:bg-red-700 transition-all hover:scale-105 active:scale-95"
          >
            NHẬN BÁO GIÁ
          </a>
        </div>

        <button 
          className="md:hidden text-charcoal"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className={scrolled ? 'text-charcoal' : 'text-white'} /> : <Menu className={scrolled ? 'text-charcoal' : 'text-white'} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div 
        initial={false}
        animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        className={`absolute top-full left-0 w-full bg-white shadow-xl md:hidden overflow-hidden ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
      >
        <div className="flex flex-col p-6 gap-4">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-lg font-medium text-charcoal border-b border-gray-100 pb-2"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="bg-brand-red text-white px-6 py-4 text-center font-bold"
            onClick={() => setIsOpen(false)}
          >
            LIÊN HỆ NGAY
          </a>
        </div>
      </motion.div>
    </nav>
  );
}
