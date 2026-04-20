import { motion, AnimatePresence } from "motion/react";
import { ImageWithFallback } from "./ImageWithFallback";
import { ArrowRight, Zap, Shield, TrendingUp, Clock } from "lucide-react";
import { useState } from "react";

interface Product {
  id: number;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  cta: string;
  image: string;
  icon: React.ElementType;
}

export function ProductEcosystem() {
  const [activeProduct, setActiveProduct] = useState(0);

  const products: Product[] = [
    {
      id: 0,
      number: "01",
      title: "Pin xe nâng điện",
      subtitle: "Forklift Battery Solutions",
      description: "Giải pháp tối ưu cho môi trường kho vận và vận hành cường độ cao. Thiết kế chuyên dụng cho xe nâng điện với khả năng chịu tải nặng, sạc nhanh và tuổi thọ vượt trội.",
      features: [
        "Chu kỳ sạc-xả lên đến 3000+ lần",
        "Sạc nhanh 2-3 giờ đầy 80%",
        "Vận hành liên tục ca dài",
        "Tiết kiệm 40% chi phí năng lượng"
      ],
      cta: "Khám phá dòng pin xe nâng điện",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1600&q=80",
      icon: Zap,
    },
    {
      id: 1,
      number: "02",
      title: "Pin xe điện du lịch / golf",
      subtitle: "Golf Cart & Tourism Vehicle",
      description: "Nguồn năng lượng ổn định cho phương tiện dịch vụ, nghỉ dưỡng và vận hành nội khu. An toàn tuyệt đối, vận hành êm ái và thân thiện môi trường.",
      features: [
        "Thiết kế nhỏ gọn, trọng lượng nhẹ",
        "Hoạt động yên tĩnh không tiếng ồn",
        "BMS thông minh bảo vệ toàn diện",
        "Độ bền cao trong môi trường ngoài trời"
      ],
      cta: "Xem giải pháp cho xe điện du lịch",
      image: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=1600&q=80",
      icon: Shield,
    },
    {
      id: 2,
      number: "03",
      title: "Pin AGV / Robot",
      subtitle: "AGV & Robotics Battery",
      description: "Thiết kế cho hệ thống tự động hóa, robot công nghiệp và vận hành thông minh. Tối ưu hóa cho các ứng dụng đòi hỏi độ chính xác và khả năng sạc tự động.",
      features: [
        "Tương thích hệ thống sạc tự động",
        "Kích thước module linh hoạt",
        "Giao tiếp CAN/RS485 tích hợp",
        "Vận hành 24/7 không gián đoạn"
      ],
      cta: "Tìm hiểu pin AGV / Robot",
      image: "https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?w=1600&q=80",
      icon: TrendingUp,
    },
    {
      id: 3,
      number: "04",
      title: "Bộ sạc nhanh / Trạm sạc",
      subtitle: "Fast Charging Solutions",
      description: "Rút ngắn thời gian sạc, nâng cao hiệu quả khai thác thiết bị trong thực tế. Công nghệ sạc thông minh, an toàn và tối ưu tuổi thọ pin.",
      features: [
        "Công suất cao 3-20kW",
        "Sạc nhanh an toàn với BMS",
        "Giám sát từ xa qua IoT",
        "Thiết kế module mở rộng dễ dàng"
      ],
      cta: "Xem giải pháp sạc nhanh",
      image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=1600&q=80",
      icon: Clock,
    },
    {
      id: 4,
      number: "05",
      title: "ESS lưu trữ năng lượng",
      subtitle: "Energy Storage System",
      description: "Hỗ trợ doanh nghiệp quản lý điện năng hiệu quả và bền vững hơn. Tích hợp năng lượng tái tạo, cắt giảm đỉnh và dự phòng nguồn điện.",
      features: [
        "Dung lượng từ 50kWh - 1MWh+",
        "Tích hợp điện mặt trời & lưới điện",
        "Quản lý năng lượng thông minh",
        "Giảm 30-50% hóa đơn điện"
      ],
      cta: "Khám phá hệ thống ESS",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1600&q=80",
      icon: Shield,
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-[#E5E5E5]/30 overflow-hidden">
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
            Hệ sinh thái sản phẩm
          </h2>
          <p className="text-lg text-[#2B2B2B]/70">
            Giải pháp năng lượng toàn diện cho mọi nhu cầu doanh nghiệp
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left: Product Navigation */}
          <div className="lg:col-span-4 space-y-3">
            {products.map((product, index) => {
              const Icon = product.icon;
              return (
                <motion.button
                  key={product.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setActiveProduct(index)}
                  className={`w-full text-left p-6 rounded-lg transition-all duration-500 group ${
                    activeProduct === index
                      ? "bg-gradient-to-r from-[#D61F26] to-[#B01A21] text-white shadow-lg shadow-[#D61F26]/30"
                      : "bg-white border border-[#E5E5E5] hover:border-[#D61F26]/30 text-[#2B2B2B]"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    {/* Number Badge */}
                    <div className={`text-4xl font-light transition-colors ${
                      activeProduct === index ? "text-white/40" : "text-[#D61F26]/30"
                    }`}>
                      {product.number}
                    </div>

                    {/* Content */}
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center gap-2">
                        <Icon className={`w-5 h-5 ${
                          activeProduct === index ? "text-white" : "text-[#D61F26]"
                        }`} />
                        <h3 className={`text-xl transition-colors ${
                          activeProduct === index ? "text-white" : "text-[#111111]"
                        }`}>
                          {product.title}
                        </h3>
                      </div>
                      <p className={`text-sm transition-colors ${
                        activeProduct === index ? "text-white/80" : "text-[#2B2B2B]/60"
                      }`}>
                        {product.subtitle}
                      </p>

                      {/* Active Indicator */}
                      {activeProduct === index && (
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: "100%" }}
                          className="h-0.5 bg-white/30 mt-3"
                        />
                      )}
                    </div>

                    {/* Arrow */}
                    <ArrowRight className={`w-5 h-5 transition-all ${
                      activeProduct === index
                        ? "text-white opacity-100 translate-x-0"
                        : "text-[#D61F26] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
                    }`} />
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Right: Product Display */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProduct}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                {/* Main Image */}
                <div className="relative overflow-hidden rounded-lg h-[400px] md:h-[500px] mb-8">
                  <ImageWithFallback
                    src={products[activeProduct].image}
                    alt={products[activeProduct].title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/60 to-transparent" />

                  {/* Large Number Watermark */}
                  <div className="absolute top-8 right-8 text-[120px] md:text-[180px] font-light text-white/10 leading-none">
                    {products[activeProduct].number}
                  </div>

                  {/* Bottom Content on Image */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 space-y-3">
                    <h3 className="text-3xl md:text-4xl text-white">
                      {products[activeProduct].title}
                    </h3>
                    <p className="text-white/70 text-sm uppercase tracking-wider">
                      {products[activeProduct].subtitle}
                    </p>
                  </div>
                </div>

                {/* Description & Features */}
                <div className="space-y-6">
                  <p className="text-lg text-[#2B2B2B]/80 leading-relaxed">
                    {products[activeProduct].description}
                  </p>

                  {/* Features Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {products[activeProduct].features.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start gap-3 p-4 bg-white rounded-lg border border-[#E5E5E5]"
                      >
                        <div className="w-1.5 h-1.5 bg-[#D61F26] rotate-45 mt-2 flex-shrink-0" />
                        <span className="text-[#2B2B2B]">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA */}
                  <motion.button
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-2 text-[#D61F26] group mt-6"
                  >
                    <span className="border-b-2 border-[#D61F26]/50 group-hover:border-[#D61F26] transition-colors text-lg">
                      {products[activeProduct].cta}
                    </span>
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="flex justify-center gap-2 mt-12">
          {products.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveProduct(index)}
              className="group"
            >
              <div className={`h-1 rounded-full transition-all duration-300 ${
                activeProduct === index
                  ? "w-12 bg-[#D61F26]"
                  : "w-8 bg-[#E5E5E5] group-hover:bg-[#D61F26]/50"
              }`} />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
