import React, { useState } from 'react';
import { motion } from 'motion/react';
import { InquiryType } from '../../types';
import { Send, CheckCircle2, ArrowRight, Download, FileText } from 'lucide-react';

interface FormProps {
  type: InquiryType;
}

export default function DynamicForm({ type }: FormProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white p-12 rounded-[2rem] border border-brand-soft shadow-2xl text-center max-w-2xl mx-auto"
      >
        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h3 className="text-3xl font-display font-bold mb-4">Gửi yêu cầu thành công!</h3>
        <p className="text-brand-dark/60 mb-10 leading-relaxed">
          Cảm ơn bạn đã liên hệ với PKGbattery. Đội ngũ chuyên gia của chúng tôi đã nhận được thông tin và sẽ phản hồi bạn trong thời gian sớm nhất (thông thường dưới 15 phút trong giờ làm việc).
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="tel:0989000000" className="bg-brand-red text-white px-8 py-4 rounded-full font-bold inline-flex items-center gap-2 hover:scale-105 transition-all">
            Gọi Hotline ngay
          </a>
          <button className="bg-brand-soft text-brand-dark px-8 py-4 rounded-full font-bold hover:bg-gray-200 transition-all">
            Về trang chủ
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="grid lg:grid-cols-5 gap-12 items-start">
      <div className="lg:col-span-3">
        <form onSubmit={handleSubmit} className="bg-white p-10 lg:p-14 rounded-[2.5rem] border border-brand-soft shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-red/5 rounded-bl-[100%] z-0" />
          
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-1 alpha flex items-center justify-center font-mono text-brand-red font-bold text-lg">
                01
              </div>
              <h4 className="text-2xl font-bold">Thông tin chi tiết yêu cầu</h4>
            </div>

            <div className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-brand-dark/80 ml-1">Họ và tên *</label>
                  <input 
                    required
                    type="text" 
                    placeholder="Nguyễn Văn A" 
                    className="w-full bg-brand-soft/50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-brand-red/20 transition-all outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-brand-dark/80 ml-1">Số điện thoại *</label>
                  <input 
                    required
                    type="tel" 
                    placeholder="0989 XXX XXX" 
                    className="w-full bg-brand-soft/50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-brand-red/20 transition-all outline-none"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-brand-dark/80 ml-1">Email công việc</label>
                  <input 
                    type="email" 
                    placeholder="name@company.com" 
                    className="w-full bg-brand-soft/50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-brand-red/20 transition-all outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-brand-dark/80 ml-1">Tên công ty / Cửa hàng</label>
                  <input 
                    type="text" 
                    placeholder="Công ty TNHH PKG" 
                    className="w-full bg-brand-soft/50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-brand-red/20 transition-all outline-none"
                  />
                </div>
              </div>

              {/* Type-specific fields */}
              {type === InquiryType.QUOTE && (
                <div className="grid sm:grid-cols-2 gap-6 pb-2">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-brand-dark/80 ml-1">Sản phẩm quan tâm</label>
                    <select className="w-full bg-brand-soft/50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-brand-red/20 outline-none appearance-none">
                      <option>Pin lưu trữ năng lượng (ESS)</option>
                      <option>Pin xe Golf (Golf Cart)</option>
                      <option>Pin xe điện (EV)</option>
                      <option>Hệ thống UPS / Viễn thông</option>
                      <option>Pack pin thiết kế riêng (OEM)</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-brand-dark/80 ml-1">Số lượng dự kiến</label>
                    <input 
                      type="text" 
                      placeholder="VD: 50 bộ" 
                      className="w-full bg-brand-soft/50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-brand-red/20 outline-none"
                    />
                  </div>
                </div>
              )}

              {type === InquiryType.OEM_ODM && (
                <div className="grid sm:grid-cols-2 gap-6 pb-2">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-brand-dark/80 ml-1">Điện áp yêu cầu (V)</label>
                    <input type="text" placeholder="VD: 48V, 72V..." className="w-full bg-brand-soft/50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-brand-red/20 outline-none" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-brand-dark/80 ml-1">Dung lượng yêu cầu (Ah)</label>
                    <input type="text" placeholder="VD: 100Ah" className="w-full bg-brand-soft/50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-brand-red/20 outline-none" />
                  </div>
                </div>
              )}

              {type === InquiryType.WARRANTY && (
                <div className="space-y-2">
                  <label className="text-sm font-bold text-brand-dark/80 ml-1">Số Serial Sản phẩm (S/N)</label>
                  <input type="text" placeholder="Nhập mã S/N trên tem nhãn" className="w-full bg-brand-soft/50 border-none rounded-2xl p-4 outline-none" />
                </div>
              )}

              <div className="space-y-2">
                <label className="text-sm font-bold text-brand-dark/80 ml-1">Nội dung yêu cầu chi tiết</label>
                <textarea 
                  rows={4}
                  placeholder="Vui lòng mô tả rõ nhu cầu của bạn để chúng tôi chuẩn bị giải pháp tốt nhất..." 
                  className="w-full bg-brand-soft/50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-brand-red/20 outline-none resize-none"
                />
              </div>

              <div className="flex items-center gap-3 p-4 bg-yellow-50 rounded-2xl border border-yellow-100 mt-4">
                <div className="w-2 h-2 rounded-full bg-yellow-400" />
                <p className="text-[11px] text-yellow-800 font-medium leading-tight">
                  Bằng cách nhấn gửi, bạn đồng ý với chính sách bảo mật thông tin và xử lý dữ liệu của PKGbattery. Chúng tôi cam kết không chia sẻ dữ liệu cho bên thứ ba.
                </p>
              </div>

              <button 
                disabled={loading}
                className="w-full bg-brand-dark text-white p-5 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-brand-gray transition-all disabled:opacity-50 disabled:cursor-not-allowed group shadow-xl shadow-brand-dark/10"
              >
                {loading ? (
                  <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    <span className="text-lg">
                      {type === InquiryType.QUOTE ? "Nhận báo giá dự án" : 
                       type === InquiryType.DEALER ? "Gửi hồ sơ đăng ký đại lý" : 
                       type === InquiryType.OEM_ODM ? "Bắt đầu tư vấn kỹ thuật" : "Gửi thông tin liên hệ"}
                    </span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </div>
          </div>
        </form>
      </div>

      <div className="lg:col-span-2 space-y-8">
        {/* Resource Center / Trust Card */}
        <div className="bg-brand-soft rounded-3xl p-8 border border-white">
          <h5 className="text-lg font-bold mb-6 flex items-center gap-2">
            <FileText className="w-5 h-5 text-brand-red" />
            Tài liệu cho Doanh nghiệp
          </h5>
          <div className="space-y-4">
            {[
              { label: "Bảng so sánh TCO Lithium vs Lead-acid", size: "2.4 MB" },
              { label: "Profile năng lực sản xuất PKGbattery 2024", size: "5.1 MB" },
              { label: "Hướng dẫn cài đặt hệ thống lưu trữ ESS", size: "1.8 MB" }
            ].map((item, idx) => (
              <button key={idx} className="w-full flex items-center justify-between p-4 bg-white rounded-2xl hover:shadow-md transition-all group">
                <div className="text-left">
                  <p className="text-sm font-bold text-brand-dark pr-2">{item.label}</p>
                  <p className="text-[10px] text-brand-dark/40 font-mono uppercase">{item.size} • PDF</p>
                </div>
                <Download className="w-5 h-5 text-brand-dark/20 group-hover:text-brand-red transition-colors" />
              </button>
            ))}
          </div>
        </div>

        {/* Technical Insight / ROI Table */}
        <div className="bg-brand-dark text-white rounded-3xl p-8 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-2">
            <div className="bg-brand-red text-white text-[10px] px-2 py-0.5 rounded font-bold uppercase tracking-tighter italic">Expert Insight</div>
          </div>
          <h5 className="text-lg font-bold mb-4">Lợi ích đầu tư (ROI)</h5>
          <p className="text-sm text-gray-400 mb-6 leading-relaxed">
            Hệ thống pin PKGbattery giúp giảm tới 40% chi phí vận hành (OPEX) trong 5 năm so với các giải pháp thông thường.
          </p>
          
          <div className="space-y-4">
            <div className="flex justify-between items-end border-b border-white/10 pb-3">
              <span className="text-xs text-gray-500 font-medium">Vòng đời sử dụng</span>
              <span className="text-xl font-bold text-brand-red">{">"} 6,000 Cycles</span>
            </div>
            <div className="flex justify-between items-end border-b border-white/10 pb-3">
              <span className="text-xs text-gray-500 font-medium">Thời gian hoàn vốn</span>
              <span className="text-xl font-bold">18 - 24 Tháng</span>
            </div>
            <div className="flex justify-between items-end border-b border-white/10 pb-3">
              <span className="text-xs text-gray-500 font-medium">Hiệu suất xả (DoD)</span>
              <span className="text-xl font-bold">90% +</span>
            </div>
          </div>

          <div className="mt-8 p-4 bg-white/5 rounded-2xl border border-white/10">
            <p className="text-[11px] text-gray-400 italic">
              "Chúng tôi không chỉ bán pin, chúng tôi cung cấp giải pháp năng lượng tối ưu giúp doanh nghiệp của bạn phát triển bền vững."
            </p>
            <div className="flex items-center gap-3 mt-4">
              <div className="w-8 h-8 rounded-full bg-gray-600 overflow-hidden">
                <img src="https://i.pravatar.cc/100?img=12" alt="Technical Director" />
              </div>
              <div>
                <p className="text-[11px] font-bold">Kỹ sư trưởng PKGbattery</p>
                <p className="text-[9px] text-gray-500">Giám đốc Kỹ thuật OEM/ODM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
