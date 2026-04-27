import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  MessageSquare, 
  Mail, 
  MapPin, 
  Zap, 
  Users, 
  Settings, 
  ShieldCheck, 
  FileText, 
  ArrowRight, 
  ChevronRight, 
  Clock, 
  Search, 
  ChevronDown, 
  Facebook, 
  Youtube, 
  Linkedin, 
  Send,
  Download,
  Info,
  CheckCircle2,
  X,
  Menu
} from 'lucide-react';

// --- Types ---
type RouteType = 'quote' | 'dealer' | 'oem' | 'tech' | 'warranty' | 'other';

interface Dealer {
  id: number;
  name: string;
  address: string;
  phone: string;
  region: string;
  lat: number;
  lng: number;
}

// --- Data ---
const DEALERS: Dealer[] = [
  { id: 1, name: "PKGbattery Dealer Hà Nội", address: "123 Thái Hà, Đống Đa, Hà Nội", phone: "0989 XXX XXX", region: "Hà Nội & miền Bắc", lat: 21.012, lng: 105.821 },
  { id: 2, name: "PKGbattery Dealer Bắc Ninh", address: "KCN Yên Phong, Bắc Ninh", phone: "0966 XXX XXX", region: "Bắc Ninh, Bắc Giang, Thái Nguyên", lat: 21.192, lng: 105.998 },
  { id: 3, name: "PKGbattery Dealer Hải Phòng", address: "95 Cầu Đất, Ngô Quyền, Hải Phòng", phone: "0933 XXX XXX", region: "Hải Phòng, Quảng Ninh, Hải Dương", lat: 20.844, lng: 106.688 },
  { id: 4, name: "PKGbattery Dealer Nghệ An", address: "88 Lê Lợi, TP. Vinh, Nghệ An", phone: "0977 XXX XXX", region: "Bắc Trung Bộ", lat: 18.666, lng: 105.679 },
  { id: 5, name: "PKGbattery Dealer Đà Nẵng", address: "80 Trần Hưng Đạo, Sơn Trà, Đàn Nẵng", phone: "0909 XXX XXX", region: "miền Trung", lat: 16.054, lng: 108.202 },
  { id: 6, name: "PKGbattery Dealer Bình Dương", address: "VSIP 1, Thuận An, Bình Dương", phone: "0935 XXX XXX", region: "Đông Nam Bộ", lat: 10.912, lng: 106.711 },
  { id: 7, name: "PKGbattery Dealer TP. Hồ Chí Minh", address: "123 Điện Biên Phủ, Bình Thạnh, TP.HCM", phone: "0988 XXX XXX", region: "TP.HCM & khu vực lân cận", lat: 10.762, lng: 106.660 },
  { id: 8, name: "PKGbattery Dealer Cần Thơ", address: "12 Mậu Thân, Ninh Kiều, Cần Thơ", phone: "0911 XXX XXX", region: "miền Tây Nam Bộ", lat: 10.033, lng: 105.785 },
];

const FAQS = [
  {
    question: "Which contact channel should I use for fastest response?",
    answer: "For urgent quotation or project consultation, call our sales hotline. For quick follow-up with images or documents, use Zalo. For formal business documents, use our official email."
  },
  {
    question: "Can I request a quotation without complete technical specifications?",
    answer: "Yes. You can describe your application, expected quantity and usage scenario. Our team will suggest the suitable battery configuration."
  },
  {
    question: "How do I apply to become a PKGbattery dealer?",
    answer: "Select the Dealer route, provide your province, business type and experience. Our team will review your area and contact you about dealer policy."
  },
  {
    question: "What information is needed for OEM/ODM consultation?",
    answer: "Useful details include voltage, capacity, cell chemistry, application, expected quantity and any available drawing or reference product."
  }
];

// --- Sub-components ---

const TechnicalLine = ({ className = "" }: { className?: string }) => (
  <div className={`absolute pointer-events-none overflow-hidden ${className}`}>
    <div className="w-full h-px bg-brand-red/20 relative">
      <motion.div 
        animate={{ x: ['-100%', '200%'] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        className="absolute inset-y-0 w-24 bg-gradient-to-r from-transparent via-brand-red to-transparent"
      />
    </div>
  </div>
);

const SectionHeading = ({ title, subtitle, light = false }: { title: string, subtitle?: string, light?: boolean }) => (
  <div className="mb-12">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`text-3xl md:text-4xl font-bold tracking-tight mb-4 ${light ? 'text-white' : 'text-brand-black'}`}
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className={`max-w-2xl text-lg ${light ? 'text-zinc-400' : 'text-zinc-500'}`}
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

export default function ContactPage() {
  const [activeRoute, setActiveRoute] = useState<RouteType>('quote');
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedDealer, setSelectedDealer] = useState<Dealer | null>(null);
  const [searchDealer, setSearchDealer] = useState('');
  const [formSuccess, setFormSuccess] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filteredDealers = useMemo(() => {
    return DEALERS.filter(d => 
      d.name.toLowerCase().includes(searchDealer.toLowerCase()) || 
      d.region.toLowerCase().includes(searchDealer.toLowerCase()) ||
      d.address.toLowerCase().includes(searchDealer.toLowerCase())
    );
  }, [searchDealer]);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSuccess(true);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 2000);
  };

  return (
    <div className="relative min-h-screen bg-white">
      {/* Sticky Actions Desktop Rail */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-4">
        {[
          { icon: <Phone size={20} />, label: "Call Sales", href: "tel:0989000000" },
          { icon: <MessageSquare size={20} />, label: "Zalo Chat", href: "#" },
          { icon: <Mail size={20} />, label: "Email Us", href: "mailto:contact@pkgbattery.com" },
          { icon: <ArrowRight size={20} />, label: "Top", onClick: () => window.scrollTo({ top: 0, behavior: 'smooth' }) }
        ].map((item, idx) => (
          <motion.a
            key={idx}
            href={item.href}
            onClick={item.onClick}
            whileHover={{ x: -10 }}
            className="group relative flex items-center justify-center w-12 h-12 bg-white border border-zinc-200 rounded-lg shadow-sm hover:border-brand-red transition-colors cursor-pointer"
          >
            <span className="text-zinc-600 group-hover:text-brand-red transition-colors">{item.icon}</span>
            <span className="absolute right-full mr-3 px-3 py-1.5 bg-brand-black text-white text-xs font-medium rounded opacity-0 group-hover:opacity-100 whitespace-nowrap pointer-events-none transition-opacity">
              {item.label}
            </span>
          </motion.a>
        ))}
      </div>

      {/* Mobile Sticky Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden grid grid-cols-3 bg-white border-t border-zinc-200 p-2 shadow-2xl">
        <a href="tel:0989000000" className="flex flex-col items-center justify-center py-2 text-brand-black">
          <Phone size={20} />
          <span className="text-[10px] font-bold mt-1 uppercase">Call</span>
        </a>
        <a href="#" className="flex flex-col items-center justify-center py-2 text-brand-black border-x border-zinc-100">
          <MessageSquare size={20} />
          <span className="text-[10px] font-bold mt-1 uppercase">Zalo</span>
        </a>
        <button onClick={() => document.getElementById('routing-matrix')?.scrollIntoView({ behavior: 'smooth' })} className="flex flex-col items-center justify-center py-2 text-brand-red">
          <Send size={20} />
          <span className="text-[10px] font-bold mt-1 uppercase">Form</span>
        </button>
      </div>

      {/* --- Section 1: Header --- */}
      <header className="relative pt-32 pb-20 px-6 overflow-hidden technical-grid">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center relative z-10">
          <div className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 bg-brand-red/10 border border-brand-red/20 rounded-full text-brand-red text-sm font-bold tracking-tight mb-6"
            >
              <Zap size={14} fill="currentColor" />
              <span>CONTACT COMMAND HUB v2.0</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold tracking-tight text-brand-black mb-6 leading-[1.1]"
            >
              Connect with the <br /> <span className="text-brand-red">Right</span> PKGbattery Team
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-zinc-500 max-w-xl mb-10 leading-relaxed"
            >
              Dù bạn cần báo giá, đăng ký đại lý, tư vấn OEM/ODM, bảo hành hay hỗ trợ kỹ thuật, PKGbattery giúp bạn kết nối đúng bộ phận nhanh chóng.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4"
            >
              {[
                { label: "Call Sales", desc: "Urgent consultation", icon: <Phone size={18} /> },
                { label: "Chat Zalo", desc: "Fast response", icon: <MessageSquare size={18} /> },
                { label: "Send Request", desc: "Route to team", icon: <Send size={18} /> },
                { label: "Find Dealer", desc: "Locate points", icon: <MapPin size={18} /> },
              ].map((act, i) => (
                <button 
                  key={i}
                  className="flex flex-col items-start p-4 bg-white border border-zinc-200 rounded-xl hover:border-brand-red hover:shadow-lg transition-all group text-left"
                >
                  <div className="w-10 h-10 rounded-lg bg-zinc-50 flex items-center justify-center text-zinc-400 group-hover:bg-brand-red/10 group-hover:text-brand-red transition-colors mb-4">
                    {act.icon}
                  </div>
                  <span className="font-bold text-sm text-brand-black">{act.label}</span>
                  <span className="text-[10px] text-zinc-400 font-medium uppercase mt-1 tracking-wider">{act.desc}</span>
                </button>
              ))}
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative bg-brand-black rounded-3xl p-8 overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-red opacity-10 blur-3xl" />
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-white/50 text-xs font-mono uppercase tracking-[0.2em]">Live Contact Panel</span>
                  </div>
                  <div className="px-2 py-1 bg-white/10 rounded text-[10px] font-mono text-zinc-400 uppercase">GMT +7</div>
                </div>

                <div className="space-y-6">
                  <div className="group">
                    <p className="text-zinc-500 text-xs font-semibold mb-2 uppercase tracking-wide">Sales Hotline</p>
                    <a href="tel:0989000000" className="text-2xl font-bold text-white group-hover:text-brand-red transition-colors inline-flex items-center gap-3">
                      0989 XXX XXX
                      <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-brand-red group-hover:border-brand-red transition-all">
                        <Phone size={14} />
                      </div>
                    </a>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <p className="text-zinc-500 text-xs font-semibold mb-1 uppercase tracking-wide">Zalo Support</p>
                      <button className="text-zinc-300 font-bold hover:text-white transition-colors">Chat Now</button>
                    </div>
                    <div>
                      <p className="text-zinc-500 text-xs font-semibold mb-1 uppercase tracking-wide">Business Hours</p>
                      <p className="text-zinc-300 font-bold">08:00 – 18:00</p>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-white/10">
                    <p className="text-zinc-500 text-xs font-semibold mb-2 uppercase tracking-wide">Email Channel</p>
                    <a href="mailto:contact@pkgbattery.com" className="text-white font-bold hover:text-brand-red transition-colors block">contact@pkgbattery.com</a>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-white/5 rounded-2xl flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-red flex items-center justify-center shrink-0">
                    <ShieldCheck size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="text-white text-sm font-bold">Response Promise</p>
                    <p className="text-zinc-400 text-xs">Within 24 business hours</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Visual Decorative Battery Cell */}
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-zinc-100 rounded-full border-8 border-white flex items-center justify-center overflow-hidden z-0 hidden xl:flex">
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 opacity-10"
                  style={{ backgroundImage: 'radial-gradient(circle at center, black 1px, transparent 1px)', backgroundSize: '10px 10px' }}
                />
                <Zap size={48} className="text-brand-red opacity-20" />
            </div>
          </motion.div>
        </div>
      </header>

      {/* --- Section 2: Routing Matrix --- */}
      <section id="routing-matrix" className="py-24 px-6 bg-zinc-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <SectionHeading 
            title="Choose the Fastest Route for Your Request"
            subtitle="Chọn tuyến liên hệ phù hợp nhất với nhu cầu của bạn để chúng tôi hỗ trợ kịp thời nhất."
          />

          <div className="grid lg:grid-cols-12 gap-12">
            {/* Matrix Navigation */}
            <div className="lg:col-span-5 space-y-4">
              {[
                { id: 'quote', title: 'Price & Bulk Order', for: 'Doanh nghiệp, dự án, đại lý cần báo giá.', icon: <Zap size={20} /> },
                { id: 'dealer', title: 'Become a Dealer', for: 'Hợp tác phân phối, cửa hàng năng lượng.', icon: <Users size={20} /> },
                { id: 'oem', title: 'OEM/ODM Engineering', for: 'Phát triển pack pin thiết kế riêng.', icon: <Settings size={20} /> },
                { id: 'tech', title: 'Technical Support', for: 'Giải pháp lắp đặt, xử lý lỗi kỹ thuật.', icon: <ShieldCheck size={20} /> },
                { id: 'warranty', title: 'Warranty Service', for: 'Chính sách bảo hành, đổi trả sản phẩm.', icon: <CheckCircle2 size={20} /> },
                { id: 'other', title: 'Business Partnership', for: 'Hợp tác truyền thông, cung ứng, khác.', icon: <FileText size={20} /> },
              ].map((route) => (
                <button 
                  key={route.id}
                  onClick={() => setActiveRoute(route.id as RouteType)}
                  className={`w-full group flex items-start text-left p-6 rounded-2xl border transition-all duration-300 ${
                    activeRoute === route.id 
                    ? 'bg-brand-black border-brand-black text-white shadow-xl' 
                    : 'bg-white border-zinc-200 text-brand-black hover:border-brand-red hover:shadow-md'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                    activeRoute === route.id ? 'bg-brand-red text-white' : 'bg-zinc-100 text-zinc-400 group-hover:bg-brand-red/10 group-hover:text-brand-red'
                  }`}>
                    {route.icon}
                  </div>
                  <div className="ml-5">
                    <p className={`font-bold text-lg leading-tight mb-1 transition-colors ${activeRoute === route.id ? 'text-white' : 'text-brand-black'}`}>
                      {route.title}
                    </p>
                    <p className={`text-sm ${activeRoute === route.id ? 'text-zinc-400' : 'text-zinc-500'}`}>
                      {route.for}
                    </p>
                  </div>
                  <ChevronRight size={20} className={`ml-auto mt-1 transition-transform ${activeRoute === route.id ? 'translate-x-1 text-brand-red' : 'text-zinc-300'}`} />
                </button>
              ))}
            </div>

            {/* Matrix Detail / Form Area */}
            <div className="lg:col-span-7">
              <div className="sticky top-24 bg-white rounded-3xl border border-zinc-200 shadow-xl p-8 md:p-12">
                <AnimatePresence mode="wait">
                  <motion.div 
                    key={activeRoute}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center gap-4 mb-8">
                       <div className="w-20 h-[2px] bg-brand-red" />
                       <span className="text-zinc-400 text-xs font-mono font-bold uppercase tracking-widest">Active Route: {activeRoute.toUpperCase()}</span>
                    </div>

                    {!formSuccess ? (
                      <form onSubmit={handleFormSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-xs font-bold text-zinc-900 uppercase tracking-wider mb-2">Họ và tên *</label>
                            <input required type="text" className="w-full bg-zinc-100 border-none rounded-xl px-5 py-4 focus:ring-2 focus:ring-brand-red/20 transition-all font-medium" placeholder="Nguyễn Văn A" />
                          </div>
                          <div>
                            <label className="block text-xs font-bold text-zinc-900 uppercase tracking-wider mb-2">Số điện thoại *</label>
                            <input required type="tel" className="w-full bg-zinc-100 border-none rounded-xl px-5 py-4 focus:ring-2 focus:ring-brand-red/20 transition-all font-medium" placeholder="09xx xxx xxx" />
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-xs font-bold text-zinc-900 uppercase tracking-wider mb-2">Email *</label>
                            <input required type="email" className="w-full bg-zinc-100 border-none rounded-xl px-5 py-4 focus:ring-2 focus:ring-brand-red/20 transition-all font-medium" placeholder="email@example.com" />
                          </div>
                          <div>
                            <label className="block text-xs font-bold text-zinc-900 uppercase tracking-wider mb-2">Công ty / Tổ chức</label>
                            <input type="text" className="w-full bg-zinc-100 border-none rounded-xl px-5 py-4 focus:ring-2 focus:ring-brand-red/20 transition-all font-medium" placeholder="Tên công ty" />
                          </div>
                        </div>

                        {activeRoute === 'quote' && (
                          <div className="space-y-6">
                            <div>
                              <label className="block text-xs font-bold text-zinc-900 uppercase tracking-wider mb-2">Sản phẩm quan tâm</label>
                              <select className="w-full bg-zinc-100 border-none rounded-xl px-5 py-4 focus:ring-2 focus:ring-brand-red/20 transition-all font-medium appearance-none">
                                <option>Lithium Storage Battery (Dân dụng)</option>
                                <option>Energy Storage System (Công nghiệp)</option>
                                <option>Golf Cart Battery Pack</option>
                                <option>EV / Specialized Equipment Battery</option>
                                <option>UPS / Backup Power Battery</option>
                              </select>
                            </div>
                            <div className="grid md:grid-cols-2 gap-6">
                              <div>
                                <label className="block text-xs font-bold text-zinc-900 uppercase tracking-wider mb-2">Số lượng / Công suất (Dự kiến)</label>
                                <input type="text" className="w-full bg-zinc-100 border-none rounded-xl px-5 py-4 focus:ring-2 focus:ring-brand-red/20 transition-all font-medium" placeholder="Ví dụ: 50 units / 200kWh" />
                              </div>
                              <div>
                                <label className="block text-xs font-bold text-zinc-900 uppercase tracking-wider mb-2">Ứng dụng mục tiêu</label>
                                <input type="text" className="w-full bg-zinc-100 border-none rounded-xl px-5 py-4 focus:ring-2 focus:ring-brand-red/20 transition-all font-medium" placeholder="Ví dụ: Solar storage, Xe golf..." />
                              </div>
                            </div>
                          </div>
                        )}

                        {activeRoute === 'dealer' && (
                          <div className="grid md:grid-cols-2 gap-6">
                            <div>
                              <label className="block text-xs font-bold text-zinc-900 uppercase tracking-wider mb-2">Khu vực dự kiến (Tỉnh/Thành)</label>
                              <input required type="text" className="w-full bg-zinc-100 border-none rounded-xl px-5 py-4 focus:ring-2 focus:ring-brand-red/20 transition-all font-medium" placeholder="Ví dụ: Hà Nội, Đà Nẵng..." />
                            </div>
                            <div>
                              <label className="block text-xs font-bold text-zinc-900 uppercase tracking-wider mb-2">Mô hình kinh doanh hiện tại</label>
                              <select className="w-full bg-zinc-100 border-none rounded-xl px-5 py-4 focus:ring-2 focus:ring-brand-red/20 transition-all font-medium appearance-none">
                                <option>Cửa hàng thiết bị điện</option>
                                <option>Đơn vị lắp đặt Solar</option>
                                <option>Công ty kỹ thuật / dự án</option>
                                <option>Nhà phân phối khu vực</option>
                              </select>
                            </div>
                          </div>
                        )}

                        {activeRoute === 'oem' && (
                          <div className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                              <div>
                                <label className="block text-xs font-bold text-zinc-900 uppercase tracking-wider mb-2">Cell Chemistry</label>
                                <select className="w-full bg-zinc-100 border-none rounded-xl px-5 py-4 focus:ring-2 focus:ring-brand-red/20 transition-all font-medium appearance-none">
                                  <option>LiFePO4 (LFP)</option>
                                  <option>NMC / Li-ion</option>
                                  <option>LTO</option>
                                  <option>Not sure / Tư vấn thêm</option>
                                </select>
                              </div>
                              <div>
                                <label className="block text-xs font-bold text-zinc-900 uppercase tracking-wider mb-2">Yêu cầu Điện áp (V) / Dung lượng (Ah)</label>
                                <input type="text" className="w-full bg-zinc-100 border-none rounded-xl px-5 py-4 focus:ring-2 focus:ring-brand-red/20 transition-all font-medium" placeholder="Ví dụ: 48V - 100Ah" />
                              </div>
                            </div>
                            <div className="p-6 bg-zinc-100 rounded-2xl border border-dashed border-zinc-300 text-center">
                              <input type="file" id="file-upload" className="hidden" />
                              <label htmlFor="file-upload" className="cursor-pointer flex flex-col items-center">
                                <Download size={32} className="text-zinc-400 mb-3" />
                                <span className="text-sm font-bold text-zinc-900">Upload Drawing / Reference Files</span>
                                <span className="text-xs text-zinc-500 mt-1">PDF, DXF, PNG (Max 10MB)</span>
                              </label>
                            </div>
                          </div>
                        )}

                        {(activeRoute === 'tech' || activeRoute === 'warranty') && (
                          <div className="grid md:grid-cols-2 gap-6">
                            <div>
                              <label className="block text-xs font-bold text-zinc-900 uppercase tracking-wider mb-2">Mã sản phẩm (Model)</label>
                              <input required type="text" className="w-full bg-zinc-100 border-none rounded-xl px-5 py-4 focus:ring-2 focus:ring-brand-red/20 transition-all font-medium" placeholder="Ví dụ: PKG-LFP-48100" />
                            </div>
                            <div>
                              <label className="block text-xs font-bold text-zinc-900 uppercase tracking-wider mb-2">{activeRoute === 'tech' ? 'Loại vấn đề' : 'Số Serial (S/N)'}</label>
                              <input required type="text" className="w-full bg-zinc-100 border-none rounded-xl px-5 py-4 focus:ring-2 focus:ring-brand-red/20 transition-all font-medium" placeholder={activeRoute === 'tech' ? 'Ví dụ: Lỗi giao tiếp, sạc...' : 'Số serial trên thân pin'} />
                            </div>
                          </div>
                        )}

                        <div>
                          <label className="block text-xs font-bold text-zinc-900 uppercase tracking-wider mb-2">Nội dung chi tiết</label>
                          <textarea className="w-full bg-zinc-100 border-none rounded-xl px-5 py-4 focus:ring-2 focus:ring-brand-red/20 transition-all font-medium min-h-[120px]" placeholder="Hãy cho chúng tôi biết nhu cầu cụ thể của bạn..."></textarea>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center gap-6 pt-4">
                          <button type="submit" className="w-full sm:w-auto px-10 py-5 bg-brand-red text-white font-bold rounded-xl hover:bg-brand-black transition-all shadow-lg hover:shadow-brand-red/20 flex items-center justify-center gap-3">
                            <Send size={20} />
                            <span>Gửi yêu cầu ngay</span>
                          </button>
                          <p className="text-[11px] text-zinc-400 font-medium leading-tight">
                            Bằng cách gửi form, bạn đồng ý với <br />
                            <a href="#" className="underline hover:text-brand-red">Chính sách bảo mật</a> của PKGbattery.
                          </p>
                        </div>
                      </form>
                    ) : (
                      <div className="py-20 text-center">
                        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                          <CheckCircle2 size={40} />
                        </div>
                        <h3 className="text-3xl font-bold text-brand-black mb-4">Yêu cầu đã được gửi!</h3>
                        <p className="text-zinc-500 max-w-sm mx-auto mb-10">
                          Đội ngũ PKGbattery đã nhận được thông tin. Chúng tôi sẽ phản hồi bạn trong vòng 24 giờ làm việc.
                        </p>
                        <button onClick={() => setFormSuccess(false)} className="px-8 py-4 bg-zinc-100 text-zinc-900 font-bold rounded-xl hover:bg-zinc-200 transition-all">
                          Gửi yêu cầu khác
                        </button>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>

                {/* Response Process Timeline */}
                <div className="mt-12 pt-12 border-t border-zinc-100">
                  <p className="text-[10px] font-mono font-bold text-zinc-400 uppercase tracking-widest mb-6">Response Process Timeline</p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      { step: '01', title: 'Received', color: 'bg-zinc-100' },
                      { step: '02', title: 'Routed', color: 'bg-zinc-100' },
                      { step: '03', title: 'Review', color: 'bg-zinc-100' },
                      { step: '04', title: 'Contact', color: 'bg-brand-red' },
                    ].map((step, i) => (
                      <div key={i} className="flex flex-col gap-2">
                        <div className={`h-1.5 w-full rounded-full ${step.color}`} />
                        <span className="text-[10px] font-bold text-zinc-900 uppercase">{step.step} / {step.title}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Section 3: Dealer Locator --- */}
      <section className="py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            title="Find PKGbattery Dealers Across Vietnam"
            subtitle="Kết nối với đại lý hoặc điểm hỗ trợ khu vực để được tư vấn và trải nghiệm sản phẩm nhanh hơn."
          />

          <div className="bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row h-[700px] border border-zinc-800">
            {/* Dealer Map Placeholder */}
            <div className="lg:w-3/5 relative bg-zinc-800">
              <div className="absolute inset-0 opacity-10 technical-grid" />
              {/* Simple Visual Map Represenation */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                 <div className="relative w-[300px] h-[500px] border border-white/5 opacity-50 rounded-full blur-3xl bg-brand-red/20 animate-pulse" />
              </div>
              
              <div className="absolute inset-0 p-8 flex flex-col justify-between pointer-events-none">
                <div className="flex justify-between">
                  <div className="p-4 bg-black/40 backdrop-blur-md rounded-xl border border-white/10 pointer-events-auto">
                    <p className="text-white text-sm font-bold mb-1">Vietnam Service Network</p>
                    <p className="text-zinc-500 text-xs">8 Authorized Regions</p>
                  </div>
                </div>
                
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 pointer-events-auto">
                  {DEALERS.map((dealer) => (
                    <motion.button 
                      key={dealer.id}
                      onClick={() => setSelectedDealer(dealer)}
                      className="absolute group"
                      style={{ 
                        left: `${(dealer.lng - 105) * 40}px`, 
                        top: `${(22 - dealer.lat) * 40}px` 
                      }}
                      animate={selectedDealer?.id === dealer.id ? { scale: 1.2 } : { scale: 1 }}
                    >
                      <div className={`w-4 h-4 rounded-full border-2 border-white transition-all duration-300 ${
                        selectedDealer?.id === dealer.id ? 'bg-brand-red' : 'bg-zinc-500 group-hover:bg-brand-red'
                      }`} />
                      {selectedDealer?.id === dealer.id && (
                        <div className="absolute -inset-2 border border-brand-red rounded-full animate-ping" />
                      )}
                    </motion.button>
                  ))}
                </div>

                <div className="mt-auto pointer-events-auto max-w-xs">
                  <AnimatePresence mode="wait">
                    {selectedDealer && (
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        className="bg-brand-black/90 backdrop-blur-xl border border-white/10 p-6 rounded-2xl"
                      >
                        <h4 className="text-white font-bold mb-1">{selectedDealer.name}</h4>
                        <p className="text-zinc-400 text-xs mb-4">{selectedDealer.address}</p>
                        <div className="flex gap-2">
                           <a href={`tel:${selectedDealer.phone}`} className="flex-1 bg-brand-red text-white text-xs font-bold py-2.5 rounded-lg text-center">Gọi ngay</a>
                           <button className="px-3 bg-zinc-800 text-white rounded-lg"><MapPin size={14} /></button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* Dealer List Panel */}
            <div className="lg:w-2/5 flex flex-col bg-brand-black border-l border-zinc-800">
               <div className="p-6 border-b border-zinc-800">
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" size={18} />
                    <input 
                      type="text" 
                      placeholder="Tìm theo tỉnh thành hoặc tên đại lý..."
                      value={searchDealer}
                      onChange={(e) => setSearchDealer(e.target.value)}
                      className="w-full bg-zinc-900 border border-zinc-700 rounded-xl pl-12 pr-4 py-4 text-white text-sm focus:ring-1 focus:ring-brand-red focus:border-brand-red transition-all"
                    />
                  </div>
               </div>

               <div className="flex-1 overflow-y-auto px-2 py-4 scrollbar-hide">
                  {filteredDealers.map((dealer) => (
                    <button 
                      key={dealer.id}
                      onClick={() => setSelectedDealer(dealer)}
                      className={`w-full text-left p-6 rounded-2xl transition-all mb-2 group ${
                        selectedDealer?.id === dealer.id ? 'bg-zinc-800 shadow-xl' : 'hover:bg-zinc-900'
                      }`}
                    >
                      <div className="flex items-start justify-between">
                         <div className="flex-1">
                            <span className="text-[10px] font-bold text-brand-red uppercase tracking-widest block mb-1">{dealer.region}</span>
                            <h4 className={`font-bold transition-colors ${selectedDealer?.id === dealer.id ? 'text-white' : 'text-zinc-300'}`}>{dealer.name}</h4>
                            <p className="text-zinc-500 text-xs mt-2 line-clamp-1">{dealer.address}</p>
                         </div>
                         <ChevronRight size={18} className={`transition-transform ${selectedDealer?.id === dealer.id ? 'text-brand-red translate-x-1' : 'text-zinc-700'}`} />
                      </div>
                      
                      {selectedDealer?.id === dealer.id && (
                        <motion.div 
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          className="mt-4 pt-4 border-t border-zinc-700 overflow-hidden"
                        >
                           <div className="flex items-center gap-3 text-zinc-400 text-xs mb-2">
                             <Phone size={14} /> <span>{dealer.phone}</span>
                           </div>
                           <div className="flex gap-2 pt-2">
                              <a href={`tel:${dealer.phone}`} className="flex-1 bg-white hover:bg-brand-red hover:text-white text-brand-black text-[10px] font-bold py-2 rounded-lg text-center transition-colors">CALL SALES</a>
                              <button className="flex-1 bg-zinc-700 text-white text-[10px] font-bold py-2 rounded-lg">DIRECTION</button>
                           </div>
                        </motion.div>
                      )}
                    </button>
                  ))}
               </div>

               <div className="p-6 bg-zinc-900 border-t border-zinc-800">
                  <p className="text-zinc-500 text-xs text-center">PKGbattery Authorized Dealer Network</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Section 4: Capability & Social Proof --- */}
      <section className="py-24 px-6 bg-zinc-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <SectionHeading 
                title="Built for Business-Critical Battery Applications"
                subtitle="Năng lực đáp ứng các dự án quy mô từ lưu trữ dân dụng đến xe điện sân golf và hệ thống công nghiệp."
              />
              
              <div className="grid grid-cols-2 gap-8 my-10">
                {[
                  { value: '8+', label: 'Authorized Dealers' },
                  { value: 'OEM/ODM', label: 'Capability' },
                  { value: '24h', label: 'Fast Response' },
                  { value: '100%', label: 'Quality Control' },
                ].map((stat, i) => (
                  <div key={i}>
                    <p className="text-3xl font-bold text-brand-black mb-1">{stat.value}</p>
                    <p className="text-sm font-medium text-zinc-500 uppercase tracking-widest">{stat.label}</p>
                  </div>
                ))}
              </div>

              <div className="bg-white p-8 rounded-3xl border border-zinc-200 shadow-sm relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-brand-red/5 -translate-y-1/2 translate-x-1/2 rounded-full transition-transform group-hover:scale-150" />
                <p className="text-lg italic text-brand-black mb-6 relative z-10">
                  “The best contact experience in a technical B2B industry is not the shortest form — it is the clearest route to the right team.”
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-red flex items-center justify-center text-white font-bold">P</div>
                  <div>
                    <p className="font-bold text-brand-black">PKGbattery Support</p>
                    <p className="text-xs text-zinc-500">Customer Support Strategy</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
               {[
                 { title: 'Product Test', type: 'Video', image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=600&auto=format&fit=crop' },
                 { title: 'Dealer Event', type: 'Photo', image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600&auto=format&fit=crop' },
                 { title: 'Factory Insight', type: 'Update', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop' },
                 { title: 'Project Delivery', type: 'Media', image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=600&auto=format&fit=crop' },
               ].map((tile, i) => (
                 <motion.div 
                    key={i}
                    whileHover={{ scale: 1.02 }}
                    className={`relative rounded-2xl overflow-hidden aspect-square shadow-lg group ${i === 2 ? 'translate-y-4' : i === 3 ? 'translate-y-4' : ''}`}
                 >
                    <img src={tile.image} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt={tile.title} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute inset-0 p-6 flex flex-col justify-end">
                      <span className="text-[10px] font-bold text-brand-red uppercase tracking-widest block mb-1">{tile.type}</span>
                      <h5 className="text-white font-bold">{tile.title}</h5>
                    </div>
                 </motion.div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- Section 5: FAQ & Help --- */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <SectionHeading 
                title="Support FAQ"
                subtitle="Tìm câu trả lời nhanh cho các vấn đề thường gặp trước khi liên hệ."
              />
              
              <div className="flex flex-col gap-4 mt-8">
                <div className="p-8 bg-zinc-900 rounded-3xl border border-zinc-800 relative overflow-hidden group">
                   <div className="relative z-10">
                      <p className="text-white/50 text-xs font-bold uppercase tracking-widest mb-4">Download Resource</p>
                      <h4 className="text-2xl font-bold text-white mb-2">Company Profile 2026</h4>
                      <p className="text-zinc-500 text-sm mb-6">Trọn bộ giải pháp pin Lithium, chính sách đại lý và năng lực sản xuất của PKGbattery.</p>
                      <button className="flex items-center gap-3 px-6 py-3 bg-brand-red text-white text-sm font-bold rounded-xl hover:bg-white hover:text-brand-red transition-all">
                        <Download size={18} />
                        <span>Download PDF (12MB)</span>
                      </button>
                   </div>
                   <div className="absolute bottom-0 right-0 translate-y-1/2 translate-x-1/4 opacity-10 group-hover:scale-110 transition-transform">
                      <FileText size={200} />
                   </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4">
              {FAQS.map((faq, i) => (
                <div key={i} className="bg-white border border-zinc-200 rounded-2xl overflow-hidden shadow-sm hover:border-zinc-300 transition-all">
                  <button className="w-full flex items-center justify-between p-6 text-left group">
                    <span className="font-bold text-brand-black group-hover:text-brand-red transition-all">{faq.question}</span>
                    <ChevronDown size={20} className="text-zinc-400 group-hover:text-brand-black transition-all" />
                  </button>
                  <div className="px-6 pb-6 text-zinc-500 text-sm leading-relaxed border-t border-zinc-50 pt-4 bg-zinc-50/50">
                    {faq.answer}
                  </div>
                </div>
              ))}
              
              <div className="p-6 bg-zinc-50 rounded-2xl flex items-center justify-between gap-6 border border-dashed border-zinc-200">
                <div className="flex items-center gap-4">
                   <div className="w-12 h-12 rounded-full bg-brand-red/10 flex items-center justify-center text-brand-red">
                      <Info size={24} />
                   </div>
                   <p className="text-sm font-medium text-zinc-700">Still need help? Let our expert sales team guide you.</p>
                </div>
                <button className="px-6 py-3 bg-white border border-zinc-200 text-zinc-900 text-xs font-bold rounded-lg hover:border-brand-red transition-all whitespace-nowrap">CONTACT SALES</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Final Conversion & HQ --- */}
      <section className="py-24 px-6 bg-brand-black text-white relative overflow-hidden">
        <TechnicalLine className="top-0 left-0 right-0 opacity-10" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-end">
            <div>
              <h2 className="text-5xl font-bold mb-8 leading-tight">Ready to move your <br /> battery request forward?</h2>
              <p className="text-zinc-400 text-xl max-w-md mb-12">
                Chọn cách nhanh nhất để kết nối với đội ngũ sale, kỹ thuật hoặc hỗ trợ đại lý của PKGbattery.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a href="tel:0989000000" className="px-8 py-4 bg-brand-red text-white font-bold rounded-xl hover:bg-white hover:text-brand-red transition-all flex items-center gap-3">
                  <Phone size={20} />
                  <span>Call 0989 XXX XXX</span>
                </a>
                <button className="px-8 py-4 bg-zinc-800 text-white font-bold rounded-xl hover:bg-zinc-700 transition-all flex items-center gap-3">
                  <MessageSquare size={20} />
                  <span>Chat via Zalo</span>
                </button>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md">
                <div className="flex items-center gap-4 mb-8">
                   <div className="w-12 h-12 rounded-2xl bg-brand-red flex items-center justify-center text-white">
                      <MapPin size={24} />
                   </div>
                   <div>
                     <h4 className="font-bold text-white uppercase tracking-widest text-sm">Headquarters</h4>
                     <p className="text-zinc-400 text-xs">Văn phòng đại diện Hà Nội</p>
                   </div>
                </div>
                <p className="text-lg text-zinc-200 mb-6">123 Thái Hà, Đống Đa, <br /> Hà Nội, Việt Nam</p>
                <div className="flex gap-4 border-t border-white/10 pt-8 mt-8">
                   <a href="#" className="flex-1 p-4 bg-white/5 rounded-xl text-center hover:bg-white/10 transition-all">
                      <Facebook size={20} className="mx-auto mb-2" />
                      <span className="text-[10px] font-bold text-zinc-500 uppercase">Facebook</span>
                   </a>
                   <a href="#" className="flex-1 p-4 bg-white/5 rounded-xl text-center hover:bg-white/10 transition-all">
                      <Linkedin size={20} className="mx-auto mb-2" />
                      <span className="text-[10px] font-bold text-zinc-500 uppercase">LinkedIn</span>
                   </a>
                   <a href="#" className="flex-1 p-4 bg-white/5 rounded-xl text-center hover:bg-white/10 transition-all">
                      <Youtube size={20} className="mx-auto mb-2" />
                      <span className="text-[10px] font-bold text-zinc-500 uppercase">YouTube</span>
                   </a>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Basic */}
      <footer className="py-12 border-t border-zinc-100 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-brand-black flex items-center justify-center text-white font-black text-xl italic">PKG</div>
            <span className="text-xl font-bold tracking-tighter text-brand-black">battery</span>
          </div>
          <p className="text-zinc-400 text-xs">© 2026 PKGbattery Technology. All rights reserved.</p>
          <div className="flex gap-8">
             <a href="#" className="text-xs font-bold text-zinc-500 hover:text-brand-red tracking-widest uppercase transition-colors">Privacy</a>
             <a href="#" className="text-xs font-bold text-zinc-500 hover:text-brand-red tracking-widest uppercase transition-colors">Integrations</a>
             <a href="#" className="text-xs font-bold text-zinc-500 hover:text-brand-red tracking-widest uppercase transition-colors">Careers</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
