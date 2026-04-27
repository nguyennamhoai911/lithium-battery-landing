import { motion } from "motion/react";
import { Mail, MessageSquare, Phone, Globe, Send, User, Building, MapPin } from "lucide-react";

export default function ContactForm() {
  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background circle */}
      <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-brand-red/5 rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-sm font-bold text-brand-red tracking-[0.2em] uppercase mb-4">LIÊN HỆ TƯ VẤN</h2>
            <h3 className="text-4xl lg:text-5xl font-display font-bold text-brand-black mb-8 leading-tight">
              Khởi động dự án <br />
              giải pháp pin <br />
               của bạn ngay hôm nay
            </h3>
            <p className="text-lg text-brand-gray-text leading-relaxed mb-12 max-w-md">
              Gửi cho chúng tôi yêu cầu kỹ thuật của bạn. Đội ngũ chuyên gia của PKGBattery sẽ phản hồi kèm tư vấn giải pháp sơ bộ trong vòng 24 giờ làm việc.
            </p>

            <div className="space-y-8">
              {[
                { icon: Phone, label: "Hotline / WhatsApp", value: "+84 900 000 000" },
                { icon: Mail, label: "Email kỹ thuật", value: "oem@pkgbattery.com" },
                { icon: MapPin, label: "Nhà máy sản xuất", value: "Khu CN Công Nghệ Cao, Việt Nam" }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 items-center group">
                  <div className="w-12 h-12 bg-brand-gray-light rounded-sm flex items-center justify-center text-brand-red group-hover:bg-brand-red group-hover:text-white transition-all">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold tracking-widest text-brand-gray-muted">{item.label}</p>
                    <p className="text-lg font-bold text-brand-black">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 flex gap-4">
                <button className="flex items-center gap-2 px-6 py-3 border border-brand-gray-muted/20 rounded-sm font-bold text-sm uppercase tracking-widest hover:bg-brand-gray-light transition-all">
                    <MessageSquare className="w-4 h-4 text-brand-red" /> Zalo
                </button>
                <button className="flex items-center gap-2 px-6 py-3 border border-brand-gray-muted/20 rounded-sm font-bold text-sm uppercase tracking-widest hover:bg-brand-gray-light transition-all">
                    <Globe className="w-4 h-4 text-brand-red" /> LinkedIn
                </button>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-brand-gray-light p-10 lg:p-14 rounded-sm border border-brand-gray-muted/10 relative"
          >
            {/* Top red accent */}
            <div className="absolute top-0 left-0 w-full h-1 bg-brand-red" />
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[11px] uppercase font-bold tracking-widest text-brand-gray-text px-1">Họ tên *</label>
                  <div className="relative">
                    <input type="text" className="w-full bg-white border border-brand-gray-muted/20 p-4 pl-12 rounded-sm focus:border-brand-red outline-none transition-all" placeholder="Nguyễn Văn A" />
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-gray-muted" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] uppercase font-bold tracking-widest text-brand-gray-text px-1">Email doanh nghiệp *</label>
                  <div className="relative">
                    <input type="email" className="w-full bg-white border border-brand-gray-muted/20 p-4 pl-12 rounded-sm focus:border-brand-red outline-none transition-all" placeholder="name@company.com" />
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-gray-muted" />
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[11px] uppercase font-bold tracking-widest text-brand-gray-text px-1">Công ty / Tổ chức</label>
                  <div className="relative">
                    <input type="text" className="w-full bg-white border border-brand-gray-muted/20 p-4 pl-12 rounded-sm focus:border-brand-red outline-none transition-all" placeholder="Tên doanh nghiệp" />
                    <Building className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-gray-muted" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] uppercase font-bold tracking-widest text-brand-gray-text px-1">Ứng dụng thiết bị</label>
                  <select className="w-full bg-white border border-brand-gray-muted/20 p-4 rounded-sm focus:border-brand-red outline-none appearance-none">
                    <option>Xe nâng (Forklift)</option>
                    <option>AGV / Robot</option>
                    <option>Xe điện (EV)</option>
                    <option>Lưu trữ năng lượng (ESS)</option>
                    <option>Khác...</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[11px] uppercase font-bold tracking-widest text-brand-gray-text px-1">Nội dung yêu cầu kỹ thuật</label>
                <textarea rows={4} className="w-full bg-white border border-brand-gray-muted/20 p-4 rounded-sm focus:border-brand-red outline-none transition-all" placeholder="Mô tả sơ bộ về điện áp, dung lượng và môi trường sử dụng..."></textarea>
              </div>

              <button className="w-full py-5 bg-brand-red text-white font-bold uppercase tracking-widest text-sm rounded-sm flex items-center justify-center gap-3 hover:bg-brand-black transition-all shadow-lg hover:shadow-xl group">
                <span>Gửi yêu cầu tư vấn</span>
                <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
              
              <p className="text-[10px] text-brand-gray-muted text-center italic">
                * Chúng tôi cam kết bảo mật mọi thông tin kỹ thuật của đối tác.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
