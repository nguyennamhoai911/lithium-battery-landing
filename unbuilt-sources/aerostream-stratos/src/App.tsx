import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronRight, 
  ArrowRight, 
  Wind, 
  Maximize2, 
  ShieldCheck, 
  Settings, 
  Users, 
  Timer, 
  MapPin, 
  Download,
  PhoneCall,
  LayoutGrid,
  Zap,
  CheckCircle2,
  ChevronDown,
  Menu,
  X
} from 'lucide-react';
import { AircraftModel, NavSection, MissionProfile } from './types';

// --- Constants & Data ---

const NAV_SECTIONS: NavSection[] = [
  { id: 'overview', label: 'Tổng quan' },
  { id: 'models', label: 'Models' },
  { id: 'mission', label: 'Ứng dụng' },
  { id: 'performance', label: 'Hiệu suất' },
  { id: 'cabin', label: 'Cabin' },
  { id: 'faq', label: 'FAQ' },
  { id: 'contact', label: 'Liên hệ' },
];

const STRATOS_FLEET: AircraftModel[] = [
  {
    id: 'stratos-500',
    name: 'Stratos 500',
    tag: 'Continental Pioneer',
    description: 'Tối ưu hóa cho các chuyến bay khu vực với hiệu suất vận hành vượt trội và khả năng tiếp cận các sân bay ngắn.',
    imageUrl: 'https://images.unsplash.com/photo-1544015759-3376001fac4c?auto=format&fit=crop&q=80&w=800',
    specs: {
      range: '3,200 nm',
      passengers: '6-8',
      speed: 'Mach 0.80',
      cabinHeight: '1.75 m'
    }
  },
  {
    id: 'stratos-700',
    name: 'Stratos 700',
    tag: 'Global Reach',
    description: 'Sự cân bằng hoàn hảo giữa tầm bay liên lục địa và không gian cabin rộng rãi, được tin dùng bởi các tập đoàn đa quốc gia.',
    imageUrl: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&q=80&w=800',
    specs: {
      range: '6,500 nm',
      passengers: '12-14',
      speed: 'Mach 0.85',
      cabinHeight: '1.88 m'
    }
  },
  {
    id: 'stratos-900',
    name: 'Stratos 900',
    tag: 'Ultra-Long Range Flagship',
    description: 'Đỉnh cao của dòng Stratos. Tầm bay xa nhất thế giới trong phân khúc, kết hợp với công nghệ giảm tiếng ồn chủ động.',
    imageUrl: 'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&q=80&w=800',
    specs: {
      range: '8,200 nm',
      passengers: '16-19',
      speed: 'Mach 0.90',
      cabinHeight: '1.92 m'
    }
  },
  {
    id: 'stratos-multi',
    name: 'Stratos Mission-X',
    tag: 'Specialized Utility',
    description: 'Cấu hình tùy biến linh hoạt cho các nhiệm vụ cứu hộ y tế, vận tải nhẹ hoặc giám sát không phận chuyên biệt.',
    imageUrl: 'https://images.unsplash.com/photo-1473679408190-0693dd22fe6a?auto=format&fit=crop&q=80&w=800',
    specs: {
      range: '4,100 nm',
      passengers: 'Configurable',
      speed: 'Mach 0.82',
      cabinHeight: '1.85 m'
    }
  }
];

const MISSIONS: MissionProfile[] = [
  {
    title: 'Executive Mobility',
    description: 'Kết nối các trung tâm tài chính toàn cầu với sự bảo mật và tiện nghi tối đa, biến cabin thành văn phòng trên không.',
    imageUrl: 'https://images.unsplash.com/photo-1542312450-4d51fd86675e?auto=format&fit=crop&q=80&w=600'
  },
  {
    title: 'Charter & Hospitality',
    description: 'Giải pháp tối ưu cho các đơn vị khai thác charter cao cấp và resort 5 sao, nâng tầm trải nghiệm du khách.',
    imageUrl: 'https://images.unsplash.com/photo-1517524206127-48bbd363f3d7?auto=format&fit=crop&q=80&w=600'
  },
  {
    title: 'Logistics & Support',
    description: 'Vận chuyển hàng hóa giá trị cao hoặc nhân sự kỹ thuật đến các địa điểm xa xôi trong thời gian ngắn nhất.',
    imageUrl: 'https://images.unsplash.com/photo-1516146544193-b54a65682f16?auto=format&fit=crop&q=80&w=600'
  }
];

const FAQS = [
  {
    q: "Stratos Series phù hợp với nhu cầu vận hành nào?",
    a: "Dòng Stratos được thiết kế đa dạng từ các chặng bay khu vực (Stratos 500) đến các chặng bay siêu dài liên lục địa (Stratos 900). Chúng tôi sẽ tư vấn dựa trên tần suất bay, số lượng hành khách trung bình và các điểm đến ưu tiên của bạn."
  },
  {
    q: "Có thể tùy biến nội thất cabin không?",
    a: "Hoàn toàn có thể. Chúng tôi cung cấp các gói Bespoke Interior cho phép khách hàng lựa chọn vật liệu, cách bố trí ghế (club seating, divan, conference lounge) và tích hợp các thiết bị liên lạc vệ tinh tiên tiến nhất."
  },
  {
    q: "Thời gian bàn giao trung bình là bao lâu?",
    a: "Tùy thuộc vào model và mức độ tùy biến, thời gian bàn giao dao động từ 12 đến 24 tháng. Chúng tôi cũng có các suất 'Early Delivery' cho một số cấu hình tiêu chuẩn có sẵn."
  },
  {
    q: "Quy trình báo giá và tư vấn cấu hình như thế nào?",
    a: "Quy trình bắt đầu bằng một buổi thảo luận chuyên sâu (Commercial Consultation) để hiểu rõ mục tiêu khai thác. Sau đó chúng tôi sẽ gửi bản đề xuất kỹ thuật và báo giá chi tiết trong vòng 5-7 ngày làm việc."
  }
];

// --- Sub-components ---

const SectionHeading = ({ title, subtitle, light = false }: { title: string, subtitle?: string, light?: boolean }) => (
  <div className="mb-12">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`font-mono text-xs uppercase tracking-[0.2em] mb-3 ${light ? 'text-white/60' : 'text-brand-graphite/50'}`}
    >
      {subtitle}
    </motion.div>
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      className={`font-display text-4xl md:text-5xl font-medium tracking-tight ${light ? 'text-white' : 'text-brand-graphite'}`}
    >
      {title}
    </motion.h2>
  </div>
);

// --- Main Page Component ---

export default function App() {
  const [activeSection, setActiveSection] = useState('overview');
  const [isNavSticky, setIsNavSticky] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsNavSticky(scrollY > window.innerHeight * 0.8);
      
      // Update active section based on scroll position
      const sections = NAV_SECTIONS.map(s => document.getElementById(s.id));
      const currentSection = [...sections].reverse().find(section => section && section.offsetTop <= scrollY + 120);
      if (currentSection) setActiveSection(currentSection.id);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white selection:bg-brand-red selection:text-white">
      {/* 1. Header & Hero Section */}
      <header className="absolute top-0 left-0 w-full z-50 px-6 md:px-12 py-8 flex justify-between items-center bg-gradient-to-bottom from-black/50 to-transparent">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-brand-red flex items-center justify-center rounded-sm">
            <Wind className="text-white w-5 h-5" />
          </div>
          <span className="font-display text-xl font-bold tracking-tighter text-white uppercase italic">AeroStream</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <button className="text-white/80 hover:text-white text-sm font-medium transition-colors">Portolio</button>
          <button className="text-white/80 hover:text-white text-sm font-medium transition-colors">Services</button>
          <button className="bg-brand-red hover:bg-red-700 text-white px-6 py-2.5 rounded-sm text-sm font-semibold transition-all flex items-center gap-2 group">
            Commercial Inquiry
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(true)}
        >
          <Menu className="w-6 h-6" />
        </button>
      </header>

      {/* Hero Section */}
      <section id="overview" className="relative h-screen flex items-center justify-center overflow-hidden bg-brand-graphite">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1540944030-482f71448860?auto=format&fit=crop&q=80&w=1600" 
            alt="Stratos Jet"
            className="w-full h-full object-cover opacity-60 scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-graphite via-transparent to-black/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="font-mono text-brand-red text-sm tracking-[0.3em] uppercase mb-6 inline-block border-b border-brand-red/30 pb-2">
              The Stratos Series
            </div>
            <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold text-white tracking-tighter mb-8 leading-[0.9]">
              ULTRA-LONG <br />
              <span className="text-brand-silver/30 outline-text">RANGE LEGACY</span>
            </h1>
            <p className="text-white/70 max-w-2xl mx-auto text-lg md:text-xl font-light mb-12 text-balance leading-relaxed">
              Thiết lập chuẩn mực mới cho hàng không thương gia. Kết hợp tầm bay không giới hạn với sự tinh xảo trong kỹ thuật chế tác cabin.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto bg-brand-red hover:bg-red-700 text-white px-8 py-4 rounded-sm text-base font-bold transition-all flex items-center justify-center gap-3 group shadow-xl shadow-red-900/20">
                Nhận tư vấn cấu hình
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="w-full sm:w-auto border border-white/30 hover:bg-white/10 text-white px-8 py-4 rounded-sm text-base font-semibold transition-all backdrop-blur-sm">
                Xem Models chuyên sâu
              </button>
            </div>
          </motion.div>
        </div>

        {/* Quick Facts */}
        <div className="absolute bottom-12 left-0 w-full px-6 flex justify-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-wrap justify-center gap-8 md:gap-16 text-white border-t border-white/10 pt-8"
          >
            {[
              { label: 'Max Range', value: '8,200nm' },
              { label: 'Cruise Speed', value: 'Mach 0.90' },
              { label: 'Quiet Cabin', value: '38 dBA' },
              { label: 'Flex Layout', value: '18+ Configs' }
            ].map((fact, i) => (
              <div key={i} className="text-center">
                <div className="text-white/40 font-mono text-[10px] uppercase tracking-widest mb-1">{fact.label}</div>
                <div className="text-xl font-display font-medium tracking-tight whitespace-nowrap">{fact.value}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 2. Local Sticky Submenu */}
      <nav 
        className={`z-[100] transition-all duration-300 ${
          isNavSticky 
          ? 'sticky top-0 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm py-4' 
          : 'relative bg-white border-b border-gray-100 py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="hidden lg:flex items-center gap-8">
            {NAV_SECTIONS.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`text-sm font-semibold tracking-wide transition-all relative py-2 ${
                  activeSection === section.id 
                  ? 'text-brand-red' 
                  : 'text-brand-graphite/40 hover:text-brand-graphite'
                }`}
              >
                {section.label}
                {activeSection === section.id && (
                  <motion.div 
                    layoutId="activeTab" 
                    className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-red" 
                  />
                )}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4 w-full lg:w-auto justify-between lg:justify-end">
             {/* Small screen label */}
             <div className="lg:hidden flex items-center gap-2 text-brand-graphite font-bold text-sm uppercase tracking-tighter">
               <Wind className="w-4 h-4 text-brand-red" />
               Stratos Series
             </div>
             
             <div className="flex items-center gap-3">
                <button className="hidden sm:flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-wider text-brand-graphite/60 hover:text-brand-graphite transition-colors border border-gray-200">
                  <Download className="w-3.5 h-3.5" />
                  Brochure
                </button>
                <button className="flex items-center gap-2 px-6 py-2 bg-brand-graphite text-white text-xs font-bold uppercase tracking-wider hover:bg-brand-red transition-all shadow-lg shadow-black/5">
                  Request Quote
                </button>
             </div>
          </div>
        </div>
      </nav>

      {/* 3. Overview Section */}
      <section className="py-24 md:py-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <SectionHeading 
                subtitle="Evolution of Performance" 
                title="Định nghĩa lại khả năng kết nối tầm xa." 
              />
              <p className="text-xl text-brand-graphite/70 mb-10 leading-relaxed font-light">
                Dòng Stratos Series đại diện cho chương mới nhất trong hành trình 40 năm đổi mới của AeroStream. Chúng tôi không chỉ chế tạo máy bay; chúng tôi thiết kế những trải nghiệm di động tối thượng dành cho các nhà lãnh đạo và doanh nghiệp toàn cầu.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-8">
                {[
                  { icon: <Timer />, title: 'Efficiency', desc: 'Giảm 15% tiêu thụ nhiên liệu so với thế hệ tiền nhiệm.' },
                  { icon: <ShieldCheck />, title: 'Precision', desc: 'Hệ thống Avionics tích hợp AI cho độ an toàn tuyệt đối.' },
                  { icon: <Users />, title: 'Capacity', desc: 'Cabin linh hoạt hỗ trợ cấu hình lên đến 19 hành khách.' },
                  { icon: <MapPin />, title: 'Domain', desc: 'Tầm bay 8,200 dặm, kết nối mọi thủ đô trên thế giới.' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="bg-brand-silver/30 p-2 rounded-sm text-brand-red shrink-0 w-10 h-10 flex items-center justify-center">
                      {React.cloneElement(item.icon as React.ReactElement, { className: 'w-5 h-5' })}
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-brand-graphite mb-1">{item.title}</h4>
                      <p className="text-sm text-brand-graphite/60 leading-snug">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square bg-gray-50 overflow-hidden relative group">
                 <img 
                  src="https://images.unsplash.com/photo-1544015759-3376001fac4c?auto=format&fit=crop&q=80&w=1000" 
                  alt="Engineering detail"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-brand-graphite/10" />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-brand-red p-8 text-white max-w-[280px] hidden md:block">
                <div className="text-4xl font-display font-bold mb-2 tracking-tighter">40+</div>
                <div className="text-xs font-mono uppercase tracking-widest opacity-80">Years of Aviation Engineering Excellence</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Fleet Architecture Section (CRITICAL) */}
      <section id="models" className="py-24 md:py-32 bg-gray-50 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            subtitle="Fleet Architecture" 
            title="Lựa chọn model phù hợp với mục tiêu khai thác." 
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {STRATOS_FLEET.map((aircraft, i) => (
              <motion.div
                key={aircraft.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-white border border-gray-100 overflow-hidden flex flex-col hover:shadow-2xl hover:shadow-black/5 transition-all duration-500"
              >
                <div className="aspect-[16/9] overflow-hidden relative">
                  <img 
                    src={aircraft.imageUrl} 
                    alt={aircraft.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-brand-red px-3 py-1 text-[10px] font-mono text-white tracking-widest uppercase">
                    {aircraft.tag}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                
                <div className="p-8 flex-grow flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-display text-3xl font-bold tracking-tight text-brand-graphite">{aircraft.name}</h3>
                    <div className="w-10 h-10 border border-gray-100 flex items-center justify-center text-brand-graphite/30 group-hover:text-brand-red group-hover:border-brand-red transition-colors">
                      <ChevronRight className="w-6 h-6" />
                    </div>
                  </div>
                  
                  <p className="text-brand-graphite/60 text-sm mb-8 leading-relaxed line-clamp-2">
                    {aircraft.description}
                  </p>

                  <div className="grid grid-cols-2 gap-y-4 gap-x-6 pt-6 border-t border-gray-50 mb-8">
                    {Object.entries(aircraft.specs).map(([key, val]) => (
                      <div key={key}>
                        <div className="text-[10px] font-mono uppercase text-brand-graphite/40 tracking-wider mb-0.5">{key.replace(/([A-Z])/g, ' $1')}</div>
                        <div className="text-sm font-bold text-brand-graphite">{val}</div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto flex gap-3">
                    <button className="flex-grow bg-brand-graphite text-white text-xs font-bold uppercase tracking-widest py-3 hover:bg-brand-red transition-all">
                      Xem chi tiết
                    </button>
                    <button className="px-4 border border-gray-200 text-brand-graphite hover:bg-gray-50 transition-colors">
                      <Download className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 bg-brand-graphite p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 rounded-sm overflow-hidden relative">
             <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
                <svg viewBox="0 0 100 100" className="w-full h-full fill-white">
                  <path d="M0,50 L100,50 M50,0 L50,100" stroke="currentColor" strokeWidth="0.1" />
                  <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.1" />
                </svg>
             </div>
             <div className="relative z-10">
               <h4 className="text-2xl font-display font-bold mb-2">So sánh các Model</h4>
               <p className="text-white/60 text-sm max-w-md">Bảng so sánh chi tiết thông số kỹ thuật, khả năng vận hành và chi phí bảo trì trọn đời giữa các phiên bản.</p>
             </div>
             <button className="relative z-10 px-8 py-3 bg-white text-brand-graphite text-xs font-bold uppercase tracking-widest hover:bg-brand-red hover:text-white transition-all">
               Mở Spec Comparison
             </button>
          </div>
        </div>
      </section>

      {/* 5. Mission Section */}
      <section id="mission" className="py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            subtitle="Mission Profiles" 
            title="Đa dạng mục đích, thống nhất tầm nhìn." 
          />

          <div className="grid md:grid-cols-3 gap-8">
            {MISSIONS.map((mission, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col gap-6"
              >
                <div className="aspect-[4/3] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                  <img 
                    src={mission.imageUrl} 
                    alt={mission.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-graphite mb-3">{mission.title}</h3>
                  <p className="text-brand-graphite/60 text-sm leading-relaxed">{mission.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Engineering & Performance */}
      <section id="performance" className="py-24 md:py-32 bg-brand-graphite text-white px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="w-full md:w-1/2">
               <SectionHeading 
                subtitle="Engineering Excellence" 
                title="Sức mạnh đến từ sự bền bỉ." 
                light
              />
              <div className="space-y-8">
                {[
                  { title: 'Aerodynamic Efficiency', desc: 'Thiết kế cánh tối ưu giúp giảm lực cản và tăng độ ổn định ở độ cao 51,000 ft.' },
                  { title: 'Active Acoustic Management', desc: 'Công nghệ khử tiếng ồn tiên tiến tạo ra môi trường cabin yên tĩnh nhất thị trường.' },
                  { title: 'Smart Maintenance', desc: 'Hệ thống tự chẩn đoán kết nối thời gian thực với trung tâm bảo trì AeroStream.' }
                ].map((item, i) => (
                  <div key={i} className="group">
                    <h3 className="text-lg font-bold mb-2 flex items-center gap-2 group-hover:text-brand-red transition-colors">
                      <div className="w-1 h-1 bg-brand-red rounded-full" />
                      {item.title}
                    </h3>
                    <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, rotateY: 30 }}
              whileInView={{ opacity: 1, rotateY: 0 }}
              viewport={{ once: true }}
              className="w-full md:w-1/2 relative"
            >
              <div className="aspect-video relative">
                 {/* Blueprint effect */}
                 <div className="absolute inset-0 border border-white/5 bg-white/[0.02] flex items-center justify-center">
                    <img 
                      src="https://images.unsplash.com/photo-1544015759-3376001fac4c?auto=format&fit=crop&q=80&w=1000" 
                      alt="Aircraft Engineering"
                      className="w-4/5 h-4/5 object-cover opacity-20 grayscale brightness-200"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 flex items-center justify-center p-8">
                       <svg viewBox="0 0 400 200" className="w-full h-full text-white/10 stroke-current fill-none">
                         <path d="M50,100 L350,100 M200,50 L200,150" strokeWidth="0.5" />
                         <circle cx="200" cy="100" r="80" strokeWidth="0.5" />
                         <rect x="80" y="60" width="240" height="80" strokeWidth="0.5" />
                       </svg>
                    </div>
                 </div>
                 {/* Data points */}
                 <div className="absolute top-1/4 right-1/4 flex gap-4">
                   <div className="w-px h-12 bg-brand-red" />
                   <div className="text-[10px] font-mono uppercase tracking-widest py-2">
                     <span className="text-brand-red">Pos_X:</span> 12.049<br/>
                     <span className="text-brand-red">Pos_Y:</span> 08.112
                   </div>
                 </div>
                 <div className="absolute bottom-1/4 left-1/4 flex gap-4">
                   <div className="w-px h-12 bg-brand-red" />
                   <div className="text-[10px] font-mono uppercase tracking-widest py-2">
                     <span className="text-brand-red">Status:</span> Nominal<br/>
                     <span className="text-brand-red">Sync:</span> Active
                   </div>
                 </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 7. Cabin Experience */}
      <section id="cabin" className="py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="w-full lg:w-1/3">
              <SectionHeading 
                subtitle="Onboard Experience" 
                title="Cabin của tương lai." 
              />
              <p className="text-brand-graphite/60 mb-8 leading-relaxed">
                Mỗi chi tiết trong cabin Stratos được thiết kế tỉ mỉ để tối ưu hóa sức khỏe và năng suất. Từ chất lượng không khí được lọc bằng HEPA đến các cửa sổ rộng được thiết kế để đón ánh sáng tự nhiên tối đa.
              </p>
              <ul className="space-y-4">
               {[
                 'Chỗ ngồi Pullman có thể chuyển đổi thành giường phẳng.',
                 'Khu vực bếp Full-size với đầu bếp chuyên nghiệp.',
                 'Hệ thống giải trí 4K và Wifi tốc độ cao toàn cầu.',
                 'Phòng họp riêng biệt cho tối đa 4 người.'
               ].map((item, i) => (
                 <li key={i} className="flex items-center gap-3 text-sm text-brand-graphite font-medium">
                   <CheckCircle2 className="w-4 h-4 text-brand-red" />
                   {item}
                 </li>
               ))}
              </ul>
              <button className="mt-10 px-8 py-3 border border-brand-graphite text-xs font-bold uppercase tracking-widest hover:bg-brand-graphite hover:text-white transition-all">
                Khám phá Cabin 360°
              </button>
            </div>
            
            <div className="w-full lg:w-2/3 grid grid-cols-2 gap-4">
               <div className="aspect-[4/5] bg-gray-100 overflow-hidden col-span-1">
                 <img src="https://images.unsplash.com/photo-1563220455-8f4219438980?auto=format&fit=crop&q=80&w=800" alt="Cabin seating" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
               </div>
               <div className="space-y-4 col-span-1">
                 <div className="aspect-square bg-gray-100 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1517524206127-48bbd363f3d7?auto=format&fit=crop&q=80&w=800" alt="Luxury detail" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                 </div>
                 <div className="aspect-[4/3] bg-gray-100 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1628102422204-63304dfcd35e?auto=format&fit=crop&q=80&w=800" alt="Flight view" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FAQ Section */}
      <section id="faq" className="py-24 md:py-32 bg-brand-silver/20 px-6">
        <div className="max-w-3xl mx-auto">
          <SectionHeading 
            subtitle="Support & Inquiries" 
            title="Giải đáp thắc mắc chuyên sâu." 
          />
          <div className="space-y-6">
            {FAQS.map((faq, i) => (
              <details key={i} className="group bg-white border border-gray-100 open:shadow-xl open:shadow-black/5 transition-all">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none list-inside">
                  <span className="font-bold text-brand-graphite pr-8">{faq.q}</span>
                  <div className="w-6 h-6 shrink-0 transition-transform group-open:rotate-180">
                    <ChevronDown className="w-full h-full text-brand-red" />
                  </div>
                </summary>
                <div className="px-6 pb-6 text-sm text-brand-graphite/60 leading-relaxed border-t border-gray-50 pt-4">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Final CTA Section */}
      <section id="contact" className="py-24 md:py-48 bg-brand-graphite overflow-hidden relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] opacity-5 pointer-events-none">
           <svg viewBox="0 0 100 100" className="w-full h-full fill-white">
             <path d="M0,0 L100,100 M0,100 L100,0" stroke="currentColor" strokeWidth="0.05" />
           </svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 tracking-tighter leading-tight">
              Sẵn sàng cho lộ trình <br /> <span className="text-brand-red">thành công tiếp theo?</span>
            </h2>
            <p className="text-white/60 max-w-xl mx-auto mb-12 text-lg">
              Đội ngũ chuyên gia thương mại của chúng tôi luôn sẵn sàng hỗ trợ bạn lựa chọn model và cấu hình tối ưu nhất cho nhu cầu của tổ chức.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
               <button className="w-full sm:w-auto px-10 py-5 bg-brand-red text-white text-base font-bold uppercase tracking-widest hover:bg-white hover:text-brand-graphite transition-all flex items-center justify-center gap-3 group">
                 <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-all" />
                 Nhận báo giá chi tiết
               </button>
               <button className="w-full sm:w-auto px-10 py-5 border border-white/20 text-white text-base font-bold uppercase tracking-widest hover:bg-white/10 transition-all flex items-center justify-center gap-3">
                 <PhoneCall className="w-5 h-5" />
                 Liên hệ tư vấn (Hotline)
               </button>
            </div>
            
            <div className="mt-16 flex flex-wrap justify-center gap-12 text-white/40 border-t border-white/10 pt-12">
               <div className="flex items-center gap-2">
                 <ShieldCheck className="w-5 h-5 text-brand-red" />
                 <span className="text-xs font-mono uppercase tracking-[0.2em]">Certified Standards</span>
               </div>
               <div className="flex items-center gap-2">
                 <Settings className="w-5 h-5 text-brand-red" />
                 <span className="text-xs font-mono uppercase tracking-[0.2em]">Global Support</span>
               </div>
               <div className="flex items-center gap-2">
                 <LayoutGrid className="w-5 h-5 text-brand-red" />
                 <span className="text-xs font-mono uppercase tracking-[0.2em]">Custom Solutions</span>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-brand-red flex items-center justify-center rounded-sm">
              <Wind className="text-white w-4 h-4" />
            </div>
            <span className="font-display text-lg font-bold tracking-tighter text-white uppercase italic">AeroStream</span>
          </div>
          
          <div className="flex gap-8 text-white/40 text-[10px] font-mono uppercase tracking-[0.2em]">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Safety Records</a>
            <a href="#" className="hover:text-white transition-colors">Press Inquiries</a>
          </div>
          
          <div className="text-white/40 text-[10px] font-mono tracking-widest">
            © 2026 AeroStream Aerospace Corp. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-[200] bg-brand-graphite flex flex-col p-12"
          >
            <button 
              className="self-end text-white p-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X className="w-8 h-8" />
            </button>
            <div className="flex flex-col gap-8 mt-12">
               {NAV_SECTIONS.map((section) => (
                 <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className="text-left text-3xl font-display font-bold text-white hover:text-brand-red transition-colors"
                 >
                   {section.label}
                 </button>
               ))}
            </div>
            <div className="mt-auto">
               <button className="w-full bg-brand-red text-white py-4 font-bold text-sm uppercase tracking-widest mb-4">Inquiry</button>
               <div className="flex justify-center gap-4 text-white/40">
                  <Wind className="w-6 h-6" />
                  <span className="font-mono text-xs uppercase tracking-widest">AeroStream Excellence</span>
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
