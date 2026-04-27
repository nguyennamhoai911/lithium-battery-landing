import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Battery, 
  Settings, 
  Workflow, 
  ShieldCheck, 
  ChevronRight, 
  Download, 
  Play, 
  CheckCircle2, 
  FileText, 
  Users, 
  BarChart3, 
  HelpCircle,
  Mail,
  Phone,
  MessageSquare,
  ArrowRight,
  Cpu,
  Zap,
  Box,
  Truck,
  Globe,
  Quote
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  LineChart, 
  Line,
  Legend
} from 'recharts';
import { cn } from './lib/utils';

// --- Data & Constants ---

const ROI_DATA = [
  { year: 'Năm 1', leadAcid: 100, lithium: 140 },
  { year: 'Năm 2', leadAcid: 160, lithium: 145 },
  { year: 'Năm 3', leadAcid: 220, lithium: 150 },
  { year: 'Năm 4', leadAcid: 380, lithium: 155 }, // Lead acid requires replacement
  { year: 'Năm 5', leadAcid: 440, lithium: 160 },
];

const CAPABILITY_TABLE = [
  { trait: 'Dải điện áp', spec: '12V / 24V / 36V / 48V / 72V / 80V / 96V / Tùy chỉnh (lên đến 800V)' },
  { trait: 'Dung lượng (Ah)', spec: '20Ah - 1000Ah+ (Dựa trên nhu cầu runtime thực tế)' },
  { trait: 'Cell Chemistry', spec: 'LiFePO4 (Chủ đạo công nghiệp), NMC (Ưu tiên mật độ năng lượng)' },
  { trait: 'Giao tiếp BMS', spec: 'CANbus 2.0B, RS485, RS232, UART, Bluetooth, IoT (4G/WiFi)' },
  { trait: 'Chu kỳ sạc xả', spec: '> 4000 chu kỳ @ 80% DOD (LiFePO4)' },
  { trait: 'Tiêu chuẩn vỏ', spec: 'Thép sơn tĩnh điện, Nhôm AlMg3, Nhựa ABS (IP54 - IP67)' },
];

const TCO_TABLE = [
  { item: 'Chi phí đầu tư', leadAcid: 'Thấp', lithium: 'Cao' },
  { item: 'Tuổi thọ sử dụng', leadAcid: '1.5 - 2 năm', lithium: '6 - 10 năm' },
  { item: 'Hiệu suất sạc', leadAcid: '75 - 80%', lithium: '95 - 98%' },
  { item: 'Bảo trì định kỳ', leadAcid: 'Cần châm nước, khử sunfat', lithium: 'Không cần bảo trì' },
  { item: 'Chi phí vận hành (5 năm)', leadAcid: '350.000.000đ', lithium: '160.000.000đ' },
];

// --- Sub-components ---

const SectionHeading = ({ eyebrow, title, description, light = false }: { eyebrow: string, title: string, description?: string, light?: boolean }) => (
  <div className={cn("max-w-3xl mb-16", light ? "text-white" : "text-brand-black")}>
    <motion.span 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="inline-block text-brand-red font-bold tracking-wider uppercase text-sm mb-4"
    >
      {eyebrow}
    </motion.span>
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 leading-[1.1]"
    >
      {title}
    </motion.h2>
    {description && (
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className={cn("text-lg leading-relaxed", light ? "text-gray-400" : "text-brand-gray")}
      >
        {description}
      </motion.p>
    )}
  </div>
);

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300 py-4",
      scrolled ? "glass-nav py-3" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="bg-brand-red p-1.5 rounded-lg group-hover:scale-110 transition-transform">
            <Battery className="text-white w-6 h-6 fill-current" />
          </div>
          <span className="text-2xl font-black tracking-tighter text-brand-black">
            PKG<span className="text-brand-red">BATTERY</span>
          </span>
        </div>
        
        <div className="hidden md:flex items-center gap-10">
          {['Giải pháp', 'Năng lực', 'Quy trình', 'Chất lượng', 'FAQ'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-sm font-semibold text-brand-black hover:text-brand-red transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-red transition-all group-hover:w-full" />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button className="hidden sm:inline-flex items-center gap-2 text-sm font-bold text-brand-gray hover:text-brand-black transition-colors">
            <Download size={18} />
            Checklist kỹ thuật
          </button>
          <a 
            href="#contact"
            className="bg-brand-red hover:bg-brand-red-dark text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-brand-red/20 transition-all hover:scale-105 active:scale-95"
          >
            Gửi yêu cầu
          </a>
        </div>
      </div>
    </nav>
  );
};

export default function App() {
  return (
    <div className="font-sans antialiased">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden hero-gradient">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-brand-red/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 -left-20 w-[400px] h-[400px] bg-brand-black/5 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-red/10 text-brand-red rounded-full text-xs font-bold uppercase tracking-wider mb-8">
              <Zap size={14} className="fill-current" />
              OEM/ODM Pin Lithium Chuyên Dụng
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-brand-black leading-[1.05] tracking-tight mb-8">
              Thiết kế bộ pin phù hợp <span className="text-gradient-red">tuyệt đối</span> với thiết bị của bạn
            </h1>
            <p className="text-xl text-brand-gray leading-relaxed mb-10 max-w-xl">
              PKGBattery không chỉ cung cấp pin. Chúng tôi là đối tác kỹ thuật giúp bạn thiết kế, thử nghiệm và sản xuất hàng loạt các giải pháp năng lượng tối ưu cho máy móc công nghiệp, AGV và robot chuyên dụng.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button className="w-full sm:w-auto bg-brand-black shadow-2xl hover:bg-black text-white px-8 py-5 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all group">
                Bắt đầu dự án ngay
                <ChevronRight className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="w-full sm:w-auto bg-white border border-gray-200 hover:border-brand-red px-8 py-5 rounded-2xl font-bold text-brand-gray hover:text-brand-red transition-all flex items-center justify-center gap-3">
                Trao đổi với kỹ sư
              </button>
            </div>

            <div className="mt-16 flex items-center gap-8 border-t border-gray-100 pt-10">
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-brand-black italic">24h</span>
                <span className="text-xs text-brand-gray font-medium uppercase tracking-widest">Phản hồi kỹ thuật</span>
              </div>
              <div className="w-px h-10 bg-gray-200" />
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-brand-black italic">14 Ngày</span>
                <span className="text-xs text-brand-gray font-medium uppercase tracking-widest">Hoàn thiện Prototype</span>
              </div>
              <div className="w-px h-10 bg-gray-200" />
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-brand-black italic">+50</span>
                <span className="text-xs text-brand-gray font-medium uppercase tracking-widest">Giải pháp đã triển khai</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 bg-white p-4 rounded-[40px] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] border border-gray-100 overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1558444479-c849cf58f17a?auto=format&fit=crop&q=80&w=1000" 
                alt="Battery Tech" 
                className="w-full h-auto rounded-[32px] group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/60 via-transparent to-transparent opacity-60 pointer-events-none" />
              <div className="absolute bottom-10 left-10 text-white">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-sm font-bold uppercase tracking-widest">Live Monitoring</span>
                </div>
                <p className="text-2xl font-bold">Smart BMS CAN 2.0B Integration</p>
              </div>
            </div>
            
            {/* Float Cards */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -right-4 z-20 bg-white p-6 rounded-3xl shadow-xl border border-gray-100 max-w-[200px]"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-brand-red/10 p-2 rounded-lg text-brand-red">
                  <ShieldCheck size={20} />
                </div>
                <span className="text-[10px] font-bold text-brand-gray uppercase">Safety Rating</span>
              </div>
              <p className="text-sm font-bold text-brand-black">Hệ thống an toàn 12 lớp đạt chuẩn IEC 62619</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* --- PROBLEM & PAIN POINTS --- */}
      <section className="py-32 bg-white" id="giải pháp">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading 
            eyebrow="Tình trạng thực tế"
            title="Tại sao pin tiêu chuẩn thường thất bại trong thiết bị chuyên dụng?"
            description="Các giải pháp pin mua sẵn thường gây ra những hạn chế nghiêm trọng cho đội ngũ R&D và sản xuất khi cố gắng tích hợp vào một hệ thống máy móc có yêu cầu đặc thù."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Box />,
                title: "Không vừa khoang máy",
                desc: "Phải sửa đổi thiết kế cơ khí của thiết bị chỉ để chứa một bộ pin tiêu chuẩn, gây lãng phí không gian và rủi ro rung lắc."
              },
              {
                icon: <Zap />,
                title: "Dòng xả không đáp ứng",
                desc: "Motor hụt tải khi khởi động hoặc nóng lên nhanh chóng do nội trở pin không được tính toán khớp với hồ sơ tải thực tế."
              },
              {
                icon: <MessageSquare />,
                title: "Mất kết nối với hệ thống",
                desc: "BMS không thể giao tiếp với Controller của thiết bị qua CANbus hoặc RS485, khiến việc giám sát SOC/SOH trở nên bất khả thi."
              },
              {
                icon: <Truck />,
                title: "Logistics & Chứng nhận",
                desc: "Khó khăn trong việc xin giấy phép vận chuyển UN38.3 hoặc MSDS khi nhập khẩu pin rời, gây trễ tiến độ bàn giao dự án."
              },
              {
                icon: <Workflow />,
                title: "Rủi ro từ nhà cung cấp xa",
                desc: "Thời gian phản hồi chậm, rào cản ngôn ngữ và khó khăn trong việc gửi mẫu hiệu chỉnh đối với các supplier nước ngoài."
              },
              {
                icon: <CheckCircle2 />,
                title: "Chất lượng không đồng nhất",
                desc: "Mẫu thử rất tốt nhưng lô sản xuất hàng loạt lại có sự sai lệch về dung lượng và tuổi thọ giữa các pack."
              }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 rounded-3xl bg-gray-50 border border-gray-100 premium-card"
              >
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-brand-red shadow-sm mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-brand-black mb-4">{item.title}</h3>
                <p className="text-brand-gray text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- TECHNICAL CAPABILITIES (DEEP CONTENT) --- */}
      <section className="py-32 bg-brand-black relative overflow-hidden" id="năng lực">
        <div className="absolute top-0 right-0 w-[800px] h-full bg-brand-red opacity-[0.02] -skew-x-12 transform translate-x-1/2" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-5 gap-16">
            <div className="lg:col-span-2">
              <SectionHeading 
                light
                eyebrow="Năng lực tùy chỉnh"
                title="Chúng tôi kiểm soát mọi lớp công nghệ của bộ pin"
                description="Khả năng ODM của PKGBattery cho phép khách hàng can thiệp sâu vào cấu hình kỹ thuật từ Cell Chemistry cho đến giao thức truyền tin của BMS."
              />
              
              <div className="space-y-10">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-brand-red border border-white/5">
                    <Cpu size={28} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-2">Pát-triển BMS Riêng</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Thiết kế logic bảo vệ, cân bằng cell và thuật toán nội suy SOC cực kỳ chính xác, tối ưu hóa cho từng loại cell và tải đặc thù.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-brand-red border border-white/5">
                    <Workflow size={28} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-2">Cơ khí & Tản nhiệt</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Mô phỏng 3D dòng nhiệt và khả năng chịu lực va đập, đảm bảo vỏ pin vừa khít và bền bỉ trong môi trường công nghiệp khắc nghiệt nhất.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-md rounded-[40px] p-8 md:p-12 border border-white/10"
              >
                <h3 className="text-2xl font-extrabold text-white mb-8 border-b border-white/10 pb-6">Bảng thông số khả năng thiết kế</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="text-gray-400 text-xs font-bold uppercase tracking-widest">
                        <th className="pb-6 w-1/3">Hạng mục</th>
                        <th className="pb-6">Giới hạn tùy chỉnh</th>
                      </tr>
                    </thead>
                    <tbody className="text-sm">
                      {CAPABILITY_TABLE.map((row, i) => (
                        <tr key={i} className="group border-b border-white/5 last:border-0">
                          <td className="py-5 font-bold text-gray-300 pr-4">{row.trait}</td>
                          <td className="py-5 text-gray-400 group-hover:text-white transition-colors">{row.spec}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                
                <div className="mt-12 p-6 rounded-2xl bg-brand-red/10 border border-brand-red/20 flex items-start gap-5">
                  <ShieldCheck className="text-brand-red flex-shrink-0" size={32} />
                  <div>
                    <p className="text-white font-bold mb-1">Tuân thủ tiêu chuẩn quốc tế</p>
                    <p className="text-gray-400 text-xs leading-relaxed">
                      Toàn bộ quy trình thiết kế và sản xuất tuân thủ ISO 9001:2015. Sản phẩm đầu ra đạt tiêu chuẩn UN38.3, IEC 62619, CE và RoHS tùy theo yêu cầu của dự án.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* --- VIDEO SECTION --- */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative rounded-[50px] overflow-hidden group shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1600" 
              alt="Assembly Line" 
              className="w-full h-[600px] object-cover group-hover:scale-105 transition-transform duration-[3s]"
            />
            <div className="absolute inset-0 bg-brand-black/40 flex flex-col items-center justify-center text-center p-6">
              <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-24 h-24 bg-brand-red rounded-full flex items-center justify-center text-white shadow-2xl relative mb-8"
              >
                <Play size={40} className="fill-current ml-2" />
                <div className="absolute inset-0 rounded-full border border-brand-red animate-ping opacity-50" />
              </motion.button>
              <h3 className="text-3xl md:text-5xl font-black text-white max-w-2xl leading-tight">
                Chứng kiến công nghệ thực thi đằng sau mỗi bộ pin
              </h3>
              <p className="mt-4 text-white/80 font-medium tracking-wide">VIDEO: QUY TRÌNH SẢN XUẤT PIN LITHIUM OEM TẠI VIỆT NAM (4:20)</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- ROI / TCO ANALYSIS (DATA DEPTH) --- */}
      <section className="py-32 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <SectionHeading 
                eyebrow="Phân tích hiệu quả đầu tư"
                title="Lợi thế kinh tế thực tế của Pin Lithium PKG"
                description="Dù chi phí đầu tư ban đầu cao hơn ắc quy chì truyền thống, nhưng lợi ích về hiệu suất hoạt động, không cần bảo trì và tuổi thọ cực dài giúp giảm TCO (Tổng chi phí sở hữu) xuống hơn 70% sau 5 năm."
              />

              <div className="overflow-x-auto mb-10">
                <table className="pkg-table bg-white rounded-2xl shadow-sm overflow-hidden">
                  <thead>
                    <tr>
                      <th>Chỉ số so sánh</th>
                      <th className="text-gray-400">Ắc quy chì</th>
                      <th className="text-brand-red">PKG Lithium</th>
                    </tr>
                  </thead>
                  <tbody>
                    {TCO_TABLE.map((row, i) => (
                      <tr key={i}>
                        <td className="font-bold text-sm">{row.item}</td>
                        <td className="text-sm text-gray-500 italic">{row.leadAcid}</td>
                        <td className="text-sm font-bold text-brand-black">{row.lithium}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <div className="bg-brand-red/5 p-8 rounded-3xl border border-brand-red/10 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <BarChart3 size={120} />
                </div>
                <div className="flex items-center gap-4 mb-4">
                  <Zap className="text-brand-red" size={24} />
                  <h4 className="text-lg font-bold">Xác nhận từ chuyên gia tài chính</h4>
                </div>
                <p className="text-brand-gray text-sm italic leading-relaxed">
                  "Việc chuyển đổi sang hệ thống pin thiết kế riêng không chỉ là câu chuyện về công nghệ, mà là sự tối ưu hóa dòng tiền hoạt động của nhà máy thông qua việc loại bỏ chi phí bảo trì và thay thế định kỳ."
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-[40px] shadow-xl border border-gray-100">
              <h4 className="text-center font-bold text-brand-gray mb-10 uppercase tracking-widest text-xs">Biểu đồ so sánh lũy kế chi phí (VND x 1,000,000)</h4>
              <div className="h-[400px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={ROI_DATA}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F1F5F9" />
                    <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{fill: '#94A3B8', fontSize: 12}} dy={10} />
                    <YAxis axisLine={false} tickLine={false} tick={{fill: '#94A3B8', fontSize: 12}} dx={-10} />
                    <Tooltip 
                      contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                    />
                    <Legend verticalAlign="top" height={36} iconType="circle" />
                    <Line 
                      name="Ắc quy chì"
                      type="monotone" 
                      dataKey="leadAcid" 
                      stroke="#94A3B8" 
                      strokeWidth={3} 
                      dot={{ r: 6, fill: "#94A3B8" }}
                      activeDot={{ r: 8 }} 
                    />
                    <Line 
                      name="PKGBattery Lithium"
                      type="monotone" 
                      dataKey="lithium" 
                      stroke="#E31E24" 
                      strokeWidth={4} 
                      dot={{ r: 6, fill: "#E31E24" }}
                      activeDot={{ r: 8 }} 
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <p className="mt-8 text-center text-xs text-brand-gray font-medium italic">
                * Dữ liệu dựa trên mô phỏng đội xe nâng 10 chiếc hoạt động 3 ca/ngày tại kho logistics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- WORKFLOW / PROCESS --- */}
      <section className="py-32 bg-white" id="quy trình">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading 
            eyebrow="Hành trình phát triển"
            title="Quy trình chuyên nghiệp từ ý tưởng đến sản xuất"
            description="Mỗi dự án tại PKGBattery đều đi qua một lộ trình khắt khe để đảm bảo tính sẵn sàng cao nhất cho ứng dụng thực tế của khách hàng."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
            <div className="hidden lg:block absolute top-[40px] left-0 w-full h-[1px] bg-gray-100 z-0" />
            
            {[
              {
                step: "01",
                title: "Tư vấn & Phân tích",
                desc: "Đội kỹ thuât xác định các yêu cầu về không gian, hồ sơ tải, môi trường hoạt động và giao tiếp hệ thống.",
                icon: <MessageSquare />
              },
              {
                step: "02",
                title: "Thiết kế & Prototype",
                desc: "Hoàn thiện bản vẽ 3D, sơ đồ mạch và chế tạo mẫu đầu tiên (V1) trong vòng 10-14 ngày làm việc.",
                icon: <Settings />
              },
              {
                step: "03",
                title: "Test & Validation",
                desc: "Thử nghiệm thực tế tại hiện trường (Field Test), hiệu chỉnh phần mềm BMS và kiểm chứng an toàn.",
                icon: <Zap />
              },
              {
                step: "04",
                title: "Sản xuất hàng loạt",
                desc: "Chốt thiết kế cuối và đưa vào dây chuyền sản xuất lắp ráp tự động với hệ thống quản lý chất lượng QA/QC.",
                icon: <Box />
              }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative z-10 group"
              >
                <div className="w-20 h-20 bg-white border-2 border-gray-100 rounded-3xl flex items-center justify-center text-brand-red mb-10 group-hover:border-brand-red group-hover:shadow-[0_0_50px_-10px_rgba(227,30,36,0.3)] transition-all">
                  {item.icon}
                  <span className="absolute -top-4 -right-4 bg-gray-50 px-2 py-1 rounded-lg text-[10px] font-black text-brand-black border border-gray-100">{item.step}</span>
                </div>
                <h4 className="text-xl font-extrabold mb-4">{item.title}</h4>
                <p className="text-brand-gray text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- QUOTE SECTION --- */}
      <section className="py-24 bg-brand-red relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,#fff_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10 text-white">
          <Quote className="mx-auto w-16 h-16 opacity-30 mb-10" />
          <motion.p 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-extrabold leading-tight mb-10 italic"
          >
            "Tại PKGBattery, chúng tôi không chỉ sản xuất pin. Chúng tôi cung cấp sự an tâm tối thượng cho các kỹ sư phát triển phần cứng thông qua sự thấu hiểu sâu sắc từng cell năng lượng."
          </motion.p>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-white mb-4 border-4 border-brand-red-dark overflow-hidden">
              <img src="https://ui-avatars.com/api/?name=Lê+Hùng+Anh&background=fff&color=E31E24" alt="CEO" />
            </div>
            <p className="font-bold text-lg">KS. Lê Hùng Anh</p>
            <p className="text-white/70 text-sm uppercase tracking-widest font-medium">Giám đốc Kỹ thuật PKGBattery</p>
          </div>
        </div>
      </section>

      {/* --- FAQ SECTION (LONG CONTENT) --- */}
      <section className="py-32 bg-white" id="faq">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-16">
            <div className="lg:col-span-2">
              <SectionHeading 
                eyebrow="Giải đáp thắc mắc"
                title="Trả lời các câu hỏi kỹ thuật chuyên sâu"
                description="Chúng tôi hiểu rằng một thay đổi nhỏ về pin có thể ảnh hưởng lớn đến hệ thống. Dưới đây là những câu hỏi thường gặp nhất từ phía đối tác."
              />
              
              <div className="bg-gray-50 p-10 rounded-[40px] border border-gray-100 flex flex-col items-center text-center">
                <MessageSquare className="text-brand-red mb-6" size={40} />
                <h4 className="text-xl font-bold mb-4">Vẫn còn thắc mắc chi tiết?</h4>
                <p className="text-brand-gray text-sm mb-8 italic">Đội ngũ kỹ sư sẵn sàng hỗ trợ team R&D của bạn 24/7 để làm rõ mọi thông số kỹ thuật.</p>
                <button className="bg-brand-black text-white px-8 py-4 rounded-full font-bold w-full hover:scale-105 active:scale-95 transition-all">
                  Gửi câu hỏi trực tiếp
                </button>
              </div>
            </div>

            <div className="lg:col-span-3 space-y-6">
              {[
                {
                  q: "1. PKGBattery sử dụng cell pin từ thương hiệu nào cho OEM?",
                  a: "Chúng tôi ưu tiên sử dụng cell Prismatic từ các thương hiệu Tier 1 quốc tế như CATL, EVE hay Ganfeng nhằm đảm bảo chất lượng công nghiệp. Tùy thuộc vào phân khúc và yêu cầu chi phí của dự án, chúng tôi cũng hỗ trợ tư vấn các dòng cell phù hợp hơn."
                },
                {
                  q: "2. Quy trình kiểm tra chất lượng (QA/QC) của bộ pin diễn ra như thế nào?",
                  a: "Mỗi bộ pin PKG đều trải qua 12 lớp kiểm định: Đo nội rở cell đầu vào, Matching cell, Kiểm tra busbar lase-weld, Kiểm tra cách điện, Test BMS logic, EOL Test (End-of-Line) nạp xả thực tế 1 chu kỳ để xác định dung lượng thức, và Aging test trước khi đóng gói."
                },
                {
                  q: "3. Chúng tôi có thể yêu cầu customized protocol cho BMS không?",
                  a: "Hoàn toàn có thể. PKGBattery có đội ngũ phần mềm hỗ trợ viết firmware tùy chỉnh cho BMS để tương thích với các giao thức giao tiếp riêng (CANOpen, J1939, hoặc custom RS485 protocol) mà thiết bị của bạn đang sử dụng."
                },
                {
                  q: "4. Thời gian hỗ trợ bảo hành dự án B2B được cam kết ra sao?",
                  a: "Vì là nhà sản xuất tại Việt Nam, chúng tôi cam kết phản hồi lỗi kỹ thuật tại hiện trường trong vòng 24h và hoàn thiện xử lý lỗi/đổi mới trong tối đa 3-7 ngày làm việc, loại bỏ hoàn toàn rào cản đợi linh kiện từ nước ngoài."
                },
                {
                  q: "5. PKG có hỗ trợ làm hồ sơ xuất khẩu cho sản phẩm sử dụng pin không?",
                  a: "Có. Chúng tôi cung cấp đầy đủ bộ hồ sơ UN38.3, MSDS và Test Report cần thiết để khách hàng có thể tích hợp pin vào máy móc và xuất khẩu đi thị trường Mỹ, EU hay Nhật Bản một cách thuận lợi nhất."
                },
                {
                  q: "6. Số lượng đặt hàng tối thiểu (MOQ) cho mẫu thiết kế riêng?",
                  a: "Đối với giai đoạn R&D/Prototype, chúng tôi không giới hạn số lượng (có thể làm từ 1 bộ). Đối với giai đoạn sản xuất hàng loạt, MOQ sẽ được thỏa thuận dựa trên mức độ tùy chỉnh cơ khí và mạch điện tử của từng dự án."
                }
              ].map((faq, i) => (
                <details key={i} className="group p-6 rounded-3xl border border-gray-100 hover:border-brand-red bg-white transition-all cursor-pointer">
                  <summary className="flex items-center justify-between list-none font-bold text-brand-black text-lg">
                    {faq.q}
                    <ChevronRight size={20} className="text-brand-gray group-open:rotate-90 transition-transform" />
                  </summary>
                  <p className="mt-6 text-brand-gray text-sm leading-relaxed border-t border-gray-50 pt-4">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- DOWNLOAD RESOURCES & CTA --- */}
      <section className="py-32 bg-gray-50" id="contact">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-brand-black rounded-[60px] p-12 md:p-24 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
              <svg viewBox="0 0 400 400" className="w-full h-full text-white fill-current">
                <path d="M0,400 L400,0 L400,400 Z" />
              </svg>
            </div>
            
            <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-[1.1]"> Sẵn sàng làm chủ năng lượng cho hệ thống của bạn?</h2>
                <p className="text-gray-400 text-lg leading-relaxed mb-12">
                  Tải ngay bộ Checklist thông số kỹ thuật chuẩn RFQ để giúp đội ngũ R&D của bạn chuẩn bị một bản yêu cầu hoàn hảo cho PKGBattery.
                </p>
                
                <div className="grid sm:grid-cols-2 gap-6 mb-12">
                  <div className="flex items-center gap-4 text-white">
                    <CheckCircle2 className="text-brand-red" />
                    <span className="font-medium">Tư vấn kỹ thuật miễn phí</span>
                  </div>
                  <div className="flex items-center gap-4 text-white">
                    <CheckCircle2 className="text-brand-red" />
                    <span className="font-medium">Phản hồi RFQ trong 24h</span>
                  </div>
                  <div className="flex items-center gap-4 text-white">
                    <CheckCircle2 className="text-brand-red" />
                    <span className="font-medium">Kỹ sư Việt Nam hỗ trợ</span>
                  </div>
                  <div className="flex items-center gap-4 text-white">
                    <CheckCircle2 className="text-brand-red" />
                    <span className="font-medium">Prototype nhanh chóng</span>
                  </div>
                </div>

                <button className="bg-white text-brand-black px-10 py-5 rounded-2xl font-black flex items-center gap-3 hover:scale-105 transition-all shadow-2xl">
                  <Download size={24} />
                  Tải bộ Checklist Kỹ Thuật (PDF)
                </button>
              </div>

              <div className="bg-white p-10 rounded-[40px]">
                <h3 className="text-2xl font-bold text-brand-black mb-6">Liên hệ tư vấn dự án</h3>
                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-brand-gray ml-1">Họ tên & Chức vụ</label>
                    <input type="text" className="w-full bg-gray-50 border-none px-6 py-4 rounded-xl focus:ring-2 focus:ring-brand-red outline-none transition-all" placeholder="Nguyễn Văn A - Trưởng phòng R&D" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-brand-gray ml-1">Email công ty</label>
                      <input type="email" className="w-full bg-gray-50 border-none px-6 py-4 rounded-xl focus:ring-2 focus:ring-brand-red outline-none transition-all" placeholder="a.nguyen@company.vn" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-brand-gray ml-1">Số điện thoại</label>
                      <input type="tel" className="w-full bg-gray-50 border-none px-6 py-4 rounded-xl focus:ring-2 focus:ring-brand-red outline-none transition-all" placeholder="09xx xxx xxx" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-brand-gray ml-1">Loại thiết bị ứng dụng</label>
                    <select className="w-full bg-gray-50 border-none px-6 py-4 rounded-xl focus:ring-2 focus:ring-brand-red outline-none transition-all text-brand-black appearance-none cursor-pointer">
                      <option>Chọn ứng dụng...</option>
                      <option>Xe nâng điện / Logistics</option>
                      <option>AGV / Robot tự hành</option>
                      <option>Xe điện Resort / Golf</option>
                      <option>Lưu trữ năng lượng (ESS)</option>
                      <option>Thiết bị công nghiệp khác</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-brand-gray ml-1">Mô tả tóm tắt nhu cầu</label>
                    <textarea rows={3} className="w-full bg-gray-50 border-none px-6 py-4 rounded-xl focus:ring-2 focus:ring-brand-red outline-none transition-all" placeholder="Ví dụ: Cần pack pin 48V 150Ah LiFePO4 cho máy quét sàn công nghiệp..."></textarea>
                  </div>
                  <button className="w-full bg-brand-red text-white py-5 rounded-2xl font-black shadow-xl shadow-brand-red/20 hover:bg-brand-red-dark transition-all mt-4">
                    Gửi yêu cầu thiết kế dự án
                  </button>
                  <p className="text-center text-[10px] text-brand-gray uppercase font-bold tracking-widest mt-4">Chúng tôi cam kết bảo mật mọi thông số kỹ thuật của bạn</p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-white pt-24 pb-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
            <div className="col-span-1 lg:col-span-1">
              <div className="flex items-center gap-2 group cursor-pointer mb-6">
                <div className="bg-brand-red p-1.5 rounded-lg">
                  <Battery className="text-white w-6 h-6 fill-current" />
                </div>
                <span className="text-2xl font-black tracking-tighter text-brand-black">
                  PKG<span className="text-brand-red">BATTERY</span>
                </span>
              </div>
              <p className="text-brand-gray text-sm leading-relaxed">
                Đơn vị hàng đầu Việt Nam cung cấp giải pháp pin Lithium-ion và LiFePO4 thông minh cho môi trường công nghiệp hiện đại.
              </p>
              <div className="flex items-center gap-4 mt-8">
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-brand-black hover:bg-brand-red hover:text-white transition-all cursor-pointer">
                  <Globe size={18} />
                </div>
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-brand-black hover:bg-brand-red hover:text-white transition-all cursor-pointer">
                  <Users size={18} />
                </div>
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-brand-black hover:bg-brand-red hover:text-white transition-all cursor-pointer">
                  <Globe size={18} />
                </div>
              </div>
            </div>

            <div>
              <h5 className="font-black text-brand-black mb-6 uppercase tracking-widest text-xs">Giải pháp ODM</h5>
              <ul className="space-y-4 text-sm text-brand-gray font-medium">
                <li className="hover:text-brand-red transition-colors cursor-pointer">Hệ thống Pin Xe Nâng</li>
                <li className="hover:text-brand-red transition-colors cursor-pointer">Giải pháp Pin AGV/AMR</li>
                <li className="hover:text-brand-red transition-colors cursor-pointer">Thiết kế Pin Robot Chuyên dụng</li>
                <li className="hover:text-brand-red transition-colors cursor-pointer">Module Lưu trữ ESS</li>
                <li className="hover:text-brand-red transition-colors cursor-pointer">BMS Thông minh & IoT</li>
              </ul>
            </div>

            <div>
              <h5 className="font-black text-brand-black mb-6 uppercase tracking-widest text-xs">Liên kết hữu ích</h5>
              <ul className="space-y-4 text-sm text-brand-gray font-medium">
                <li className="hover:text-brand-red transition-colors cursor-pointer">Mẫu thiết kế (Case Study)</li>
                <li className="hover:text-brand-red transition-colors cursor-pointer">Quy trình sản xuất</li>
                <li className="hover:text-brand-red transition-colors cursor-pointer">Tài nguyên kỹ thuật</li>
                <li className="hover:text-brand-red transition-colors cursor-pointer">Tuyển dụng Kỹ sư</li>
                <li className="hover:text-brand-red transition-colors cursor-pointer">Gửi báo giá OEM</li>
              </ul>
            </div>

            <div>
              <h5 className="font-black text-brand-black mb-6 uppercase tracking-widest text-xs">Thông tin liên hệ</h5>
              <ul className="space-y-4">
                <li className="flex items-center gap-4 text-sm font-medium text-brand-gray">
                  <Mail size={18} className="text-brand-red" />
                  contact@pkgbattery.vn
                </li>
                <li className="flex items-center gap-4 text-sm font-medium text-brand-gray">
                  <Phone size={18} className="text-brand-red" />
                  028 4455 6677
                </li>
                <li className="flex items-center gap-4 text-sm font-medium text-brand-gray">
                  <Globe size={18} className="text-brand-red" />
                  Hồ Chí Minh, Việt Nam
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-12 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-xs text-brand-gray font-bold uppercase tracking-widest">© 2026 PKGBattery Corporation. All rights reserved.</p>
            <div className="flex items-center gap-8 text-xs font-bold text-brand-gray uppercase tracking-widest">
              <span className="hover:text-brand-red cursor-pointer transition-colors">Chính sách bảo mật</span>
              <span className="hover:text-brand-red cursor-pointer transition-colors">Điều khoản dịch vụ</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
