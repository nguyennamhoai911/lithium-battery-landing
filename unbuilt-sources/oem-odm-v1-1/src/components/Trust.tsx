import { motion } from "motion/react";
import { CheckCircle } from "lucide-react";

export default function Trust() {
  return (
    <section className="bg-white py-32 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-10">
            <div>
              <h2 className="text-sm font-bold text-brand uppercase tracking-[0.2em] mb-4">Năng lục sản xuất</h2>
              <h3 className="text-4xl md:text-5xl font-extrabold text-industrial-black tracking-tighter mb-8 leading-tight">
                Hệ thống QC đa lớp & <br /> Dây chuyền hiện đại
              </h3>
              <p className="text-lg text-industrial-gray leading-relaxed">
                Tọa lạc tại trung tâm công nghiệp Việt Nam, nhà máy PKGBattery vận hành nghiêm ngặt 
                theo tiêu chuẩn ISO. Mỗi pack pin trước khi xuất xưởng đều trải qua quy trình 
                test lão hóa và kiểm tra xả nạp 100%.
              </p>
            </div>

            <div className="space-y-6">
              {[
                "Kiểm tra nội trở Cell Pin bằng máy tự động.",
                "Hàn Laser cực chính xác, giảm thiểu điện trở tiếp xúc.",
                "Tự động hóa 80% quy trình lắp ráp BMS.",
                "Phòng Lab chuyên dụng cho các bài test va đập & nhiệt độ.",
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-6 h-6 rounded-full bg-brand/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-brand" />
                  </div>
                  <span className="text-industrial-black font-semibold">{text}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-10 pt-10 border-t border-neutral-100">
              <div>
                <span className="text-5xl font-black text-brand tracking-tighter">2,000+</span>
                <p className="text-xs font-bold text-industrial-gray uppercase mt-2">M2 Nhà xưởng</p>
              </div>
              <div>
                <span className="text-5xl font-black text-brand tracking-tighter">50,000</span>
                <p className="text-xs font-bold text-industrial-gray uppercase mt-2">Pack pin / Năm</p>
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-sm overflow-hidden shadow-2xl relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1565514020179-026b92b2d70b?auto=format&fit=crop&q=80&w=1000" 
                alt="Battery Factory" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-brand/10 mix-blend-overlay" />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-10 -left-10 bg-industrial-black p-8 text-white rounded-sm shadow-2xl z-20 hidden md:block">
              <p className="text-sm font-bold text-brand uppercase tracking-widest mb-2">Vietnam Factory</p>
              <p className="text-3xl font-extrabold tracking-tighter">Sản xuất tận gốc. <br /> Giá trị thật.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
