import { motion } from "motion/react";
import { ArrowRight, ChevronRight, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-gray/50 -skew-x-6 translate-x-20 z-0" />
      <div className="absolute top-[20%] left-[10%] w-64 h-64 bg-brand-red/5 rounded-full blur-3xl z-0" />
      
      {/* Energy Line Animation */}
      <div className="absolute left-0 bottom-[10%] w-full h-[1px] bg-gradient-to-r from-transparent via-brand-red/20 to-transparent overflow-hidden">
        <motion.div 
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="w-1/2 h-full bg-gradient-to-r from-transparent via-brand-red to-transparent"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-12 items-center relative z-10 w-full">
        {/* Left Content */}
        <div className="md:col-span-7">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <span className="h-px w-8 bg-brand-red" />
              <span className="text-brand-red font-display font-semibold tracking-widest text-xs uppercase">
                OEM / ODM Factory Partner
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-8">
              Sản xuất pin <span className="text-brand-red underline decoration-brand-red/20 underline-offset-8 italic">Lithium</span> công nghiệp theo yêu cầu.
            </h1>
            
            <p className="text-lg text-brand-dark/70 max-w-xl mb-10 leading-relaxed font-medium">
              PKGBattery đồng hành từ tư vấn kỹ thuật, thiết kế giải pháp, thử mẫu đến sản xuất hoàn thiện tại nhà máy riêng tại Việt Nam.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-brand-dark text-white rounded-sm font-semibold flex items-center gap-2 group hover:bg-brand-red transition-all duration-500">
                Gửi yêu cầu thiết kế
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 border border-brand-dark/10 rounded-sm font-semibold hover:bg-brand-gray transition-colors flex items-center gap-2">
                Gọi tư vấn dự án
                <ChevronRight size={18} />
              </button>
            </div>

            <div className="mt-16 flex items-center gap-8 border-t border-brand-dark/5 pt-10">
              {[
                { label: "Nhà máy riêng", desc: "Tại Việt Nam" },
                { label: "Hỗ trợ R&D", desc: "Thiết kế & Thử nghiệm" },
                { label: "Full Custom", desc: "Tùy biến theo dự án" }
              ].map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-xs font-bold text-brand-red uppercase tracking-wider mb-1">
                    {stat.label}
                  </span>
                  <span className="text-sm font-semibold text-brand-dark/60">
                    {stat.desc}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Visual */}
        <div className="md:col-span-5 relative h-[500px] md:h-[650px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-full h-full relative"
          >
            {/* Image Placeholder with Mask */}
            <div className="w-full h-full bg-brand-dark rounded-[2rem] overflow-hidden relative group">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000" 
                alt="Industrial Factory Battery Production" 
                className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-[2s]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 to-transparent" />
              
              <div className="absolute bottom-8 left-8 right-8">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-brand-red rounded-full flex items-center justify-center text-white">
                    <Zap size={20} fill="currentColor" />
                  </div>
                  <span className="text-white font-display font-medium">PKGBattery Technology Hub</span>
                </div>
                <p className="text-white/60 text-xs">
                  Mô phỏng: Dây chuyền sản xuất pin Lithium hiện đại với quy trình kiểm soát tự động.
                </p>
              </div>
            </div>

            {/* Floating Technical Detail */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-10 top-[20%] glass-card p-6 rounded-xl hidden xl:block w-64 shadow-2xl"
            >
              <div className="flex justify-between items-end mb-4">
                <span className="text-xs font-bold text-brand-red">LITHIUM-ION PLATFORM</span>
                <span className="text-[10px] text-brand-dark/40 italic">#Tech_Spec_2024</span>
              </div>
              <div className="space-y-3">
                <div className="h-1 bg-brand-red/10 overflow-hidden rounded-full">
                  <div className="h-full bg-brand-red w-[85%]" />
                </div>
                <div className="flex justify-between text-[11px] font-bold">
                  <span>Capacity Output</span>
                  <span>98.6%</span>
                </div>
                <div className="text-[10px] text-brand-dark/60 leading-tight">
                  Our industrial cells are optimized for heavy-duty discharge and cycle life management.
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
