import { Battery, Zap, Shield, Thermometer, BarChart3 } from 'lucide-react';

export function ValueProposition() {
  const values = [
    {
      icon: Battery,
      title: 'Tuổi thọ vượt trội',
      description: 'Hơn 5000 chu kỳ sạc, gấp 3-4 lần ắc quy chì truyền thống',
      highlight: '5000+ cycles'
    },
    {
      icon: Zap,
      title: 'Sạc nhanh thông minh',
      description: 'Thời gian sạc đầy chỉ 2-3 giờ, hỗ trợ sạc cơ hội trong ca làm việc',
      highlight: '2-3h charging'
    },
    {
      icon: Shield,
      title: 'BMS tiên tiến',
      description: 'Hệ thống quản lý pin thông minh, bảo vệ quá sạc, quá phóng, ngắn mạch',
      highlight: 'Smart BMS'
    },
    {
      icon: Thermometer,
      title: 'An toàn nhiệt độ',
      description: 'Hoạt động ổn định -20°C đến 60°C, phù hợp môi trường công nghiệp khắc nghiệt',
      highlight: 'Thermal safe'
    },
    {
      icon: BarChart3,
      title: 'Hiệu suất cao hơn 30%',
      description: 'Tăng năng suất vận hành, giảm thời gian chết, tối ưu chi phí vận hành',
      highlight: '+30% efficiency'
    }
  ];

  return (
    <section id="overview" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-block mb-4">
            <div className="h-1 w-12 bg-red-600 mb-4" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-zinc-900 mb-6">
            Tại sao chọn pin Lithium cho xe nâng điện?
          </h2>
          <p className="text-xl text-zinc-600 leading-relaxed">
            Công nghệ pin Lithium-ion mang đến hiệu suất vượt trội, tuổi thọ cao và chi phí vận hành thấp hơn, 
            giúp doanh nghiệp tối ưu hóa hoạt động logistics và warehouse.
          </p>
        </div>

        {/* Value Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div 
              key={index}
              className="group relative p-8 bg-zinc-50 hover:bg-white border border-zinc-200 hover:border-red-600/20 rounded-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="mb-6 relative">
                <div className="w-14 h-14 bg-white border border-zinc-200 group-hover:border-red-600 rounded-lg flex items-center justify-center transition-all duration-300">
                  <value.icon className="w-7 h-7 text-zinc-900 group-hover:text-red-600 transition-colors" />
                </div>
                {/* Highlight Badge */}
                <div className="absolute -top-2 -right-2 px-3 py-1 bg-red-600 text-white text-xs rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {value.highlight}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-zinc-900 mb-3">
                {value.title}
              </h3>
              <p className="text-zinc-600 leading-relaxed">
                {value.description}
              </p>

              {/* Accent Line */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-red-600 group-hover:w-full transition-all duration-300 rounded-b-lg" />
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="grid sm:grid-cols-3 gap-8 mt-16 pt-16 border-t border-zinc-200">
          <div className="text-center">
            <div className="text-4xl lg:text-5xl font-bold text-zinc-900 mb-2">99.5%</div>
            <div className="text-zinc-600">Hiệu suất năng lượng</div>
          </div>
          <div className="text-center">
            <div className="text-4xl lg:text-5xl font-bold text-zinc-900 mb-2">0</div>
            <div className="text-zinc-600">Bảo trì định kỳ</div>
          </div>
          <div className="text-center">
            <div className="text-4xl lg:text-5xl font-bold text-zinc-900 mb-2">100%</div>
            <div className="text-zinc-600">Thân thiện môi trường</div>
          </div>
        </div>
      </div>
    </section>
  );
}
