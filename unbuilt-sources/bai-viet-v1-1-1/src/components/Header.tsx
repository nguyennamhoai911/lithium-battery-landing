import { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { Globe, Menu, X, ChevronRight } from 'lucide-react';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="reading-progress-bar">
        <motion.div className="reading-progress-fill" style={{ scaleX, originX: 0 }} />
      </div>

      <header 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/80 backdrop-blur-md py-3 shadow-sm border-b border-zinc-100' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-brand-red flex items-center justify-center font-bold text-white text-xl">P</div>
            <span className="font-bold text-xl tracking-tighter">PKG BATTERY</span>
          </div>

          {/* Nav */}
          <nav className="hidden lg:flex items-center gap-10">
            {['Giới thiệu', 'Sản phẩm', 'Giải pháp', 'Bài viết', 'Dự án', 'Liên hệ'].map((item) => (
              <a 
                key={item} 
                href="#" 
                className={`text-sm font-medium transition-colors hover:text-brand-red relative group ${
                  item === 'Bài viết' ? 'text-brand-red' : 'text-zinc-600'
                }`}
              >
                {item}
                {item === 'Bài viết' && (
                  <motion.div 
                    layoutId="nav-active"
                    className="absolute -bottom-1 left-0 w-full h-[1.5px] bg-brand-red"
                  />
                )}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-brand-red transition-all group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right Group */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-zinc-400 font-medium text-xs">
              <span className="text-zinc-900 cursor-pointer">VI</span>
              <span className="h-2 w-[1px] bg-zinc-200" />
              <span className="hover:text-zinc-900 cursor-pointer">EN</span>
            </div>
            
            <button className="hidden sm:block px-5 py-2.5 bg-brand-black text-white text-xs font-semibold hover:bg-zinc-800 transition-colors uppercase tracking-widest">
              Nhận tư vấn
            </button>

            <button className="lg:hidden text-zinc-900">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>
    </>
  );
};
