/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  CheckCircle2, 
  Cpu, 
  Settings, 
  ShieldCheck, 
  Zap, 
  ChevronDown, 
  FileDown, 
  Mail, 
  Phone, 
  Globe,
  Factory,
  Bot,
  Truck,
  Database,
  BarChart3,
  Clock,
  Play,
  Menu,
  X
} from 'lucide-react';
import { cn } from './lib/utils';
import { SITE_CONTENT } from './constants';

// --- Shared Components ---

const Button = ({ 
  children, 
  variant = 'primary', 
  className, 
  ...props 
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'secondary' | 'outline' | 'ghost' }) => {
  const variants = {
    primary: 'bg-brand-red text-white hover:bg-brand-red-dark',
    secondary: 'bg-white text-industrial-black hover:bg-soft-grey shadow-sm',
    outline: 'border border-industrial-black/20 text-industrial-black hover:bg-soft-grey',
    ghost: 'text-industrial-black hover:bg-soft-grey'
  };

  return (
    <button 
      className={cn(
        'px-8 py-4 rounded-sm font-semibold transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed',
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

const SectionHeader = ({ eyebrow, title, description, dark = false, centered = false }: { 
  eyebrow?: string; 
  title: string; 
  description?: string; 
  dark?: boolean;
  centered?: boolean;
}) => (
  <div className={cn('mb-12 md:mb-20', centered ? 'text-center max-w-3xl mx-auto' : 'max-w-4xl')}>
    {eyebrow && (
      <span className={cn('block text-sm font-bold tracking-widest uppercase mb-4', dark ? 'text-brand-red' : 'text-brand-red')}>
        {eyebrow}
      </span>
    )}
    <h2 className={cn('text-4xl md:text-5xl font-bold mb-6 tracking-tight', dark ? 'text-white' : 'text-industrial-black')}>
      {title}
    </h2>
    {description && (
      <p className={cn('text-lg md:text-xl leading-relaxed', dark ? 'text-gray-400' : 'text-gray-600')}>
        {description}
      </p>
    )}
  </div>
);

// --- Sections ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Vấn đề', href: '#risks' },
    { name: 'Năng lực', href: '#capabilities' },
    { name: 'Quy trình', href: '#process' },
    { name: 'Chất lượng', href: '#qc' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <nav className={cn(
      'fixed top-0 left-0 w-full z-50 transition-all duration-300',
      isScrolled ? 'bg-white/80 backdrop-blur-md border-b border-line-grey py-4' : 'bg-transparent py-6'
    )}>
      <div className="container-wide flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-brand-red flex items-center justify-center font-bold text-white text-xl">PK</div>
          <span className={cn('font-bold text-2xl tracking-tighter', isScrolled || isMobileMenuOpen ? 'text-industrial-black' : 'text-white')}>
            BATTERY
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={cn(
                'text-sm font-semibold hover:text-brand-red transition-colors',
                isScrolled ? 'text-industrial-black' : 'text-white/80'
              )}
            >
              {link.name}
            </a>
          ))}
          <Button className="py-2 px-6 text-sm">Gửi yêu cầu</Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-industrial-black"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} className="text-white" /> : <Menu size={28} className={isScrolled ? 'text-industrial-black' : 'text-white'} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 bg-industrial-black z-40 flex flex-col items-center justify-center gap-8 p-10"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-2xl font-bold text-white hover:text-brand-red"
              >
                {link.name}
              </a>
            ))}
            <Button className="w-full max-w-xs mt-4">Gửi yêu cầu kỹ thuật</Button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const { hero } = SITE_CONTENT;
  return (
    <section className="relative min-height-[760px] flex items-center bg-industrial-black text-white pt-20 overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none hidden lg:block">
        <svg viewBox="0 0 100 100" className="w-full h-full text-brand-red">
          <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.1" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container-wide grid lg:grid-cols-2 gap-16 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 bg-brand-red text-xs font-bold tracking-widest uppercase mb-8">
            {hero.eyebrow}
          </span>
          <h1 className="text-5xl lg:text-7xl font-bold mb-8 tracking-tight leading-[1.1]">
            {hero.title}
          </h1>
          <p className="text-xl text-gray-400 mb-10 leading-relaxed max-w-xl">
            {hero.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button className="h-16 group">
              {hero.ctaPrimary} <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" className="h-16 border-white/20 text-white hover:bg-white/10">
              <FileDown size={20} /> {hero.ctaSecondary}
            </Button>
          </div>
          <div className="flex flex-wrap gap-x-8 gap-y-4 items-center">
            {hero.trustRow.map((item) => (
              <span key={item} className="text-xs font-bold text-gray-500 flex items-center gap-2">
                <CheckCircle2 size={14} className="text-brand-red" /> {item}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative lg:block hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-industrial-black/20 to-industrial-black z-10" />
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000" 
            alt="Industrial Production"
            className="w-full h-full object-cover filter grayscale brightness-50"
          />
          <div className="absolute bottom-10 left-10 z-20">
            <div className="flex items-center gap-4 bg-industrial-black/80 backdrop-blur p-4 border-l-4 border-brand-red">
                <div className="bg-brand-red/10 p-2 rounded">
                    <Zap className="text-brand-red" size={24} />
                </div>
                <div>
                    <div className="text-xs text-gray-500 font-bold uppercase">Phản hồi kỹ thuật</div>
                    <div className="font-bold text-lg">Trong 24 giờ</div>
                </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Risks = () => {
  const { risks } = SITE_CONTENT;
  return (
    <section id="risks" className="section-padding bg-white">
      <div className="container-wide">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <SectionHeader 
              title={risks.title}
              description={risks.description}
            />
            <div className="lg:mt-20">
              <a href="#process" className="group flex items-center gap-2 text-brand-red font-bold">
                Xem quy trình phát triển pin tùy chỉnh <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
          <div className="lg:col-span-7 flex flex-col border-t border-line-grey">
            {risks.items.map((risk, idx) => (
              <div key={idx} className="group py-8 md:py-10 border-b border-line-grey flex gap-8 items-start hover:bg-soft-grey transition-colors px-4">
                <span className="text-5xl font-bold text-brand-red/10 group-hover:text-brand-red/20 transition-colors">
                  {(idx + 1).toString().padStart(2, '0')}
                </span>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-4">{risk.title}</h3>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <div className="text-xs font-bold text-gray-400 uppercase mb-2">Vấn đề thường gặp</div>
                      <p className="text-gray-600">{risk.problem}</p>
                    </div>
                    <div>
                      <div className="text-xs font-bold text-brand-red uppercase mb-2">Giải pháp của PKGBattery</div>
                      <p className="text-gray-900 font-medium">{risk.solution}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Industries = () => {
    const industries = [
        { icon: Factory, title: "Nhà sản xuất máy công nghiệp", description: "Pin cho máy vệ sinh sàn, xe kéo điện, pallet mover, máy kiểm tra di động, máy tự hành và thiết bị sản xuất cần nguồn ổn định." },
        { icon: Bot, title: "Đơn vị tích hợp AGV / Robot", description: "Pin có dòng xả cao, kích thước gọn, BMS thông minh, hỗ trợ giao tiếp với bộ điều khiển trung tâm." },
        { icon: Truck, title: "Xe điện chuyên dụng", description: "Pin cho xe golf, xe điện nội khu, xe chở hàng, xe du lịch điện, xe logistic trong nhà máy." },
        { icon: Database, title: "Lưu trữ năng lượng & Viễn thông", description: "Pin rack, cabinet, UPS, trạm viễn thông, hệ thống backup công nghiệp cần độ ổn định cao." }
    ];

    return (
        <section className="section-padding bg-soft-grey">
            <div className="container-wide">
                <SectionHeader 
                    eyebrow="ỨNG DỤNG THỰC TẾ"
                    title="Dành cho những doanh nghiệp thiết kế và tích hợp máy móc"
                    description="Chúng tôi không chỉ cung cấp pin; chúng tôi cùng bạn xác định cấu hình pin phù hợp để thiết bị vận hành ổn định khi đưa vào thực tế."
                    centered
                />
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {industries.map((item, idx) => (
                        <div key={idx} className="bg-white p-8 group hover:bg-brand-red transition-all duration-300">
                            <div className="inline-block p-3 bg-brand-red text-white group-hover:bg-white group-hover:text-brand-red mb-6 transition-colors">
                                <item.icon size={28} />
                            </div>
                            <h3 className="text-xl font-bold mb-4 group-hover:text-white">{item.title}</h3>
                            <p className="text-gray-600 group-hover:text-white/80 leading-relaxed text-sm">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const Capabilities = () => {
    const caps = [
        { title: "Điện áp & Dung lượng", content: "12V - 96V; 20Ah - 500Ah+", items: ["Tùy chỉnh theo tải thực tế", "Dải điện áp rộng", "Mở rộng song song"] },
        { title: "Hóa học Pin & Cell", content: "LiFePO4, NMC; Cell EVE, CATL", items: ["Ưu tiên an toàn, tuổi thọ", "Mật độ năng lượng cao", "Linh hoạt hãng cell"] },
        { title: "BMS & Giao tiếp", content: "CAN, RS485, Bluetooth", items: ["Firmware tùy chỉnh", "App theo dõi pin", "Tương thích Controller"] },
        { title: "Cơ khí & Bảo vệ", content: "Vỏ thép, IP54 - IP67", items: ["Thiết kế 3D theo khoang máy", "Chống rung, chống nước", "Connector Anderson/TE"] }
    ];

    return (
        <section id="capabilities" className="section-padding bg-white overflow-hidden">
            <div className="container-wide">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <div>
                        <SectionHeader 
                            eyebrow="NĂNG LỰC KỸ THUẬT"
                            title="Tùy chỉnh từ cell, BMS đến giao tiếp hệ thống"
                            description="PKGBattery thiết kế bộ pin dựa trên dữ liệu kỹ thuật thực tế, không ép khách dùng một cấu hình có sẵn."
                        />
                        <div className="space-y-4">
                            {caps.map((item, idx) => (
                                <div key={idx} className="p-6 border border-line-grey hover:border-brand-red transition-colors">
                                    <div className="flex justify-between items-center mb-4">
                                        <h3 className="font-bold text-lg">{item.title}</h3>
                                        <div className="text-brand-red font-bold text-sm">{item.content}</div>
                                    </div>
                                    <div className="flex flex-wrap gap-4">
                                        {item.items.map(sub => (
                                            <div key={sub} className="flex items-center gap-1 text-xs text-gray-500 font-medium whitespace-nowrap">
                                                <CheckCircle2 size={12} className="text-brand-red" /> {sub}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="relative">
                        <div className="absolute -top-10 -right-10 w-full h-full bg-soft-grey -z-10" />
                        <img 
                            src="https://images.unsplash.com/photo-1593941707882-a5bba14930c7?auto=format&fit=crop&q=80&w=1000" 
                            alt="Battery Engineering"
                            className="w-full h-auto shadow-2xl grayscale"
                        />
                        <div className="absolute top-1/2 -left-10 transform -translate-y-1/2 hidden xl:block">
                            <div className="bg-industrial-black text-white p-10 max-w-xs shadow-2xl">
                                <div className="text-4xl font-bold mb-2">100%</div>
                                <div className="text-xs uppercase font-bold text-gray-500 mb-4 tracking-widest">Kiểm soát kỹ thuật</div>
                                <p className="text-sm text-gray-400">Từ thiết kế 3D đến firmware BMS đều được tối ưu cho từng đơn hàng OEM.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const Process = () => {
    const steps = [
        { num: "01", title: "Tiếp nhận yêu cầu", desc: "Xác định ứng dụng, điện áp, dung lượng, không gian máy và môi trường vận hành." },
        { num: "02", title: "Báo giá & Bản vẽ", desc: "Gửi cấu hình đề xuất, bản vẽ 3D sơ bộ và timeline phát triển mẫu." },
        { num: "03", title: "Sản xuất mẫu thử", desc: "Chạy prototype để khách hàng test thực tế trên thiết bị và điều chỉnh firmware." },
        { num: "04", title: "Sản xuất hàng loạt", desc: "Sản xuất theo lô, kiểm tra QC nghiêm ngặt và bàn giao kèm hồ sơ chứng nhận." }
    ];

    return (
        <section id="process" className="section-padding bg-industrial-black text-white">
            <div className="container-wide">
                <SectionHeader 
                    eyebrow="QUY TRÌNH HÀNH ĐỘNG"
                    title="Từ ý tưởng đến bộ pin hoàn chỉnh"
                    description="Chúng tôi tập trung vào việc giảm thiểu sai số kỹ thuật thông qua quy trình phối hợp chặt chẽ giữa hai bên."
                    dark
                />
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, idx) => (
                        <div key={idx} className="relative p-8 border-l border-white/10 hover:border-brand-red transition-colors group">
                            <div className="text-6xl font-bold text-white/5 mb-8 group-hover:text-brand-red/10 transition-colors">
                                {step.num}
                            </div>
                            <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {step.desc}
                            </p>
                            {idx < steps.length - 1 && (
                                <ArrowRight className="absolute -right-4 top-1/2 -translate-y-1/2 text-white/10 hidden lg:block" size={32} />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const QualityAndCert = () => {
    const qc = [
        { stage: "IQC", desc: "Kiểm tra đầu vào cell, BMS, connector, vỏ và phụ kiện." },
        { stage: "Cell Matching", desc: "Ghép cell theo nội trở, điện áp và dung lượng đồng đều." },
        { stage: "Ageing Test", desc: "Chạy sạc xả liên tục để theo dõi độ ổn định trước khi đóng gói." },
        { stage: "Final QC", desc: "Dán nhãn, kiểm tra ngoại quan và bộ hồ sơ truy xuất mã lô." }
    ];

    return (
        <section id="qc" className="section-padding bg-white">
            <div className="container-wide">
                <div className="grid lg:grid-cols-2 gap-20">
                    <div>
                        <SectionHeader 
                            eyebrow="KIỂM SOÁT TỐI ĐA"
                            title="Chất lượng không chỉ là một lời hứa"
                            description="PKGBattery áp dụng quy trình kiểm soát 100% các bộ pin xuất xưởng. Mọi thông số đều được ghi nhận để phục vụ hậu mãi và cải tiến sản phẩm."
                        />
                        <div className="grid sm:grid-cols-2 gap-8">
                            {qc.map((item, idx) => (
                                <div key={idx} className="flex gap-4">
                                    <div className="mt-1">
                                        <div className="w-8 h-8 rounded-full bg-brand-red/10 flex items-center justify-center text-brand-red font-bold text-xs">
                                            {idx + 1}
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="font-bold mb-2">{item.stage}</h4>
                                        <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="bg-soft-grey p-10 lg:p-16 flex flex-col justify-center items-center text-center">
                        <ShieldCheck size={64} className="text-brand-red mb-8" />
                        <h3 className="text-2xl font-bold mb-6">Chứng nhận & Tiêu chuẩn</h3>
                        <div className="flex flex-wrap justify-center gap-6 mb-10 opacity-60">
                            {["ISO 9001", "CE", "RoHS", "UN38.3", "MSDS"].map(cert => (
                                <span key={cert} className="px-4 py-2 border border-industrial-black text-xs font-bold">{cert}</span>
                            ))}
                        </div>
                        <p className="text-sm text-gray-500 max-w-xs leading-relaxed italic">
                            "Mọi bộ pin đều có hồ sơ kỹ thuật riêng để khách hàng dễ dàng audit và kiểm soát chuỗi cung ứng."
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

const ComparisonSection = () => {
    const rows = [
        { label: "Giao tiếp & Hỗ trợ", pkg: "Trực tiếp tại VN, kỹ sư phản hồi ngay", other: "Lệch múi giờ, nhiều trung gian" },
        { label: "Tùy chỉnh cơ khí", pkg: "Thiết kế 3D hoàn toàn theo máy", other: "Thường bị giới hạn trong mẫu sẵn" },
        { label: "Mẫu thử (Prototype)", pkg: "Thời gian nhanh, dễ chỉnh sửa", other: "Quy trình dài, chi phí sửa cao" },
        { label: "Hỗ trợ sau bán", pkg: "Xử lý tại chỗ hoặc trong 24h", other: "Dễ bị gián đoạn do địa lý" }
    ];

    return (
        <section className="section-padding bg-industrial-black text-white">
            <div className="container-wide">
                <SectionHeader 
                    title="Tại sao dự án cần đồng hành kỹ thuật tại Việt Nam?"
                    description="Khi thiết bị của bạn phát sinh yêu cầu đặc thù, khoảng cách địa lý và tốc độ phản hồi tạo ra sự khác biệt sống còn cho tiến độ dự án."
                    dark
                    centered
                />
                <div className="overflow-x-auto">
                    <table className="w-full text-left min-w-[600px]">
                        <thead>
                            <tr className="border-b border-white/10">
                                <th className="py-6 font-medium text-gray-500">Tiêu chí so sánh</th>
                                <th className="py-6 font-bold text-brand-red">PKGBattery (Tại Việt Nam)</th>
                                <th className="py-6 font-medium text-gray-500">Nhà cung cấp nước ngoài</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rows.map((row, idx) => (
                                <tr key={idx} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                                    <td className="py-6 text-gray-400">{row.label}</td>
                                    <td className="py-6 font-bold">{row.pkg}</td>
                                    <td className="py-6 text-gray-500">{row.other}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

const FAQ = () => {
    const { faq } = SITE_CONTENT;
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="faq" className="section-padding bg-white">
            <div className="container-wide max-w-4xl">
                <SectionHeader 
                    title="Giải đáp thắc mắc dự án OEM"
                    centered
                />
                <div className="space-y-4">
                    {faq.map((item, idx) => (
                        <div key={idx} className="border border-line-grey">
                            <button 
                                className="w-full text-left p-6 flex justify-between items-center bg-white hover:bg-soft-grey transition-colors"
                                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                            >
                                <span className="font-bold text-lg">{item.q}</span>
                                <ChevronDown className={cn('transition-transform text-gray-400', openIndex === idx && 'rotate-180')} />
                            </button>
                            <AnimatePresence>
                                {openIndex === idx && (
                                    <motion.div 
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-line-grey/30">
                                            {item.a}
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

const ContactSection = () => {
    return (
        <section id="contact" className="section-padding bg-soft-grey">
            <div className="container-wide">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    <div>
                        <SectionHeader 
                            eyebrow="LIÊN HỆ KỸ THUẬT"
                            title="Khởi động dự án pin tùy chỉnh của bạn"
                            description="Gửi thông tin kỹ thuật hiện có. Đội ngũ PKGBattery sẽ phân tích yêu cầu, đề xuất cấu hình pin phù hợp và phản hồi trong 24 giờ làm việc."
                        />
                        <div className="space-y-6 mt-10">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-white flex items-center justify-center text-brand-red shadow-sm">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <div className="text-xs font-bold text-gray-500 uppercase">Email kỹ thuật</div>
                                    <div className="font-bold">oem@pkgbattery.vn</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-white flex items-center justify-center text-brand-red shadow-sm">
                                    <Phone size={20} />
                                </div>
                                <div>
                                    <div className="text-xs font-bold text-gray-500 uppercase">Hotline / Zalo</div>
                                    <div className="font-bold">+84 9xx xxx xxx</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-white flex items-center justify-center text-brand-red shadow-sm">
                                    <Globe size={20} />
                                </div>
                                <div>
                                    <div className="text-xs font-bold text-gray-500 uppercase">Nhà máy sản xuất</div>
                                    <div className="font-bold">KCN Việt Nam, TP. Hồ Chí Minh</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white p-8 md:p-12 shadow-2xl border-t-8 border-brand-red">
                        <form className="grid gap-6">
                            <div className="grid sm:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase text-gray-500">Họ và tên</label>
                                    <input type="text" className="w-full bg-soft-grey border-none p-4 text-sm focus:ring-2 focus:ring-brand-red outline-hidden" placeholder="Nguyễn Văn A" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase text-gray-500">Email doanh nghiệp</label>
                                    <input type="email" className="w-full bg-soft-grey border-none p-4 text-sm focus:ring-2 focus:ring-brand-red outline-hidden" placeholder="name@company.com" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase text-gray-500">Loại thiết bị / Ứng dụng</label>
                                <input type="text" className="w-full bg-soft-grey border-none p-4 text-sm focus:ring-2 focus:ring-brand-red outline-hidden" placeholder="VD: Pin xe nâng, AGV, Robot..." />
                            </div>
                            <div className="grid sm:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase text-gray-500">Điện áp (V)</label>
                                    <input type="text" className="w-full bg-soft-grey border-none p-4 text-sm focus:ring-2 focus:ring-brand-red outline-hidden" placeholder="VD: 48V" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase text-gray-500">Dung lượng (Ah)</label>
                                    <input type="text" className="w-full bg-soft-grey border-none p-4 text-sm focus:ring-2 focus:ring-brand-red outline-hidden" placeholder="VD: 100Ah" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase text-gray-500">Yêu cầu đặc thù</label>
                                <textarea rows={4} className="w-full bg-soft-grey border-none p-4 text-sm focus:ring-2 focus:ring-brand-red outline-hidden resize-none" placeholder="Ghi chú về kích thước khoang pin, dòng xả hoặc giao tiếp BMS..."></textarea>
                            </div>
                            <Button className="w-full h-16 text-lg">Gửi yêu cầu ngay</Button>
                            <p className="text-[10px] text-gray-400 text-center uppercase tracking-widest font-bold">
                                Phản hồi kỹ thuật cam kết trong 24 giờ
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

const Footer = () => {
    return (
        <footer className="bg-industrial-black text-white py-20 border-t border-white/5">
            <div className="container-wide">
                <div className="grid md:grid-cols-4 gap-12 mb-20">
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center gap-2 mb-8">
                            <div className="w-8 h-8 bg-brand-red flex items-center justify-center font-bold text-white text-lg">PK</div>
                            <span className="font-bold text-xl tracking-tighter">BATTERY</span>
                        </div>
                        <p className="text-gray-500 text-sm leading-relaxed mb-8">
                            Nhà sản xuất giải pháp pin lithium công nghiệp tùy chỉnh hàng đầu Việt Nam. Đối tác đồng hành cùng các dự án OEM/ODM.
                        </p>
                        <div className="flex gap-4">
                            {/* Social Icons Placeholder */}
                            {[1,2,3].map(i => <div key={i} className="w-8 h-8 rounded-full bg-white/5 hover:bg-brand-red transition-colors cursor-pointer" />)}
                        </div>
                    </div>
                    <div>
                        <h4 className="font-bold mb-8 uppercase text-xs tracking-widest text-gray-400">Giải pháp</h4>
                        <ul className="space-y-4 text-sm text-gray-500">
                            <li><a href="#" className="hover:text-white transition-colors">Pin Lithium Xe Nâng</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Pin Cho Robot / AGV</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Pin Xe Golf / Nội Khu</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Lưu Trữ Công Nghiệp</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-8 uppercase text-xs tracking-widest text-gray-400">Hỗ trợ kỹ thuật</h4>
                        <ul className="space-y-4 text-sm text-gray-500">
                            <li><a href="#" className="hover:text-white transition-colors">Tải Tài Liệu</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Quy Trình OEM</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Báo Cáo Test Mẫu</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Chế Độ Bảo Hành</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-8 uppercase text-xs tracking-widest text-gray-400">Tin tức & Blog</h4>
                        <ul className="space-y-4 text-sm text-gray-500">
                            <li><a href="#" className="hover:text-white transition-colors">So Sánh Pin LiFePO4 / NMC</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Hướng Dẫn Bảo Trì Pin</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Dự ÁN Tiêu Biểu</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Xu Hướng Lưu Trữ</a></li>
                        </ul>
                    </div>
                </div>
                <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase font-bold text-gray-600 tracking-widest">
                    <div>© 2024 PKGBATTERY VIETNAM. ALL RIGHTS RESERVED.</div>
                    <div className="flex gap-8">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Risks />
        <Industries />
        <Capabilities />
        <Process />
        <QualityAndCert />
        <ComparisonSection />
        <FAQ />
        
        {/* ROI / TCO Section Brief */}
        <section className="section-padding bg-white">
            <div className="container-wide">
                <div className="bg-industrial-black text-white p-10 md:p-20 flex flex-col md:flex-row items-center gap-12">
                    <div className="flex-1">
                        <BarChart3 size={48} className="text-brand-red mb-8" />
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Tối ưu tổng chi phí sở hữu (TCO)</h2>
                        <p className="text-gray-400 leading-relaxed mb-10 max-w-lg">
                            Một bộ pin tùy chỉnh đúng ngay từ đầu giúp giảm rủi ro dừng máy, giảm chi phí bảo hành và sửa chữa cơ khí. Đầu tư cho thiết kế riêng là cách tốt nhất để bảo vệ lợi nhuận lâu dài cho dự án thiết bị của bạn.
                        </p>
                        <Button variant="secondary">Tính toán ROI cho dự án của bạn</Button>
                    </div>
                    <div className="flex-1 w-full grid grid-cols-2 gap-4">
                        <div className="bg-white/5 p-6 border-l-2 border-brand-red">
                            <div className="text-2xl font-bold mb-1">35%</div>
                            <div className="text-[10px] uppercase font-bold text-gray-500">Tăng runtime trung bình</div>
                        </div>
                        <div className="bg-white/5 p-6 border-l-2 border-brand-red">
                            <div className="text-2xl font-bold mb-1">0h</div>
                            <div className="text-[10px] uppercase font-bold text-gray-500">Thời gian sửa cơ khí</div>
                        </div>
                        <div className="bg-white/5 p-6 border-l-2 border-brand-red">
                            <div className="text-2xl font-bold mb-1">24h</div>
                            <div className="text-[10px] uppercase font-bold text-gray-500">Phản hồi kỹ thuật</div>
                        </div>
                        <div className="bg-white/5 p-6 border-l-2 border-brand-red">
                            <div className="text-2xl font-bold mb-1">5+ Năm</div>
                            <div className="text-[10px] uppercase font-bold text-gray-500">Tuổi thọ thiết kế</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Video / Factory Showcase Brief */}
        <section className="section-padding bg-soft-grey">
            <div className="container-wide">
                <div className="relative group overflow-hidden bg-industrial-black aspect-video rounded-3xl flex items-center justify-center">
                    <img 
                        src="https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?auto=format&fit=crop&q=80&w=1200" 
                        alt="Factory Video"
                        className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="relative z-10 text-center">
                        <button className="w-24 h-24 bg-brand-red text-white flex items-center justify-center rounded-full hover:scale-110 transition-transform shadow-2xl">
                            <Play size={40} fill="currentColor" />
                        </button>
                        <div className="mt-8 text-white">
                            <h3 className="text-2xl font-bold mb-2">Xem quy trình sản xuất thực tế</h3>
                            <p className="text-white/60">Tham quan nhà máy PKGBattery và hệ thống QC hiện đại</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
