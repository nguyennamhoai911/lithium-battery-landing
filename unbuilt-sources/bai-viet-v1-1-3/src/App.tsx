/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';
import { 
  ChevronRight, 
  Clock, 
  Calendar, 
  User, 
  Download, 
  Play, 
  ArrowRight, 
  CheckCircle2, 
  BarChart3, 
  Cpu, 
  ShieldCheck, 
  Zap, 
  Menu, 
  X,
  Globe,
  Quote,
  HelpCircle,
  FileText
} from 'lucide-react';

// --- Components ---

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Giới thiệu', href: '#' },
    { name: 'Sản phẩm', href: '#' },
    { name: 'Giải pháp', href: '#' },
    { name: 'Bài viết', href: '#', active: true },
    { name: 'Dự án', href: '#' },
    { name: 'Liên hệ', href: '#' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-md border-b border-black/5 py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-10 h-10 bg-brand-red flex items-center justify-center text-white font-bold text-xl">P</div>
          <div className="flex flex-col leading-none">
            <span className="font-display font-bold text-xl tracking-tighter">PKG</span>
            <span className="text-[10px] font-bold text-brand-gray tracking-[0.2em] uppercase">Battery</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-brand-red relative py-2 ${
                item.active ? 'text-brand-red' : 'text-brand-black'
              }`}
            >
              {item.name}
              {item.active && (
                <motion.div 
                  layoutId="nav-underline" 
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-red"
                />
              )}
            </a>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-6">
          <div className="hidden sm:flex items-center gap-2 text-xs font-bold text-brand-gray uppercase tracking-wider cursor-pointer hover:text-brand-black transition-colors">
            <Globe size={14} />
            <span>VI / EN</span>
          </div>
          <button className="hidden sm:block px-6 py-2.5 bg-brand-black text-white text-xs font-bold uppercase tracking-widest hover:bg-brand-red transition-all duration-300">
            Nhận tư vấn
          </button>
          
          <button 
            className="lg:hidden text-brand-black"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-white z-[60] p-6 lg:hidden"
          >
            <div className="flex justify-between items-center mb-12">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-brand-red flex items-center justify-center text-white font-bold text-lg">P</div>
                <span className="font-display font-bold text-lg tracking-tighter">PKG Battery</span>
              </div>
              <button onClick={() => setMobileMenuOpen(false)}>
                <X size={24} />
              </button>
            </div>
            <div className="flex flex-col gap-6">
              {navItems.map((item) => (
                <a 
                  key={item.name} 
                  href={item.href}
                  className="text-2xl font-display font-bold hover:text-brand-red transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <hr className="border-black/5" />
              <button className="w-full py-4 bg-brand-red text-white text-sm font-bold uppercase tracking-widest">
                Nhận tư vấn ngay
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const ProgressBar = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="fixed top-0 left-0 right-0 h-1 bg-white/10 z-[100] pointer-events-none">
      <motion.div 
        className="h-full bg-brand-red origin-left"
        style={{ scaleX }}
      />
    </div>
  );
};

const Breadcrumb = () => (
  <div className="container mx-auto px-6 mb-12">
    <div className="flex items-center gap-2 text-xs font-medium text-brand-gray uppercase tracking-widest">
      <a href="#" className="hover:text-brand-black transition-colors">Trang chủ</a>
      <ChevronRight size={10} />
      <a href="#" className="hover:text-brand-black transition-colors">Bài viết</a>
      <ChevronRight size={10} />
      <a href="#" className="hover:text-brand-black transition-colors">Giải pháp</a>
      <ChevronRight size={10} />
      <span className="text-brand-black truncate">Tối ưu hiệu suất xe nâng điện</span>
    </div>
  </div>
);

const Hero = () => (
  <section className="container mx-auto px-6 mb-20 lg:mb-32 pt-24 lg:pt-32">
    <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
      {/* Left Content */}
      <div className="flex-1 max-w-2xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-3 py-1 bg-brand-red text-white text-[10px] font-bold uppercase tracking-[0.2em] mb-8">
            Technical Analysis
          </span>
          <h1 className="text-5xl lg:text-7xl font-bold leading-[1.05] mb-8">
            Tối ưu hóa hiệu suất xe nâng với <span className="text-brand-red italic">Pin Lithium-ion</span>
          </h1>
          <p className="text-xl text-brand-gray leading-relaxed mb-10 max-w-xl">
            Phân tích chuyên sâu về lộ trình chuyển đổi từ ắc quy chì sang pin Lithium, đánh giá bài toán kinh tế ROI và những thay đổi cốt lõi trong vận hành kho bãi hiện đại.
          </p>
          
          <div className="flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-black/5 pt-8">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-brand-light-gray flex items-center justify-center border border-black/5">
                <User size={16} className="text-brand-gray" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-brand-gray font-bold uppercase tracking-wider">Tác giả</span>
                <span className="text-sm font-bold">Kỹ sư Minh Phạm</span>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex flex-col">
                <span className="text-[10px] text-brand-gray font-bold uppercase tracking-wider">Ngày cập nhật</span>
                <span className="text-sm font-bold">25 Tháng 4, 2024</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-brand-gray font-bold uppercase tracking-wider">Thời gian đọc</span>
                <span className="text-sm font-bold">12 phút</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Right Image */}
      <div className="flex-1">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative aspect-[16/10] bg-brand-light-gray overflow-hidden group shadow-2xl"
        >
          <img 
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop" 
            alt="Industrial Warehouse Forklift" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60" />
        </motion.div>
      </div>
    </div>
  </section>
);

const QuickInsights = () => {
  const insights = [
    {
      id: '01',
      title: 'Giảm 70% Chi Phí Vận Hành',
      desc: 'Pin Lithium giúp loại bỏ hoàn toàn chi phí bảo trì định kỳ, nhân công châm nước cất và xây dựng phòng sạc riêng biệt.'
    },
    {
      id: '02',
      title: 'Sạc Cơ Hội (Opportunity Charging)',
      desc: 'Khả năng sạc nhanh linh hoạt trong giờ nghỉ giúp xe vận hành 3 ca liên tục mà không cần thay pin dự phòng.'
    },
    {
      id: '03',
      title: 'Vòng Đời Gấp 3 Lần',
      desc: 'Với hơn 3.500 chu kỳ sạc-xả, pin Lithium đạt tuổi thọ 7-10 năm, vượt xa mức 3 năm trung bình của ắc quy chì.'
    }
  ];

  return (
    <section className="container mx-auto px-6 mb-32">
      <div className="grid grid-cols-1 md:grid-cols-3 border-y border-black/5">
        {insights.map((item) => (
          <div key={item.id} className="p-8 lg:p-12 border-l border-black/5 first:border-l-0 relative group overflow-hidden">
            <span className="absolute -right-4 -top-8 text-[120px] font-display font-black text-brand-light-gray group-hover:text-brand-red/5 transition-colors leading-none pointer-events-none">
              {item.id}
            </span>
            <div className="relative z-10">
              <div className="w-12 h-1 bg-brand-red mb-6" />
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <p className="text-brand-gray leading-relaxed text-sm">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const TOC = () => {
  const [activeId, setActiveId] = useState('');
  
  const sections = [
    { id: 'tong-quan', title: '1. Tổng quan xu hướng' },
    { id: 'ky-thuat-pin', title: '2. Công nghệ lõi & BMS' },
    { id: 'hieu-suat-sac', title: '3. Hiệu suất sạc cơ hội' },
    { id: 'bai-toan-roi', title: '4. Phân tích ROI & TCO' },
    { id: 'tinh-nang-an-toan', title: '5. Tính năng an toàn' },
    { id: 'bao-tri', title: '6. Quy trình bảo trì' },
    { id: 'quan-ly-doi-xe', title: '7. Quản lý đội xe thông minh' },
    { id: 'huong-dan-chuyen-doi', title: '8. Hướng dẫn chuyển đổi' },
    { id: 'faq', title: '9. Câu hỏi thường gặp' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-100px 0px -70% 0px' }
    );

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <aside className="hidden lg:block w-64 shrink-0 sticky top-32 self-start">
      <div className="flex items-center gap-2 mb-6">
        <div className="w-4 h-4 bg-brand-red" />
        <span className="text-sm font-bold uppercase tracking-widest">Mục lục</span>
      </div>
      <nav className="flex flex-col gap-1 border-l border-black/5">
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className={`pl-4 py-2 text-xs font-medium transition-all border-l-2 -ml-[1.5px] hover:text-brand-red ${
              activeId === section.id 
                ? 'border-brand-red text-brand-red font-bold' 
                : 'border-transparent text-brand-gray'
            }`}
          >
            {section.title}
          </a>
        ))}
      </nav>
      
      <div className="mt-12 p-6 bg-brand-light-gray">
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-gray mb-4">Partner Support</p>
        <p className="text-sm font-bold mb-6">Tìm kiếm giải pháp năng lượng cho doanh nghiệp?</p>
        <button className="flex items-center gap-2 group text-brand-red text-xs font-bold uppercase tracking-widest">
          Chat với chuyên gia
          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </aside>
  );
};

const Section = ({ id, title, children }: { id: string; title: string; children: React.ReactNode }) => (
  <section id={id} className="mb-20 last:mb-0">
    <h2 className="text-3xl md:text-4xl font-bold mb-8 scroll-mt-32">{title}</h2>
    <div className="article-content">
      {children}
    </div>
  </section>
);

const PremiumTable = ({ headers, rows }: { headers: string[], rows: string[][] }) => (
  <div className="my-10 overflow-hidden border border-black/5 shadow-sm">
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-brand-black text-white">
            {headers.map((h) => (
              <th key={h} className="px-6 py-4 text-xs font-bold uppercase tracking-widest whitespace-nowrap">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-black/5">
          {rows.map((row, i) => (
            <tr key={i} className="group hover:bg-brand-light-gray transition-colors">
              {row.map((cell, j) => (
                <td key={j} className={`px-6 py-4 text-sm font-medium ${j === 0 ? 'text-brand-black font-bold' : 'text-brand-gray'}`}>
                  {cell === 'Yes' ? <CheckCircle2 size={16} className="text-green-500" /> : cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const DownloadBlock = ({ title, type, size }: { title: string, type: string, size: string }) => (
  <div className="flex items-center justify-between p-6 bg-brand-light-gray border-l-4 border-brand-red group hover:bg-white transition-all cursor-pointer shadow-sm hover:shadow-md my-8">
    <div className="flex items-center gap-4">
      <div className="p-3 bg-brand-red/10 text-brand-red rounded-sm">
        <FileText size={24} />
      </div>
      <div>
        <h4 className="font-bold text-sm">{title}</h4>
        <p className="text-[10px] text-brand-gray font-bold uppercase tracking-widest">{type} • {size}</p>
      </div>
    </div>
    <button className="p-2 border border-black/10 rounded-full group-hover:bg-brand-red group-hover:border-brand-red group-hover:text-white transition-all">
      <Download size={18} />
    </button>
  </div>
);

const QuoteBlock = ({ quote, author, role }: { quote: string, author: string, role: string }) => (
  <div className="my-16 flex gap-8">
    <Quote size={48} className="text-brand-red flex-shrink-0 opacity-20" />
    <div className="flex flex-col">
      <blockquote className="text-2xl lg:text-3xl font-display font-medium italic leading-tight mb-6">
        "{quote}"
      </blockquote>
      <div className="flex items-center gap-3">
        <div className="w-10 h-[1.5px] bg-brand-red" />
        <div className="flex flex-col">
          <span className="text-sm font-bold">{author}</span>
          <span className="text-[10px] text-brand-gray font-bold uppercase tracking-widest">{role}</span>
        </div>
      </div>
    </div>
  </div>
);

const VideoBlock = ({ poster }: { poster: string }) => (
  <div className="relative aspect-[16/9] bg-black my-12 group overflow-hidden shadow-2xl">
    <img 
      src={poster} 
      alt="Video Poster" 
      className="w-full h-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105"
    />
    <button className="absolute inset-0 flex items-center justify-center">
      <div className="w-20 h-20 bg-brand-red text-white flex items-center justify-center rounded-sm transition-all duration-300 group-hover:scale-110 shadow-xl group-hover:shadow-brand-red/30">
        <Play size={28} fill="currentColor" />
      </div>
    </button>
    <div className="absolute bottom-6 left-6 flex items-center gap-3">
      <div className="px-3 py-1 bg-white/20 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-[0.2em] border border-white/30">
        Product Explainer
      </div>
      <span className="text-white text-xs font-bold drop-shadow-md">Xem cách hệ thống BMS PKG vận hành</span>
    </div>
  </div>
);

const ImageBlock = ({ src, caption, ratio = '16/9' }: { src: string, caption: string, ratio?: string }) => (
  <figure className="my-12">
    <div className={`relative overflow-hidden group shadow-lg mb-4`} style={{ aspectRatio: ratio }}>
      <img 
        src={src} 
        alt={caption} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
    </div>
    <figcaption className="text-xs text-brand-gray font-medium italic text-center px-4">
      {caption}
    </figcaption>
  </figure>
);

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-black/5 last:border-0 overflow-hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-6 text-left hover:text-brand-red transition-colors"
      >
        <h4 className="text-base font-bold flex items-center gap-4">
          <HelpCircle size={18} className="text-brand-red opacity-50" />
          {question}
        </h4>
        <div className={`transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>
          <X size={20} className="text-brand-gray" />
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="pb-8"
          >
            <p className="text-sm text-brand-gray leading-relaxed pl-8">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const RelatedProduct = ({ name, category, image, priceHint }: { name: string, category: string, image: string, priceHint?: string }) => (
  <div className="group cursor-pointer">
    <div className="aspect-square bg-brand-light-gray mb-6 overflow-hidden relative">
      <img 
        src={image} 
        alt={name} 
        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-95"
      />
      <div className="absolute top-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
        <div className="w-10 h-10 bg-white shadow-xl flex items-center justify-center text-brand-red">
          <ArrowRight size={18} />
        </div>
      </div>
    </div>
    <span className="text-[10px] text-brand-gray font-bold uppercase tracking-[0.2em] mb-2 inline-block transition-colors group-hover:text-brand-red">
      {category}
    </span>
    <h4 className="text-lg font-bold group-hover:text-brand-red transition-colors mb-2 leading-tight">
      {name}
    </h4>
    <div className="flex items-center gap-3">
      <span className="text-xs font-bold text-brand-gray italic">{priceHint || "Liên hệ nhận báo giá"}</span>
    </div>
  </div>
);

const RelatedPost = ({ title, date, image }: { title: string, date: string, image: string }) => (
  <div className="flex gap-4 group cursor-pointer border-b border-black/5 pb-6 last:border-0 last:pb-0">
    <div className="w-24 h-24 shrink-0 bg-brand-light-gray overflow-hidden">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
    </div>
    <div className="flex flex-col justify-center">
      <span className="text-[10px] text-brand-gray font-bold uppercase tracking-widest mb-1">{date}</span>
      <h5 className="text-sm font-bold leading-tight group-hover:text-brand-red transition-colors line-clamp-2">
        {title}
      </h5>
    </div>
  </div>
);

const Footer = () => (
  <footer className="bg-brand-black text-white pt-20 pb-10">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
        <div>
          <div className="flex items-center gap-2 mb-8">
            <div className="w-8 h-8 bg-brand-red flex items-center justify-center text-white font-bold text-lg">P</div>
            <span className="font-display font-bold text-xl tracking-tighter text-white">PKG Battery</span>
          </div>
          <p className="text-sm text-brand-gray leading-relaxed mb-8 max-w-xs">
            Tiên phong trong các giải pháp lưu trữ năng lượng Lithium và quản lý năng lượng thông minh cho ngành công nghiệp 4.0.
          </p>
          <div className="flex gap-4">
            {['FB', 'LN', 'YT', 'TW'].map(s => (
              <a key={s} href="#" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-[10px] font-bold hover:bg-brand-red hover:border-brand-red transition-all">
                {s}
              </a>
            ))}
          </div>
        </div>
        
        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest mb-8 text-white">Sản phẩm chính</h4>
          <ul className="flex flex-col gap-4 text-sm text-brand-gray">
            <li><a href="#" className="hover:text-brand-red transition-colors">Pin xe nâng điện</a></li>
            <li><a href="#" className="hover:text-brand-red transition-colors">Pin xe Golf & AGV</a></li>
            <li><a href="#" className="hover:text-brand-red transition-colors">Lưu trữ năng lượng ESS</a></li>
            <li><a href="#" className="hover:text-brand-red transition-colors">Trạm sạc công suất lớn</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest mb-8 text-white">Liên kết nhanh</h4>
          <ul className="flex flex-col gap-4 text-sm text-brand-gray">
            <li><a href="#" className="hover:text-brand-red transition-colors">Về PKG Battery</a></li>
            <li><a href="#" className="hover:text-brand-red transition-colors">Dự án tiêu biểu</a></li>
            <li><a href="#" className="hover:text-brand-red transition-colors">Tuyển kỹ thuật viên</a></li>
            <li><a href="#" className="hover:text-brand-red transition-colors">Chính sách bảo hành</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest mb-8 text-white">Liên hệ</h4>
          <address className="not-italic text-sm text-brand-gray flex flex-col gap-4">
            <p>Hà Nội: KCN Quang Minh, Mê Linh</p>
            <p>HCM: KCN Tân Bình, Tân Phú</p>
            <p>Hotline: 1900 88 55 XX</p>
            <p>Email: contact@pkgbattery.vn</p>
          </address>
        </div>
      </div>

      <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-[10px] text-brand-gray uppercase tracking-widest">
          © 2024 PKG Battery Global. All rights reserved.
        </p>
        <div className="flex gap-8 text-[10px] text-brand-gray uppercase tracking-widest">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors">Cookies</a>
        </div>
      </div>
    </div>
  </footer>
);

// --- Main Page Component ---

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ProgressBar />

      <main className="pb-24">
        <Hero />
        <Breadcrumb />
        <QuickInsights />

        <div className="container mx-auto px-6 flex flex-col lg:flex-row gap-20">
          {/* Main Article Content */}
          <article className="flex-1 max-w-full lg:max-w-screen-md mx-auto xl:mx-0">
            
            <Section id="tong-quan" title="1. Tổng quan xu hướng chuyển dịch năng lượng">
              <p>
                Trong bối cảnh chi phí năng lượng ngày càng tăng và yêu cầu về phát thải ròng bằng không (Net Zero) đang trở thành tiêu chuẩn bắt buộc tại các khu công nghiệp, việc chuyển đổi từ ắc quy chì truyền thống sang pin Lithium-ion không còn là một lựa chọn "cao cấp" mà đã trở thành yêu cầu sống còn để tối ưu hóa chi phí vận hành (OPEX).
              </p>
              <p>
                Theo báo cáo thị trường xe nâng điện năm 2023, hơn 65% các doanh nghiệp logistics quy mô lớn tại Việt Nam đã bắt đầu lộ trình thay thế hoàn toàn đội xe nâng sử dụng ắc quy chì. Sự dịch chuyển này được thúc đẩy bởi hiệu suất sạc ấn tượng và khả năng tích hợp IoT để giám sát tình trạng pin theo thời gian thực.
              </p>
              
              <ImageBlock 
                src="https://images.unsplash.com/photo-1518349619113-131114633789?q=80&w=2070&auto=format&fit=crop" 
                caption="Hệ thống pin Lithium PKG Series thế hệ mới được ứng dụng trong trung tâm phân phối thông minh." 
              />
              
              <p>
                Sự khác biệt lớn nhất giữa hai công nghệ nằm ở mật độ năng lượng. Pin Lithium-ion cung cấp cùng một lượng năng lượng trong một thiết kế nhỏ gọn hơn 30-40% so với ắc quy chì, giúp xe nâng vận hành thanh thoát và ổn định hơn ở các độ cao lớn.
              </p>
            </Section>

            <Section id="ky-thuat-pin" title="2. Công nghệ lõi & Hệ quản trị BMS (Battery Management System)">
              <p>
                Hệ thống BMS do PKG nghiên cứu và phát triển là "bộ não" điều khiển toàn bộ quá trình vận hành của pin. BMS không chỉ bảo vệ pin khỏi quá nhiệt, quá áp hay ngắn mạch mà còn tự động cân bằng điện áp giữa các cell pin, giúp kéo dài tuổi thọ và duy trì dung lượng thực tế tối đa.
              </p>
              <h3 className="font-display">Tính năng nổi bật của BMS PKG Pro:</h3>
              <ul>
                <li><strong>Cân bằng chủ động (Active Balancing):</strong> Chuyển năng lượng từ cell mạnh sang cell yếu, tối ưu 98% dung lượng thực.</li>
                <li><strong>Giao tiếp CAN-bus:</strong> Tương thích hoàn hảo với các dòng xe nâng hàng đầu như Linde, Toyota, Jungheinrich.</li>
                <li><strong>Kết nối đám mây:</strong> Gửi dữ liệu vận hành về trung tâm kiểm soát, đưa ra cảnh báo bảo trì trước khi có sự cố xảy ra.</li>
              </ul>
              
              <PremiumTable 
                headers={['Thông số kỹ thuật', 'Ắc quy Chì-axit', 'Pin Lithium (PKG Series)', 'Ưu thế']}
                rows={[
                  ['Mật độ năng lượng', '30-40 Wh/kg', '120-150 Wh/kg', 'PKG gấp 4 lần'],
                  ['Hiệu suất sạc/xả', '70-75%', '95-98%', 'Giảm thất thoát điện'],
                  ['Bảo trì nước cất', 'Hàng tuần', 'Không cần', 'Tiết kiệm nhân công'],
                  ['Phòng sạc riêng', 'Bắt buộc (Cần hút khí)', 'Không cần', 'Tăng diện tích kho'],
                  ['BMS thông minh', 'Không tích hợp', 'Tích hợp sẵn AI', 'An toàn tuyệt đối']
                ]}
              />
            </Section>

            <Section id="hieu-suat-sac" title="3. Hiệu suất sạc và Khả năng sạc cơ hội (Opportunity Charging)">
              <p>
                Một trong những trở ngại lớn nhất của xe nâng điện dùng ắc quy chì là thời gian sạc kéo dài (8 tiếng sạc + 8 tiếng nghỉ). Pin Lithium phá vỡ hoàn toàn rào cản này bằng công nghệ sạc nhanh.
              </p>
              <p>
                <strong>Sạc cơ hội là gì?</strong> Đó là khả năng sạc pin bất cứ khi nào xe không làm việc, dù chỉ là 15-30 phút trong giờ nghỉ trưa hoặc giữa các ca làm việc. Pin Lithium không có "hiệu ứng nhớ", việc sạc lẻ không làm giảm tuổi thọ pin như ắc quy chì.
              </p>
              <VideoBlock poster="https://images.unsplash.com/photo-1533967839352-78d910f13511?q=80&w=2070&auto=format&fit=crop" />
              <p>
                Thống kê thực tế tại các kho thương mại điện tử cho thấy, với bộ sạc nhanh PKG 200A, một xe nâng 2.5 tấn có thể sạc từ 20% lên 80% chỉ trong vòng 45 phút, đảm bảo tính sẵn sàng cho vận hành cường độ cao.
              </p>
            </Section>

            <Section id="bai-toan-roi" title="4. Phân tích bài toán kinh tế ROI & TCO (Total Cost of Ownership)">
              <p>
                Dù chi phí đầu tư ban đầu của pin Lithium cao hơn khoảng 2.0-2.5 lần so với ắc quy chì, nhưng khi nhìn vào vòng đời 7 năm, Lithium là lựa chọn rẻ hơn đáng kể.
              </p>
              
              <div className="my-10 p-8 bg-brand-light-gray flex flex-col md:flex-row gap-8 items-center border border-black/5">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-6">
                    <BarChart3 className="text-brand-red" size={24} />
                    <h4 className="text-xl font-bold">Điểm hòa vốn sau 18 tháng</h4>
                  </div>
                  <p className="text-sm text-brand-gray leading-relaxed mb-6">
                    Phân tích TCO bao gồm: Chi phí tiền điện (giảm 30%), Chi phí bảo trì (giảm 100%), Chi phí nhân công vận hành pin (giảm 100%), và chi phí thay mới pin (ắc quy chì phải thay 2 lần trong 7 năm).
                  </p>
                  <div className="flex gap-4">
                    <div className="p-4 bg-white shadow-sm border-l-2 border-brand-red">
                      <span className="block text-[10px] text-brand-gray font-bold uppercase mb-1">Lead Acid (7Y)</span>
                      <span className="text-lg font-bold text-brand-gray">~$12,500</span>
                    </div>
                    <div className="p-4 bg-white shadow-sm border-l-2 border-brand-red">
                      <span className="block text-[10px] text-brand-red font-bold uppercase mb-1">Lithium PKG (7Y)</span>
                      <span className="text-lg font-bold text-brand-black">~$8,200</span>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-48 aspect-square bg-gradient-to-br from-brand-red to-red-900 flex items-center justify-center p-6 text-center shadow-xl">
                  <span className="text-white text-sm font-bold">Tiết kiệm hằng năm khoản ~$1,200 mỗi xe máy nâng</span>
                </div>
              </div>

              <QuoteBlock 
                quote="Việc chuyển đổi sang pin Lithium PKG không chỉ là thay đổi một linh kiện, đó là sự thay đổi về tư duy quản lý tài sản và tối ưu hóa chuỗi cung ứng."
                author="Nguyễn Văn Đại"
                role="Giám đốc Vận hành - Logistics ASEAN Group"
              />
            </Section>

            <Section id="tinh-nang-an-toan" title="5. Tính năng an toàn và Chống cháy nổ">
              <p>
                An toàn là yếu tố tiên quyết trong các kho chứa hàng hóa giá trị cao hoặc các xưởng thực phẩm, dược phẩm. Pin Lithium PKG sử dụng lõi LiFePO4 (LFP) - một trong những hóa chất pin an toàn nhất thế giới hiện nay.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <div className="p-6 border border-black/5 bg-white shadow-sm hover:shadow-md transition-shadow">
                  <ShieldCheck className="text-brand-red mb-4" size={32} />
                  <h4 className="font-bold mb-2">Vật liệu chống cháy</h4>
                  <p className="text-xs text-brand-gray">Vỏ pin được làm từ thép cường lực 5mm, tích hợp lớp cách nhiệt và chống cháy lan theo tiêu chuẩn UL94-V0.</p>
                </div>
                <div className="p-6 border border-black/5 bg-white shadow-sm hover:shadow-md transition-shadow">
                  <Cpu className="text-brand-red mb-4" size={32} />
                  <h4 className="font-bold mb-2">Ngắt mạch tự động</h4>
                  <p className="text-xs text-brand-gray">Cầu chì thông minh ngắt kết nối ngay lập tức (dưới 10ms) khi phát hiện dòng điện bất thường.</p>
                </div>
              </div>
            </Section>

            <Section id="bao-tri" title="6. Quy trình bảo trì: Tạm biệt nước cất">
              <p>
                Với ắc quy chì, kỹ thuật viên phải dành 15-20 phút mỗi tuần cho mỗi bình để kiểm tra và châm nước cất. Với pin Lithium PKG, quy trình này được rút gọn về con số 0.
              </p>
              <p>
                Kỹ thuật viên chỉ cần thực hiện việc kiểm tra vật lý các đầu nối cáp định kỳ 3 tháng một lần để đảm bảo không bị lỏng lẻo do rung chấn trong quá trình làm việc. Điều này giúp đội ngũ bảo trì tập trung vào các hạng mục quan trọng hơn của xe nâng như hệ thống thủy lực và cơ khí.
              </p>
            </Section>

            <Section id="quan-ly-doi-xe" title="7. Quản lý đội xe thông minh qua IoT">
              <p>
                Dữ liệu là sức mạnh. Tất cả các dòng pin chuyên dụng của PKG đều tích hợp mô-đun 4G/GPRS. Người quản lý kho có thể truy cập dashboard trên smartphone để xem:
              </p>
              <ul>
                <li>Trạng thái dung lượng của từng xe trong thời gian thực.</li>
                <li>Lịch sử sạc-xả để phát hiện những xe đang làm việc quá tải hoặc quá nhàn rỗi.</li>
                <li>Vị trí của xe trong kho (tích hợp GPS nội bộ).</li>
              </ul>
              <ImageBlock 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" 
                caption="Dashboard quản lý năng lượng tập trung giúp tối ưu hóa đội xe lên đến 25%." 
                ratio="16/10"
              />
            </Section>

            <Section id="huong-dan-chuyen-doi" title="8. Lộ trình 3 bước hướng dẫn chuyển đổi">
              <div className="space-y-8 my-10">
                <div className="flex gap-6">
                  <div className="w-12 h-12 shrink-0 bg-brand-black text-white flex items-center justify-center font-display font-bold text-xl">01</div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Đánh giá năng lực sạc</h4>
                    <p className="text-sm text-brand-gray">Kỹ sư PKG sẽ đo lường công suất điện lưới và thói quen vận hành hiện tại để thiết kế cấu hình pin & sạc phù hợp nhất.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 shrink-0 bg-brand-black text-white flex items-center justify-center font-display font-bold text-xl">02</div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Lắp đặt & Hiệu chuẩn</h4>
                    <p className="text-sm text-brand-gray">Lắp đặt counter-weight (đối trọng) nếu cần để đảm bảo cân bằng xe và cấu hình phần mềm giao tiếp với Controller của xe nâng.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 shrink-0 bg-brand-black text-white flex items-center justify-center font-display font-bold text-xl">03</div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Đào tạo & Bàn giao</h4>
                    <p className="text-sm text-brand-gray">Hướng dẫn vận hành an toàn cho tài xế và bàn giao tài khoản quản lý IoT cho đội ngũ kỹ thuật kho.</p>
                  </div>
                </div>
              </div>
              
              <DownloadBlock 
                title="Tài liệu chi tiết: Lộ trình nâng cấp từ Ắc quy sang Lithium"
                type="PDF"
                size="4.2 MB"
              />
            </Section>

            <Section id="faq" title="9. Câu hỏi thường gặp (FAQ)">
              <div className="mt-8">
                <FAQItem 
                  question="Pin Phoenix PKG có thể lắp vừa các dòng xe nâng Komatsu hay Toyota không?"
                  answer="Hoàn toàn có thể. Chúng tôi thiết kế các hộp sắt bảo vệ theo kích thước tiêu chuẩn của các hãng xe hoặc tùy chỉnh theo yêu cầu riêng, đảm bảo khớp hoàn hảo vào khoang chứa pin của xe."
                />
                <FAQItem 
                  question="Chế độ bảo hành cho pin Lithium công nghiệp là bao lâu?"
                  answer="PKG Battery cung cấp gói bảo hành tiêu chuẩn 5 năm hoặc 10,000 giờ vận hành (tùy điều kiện nào đến trước). Chúng tôi cam kết thay mới cell pin nếu dung lượng sụt giảm quá 20% trong thời gian bảo hành."
                />
                <FAQItem 
                  question="Tôi có cần phải nâng cấp toàn bộ hệ thống điện tại kho để sạc nhanh không?"
                  answer="Tùy thuộc vào số lượng xe. Với đội xe nhỏ (1-3 xe), hệ thống điện công nghiệp hiện hữu thường đủ đáp ứng. Với đội xe lớn, chúng tôi sẽ hỗ trợ thiết kế trạm sạc tập trung để tránh quá tải lưới điện cục bộ."
                />
              </div>
            </Section>

          </article>

          {/* Right Layout Side - TOC and Extra */}
          <TOC />
        </div>
      </main>

      {/* Related Products Section */}
      <section className="bg-brand-light-gray py-24 border-y border-black/5">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-16">
            <div className="max-w-xl">
              <span className="text-[10px] text-brand-red font-bold uppercase tracking-[0.3em] mb-4 block">Recommended Systems</span>
              <h2 className="text-4xl font-bold">Giải pháp năng lượng liên quan</h2>
            </div>
            <button className="hidden md:flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:text-brand-red transition-colors pb-1 border-b border-black/10">
              Xem tất cả sản phẩm
              <ChevronRight size={14} />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8">
            <RelatedProduct 
              name="PKG Series 80V 560Ah" 
              category="Pin xe nâng điện" 
              image="https://images.unsplash.com/photo-1590496793907-39fe5804360e?q=80&w=2070&auto=format&fit=crop"
            />
            <RelatedProduct 
              name="PKG Smart Charger 200A" 
              category="Bộ sạc công nghiệp" 
              image="https://images.unsplash.com/photo-1620288627223-53302f4e8c74?q=80&w=2070&auto=format&fit=crop" 
              priceHint="Ưu đãi khi mua kèm pin"
            />
            <RelatedProduct 
              name="Cloud-BMS Subscription" 
              category="Giải pháp phần mềm" 
              image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
              priceHint="Miễn phí năm đầu"
            />
          </div>
        </div>
      </section>

      {/* Related Articles Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-20">
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-12">Bài viết cùng chủ đề</h3>
              <div className="space-y-8">
                <RelatedPost 
                  title="5 Sai lầm phổ biến khi bảo quản pin Lithium trong kho lạnh" 
                  date="12 Tháng 4, 2024" 
                  image="https://images.unsplash.com/photo-1629814249584-b4d2a70b4f8d?q=80&w=2070&auto=format&fit=crop" 
                />
                <RelatedPost 
                  title="Tiêu chuẩn an toàn cháy nổ pin Lithium mới nhất theo thông tư 2024" 
                  date="05 Tháng 3, 2024" 
                  image="https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=2070&auto=format&fit=crop" 
                />
                <RelatedPost 
                  title="So sánh hiệu suất Pin LFP vs NMC trong ứng dụng xe AGV tự hành" 
                  date="20 Tháng 2, 2024" 
                  image="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop" 
                />
              </div>
            </div>
            <div className="w-full md:w-1/3 bg-brand-light-gray p-10 flex flex-col justify-center">
              <span className="text-[10px] text-brand-red font-bold uppercase tracking-[0.2em] mb-4">Industrial Newsletter</span>
              <h4 className="text-2xl font-bold mb-6">Cập nhật xu hướng năng lượng công nghiệp</h4>
              <p className="text-sm text-brand-gray mb-8">Nhận báo cáo thị trường và các phân tích kỹ thuật chuyên sâu hàng tháng.</p>
              <div className="flex flex-col gap-3">
                <input 
                  type="email" 
                  placeholder="Email của bạn" 
                  className="px-4 py-3 bg-white border border-black/5 text-sm focus:outline-none focus:border-brand-red transition-colors"
                />
                <button className="px-4 py-3 bg-brand-black text-white text-xs font-bold uppercase tracking-widest hover:bg-brand-red transition-all">
                  Đăng ký ngay
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-brand-black text-white py-32 relative overflow-hidden">
        {/* Abstract Background Accents */}
        <div className="absolute -right-24 -top-24 w-96 h-96 bg-brand-red/10 rounded-full blur-3xl" />
        <div className="absolute -left-24 -bottom-24 w-96 h-96 bg-brand-red/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-6xl font-bold mb-10 leading-tight">
                Sẵn sàng nâng tầm <span className="text-brand-red">hiệu suất</span> cho đội xe của bạn?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 text-left">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-brand-red">
                    <CheckCircle2 size={24} />
                  </div>
                  <span className="text-sm font-medium text-brand-gray">Khảo sát & tư vấn cấu hình pin miễn phí</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-brand-red">
                    <Zap size={24} />
                  </div>
                  <span className="text-sm font-medium text-brand-gray">Cam kết sạc đầy dưới 2 giờ vận hành</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-brand-red">
                    <ShieldCheck size={24} />
                  </div>
                  <span className="text-sm font-medium text-brand-gray">Bảo hành chính hãng 5 năm toàn cầu</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <button className="w-full sm:w-auto px-12 py-5 bg-brand-red text-white text-sm font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-brand-black transition-all duration-300 shadow-xl shadow-brand-red/20">
                  Đăng ký tư vấn ngay
                </button>
                <button className="w-full sm:w-auto px-12 py-5 bg-transparent border border-white/20 text-white text-sm font-bold uppercase tracking-[0.2em] hover:bg-white/10 transition-all duration-300">
                  Tải Catalogue sản phẩm
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
