import { motion } from "motion/react";
import { Shield, Zap, Users, Clock, CheckCircle2, XCircle, ArrowRight, Phone, Mail } from "lucide-react";
import { useState } from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-black overflow-x-hidden">
      <HeroSection />
      <TrustStory />
      <ProductCoverage />
      <WarrantyDuration />
      <WhatIsCovered />
      <Exclusions />
      <ClaimProcess />
      <WhyPKG />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-white" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-24 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="uppercase tracking-[0.3em] text-xs text-[var(--pkg-gray)]"
          >
            PKG BATTERY WARRANTY SYSTEM
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl lg:text-7xl leading-[1.1] tracking-tight"
          >
            Không Chỉ Bán Pin.<br />
            <span className="text-[var(--pkg-red)]">Chúng Tôi Bảo Chứng</span><br />
            Cho Vận Hành Của Bạn.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-lg text-[var(--pkg-gray)] leading-relaxed max-w-xl"
          >
            Chính sách bảo hành của PKG được xây dựng cho môi trường vận hành thực tế: rõ ràng, nhanh chóng và đủ năng lực xử lý khi doanh nghiệp cần nhất.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <button className="group px-8 py-4 bg-[var(--pkg-red)] text-white hover:bg-[#B91C1C] transition-all duration-300 flex items-center gap-2">
              Xem phạm vi bảo hành
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 border-2 border-black text-black hover:bg-black hover:text-white transition-all duration-300">
              Gửi yêu cầu hỗ trợ ngay
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8 border-t border-[var(--pkg-gray-light)]"
          >
            {[
              "Hỗ trợ toàn quốc",
              "Đội ngũ kỹ thuật chuyên sâu",
              "Quy trình minh bạch",
              "Đồng hành dài hạn"
            ].map((item, i) => (
              <div key={i} className="text-sm text-[var(--pkg-gray)]">
                {item}
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="relative aspect-square"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--pkg-red-glow)] to-transparent rounded-full blur-3xl" />
          <div className="relative w-full h-full flex items-center justify-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border border-[var(--pkg-red)] rounded-full opacity-20"
            />
            <Shield className="w-64 h-64 text-[var(--pkg-red)] opacity-10" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function TrustStory() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h2 className="text-4xl lg:text-5xl leading-tight tracking-tight">
            Khi hệ thống dừng lại,<br />
            <span className="text-[var(--pkg-red)]">chi phí không tính bằng phút.</span>
          </h2>

          <div className="space-y-6 text-lg text-[var(--pkg-gray)] leading-relaxed">
            <p>
              Một bộ pin gặp sự cố có thể kéo theo đình trệ kho vận, gián đoạn dây chuyền hoặc chậm tiến độ giao hàng. Vì vậy bảo hành không nên chỉ là vài dòng cam kết. Nó phải là năng lực phản ứng thực tế.
            </p>
            <p>
              PKG xây dựng dịch vụ hậu mãi xoay quanh <span className="text-black font-medium">tốc độ xử lý</span>, <span className="text-black font-medium">chuyên môn kỹ thuật</span> và <span className="text-black font-medium">trách nhiệm rõ ràng</span>.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ProductCoverage() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const products = [
    {
      title: "Hệ Thống Pin Lưu Trữ Năng Lượng ESS",
      description: "Giải pháp lưu trữ điện cho doanh nghiệp, nhà máy, hybrid solar và backup power với định hướng vận hành ổn định dài hạn.",
      tag: "Energy Storage / Industrial Backup",
      featured: true
    },
    {
      title: "Pin Lithium Cho Xe Nâng Điện",
      description: "Thiết kế cho môi trường vận hành cường độ cao, nhiều ca liên tục, tối ưu cho kho vận, logistics và nhà máy hiện đại.",
      tag: "Material Handling / Warehouse Power"
    },
    {
      title: "Pin Cho Xe AGV / Robot",
      description: "Nguồn năng lượng thông minh cho hệ thống tự động hóa, robot vận chuyển và các mô hình nhà máy vận hành liên tục 24/7.",
      tag: "Factory Automation / Smart Mobility"
    },
    {
      title: "Pin Lithium Cho Xe Điện Du Lịch",
      description: "Giải pháp năng lượng ổn định, sạc nhanh và vận hành êm ái cho xe golf, resort vehicle, xe điện nội khu và các hệ thống di chuyển dịch vụ.",
      tag: "Resort Mobility / Electric Leisure"
    },
    {
      title: "Bộ Sạc – Trạm Sạc",
      description: "Thiết bị sạc đồng bộ giúp tối ưu hiệu suất, tăng độ an toàn và nâng cao tuổi thọ cho toàn bộ hệ thống pin.",
      tag: "Charging Infrastructure / System Safety"
    }
  ];

  return (
    <section className="relative py-32 bg-white overflow-hidden">
      {/* Subtle industrial grid background */}
      <div className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(var(--pkg-gray) 1px, transparent 1px), linear-gradient(90deg, var(--pkg-gray) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="uppercase tracking-[0.3em] text-xs text-[var(--pkg-gray)] mb-6"
          >
            HỆ SINH THÁI ỨNG DỤNG
          </motion.p>

          <div className="grid lg:grid-cols-2 gap-12 items-end">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl lg:text-6xl tracking-tight leading-[1.1]"
            >
              Các Hệ Thống Năng Lượng<br />
              <span className="text-[var(--pkg-red)]">PKG Sẵn Sàng Đồng Hành</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-[var(--pkg-gray)] leading-relaxed"
            >
              Chính sách bảo hành của PKG được áp dụng cho nhiều nhóm giải pháp pin lithium và hạ tầng sạc — từ vận hành kho bãi, xe điện nội khu, tự động hóa nhà máy đến lưu trữ năng lượng quy mô doanh nghiệp.
            </motion.p>
          </div>
        </div>

        {/* Asymmetrical Editorial Layout */}
        <div className="grid lg:grid-cols-12 gap-6">
          {/* Featured Large Item - ESS */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onMouseEnter={() => setHoveredIndex(0)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="lg:col-span-7 lg:row-span-2 group relative overflow-hidden cursor-pointer bg-black"
          >
            {/* Visual Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-800 to-black">
              <motion.div
                animate={{
                  opacity: hoveredIndex === 0 ? 0.15 : 0.08,
                  scale: hoveredIndex === 0 ? 1.05 : 1
                }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0 bg-[var(--pkg-red)]"
              />

              {/* Energy lines */}
              <motion.div
                animate={{
                  opacity: hoveredIndex === 0 ? 0.6 : 0.3,
                  x: hoveredIndex === 0 ? 20 : 0
                }}
                transition={{ duration: 0.8 }}
                className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--pkg-red)] to-transparent"
              />
              <motion.div
                animate={{
                  opacity: hoveredIndex === 0 ? 0.4 : 0.2,
                  x: hoveredIndex === 0 ? -20 : 0
                }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="absolute top-2/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--pkg-red)] to-transparent"
              />
            </div>

            {/* Content */}
            <div className="relative h-full min-h-[600px] flex flex-col justify-between p-10 lg:p-12 text-white">
              <div>
                <motion.div
                  animate={{
                    opacity: hoveredIndex === 0 ? 1 : 0.6,
                    x: hoveredIndex === 0 ? 4 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="inline-block px-4 py-1.5 border border-white/30 text-xs uppercase tracking-wider mb-6"
                >
                  {products[0].tag}
                </motion.div>

                <motion.div
                  className="border-l-2 border-[var(--pkg-red)] pl-6 mb-8"
                  animate={{
                    borderColor: hoveredIndex === 0 ? 'var(--pkg-red)' : 'rgba(220, 38, 38, 0.5)'
                  }}
                >
                  <h3 className="text-3xl lg:text-4xl mb-4 leading-tight">
                    {products[0].title}
                  </h3>
                  <p className="text-lg text-white/80 leading-relaxed max-w-lg">
                    {products[0].description}
                  </p>
                </motion.div>
              </div>

              <motion.div
                animate={{
                  opacity: hoveredIndex === 0 ? 1 : 0,
                  y: hoveredIndex === 0 ? 0 : 10
                }}
                transition={{ duration: 0.3 }}
                className="flex items-center gap-2 text-sm uppercase tracking-wider"
              >
                <span>Tìm hiểu thêm</span>
                <ArrowRight className="w-4 h-4" />
              </motion.div>
            </div>

            {/* Hover overlay */}
            <motion.div
              animate={{
                opacity: hoveredIndex === 0 ? 0.1 : 0
              }}
              className="absolute inset-0 bg-white pointer-events-none"
            />
          </motion.div>

          {/* Right Column - Staggered Items */}
          <div className="lg:col-span-5 space-y-6">
            {products.slice(1, 3).map((product, i) => {
              const actualIndex = i + 1;
              return (
                <motion.div
                  key={actualIndex}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
                  onMouseEnter={() => setHoveredIndex(actualIndex)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="group relative overflow-hidden cursor-pointer bg-zinc-50 hover:bg-white border-2 border-transparent hover:border-[var(--pkg-red)] transition-all duration-500"
                  style={{ marginLeft: i === 1 ? '3rem' : '0' }}
                >
                  <div className="relative p-8 lg:p-10 min-h-[280px] flex flex-col justify-between">
                    {/* Red accent line */}
                    <motion.div
                      animate={{
                        scaleX: hoveredIndex === actualIndex ? 1 : 0
                      }}
                      transition={{ duration: 0.4 }}
                      className="absolute top-0 left-0 right-0 h-0.5 bg-[var(--pkg-red)] origin-left"
                    />

                    <div>
                      <motion.div
                        animate={{
                          opacity: hoveredIndex === actualIndex ? 1 : 0.5
                        }}
                        transition={{ duration: 0.3 }}
                        className="text-xs uppercase tracking-wider text-[var(--pkg-gray)] mb-6"
                      >
                        {product.tag}
                      </motion.div>

                      <h3 className="text-xl lg:text-2xl mb-4 leading-tight">
                        {product.title}
                      </h3>
                      <p className="text-[var(--pkg-gray)] leading-relaxed">
                        {product.description}
                      </p>
                    </div>

                    <motion.div
                      animate={{
                        opacity: hoveredIndex === actualIndex ? 1 : 0,
                        x: hoveredIndex === actualIndex ? 0 : -10
                      }}
                      transition={{ duration: 0.3 }}
                      className="flex items-center gap-2 text-sm text-[var(--pkg-red)] mt-4"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </motion.div>
                  </div>

                  {/* Subtle scan line effect */}
                  <motion.div
                    animate={{
                      opacity: hoveredIndex === actualIndex ? 0.05 : 0,
                      y: hoveredIndex === actualIndex ? ['-100%', '100%'] : '-100%'
                    }}
                    transition={{
                      y: { duration: 1.5, repeat: Infinity, ease: 'linear' },
                      opacity: { duration: 0.3 }
                    }}
                    className="absolute inset-x-0 h-24 bg-gradient-to-b from-transparent via-[var(--pkg-red)] to-transparent pointer-events-none"
                  />
                </motion.div>
              );
            })}
          </div>

          {/* Bottom Row - Staggered Items */}
          <div className="lg:col-span-12 grid md:grid-cols-2 gap-6">
            {products.slice(3).map((product, i) => {
              const actualIndex = i + 3;
              return (
                <motion.div
                  key={actualIndex}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 + i * 0.15 }}
                  onMouseEnter={() => setHoveredIndex(actualIndex)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="group relative overflow-hidden cursor-pointer bg-black text-white"
                  style={{ marginTop: i === 1 ? '-2rem' : '0' }}
                >
                  <div className="absolute inset-0">
                    <motion.div
                      animate={{
                        opacity: hoveredIndex === actualIndex ? 0.2 : 0.1,
                        scale: hoveredIndex === actualIndex ? 1.1 : 1
                      }}
                      transition={{ duration: 0.6 }}
                      className="absolute inset-0 bg-gradient-to-br from-[var(--pkg-red)] to-transparent"
                    />
                  </div>

                  <div className="relative p-8 lg:p-10 min-h-[280px] flex flex-col justify-between">
                    <div>
                      <motion.div
                        animate={{
                          opacity: hoveredIndex === actualIndex ? 1 : 0.6
                        }}
                        className="text-xs uppercase tracking-wider text-white/60 mb-6"
                      >
                        {product.tag}
                      </motion.div>

                      <div className="border-l-2 border-[var(--pkg-red)] pl-6">
                        <h3 className="text-xl lg:text-2xl mb-4 leading-tight">
                          {product.title}
                        </h3>
                        <p className="text-white/80 leading-relaxed">
                          {product.description}
                        </p>
                      </div>
                    </div>

                    <motion.div
                      animate={{
                        opacity: hoveredIndex === actualIndex ? 1 : 0,
                        x: hoveredIndex === actualIndex ? 0 : -10
                      }}
                      transition={{ duration: 0.3 }}
                      className="flex items-center gap-2 text-sm uppercase tracking-wider mt-4"
                    >
                      <span>Xem chi tiết</span>
                      <ArrowRight className="w-4 h-4" />
                    </motion.div>
                  </div>

                  {/* Edge lighting effect */}
                  <motion.div
                    animate={{
                      opacity: hoveredIndex === actualIndex ? 0.4 : 0
                    }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0 border-2 border-[var(--pkg-red)] pointer-events-none"
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function WarrantyDuration() {
  const items = [
    { product: "Xe nâng điện", duration: "05 năm hoặc 10.000 giờ hoạt động" },
    { product: "Xe điện du lịch", duration: "đến 05 năm tùy cấu hình" },
    { product: "AGV / Robot", duration: "đến 36 tháng" },
    { product: "Bộ sạc / Trạm sạc", duration: "đến 36 tháng" },
    { product: "ESS", duration: "05 đến 10 năm tùy dự án" }
  ];

  return (
    <section className="py-32 bg-white">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="space-y-16"
        >
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl tracking-tight">
              Cam Kết Dài Hạn Theo<br />
              <span className="text-[var(--pkg-red)]">Từng Ứng Dụng Thực Tế</span>
            </h2>
            <p className="text-lg text-[var(--pkg-gray)] max-w-3xl">
              Mỗi hệ thống có cường độ sử dụng khác nhau. Vì vậy thời hạn bảo hành được thiết kế dựa trên vận hành thực tế, không phải con số marketing.
            </p>
          </div>

          <div className="space-y-4">
            {items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start justify-between p-6 border-l-4 border-[var(--pkg-red)] bg-gray-50 hover:bg-white transition-colors"
              >
                <span className="text-lg">{item.product}</span>
                <span className="text-lg text-[var(--pkg-gray)]">{item.duration}</span>
              </motion.div>
            ))}
          </div>

          <p className="text-sm text-[var(--pkg-gray)] italic">
            Thông số cụ thể phụ thuộc model, môi trường sử dụng và điều khoản hợp đồng.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function WhatIsCovered() {
  const items = [
    "Lỗi phát sinh từ quá trình sản xuất",
    "Linh kiện không đạt chuẩn kỹ thuật",
    "BMS hoặc hệ điều khiển lỗi chức năng",
    "Hiệu suất suy giảm bất thường trong thời gian cam kết",
    "Thiết bị sạc do PKG cung cấp vận hành lỗi kỹ thuật",
    "Kiểm tra, chẩn đoán và đề xuất phương án xử lý tối ưu"
  ];

  return (
    <section className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl lg:text-5xl tracking-tight">
              Những Gì PKG<br />
              <span className="text-[var(--pkg-red)]">Sẵn Sàng Chịu Trách Nhiệm</span>
            </h2>

            <div className="space-y-4">
              {items.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-start gap-4"
                >
                  <CheckCircle2 className="w-6 h-6 text-[var(--pkg-red)] flex-shrink-0 mt-0.5" />
                  <span className="text-lg leading-relaxed">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative p-12 bg-white border-2 border-[var(--pkg-red)]"
          >
            <div className="absolute top-0 left-0 w-24 h-24 border-t-4 border-l-4 border-[var(--pkg-red)]" />
            <div className="absolute bottom-0 right-0 w-24 h-24 border-b-4 border-r-4 border-[var(--pkg-red)]" />

            <blockquote className="text-2xl lg:text-3xl leading-relaxed italic text-center">
              "Chúng tôi không né tránh trách nhiệm bằng ngôn ngữ phức tạp."
            </blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Exclusions() {
  const items = [
    "Sử dụng sai hướng dẫn kỹ thuật",
    "Tự ý tháo mở hoặc sửa chữa không được phê duyệt",
    "Dùng sai bộ sạc hoặc nguồn điện không phù hợp",
    "Va đập, rơi vỡ, ngập nước, cháy nổ từ tác động ngoài",
    "Thiên tai hoặc môi trường cực đoan",
    "Hao mòn tự nhiên ngoài ngưỡng cam kết",
    "Mất serial hoặc tem nhận diện sản phẩm"
  ];

  return (
    <section className="py-32 bg-black text-white">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <h2 className="text-4xl lg:text-5xl tracking-tight">
            Những Trường Hợp<br />
            <span className="text-[var(--pkg-red)]">Ngoài Phạm Vi Bảo Hành</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-start gap-4"
              >
                <XCircle className="w-5 h-5 text-[var(--pkg-red)] flex-shrink-0 mt-1" />
                <span className="text-lg text-gray-300 leading-relaxed">{item}</span>
              </motion.div>
            ))}
          </div>

          <p className="text-sm text-gray-400 italic pt-8 border-t border-gray-800">
            Minh bạch từ đầu giúp hai bên xử lý nhanh và công bằng.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function ClaimProcess() {
  const steps = [
    {
      number: "01",
      title: "Tiếp nhận yêu cầu",
      desc: "Hotline, email hoặc form website."
    },
    {
      number: "02",
      title: "Xác minh thông tin",
      desc: "Model, serial, lịch sử mua hàng, tình trạng lỗi."
    },
    {
      number: "03",
      title: "Chẩn đoán kỹ thuật",
      desc: "Remote support hoặc kiểm tra trực tiếp."
    },
    {
      number: "04",
      title: "Xử lý bảo hành",
      desc: "Sửa chữa, thay thế hoặc đổi tương đương."
    },
    {
      number: "05",
      title: "Bàn giao & theo dõi",
      desc: "Đảm bảo hệ thống trở lại ổn định."
    }
  ];

  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="space-y-16"
        >
          <h2 className="text-4xl lg:text-5xl tracking-tight max-w-4xl">
            Quy Trình Xử Lý Được Thiết Kế<br />
            <span className="text-[var(--pkg-red)]">Để Giảm Thời Gian Chờ</span>
          </h2>

          <div className="grid md:grid-cols-5 gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative"
              >
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-[var(--pkg-gray-light)]">
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 + 0.3, duration: 0.5 }}
                      className="h-full bg-[var(--pkg-red)] origin-left"
                    />
                  </div>
                )}

                <div className="space-y-4">
                  <div className="w-24 h-24 border-2 border-[var(--pkg-red)] flex items-center justify-center">
                    <span className="text-3xl text-[var(--pkg-red)]">{step.number}</span>
                  </div>
                  <h3 className="text-lg">{step.title}</h3>
                  <p className="text-sm text-[var(--pkg-gray)] leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.blockquote
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xl lg:text-2xl text-center max-w-4xl mx-auto italic text-[var(--pkg-gray)] pt-16 border-t border-[var(--pkg-gray-light)]"
          >
            "Một quy trình tốt không chỉ sửa lỗi. Nó giúp doanh nghiệp quay lại vận hành nhanh nhất."
          </motion.blockquote>
        </motion.div>
      </div>
    </section>
  );
}

function WhyPKG() {
  const reasons = [
    { icon: Clock, text: "Phản hồi nhanh" },
    { icon: Users, text: "Kỹ thuật chuyên sâu" },
    { icon: Zap, text: "Giải pháp đồng bộ pin + sạc + hệ thống" },
    { icon: CheckCircle2, text: "Kinh nghiệm triển khai thực tế" },
    { icon: Shield, text: "Chính sách rõ ràng dễ hiểu" },
    { icon: Clock, text: "Đồng hành sau bán hàng dài hạn" }
  ];

  return (
    <section className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl lg:text-5xl tracking-tight">
              Vì Sao Doanh Nghiệp<br />
              <span className="text-[var(--pkg-red)]">Chọn PKG</span>
            </h2>

            <p className="text-lg text-[var(--pkg-gray)] leading-relaxed">
              Bảo hành chỉ thực sự có giá trị khi phía sau là năng lực kỹ thuật và hệ thống hỗ trợ đủ mạnh.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-6">
            {reasons.map((reason, i) => {
              const Icon = reason.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="p-6 bg-white border border-[var(--pkg-gray-light)] hover:border-[var(--pkg-red)] transition-all cursor-default"
                >
                  <Icon className="w-8 h-8 text-[var(--pkg-red)] mb-4" />
                  <p className="text-sm leading-relaxed">{reason.text}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "Tôi cần gì để yêu cầu bảo hành?",
      a: "Serial sản phẩm, thông tin mua hàng và mô tả hiện trạng lỗi."
    },
    {
      q: "Mất hóa đơn có hỗ trợ không?",
      a: "PKG có thể đối chiếu theo serial và dữ liệu bán hàng nếu khả dụng."
    },
    {
      q: "Bao lâu xử lý xong?",
      a: "Tùy mức độ sự cố, thường từ 3–10 ngày làm việc."
    },
    {
      q: "Có hỗ trợ tận nơi?",
      a: "Có, tùy khu vực và quy mô dự án."
    },
    {
      q: "Pin giảm dung lượng có được hỗ trợ?",
      a: "Nếu nằm ngoài chuẩn cam kết trong thời gian bảo hành, PKG sẽ kiểm tra và xử lý."
    }
  ];

  return (
    <section className="py-32 bg-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl lg:text-5xl mb-16 tracking-tight"
        >
          Giải Đáp <span className="text-[var(--pkg-red)]">Nhanh</span>
        </motion.h2>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="border-b border-[var(--pkg-gray-light)]"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full py-6 flex items-center justify-between text-left group"
              >
                <span className="text-lg pr-8">{faq.q}</span>
                <motion.div
                  animate={{ rotate: openIndex === i ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0"
                >
                  <div className="w-6 h-6 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-4 h-0.5 bg-[var(--pkg-red)]" />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-0.5 h-4 bg-[var(--pkg-red)]" />
                    </div>
                  </div>
                </motion.div>
              </button>

              <motion.div
                initial={false}
                animate={{
                  height: openIndex === i ? "auto" : 0,
                  opacity: openIndex === i ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="pb-6 text-[var(--pkg-gray)] leading-relaxed">
                  {faq.a}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="relative py-32 bg-black text-white overflow-hidden">
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute inset-0 bg-gradient-to-br from-[var(--pkg-red)] to-transparent opacity-20"
      />

      <div className="relative max-w-5xl mx-auto px-6 lg:px-12 text-center space-y-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl lg:text-6xl tracking-tight leading-tight"
        >
          Chọn Nhà Cung Cấp Hôm Nay.<br />
          <span className="text-[var(--pkg-red)]">Chọn Đơn Vị Đồng Hành Trong Nhiều Năm Tới.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-300 max-w-3xl mx-auto"
        >
          Đầu tư hệ thống pin là quyết định tài chính. Chọn đơn vị đứng sau bảo hành là quyết định chiến lược.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap justify-center gap-6 pt-8"
        >
          <button className="group px-10 py-5 bg-[var(--pkg-red)] text-white hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-3 text-lg">
            Yêu cầu tư vấn ngay
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="px-10 py-5 border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 text-lg">
            Liên hệ đội ngũ PKG
          </button>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-16 bg-black text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div className="space-y-4">
            <h3 className="text-2xl">PKG Battery</h3>
            <p className="text-gray-400 max-w-md">
              Giải pháp pin lithium và năng lượng công nghiệp hiệu suất cao.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
              <Phone className="w-5 h-5" />
              <span>Hotline: 1900 xxxx</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
              <Mail className="w-5 h-5" />
              <span>Email: support@pkgbattery.com</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
              <span>Website: pkgbattery.com</span>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          © PKG Battery. All rights reserved.
        </div>
      </div>
    </footer>
  );
}