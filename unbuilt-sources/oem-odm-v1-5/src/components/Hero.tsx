import { motion } from 'motion/react';
import { ChevronRight, ShieldCheck, Zap, Factory } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-charcoal">
      {/* Background with cinematic overlay */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover opacity-40"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-factory-robots-moving-on-a-production-line-42772-large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-red/10 border border-brand-red/20 rounded-full mb-8">
            <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse"></span>
            <span className="text-brand-red text-xs font-bold tracking-widest uppercase">Đối tác OEM/ODM số 1 Việt Nam</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
            Pin Lithium <span className="text-brand-red">tùy chỉnh</span> cho máy móc & thiết bị
          </h1>
          
          <p className="text-lg md:text-xl text-white/60 mb-10 max-w-xl leading-relaxed">
            PKGBattery thiết kế và sản xuất hệ pin lithium theo đúng điện áp, kích thước, thời lượng hoạt động và tiêu chuẩn an toàn cho doanh nghiệp của bạn.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a 
              href="#contact" 
              className="bg-brand-red hover:bg-red-700 text-white px-8 py-4 text-lg font-bold flex items-center justify-center gap-2 transition-all hover:scale-105 active:scale-95 group shadow-lg shadow-brand-red/20"
            >
              NHẬN TƯ VẤN OEM
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#customization" 
              className="border border-white/20 hover:border-white/40 text-white px-8 py-4 text-lg font-bold flex items-center justify-center gap-2 bg-white/5 backdrop-blur-sm transition-all"
            >
              XEM NĂNG LỰC KỸ THUẬT
            </a>
          </div>

          <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/10">
            <div>
              <div className="text-white font-bold text-2xl mb-1">10+ Năm</div>
              <div className="text-white/40 text-xs uppercase tracking-wider">Kinh nghiệm</div>
            </div>
            <div>
              <div className="text-white font-bold text-2xl mb-1">200+</div>
              <div className="text-white/40 text-xs uppercase tracking-wider">Dự án B2B</div>
            </div>
            <div>
              <div className="text-white font-bold text-2xl mb-1">UN38.3</div>
              <div className="text-white/40 text-xs uppercase tracking-wider">Đạt chuẩn Quốc tế</div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative z-10 overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-black/50">
             <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop" 
              alt="Industrial Battery Testing" 
              className="w-full aspect-[4/3] object-cover grayscale opacity-80"
            />
          </div>
          {/* Abstract industrial patterns */}
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-brand-red/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-brand-red/5 rounded-full blur-3xl"></div>
          
          <div className="absolute top-1/2 -translate-y-1/2 -right-6 z-20 space-y-4">
             {[
               { icon: <Zap className="w-4 h-4" />, text: "Pure Power" },
               { icon: <ShieldCheck className="w-4 h-4" />, text: "Safety First" },
               { icon: <Factory className="w-4 h-4" />, text: "Factory Direct" }
             ].map((item, i) => (
               <motion.div 
                 key={i}
                 initial={{ x: 20, opacity: 0 }}
                 animate={{ x: 0, opacity: 1 }}
                 transition={{ delay: 0.5 + i * 0.1 }}
                 className="glass-dark px-4 py-3 text-white text-sm font-medium flex items-center gap-3 shadow-xl whitespace-nowrap"
               >
                 <span className="text-brand-red">{item.icon}</span>
                 {item.text}
               </motion.div>
             ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent"></div>
        <span className="text-[10px] text-white uppercase tracking-[0.3em] font-bold">Scroll</span>
      </motion.div>
    </section>
  );
}
