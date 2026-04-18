import { Cpu, Zap, Thermometer, Shield, Box, TrendingUp } from 'lucide-react';

export function Technology() {
  const technologies = [
    {
      icon: Cpu,
      title: 'Smart BMS',
      subtitle: 'Battery Management System',
      description: 'Hệ thống quản lý pin thông minh giám sát và cân bằng từng cell, bảo vệ quá sạc, quá phóng, quá dòng và ngắn mạch.',
      features: [
        'Real-time monitoring',
        'Cell balancing tự động',
        'Multi-layer protection',
        'Communication protocol: CAN/RS485'
      ]
    },
    {
      icon: Zap,
      title: 'Fast Charging',
      subtitle: 'Công nghệ sạc nhanh',
      description: 'Sạc đầy trong 2-3 giờ, hỗ trợ sạc cơ hội (opportunity charging) trong thời gian nghỉ giải lao hoặc giữa ca.',
      features: [
        'Charging time: 2-3h (80%)',
        'Opportunity charging ready',
        'Không memory effect',
        'Tương thích sạc thông dụng'
      ]
    },
    {
      icon: Thermometer,
      title: 'Thermal Safety',
      subtitle: 'An toàn nhiệt độ',
      description: 'Hoạt động ổn định trong khoảng nhiệt độ rộng từ -20°C đến 60°C, phù hợp với môi trường công nghiệp khắc nghiệt.',
      features: [
        'Operating: -20°C ~ 60°C',
        'Thermal management system',
        'Fire retardant casing',
        'IP65 protection grade'
      ]
    },
    {
      icon: Box,
      title: 'Modular Design',
      subtitle: 'Thiết kế module',
      description: 'Cấu trúc module linh hoạt, dễ dàng mở rộng dung lượng, thay thế và bảo trì. Tương thích nhiều loại xe nâng.',
      features: [
        'Plug & play installation',
        'Easy scalability',
        'Quick replacement',
        'Universal compatibility'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Long Cycle Life',
      subtitle: 'Tuổi thọ cao',
      description: 'Hơn 5000 chu kỳ sạc-xả ở 80% DOD, gấp 3-4 lần ắc quy chì acid. Giảm chi phí sở hữu trong suốt vòng đời.',
      features: [
        '5000+ cycles @ 80% DOD',
        '10+ years lifespan',
        'Minimal capacity degradation',
        'Low total cost of ownership'
      ]
    },
    {
      icon: Shield,
      title: 'Safety First',
      subtitle: 'An toàn tuyệt đối',
      description: 'Sử dụng công nghệ LiFePO4 (Lithium Iron Phosphate) an toàn nhất, không chứa cobalt, ổn định hóa học cao.',
      features: [
        'LiFePO4 chemistry',
        'No thermal runaway',
        'Non-toxic materials',
        'CE, UL, UN38.3 certified'
      ]
    }
  ];

  return (
    <section id="technology" className="py-24 lg:py-32 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-16 max-w-3xl">
          <div className="inline-block mb-4">
            <div className="h-1 w-12 bg-red-600 mb-4" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-zinc-900 mb-6">
            Công nghệ tiên tiến
          </h2>
          <p className="text-xl text-zinc-600 leading-relaxed">
            PKG Battery áp dụng các công nghệ hàng đầu trong ngành pin Lithium công nghiệp, 
            đảm bảo hiệu suất, độ bền và an toàn tuyệt đối.
          </p>
        </div>

        {/* Technology Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="group bg-white border border-zinc-200 rounded-lg p-8 hover:border-red-600 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icon & Title */}
              <div className="mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-red-600 to-red-700 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <tech.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-zinc-900 mb-1">
                  {tech.title}
                </h3>
                <p className="text-sm text-red-600 font-semibold uppercase tracking-wide">
                  {tech.subtitle}
                </p>
              </div>

              {/* Description */}
              <p className="text-zinc-600 leading-relaxed mb-6">
                {tech.description}
              </p>

              {/* Features List */}
              <ul className="space-y-3">
                {tech.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-zinc-700">
                    <div className="w-1.5 h-1.5 bg-red-600 rounded-full mt-2 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Bottom accent */}
              <div className="mt-6 pt-6 border-t border-zinc-100">
                <div className="h-1 w-0 bg-red-600 group-hover:w-full transition-all duration-500 rounded" />
              </div>
            </div>
          ))}
        </div>

        {/* Tech Specs Comparison */}
        <div className="mt-20 bg-white border border-zinc-200 rounded-lg overflow-hidden">
          <div className="p-8 bg-zinc-900 text-white">
            <h3 className="text-2xl font-bold mb-2">So sánh công nghệ</h3>
            <p className="text-zinc-300">Pin Lithium vs Ắc quy chì acid truyền thống</p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-zinc-200">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-zinc-900">Thông số</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-red-600">Pin Lithium PKG</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-zinc-500">Ắc quy chì acid</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { spec: 'Tuổi thọ (cycles)', lithium: '5000 - 7000', lead: '1000 - 1500', highlight: true },
                  { spec: 'Thời gian sạc đầy', lithium: '2 - 3 giờ', lead: '8 - 12 giờ', highlight: true },
                  { spec: 'Hiệu suất năng lượng', lithium: '95 - 99%', lead: '70 - 80%', highlight: true },
                  { spec: 'Khối lượng', lithium: 'Nhẹ hơn 60%', lead: 'Nặng', highlight: false },
                  { spec: 'Bảo trì', lithium: 'Không cần', lead: 'Định kỳ', highlight: true },
                  { spec: 'Tác động môi trường', lithium: 'Thấp', lead: 'Cao (chứa chì)', highlight: false },
                  { spec: 'Chi phí vận hành (10 năm)', lithium: 'Thấp hơn 40%', lead: 'Cao', highlight: true },
                ].map((row, i) => (
                  <tr 
                    key={i} 
                    className={`border-b border-zinc-100 ${row.highlight ? 'bg-red-50/30' : ''}`}
                  >
                    <td className="px-6 py-4 text-sm font-medium text-zinc-900">{row.spec}</td>
                    <td className="px-6 py-4 text-sm font-bold text-red-600">{row.lithium}</td>
                    <td className="px-6 py-4 text-sm text-zinc-500">{row.lead}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
