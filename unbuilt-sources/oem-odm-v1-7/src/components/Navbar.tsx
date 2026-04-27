import { motion } from "motion/react";
import { Phone, Mail, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? "bg-white/90 backdrop-blur-md py-4 shadow-sm" : "bg-transparent py-6"
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-brand-red flex items-center justify-center font-bold text-white rounded-sm">
            PKG
          </div>
          <span className="font-display font-bold text-xl tracking-tighter">
            BATTERY <span className="text-brand-red">.</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-10">
          {["Giải pháp", "Năng lực", "Quy trình", "Nhà máy", "Dự án"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium hover:text-brand-red transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-brand-red transition-all group-hover:w-full" />
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button className="flex items-center gap-2 px-5 py-2.5 bg-brand-dark text-white rounded-full text-sm font-medium hover:bg-brand-red transition-all duration-300">
            <Phone size={16} />
            Liên hệ tư vấn
          </button>
        </div>

        <button 
          className="md:hidden text-brand-dark"
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
          className="absolute top-full left-0 w-full bg-white border-t border-gray-100 p-6 flex flex-col gap-6 md:hidden shadow-xl"
        >
          {["Giải pháp", "Năng lực", "Quy trình", "Nhà máy", "Dự án"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-lg font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <button className="flex items-center justify-center gap-2 px-5 py-4 bg-brand-red text-white rounded-lg text-lg font-medium">
            <Phone size={20} />
            Gọi tư vấn ngay
          </button>
        </motion.div>
      )}
    </nav>
  );
}
