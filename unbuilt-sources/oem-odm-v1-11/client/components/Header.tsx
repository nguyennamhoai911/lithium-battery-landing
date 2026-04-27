import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Giới thiệu", href: "#about" },
    { label: "Năng lực", href: "#capabilities" },
    { label: "Quy trình", href: "#process" },
    { label: "Ứng dụng", href: "#applications" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-brand-red rounded-lg flex items-center justify-center text-white font-bold text-lg">
            PB
          </div>
          <span className="font-bold text-lg text-brand-black hidden sm:inline">
            PKGBattery
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-12">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-gray-700 hover:text-brand-red transition-colors font-medium text-sm lg:text-base"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <button className="hidden sm:inline-flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 bg-brand-red text-white font-semibold rounded hover:shadow-lg transition-all duration-300 text-sm md:text-base">
          <Phone className="w-4 h-4" />
          <span className="hidden md:inline">Gọi tư vấn</span>
          <span className="md:hidden">Gọi</span>
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 hover:bg-gray-100 rounded transition-colors"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-brand-black" />
          ) : (
            <Menu className="w-6 h-6 text-brand-black" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <nav className="flex flex-col divide-y divide-gray-200">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-4 md:px-8 py-3 text-gray-700 hover:text-brand-red hover:bg-gray-50 transition-colors font-medium text-sm"
              >
                {link.label}
              </a>
            ))}
            <button className="px-4 md:px-8 py-3 text-brand-red font-semibold hover:bg-red-50 transition-colors text-sm">
              Gọi tư vấn ngay
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
