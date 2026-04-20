import { motion } from "motion/react";
import { Target, Compass, Heart } from "lucide-react";

export function VisionMission() {
  const values = [
    {
      icon: Target,
      title: "Vision",
      headline: "Thúc đẩy chuyển đổi từ ắc quy truyền thống sang Lithium tại Việt Nam",
      description: "PKG Battery định hướng trở thành một trong những lực đẩy quan trọng của quá trình chuyển đổi năng lượng lưu trữ trong công nghiệp và vận hành hiện đại, góp phần thay thế các mô hình lưu trữ cũ bằng giải pháp an toàn hơn, hiệu quả hơn và bền vững hơn.",
    },
    {
      icon: Compass,
      title: "Mission",
      headline: "Mang nguồn năng lượng sạch, an toàn và hiệu quả đến doanh nghiệp Việt",
      description: "Thông qua công nghệ Lithium và năng lực phát triển giải pháp thực tế, PKG Battery mong muốn giúp doanh nghiệp tiếp cận các hệ thống lưu trữ năng lượng chất lượng cao, dễ ứng dụng, tối ưu chi phí và phù hợp với nhu cầu phát triển lâu dài.",
    },
    {
      icon: Heart,
      title: "Core Values",
      headline: "Công nghệ – Chính trực – Chất lượng – Đồng hành dài hạn",
      description: "PKG Battery đặt công nghệ làm nền tảng, lấy chất lượng làm cam kết, vận hành với tinh thần chính trực và xây dựng quan hệ đối tác dựa trên sự đồng hành bền vững cùng khách hàng.",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-[#E5E5E5]/30">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-6xl mx-auto space-y-16">
          {values.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative"
            >
              {/* Connecting line */}
              {index < values.length - 1 && (
                <div className="absolute left-6 top-full h-16 w-0.5 bg-gradient-to-b from-[#D61F26] to-transparent" />
              )}

              <div className="flex flex-col md:flex-row gap-8 items-start">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#D61F26] to-[#B01A21] flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-white" strokeWidth={1.5} />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 space-y-4">
                  <div className="flex items-baseline gap-4">
                    <span className="text-sm uppercase tracking-wider text-[#D61F26]">
                      {item.title}
                    </span>
                    <div className="flex-1 h-px bg-gradient-to-r from-[#D61F26]/50 to-transparent" />
                  </div>

                  <h3 className="text-2xl md:text-3xl text-[#111111] leading-tight">
                    {item.headline}
                  </h3>

                  <p className="text-[#2B2B2B]/70 leading-relaxed max-w-3xl">
                    <span className="font-medium text-[#111111]">Why:</span> {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
