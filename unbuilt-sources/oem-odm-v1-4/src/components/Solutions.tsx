import { motion } from "motion/react";

const solutions = [
  {
    num: "01",
    title: "Điện áp & dung lượng đúng nhu cầu",
    desc: "Tùy chỉnh chính xác dải điện áp (12V-700V) và dung lượng để tối ưu hóa hiệu suất thiết bị."
  },
  {
    num: "02",
    title: "Kích thước theo khoang máy",
    desc: "Thiết kế vỏ kim loại (Housing) chịu lực, chống nước IP67 phù hợp với mọi không gian lắp đặt."
  },
  {
    num: "03",
    title: "BMS thông minh, giao tiếp hệ thống",
    desc: "Hệ thống quản lý pin độc quyền tích hợp các giao thức CANBUS, Bluetooth để theo dõi thời gian thực."
  },
  {
    num: "04",
    title: "Tản nhiệt, an toàn, độ bền cao",
    desc: "Công nghệ hàn laser và tản nhiệt chủ động giúp pin hoạt động ổn định trong mọi điều kiện tải nặng."
  },
  {
    num: "05",
    title: "Sản xuất ổn định số lượng lớn",
    desc: "Quy trình QC nghiêm ngặt và năng lực cung ứng hàng ngàn bộ pin mỗi tháng cho đối tác OEM."
  }
];

export default function Solutions() {
  return (
    <section className="py-24 bg-brand-black relative">
      {/* Decorative vertical lines */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="container mx-auto h-full grid grid-cols-4 border-x border-white">
          <div className="border-r border-white" />
          <div className="border-r border-white" />
          <div className="border-r border-white" />
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-display font-bold text-white leading-tight"
          >
            Không bán pin đại trà. <br />
            <span className="text-brand-red">Chúng tôi xây giải pháp năng lượng</span> <br />
            phù hợp thiết bị của bạn.
          </motion.h2>
        </div>

        <div className="grid gap-px bg-white/10 border border-white/10">
          {solutions.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-brand-black p-12 flex flex-col lg:flex-row lg:items-center gap-12 group hover:bg-white/[0.02] transition-colors"
            >
              <div className="flex-shrink-0">
                <span className="text-8xl font-display font-black text-transparent stroke-1 stroke-white/20 group-hover:stroke-brand-red/40 transition-all duration-500">
                  {item.num}
                </span>
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-brand-red transition-colors">{item.title}</h3>
                <p className="text-lg text-brand-gray-muted leading-relaxed max-w-2xl">{item.desc}</p>
              </div>
              <div className="flex-shrink-0 hidden lg:block opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-12 h-px bg-brand-red" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
