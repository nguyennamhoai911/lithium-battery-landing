/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';
import { 
  Menu, 
  X, 
  ChevronRight, 
  Globe, 
  Clock, 
  Calendar, 
  User, 
  ArrowRight, 
  Download, 
  CheckCircle2, 
  Info, 
  MessageSquare, 
  ArrowUpRight,
  TrendingDown,
  Cpu,
  ShieldCheck,
  Zap,
  Play
} from 'lucide-react';
import { cn } from './lib/utils';

// --- Components ---

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Giới thiệu', 'Sản phẩm', 'Giải pháp', 'Bài viết', 'Dự án', 'Liên hệ'];

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled ? "bg-white/90 backdrop-blur-md py-3 shadow-sm border-b border-neutral-100" : "bg-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-12">
          {/* Logo Placeholder */}
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="w-10 h-10 bg-brand-black flex items-center justify-center text-white font-display font-bold text-xl relative overflow-hidden">
               P
               <div className="absolute inset-0 bg-brand-red translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
               <span className="relative z-10">P</span>
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-display font-bold text-xl tracking-tight">PKG <span className="text-brand-red">BATTERY</span></span>
              <span className="text-[10px] uppercase tracking-widest text-brand-gray">Industrial Energy</span>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a 
                key={item} 
                href="#" 
                className={cn(
                  "text-sm font-medium transition-colors relative group",
                  item === 'Bài viết' ? "text-brand-red" : "text-brand-black hover:text-brand-red"
                )}
              >
                {item}
                {item === 'Bài viết' && (
                  <motion.div 
                    layoutId="nav-active"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-brand-red"
                  />
                )}
                <div className="absolute -bottom-1 left-0 right-0 h-[2px] bg-brand-red scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
              </a>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden sm:flex items-center gap-2 text-xs font-bold text-brand-gray border-x border-neutral-200 px-6">
            <span className="text-brand-red">VI</span>
            <span className="text-neutral-300">/</span>
            <span className="hover:text-brand-black cursor-pointer transition-colors">EN</span>
          </div>
          <button className="hidden md:flex items-center gap-2 bg-brand-black hover:bg-brand-red text-white px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-all duration-300">
            Nhận tư vấn
          </button>
          <button 
            className="lg:hidden p-2 text-brand-black"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-white z-[60] p-6 flex flex-col"
          >
            <div className="flex items-center justify-between mb-12">
              <span className="font-display font-bold text-xl tracking-tight">PKG <span className="text-brand-red">BATTERY</span></span>
              <button onClick={() => setMobileMenuOpen(false)}>
                <X size={24} />
              </button>
            </div>
            <nav className="flex flex-col gap-6">
              {navItems.map((item) => (
                <a key={item} href="#" className="text-2xl font-display font-bold hover:text-brand-red transition-colors">
                  {item}
                </a>
              ))}
            </nav>
            <div className="mt-auto flex flex-col gap-4">
              <button className="w-full bg-brand-red text-white py-4 font-bold uppercase tracking-widest">
                Nhận tư vấn
              </button>
              <div className="flex justify-center gap-6 text-sm font-bold text-brand-gray">
                <span className="text-brand-red">TIẾNG VIỆT</span>
                <span>ENGLISH</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const ReadingProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div 
      className="fixed top-0 left-0 right-0 h-1 bg-brand-red origin-left z-[60]"
      style={{ scaleX }}
    />
  );
};

const Breadcrumb = () => (
  <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center gap-2 text-xs font-medium text-brand-gray">
    <a href="#" className="hover:text-brand-red transition-colors">Trang chủ</a>
    <ChevronRight size={12} className="text-neutral-300" />
    <a href="#" className="hover:text-brand-red transition-colors">Bài viết</a>
    <ChevronRight size={12} className="text-neutral-300" />
    <span className="text-brand-black">Kiến thức pin lithium</span>
  </nav>
);

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden noise-texture">
      {/* Background patterns */}
      <div className="absolute inset-0 technical-grid -z-10" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-brand-red/5 to-transparent -z-10" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 bg-brand-red text-white text-[10px] font-bold uppercase tracking-widest">
                Kiến thức pin lithium
              </span>
              <div className="h-[1px] w-12 bg-brand-red/30" />
              <span className="text-xs font-bold text-brand-gray uppercase tracking-widest">Digital Sales Insight</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl mb-8 leading-[1.1]">
              Pin Lithium Cho Xe Nâng: Giải Pháp Giảm Downtime Và Tối Ưu Chi Phí
            </h1>
            
            <p className="text-xl text-brand-gray mb-10 max-w-xl leading-relaxed">
              Tìm hiểu cách pin lithium công nghiệp giúp doanh nghiệp tăng uptime, giảm chi phí bảo trì và vận hành đội xe nâng hiệu quả hơn so với ắc quy chì truyền thống.
            </p>
            
            <div className="flex flex-wrap items-center gap-8 text-sm font-medium border-t border-neutral-200 pt-8">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-brand-light-gray flex items-center justify-center text-brand-red">
                  <User size={14} />
                </div>
                <span>PKG Technical Team</span>
              </div>
              <div className="flex items-center gap-2 text-brand-gray">
                <Calendar size={14} />
                <span>12/03/2026</span>
              </div>
              <div className="flex items-center gap-2 text-brand-gray">
                <Clock size={14} />
                <span>8 phút đọc</span>
              </div>
              <div className="flex items-center gap-4 ml-auto">
                <button className="flex items-center gap-1 hover:text-brand-red transition-colors">
                  <Globe size={14} /> VI
                </button>
                <div className="w-[1px] h-3 bg-neutral-300" />
                <button className="flex items-center gap-1 hover:text-brand-red transition-colors text-brand-gray">
                   EN
                </button>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="aspect-[4/5] relative overflow-hidden">
               {/* Treating the image with modern masking */}
               <img 
                 src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop" 
                 alt="Industrial Lithium Battery Solution" 
                 className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-1000 transform hover:scale-110"
               />
               <div className="absolute inset-0 bg-linear-to-tr from-brand-black/40 to-transparent" />
               <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-[2px] w-12 bg-brand-red animate-draw-line" />
                    <span className="text-xs font-bold uppercase tracking-tighter">Technical Excellence</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-brand-red rounded-full animate-pulse" />
                    <span className="text-4xl font-display font-bold">48V LITHIUM PACK</span>
                  </div>
               </div>
            </div>
            {/* Design accents */}
            <div className="absolute -top-6 -right-6 w-32 h-32 border-r-2 border-t-2 border-brand-red -z-10" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 border-l-2 border-b-2 border-brand-red -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const KeyTakeaways = () => {
  const points = [
    { 
      id: '01', 
      title: 'Giảm downtime hiệu quả', 
      desc: 'Pin lithium cho phép sạc nhanh (Opportunity Charging) giúp giảm thời gian chờ sạc và tăng uptime cho xe nâng vận hành nhiều ca.' 
    },
    { 
      id: '02', 
      title: 'Đánh giá cấu hình đồng bộ', 
      desc: 'Doanh nghiệp cần đánh giá đúng điện áp, dung lượng, BMS và điều kiện vận hành khắt khe trước khi thay thế hệ thống ắc quy cũ.' 
    },
    { 
      id: '03', 
      title: 'Hỗ trợ kỹ thuật chuyên sâu', 
      desc: 'PKG Battery hỗ trợ tư vấn cấu hình theo model thiết bị, nhu cầu sử dụng thực tế và mô hình vận hành của từng nhà máy.' 
    }
  ];

  return (
    <section className="bg-white py-20 border-y border-neutral-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-16">
          {points.map((point) => (
            <motion.div 
               key={point.id}
               whileInView={{ opacity: 1, y: 0 }}
               initial={{ opacity: 0, y: 20 }}
               viewport={{ once: true }}
               className="relative group px-4"
            >
              <div className="absolute -left-4 top-0 text-7xl font-display font-bold text-neutral-100 group-hover:text-brand-red/10 transition-colors duration-500 select-none">
                {point.id}
              </div>
              <div className="relative pt-6">
                <h4 className="text-xl mb-4 group-hover:text-brand-red transition-colors">{point.title}</h4>
                <p className="text-brand-gray text-sm leading-relaxed">
                  {point.desc}
                </p>
                <div className="mt-6 w-8 h-[2px] bg-brand-red transition-all duration-300 group-hover:w-full" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TOC = ({ items }: { items: string[] }) => {
  const [activeItem, setActiveItem] = useState(items[0]);

  return (
    <div className="sticky top-32 hidden lg:block w-full max-w-[240px]">
      <h5 className="text-xs font-bold uppercase tracking-widest text-brand-gray mb-8 flex items-center gap-2">
        <div className="w-1 h-4 bg-brand-red" />
        Trong bài viết này
      </h5>
      <nav className="flex flex-col gap-4">
        {items.map((item) => (
          <a 
            key={item}
            href={`#${item.toLowerCase().replace(/ /g, '-')}`}
            onClick={(e) => {
                e.preventDefault();
                setActiveItem(item);
                document.getElementById(item.toLowerCase().replace(/ /g, '-'))?.scrollIntoView({ behavior: 'smooth' });
            }}
            className={cn(
              "text-sm font-medium transition-all relative pl-4 border-l-2",
              activeItem === item 
                ? "text-brand-red border-brand-red translate-x-1" 
                : "text-brand-gray border-neutral-100 hover:text-brand-black hover:border-brand-gray"
            )}
          >
            {item}
          </a>
        ))}
      </nav>
      
      <div className="mt-12 p-6 bg-brand-light-gray border border-neutral-100 relative overflow-hidden group">
         <div className="relative z-10">
            <h6 className="text-[10px] font-bold uppercase text-brand-gray mb-2">Tư vấn kỹ thuật</h6>
            <p className="text-xs font-display font-bold mb-4">Bạn chưa biết chọn loại pin nào phù hợp?</p>
            <button className="text-[10px] font-bold uppercase text-brand-red flex items-center gap-1 group-hover:gap-2 transition-all">
               Yêu cầu báo giá <ArrowRight size={12} />
            </button>
         </div>
         <div className="absolute top-0 right-0 -mr-4 -mt-4 text-neutral-200 group-hover:text-brand-red/10 transition-colors">
            <Cpu size={64} />
         </div>
      </div>
    </div>
  );
};

const ArticleBody = () => {
  return (
    <div className="editorial-content">
      <p id="vì-sao-doanh-nghiệp-chuyển-sang-pin-lithium">
        Trong kỷ nguyên tự động hóa và kho vận thông minh, nhu cầu về nguồn năng lượng bền bỉ, sạc nhanh và không cần bảo trì đã đưa <strong>Pin Lithium</strong> trở thành tiêu chuẩn mới. Trước đây, ắc quy chì-axit chiếm lĩnh thị trường nhờ chi phí đầu tư ban đầu thấp, nhưng nhược điểm về thời gian sạc dài, tuổi thọ ngắn và chi phí bảo trì nước cất định kỳ đang khiến các doanh nghiệp gánh chịu mức chi phí ẩn khổng lồ.
      </p>

      <h2 id="pin-lithium-khác-gì-ắc-quy-chì">
        Pin lithium khác gì ắc quy chì
        <span className="absolute -top-6 left-0 text-[10px] font-bold text-brand-red uppercase tracking-widest">Kỹ thuật so sánh</span>
      </h2>
      
      <p>
        Sự khác biệt cốt lõi nằm ở mật độ năng lượng và khả năng chịu tải. Pin Lithium sắt photphat (LiFePO4) được PKG Battery lựa chọn nhờ tính an toàn cao nhất trong các dòng lithium, không có nguy cơ cháy nổ hóa học như các dòng lithium-cobalt thông thường.
      </p>

      {/* Comparison Table */}
      <div className="my-12 overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[600px]">
          <thead>
            <tr className="bg-brand-black text-white">
              <th className="p-4 text-xs font-bold uppercase tracking-widest bg-brand-red">Đặc tính</th>
              <th className="p-4 text-xs font-bold uppercase tracking-widest whitespace-nowrap">Ắc quy Chì-Axit</th>
              <th className="p-4 text-xs font-bold uppercase tracking-widest whitespace-nowrap">Pin Lithium PKG</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            <tr className="border-b border-neutral-100">
              <td className="p-4 font-bold bg-neutral-50 px-6">Thời gian sạc</td>
              <td className="p-4 text-brand-gray">8 - 10 giờ</td>
              <td className="p-4 text-brand-black font-medium">1.5 - 2 giờ (Sạc nhanh)</td>
            </tr>
            <tr className="border-b border-neutral-100">
              <td className="p-4 font-bold bg-neutral-50 px-6">Bảo trì</td>
              <td className="p-4 text-brand-gray">Châm nước cất hàng tuần</td>
              <td className="p-4 text-brand-black font-medium">Không bảo trì (Zero Maintenance)</td>
            </tr>
            <tr className="border-b border-neutral-100">
              <td className="p-4 font-bold bg-neutral-50 px-6">Tuổi thọ chu kỳ</td>
              <td className="p-4 text-brand-gray">~1,500 chu kỳ</td>
              <td className="p-4 text-brand-black font-medium">&gt; 4,000 chu kỳ</td>
            </tr>
            <tr className="border-b border-neutral-100">
              <td className="p-4 font-bold bg-neutral-50 px-6">Độ sâu xả (DoD)</td>
              <td className="p-4 text-brand-gray">Tối đa 50-60%</td>
              <td className="p-4 text-brand-black font-medium">Tới 95 - 100%</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 id="lợi-ích-về-uptime-và-chi-phí-vận-hành">
        Lợi ích về uptime và chi phí vận hành
      </h2>

      <div className="grid md:grid-cols-2 gap-8 my-12">
        <div className="p-8 bg-brand-light-gray flex flex-col items-center text-center group hover:bg-white border border-transparent hover:border-brand-red transition-all cursor-default">
           <div className="text-5xl font-display font-bold text-brand-red mb-2">30%</div>
           <div className="text-xs font-bold uppercase tracking-widest text-brand-gray mb-4">Giảm chi phí vận hành</div>
           <p className="text-sm">Ước tính trung bình doanh nghiệp tiết kiệm 30% tổng chi phí sở hữu (TCO) sau 5 năm chuyển đổi.</p>
        </div>
        <div className="p-8 bg-brand-light-gray flex flex-col items-center text-center group hover:bg-white border border-transparent hover:border-brand-red transition-all cursor-default">
           <div className="text-5xl font-display font-bold text-brand-red mb-2">2x</div>
           <div className="text-xs font-bold uppercase tracking-widest text-brand-gray mb-4">Tăng hiệu suất ca làm</div>
           <p className="text-sm">Khả năng sạc tranh thủ giờ nghỉ giúp một viên pin phục vụ liên tục 3 ca làm việc/ngày.</p>
        </div>
      </div>

      <h3 id="cách-chọn-cấu-hình-phù-hợp">Cách chọn cấu hình phù hợp</h3>
      <p>
        Việc nâng cấp không đơn thuần là tháo ắc quy cũ và đặt pin mới. PKG Battery khuyến nghị đội ngũ kỹ thuật nhà máy xem xét 3 yếu tố:
      </p>
      <ul>
        <li><strong>Điện áp & Dung lượng:</strong> Phải tương thích tuyệt đối với Driver/Inverter của xe nâng.</li>
        <li><strong>BMS (Battery Management System):</strong> Bộ não quản lý pin phải có giao thức giao tiếp mượt mà với phần cứng cũ.</li>
        <li><strong>Kích thước thùng chứa:</strong> Tùy chỉnh khay pin để vừa khít khoang chứa của hãng xe (Linde, Jungheinrich, Komatsu...).</li>
      </ul>

      {/* Expert Note */}
      <div className="my-16 p-8 bg-brand-black text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-2 h-full bg-brand-red" />
        <div className="flex items-start gap-6 relative z-10">
          <div className="p-3 bg-brand-red shrink-0">
             <ShieldCheck size={24} />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-brand-red mb-2 block">Lời khuyên từ chuyên gia PKG</span>
            <p className="text-xl italic font-display leading-relaxed">
              "Khi đầu tư Fleet Management cho đội xe hàng trăm chiếc, biên lợi nhuận của bạn nằm ở việc giảm thiểu bước bảo trì thủ công. Pin Lithium không chỉ là nguồn điện, nó là một phần của hệ thống ERP giúp quản lý năng lượng chính xác đến từng mili-ampe."
            </p>
            <div className="mt-6 flex items-center gap-4">
              <div className="w-10 h-10 border-2 border-brand-red p-1">
                 <div className="w-full h-full bg-neutral-800" />
              </div>
              <div>
                <div className="text-sm font-bold">Mr. Nguyễn Thành Trung</div>
                <div className="text-[10px] text-brand-gray uppercase font-bold tracking-widest">CTO @ PKG Technical Lab</div>
              </div>
            </div>
          </div>
        </div>
        {/* Subtle pattern */}
        <div className="absolute -right-20 -bottom-20 text-white/[0.03]">
           <Zap size={240} />
        </div>
      </div>

      <h2 id="khi-nào-nên-nâng-cấp">Khi nào nên nâng cấp?</h2>
      <p>
        Nếu bạn đang vận hành kho bãi 2-3 ca/ngày, hoặc chi phí thay thế bình ắc quy chì hàng năm đang vượt ngưỡng 20% giá trị xe, đó là thời điểm vàng để thực hiện bài toán ROI chuyển đổi sang Lithium.
      </p>

      {/* Video section preview */}
      <div className="my-16 relative aspect-video group cursor-pointer overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1590674899484-d5640e854abe?q=80&w=2070&auto=format&fit=crop" 
          alt="Technical Demo" 
          className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
           <div className="w-20 h-20 bg-brand-red rounded-full flex items-center justify-center text-white shadow-2xl transition-transform duration-500 scale-90 group-hover:scale-100">
              <Play size={32} fill="currentColor" />
           </div>
           <div className="mt-6 text-center text-white">
              <div className="text-xs font-bold uppercase tracking-widest mb-1 opacity-80">Video thực tế</div>
              <div className="text-lg font-display font-bold">Quy trình lắp đặt & test tải Pin PKG 48V/450Ah</div>
           </div>
        </div>
      </div>

      <h2 id="sản-phẩm-liên-quan-từ-pkg-battery">Sản phẩm liên quan từ PKG Battery</h2>
      <p>
        Chúng tôi cung cấp hệ sinh thái năng lượng hoàn chỉnh từ linh kiện cell đơn, bộ nguồn BMS đến các module pack hoàn thiện theo tiêu chuẩn khắt khe nhất.
      </p>
      
      {/* Document strip */}
      <div className="my-10 p-5 bg-white border-2 border-neutral-100 flex items-center justify-between hover:border-brand-red hover:shadow-xl transition-all duration-300">
         <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-red-50 text-brand-red flex items-center justify-center">
               <Download size={24} />
            </div>
            <div>
               <div className="font-bold text-sm">Catalogue Pin Xe Nâng Lithium-Iron PKG (2026)</div>
               <div className="text-xs text-brand-gray italic">PDF • 8.4 MB • 42 trang kĩ thuật</div>
            </div>
         </div>
         <button className="hidden sm:flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-red">
            Tải về ngay <ArrowRight size={14} />
         </button>
      </div>
    </div>
  );
};

const FAQ = () => {
  const faqs = [
    { q: "Pin Lithium PKG có chống nước không?", a: "Tất cả các dòng pin công nghiệp của PKG Battery đều đạt chuẩn IP65 hoặc IP67 tùy theo yêu cầu vận hành trong kho lạnh hoặc môi trường ẩm ướt." },
    { q: "Thời gian bảo hành là bao lâu?", a: "Chúng tôi áp dụng chính sách bảo hành 3 - 5 năm (hoặc số chu kỳ xả tương ứng) tùy theo cấu hình sản phẩm và gói dịch vụ hậu mãi doanh nghiệp chọn." },
    { q: "Có thể tái sử dụng sạc cũ được không?", a: "Để đạt hiệu suất tối ưu và bảo vệ tuổi thọ pin, PKG Battery khuyến nghị sử dụng bộ sạc thông minh đồng bộ đi kèm." }
  ];

  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="mt-20 pt-20 border-t border-neutral-100">
       <h2 id="câu-hỏi-thường-gặp" className="mb-12">Câu hỏi thường gặp</h2>
       <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className={cn(
                "border transition-all duration-300",
                openIndex === index ? "border-brand-red bg-neutral-50" : "border-neutral-100 bg-white"
              )}
            >
              <button 
                className="w-full flex items-center justify-between p-6 text-left"
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              >
                <span className="font-bold">{faq.q}</span>
                <div className={cn("transition-transform duration-300", openIndex === index ? "rotate-45 text-brand-red" : "text-brand-gray")}>
                   <X size={20} />
                </div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-brand-gray text-sm leading-relaxed border-t border-brand-red/10">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
       </div>
    </div>
  );
};

const RelatedProducts = () => {
  const products = [
    {
      title: "Pin Lithium Xe Nâng 48V",
      spec: "450Ah / 21.6kWh",
      app: "Kho vận, Logistics, Nhà máy gỗ",
      img: "https://images.unsplash.com/photo-1590674899484-d5640e854abe?q=80&w=400&auto=format&fit=crop"
    },
    {
      title: "Pin Lithium AGV / AMR",
      spec: "24V / 100Ah",
      app: "Robot tự hành, Kho thông minh",
      img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=400&auto=format&fit=crop"
    },
    {
      title: "Bộ sạc nhanh công nghiệp",
      spec: "3-Phase / 150A",
      app: "Hệ sinh thái pin Lithium PKG",
      img: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=400&auto=format&fit=crop"
    }
  ];

  return (
    <section className="bg-brand-light-gray py-24 noise-texture">
       <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
             <div>
                <span className="text-xs font-bold text-brand-red uppercase tracking-widest mb-4 block underline underline-offset-8">Equipment Integration</span>
                <h2 className="text-4xl m-0">Giải pháp từ PKG Battery</h2>
             </div>
             <button className="text-xs font-bold uppercase tracking-widest flex items-center gap-2 group">
                Xem tất cả sản phẩm <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
             </button>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
             {products.map((p, idx) => (
               <div key={idx} className="bg-white p-8 relative group cursor-pointer border border-transparent hover:border-brand-red transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
                  <div className="aspect-[4/3] bg-neutral-100 mb-8 overflow-hidden relative">
                     <img src={p.img} alt={p.title} className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-1000" />
                     <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 text-[10px] font-bold uppercase tracking-widest">
                         In Stock
                     </div>
                  </div>
                  <h5 className="text-xl mb-2 flex items-center justify-between">
                    {p.title}
                    <ArrowUpRight size={16} className="text-brand-gray group-hover:text-brand-red transition-colors" />
                  </h5>
                  <div className="flex gap-4 mb-4">
                    <div className="flex items-center gap-1 text-[10px] font-bold text-brand-red border border-brand-red/20 px-2 py-0.5 uppercase tracking-tighter">
                      <Zap size={10} /> {p.spec}
                    </div>
                  </div>
                  <p className="text-xs text-brand-gray mb-8 leading-relaxed"><strong>Ứng dụng:</strong> {p.app}</p>
                  
                  <div className="flex items-center justify-between pt-6 border-t border-neutral-100">
                     <span className="text-[10px] font-bold uppercase text-brand-gray hover:text-brand-black transition-colors">Xem chi tiết</span>
                     <button className="text-[10px] font-bold uppercase text-brand-red px-4 py-2 border border-brand-red hover:bg-brand-red hover:text-white transition-all">Yêu cầu tư vấn</button>
                  </div>
                  
                  {/* Subtle technical line */}
                  <div className="absolute top-0 right-0 w-[2px] h-0 bg-brand-red group-hover:h-full transition-all duration-500" />
               </div>
             ))}
          </div>
       </div>
    </section>
  );
};

const RelatedArticles = () => {
  const articles = [
    { title: "BMS là gì và vì sao quan trọng trong pin công nghiệp?", cat: "Kỹ thuật", date: "05/03/2026", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=400&auto=format&fit=crop" },
    { title: "Cách tính ROI khi nâng cấp pin lithium xe nâng", cat: "Quản trị", date: "28/02/2026", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=400&auto=format&fit=crop" },
    { title: "So sánh hiệu suất Pin Lifepo4 và Lithium Ion thường", cat: "Học thuật", date: "15/02/2026", img: "https://images.unsplash.com/photo-1558444479-c8475136ac9a?q=80&w=400&auto=format&fit=crop" }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="mb-16">Đọc thêm để hiểu sâu</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((art, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="aspect-video bg-neutral-100 mb-6 overflow-hidden relative">
                <img src={art.img} alt={art.title} className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
                <div className="absolute inset-0 bg-brand-red/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="flex items-center gap-4 text-[10px] font-bold text-brand-gray uppercase tracking-widest mb-3">
                 <span className="text-brand-red">{art.cat}</span>
                 <span>/</span>
                 <span>{art.date}</span>
              </div>
              <h4 className="text-lg leading-tight group-hover:text-brand-red transition-colors">{art.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FinalCTA = () => {
  return (
    <section className="relative py-32 bg-brand-black text-white overflow-hidden">
       {/* Background */}
       <div className="absolute inset-0 opacity-20 -z-10">
          <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2000&auto=format&fit=crop" alt="Industrial bg" className="w-full h-full object-cover" />
       </div>
       <div className="absolute inset-0 bg-linear-to-b from-brand-black/80 via-brand-black to-brand-black -z-10" />
       
       <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="w-16 h-1 bg-brand-red mx-auto mb-8" />
            <h2 className="text-4xl md:text-5xl lg:text-6xl mb-8 leading-tight">
              Bạn đang cân nhắc chuyển đổi sang pin lithium cho doanh nghiệp?
            </h2>
            <p className="text-lg text-brand-gray mb-12 max-w-2xl mx-auto leading-relaxed">
              PKG Battery hỗ trợ đánh giá thiết bị hiện tại, lựa chọn cấu hình phù hợp và xây dựng giải pháp tối ưu cho vận hành thực tế. Hãy để chuyên gia của chúng tôi tư vấn MIỄN PHÍ.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-16 text-left border-y border-white/10 py-12">
               <div className="flex items-start gap-4">
                  <CheckCircle2 className="text-brand-red shrink-0" size={20} />
                  <span className="text-sm font-medium">Tư vấn cấu hình theo model thiết bị hiện có</span>
               </div>
               <div className="flex items-start gap-4">
                  <CheckCircle2 className="text-brand-red shrink-0" size={20} />
                  <span className="text-sm font-medium">Phân tích ROI và thời gian hoàn vốn thực tế</span>
               </div>
               <div className="flex items-start gap-4">
                  <CheckCircle2 className="text-brand-red shrink-0" size={20} />
                  <span className="text-sm font-medium">Giải pháp sạc thông minh cho hệ thống xe nâng</span>
               </div>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
               <button className="w-full sm:w-auto bg-brand-red hover:bg-white hover:text-brand-black transition-all duration-300 transform hover:scale-105 px-10 py-5 text-sm font-bold uppercase tracking-widest flex items-center justify-center gap-2 shadow-2xl shadow-brand-red/20">
                  Đăng ký tư vấn kỹ thuật <ArrowRight size={18} />
               </button>
               <button className="w-full sm:w-auto px-10 py-5 text-sm font-bold uppercase tracking-widest border border-white/20 hover:border-white transition-colors">
                  Xem danh mục sản phẩm
               </button>
            </div>
          </motion.div>
       </div>
       
       {/* Animated element */}
       <div className="absolute bottom-0 right-0 opacity-5 pointer-events-none">
          <Zap size={400} />
       </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-brand-black border-t border-white/5 pt-24 pb-12 text-brand-gray">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="lg:col-span-1">
             <div className="flex items-center gap-2 mb-8">
                <div className="w-10 h-10 bg-brand-red flex items-center justify-center text-white font-display font-bold text-xl">P</div>
                <span className="font-display font-bold text-xl tracking-tight text-white">PKG <span className="text-brand-red">BATTERY</span></span>
             </div>
             <p className="text-sm mb-8 leading-relaxed max-w-xs">
                Đơn vị hàng đầu Việt Nam cung cấp giải pháp pin Lithium công nghiệp và năng lượng lưu trữ B2B. Đối tác tin cậy cho kho vận 4.0.
             </p>
             <div className="flex gap-4">
                {['fb', 'ln', 'yt'].map(soc => <div key={soc} className="w-8 h-8 border border-white/10 flex items-center justify-center hover:border-brand-red transition-colors text-xs font-bold uppercase cursor-pointer">{soc}</div>)}
             </div>
          </div>
          
          <div>
            <h6 className="text-xs font-bold text-white uppercase tracking-widest mb-8">Sản phẩm chính</h6>
            <ul className="flex flex-col gap-4 text-sm">
              <li className="hover:text-white transition-colors cursor-pointer">Pin xe nâng điện</li>
              <li className="hover:text-white transition-colors cursor-pointer">Pin AGV / Robot tự hành</li>
              <li className="hover:text-white transition-colors cursor-pointer">Hệ thống ESS doanh nghiệp</li>
              <li className="hover:text-white transition-colors cursor-pointer">Cell pin lithium Lifepo4</li>
              <li className="hover:text-white transition-colors cursor-pointer">Bộ sạc nhanh công nghiệp</li>
            </ul>
          </div>
          
          <div>
            <h6 className="text-xs font-bold text-white uppercase tracking-widest mb-8">PKG Battery</h6>
            <ul className="flex flex-col gap-4 text-sm">
              <li className="hover:text-white transition-colors cursor-pointer">Về chúng tôi</li>
              <li className="hover:text-white transition-colors cursor-pointer">Dự án triển khai</li>
              <li className="hover:text-white transition-colors cursor-pointer">Tin tức & Sự kiện</li>
              <li className="hover:text-white transition-colors cursor-pointer">Hướng dẫn kĩ thuật</li>
              <li className="hover:text-white transition-colors cursor-pointer">Liên hệ báo giá</li>
            </ul>
          </div>

          <div>
             <h6 className="text-xs font-bold text-white uppercase tracking-widest mb-8">Contact Information</h6>
             <div className="flex flex-col gap-6 text-sm">
                <div className="flex gap-3">
                   <div className="w-5 h-5 text-brand-red shrink-0"><Info size={20} /></div>
                   <span>Lô C2-18, KCN Hiệp Phước, Nhà Bè, TP. Hồ Chí Minh</span>
                </div>
                <div className="flex gap-3">
                   <div className="w-5 h-5 text-brand-red shrink-0"><MessageSquare size={20} /></div>
                   <div className="flex flex-col">
                      <span className="text-white font-bold">1900 1234 XXX</span>
                      <span className="text-[10px] uppercase font-bold tracking-tighter">Support 24/7 B2B</span>
                   </div>
                </div>
                <button className="bg-white/5 border border-white/10 hover:border-brand-red p-4 text-xs font-bold uppercase transition-all">
                   Hỗ trợ kĩ thuật trực tuyến
                </button>
             </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-12 border-t border-white/5 text-[10px] font-bold uppercase tracking-widest text-neutral-600">
           <span>© 2026 PKG BATTERY VIETNAM. ALL RIGHTS RESERVED.</span>
           <div className="flex gap-8 mt-6 md:mt-0">
              <span className="hover:text-white transition-colors cursor-pointer">Privacy Policy</span>
              <span className="hover:text-white transition-colors cursor-pointer">Terms of Service</span>
              <span className="hover:text-white transition-colors cursor-pointer">Sitemap</span>
           </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  const tocItems = [
    "Vì sao doanh nghiệp chuyển sang pin lithium",
    "Pin lithium khác gì ắc quy chì",
    "Lợi ích về uptime và chi phí vận hành",
    "Cách chọn cấu hình phù hợp",
    "Khi nào nên nâng cấp",
    "Sản phẩm liên quan từ PKG Battery",
    "Câu hỏi thường gặp"
  ];

  return (
    <div className="relative">
      <ReadingProgress />
      <Header />
      
      <main>
        <HeroSection />
        <Breadcrumb />
        <KeyTakeaways />
        
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="flex flex-col lg:flex-row gap-16 relative">
             <div className="lg:w-1/4">
                <TOC items={tocItems} />
             </div>
             <div className="flex-1 max-w-[760px]">
                <ArticleBody />
                <FAQ />
                
                {/* Mobile TOC Trigger (Optional Floating Button) */}
                <div className="lg:hidden fixed bottom-6 right-6 z-40">
                   <button className="bg-brand-red text-white p-4 rounded-full shadow-2xl flex items-center justify-center">
                      <Menu size={20} />
                   </button>
                </div>
             </div>
          </div>
        </div>

        <RelatedProducts />
        <RelatedArticles />
        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
}
