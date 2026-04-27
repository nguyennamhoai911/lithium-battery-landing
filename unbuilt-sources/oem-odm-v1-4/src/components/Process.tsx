import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const steps = [
  { id: "01", title: "Tiếp nhận yêu cầu", desc: "Khảo sát ứng dụng, không gian lắp đặt và yêu cầu kỹ thuật đặc thù." },
  { id: "02", title: "Phân tích & Tư vấn", desc: "Đội ngũ kỹ sư tính toán dung lượng, dải xả và cấu trúc BMS phù hợp." },
  { id: "03", title: "Thiết kế giải pháp", desc: "Xây dựng bản vẽ 3D Housing và sơ đồ mạch điện chi tiết." },
  { id: "04", title: "Sản xuất mẫu (Prototype)", desc: "Lắp ráp bộ pin mẫu để kiểm tra độ ổn định trên thiết bị thực tế." },
  { id: "05", title: "Test & Hiệu chỉnh", desc: "Thử nghiệm rung lắc, nhiệt độ và sạc xả liên tục trong phòng lab." },
  { id: "06", title: "Sản xuất hàng loạt", desc: "Triển khai dây chuyền sản xuất theo tiêu chuẩn QC nghiêm ngặt." },
  { id: "07", title: "Hỗ trợ trọn đời", desc: "Đồng hành bảo trì, nâng cấp firmware và hỗ trợ kỹ thuật 24/7." }
];

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  return (
    <section id="process" className="py-24 bg-white" ref={containerRef}>
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold text-brand-red tracking-[0.2em] uppercase mb-4">QUY TRÌNH HỢP TÁC</h2>
            <h3 className="text-4xl lg:text-5xl font-display font-bold text-brand-black">Cách chúng tôi đồng hành <br /> cùng dự án của bạn</h3>
          </div>
          <div className="text-right">
            <p className="text-brand-gray-text font-medium">Lộ trình từ ý tưởng đến thành phẩm</p>
            <div className="h-px w-24 bg-brand-red ml-auto mt-2" />
          </div>
        </div>

        <div className="relative">
          {/* Progress Line */}
          <div className="absolute top-1/2 left-0 w-full h-[2px] bg-brand-gray-light -translate-y-1/2 hidden lg:block" />
          <motion.div 
            style={{ scaleX: scrollYProgress }}
            className="absolute top-1/2 left-0 w-full h-[2px] bg-brand-red -translate-y-1/2 origin-left hidden lg:block z-10"
          />

          <div className="grid lg:grid-cols-7 gap-8 relative z-20">
            {steps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col items-center text-center lg:items-start lg:text-left group"
              >
                <div className="w-16 h-16 rounded-full bg-white border-2 border-brand-gray-light flex items-center justify-center text-xl font-bold text-brand-gray-muted group-hover:border-brand-red group-hover:text-brand-red transition-all duration-300 relative z-10 shadow-sm">
                  {step.id}
                  {/* Pulse Effect on active step or simply on hover */}
                  <div className="absolute inset-0 rounded-full bg-brand-red opacity-0 group-hover:animate-ping" />
                </div>
                
                <div className="mt-8">
                  <h4 className="text-lg font-bold text-brand-black mb-3 group-hover:text-brand-red transition-colors">{step.title}</h4>
                  <p className="text-sm text-brand-gray-text leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
