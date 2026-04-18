/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  ChevronRight, 
  ShieldCheck, 
  Zap, 
  Clock, 
  Settings as Tool, 
  CheckCircle2, 
  AlertTriangle, 
  ArrowRight,
  Plus,
  Minus,
  MessageSquare,
  FileText,
  Activity,
  Cpu,
  Truck,
  Battery,
  Settings
} from "lucide-react";
import { useState, useEffect } from "react";

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white/95 backdrop-blur-md py-4 shadow-sm nav-border" : "bg-transparent py-8"}`}>
      <div className="container mx-auto px-10 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="logo text-2xl font-black tracking-tighter">
            PKG <span className="text-pkg-red">BATTERY</span>
          </div>
        </div>
        
        <div className="hidden md:flex items-center gap-10 font-bold text-[11px] uppercase tracking-widest text-ink/70">
          <a href="#" className="hover:text-pkg-red transition-colors">Sản phẩm</a>
          <a href="#" className="hover:text-pkg-red transition-colors">Giải pháp</a>
          <a href="#hero" className="text-pkg-red">Bảo hành</a>
          <a href="#" className="hover:text-pkg-red transition-colors">Yêu cầu hỗ trợ</a>
        </div>

        <button className="bg-ink text-white px-6 py-3 text-[11px] font-bold uppercase tracking-widest hover:bg-pkg-red transition-all duration-300 rounded-none">
          Kỹ thuật 24/7
        </button>
      </div>
    </nav>
  );
};

const BatteryVisual = () => (
  <div className="battery-abstract relative w-[300px] h-[450px] border-2 border-ink rounded-xl p-5 flex flex-col justify-between bg-white shadow-[30px_30px_0px_var(--color-smoke)]">
    <div className="w-[40px] h-[15px] bg-ink absolute -top-[15px] left-1/2 -translate-x-1/2 rounded-t-sm" />
    <div className="space-y-3">
      <div className="h-[18%] w-full border border-smoke rounded-sm flex items-center px-3 text-[9px] font-bold text-smoke uppercase">LITHIUM CORE - SECURE</div>
      <div className="h-[18%] w-full border border-smoke rounded-sm flex items-center px-3 text-[9px] font-bold text-smoke uppercase">THERMAL MGMT - OK</div>
      <div className="h-[18%] w-full bg-pkg-red border border-pkg-red rounded-sm flex items-center px-3 text-[9px] font-bold text-white uppercase">BMS WARRANTY - ACTIVE</div>
      <div className="h-[18%] w-full bg-pkg-red border border-pkg-red rounded-sm flex items-center px-3 text-[9px] font-bold text-white uppercase">LIFE CYCLE - OPTIMIZED</div>
      <div className="h-[18%] w-full bg-pkg-red border border-pkg-red rounded-sm flex items-center px-3 text-[9px] font-bold text-white uppercase">CERTIFIED PKG TECH</div>
    </div>
    <div className="text-[10px] font-black text-right mt-4 italic italic-none uppercase tracking-tighter">PKG L-SERIES 2024</div>
  </div>
);

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen pt-32 pb-20 overflow-hidden flex items-center">
      <div className="absolute inset-0 bg-grid-dots opacity-40 -z-10" />
      
      <div className="container mx-auto px-10">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 pr-4 lg:pr-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-pkg-red font-bold text-[12px] tracking-[3px] uppercase mb-4">
                Industrial Premium Service
              </div>
              <h1 className="text-6xl md:text-[84px] leading-[0.9] font-black mb-8">
                Chính sách <br />
                Bảo hành<span>.</span><br />
                <span className="text-gray/50">Minh bạch</span>
              </h1>
              <p className="text-lg md:text-xl text-gray mb-12 max-w-[550px] font-medium leading-relaxed">
                PKG Battery đồng hành cùng doanh nghiệp với chính sách bảo hành rõ ràng, nhanh chóng và tiêu chuẩn kỹ thuật cao cấp cho mọi hệ thống pin Lithium.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <button className="btn-saas btn-saas-primary">
                  Gửi yêu cầu hỗ trợ
                </button>
                <button className="btn-saas btn-saas-secondary">
                  Tra cứu thời hạn
                </button>
              </div>

              {/* Step Summary Row */}
              <div className="mt-20 flex gap-10 border-t border-smoke pt-10">
                {[
                  { num: "01", text: "Liên hệ PKG" },
                  { num: "02", text: "Gửi thông tin" },
                  { num: "03", text: "Kiểm tra kỹ thuật" },
                ].map((s, i) => (
                  <div key={i} className="flex flex-col items-start">
                    <span className="text-xs font-black text-pkg-red mb-1">{s.num}</span>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-ink/60">{s.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-5 flex justify-center lg:justify-end relative py-20 lg:py-0">
             <div className="absolute top-[10%] right-[-40px] writing-mode-vertical-rl text-[10px] text-gray tracking-[4px] opacity-40 uppercase font-bold text-nowrap">
                Innovation & Durability
             </div>
             <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
             >
                <BatteryVisual />
             </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProductCoverage = () => {
  const products = [
    {
      title: "Xe Nâng Điện",
      desc: "Pin Lithium hiệu suất cực cao cho dòng xe nâng Reach Truck, Forklift.",
      warranty: "05 NĂM",
      subDesc: "Hoặc 10.000 giờ vận hành tiêu chuẩn.",
      icon: Truck
    },
    {
      title: "Xe Điện Du Lịch",
      desc: "Giải pháp năng lượng cho Golf Cart, xe điện resort bền bỉ trong mọi thời tiết.",
      warranty: "60 THÁNG",
      subDesc: "Bảo hành hiệu suất dung lượng >80%.",
      icon: Activity
    },
    {
      title: "AGV / Robot",
      desc: "Năng lượng ổn định cho hệ thống vận hành tự động trong nhà máy thông minh.",
      warranty: "36 THÁNG",
      subDesc: "Hỗ trợ kỹ thuật 24/7 cho dây chuyền.",
      icon: Cpu
    },
    {
      title: "ESS & Storage",
      desc: "Hệ thống lưu trữ năng lượng mặt trời và dự phòng cho quy mô doanh nghiệp.",
      warranty: "10 NĂM",
      subDesc: "Cam kết vòng đời năng lượng bền vững.",
      icon: Battery
    }
  ];

  return (
    <section id="products" className="bg-white border-y border-smoke shadow-sm">
      <div className="tight-grid md:grid-cols-2 lg:grid-cols-4">
        {products.map((p, i) => (
          <div key={i} className="bg-white p-10 flex flex-col hover:bg-off-white transition-colors group">
            <span className="text-[10px] font-black uppercase tracking-widest text-gray mb-10 block">{p.title}</span>
            <div className="flex-grow">
               <h3 className="text-4xl font-black mb-4 group-hover:text-pkg-red transition-colors">{p.warranty}</h3>
               <p className="text-[11px] text-gray uppercase font-bold tracking-tighter mb-8 leading-relaxed max-w-[200px]">
                 {p.subDesc}
               </p>
            </div>
            <div className="flex items-center justify-between border-t border-smoke pt-6 mt-10">
              <p.icon size={18} className="text-ink/30 group-hover:text-pkg-red transition-colors" />
              <ArrowRight size={14} className="text-ink/20 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const WarrantyTimeline = () => {
  const items = [
    { cat: "industrial", label: "Xe nâng điện", value: 5, unit: "Năm" },
    { cat: "leisure", label: "Xe điện du lịch", value: 5, unit: "Năm" },
    { cat: "robotics", label: "AGV / Robot", value: 36, unit: "Tháng" },
    { cat: "storage", label: "Hệ thống ESS", value: 10, unit: "Năm" },
    { cat: "charger", label: "Bộ sạc / Trạm sạc", value: 3, unit: "Năm" },
  ];

  return (
    <section id="timeline" className="py-24 bg-white relative">
      <div className="container mx-auto px-10">
        <div className="grid lg:grid-cols-12 gap-20 items-start">
           <div className="lg:col-span-4">
              <h2 className="text-5xl font-black mb-8">Thời gian <br /><span className="text-pkg-red">Cam kết</span></h2>
              <p className="text-gray font-medium leading-relaxed">Chúng tôi cung cấp mức độ bảo vệ cao nhất trong ngành công nghiệp pin Lithium, phản ánh niềm tin vào chất lượng vật liệu.</p>
           </div>
           <div className="lg:col-span-8">
              <div className="grid md:grid-cols-2 gap-4">
                {items.map((item, idx) => (
                  <div key={idx} className="p-8 border border-smoke hover:border-ink transition-all flex justify-between items-center group">
                    <div>
                       <span className="text-[10px] font-bold text-gray uppercase tracking-widest mb-2 block">{item.cat}</span>
                       <h4 className="text-xl font-black">{item.label}</h4>
                    </div>
                    <div className="text-right">
                       <span className="text-4xl font-black text-pkg-red">{item.value}</span>
                       <span className="text-xs font-black block uppercase tracking-tighter">{item.unit}</span>
                    </div>
                  </div>
                ))}
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

const PolicyDetails = () => {
  return (
    <section id="policy" className="py-24 bg-off-white border-y border-smoke">
      <div className="container mx-auto px-10">
         <div className="grid lg:grid-cols-2 gap-px bg-smoke border border-smoke">
            {/* What's Covered */}
            <div className="bg-white p-12 lg:p-20">
              <div className="flex items-center gap-4 mb-12">
                <CheckCircle2 className="text-pkg-red" size={24} />
                <h2 className="text-3xl font-black italic italic-none">Được bảo hành</h2>
              </div>
              <div className="space-y-12">
                {[
                  { title: "Lỗi vật liệu sản xuất", desc: "Các khiếm khuyết về cấu trúc, vật liệu bên trong cell pin hoặc vỏ hộp." },
                  { title: "Lỗi kỹ thuật điện", desc: "Lỗi từ bảng mạch BMS, các cảm biến hoặc hệ thống quản lý năng lượng." },
                  { title: "Suy giảm dung lượng", desc: "Hiệu suất giảm nhanh hơn mức tiêu chuẩn cam kết (SOH < 80%)." },
                ].map((item, i) => (
                  <div key={i} className="relative pl-8 border-l-2 border-pkg-red/20 group hover:border-pkg-red transition-all">
                    <h4 className="text-lg font-black mb-3">{item.title}</h4>
                    <p className="text-gray text-sm leading-relaxed max-w-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* What's Not Covered */}
            <div className="bg-white p-12 lg:p-20">
              <div className="flex items-center gap-4 mb-12">
                <AlertTriangle className="text-ink/30" size={24} />
                <h2 className="text-3xl font-black opacity-30 italic italic-none">Điều khoản loại trừ</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-x-8 gap-y-10">
                {[
                  "Sai hướng dẫn sử dụng",
                  "Va đập, ngập nước",
                  "Tự ý can thiệp phần cứng",
                  "Dùng sai bộ sạc",
                  "Môi trường cực đoan",
                  "Hết thời hạn bảo hành"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 text-[12px] font-bold uppercase tracking-tighter text-gray hover:text-ink transition-colors">
                     <div className="w-1.5 h-1.5 bg-smoke rounded-full" />
                     {item}
                  </div>
                ))}
              </div>
              <div className="mt-20 p-8 border border-smoke bg-off-white">
                <p className="text-[10px] font-black uppercase tracking-widest text-gray mb-4">Industrial Compliance</p>
                <p className="text-sm font-medium leading-relaxed italic italic-none italic-none">Mọi yêu cầu bảo hành cần được xác minh qua nhật ký sạc/xả từ hệ thống PKG Monitor IoT.</p>
              </div>
            </div>
         </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [open, setOpen] = useState(0);
  const faqs = [
    { q: "Tôi cần giấy tờ gì để yêu cầu bảo hành?", a: "Chúng tôi sử dụng định danh điện tử qua QR Code và Serial, vì vậy không nhất thiết phải giữ hóa đơn giấy để được hỗ trợ." },
    { q: "PKG có hỗ trợ bảo hành tận nơi không?", a: "Với hệ thống pin công nghiệp, đội ngũ Service sẽ có mặt tại kho bãi của khách hàng trong vòng 24-48h." },
    { q: "Pin bị suy giảm bao nhiêu thì được bảo hành?", a: "Chúng tôi cam kết bảo hành nếu dung lượng tối đa (SOH) xuống dưới 80% trong thời gian bảo hành quy định." },
  ];

  return (
    <section id="faq" className="py-32 bg-white">
      <div className="container mx-auto px-10 max-w-5xl">
        <h2 className="text-5xl font-black mb-16 text-center underline decoration-pkg-red decoration-4 underline-offset-[12px]">Support FAQ</h2>
        <div className="divide-y divide-smoke border-y border-smoke">
          {faqs.map((faq, idx) => (
            <div key={idx} className="group">
              <button 
                onClick={() => setOpen(open === idx ? -1 : idx)}
                className="w-full py-10 flex items-center justify-between text-left group-hover:bg-off-white transition-all px-8"
              >
                <span className="font-black text-2xl uppercase tracking-tight">{faq.q}</span>
                <Plus size={24} className={`transition-transform duration-300 ${open === idx ? "rotate-45 text-pkg-red" : "text-smoke group-hover:text-ink"}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-500 ${open === idx ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="pb-10 px-8 text-gray font-medium text-lg max-w-3xl leading-relaxed">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTASection = () => {
  return (
    <section className="bg-pkg-red py-32 relative overflow-hidden flex items-center">
      <div className="absolute inset-0 bg-grid-dots opacity-10" />
      <div className="container mx-auto px-10 relative z-10">
        <div className="max-w-4xl">
           <h2 className="text-6xl md:text-8xl font-black text-white mb-10 leading-[0.9]">
             Năng lượng bền vững <br />
             <span className="text-ink">Đồng hành cùng PKG</span>
           </h2>
           <div className="flex flex-wrap gap-6 mt-16">
              <button className="bg-white text-pkg-red px-12 py-6 text-sm font-black uppercase tracking-widest hover:bg-ink hover:text-white transition-all">
                 Yêu cầu hỗ trợ ngay
              </button>
              <button className="bg-transparent border-2 border-white text-white px-12 py-6 text-sm font-black uppercase tracking-widest hover:bg-white hover:text-pkg-red transition-all">
                 Hotline 1900 1234
              </button>
           </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white py-16">
      <div className="container mx-auto px-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="logo text-xl font-black tracking-tighter">
            PKG <span className="text-pkg-red">BATTERY</span>
          </div>
          
          <div className="flex gap-12 font-bold text-[10px] uppercase tracking-[2px] text-gray transition-colors">
            <a href="#" className="hover:text-ink">Privacy Policy</a>
            <a href="#" className="hover:text-ink">Global Standards</a>
            <a href="#" className="hover:text-ink">B2B Portal</a>
          </div>

          <p className="text-[10px] font-black text-gray uppercase tracking-widest">
            © 2026 PKG BATTERY CO., LTD.
          </p>
        </div>
      </div>
    </footer>
  );
};

const SideNav = () => {
  const sections = [
    { id: "hero", label: "Hero" },
    { id: "products", label: "Product" },
    { id: "timeline", label: "Term" },
    { id: "policy", label: "Policy" },
    { id: "faq", label: "Support" },
  ];

  const [active, setActive] = useState("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="fixed left-8 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col gap-10 items-start border-l border-smoke py-10">
      {sections.map((s) => (
        <a 
          key={s.id} 
          href={`#${s.id}`} 
          className="group flex flex-col items-start gap-1 transition-all pl-4 relative"
        >
          <div className={`absolute left-[-1.5px] top-0 w-[2px] h-full transition-all duration-300 ${active === s.id ? "bg-pkg-red h-full" : "bg-transparent h-0 group-hover:h-full group-hover:bg-pkg-red/30"}`} />
          <span className={`text-[10px] uppercase tracking-widest font-black transition-all ${active === s.id ? "text-pkg-red opacity-100" : "text-gray/50 opacity-100 group-hover:text-ink"}`}>
            {s.label}
          </span>
        </a>
      ))}
    </div>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="relative selection:bg-pkg-red/20 selection:text-pkg-red overflow-x-hidden scroll-smooth bg-off-white font-sans">
      <Navbar />
      <SideNav />
      <main>
        <Hero />
        <ProductCoverage />
        <WarrantyTimeline />
        <PolicyDetails />
        <FAQ />
        <CTASection />
      </main>
      <Footer />

      {/* Sticky Mobile Fab */}
      <div className="md:hidden fixed bottom-6 right-6 z-50">
        <button className="w-16 h-16 bg-pkg-red text-white flex items-center justify-center shadow-2xl">
          <MessageSquare size={24} />
        </button>
      </div>
    </div>
  );
}
