import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react';

export function FinalCTA() {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-white">
            <div className="inline-block mb-6">
              <div className="h-1 w-12 bg-red-600" />
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Không chắc cấu hình nào phù hợp với ứng dụng của bạn?
            </h2>
            
            <p className="text-xl text-zinc-300 leading-relaxed mb-8">
              Hãy để đội ngũ kỹ thuật PKG Battery phân tích yêu cầu và tư vấn giải pháp 
              pin Lithium tối ưu cho xe nâng và ứng dụng công nghiệp của bạn.
            </p>

            {/* Benefits List */}
            <div className="space-y-4 mb-8">
              {[
                'Tư vấn miễn phí cấu hình phù hợp',
                'Đánh giá chi phí và ROI chi tiết',
                'Hỗ trợ kỹ thuật trong triển khai',
                'Bảo hành và hỗ trợ sau bán hàng'
              ].map((benefit, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <ArrowRight className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-zinc-200">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Contact Info */}
            <div className="space-y-3 pt-6 border-t border-white/10">
              <div className="flex items-center gap-3 text-zinc-300">
                <Phone className="w-5 h-5 text-red-600" />
                <span>Hotline: <span className="text-white font-semibold">1900 xxxx</span></span>
              </div>
              <div className="flex items-center gap-3 text-zinc-300">
                <Mail className="w-5 h-5 text-red-600" />
                <span>Email: <span className="text-white font-semibold">sales@pkgbattery.com</span></span>
              </div>
              <div className="flex items-center gap-3 text-zinc-300">
                <MapPin className="w-5 h-5 text-red-600" />
                <span>Văn phòng: <span className="text-white font-semibold">TP. Hồ Chí Minh, Việt Nam</span></span>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-white rounded-xl p-8 lg:p-10 shadow-2xl">
            <h3 className="text-2xl font-bold text-zinc-900 mb-2">
              Yêu cầu tư vấn
            </h3>
            <p className="text-zinc-600 mb-8">
              Điền thông tin và chúng tôi sẽ liên hệ trong vòng 24h
            </p>

            <form className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-semibold text-zinc-900 mb-2">
                  Họ và tên <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Nguyễn Văn A"
                  className="w-full px-4 py-3 border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all"
                  required
                />
              </div>

              {/* Company */}
              <div>
                <label className="block text-sm font-semibold text-zinc-900 mb-2">
                  Công ty
                </label>
                <input
                  type="text"
                  placeholder="Tên công ty của bạn"
                  className="w-full px-4 py-3 border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-semibold text-zinc-900 mb-2">
                  Số điện thoại <span className="text-red-600">*</span>
                </label>
                <input
                  type="tel"
                  placeholder="0901 234 567"
                  className="w-full px-4 py-3 border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-zinc-900 mb-2">
                  Email <span className="text-red-600">*</span>
                </label>
                <input
                  type="email"
                  placeholder="email@company.com"
                  className="w-full px-4 py-3 border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all"
                  required
                />
              </div>

              {/* Application */}
              <div>
                <label className="block text-sm font-semibold text-zinc-900 mb-2">
                  Ứng dụng
                </label>
                <select className="w-full px-4 py-3 border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all">
                  <option value="">Chọn ứng dụng</option>
                  <option value="forklift">Xe nâng điện</option>
                  <option value="agv">AGV / Robot</option>
                  <option value="golf">Xe điện du lịch</option>
                  <option value="other">Khác</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-zinc-900 mb-2">
                  Nhu cầu cụ thể
                </label>
                <textarea
                  rows={4}
                  placeholder="Mô tả ngắn về yêu cầu kỹ thuật, số lượng, thời gian triển khai..."
                  className="w-full px-4 py-3 border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all resize-none"
                />
              </div>

              {/* Submit Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  type="submit"
                  className="flex-1 px-6 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-red-600/20 flex items-center justify-center gap-2"
                >
                  Gửi yêu cầu tư vấn
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  className="px-6 py-4 border-2 border-zinc-300 hover:border-red-600 hover:text-red-600 text-zinc-700 font-semibold rounded-lg transition-colors"
                >
                  Yêu cầu báo giá
                </button>
              </div>

              <p className="text-xs text-zinc-500 text-center">
                Bằng cách gửi form, bạn đồng ý với chính sách bảo mật thông tin của PKG Battery
              </p>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-12 border-t border-white/10">
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            <div className="text-white">
              <div className="text-xl font-bold mb-2">
                PKG <span className="text-red-600">Battery</span>
              </div>
              <p className="text-sm text-zinc-400">
                Giải pháp năng lượng Lithium công nghiệp hàng đầu Việt Nam
              </p>
            </div>
            <div className="text-zinc-300 text-sm">
              <div className="font-semibold mb-2 text-white">Sản phẩm</div>
              <div className="space-y-1">
                <div><a href="#" className="hover:text-red-600 transition-colors">Pin xe nâng điện</a></div>
                <div><a href="#" className="hover:text-red-600 transition-colors">Pin AGV/Robot</a></div>
                <div><a href="#" className="hover:text-red-600 transition-colors">Pin xe điện du lịch</a></div>
                <div><a href="#" className="hover:text-red-600 transition-colors">Hệ thống ESS</a></div>
              </div>
            </div>
            <div className="text-zinc-300 text-sm">
              <div className="font-semibold mb-2 text-white">Hỗ trợ</div>
              <div className="space-y-1">
                <div><a href="#" className="hover:text-red-600 transition-colors">Tư vấn kỹ thuật</a></div>
                <div><a href="#" className="hover:text-red-600 transition-colors">Bảo hành</a></div>
                <div><a href="#" className="hover:text-red-600 transition-colors">Tài liệu kỹ thuật</a></div>
                <div><a href="#" className="hover:text-red-600 transition-colors">Liên hệ</a></div>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-zinc-400">
            © 2026 PKG Battery. All rights reserved.
          </div>
        </div>
      </div>
    </section>
  );
}
