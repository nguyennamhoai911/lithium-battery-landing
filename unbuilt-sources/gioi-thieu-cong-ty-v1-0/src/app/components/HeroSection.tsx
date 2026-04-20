import { motion } from "motion/react";
import { ImageWithFallback } from "./ImageWithFallback";

export function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#111111]">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&q=80"
          alt="Industrial manufacturing"
          className="h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#111111] via-[#111111]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#111111]/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Brand Message */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="space-y-4">
                <div className="inline-block">
                  <h1 className="text-6xl md:text-7xl lg:text-8xl tracking-tight text-white">
                    PKG BATTERY
                  </h1>
                  <div className="h-1 bg-gradient-to-r from-[#D61F26] to-transparent mt-2" />
                </div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl text-white/90 leading-tight">
                  TIÊN PHONG GIẢI PHÁP<br />NĂNG LƯỢNG LITHIUM TẠI VIỆT NAM
                </h2>
              </div>

              <p className="text-lg text-white/70 max-w-2xl leading-relaxed">
                PKG Battery phát triển các giải pháp pin Lithium cho xe nâng điện, AGV, xe điện du lịch và hệ thống lưu trữ năng lượng, đáp ứng nhu cầu vận hành hiện đại của doanh nghiệp trong công nghiệp, logistics và năng lượng sạch.
              </p>

              <p className="text-base text-white/60 max-w-2xl">
                Từ năng lực nghiên cứu, thiết kế đến sản xuất và triển khai thực tế, PKG Battery định hướng trở thành đối tác năng lượng đáng tin cậy cho doanh nghiệp Việt Nam trong giai đoạn chuyển đổi công nghệ lưu trữ.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4 pt-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-gradient-to-r from-[#D61F26] to-[#B01A21] text-white rounded-sm hover:shadow-lg hover:shadow-[#D61F26]/50 transition-all duration-300"
                >
                  Khám phá năng lực
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 border-2 border-white/20 text-white rounded-sm hover:bg-white/10 transition-all duration-300"
                >
                  Xem sản phẩm
                </motion.button>
              </div>
            </motion.div>

            {/* Right: Battery Visual */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="hidden lg:flex justify-center items-center"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#D61F26] to-transparent opacity-20 blur-3xl" />
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1624397640148-949b1732bb0a?w=800&q=80"
                  alt="Battery technology"
                  className="relative z-10 w-full max-w-lg rounded-lg shadow-2xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 text-sm flex flex-col items-center gap-2"
      >
        <span>Cuộn xuống</span>
        <div className="w-0.5 h-8 bg-gradient-to-b from-[#D61F26] to-transparent" />
      </motion.div>
    </section>
  );
}
