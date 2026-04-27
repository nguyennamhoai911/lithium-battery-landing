import { motion } from 'motion/react';
import { MessageSquare, FileSearch, Palette, ShieldAlert, PackageCheck, Send, BarChart3 } from 'lucide-react';

const steps = [
  {
    icon: <MessageSquare />,
    title: "Tiếp nhận yêu cầu",
    desc: "Khảo sát nhu cầu thực tế, không gian lắp đặt và thông số máy."
  },
  {
    icon: <FileSearch />,
    title: "Đề xuất kỹ thuật",
    desc: "Gửi báo cáo tư vấn cấu hình pin, lựa chọn cell và BMS tối ưu."
  },
  {
    icon: <Palette />,
    title: "Thiết kế mẫu",
    desc: "Thiết kế 3D housing và layout cell pin cho khách hàng duyệt."
  },
  {
    icon: <ShieldAlert />,
    title: "Kiểm thử (Lab Test)",
    desc: "Sản xuất mẫu và test nạp - xả, đo đạc ổn định trong phòng Lab."
  },
  {
    icon: <PackageCheck />,
    title: "Sản xuất hàng loạt",
    desc: "Quy trình lắp ráp chuẩn ISO với kiểm soát chất lượng đầu ra khắt khe."
  },
  {
    icon: <Send />,
    title: "Giao hàng & Hỗ trợ",
    desc: "Bàn giao tận nơi, hướng dẫn vận hành và kích hoạt bảo hành điện tử."
  }
];

export default function Process() {
  return (
    <section className="py-32 bg-gray-50 overflow-hidden" id="process">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 tracking-tight"
          >
            Quy trình OEM / ODM đạt chuẩn <br/>
            <span className="text-brand-red">Công nghiệp</span>
          </motion.h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Hệ thống hóa mọi bước công việc để đảm bảo sản phẩm ra đời với chất lượng đồng nhất và đúng tiến độ cam kết.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-[60px] left-0 w-full h-[2px] bg-gray-200">
            <motion.div 
               initial={{ width: 0 }}
               whileInView={{ width: '100%' }}
               viewport={{ once: true }}
               transition={{ duration: 2, ease: "easeInOut" }}
               className="h-full bg-brand-red"
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8 overflow-x-auto lg:overflow-visible pb-12">
            {steps.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative flex flex-col items-center lg:items-start group"
              >
                <div className="w-16 h-16 bg-white border-2 border-gray-100 rounded-2xl flex items-center justify-center text-charcoal mb-6 relative z-10 transition-all duration-300 group-hover:border-brand-red group-hover:bg-brand-red group-hover:text-white group-hover:-translate-y-2 group-hover:shadow-xl group-hover:shadow-brand-red/20 shadow-sm">
                  {step.icon}
                  <div className="absolute -top-3 -right-3 w-7 h-7 bg-charcoal text-white text-[10px] font-bold flex items-center justify-center rounded-full border-2 border-white">
                    0{i + 1}
                  </div>
                </div>
                
                <h4 className="font-bold text-center lg:text-left text-charcoal mb-3 group-hover:text-brand-red transition-colors">{step.title}</h4>
                <p className="text-xs text-center lg:text-left text-gray-500 leading-relaxed max-w-[150px]">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Real Factory Teaser */}
        <div className="mt-32 relative group cursor-pointer overflow-hidden rounded-[2rem] shadow-2xl border-shadow" id="factory">
            <img 
              src="https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?q=80&w=2076&auto=format&fit=crop" 
              alt="PKGBattery Factory Floor" 
              className="w-full h-[500px] object-cover transition-all duration-1000 group-hover:scale-105 brightness-50 grayscale group-hover:grayscale-0 group-hover:brightness-75"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent"></div>
            
            <div className="absolute inset-0 p-12 flex flex-col justify-end">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                <div className="max-w-xl">
                  <div className="text-brand-red font-bold text-sm tracking-widest uppercase mb-4">Nhà máy & Năng lực</div>
                  <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    Sản xuất thật. <br/> Giá trị thật.
                  </h3>
                  <p className="text-white/70 text-lg">
                    PKGBattery sở hữu dây chuyền lắp ráp hiện đại tại Việt Nam với hệ thống kiểm soát cell pin tự động và phòng lab thử nghiệm tiêu chuẩn.
                  </p>
                </div>
                
                <div className="flex gap-12">
                   <div>
                     <div className="text-brand-red text-4xl font-bold mb-1">5,000+</div>
                     <div className="text-white/40 text-xs uppercase tracking-widest font-bold">Pack pin / Tháng</div>
                   </div>
                   <div>
                     <div className="text-brand-red text-4xl font-bold mb-1">1,000m²</div>
                     <div className="text-white/40 text-xs uppercase tracking-widest font-bold">Diện tích nhà máy</div>
                   </div>
                </div>
              </div>
            </div>
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-brand-red/90 rounded-full flex items-center justify-center text-white scale-0 group-hover:scale-100 transition-all duration-500 shadow-2xl shadow-brand-red/50">
               <span className="font-bold text-xs">XEM CLIP</span>
            </div>
        </div>
      </div>
    </section>
  );
}
