import { motion } from "motion/react";
import { Factory, Award, Globe2, Users2 } from "lucide-react";

export default function FactoryStats() {
  const stats = [
    { icon: Factory, label: "Kinh nghiệm thực chiến", value: "10+", unit: "Năm" },
    { icon: Award, label: "Số lượng dự án đã thực hiện", value: "500+", unit: "Projects" },
    { icon: Globe2, label: "Năng lực sản xuất tối đa", value: "50k", unit: "Packs/m" },
    { icon: Users2, label: "Kỹ sư dán chuyên môn cao", value: "50+", unit: "Experts" }
  ];

  return (
    <section id="factory" className="py-24 bg-brand-black relative overflow-hidden">
      {/* Background Image/Dark Gradient */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1565152207402-7935fba2451c?auto=format&fit=crop&q=80&w=2000" 
          alt="Factory" 
          className="w-full h-full object-cover opacity-20 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-linear-to-b from-brand-black via-transparent to-brand-black" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-sm font-bold text-brand-red tracking-[0.2em] uppercase mb-4">NĂNG LỰC SẢN XUẤT</h2>
            <h3 className="text-4xl lg:text-5xl font-display font-bold text-white mb-8 leading-tight">
              Làm chủ công nghệ <br />
              giúp tối ưu hóa <br />
              từng watt năng lượng
            </h3>
            <p className="text-xl text-brand-gray-muted leading-relaxed mb-10">
              Nhà máy của PKGBattery tại Việt Nam được trang bị dây chuyền hàn Laser tự động, hệ thống cân bằng cell tiên tiến và phòng Lab thử nghiệm tiêu chuẩn quốc tế.
            </p>
            
            <div className="flex flex-wrap gap-6 items-center opacity-70">
              {["UN38.3", "CE", "RoHS", "ISO 9001"].map(c => (
                <div key={c} className="px-6 py-2 border border-white/20 text-white font-bold text-xs tracking-widest uppercase">
                  {c}
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-px bg-white/10 p-px">
            {stats.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-brand-black p-10 flex flex-col items-center justify-center text-center group hover:bg-white/[0.03] transition-colors"
              >
                <item.icon className="w-8 h-8 text-brand-red mb-4 group-hover:scale-110 transition-transform" />
                <div className="text-5xl font-display font-black text-white mb-2">
                  {item.value}
                </div>
                <div className="text-xs uppercase tracking-widest text-brand-gray-muted font-bold">
                   <span className="text-brand-red mr-1">{item.unit}</span> {item.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Gallery Preview */}
        <div className="mt-24 grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[1,2,3,4].map(n => (
                <div key={n} className="aspect-[4/3] overflow-hidden rounded-sm grayscale hover:grayscale-0 transition-all duration-700">
                    <img 
                        src={`https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&q=80&w=600&sig=${n}`} 
                        alt="Factory Detail" 
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                    />
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}
