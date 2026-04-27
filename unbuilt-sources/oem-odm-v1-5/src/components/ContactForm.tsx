import { motion } from 'motion/react';
import { Send, Phone, Mail, MapPin, ShieldCheck, Globe } from 'lucide-react';

export default function ContactForm() {
  return (
    <section className="py-32 bg-charcoal text-white relative overflow-hidden" id="contact">
      <div className="absolute top-0 left-0 w-full h-full noise-bg opacity-20"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
                Bắt đầu dự án <span className="text-brand-red">custom pin</span> của bạn ngay hôm nay
              </h2>
              <p className="text-white/50 text-lg mb-12">
                Trao đổi trực tiếp với đội ngũ kỹ thuật PKGBattery để nhận đề xuất phù hợp nhất về chi phí và công nghệ.
              </p>

              <div className="space-y-8 mb-12">
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-white/5 flex items-center justify-center rounded-2xl border border-white/10 group-hover:border-brand-red">
                    <Phone className="text-brand-red w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs text-white/40 uppercase font-bold tracking-widest mb-1">Hotline Kỹ thuật</div>
                    <div className="text-xl font-bold">090.XXX.XXXX</div>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-white/5 flex items-center justify-center rounded-2xl border border-white/10">
                    <Mail className="text-brand-red w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs text-white/40 uppercase font-bold tracking-widest mb-1">Email kinh doanh</div>
                    <div className="text-xl font-bold">oem@pkgbattery.com.vn</div>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-white/5 flex items-center justify-center rounded-2xl border border-white/10">
                    <MapPin className="text-brand-red w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs text-white/40 uppercase font-bold tracking-widest mb-1">Văn phòng & Nhà máy</div>
                    <div className="text-sm font-medium leading-relaxed">KCN VSIP II-A, Bình Dương, Việt Nam</div>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-brand-red/10 border border-brand-red/20 rounded-2xl">
                <div className="flex items-center gap-3 text-brand-red font-bold mb-2">
                  <ShieldCheck className="w-5 h-5" />
                  Cam kết bảo mật (NDA)
                </div>
                <p className="text-sm text-white/60">
                   Chúng tôi cam kết bảo mật 100% thông tin dự án, bản vẽ kỹ thuật và bí mật kinh doanh của khách hàng đối tác.
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 bg-white rounded-[2.5rem] p-8 md:p-12 text-charcoal shadow-2xl"
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Họ tên *</label>
                  <input type="text" className="w-full bg-gray-50 border-gray-100 border p-4 rounded-xl focus:ring-2 focus:ring-brand-red/20 outline-none transition-all placeholder:text-gray-300" placeholder="Ví dụ: Nguyễn Văn A" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Công ty *</label>
                  <input type="text" className="w-full bg-gray-50 border-gray-100 border p-4 rounded-xl focus:ring-2 focus:ring-brand-red/20 outline-none transition-all placeholder:text-gray-300" placeholder="Tên doanh nghiệp của bạn" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Email *</label>
                  <input type="email" className="w-full bg-gray-50 border-gray-100 border p-4 rounded-xl focus:ring-2 focus:ring-brand-red/20 outline-none transition-all placeholder:text-gray-300" placeholder="email@company.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Số điện thoại *</label>
                  <input type="tel" className="w-full bg-gray-50 border-gray-100 border p-4 rounded-xl focus:ring-2 focus:ring-brand-red/20 outline-none transition-all placeholder:text-gray-300" placeholder="Zalo / WhatsApp / Phone" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Loại thiết bị cần sử dụng pin</label>
                <select className="w-full bg-gray-50 border-gray-100 border p-4 rounded-xl focus:ring-2 focus:ring-brand-red/20 outline-none transition-all">
                  <option>Xe nâng / Logistics</option>
                  <option>Robot AGV / AMR</option>
                  <option>Xe điện (Golf/Sân bay)</option>
                  <option>Hệ thống lưu trữ (ESS)</option>
                  <option>Khác (Ghi rõ ở dưới)</option>
                </select>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Điện áp mong muốn</label>
                  <input type="text" className="w-full bg-gray-50 border-gray-100 border p-4 rounded-xl focus:ring-2 focus:ring-brand-red/20 outline-none transition-all placeholder:text-gray-300" placeholder="24V, 48V, 72V..." />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Số lượng dự kiến</label>
                  <input type="text" className="w-full bg-gray-50 border-gray-100 border p-4 rounded-xl focus:ring-2 focus:ring-brand-red/20 outline-none transition-all placeholder:text-gray-300" placeholder="Số đơn vị / năm" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Mô tả chi tiết nhu cầu</label>
                <textarea rows={4} className="w-full bg-gray-50 border-gray-100 border p-4 rounded-xl focus:ring-2 focus:ring-brand-red/20 outline-none transition-all placeholder:text-gray-300" placeholder="Ví dụ: Kích thước vỏ tối đa, giao thức kết nối, môi trường vận hành..."></textarea>
              </div>

              <button className="w-full bg-brand-red hover:bg-red-700 text-white font-bold py-5 rounded-xl shadow-xl shadow-brand-red/20 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3">
                 GỬI YÊU CẦU BÁO GIÁ
                 <Send className="w-5 h-5" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
