import { motion } from "motion/react";
import { Cpu, Battery, Settings, Truck, Disc, Zap } from "lucide-react";

const services = [
  { title: "AGV & AMR", icon: Cpu, desc: "Tối ưu hóa thời gian sạc và runtime cho robot tự hành." },
  { title: "Xe nâng điện", icon: Truck, desc: "Thay thế pin Chì-Axit bằng Lithium công suất cao." },
  { title: "Xe Golf & Electric Vehicle", icon: Disc, desc: "Thiết kế mỏng nhẹ, dung lượng vượt trội." },
  { title: "Máy công nghiệp", icon: Settings, desc: "Tùy chỉnh linh hoạt theo không gian lắp đặt thiết bị." },
  { title: "Lưu trữ năng lượng", icon: Battery, desc: "Hệ thống ESS quy mô doanh nghiệp và hộ gia đình." },
  { title: "Thiết bị đặc thù", icon: Zap, desc: "Giải pháp nguồn điện cho các dự án nghiên cứu & OEM." },
];

export default function Solutions() {
  return (
    <section id="giải pháp" className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5 sticky top-32">
            <h2 className="text-sm font-bold text-brand uppercase tracking-[0.2em] mb-4">Chúng tôi làm gì</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-industrial-black mb-8 leading-tight tracking-tighter">
              Chúng tôi không bán pin đại trà. <br />
              Chúng tôi thiết kế hệ thống nguồn điện.
            </h3>
            <p className="text-lg text-industrial-gray leading-relaxed mb-10">
              Mọi máy móc đều có những yêu cầu riêng về dòng xả, môi trường làm việc và giao thức 
              giao tiếp. PKGBattery tập trung vào việc tùy biến hoàn toàn để đảm bảo hiệu suất tốt nhất.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-neutral-50 rounded-sm">
                <div className="text-3xl font-extrabold text-brand mb-1">500+</div>
                <div className="text-xs font-bold uppercase text-industrial-gray">Dự án tùy chỉnh</div>
              </div>
              <div className="p-6 bg-neutral-50 rounded-sm">
                <div className="text-3xl font-extrabold text-brand mb-1">100%</div>
                <div className="text-xs font-bold uppercase text-industrial-gray">Sản xuất tại VN</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 grid md:grid-cols-2 gap-px bg-neutral-100 border border-neutral-100 rounded-sm overflow-hidden">
            {services.map((service, i) => (
              <motion.div
                key={i}
                whileHover={{ backgroundColor: "#fafafa" }}
                className="bg-white p-12 flex flex-col gap-6 group transition-all"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-brand/5 text-brand group-hover:bg-brand group-hover:text-white transition-all rounded-sm">
                  <service.icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-industrial-black mb-3">{service.title}</h4>
                  <p className="text-industrial-gray text-sm leading-relaxed">{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
