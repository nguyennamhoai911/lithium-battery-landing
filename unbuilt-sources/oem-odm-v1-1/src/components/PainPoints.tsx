import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { AlertCircle, CheckCircle2 } from "lucide-react";

const pains = [
  {
    problem: "Pin hiện tại không vừa máy",
    solution: "Thiết kế vỏ housing kim loại theo đúng bản vẽ kỹ thuật của khách hàng.",
    image: "https://images.unsplash.com/photo-1590674852885-ce81b37dec7a?auto=format&fit=crop&q=80&w=1000",
  },
  {
    problem: "Thời gian hoạt động (Runtime) Quá Ngắn",
    solution: "Sử dụng cell pin mật độ năng lượng cao, tối ưu dung lượng trong không gian hẹp.",
    image: "https://images.unsplash.com/photo-1617932347371-33230639f7ee?auto=format&fit=crop&q=80&w=1000",
  },
  {
    problem: "Lỗi kỹ thuật & Support chậm",
    solution: "Đội ngũ kỹ sư tại Việt Nam phản hồi trong 24h, hỗ trợ tại chỗ nhanh chóng.",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1000",
  },
];

export default function PainPoints() {
  const containerRef = useRef(null);

  return (
    <section ref={containerRef} className="bg-industrial-black py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20 text-center">
          <h2 className="text-sm font-bold text-brand uppercase tracking-[0.2em] mb-4">Vấn đề & Giải pháp</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-white tracking-tighter">
            Chúng tôi thấu hiểu những rào cản <br /> trong sản xuất thiết bị
          </h3>
        </div>

        <div className="flex flex-col gap-32">
          {pains.map((item, i) => (
            <div key={i} className={`flex flex-col md:flex-row items-center gap-16 ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex-1 space-y-8"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-red-400">
                    <AlertCircle className="w-6 h-6 flex-shrink-0" />
                    <span className="text-2xl font-bold italic opacity-60">Thực trạng:</span>
                  </div>
                  <h4 className="text-3xl md:text-4xl font-bold text-white tracking-tight">{item.problem}</h4>
                </div>
                
                <div className="h-px bg-white/10 w-full" />

                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-emerald-400">
                    <CheckCircle2 className="w-6 h-6 flex-shrink-0" />
                    <span className="text-2xl font-bold italic opacity-60">PKGBattery Xử lý:</span>
                  </div>
                  <p className="text-xl text-neutral-400 leading-relaxed">{item.solution}</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="flex-1 w-full"
              >
                <div className="relative aspect-video rounded-sm overflow-hidden group">
                  <div className="absolute inset-0 bg-brand/20 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                  <img src={item.image} alt={item.problem} className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 transition-all duration-700" />
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
