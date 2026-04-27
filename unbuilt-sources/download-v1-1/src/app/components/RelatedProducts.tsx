import { ArrowUpRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const ITEMS = [
  {
    title: "Hệ thống pin xe nâng",
    desc: "Pack pin lithium hiệu năng cao cho xe nâng công nghiệp, sạc nhanh và tuổi thọ chu kỳ dài.",
    img: "https://images.unsplash.com/photo-1640545232337-5cb2c7b24ca8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900",
    spec: "48V – 80V · 200Ah – 600Ah",
  },
  {
    title: "Pin AGV / Robot",
    desc: "Hệ pin lithium nhỏ gọn cho nền tảng tự động hóa: phóng ổn định, giao tiếp linh hoạt, cycle life tin cậy.",
    img: "https://images.unsplash.com/photo-1732030373864-d37573915751?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900",
    spec: "24V – 48V · CAN / RS485",
  },
  {
    title: "Hệ thống lưu trữ ESS",
    desc: "Giải pháp lưu trữ năng lượng modular cho ứng dụng thương mại, công nghiệp và backup.",
    img: "https://images.unsplash.com/photo-1672624254120-ebbe190b3519?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900",
    spec: "Modular · 5kWh – 1MWh",
  },
  {
    title: "Hệ thống trạm sạc",
    desc: "Charger và hạ tầng sạc tương thích nền tảng pin lithium PKG cho vận hành liên tục.",
    img: "https://images.unsplash.com/photo-1737878324814-fe33c4179815?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900",
    spec: "On-board · Off-board · OPP",
  },
];

export function RelatedProducts() {
  return (
    <section className="relative py-24 lg:py-32 bg-white border-t border-black/8">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-5">
              <span className="text-[#E11D2E] text-[12px] tracking-[0.2em]">10 / SẢN PHẨM LIÊN QUAN</span>
              <div className="w-12 h-px bg-[#E11D2E]" />
            </div>
            <h2 className="text-[34px] lg:text-[44px] leading-[1.1] tracking-[-0.02em]" style={{ fontWeight: 500 }}>
              Khám phá hệ thống pin liên quan
            </h2>
          </div>
          <p className="lg:max-w-md text-[15px] leading-relaxed text-black/60">
            Sau khi tải tài liệu, tìm hiểu trực tiếp dòng sản phẩm tương ứng để đánh giá chuyên sâu hoặc xin báo giá kỹ thuật.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-black/8">
          {ITEMS.map((it, i) => (
            <a
              key={it.title}
              href="#products"
              className="group relative bg-white overflow-hidden"
            >
              <div className="aspect-[4/3] relative overflow-hidden bg-[#FAFAFA]">
                <ImageWithFallback
                  src={it.img}
                  alt={it.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
                <div className="absolute top-4 left-4 text-[10px] tracking-[0.25em] text-black/55 bg-white/80 px-2 py-1">
                  {String(i + 1).padStart(2, "0")} / SẢN PHẨM
                </div>
              </div>
              <div className="p-6 lg:p-7 relative">
                <div className="absolute left-0 top-0 right-0 h-px bg-[#E11D2E] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                <h3 className="text-[20px] tracking-tight leading-tight mb-2" style={{ fontWeight: 500 }}>
                  {it.title}
                </h3>
                <div className="text-[12px] tracking-[0.15em] text-[#E11D2E] mb-3">{it.spec}</div>
                <p className="text-[13.5px] leading-relaxed text-black/60 mb-5 max-h-0 group-hover:max-h-32 overflow-hidden transition-all duration-500">
                  {it.desc}
                </p>
                <div className="inline-flex items-center gap-2 text-[13px] tracking-wide">
                  Xem sản phẩm
                  <ArrowUpRight className="w-4 h-4 group-hover:rotate-12 group-hover:text-[#E11D2E] transition-all" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
