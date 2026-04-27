import { motion } from "motion/react";
import { SectionTitle } from "./Common";
import { CASE_STUDIES } from "../data/landingData";
import { AlertCircle, ShieldCheck, BadgeCheck, Zap } from "lucide-react";

export const Differentiation = () => {
  const comparisons = [
    {
      bad: "Phản hồi chậm 2-3 ngày, lệch múi giờ.",
      good: "Kỹ sư tại Việt Nam hỗ trợ 24/7, xử lý trực tiếp.",
      icon: Zap
    },
    {
      bad: "Chỉ bán các mẫu pin có sẵn (Standard).",
      good: "Thiết kế đo ni đóng giày cho thiết bị của bạn.",
      icon: ShieldCheck
    },
    {
      bad: "MOQ cực cao khi yêu cầu tùy chỉnh.",
      good: "Hỗ trợ mẫu thử và lô nhỏ (Pilot batch).",
      icon: BadgeCheck
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <SectionTitle 
              eyebrow="Tại sao là PKGBattery?"
              title="Khi chọn đối tác OEM, giá chưa phải là tất cả"
              description="Rủi ro lớn nhất là sai lệch kỹ thuật gây trì trệ dây chuyền. Chúng tôi tập trung vào sự chính xác và phản hồi nhanh để bạn yên tâm đưa sản phẩm ra thị trường."
            />
            
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 border-l-4 border-red-600 bg-red-50/50">
                 <p className="text-sm font-medium text-red-900 leading-relaxed italic">
                   "Chúng tôi không chạy đua về giá rẻ nhất. PKGBattery định vị là đối tác kỹ thuật cao cấp, đồng hành cùng sự an toàn và hiệu suất của thiết bị."
                 </p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="grid grid-cols-1 gap-4">
               {comparisons.map((c, i) => (
                 <div key={i} className="flex flex-col sm:flex-row border border-slate-100 rounded-sm overflow-hidden">
                    <div className="flex-1 p-6 bg-slate-50 text-slate-400 text-sm line-through decoration-slate-300">
                       {c.bad}
                    </div>
                    <div className="w-12 h-12 bg-white flex items-center justify-center -my-3 sm:my-0 sm:-mx-3 z-10 self-center rounded-full border border-slate-100 shadow-sm text-red-600">
                       <c.icon size={20} />
                    </div>
                    <div className="flex-1 p-6 bg-white text-slate-900 text-sm font-bold border-l border-slate-100">
                       {c.good}
                    </div>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const CaseStudies = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <SectionTitle 
          centered
          eyebrow="Thực tế triển khai"
          title="Những bài toán chúng tôi đã giải"
          description="Khám phá cách PKGBattery giúp các doanh nghiệp tối ưu hóa hệ thống năng lượng."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CASE_STUDIES.map((study, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              className="bg-white border border-slate-200 p-8 sm:p-12 rounded-sm shadow-sm hover:shadow-2xl transition-all"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-6 pb-6 border-b border-slate-100">{study.title}</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-xs font-black uppercase text-red-600 tracking-widest mb-2">Bối cảnh & Vấn đề</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{study.problem}</p>
                </div>
                <div>
                  <h4 className="text-xs font-black uppercase text-blue-600 tracking-widest mb-2">Giải pháp từ PKG</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{study.solution}</p>
                </div>
                <div className="pt-4 mt-4 bg-slate-50 p-4 border-l-4 border-green-500">
                  <h4 className="text-xs font-black uppercase text-green-600 tracking-widest mb-1">Kết quả</h4>
                  <p className="text-slate-900 font-bold text-base leading-relaxed">{study.result}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
