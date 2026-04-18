import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

interface StickyNavProps {
  activeSection: string;
}

export function StickyNav({ activeSection }: StickyNavProps) {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'overview', label: 'Tổng quan' },
    { id: 'products', label: 'Sản phẩm' },
    { id: 'applications', label: 'Ứng dụng' },
    { id: 'technology', label: 'Công nghệ' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Liên hệ' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isSticky 
          ? 'bg-white/95 backdrop-blur-lg shadow-md border-b border-zinc-200' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between py-4">
          {/* Logo / Brand */}
          <div className="flex items-center gap-8">
            <div className="text-xl font-bold text-zinc-900">
              PKG <span className="text-red-600">Battery</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-2 text-sm rounded transition-all duration-200 ${
                    activeSection === item.id
                      ? 'text-red-600 bg-red-50'
                      : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            {/* Product Line Switcher */}
            <div className="hidden lg:block relative group">
              <button className="flex items-center gap-2 px-4 py-2 text-sm text-zinc-600 hover:text-zinc-900 border border-zinc-300 rounded transition-colors">
                Dòng sản phẩm khác
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute right-0 top-full mt-2 w-64 bg-white rounded-lg shadow-xl border border-zinc-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="p-2">
                  <a href="#" className="block px-4 py-3 text-sm text-zinc-700 hover:bg-zinc-50 rounded">
                    Xe Điện Du Lịch
                  </a>
                  <a href="#" className="block px-4 py-3 text-sm text-zinc-700 hover:bg-zinc-50 rounded">
                    Pin AGV/Robot
                  </a>
                  <a href="#" className="block px-4 py-3 text-sm text-zinc-700 hover:bg-zinc-50 rounded">
                    Bộ Sạc - Trạm Sạc
                  </a>
                  <a href="#" className="block px-4 py-3 text-sm text-zinc-700 hover:bg-zinc-50 rounded">
                    Hệ thống ESS
                  </a>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <button className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white text-sm rounded transition-colors">
              Yêu cầu báo giá
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden border-t border-zinc-200 overflow-x-auto">
        <div className="flex gap-2 px-6 py-3 min-w-max">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`px-4 py-2 text-sm whitespace-nowrap rounded transition-all duration-200 ${
                activeSection === item.id
                  ? 'text-red-600 bg-red-50'
                  : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
