import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, Play, CheckCircle2 } from "lucide-react";

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-brand-black pt-20">
      {/* Background Cinematic Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1581092334651-ddf26d9a1930?auto=format&fit=crop&q=80&w=2000" 
          alt="Technical Background" 
          className="w-full h-full object-cover opacity-30 grayscale"
        />
        <div className="absolute inset-0 bg-linear-to-r from-brand-black via-brand-black/80 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <div className="flex items-center gap-2 mb-6">
            <div className="h-px w-8 bg-brand-red" />
            <span className="text-brand-red font-display font-medium tracking-widest text-sm uppercase">
              GIẢI PHÁP OEM / ODM PIN LITHIUM
            </span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-display font-bold text-white leading-tight mb-8">
            Thiết kế và sản xuất pin lithium <br />
            <span className="text-brand-red">theo đúng thiết bị</span> <br />
            của doanh nghiệp bạn
          </h1>

          <p className="text-xl text-brand-gray-muted leading-relaxed mb-10 max-w-xl">
            PKGBattery cung cấp battery pack tùy chỉnh cho máy móc, AGV, xe điện chuyên dụng và hệ thống công nghiệp. Từ thiết kế kỹ thuật đến sản xuất hàng loạt.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 bg-brand-red text-white font-semibold rounded-sm flex items-center justify-center gap-2 hover:bg-red-700 transition-all group overflow-hidden relative shadow-lg shadow-brand-red/20 active:scale-95">
              <span>Nhận tư vấn dự án</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 border border-white/20 text-white font-semibold rounded-sm flex items-center justify-center gap-2 hover:bg-white/10 transition-all active:scale-95">
              <Play className="w-4 h-4 fill-current" />
              <span>Xem năng lực sản xuất</span>
            </button>
          </div>
        </motion.div>

        <motion.div 
          style={{ y: y1 }}
          className="hidden lg:block relative"
        >
          <div className="relative z-10 animate-float">
             <img 
              src="https://images.unsplash.com/photo-1594818821917-ee744040739b?auto=format&fit=crop&q=80&w=800" 
              alt="Custom Battery Module" 
              className="rounded-lg shadow-2xl border border-white/10 mix-blend-lighten"
            />
            {/* Technical grid overlay effect */}
            <div className="absolute -inset-4 border border-brand-red/20 rounded-lg -z-10" />
            <div className="absolute -inset-8 border border-brand-red/10 rounded-lg -z-20" />
          </div>
          
          {/* Floating Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="absolute -bottom-10 -left-10 bg-brand-black/90 backdrop-blur-md border border-white/10 p-6 rounded-sm shadow-xl"
          >
            <p className="text-brand-red font-display font-bold text-3xl mb-1">99.8%</p>
            <p className="text-xs text-brand-gray-muted uppercase tracking-wider">Độ ổn định hệ thống</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Trust Strip */}
      <div className="absolute bottom-0 left-0 w-full bg-white/5 backdrop-blur-sm border-t border-white/10 py-6">
        <div className="container mx-auto px-6 h-full flex flex-wrap justify-between items-center gap-8 opacity-60">
          {["ISO 9001:2015", "UN38.3 CERTIFIED", "CE / ROHS", "FACTORY IN VIETNAM"].map((text) => (
            <div key={text} className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-brand-red" />
              <span className="text-sm font-medium text-white tracking-widest">{text}</span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <div className="w-0.5 h-12 bg-linear-to-b from-brand-red to-transparent rounded-full" />
      </div>
    </section>
  );
}
