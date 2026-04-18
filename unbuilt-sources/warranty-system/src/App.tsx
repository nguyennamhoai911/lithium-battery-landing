/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { 
  ShieldCheck, 
  Zap, 
  Clock, 
  Settings, 
  CheckCircle2, 
  AlertTriangle, 
  ArrowRight, 
  ChevronRight, 
  Battery, 
  Truck, 
  Activity, 
  Cpu, 
  Plus, 
  Minus,
  MessageSquare,
  LifeBuoy,
  Wrench,
  Search,
  Timer
} from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { cn } from "@/src/lib/utils";

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-4 px-6 md:px-12",
        isScrolled ? "frosted-glass py-3" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 md:w-10 md:h-10 bg-pkg-red flex items-center justify-center rounded-sm">
            <Battery className="text-white w-5 h-5 md:w-6 md:h-6" />
          </div>
          <span className="font-display font-bold text-xl md:text-2xl tracking-tighter text-ink">
            PKG <span className="text-pkg-red">BATTERY</span>
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8 font-sans font-medium text-sm uppercase tracking-widest text-gray-smoke">
          <a href="#" className="hover:text-pkg-red transition-colors">TỔNG QUAN</a>
          <a href="#" className="hover:text-pkg-red transition-colors">SẢN PHẨM</a>
          <a href="#" className="text-pkg-red">BẢO HÀNH</a>
          <a href="#" className="hover:text-pkg-red transition-colors">HỖ TRỢ</a>
        </div>
        <button className="bg-ink text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-pkg-red transition-all duration-300">
          LIÊN HỆ
        </button>
      </div>
    </motion.nav>
  );
};

const SectionTitle = ({ eyebrow, title, description, dark = false, align = "center" }: { eyebrow: string, title: string, description?: string, dark?: boolean, align?: "left" | "center" }) => (
  <div className={cn("mb-16 md:mb-24", align === "center" ? "text-center mx-auto" : "text-left")}>
    <motion.span 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={cn("block text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] mb-4 md:mb-6", dark ? "text-white/40" : "text-pkg-red")}
    >
      {eyebrow}
    </motion.span>
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      className={cn("text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.1] mb-6 md:mb-8 text-balance", dark ? "text-white" : "text-ink")}
    >
      {title}
    </motion.h2>
    {description && (
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className={cn("text-lg md:text-xl max-w-2xl font-sans font-light leading-relaxed", align === "center" ? "mx-auto" : "", dark ? "text-white/60" : "text-gray-smoke")}
      >
        {description}
      </motion.p>
    )}
  </div>
);

const TrustPillar = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <div className="flex flex-col gap-4">
    <div className="w-12 h-12 rounded-xl bg-surface flex items-center justify-center text-pkg-red glass-stroke mb-2">
      <Icon className="w-6 h-6" />
    </div>
    <h4 className="font-display font-bold text-lg text-ink">{title}</h4>
    <p className="text-sm font-sans text-gray-smoke leading-relaxed">{description}</p>
  </div>
);

const ProductCard = ({ title, tags, delay = 0, size = "normal" }: { title: string, tags: string[], color?: string, delay?: number, size?: "normal" | "large" }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className={cn(
      "group relative overflow-hidden rounded-xl bg-surface border glass-stroke cursor-pointer",
      size === "large" ? "md:aspect-[16/10] aspect-[1/1]" : "aspect-[1/1]"
    )}
  >
    <div className="absolute inset-0 overflow-hidden">
      <img
        src="https://picsum.photos/seed/tech/800/600?grayscale"
        alt="Tech Background"
        referrerPolicy="no-referrer"
        className="w-full h-full object-cover opacity-10 group-hover:opacity-20 transition-opacity grayscale duration-700"
      />
    </div>
    <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent mix-blend-overlay"></div>
    
    {/* Tech Trace Lines */}
    <div className="absolute inset-0 bg-industrial-grid opacity-20 group-hover:opacity-40 transition-opacity"></div>
    
    <div className="absolute top-8 right-8 opacity-10 group-hover:opacity-30 transition-all group-hover:rotate-12">
      <Cpu className="w-16 h-16 text-ink stroke-[0.5]" />
    </div>

    <div className="absolute bottom-0 left-0 right-0 p-8 frosted-glass translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
      <div className="flex gap-2 mb-4">
        {tags.map((tag, i) => (
          <span key={i} className="text-[9px] font-bold tracking-[0.2em] text-pkg-red border border-pkg-red/20 px-2 py-0.5 rounded-sm uppercase">{tag}</span>
        ))}
      </div>
      <h3 className="text-2xl font-display font-bold text-ink mb-1 group-hover:text-pkg-red transition-colors">{title}</h3>
      <div className="flex items-center gap-2 text-gray-smoke text-[10px] font-bold tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity">
        VIEW SPECIFICATIONS <ArrowRight className="w-3 h-3" />
      </div>
    </div>
  </motion.div>
);

const TimelineItem = ({ duration, unit, category, detail }: { duration: string, unit: string, category: string, detail: string }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="relative p-8 rounded-xl frosted-glass transition-all duration-500 group"
  >
    <div className="flex justify-between items-start mb-12">
      <div className="flex flex-col">
        <span className="text-5xl md:text-6xl font-display font-bold text-ink group-hover:text-pkg-red transition-colors tracking-tighter">
          {duration}
        </span>
        <span className="text-xs font-bold tracking-[0.2em] text-gray-smoke uppercase mt-1">
          {unit}
        </span>
      </div>
      <div className="w-10 h-10 rounded-full glass-stroke flex items-center justify-center text-gray-smoke group-hover:bg-pkg-red group-hover:text-white group-hover:border-pkg-red transition-all">
        <Clock className="w-5 h-5" />
      </div>
    </div>
    <h4 className="text-lg font-bold text-ink mb-2">{category}</h4>
    <p className="text-sm text-gray-smoke leading-relaxed font-sans">{detail}</p>
    
    <div className="absolute bottom-0 left-8 right-8 h-1 bg-gray-50 overflow-hidden rounded-full">
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        viewport={{ once: true }}
        className="h-full bg-pkg-red"
      />
    </div>
  </motion.div>
);

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b glass-stroke py-6 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between text-left group"
      >
        <h4 className={cn("text-lg md:text-xl font-display font-bold transition-colors", isOpen ? "text-pkg-red" : "text-ink group-hover:text-gray-smoke")}>
          {question}
        </h4>
        <div className={cn("w-8 h-8 rounded-full glass-stroke flex items-center justify-center transition-all", isOpen ? "bg-pkg-red text-white border-pkg-red" : "text-gray-smoke")}>
          {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pt-6 text-gray-smoke font-sans leading-relaxed text-base">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// --- Main App ---

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <div ref={containerRef} className="relative w-full overflow-hidden bg-[#FDFDFD] selection:bg-pkg-red selection:text-white">
      <Navbar />
      
      {/* BACKGROUND CONTINUITY ELEMENTS */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-industrial-grid opacity-100"></div>
        <motion.div 
          style={{ opacity: useTransform(scrollYProgress, [0, 0.2], [0.3, 0.05]) }}
          className="absolute top-0 right-[-10%] w-[60%] h-[60%] bg-pkg-red/5 blur-[150px] rounded-full"
        />
        <motion.div 
          style={{ opacity: useTransform(scrollYProgress, [0.3, 0.6], [0, 0.1]) }}
          className="absolute top-[40%] left-[-10%] w-[50%] h-[60%] bg-pkg-red/5 blur-[150px] rounded-full"
        />
      </div>

      {/* 1. HERO SECTION */}
      <header className="relative min-h-screen flex items-center pt-32 pb-20 px-6 md:px-12 bg-gradient-to-b from-white to-smoke/30 overflow-hidden">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative z-10 lg:pr-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 mb-8"
            >
              <span className="w-12 h-[1px] bg-pkg-red"></span>
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] text-pkg-red">
                PKG Battery Warranty System
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="hero-h1 font-bold mb-8 text-ink text-balance"
            >
              Không Chỉ Bán Pin. <br />
              <span className="text-gray-smoke opacity-30">Chúng Tôi Bảo Chứng</span> Cho <span className="relative">
                Vận Hành
                <motion.span 
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 1, duration: 1 }}
                  className="absolute bottom-1 left-0 h-4 md:h-6 bg-pkg-red/10 -z-10"
                ></motion.span>
              </span> Của Bạn.
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl font-sans font-light text-gray-smoke mb-12 max-w-lg leading-relaxed"
            >
              PKG Battery mang đến chính sách bảo hành rõ ràng, nhanh chóng và đủ năng lực xử lý cho mọi hệ thống pin lithium công nghiệp.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-6"
            >
              <button className="w-full sm:w-auto bg-pkg-red text-white px-10 py-5 rounded-sm font-bold uppercase tracking-widest text-xs hover:bg-ink transition-all duration-300 flex items-center justify-center gap-3 group shadow-lg shadow-pkg-red/20">
                Xem thời hạn bảo hành <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="w-full sm:w-auto bg-white border border-ink text-ink px-10 py-5 rounded-sm font-bold uppercase tracking-widest text-xs hover:border-pkg-red transition-all duration-300">
                Gửi yêu cầu hỗ trợ
              </button>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-20 pt-10 border-t glass-stroke grid grid-cols-2 md:grid-cols-4 gap-8 grayscale opacity-50 font-display font-bold text-[10px] tracking-[0.2em]"
            >
              <div className="flex items-center gap-2">HỖ TRỢ TOÀN QUỐC</div>
              <div className="flex items-center gap-2">KỸ THUẬT CHUYÊN SÂU</div>
              <div className="flex items-center gap-2">XỬ LÝ NHANH CHÓNG</div>
              <div className="flex items-center gap-2">ĐỒNG HÀNH DÀI HẠN</div>
            </motion.div>
          </div>
          
          <div className="relative aspect-square lg:aspect-auto h-full min-h-[500px] hidden lg:block">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="absolute inset-0 bg-neutral-900 rounded-[3rem] overflow-hidden shadow-2xl shadow-neutral-900/20"
            >
              {/* Virtual Industrial Motion Background */}
              <div className="absolute inset-0 overflow-hidden">
                <img 
                  src="https://picsum.photos/seed/battery/1920/1080?grayscale"
                  alt="Industrial Background"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover mix-blend-overlay opacity-30"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-tr from-pkg-red/20 to-transparent"></div>
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="w-80 h-80 rounded-full border border-white/5 flex items-center justify-center"
                  >
                    <motion.div 
                      animate={{ rotate: -360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="w-60 h-60 rounded-full border-[0.5px] border-pkg-red/30"
                    ></motion.div>
                  </motion.div>
                  <div className="absolute inset-0 flex items-center justify-center text-white/5">
                    <Battery size={160} strokeWidth={0.5} />
                  </div>
                </div>
              </div>
              
              {/* Floating Tech Labels */}
              <div className="absolute top-12 left-12">
                <div className="text-[10px] font-mono text-white/40 tracking-widest mb-1 italic">SYSTEM.STATUS</div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-pkg-red animate-pulse"></div>
                  <div className="text-white font-display font-bold text-lg">OPTIMIZED</div>
                </div>
              </div>
              
              <div className="absolute bottom-12 right-12 text-right">
                <div className="text-[10px] font-mono text-white/40 tracking-widest mb-1 italic">WARRANTY.ID</div>
                <div className="text-white font-display font-bold text-lg uppercase">PKG-LIT-2024</div>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Cinematic Particles / Energy Lines */}
        <div className="absolute inset-0 pointer-events-none z-[1]">
          <svg className="w-full h-full opacity-10">
            <motion.path 
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 3, ease: "easeInOut" }}
              d="M0 80% Q 50% 70%, 100% 80%" 
              fill="none" 
              stroke="white" 
              strokeWidth="0.5"
            />
          </svg>
        </div>
      </header>

      {/* 2. TRUST STORY SECTION */}
      <section className="relative py-32 px-6 md:px-12 bg-transparent">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-32 items-end">
          <div className="lg:w-1/2">
            <SectionTitle 
              align="left"
              eyebrow="Triết lý hỗ trợ"
              title="Khi hệ thống dừng lại, chi phí không tính bằng phút."
            />
          </div>
          <div className="lg:w-1/2 pb-10 md:pb-24">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xl md:text-2xl font-sans font-light text-ink leading-relaxed italic border-l-2 border-pkg-red pl-8"
            >
              "Một bộ pin gặp sự cố có thể kéo theo gián đoạn kho vận, đình trệ dây chuyền hoặc chậm tiến độ giao hàng. Vì vậy bảo hành không nên chỉ là vài dòng cam kết. Nó phải là năng lực phản ứng thực tế."
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-8 text-gray-smoke font-sans leading-relaxed"
            >
              PKG xây dựng dịch vụ hậu mãi xoay quanh tốc độ xử lý, chuyên môn kỹ thuật và trách nhiệm rõ ràng. Chúng tôi hiểu rằng sự tin cậy là tài sản lớn nhất trong quan hệ đối tác B2B.
            </motion.p>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto mt-20 grid grid-cols-1 md:grid-cols-4 gap-12 border-t glass-stroke pt-20">
          <TrustPillar icon={Zap} title="Phản hồi siêu tốc" description="Đội ngũ kỹ thuật túc trực 24/7, sẵn sàng tiếp nhận và chẩn đoán từ xa qua hệ thống cloud-monitoring." />
          <TrustPillar icon={LifeBuoy} title="Hỗ trợ tận nơi" description="Mạng lưới trạm bảo hành phủ khắp các khu công nghiệp trọng điểm, đảm bảo có mặt trong vòng 24-48h." />
          <TrustPillar icon={Wrench} title="Linh kiện sẵn kho" description="Không phát sinh thời gian chờ nhập hàng. Toàn bộ module pin và cell dự phòng luôn sẵn sàng tại kho Việt Nam." />
          <TrustPillar icon={ShieldCheck} title="Quy trình minh bạch" description="Theo dõi tiến độ xử lý qua mã Ticket định danh, cam kết ngày bàn giao và hiệu suất sau sửa chữa." />
        </div>
      </section>

      {/* 3. PRODUCT COVERAGE SECTION */}
      <section className="relative py-32 px-6 md:px-12 bg-surface/50 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <SectionTitle 
            eyebrow="Ecosystem Showcase"
            title="Hệ Sinh Thái Sản Phẩm Áp Dụng Bảo Hành"
            description="Mỗi giải pháp năng lượng của PKG đều được áp dụng tiêu chuẩn bảo hành công nghiệp cao nhất, cá nhân hóa theo từng đặc thù vận hành."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-8">
              <ProductCard 
                title="Pin Lithium Cho Xe Nâng Điện" 
                tags={["Logistics", "Industrial"]} 
                size="large"
              />
            </div>
            <div className="md:col-span-4">
              <ProductCard 
                title="Pin Lithium Cho Xe Du Lịch" 
                tags={["Tourism", "Golf"]} 
                delay={0.1}
              />
            </div>
            <div className="md:col-span-4">
              <ProductCard 
                title="Pin AGV / Robot" 
                tags={["Automation", "Smart Factory"]} 
                delay={0.2}
              />
            </div>
            <div className="md:col-span-4">
              <ProductCard 
                title="Bộ Sạc - Trạm Sạc" 
                tags={["Infrastructure"]} 
                delay={0.3}
              />
            </div>
            <div className="md:col-span-4">
              <ProductCard 
                title="ESS - Hệ Thống Lưu Trữ" 
                tags={["Renewable Energy"]} 
                delay={0.4}
              />
            </div>
          </div>
        </div>
        
        {/* Subtle Trace Background */}
        <div className="absolute top-[20%] right-[-5%] w-1/2 h-1/2 border border-black/[0.03] rounded-full pointer-events-none"></div>
      </section>

      {/* 4. WARRANTY DURATION SECTION */}
      <section className="relative py-32 px-6 md:px-12 bg-transparent">
        <div className="max-w-7xl mx-auto">
          <SectionTitle 
            align="center"
            eyebrow="Precision Timeline"
            title="Cam Kết Dài Hạn Theo Từng Ứng Dụng"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <TimelineItem 
              duration="05" 
              unit="Năm" 
              category="Xe nâng điện" 
              detail="Hoặc 10.000 giờ vận hành tùy điều kiện nào đến trước. Bảo hành toàn diện cell pin và BMS."
            />
            <TimelineItem 
              duration="05" 
              unit="Năm" 
              category="Xe du lịch" 
              detail="Lên đến 5 năm cho các dòng xe điện du lịch, xe golf tải trọng lớn trong môi trường khắc nghiệt."
            />
            <TimelineItem 
              duration="36" 
              unit="Tháng" 
              category="AGV / Robot" 
              detail="Bảo hành tiêu chuẩn 3 năm cho các dòng pin tự động hóa, hoạt động cường độ cao liên tục."
            />
            <TimelineItem 
              duration="36" 
              unit="Tháng" 
              category="Bộ sạc" 
              detail="Đổi mới hoặc sửa chữa miễn phí lỗi phát sinh từ bo mạch điều khiển và biến áp xung."
            />
            <TimelineItem 
              duration="10" 
              unit="Năm" 
              category="Hệ thống ESS" 
              detail="Cam kết duy trì trên 80% dung lượng trong 5-10 năm tùy thuộc vào cấu hình lưu trữ."
            />
          </div>
        </div>
      </section>

      {/* 5 & 6. COVERED & EXCLUSIONS SECTION (Split Layout) */}
      <section className="relative min-h-[80vh] grid grid-cols-1 lg:grid-cols-2">
        {/* Covered - Light */}
        <div className="relative py-32 px-6 md:px-24 bg-white flex flex-col justify-center">
          <SectionTitle 
            align="left"
            eyebrow="Phạm vi bảo vệ"
            title="PKG Sẵn Sàng Chịu Trách Nhiệm"
          />
          <ul className="space-y-6">
            {[
              "Lỗi sản xuất phát sinh từ nhà máy PKG",
              "Lỗi vật liệu, linh kiện điện tử không đạt chuẩn",
              "BMS (Hệ thống quản lý pin) lỗi kỹ thuật lập trình",
              "Hiệu suất dung lượng suy giảm bất thường (>20%/năm)",
              "Sạc lỗi kỹ thuật khiến pin không nhận năng lượng",
              "Kiểm tra định kỳ và đề xuất giải pháp xử lý chuyên sâu"
            ].map((item, id) => (
              <motion.li 
                key={id}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: id * 0.1 }}
                className="flex items-center gap-4 text-ink"
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-pkg-red/10 flex items-center justify-center text-pkg-red">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span className="font-sans font-medium">{item}</span>
              </motion.li>
            ))}
          </ul>
        </div>
        
        {/* Exclusions - Dark */}
        <div className="relative py-32 px-6 md:px-24 bg-neutral-950 flex flex-col justify-center overflow-hidden">
          <div className="absolute inset-0 bg-industrial-grid opacity-10"></div>
          <div className="relative z-10">
            <SectionTitle 
              dark
              align="left"
              eyebrow="Giới hạn trách nhiệm"
              title="Ngoài Phạm Vi Bảo Hành"
            />
            <ul className="space-y-6">
              {[
                "Sử dụng sai hướng dẫn vận hành của PKG",
                "Tự ý tháo dỡ, sửa chữa bởi bên thứ ba",
                "Sử dụng sai bộ sạc hoặc nguồn điện không ổn định",
                "Hư hại do va đập mạnh, ngập nước, cháy nổ ngoại quan",
                "Thiên tai, môi trường cực đoan ngoài thiết kế",
                "Hao mòn tự nhiên theo thời gian của vỏ ngoài"
              ].map((item, id) => (
                <motion.li 
                  key={id}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: id * 0.1 }}
                  className="flex items-center gap-4 text-white/70"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white/5 flex items-center justify-center text-pkg-red">
                    <AlertTriangle className="w-4 h-4" />
                  </div>
                  <span className="font-sans font-light tracking-wide">{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>
          
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-pkg-red/20 blur-[100px] pointer-events-none"></div>
        </div>
      </section>

      {/* 7. CLAIM PROCESS SECTION */}
      <section className="relative py-32 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle 
            align="center"
            eyebrow="Workflow"
            title="Quy Trình Xử Lý Tối Ưu"
            description="Mọi yêu cầu bảo hành đều được số hóa, đảm bảo tính minh bạch và rút ngắn thời gian phản hồi."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative">
            {/* Connection Lines (Desktop) */}
            <div className="absolute top-1/3 left-0 right-0 h-[1px] bg-gray-100 hidden md:block"></div>
            
            {[
              { icon: MessageSquare, title: "Tiếp nhận", desc: "Khách hàng gửi yêu cầu qua Hotline hoặc QR Code trên pin." },
              { icon: Search, title: "Xác minh", desc: "Xác nhận lịch sử vận hành qua log dữ liệu BMS Cloud." },
              { icon: Activity, title: "Chẩn đoán", desc: "Kỹ thuật chuyên sâu phân tích nguyên nhân gốc rễ (Root Cause)." },
              { icon: Wrench, title: "Sửa chữa", desc: "Sửa chữa hoặc thay thế module hỏng bằng hàng chính hãng." },
              { icon: Truck, title: "Bàn giao", desc: "Kiểm tra tải thực tế và bàn giao kèm báo cáo kỹ thuật." }
            ].map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="relative flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 rounded-full bg-white glass-stroke flex items-center justify-center text-ink mb-6 z-10 group-hover:border-pkg-red group-hover:text-pkg-red transition-all duration-300 shadow-sm">
                  <step.icon className="w-6 h-6" />
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-surface flex items-center justify-center text-[10px] font-bold text-gray-smoke border border-black/5">
                    0{idx + 1}
                  </div>
                </div>
                <h4 className="font-display font-bold text-lg mb-3">{step.title}</h4>
                <p className="text-sm font-sans text-gray-smoke leading-relaxed px-4">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. WHY PKG SECTION */}
      <section className="relative py-32 px-6 md:px-12 bg-neutral-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <SectionTitle 
            dark
            eyebrow="Key Benefits"
            title="Vì Sao Doanh Nghiệp Chọn PKG"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Chính sách minh bạch", desc: "Mọi điều khoản đều được cụ thể hóa bằng văn bản pháp lý, bảo vệ quyền lợi tối đa cho doanh nghiệp đối tác." },
              { title: "Kỹ thuật mạnh", desc: "Đội ngũ chuyên gia từ các tập đoàn năng lượng hàng đầu, am hiểu sâu sắc về hóa học Lithium và điện tử công suất." },
              { title: "Phản hồi nhanh", desc: "Cam kết xử lý sự cố trong thời gian hữu hạn. Giảm thiểu rủi ro đình trệ vận hành cho chuỗi cung ứng." },
              { title: "Giải pháp đồng bộ", desc: "Chúng tôi bảo hành cả hệ thống: từ Pin, Sạc đến giải pháp quản lý năng lượng thông minh trên Cloud." },
              { title: "Hậu mãi dài hạn", description: "Hết thời gian bảo hành, PKG vẫn đồng hành cùng gói bảo trì ưu đãi và thu hồi tái chế pin cũ tiêu chuẩn." },
              { title: "Kinh nghiệm thực tế", description: "Đã triển khai phục vụ cho hơn 500+ doanh nghiệp tại các khu công nghiệp toàn quốc với tỷ lệ hài lòng 98%." }
            ].map((feat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="p-10 rounded-[2rem] bg-white/5 border border-white/5 hover:bg-white/[0.08] transition-all group"
              >
                <div className="w-10 h-1 h-1 bg-pkg-red mb-6"></div>
                <h4 className="text-xl font-display font-bold mb-4">{feat.title}</h4>
                <p className="text-sm font-light text-white/50 leading-relaxed">{feat.desc || (feat as any).description}</p>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Subtle Industrial Grid Overlay */}
        <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none"></div>
      </section>

      {/* 9. FAQ SECTION */}
      <section className="relative py-32 px-6 md:px-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <SectionTitle 
            eyebrow="Knowledge Support"
            title="Câu Hỏi Thường Gặp"
          />
          
          <div className="mt-12">
            <FAQItem 
              question="Tôi cần cung cấp thông tin gì để yêu cầu bảo hành?" 
              answer="Bạn chỉ cần cung cấp mã số Serial trên vỏ pin hoặc chụp ảnh mã QR Code dán trên thiết bị. Hệ thống của chúng tôi sẽ truy xuất ngày sản xuất, xuất xưởng và lịch sử bảo trì để xác minh ngay lập tức." 
            />
            <FAQItem 
              question="Thời gian xử lý một lỗi pin thường mất bao lâu?" 
              answer="Với lỗi phần mềm hoặc cài đặt, chúng tôi xử lý từ xa trong 2 giờ. Với lỗi phần cứng cần can thiệp, PKG cam kết có mặt tại hiện trường trong 24h và hoàn tất sửa chữa/thay thế trong tối đa 72h làm việc." 
            />
            <FAQItem 
              question="PKG có hỗ trợ sửa chữa tận kho bãi của doanh nghiệp không?" 
              answer="Có. Với các hệ thống pin xe nâng hoặc ESS cố định, đội lưu động của PKG sẽ đến trực tiếp vị trí của khách hàng để chẩn đoán và thay thế module tại chỗ để tiết kiệm chi phí vận chuyển." 
            />
            <FAQItem 
              question="Trường hợp mất hóa đơn mua hàng có được bảo hành không?" 
              answer="Hoàn toàn được. PKG áp dụng bảo hành điện tử theo Serial Number. Chỉ cần số Series còn nguyên vẹn, chúng tôi sẽ phục vụ quý khách theo đúng cam kết thời gian ban đầu." 
            />
            <FAQItem 
              question="Nếu pin giảm dung lượng sau 3 năm, tôi có được hỗ trợ không?" 
              answer="Chúng tôi bảo hành hiệu suất. Nếu dung lượng giảm xuống dưới 80% (với điều kiện sử dụng chuẩn) trong thời gian bảo hành, PKG sẽ tiến hành cân bằng cell hoặc thay thế cụm cell để khôi phục hiệu năng đạt chuẩn." 
            />
          </div>
        </div>
      </section>

      {/* 10. FINAL CTA SECTION */}
      <footer className="relative py-32 px-6 md:px-12 bg-neutral-950 overflow-hidden text-center">
        <div className="absolute inset-0 bg-industrial-grid opacity-10"></div>
        <div className="absolute inset-0 flex items-center justify-center opacity-10 blur-3xl">
          <motion.div 
            animate={{ scale: [1, 1.2, 1] }} 
            transition={{ duration: 10, repeat: Infinity }}
            className="w-1/2 h-1/2 bg-pkg-red rounded-full"
          />
        </div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mb-10 inline-flex items-center gap-2 text-pkg-red font-display font-bold tracking-[0.2em] text-xs"
          >
            <ShieldCheck className="w-4 h-4" /> TRỞ THÀNH ĐỐI TÁC TIN CẬY
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-tight mb-12"
          >
            Chọn Nhà Cung Cấp Hôm Nay. <br />
            <span className="text-white/40">Chọn Đơn Vị Đồng Hành Trong Nhiều Năm Tới.</span>
          </motion.h2>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="w-full sm:w-auto bg-pkg-red text-white px-12 py-6 rounded-sm font-bold uppercase tracking-widest text-xs hover:bg-white hover:text-ink transition-all duration-500 shadow-2xl shadow-pkg-red/20 outline outline-pkg-red">
              Yêu cầu hỗ trợ ngay
            </button>
            <button className="w-full sm:w-auto border border-white/20 text-white px-12 py-6 rounded-sm font-bold uppercase tracking-widest text-xs hover:bg-white hover:text-ink transition-all duration-500">
              Liên hệ chuyên gia PKG
            </button>
          </div>
          
          <div className="mt-32 pt-16 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8 text-[10px] tracking-[0.2em] uppercase font-bold text-white/30">
            <div>© 2024 PKG BATTERY - INDUSTRIAL LITHIUM SOLUTIONS</div>
            <div className="flex gap-10">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Documentation</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
