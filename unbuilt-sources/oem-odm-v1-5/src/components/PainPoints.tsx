import { motion } from 'motion/react';
import { AlertCircle, CheckCircle2, ArrowRight } from 'lucide-react';

const challenges = [
  {
    problem: "Pin tiêu chuẩn không vừa vặn với kích thước máy chuyên dụng của bạn?",
    solution: "Tùy chỉnh 100% kích thước và kết cấu vỏ để tương thích hoàn hảo với không gian thiết bị.",
    image: "https://images.unsplash.com/photo-1599824419020-d38ae76b29f0?q=80&w=2070&auto=format&fit=crop"
  },
  {
    problem: "Thời lượng chạy không đủ để đáp ứng quy trình vận hành liên tục?",
    solution: "Nâng cấp dung lượng và tối ưu hóa mật độ năng lượng, đảm bảo máy hoạt động xuyên suốt ca làm việc.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop"
  },
  {
    problem: "Bất an về rủi ro cháy nổ và độ bền khi vận hành trong môi trường khắc nghiệt?",
    solution: "Sử dụng Cell pin loại A chất lượng cao kết hợp hệ thống BMS thông minh đạt chuẩn UN38.3.",
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?q=80&w=2070&auto=format&fit=crop"
  }
];

export default function PainPoints() {
  return (
    <section className="py-32 bg-charcoal text-white noise-bg overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-24">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-12 h-12 bg-brand-red/20 rounded-full flex items-center justify-center mb-6"
          >
            <AlertCircle className="text-brand-red w-6 h-6" />
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
          >
            Vấn đề của bạn là <br/>
            <span className="text-brand-red">nhiệm vụ của chúng tôi</span>
          </motion.h2>
          <div className="w-24 h-1 bg-brand-red mb-8"></div>
        </div>

        <div className="space-y-40">
          {challenges.map((item, index) => (
            <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-16 lg:gap-24`}>
              <motion.div 
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="flex-1 space-y-8"
              >
                <div className="space-y-4">
                  <div className="text-brand-red font-mono text-sm tracking-widest uppercase">Thách thức {index + 1}</div>
                  <h3 className="text-3xl md:text-4xl font-bold leading-tight italic text-white/90">
                    "{item.problem}"
                  </h3>
                </div>

                <div className="relative pl-12 py-8 bg-white/5 border-l-2 border-brand-red">
                  <div className="absolute left-[-13px] top-8 w-6 h-6 bg-brand-red rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <div className="text-lg md:text-xl font-medium text-white mb-2">Giải pháp của PKGBattery:</div>
                  <p className="text-white/60 leading-relaxed italic">
                    {item.solution}
                  </p>
                </div>
                
                <motion.button 
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-2 text-brand-red font-bold uppercase tracking-wider text-sm group"
                >
                  Giải quyết bài toán này <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </motion.button>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9, rotate: index % 2 === 0 ? 5 : -5 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="flex-1 relative"
              >
                <div className="aspect-[16/10] overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
                  <img 
                    src={item.image} 
                    alt="Technical Illustration"
                    className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 transition-all duration-1000" 
                  />
                </div>
                {/* Decorative lines */}
                <div className={`absolute -z-10 top-1/2 -translate-y-1/2 ${index % 2 === 0 ? '-left-12' : '-right-12'} w-full h-full border border-brand-red/20 rounded-2xl`}></div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
