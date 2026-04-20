import { Award, Shield, Globe, Wrench, MapPin } from "lucide-react";
import { motion } from "motion/react";

export function TrustBar() {
  const badges = [
    { icon: Shield, text: "IEC 62619" },
    { icon: Shield, text: "UN38.3" },
    { icon: Award, text: "ISO Quality Standard" },
    { icon: Shield, text: "MIC Insurance" },
    { icon: MapPin, text: "Đại lý toàn quốc" },
    { icon: Wrench, text: "Hỗ trợ kỹ thuật nhanh" },
  ];

  return (
    <section className="py-12 bg-white border-b border-[#E5E5E5]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {badges.map((badge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center gap-2 text-center"
            >
              <badge.icon className="w-8 h-8 text-[#D61F26]" strokeWidth={1.5} />
              <span className="text-sm text-[#2B2B2B]">{badge.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
