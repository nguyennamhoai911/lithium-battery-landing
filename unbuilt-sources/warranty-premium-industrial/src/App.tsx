/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from "motion/react";
import { 
  ShieldCheck, 
  Zap, 
  Clock, 
  ChevronRight, 
  ArrowUpRight, 
  Settings, 
  FileText, 
  RefreshCcw,
  CheckCircle2,
  XCircle,
  Cpu,
  Database,
  History
} from "lucide-react";
import { useRef } from "react";

// --- Components ---

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 mix-blend-difference">
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 bg-white flex items-center justify-center font-display font-bold text-black text-xl">P</div>
      <span className="font-display font-medium tracking-tight text-white uppercase text-sm">PKG Công nghiệp</span>
    </div>
    <div className="hidden md:flex items-center gap-12">
      {[
        { label: "Hạng mục", id: "coverage" },
        { label: "Thời hạn", id: "duration" },
        { label: "Loại trừ", id: "exclusions" },
        { label: "Quy trình", id: "process" }
      ].map((item) => (
        <a key={item.id} href={`#${item.id}`} className="text-[10px] uppercase tracking-[0.2em] text-white/70 hover:text-white transition-colors">
          {item.label}
        </a>
      ))}
    </div>
    <button className="px-6 py-2 border border-white/20 text-white text-[10px] uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-500">
      Yêu cầu bảo hành
    </button>
  </nav>
);

const SectionHeading = ({ title, subtitle, light = false }: { title: string; subtitle: string; light?: boolean }) => (
  <div className="max-w-2xl mb-16">
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className={`text-[11px] font-mono uppercase tracking-[0.2em] mb-4 flex items-center gap-3 ${light ? 'text-white/50' : 'text-brand-red'}`}
    >
      <div className={`w-[30px] h-[1px] ${light ? 'bg-white/20' : 'bg-brand-red'}`} />
      {subtitle}
    </motion.div>
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`text-6xl md:text-7xl font-sans font-bold tracking-tight leading-[0.95] ${light ? 'text-white' : 'text-industrial-gray'}`}
    >
      {title}
    </motion.h2>
  </div>
);

const BackgroundElements = () => (
  <div className="fixed inset-0 pointer-events-none z-0">
    <div className="absolute inset-0 bg-noise opacity-[0.03]" />
    <div className="absolute inset-0 background-orchestra" />
    <div className="absolute inset-0 grid-layer opacity-40" />
    <div className="absolute left-1/2 top-0 bottom-0 w-[1px] energy-path opacity-20" />
  </div>
);

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.1]);

  return (
    <div ref={containerRef} className="relative bg-white selection:bg-brand-red selection:text-white overflow-hidden">
      <BackgroundElements />
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-screen flex flex-col justify-center px-8 md:px-24 py-32 overflow-hidden">
        <motion.div style={{ opacity: heroOpacity, scale: heroScale }} className="absolute inset-0 z-0">
          <div className="absolute top-[20%] right-[-10%] w-[800px] h-[800px] bg-brand-red/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-[10%] left-[-5%] w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[100px]" />
          
          {/* Subtle Industrial Pattern */}
          <div className="absolute inset-0 mask-radial opacity-10 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]" />
        </motion.div>

        <div className="relative z-10 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-3 mb-8">
              <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-brand-red flex items-center gap-3">
                <div className="w-[30px] h-[1px] bg-brand-red" />
                Mã chứng nhận: PKG-092-2024
              </span>
            </div>
            <h1 className="text-7xl md:text-8xl font-sans font-bold leading-[0.95] tracking-tight mb-8 text-industrial-gray">
              BẢO VỆ <br />
              TUYỆT ĐỐI.
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mt-12">
              <p className="text-lg md:text-xl text-industrial-gray/70 leading-relaxed max-w-lg">
                Bảo hành Doanh nghiệp PKG không chỉ là một văn bản. Đó là một cam kết công nghiệp về sự tin cậy, được thiết kế để đảm bảo hệ thống năng lượng của bạn luôn vận hành với độ chính xác cao nhất.
              </p>
              <div className="flex flex-col gap-8">
                <div className="group relative w-fit">
                  <span className="text-xs uppercase tracking-widest text-industrial-gray/40 mb-2 block">Trạng thái hiện tại</span>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="font-mono text-sm">Hệ thống: 100%</span>
                  </div>
                </div>
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-brand-red text-white py-6 px-12 text-sm uppercase tracking-[0.2em] font-bold flex items-center gap-4 w-fit shadow-2xl shadow-brand-red/20 group hover:bg-black transition-colors duration-500"
                >
                  Khám phá hạng mục <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Floating Technical Detail */}
        <div className="absolute bottom-12 right-12 hidden lg:block text-right">
          <div className="font-mono text-[10px] text-industrial-gray/20 leading-loose">
            PKG_SRV_749320 // BẢO_VỆ_CẤP_CÔNG_NGHIỆP <br />
            CẬP NHẬT: THÁNG 4/2026 // PHIÊN BẢN 4.2.0
          </div>
        </div>
      </section>

      {/* --- TRUST STORY / TRANSITION --- */}
      <section className="relative py-32 px-8 md:px-24">
        {/* Subtle bridge gradient */}
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-transparent to-surface-soft/50" />
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
          <div className="md:col-span-1 border-l border-black/10 h-full hidden md:block" />
          <div className="md:col-span-6">
            <SectionHeading 
              subtitle="Bản thiết kế" 
              title="Hơn cả bảo hành tiêu chuẩn. Một lời hứa tin cậy." 
            />
            <div className="space-y-8 max-w-lg">
              <p className="text-lg text-industrial-gray/70 leading-relaxed font-light">
                Mọi đơn vị công nghiệp PKG đều được chế tạo để chịu được áp lực vận hành cực lớn. Bảo hành của chúng tôi không chỉ là một chính sách — đó là một chứng nhận kỹ thuật đảm bảo thiết bị của bạn sẽ hoạt động với độ chính xác cao nhất ngay cả trong những điều kiện khắc nghiệt nhất.
              </p>
              <div className="flex gap-12 pt-16">
                <div className="border-l border-black/10 pl-6 shrink-0">
                  <span className="block text-3xl font-bold mb-1">100%</span>
                  <span className="text-[10px] uppercase tracking-wider text-industrial-gray/50">Cam kết Uptime</span>
                </div>
                <div className="border-l border-black/10 pl-6 shrink-0">
                  <span className="block text-3xl font-bold mb-1">24/7</span>
                  <span className="text-[10px] uppercase tracking-wider text-industrial-gray/50">Giám sát chủ động</span>
                </div>
                <div className="border-l border-black/10 pl-6 shrink-0">
                  <span className="block text-3xl font-bold mb-1">TOÀN CẦU</span>
                  <span className="text-[10px] uppercase tracking-wider text-industrial-gray/50">Hỗ trợ đối tác</span>
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-5 relative">
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white border border-black/5 p-8 flex flex-col justify-between relative shadow-[0_10px_30px_rgba(0,0,0,0.03)] group"
            >
              <header className="flex justify-between items-start mb-12">
                <span className="font-mono text-[10px] px-3 py-1 bg-surface-mist rounded-full">Industrial Tier 4</span>
                <span className="font-mono text-[11px] text-brand-red flex items-center gap-2">LVL.A</span>
              </header>
              
              <div className="aspect-[16/6] bg-gradient-to-br from-surface-mist to-white rounded-sm flex items-center justify-center mb-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-noise opacity-10" />
                <span className="text-2xl font-black text-black/10 tracking-tighter">PKG // CORE</span>
              </div>

              <div>
                <p className="text-[13px] font-bold mb-1 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-brand-red shadow-[0_0_10px_rgba(226,29,29,0.4)]" />
                  BẢO HÀNH LINH KIỆN TOÀN DIỆN
                </p>
                <p className="text-[11px] opacity-60">Bao gồm: Cân bằng cell, Quản lý nhiệt, Mạch logic.</p>
              </div>

              <button className="mt-12 bg-white text-black py-4 px-6 font-bold uppercase tracking-widest text-[13px] border-t border-black/5 flex justify-between items-center group-hover:bg-brand-red group-hover:text-white transition-all duration-300">
                Đăng ký tài sản PKG
                <span>→</span>
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- PRODUCT COVERAGE --- */}
      <section id="coverage" className="relative py-48 px-8 md:px-24 bg-industrial-gray text-white overflow-hidden">
        {/* Cinematic BG */}
        <div className="absolute inset-0 bg-noise opacity-10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-brand-red/[0.03] rounded-full blur-[180px]" />
        
        <div className="relative z-10">
          <SectionHeading subtitle="Bảo vệ hệ sinh thái" title="Các thành phần bảo hành" light />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
            {[
              { 
                icon: Cpu, 
                title: "Lõi điện tử", 
                desc: "Bảo vệ toàn diện phần mềm BMS, mạch điều khiển và mảng cảm biến đo lường chống lại các bất thường trong sản xuất.",
                tag: "Thiết yếu"
              },
              { 
                icon: Database, 
                title: "Tính toàn vẹn cấu trúc", 
                desc: "Vỏ ngoài, đầu nối và các giá gắn cấu trúc nội bộ được đảm bảo chống rạn nứt do áp lực vận hành.",
                tag: "Chính xác"
              },
              { 
                icon: RefreshCcw, 
                title: "Suy giảm hiệu suất", 
                desc: "Giám sát thông minh đảm bảo khả năng duy trì dung lượng nằm trong giới hạn suy giảm công nghiệp quy định.",
                tag: "Tin cậy"
              }
            ].map((box, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-12 bg-white/5 border border-white/10 hover:bg-white/[0.08] transition-all duration-700 relative overflow-hidden"
              >
                <box.icon className="w-10 h-10 text-brand-red mb-8 group-hover:scale-110 transition-transform duration-500" />
                <div className="text-[10px] uppercase tracking-[0.2em] font-mono text-white/30 mb-4">{box.tag}</div>
                <h3 className="text-2xl font-display mb-6">{box.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed mb-8">{box.desc}</p>
                <div className="pt-8 flex items-center justify-between border-t border-white/5 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-[9px] uppercase tracking-widest text-brand-red font-bold">Chi tiết</span>
                  <ChevronRight className="w-4 h-4 text-brand-red" />
                </div>
                {/* Decorative scanning line */}
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-brand-red scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-700" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- WARRANTY DURATION / PRECISION DASHBOARD --- */}
      <section id="duration" className="relative py-48 px-8 md:px-24">
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <SectionHeading subtitle="Bảo vệ thời gian" title="Thời hạn chính xác" />
            <div className="space-y-4 max-w-2xl">
              {[
                { label: "Doanh nghiệp tiêu chuẩn", value: "3 Năm", detail: "Cam kết thay thế linh kiện toàn diện." },
                { label: "Công nghiệp trọng yếu", value: "5 Năm", detail: "Thỏa thuận duy trì hiệu suất mở rộng." },
                { label: "Dự án tùy chỉnh", value: "Linh hoạt", detail: "Được thiết kế theo yêu cầu vòng đời cụ thể." }
              ].map((row, i) => (
                <div key={i} className="flex flex-col md:flex-row md:items-center justify-between py-8 border-b border-black/5 group cursor-default">
                  <div className="mb-4 md:mb-0">
                    <div className="text-[13px] font-bold tracking-tight uppercase group-hover:text-brand-red transition-colors">{row.label}</div>
                    <div className="text-[11px] text-industrial-gray/40 mt-1">{row.detail}</div>
                  </div>
                  <div className="text-4xl font-sans font-bold italic">{row.value}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-5 bg-industrial-gray text-white p-12 md:p-16 flex flex-col relative overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.15)]">
            <div className="absolute -top-1/4 -right-1/4 w-[300px] h-[300px] bg-brand-red/10 rounded-full blur-[100px] pointer-events-none" />
            
            <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/50 mb-12">Bảo vệ thời hạn công nghiệp</div>
            
            <div className="my-10">
              <span className="block text-[120px] font-bold leading-none warranty-display">
                10
              </span>
              <span className="block text-2xl font-sans text-brand-red tracking-widest uppercase mt-4">Năm</span>
            </div>

            <p className="text-sm opacity-80 leading-relaxed mb-12 max-w-sm">
              Một thập kỷ ổn định hiệu suất được đảm bảo. Bảo hành của chúng tôi bao quát mức độ suy giảm dưới 20%, đảm bảo ROI vòng đời tối đa cho hạ tầng của bạn.
            </p>
            
            <div className="mt-auto pt-10 border-t border-white/10 font-mono text-[11px] leading-loose text-white/40">
                Mục 4.1: Giao thức bảo trì kỹ thuật<br/>
                Mục 5.2: Đảm bảo sản lượng năng lượng<br/>
                Mục 9.0: Phản hồi sự cố ưu tiên
            </div>
          </div>
        </div>
      </section>

      {/* --- EXCLUSIONS & PROCESS / INFORMATION SYSTEM --- */}
      <section id="exclusions" className="py-32 px-8 md:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 gap-y-1 bg-black/5 border border-black/5">
          {/* Exclusions */}
          <div className="bg-white p-12 md:p-16">
            <div className="flex items-center gap-4 mb-12">
              <XCircle className="w-6 h-6 text-brand-red" />
              <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold">Trường hợp loại trừ</h3>
            </div>
            <ul className="space-y-6">
              {[
                "Sửa đổi trái phép vỏ vật lý hoặc niêm phong nhiệt nội bộ.",
                "Sử dụng ngoài phạm vi nhiệt độ vận hành môi trường quy định.",
                "Tích hợp với hạ tầng sạc của bên thứ ba không được chứng nhận.",
                "Tác động vật lý hoặc hư hỏng môi trường vượt quá xếp hạng IP67."
              ].map((text, i) => (
                <li key={i} className="flex gap-4 group">
                  <span className="font-mono text-[10px] text-industrial-gray/20 pt-1">0{i+1}</span>
                  <p className="text-sm text-industrial-gray/60 leading-relaxed group-hover:text-industrial-gray transition-colors">{text}</p>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Process */}
          <div id="process" className="bg-white p-12 md:p-16">
            <div className="flex items-center gap-4 mb-12">
              <CheckCircle2 className="w-6 h-6 text-green-500" />
              <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold">Quy trình kích hoạt</h3>
            </div>
            <div className="space-y-12">
              {[
                { step: "01", title: "Thu thập chẩn đoán", desc: "Gửi dữ liệu đo lường hoặc nhật ký chẩn đoán vật lý qua cổng bảo mật của chúng tôi." },
                { step: "02", title: "Xác minh kỹ thuật", desc: "Các kỹ sư phòng lab của chúng tôi xem xét nhật ký phần cứng trong vòng 12 giờ làm việc." },
                { step: "03", title: "Giao thức giải quyết", desc: "Ủy quyền ngay lập tức cho việc thay thế hoặc tân trang thiết bị tại chỗ." }
              ].map((p, i) => (
                <div key={i} className="relative pl-12">
                   <div className="absolute left-0 top-0 w-8 h-8 rounded-full border border-black/5 flex items-center justify-center font-mono text-xs text-black/20">{p.step}</div>
                   <h4 className="text-sm font-bold uppercase tracking-widest mb-2">{p.title}</h4>
                   <p className="text-xs text-industrial-gray/50 leading-relaxed font-light">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- FINAL CTA / CINEMATIC FINISH --- */}
      <section className="relative min-h-[80vh] flex items-center justify-center text-center px-8 overflow-hidden bg-industrial-gray">
        {/* Extreme cinematic bg */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/purity/1920/1080?blur=10" 
            className="w-full h-full object-cover opacity-20 scale-125 saturate-0" 
            alt="Finish"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-industrial-gray via-industrial-gray/80 to-industrial-gray/20" />
          <div className="absolute top-0 right-[-20%] w-[1000px] h-[1000px] bg-brand-red/[0.05] rounded-full blur-[200px]" />
        </div>

        <div className="relative z-10 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
             <div className="text-[10px] uppercase tracking-[0.5em] text-brand-red font-bold mb-8">Sẵn sàng triển khai</div>
             <h2 className="text-5xl md:text-8xl font-display font-light text-white tracking-tighter leading-none mb-12">
               SỨ MỆNH CỦA BẠN LÀ <br />
               <span className="font-bold">TRÁCH NHIỆM CỦA CHÚNG TÔI.</span>
             </h2>
             <p className="text-xl text-white/40 font-light max-w-2xl mx-auto mb-16 px-8">
               Tham gia mạng lưới các đối tác công nghiệp hàng đầu thế giới tin dùng sự chính xác của PKG.
             </p>
             
             <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                <button className="bg-brand-red text-white py-6 px-16 text-sm uppercase tracking-[0.2em] font-bold hover:bg-white hover:text-black transition-all duration-700 w-full md:w-auto">
                  Cổng đối tác
                </button>
                <button className="border border-white/20 text-white py-6 px-16 text-sm uppercase tracking-[0.2em] font-bold hover:bg-white hover:text-industrial-gray transition-all duration-700 w-full md:w-auto">
                  Tài liệu kỹ thuật
                </button>
             </div>
          </motion.div>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-12 opacity-20 hover:opacity-100 transition-opacity">
           {["ISO 9001", "CHỨNG NHẬN UL", "TUÂN THỦ CE", "REACH"].map(tag => (
             <span key={tag} className="text-[10px] font-mono tracking-widest text-white whitespace-nowrap">{tag}</span>
           ))}
        </div>
      </section>

      <footer className="py-12 px-8 md:px-24 bg-industrial-gray text-white/20 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-white/10 flex items-center justify-center font-display font-bold text-white text-[10px]">P</div>
          <span className="text-[10px] uppercase tracking-widest">© 2026 GIẢI PHÁP CÔNG NGHIỆP PKG. TẤT CẢ QUYỀN ĐƯỢC BẢO LƯU.</span>
        </div>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white transition-colors text-[10px] uppercase tracking-widest font-bold">Riêng tư</a>
          <a href="#" className="hover:text-white transition-colors text-[10px] uppercase tracking-widest font-bold">Điều khoản</a>
          <a href="#" className="hover:text-white transition-colors text-[10px] uppercase tracking-widest font-bold">Cookies</a>
        </div>
      </footer>
    </div>
  );
}
