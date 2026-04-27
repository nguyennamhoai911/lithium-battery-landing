import { motion } from 'motion/react';
import { Check, X, ShieldCheck, Zap, Factory, Headphones } from 'lucide-react';

const comparisons = [
  {
    feature: "Phản hồi báo giá & kỹ thuật",
    pkg: "Dưới 24h với hỗ trợ kỹ sư trực tiếp",
    others: "3-5 ngày qua email kinh doanh"
  },
  {
    feature: "Khả năng làm mẫu (Prototype)",
    pkg: "Hỗ trợ 1-2 mẫu demo nhanh chóng",
    others: "Thường yêu cầu số lượng lớn (MOQ)"
  },
  {
    feature: "Tùy chỉnh BMS chuyên sâu",
    pkg: "Viết firmware riêng cho từng dự án",
    others: "Sử dụng BMS có sẵn cấu hình cứng"
  },
  {
    feature: "Thăm nhà máy & Đối soát",
    pkg: "Luôn sẵn sàng đón tiếp tại Bình Dương",
    others: "Khó thăm trực tiếp nếu là đại lý/trade"
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-32 bg-white overflow-hidden" id="why-choose-us">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                Vì sao các doanh nghiệp chọn <span className="text-brand-red">PKGBattery?</span>
              </h2>
              <p className="text-gray-500 text-lg mb-12">
                Chúng tôi không cạnh tranh bằng giá rẻ nhất. Chúng tôi cạnh tranh bằng sự <span className="font-bold text-charcoal">an tâm tuyệt đối</span> và <span className="font-bold text-charcoal">hiệu quả vận hành</span> của khách hàng.
              </p>

              <div className="space-y-6">
                {[
                  { icon: <ShieldCheck />, title: "Linh kiện loại A", desc: "100% Cell pin mới từ các thương hiệu lớn EVE, CATL, CALB." },
                  { icon: <Factory />, title: "Nhà máy tại Việt Nam", desc: "Dễ dàng kiểm soát tiến độ, chất lượng và hỗ trợ kỹ thuật." },
                  { icon: <Headphones />, title: "Bảo hành tận tâm", desc: "Xử lý sự cố trong vòng 48h trên toàn quốc." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors">
                    <div className="w-12 h-12 bg-charcoal text-brand-red flex items-center justify-center rounded-lg shadow-lg shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-charcoal text-lg">{item.title}</h4>
                      <p className="text-gray-500 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-charcoal rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden"
          >
             <div className="absolute top-0 right-0 w-32 h-32 bg-brand-red/10 blur-3xl rounded-full"></div>
             <table className="w-full">
               <thead>
                 <tr className="border-b border-white/10">
                   <th className="pb-6 text-left text-xs uppercase tracking-widest text-white/40 font-bold">So sánh năng lực</th>
                   <th className="pb-6 text-left text-xs uppercase tracking-widest text-brand-red font-bold">PKGBATTERY</th>
                   <th className="pb-6 text-left text-xs uppercase tracking-widest text-white/20 font-bold hidden md:table-cell">Nhà cung cấp khác</th>
                 </tr>
               </thead>
               <tbody className="divide-y divide-white/5">
                 {comparisons.map((row, i) => (
                   <tr key={i} className="group">
                     <td className="py-6 pr-4 align-top">
                        <span className="text-sm font-medium text-white/50 group-hover:text-white transition-colors">{row.feature}</span>
                     </td>
                     <td className="py-6 pr-4 align-top">
                        <div className="flex items-start gap-2">
                          <Check className="text-brand-red w-4 h-4 mt-0.5" />
                          <span className="text-sm font-bold text-white">{row.pkg}</span>
                        </div>
                     </td>
                     <td className="py-6 align-top opacity-30 group-hover:opacity-100 transition-opacity hidden md:table-cell">
                        <div className="flex items-start gap-2">
                          <X className="text-white/40 w-4 h-4 mt-0.5" />
                          <span className="text-xs text-white/60">{row.others}</span>
                        </div>
                     </td>
                   </tr>
                 ))}
               </tbody>
             </table>
             
             <div className="mt-10 p-6 bg-white/5 rounded-xl border border-white/10">
               <div className="text-xs text-white/40 uppercase tracking-widest mb-4">Chứng nhận năng lực</div>
               <div className="flex flex-wrap gap-6 grayscale opacity-50">
                 {['ISO 9001', 'UN 38.3', 'CE', 'RoHS'].map((cert) => (
                   <span key={cert} className="text-sm font-bold border border-white/20 px-3 py-1 rounded">{cert}</span>
                 ))}
               </div>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
