import { motion } from 'motion/react';
import { Battery, Menu, Phone, MessageCircle } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all">
      <div className="absolute inset-0 bg-white/80 backdrop-blur-md border-b border-brand-soft shadow-sm" />
      <div className="max-w-7xl mx-auto px-6 h-20 relative flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-brand-red p-1.5 rounded-lg">
            <Battery className="w-6 h-6 text-white" fill="currentColor" />
          </div>
          <span className="text-2xl font-display font-bold tracking-tight">
            PKG<span className="text-brand-red">battery</span>
          </span>
        </div>

        <div className="hidden lg:flex items-center gap-10">
          {['Products', 'Solutions', 'Dealers', 'About', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-brand-dark/70 hover:text-brand-red transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a href="tel:0989000000" className="hidden sm:flex items-center gap-2 text-sm font-semibold text-brand-red hover:text-red-700 transition-colors">
            <Phone className="w-4 h-4" />
            <span>0989 000 000</span>
          </a>
          <button className="bg-brand-dark text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-brand-gray transition-all active:scale-95 shadow-lg shadow-brand-dark/10">
            Get Quote
          </button>
          <button className="lg:hidden p-2">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </nav>
  );
}
