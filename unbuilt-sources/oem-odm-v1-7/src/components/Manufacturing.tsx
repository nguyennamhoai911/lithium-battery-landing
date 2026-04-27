import { motion } from "motion/react";
import { Search, ShieldAlert, Award, Microscope, HardHat } from "lucide-react";

export default function Manufacturing() {
  return (
    <section className="py-24 bg-brand-dark text-white overflow-hidden relative" id="nhà máy">
      {/* Light highlights */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-red/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-brand-red/10 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="inline-block px-4 py-1.5 border border-white/20 rounded-full text-xs font-bold uppercase tracking-widest text-brand-red mb-8">
              Real Assets - Real Value
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              Nhà máy hiện đại, <br />
              <span className="text-white/30">con người tâm huyết.</span>
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-12 max-w-xl font-medium">
              Chúng tôi mời bạn ghé thăm nhà máy của PKGBattery tại Việt Nam để tận mắt chứng kiến quy trình sản xuất, R&D và kiểm soát chất lượng chuẩn xác trong từng pack pin.
            </p>

            <div className="grid grid-cols-2 gap-8 mb-12">
              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-brand-red">
                  <Microscope size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1 italic">R&D Lab</h4>
                  <p className="text-sm text-white/40">Khu vực nghiên cứu & thử nghiệm cấu hình pin.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-brand-red">
                  <ShieldAlert size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1 italic">Quality Control</h4>
                  <p className="text-sm text-white/40">Hệ thống test xả/nạp và an toàn tự động.</p>
                </div>
              </div>
            </div>

            <div className="p-8 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
              <div className="flex flex-wrap gap-12">
                <div>
                  <div className="text-4xl font-bold mb-1 font-display tracking-tighter">100+</div>
                  <div className="text-xs uppercase font-bold text-white/40 tracking-widest">Dự án hoàn thành</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-1 font-display tracking-tighter">15+</div>
                  <div className="text-xs uppercase font-bold text-white/40 tracking-widest">Năm kinh nghiệm K/T</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-1 font-display tracking-tighter">20+</div>
                  <div className="text-xs uppercase font-bold text-white/40 tracking-widest">Nhóm ứng dụng</div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <motion.div 
                  whileHover={{ scale: 0.98 }}
                  className="rounded-2xl overflow-hidden aspect-[4/5] bg-white/5 border border-white/10"
                >
                  <img 
                    src="https://images.unsplash.com/photo-1513828742140-ccaa28f3eda0?auto=format&fit=crop&q=80&w=600" 
                    alt="Engineer working" 
                    className="w-full h-full object-cover grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 0.98 }}
                  className="rounded-2xl overflow-hidden aspect-square bg-white/5 border border-white/10"
                >
                  <img 
                    src="https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&q=80&w=600" 
                    alt="Quality Testing" 
                    className="w-full h-full object-cover grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
              </div>
              <div className="space-y-4">
                <motion.div 
                  whileHover={{ scale: 0.98 }}
                  className="rounded-2xl overflow-hidden aspect-square bg-white/5 border border-white/10"
                >
                  <img 
                    src="https://images.unsplash.com/photo-1565372572793-79339e6a003f?auto=format&fit=crop&q=80&w=600" 
                    alt="Factory Floor" 
                    className="w-full h-full object-cover grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 0.98 }}
                  className="rounded-2xl overflow-hidden aspect-[4/5] bg-white/5 border border-white/10"
                >
                  <img 
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600" 
                    alt="Production Line" 
                    className="w-full h-full object-cover grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
              </div>
            </div>
            
            {/* Floating Label */}
            <div className="absolute -bottom-6 -right-6 bg-brand-red p-6 rounded-2xl shadow-2xl animate-float">
              <HardHat size={32} className="text-white mb-3" />
              <div className="text-white">
                <div className="text-xs font-bold uppercase tracking-widest opacity-80 mb-1">Standard</div>
                <div className="font-display font-bold text-lg italic whitespace-nowrap tracking-tighter">Industrial Safety Certified</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
