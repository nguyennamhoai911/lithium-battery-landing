import { motion } from "motion/react";
import { ImageWithFallback } from "./ImageWithFallback";

export function CaseStudies() {
  const cases = [
    {
      title: "Kho logistics",
      description: "Sử dụng pin xe nâng cho vận hành 24/7",
      benefit: "Giảm 40% thời gian chết",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
    },
    {
      title: "Nhà máy sản xuất",
      description: "Ứng dụng AGV / robot tự động hóa",
      benefit: "Tăng 30% năng suất vận hành",
      image: "https://images.unsplash.com/photo-1565688534245-05d6b5be184a?w=800&q=80",
    },
    {
      title: "Khu nghỉ dưỡng",
      description: "Xe điện golf phục vụ khách hàng",
      benefit: "Tiết kiệm 50% chi phí vận hành",
      image: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=800&q=80",
    },
    {
      title: "Hệ thống ESS",
      description: "Kết hợp điện mặt trời và lưu trữ",
      benefit: "Giảm 35% hóa đơn điện",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-[#E5E5E5]/30 to-white">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <div className="w-12 h-1 bg-[#D61F26] mx-auto" />
          <h2 className="text-4xl md:text-5xl text-[#111111]">
            Ứng dụng thực tế
          </h2>
          <p className="text-lg text-[#2B2B2B]/70">
            Giải pháp PKG Battery đã được triển khai thành công trong nhiều lĩnh vực
          </p>
        </motion.div>

        {/* Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cases.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-lg h-[400px]"
            >
              {/* Background */}
              <ImageWithFallback
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/60 to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <div className="space-y-3">
                  <h3 className="text-3xl text-white">
                    {item.title}
                  </h3>
                  <p className="text-white/80">
                    {item.description}
                  </p>
                  <div className="flex items-center gap-2 pt-2">
                    <div className="w-2 h-2 bg-[#D61F26] rotate-45" />
                    <span className="text-[#D61F26]">{item.benefit}</span>
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
