/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from 'motion/react';
import { 
  Battery, 
  ShieldCheck, 
  Zap, 
  Settings, 
  Truck, 
  Globe, 
  ChevronRight, 
  CheckCircle2, 
  PlayCircle,
  Menu,
  X,
  MapPin,
  Mail,
  Phone,
  ArrowRight
} from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

// --- Types ---
interface ProductProps {
  id: string;
  title: string;
  content: string;
  features: string[];
  image: string;
  reverse?: boolean;
}

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-[#1a1a1a]/95 backdrop-blur-lg py-6 shadow-xl' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-12 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-pkg-red flex items-center justify-center rounded-none">
            <span className="text-white font-bold text-xl">P</span>
          </div>
          <span className="text-2xl font-bold tracking-tighter uppercase italic text-white leading-none">
            PKG <span className="text-pkg-red">BATTERY</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-10 text-[10px] font-bold tracking-[0.2em] uppercase">
          {['Sản phẩm', 'Giải pháp', 'Tại sao chọn PKG', 'Về PKG'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase().replace(/ /g, '-')}`} 
              className="text-gray-400 hover:text-white transition-colors"
            >
              {item}
            </a>
          ))}
          <button className="border border-pkg-red px-6 py-2 text-pkg-red hover:bg-pkg-red hover:text-white transition-all text-[10px] font-black tracking-widest cursor-pointer">
            LIÊN HỆ
          </button>
        </div>

        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className={scrolled ? 'text-pkg-black' : 'text-white'} /> : <Menu className={scrolled ? 'text-pkg-black' : 'text-white'} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full bg-white shadow-xl py-6 flex flex-col items-center gap-4 md:hidden text-pkg-black"
        >
          {['Về PKG', 'Sản phẩm', 'Giải pháp', 'Liên hệ'].map((item) => (
            <a key={item} href="#" className="hover:text-pkg-red font-medium">{item}</a>
          ))}
          <button className="bg-pkg-red text-white px-8 py-3 rounded-none uppercase font-bold">NHẬN TƯ VẤN</button>
        </motion.div>
      )}
    </nav>
  );
};

const TrustBar = () => (
  <footer className="bg-[#1a1a1a] border-t border-gray-800 py-8 px-12 flex flex-col md:flex-row items-center justify-between relative z-20 gap-8">
    <div className="flex flex-col md:flex-row items-center gap-12">
      <div className="flex flex-col">
        <span className="text-[10px] text-gray-500 uppercase tracking-[0.3em] font-black mb-2">Tiêu chuẩn Quân Đội & Quốc Tế</span>
        <div className="flex gap-6 opacity-40 grayscale hover:grayscale-0 transition-all font-black text-xs text-white">
          <span>ISO 9001:2015</span>
          <span>UN38.3 SAFETY</span>
          <span>IEC 62619</span>
        </div>
      </div>
      <div className="h-8 w-[1px] bg-gray-800 hidden md:block"></div>
      <div className="flex flex-col">
        <span className="text-[10px] text-gray-500 uppercase tracking-[0.3em] font-black mb-2">Mạng lưới vận hành</span>
        <span className="text-sm font-bold tracking-tight uppercase text-white italic">63 Tỉnh Thành • Hỗ trợ 24/7/365</span>
      </div>
    </div>
    <div className="flex flex-col items-center md:items-end">
      <span className="text-[10px] text-gray-500 uppercase tracking-[0.3em] font-black mb-2">Hợp tác chiến lược</span>
      <div className="flex gap-8 text-[11px] font-black text-white/60 tracking-wider">
        <span>SAMSUNG SDI</span>
        <span>CATL</span>
        <span>EVE ENERGY</span>
      </div>
    </div>
  </footer>
);

const ProductSection = ({ id, title, content, features, image, reverse }: ProductProps) => (
  <section id={id} className={`py-24 md:py-32 ${reverse ? 'bg-white' : 'bg-pkg-silver/30'}`}>
    <div className={`max-w-7xl mx-auto px-6 flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-16`}>
      <motion.div 
        initial={{ opacity: 0, x: reverse ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex-1 space-y-8"
      >
        <div className="w-12 h-1 bg-pkg-red"></div>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight text-pkg-black uppercase">{title}</h2>
        <p className="text-lg text-gray-600 leading-relaxed max-w-xl">{content}</p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {features.map((f, i) => (
            <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
              <Zap size={18} className="text-pkg-red" />
              {f}
            </li>
          ))}
        </ul>
        <button className="group flex items-center gap-3 font-bold text-pkg-red hover:text-red-700 transition-all uppercase tracking-widest text-sm">
          Xem chi tiết giải pháp <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
        </button>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="flex-1 relative"
      >
        <div className="absolute -inset-4 bg-pkg-red/5 rounded-full blur-3xl"></div>
        <img 
          src={image} 
          alt={title} 
          className="relative rounded-2xl luxury-shadow w-full object-cover aspect-[4/3]" 
          referrerPolicy="no-referrer"
        />
      </motion.div>
    </div>
  </section>
);

const FeatureCard = ({ title, desc, icon: Icon }: any) => (
  <div className="p-8 group hover:bg-pkg-red transition-all duration-500 border border-white/5 text-white/80 hover:text-white">
    <Icon size={40} className="text-pkg-red group-hover:text-white mb-6 transition-colors" />
    <h3 className="text-xl font-bold mb-4 tracking-tight uppercase">{title}</h3>
    <p className="text-inherit opacity-60 leading-relaxed text-sm font-light">{desc}</p>
  </div>
);

export default function App() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef });
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);

  return (
    <div className="flex flex-col w-full selection:bg-pkg-red selection:text-white">
      <Navbar />

      {/* 1. HERO SECTION */}
      <section ref={heroRef} className="relative h-screen flex items-center overflow-hidden bg-[#111111]">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none radial-glow z-0"></div>
        
        <div className="max-w-7xl mx-auto px-12 relative z-20 flex flex-col md:flex-row items-center w-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="w-full md:w-3/5 space-y-8 md:pr-12"
          >
            <div className="flex items-center gap-3 text-pkg-red">
              <span className="h-[1px] w-12 bg-pkg-red"></span>
              <span className="text-pkg-red text-xs font-bold tracking-[0.3em] uppercase">Leading Lithium Technology in VN</span>
            </div>
            <h1 className="text-5xl md:text-[84px] font-black text-white leading-[0.9] tracking-tighter uppercase italic">
              Tiên phong giải pháp<br />
              <span className="text-sleek-gradient italic">năng lượng mới</span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-lg leading-relaxed font-light">
              PKG Battery cung cấp hệ sinh thái lưu trữ năng lượng Lithium cao cấp cho xe nâng điện, AGV, và hạ tầng ESS công nghiệp. 
              Tối ưu hiệu suất, bền bỉ và sẵn sàng cho kỷ nguyên Net Zero.
            </p>
            <div className="flex gap-6 pt-4">
              <button className="bg-pkg-red text-white px-8 py-4 font-bold uppercase tracking-widest text-sm flex items-center gap-4 group hover:bg-[#b0191f] transition-all">
                Khám phá năng lực
                <span className="text-xl group-hover:translate-x-2 transition-transform">→</span>
              </button>
              <button className="border border-gray-700 bg-white/5 backdrop-blur-sm text-white px-8 py-4 font-bold uppercase tracking-widest text-sm hover:border-gray-500 transition-all uppercase">
                Hệ sinh thái sản phẩm
              </button>
            </div>
          </motion.div>

          <motion.div 
            className="w-full md:w-2/5 h-full relative flex items-center justify-center pt-20 md:pt-0"
          >
            <div className="relative w-80 h-[450px] bg-tech-gradient border border-gray-800 rounded-lg shadow-2xl flex flex-col p-6 overflow-hidden">
              <div className="absolute top-0 right-0 p-4">
                <div className="text-pkg-red text-[8px] font-mono animate-pulse">SYSTEM ACTIVE: 100%</div>
              </div>
              
              <div className="absolute inset-0 opacity-10 pointer-events-none bg-[linear-gradient(rgba(255,255,255,.1)_1px,transparent_1px)] bg-[size:100%_40px]"></div>

              <div className="mt-auto relative z-10">
                <div className="h-1 bg-pkg-red w-full mb-3 shadow-[0_0_15px_#D61F26]"></div>
                <div className="text-[44px] font-black italic text-white/10 uppercase mb-2 leading-none">INDUSTRIAL</div>
                <div className="text-[10px] text-gray-500 font-mono tracking-tighter leading-tight uppercase space-y-1">
                  <div>SERIES: 80V - 500AH</div>
                  <div>CELL: GRADE A+ PRISMATIC</div>
                  <div>BMS: SMART AI INTELLIGENT</div>
                </div>
              </div>
            </div>
            
            <div className="absolute top-1/4 right-0 lg:-right-4 bg-pkg-graphite p-4 border-l-4 border-pkg-red backdrop-blur-md shadow-2xl">
              <div className="text-[9px] uppercase text-gray-500 mb-1 font-bold tracking-widest">Hiệu suất sạc</div>
              <div className="text-xl font-bold italic text-white">SẠC NHANH 2H</div>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-12 flex flex-col items-center gap-2 text-white/10 z-20 hidden lg:flex">
          <span className="text-[9px] font-black tracking-[0.5em] uppercase vertical-text transform rotate-180">SCROLL DOWN</span>
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-[1px] h-16 bg-gradient-to-b from-white/30 to-transparent"
          ></motion.div>
        </div>
      </section>

      {/* 2. TRUST BAR */}
      <TrustBar />

      {/* 3. ABOUT SECTION */}
      <section id="về-pkg" className="py-24 md:py-40 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="relative">
            <div className="absolute -top-16 -left-16 text-[220px] font-black text-pkg-silver/10 select-none leading-none z-0">PKG</div>
            <div className="grid grid-cols-2 gap-4 relative z-10">
              <img src="https://picsum.photos/seed/engineer-1/400/500" className="rounded-sm w-full h-[400px] object-cover grayscale" alt="Engineer" referrerPolicy="no-referrer" />
              <img src="https://picsum.photos/seed/lab/400/500" className="rounded-sm w-full h-[400px] object-cover mt-12" alt="Lab" referrerPolicy="no-referrer" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-pkg-red text-white p-8 luxury-shadow z-20">
              <div className="text-5xl font-black mb-1">10+</div>
              <div className="text-[10px] tracking-[0.3em] uppercase font-bold opacity-80">Năm phát triển</div>
            </div>
          </div>
          <div className="space-y-10">
            <div className="space-y-4">
              <span className="text-pkg-red font-black tracking-[0.3em] uppercase text-xs block">Về chúng tôi</span>
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-pkg-black uppercase leading-tight italic">
                Năng lực nội địa cho tương lai <span className="text-pkg-red not-italic">energy transition Việt Nam</span>
              </h2>
            </div>
            <p className="text-lg text-gray-500 leading-relaxed font-light">
              PKG Battery tập trung nghiên cứu, thiết kế và sản xuất các giải pháp pin Lithium cho môi trường công nghiệp thực tiễn. 
              Chúng tôi không chỉ cung cấp sản phẩm, mà là đối tác giải pháp đồng hành cùng doanh nghiệp trong quá trình chuyển đổi 
              từ hệ thống cũ sang nền tảng lưu trữ hiện đại, an toàn và bền vững hơn.
            </p>
            <div className="grid grid-cols-2 gap-12 border-t border-pkg-silver pt-10">
              <div className="space-y-2">
                <span className="text-4xl font-black text-pkg-black block italic">05+</span>
                <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Dòng sản phẩm chiến lược</p>
              </div>
              <div className="space-y-2">
                <span className="text-4xl font-black text-pkg-black block italic">100%</span>
                <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Tiêu chuẩn quốc tế</p>
              </div>
            </div>
            <button className="group flex items-center gap-4 text-xs font-bold tracking-[0.3em] text-pkg-black hover:text-pkg-red transition-all uppercase">
              Khám phá thực tế <ChevronRight size={16} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* 4. VISION - MISSION - VALUES */}
      <section className="bg-industrial-gradient py-24 md:py-40 text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-24 space-y-4">
            <span className="text-pkg-red font-black tracking-[0.4em] uppercase text-[10px]">Tầm nhìn & Giá trị</span>
            <h2 className="text-4xl font-bold tracking-tight uppercase italic drop-shadow-lg">Nền tảng của sự tin cậy</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-white/5 glass-card overflow-hidden">
            {[
              { 
                label: 'VISION', 
                title: 'Thúc đẩy chuyển đổi năng lượng', 
                desc: 'Định hướng trở thành một trong những lực đẩy quan trọng của quá trình thay thế ắc quy truyền thống bằng giải pháp Lithium an toàn, hiệu quả.' 
              },
              { 
                label: 'MISSION', 
                title: 'Nguồn năng lượng sạch, an toàn', 
                desc: 'Mang công nghệ Lithium chất lượng cao đến doanh nghiệp Việt, giúp tiếp cận giải pháp lưu trữ hiện đại, an toàn và tối ưu chi phí.' 
              },
              { 
                label: 'VALUES', 
                title: 'Công nghệ – Chính trực – Đồng hành', 
                desc: 'Đặt công nghệ làm nền tảng, lấy chất lượng làm cam kết và xây dựng quan hệ đối tác dựa trên sự đồng hành bền vững cùng khách hàng.' 
              },
            ].map((box, i) => (
              <div key={i} className="p-14 border-white/5 border-r last:border-r-0 hover:bg-white/5 transition-all group relative">
                <div className="absolute top-0 left-0 w-full h-[2px] bg-pkg-red scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                <span className="text-pkg-red font-mono text-[10px] font-bold tracking-widest mb-8 block uppercase opacity-50">{box.label}</span>
                <h3 className="text-2xl font-bold mb-8 group-hover:text-white transition-colors uppercase italic tracking-tight">{box.title}</h3>
                <p className="text-white/40 leading-relaxed font-light text-sm">{box.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PRODUCTS ECOSYSTEM */}
      <div id="sản-phẩm">
        <ProductSection 
          id="forklift"
          title="Pin Lithium cho xe nâng điện"
          content="Phát triển cho xe nâng điện trong môi trường vận hành cường độ cao, giúp doanh nghiệp rút ngắn thời gian sạc và duy trì hiệu suất liên tục."
          features={['Sạc nhanh & Sạc tranh thủ', 'Tuổi thọ > 10 năm sử dụng', 'Không phát thải & Bảo trì', 'Kết nối IoT & Giám sát']}
          image="https://picsum.photos/seed/forklift-red/800/600"
        />
        <ProductSection 
          id="golf"
          title="Pin xe điện du lịch / Golf"
          content="Giải pháp năng lượng cho trải nghiệm êm ái, bền bỉ và hiện đại. Phù hợp cho các khu du lịch, sân golf và khu nghỉ dưỡng cao cấp."
          features={['Mật độ năng lượng cao', 'Quãng đường vượt trội', 'Kháng nước & Chống va đập', 'Tiết kiệm chi phí vận hành']}
          image="https://picsum.photos/seed/golf-energy/800/600"
          reverse
        />
        <ProductSection 
          id="agv"
          title="Pin AGV / Robot Tự hành"
          content="Nguồn năng lượng chính xác cho hệ thống tự động hóa. Đảm bảo xe AGV và Robot vận hành không ngừng nghỉ trong nhà máy thông minh."
          features={['Dòng xả lớn ổn định', 'Tương thích mọi loại Robot', 'Sạc tự động siêu nhanh', 'Bảo mật dữ liệu vận hành']}
          image="https://picsum.photos/seed/agv-pack/800/600"
        />
        <ProductSection 
          id="charger"
          title="Bộ sạc & Trạm sạc PKG"
          content="Hệ thống sạc thông minh được đồng bộ hóa, giúp bảo vệ tuổi thọ cells pin và tối ưu hóa thời gian quay vòng thiết bị."
          features={['Hiệu suất chuyển đổi 96%', 'Bảo vệ đa tầng thông minh', 'Sạc đồng thời nhiều thiết bị', 'Màn hình theo dõi Real-time']}
          image="https://picsum.photos/seed/ev-charger/800/600"
          reverse
        />
        <ProductSection 
          id="ess"
          title="ESS Lưu trữ năng lượng"
          content="Hệ thống ESS giúp doanh nghiệp chủ động trong quản lý điện năng, tối ưu chi phí tiền điện và hỗ trợ ổn định hạ tầng năng lượng."
          features={['Lưu trữ điện mặt trời', 'Sao lưu khi sự cố lưới', 'Quản lý Peak-Shaving', 'Lắp đặt dạng Modular']}
          image="https://picsum.photos/seed/ess-industrial/800/600"
        />
      </div>

      {/* 6. WHY PKG BATTERY */}
      <section id="tại-sao-chọn-pkg" className="py-24 md:py-40 bg-pkg-black text-white relative">
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-pkg-red/5 blur-[200px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-end mb-24">
            <div className="space-y-6">
              <span className="text-pkg-red font-black tracking-[0.4em] uppercase text-[10px]">Lợi thế cạnh tranh</span>
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase italic">
                Sức mạnh từ <br/><span className="text-gradient-red not-italic">công nghệ & nội lực</span>
              </h2>
            </div>
            <p className="text-white/40 text-lg font-light leading-relaxed max-w-md">
              Chúng tôi xây dựng giải pháp dựa trên sự thấu hiểu môi trường vận hành tại Việt Nam, 
              kết hợp với tiêu chuẩn kỹ thuật quốc tế.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10 overflow-hidden">
            <FeatureCard icon={Zap} title="Sạc nhanh vượt trội" desc="Rút ngắn thời gian sạc, tăng tối đa thời gian khai thác thiết bị thực tế." />
            <FeatureCard icon={ShieldCheck} title="An toàn tuyệt đối" desc="Hệ thống quản lý pin BMS thông minh đa tầng, đảm bảo an toàn cháy nổ." />
            <FeatureCard icon={Settings} title="Tùy biến linh hoạt" desc="Khả năng OEM/ODM thiết kế riêng cho từng nhu cầu kỹ thuật đặc thù." />
            <FeatureCard icon={Truck} title="Hỗ trợ kỹ thuật nhanh" desc="Đội ngũ chuyên gia túc trực toàn quốc, hỗ trợ xử lý sự cố trong 24h." />
            <FeatureCard icon={Globe} title="Tối ưu chi phí" desc="Chi phí đầu tư được bù đắp bằng hiệu suất và tuổi thọ sử dụng lâu dài." />
            <FeatureCard icon={Battery} title="Tuổi thọ 10+ Năm" desc="Sử dụng Lithium Phosphate an toàn, bền bỉ với hàng ngàn chu kỳ sạc xả." />
          </div>
        </div>
      </section>

      {/* 7. PRODUCTION CAPACITY */}
      <section className="py-24 md:py-40 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto mb-24 space-y-6">
            <span className="text-pkg-red font-black tracking-[0.3em] uppercase text-xs">Quality Control</span>
            <h2 className="text-4xl md:text-6xl font-black text-pkg-black tracking-tighter uppercase italic line-clamp-2">
              Chất lượng kiểm soát <span className="text-gray-300">từ thiết kế đến bàn giao</span>
            </h2>
            <p className="text-gray-500 font-light text-lg">
              PKG Battery xây dựng quy trình kiểm soát chặt chẽ, từ khâu R&D, lắp ráp đến kiểm định gắt gao từng module trước khi xuất xưởng.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="group relative overflow-hidden aspect-[3/4]">
                <img 
                  src={`https://picsum.photos/seed/prod-pkg-${i}/600/800`} 
                  className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 filter grayscale group-hover:grayscale-0" 
                  alt="Production Step"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pkg-black/90 via-pkg-black/20 to-transparent flex flex-col justify-end p-10 opacity-0 group-hover:opacity-100 transition-opacity">
                   <h4 className="text-white font-bold tracking-[0.2em] uppercase text-xs italic">
                    {i === 1 && 'Nghiên cứu R&D'}
                    {i === 2 && 'Dây chuyền Module'}
                    {i === 3 && 'Đo kiểm kỹ thuật'}
                    {i === 4 && 'Xuất xưởng PKG'}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. NETWORK MAP (Vietnam Focus) */}
      <section className="bg-pkg-silver/30 py-24 md:py-40 relative">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-10">
            <span className="text-pkg-red font-black tracking-[0.3em] uppercase text-xs">Phủ sóng toàn quốc</span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase leading-tight italic">Mạng lưới đại lý & <span className="text-pkg-red not-italic">hỗ trợ kỹ thuật rộng khắp</span></h2>
            <p className="text-gray-500 font-light text-lg leading-relaxed">
              PKG Battery đang mở rộng mạng lưới đối tác nhằm đưa giải pháp năng lượng Lithium đến gần hơn với doanh nghiệp 
              tại 63 tỉnh thành. Hệ thống phân phối là cam kết cho sự phản hồi nhanh chóng và bền vững.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {['Trụ sở Hà Nội', 'Chi nhánh Miền Trung', 'Văn phòng TP.HCM', 'Showroom Toàn quốc'].map((loc, i) => (
                <div key={i} className="flex items-center gap-4 text-[10px] font-black tracking-[0.2em] text-pkg-black uppercase border-b border-pkg-silver pb-4 group cursor-default">
                  <MapPin size={18} className="text-pkg-red transition-transform group-hover:scale-125" />
                  {loc}
                </div>
              ))}
            </div>
            <button className="bg-pkg-red text-white px-10 py-5 rounded-none font-black tracking-widest text-xs uppercase hover:bg-pkg-black transition-all">
              Trở thành đại lý PKG
            </button>
          </div>
          <div className="relative flex justify-center">
            <div className="absolute w-[400px] h-[400px] bg-pkg-red/10 blur-[120px] rounded-full"></div>
            {/* Visual representation of a map/network */}
            <div className="w-full max-w-[500px] aspect-[1/1.2] bg-white p-6 luxury-shadow relative z-10 flex flex-col items-center justify-center gap-8 group">
              <Globe size={180} className="text-pkg-red/10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse" />
              <div className="flex flex-col items-center gap-4 text-center">
                <div className="w-20 h-20 bg-pkg-red flex items-center justify-center rounded-full text-white">
                  <MapPin size={40} />
                </div>
                <span className="text-[10px] font-bold tracking-[0.5em] text-gray-300 uppercase">Interactive Network</span>
                <span className="text-xs font-bold text-gray-400 font-mono">63 PROVINCES COVERAGE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. CONTACT SECTION */}
      <section id="liên-hệ" className="bg-pkg-black py-24 md:py-40 relative">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase italic leading-[1]">
                Bắt đầu <span className="text-pkg-red not-italic">energy <br/> upgrade</span> ngay
              </h2>
              <p className="text-white/40 text-lg font-light leading-relaxed max-w-md">
                Liên hệ đội ngũ PKG để nhận tư vấn giải pháp phù hợp với hạ tầng và mục tiêu đầu tư của doanh nghiệp.
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-10">
              <div className="flex gap-8 items-center border-l-2 border-pkg-red pl-8 group cursor-pointer hover:bg-white/5 p-4 transition-colors">
                <Phone className="text-pkg-red" size={32} />
                <div>
                  <span className="text-[9px] text-white/30 block font-bold tracking-widest uppercase mb-1">Hotline tư vấn</span>
                  <span className="text-2xl text-white font-bold tracking-tighter">1900 XXXX</span>
                </div>
              </div>
              <div className="flex gap-8 items-center border-l-2 border-white/10 pl-8 group cursor-pointer hover:bg-white/5 p-4 transition-colors">
                <Mail className="text-pkg-red" size={32} />
                <div>
                  <span className="text-[9px] text-white/30 block font-bold tracking-widest uppercase mb-1">Email gửi yêu cầu</span>
                  <span className="text-2xl text-white font-bold tracking-tighter">contact@pkgbattery.vn</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-12 lg:p-16 rounded-sm luxury-shadow">
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[9px] font-black tracking-widest text-gray-400 uppercase">Họ và tên</label>
                  <input type="text" className="w-full border-b border-gray-200 py-3 focus:outline-none focus:border-pkg-red transition-colors text-pkg-black font-medium" placeholder="Nguyễn Văn A" />
                </div>
                <div className="space-y-3">
                  <label className="text-[9px] font-black tracking-widest text-gray-400 uppercase">Doanh nghiệp</label>
                  <input type="text" className="w-full border-b border-gray-200 py-3 focus:outline-none focus:border-pkg-red transition-colors text-pkg-black font-medium" placeholder="Tên công ty" />
                </div>
                <div className="space-y-3">
                  <label className="text-[9px] font-black tracking-widest text-gray-400 uppercase">Số điện thoại</label>
                  <input type="tel" className="w-full border-b border-gray-200 py-3 focus:outline-none focus:border-pkg-red transition-colors text-pkg-black font-medium" placeholder="090 XXX XXXX" />
                </div>
                <div className="space-y-3">
                  <label className="text-[9px] font-black tracking-widest text-gray-400 uppercase">E-mail</label>
                  <input type="email" className="w-full border-b border-gray-200 py-3 focus:outline-none focus:border-pkg-red transition-colors text-pkg-black font-medium" placeholder="email@example.com" />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-[9px] font-black tracking-widest text-gray-400 uppercase">Nhu cầu cụ thể</label>
                <textarea rows={3} className="w-full border-b border-gray-200 py-3 focus:outline-none focus:border-pkg-red transition-colors text-pkg-black font-medium resize-none" placeholder="Hãy cho chúng tôi biết nhu cầu của bạn..."></textarea>
              </div>
              <button className="w-full bg-pkg-red text-white py-6 font-black tracking-[0.4em] uppercase hover:bg-pkg-black transition-all flex items-center justify-center gap-4 group">
                GỬI YÊU CẦU <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* 11. FOOTER */}
      <footer className="bg-pkg-black py-24 text-white relative overflow-hidden">
        {/* Background Text */}
        <div className="absolute -bottom-10 left-12 opacity-[0.03] text-[200px] font-black pointer-events-none select-none tracking-tighter leading-none whitespace-nowrap hidden lg:block">
          PKG ENERGY
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-24">
            <div className="space-y-10">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-pkg-red flex items-center justify-center rounded-sm">
                  <span className="text-white font-bold text-lg">P</span>
                </div>
                <span className="text-xl font-black tracking-tighter">PKG <span className="text-pkg-red uppercase">Battery</span></span>
              </div>
              <p className="text-white/30 font-light leading-relaxed text-sm max-w-xs">
                PKG Battery là doanh nghiệp chuyên nghiên cứu và cung cấp giải pháp pin Lithium công nghiệp tại Việt Nam. 
                Chúng tôi hướng đến sự bền vững, an toàn và hiệu suất cao.
              </p>
              <div className="flex gap-4">
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-10 h-10 border border-white/10 flex items-center justify-center hover:border-pkg-red transition-colors cursor-pointer group">
                    <div className="w-4 h-4 bg-white/20 group-hover:bg-pkg-red transition-colors"></div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-8">
              <h4 className="font-black tracking-[0.3em] uppercase text-[10px] text-pkg-red">Hệ sinh thái</h4>
              <ul className="space-y-5 text-white/40 text-xs font-bold uppercase tracking-widest">
                <li><a href="#forklift" className="hover:text-white transition-colors">Pin Xe Nâng</a></li>
                <li><a href="#golf" className="hover:text-white transition-colors">Pin Xe Golf</a></li>
                <li><a href="#agv" className="hover:text-white transition-colors">Pin AGV Robot</a></li>
                <li><a href="#ess" className="hover:text-white transition-colors">Giải Pháp ESS</a></li>
              </ul>
            </div>

            <div className="space-y-8">
              <h4 className="font-black tracking-[0.3em] uppercase text-[10px] text-pkg-red">Liên kết nhanh</h4>
              <ul className="space-y-5 text-white/40 text-xs font-bold uppercase tracking-widest">
                <li><a href="#về-pkg" className="hover:text-white transition-colors">Về chúng tôi</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Đại lý toàn quốc</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Chứng chỉ kỹ thuật</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Hỗ trợ đối tác</a></li>
              </ul>
            </div>

            <div className="space-y-8">
              <h4 className="font-black tracking-[0.3em] uppercase text-[10px] text-pkg-red">Contact</h4>
              <address className="text-white/40 text-xs font-bold tracking-widest uppercase not-italic leading-loose">
                Trụ sở: TP. Hà Nội, VN<br/>
                HCM: TP. Thủ Đức, VN<br/>
                Hotline: 1900 XXXX<br/>
                Mail: info@pkg.vn
              </address>
            </div>
          </div>

          <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10">
            <div className="flex flex-col gap-2">
              <span className="text-[9px] text-white/20 font-black tracking-[0.4em] uppercase">© 2026 PKG BATTERY CO., LTD.</span>
              <span className="text-[8px] text-white/10 font-bold tracking-[0.2em] uppercase italic">Designed for Global Excellence</span>
            </div>
            <div className="flex gap-10 text-[9px] font-black text-white/20 tracking-widest uppercase">
              <a href="#" className="hover:text-pkg-red transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-pkg-red transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-pkg-red transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
