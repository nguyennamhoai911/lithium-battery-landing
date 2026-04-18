import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShieldCheck, 
  Zap, 
  Clock, 
  Settings, 
  Truck, 
  Headphones, 
  ArrowRight, 
  CheckCircle2, 
  XCircle, 
  ChevronDown, 
  Info,
  Layers,
  Car,
  Bot,
  BatteryCharging,
  Database,
  PhoneCall,
  Mail
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'py-4 premium-blur shadow-sm' : 'py-8 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-10 h-10 bg-brand-red flex items-center justify-center rounded-sm transition-transform group-hover:scale-110">
            <Zap className="text-white w-6 h-6 fill-current" />
          </div>
          <span className="font-display font-black text-2xl tracking-tighter">PKG<span className="text-brand-red">BATTERY</span></span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          {['Sản phẩm', 'Giải pháp', 'Công nghệ', 'Bảo hành'].map((item) => (
            <a key={item} href={`#${item}`} className="text-sm font-medium hover:text-brand-red transition-colors">
              {item}
            </a>
          ))}
          <button className="bg-brand-black text-white text-sm font-bold px-6 py-2 rounded-sm hover:bg-brand-red transition-all transform hover:-translate-y-1 active:scale-95">
            LIÊN HỆ
          </button>
        </div>
      </div>
    </nav>
  );
};

const SectionHeader = ({ eyebrow, title, light = false }: { eyebrow: string; title: string; light?: boolean }) => (
  <div className="mb-16">
    <motion.span 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`block text-[10px] font-bold tracking-[0.3em] uppercase mb-4 ${light ? 'text-white/60' : 'text-brand-red'}`}
    >
      {eyebrow}
    </motion.span>
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      className={`text-4xl md:text-5xl font-display max-w-2xl leading-[1.1] ${light ? 'text-white' : 'text-brand-black'}`}
    >
      {title}
    </motion.h2>
  </div>
);

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white">
      {/* Background visual element */}
      <div className="absolute right-[-10%] top-[10%] w-[60%] h-[80%] opacity-10 pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.05, 1],
            rotate: [0, 1, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        >
          <Database className="w-full h-full text-brand-black" strokeWidth={0.5} />
        </motion.div>
      </div>

      <div className="section-container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block text-xs font-bold tracking-[0.2em] mb-6 text-brand-red">
            PKG BATTERY WARRANTY SYSTEM
          </span>
          <h1 className="text-6xl md:text-8xl font-display font-black leading-[0.9] tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-br from-brand-black to-gray-500">
            Không Chỉ Bán Pin.<br />
            <span className="text-brand-black">Chúng Tôi Bảo Chứng Cho Vận Hành Của Bạn.</span>
          </h1>
          <p className="text-xl text-gray-500 max-w-lg mb-12 font-light leading-relaxed">
            Chính sách bảo hành của PKG được xây dựng cho môi trường vận hành thực tế: rõ ràng, nhanh chóng và đủ năng lực xử lý khi doanh nghiệp cần nhất.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-brand-red text-white font-bold px-8 py-4 rounded-sm flex items-center gap-2 group transition-all hover:pr-10 hover:shadow-xl hover:shadow-brand-red/20 active:scale-95">
              Xem phạm vi bảo hành
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
            </button>
            <button className="border-2 border-brand-black text-brand-black font-bold px-8 py-4 rounded-sm hover:bg-brand-black hover:text-white transition-all active:scale-95">
              Gửi yêu cầu hỗ trợ
            </button>
          </div>

          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-gray-100 pt-10">
            {[
              { label: 'Hỗ trợ toàn quốc', icon: Truck },
              { label: 'Đội ngũ chuyên sâu', icon: Headphones },
              { label: 'Quy trình minh bạch', icon: ShieldCheck },
              { label: 'Đồng hành dài hạn', icon: Clock }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col gap-2">
                <item.icon className="w-5 h-5 text-gray-400" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">{item.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="relative aspect-square lg:aspect-auto h-full min-h-[500px]"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="absolute inset-0 bg-brand-gray-light rounded-sm flex items-center justify-center overflow-hidden">
            {/* Animated Battery System Render Shell */}
            <div className="relative w-72 h-96 bg-brand-black rounded-2xl shadow-2xl border-4 border-gray-800 flex flex-col p-6 overflow-hidden">
              <div className="flex justify-between items-center mb-8">
                <div className="flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-brand-red animate-pulse"></div>
                  <div className="w-2 h-2 rounded-full bg-gray-600"></div>
                </div>
                <Zap className="text-brand-red w-4 h-4" />
              </div>
              <div className="flex-1 flex flex-col gap-4">
                {[...Array(6)].map((_, i) => (
                  <motion.div 
                    key={i} 
                    className="h-8 bg-gray-800 rounded-sm overflow-hidden"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ delay: i * 0.1 + 1, duration: 1 }}
                  >
                    <motion.div 
                      className="h-full bg-brand-red/20 border-r-4 border-brand-red"
                      animate={{ x: ["-100%", "100%"] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    />
                  </motion.div>
                ))}
              </div>
              <div className="mt-8 flex justify-between items-end">
                <div className="text-[8px] text-gray-500 font-mono tracking-tighter uppercase">PKG-LITHIUM<br />SERIES X</div>
                <div className="text-3xl font-display font-black text-white italic">98%</div>
              </div>
            </div>
            {/* Decorative energy lines */}
            <div className="absolute inset-0 pointer-events-none opacity-20">
               <svg width="100%" height="100%" viewBox="0 0 400 600" fill="none" className="w-full h-full">
                  <motion.path 
                    d="M100 100 L300 100 L300 500 L100 500 Z" 
                    stroke="var(--color-brand-red)" 
                    strokeWidth="1"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 5, repeat: Infinity }}
                  />
                  <motion.path 
                    d="M50 200 L350 200" 
                    stroke="var(--color-brand-red)" 
                    strokeWidth="0.5"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                  />
               </svg>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const TrustStory = () => {
  return (
    <section className="bg-brand-black text-white py-32 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-brand-red/5 to-transparent"></div>
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <SectionHeader 
              eyebrow="NĂNG LỰC PHẢN ỨNG" 
              title="Khi hệ thống dừng lại, chi phí không tính bằng phút." 
              light 
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6 text-white/70 text-lg font-light leading-relaxed max-w-xl"
            >
              <p>
                Một bộ pin gặp sự cố có thể kéo theo đình trệ kho vận, gián đoạn dây chuyền hoặc chậm tiến độ giao hàng. Vì vậy bảo hành không nên chỉ là vài dòng cam kết. Nó phải là năng lực phản ứng thực tế.
              </p>
              <p className="text-white">
                PKG xây dựng dịch vụ hậu mãi xoay quanh tốc độ xử lý, chuyên môn kỹ thuật và trách nhiệm rõ ràng.
              </p>
            </motion.div>
          </div>
          <div className="grid grid-cols-2 gap-4">
             {[
               { val: "24h", label: "Phản hồi tối đa" },
               { val: "100%", label: "Linh kiện sẵn có" },
               { val: "5-10Y", label: "Thời hạn cam kết" },
               { val: "Expert", label: "Service Team" }
             ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/5 border border-white/10 p-10 rounded-sm text-center flex flex-col justify-center gap-2 hover:bg-white/10 transition-colors"
                >
                  <span className="text-4xl font-black text-white font-display italic tracking-tighter">{item.val}</span>
                  <span className="text-[10px] font-bold text-white/50 uppercase tracking-widest">{item.label}</span>
                </motion.div>
             ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ProductCoverage = () => {
  const products = [
    { title: "Pin Lithium Cho Xe Nâng Điện", desc: "Hiệu suất cao cho vận hành nhiều ca, cường độ lớn, kho bãi hiện đại.", icon: Layers },
    { title: "Pin Lithium Cho Xe Điện Du Lịch", desc: "Ổn định, sạc nhanh, phù hợp resort, sân golf, khu đô thị và nội khu.", icon: Car },
    { title: "Pin AGV / Robot", desc: "Nguồn năng lượng thông minh cho tự động hóa liên tục 24/7.", icon: Bot },
    { title: "Bộ Sạc / Trạm Sạc", desc: "Sạc tối ưu tuổi thọ pin, an toàn và quản lý thông minh.", icon: BatteryCharging },
    { title: "ESS Energy Storage System", desc: "Lưu trữ điện cho doanh nghiệp, solar hybrid và backup power.", icon: Database }
  ];

  return (
    <section id="Sản phẩm" className="bg-brand-gray-light py-32">
      <div className="section-container">
        <SectionHeader eyebrow="HỆ SINH THÁI NĂNG LƯỢNG" title="Áp dụng cho toàn bộ dự án PKG" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white p-10 rounded-sm shadow-sm hover:shadow-2xl transition-all group border border-transparent hover:border-brand-red/20"
            >
              <div className="w-12 h-12 bg-brand-gray-light rounded-sm flex items-center justify-center mb-8 group-hover:bg-brand-red transition-colors">
                <item.icon className="w-6 h-6 text-brand-red group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WarrantyDuration = () => {
  const durations = [
    { app: "Xe nâng điện", duration: "05 năm hoặc 10.000 giờ hoạt động" },
    { app: "Xe điện du lịch", duration: "đến 05 năm tùy cấu hình" },
    { app: "AGV / Robot", duration: "đến 36 tháng" },
    { app: "Bộ sạc / Trạm sạc", duration: "đến 36 tháng" },
    { app: "ESS System", duration: "05 đến 10 năm tùy dự án" }
  ];

  return (
    <section className="bg-white py-32 border-b border-gray-100">
      <div className="section-container">
        <SectionHeader 
          eyebrow="CAM KẾT DÀI HẠN" 
          title="Thiết kế theo ứng dụng thực tế." 
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-4">
             {durations.map((item, idx) => (
               <motion.div 
                 key={idx}
                 initial={{ opacity: 0, x: -20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: idx * 0.1 }}
                 className="flex items-center justify-between p-6 border-b border-gray-100 hover:bg-brand-gray-light transition-colors rounded-sm"
               >
                 <span className="font-bold">{item.app}</span>
                 <span className="text-brand-red font-display font-medium">{item.duration}</span>
               </motion.div>
             ))}
             <p className="text-[10px] text-gray-400 mt-8 italic">
               * Thông số cụ thể phụ thuộc model, môi trường sử dụng và điều khoản hợp đồng.
             </p>
          </div>
          <div className="bg-brand-black text-white p-12 rounded-sm relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8">
              <ShieldCheck className="w-16 h-16 text-brand-red opacity-20 group-hover:scale-125 transition-transform duration-700" />
            </div>
            <h4 className="text-2xl mb-6 font-display italic tracking-tighter">Bảo hành là sự đồng hành.</h4>
            <p className="text-white/60 mb-8 font-light leading-relaxed">
              Mỗi hệ thống có cường độ sử dụng khác nhau. Vì vậy thời hạn bảo hành được thiết kế dựa trên vận hành thực tế, không phải con số marketing. Chúng tôi đảm bảo bộ pin luôn sẵn sàng phục vụ sản xuất.
            </p>
            <div className="flex gap-2">
              <div className="h-1 w-12 bg-brand-red"></div>
              <div className="h-1 w-4 bg-white/20"></div>
              <div className="h-1 w-4 bg-white/20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const WhatIsCovered = () => {
  const covered = [
    "Lỗi phát sinh từ quá trình sản xuất",
    "Linh kiện không đạt chuẩn kỹ thuật",
    "BMS hoặc hệ điều khiển lỗi chức năng",
    "Hiệu suất suy giảm bất thường",
    "Thiết bị sạc vận hành lỗi",
    "Kiểm tra, chẩn đoán tận nơi"
  ];

  const exclusions = [
    "Sử dụng sai hướng dẫn kỹ thuật",
    "Tự ý tháo mở hoặc sửa chữa trái phép",
    "Dùng sai bộ sạc / nguồn điện",
    "Va đập, rơi vỡ, ngập nước",
    "Hao mòn tự nhiên ngoài ngưỡng",
    "Mất serial hoặc tem nhận diện"
  ];

  return (
    <section id="Bảo hành" className="py-0 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Coverage */}
        <div className="bg-white py-32 px-6 md:px-12 flex flex-col items-center lg:items-end">
          <div className="max-w-xl w-full">
            <SectionHeader eyebrow="PHẠM VI TRÁCH NHIỆM" title="Nhóm được chấp nhận bảo hành" />
            <div className="space-y-4">
              {covered.map((text, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 hover:bg-brand-gray-light transition-all rounded-sm">
                  <CheckCircle2 className="w-5 h-5 text-brand-red shrink-0 mt-1" />
                  <span className="text-gray-700">{text}</span>
                </div>
              ))}
            </div>
            <div className="mt-12 p-8 border-l-4 border-brand-red bg-brand-gray-light italic text-gray-500">
              "Chúng tôi không né tránh trách nhiệm bằng ngôn ngữ phức tạp."
            </div>
          </div>
        </div>

        {/* Exclusions */}
        <div className="bg-brand-black py-32 px-6 md:px-12 flex flex-col items-center lg:items-start text-white">
          <div className="max-w-xl w-full">
            <SectionHeader eyebrow="GIỚI HẠN PHẠM VI" title="Các trường hợp nằm ngoài bảo hành" light />
            <div className="space-y-4">
              {exclusions.map((text, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 hover:bg-white/5 transition-all rounded-sm">
                  <XCircle className="w-5 h-5 text-gray-500 shrink-0 mt-1" />
                  <span className="text-white/70">{text}</span>
                </div>
              ))}
            </div>
            <div className="mt-12 flex items-center gap-4 text-white/40 text-xs">
              <Info className="w-4 h-4" />
              <span>Minh bạch từ đầu giúp hai bên xử lý nhanh và công bằng.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ClaimProcess = () => {
  const steps = [
    { title: "Tiếp nhận yêu cầu", desc: "Hotline, email hoặc form website." },
    { title: "Xác minh thông tin", desc: "Model, serial, lịch sử mua hàng, tình trạng lỗi." },
    { title: "Chẩn đoán kỹ thuật", desc: "Remote support hoặc kiểm tra trực tiếp." },
    { title: "Xử lý bảo hành", desc: "Sửa chữa, thay thế hoặc đổi tương đương." },
    { title: "Bàn giao & theo dõi", desc: "Đảm bảo hệ tương lai ổn định." }
  ];

  return (
    <section className="bg-white py-32">
      <div className="section-container">
        <SectionHeader eyebrow="QUY TRÌNH TINH GỌN" title="Xử lý nhanh, giảm thời gian chờ" />
        <div className="relative">
          {/* Vertical line for desktop */}
          <div className="absolute left-[39px] top-0 bottom-0 w-[2px] bg-gray-100 hidden md:block"></div>
          
          <div className="space-y-12">
            {steps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col md:flex-row gap-8 relative z-10"
              >
                <div className="w-20 h-20 bg-brand-black text-white rounded-sm flex items-center justify-center font-display font-black text-2xl shrink-0 group hover:bg-brand-red transition-all shadow-lg">
                  0{idx + 1}
                </div>
                <div className="md:pt-4">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-brand-red transition-colors uppercase tracking-tight">{step.title}</h3>
                  <p className="text-gray-500 max-w-md">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="mt-20 border-t border-gray-100 pt-10 text-center">
            <p className="text-xl font-display font-light italic text-gray-400">
               "Một quy trình tốt không chỉ sửa lỗi. Nó giúp doanh nghiệp quay lại vận hành nhanh nhất."
            </p>
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    { q: "Tôi cần gì để yêu cầu bảo hành?", a: "Bạn cần cung cấp Serial sản phẩm, thông tin mua hàng (hợp đồng/hóa đơn) và mô tả/hình ảnh hiện trạng lỗi." },
    { q: "Mất hóa đơn có hỗ trợ không?", a: "PKG có hệ thống quản lý dữ liệu số. Chúng tôi có thể đối chiếu theo số Serial để kiểm tra lịch sử mua hàng và thời hạn bảo hành nếu khả dụng." },
    { q: "Bao lâu xử lý xong?", a: "Tùy mức độ sự cố. Phản hồi chẩn đoán ban đầu trong 24h. Xử lý sửa chữa thường từ 3–10 ngày làm việc." },
    { q: "Có hỗ trợ tận nơi?", a: "Có, PKG hỗ trợ kiểm tra tận nơi cho các hệ thống lớn hoặc các dự án tại các khu công nghiệp trọng điểm theo điều khoản hợp đồng." },
    { q: "Pin giảm dung lượng có được bảo hành?", a: "Phụ thuộc vào mức độ suy giảm. Nếu dung lượng giảm dưới ngưỡng cam kết (ví dụ <75%) trong thời gian bảo hành với điều kiện sử dụng bình thường, PKG sẽ có phương án xử lý." }
  ];

  return (
    <section className="bg-brand-gray-light py-32">
      <div className="section-container max-w-4xl">
        <SectionHeader eyebrow="GIẢI ĐÁP" title="Câu hỏi thường gặp" />
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white rounded-sm overflow-hidden shadow-sm">
              <button 
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full flex justify-between items-center p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-bold">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${openIdx === idx ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {openIdx === idx && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-gray-500 text-sm leading-relaxed bg-white border-t border-gray-50">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FinalCTA = () => {
  return (
    <section className="relative h-[600px] flex items-center justify-center text-white overflow-hidden bg-brand-black">
      {/* Animated Background Pulse */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute inset-0 bg-brand-red rounded-full blur-[150px] -translate-y-1/2"
        />
      </div>

      <div className="section-container relative z-10 text-center">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
        >
          <span className="text-[10px] font-bold tracking-[0.4em] mb-8 block text-brand-red">CHỌN SỰ ĐỒNG HÀNH</span>
          <h2 className="text-5xl md:text-7xl font-display font-black mb-8 leading-none tracking-tighter">
            Chọn Nhà Cung Cấp Hôm Nay.<br />
            Phát Triển Bền Vững Trong Tương Lai.
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto mb-12 font-light">
            Đầu tư hệ thống pin là quyết định tài chính. Chọn đơn vị đứng sau bảo hành là quyết định chiến lược. Hãy để PKG bảo vệ dòng tiền và vận hành của bạn.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
             <button className="bg-brand-red text-white font-bold px-12 py-5 rounded-sm text-lg hover:shadow-2xl hover:shadow-brand-red/40 transition-all hover:-translate-y-1 active:scale-95">
               Yêu cầu tư vấn ngay
             </button>
             <button className="border-2 border-white/20 hover:border-white text-white font-bold px-12 py-5 rounded-sm text-lg transition-all active:scale-95">
               Liên hệ đội ngũ PKG
             </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-brand-black text-white pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
        <div>
          <div className="flex items-center gap-2 mb-8">
            <Zap className="text-brand-red w-6 h-6 fill-current" />
            <span className="font-display font-black text-2xl tracking-tighter uppercase italic">PKG</span>
          </div>
          <p className="text-white/40 text-sm leading-relaxed mb-8">
            Giải pháp pin lithium và năng lượng công nghiệp hiệu suất cao. Chúng tôi năng tầm vận hành của doanh nghiệp thông qua công nghệ lưu trữ tiên tiến.
          </p>
          <div className="flex gap-4">
             {['fb', 'li', 'yt'].map((s) => (
                <div key={s} className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-[10px] font-bold uppercase transition-colors hover:border-brand-red hover:text-brand-red cursor-pointer">
                  {s}
                </div>
             ))}
          </div>
        </div>
        
        {['Sản phẩm', 'Hỗ trợ'].map((col) => (
          <div key={col}>
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-white/50 mb-8">{col}</h4>
            <ul className="space-y-4 text-sm font-medium">
               {['Pin Xe Nâng', 'Pin AGV', 'Hệ thống ESS', 'Trạm Sạc', 'Hướng dẫn'].map((link) => (
                 <li key={link} className="hover:text-brand-red cursor-pointer transition-colors">{link}</li>
               ))}
            </ul>
          </div>
        ))}

        <div>
           <h4 className="text-[10px] font-bold uppercase tracking-widest text-white/50 mb-8">Liên hệ</h4>
           <div className="space-y-6 text-sm">
              <div className="flex items-start gap-4">
                <PhoneCall className="w-5 h-5 text-brand-red" />
                <div>
                  <p className="font-bold">1900 xxxx</p>
                  <p className="text-white/40 text-xs">Phục vụ 24/7 cho sự cố khẩn cấp</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-brand-red" />
                <p className="font-bold">support@pkgbattery.com</p>
              </div>
           </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-[10px] font-bold uppercase text-white/20">© 2026 PKG BATTERY. ALL RIGHTS RESERVED.</p>
        <div className="flex gap-8 text-[10px] font-bold uppercase text-white/20">
          <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
          <span className="hover:text-white cursor-pointer transition-colors">Term of Service</span>
        </div>
      </div>
    </footer>
  );
};

// --- Main Page ---

export default function App() {
  return (
    <main className="selection:bg-brand-red selection:text-white">
      <Navbar />
      <Hero />
      <TrustStory />
      <ProductCoverage />
      <WarrantyDuration />
      <WhatIsCovered />
      <ClaimProcess />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
