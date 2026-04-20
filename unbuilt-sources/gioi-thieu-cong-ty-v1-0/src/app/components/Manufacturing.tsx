import { motion } from "motion/react";
import { ImageWithFallback } from "./ImageWithFallback";
import { CheckCircle2 } from "lucide-react";

export function Manufacturing() {
  const capabilities = [
    "Quy trình kiểm tra nhiều lớp",
    "Tiêu chuẩn kỹ thuật rõ ràng",
    "Chứng nhận quốc tế",
    "Định hướng cải tiến liên tục",
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-[#111111] to-[#2B2B2B] text-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <div className="w-12 h-1 bg-[#D61F26]" />
              <h2 className="text-4xl md:text-5xl leading-tight">
                Chất lượng được kiểm soát<br />từ thiết kế đến bàn giao
              </h2>
            </div>

            <p className="text-white/80 leading-relaxed text-lg">
              PKG Battery xây dựng năng lực vận hành dựa trên quy trình kiểm soát chất lượng chặt chẽ, từ khâu nghiên cứu, thiết kế, lắp ráp đến kiểm định trước khi bàn giao. Đội ngũ kỹ thuật và hệ thống sản xuất được tổ chức để đảm bảo tính ổn định, độ chính xác và độ an toàn của từng giải pháp pin khi đi vào ứng dụng thực tế.
            </p>

            {/* Capabilities */}
            <div className="space-y-4 pt-4">
              {capabilities.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#D61F26] flex-shrink-0" />
                  <span className="text-white/90">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Images Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4">
              <div className="overflow-hidden rounded-lg">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&q=80"
                  alt="Quality control"
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="overflow-hidden rounded-lg">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1581092918484-8313e1f7e8c1?w=600&q=80"
                  alt="Technical team"
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="overflow-hidden rounded-lg">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&q=80"
                  alt="Manufacturing"
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="overflow-hidden rounded-lg">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1581092162384-8987c1d64718?w=600&q=80"
                  alt="R&D"
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
