import { motion } from 'motion/react';
import { Phone, MessageCircle, ChevronRight, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-white">
      {/* Background Visuals */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/40 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden lg:block">
           <img 
            src="https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?auto=format&fit=crop&q=80&w=2000" 
            alt="Battery Technology background" 
            className="h-full w-full object-cover grayscale opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-brand-red/5 to-transparent" />
        </div>
        <div className="absolute inset-0 technical-grid opacity-30" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 bg-brand-red/10 text-brand-red px-4 py-1.5 rounded-full mb-6 font-semibold text-xs uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse" />
              PKGbattery Support Center
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-display font-bold leading-tight mb-8">
              Liên hệ đội ngũ <br/>
              <span className="text-brand-red relative">
                PKGbattery
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 338 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 10C56.6667 4.33333 175.6 -4.8 337 10" stroke="#E31E24" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </span>
            </h1>

            <p className="text-xl text-brand-dark/70 max-w-xl mb-12 leading-relaxed">
              Nhận tư vấn nhanh về giải pháp pin lithium, báo giá dự án, đăng ký đại lý, OEM/ODM, bảo hành và hỗ trợ kỹ thuật chuyên sâu.
            </p>

            <div className="flex flex-wrap gap-4">
              <a 
                href="tel:0989000000" 
                className="group relative bg-brand-red text-white pl-8 pr-10 py-5 rounded-full font-bold flex items-center gap-3 transition-all hover:pr-12 hover:scale-[1.02] active:scale-95 shadow-2xl shadow-brand-red/25"
              >
                <Phone className="w-5 h-5" />
                <span>Gọi sale ngay</span>
                <ChevronRight className="w-4 h-4 absolute right-4 opacity-0 group-hover:opacity-100 transition-all" />
              </a>
              <button 
                className="bg-brand-dark text-white pl-8 pr-8 py-5 rounded-full font-bold flex items-center gap-3 transition-all hover:bg-brand-gray active:scale-95 shadow-xl shadow-brand-dark/10"
              >
                <MessageCircle className="w-5 h-5 text-green-400" fill="currentColor" />
                <span>Chat Zalo</span>
              </button>
            </div>

            <div className="mt-12 flex items-center gap-8 text-sm text-brand-dark/50">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500" />
                <span>Làm việc: Thứ 2 – Thứ 7, 8:00 – 18:00</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500" />
                <span>Phản hồi nhanh trong 15 phút</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-brand-red/5 rounded-3xl rotate-6 blur-2xl" />
              <div className="absolute inset-0 bg-white/40 backdrop-blur-sm rounded-3xl border border-white/50 shadow-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80&w=800"
                  alt="Battery cell testing"
                  className="w-full h-full object-cover transition-transform duration-[10s] hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white/60 text-xs uppercase tracking-widest font-semibold">Hotline hỗ trợ</p>
                      <p className="text-white text-xl font-bold">0989 000 000</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Contact Chips */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 -right-12 glass-panel p-4 rounded-2xl shadow-xl flex items-center gap-4 border-white/40"
              >
                <div className="w-10 h-10 rounded-full bg-brand-red flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-xs font-bold text-brand-dark">Head Office</p>
                  <p className="text-[10px] text-brand-dark/60 uppercase">Hà Nội, Việt Nam</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
