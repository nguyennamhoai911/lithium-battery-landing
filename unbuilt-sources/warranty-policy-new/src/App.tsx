/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useSpring, AnimatePresence } from 'motion/react';
import { 
  ShieldCheck, 
  Zap, 
  Settings, 
  Clock, 
  Truck, 
  Trophy, 
  CheckCircle2, 
  XCircle, 
  ChevronDown, 
  ArrowRight, 
  PhoneCall, 
  Mail, 
  Battery, 
  Factory, 
  Cpu, 
  ZapIcon,
  HelpCircle,
  Menu,
  ChevronRight
} from 'lucide-react';
import { useState, useEffect } from 'react';

// --- Types ---
interface AccordionItemProps {
  question: string;
  answer: string;
}

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-white/90 backdrop-blur-sm border-b border-pkg-silver py-4' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-10 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <div className="w-3 h-3 bg-pkg-red"></div>
          <span className="font-sans font-black text-xl tracking-tighter">PKG BATTERY</span>
        </div>
        
        <div className="hidden md:flex space-x-12 items-center">
          {['Sản phẩm', 'Chính sách', 'Quy trình', 'Hỗ trợ'].map((item) => (
            <a key={item} href={`#${item}`} className="text-xs font-bold uppercase tracking-widest text-pkg-gray hover:text-pkg-red transition-colors duration-300">
              {item}
            </a>
          ))}
          <button className="bg-pkg-red text-white px-8 py-3 text-xs font-bold uppercase tracking-widest hover:bg-black transition-all duration-300 shadow-sm">
            Yêu cầu hỗ trợ
          </button>
        </div>

        <button className="md:hidden">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </nav>
  );
};

const SectionTitle = ({ eyebrow, title, description, dark = false }: { eyebrow?: string, title: string, description?: string, dark?: boolean }) => (
  <div className="mb-20">
    {eyebrow && (
      <motion.span 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="block text-pkg-red font-sans font-bold text-[11px] uppercase tracking-[0.2em] mb-4"
      >
        {eyebrow}
      </motion.span>
    )}
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`text-4xl md:text-5xl font-sans font-extrabold tracking-[-0.03em] mb-8 leading-[1.1] ${dark ? 'text-white' : 'text-pkg-black'}`}
    >
      {title}
    </motion.h2>
    {description && (
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className={`text-base md:text-lg max-w-xl leading-relaxed ${dark ? 'text-gray-400' : 'text-pkg-gray'}`}
      >
        {description}
      </motion.p>
    )}
  </div>
);

const AccordionItem = ({ question, answer }: AccordionItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-pkg-silver last:border-0 overflow-hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full py-8 text-left group"
      >
        <span className="text-lg font-sans font-bold text-pkg-black group-hover:text-pkg-red transition-colors duration-300 pr-8">{question}</span>
        <div className={`transition-transform duration-500 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`}>
          <ChevronDown className={`w-5 h-5 ${isOpen ? 'text-pkg-red' : 'text-pkg-gray'}`} />
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <div className="pb-10 text-pkg-gray leading-relaxed max-w-3xl text-sm md:text-base">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen selection:bg-pkg-red selection:text-white relative">
      <div className="fixed inset-0 grid-overlay opacity-30 pointer-events-none z-0" />
      <div className="fixed bottom-10 right-0 w-[400px] h-[400px] industrial-gradient border border-black/5 -rotate-6 pointer-events-none z-0" />

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-pkg-red z-[60] origin-left"
        style={{ scaleX }}
      />

      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-24 overflow-hidden z-10">
        <div className="max-w-7xl mx-auto px-10 grid md:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block text-pkg-red text-[11px] font-bold tracking-[0.2em] uppercase mb-8">
              Bảo vệ khoản đầu tư năng lượng của bạn
            </span>
            <h1 className="text-5xl md:text-7xl font-sans font-extrabold tracking-[-0.04em] text-pkg-black leading-[1.05] mb-10">
              Chính Sách <br /> 
              Bảo Hành Minh Bạch.<br />
              <span className="text-pkg-red">Cam Kết Dài Hạn.</span>
            </h1>
            <p className="text-lg text-pkg-gray leading-relaxed mb-12 max-w-lg text-balance font-medium">
              PKG Battery đồng hành cùng doanh nghiệp với chính sách bảo hành rõ ràng, nhanh chóng và tiêu chuẩn kỹ thuật cao cấp cho mọi hệ thống pin lithium công nghiệp.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-pkg-red text-white px-10 py-5 font-bold uppercase tracking-widest text-sm hover:bg-pkg-black transition-all duration-300">
                Yêu cầu hỗ trợ bảo hành
              </button>
              <button className="bg-transparent border border-pkg-silver text-pkg-black px-10 py-5 font-bold uppercase tracking-widest text-sm hover:bg-pkg-silver transition-all duration-300">
                Gửi yêu cầu hỗ trợ
              </button>
            </div>

            <div className="mt-20 flex flex-wrap gap-10 border-t border-pkg-silver pt-10">
              {[
                "Hỗ trợ toàn quốc",
                "Linh kiện chính hãng",
                "Kỹ thuật chuyên sâu",
                "Phản hồi 2h"
              ].map((text, i) => (
                <div key={i} className="flex items-center space-x-2">
                  <div className="w-5 h-[1px] bg-pkg-red" />
                  <span className="text-[10px] font-bold text-pkg-gray uppercase tracking-widest">{text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative hidden md:block"
          >
            <div className="relative z-10 w-full h-[650px] bg-white border border-pkg-silver p-4 shadow-sm group">
              <div className="w-full h-full bg-pkg-offwhite relative overflow-hidden flex items-center justify-center">
                <img 
                  src="https://picsum.photos/seed/industrial-battery-glass/1200/1200" 
                  alt="PKG High-End Battery" 
                  className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-multiply transition-all duration-1000"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-8 right-8 font-mono text-[11px] text-pkg-silver tracking-widest uppercase">PKG-PRM-2026</div>
                <div className="relative z-20 text-center">
                  <div className="inline-block p-6 mb-8 border border-pkg-silver bg-white/50 backdrop-blur-md">
                     <Battery className="w-16 h-16 text-pkg-red" />
                  </div>
                  <h3 className="text-pkg-black font-sans font-black text-4xl uppercase tracking-tighter">LITHIUM GOLD</h3>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-32 bg-white relative z-10 border-y border-pkg-silver">
        <div className="max-w-7xl mx-auto px-10">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <h2 className="text-3xl md:text-5xl font-sans font-extrabold tracking-tight leading-[1.1] text-balance">
              Sự an tâm không đến <br />từ lời hứa. <br />
              <span className="text-pkg-red">Đến từ chính sách rõ ràng.</span>
            </h2>
            <div className="space-y-8">
              <p className="text-xl text-pkg-gray leading-relaxed font-medium">
                Chúng tôi hiểu rằng khách hàng doanh nghiệp cần hơn một sản phẩm tốt — đó là sự ổn định dài hạn, chi phí vận hành tối ưu và đơn vị đồng hành đáng tin cậy. Vì vậy PKG xây dựng chính sách bảo hành minh bạch.
              </p>
              <div className="w-12 h-1 bg-pkg-red" />
            </div>
          </div>
        </div>
      </section>

      {/* Product Coverage Section */}
      <section id="Sản phẩm" className="py-32 bg-pkg-offwhite relative z-10">
        <div className="max-w-7xl mx-auto px-10">
          <SectionTitle 
            eyebrow="Products"
            title="Danh mục sản phẩm áp dụng bảo hành"
            description="Tất cả các dòng pin Lithium-ion của PKG đều được áp dụng chính sách bảo hành cao cấp với những cam kết cụ thể."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { 
                title: "Xe Nâng Điện", 
                desc: "Dòng pin lithium hiệu suất cao cho vận hành 3 ca liên tục.",
                time: "05 NĂM / 10.000h",
                num: "01"
              },
              { 
                title: "Xe Golf & Du Lịch", 
                desc: "Năng lượng ổn định cho các khu nghỉ dưỡng và sân golf cao cấp.",
                time: "05 NĂM HỆ THỐNG",
                num: "02"
              },
              { 
                title: "Pin AGV / Robot", 
                desc: "Giải pháp năng lượng thông minh cho hệ thống tự động hoá.",
                time: "36 THÁNG TIÊU CHUẨN",
                num: "03"
              },
              { 
                title: "Bộ Sạc - Trạm Sạc", 
                desc: "Thiết bị sạc tối ưu hiệu năng, bảo vệ và tăng tuổi thọ pin.",
                time: "24-36 THÁNG",
                num: "04"
              },
              { 
                title: "Hệ Thống ESS", 
                desc: "Giải pháp lưu trữ điện mặt trời và dự phòng cho nhà máy.",
                time: "10 NĂM TIÊU CHUẨN",
                num: "05"
              }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white border border-pkg-silver p-10 relative flex flex-col justify-between min-h-[320px] group transition-all duration-500 hover:border-pkg-red"
              >
                <div className="absolute top-8 right-8 font-mono text-[10px] text-pkg-silver tracking-widest font-bold">{item.num}</div>
                <div>
                  <h3 className="text-xl font-sans font-extrabold text-pkg-black mb-4 group-hover:text-pkg-red transition-colors duration-300">{item.title}</h3>
                  <p className="text-sm text-pkg-gray leading-relaxed font-medium mb-10">{item.desc}</p>
                </div>
                <div>
                   <div className="text-2xl font-sans font-black text-pkg-red tracking-tight leading-none">{item.time}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Warranty Details */}
      <section className="py-32 bg-white relative z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-10">
          <div className="grid lg:grid-cols-2 gap-24 items-start">
            <div className="sticky top-40">
              <SectionTitle 
                eyebrow="Standards"
                title="Hạng mục được <br />đảm bảo tuyệt đối"
                description="Chúng tôi cam kết chất lượng thông qua các tiêu chí kỹ thuật rõ ràng được quy định trong hợp đồng bảo hành."
              />
              <div className="space-y-6">
                {[
                  "Lỗi vật liệu sản xuất từ nhà máy",
                  "Lỗi phần mềm & hệ thống điều khiển BMS",
                  "Hiệu suất suy giảm ngoài tiêu chuẩn cho phép",
                  "Lỗi linh kiện điện tử trong hệ thống sạc"
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-6 pb-6 border-b border-pkg-silver last:border-0 group">
                    <div className="w-1.5 h-1.5 bg-pkg-red shrink-0" />
                    <span className="text-lg font-sans font-bold text-pkg-black group-hover:translate-x-3 transition-transform duration-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-pkg-black p-12 md:p-16 relative group">
              <div className="absolute top-12 right-12 opacity-10">
                <XCircle className="w-20 h-20 text-white" />
              </div>
              <h3 className="text-3xl font-sans font-extrabold text-white mb-10 tracking-tight">Hạn Chế Bảo Hành</h3>
              <p className="text-pkg-gray mb-12 leading-relaxed font-medium">
                Các trường hợp do yếu tố khách quan hoặc lỗi vận hành không đúng kỹ thuật sẽ không thuộc phạm vi bảo hành.
              </p>
              <div className="space-y-8">
                {[
                  "Sử dụng sai hướng dẫn kỹ thuật hoặc quá tải",
                  "Tự ý can thiệp, tháo mở hoặc sửa chữa bên ngoài",
                  "Va đập, cháy nổ, ngập nước do tác động ngoại lực",
                  "Mất tem niêm phong hoặc serial number"
                ].map((item, i) => (
                   <div key={i} className="flex space-x-6 items-start">
                    <div className="w-8 h-[1px] bg-pkg-red mt-3.5 shrink-0" />
                    <span className="text-sm font-bold uppercase tracking-widest text-white/70 leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-16 pt-10 border-t border-white/10">
                <button className="text-pkg-red font-bold text-sm uppercase tracking-widest hover:text-white transition-colors duration-300 flex items-center gap-3">
                  <span>Tải đầy đủ điều khoản</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Claim Process Black Strip */}
      <section id="Quy trình" className="py-32 bg-pkg-offwhite relative z-10">
        <div className="max-w-7xl mx-auto px-10">
          <SectionTitle 
            eyebrow="Flow"
            title="Quy trình tiếp nhận bảo hành"
            description="Tối ưu thời gian chờ đợi của doanh nghiệp thông qua quy trình 4 bước tinh gọn."
          />

          <div className="bg-pkg-black text-white p-12 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-12 group">
              {[
                { step: "01", label: "Liên hệ hỗ trợ" },
                { step: "02", label: "Xác minh dữ liệu" },
                { step: "03", label: "Chẩn đoán kỹ thuật" },
                { step: "04", label: "Xử lý thay thế" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-12 w-full lg:w-auto">
                  <div className="flex items-center gap-6">
                    <div className="w-10 h-10 border border-white/20 flex items-center justify-center font-sans font-black text-sm">
                      {item.step}
                    </div>
                    <div className="text-xs font-bold uppercase tracking-widest leading-none">
                      {item.label}
                    </div>
                  </div>
                  {i < 3 && <div className="hidden lg:block text-white/20 font-sans text-2xl group-hover:text-pkg-red transition-colors duration-500">→</div>}
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* FAQ Dashboard Style */}
      <section id="Hỗ trợ" className="py-32 bg-white relative z-10">
        <div className="max-w-7xl mx-auto px-10">
          <div className="grid lg:grid-cols-2 gap-24">
            <div>
              <SectionTitle 
                eyebrow="Support"
                title="Giải đáp thắc mắc thường gặp"
              />
              <div className="mt-12">
                 <p className="text-xs font-bold uppercase tracking-[0.2em] text-pkg-gray mb-2">Hotline 24/7</p>
                 <p className="text-4xl font-sans font-black text-pkg-black">1900 888 999</p>
                 <button className="mt-10 bg-pkg-red text-white px-10 py-5 font-bold uppercase tracking-widest text-sm hover:bg-pkg-black transition-all duration-300">
                   Gửi câu hỏi trực tuyến
                 </button>
              </div>
            </div>
            
            <div className="divide-y divide-pkg-silver border-t border-pkg-silver">
              <AccordionItem 
                question="Tôi cần chuẩn bị gì khi yêu cầu bảo hành?" 
                answer="Vui lòng cung cấp model sản phẩm, serial number, hóa đơn hoặc thông tin mua hàng. Đội ngũ kỹ thuật sẽ xác minh dựa trên dữ liệu hệ thống." 
              />
              <AccordionItem 
                question="Mất hoá đơn có được hỗ trợ không?" 
                answer="PKG Battery hỗ trợ truy xuất theo Serial in trên thân pin. Nếu khớp lịch sử dữ liệu, khách hàng vẫn được hưởng đầy đủ quyền lợi bảo hành." 
              />
              <AccordionItem 
                question="Bao lâu thì xử lý xong sự cố?" 
                answer="Thời gian phản hồi kỹ thuật trong 2 giờ. Việc thay thế linh kiện hoặc đổi mới sản phẩm thường hoàn tất trong 48 - 72 giờ làm việc." 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Industrial */}
      <section className="py-40 bg-pkg-black relative z-10 overflow-hidden text-center">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
           <img src="https://picsum.photos/seed/industrial-footer/1920/1080" className="w-full h-full object-cover filter grayscale" referrerPolicy="no-referrer" />
        </div>
        <div className="max-w-4xl mx-auto px-10 relative z-10">
          <h2 className="text-5xl md:text-7xl font-sans font-extrabold text-white mb-10 tracking-[-0.03em] leading-tight">
             Năng Lượng Bền Vững. <br />
             <span className="text-pkg-red">Đồng Hành Tuyệt Đối.</span>
          </h2>
          <p className="text-xl text-white/50 mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
            Chọn PKG Battery - Chọn người đồng hành sẵn sàng chịu trách nhiệm dài hạn nhất cho hệ thống kho bãi của bạn.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-pkg-red text-white px-12 py-5 font-bold uppercase tracking-widest text-sm hover:bg-white hover:text-pkg-black transition-all duration-300">
               Liên hệ bảo hành ngay
            </button>
            <button className="bg-transparent border border-white/20 text-white px-12 py-5 font-bold uppercase tracking-widest text-sm hover:border-white transition-all duration-300">
               Tìm hiểu thêm sản phẩm
            </button>
          </div>
        </div>
      </section>

      {/* Footer Industrial Mininal */}
      <footer className="bg-pkg-black border-t border-white/5 py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-10">
          <div className="grid md:grid-cols-4 gap-20 border-b border-white/5 pb-20 mb-10">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-10">
                <div className="w-4 h-4 bg-pkg-red"></div>
                <span className="font-sans font-black text-2xl tracking-tighter text-white">PKG BATTERY</span>
              </div>
              <p className="text-pkg-gray text-base leading-relaxed max-w-sm font-medium">
                Giải pháp pin lithium và năng lượng công nghiệp hiệu suất cao. Sẵn sàng phục vụ chuỗi cung ứng toàn cầu.
              </p>
            </div>
            
            <div>
              <h5 className="text-white font-bold text-[11px] uppercase tracking-widest mb-10">Hỗ trợ nhanh</h5>
              <div className="space-y-6 text-sm font-bold uppercase tracking-widest text-pkg-gray">
                 <div className="hover:text-pkg-red cursor-pointer">Tra cứu bảo hành</div>
                 <div className="hover:text-pkg-red cursor-pointer">Tài liệu kỹ thuật</div>
                 <div className="hover:text-pkg-red cursor-pointer">Mạng lưới dịch vụ</div>
              </div>
            </div>

            <div>
              <h5 className="text-white font-bold text-[11px] uppercase tracking-widest mb-10">Văn phòng</h5>
              <p className="text-sm font-medium text-pkg-gray leading-loose italic">
                Cụm công nghiệp công nghệ cao <br />
                Đông Nam Á, Việt Nam
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center text-[10px] font-bold text-white/30 tracking-[0.3em] uppercase gap-8">
            <div className="flex space-x-12">
              <span>© 2026 PKG CORP</span>
              <span>All rights reserved</span>
            </div>
            <div className="flex space-x-12">
               <span className="hover:text-pkg-red cursor-pointer">Privacy</span>
               <span className="hover:text-pkg-red cursor-pointer">Security</span>
               <span className="hover:text-pkg-red cursor-pointer">Legal</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
