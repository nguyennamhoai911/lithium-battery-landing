import { motion } from "motion/react";
import { Award, Shield, FileCheck, CheckCircle2 } from "lucide-react";

export function Certifications() {
  const certifications = [
    { icon: Shield, name: "IEC 62619" },
    { icon: Shield, name: "UN38.3" },
    { icon: Award, name: "ISO Quality Management" },
    { icon: FileCheck, name: "MIC Insurance" },
  ];

  const commitments = [
    "Quy trình kiểm định nội bộ nghiêm ngặt",
    "Cam kết hỗ trợ sau bán hàng",
  ];

  return (
    <section className="py-24 bg-white">
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
            Chất lượng được xác thực<br />bằng tiêu chuẩn rõ ràng
          </h2>
          <p className="text-lg text-[#2B2B2B]/70">
            PKG Battery xây dựng sản phẩm và quy trình vận hành dựa trên các tiêu chuẩn chất lượng, an toàn và kiểm định phù hợp với yêu cầu của môi trường công nghiệp hiện đại. Đây là nền tảng giúp khách hàng yên tâm khi lựa chọn giải pháp cho hoạt động dài hạn.
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center gap-4 p-8 bg-gradient-to-b from-[#E5E5E5]/30 to-white border border-[#E5E5E5] rounded-lg hover:border-[#D61F26]/30 transition-all"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#D61F26]/10 to-transparent flex items-center justify-center">
                <cert.icon className="w-8 h-8 text-[#D61F26]" strokeWidth={1.5} />
              </div>
              <span className="text-center text-[#111111]">{cert.name}</span>
            </motion.div>
          ))}
        </div>

        {/* Commitments */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto space-y-6"
        >
          {commitments.map((commitment, index) => (
            <div
              key={index}
              className="flex items-center gap-3 justify-center"
            >
              <CheckCircle2 className="w-5 h-5 text-[#D61F26] flex-shrink-0" />
              <span className="text-lg text-[#2B2B2B]">{commitment}</span>
            </div>
          ))}

          {/* Supporting Copy */}
          <p className="text-center text-[#2B2B2B]/60 italic pt-6">
            Từ an toàn vận hành đến độ ổn định dài hạn, chất lượng luôn là một phần cốt lõi trong mọi giải pháp của PKG Battery.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
