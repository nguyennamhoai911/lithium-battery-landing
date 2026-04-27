import { motion } from "motion/react";
import { MessageSquare, ClipboardCheck, Box, FlaskConical, Rocket, Factory, ShieldCheck } from "lucide-react";

const steps = [
  { icon: MessageSquare, title: "Tiếp nhận yêu cầu", desc: "Thảo luận bài toán kỹ thuật & mục tiêu kinh doanh." },
  { icon: ClipboardCheck, title: "Đề xuất kỹ thuật", desc: "PKGBattery gửi bản vẽ phác thảo & thông số dự kiến." },
  { icon: FlaskConical, title: "Prototype", desc: "Sản xuất mẫu thử trong vòng 7-14 ngày làm việc." },
  { icon: ShieldCheck, title: "Testing & Validation", desc: "Kiểm tra độ an toàn, dòng xả và tuổi thọ tại Lab." },
  { icon: Factory, title: "Mass Production", desc: "Vận hành dây chuyền sản xuất hàng loạt tại Vietnam." },
  { icon: Rocket, title: "Giao hàng & Support", desc: "Hỗ trợ lắp đặt và bảo hành kỹ thuật dài hạn." },
];

export default function Process() {
  return (
    <section id="quy trình" className="py-32 bg-neutral-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <h2 className="text-sm font-bold text-brand uppercase tracking-[0.2em] mb-4">Lộ trình triển khai</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-industrial-black tracking-tighter">
            Từ Concept đến Thực tế <br /> trong <span className="text-brand">4 bước đơn giản</span>
          </h3>
        </div>

        <div className="relative">
          {/* Progress Line */}
          <div className="absolute top-1/2 left-0 w-full h-[2px] bg-neutral-200 hidden md:block" />
          
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-8 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center md:items-start group"
              >
                <div className="w-16 h-16 bg-white border border-neutral-100 flex items-center justify-center rounded-full mb-6 group-hover:border-brand shadow-sm transition-all duration-300">
                  <step.icon className="w-6 h-6 text-brand" />
                </div>
                <div className="bg-white p-6 rounded-sm border border-neutral-100 shadow-sm group-hover:-translate-y-2 transition-transform duration-300 h-full">
                  <div className="text-[10px] font-bold text-neutral-400 uppercase mb-2">Step 0{i + 1}</div>
                  <h4 className="font-bold text-industrial-black mb-3 text-lg leading-tight">{step.title}</h4>
                  <p className="text-sm text-neutral-500 leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
