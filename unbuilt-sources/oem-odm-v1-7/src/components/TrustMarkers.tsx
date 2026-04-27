import { motion } from "motion/react";
import { Factory, ShieldCheck, Cpu, Settings, Users, Layers } from "lucide-react";

export default function TrustMarkers() {
  const reasons = [
    {
      title: "Nhà máy riêng tại Việt Nam",
      desc: "Kiểm soát trực tiếp tiến độ và chất lượng sản phẩm mà không qua trung gian.",
      icon: <Factory size={28} />,
    },
    {
      title: "Giải pháp Full Product",
      desc: "Không chỉ cung cấp linh kiện, chúng tôi làm ra sản phẩm hoàn thiện sẵn sàng vận hành.",
      icon: <Layers size={28} />,
    },
    {
      title: "Hỗ trợ R&D chuyên sâu",
      desc: "Đội ngũ kỹ sư đồng hành từ ý tưởng sơ khai đến bản vẽ kỹ thuật chi tiết.",
      icon: <Cpu size={28} />,
    },
    {
      title: "Kiểm soát quy trình nghiêm ngặt",
      desc: "Hệ thống quản lý chất lượng đầu vào, đầu ra đạt chuẩn công nghiệp cao nhất.",
      icon: <ShieldCheck size={28} />,
    },
  ];

  return (
    <section className="py-24 bg-white overflow-hidden" id="giải pháp">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-20 items-start">
          {/* Sticky Left Content */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-px bg-brand-red" />
              <span className="text-brand-red font-semibold text-sm uppercase tracking-widest">
                Tại sao chọn chúng tôi
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-8">
              Năng lực sản xuất <br /> 
              <span className="text-brand-dark/40">vững vàng từ nội lực.</span>
            </h2>
            <p className="text-brand-dark/60 text-lg leading-relaxed mb-10">
              PKGBattery không chỉ là đơn vị thương mại. Chúng tôi là đối tác sản xuất có nhà máy, đội ngũ kỹ thuật và quy trình kiểm soát thực tế tại Việt Nam.
            </p>
            <div className="bg-brand-gray p-8 rounded-2xl border-l-4 border-brand-red">
              <p className="font-display font-medium text-brand-dark italic">
                "Chúng tôi xây dựng niềm tin B2B bằng kết quả kiểm tra thực tế, không phải bằng lời hứa suông."
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-brand-dark/10" />
                <span className="text-xs font-bold uppercase tracking-tighter">Ban Giám Đốc Kỹ Thuật</span>
              </div>
            </div>
          </div>

          {/* Right Content - The Flow */}
          <div className="lg:col-span-7 space-y-12">
            {reasons.map((reason, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative flex gap-8 p-8 hover:bg-brand-gray transition-all duration-500 rounded-3xl border border-transparent hover:border-brand-dark/5"
              >
                <div className="shrink-0 w-16 h-16 rounded-2xl bg-white shadow-xl flex items-center justify-center text-brand-red group-hover:scale-110 transition-transform duration-500">
                  {reason.icon}
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2 text-brand-dark/20 font-display font-bold text-2xl">
                    <span>0{i + 1}</span>
                    <div className="h-px w-8 bg-current group-hover:w-12 group-hover:bg-brand-red transition-all" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-brand-red transition-colors">
                    {reason.title}
                  </h3>
                  <p className="text-brand-dark/60 leading-relaxed font-medium">
                    {reason.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
