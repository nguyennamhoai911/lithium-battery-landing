import { motion } from "motion/react";
import { Phone, Mail, Upload, Send, CheckCircle } from "lucide-react";
import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-24 bg-white" id="dự án">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-brand-gray/50 rounded-[3rem] overflow-hidden border border-brand-dark/5">
          <div className="grid lg:grid-cols-2">
            {/* Left Info */}
            <div className="p-10 md:p-20 bg-brand-dark text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red/10 rounded-full blur-[80px]" />
              
              <div className="relative z-10">
                <span className="text-brand-red font-bold text-xs uppercase tracking-widest mb-6 block">
                  Bắt đầu dự án của bạn
                </span>
                <h2 className="text-4xl md:text-5xl font-bold mb-10 leading-tight">
                  Bạn đang cần phát triển một sản phẩm pin <span className="text-brand-red">độc quyền?</span>
                </h2>
                <p className="text-white/50 text-lg mb-12 font-medium">
                  Hãy chia sẻ nhu cầu ứng dụng hoặc bài toán vận hành. Đội ngũ PKGBattery sẽ tư vấn hướng cấu hình phù hợp nhất.
                </p>

                <div className="space-y-8">
                  <div className="flex items-center gap-6 group cursor-pointer">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-brand-red border border-white/10 group-hover:bg-brand-red group-hover:text-white transition-all">
                      <Phone size={24} />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white/40 uppercase tracking-widest mb-1">Hotline tư vấn</div>
                      <div className="text-xl font-bold">09x xxx xxxx</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 group cursor-pointer">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-brand-red border border-white/10 group-hover:bg-brand-red group-hover:text-white transition-all">
                      <Mail size={24} />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white/40 uppercase tracking-widest mb-1">Email dự án</div>
                      <div className="text-xl font-bold">contact@pkgbattery.com</div>
                    </div>
                  </div>
                </div>

                <div className="mt-16 pt-10 border-t border-white/5 text-sm text-white/30 italic">
                  * Thông tin của bạn được bảo mật tuyệt đối cho mục đích tư vấn kỹ thuật.
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="p-10 md:p-20 flex items-center">
              {!submitted ? (
                <form className="w-full space-y-6" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-brand-dark/40">Họ và tên</label>
                        <input 
                            type="text" 
                            required
                            placeholder="Nguyễn Văn A" 
                            className="w-full px-0 py-3 bg-transparent border-b-2 border-brand-dark/10 focus:border-brand-red outline-none transition-colors font-semibold"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-brand-dark/40">Số điện thoại</label>
                        <input 
                            type="tel" 
                            required
                            placeholder="091 xxx xxxx" 
                            className="w-full px-0 py-3 bg-transparent border-b-2 border-brand-dark/10 focus:border-brand-red outline-none transition-colors font-semibold"
                        />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-brand-dark/40">Doanh nghiệp / Tổ chức</label>
                    <input 
                        type="text" 
                        required
                        placeholder="Tên công ty của bạn" 
                        className="w-full px-0 py-3 bg-transparent border-b-2 border-brand-dark/10 focus:border-brand-red outline-none transition-colors font-semibold"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-brand-dark/40">Nhu cầu / Sản phẩm quan tâm</label>
                    <textarea 
                        rows={4}
                        placeholder="Mô tả sơ lược về ứng dụng hoặc cấu hình pin bạn mong muốn..."
                        className="w-full px-4 py-4 bg-white border-2 border-brand-dark/5 focus:border-brand-red outline-none transition-colors font-semibold rounded-xl resize-none"
                    />
                  </div>

                  <div className="flex items-center gap-4 p-4 border-2 border-dashed border-brand-dark/10 rounded-xl hover:bg-white transition-colors cursor-pointer group">
                    <Upload size={20} className="text-brand-dark/40 group-hover:text-brand-red" />
                    <span className="text-sm font-bold text-brand-dark/40 group-hover:text-brand-dark">Đính kèm bản vẽ / Spec (nếu có)</span>
                  </div>

                  <button 
                    type="submit"
                    className="w-full py-5 bg-brand-red text-white flex items-center justify-center gap-3 font-bold text-lg hover:bg-brand-dark transition-all duration-500 rounded-xl group overflow-hidden relative shadow-xl shadow-brand-red/20 shadow-none border hover:shadow-brand-dark/10"
                  >
                    <span className="relative z-10">Gửi yêu cầu khởi tạo dự án</span>
                    <Send size={20} className="relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </form>
              ) : (
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="w-full text-center py-20"
                >
                    <div className="w-20 h-20 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl shadow-green-500/20">
                        <CheckCircle size={40} />
                    </div>
                    <h3 className="text-3xl font-bold mb-4">Gửi yêu cầu thành công!</h3>
                    <p className="text-brand-dark/60 font-medium mb-10">
                        Cảm ơn bạn đã tin tưởng PKGBattery. Đội ngũ chuyên gia kỹ thuật của chúng tôi sẽ liên hệ lại trong vòng 24h làm việc.
                    </p>
                    <button 
                        onClick={() => setSubmitted(false)}
                        className="text-brand-red font-bold underline"
                    >
                        Gửi lại yêu cầu khác
                    </button>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
