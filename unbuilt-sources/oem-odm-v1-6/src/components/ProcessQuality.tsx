import { motion } from "motion/react";
import { SectionTitle, GlassCard } from "./Common";
import { PROCESS_STEPS, QUALITY_STANDARDS } from "../data/landingData";
import { ChevronRight, FileSearch, ShieldCheck, Microscope, BadgeCheck } from "lucide-react";

export const Process = () => {
  return (
    <section id="process" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <SectionTitle 
          centered
          eyebrow="Quy trình chuyên nghiệp"
          title="Từ ý tưởng đến sản xuất hàng loạt"
          description="Sự rõ ràng trong từng bước giúp đảm bảo dự án đi đúng tiến độ và đạt chuẩn kỹ thuật ngay từ mẫu đầu tiên."
        />

        <div className="relative mt-20">
          {/* Timeline bar for desktop */}
          <div className="hidden lg:block absolute top-0 left-[50px] bottom-0 w-px bg-slate-200" />
          
          <div className="flex flex-col gap-16 sm:gap-24 relative">
            {PROCESS_STEPS.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col lg:flex-row gap-8 lg:gap-20 items-start relative"
              >
                {/* Step Number Bubble */}
                <div className="relative z-10">
                  <div className="w-[100px] h-[100px] bg-white border-4 border-slate-50 flex items-center justify-center shadow-lg group">
                    <span className="text-4xl font-black text-red-600 italic tracking-tighter group-hover:scale-110 transition-transform">
                      {step.step}
                    </span>
                  </div>
                </div>

                <div className="flex-1 pt-4">
                  <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
                    <h3 className="text-2xl font-bold text-slate-900">{step.title}</h3>
                    <div className="h-px bg-slate-200 flex-1 hidden md:block" />
                  </div>
                  
                  <p className="text-slate-600 text-lg mb-8 max-w-2xl leading-relaxed">
                    {step.desc}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="p-4 bg-white border border-slate-100 rounded-sm">
                      <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-2">Đầu vào của khách</span>
                      <p className="text-sm font-medium text-slate-700">{step.input}</p>
                    </div>
                    <div className="p-4 bg-red-50 border border-red-100 rounded-sm">
                      <span className="text-[10px] font-black uppercase tracking-widest text-red-400 block mb-2">Kết quả bước này</span>
                      <p className="text-sm font-bold text-red-900">{step.output}</p>
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

export const Quality = () => {
  return (
    <section id="quality" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-1/2">
            <SectionTitle 
              eyebrow="Chất lượng là cốt lõi"
              title="Kiểm soát 100% trước khi xuất xưởng"
              description="Để đảm bảo an toàn cháy nổ và độ bền, mọi khối pin đều phải vượt qua quy trình kiểm tra 4 giai đoạn khắt khe của PKGBattery."
            />
            
            <div className="space-y-6">
              {QUALITY_STANDARDS.map((item, idx) => (
                <div key={idx} className="flex gap-6 items-start p-6 bg-slate-50 border border-slate-100 hover:border-red-200 transition-colors rounded-sm">
                  <div className="w-12 h-12 bg-white flex items-center justify-center shrink-0 shadow-sm text-red-600">
                    {idx === 0 && <FileSearch size={24} />}
                    {idx === 1 && <Microscope size={24} />}
                    {idx === 2 && <ShieldCheck size={24} />}
                    {idx === 3 && <BadgeCheck size={24} />}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-1">{item.title}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 grid grid-cols-2 gap-4">
            <div className="space-y-4 pt-12">
              <div className="aspect-square bg-slate-100 rounded-sm overflow-hidden flex flex-col items-center justify-center p-6 text-center">
                 <span className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4 block">Chứng nhận</span>
                 <div className="text-3xl font-black text-slate-900 italic">UN38.3</div>
                 <div className="h-1 w-12 bg-red-600 mt-4 mx-auto" />
              </div>
              <div className="aspect-square bg-slate-900 rounded-sm flex flex-col items-center justify-center p-6 text-center text-white">
                 <div className="text-5xl font-black text-red-600 italic">ISO</div>
                 <div className="text-xs uppercase tracking-[0.3em] font-bold mt-2">Certified</div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="aspect-square bg-red-600 rounded-sm flex flex-col items-center justify-center p-6 text-center text-white">
                 <div className="text-6xl font-black italic opacity-50">QC</div>
                 <div className="text-sm font-bold uppercase tracking-widest mt-4">100% Test pass</div>
              </div>
              <div className="aspect-square bg-slate-50 border border-slate-200 rounded-sm flex flex-col items-center justify-center p-6 text-center">
                 <div className="text-2xl font-bold text-slate-900 mb-2 italic">RoHS & CE</div>
                 <p className="text-[10px] text-slate-500 uppercase leading-relaxed font-medium">Hồ sơ kỹ thuật đầy đủ cho thị trường EU</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
