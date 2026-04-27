import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const industries = [
  {
    title: "Xe nâng & Máy công nghiệp",
    tag: "Heavy Duty",
    image: "https://images.unsplash.com/photo-1586864387917-f749f559360e?auto=format&fit=crop&q=80&w=1200",
    desc: "Thay thế ắc quy chì bằng Lithium để tăng hiệu suất 40% và giảm thời gian sạc."
  },
  {
    title: "AGV & Hệ thống Robot",
    tag: "Automation",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1200",
    desc: "Pin nhỏ gọn, mật độ năng lượng cao và sạc nhanh (Opportunity Charging)."
  },
  {
    title: "Xe Golf & EV Chuyên dụng",
    tag: "Mobility",
    image: "https://images.unsplash.com/photo-1599583151744-df94874f7096?auto=format&fit=crop&q=80&w=1200",
    desc: "Tăng quãng đường di chuyển và khả năng leo dốc vượt trội cho sân golf, khu du lịch."
  },
  {
    title: "Lưu trữ Năng lượng (ESS)",
    tag: "Energy",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=1200",
    desc: "Giải pháp lưu trữ điện mặt trời tập trung hoặc lưu dùng cho trạm viễn thông."
  }
];

export default function IndustryPanels() {
  return (
    <section id="industries" className="py-24 bg-brand-black overflow-hidden">
      <div className="container mx-auto px-6 mb-12">
        <h2 className="text-sm font-bold text-brand-red tracking-[0.2em] uppercase mb-4 text-center lg:text-left">LĨNH VỰC PHỤC VỤ</h2>
        <h3 className="text-4xl font-display font-bold text-white text-center lg:text-left">Đa dạng ứng dụng công nghiệp</h3>
      </div>

      <div className="flex flex-col lg:flex-row h-auto lg:h-[600px] w-full">
        {industries.map((item, index) => (
          <motion.div
            key={index}
            initial={{ flex: 1 }}
            whileHover={{ flex: 1.5 }}
            className="relative group cursor-pointer border-y lg:border-y-0 lg:border-r border-white/10 overflow-hidden min-h-[400px] lg:min-h-0 flex flex-col"
          >
            <div className="absolute inset-0 z-0">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-brand-black/60 group-hover:bg-brand-black/20 transition-all duration-500" />
            </div>

            <div className="relative z-10 p-10 mt-auto h-full flex flex-col justify-end">
              <div className="mb-4">
                <span className="text-[10px] font-bold uppercase tracking-widest text-brand-red bg-brand-red/10 border border-brand-red/20 px-3 py-1 rounded-full">
                  {item.tag}
                </span>
              </div>
              <h4 className="text-3xl font-display font-bold text-white mb-4 group-hover:text-brand-red transition-colors">
                {item.title}
              </h4>
              <p className="text-brand-gray-muted leading-relaxed max-w-xs opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                {item.desc}
              </p>
              
              <div className="mt-8 flex justify-end">
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white group-hover:bg-brand-red group-hover:border-brand-red transition-all">
                  <ArrowUpRight className="w-6 h-6" />
                </div>
              </div>
            </div>
            
            {/* Hover overlay light effect */}
            <div className="absolute inset-0 z-10 bg-linear-to-t from-brand-black via-transparent to-transparent opacity-100" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
