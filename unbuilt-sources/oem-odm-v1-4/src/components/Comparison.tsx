import { motion } from "motion/react";
import { Check, X, ShieldCheck, Globe, Zap, Users } from "lucide-react";

export default function Comparison() {
  return (
    <section className="py-24 bg-brand-gray-light">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-brand-black mb-6">
            Lựa chọn linh hoạt hơn <br />
            <span className="text-brand-red">cho đối tác quốc tế</span>
          </h2>
          <p className="text-brand-gray-text text-lg">
            Sản xuất tại Việt Nam không chỉ tối ưu về logistics mà còn là sự đảm bảo về chất lượng và khả năng hỗ trợ tại chỗ.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-px bg-brand-gray-muted/30 border border-brand-gray-muted/30">
          {/* PKGBattery Column */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white p-10 lg:p-16 relative"
          >
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 bg-brand-red rounded-sm flex items-center justify-center text-white font-bold">PKG</div>
              <h4 className="text-2xl font-bold uppercase tracking-tight">PKGBattery Solutions</h4>
            </div>

            <ul className="space-y-6">
              {[
                { icon: Zap, text: "Giao tiếp & Phản hồi kỹ thuật trong 24h" },
                { icon: Users, text: "Hỗ trợ trực tiếp từ đội ngũ kỹ sư tại Việt Nam" },
                { icon: Globe, text: "Dễ dàng kiểm tra nhà máy & giám sát sản xuất" },
                { icon: ShieldCheck, text: "Linh hoạt số lượng đặt hàng (MOQ)" },
                { icon: Check, text: "Cam kết chất lượng cell loại A từ nguồn tin cậy" }
              ].map((item, idx) => (
                <li key={idx} className="flex gap-4 items-start">
                  <div className="mt-1 w-6 h-6 rounded-full bg-green-50 flex items-center justify-center text-green-600 flex-shrink-0">
                    <Check className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-brand-black">{item.text}</span>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Generic Supplier Column */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white p-10 lg:p-16 relative"
          >
            <div className="flex items-center gap-4 mb-10 opacity-50">
              <div className="w-12 h-12 bg-brand-gray-muted rounded-sm flex items-center justify-center text-white font-bold">GEN</div>
              <h4 className="text-2xl font-bold uppercase tracking-tight text-brand-gray-muted">Generic Supplier</h4>
            </div>

            <ul className="space-y-6 opacity-60">
              {[
                "Thời gian phản hồi chậm do rào cản ngôn ngữ",
                "Khó khăn trong việc bảo trì & bảo hành tại chỗ",
                "Khó kiểm soát chất lượng đầu vào của cell",
                "Quy trình thanh toán & vận chuyển phức tạp",
                "MOQ cao, thiếu sự linh hoạt trong thiết kế"
              ].map((text, idx) => (
                <li key={idx} className="flex gap-4 items-start">
                  <div className="mt-1 w-6 h-6 rounded-full bg-red-50 flex items-center justify-center text-red-400 flex-shrink-0">
                    <X className="w-4 h-4" />
                  </div>
                  <span className="text-brand-gray-text font-medium">{text}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
        
        <div className="mt-12 text-center">
            <p className="text-sm text-brand-gray-muted italic">
                * Chúng tôi không chỉ là nhà cung cấp, chúng tôi là đối tác kỹ thuật đồng hành cùng sản phẩm của bạn.
            </p>
        </div>
      </div>
    </section>
  );
}
