import { motion } from "motion/react";
import { SectionTitle, Button } from "./Common";
import { CAPABILITIES, APPLICATIONS } from "../data/landingData";
import { Settings, Cpu, Zap, Activity } from "lucide-react";

export const CustomCapabilities = () => {
  return (
    <section id="capabilities" className="py-24 bg-slate-950 text-white relative overflow-hidden">
      {/* Abstract technical grid background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)", backgroundSize: "100px 100px" }} />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-red-950/20 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="lg:w-1/2">
            <SectionTitle 
              dark
              eyebrow="Năng lực tùy chỉnh"
              title="Mọi bộ pin đều là duy nhất"
              description="Từ cấu hình điện áp, dung lượng đến cách pin giao tiếp với CPU máy chính, PKGBattery xử lý mọi yêu cầu kỹ thuật phức tạp nhất."
            />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
              {CAPABILITIES.map((cap, idx) => (
                <div key={idx} className="group">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-1.5 h-6 bg-red-600 transition-all group-hover:h-8" />
                    <h4 className="text-slate-400 font-bold uppercase text-xs tracking-[0.2em]">{cap.label}</h4>
                  </div>
                  <div className="text-2xl font-bold mb-3 group-hover:text-red-500 transition-colors uppercase tracking-tight italic">
                    {cap.value}
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed max-w-[250px]">
                    {cap.detail}
                  </p>
                </div>
              ))}
            </div>

            <Button className="mt-12 bg-white text-slate-900 hover:bg-slate-100" size="lg">
              Yêu cầu file PDF kỹ thuật
            </Button>
          </div>

          <div className="lg:w-1/2 relative hidden lg:block">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative aspect-square max-w-[500px] mx-auto"
            >
              {/* Central hub visual mockup */}
              <div className="absolute inset-0 border border-slate-800 rounded-full animate-spin-slow pointer-events-none" style={{ animationDuration: '30s' }} />
              <div className="absolute inset-[15%] border border-red-900/30 rounded-full animate-reverse-spin pointer-events-none" style={{ animationDuration: '20s' }} />
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 bg-red-600 rounded-sm shadow-[0_0_100px_rgba(220,38,38,0.3)] flex flex-col items-center justify-center p-6 text-center transform rotate-12">
                  <Cpu size={48} className="mb-4 text-white/50" />
                  <span className="font-bold text-2xl leading-none">BMS KỸ THUẬT SỐ</span>
                </div>
              </div>

              {/* Orbital labels */}
              {[
                { pos: 'top-0 left-1/2 -translate-x-1/2', text: 'Tối ưu tản nhiệt' },
                { pos: 'bottom-0 left-1/2 -translate-x-1/2', text: 'Giao tiếp CANBUS' },
                { pos: 'left-0 top-1/2 -translate-y-1/2 -rotate-90', text: 'Khối cell A-Grade' },
                { pos: 'right-0 top-1/2 -translate-y-1/2 rotate-90', text: 'Bảo vệ đa tầng' },
              ].map((orbit, i) => (
                <div key={i} className={`absolute ${orbit.pos} text-[10px] font-black uppercase tracking-[0.4em] text-slate-600`}>
                  {orbit.text}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Applications = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle 
          centered
          eyebrow="Ứng dụng hiện hữu"
          title="Pin lithium cho mọi nền tảng di động"
          description="Chúng tôi đã triển khai hệ thống pin cho đa dạng các lĩnh vực từ logistic, sản xuất đến dịch vụ du lịch."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {APPLICATIONS.map((app, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative overflow-hidden h-[400px] sm:h-[500px]"
            >
              <img 
                src={app.image} 
                alt={app.title} 
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/10 transition-colors duration-500" />
              <div className="absolute bottom-0 left-0 w-full p-8 sm:p-12 text-white">
                <div className="mb-4 w-12 h-12 bg-red-600 flex items-center justify-center rounded-sm">
                  <app.icon size={24} />
                </div>
                <h3 className="text-3xl font-bold mb-4 tracking-tight">{app.title}</h3>
                <p className="text-slate-200 text-lg max-w-sm mb-6 leading-relaxed opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  {app.description}
                </p>
                <div className="inline-flex items-center gap-2 font-bold uppercase tracking-widest text-xs border-b border-white pb-1">
                  Khám phá dự án mẫu
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
