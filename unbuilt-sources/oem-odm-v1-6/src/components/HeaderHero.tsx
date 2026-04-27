import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState, useEffect } from "react";
import { Button } from "./Common";
import { landingData } from "../data/landingData";
import { ArrowRight, ChevronRight, Menu, X } from "lucide-react";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Giải pháp", href: "#pain-points" },
    { label: "Tùy chỉnh", href: "#capabilities" },
    { label: "Quy trình", href: "#process" },
    { label: "Chất lượng", href: "#quality" },
    { label: "Liên hệ", href: "#contact" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md py-3 shadow-sm border-b border-slate-100" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-red-600 flex items-center justify-center rounded-sm">
            <span className="text-white font-black text-xl tracking-tighter">PK</span>
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-bold text-xl tracking-tight text-slate-900">PKGBattery</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-red-600 font-bold">Industrial Energy</span>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <a 
              key={item.label} 
              href={item.href} 
              className="text-sm font-semibold text-slate-600 hover:text-red-600 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button variant="outline" size="sm" className="hidden lg:flex">Gửi yêu cầu</Button>
          <Button size="sm">Tư vấn ngay</Button>
        </div>

        <button 
          className="md:hidden text-slate-900"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full bg-white border-b border-slate-200 p-4 flex flex-col gap-4 md:hidden"
        >
          {menuItems.map((item) => (
            <a 
              key={item.label} 
              href={item.href} 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-medium text-slate-800"
            >
              {item.label}
            </a>
          ))}
          <Button className="w-full">Gửi yêu cầu ngay</Button>
        </motion.div>
      )}
    </header>
  );
};

export const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden bg-white">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50 -z-10" />
      <div 
        className="absolute bottom-0 right-0 w-full h-full opacity-10 pointer-events-none -z-10"
        style={{ backgroundImage: "radial-gradient(circle at 80% 20%, #dc2626 0%, transparent 40%)" }}
      />
      <div className="absolute top-1/4 right-0 w-1/2 h-px bg-gradient-to-l from-red-200 to-transparent -z-10" />

      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-12 sm:gap-20">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 z-10"
        >
          <div className="inline-block px-3 py-1 bg-red-50 text-red-600 text-xs font-bold uppercase tracking-widest mb-6 rounded-xs border border-red-100">
            OEM / ODM Pin Lithium Công Nghiệp
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-[1.05] tracking-tight mb-8">
            Thiết kế & sản xuất <span className="text-red-600">pin tùy chỉnh</span> cho máy móc
          </h1>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-10 max-w-2xl">
            PKGBattery Việt Nam phát triển hệ thống năng lượng chính xác theo thông số, kích thước và tiêu chuẩn an toàn cho thiết bị của bạn.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button size="lg" className="group">
              Trao đổi với kỹ sư 
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="lg">Xem năng lực</Button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-10 border-t border-slate-100">
            <div>
              <div className="text-2xl font-bold text-slate-900 italic">5,000+</div>
              <div className="text-sm text-slate-500">Pack đã xuất xưởng</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-slate-900 italic">20+</div>
              <div className="text-sm text-slate-500">Kỹ sư hệ thống</div>
            </div>
            <div className="hidden sm:block">
              <div className="text-2xl font-bold text-slate-900 italic">Fast QC</div>
              <div className="text-sm text-slate-500">Test sạc xả 100%</div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          style={{ y }}
          className="flex-1 relative"
        >
          <div className="relative z-10 rounded-sm overflow-hidden shadow-2xl border-8 border-white">
            <img 
              src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1200" 
              alt="Industrial Battery Pack Manufacturing"
              referrerPolicy="no-referrer"
              className="w-full aspect-[4/5] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-12 h-px bg-red-500" />
                <span className="text-xs font-bold uppercase tracking-widest text-red-400">Thiết kế bởi kỹ sư Việt</span>
              </div>
              <div className="text-xl font-medium">Hệ thống pin LiFePO4 cho xe nâng công suất lớn</div>
            </div>
          </div>
          
          {/* Decorative element */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-red-600/5 blur-3xl rounded-full" />
          <div className="absolute top-10 -left-10 p-6 bg-white shadow-xl rounded-sm border border-slate-100 max-w-[200px] z-20">
            <div className="text-red-600 font-bold text-3xl mb-1">UN38.3</div>
            <div className="text-xs text-slate-500 uppercase font-bold tracking-wider">Tiêu chuẩn an toàn hàng không quốc tế</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
