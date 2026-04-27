import { useState, useEffect } from "react";
import { ChevronDown, Phone, Mail, ArrowRight, CheckCircle2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Index() {
  const [activeProcess, setActiveProcess] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const trustPoints = [
    "Nhà máy riêng",
    "Hỗ trợ R&D",
    "Thiết kế theo yêu cầu",
    "Kiểm soát chất lượng",
  ];

  const strengths = [
    {
      title: "Có nhà máy riêng tại Việt Nam",
      description:
        "Đầu tư cơ sở hạ tầng và công nghệ hiện đại, sản xuất in-house với quy mô và năng lực đáp ứng các dự án lớn.",
    },
    {
      title: "Mạnh về sản xuất pin toàn bộ",
      description:
        "Không chỉ cung cấp linh kiện rời. PKGBattery tự thiết kế, tự sản xuất và tích hợp pin lithium hoàn chỉnh.",
    },
    {
      title: "Thiết kế theo yêu cầu riêng",
      description:
        "Từ kích thước, điện áp, dung lượng đến cơ chế giao tiếp, tất cả có thể tùy chỉnh phù hợp ứng dụng của bạn.",
    },
    {
      title: "Phù hợp nhiều ứng dụng công nghiệp",
      description:
        "AGV, robot, UPS, thiết bị lưu kho, xe điện chuyên dụng, và các hệ thống công nghiệp khác.",
    },
    {
      title: "Kiểm soát toàn bộ quy trình",
      description:
        "Từ đầu vào linh kiện, thiết kế, lắp ráp, kiểm tra đến bàn giao, mọi khâu đều được quản lý chặt chẽ.",
    },
    {
      title: "Đội ngũ kỹ thuật đồng hành",
      description:
        "Từ tư vấn ban đầu, thiết kế, thử mẫu đến hỗ trợ sau sản xuất, bạn luôn có chuyên gia ở cạnh.",
    },
  ];

  const capabilities = [
    {
      title: "Tư vấn cấu hình pin",
      description: "Xác định công suất, dung lượng, dòng xả phù hợp ứng dụng",
    },
    {
      title: "Thiết kế pack pin",
      description: "Tùy chỉnh kích thước, điện áp, dung lượng theo yêu cầu",
    },
    {
      title: "Tùy chỉnh toàn diện",
      description: "Vỏ, kết cấu, giao tiếp, thương hiệu, bao bì",
    },
    {
      title: "Hỗ trợ BMS & an toàn",
      description: "Kiểm tra an toàn, thử nghiệm thực tế trước sản xuất",
    },
    {
      title: "Sản xuất mẫu & hàng loạt",
      description: "Từ prototype nhỏ đến sản xuất hàng triệu unit",
    },
    {
      title: "Private label & ODM",
      description: "Sản phẩm riêng hoặc sản xuất hoàn toàn theo yêu cầu",
    },
  ];

  const processSteps = [
    {
      title: "Tiếp nhận nhu cầu",
      description: "Bạn chia sẻ yêu cầu ứng dụng, thông số mong muốn",
    },
    {
      title: "Tư vấn kỹ thuật",
      description: "Đội ngũ PKGBattery phân tích và đề xuất giải pháp tối ưu",
    },
    {
      title: "Thiết kế & mẫu",
      description: "Thiết kế chi tiết và sản xuất bản mẫu để kiểm định",
    },
    {
      title: "Kiểm tra & xác nhận",
      description: "Thử nghiệm, hiệu chỉnh và nhận duyệt từ bạn",
    },
    {
      title: "Sản xuất",
      description: "Sản xuất hàng loạt theo tiêu chuẩn được phê duyệt",
    },
    {
      title: "Bàn giao & hỗ trợ",
      description: "Vận chuyển, lắp đặt và hỗ trợ sau sản xuất dài hạn",
    },
  ];

  const applications = [
    { name: "AGV & Robot", icon: "🤖" },
    { name: "Thiết bị Lưu kho", icon: "📦" },
    { name: "UPS & Backup", icon: "⚡" },
    { name: "Xe điện", icon: "🚗" },
    { name: "Công nghiệp tùy chỉnh", icon: "🏭" },
    { name: "Dự án đặc thù", icon: "🔧" },
  ];

  const certifications = [
    "ISO 9001",
    "CE",
    "UN38.3",
    "RoHS",
    "MSDS",
  ];

  return (
    <div className="min-h-screen bg-white text-brand-black overflow-x-hidden">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 pb-12 md:pt-32 md:pb-20 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-gray-50"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-red/5 rounded-full blur-3xl tech-glow"></div>
        <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-gray-900/5 rounded-full blur-3xl"></div>

        {/* Decorative lines */}
        <div className="absolute top-1/3 right-20 h-64 w-1 bg-gradient-to-b from-brand-red via-brand-red to-transparent opacity-30"></div>

        {/* Tech grid background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <svg className="absolute w-full h-full opacity-10" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#DC2626" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#DC2626" stopOpacity="0" />
              </linearGradient>
            </defs>
            <circle cx="600" cy="400" r="300" fill="none" stroke="url(#lineGradient)" strokeWidth="2" />
            <circle cx="600" cy="400" r="400" fill="none" stroke="url(#lineGradient)" strokeWidth="1" opacity="0.5" />
            <path d="M 200 400 L 1000 400" stroke="url(#lineGradient)" strokeWidth="1" opacity="0.3" />
            <path d="M 600 100 L 600 700" stroke="url(#lineGradient)" strokeWidth="1" opacity="0.3" />
          </svg>
        </div>

        <div className="relative z-10 section-container">
          <div className="max-w-3xl mx-auto text-center">
            {/* Main headline */}
            <h1 className="mb-6 md:mb-8">
              Sản xuất pin lithium công nghiệp theo yêu cầu cho doanh nghiệp
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-gray-700 mb-10 md:mb-12 leading-relaxed">
              PKGBattery đồng hành từ tư vấn kỹ thuật, thiết kế giải pháp, thử
              mẫu đến sản xuất hoàn thiện tại nhà máy riêng tại Việt Nam
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center mb-12 md:mb-16">
              <button className="btn-primary">
                <Phone className="w-5 h-5 mr-2" />
                Gọi tư vấn dự án
              </button>
              <button className="btn-secondary">
                Gửi yêu cầu thiết kế
              </button>
            </div>

            {/* Trust line */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-sm md:text-base flex-wrap">
              {trustPoints.map((point, i) => (
                <div key={i} className="flex items-center gap-2">
                  {i > 0 && <span className="hidden sm:block w-1 h-1 bg-brand-red rounded-full"></span>}
                  <span className="text-gray-700">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-opacity duration-300 ${isScrolled ? "opacity-0" : "opacity-100"}`}>
          <ChevronDown className="w-6 h-6 text-brand-red animate-bounce" />
        </div>
      </section>

      {/* Why PKGBattery Section */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="absolute top-0 left-0 w-1/2 h-1 bg-gradient-to-r from-brand-red to-transparent"></div>
        <div className="section-container">
          <div className="mb-16 md:mb-20">
            <h2 className="text-brand-black mb-4">Tại sao doanh nghiệp chọn PKGBattery</h2>
            <div className="h-1 w-16 bg-brand-red"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
            {strengths.slice(0, 3).map((strength, i) => (
              <div key={i} className="flex gap-4 md:gap-6 group hover:translate-y-[-4px] transition-all duration-300">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-brand-red text-white rounded-lg flex items-center justify-center font-bold text-lg md:text-xl group-hover:shadow-lg group-hover:shadow-red-500/50 transition-all duration-300">
                    {i + 1}
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="mb-2 text-brand-black group-hover:text-brand-red transition-colors">{strength.title}</h4>
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed">{strength.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 md:mt-16 h-px bg-gradient-to-r from-gray-200 via-brand-red/30 to-gray-200"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 mt-12 md:mt-16">
            {strengths.slice(3).map((strength, i) => (
              <div key={i + 3} className="flex gap-4 md:gap-6 group hover:translate-y-[-4px] transition-all duration-300">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-brand-red text-white rounded-lg flex items-center justify-center font-bold text-lg md:text-xl group-hover:shadow-lg group-hover:shadow-red-500/50 transition-all duration-300">
                    {i + 4}
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="mb-2 text-brand-black group-hover:text-brand-red transition-colors">{strength.title}</h4>
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed">{strength.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OEM/ODM Capabilities Section */}
      <section className="py-16 md:py-24 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg viewBox="0 0 1200 400" className="w-full h-full">
            <defs>
              <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
                <path d="M 80 0 L 0 0 0 80" fill="none" stroke="currentColor" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="1200" height="400" fill="url(#grid)" />
          </svg>
        </div>

        <div className="section-container relative z-10">
          <div className="mb-16 md:mb-20">
            <h2 className="text-brand-black mb-4">Năng lực OEM/ODM</h2>
            <div className="h-1 w-16 bg-brand-red"></div>
          </div>

          <p className="text-gray-700 text-lg md:text-xl mb-12 md:mb-16 max-w-3xl">
            PKGBattery có khả năng triển khai từng bước của quy trình OEM/ODM,
            từ tư vấn ban đầu cho đến sản xuất hàng loạt.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {capabilities.map((cap, i) => (
              <div
                key={i}
                className="relative bg-white border border-gray-200 rounded-lg p-6 md:p-8 hover:border-brand-red hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-brand-red/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-brand-red/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-brand-red group-hover:text-white transition-all duration-300">
                    <div className="text-xl group-hover:scale-110 transition-transform duration-300">
                      ⚙️
                    </div>
                  </div>
                  <h4 className="mb-2 text-brand-black group-hover:text-brand-red transition-colors duration-300">{cap.title}</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">{cap.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="section-container">
          <div className="mb-16 md:mb-20">
            <h2 className="text-brand-black mb-4">Quy trình hợp tác</h2>
            <div className="h-1 w-16 bg-brand-red"></div>
          </div>

          <p className="text-gray-700 text-lg md:text-xl mb-12 md:mb-16 max-w-3xl">
            Từ khi bạn liên hệ đến lúc nhận hàng, chúng tôi theo sát từng bước để
            đảm bảo giải pháp pin đúng yêu cầu và chất lượng cao.
          </p>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-brand-red via-brand-red to-gray-300"></div>

            <div className="space-y-8 md:space-y-0">
              {processSteps.map((step, i) => (
                <div key={i} className="relative">
                  <div
                    className={`md:flex gap-8 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                  >
                    {/* Timeline dot */}
                    <div className="hidden md:flex md:flex-1 md:justify-end md:pr-8 md:items-start md:pt-6">
                      <button
                        onClick={() => setActiveProcess(i)}
                        className={`w-4 h-4 rounded-full border-4 border-white shadow-lg z-10 transition-all duration-300 ${
                          activeProcess === i
                            ? "bg-brand-red scale-150 shadow-red-500/50"
                            : "bg-brand-red hover:scale-125"
                        }`}
                      ></button>
                    </div>

                    {/* Content */}
                    <div className="md:flex-1 md:pl-8 cursor-pointer" onClick={() => setActiveProcess(i)}>
                      <div
                        className={`bg-white border rounded-lg p-6 md:p-8 transition-all duration-300 ${
                          activeProcess === i
                            ? "border-brand-red bg-red-50/30 shadow-xl"
                            : "border-gray-200 hover:border-brand-red hover:shadow-md"
                        }`}
                      >
                        <div className="flex items-start gap-4">
                          <div className={`md:hidden w-10 h-10 rounded-lg flex items-center justify-center font-bold flex-shrink-0 transition-all duration-300 ${
                            activeProcess === i
                              ? "bg-brand-red text-white"
                              : "bg-gray-200 text-gray-700"
                          }`}>
                            {i + 1}
                          </div>
                          <div className="flex-1">
                            <h4 className={`mb-2 transition-colors duration-300 ${
                              activeProcess === i ? "text-brand-red" : "text-brand-black"
                            }`}>{step.title}</h4>
                            <p className="text-gray-700 text-sm md:text-base leading-relaxed">{step.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-16 md:py-24 bg-gray-50 relative overflow-hidden">
        <div className="section-container">
          <div className="mb-16 md:mb-20">
            <h2 className="text-brand-black mb-4">Ứng dụng công nghiệp</h2>
            <div className="h-1 w-16 bg-brand-red"></div>
          </div>

          <p className="text-gray-700 text-lg md:text-xl mb-12 md:mb-16 max-w-3xl">
            Pin lithium từ PKGBattery được ứng dụng rộng rãi trong các lĩnh vực công
            nghiệp hiện đại.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl">
            {applications.map((app, i) => (
              <div
                key={i}
                className="relative bg-white border border-gray-200 rounded-lg p-6 md:p-8 text-center hover:border-brand-red hover:shadow-lg transition-all duration-300 group cursor-pointer hover:-translate-y-1 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-brand-red/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="text-4xl md:text-5xl mb-4 group-hover:scale-125 transition-transform duration-300 inline-block">
                    {app.icon}
                  </div>
                  <p className="font-semibold text-brand-black group-hover:text-brand-red transition-colors text-sm md:text-base">
                    {app.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Factory & People Section */}
      <section className="py-16 md:py-24 bg-brand-black text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <svg className="absolute w-full h-full" viewBox="0 0 1200 600">
            <defs>
              <linearGradient id="techGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#DC2626" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
            </defs>
            <circle cx="600" cy="300" r="250" fill="none" stroke="url(#techGradient)" strokeWidth="1" />
            <path
              d="M 300 300 L 900 300 M 600 100 L 600 500"
              stroke="url(#techGradient)"
              strokeWidth="1"
            />
          </svg>
        </div>

        <div className="section-container relative z-10">
          <div className="mb-16 md:mb-20">
            <h2 className="text-white mb-4">Nhà máy & con người</h2>
            <div className="h-1 w-16 bg-brand-red"></div>
          </div>

          <p className="text-gray-300 text-lg md:text-xl mb-12 md:mb-16 max-w-3xl">
            PKGBattery sở hữu cơ sở hạ tầng hiện đại, đội ngũ kỹ sư chuyên nghiệp
            và quy trình sản xuất chặt chẽ để đảm bảo chất lượng từng sản phẩm.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              "Nhà máy riêng 5000m²",
              "Phòng R&D trang bị hiện đại",
              "Quy trình kiểm tra 10+ bước",
              "Đội ngũ kỹ sư 50+ người",
            ].map((item, i) => (
              <div
                key={i}
                className="relative bg-white/10 border border-white/20 rounded-lg p-6 md:p-8 text-center hover:border-brand-red hover:bg-brand-red/10 transition-all duration-300 group overflow-hidden hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-brand-red/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="text-2xl md:text-3xl font-bold text-brand-red mb-3 group-hover:scale-125 transition-transform duration-300">
                    ✓
                  </div>
                  <p className="text-white text-sm md:text-base font-semibold">{item}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Placeholder for gallery */}
          <div className="mt-12 md:mt-16 bg-white/5 border border-white/20 rounded-lg p-8 md:p-16 text-center">
            <p className="text-gray-400 mb-4">
              [Placeholder: Collage ảnh nhà máy, kỹ sư, quy trình sản xuất]
            </p>
            <p className="text-white text-sm">
              Ảnh chứa: khu vực sản xuất, phòng R&D, dây chuyền lắp ráp, kiểm tra
              chất lượng, đội ngũ nhân sự
            </p>
          </div>
        </div>
      </section>

      {/* Quality Control Section */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="section-container">
          <div className="mb-16 md:mb-20">
            <h2 className="text-brand-black mb-4">Kiểm soát chất lượng</h2>
            <div className="h-1 w-16 bg-brand-red"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-16">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-brand-black">
                Quy trình kiểm tra đa bước
              </h3>
              <ul className="space-y-4">
                {[
                  "Kiểm soát nguồn linh kiện đầu vào",
                  "Kiểm tra cấu hình kỹ thuật",
                  "Kiểm tra an toàn (Safety & Compliance)",
                  "Kiểm tra hiệu năng (Performance)",
                  "Kiểm tra độ tin cậy (Reliability)",
                  "Kiểm tra trước bàn giao (Final QA)",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <CheckCircle2 className="w-6 h-6 text-brand-red flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 md:p-10">
              <h4 className="text-xl font-semibold mb-6 text-brand-black">
                Chứng chỉ & Tiêu chuẩn
              </h4>
              <div className="space-y-4">
                {[
                  { label: "Chứng chỉ", value: "ISO 9001, CE, UN38.3, RoHS, MSDS" },
                  { label: "Dự án đã thực hiện", value: "100+ dự án" },
                  { label: "Lĩnh vực ứng dụng", value: "20+ ngành công nghiệp" },
                  { label: "Đối tác", value: "Trong & ngoài nước" },
                ].map((item, i) => (
                  <div key={i} className="border-b border-gray-200 pb-3 last:border-0">
                    <p className="text-sm text-gray-600 mb-1">{item.label}</p>
                    <p className="text-brand-black font-semibold">{item.value}</p>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-500 mt-6">
                *Các số liệu là placeholder, vui lòng cập nhật với dữ liệu thực tế
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-12 md:py-16 bg-gray-50 border-t border-gray-200">
        <div className="section-container">
          <p className="text-center text-gray-700 mb-8 md:mb-12">
            PKGBattery đang đồng hành cùng nhiều đối tác trong các dự án pin công
            nghiệp, phân phối và sản xuất theo yêu cầu
          </p>

          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
            {certifications.map((cert, i) => (
              <div
                key={i}
                className="relative bg-white border border-gray-200 rounded px-6 py-4 md:px-8 md:py-6 hover:border-brand-red hover:shadow-md transition-all text-gray-700 hover:text-brand-red font-semibold text-sm md:text-base group hover:-translate-y-1 overflow-hidden"
              >
                <div className="absolute inset-0 bg-brand-red/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 md:py-24 bg-brand-black text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-red/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-brand-red/5 rounded-full blur-3xl"></div>
        </div>

        <div className="section-container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-white mb-6">
              Bạn đang cần phát triển một sản phẩm pin riêng?
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-10 md:mb-12">
              Hãy chia sẻ nhu cầu ứng dụng, thông số mong muốn hoặc bài toán vận
              hành. Đội ngũ PKGBattery sẽ tư vấn hướng cấu hình phù hợp trước khi
              báo giá.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center mb-12 md:mb-16">
              <button className="btn-primary">
                <Phone className="w-5 h-5 mr-2" />
                Gọi tư vấn ngay
              </button>
              <button className="inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-4 bg-white text-brand-black font-semibold rounded transition-all duration-300 hover:shadow-lg">
                Gửi yêu cầu dự án
              </button>
            </div>

            <p className="text-sm text-gray-400">
              Thông tin của bạn chỉ dùng để tư vấn dự án. Chúng tôi không spam
              hoặc chia sẻ thông tin.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
