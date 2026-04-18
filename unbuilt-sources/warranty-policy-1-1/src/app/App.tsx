import { motion, useInView } from "motion/react";
import { Shield, CheckCircle2, XCircle, Zap, Clock, Phone, Mail, Globe, Battery, Truck, Car, BatteryCharging, Router, HelpCircle, ArrowRight } from "lucide-react";
import { useRef, useState } from "react";
import * as Accordion from '@radix-ui/react-accordion';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <IntroSection />
      <ProductCoverageSection />
      <WarrantyDurationSection />
      <WhatsCoveredSection />
      <NotCoveredSection />
      <ClaimProcessSection />
      <WhyPKGSection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
}

function HeroSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-white via-gray-50 to-white">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(214, 0, 0, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(214, 0, 0, 0.05) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 mb-8"
            >
              <span className="text-[11px] tracking-[0.15em] uppercase text-gray-600">PKG BATTERY WARRANTY POLICY</span>
            </motion.div>

            <h1 className="text-[3.5rem] md:text-[5rem] lg:text-[5.5rem] leading-[1.1] tracking-[-0.02em] mb-8">
              Chính Sách Bảo Hành <span className="text-[#D60000]">Minh Bạch.</span> Cam Kết Dài Hạn.
            </h1>

            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-12 max-w-xl">
              PKG Battery mang đến chính sách bảo hành rõ ràng, chuyên nghiệp và tiêu chuẩn cao cho toàn bộ giải pháp pin lithium công nghiệp, xe điện và hệ thống lưu trữ năng lượng.
            </p>

            <div className="flex flex-wrap gap-4 mb-16">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-[#D60000] text-white rounded-lg hover:bg-[#B00000] transition-colors flex items-center gap-2"
              >
                Xem thời hạn bảo hành
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 border-2 border-gray-900 text-gray-900 rounded-lg hover:bg-gray-900 hover:text-white transition-colors"
              >
                Gửi yêu cầu hỗ trợ
              </motion.button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { text: "Hỗ trợ toàn quốc" },
                { text: "Kỹ thuật chuyên sâu" },
                { text: "Xử lý nhanh chóng" },
                { text: "Linh kiện chính hãng" }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.6 }}
                  className="text-sm text-gray-700"
                >
                  <div className="w-1 h-8 bg-[#D60000] mb-3" />
                  {item.text}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1714627798569-b3e36d409c4b?w=1080&q=80"
                alt="Industrial Battery System"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-2xl"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#D60000] rounded-full flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">5 năm</div>
                  <div className="text-sm text-gray-600">Bảo hành tiêu chuẩn</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function IntroSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-32 px-6 md:px-12 lg:px-20 max-w-[1400px] mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center max-w-4xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight mb-8">
          Sự an tâm không đến từ lời hứa. <span className="italic text-gray-400">Đến từ chính sách rõ ràng.</span>
        </h2>
        <p className="text-xl text-gray-600 leading-relaxed">
          Chúng tôi hiểu rằng khách hàng doanh nghiệp cần hơn một sản phẩm tốt — đó là sự ổn định dài hạn, chi phí vận hành tối ưu và đơn vị đồng hành đáng tin cậy. Vì vậy PKG xây dựng chính sách bảo hành minh bạch, dễ hiểu và tập trung vào tốc độ xử lý thực tế.
        </p>
      </motion.div>
    </section>
  );
}

function ProductCoverageSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const products = [
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Bình Ắc Quy Pin Lithium Cho Xe Nâng Điện",
      desc: "Giải pháp năng lượng bền bỉ cho vận hành cường độ cao trong kho bãi, logistics và nhà máy.",
      img: "https://images.unsplash.com/photo-1645736315000-6f788915923b?w=1080&q=80",
      warranty: "5 năm"
    },
    {
      icon: <Car className="w-8 h-8" />,
      title: "Bình Ắc Quy Lithium Cho Xe Điện Du Lịch",
      desc: "Dành cho xe golf, xe resort, xe du lịch nội khu với hiệu suất ổn định và sạc nhanh.",
      img: "https://images.unsplash.com/photo-1758551938825-20da1d087834?w=1080&q=80",
      warranty: "Đến 5 năm"
    },
    {
      icon: <Router className="w-8 h-8" />,
      title: "Pin Cho Xe AGV / Robot",
      desc: "Nguồn năng lượng thông minh cho hệ thống tự động hóa, robot vận chuyển và nhà máy hiện đại.",
      img: "https://images.unsplash.com/photo-1705579611249-9861db5469ea?w=1080&q=80",
      warranty: "36 tháng"
    },
    {
      icon: <BatteryCharging className="w-8 h-8" />,
      title: "Bộ Sạc - Trạm Sạc",
      desc: "Thiết bị sạc tối ưu hiệu năng, bảo vệ pin và tăng tuổi thọ hệ thống.",
      img: "https://images.unsplash.com/photo-1632914146475-bfe6fa6b2a12?w=1080&q=80",
      warranty: "36 tháng"
    },
    {
      icon: <Battery className="w-8 h-8" />,
      title: "Hệ Thống Pin Lưu Trữ Năng Lượng ESS",
      desc: "Giải pháp lưu trữ điện cho doanh nghiệp, nhà máy, năng lượng tái tạo và backup power.",
      img: "https://images.unsplash.com/photo-1589276534126-adef63a95e05?w=1080&q=80",
      warranty: "5-10 năm"
    }
  ];

  return (
    <section ref={ref} className="py-32 px-6 md:px-12 lg:px-20 bg-gray-50">
      <div className="max-w-[1600px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-6xl tracking-tight mb-4">
            Danh mục sản phẩm <span className="text-[#D60000]">áp dụng bảo hành</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, i) => (
            <ProductCard key={i} product={product} delay={i * 0.1} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product, delay, isInView }: any) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.8 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative bg-white rounded-2xl overflow-hidden cursor-pointer"
    >
      <div className="relative h-64 overflow-hidden">
        <motion.img
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.6 }}
          src={product.img}
          alt={product.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
          transition={{ duration: 0.3 }}
          className="absolute top-4 right-4 bg-[#D60000] text-white px-4 py-2 rounded-lg"
        >
          {product.warranty}
        </motion.div>
      </div>
      <div className="p-8">
        <div className="text-[#D60000] mb-4">{product.icon}</div>
        <h3 className="text-xl mb-3 leading-tight">{product.title}</h3>
        <p className="text-gray-600 leading-relaxed">{product.desc}</p>
      </div>
    </motion.div>
  );
}

function WarrantyDurationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const durations = [
    { product: "Xe nâng điện", duration: "05 năm", detail: "hoặc 10.000 giờ hoạt động (tùy điều kiện đến trước)" },
    { product: "Xe điện du lịch", duration: "Đến 05 năm", detail: "tùy cấu hình hệ thống pin" },
    { product: "AGV / Robot", duration: "Đến 36 tháng", detail: "" },
    { product: "Bộ sạc / Trạm sạc", duration: "Đến 36 tháng", detail: "" },
    { product: "ESS", duration: "05 - 10 năm", detail: "tùy cấu hình và gói triển khai" }
  ];

  return (
    <section ref={ref} className="py-32 px-6 md:px-12 lg:px-20">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl tracking-tight mb-6">
            Thời hạn bảo hành <span className="text-[#D60000]">tiêu chuẩn</span>
          </h2>
        </motion.div>

        <div className="space-y-1">
          {durations.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group hover:bg-gray-50 transition-colors p-8 rounded-xl"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="text-2xl md:text-3xl mb-2">{item.product}</div>
                  {item.detail && <div className="text-gray-500">{item.detail}</div>}
                </div>
                <div className="text-4xl md:text-5xl text-[#D60000] whitespace-nowrap">
                  {item.duration}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-center text-gray-500 mt-12 italic"
        >
          Thời hạn cụ thể có thể khác nhau theo model, công suất và hợp đồng cung cấp.
        </motion.p>
      </div>
    </section>
  );
}

function WhatsCoveredSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const covered = [
    "Lỗi kỹ thuật phát sinh từ quá trình sản xuất.",
    "Lỗi vật liệu hoặc linh kiện không đạt tiêu chuẩn.",
    "BMS / hệ điều khiển pin gặp lỗi vận hành.",
    "Hiệu suất suy giảm bất thường ngoài tiêu chuẩn công bố.",
    "Sạc không ổn định do lỗi kỹ thuật thiết bị sạc do PKG cung cấp.",
    "Hỗ trợ kiểm tra, đánh giá và đề xuất phương án xử lý."
  ];

  return (
    <section ref={ref} className="py-32 px-6 md:px-12 lg:px-20 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `radial-gradient(circle, #D60000 1px, transparent 1px)`,
          backgroundSize: '30px 30px'
        }} />
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl tracking-tight mb-8">
              Những hạng mục <span className="text-[#D60000]">được bảo hành</span>
            </h2>
            <div className="w-20 h-1 bg-[#D60000]" />
          </motion.div>

          <div className="space-y-6">
            {covered.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="flex gap-4 group"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-100 flex items-center justify-center group-hover:bg-green-200 transition-colors">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                </div>
                <p className="text-lg text-gray-700 leading-relaxed pt-2">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function NotCoveredSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const notCovered = [
    "Sử dụng sai hướng dẫn kỹ thuật.",
    "Tự ý tháo mở, sửa chữa hoặc thay đổi kết cấu sản phẩm.",
    "Dùng sai bộ sạc hoặc nguồn điện không phù hợp.",
    "Rơi vỡ, va đập mạnh, ngập nước, cháy nổ do tác động bên ngoài.",
    "Thiên tai, hỏa hoạn, sét đánh, môi trường khắc nghiệt.",
    "Hao mòn tự nhiên sau thời gian sử dụng ngoài chuẩn cam kết.",
    "Tem niêm phong hoặc serial bị rách, mất hoặc chỉnh sửa."
  ];

  return (
    <section ref={ref} className="py-32 px-6 md:px-12 lg:px-20 bg-gray-900 text-white">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-6 lg:order-2">
            {notCovered.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="flex gap-4 group"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center group-hover:bg-red-500/30 transition-colors">
                  <XCircle className="w-5 h-5 text-red-400" />
                </div>
                <p className="text-lg text-gray-300 leading-relaxed pt-2">{item}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:order-1"
          >
            <h2 className="text-5xl md:text-6xl tracking-tight mb-8">
              Các trường hợp <span className="text-[#D60000]">không thuộc</span> phạm vi bảo hành
            </h2>
            <div className="w-20 h-1 bg-[#D60000]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ClaimProcessSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const steps = [
    {
      num: "01",
      title: "Liên hệ PKG Battery",
      desc: "Gửi thông tin sản phẩm, tình trạng lỗi và nhu cầu hỗ trợ."
    },
    {
      num: "02",
      title: "Xác minh thông tin",
      desc: "Đội ngũ kỹ thuật kiểm tra model, serial, thời gian bảo hành và dữ liệu vận hành."
    },
    {
      num: "03",
      title: "Đánh giá kỹ thuật",
      desc: "Tiến hành chẩn đoán nguyên nhân lỗi từ xa hoặc trực tiếp."
    },
    {
      num: "04",
      title: "Xử lý bảo hành",
      desc: "Sửa chữa, thay thế linh kiện hoặc đổi sản phẩm tương đương theo chính sách áp dụng."
    },
    {
      num: "05",
      title: "Bàn giao & tiếp tục hỗ trợ",
      desc: "Sản phẩm được bàn giao sau xử lý và tiếp tục theo dõi vận hành nếu cần."
    }
  ];

  return (
    <section ref={ref} className="py-32 px-6 md:px-12 lg:px-20 bg-white">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl tracking-tight mb-6">
            Quy trình tiếp nhận <span className="text-[#D60000]">bảo hành</span>
          </h2>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gray-200 via-[#D60000] to-gray-200" />

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.8 }}
              className={`relative grid lg:grid-cols-2 gap-12 mb-20 last:mb-0 ${i % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}
            >
              <div className={`${i % 2 === 0 ? 'lg:text-right' : 'lg:col-start-2'}`}>
                <div className={`inline-block ${i % 2 === 0 ? 'lg:ml-auto' : ''}`}>
                  <div className="text-7xl md:text-8xl text-gray-100 mb-4">{step.num}</div>
                  <h3 className="text-3xl mb-4">{step.title}</h3>
                  <p className="text-lg text-gray-600 leading-relaxed max-w-md">{step.desc}</p>
                </div>
              </div>

              <div className="hidden lg:flex items-center justify-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: i * 0.15 + 0.3, duration: 0.5 }}
                  className="w-16 h-16 rounded-full bg-[#D60000] flex items-center justify-center text-white shadow-lg"
                >
                  <Zap className="w-8 h-8" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center text-gray-500 mt-16 italic"
        >
          Thời gian xử lý phụ thuộc dòng sản phẩm và mức độ sự cố.
        </motion.p>
      </div>
    </section>
  );
}

function WhyPKGSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const reasons = [
    "Chính sách minh bạch, dễ hiểu.",
    "Phản hồi nhanh và hỗ trợ thực tế.",
    "Đội ngũ kỹ thuật nhiều kinh nghiệm.",
    "Giải pháp đồng bộ pin + sạc + hệ thống.",
    "Phù hợp khách hàng B2B và dự án lớn.",
    "Hậu mãi dài hạn, đồng hành sau bán hàng."
  ];

  return (
    <section ref={ref} className="py-32 px-6 md:px-12 lg:px-20 bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <img
          src="https://images.unsplash.com/photo-1695712551666-e0c354b1e6b9?w=1920&q=80"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl tracking-tight mb-6">
            Vì sao khách hàng <span className="text-[#D60000]">tin tưởng PKG</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="bg-white p-8 rounded-2xl hover:shadow-xl transition-shadow group"
            >
              <div className="w-12 h-12 bg-[#D60000] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <CheckCircle2 className="w-6 h-6 text-white" />
              </div>
              <p className="text-xl leading-relaxed">{reason}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const faqs = [
    {
      q: "Tôi cần chuẩn bị gì khi yêu cầu bảo hành?",
      a: "Vui lòng cung cấp model sản phẩm, serial number, hóa đơn hoặc thông tin mua hàng và mô tả lỗi đang gặp phải."
    },
    {
      q: "Mất hóa đơn có được hỗ trợ không?",
      a: "PKG vẫn hỗ trợ kiểm tra thông tin theo serial và lịch sử mua hàng nếu có dữ liệu đối chiếu."
    },
    {
      q: "Bao lâu xử lý xong?",
      a: "Thông thường từ 3 - 10 ngày làm việc tùy sản phẩm và mức độ lỗi."
    },
    {
      q: "Pin giảm dung lượng có được bảo hành không?",
      a: "Nếu mức suy giảm nằm ngoài tiêu chuẩn cam kết trong thời gian bảo hành, đội ngũ kỹ thuật sẽ kiểm tra và xử lý theo chính sách."
    },
    {
      q: "PKG có hỗ trợ tận nơi không?",
      a: "Có. Tùy khu vực và dự án, PKG có thể bố trí hỗ trợ onsite hoặc kỹ thuật từ xa."
    }
  ];

  return (
    <section ref={ref} className="py-32 px-6 md:px-12 lg:px-20 bg-white">
      <div className="max-w-[1000px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl tracking-tight mb-6">
            Câu hỏi <span className="text-[#D60000]">thường gặp</span>
          </h2>
        </motion.div>

        <Accordion.Root type="single" collapsible className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              <Accordion.Item value={`item-${i}`} className="border border-gray-200 rounded-xl overflow-hidden bg-white hover:border-gray-300 transition-colors">
                <Accordion.Header>
                  <Accordion.Trigger className="w-full flex items-center justify-between p-8 group">
                    <span className="text-xl text-left pr-8">{faq.q}</span>
                    <HelpCircle className="w-6 h-6 text-[#D60000] flex-shrink-0 group-data-[state=open]:rotate-180 transition-transform" />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="px-8 pb-8 text-lg text-gray-600 leading-relaxed data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
                  {faq.a}
                </Accordion.Content>
              </Accordion.Item>
            </motion.div>
          ))}
        </Accordion.Root>
      </div>
    </section>
  );
}

function FinalCTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="relative py-40 px-6 md:px-12 lg:px-20 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1709803857195-dbd9eb6dc4bf?w=1920&q=80"
          alt="Final CTA Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/90" />
      </div>

      <div className="max-w-[1200px] mx-auto relative z-10 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl tracking-tight mb-8 leading-tight">
            Đầu Tư Năng Lượng Bền Vững. <br />
            <span className="text-[#D60000]">Đồng Hành Cùng PKG.</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Chọn một nhà cung cấp không chỉ bán pin, mà còn sẵn sàng chịu trách nhiệm dài hạn cho hệ thống của bạn.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-[#D60000] text-white rounded-lg hover:bg-[#B00000] transition-colors text-lg flex items-center gap-3"
            >
              Yêu cầu hỗ trợ bảo hành
              <ArrowRight className="w-5 h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-colors text-lg"
            >
              Liên hệ chuyên gia PKG
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="text-2xl mb-4">PKG Battery</div>
            <p className="text-gray-400 leading-relaxed">
              Giải pháp pin lithium và năng lượng công nghiệp hiệu suất cao.
            </p>
          </div>

          <div>
            <h4 className="mb-4">Liên hệ</h4>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#D60000]" />
                <span>1900 xxxx</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#D60000]" />
                <span>support@pkgbattery.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-[#D60000]" />
                <span>pkgbattery.com</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="mb-4">Sản phẩm</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Pin xe nâng điện</li>
              <li>Pin xe điện du lịch</li>
              <li>Pin AGV / Robot</li>
              <li>Hệ thống ESS</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4">Chính sách</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Bảo hành</li>
              <li>Thanh toán</li>
              <li>Giao hàng</li>
              <li>Bảo mật</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center text-gray-500">
          © PKG Battery. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
