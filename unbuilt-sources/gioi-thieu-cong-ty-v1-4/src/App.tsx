import { 
  ShieldCheck, 
  Battery, 
  Zap, 
  Award, 
  MapPin, 
  ArrowRight, 
  Phone, 
  Mail, 
  LayoutGrid, 
  Cpu, 
  Settings, 
  BarChart3, 
  Timer,
  Factory,
  Globe,
  ChevronRight,
  Menu,
  X,
  Activity,
  Layers,
  Box
} from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'motion/react';
import { useState, useEffect, useRef } from 'react';

// --- Components ---

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => setPosition({ x: e.clientX, y: e.clientY });
    const handleMouseOver = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest('button, a, .group')) setIsHovered(true);
      else setIsHovered(false);
    };
    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);
    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <motion.div 
      className={`custom-cursor flex items-center justify-center ${isHovered ? 'cursor-hover' : ''}`}
      animate={{ 
        x: position.x - 20, 
        y: position.y - 20,
        scale: isHovered ? 1.5 : 1
      }}
      transition={{ type: 'spring', damping: 25, stiffness: 250, mass: 0.5 }}
    >
      <AnimatePresence>
        {isHovered && (
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            className="w-1 h-1 bg-pkg-red rounded-full"
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${isScrolled ? 'bg-white/80 backdrop-blur-xl py-4' : 'bg-transparent py-8'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="relative overflow-hidden w-10 h-10 bg-pkg-red flex items-center justify-center rounded-sm transition-transform group-hover:rotate-90 duration-500">
            <span className="text-white font-black text-xl">P</span>
          </div>
          <div className="flex flex-col">
            <span className={`font-black text-xl tracking-tighter leading-none ${isScrolled ? 'text-pkg-black' : 'text-white'}`}>PKG</span>
            <span className={`text-[10px] font-bold tracking-[0.3em] ${isScrolled ? 'text-pkg-red' : 'text-white/40'}`}>BATTERY</span>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-10 text-[11px] font-bold uppercase tracking-[0.2em]">
          {['Giải pháp', 'Sản phẩm', 'Quy trình', 'Về PKG'].map((item) => (
            <a 
              key={item} 
              href="#" 
              className={`relative transition-colors hover:text-pkg-red py-2 overflow-hidden group ${isScrolled ? 'text-pkg-black' : 'text-white/80'}`}
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-pkg-red transition-all duration-500 group-hover:w-full"></span>
            </a>
          ))}
          <button className={`border px-8 py-3 transition-all duration-500 hover:bg-pkg-red hover:text-white ${isScrolled ? 'border-pkg-black/10 text-pkg-black bg-black/5' : 'border-white/20 text-white bg-white/5'}`}>
            KẾT NỐI ĐỐI TÁC
          </button>
        </div>

        <button 
          className={`lg:hidden ${isScrolled ? 'text-pkg-black' : 'text-white'}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </nav>
  );
};

const SectionHeading = ({ subtitle, title, light = false }: { subtitle: string; title: string, light?: boolean }) => (
  <div className="mb-16">
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="flex items-center gap-3 mb-4"
    >
      <div className="w-8 h-[2px] bg-pkg-red"></div>
      <span className={`text-xs font-bold uppercase tracking-[0.3em] overflow-hidden whitespace-nowrap ${light ? 'text-white/60' : 'text-pkg-red'}`}>
        {subtitle}
      </span>
    </motion.div>
    <motion.h2 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      className={`text-4xl md:text-5xl font-extrabold tracking-tight leading-tight max-w-2xl ${light ? 'text-white' : 'text-pkg-black'}`}
    >
      {title}
    </motion.h2>
  </div>
);

const TechnicalInsight = () => {
  return (
    <section className="bg-pkg-black whitespace-luxury relative overflow-hidden industrial-grid">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-24 items-center">
          <div className="lg:w-1/2">
            <SectionHeading subtitle="Kỹ thuật" title="Độ chính xác vượt giới hạn tiêu chuẩn" light />
            <p className="text-white/40 text-lg leading-relaxed mb-12">
              Mỗi module pin PKG được cấu tạo từ các cell pin hạng A (Grade A) kết hợp với hệ thống quản lý năng lượng thông minh (Smart BMS), đảm bảo hiệu suất xả sâu và độ ổn định nhiệt động học tối ưu.
            </p>
            
            <div className="space-y-4">
              {[
                { label: "Cấu trúc vỏ", detail: "Thép cán nguội SPCC 3.0mm", icon: <Box size={16}/> },
                { label: "BMS Control", detail: "Chip xử lý 32-bit hiệu năng cao", icon: <Cpu size={16}/> },
                { label: "Kết nối", detail: "Laser welding & Nickel busbar", icon: <Layers size={16}/> },
              ].map((spec, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center justify-between p-6 bg-white/5 border-l border-pkg-red/30 hover:bg-white/10 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-pkg-red">{spec.icon}</span>
                    <span className="text-white/80 font-medium">{spec.label}</span>
                  </div>
                  <span className="text-pkg-red font-mono text-sm uppercase tracking-wider">{spec.detail}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 relative">
            <div className="relative aspect-square">
               <div className="absolute inset-0 bg-pkg-red/10 animate-pulse rounded-full blur-[100px]"></div>
               <motion.div 
                 animate={{ rotate: 360 }}
                 transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                 className="absolute inset-0 border border-white/5 rounded-full"
               ></motion.div>
               <motion.div 
                 animate={{ rotate: -360 }}
                 transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                 className="absolute inset-12 border border-pkg-red/20 rounded-full border-dashed"
               ></motion.div>
               
               {/* Simulating 3D Hardware Render */}
               <div className="relative z-10 w-full h-full flex items-center justify-center">
                  <div className="w-4/5 h-4/5 bg-pkg-graphite glass-card border border-white/10 p-12 flex flex-col justify-between transform rotate-12 hover:rotate-0 transition-transform duration-1000 group">
                    <div className="flex justify-between items-start">
                       <ShieldCheck className="text-pkg-red group-hover:scale-125 transition-transform" />
                       <div className="text-right">
                          <span className="block text-white/20 text-[10px] font-mono uppercase">Batch No.</span>
                          <span className="text-white font-mono text-xs">PKG-LIT-2026-X1</span>
                       </div>
                    </div>
                    <div className="space-y-4">
                       <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: '85%' }}
                            transition={{ duration: 2, delay: 0.5 }}
                            className="h-full bg-pkg-red"
                          ></motion.div>
                       </div>
                       <div className="flex justify-between text-[10px] font-bold text-white/40 uppercase tracking-widest">
                          <span>Battery Health</span>
                          <span className="text-white">99.8%</span>
                       </div>
                    </div>
                    <div>
                       <span className="block text-white/20 text-[10px] uppercase font-mono mb-2">Technical Core</span>
                       <span className="text-white text-3xl font-black italic tracking-tighter uppercase leading-none">SmartBMS v4.2</span>
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Main App ---

export default function App() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroScale = useTransform(scrollYProgress, [0, 0.1], [1, 1.1]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0.5]);

  return (
    <div ref={containerRef} className="font-sans antialiased selection:bg-pkg-red selection:text-white">
      <CustomCursor />
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden flex items-center bg-pkg-black industrial-grid">
        <motion.div style={{ scale: heroScale, opacity: heroOpacity }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-pkg-black via-pkg-black/90 to-transparent z-10"></div>
          <img 
            src="https://picsum.photos/seed/lithium-factory/1920/1080?blur=1" 
            alt="PKG Industrial Backdrop" 
            className="w-full h-full object-cover grayscale opacity-30"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        <div className="container mx-auto px-6 relative z-20 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-3/5">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-black leading-[1.05] tracking-tighter mb-8 italic">
                PKG BATTERY
                <span className="block not-italic font-bold text-3xl md:text-4xl mt-4 text-white/90 leading-tight">
                  TIÊN PHONG GIẢI PHÁP NĂNG LƯỢNG LITHIUM TẠI VIỆT NAM
                </span>
              </h1>
              
              <p className="text-white/60 text-lg md:text-xl max-w-xl mb-12 leading-relaxed">
                Phát triển hệ sinh thái pin Lithium thông minh cho xe nâng, AGV, hệ thống lưu trữ năng lượng và vận hành công nghiệp hiện đại.
              </p>

              <div className="flex flex-col sm:flex-row gap-6">
                <button className="group bg-pkg-red text-white px-10 py-5 rounded-sm font-bold text-sm tracking-widest uppercase flex items-center justify-center gap-3 transition-all hover:bg-red-700 hover:scale-105 active:scale-95 shadow-2xl shadow-pkg-red/20">
                  Khám phá năng lực
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </button>
                <button className="group border border-white/20 text-white px-10 py-5 rounded-sm font-bold text-sm tracking-widest uppercase hover:bg-white/10 transition-all flex items-center justify-center">
                  Xem sản phẩm
                </button>
              </div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="md:w-2/5 hidden md:block"
          >
            <div className="relative animate-float">
              {/* Product Visual Simulation */}
              <div className="absolute inset-0 bg-pkg-red blur-[120px] opacity-20 scale-150"></div>
              <img 
                src="https://images.unsplash.com/photo-1620331311520-246422ff82f9?auto=format&fit=crop&q=80&w=800" 
                alt="Battery Pack Visualization" 
                className="relative z-10 w-full h-auto rounded-lg shadow-2xl skew-y-3 grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll Hint */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        >
          <span className="text-white/30 text-[10px] font-bold tracking-[0.4em] uppercase">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-pkg-red to-transparent"></div>
        </motion.div>
      </section>

      {/* Trust Bar */}
      <div className="bg-pkg-black py-12 border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-between items-center gap-x-12 gap-y-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500 overflow-hidden">
            {[
              { icon: <Award size={20} />, label: "IEC 62619" },
              { icon: <ShieldCheck size={20} />, label: "UN38.3" },
              { icon: <LayoutGrid size={20} />, label: "ISO QUALITY" },
              { icon: <Settings size={20} />, label: "ĐẠI LÝ TOÀN QUỐC" },
              { icon: <Globe size={20} />, label: "HỖ TRỢ KỸ THUẬT 24/7" },
              { icon: <Cpu size={20} />, label: "MIC INSURANCE" }
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 group">
                <span className="text-pkg-red">{item.icon}</span>
                <span className="text-white text-[10px] sm:text-xs font-black tracking-widest uppercase">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="bg-white whitespace-luxury">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2">
              <SectionHeading 
                subtitle="PKG Battery" 
                title="Năng lực nội địa cho tương lai năng lượng Việt Nam" 
              />
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                PKG Battery tập trung nghiên cứu, thiết kế và cung cấp các giải pháp pin Lithium cho môi trường công nghiệp hiện đại. Với định hướng phát triển dài hạn, chúng tôi xây dựng năng lực từ công nghệ cốt lõi đến quy trình sản xuất chuẩn hóa.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-10">
                Không chỉ cung cấp sản phẩm, chúng tôi hướng đến vai trò đối tác đồng hành - hỗ trợ doanh nghiệp Việt Nam chuyển đổi từ hệ thống cũ sang nền tảng năng lượng hiện đại, an toàn và tối ưu chi phí.
              </p>

              <div className="grid grid-cols-2 gap-8 mb-12">
                {[
                  { val: "05", label: "Dòng sản phẩm chiến lược" },
                  { val: "08+", label: "Điểm hiện diện toàn quốc" },
                  { val: "QMS", label: "Tiêu chuẩn quốc tế" },
                  { val: "24/7", label: "Hỗ trợ kỹ thuật" }
                ].map((stat, idx) => (
                  <div key={idx} className="border-l-2 border-pkg-red pl-6 py-2">
                    <span className="block text-4xl font-extrabold text-pkg-black mb-1">{stat.val}</span>
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:w-1/2 relative group">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-pkg-red/5 rounded-full blur-3xl group-hover:bg-pkg-red/10 transition-all"></div>
              <div className="relative z-10 grid grid-cols-12 gap-4">
                <div className="col-span-8">
                  <img 
                    src="https://picsum.photos/seed/factory1/800/1000" 
                    alt="Factory Production" 
                    className="w-full h-[500px] object-cover rounded-sm shadow-2xl filter grayscale brightness-90 hover:grayscale-0 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="col-span-4 flex flex-col gap-4 mt-12">
                  <img 
                    src="https://picsum.photos/seed/factory2/400/600" 
                    alt="Workplace" 
                    className="w-full h-1/2 object-cover rounded-sm shadow-xl filter grayscale hover:grayscale-0 transition-all"
                    referrerPolicy="no-referrer"
                  />
                  <div className="w-full h-1/2 bg-pkg-red flex items-end p-6">
                    <span className="text-white font-black text-2xl tracking-tighter">SINCE <br/> 2024</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Values - Flowing Narrative */}
      <section className="bg-pkg-black whitespace-luxury overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 flex items-center justify-center pointer-events-none">
          <span className="text-[400px] font-black text-white whitespace-nowrap rotate-90 select-none">VISION</span>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-3 gap-16 lg:gap-8 relative">
            {/* Visual connector line hidden on small screens */}
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-pkg-red/5 via-pkg-red/40 to-pkg-red/5 hidden lg:block -translate-y-1/2"></div>
            
            {[
              {
                id: "01",
                label: "Tầm nhìn",
                title: "Thúc đẩy chuyển đổi năng lượng",
                desc: "Định hướng trở thành lực đẩy quan trọng của quá trình chuyển đổi từ ắc quy truyền thống sang Lithium tại Việt Nam."
              },
              {
                id: "02",
                label: "Sứ mệnh",
                title: "Năng lượng sạch cho doanh nghiệp",
                desc: "Mang các giải pháp lưu trữ hiện đại, an toàn và bền vững đến môi trường vận hành công nghiệp."
              },
              {
                id: "03",
                label: "Giá trị",
                title: "Chính trực & Đồng hành",
                desc: "Xây dựng sự tin tưởng thông qua chất lượng kỹ thuật và cam kết hỗ trợ khách hàng dài hạn."
              }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="relative bg-white/5 p-12 backdrop-blur-md border border-white/10 group hover:border-pkg-red/40 transition-all active:scale-[0.98]"
              >
                <span className="block text-pkg-red font-black text-6xl mb-12 opacity-30 group-hover:opacity-100 transition-opacity">/{item.id}/</span>
                <span className="block text-xs font-bold text-pkg-red uppercase tracking-[0.4em] mb-4">{item.label}</span>
                <h3 className="text-white text-2xl font-bold mb-6">{item.title}</h3>
                <p className="text-white/50 leading-relaxed">{item.desc}</p>
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-pkg-red transition-all duration-700 group-hover:w-full"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why PKG & Technical Insight */}
      <TechnicalInsight />

      {/* Product Ecosystem - Editorial Style */}
      <section className="bg-white whitespace-luxury">
        <div className="container mx-auto px-6">
          <SectionHeading subtitle="Giải pháp" title="Hệ sinh thái lưu trữ năng lượng chuyên dụng" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { title: "Xe nâng điện", seed: "forklift", desc: "Vận hành cường độ cao" },
              { title: "Xe Golf / Du lịch", seed: "golf", desc: "Ổn định & Bền bỉ" },
              { title: "AGV / Robot", seed: "robotics", desc: "Tối ưu tự động hóa" },
              { title: "Trạm sạc nhanh", seed: "charging", desc: "Tăng hiệu suất thiết bị" },
              { title: "Lưu trữ ESS", seed: "energy", desc: "Quản lý điện năng" }
            ].map((prod, idx) => (
              <div 
                key={idx} 
                className="group relative h-[600px] overflow-hidden cursor-pointer"
              >
                <img 
                  src={`https://picsum.photos/seed/${prod.seed}/800/1200`} 
                  alt={prod.title} 
                  className="w-full h-full object-cover grayscale brightness-75 transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0 group-hover:brightness-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pkg-black via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity"></div>
                
                <div className="absolute bottom-10 left-10 right-10">
                  <span className="block text-pkg-red text-4xl mb-4 font-black opacity-0 group-hover:opacity-100 -translate-y-4 group-hover:translate-y-0 transition-all delay-100">0{idx+1}</span>
                  <h3 className="text-white text-2xl font-bold mb-2 transition-transform group-hover:-translate-y-2">{prod.title}</h3>
                  <p className="text-white/60 text-sm mb-6 opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0 transition-all delay-200">{prod.desc}</p>
                  
                  <div className="h-[2px] w-0 bg-pkg-red transition-all duration-700 group-hover:w-full"></div>
                  
                  <div className="mt-6 flex items-center gap-2 text-white text-xs font-black tracking-widest uppercase opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all delay-300">
                    Chi tiết <ChevronRight size={14} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why PKG - Infographic style */}
      <section className="bg-pkg-graphite whitespace-luxury relative overflow-hidden">
         {/* Noise Texture Effect Simulation */}
         <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/p6-poligon.png')]"></div>

        <div className="container mx-auto px-6 relative z-10">
          <SectionHeading subtitle="Lợi thế" title="Lý do PKG Battery trở thành đối tác tin cậy" light />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12">
            {[
              { icon: <Timer />, title: "Tuổi thọ vượt trội", desc: "Chu kỳ sạc xả lớn, giảm thiểu chi phí thay thế định kỳ cho doanh nghiệp." },
              { icon: <Zap />, title: "Sạc nhanh tối ưu", desc: "Rút ngắn thời gian dừng máy, tối đa hóa thời gian khai thác tài sản." },
              { icon: <ShieldCheck />, title: "An toàn tuyệt đối", desc: "Hệ thống BMS thông minh kiểm soát đa tầng, phòng ngừa rủi ro vận hành." },
              { icon: <BarChart3 />, title: "Tối ưu hóa TCO", desc: "Cải thiện tổng chi phí sở hữu nhờ độ bền và hiệu suất năng lượng cao." },
              { icon: <Cpu />, title: "Kỹ thuật chuyên sâu", desc: "Đội ngũ nghiên cứu am hiểu nhu cầu thực tế của thị trường nội địa." },
              { icon: <Settings />, title: "OEM / ODM linh hoạt", desc: "Tùy biến cấu hình pin theo từng yêu cầu đặc thù của hệ thống thiết bị." }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group flex gap-8"
              >
                <div className="flex-shrink-0 w-16 h-16 bg-white/5 flex items-center justify-center text-pkg-red border border-white/5 group-hover:bg-pkg-red group-hover:text-white transition-all">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-white text-xl font-bold mb-4">{item.title}</h4>
                  <p className="text-white/40 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Production & QC Gallery */}
      <section className="bg-white whitespace-luxury">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-20 items-end mb-20">
            <div className="lg:w-1/2">
              <SectionHeading subtitle="Hoạt động" title="Đằng sau mỗi giải pháp là quy trình làm việc nghiêm túc" />
            </div>
            <div className="lg:w-1/2">
               <p className="text-gray-500 text-lg leading-relaxed mb-6 italic border-l-4 border-pkg-red pl-6">
                "Chất lượng không đến từ may mắn, nó đến từ ý chí kiểm soát từng chi tiết nhỏ nhất trong dây chuyền sản xuất và thiết kế."
               </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 h-[900px]">
             {/* Editorial Mesh Layout */}
             <div className="md:col-span-8 overflow-hidden group">
               <img src="https://picsum.photos/seed/production/1200/800" alt="Process" className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100" referrerPolicy="no-referrer" />
             </div>
             <div className="md:col-span-4 flex flex-col gap-4">
               <div className="h-1/2 overflow-hidden group">
                 <img src="https://picsum.photos/seed/technician/600/800" alt="QC" className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700" referrerPolicy="no-referrer" />
               </div>
               <div className="h-1/2 overflow-hidden group relative">
                 <img src="https://picsum.photos/seed/office/600/800" alt="Office" className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700" referrerPolicy="no-referrer" />
                 <div className="absolute inset-0 bg-pkg-red/40 flex items-center justify-center pointer-events-none">
                    <span className="text-white font-black text-xl tracking-[0.5em] uppercase -rotate-90">QUALITY FIRST</span>
                 </div>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* Certificates & Standards */}
      <section className="bg-white whitespace-luxury text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gray-100"></div>
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto mb-20">
            <h3 className="text-pkg-red text-xs font-bold uppercase tracking-[0.4em] mb-4">Chứng nhận</h3>
            <h2 className="text-pkg-black text-4xl font-extrabold mb-8 italic">CHẤT LƯỢNG ĐƯỢC XÁC THỰC BẰNG TIÊU CHUẨN RÕ RÀNG</h2>
            <div className="w-20 h-[2px] bg-pkg-red mx-auto"></div>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-20 opacity-40 grayscale transition-all hover:opacity-100 hover:grayscale-0 duration-500">
             {/* Badge Placeholders */}
             {['IEC 62619', 'UN38.3', 'ISO 9001:2015', 'CE CERT', 'MIC INSURED'].map((cert, idx) => (
                <div key={idx} className="flex flex-col items-center gap-4">
                  <div className="w-24 h-24 border-2 border-pkg-black flex items-center justify-center p-4">
                    <Award size={48} />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest">{cert}</span>
                </div>
             ))}
          </div>
        </div>
      </section>

      {/* Network Map - Interactive Concept */}
      <section className="bg-white whitespace-luxury overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-20">
             <div className="lg:w-2/5">
                <SectionHeading subtitle="Mạng lưới" title="Hiện diện chiến lược trên toàn quốc" />
                <p className="text-gray-500 mb-10 text-lg leading-relaxed">
                  PKG Battery đang không ngừng mở rộng hệ thống chi nhánh và đối tác phân phối nhằm tăng tốc độ hỗ trợ kỹ thuật và mang giải pháp đến gần hơn với khách hàng tại mọi khu vực.
                </p>
                
                <div className="space-y-6">
                  <div className="bg-pkg-black text-white p-8 group overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-pkg-red/20 blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                    <span className="block text-5xl font-black italic mb-2">08+</span>
                    <span className="text-xs font-bold uppercase tracking-widest text-white/50">Điểm hiện diện hiện tại</span>
                  </div>
                  <button className="w-full py-6 border-b border-pkg-red text-pkg-red font-black text-xs tracking-widest uppercase flex items-center justify-between group">
                    Tìm điểm gần bạn nhất <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                  </button>
                  <button className="w-full py-6 border-b border-gray-200 text-pkg-black font-black text-xs tracking-widest uppercase flex items-center justify-between group">
                    Trở thành đối tác <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                  </button>
                </div>
             </div>

             <div className="lg:w-3/5 relative">
                {/* Visual Map Representation */}
                <div className="relative aspect-square md:aspect-video bg-pkg-silver/20 rounded-sm overflow-hidden flex items-center justify-center">
                   <div className="w-full h-full p-12 opacity-80 group">
                      {/* Simulating Map Markers */}
                      <div className="absolute top-[20%] left-[45%] w-4 h-4 bg-pkg-red rounded-full animate-ping"></div>
                      <div className="absolute top-[20%] left-[45%] w-4 h-4 bg-pkg-red rounded-full"></div>
                      
                      <div className="absolute top-[35%] left-[50%] w-3 h-3 bg-pkg-red rounded-full opacity-60"></div>
                      <div className="absolute top-[50%] left-[55%] w-3 h-3 bg-pkg-red rounded-full opacity-60"></div>
                      <div className="absolute bottom-[20%] left-[60%] w-5 h-5 bg-pkg-red rounded-full animate-pulse shadow-[0_0_20px_rgba(214,31,38,0.5)]"></div>
                      
                      <img src="https://picsum.photos/seed/map/1000/1000?blur=10" alt="Map Overlay" className="w-full h-full object-contain opacity-20" referrerPolicy="no-referrer" />
                      
                      <div className="absolute inset-0 border-[20px] border-white z-10 pointer-events-none"></div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-pkg-black py-32 relative overflow-hidden">
        <div className="absolute top-0 right-10 w-96 h-96 bg-pkg-red/10 blur-[150px] rounded-full"></div>
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-20 bg-pkg-graphite p-12 md:p-20 relative z-10 overflow-hidden shadow-2xl">
             <div className="absolute bottom-0 right-0 w-64 h-64 bg-pkg-red/5 border-t border-l border-white/5"></div>
             
             <div className="lg:w-1/2">
                <h3 className="text-pkg-red text-xs font-bold uppercase tracking-[0.4em] mb-4 italic">Liên hệ</h3>
                <h2 className="text-white text-5xl font-black mb-8 leading-tight tracking-tighter uppercase">Nâng cấp hệ thống năng lượng của bạn ngay hôm nay</h2>
                <p className="text-white/40 text-lg mb-12 max-w-md">
                  Nhận tư vấn giải pháp pin Lithium chuyên dụng cho xe nâng, AGV hoặc hệ thống lưu trữ tại kho bãi của bạn.
                </p>
                
                <div className="space-y-8">
                  <div className="flex items-center gap-6 group">
                    <div className="w-12 h-12 bg-white/5 flex items-center justify-center text-pkg-red transition-all group-hover:bg-pkg-red group-hover:text-white">
                      <Phone size={20} />
                    </div>
                    <div>
                      <span className="block text-[10px] uppercase font-bold text-white/30 tracking-widest mb-1">Điện thoại</span>
                      <span className="text-white text-xl font-bold tracking-tight italic">0971 777 911</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 group">
                    <div className="w-12 h-12 bg-white/5 flex items-center justify-center text-pkg-red transition-all group-hover:bg-pkg-red group-hover:text-white">
                      <Mail size={20} />
                    </div>
                    <div>
                      <span className="block text-[10px] uppercase font-bold text-white/30 tracking-widest mb-1">Email</span>
                      <span className="text-white text-xl font-bold tracking-tight">sales@pkgbattery.com</span>
                    </div>
                  </div>
                </div>
             </div>

             <div className="lg:w-1/2">
                <div className="glass-card p-10 relative overflow-hidden">
                   <form className="space-y-6 relative z-10">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <input 
                          type="text" 
                          placeholder="Họ và tên" 
                          className="w-full bg-white/5 border border-white/10 px-6 py-4 text-white focus:outline-none focus:border-pkg-red transition-colors font-medium" 
                        />
                        <input 
                          type="text" 
                          placeholder="Số điện thoại" 
                          className="w-full bg-white/5 border border-white/10 px-6 py-4 text-white focus:outline-none focus:border-pkg-red transition-colors font-medium" 
                        />
                      </div>
                      <input 
                        type="text" 
                        placeholder="Công ty / Doanh nghiệp" 
                        className="w-full bg-white/5 border border-white/10 px-6 py-4 text-white focus:outline-none focus:border-pkg-red transition-colors font-medium" 
                      />
                      <select className="w-full bg-pkg-graphite border border-white/10 px-6 py-4 text-white/50 focus:outline-none focus:border-pkg-red transition-colors font-medium appearance-none">
                        <option>Dòng sản phẩm quan tâm</option>
                        <option>Pin xe nâng điện</option>
                        <option>Pin xe điện du lịch</option>
                        <option>AGV / Robot</option>
                        <option>Hệ thống ESS</option>
                      </select>
                      <textarea 
                        rows={4} 
                        placeholder="Yêu cầu cụ thể" 
                        className="w-full bg-white/5 border border-white/10 px-6 py-4 text-white focus:outline-none focus:border-pkg-red transition-colors font-medium resize-none" 
                      ></textarea>
                      <button className="w-full bg-pkg-red text-white py-5 font-black text-sm uppercase tracking-[0.2em] shadow-xl shadow-pkg-red/20 transition-all hover:bg-red-700 hover:scale-[1.02] active:scale-[0.98]">
                        Nhận tư vấn giải pháp
                      </button>
                   </form>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-pkg-black py-20 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-4 gap-16 mb-20 text-center md:text-left">
            <div className="lg:col-span-1">
               <div className="flex items-center justify-center md:justify-start gap-2 mb-8">
                  <div className="w-8 h-8 bg-pkg-red flex items-center justify-center">
                    <span className="text-white font-black text-sm">PKG</span>
                  </div>
                  <span className="font-bold text-white text-lg tracking-tighter">BATTERY</span>
               </div>
               <p className="text-white/40 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
                  Phát triển năng lượng lưu trữ hiện đại tại Việt Nam với công nghệ Lithium. Đồng hành cùng sự tăng trưởng công nghiệp bền vững.
               </p>
            </div>
            
            <div>
              <h5 className="text-white font-bold mb-8 uppercase text-xs tracking-widest italic">Sản phẩm</h5>
              <ul className="space-y-4 text-white/40 text-sm italic">
                <li><a href="#" className="hover:text-pkg-red transition-colors">Pin xe nâng điện</a></li>
                <li><a href="#" className="hover:text-pkg-red transition-colors">Pin xe Golf</a></li>
                <li><a href="#" className="hover:text-pkg-red transition-colors">Pin xe AGV</a></li>
                <li><a href="#" className="hover:text-pkg-red transition-colors">Bộ sạc nhanh</a></li>
                <li><a href="#" className="hover:text-pkg-red transition-colors">Hệ thống ESS</a></li>
              </ul>
            </div>

            <div>
              <h5 className="text-white font-bold mb-8 uppercase text-xs tracking-widest italic">Chi nhánh</h5>
              <ul className="space-y-4 text-white/40 text-sm italic">
                <li>Chi nhánh Hà Nội</li>
                <li>Chi nhánh TP. HCM</li>
                <li>Chi nhánh Đà Nẵng</li>
                <li>Trung tâm Bảo hành</li>
              </ul>
            </div>

            <div>
              <h5 className="text-white font-bold mb-8 uppercase text-xs tracking-widest italic">Theo dõi</h5>
              <div className="flex justify-center md:justify-start gap-4">
                 {[1,2,3,4].map(idx => (
                   <div key={idx} className="w-10 h-10 border border-white/5 flex items-center justify-center text-white/30 hover:text-pkg-red hover:border-pkg-red transition-all cursor-pointer">
                      <LayoutGrid size={16} />
                   </div>
                 ))}
              </div>
            </div>
          </div>

          <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-bold uppercase tracking-widest text-white/20">
            <span>© {new Date().getFullYear()} PKG Battery. All rights reserved.</span>
            <div className="flex gap-8 italic">
              <a href="#" className="hover:text-white transition-colors">Chính sách bảo hành</a>
              <a href="#" className="hover:text-white transition-colors">Điều khoản dịch vụ</a>
              <a href="#" className="hover:text-white transition-colors">Bản đồ trang</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
