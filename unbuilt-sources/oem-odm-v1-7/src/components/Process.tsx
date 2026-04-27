import { motion, useScroll, useSpring } from "motion/react";
import { useRef } from "react";
import { MessageSquare, FileText, Beaker, CheckCircle, Truck, Wrench } from "lucide-react";

export default function Process() {
  const steps = [
    {
      title: "Tiếp nhận nhu cầu",
      desc: "Lắng nghe bài toán vận hành, yêu cầu kỹ thuật và mong muốn của đối tác.",
      icon: <MessageSquare />,
    },
    {
      title: "Đề xuất giải pháp & Kỹ thuật",
      desc: "Kỹ sư PKGBattery tư vấn cấu hình tối ưu và gửi bản thảo giải pháp sơ bộ.",
      icon: <FileText />,
    },
    {
      title: "Thiết kế & Tạo mẫu",
      desc: "Xây dựng bản vẽ kỹ thuật chi tiết, thiết kế BMS và sản xuất mẫu thử nghiệm (Prototyping).",
      icon: <Beaker />,
    },
    {
      title: "Kiểm tra & Hiệu chỉnh",
      desc: "Tiến hành các bài test xả/nạp, an toàn, nhiệt độ và hiệu chỉnh theo phản hồi.",
      icon: <CheckCircle />,
    },
    {
      title: "Sản xuất hàng loạt",
      desc: "Kích hoạt dây chuyền sản xuất tại nhà máy theo đúng tiêu chuẩn đã phê duyệt.",
      icon: <Wrench />,
    },
    {
      title: "Bàn giao & Hỗ trợ",
      desc: "Giao hàng tận nơi, hỗ trợ lắp đặt, bảo hành và đồng hành trọn đời sản phẩm.",
      icon: <Truck />,
    },
  ];

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section className="py-32 bg-white overflow-hidden" id="quy trình">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center mb-24">
          <span className="text-brand-red font-bold text-xs uppercase tracking-[0.3em] mb-4">Work Flow</span>
          <h2 className="text-4xl md:text-5xl font-bold">Lộ trình hợp tác chuyên nghiệp.</h2>
          <div className="mt-6 w-20 h-1 bg-brand-red mb-4" />
          <p className="text-brand-dark/40 font-medium">Quy trình minh bạch đảm bảo mọi sản phẩm đều đạt độ chính xác kỹ thuật tuyệt đối.</p>
        </div>

        <div ref={containerRef} className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-brand-gray" />
          <motion.div 
            style={{ scaleY }}
            className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[3px] bg-brand-red origin-top z-10"
          />

          <div className="space-y-32">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className={`flex flex-col md:flex-row items-center gap-12 ${
                  i % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
                  <div className={`px-4 py-1 rounded-full text-[10px] font-black uppercase mb-4 tracking-widest ${
                    i % 2 === 0 ? "bg-brand-red text-white" : "bg-brand-dark text-white"
                  }`}>
                    Bước 0{i + 1}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                  <p className="text-brand-dark/60 font-medium leading-relaxed max-w-sm">
                    {step.desc}
                  </p>
                </div>

                <div className="relative z-20 shrink-0">
                  <div className="w-16 h-16 rounded-full bg-white border-2 border-brand-red flex items-center justify-center text-brand-red shadow-[0_0_20px_rgba(226,30,38,0.2)]">
                    <div className="scale-125">{step.icon}</div>
                  </div>
                </div>

                <div className="md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
