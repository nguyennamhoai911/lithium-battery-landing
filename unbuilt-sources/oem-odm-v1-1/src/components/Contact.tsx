import { motion } from "motion/react";
import { Send, Phone, Mail, MapPin, CheckCircle2 } from "lucide-react";

export default function Contact() {
  return (
    <section className="bg-industrial-black py-32 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand/5 -skew-x-12 transform translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <div>
            <h2 className="text-sm font-bold text-brand uppercase tracking-[0.2em] mb-4">Liên hệ ngay</h2>
            <h3 className="text-4xl md:text-6xl font-extrabold text-white tracking-tighter mb-10 leading-tight">
              Bắt đầu dự án <br /> tùy chỉnh của bạn <br /> hôm nay
            </h3>

            <div className="space-y-8 mb-12">
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center rounded-sm flex-shrink-0">
                  <Phone className="w-5 h-5 text-brand" />
                </div>
                <div>
                  <p className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-1">Hotline / Zalo</p>
                  <p className="text-xl font-bold text-white tracking-tight">(+84) 123 456 789</p>
                </div>
              </div>
              
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center rounded-sm flex-shrink-0">
                  <Mail className="w-5 h-5 text-brand" />
                </div>
                <div>
                  <p className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-1">Email Kỹ thuật</p>
                  <p className="text-xl font-bold text-white tracking-tight">tech@pkgbattery.com</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center rounded-sm flex-shrink-0">
                  <MapPin className="w-5 h-5 text-brand" />
                </div>
                <div>
                  <p className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-1">Nhà máy</p>
                  <p className="text-lg text-neutral-300">Khu Công Nghiệp VSIP, Bình Dương, Việt Nam</p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-white/5 border border-white/10 rounded-sm">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle2 className="w-5 h-5 text-brand" />
                <span className="text-sm font-bold text-white uppercase tracking-wider">Cam kết 24h</span>
              </div>
              <p className="text-neutral-400 text-sm">
                Đội ngũ kỹ sư sẽ nghiên cứu yêu cầu và phản hồi phương án kỹ thuật sơ bộ trong vòng 24 giờ làm việc.
              </p>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-white p-10 md:p-16 rounded-sm shadow-2xl"
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-industrial-black uppercase tracking-widest">Họ và tên *</label>
                  <input type="text" className="w-full bg-neutral-50 border border-neutral-100 p-4 outline-none focus:border-brand transition-all font-medium text-sm" placeholder="Nguyễn Văn A" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-industrial-black uppercase tracking-widest">Công ty *</label>
                  <input type="text" className="w-full bg-neutral-50 border border-neutral-100 p-4 outline-none focus:border-brand transition-all font-medium text-sm" placeholder="Tên doanh nghiệp" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-industrial-black uppercase tracking-widest">Email doanh nghiệp *</label>
                  <input type="email" className="w-full bg-neutral-50 border border-neutral-100 p-4 outline-none focus:border-brand transition-all font-medium text-sm" placeholder="email@company.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-industrial-black uppercase tracking-widest">Ứng dụng *</label>
                  <select className="w-full bg-neutral-50 border border-neutral-100 p-4 outline-none focus:border-brand transition-all font-medium text-sm appearance-none">
                    <option>AGV / AMR</option>
                    <option>Xe nâng điện</option>
                    <option>Golf Cart</option>
                    <option>Lưu trữ năng lượng (ESS)</option>
                    <option>Thiết bị đặc thù khác</option>
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-industrial-black uppercase tracking-widest">Điện áp (VDC)</label>
                  <input type="text" className="w-full bg-neutral-50 border border-neutral-100 p-4 outline-none focus:border-brand transition-all font-medium text-sm" placeholder="e.g. 24V, 48V, 72V" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-industrial-black uppercase tracking-widest">Số lượng dự kiến</label>
                  <input type="text" className="w-full bg-neutral-50 border border-neutral-100 p-4 outline-none focus:border-brand transition-all font-medium text-sm" placeholder="e.g. 10 - 50" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold text-industrial-black uppercase tracking-widest">Mô tả yêu cầu kỹ thuật</label>
                <textarea rows={4} className="w-full bg-neutral-50 border border-neutral-100 p-4 outline-none focus:border-brand transition-all font-medium text-sm resize-none" placeholder="Hãy cho chúng tôi biết về môi trường làm việc, kích thước hộc pin..." />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-brand text-white py-6 font-bold text-lg flex items-center justify-center gap-3 group shadow-xl shadow-brand/20"
              >
                Gửi yêu cầu ngay
                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
