import { motion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const cases = [
  {
    title: "AGV Company - LogiSpeed",
    challenge: "Cần pin 24V 100Ah siêu mỏng và sạc nhanh trong 20 phút.",
    solution: "Tùy chỉnh Module cell NMC mật độ cao, tích hợp sạc siêu nhanh 1C.",
    result: "Tăng hiệu suất vận hành kho lên 35%, thời gian hoạt động 24/7.",
    image: "https://images.unsplash.com/photo-1565431633513-e4d6500472e3?auto=format&fit=crop&q=80&w=1200"
  },
  {
    title: "Forklift Fleet - VinaMove",
    challenge: "Chuyển đổi 50 xe nâng từ ắc quy chì sang Lithium để tiết kiệm điện.",
    solution: "Cung cấp Battery Pack 48V 400Ah chuẩn công nghiệp có tích hợp BMS cloud.",
    result: "Cắt giảm 100% chi phí bảo trì định kỳ, tiết kiệm 20% tiền điện hàng tháng.",
    image: "https://images.unsplash.com/photo-1590481287661-8b29267926e8?auto=format&fit=crop&q=80&w=1200"
  },
  {
    title: "Smart Golf Cart - GreenDrive",
    challenge: "Tăng quãng đường di chuyển lên 100km cho địa hình đồi dốc.",
    solution: "Hệ thống pin 72V với công nghệ cân bằng cell chủ động vượt trội.",
    result: "Khả năng leo dốc tăng 15%, không bị sụt áp khi pin yếu.",
    image: "https://images.unsplash.com/photo-1594132176008-012ab6ce466c?auto=format&fit=crop&q=80&w=1200"
  }
];

export default function CaseStudies() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between mb-16 px-4">
          <div>
            <h2 className="text-sm font-bold text-brand-red tracking-[0.2em] uppercase mb-4">CASE STUDIES</h2>
            <h3 className="text-4xl font-display font-bold text-brand-black">Dự án tiêu biểu</h3>
          </div>
          <div className="flex gap-4">
            <button className="w-12 h-12 rounded-full border border-brand-gray-light flex items-center justify-center text-brand-gray-text hover:bg-brand-red hover:text-white hover:border-brand-red transition-all">
                <ChevronLeft className="w-6 h-6" />
            </button>
            <button className="w-12 h-12 rounded-full border border-brand-gray-light flex items-center justify-center text-brand-gray-text hover:bg-brand-red hover:text-white hover:border-brand-red transition-all">
                <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {cases.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-brand-gray-light rounded-sm overflow-hidden group border border-transparent hover:border-brand-red/20 transition-all shadow-sm hover:shadow-xl"
            >
              <div className="h-60 overflow-hidden relative">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                    <span className="bg-brand-red text-white text-[10px] uppercase font-bold tracking-widest px-3 py-1">Success Story</span>
                </div>
              </div>
              <div className="p-8">
                <h4 className="text-xl font-bold text-brand-black mb-6 border-b border-brand-gray-muted/20 pb-4">{item.title}</h4>
                
                <div className="space-y-6">
                    <div>
                        <p className="text-[10px] uppercase tracking-widest font-black text-brand-red mb-2">Thách thức</p>
                        <p className="text-sm text-brand-gray-text italic">"{item.challenge}"</p>
                    </div>
                    <div>
                        <p className="text-[10px] uppercase tracking-widest font-black text-brand-black mb-2">Giải pháp của PKGBattery</p>
                        <p className="text-sm text-brand-black font-medium">{item.solution}</p>
                    </div>
                    <div className="pt-4 mt-4 border-t border-brand-gray-muted/20 flex items-center justify-between">
                        <span className="text-xs font-bold uppercase tracking-widest text-green-600">Kết quả: {item.result}</span>
                    </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
