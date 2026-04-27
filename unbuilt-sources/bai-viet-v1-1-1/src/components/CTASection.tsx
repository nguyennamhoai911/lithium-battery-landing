import { motion } from 'motion/react';
import { ArrowRight, Check } from 'lucide-react';

export const CTASection = () => {
  return (
    <section className="bg-brand-black text-white py-32 overflow-hidden relative">
      {/* Background Graphic */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-zinc-900/50 -skew-x-12 translate-x-1/4 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-8 leading-tight">
              Bạn đang cân nhắc chuyển sang <span className="text-brand-red">pin lithium công nghiệp?</span>
            </h2>
            <div className="space-y-6 mb-12">
              {[
                'Tư vấn cấu hình pin theo đặc thù kho bãi',
                'Đánh giá hiệu suất sạc và vận hành thực tế',
                'Báo giá tối ưu cho nhu cầu doanh nghiệp'
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="w-6 h-6 border border-zinc-700 flex items-center justify-center text-brand-red group-hover:bg-brand-red group-hover:text-white transition-all">
                    <Check size={14} />
                  </div>
                  <span className="text-zinc-400 group-hover:text-white transition-colors">{text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-zinc-900 p-10 shadow-2xl relative">
            <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-brand-red" />
            <h3 className="text-2xl font-bold mb-8">Yêu cầu khảo sát miễn phí</h3>
            <div className="space-y-4 mb-10">
              <input type="text" placeholder="Họ và tên" className="w-full bg-zinc-800 border-none px-6 py-4 text-sm focus:ring-1 focus:ring-brand-red outline-none transition-all" />
              <input type="email" placeholder="Email doanh nghiệp" className="w-full bg-zinc-800 border-none px-6 py-4 text-sm focus:ring-1 focus:ring-brand-red outline-none transition-all" />
              <textarea placeholder="Nhu cầu của bạn (Vd: Pin xe nâng 48V600Ah)" rows={3} className="w-full bg-zinc-800 border-none px-6 py-4 text-sm focus:ring-1 focus:ring-brand-red outline-none transition-all" />
            </div>
            <button className="w-full py-5 bg-brand-red text-white text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-red-700 transition-colors">
              Gửi yêu cầu ngay
              <ArrowRight size={16} />
            </button>
            <p className="mt-6 text-center text-[10px] text-zinc-500 uppercase tracking-widest font-semibold">
              Cam kết bảo mật thông tin doanh nghiệp theo tiêu chuẩn ISO
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
