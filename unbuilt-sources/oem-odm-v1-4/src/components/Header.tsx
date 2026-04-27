import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Battery, Menu, X, PhoneCall } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "OEM/ODM", href: "#oem" },
    { name: "Năng lực custom", href: "#custom" },
    { name: "Ngành hàng", href: "#industries" },
    { name: "Quy trình", href: "#process" },
    { name: "Nhà máy", href: "#factory" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-md py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-brand-red flex items-center justify-center rounded-sm group-hover:rotate-6 transition-transform">
            <Battery className="text-white w-6 h-6" />
          </div>
          <div>
            <span className={`text-2xl font-display font-black tracking-tighter ${isScrolled ? 'text-brand-black' : 'text-white'}`}>
              PKG<span className="text-brand-red">BATTERY</span>
            </span>
            <p className={`text-[10px] tracking-[0.3em] font-bold uppercase transition-colors ${isScrolled ? 'text-brand-gray-text' : 'text-brand-gray-muted'}`}>
              Industrial Energy
            </p>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`text-sm font-bold uppercase tracking-widest transition-colors relative group ${
                isScrolled ? "text-brand-black hover:text-brand-red" : "text-white hover:text-brand-red"
              }`}
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-red transition-all group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-6">
          <a 
            href="#contact" 
            className={`hidden md:flex items-center gap-2 px-6 py-2.5 rounded-sm font-bold text-sm uppercase tracking-wider transition-all ${
              isScrolled 
                ? "bg-brand-black text-white hover:bg-brand-red" 
                : "bg-white text-brand-black hover:bg-brand-red hover:text-white"
            }`}
          >
            <PhoneCall className="w-4 h-4" />
            Kết nối kỹ sư
          </a>

          <button 
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className={`lg:hidden transition-colors ${isScrolled ? "text-brand-black" : "text-white"}`}
          >
            {isMobileOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-0 left-0 w-full h-screen bg-brand-black z-40 flex flex-col items-center justify-center gap-8 text-center p-6 lg:hidden"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setIsMobileOpen(false)}
                className="text-2xl font-display font-bold text-white hover:text-brand-red uppercase tracking-widest"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact"
              onClick={() => setIsMobileOpen(false)}
              className="mt-4 px-10 py-5 bg-brand-red text-white font-bold uppercase tracking-widest rounded-sm"
            >
              Liên hệ tư vấn
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
