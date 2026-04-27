import { motion } from "motion/react";
import { ChevronRight, ShieldCheck, Zap, Factory } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white">
      {/* Background Visual Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full hidden lg:block">
        <div className="absolute inset-0 bg-gradient-to-l from-white via-transparent to-transparent z-10" />
        <img
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2000"
          alt="Industrial Automation"
          className="w-full h-full object-cover grayscale opacity-20"
        />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand/5 rounded-full blur-[120px] animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 relative z-20">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-100 rounded-full mb-6">
            <span className="w-2 h-2 bg-brand rounded-full animate-ping" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-industrial-gray">
              OEM/ODM Manufacturer in Vietnam
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] mb-8 tracking-tighter text-industrial-black">
            Giải pháp pin lithium <br />
            <span className="text-brand">thiết kế riêng</span> <br />
            cho thiết bị của bạn
          </h1>

          <p className="text-xl text-industrial-gray mb-10 max-w-xl leading-relaxed">
            PKGBattery phát triển và sản xuất battery pack theo đúng kích thước, điện áp, 
            thời lượng hoạt động và tiêu chuẩn kỹ thuật khắt khe nhất cho doanh nghiệp.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-brand text-white px-8 py-5 rounded-sm font-bold text-lg flex items-center justify-center gap-3 shadow-xl shadow-brand/20"
            >
              Nhận tư vấn dự án
              <ChevronRight className="w-5 h-5" />
            </motion.button>
            <motion.button
              whileHover={{ backgroundColor: "#f5f5f5" }}
              className="border border-neutral-200 px-8 py-5 rounded-sm font-bold text-lg flex items-center justify-center gap-3"
            >
              Gửi yêu cầu kỹ thuật
            </motion.button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-10 border-t border-neutral-100">
            {[
              { icon: Factory, text: "ISO 9001:2015" },
              { icon: ShieldCheck, text: "UN38.3 Certified" },
              { icon: Zap, text: "BMS Intelligence" },
              { icon: ChevronRight, text: "Vietnam Export" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-industrial-gray">
                <item.icon className="w-4 h-4 text-brand" />
                <span className="text-xs font-bold uppercase tracking-tight">{item.text}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Decorative Line Flow */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent" />
    </section>
  );
}
