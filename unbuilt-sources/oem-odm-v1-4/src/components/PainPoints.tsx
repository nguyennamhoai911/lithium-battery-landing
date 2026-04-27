import { motion } from "motion/react";
import { Maximize2, Zap, Hourglass, ThermometerSnowflake, Network } from "lucide-react";

const points = [
  {
    icon: Maximize2,
    title: "Kích thước giới hạn",
    desc: "Khoang chứa pin quá hẹp hoặc có hình dạng phức tạp không thể dùng pin chuẩn."
  },
  {
    icon: Zap,
    title: "Công suất xả cao",
    desc: "Thiết bị cần dòng xả lớn tức thời mà các dòng pin dân dụng không đáp ứng được."
  },
  {
    icon: Hourglass,
    title: "Chu kỳ sạc liên tục",
    desc: "Yêu cầu tuổi thọ cao (3000+ chu kỳ) để tối ưu chi phí vận hành cho doanh nghiệp."
  },
  {
    icon: ThermometerSnowflake,
    title: "Môi trường khắc nghiệt",
    desc: "Hoạt động trong môi trường rung lắc mạnh, nhiệt độ cao hoặc kho lạnh âm độ."
  },
  {
    icon: Network,
    title: "Giao tiếp BUS / BMS",
    desc: "Cần tích hợp sâu với hệ thống điều khiển của máy (CANBUS, RS485, SMBus)."
  }
];

export default function PainPoints() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-sm font-bold text-brand-red tracking-[0.2em] uppercase mb-4">THÁCH THỨC DOANH NGHIỆP</h2>
              <h3 className="text-4xl lg:text-5xl font-display font-bold text-brand-black mb-6 leading-tight">
                Khi pin tiêu chuẩn <br />
                <span className="text-brand-gray-muted">không còn phù hợp</span>
              </h3>
              <p className="text-lg text-brand-gray-text leading-relaxed mb-8 max-w-md">
                Nhiều doanh nghiệp gặp giới hạn khi dùng pin đại trà: không vừa kích thước, sai điện áp, runtime yếu hoặc không thể kết nối với phần mềm quản lý máy.
              </p>
              
              <div className="relative group cursor-pointer overflow-hidden rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=800" 
                  alt="Industrial Machinery" 
                  className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-brand-black/80 to-transparent flex items-end p-8">
                  <p className="text-white font-medium italic">"Mỗi loại máy móc công nghiệp là một bài toán năng lượng riêng biệt."</p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:w-1/2 grid gap-6">
            {points.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-6 p-6 rounded-sm hover:bg-brand-gray-light transition-colors group border-l-2 border-transparent hover:border-brand-red"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full border border-brand-red/20 flex items-center justify-center text-brand-red group-hover:bg-brand-red group-hover:text-white transition-all duration-300">
                    <item.icon className="w-6 h-6" />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-brand-black mb-2">{item.title}</h4>
                  <p className="text-brand-gray-text leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-20 p-12 bg-brand-black text-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-1 h-full bg-brand-red" />
          <h4 className="text-3xl lg:text-4xl font-display font-medium text-white italic">
            "Đó là lúc doanh nghiệp cần một đối tác <span className="text-brand-red border-b-2 border-brand-red">custom thực sự</span>."
          </h4>
        </motion.div>
      </div>
    </section>
  );
}
