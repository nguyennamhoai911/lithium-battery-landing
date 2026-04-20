import { motion } from "motion/react";
import { ImageWithFallback } from "./ImageWithFallback";

export function CompanyIntro() {
  const stats = [
    "5 dòng sản phẩm chiến lược",
    "Mạng lưới phân phối toàn quốc",
    "Tiêu chuẩn chất lượng quốc tế",
    "Đồng hành kỹ thuật dài hạn cho doanh nghiệp",
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200&q=80"
                alt="Technical team"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/60 to-transparent" />
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <div className="w-12 h-1 bg-[#D61F26]" />
              <h2 className="text-4xl md:text-5xl text-[#111111] leading-tight">
                Năng lực nội địa cho<br />tương lai năng lượng Việt Nam
              </h2>
            </div>

            <div className="space-y-6 text-[#2B2B2B]/80 leading-relaxed">
              <p>
                PKG Battery tập trung nghiên cứu, thiết kế và cung cấp các giải pháp pin Lithium cho môi trường công nghiệp hiện đại. Với định hướng phát triển dài hạn, doanh nghiệp xây dựng năng lực từ công nghệ, sản xuất đến hỗ trợ kỹ thuật, nhằm giúp khách hàng nâng cao hiệu suất vận hành, cải thiện độ an toàn và tối ưu chi phí trong dài hạn.
              </p>
              <p>
                Không chỉ cung cấp sản phẩm, PKG Battery hướng đến vai trò của một đối tác giải pháp – đồng hành cùng doanh nghiệp trong quá trình chuyển đổi từ hệ thống ắc quy truyền thống sang nền tảng lưu trữ năng lượng hiện đại hơn, sạch hơn và bền vững hơn.
              </p>
            </div>

            {/* Stats */}
            <div className="space-y-4 pt-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 group"
                >
                  <div className="w-2 h-2 bg-[#D61F26] rotate-45 group-hover:scale-150 transition-transform" />
                  <span className="text-lg text-[#111111]">{stat}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
