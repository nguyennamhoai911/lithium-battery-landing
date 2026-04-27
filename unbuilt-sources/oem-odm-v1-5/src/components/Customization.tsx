import { motion } from 'motion/react';
import { useState } from 'react';
import { Settings, Shield, Zap, Cable, Ruler, Droplets, Cloud, Layers } from 'lucide-react';

const hotspots = [
  {
    id: 'voltage',
    x: '25%',
    y: '40%',
    title: 'Điện áp (Voltage)',
    description: 'Từ 12V đến 600V tùy chọn, phù hợp cho mọi hệ thống từ dân dụng đến công nghiệp nặng.',
    icon: <Zap className="w-5 h-5" />
  },
  {
    id: 'bms',
    x: '50%',
    y: '30%',
    title: 'Smart BMS',
    description: 'Hệ thống quản lý pin thông minh tích hợp bảo vệ quá tải, đoản mạch và cân bằng cell.',
    icon: <Settings className="w-5 h-5" />
  },
  {
    id: 'housing',
    x: '75%',
    y: '45%',
    title: 'Vỏ Housing Thép/Nhôm',
    description: 'Gia công CNC chính xác, sơn tĩnh điện hoặc vỏ inox chống ăn mòn theo môi trường làm việc.',
    icon: <Layers className="w-5 h-5" />
  },
  {
    id: 'ip',
    x: '40%',
    y: '65%',
    title: 'Chống nước IP65/67',
    description: 'Thiết kế kín kẽ, ron cao su cao cấp cho phép hoạt động dưới trời mưa hoặc môi trường ẩm ướt.',
    icon: <Droplets className="w-5 h-5" />
  },
  {
    id: 'canbus',
    x: '60%',
    y: '60%',
    title: 'Giao thức CANBUS/RS485',
    description: 'Kết nối và đồng bộ dữ liệu trực tiếp với hệ điều hành của máy móc hoặc xe điện.',
    icon: <Cable className="w-5 h-5" />
  }
];

export default function Customization() {
  const [activeId, setActiveId] = useState(hotspots[0].id);
  const activeSpot = hotspots.find(s => s.id === activeId);

  return (
    <section className="py-32 bg-white" id="customization">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 tracking-tight"
          >
            Năng lực tùy chỉnh <span className="text-brand-red">vô hạn</span>
          </motion.h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Mỗi hệ pin được đo ni đóng giày cho thiết bị của bạn. Từ cơ khí bên ngoài đến linh hồn BMS bên trong.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Main Visual with Hotspots */}
          <div className="lg:col-span-7 relative group">
            <div className="relative z-10 p-12 bg-gray-50 rounded-3xl overflow-hidden border border-gray-100">
               <motion.img 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                src="https://images.unsplash.com/photo-1590133322241-d68d1ecf549c?q=80&w=2070&auto=format&fit=crop" 
                alt="Battery Module Prototype"
                className="w-full h-auto drop-shadow-2xl grayscale brightness-110"
              />
              
              {/* Hotspots */}
              {hotspots.map((spot) => (
                <button
                  key={spot.id}
                  onClick={() => setActiveId(spot.id)}
                  style={{ top: spot.x, left: spot.y }}
                  className={`absolute z-20 w-8 h-8 -translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center transition-all duration-300 ${
                    activeId === spot.id ? 'bg-brand-red scale-125' : 'bg-charcoal hover:bg-brand-red hover:scale-110 shadow-lg'
                  }`}
                >
                  <span className={`w-2 h-2 rounded-full bg-white ${activeId === spot.id ? 'animate-ping' : ''}`}></span>
                  {activeId === spot.id && (
                    <span className="absolute inset-0 rounded-full border-2 border-brand-red animate-ping opacity-50"></span>
                  )}
                </button>
              ))}
            </div>
            
            {/* Background elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 border-2 border-dashed border-gray-200 rounded-full -z-0"></div>
          </div>

          {/* Info Side */}
          <div className="lg:col-span-5 space-y-8">
            <motion.div 
               key={activeId}
               initial={{ opacity: 0, x: 20 }}
               animate={{ opacity: 1, x: 0 }}
               className="p-8 bg-charcoal text-white rounded-2xl shadow-2xl relative overflow-hidden noise-bg"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-brand-red flex items-center justify-center rounded-xl text-white shadow-lg shadow-brand-red/20">
                  {activeSpot?.icon}
                </div>
                <h3 className="text-2xl font-bold">{activeSpot?.title}</h3>
              </div>
              
              <p className="text-white/70 text-lg leading-relaxed mb-8">
                {activeSpot?.description}
              </p>

              <div className="space-y-4 pt-6 border-t border-white/10">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-white/40">Khả năng đáp ứng</span>
                  <span className="text-brand-red font-bold">100% Custom</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-white/40">Thời gian thiết kế</span>
                  <span className="text-white">3-5 ngày</span>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 text-brand-red/5 w-32 h-32">
                {activeSpot?.icon}
              </div>
            </motion.div>

            <div className="grid grid-cols-2 gap-4">
               {hotspots.map((spot) => (
                 <button 
                  key={spot.id}
                  onClick={() => setActiveId(spot.id)}
                  className={`p-4 text-left border rounded-xl transition-all ${
                    activeId === spot.id ? 'border-brand-red bg-brand-red/5 ring-1 ring-brand-red' : 'border-gray-100 hover:border-gray-300'
                  }`}
                 >
                   <div className={`font-bold text-sm ${activeId === spot.id ? 'text-brand-red' : 'text-charcoal'}`}>
                    {spot.title}
                   </div>
                 </button>
               ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
