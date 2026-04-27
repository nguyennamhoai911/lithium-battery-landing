import { motion } from "motion/react";
import { Maximize, Activity, Bluetooth, Shield, Cloud, Smartphone } from "lucide-react";

export default function Capabilities() {
  return (
    <section id="năng lực" className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative">
              {/* Technical Drawing Sim */}
              <div className="absolute -inset-10 border border-neutral-100 rounded-full opacity-50 animate-[spin_20s_linear_infinite]" />
              <div className="absolute -inset-20 border border-neutral-100 rounded-full opacity-30 animate-[spin_30s_linear_infinite]" />
              
              <div className="relative z-10 p-8 bg-neutral-50 rounded-sm border border-neutral-200">
                <img 
                  src="https://images.unsplash.com/photo-1620288627223-53302f4e8c74?auto=format&fit=crop&q=80&w=1000" 
                  alt="Battery Architecture" 
                  className="w-full h-auto rounded-sm grayscale shadow-2xl"
                />
                
                {/* Labels */}
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="absolute top-10 -left-10 bg-white shadow-xl p-3 border-l-4 border-brand"
                >
                  <p className="text-[10px] font-bold text-industrial-gray uppercase">Intelligent BMS</p>
                  <p className="text-xs font-extrabold">Active Balancing</p>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="absolute bottom-20 -right-10 bg-white shadow-xl p-3 border-r-4 border-brand"
                >
                  <p className="text-[10px] font-bold text-industrial-gray uppercase">Housing Material</p>
                  <p className="text-xs font-extrabold">Steel / Aluminum</p>
                </motion.div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-12">
            <div>
              <h2 className="text-sm font-bold text-brand uppercase tracking-[0.2em] mb-4">Năng lục tùy biến kĩ thuật</h2>
              <h3 className="text-4xl md:text-5xl font-extrabold text-industrial-black tracking-tighter mb-6">
                Chính xác từng <br /> Milimet & Thông số
              </h3>
              <p className="text-lg text-industrial-gray leading-relaxed">
                Chúng tôi làm chủ mọi giai đoạn từ thiết kế Board mạch BMS đến gia công vỏ hộp, 
                giúp khách hàng tối ưu hóa không gian và hiệu suất thiết bị.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              {[
                { icon: Maximize, label: "Kích thước & Hình dáng", desc: "Tùy biến theo mọi hộc pin, bất kể hình dạng phức tạp." },
                { icon: Bluetooth, label: "Giao thức Giao tiếp", desc: "CANBUS, RS485, RS232, SMBus tích hợp sâu." },
                { icon: Smartphone, label: "Wireless Monitoring", desc: "Theo dõi trạng thái pin qua Mobile App & Bluetooth." },
                { icon: Shield, label: "Vỏ Hộp Chống Nước", desc: "Tiêu chuẩn IP65, IP67 cho môi trường khắc nghiệt." },
                { icon: Cloud, label: "Kết nối Cloud", desc: "Quản lý tập trung đội xe (Forklift/AGV) từ xa." },
                { icon: Activity, label: "Sức mạnh BMS", desc: "BMS tự phát triển với thuật toán cân bằng tối ưu." },
              ].map((item, i) => (
                <div key={i} className="space-y-3 group">
                  <div className="flex items-center gap-3">
                    <item.icon className="w-5 h-5 text-brand group-hover:scale-110 transition-transform" />
                    <h4 className="font-bold text-industrial-black uppercase text-xs tracking-wider">{item.label}</h4>
                  </div>
                  <p className="text-sm text-industrial-gray leading-snug">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-1/2 left-0 w-full h-px bg-neutral-50 -z-10" />
      <div className="absolute top-0 left-1/2 w-px h-full bg-neutral-50 -z-10" />
    </section>
  );
}
