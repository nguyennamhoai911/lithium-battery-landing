/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  ChevronDown, 
  ShieldCheck, 
  Cpu, 
  MapPin, 
  Globe, 
  Zap, 
  Terminal, 
  Layers, 
  CheckCircle2, 
  Phone, 
  Mail, 
  Menu, 
  X,
  Factory,
  Award,
  Users,
  Briefcase,
  ExternalLink,
  Battery,
  Truck,
  Workflow,
  Search
} from 'lucide-react';

// --- Types ---
interface ProductGroup {
  id: string;
  title: string;
  subtitle: string;
  cta: string;
  image: string;
}

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Sản phẩm', href: '#products' },
    { name: 'Năng lực', href: '#capability' },
    { name: 'Tại sao chọn PKG', href: '#why-pkg' },
    { name: 'Đại lý', href: '#dealers' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'glass-dark py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-pkg-red flex items-center justify-center rounded-sm rotate-45">
            <span className="text-white font-manrope font-extrabold text-xl -rotate-45">P</span>
          </div>
          <div className="flex flex-col">
            <span className="text-white font-manrope font-extrabold text-2xl tracking-tighter leading-none">PKG</span>
            <span className="text-white font-inter text-[10px] tracking-[0.2em] leading-none opacity-80 uppercase">Battery</span>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-white/80 hover:text-pkg-red text-sm font-medium tracking-wide transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button className="px-6 py-2 bg-pkg-red text-white text-sm font-bold skew-x-[-15deg] hover:bg-white hover:text-pkg-red transition-all duration-300">
            <span className="skew-x-[15deg] inline-block">LIÊN HỆ</span>
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full glass-dark border-t border-white/10 p-6 flex flex-col gap-6 md:hidden"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setMobileMenuOpen(false)}
                className="text-white text-lg font-medium"
              >
                {link.name}
              </a>
            ))}
            <button className="w-full py-4 bg-pkg-red text-white font-bold">LIÊN HỆ NGAY</button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-pkg-black">
      {/* Background Media Placeholder/Visual */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-pkg-black via-pkg-black/80 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-pkg-black via-transparent to-pkg-black/50 z-10" />
        <img 
          src="https://picsum.photos/seed/industrial_battery/1920/1080?grayscale" 
          alt="Industrial BG" 
          className="w-full h-full object-cover opacity-40 scale-105"
          referrerPolicy="no-referrer"
        />
        {/* Animated Particles/Dots Overlay */}
        <div className="absolute inset-0 industrial-grid-dark opacity-20" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          style={{ y, opacity }}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-4"
        >
          <div className="flex items-center gap-3">
            <div className="h-[2px] w-12 bg-pkg-red" />
            <span className="text-pkg-red font-manrope font-bold tracking-[0.3em] uppercase text-sm">PKG Battery</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-manrope font-extrabold text-white leading-[1.1] tracking-tight">
            TIÊN PHONG GIẢI PHÁP <br />
            <span className="text-pkg-red">NĂNG LƯỢNG LITHIUM</span> <br />
            TẠI VIỆT NAM
          </h1>
          <p className="text-lg md:text-xl text-white/70 max-w-xl leading-relaxed mt-4 font-light">
            PKG Battery phát triển các giải pháp pin Lithium cho xe nâng điện, AGV, xe điện du lịch và hệ thống lưu trữ năng lượng, đáp ứng nhu cầu vận hành hiện đại của doanh nghiệp.
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            <button className="px-8 py-4 bg-pkg-red text-white font-bold flex items-center gap-2 hover:bg-white hover:text-pkg-red transition-all duration-300 group">
              KHÁM PHÁ NĂNG LỰC
              <ArrowRight className="transition-transform group-hover:translate-x-1" size={20} />
            </button>
            <button className="px-8 py-4 border border-white/20 text-white font-bold hover:bg-white/10 transition-all duration-300">
              XEM SẢN PHẨM
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="hidden lg:flex justify-center relative"
        >
          {/* 3D Visual Simulation */}
          <div className="relative w-full aspect-square max-w-md">
            <div className="absolute inset-0 bg-pkg-red/20 blur-[100px] rounded-full animate-pulse" />
            <div className="relative z-10 w-full h-full glass-dark border border-white/10 rounded-2xl flex items-center justify-center overflow-hidden shadow-2xl">
              <div className="absolute inset-0 opacity-10">
                <div className="w-full h-full bg-[linear-gradient(45deg,transparent_25%,rgba(214,31,38,0.1)_50%,transparent_75%)] bg-[length:250px_250px] animate-[scroll_10s_linear_infinite]" />
              </div>
              <div className="flex flex-col items-center gap-6 p-8 text-center">
                 <Battery className="w-32 h-32 text-pkg-red animate-pulse" strokeWidth={1} />
                 <div className="flex flex-col gap-1">
                    <span className="text-white font-manrope font-bold text-2xl uppercase tracking-widest">Premium Core</span>
                    <span className="text-pkg-red font-mono text-xs uppercase tracking-tighter">Lithium-Ion Technology</span>
                 </div>
                 <div className="grid grid-cols-2 gap-4 w-full">
                    <div className="p-3 bg-white/5 border border-white/10 rounded">
                       <span className="block text-[10px] text-white/40 uppercase mb-1">Efficiency</span>
                       <span className="text-white font-mono text-lg font-bold">98.5%</span>
                    </div>
                    <div className="p-3 bg-white/5 border border-white/10 rounded">
                       <span className="block text-[10px] text-white/40 uppercase mb-1">Cycle Life</span>
                       <span className="text-white font-mono text-lg font-bold">6000+</span>
                    </div>
                 </div>
              </div>
            </div>
            {/* Floating Elements */}
            <motion.div 
              animate={{ y: [0, -10, 0] }} 
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute -top-10 -right-10 p-4 glass-dark rounded-xl border border-white/10 z-20"
            >
              <Zap className="text-pkg-red" size={24} />
            </motion.div>
            <motion.div 
              animate={{ y: [0, 10, 0] }} 
              transition={{ repeat: Infinity, duration: 5, delay: 1 }}
              className="absolute -bottom-10 -left-10 p-4 glass-dark rounded-xl border border-white/10 z-20"
            >
              <ShieldCheck className="text-pkg-red" size={24} />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Hint */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2"
      >
        <span className="text-white/40 text-[10px] uppercase tracking-widest">Cuộn để khám phá</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/40 to-transparent" />
      </motion.div>
    </section>
  );
};

const TrustBar = () => {
  const certifications = [
    "IEC 62619", "UN38.3", "ISO 9001", "ISO 14001", "MIC INSURANCE", "NATIONWIDE SUPPORT"
  ];

  return (
    <div className="bg-white border-y border-pkg-silver py-12 relative overflow-hidden">
       <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-between items-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          {certifications.map((cert) => (
             <div key={cert} className="flex items-center gap-2 px-6 border-r border-pkg-silver last:border-0 grow shrink-0 basis-auto">
                <Award className="text-pkg-red" size={20} />
                <span className="font-manrope font-bold text-sm tracking-widest uppercase">{cert}</span>
             </div>
          ))}
       </div>
    </div>
  );
};

const AboutSection = () => {
  return (
    <section id="capability" className="py-24 bg-white relative overflow-hidden">
       <div className="absolute top-0 right-0 w-1/3 h-full industrial-grid opacity-10 pointer-events-none" />
       
       <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative order-2 lg:order-1">
             <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl skew-x-[-1deg]">
                <img 
                  src="https://picsum.photos/seed/factory_working/800/1000" 
                  alt="Manufacturing" 
                  className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pkg-red/40 to-transparent mix-blend-overlay" />
             </div>
             {/* Stats Overlay */}
             <div className="absolute -bottom-10 -right-10 glass-light p-8 rounded-2xl shadow-xl z-20 border border-pkg-red/10 w-64 hidden md:block">
                <div className="flex flex-col gap-4">
                   <div>
                      <span className="block text-pkg-red font-manrope font-extrabold text-4xl">05</span>
                      <span className="text-xs uppercase tracking-widest font-bold opacity-60">Dòng sản phẩm</span>
                   </div>
                   <div className="h-[1px] bg-pkg-silver" />
                   <div>
                      <span className="block text-pkg-red font-manrope font-extrabold text-4xl">100%</span>
                      <span className="text-xs uppercase tracking-widest font-bold opacity-60">Kiểm định nội bộ</span>
                   </div>
                </div>
             </div>
          </div>

          <div className="flex flex-col gap-6 order-1 lg:order-2">
             <div className="flex items-center gap-3">
                <div className="h-1 w-8 bg-pkg-red" />
                <span className="text-pkg-red font-manrope font-bold text-xs uppercase tracking-widest">Năng lực nội địa</span>
             </div>
             <h2 className="text-4xl md:text-5xl font-manrope font-extrabold text-pkg-black leading-tight text-balance">
                Vị thế tiên phong cho tương lai năng lượng Việt Nam
             </h2>
             <div className="flex flex-col gap-4 text-pkg-black/70 text-lg leading-relaxed font-light">
                <p>
                   PKG Battery tập trung nghiên cứu, thiết kế và cung cấp các giải pháp pin Lithium cho môi trường công nghiệp hiện đại. Chúng tôi xây dựng giá trị dựa trên nền tảng công nghệ và hiểu biết sâu sắc về điều kiện vận hành tại Việt Nam.
                </p>
                <p>
                   Không chỉ cung cấp sản phẩm, PKG Battery hướng đến vai trò của một đối tác giải pháp – đồng hành cùng doanh nghiệp trong quá trình chuyển đổi từ hệ thống ắc quy truyền thống sang nền tảng lưu trữ năng lượng hiện đại hơn, sạch hơn và bền vững hơn.
                </p>
             </div>
             
             <div className="grid grid-cols-2 gap-8 mt-4">
                <div className="flex flex-col gap-2">
                   <Users className="text-pkg-red" size={28} />
                   <h4 className="font-manrope font-bold text-lg uppercase tracking-tighter">Đội ngũ chuyên gia</h4>
                   <p className="text-sm opacity-60">Kỹ sư giàu kinh nghiệm trong lĩnh vực năng lượng tái tạo và lưu trữ.</p>
                </div>
                <div className="flex flex-col gap-2">
                   <Workflow className="text-pkg-red" size={28} />
                   <h4 className="font-manrope font-bold text-lg uppercase tracking-tighter">Triển khai linh hoạt</h4>
                   <p className="text-sm opacity-60">Tùy biến giải pháp theo đặc thù vận hành của từng doanh nghiệp.</p>
                </div>
             </div>
          </div>
       </div>
    </section>
  );
};

const VisionMission = () => {
    return (
        <section className="py-24 luxury-gradient-dark text-white relative overflow-hidden">
            <div className="absolute inset-0 industrial-grid-dark opacity-10" />
            <div className="max-w-7xl mx-auto px-6 flex flex-col gap-16 relative z-10">
                <div className="flex flex-col items-center text-center gap-4 max-w-2xl mx-auto">
                    <span className="text-pkg-red font-manrope font-bold text-xs uppercase tracking-[0.4em]">Định hướng chiến lược</span>
                    <h2 className="text-4xl font-manrope font-extrabold italic">Khát vọng chuyển đổi</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-1 px-4 md:px-0">
                    <div className="bg-white/5 border border-white/10 p-12 hover:bg-white/10 transition-colors group">
                        <Globe className="text-pkg-red mb-6" size={40} />
                        <h3 className="text-2xl font-manrope font-extrabold uppercase mb-4 tracking-tighter">Tầm nhìn</h3>
                        <p className="text-white/60 leading-relaxed font-light mb-6">
                            Thúc đẩy quá trình chuyển đổi năng lượng lưu trữ trong công nghiệp, góp phần thay thế các mô hình cũ bằng giải pháp Lithium an toàn và hiệu quả hơn.
                        </p>
                        <div className="w-8 h-[2px] bg-pkg-red group-hover:w-full transition-all duration-500" />
                    </div>
                    <div className="bg-pkg-red p-12 md:scale-110 shadow-2xl z-20">
                        <Zap className="text-white mb-6" size={40} />
                        <h3 className="text-2xl font-manrope font-extrabold uppercase mb-4 tracking-tighter">Sứ mệnh</h3>
                        <p className="text-white/90 leading-relaxed font-light mb-6">
                            Mang nguồn năng lượng sạch, an toàn và hiệu quả đến doanh nghiệp Việt thông qua công nghệ Lithium và năng lực phát triển giải pháp thực tiễn.
                        </p>
                        <div className="w-8 h-[2px] bg-white" />
                    </div>
                    <div className="bg-white/5 border border-white/10 p-12 hover:bg-white/10 transition-colors group">
                        <ShieldCheck className="text-pkg-red mb-6" size={40} />
                        <h3 className="text-2xl font-manrope font-extrabold uppercase mb-4 tracking-tighter">Giá trị</h3>
                        <p className="text-white/60 leading-relaxed font-light mb-6">
                            Đặt công nghệ làm nền tảng, lấy chất lượng làm cam kết, vận hành chính trực và xây dựng quan hệ đối tác dựa trên sự đồng hành bền vững.
                        </p>
                        <div className="w-8 h-[2px] bg-pkg-red group-hover:w-full transition-all duration-500" />
                    </div>
                </div>
            </div>
        </section>
    );
};

const ProductsSection = () => {
  const products: ProductGroup[] = [
    {
      id: 'forklift',
      title: 'Pin xe nâng điện',
      subtitle: 'Giải pháp tối ưu cho môi trường kho vận và vận hành cường độ cao.',
      cta: 'Khám phá dòng pin xe nâng',
      image: 'https://picsum.photos/seed/forklift_battery/800/600'
    },
    {
      id: 'golf',
      title: 'Pin xe điện du lịch / golf',
      subtitle: 'Nguồn năng lượng ổn định cho phương tiện dịch vụ, nghỉ dưỡng.',
      cta: 'Xem giải pháp xe điện',
      image: 'https://picsum.photos/seed/golf_cart_battery/800/600'
    },
    {
      id: 'agv',
      title: 'Pin AGV / Robot',
      subtitle: 'Thiết kế cho hệ thống tự động hóa, robot công nghiệp thông minh.',
      cta: 'Tìm hiểu pin AGV',
      image: 'https://picsum.photos/seed/agv_robot/800/600'
    },
    {
       id: 'ess',
       title: 'Hệ thống Lưu trữ ESS',
       subtitle: 'Quản lý năng lượng hiệu quả, bền vững cho doanh nghiệp.',
       cta: 'Khám phá ESS',
       image: 'https://picsum.photos/seed/ess_storage/800/600'
    }
  ];

  return (
    <section id="products" className="py-24 bg-white">
       <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
             <div className="max-w-2xl flex flex-col gap-4">
                <span className="text-pkg-red font-manrope font-bold text-xs uppercase tracking-widest">Hệ sinh thái sản phẩm</span>
                <h2 className="text-4xl md:text-5xl font-manrope font-extrabold text-pkg-black leading-tight">
                   Giải pháp năng lượng cho mọi mô hình vận hành
                </h2>
             </div>
             <button className="text-pkg-black font-manrope font-bold flex items-center gap-2 hover:text-pkg-red transition-colors group">
                XEM TẤT CẢ SẢN PHẨM
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
             </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             {products.map((product) => (
                <div key={product.id} className="relative group overflow-hidden rounded-2xl h-[450px]">
                   <img 
                    src={product.image} 
                    alt={product.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-pkg-black via-pkg-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                   <div className="absolute bottom-0 left-0 w-full p-10 flex flex-col gap-4">
                      <h3 className="text-3xl font-manrope font-extrabold text-white tracking-tighter">{product.title}</h3>
                      <p className="text-white/70 max-w-sm font-light">{product.subtitle}</p>
                      <button className="flex items-center gap-2 text-pkg-red font-bold text-sm uppercase tracking-widest mt-2 hover:text-white transition-colors">
                         {product.cta}
                         <ArrowRight size={16} />
                      </button>
                   </div>
                </div>
             ))}
          </div>
       </div>
    </section>
  );
};

const WhyPKGSection = () => {
    const benefits = [
        { title: "Tuổi thọ cao hơn", desc: "Kéo dài chu kỳ sử dụng, giảm tần suất thay thế.", icon: <Zap /> },
        { title: "Sạc nhanh vượt trội", desc: "Tối ưu thời gian vận hành thiết bị hàng ngày.", icon: <Layers /> },
        { title: "An toàn tuyệt đối", desc: "Kiểm soát QC nghiêm ngặt, chống cháy nổ.", icon: <ShieldCheck /> },
        { title: "Bảo hành 5 năm", desc: "Cam kết chất lượng dài hạn cho doanh nghiệp.", icon: <Briefcase /> },
        { title: "Hỗ trợ 24/7", desc: "Đội ngũ kỹ thuật luôn sẵn sàng hỗ trợ tại chỗ.", icon: <Phone /> },
        { title: "Tối ưu chi phí", desc: "Hoàn vốn nhanh nhờ hiệu suất và độ bền cao.", icon: <Zap /> }
    ];

    return (
        <section id="why-pkg" className="py-24 bg-pkg-silver/30 relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-20 flex flex-col items-center gap-4">
                    <span className="text-pkg-red font-manrope font-bold text-xs uppercase tracking-[0.3em]">Tại sao chọn chúng tôi</span>
                    <h2 className="text-4xl md:text-5xl font-manrope font-extrabold text-pkg-black">Ưu thế vượt trội từ niềm tin</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-pkg-silver border border-pkg-silver overflow-hidden rounded-2xl shadow-xl">
                    {benefits.map((b, idx) => (
                        <div key={idx} className="bg-white p-12 hover:bg-pkg-red group transition-all duration-500 hover:z-10">
                            <div className="text-pkg-red group-hover:text-white mb-6 transform transition-transform group-hover:scale-110">
                                {React.cloneElement(b.icon as React.ReactElement, { size: 40, strokeWidth: 1.5 })}
                            </div>
                            <h3 className="text-xl font-manrope font-extrabold text-pkg-black group-hover:text-white mb-3 uppercase tracking-tighter">
                                {b.title}
                            </h3>
                            <p className="text-pkg-black/60 group-hover:text-white/80 leading-relaxed font-light">
                                {b.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const QualityCapability = () => {
    return (
        <section className="py-24 bg-pkg-black text-white overflow-hidden relative">
            <div className="absolute inset-0 industrial-grid-dark opacity-10" />
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <div className="flex flex-col gap-8 order-2 lg:order-1">
                    <div className="flex items-center gap-3">
                        <div className="h-1 w-8 bg-pkg-red" />
                        <span className="text-pkg-red font-manrope font-bold text-xs uppercase tracking-widest">Năng lực sản xuất</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-manrope font-extrabold leading-tight">
                        Chất lượng được <br />
                        <span className="italic font-light">kiểm soát nghiêm ngặt</span>
                    </h2>
                    <p className="text-white/60 text-lg leading-relaxed font-light max-w-xl">
                        PKG Battery xây dựng quy trình kiểm soát chất lượng từ khâu thiết kế R&D, lựa chọn cell pin hạng A (Tier 1), đến sản xuất và đo kiểm đầu ra. Mọi sản phẩm đều trải qua test-run thực tế trước khi bàn giao.
                    </p>
                    
                    <div className="space-y-6">
                        {[
                            "Kiểm soát Cell pin theo tiêu chuẩn Grade A",
                            "Sản xuất Module tự động hóa độ chính xác cao",
                            "Hệ thống quản lý pin (BMS) thông minh tự phát triển",
                            "Quy trình kiểm định an toàn 12 bước nghiêm ngặt"
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-4 group">
                                <div className="w-6 h-6 rounded-full border border-pkg-red flex items-center justify-center text-pkg-red group-hover:bg-pkg-red group-hover:text-white transition-colors">
                                    <CheckCircle2 size={14} />
                                </div>
                                <span className="font-manrope font-bold text-sm tracking-wide uppercase opacity-80 group-hover:opacity-100 transition-opacity">
                                    {item}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="relative order-1 lg:order-2">
                    <div className="relative z-10 grid grid-cols-2 gap-4">
                        <div className="space-y-4">
                            <img src="https://picsum.photos/seed/battery_tech_1/400/500" alt="Tech" className="rounded-2xl grayscale hover:grayscale-0 transition-all duration-700" referrerPolicy="no-referrer" />
                            <img src="https://picsum.photos/seed/battery_tech_2/400/300" alt="QC" className="rounded-2xl grayscale hover:grayscale-0 transition-all duration-700" referrerPolicy="no-referrer" />
                        </div>
                        <div className="space-y-4 pt-12">
                            <img src="https://picsum.photos/seed/battery_tech_3/400/400" alt="Production" className="rounded-2xl grayscale hover:grayscale-0 transition-all duration-700" referrerPolicy="no-referrer" />
                            <img src="https://picsum.photos/seed/battery_tech_4/400/600" alt="Testing" className="rounded-2xl grayscale hover:grayscale-0 transition-all duration-700" referrerPolicy="no-referrer" />
                        </div>
                    </div>
                    {/* Floating Accent */}
                    <div className="absolute -top-10 -right-10 w-64 h-64 bg-pkg-red/30 blur-[120px] rounded-full pointer-events-none" />
                </div>
            </div>
        </section>
    );
};

const DealerSection = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [activeFilter, setActiveFilter] = useState('all');
    const [selectedLocation, setSelectedLocation] = useState<typeof locations[0] | null>(null);

    const locations = [
        { id: 1, city: "Hà Nội", type: "branch", address: "KCN Bắc Thăng Long, Đông Anh", phone: "1900 88 99 01", pos: { top: '15%', left: '48%' } },
        { id: 2, city: "Hải Phòng", type: "dealer", address: "Lê Hồng Phong, Ngô Quyền", phone: "1900 88 99 02", pos: { top: '18%', left: '52%' } },
        { id: 3, city: "Đà Nẵng", type: "branch", address: "KCN Hòa Khánh, Liên Chiểu", phone: "1900 88 99 03", pos: { top: '45%', left: '60%' } },
        { id: 4, city: "Bình Dương", type: "dealer", address: "KCN VSIP, Thuận An", phone: "1900 88 99 04", pos: { top: '80%', left: '42%' } },
        { id: 5, city: "TP. Hồ Chí Minh", type: "branch", address: "Khu Chế Xuất Tân Thuận, Quận 7", phone: "1900 88 99 00", pos: { top: '82%', left: '40%' } },
        { id: 6, city: "Đồng Nai", type: "dealer", address: "KCN Amata, Biên Hòa", phone: "1900 88 99 06", pos: { top: '78%', left: '45%' } },
        { id: 7, city: "Cần Thơ", type: "service", address: "KCN Trà Nóc, Bình Thủy", phone: "1900 88 99 07", pos: { top: '88%', left: '35%' } },
        { id: 8, city: "Bắc Ninh", type: "dealer", address: "KCN Quế Võ", phone: "1900 88 99 08", pos: { top: '13%', left: '50%' } },
    ];

    const filteredLocations = locations.filter(loc => {
        const matchesSearch = loc.city.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            loc.address.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesFilter = activeFilter === 'all' || loc.type === activeFilter;
        return matchesSearch && matchesFilter;
    });

    const getTypeName = (type: string) => {
        switch(type) {
            case 'branch': return 'Chi nhánh';
            case 'dealer': return 'Đại lý';
            case 'service': return 'Trung tâm dịch vụ';
            default: return 'Đối tác';
        }
    };

    return (
        <section id="dealers" className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                    <div className="lg:col-span-5 flex flex-col gap-8">
                        <div className="flex flex-col gap-4">
                            <span className="text-pkg-red font-manrope font-bold text-xs uppercase tracking-widest italic">Mạng lưới hiện diện</span>
                            <h2 className="text-4xl md:text-5xl font-manrope font-extrabold text-pkg-black leading-tight tracking-tighter">
                                Mở rộng quy mô <br />
                                <span className="text-pkg-red">phục vụ toàn quốc</span>
                            </h2>
                            <p className="text-pkg-black/70 text-lg font-light leading-relaxed">
                                PKG Battery đang xây dựng mạng lưới hiện diện trên toàn quốc nhằm mang giải pháp pin Lithium chất lượng cao đến gần hơn với doanh nghiệp. Hệ thống giúp tăng tốc độ hỗ trợ và tạo nền tảng tăng trưởng bền vững.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-8 items-center py-6 border-y border-pkg-silver">
                            <div>
                                <span className="block text-4xl font-manrope font-extrabold text-pkg-black">08+</span>
                                <span className="text-[10px] uppercase font-bold opacity-50 tracking-widest">Điểm hiện diện toàn quốc</span>
                            </div>
                            <div className="w-[1px] h-10 bg-pkg-silver hidden sm:block" />
                            <p className="text-sm text-pkg-black/50 italic max-w-[200px]">
                                Mạng lưới đang tiếp tục mở rộng tại các tỉnh thành trọng điểm.
                            </p>
                        </div>

                        {/* Search & Filter */}
                        <div className="flex flex-col gap-4">
                            <div className="relative">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-pkg-black/30" size={18} />
                                <input 
                                    type="text" 
                                    placeholder="Tìm kiếm theo tỉnh thành..." 
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full bg-pkg-silver/20 border border-pkg-silver p-4 pl-12 focus:border-pkg-red outline-none transition-all rounded-lg"
                                />
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {['all', 'branch', 'dealer', 'service'].map((f) => (
                                    <button 
                                        key={f}
                                        onClick={() => setActiveFilter(f)}
                                        className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                                            activeFilter === f ? 'bg-pkg-red text-white' : 'bg-pkg-silver/30 text-pkg-black/40 hover:bg-pkg-silver/50'
                                        }`}
                                    >
                                        {f === 'all' ? 'Tất cả' : getTypeName(f)}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Results List */}
                        <div className="flex flex-col gap-3 max-h-[350px] overflow-y-auto pr-2 custom-scrollbar">
                            {filteredLocations.map((loc) => (
                                <div 
                                    key={loc.id} 
                                    onClick={() => setSelectedLocation(loc)}
                                    className={`p-4 border rounded-xl cursor-pointer transition-all ${
                                        selectedLocation?.id === loc.id ? 'border-pkg-red bg-pkg-red/5' : 'border-pkg-silver hover:bg-pkg-silver/10'
                                    }`}
                                >
                                    <div className="flex justify-between items-start mb-1">
                                        <h4 className="font-manrope font-extrabold text-pkg-black">{loc.city}</h4>
                                        <span className="text-[9px] uppercase font-bold text-pkg-red border border-pkg-red/30 px-2 py-0.5 rounded">
                                            {getTypeName(loc.type)}
                                        </span>
                                    </div>
                                    <p className="text-xs opacity-60 font-light mb-2">{loc.address}</p>
                                    <div className="flex items-center gap-2 text-pkg-red">
                                        <Phone size={12} />
                                        <span className="text-xs font-mono font-bold">{loc.phone}</span>
                                    </div>
                                </div>
                            ))}
                            {filteredLocations.length === 0 && (
                                <div className="py-12 text-center opacity-30 italic">
                                    Không tìm thấy địa điểm phù hợp
                                </div>
                            )}
                        </div>

                        <div className="flex flex-wrap gap-4 mt-4">
                            <button className="px-6 py-3 bg-pkg-black text-white text-xs font-bold uppercase tracking-widest hover:bg-pkg-red transition-all">Tìm điểm gần bạn</button>
                            <button className="px-6 py-3 border border-pkg-black text-pkg-black text-xs font-bold uppercase tracking-widest hover:bg-pkg-black hover:text-white transition-all">Trở thành đối tác</button>
                        </div>
                    </div>

                    <div className="lg:col-span-7 relative">
                        {/* Stylized Vietnam Map Container */}
                        <div className="relative aspect-[3/4] bg-pkg-silver/10 rounded-[40px] border border-pkg-silver/30 overflow-hidden flex items-center justify-center industrial-grid">
                            
                            {/* Stylized SVG Map Placeholder (Minimalist vertical shape) */}
                            <svg viewBox="0 0 400 800" className="w-full h-full max-h-[700px] opacity-20 text-pkg-black transition-all duration-1000">
                                <path 
                                    fill="currentColor" 
                                    d="M180,50 L195,65 L205,60 L215,80 L200,100 L210,120 L190,140 L200,160 L230,220 L240,280 L250,350 L260,420 L230,480 L200,550 L180,620 L160,680 L140,730 L110,760 L90,780 L70,770 L100,740 L130,700 L160,650 L180,600 L200,530 L220,460 L230,400 L220,320 L200,240 L180,180 L160,120 L165,80 L175,60 Z" 
                                    className="animate-pulse"
                                />
                                {/* Simplified network lines */}
                                <g className="stroke-pkg-red/10 stroke-[0.5] fill-none">
                                    <path d="M190,100 L240,350" />
                                    <path d="M240,350 L150,700" />
                                    <path d="M190,100 Q250,400 150,700" className="dash-line" />
                                </g>
                            </svg>

                            {/* Flash Markers */}
                            <AnimatePresence>
                                {locations.map((loc) => {
                                    const isActive = selectedLocation?.id === loc.id;
                                    const isVisible = activeFilter === 'all' || loc.type === activeFilter;
                                    
                                    if (!isVisible) return null;

                                    return (
                                        <motion.div
                                            key={loc.id}
                                            initial={{ scale: 0, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 1 }}
                                            exit={{ scale: 0, opacity: 0 }}
                                            whileHover={{ scale: 1.2 }}
                                            onClick={() => setSelectedLocation(loc)}
                                            style={{ top: loc.pos.top, left: loc.pos.left }}
                                            className={`absolute cursor-pointer z-20 group`}
                                        >
                                            <div className={`relative w-4 h-4`}>
                                                <div className={`absolute inset-0 rounded-full animate-ping ${isActive ? 'bg-pkg-red' : 'bg-pkg-red/40'}`} />
                                                <div className={`absolute inset-0 rounded-full ${isActive ? 'bg-pkg-red shadow-[0_0_15px_rgba(214,31,38,0.8)]' : 'bg-pkg-red/60 group-hover:bg-pkg-red'} transition-all`} />
                                            </div>
                                            
                                            {/* Hover Tooltip */}
                                            <div className={`absolute left-1/2 -translate-x-1/2 bottom-full mb-3 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all pointer-events-none transform translate-y-2 group-hover:translate-y-0 ${isActive ? 'opacity-100 translate-y-0' : ''}`}>
                                                <div className="glass-dark px-4 py-2 rounded-lg border border-white/10 flex flex-col items-center">
                                                    <span className="text-white font-bold text-[10px] uppercase tracking-widest">{loc.city}</span>
                                                    <span className="text-pkg-red font-bold text-[8px] uppercase">{getTypeName(loc.type)}</span>
                                                </div>
                                                <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-pkg-black/80 mx-auto" />
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </AnimatePresence>

                            {/* Selection Detail Overlay */}
                            <AnimatePresence>
                                {selectedLocation && (
                                    <motion.div 
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        exit={{ y: 20, opacity: 0 }}
                                        className="absolute bottom-10 left-10 right-10 glass-dark p-8 rounded-2xl z-30 border border-white/20 shadow-2xl"
                                    >
                                        <button 
                                            onClick={() => setSelectedLocation(null)}
                                            className="absolute top-4 right-4 text-white/40 hover:text-white"
                                        >
                                            <X size={16} />
                                        </button>
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="w-12 h-12 rounded-xl bg-pkg-red flex items-center justify-center text-white">
                                                <MapPin size={24} />
                                            </div>
                                            <div>
                                                <h3 className="text-2xl font-manrope font-extrabold text-white tracking-tighter">{selectedLocation.city}</h3>
                                                <span className="text-[10px] text-pkg-red font-bold uppercase tracking-[0.2em]">{getTypeName(selectedLocation.type)}</span>
                                            </div>
                                        </div>
                                        <div className="space-y-3">
                                            <div className="flex gap-3 text-sm text-white/60">
                                                <MapPin className="shrink-0 text-pkg-red" size={16} />
                                                <span>{selectedLocation.address}</span>
                                            </div>
                                            <div className="flex gap-3 text-sm text-white/60">
                                                <Phone className="shrink-0 text-pkg-red" size={16} />
                                                <span className="font-mono">{selectedLocation.phone}</span>
                                            </div>
                                        </div>
                                        <button className="w-full mt-6 py-4 bg-white text-pkg-black font-bold uppercase text-xs tracking-widest hover:bg-pkg-red hover:text-white transition-all">
                                            CHỈ ĐƯỜNG CHI TIẾT
                                        </button>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {/* Map Decorative Text */}
                            <div className="absolute top-10 left-10 pointer-events-none">
                                <span className="block text-[60px] font-manrope font-extrabold text-pkg-black/[0.03] leading-none select-none">VN NETWORK</span>
                                <span className="block text-[10px] font-mono text-pkg-black/20 uppercase tracking-[1em] mt-2 select-none">Precision Logistics</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{ __html: `
                .custom-scrollbar::-webkit-scrollbar {
                    width: 4px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: rgba(214, 31, 38, 0.1);
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: rgba(214, 31, 38, 0.3);
                }
                .dash-line {
                    stroke-dasharray: 4 4;
                    animation: dash 20s linear infinite;
                }
                @keyframes dash {
                    to { stroke-dashoffset: -100; }
                }
            `}} />
        </section>
    );
};

const ContactSection = () => {
    return (
        <section className="py-24 bg-pkg-silver/20 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                    <div className="flex flex-col gap-6 max-w-xl">
                        <span className="text-pkg-red font-manrope font-bold text-xs uppercase tracking-widest">Liên hệ hợp tác</span>
                        <h2 className="text-4xl md:text-6xl font-manrope font-extrabold text-pkg-black leading-tight">
                            Bắt đầu nâng cấp <br /> nãng lượng của bạn
                        </h2>
                        <p className="text-pkg-black/70 text-lg font-light leading-relaxed">
                            Đội ngũ PKG Battery sẵn sàng tư vấn các giải pháp tối ưu phù hợp với mô hình vận hành và ngân sách đầu tư của doanh nghiệp bạn.
                        </p>
                        
                        <div className="flex flex-col gap-6 mt-6">
                            <div className="flex items-center gap-4 text-pkg-black">
                                <div className="w-12 h-12 rounded-full border border-pkg-red flex items-center justify-center text-pkg-red">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <span className="block text-xs uppercase font-bold opacity-50 tracking-widest leading-none mb-1">Email liên hệ</span>
                                    <span className="text-lg font-manrope font-bold">contact@pkgbattery.com</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 text-pkg-black">
                                <div className="w-12 h-12 rounded-full border border-pkg-red flex items-center justify-center text-pkg-red">
                                    <Phone size={20} />
                                </div>
                                <div>
                                    <span className="block text-xs uppercase font-bold opacity-50 tracking-widest leading-none mb-1">Hotline tư vấn</span>
                                    <span className="text-lg font-manrope font-bold">1900 88 99 XX</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-10 md:p-12 rounded-3xl shadow-2xl border border-pkg-silver relative">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-pkg-red/5 rounded-full -mr-16 -mt-16 blur-3xl" />
                        <form className="flex flex-col gap-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="flex flex-col gap-2">
                                    <label className="text-[10px] uppercase font-extrabold tracking-widest opacity-50">Họ và tên</label>
                                    <input type="text" placeholder="Nguyễn Văn A" className="bg-pkg-silver/20 border-b border-pkg-silver p-4 focus:border-pkg-red outline-none transition-all" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-[10px] uppercase font-extrabold tracking-widest opacity-50">Số điện thoại</label>
                                    <input type="tel" placeholder="0901 xxx xxx" className="bg-pkg-silver/20 border-b border-pkg-silver p-4 focus:border-pkg-red outline-none transition-all" />
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-[10px] uppercase font-extrabold tracking-widest opacity-50">Tên công ty</label>
                                <input type="text" placeholder="PKG Industrial Ltd." className="bg-pkg-silver/20 border-b border-pkg-silver p-4 focus:border-pkg-red outline-none transition-all" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-[10px] uppercase font-extrabold tracking-widest opacity-50">Nhu cầu tư vấn</label>
                                <select className="bg-pkg-silver/20 border-b border-pkg-silver p-4 focus:border-pkg-red outline-none transition-all appearance-none cursor-pointer">
                                    <option>Pin xe nâng điện</option>
                                    <option>Pin AGV / Robot</option>
                                    <option>Pin xe golf / du lịch</option>
                                    <option>Hệ thống lưu trữ ESS</option>
                                    <option>Hợp tác đại lý</option>
                                </select>
                            </div>
                            <button className="w-full py-5 luxury-gradient-red text-white font-manrope font-extrabold tracking-widest mt-4 hover:shadow-lg transition-all active:scale-95">
                                GỬI YÊU CẦU TƯ VẤN
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

const Footer = () => {
    return (
        <footer className="bg-pkg-black text-white pt-24 pb-12">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
                    <div className="flex flex-col gap-6">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-pkg-red flex items-center justify-center rounded-sm rotate-45">
                                <span className="text-white font-manrope font-extrabold -rotate-45">P</span>
                            </div>
                            <span className="text-white font-manrope font-extrabold text-2xl tracking-tighter">PKG Battery</span>
                        </div>
                        <p className="text-white/40 text-sm leading-relaxed font-light">
                            Đơn vị cung cấp giải pháp năng lượng Lithium hàng đầu cho các ứng dụng công nghiệp và vận hành tại Việt Nam.
                        </p>
                    </div>
                    
                    <div>
                        <h4 className="font-manrope font-extrabold uppercase text-sm tracking-widest mb-8 text-pkg-red">Sản phẩm</h4>
                        <ul className="flex flex-col gap-4 text-white/60 text-sm font-light">
                            <li><a href="#" className="hover:text-white transition-colors">Pin xe nâng điện</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Pin AGV / Robot</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Pin xe điện golf</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Giải pháp lưu trữ ESS</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Trạm sạc nhanh</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-manrope font-extrabold uppercase text-sm tracking-widest mb-8 text-pkg-red">Doanh nghiệp</h4>
                        <ul className="flex flex-col gap-4 text-white/60 text-sm font-light">
                            <li><a href="#" className="hover:text-white transition-colors">Về PKG Battery</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Năng lực sản xuất</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Chính sách đại lý</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Tuyển dụng</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Tin tức & Sự kiện</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-manrope font-extrabold uppercase text-sm tracking-widest mb-8 text-pkg-red">Hỗ trợ</h4>
                        <ul className="flex flex-col gap-4 text-white/60 text-sm font-light">
                            <li><a href="#" className="hover:text-white transition-colors">Tài liệu kỹ thuật</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Trung tâm bảo hành</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Câu hỏi thường gặp</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Liên hệ báo giá</a></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <span className="text-white/20 text-[10px] uppercase font-bold tracking-widest italic">© 2026 PKG Battery. All rights reserved.</span>
                    <div className="flex gap-8 text-white/20">
                        <a href="#" className="hover:text-white transition-colors"><Globe size={18} /></a>
                        <a href="#" className="hover:text-white transition-colors"><Search size={18} /></a>
                        <a href="#" className="hover:text-white transition-colors"><Users size={18} /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

const CaseStudiesSection = () => {
    const cases = [
        { title: "Logistics Smart Hub", area: "Kho vận thông minh", desc: "Triển khai hệ thống pin Lithium cho 50 xe nâng điện, giúp tăng 40% thời gian vận hành.", img: "https://picsum.photos/seed/case1/600/800" },
        { title: "Resort Green Move", area: "Khu nghỉ dưỡng", desc: "Chuyển đổi toàn bộ đội xe golf sang pin Lithium PKG, giảm chi phí bảo trì 70%.", img: "https://picsum.photos/seed/case2/600/800" },
        { title: "Automated Factory", area: "Nhà máy tự động", desc: "Cung cấp giải pháp pin AGV cho dây chuyền sản xuất linh kiện điện tử.", img: "https://picsum.photos/seed/case3/600/800" }
    ];

    return (
        <section className="py-24 bg-white relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div className="max-w-xl">
                        <span className="text-pkg-red font-manrope font-bold text-xs uppercase tracking-widest">Ứng dụng thực tế</span>
                        <h2 className="text-4xl md:text-5xl font-manrope font-extrabold text-pkg-black mt-4 leading-tight">Giải pháp đã được khẳng định trên thị trường</h2>
                    </div>
                    <button className="px-8 py-4 border border-pkg-black text-pkg-black font-bold hover:bg-pkg-black hover:text-white transition-all duration-300">
                        TẤT CẢ CASE STUDY
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {cases.map((c, i) => (
                        <div key={i} className="group cursor-pointer">
                            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl mb-6">
                                <img src={c.img} alt={c.title} className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0" referrerPolicy="no-referrer" />
                                <div className="absolute top-6 left-6 px-4 py-2 glass-light rounded-full text-[10px] font-bold uppercase tracking-widest">
                                    {c.area}
                                </div>
                            </div>
                            <h3 className="text-2xl font-manrope font-extrabold text-pkg-black mb-2 group-hover:text-pkg-red transition-colors">{c.title}</h3>
                            <p className="text-pkg-black/60 font-light text-sm">{c.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const CertificatesSection = () => {
    return (
        <section className="py-20 bg-pkg-silver/10 border-y border-pkg-silver">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-sm font-manrope font-bold uppercase tracking-[0.4em] text-pkg-black/40">Tiêu chuẩn & Chất lượng quốc tế</h2>
                </div>
                <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-700">
                    {/* Placeholder for quality badges as high-end brands do */}
                    <div className="flex flex-col items-center gap-2">
                        <div className="w-16 h-16 border border-pkg-black/20 rounded-full flex items-center justify-center p-3">
                            <ShieldCheck size={32} strokeWidth={1} />
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-tighter">IEC 62619</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <div className="w-16 h-16 border border-pkg-black/20 rounded-full flex items-center justify-center p-3">
                            <Zap size={32} strokeWidth={1} />
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-tighter">UN38.3</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <div className="w-16 h-16 border border-pkg-black/20 rounded-full flex items-center justify-center p-3">
                            <Award size={32} strokeWidth={1} />
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-tighter">ISO 9001</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <div className="w-16 h-16 border border-pkg-black/20 rounded-full flex items-center justify-center p-3">
                            <Factory size={32} strokeWidth={1} />
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-tighter">ISO 14001</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <div className="w-16 h-16 border border-pkg-black/20 rounded-full flex items-center justify-center p-3">
                            <Briefcase size={32} strokeWidth={1} />
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-tighter">MIC Insurance</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <AboutSection />
        <VisionMission />
        <ProductsSection />
        <WhyPKGSection />
        <QualityCapability />
        <CertificatesSection />
        <CaseStudiesSection />
        <DealerSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
