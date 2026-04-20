import { useState, useEffect } from 'react';
import { Battery, ChevronDown, Shield, Award, Zap, Clock, DollarSign, Wrench, Factory, CheckCircle2, MapPin, Phone, Mail } from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-[#111111] overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm text-[#111111]' : 'bg-transparent text-white'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-3">
              <Battery className="w-8 h-8 text-[#D61F26]" />
              <span className="font-bold text-xl tracking-tight">PKG BATTERY</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#about" className="text-sm hover:text-[#D61F26] transition-colors">Về chúng tôi</a>
              <a href="#products" className="text-sm hover:text-[#D61F26] transition-colors">Sản phẩm</a>
              <a href="#quality" className="text-sm hover:text-[#D61F26] transition-colors">Chất lượng</a>
              <a href="#network" className="text-sm hover:text-[#D61F26] transition-colors">Mạng lưới</a>
              <a href="#contact" className="px-6 py-2.5 bg-[#D61F26] text-white rounded-full hover:bg-[#b81a21] transition-all hover:shadow-lg hover:shadow-red-500/30">
                Liên hệ
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background with gradient overlay */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#111111] via-[#2B2B2B] to-[#111111]" />
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1695712551666-e0c354b1e6b9?w=1920&q=80')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#D61F26]/10 via-transparent to-transparent" />
        </div>

        {/* Floating particles effect */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-[#D61F26]/30 rounded-full"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
              }}
              animate={{
                y: [null, Math.random() * window.innerHeight],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-4 px-4 py-2 bg-[#D61F26]/20 border border-[#D61F26]/30 rounded-full text-sm backdrop-blur-sm"
            >
              PKG BATTERY
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight"
            >
              TIÊN PHONG<br />
              GIẢI PHÁP NĂNG LƯỢNG<br />
              <span className="text-[#D61F26]">LITHIUM</span> TẠI VIỆT NAM
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg lg:text-xl mb-8 text-gray-300 leading-relaxed max-w-2xl"
            >
              PKG Battery phát triển giải pháp pin Lithium tối ưu cho xe nâng điện, AGV và hệ thống lưu trữ năng lượng. Đồng hành cùng doanh nghiệp Việt Nam trong quá trình chuyển đổi xanh, an toàn và hiệu quả với vị thế đối tác chiến lược.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <a href="#about" className="group px-8 py-4 bg-[#D61F26] text-white rounded-full hover:bg-[#b81a21] transition-all hover:shadow-xl hover:shadow-red-500/40 inline-flex items-center gap-2">
                Khám phá năng lực
                <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </a>
              <a href="#products" className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20 hover:bg-white/20 transition-all inline-flex items-center gap-2">
                Xem sản phẩm
              </a>
            </motion.div>
          </motion.div>

          {/* Battery Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="hidden lg:flex justify-center items-center relative"
          >
            <div className="relative">
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute inset-0 bg-gradient-to-r from-[#D61F26]/20 to-transparent blur-3xl"
              />
              <Battery className="w-64 h-64 text-[#D61F26] relative z-10 drop-shadow-2xl drop-shadow-[#D61F26]/50" strokeWidth={1} />
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 border-2 border-[#D61F26]/30 rounded-lg"
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-white/50"
          >
            <span className="text-xs uppercase tracking-wider">Cuộn xuống</span>
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </section>

      {/* Trust Bar */}
      <section className="py-8 bg-gradient-to-r from-[#E5E5E5] to-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16">
            {[
              { text: 'IEC 62619', icon: Shield },
              { text: 'UN38.3', icon: Award },
              { text: 'ISO Quality', icon: CheckCircle2 },
              { text: 'MIC Insurance', icon: Shield },
              { text: 'Đại lý toàn quốc', icon: MapPin },
              { text: 'Hỗ trợ kỹ thuật nhanh', icon: Wrench },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-2 text-[#2B2B2B]"
              >
                <item.icon className="w-5 h-5 text-[#D61F26]" />
                <span className="text-sm font-medium">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Introduction */}
      <section id="about" className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[500px] rounded-2xl overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1695712551666-e0c354b1e6b9?w=800&q=80"
                alt="Manufacturing"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#D61F26]/60 via-[#111111]/40 to-transparent" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Năng lực nội địa cho<br />
                <span className="text-[#D61F26]">tương lai năng lượng</span> Việt Nam
              </h2>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                PKG Battery tập trung nghiên cứu, thiết kế và cung cấp các giải pháp pin Lithium cho môi trường công nghiệp hiện đại. Với định hướng phát triển dài hạn, doanh nghiệp xây dựng năng lực từ công nghệ, sản xuất đến hỗ trợ kỹ thuật, nhằm giúp khách hàng nâng cao hiệu suất vận hành, cải thiện độ an toàn và tối ưu chi phí trong dài hạn.
              </p>

              <p className="text-base text-gray-600 mb-8 leading-relaxed">
                Không chỉ cung cấp sản phẩm, PKG Battery hướng đến vai trò của một đối tác giải pháp – đồng hành cùng doanh nghiệp trong quá trình chuyển đổi từ hệ thống ắc quy truyền thống sang nền tảng lưu trữ năng lượng hiện đại hơn, sạch hơn và bền vững hơn.
              </p>

              <div className="grid grid-cols-2 gap-6">
                {[
                  { number: '5', label: 'Dòng sản phẩm chiến lược' },
                  { number: '08+', label: 'Điểm hiện diện toàn quốc' },
                  { number: '100%', label: 'Tiêu chuẩn quốc tế' },
                  { number: '24/7', label: 'Hỗ trợ kỹ thuật' },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="border-l-4 border-[#D61F26] pl-4"
                  >
                    <div className="text-3xl font-bold text-[#D61F26] mb-1">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision Mission Values */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-[#F8F8F8] to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, #D61F26 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Định hướng phát triển</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#D61F26] to-[#b81a21] mx-auto" />
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Tầm nhìn',
                subtitle: 'Vision',
                main: 'Thúc đẩy chuyển đổi từ ắc quy truyền thống sang Lithium tại Việt Nam',
                description: 'PKG Battery định hướng trở thành một trong những lực đẩy quan trọng của quá trình chuyển đổi năng lượng lưu trữ trong công nghiệp và vận hành hiện đại, góp phần thay thế các mô hình lưu trữ cũ bằng giải pháp an toàn hơn, hiệu quả hơn và bền vững hơn.',
              },
              {
                title: 'Sứ mệnh',
                subtitle: 'Mission',
                main: 'Mang nguồn năng lượng sạch, an toàn và hiệu quả đến doanh nghiệp Việt',
                description: 'Thông qua công nghệ Lithium và năng lực phát triển giải pháp thực tế, PKG Battery mong muốn giúp doanh nghiệp tiếp cận các hệ thống lưu trữ năng lượng chất lượng cao, dễ ứng dụng, tối ưu chi phí và phù hợp với nhu cầu phát triển lâu dài.',
              },
              {
                title: 'Giá trị cốt lõi',
                subtitle: 'Core Values',
                main: 'Công nghệ – Chính trực – Chất lượng – Đồng hành dài hạn',
                description: 'PKG Battery đặt công nghệ làm nền tảng, lấy chất lượng làm cam kết, vận hành với tinh thần chính trực và xây dựng quan hệ đối tác dựa trên sự đồng hành bền vững cùng khách hàng.',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#D61F26]/5 to-transparent rounded-2xl transform group-hover:scale-105 transition-transform duration-300" />
                <div className="relative bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 h-full border border-gray-100">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#D61F26] to-[#b81a21] flex items-center justify-center text-white font-bold">
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-[#111111]">{item.title}</h3>
                      <p className="text-xs text-gray-500 uppercase tracking-wider">{item.subtitle}</p>
                    </div>
                  </div>
                  <p className="font-bold text-lg text-[#D61F26] mb-4 leading-tight">{item.main}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Ecosystem */}
      <section id="products" className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Hệ sinh thái sản phẩm</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Giải pháp pin Lithium toàn diện cho nhiều lĩnh vực công nghiệp và năng lượng
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-6">
            {[
              {
                title: 'Pin xe nâng điện',
                description: 'Giải pháp tối ưu cho môi trường kho vận và vận hành cường độ cao.',
                cta: 'Khám phá dòng pin xe nâng điện',
                image: 'https://images.unsplash.com/photo-1714627798569-b3e36d409c4b?w=800&q=80',
              },
              {
                title: 'Pin AGV / Robot',
                description: 'Thiết kế cho hệ thống tự động hóa, robot công nghiệp và vận hành thông minh.',
                cta: 'Tìm hiểu pin AGV / Robot',
                image: 'https://images.unsplash.com/photo-1740914994657-f1cdffdc418e?w=800&q=80',
              },
              {
                title: 'Pin xe điện du lịch / golf',
                description: 'Nguồn năng lượng ổn định cho phương tiện dịch vụ, nghỉ dưỡng và vận hành nội khu.',
                cta: 'Xem giải pháp cho xe điện du lịch',
                image: 'https://images.unsplash.com/photo-1645736315000-6f788915923b?w=800&q=80',
              },
              {
                title: 'Bộ sạc nhanh / Trạm sạc',
                description: 'Rút ngắn thời gian sạc, nâng cao hiệu quả khai thác thiết bị trong thực tế.',
                cta: 'Xem giải pháp sạc nhanh',
                image: 'https://images.unsplash.com/photo-1742899273038-67ff67477663?w=800&q=80',
              },
            ].map((product, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/70 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#D61F26]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{product.title}</h3>
                  <p className="text-sm text-gray-300 mb-4">{product.description}</p>
                  <button className="text-sm text-white border-b border-white/50 hover:border-[#D61F26] hover:text-[#D61F26] transition-colors inline-flex items-center gap-2 group-hover:gap-3">
                    {product.cta}
                    <ChevronDown className="w-4 h-4 rotate-[-90deg]" />
                  </button>
                </div>
              </motion.div>
            ))}

            {/* ESS - Full width */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="lg:col-span-2 group relative h-96 rounded-2xl overflow-hidden cursor-pointer"
            >
              <img
                src="https://images.unsplash.com/photo-1732030373864-d37573915751?w=1600&q=80"
                alt="ESS"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/60 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#D61F26]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="absolute bottom-0 left-0 right-0 p-12">
                <h3 className="text-3xl lg:text-4xl font-bold text-white mb-3">ESS lưu trữ năng lượng</h3>
                <p className="text-base text-gray-300 mb-6 max-w-2xl">
                  Hỗ trợ doanh nghiệp quản lý điện năng hiệu quả và bền vững hơn.
                </p>
                <button className="text-base text-white border-b-2 border-white/50 hover:border-[#D61F26] hover:text-[#D61F26] transition-colors inline-flex items-center gap-2 group-hover:gap-4 pb-1">
                  Khám phá hệ thống ESS
                  <ChevronDown className="w-5 h-5 rotate-[-90deg]" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why PKG Battery */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-[#F8F8F8] to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Tại sao chọn PKG Battery?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Lợi thế vượt trội trong công nghệ, chất lượng và dịch vụ đồng hành
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: 'Tuổi thọ cao hơn',
                description: 'Giải pháp pin Lithium giúp kéo dài chu kỳ sử dụng, giảm tần suất thay thế và tăng hiệu quả đầu tư.',
              },
              {
                icon: Clock,
                title: 'Sạc nhanh hơn',
                description: 'Rút ngắn thời gian chờ, tăng thời gian hoạt động của thiết bị trong thực tế vận hành.',
              },
              {
                icon: Shield,
                title: 'An toàn vượt trội',
                description: 'Thiết kế và kiểm soát chất lượng theo tiêu chuẩn cao, phù hợp môi trường công nghiệp đòi hỏi độ ổn định.',
              },
              {
                icon: DollarSign,
                title: 'Tối ưu chi phí dài hạn',
                description: 'Chi phí đầu tư được bù đắp bằng hiệu suất vận hành, tuổi thọ và khả năng giảm thời gian dừng thiết bị.',
              },
              {
                icon: Wrench,
                title: 'Hỗ trợ kỹ thuật nhanh',
                description: 'Đội ngũ kỹ thuật sẵn sàng đồng hành trong quá trình triển khai, vận hành và xử lý yêu cầu thực tế.',
              },
              {
                icon: Factory,
                title: 'OEM / ODM linh hoạt',
                description: 'Khả năng tùy biến giải pháp theo nhu cầu doanh nghiệp, phù hợp nhiều mô hình ứng dụng khác nhau.',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#D61F26]/30"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#D61F26] to-[#b81a21] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#111111]">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing & Quality */}
      <section id="quality" className="py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] via-[#2B2B2B] to-[#111111]" />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1695712551608-b118cc5a39e4?w=1920&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent" />

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-white"
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Chất lượng được<br />
                <span className="text-[#D61F26]">kiểm soát</span> từ thiết kế<br />
                đến bàn giao
              </h2>

              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                PKG Battery xây dựng năng lực vận hành dựa trên quy trình kiểm soát chất lượng chặt chẽ, từ khâu nghiên cứu, thiết kế, lắp ráp đến kiểm định trước khi bàn giao. Đội ngũ kỹ thuật và hệ thống sản xuất được tổ chức để đảm bảo tính ổn định, độ chính xác và độ an toàn của từng giải pháp pin khi đi vào ứng dụng thực tế.
              </p>

              <div className="grid grid-cols-2 gap-6">
                {[
                  'Quy trình kiểm tra nhiều lớp',
                  'Tiêu chuẩn kỹ thuật rõ ràng',
                  'Chứng nhận quốc tế',
                  'Định hướng cải tiến liên tục',
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#D61F26] flex-shrink-0" />
                    <span className="text-sm text-gray-300">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                'https://images.unsplash.com/photo-1695712551666-e0c354b1e6b9?w=400&q=80',
                'https://images.unsplash.com/photo-1742899273038-67ff67477663?w=400&q=80',
                'https://images.unsplash.com/photo-1700727448558-ba9c085d38f8?w=400&q=80',
                'https://images.unsplash.com/photo-1695712551608-b118cc5a39e4?w=400&q=80',
              ].map((img, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative h-48 rounded-xl overflow-hidden group"
                >
                  <img
                    src={img}
                    alt={`Quality ${i + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#D61F26]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Chất lượng được xác thực<br />
              bằng <span className="text-[#D61F26]">tiêu chuẩn rõ ràng</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-6">
              PKG Battery xây dựng sản phẩm và quy trình vận hành dựa trên các tiêu chuẩn chất lượng, an toàn và kiểm định phù hợp với yêu cầu của môi trường công nghiệp hiện đại.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {[
              { name: 'IEC 62619', icon: Shield },
              { name: 'UN38.3', icon: Award },
              { name: 'ISO Quality', icon: CheckCircle2 },
              { name: 'MIC Insurance', icon: Shield },
            ].map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gradient-to-br from-[#F8F8F8] to-white p-8 rounded-2xl border-2 border-gray-200 hover:border-[#D61F26]/30 transition-all duration-300 flex flex-col items-center justify-center text-center group hover:shadow-xl"
              >
                <cert.icon className="w-16 h-16 text-[#D61F26] mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold text-[#111111]">{cert.name}</h3>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-base text-gray-600 italic max-w-2xl mx-auto">
              Từ an toàn vận hành đến độ ổn định dài hạn, chất lượng luôn là một phần cốt lõi trong mọi giải pháp của PKG Battery.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-[#F8F8F8] to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Ứng dụng thực tế</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Giải pháp PKG Battery đã được triển khai thành công tại nhiều doanh nghiệp
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Kho logistics',
                subtitle: 'Pin xe nâng điện',
                description: 'Nâng cao hiệu suất vận hành, giảm thời gian chờ sạc và tối ưu chi phí dài hạn cho kho vận hiện đại.',
                image: 'https://images.unsplash.com/photo-1721937127582-ed331de95a04?w=800&q=80',
              },
              {
                title: 'Nhà máy tự động',
                subtitle: 'AGV / Robot',
                description: 'Đảm bảo hoạt động liên tục cho hệ thống tự động hóa, robot công nghiệp với độ tin cậy cao.',
                image: 'https://images.unsplash.com/photo-1740733448722-82e16d3468bb?w=800&q=80',
              },
              {
                title: 'Khu nghỉ dưỡng',
                subtitle: 'Xe điện du lịch',
                description: 'Nguồn năng lượng ổn định, thân thiện môi trường cho các phương tiện dịch vụ nội khu.',
                image: 'https://images.unsplash.com/photo-1645736315000-6f788915923b?w=800&q=80',
              },
              {
                title: 'Hệ thống ESS',
                subtitle: 'Lưu trữ năng lượng',
                description: 'Tích hợp điện mặt trời, quản lý điện năng thông minh và giảm chi phí vận hành cho doanh nghiệp.',
                image: 'https://images.unsplash.com/photo-1732030373864-d37573915751?w=800&q=80',
              },
            ].map((caseStudy, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative h-80 rounded-2xl overflow-hidden"
              >
                <img
                  src={caseStudy.image}
                  alt={caseStudy.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/60 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#D61F26]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="text-xs text-[#D61F26] font-semibold uppercase tracking-wider mb-2">{caseStudy.subtitle}</div>
                  <h3 className="text-2xl font-bold text-white mb-3">{caseStudy.title}</h3>
                  <p className="text-sm text-gray-300">{caseStudy.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Network Map */}
      <section id="network" className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Mạng lưới <span className="text-[#D61F26]">toàn quốc</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              PKG Battery đang xây dựng mạng lưới hiện diện trên toàn quốc nhằm mang giải pháp pin Lithium chất lượng cao đến gần hơn với doanh nghiệp tại nhiều khu vực.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-[#F8F8F8] to-white rounded-2xl p-12 border-2 border-gray-200 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, #D61F26 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
                </div>

                <div className="relative z-10 h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl lg:text-7xl font-bold text-[#D61F26] mb-4">08+</div>
                    <div className="text-2xl font-bold text-[#111111] mb-6">Điểm hiện diện</div>
                    <div className="w-20 h-1 bg-gradient-to-r from-[#D61F26] to-[#b81a21] mx-auto mb-6" />
                    <div className="space-y-2 text-gray-600">
                      <div className="flex items-center justify-center gap-2">
                        <MapPin className="w-4 h-4 text-[#D61F26]" />
                        <span className="text-sm">Chi nhánh & đại lý toàn quốc</span>
                      </div>
                      <div className="flex items-center justify-center gap-2">
                        <Wrench className="w-4 h-4 text-[#D61F26]" />
                        <span className="text-sm">Hỗ trợ kỹ thuật nhanh</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Animated dots */}
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-3 h-3 bg-[#D61F26] rounded-full"
                    style={{
                      left: `${20 + Math.random() * 60}%`,
                      top: `${20 + Math.random() * 60}%`,
                    }}
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                  />
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold mb-6">Đang mở rộng trên toàn quốc</h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Hệ thống chi nhánh và đối tác phân phối giúp tăng tốc độ hỗ trợ, nâng cao trải nghiệm khách hàng và tạo nền tảng tăng trưởng bền vững trong tương lai.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  'Phủ sóng các tỉnh thành trọng điểm',
                  'Đội ngũ kỹ thuật tại địa phương',
                  'Phản hồi nhanh chóng và hiệu quả',
                  'Kho vận và dịch vụ hậu mãi chuyên nghiệp',
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#D61F26] flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <a href="#contact" className="px-6 py-3 bg-[#D61F26] text-white rounded-full hover:bg-[#b81a21] transition-all hover:shadow-lg hover:shadow-red-500/30">
                  Tìm điểm gần bạn
                </a>
                <a href="#contact" className="px-6 py-3 bg-white border-2 border-[#D61F26] text-[#D61F26] rounded-full hover:bg-[#D61F26] hover:text-white transition-all">
                  Trở thành đối tác
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 lg:py-32 bg-gradient-to-br from-[#F8F8F8] to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Bắt đầu nâng cấp<br />
                <span className="text-[#D61F26]">hệ thống năng lượng</span><br />
                của bạn hôm nay
              </h2>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Liên hệ với đội ngũ PKG Battery để được tư vấn giải pháp phù hợp với mô hình vận hành, nhu cầu kỹ thuật và định hướng đầu tư của doanh nghiệp. Từ giải pháp tiêu chuẩn đến các nhu cầu tùy biến riêng, chúng tôi sẵn sàng đồng hành để tìm ra phương án phù hợp nhất.
              </p>

              <div className="space-y-4">
                {[
                  { icon: Phone, text: 'Hotline: 1900 xxxx', href: 'tel:1900xxxx' },
                  { icon: Mail, text: 'Email: contact@pkgbattery.vn', href: 'mailto:contact@pkgbattery.vn' },
                  { icon: MapPin, text: 'Địa chỉ: Tp. Hồ Chí Minh, Việt Nam', href: '#' },
                ].map((contact, i) => (
                  <motion.a
                    key={i}
                    href={contact.href}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-4 text-gray-700 hover:text-[#D61F26] transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-full bg-[#D61F26]/10 flex items-center justify-center group-hover:bg-[#D61F26] transition-colors">
                      <contact.icon className="w-5 h-5 text-[#D61F26] group-hover:text-white" />
                    </div>
                    <span>{contact.text}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 lg:p-10 rounded-2xl shadow-xl border border-gray-100"
            >
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Họ tên *</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D61F26] focus:border-transparent outline-none transition-all"
                    placeholder="Nguyễn Văn A"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Công ty *</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D61F26] focus:border-transparent outline-none transition-all"
                    placeholder="Tên công ty"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Số điện thoại *</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D61F26] focus:border-transparent outline-none transition-all"
                      placeholder="0912 345 678"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D61F26] focus:border-transparent outline-none transition-all"
                      placeholder="email@company.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nhu cầu</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D61F26] focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Mô tả ngắn gọn nhu cầu của bạn..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-[#D61F26] text-white rounded-full hover:bg-[#b81a21] transition-all hover:shadow-xl hover:shadow-red-500/30 font-medium"
                >
                  Nhận tư vấn giải pháp
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-[#111111] via-[#2B2B2B] to-[#111111] text-white py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Battery className="w-8 h-8 text-[#D61F26]" />
                <span className="font-bold text-xl">PKG BATTERY</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Tiên phong giải pháp năng lượng Lithium tại Việt Nam
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Sản phẩm</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-[#D61F26] transition-colors">Pin xe nâng điện</a></li>
                <li><a href="#" className="hover:text-[#D61F26] transition-colors">Pin AGV / Robot</a></li>
                <li><a href="#" className="hover:text-[#D61F26] transition-colors">Pin xe điện du lịch</a></li>
                <li><a href="#" className="hover:text-[#D61F26] transition-colors">Bộ sạc nhanh</a></li>
                <li><a href="#" className="hover:text-[#D61F26] transition-colors">ESS</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Công ty</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#about" className="hover:text-[#D61F26] transition-colors">Về chúng tôi</a></li>
                <li><a href="#quality" className="hover:text-[#D61F26] transition-colors">Chất lượng</a></li>
                <li><a href="#network" className="hover:text-[#D61F26] transition-colors">Mạng lưới</a></li>
                <li><a href="#contact" className="hover:text-[#D61F26] transition-colors">Liên hệ</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Liên hệ</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Hotline: 1900 xxxx</li>
                <li>Email: contact@pkgbattery.vn</li>
                <li>Tp. Hồ Chí Minh, Việt Nam</li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
            <p>&copy; 2026 PKG Battery. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}