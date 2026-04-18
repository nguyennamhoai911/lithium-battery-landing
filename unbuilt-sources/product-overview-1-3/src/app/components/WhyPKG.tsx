import { CheckCircle2, Users, Wrench, Award, Truck, MessageSquare } from 'lucide-react';

export function WhyPKG() {
  const reasons = [
    {
      icon: CheckCircle2,
      title: 'Tùy chỉnh linh hoạt',
      description: 'Hỗ trợ OEM/ODM, thiết kế pin theo đúng yêu cầu kỹ thuật và kích thước của từng ứng dụng cụ thể.'
    },
    {
      icon: Users,
      title: 'Đội ngũ kỹ thuật chuyên nghiệp',
      description: 'Kỹ sư có kinh nghiệm sẵn sàng tư vấn, hỗ trợ lựa chọn cấu hình và triển khai giải pháp tối ưu.'
    },
    {
      icon: Wrench,
      title: 'Hỗ trợ integration',
      description: 'Tích hợp dễ dàng với xe nâng và thiết bị hiện có, cung cấp tài liệu kỹ thuật chi tiết và hướng dẫn lắp đặt.'
    },
    {
      icon: Award,
      title: 'Chất lượng ổn định',
      description: 'Quy trình kiểm soát chất lượng nghiêm ngặt, 100% sản phẩm được test trước khi giao hàng.'
    },
    {
      icon: Truck,
      title: 'Giao hàng đúng hạn',
      description: 'Cam kết thời gian sản xuất và giao hàng rõ ràng, đáp ứng kế hoạch triển khai của khách hàng.'
    },
    {
      icon: MessageSquare,
      title: 'Hỗ trợ sau bán',
      description: 'Dịch vụ bảo hành, bảo trì và hỗ trợ kỹ thuật nhanh chóng, đảm bảo thiết bị hoạt động liên tục.'
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <div className="inline-block mb-4">
            <div className="h-1 w-12 bg-red-600 mx-auto mb-4" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-zinc-900 mb-6">
            Tại sao chọn PKG Battery?
          </h2>
          <p className="text-xl text-zinc-600">
            Chúng tôi không chỉ cung cấp sản phẩm, mà còn là đối tác đáng tin cậy 
            trong hành trình chuyển đổi năng lượng của doanh nghiệp bạn.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group p-8 bg-zinc-50 hover:bg-white border border-transparent hover:border-red-600 rounded-lg transition-all duration-300 hover:shadow-lg"
            >
              <div className="w-12 h-12 bg-red-600 text-white rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <reason.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-3">
                {reason.title}
              </h3>
              <p className="text-zinc-600 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {[
            { value: '500+', label: 'Dự án triển khai', sublabel: 'Trên toàn quốc' },
            { value: '15+', label: 'Năm kinh nghiệm', sublabel: 'Trong ngành pin công nghiệp' },
            { value: '2000+', label: 'Khách hàng doanh nghiệp', sublabel: 'Tin tưởng sử dụng' },
            { value: '24/7', label: 'Hỗ trợ kỹ thuật', sublabel: 'Luôn sẵn sàng' }
          ].map((stat, i) => (
            <div key={i} className="text-center p-6 bg-zinc-50 rounded-lg">
              <div className="text-4xl lg:text-5xl font-bold text-red-600 mb-2">{stat.value}</div>
              <div className="text-lg font-semibold text-zinc-900 mb-1">{stat.label}</div>
              <div className="text-sm text-zinc-600">{stat.sublabel}</div>
            </div>
          ))}
        </div>

        {/* Certifications & Quality */}
        <div className="bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 rounded-xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h3 className="text-3xl font-bold mb-4">
                Chứng nhận & Tiêu chuẩn
              </h3>
              <p className="text-zinc-300 text-lg leading-relaxed mb-6">
                Sản phẩm PKG Battery đáp ứng các tiêu chuẩn quốc tế nghiêm ngặt về 
                an toàn, chất lượng và bảo vệ môi trường.
              </p>
              <div className="flex flex-wrap gap-4">
                {['CE', 'UL', 'UN38.3', 'ISO 9001', 'RoHS', 'IEC 62619'].map((cert, i) => (
                  <div 
                    key={i}
                    className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded text-white font-semibold"
                  >
                    {cert}
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                { label: 'Quality Control', value: '100%', suffix: 'testing' },
                { label: 'Defect Rate', value: '<0.1%', suffix: 'industry leading' },
                { label: 'On-time Delivery', value: '98%+', suffix: 'fulfillment' },
                { label: 'Customer Satisfaction', value: '4.9/5', suffix: 'rating' }
              ].map((item, i) => (
                <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
                  <div className="text-3xl font-bold text-red-500 mb-2">{item.value}</div>
                  <div className="text-sm text-white font-semibold mb-1">{item.label}</div>
                  <div className="text-xs text-zinc-400">{item.suffix}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Customer Quote */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="relative p-8 lg:p-12 bg-zinc-50 border-l-4 border-red-600 rounded-lg">
            <div className="text-6xl text-red-600/20 font-serif absolute top-4 left-8">"</div>
            <blockquote className="relative text-xl text-zinc-700 italic leading-relaxed mb-6 pl-8">
              Chuyển đổi sang pin Lithium PKG Battery đã giúp chúng tôi tăng 40% thời gian hoạt động 
              của đội xe nâng và giảm đáng kể chi phí bảo trì. Đội ngũ kỹ thuật PKG rất chuyên nghiệp 
              và hỗ trợ nhiệt tình trong suốt quá trình triển khai.
            </blockquote>
            <div className="flex items-center gap-4 pl-8">
              <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center font-bold">
                NV
              </div>
              <div>
                <div className="font-bold text-zinc-900">Nguyễn Văn A</div>
                <div className="text-sm text-zinc-600">Giám đốc Logistics - ABC Company</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
