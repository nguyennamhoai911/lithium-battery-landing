import { motion } from "motion/react";
import { SectionTitle, GlassCard } from "./Common";
import { PAIN_POINTS, AUDIENCE_GROUPS } from "../data/landingData";
import { Check, X } from "lucide-react";

export const PainPoints = () => {
  return (
    <section id="pain-points" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="lg:w-1/3 lg:sticky lg:top-32">
            <SectionTitle 
              eyebrow="Thấu hiểu thách thức"
              title="Pin không chỉ cần lớn. Pin phải khớp với cả hệ thống máy."
              description="Với dự án OEM/ODM, sai lệch một thông số nhỏ có thể làm máy chạy không ổn định hoặc phát sinh lỗi giao tiếp nghiêm trọng."
            />
          </div>
          
          <div className="lg:w-2/3 flex flex-col gap-8">
            {PAIN_POINTS.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative"
              >
                <div className="flex flex-col md:flex-row gap-6 p-8 border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-xl transition-all duration-300 rounded-sm">
                  <div className="w-12 h-12 bg-red-50 text-red-600 flex items-center justify-center shrink-0 rounded-sm">
                    <item.icon size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                    <div className="flex flex-col gap-4">
                      <div className="flex items-start gap-2">
                        <X size={18} className="text-red-500 mt-1 shrink-0" />
                        <p className="text-slate-500 text-sm leading-relaxed">{item.problem}</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <Check size={18} className="text-green-500 mt-1 shrink-0" />
                        <p className="text-slate-700 font-medium text-sm leading-relaxed">{item.solution}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export const Audience = () => {
  return (
    <section className="py-24 bg-slate-50 relative">
      <div className="container mx-auto px-4">
        <SectionTitle 
          centered
          eyebrow="Đối tượng phục vụ"
          title="Dành cho đơn vị cần giải pháp pin đặc thù"
          description="Chúng tôi không chỉ bán lẻ. Chúng tôi là cánh tay kỹ thuật nối dài cho bộ máy R&D của bạn."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {AUDIENCE_GROUPS.map((item, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -5 }}
              className="bg-white p-8 border border-slate-200 flex flex-col justify-between group transition-all"
            >
              <div>
                <div className="w-10 h-10 bg-slate-900 text-white flex items-center justify-center mb-6 group-hover:bg-red-600 transition-colors">
                  <item.icon size={20} />
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-4">{item.category}</h4>
                <p className="text-sm text-slate-500 leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-red-600 opacity-0 group-hover:opacity-100 transition-opacity">
                Xem giải pháp <Check size={14} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
