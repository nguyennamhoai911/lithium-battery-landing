import { motion } from 'motion/react';
import { Truck, Cpu, Zap, ShoppingBag, Settings, Car } from 'lucide-react';

const segments = [
  {
    title: "Nhà sản xuất máy móc",
    description: "Cung cấp hệ thống năng lượng tích hợp cho các dòng máy công nghiệp chuyên dụng.",
    icon: <Settings className="w-8 h-8" />,
    image: "https://images.unsplash.com/photo-1565608438257-fac3c27be3d0?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Công ty AGV & Robot",
    description: "Giải pháp pin hiệu suất cao cho robot tự hành và hệ thống kho bãi thông minh.",
    icon: <Cpu className="w-8 h-8" />,
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Thiết bị Logistics",
    description: "Pin xe nâng, pallet jack và các thiết bị nâng hạ hoạt động bền bỉ 24/7.",
    icon: <Truck className="w-8 h-8" />,
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Xe điện chuyên dụng",
    description: "Hệ thống pin cho xe golf, xe điện sân bay và các phương tiện vận chuyển nội khu.",
    icon: <Car className="w-8 h-8" />,
    image: "https://images.unsplash.com/photo-1594833211520-21319760742f?q=80&w=2070&auto=format&fit=crop"
  },
];

export default function Segments() {
  return (
    <section className="py-24 bg-white overflow-hidden" id="segments">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 tracking-tight"
          >
            Giải pháp chuyên biệt cho <br/>
            <span className="text-brand-red">mọi ngành công nghiệp</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 text-lg leading-relaxed"
          >
            Chúng tôi không chỉ bán pin, chúng tôi cung cấp giải pháp năng lượng tối ưu được thiết kế riêng cho đặc thù vận hành của từng loại thiết bị.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-1 px-4 md:px-0">
          {segments.map((segment, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative h-[400px] overflow-hidden bg-charcoal"
            >
              <img 
                src={segment.image} 
                alt={segment.title}
                className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 opacity-50 group-hover:opacity-70"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent"></div>
              
              <div className="absolute inset-0 p-10 flex flex-col justify-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="mb-4 text-brand-red transform -translate-x-4 group-hover:translate-x-0 transition-transform duration-500 delay-100">
                  {segment.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">
                  {segment.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed max-w-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                  {segment.description}
                </p>
                
                <div className="mt-6 flex items-center gap-2 text-brand-red font-bold text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-500 delay-300">
                  Xem chi tiết <span className="text-lg">→</span>
                </div>
              </div>
              
              <div className="absolute top-0 right-0 w-px h-full bg-white/10 group-hover:bg-brand-red/50 transition-colors"></div>
              <div className="absolute bottom-0 left-0 h-px w-full bg-white/10 group-hover:bg-brand-red/50 transition-colors"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
