import { motion } from "motion/react";
import { Battery, Zap, Shield, TrendingDown, Headphones, Settings } from "lucide-react";

export function WhyPKG() {
  const advantages = [
    {
      icon: Battery,
      title: "Tuổi thọ cao hơn",
      description: "Giải pháp pin Lithium giúp kéo dài chu kỳ sử dụng, giảm tần suất thay thế và tăng hiệu quả đầu tư.",
    },
    {
      icon: Zap,
      title: "Sạc nhanh hơn",
      description: "Rút ngắn thời gian chờ, tăng thời gian hoạt động của thiết bị trong thực tế vận hành.",
    },
    {
      icon: Shield,
      title: "An toàn vượt trội",
      description: "Thiết kế và kiểm soát chất lượng theo tiêu chuẩn cao, phù hợp môi trường công nghiệp đòi hỏi độ ổn định.",
    },
    {
      icon: TrendingDown,
      title: "Tối ưu chi phí dài hạn",
      description: "Chi phí đầu tư được bù đắp bằng hiệu suất vận hành, tuổi thọ và khả năng giảm thời gian dừng thiết bị.",
    },
    {
      icon: Headphones,
      title: "Hỗ trợ kỹ thuật nhanh",
      description: "Đội ngũ kỹ thuật sẵn sàng đồng hành trong quá trình triển khai, vận hành và xử lý yêu cầu thực tế.",
    },
    {
      icon: Settings,
      title: "OEM / ODM linh hoạt",
      description: "Khả năng tùy biến giải pháp theo nhu cầu doanh nghiệp, phù hợp nhiều mô hình ứng dụng khác nhau.",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-[#E5E5E5]/50">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <div className="w-12 h-1 bg-[#D61F26] mx-auto" />
          <h2 className="text-4xl md:text-5xl text-[#111111]">
            Why PKG Battery
          </h2>
          <p className="text-lg text-[#2B2B2B]/70">
            Lý do doanh nghiệp lựa chọn PKG Battery là đối tác năng lượng
          </p>
        </motion.div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              {/* Card */}
              <div className="h-full p-8 space-y-4 bg-white border border-[#E5E5E5] rounded-lg hover:border-[#D61F26]/30 transition-all duration-300">
                {/* Icon */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#D61F26]/10 to-[#D61F26]/5 flex items-center justify-center group-hover:from-[#D61F26]/20 group-hover:to-[#D61F26]/10 transition-all">
                    <item.icon className="w-6 h-6 text-[#D61F26]" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1 h-px bg-gradient-to-r from-[#D61F26]/30 to-transparent" />
                </div>

                {/* Content */}
                <h3 className="text-xl text-[#111111]">
                  {item.title}
                </h3>
                <p className="text-[#2B2B2B]/70 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
