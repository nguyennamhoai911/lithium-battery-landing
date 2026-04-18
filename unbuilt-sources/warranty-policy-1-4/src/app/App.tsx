import { useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import {
  Shield,
  CheckCircle2,
  Zap,
  Clock,
  Truck,
  Settings,
  Award,
  Users,
  TrendingUp,
  ChevronDown,
  ArrowRight,
  Phone,
  Mail
} from 'lucide-react';

export default function App() {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, 100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.3]);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Hero Section */}
      <motion.section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{ y: heroY, opacity: heroOpacity }}
      >
        {/* Layered Background */}
        <div className="absolute inset-0">
          {/* Base gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-zinc-50 via-white to-stone-50" />

          {/* Industrial grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.015]"
            style={{
              backgroundImage: `
                linear-gradient(to right, #000 1px, transparent 1px),
                linear-gradient(to bottom, #000 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px'
            }}
          />

          {/* Radial glow */}
          <div className="absolute top-1/4 right-1/4 w-[800px] h-[800px] bg-red-600/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] bg-zinc-900/5 rounded-full blur-3xl" />

          {/* Energy lines */}
          <svg className="absolute inset-0 w-full h-full opacity-10">
            <defs>
              <linearGradient id="energyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#dc2626" stopOpacity="0" />
                <stop offset="50%" stopColor="#dc2626" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#dc2626" stopOpacity="0" />
              </linearGradient>
            </defs>
            <motion.path
              d="M 0 300 Q 400 200, 800 300 T 1600 300"
              stroke="url(#energyGrad)"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
          </svg>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center space-y-8"
          >
            <div className="inline-block px-4 py-2 rounded-full bg-zinc-900/5 border border-zinc-900/10">
              <span className="text-xs tracking-[0.2em] uppercase text-zinc-600">
                PKG BATTERY WARRANTY SYSTEM
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl tracking-tight max-w-5xl mx-auto leading-[1.1]">
              <span className="block text-zinc-900">Không Chỉ Bán Pin.</span>
              <span className="block text-zinc-900 mt-2">
                Chúng Tôi <span className="text-red-600">Bảo Chứng</span> Cho Vận Hành Của Bạn.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-zinc-600 max-w-3xl mx-auto leading-relaxed">
              PKG Battery mang đến chính sách bảo hành rõ ràng, nhanh chóng và đủ năng lực xử lý
              cho mọi hệ thống pin lithium công nghiệp.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-zinc-900 text-white rounded-lg hover:bg-zinc-800 transition-colors flex items-center gap-2 shadow-lg shadow-zinc-900/10"
              >
                Xem thời hạn bảo hành
                <ArrowRight size={18} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-white text-zinc-900 rounded-lg border border-zinc-200 hover:border-zinc-300 transition-colors"
              >
                Gửi yêu cầu hỗ trợ
              </motion.button>
            </div>

            {/* Trust strip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 max-w-4xl mx-auto"
            >
              {[
                { icon: Truck, text: 'Hỗ trợ toàn quốc' },
                { icon: Settings, text: 'Kỹ thuật chuyên sâu' },
                { icon: Zap, text: 'Xử lý nhanh chóng' },
                { icon: Award, text: 'Đồng hành dài hạn' }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-red-600/10 flex items-center justify-center">
                    <item.icon size={24} className="text-red-600" />
                  </div>
                  <p className="text-sm text-zinc-600">{item.text}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="text-zinc-400" size={32} />
        </motion.div>
      </motion.section>

      {/* Trust Story Section */}
      <section className="relative py-32 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-white via-stone-50 to-white" />
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-zinc-900 leading-[1.2] max-w-4xl">
              Khi hệ thống dừng lại, chi phí không tính bằng phút.
            </h2>

            <div className="space-y-6 text-lg text-zinc-600 leading-relaxed max-w-3xl">
              <p>
                Một bộ pin gặp sự cố có thể kéo theo gián đoạn kho vận, đình trệ dây chuyền
                hoặc chậm tiến độ giao hàng. Vì vậy bảo hành không nên chỉ là vài dòng cam kết.
                Nó phải là năng lực phản ứng thực tế.
              </p>
              <p>
                PKG xây dựng dịch vụ hậu mãi xoay quanh tốc độ xử lý, chuyên môn kỹ thuật
                và trách nhiệm rõ ràng.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Product Coverage Section */}
      <section className="relative py-32 overflow-hidden">
        {/* Layered background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-zinc-50 via-white to-stone-100" />
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, #000 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }}
          />
          <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-red-600/5 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-zinc-900 mb-6">
              Hệ Sinh Thái Sản Phẩm Áp Dụng Bảo Hành
            </h2>
          </motion.div>

          {/* Asymmetric product grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Pin Lithium Cho Xe Nâng Điện',
                desc: 'Giải pháp năng lượng mạnh mẽ cho kho vận công nghiệp',
                highlight: true
              },
              {
                title: 'Pin Lithium Cho Xe Điện Du Lịch',
                desc: 'Hiệu suất cao, bền bỉ cho ngành du lịch',
                highlight: false
              },
              {
                title: 'Pin AGV / Robot',
                desc: 'Tối ưu cho tự động hóa và logistics thông minh',
                highlight: false
              },
              {
                title: 'Bộ Sạc - Trạm Sạc',
                desc: 'Hệ thống sạc thông minh, an toàn và hiệu quả',
                highlight: false
              },
              {
                title: 'ESS Energy Storage System',
                desc: 'Lưu trữ năng lượng quy mô lớn cho doanh nghiệp',
                highlight: true
              }
            ].map((product, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className={`
                  group relative p-8 rounded-2xl bg-white border border-zinc-200/50
                  hover:border-zinc-300 transition-all duration-300
                  ${product.highlight ? 'lg:col-span-1 md:row-span-1' : ''}
                  shadow-sm hover:shadow-xl hover:shadow-zinc-900/5
                `}
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-red-600/0 via-red-600/0 to-red-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative space-y-4">
                  <div className="w-14 h-14 rounded-xl bg-zinc-900 flex items-center justify-center group-hover:bg-red-600 transition-colors duration-300">
                    <Shield size={28} className="text-white" />
                  </div>

                  <h3 className="text-xl text-zinc-900">
                    {product.title}
                  </h3>

                  <p className="text-sm text-zinc-600 leading-relaxed">
                    {product.desc}
                  </p>

                  <div className="pt-2 flex items-center gap-2 text-sm text-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span>Xem chi tiết</span>
                    <ArrowRight size={16} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Warranty Duration Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-zinc-50 to-white" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-zinc-900 mb-6">
              Cam Kết Dài Hạn Theo Từng Ứng Dụng
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { product: 'Xe nâng điện', duration: '05 năm hoặc 10.000 giờ', icon: Truck },
              { product: 'Xe điện du lịch', duration: 'đến 05 năm', icon: Award },
              { product: 'AGV / Robot', duration: 'đến 36 tháng', icon: Settings },
              { product: 'Bộ sạc', duration: 'đến 36 tháng', icon: Zap },
              { product: 'ESS', duration: '05 - 10 năm', icon: TrendingUp }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative group"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-red-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative p-8 rounded-2xl border border-zinc-200 bg-white hover:border-red-600/30 transition-colors duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-zinc-900 flex items-center justify-center group-hover:bg-red-600 transition-colors duration-300">
                      <item.icon size={24} className="text-white" />
                    </div>

                    <div className="flex-1 space-y-2">
                      <h3 className="text-lg text-zinc-900">
                        {item.product}
                      </h3>
                      <p className="text-2xl text-red-600">
                        {item.duration}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Covered Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-stone-50 via-white to-zinc-50" />
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-zinc-900 mb-6">
              Những Gì PKG Sẵn Sàng Chịu Trách Nhiệm
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Lỗi sản xuất',
              'Lỗi vật liệu',
              'BMS lỗi kỹ thuật',
              'Hiệu suất suy giảm bất thường',
              'Sạc lỗi kỹ thuật từ thiết bị PKG',
              'Kiểm tra và đề xuất xử lý chuyên sâu'
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-start gap-4 p-6 rounded-xl bg-white border border-zinc-200/50 hover:border-green-500/30 transition-colors duration-300 group"
              >
                <CheckCircle2 size={24} className="text-green-600 flex-shrink-0 mt-1" />
                <span className="text-lg text-zinc-700 group-hover:text-zinc-900 transition-colors">
                  {item}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Exclusions Section - Dark Premium */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-zinc-900" />
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900" />
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(to right, #fff 1px, transparent 1px),
              linear-gradient(to bottom, #fff 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }}
        />
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-white mb-6">
              Ngoài Phạm Vi Bảo Hành
            </h2>
            <p className="text-lg text-zinc-400 max-w-3xl">
              Để đảm bảo chính sách rõ ràng, PKG xác định các trường hợp không thuộc phạm vi bảo hành:
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              'Sử dụng sai hướng dẫn',
              'Tự ý sửa chữa',
              'Sai bộ sạc',
              'Va đập / ngập nước / cháy nổ',
              'Thiên tai / môi trường cực đoan',
              'Hao mòn tự nhiên ngoài chuẩn'
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-start gap-4 p-6 rounded-xl bg-white/5 border border-white/10 hover:border-red-600/30 transition-colors duration-300"
              >
                <div className="w-2 h-2 rounded-full bg-red-600 flex-shrink-0 mt-3" />
                <span className="text-lg text-zinc-300">
                  {item}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Claim Process Section */}
      <ClaimProcessSection />

      {/* Why PKG Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-stone-50 to-white" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-zinc-900 mb-6">
              Vì Sao Doanh Nghiệp Chọn PKG
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: 'Chính sách minh bạch', desc: 'Điều khoản rõ ràng, dễ hiểu, không khoản mục ẩn' },
              { icon: Settings, title: 'Kỹ thuật mạnh', desc: 'Đội ngũ kỹ sư chuyên sâu về pin lithium công nghiệp' },
              { icon: Zap, title: 'Phản hồi nhanh', desc: 'Tiếp nhận và xử lý yêu cầu trong thời gian ngắn nhất' },
              { icon: CheckCircle2, title: 'Giải pháp đồng bộ', desc: 'Pin, sạc, hậu mãi từ cùng một nhà cung cấp' },
              { icon: Award, title: 'Hậu mãi dài hạn', desc: 'Cam kết đồng hành suốt vòng đời sản phẩm' },
              { icon: TrendingUp, title: 'Kinh nghiệm triển khai', desc: 'Hàng trăm dự án thành công trên toàn quốc' }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group p-8 rounded-2xl bg-white border border-zinc-200 hover:border-red-600/30 transition-all duration-300 hover:shadow-xl hover:shadow-zinc-900/5"
              >
                <div className="w-14 h-14 rounded-xl bg-zinc-900 flex items-center justify-center mb-6 group-hover:bg-red-600 transition-colors duration-300">
                  <item.icon size={28} className="text-white" />
                </div>
                <h3 className="text-xl text-zinc-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-zinc-600 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* Final CTA Section */}
      <section className="relative py-32 overflow-hidden">
        {/* Cinematic red energy background */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-600 via-red-700 to-zinc-900" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 3px 3px, #fff 2px, transparent 0)`,
            backgroundSize: '60px 60px'
          }}
        />
        <div className="absolute top-1/4 right-1/4 w-[800px] h-[800px] bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] bg-zinc-900/30 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <h2 className="text-4xl md:text-5xl lg:text-7xl text-white leading-[1.1]">
              Chọn Nhà Cung Cấp Hôm Nay.
              <br />
              Chọn Đơn Vị Đồng Hành Trong Nhiều Năm Tới.
            </h2>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-white text-red-600 rounded-xl hover:bg-zinc-50 transition-colors text-lg shadow-2xl flex items-center gap-3"
              >
                <Phone size={20} />
                Yêu cầu hỗ trợ ngay
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-transparent text-white rounded-xl border-2 border-white/30 hover:border-white/50 transition-colors text-lg flex items-center gap-3"
              >
                <Mail size={20} />
                Liên hệ chuyên gia PKG
              </motion.button>
            </div>

            {/* Contact info */}
            <div className="pt-12 flex flex-col md:flex-row gap-8 justify-center items-center text-white/80">
              <div className="flex items-center gap-3">
                <Phone size={18} />
                <span>Hotline: 1900 xxxx</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} />
                <span>warranty@pkgbattery.com</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

// Claim Process Section Component
function ClaimProcessSection() {
  const steps = [
    { number: '01', title: 'Tiếp nhận yêu cầu', desc: 'Gửi thông tin qua hotline, email hoặc form trực tuyến' },
    { number: '02', title: 'Xác minh thông tin', desc: 'Kiểm tra serial, thời hạn bảo hành, lịch sử sử dụng' },
    { number: '03', title: 'Chẩn đoán kỹ thuật', desc: 'Kỹ sư PKG tiến hành kiểm tra chuyên sâu' },
    { number: '04', title: 'Sửa chữa / thay thế', desc: 'Xử lý nhanh chóng theo cam kết bảo hành' },
    { number: '05', title: 'Bàn giao & hỗ trợ', desc: 'Giao thiết bị và tiếp tục theo dõi hiệu suất' }
  ];

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-zinc-50 to-stone-50" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-zinc-900 mb-6">
            Quy Trình Xử Lý Tối Ưu Thời Gian Chờ
          </h2>
        </motion.div>

        <div className="relative">
          {/* Connection line */}
          <div className="absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-zinc-200 via-red-600/30 to-zinc-200 hidden lg:block" />

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="relative"
              >
                {/* Step number circle */}
                <div className="relative z-10 w-24 h-24 mx-auto mb-6 rounded-full bg-white border-4 border-zinc-200 flex items-center justify-center group-hover:border-red-600 transition-colors">
                  <span className="text-3xl text-zinc-900">{step.number}</span>
                </div>

                {/* Content */}
                <div className="text-center space-y-3">
                  <h3 className="text-xl text-zinc-900">
                    {step.title}
                  </h3>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {/* Animated connector */}
                {i < steps.length - 1 && (
                  <motion.div
                    className="hidden lg:block absolute top-12 left-1/2 w-full h-0.5"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: i * 0.2 }}
                  >
                    <div className="h-full bg-gradient-to-r from-red-600/50 to-transparent" />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// FAQ Section Component
function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: 'Tôi cần gì để bảo hành?',
      a: 'Bạn cần cung cấp: phiếu bảo hành hoặc hóa đơn mua hàng, số serial sản phẩm, mô tả sự cố gặp phải. PKG sẽ xác minh và hướng dẫn quy trình tiếp theo.'
    },
    {
      q: 'Bao lâu xử lý?',
      a: 'Thời gian xử lý phụ thuộc vào mức độ sự cố. Thông thường: chẩn đoán trong 24-48h, sửa chữa/thay thế trong 3-7 ngày làm việc. Trường hợp khẩn cấp sẽ được ưu tiên.'
    },
    {
      q: 'Có hỗ trợ tận nơi không?',
      a: 'Có. PKG cung cấp dịch vụ hỗ trợ tận nơi cho các hệ thống lớn hoặc trường hợp không thể di chuyển thiết bị. Phí dịch vụ tùy thuộc vào khoảng cách và phạm vi công việc.'
    },
    {
      q: 'Mất hóa đơn thì sao?',
      a: 'Bạn vẫn có thể bảo hành thông qua số serial của sản phẩm. PKG lưu trữ lịch sử bán hàng và có thể tra cứu thông tin để xác minh thời hạn bảo hành.'
    },
    {
      q: 'Pin giảm dung lượng có hỗ trợ không?',
      a: 'Nếu dung lượng suy giảm vượt mức cam kết trong thời gian bảo hành (ví dụ: giảm quá 20% sau 1 năm), PKG sẽ kiểm tra và xử lý theo chính sách bảo hành hiệu suất.'
    }
  ];

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-stone-50 to-white" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-zinc-900 mb-6">
            Câu Hỏi Thường Gặp
          </h2>
          <p className="text-lg text-zinc-600">
            Giải đáp nhanh những thắc mắc phổ biến về chính sách bảo hành
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl border border-zinc-200 overflow-hidden hover:border-zinc-300 transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-zinc-50 transition-colors"
              >
                <span className="text-lg text-zinc-900 pr-8">
                  {faq.q}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown size={24} className="text-zinc-400" />
                </motion.div>
              </button>

              <motion.div
                initial={false}
                animate={{
                  height: openIndex === i ? 'auto' : 0,
                  opacity: openIndex === i ? 1 : 0
                }}
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                className="overflow-hidden"
              >
                <div className="px-8 pb-6 text-zinc-600 leading-relaxed">
                  {faq.a}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
