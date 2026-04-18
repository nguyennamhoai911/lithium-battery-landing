import { Warehouse, Factory, Building2, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Applications() {
  const applications = [
    {
      icon: Warehouse,
      title: 'Kho vận & Logistics',
      description: 'Tối ưu vận hành xe nâng trong kho hàng, trung tâm phân phối, hoạt động 24/7 với khả năng sạc cơ hội.',
      image: 'https://images.unsplash.com/photo-1770827730773-cc7848b2ee61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb3JrbGlmdCUyMHdhcmVob3VzZSUyMGRpc3RyaWJ1dGlvbiUyMGNlbnRlcnxlbnwxfHx8fDE3NzY0MDYyMTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      stats: [
        { label: 'Thời gian hoạt động', value: '+40%' },
        { label: 'Giảm chi phí', value: '30-50%' }
      ]
    },
    {
      icon: Factory,
      title: 'Sản xuất & Nhà máy',
      description: 'Nguồn năng lượng bền bỉ cho xe nâng trong môi trường sản xuất, chịu nhiệt tốt, không cần bảo trì thường xuyên.',
      image: 'https://images.unsplash.com/photo-1764114908655-9a26d32750a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwbWFudWZhY3R1cmluZyUyMGZhY3RvcnklMjBmbG9vcnxlbnwxfHx8fDE3NzY0MDYyMTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      stats: [
        { label: 'Năng suất', value: '+35%' },
        { label: 'Zero maintenance', value: '100%' }
      ]
    },
    {
      icon: Building2,
      title: 'Resort & Khu du lịch',
      description: 'Giải pháp sạch, êm ái và thân thiện môi trường cho xe điện phục vụ khách tại resort, sân golf, khu nghỉ dưỡng.',
      image: 'https://images.unsplash.com/photo-1762742316793-b1845065429a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNvcnQlMjBob3RlbCUyMGdvbGYlMjBjYXJ0fGVufDF8fHx8MTc3NjQwNjIxNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      stats: [
        { label: 'Không tiếng ồn', value: '0dB' },
        { label: 'Eco-friendly', value: '100%' }
      ]
    }
  ];

  return (
    <section id="applications" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <div className="inline-block mb-4">
            <div className="h-1 w-12 bg-red-600 mx-auto mb-4" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-zinc-900 mb-6">
            Ứng dụng đa dạng
          </h2>
          <p className="text-xl text-zinc-600">
            Pin Lithium PKG Battery được thiết kế để đáp ứng mọi yêu cầu khắt khe 
            trong các ngành công nghiệp và dịch vụ khác nhau.
          </p>
        </div>

        {/* Applications Grid */}
        <div className="space-y-12">
          {applications.map((app, index) => (
            <div 
              key={index}
              className={`group grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-dense' : ''
              }`}
            >
              {/* Image */}
              <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
                  <ImageWithFallback
                    src={app.image}
                    alt={app.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/50 to-transparent" />
                  
                  {/* Stats Overlay */}
                  <div className="absolute bottom-6 left-6 right-6 flex gap-4">
                    {app.stats.map((stat, i) => (
                      <div key={i} className="flex-1 bg-white/95 backdrop-blur-sm rounded-lg p-4">
                        <div className="text-2xl font-bold text-red-600 mb-1">{stat.value}</div>
                        <div className="text-xs text-zinc-600">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                {/* Icon */}
                <div className="w-16 h-16 bg-red-600/10 rounded-lg flex items-center justify-center">
                  <app.icon className="w-8 h-8 text-red-600" />
                </div>

                <div>
                  <h3 className="text-3xl lg:text-4xl font-bold text-zinc-900 mb-4">
                    {app.title}
                  </h3>
                  <p className="text-lg text-zinc-600 leading-relaxed">
                    {app.description}
                  </p>
                </div>

                {/* Feature List */}
                <div className="space-y-3">
                  {[
                    'Sạc nhanh trong thời gian nghỉ giải lao',
                    'Hoạt động ổn định nhiều ca liên tục',
                    'Giảm chi phí vận hành và bảo trì',
                    'Không cần phòng sạc riêng biệt'
                  ].map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-red-600/10 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                        <ArrowRight className="w-3 h-3 text-red-600" />
                      </div>
                      <span className="text-zinc-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className="flex items-center gap-2 text-red-600 hover:gap-4 font-semibold transition-all duration-300 group/btn">
                  Tìm hiểu thêm
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Info */}
        <div className="mt-20 p-8 lg:p-12 bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-xl text-white">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">
                Ứng dụng đặc biệt khác?
              </h3>
              <p className="text-zinc-300 text-lg leading-relaxed">
                PKG Battery có kinh nghiệm triển khai giải pháp pin cho xe AGV, robot công nghiệp, 
                xe điện chuyên dụng và nhiều ứng dụng khác. Hãy cho chúng tôi biết nhu cầu của bạn.
              </p>
            </div>
            <div className="lg:text-right">
              <button className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded transition-colors inline-flex items-center gap-3">
                Tư vấn giải pháp
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
