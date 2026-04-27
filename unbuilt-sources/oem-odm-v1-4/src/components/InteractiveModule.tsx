import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Info, Cpu, Battery, Settings, ShieldCheck, Zap, Bluetooth, Share2 } from "lucide-react";

const hotspots = [
  {
    id: "voltage",
    top: "20%",
    left: "30%",
    icon: Zap,
    title: "Điện áp & Công suất",
    desc: "Tùy chỉnh từ 12V đến 800V. Hỗ trợ dòng xả liên tục cực lớn cho các thiết bị công nghiệp nặng."
  },
  {
    id: "bms",
    top: "40%",
    left: "70%",
    icon: Cpu,
    title: "Smart BMS",
    desc: "Hệ thống quản lý thông minh: chống ngắn mạch, quá nhiệt, cân bằng cell chủ động và giao tiếp dữ liệu."
  },
  {
    id: "cells",
    top: "60%",
    left: "40%",
    icon: Battery,
    title: "Chất lượng Cell",
    desc: "Sử dụng cell pin Lithium (LFP/NMC) từ các thương hiệu hàng đầu: EVE, CATL, BYD với tuổi thọ > 3000 chu kỳ."
  },
  {
    id: "housing",
    top: "30%",
    left: "55%",
    icon: Settings,
    title: "Vỏ & Chống nước",
    desc: "Vỏ nhôm hoặc thép sơn tĩnh điện. Đạt tiêu chuẩn IP65/IP67 chống nước, chống bụi và chống rung lắc."
  },
  {
    id: "comm",
    top: "75%",
    left: "65%",
    icon: Bluetooth,
    title: "Giao thức kết nối",
    desc: "Tích hợp CANBUS, RS485, Bluetooth APP và giám sát từ xa qua Cloud."
  }
];

export default function InteractiveModule() {
  const [activeId, setActiveId] = useState(hotspots[0].id);
  const activeSpot = hotspots.find(h => h.id === activeId);

  return (
    <section id="custom" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-brand-red tracking-[0.2em] uppercase mb-4">KHẢ NĂNG TÙY CHỈNH</h2>
          <h3 className="text-4xl font-display font-bold text-brand-black">Cấu trúc module linh hoạt</h3>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Interactive Visual Base */}
          <div className="lg:w-3/5 relative aspect-square lg:aspect-video bg-brand-gray-light rounded-3xl overflow-hidden shadow-inner p-12">
            <div className="absolute inset-0 opacity-10 pointer-events-none" 
                 style={{ backgroundImage: `radial-gradient(circle, #D6001C 1px, transparent 1px)`, backgroundSize: '30px 30px' }} />
            
            <div className="relative w-full h-full flex items-center justify-center">
              <motion.img 
                key="battery-visual"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                src="https://images.unsplash.com/photo-1620288627223-53302f4e8c74?auto=format&fit=crop&q=80&w=800" 
                alt="Battery Tech" 
                className="w-full max-w-lg object-contain mix-blend-multiply transition-all duration-700"
              />

              {/* Hotspots */}
              {hotspots.map((spot) => (
                <button
                  key={spot.id}
                  onClick={() => setActiveId(spot.id)}
                  style={{ top: spot.top, left: spot.left }}
                  className={`absolute group z-20 -translate-x-1/2 -translate-y-1/2`}
                >
                  <div className={`relative flex items-center justify-center`}>
                    <div className={`absolute inset-0 rounded-full animate-ping opacity-20 ${activeId === spot.id ? 'bg-brand-red' : 'bg-brand-gray-muted'}`} />
                    <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${activeId === spot.id ? 'bg-brand-red border-brand-red text-white scale-110 shadow-lg shadow-brand-red/30' : 'bg-white border-brand-gray-muted text-brand-gray-muted hover:border-brand-red hover:text-brand-red'}`}>
                      <Info className="w-4 h-4" />
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Info Panel */}
          <div className="lg:w-2/5">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeId}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-brand-black p-10 rounded-sm relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-red/5 -mr-16 -mt-16 rounded-full" />
                
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-brand-red/10 border border-brand-red/20 rounded-sm flex items-center justify-center text-brand-red">
                    {activeSpot && <activeSpot.icon className="w-7 h-7" />}
                  </div>
                  <h4 className="text-2xl font-display font-bold text-white">{activeSpot?.title}</h4>
                </div>

                <p className="text-lg text-brand-gray-muted leading-relaxed mb-8">
                  {activeSpot?.desc}
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-white/60 text-sm">
                    <ShieldCheck className="w-4 h-4 text-green-500" />
                    <span>Đạt chuẩn kiểm định quốc tế</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/60 text-sm">
                    <Share2 className="w-4 h-4 text-blue-500" />
                    <span>Dễ dàng tích hợp hệ thống hiện tại</span>
                  </div>
                </div>

                <button className="mt-10 text-brand-red font-bold uppercase tracking-widest text-sm flex items-center gap-2 group">
                  Xem chi tiết kỹ thuật
                  <div className="h-px w-0 bg-brand-red group-hover:w-8 transition-all" />
                </button>
              </motion.div>
            </AnimatePresence>

            <div className="mt-8 grid grid-cols-5 gap-2">
              {hotspots.map((h) => (
                <button
                  key={h.id}
                  onClick={() => setActiveId(h.id)}
                  className={`h-1 transition-all ${activeId === h.id ? 'bg-brand-red w-full' : 'bg-brand-gray-light hover:bg-brand-gray-muted w-2/3'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
