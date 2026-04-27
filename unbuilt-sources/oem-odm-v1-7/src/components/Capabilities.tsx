import { motion } from "motion/react";
import { CheckCircle2, Zap, Cog, Palette, Terminal, PackageSearch, Layers, Cpu } from "lucide-react";

export default function Capabilities() {
  const capabilityList = [
    {
      title: "Cấu hình tùy chỉnh",
      desc: "Thiết kế dung lượng, điện áp, dòng xả theo yêu cầu của thiết bị công nghiệp.",
      icon: <Terminal size={24} />,
      details: ["Pack pin 12V - 720V", "Dung lượng lên đến 1000Ah", "Dòng xả cực đại cao"]
    },
    {
      title: "Thiết kế kết cấu & Vỏ",
      desc: "Tùy chỉnh kích thước vật lý, chất liệu vỏ (thép, nhựa ABS) và kết cấu chống sốc.",
      icon: <Layers size={24} />,
      details: ["Vỏ thép sơn tĩnh điện", "Chống nước IP65/IP67", "Thiết kế tiết kiệm không gian"]
    },
    {
      title: "Hệ thống quản lý BMS",
      desc: "Thiết kế mạch bảo vệ thông minh, giao tiếp RS485, CANbus, Bluetooth giám sát từ xa.",
      icon: <Cpu size={24} />,
      details: ["Cân bằng cell tự động", "Bảo vệ quá nhiệt/quá dòng", "Tương thích mọi thiết bị"]
    },
    {
      title: "Branding & Bao bì",
      desc: "Hỗ trợ Private Label, in ấn thương hiệu riêng, thiết kế bao bì và tài liệu đi kèm.",
      icon: <Palette size={24} />,
      details: ["Logo in lưới/laser", "Nhãn kỹ thuật chuẩn quốc tế", "Đóng gói an toàn vận chuyển"]
    },
  ];

  return (
    <section className="py-24 bg-brand-gray/30 relative overflow-hidden" id="năng lực">
      {/* Visual Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg width="100%" height="100%">
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-red/5 border border-brand-red/10 text-brand-red text-xs font-bold uppercase tracking-wider mb-6"
          >
            <Zap size={14} className="animate-pulse" />
            Năng lực OEM/ODM thực tế
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Khả năng <span className="text-brand-red">tùy biến</span> không giới hạn.</h2>
          <p className="text-brand-dark/60 text-lg font-medium leading-relaxed">
            Chúng tôi không chỉ là nhà máy lắp ráp. PKGBattery làm chủ kỹ thuật để cá nhân hóa mọi thành phần của pack pin theo mục tiêu kinh doanh của bạn.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {capabilityList.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-10 rounded-[2rem] shadow-sm border border-brand-dark/5 hover:border-brand-red/30 transition-all group relative overflow-hidden"
            >
              {/* Accent element */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-red/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-14 h-14 bg-brand-dark text-white rounded-2xl flex items-center justify-center mb-6 border-4 border-brand-gray group-hover:bg-brand-red group-hover:border-brand-red/20 transition-all duration-500">
                  {item.icon}
                </div>
                
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-brand-dark/60 mb-8 font-medium leading-relaxed">
                  {item.desc}
                </p>
                
                <div className="mt-auto pt-6 border-t border-brand-dark/5 grid grid-cols-1 gap-3">
                  {item.details.map((detail, j) => (
                    <div key={j} className="flex items-center gap-3 text-sm font-semibold text-brand-dark/80 group-hover:text-brand-dark transition-colors">
                      <CheckCircle2 size={16} className="text-brand-red" />
                      {detail}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technical Callout */}
        <div className="mt-16 bg-brand-dark rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between gap-8 border-b-8 border-brand-red">
          <div className="max-w-xl">
            <h4 className="text-2xl font-bold text-white mb-2 italic">Industrial Lithium Battery Platform</h4>
            <p className="text-white/50 font-medium">
              Bạn có yêu cầu đặc thù về giao thức hoặc điều kiện môi trường khắc nghiệt? Chúng tôi luôn sẵn sàng thử nghiệm và tối ưu giải pháp riêng biệt.
            </p>
          </div>
          <button className="whitespace-nowrap px-8 py-4 bg-white text-brand-dark rounded-sm font-bold hover:bg-brand-red hover:text-white transition-all duration-300">
            Xem hồ sơ năng lực (PDF)
          </button>
        </div>
      </div>
    </section>
  );
}
