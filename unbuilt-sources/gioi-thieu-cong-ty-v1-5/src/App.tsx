/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { 
  BarChart3, 
  ShieldCheck, 
  Settings, 
  Zap, 
  ArrowRight, 
  Plus, 
  CheckCircle2, 
  MapPin, 
  Phone, 
  Mail, 
  Globe, 
  Menu, 
  X, 
  ChevronRight,
  Factory,
  Database,
  Truck,
  Battery,
  Shield,
  Activity,
  Search
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/90 backdrop-blur-lg shadow-sm py-4' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-white">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-pkg-red flex items-center justify-center font-bold text-xl italic skew-x-[-15deg]">
            <span className="skew-x-[15deg]">PKG</span>
          </div>
          <div className={`text-xl font-bold tracking-tighter ${isScrolled ? 'text-pkg-black' : 'text-white'}`}>
            BATTERY
          </div>
        </div>

        <div className={`hidden md:flex space-x-10 text-sm font-medium uppercase tracking-widest ${isScrolled ? 'text-pkg-black' : 'text-white'}`}>
          <a href="#about" className="hover:text-pkg-red transition-colors">Về chúng tôi</a>
          <a href="#products" className="hover:text-pkg-red transition-colors">Giải pháp</a>
          <a href="#quality" className="hover:text-pkg-red transition-colors">Năng lực</a>
          <a href="#network" className="hover:text-pkg-red transition-colors">Mạng lưới</a>
        </div>

        <div className="flex items-center space-x-6">
          <a href="#contact" className="hidden md:block">
            <button className={`px-6 py-2 text-xs font-bold uppercase tracking-widest transition-all duration-300 ${isScrolled ? 'bg-pkg-red text-white hover:bg-pkg-red-dark' : 'bg-white text-pkg-black hover:bg-pkg-red hover:text-white'}`}>
              Liên hệ tư vấn
            </button>
          </a>
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className={isScrolled ? 'text-pkg-black' : 'text-white'} /> : <Menu className={isScrolled ? 'text-pkg-black' : 'text-white'} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-0 left-0 w-full h-screen bg-pkg-black text-white p-10 flex flex-col space-y-8 text-2xl font-bold"
          >
            <div className="flex justify-between items-center mb-10">
              <span className="text-pkg-red">PKG</span>
              <X onClick={() => setIsMenuOpen(false)} />
            </div>
            <a href="#about" onClick={() => setIsMenuOpen(false)}>Về chúng tôi</a>
            <a href="#products" onClick={() => setIsMenuOpen(false)}>Giải pháp</a>
            <a href="#quality" onClick={() => setIsMenuOpen(false)}>Năng lực</a>
            <a href="#network" onClick={() => setIsMenuOpen(false)}>Mạng lưới</a>
            <button className="w-full bg-pkg-red py-4 text-sm mt-10">LIÊN HỆ NGAY</button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const TrustBar = () => {
  const certifications = ["IEC 62619", "UN38.3", "ISO 9001:2015", "MIC INSURANCE", "ĐẠI LÝ TOÀN QUỐC", "HỖ TRỢ 24/7"];
  
  return (
    <div className="bg-pkg-silver/30 border-y border-pkg-silver py-6 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
          {certifications.map((cert) => (
            <div key={cert} className="flex items-center space-x-2">
              <CheckCircle2 size={16} className="text-pkg-red" />
              <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] whitespace-nowrap uppercase">{cert}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ value, label }: { value: string, label: string }) => (
  <div className="border-l-2 border-pkg-red/30 pl-6 py-2">
    <div className="text-4xl md:text-5xl font-extrabold text-pkg-black mb-1">{value}</div>
    <div className="text-[10px] md:text-xs font-bold text-gray-500 uppercase tracking-widest leading-relaxed max-w-[120px]">{label}</div>
  </div>
);

const ProductCard = ({ title, desc, icon: Icon, image, link }: any) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="group relative overflow-hidden h-[500px] flex items-end p-8 md:p-12 cursor-pointer"
  >
    <div className="absolute inset-0 z-0">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-pkg-black via-pkg-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
    </div>
    
    <div className="relative z-10 w-full">
      <div className="w-12 h-12 bg-pkg-red flex items-center justify-center mb-6 text-white transition-transform duration-500 group-hover:rotate-12">
        <Icon size={24} />
      </div>
      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-pkg-red transition-colors capitalize">{title}</h3>
      <p className="text-gray-300 text-sm mb-6 max-w-xs leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">{desc}</p>
      <div className="flex items-center text-white text-[10px] font-bold tracking-[0.2em] uppercase">
        <span>Khám phá giải pháp</span>
        <ArrowRight size={14} className="ml-2 group-hover:translate-x-2 transition-transform" />
      </div>
    </div>
  </motion.div>
);

const SectionHeading = ({ sub, title, dark = false }: { sub: string, title: string, dark?: boolean }) => (
  <div className="mb-16 md:mb-24">
    <div className="flex items-center space-x-4 mb-4">
      <div className="w-8 h-[2px] bg-pkg-red"></div>
      <span className={`text-xs font-bold uppercase tracking-[0.3em] ${dark ? 'text-pkg-red' : 'text-pkg-red'}`}>{sub}</span>
    </div>
    <h2 className={`text-3xl md:text-5xl lg:text-6xl font-extrabold max-w-4xl leading-[1.1] ${dark ? 'text-white' : 'text-pkg-black'}`}>
      {title}
    </h2>
  </div>
);

// --- Types & Data ---

interface Location {
  id: number;
  city: string;
  type: 'branch' | 'dealer' | 'service';
  name: string;
  address: string;
  phone: string;
  coords: { x: number; y: number }; // Percentage coords for SVG
}

const NETWORKS: Location[] = [
  { id: 1, city: "Hà Nội", type: 'branch', name: "PKG Battery Head Office", address: "Số 123, Đường Công Nghệ, KCN Bắc Thăng Long, Hà Nội", phone: "+84 900 123 456", coords: { x: 48, y: 15 } },
  { id: 2, city: "Bắc Ninh", type: 'service', name: "Trung Tâm Kỹ Thuật Bắc Ninh", address: "KCN Yên Phong, Huyện Yên Phong, Bắc Ninh", phone: "+84 900 123 457", coords: { x: 52, y: 12 } },
  { id: 3, city: "Hải Phòng", type: 'dealer', name: "Đại Lý Hải Phòng - VinPower", address: "Quận Hải An, TP. Hải Phòng", phone: "+84 900 123 458", coords: { x: 55, y: 18 } },
  { id: 4, city: "Đà Nẵng", type: 'branch', name: "Chi Nhánh Miền Trung", address: "KCN Hòa Khánh, Quận Liên Chiểu, Đà Nẵng", phone: "+84 900 123 459", coords: { x: 62, y: 45 } },
  { id: 5, city: "Bình Dương", type: 'dealer', name: "Đại Lý Bình Dương", address: "KCN VSIP II, TP. Thủ Dầu Một, Bình Dương", phone: "+84 900 123 460", coords: { x: 45, y: 82 } },
  { id: 6, city: "TP. Hồ Chí Minh", type: 'branch', name: "Chi Nhánh Miền Nam", address: "Số 456, Đường Kỹ Thuật, Quận 9, TP. HCM", phone: "+84 900 123 461", coords: { x: 42, y: 85 } },
  { id: 7, city: "Đồng Nai", type: 'service', name: "Trung Tâm Bảo Hành Đồng Nai", address: "KCN Biên Hòa 2, TP. Biên Hòa, Đồng Nai", phone: "+84 900 123 462", coords: { x: 48, y: 84 } },
  { id: 8, city: "Cần Thơ", type: 'dealer', name: "Đại Lý Miền Tây", address: "KCN Trà Nóc, Quận Bình Thủy, Cần Thơ", phone: "+84 900 123 463", coords: { x: 35, y: 92 } },
];

const NetworkSection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState<'all' | 'branch' | 'dealer' | 'service'>('all');
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(NETWORKS[0]);

  const filteredLocations = NETWORKS.filter(loc => {
    const matchesSearch = loc.city.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          loc.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === 'all' || loc.type === filterType;
    return matchesSearch && matchesType;
  });

  return (
    <section id="network" className="py-24 md:py-40 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24 items-start">
          
          <div className="lg:col-span-5">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-8 h-[2px] bg-pkg-red"></div>
              <span className="text-pkg-red text-[10px] font-bold uppercase tracking-[0.3em]">Mạng lưới toàn quốc</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight">
              08+ <span className="text-pkg-red">Điểm hiện diện</span> & Mạng lưới đang mở rộng
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-12">
              PKG Battery đang xây dựng hệ thống chi nhánh và đối tác phân phối trên toàn quốc nhằm mang giải pháp 
              pin Lithium chất lượng cao đến gần hơn với doanh nghiệp, giúp tăng tốc độ hỗ trợ kỹ thuật và vận hành.
            </p>

            {/* Filter & Search */}
            <div className="space-y-4 mb-10">
              <div className="relative group">
                <input 
                  type="text" 
                  placeholder="Tìm theo tỉnh thành hoặc tên điểm..." 
                  className="w-full bg-pkg-silver/20 border border-pkg-silver/50 px-6 py-4 text-sm focus:outline-none focus:border-pkg-red transition-all pl-12"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-pkg-red transition-colors" />
              </div>

              <div className="flex flex-wrap gap-2">
                {['all', 'branch', 'dealer', 'service'].map((type) => (
                  <button 
                    key={type}
                    onClick={() => setFilterType(type as any)}
                    className={`px-4 py-2 text-[10px] font-bold uppercase tracking-widest border transition-all ${filterType === type ? 'bg-pkg-red border-pkg-red text-white' : 'bg-transparent border-pkg-silver text-gray-500 hover:border-pkg-red hover:text-pkg-red'}`}
                  >
                    {type === 'all' ? 'Tất cả' : type === 'branch' ? 'Chi nhánh' : type === 'dealer' ? 'Đại lý' : 'Dịch vụ'}
                  </button>
                ))}
              </div>
            </div>

            {/* Locations List */}
            <div className="space-y-4 max-h-[400px] overflow-y-auto pr-4 custom-scrollbar">
              <AnimatePresence mode="popLayout">
                {filteredLocations.map((loc) => (
                  <motion.div 
                    layout
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    key={loc.id}
                    onClick={() => setSelectedLocation(loc)}
                    className={`p-6 border cursor-pointer transition-all ${selectedLocation?.id === loc.id ? 'border-pkg-red bg-pkg-red/5' : 'border-pkg-silver/50 hover:border-pkg-red'}`}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-bold text-base">{loc.city}</h4>
                      <span className={`text-[8px] font-black uppercase px-2 py-1 tracking-widest ${loc.type === 'branch' ? 'bg-pkg-black text-white' : 'bg-pkg-red text-white'}`}>
                        {loc.type === 'branch' ? 'Chi nhánh' : loc.type === 'dealer' ? 'Đại lý' : 'Dịch vụ'}
                      </span>
                    </div>
                    <div className="text-xs text-gray-600 font-medium mb-2">{loc.name}</div>
                    {selectedLocation?.id === loc.id && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 border-t border-pkg-red/10 mt-4 space-y-3">
                          <div className="flex items-start space-x-3 text-[11px] text-gray-500">
                            <MapPin size={14} className="text-pkg-red flex-shrink-0 mt-0.5" />
                            <span>{loc.address}</span>
                          </div>
                          <div className="flex items-center space-x-3 text-[11px] text-gray-500">
                            <Phone size={14} className="text-pkg-red flex-shrink-0" />
                            <span>{loc.phone}</span>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            <div className="mt-12 flex flex-col md:flex-row gap-4">
              <button className="flex-1 bg-pkg-black text-white py-4 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-pkg-red transition-all">
                Tìm điểm gần bạn
              </button>
              <button className="flex-1 border-2 border-pkg-black py-4 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-pkg-black hover:text-white transition-all">
                Trở thành đối tác
              </button>
            </div>
          </div>

          <div className="lg:col-span-7 h-[600px] md:h-[800px] relative bg-pkg-silver/10 border border-pkg-silver/30 rounded-3xl overflow-hidden group">
            {/* Vietnam SVG Map */}
            <div className="absolute inset-0 flex items-center justify-center p-12 overflow-hidden">
              <svg 
                viewBox="0 0 100 135" 
                className="h-full w-auto text-pkg-silver/40 fill-current transition-all duration-1000 group-hover:scale-105"
                style={{ filter: 'drop-shadow(0 0 40px rgba(0,0,0,0.05))' }}
              >
                {/* Simplified VN Path */}
                <path d="M45,5 L52,5 L55,10 L50,20 L52,30 L60,40 L65,50 L60,60 L50,70 L45,80 L40,90 L42,100 L45,110 L48,115 L45,120 L40,125 L35,130 L30,125 L32,115 L35,105 L32,95 L25,90 L28,80 L35,75 L40,65 L45,55 L50,45 L52,35 L48,25 L45,15 L42,10 Z" />
                
                {/* Network Connection Lines */}
                <AnimatePresence>
                  {filterType === 'all' && (
                    <motion.path 
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 0.1 }}
                      transition={{ duration: 2, ease: "easeInOut" }}
                      d="M48,15 L62,45 M62,45 L42,85"
                      fill="none"
                      stroke="#D61F26"
                      strokeWidth="0.5"
                      strokeDasharray="2 2"
                    />
                  )}
                </AnimatePresence>

                {/* Map Markers */}
                {NETWORKS.map((loc) => {
                  const isVisible = filterType === 'all' || loc.type === filterType;
                  const isSelected = selectedLocation?.id === loc.id;
                  
                  return (
                    <g 
                      key={loc.id} 
                      onClick={() => setSelectedLocation(loc)}
                      className="cursor-pointer"
                      opacity={isVisible ? 1 : 0.2}
                      style={{ transition: 'opacity 0.5s' }}
                    >
                      {isSelected && (
                        <circle 
                          cx={loc.coords.x} 
                          cy={loc.coords.y} 
                          r="4" 
                          className="fill-pkg-red opacity-10 animate-ping" 
                        />
                      )}
                      <circle 
                        cx={loc.coords.x} 
                        cy={loc.coords.y} 
                        r={isSelected ? "1.5" : "0.8"} 
                        className={`${isSelected ? 'fill-pkg-red' : 'fill-gray-400'} transition-all duration-300`} 
                      />
                    </g>
                  );
                })}
              </svg>
              
              <div className="absolute top-10 left-10 z-10 flex flex-col items-center">
                <div className="text-[150px] font-black text-pkg-black/5 leading-none italic skew-x-[-15deg] select-none">VN</div>
              </div>

              {/* Tooltip on Map */}
              <AnimatePresence>
                {selectedLocation && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute z-20 pointer-events-none glass-card p-4 text-white text-[10px] font-bold uppercase tracking-widest min-w-[200px]"
                    style={{ 
                      top: `${selectedLocation.coords.y * 0.7}%`, 
                      left: selectedLocation.coords.x > 50 ? 'auto' : `${selectedLocation.coords.x}%`,
                      right: selectedLocation.coords.x > 50 ? `${100 - selectedLocation.coords.x}%` : 'auto',
                    }}
                  >
                    <div className="text-pkg-red mb-1">{selectedLocation.city}</div>
                    <div className="opacity-70">{selectedLocation.name}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            <div className="absolute bottom-10 right-10 flex space-x-12 opacity-50 grayscale hover:grayscale-0 transition-opacity">
               <div className="flex items-center space-x-2">
                 <div className="w-1.5 h-1.5 bg-pkg-black rounded-full"></div>
                 <span className="text-[9px] font-bold uppercase tracking-widest">Chi nhánh</span>
               </div>
               <div className="flex items-center space-x-2">
                 <div className="w-1.5 h-1.5 bg-pkg-red rounded-full"></div>
                 <span className="text-[9px] font-bold uppercase tracking-widest">Đại lý / Dịch vụ</span>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

// --- Main Page ---

export default function App() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section ref={heroRef} className="relative h-screen flex items-center overflow-hidden bg-pkg-black">
        {/* Background Layer */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/battery-high-tech/1920/1080" 
            alt="PKG Battery Factory" 
            className="w-full h-full object-cover opacity-40 brightness-50"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-pkg-black via-pkg-black/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-pkg-black to-transparent h-1/4 bottom-0" />
        </div>

        <motion.div 
          style={{ y: heroY, opacity: heroOpacity }}
          className="relative z-10 max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <div>
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center space-x-4 mb-6"
            >
              <div className="w-12 h-[2px] bg-pkg-red"></div>
              <span className="text-white text-[10px] md:text-sm font-bold tracking-[0.4em] uppercase whitespace-nowrap">The Future of Energy</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.95] tracking-tighter mb-8"
            >
              PKG BATTERY<br/>
              <span className="text-pkg-red italic">TIÊN PHONG</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-gray-400 text-base md:text-lg max-w-xl leading-relaxed mb-10"
            >
              PKG Battery phát triển các giải pháp pin Lithium cho hệ sinh thái công nghiệp hiện đại, 
              tối ưu hóa hiệu suất vận hành và thúc đẩy quá trình chuyển đổi năng lượng bền vững tại Việt Nam.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <button className="bg-pkg-red text-white px-10 py-5 text-sm font-bold uppercase tracking-widest hover:bg-pkg-red-dark transition-all flex items-center group">
                Khám phá năng lực
                <ArrowRight size={18} className="ml-3 group-hover:translate-x-2 transition-transform" />
              </button>
              <button className="border border-white/30 text-white px-10 py-5 text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-pkg-black transition-all">
                Xem sản phẩm
              </button>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="hidden lg:flex justify-end"
          >
            <div className="relative">
              <div className="absolute -inset-10 bg-pkg-red/20 blur-[100px] rounded-full animate-pulse"></div>
              <img 
                src="https://picsum.photos/seed/battery-pack-3d/600/800"
                alt="Battery Pack Render"
                className="relative z-10 w-full max-w-md shadow-2xl skew-y-3 grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-pkg-red flex items-center justify-center p-6 text-white font-black text-center text-xs leading-tight skew-x-[-12deg]">
                PRECISION ENGINEERING
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-white flex flex-col items-center space-y-2 opacity-50"
        >
          <span className="text-[8px] tracking-[0.5em] uppercase font-bold">Scroll</span>
          <div className="w-[1px] h-10 bg-white/30">
            <div className="w-full h-1/2 bg-pkg-red animate-bounce"></div>
          </div>
        </motion.div>
      </section>

      <TrustBar />

      {/* --- ABOUT SECTION --- */}
      <section id="about" className="py-24 md:py-40 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-10"
              >
                <img 
                  src="https://picsum.photos/seed/p-about-technician/800/1000" 
                  alt="Industrial Technician" 
                  className="w-full aspect-[4/5] object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              <div className="absolute -top-10 -left-10 w-40 h-40 border-8 border-pkg-red/10 z-0"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-pkg-silver/50 z-0"></div>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <SectionHeading 
                sub="Năng lực nội địa" 
                title="Sứ mệnh dẫn đầu trong ngành năng lượng Lithium" 
              />
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                PKG Battery tập trung nghiên cứu, thiết kế và cung cấp các giải pháp pin Lithium cho môi trường công nghiệp hiện đại. 
                Với định hướng phát triển dài hạn, chúng tôi xây dựng năng lực từ công nghệ, sản xuất đến hỗ trợ kỹ thuật thực chiến.
              </p>
              <p className="text-gray-600 text-base leading-relaxed mb-12">
                Không chỉ cung cấp sản phẩm, PKG Battery hướng đến vai trò của một đối tác giải pháp – 
                đồng hành cùng doanh nghiệp trong quá trình chuyển đổi từ hệ thống ắc quy truyền thống 
                sang nền tảng lưu trữ năng lượng hiện đại, an toàn và tối ưu chi phí.
              </p>

              <div className="grid grid-cols-2 gap-x-8 gap-y-12">
                <StatCard value="05+" label="Dòng sản phẩm chiến lược" />
                <StatCard value="Toàn quốc" label="Mạng lưới phân phối & dịch vụ" />
                <StatCard value="IEC" label="Tiêu chuẩn quốc tế nghiêm ngặt" />
                <StatCard value="24/7" label="Đồng hành kỹ thuật trọn vòng đời" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- VISION & VALUES --- */}
      <section className="py-24 md:py-32 bg-pkg-black text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 relative">
            {/* Background Line */}
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-pkg-red/30 to-transparent hidden md:block"></div>
            
            {[
              { 
                title: "Tầm Nhìn", 
                desc: "Thúc đẩy chuyển đổi số năng lượng, đưa giải pháp Lithium trở thành chuẩn mực vận hành mới tại Việt Nam.",
                accent: "01"
              },
              { 
                title: "Sứ Mệnh", 
                desc: "Mang nguồn năng lượng sạch, an toàn và hiệu suất cao đến tay mọi doanh nghiệp công nghiệp và logistics.",
                accent: "02"
              },
              { 
                title: "Giá Trị", 
                desc: "Chính trực trong kinh doanh, Đột phá trong công nghệ và Trách nhiệm trong từng giải pháp cung cấp.",
                accent: "03"
              }
            ].map((item, idx) => (
              <motion.div 
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
                className={`p-10 md:p-16 border-pkg-silver/10 ${idx !== 2 ? 'md:border-r' : ''} group`}
              >
                <div className="text-pkg-red text-6xl font-black opacity-10 mb-6 transition-opacity group-hover:opacity-30">{item.accent}</div>
                <h3 className="text-2xl font-bold mb-6 group-hover:text-pkg-red transition-colors">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">{item.desc}</p>
                <div className="mt-8 w-10 h-[2px] bg-pkg-red scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PRODUCTS ECOSYSTEM --- */}
      <section id="products" className="py-24 md:py-40 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading 
            sub="Hệ sinh thái giải pháp" 
            title="Nâng tầm hiệu suất vận hành doanh nghiệp" 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
            <ProductCard 
              title="Pin Xe Nâng Điện" 
              desc="Năng lượng mạnh mẽ cho kho vận cường độ cao, sạc nhanh và không cần bảo trì."
              icon={Battery}
              image="https://picsum.photos/seed/forklift-battery/800/1000"
            />
            <ProductCard 
              title="Pin Xe Golf & Du Lịch" 
              desc="Hành trình êm ái, tuổi thọ gấp 3 lần ắc quy thông thường cho khu nghỉ dưỡng."
              icon={Truck}
              image="https://picsum.photos/seed/golf-car-battery/800/1000"
            />
            <ProductCard 
              title="Giải Pháp AGV & Robot" 
              desc="Trái tim của hệ thống kho thông minh và sản xuất tự động hóa hiện đại."
              icon={Settings}
              image="https://picsum.photos/seed/agv-battery/800/1000"
            />
            <ProductCard 
              title="Hệ Thống ESS" 
              desc="Lưu trữ năng lượng quy mô lớn, ổn định lưới điện và tối ưu chi phí tiền điện."
              icon={Database}
              image="https://picsum.photos/seed/ess-system/800/1000"
            />
            <ProductCard 
              title="Trạm Sạc Siêu Nhanh" 
              desc="Công nghệ sạc thông minh giúp rút ngắn thời gian dừng máy tối đa."
              icon={Zap}
              image="https://picsum.photos/seed/fast-charger/800/1000"
            />
            <div className="bg-pkg-black p-12 md:p-16 flex flex-col justify-center text-white">
              <h4 className="text-2xl font-bold mb-6">Bạn cần một giải pháp tùy chỉnh?</h4>
              <p className="text-gray-400 mb-10 text-sm leading-relaxed">
                Đội ngũ R&D của PKG Battery sẵn sàng thiết kế giải pháp Pin Lithium riêng biệt 
                theo đúng nhu cầu kỹ thuật của dự án.
              </p>
              <button className="flex items-center space-x-4 text-pkg-red font-bold hover:text-white transition-colors uppercase tracking-widest text-xs">
                <span>Yêu cầu báo giá riêng</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* --- WHY PKG --- */}
      <section className="py-24 md:py-40 bg-pkg-silver/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="order-2 lg:order-1">
              <SectionHeading 
                sub="Tại sao chọn chúng tôi" 
                title="Lợi thế cạnh tranh vượt trội từ nội lực kỹ thuật" 
              />
              
              <div className="space-y-10">
                {[
                  { title: "Tuổi thọ bền bỉ", desc: "Cam kết hơn 4000 chu kỳ sạc xả, tương đương 10 năm vận hành bền vững." },
                  { title: "An toàn cực đối", desc: "Hệ thống BMS thông minh kiểm soát từng cell pin, ngăn cháy nổ tuyệt đối." },
                  { title: "Dịch vụ địa phương", desc: "Đội ngũ kỹ thuật hỗ trợ tại công trường trong vòng 24h trên toàn quốc." }
                ].map((item, idx) => (
                  <div key={idx} className="flex space-x-6 group">
                    <div className="flex-shrink-0 w-14 h-14 bg-white border border-pkg-silver flex items-center justify-center text-pkg-red group-hover:bg-pkg-red group-hover:text-white transition-all duration-300">
                      {idx === 0 ? <Activity size={24} /> : idx === 1 ? <Shield size={24} /> : <Globe size={24} />}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                      <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="order-1 lg:order-2 grid grid-cols-2 gap-6 relative">
              <div className="absolute inset-0 bg-pkg-red/5 blur-3xl rounded-full -z-10"></div>
              <div className="space-y-6 pt-12">
                <img src="https://picsum.photos/seed/pkg-1/400/500" alt="Factory Detail" className="w-full grayscale hover:grayscale-0 transition-all duration-700 shadow-xl" referrerPolicy="no-referrer" />
                <img src="https://picsum.photos/seed/pkg-2/400/300" alt="Battery Cells" className="w-full grayscale hover:grayscale-0 transition-all duration-700 shadow-xl" referrerPolicy="no-referrer" />
              </div>
              <div className="space-y-6">
                <img src="https://picsum.photos/seed/pkg-3/400/300" alt="Engineering" className="w-full grayscale hover:grayscale-0 transition-all duration-700 shadow-xl" referrerPolicy="no-referrer" />
                <img src="https://picsum.photos/seed/pkg-4/400/500" alt="Test Lab" className="w-full grayscale hover:grayscale-0 transition-all duration-700 shadow-xl" referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- PRODUCTION QUALITY --- */}
      <section id="quality" className="py-24 md:py-40 bg-pkg-black text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative">
          <SectionHeading 
            dark
            sub="Năng lực sản xuất" 
            title="Quy trình chuẩn hóa – Chất lượng quốc tế" 
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-gray-400 text-lg mb-12 leading-relaxed">
                Mỗi pack pin xuất xưởng từ PKG Battery đều trải qua hàng chục bước kiểm tra nghiêm ngặt 
                từ cell pin đầu vào đến hệ thống giám sát năng lượng đầu ra. Chúng tôi đầu tư vào thiết bị đo kiểm 
                hiện đại để đảm bảo độ tin cậy tuyệt đối.
              </p>
              
              <div className="space-y-6">
                {["Kiểm soát nội trở cell pin", "Thử nghiệm rung sóc công nghiệp", "Mô phỏng sạc xả cường độ cao", "Kiểm định an toàn cháy nổ"].map((item) => (
                  <div key={item} className="flex items-center space-x-4 border-b border-white/10 pb-6 group">
                    <div className="w-2 h-2 bg-pkg-red group-hover:scale-150 transition-transform"></div>
                    <span className="text-sm font-medium tracking-wide uppercase group-hover:text-pkg-red transition-all cursor-default">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative group">
              <div className="absolute inset-0 border-[20px] border-white/5 -m-10 z-0"></div>
              <img 
                src="https://picsum.photos/seed/factory-line/800/600" 
                alt="Production Line" 
                className="relative z-10 w-full object-cover shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-6 left-6 z-20 glass-card p-6 text-white text-xs font-bold leading-tight uppercase tracking-widest">
                Độ chính xác đến từng Module
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- NATIONWIDE NETWORK --- */}
      <NetworkSection />

      {/* --- CONTACT SECTION --- */}
      <section id="contact" className="py-24 md:py-40 bg-pkg-black text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-pkg-red/5 skew-x-[-15deg] hidden lg:block"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            <div>
              <SectionHeading 
                dark
                sub="Liên hệ hợp tác" 
                title="Bắt đầu nâng cấp hệ thống năng lượng của bạn" 
              />
              <p className="text-gray-400 text-lg mb-12 leading-relaxed max-w-lg">
                Gửi yêu cầu để nhận được sự tư vấn chuyên sâu từ đội ngũ kỹ thuật của PKG Battery. 
                Chúng tôi sẵn sàng đồng hành cùng dự án của bạn.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-center space-x-6 group">
                  <div className="w-12 h-12 bg-white/5 flex items-center justify-center text-pkg-red group-hover:bg-pkg-red group-hover:text-white transition-all">
                    <Phone size={20} />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-1">Hotline tư vấn</div>
                    <div className="text-xl font-bold">+84 (0) 900 123 456</div>
                  </div>
                </div>
                <div className="flex items-center space-x-6 group">
                  <div className="w-12 h-12 bg-white/5 flex items-center justify-center text-pkg-red group-hover:bg-pkg-red group-hover:text-white transition-all">
                    <Mail size={20} />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-1">Email liên hệ</div>
                    <div className="text-xl font-bold">contact@pkgbattery.com</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card p-10 md:p-16">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Họ và tên</label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 px-4 py-4 focus:outline-none focus:border-pkg-red transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Tên doanh nghiệp</label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 px-4 py-4 focus:outline-none focus:border-pkg-red transition-all" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Số điện thoại</label>
                    <input type="tel" className="w-full bg-white/5 border border-white/10 px-4 py-4 focus:outline-none focus:border-pkg-red transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Lĩnh vực hoạt động</label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 px-4 py-4 focus:outline-none focus:border-pkg-red transition-all" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Yêu cầu cụ thể</label>
                  <textarea rows={4} className="w-full bg-white/5 border border-white/10 px-4 py-4 focus:outline-none focus:border-pkg-red transition-all resize-none"></textarea>
                </div>
                <button className="w-full bg-pkg-red hover:bg-pkg-red-dark text-white py-5 font-bold uppercase tracking-[0.2em] transition-all flex justify-center items-center group">
                  Gửi yêu cầu tư vấn
                  <ArrowRight size={18} className="ml-3 group-hover:translate-x-2 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-pkg-black border-t border-white/5 pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
            <div className="col-span-1 lg:col-span-1">
              <div className="flex items-center space-x-2 mb-8">
                <div className="w-10 h-10 bg-pkg-red flex items-center justify-center font-bold text-xl italic skew-x-[-15deg]">
                  <span className="skew-x-[15deg] text-white">PKG</span>
                </div>
                <div className="text-xl font-bold tracking-tighter text-white">BATTERY</div>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed mb-8 max-w-xs">
                Chuyên gia giải pháp lưu trữ năng lượng Lithium cao cấp cho doanh nghiệp tại Việt Nam.
              </p>
              <div className="flex space-x-4">
                {/* Social Placeholder */}
                <div className="w-10 h-10 bg-white/5 flex items-center justify-center hover:bg-pkg-red transition-all opacity-50 hover:opacity-100 cursor-pointer">
                  <Globe size={18} className="text-white" />
                </div>
                <div className="w-10 h-10 bg-white/5 flex items-center justify-center hover:bg-pkg-red transition-all opacity-50 hover:opacity-100 cursor-pointer">
                  <Phone size={18} className="text-white" />
                </div>
                <div className="w-10 h-10 bg-white/5 flex items-center justify-center hover:bg-pkg-red transition-all opacity-50 hover:opacity-100 cursor-pointer">
                  <Mail size={18} className="text-white" />
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-8">Giải pháp</h4>
              <ul className="space-y-4 text-gray-500 text-sm">
                <li className="hover:text-pkg-red transition-colors cursor-pointer">Pin Xe Nâng Điện</li>
                <li className="hover:text-pkg-red transition-colors cursor-pointer">Pin Xe Điện Golf</li>
                <li className="hover:text-pkg-red transition-colors cursor-pointer">Giải pháp Pin AGV</li>
                <li className="hover:text-pkg-red transition-colors cursor-pointer">Hệ thống ESS</li>
                <li className="hover:text-pkg-red transition-colors cursor-pointer">Trạm sạc nhanh</li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-8">Về chúng tôi</h4>
              <ul className="space-y-4 text-gray-500 text-sm">
                <li className="hover:text-pkg-red transition-colors cursor-pointer">Câu chuyện thương hiệu</li>
                <li className="hover:text-pkg-red transition-colors cursor-pointer">Đội ngũ chuyên gia</li>
                <li className="hover:text-pkg-red transition-colors cursor-pointer">Chứng chỉ chất lượng</li>
                <li className="hover:text-pkg-red transition-colors cursor-pointer">Liên hệ đối tác</li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-8">Trụ sở chính</h4>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                Khu Công Nghiệp Trọng Điểm, TP. Hà Nội, Việt Nam.
              </p>
              <div className="flex items-start space-x-3 text-sm text-gray-500">
                <MapPin size={16} className="text-pkg-red mt-1 flex-shrink-0" />
                <span>Số 123, Đường Công Nghệ, KCN ABC, TP. Hà Nội</span>
              </div>
            </div>
          </div>

          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-600 font-bold uppercase tracking-widest">
            <div className="mb-4 md:mb-0">© 2026 PKG BATTERY COMPANY. ALL RIGHTS RESERVED.</div>
            <div className="flex space-x-8">
              <span className="hover:text-white transition-colors cursor-pointer">Privacy Policy</span>
              <span className="hover:text-white transition-colors cursor-pointer">Terms of Service</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
