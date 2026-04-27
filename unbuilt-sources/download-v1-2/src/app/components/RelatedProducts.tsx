import { ArrowUpRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { SectionLabel, SectionHeading } from "./SectionLabel";

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
    <section className="relative py-24 lg:py-32 bg-white border-t-2 border-[#0A0A0A]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-10 mb-14 lg:mb-20">
          <div className="lg:col-span-7">
            <SectionLabel num="10" label="SẢN PHẨM LIÊN QUAN" />
            <SectionHeading>
              Khám phá<br />
              <span className="text-[#E60023]">hệ thống pin</span>
            </SectionHeading>
          </div>
          <div className="lg:col-span-5 lg:pt-12">
            <p className="text-[16px] leading-[1.6] text-black/70">
              Sau khi tải tài liệu, tìm hiểu trực tiếp dòng sản phẩm tương ứng để đánh giá chuyên sâu hoặc xin báo giá kỹ thuật.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1 bg-[#0A0A0A] border-y-2 border-[#0A0A0A]">
          {ITEMS.map((it, i) => (
            <a
              key={it.title}
              href="#products"
              className="group relative bg-white overflow-hidden flex flex-col"
            >
              <div className="aspect-[4/3] relative overflow-hidden bg-[#0A0A0A]">
                <ImageWithFallback
                  src={it.img}
                  alt={it.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-[#0A0A0A]/30 group-hover:bg-[#0A0A0A]/10 transition-colors" />
                <div className="absolute top-4 left-4 px-2.5 py-1.5 bg-white text-[10px] tracking-[0.25em] text-[#0A0A0A]" style={{ fontWeight: 700 }}>
                  {String(i + 1).padStart(2, "0")} / SẢN PHẨM
                </div>
                <div className="absolute bottom-0 left-0 h-1 bg-[#E60023] w-0 group-hover:w-full transition-all duration-500" />
              </div>
              <div className="p-6 lg:p-7 flex-1 flex flex-col">
                <div className="text-[11px] tracking-[0.18em] text-[#E60023] mb-2" style={{ fontWeight: 700 }}>{it.spec}</div>
                <h3 className="text-[22px] tracking-[-0.01em] leading-[1.2] mb-3" style={{ fontWeight: 700 }}>
                  {it.title}
                </h3>
                <p className="text-[13.5px] leading-[1.6] text-black/65 mb-5 flex-1">
                  {it.desc}
                </p>
                <div className="inline-flex items-center gap-2 text-[13px] tracking-wide pt-4 border-t-2 border-[#0A0A0A] group-hover:text-[#E60023] transition-colors" style={{ fontWeight: 700 }}>
                  Xem sản phẩm
                  <ArrowUpRight className="w-5 h-5 group-hover:rotate-12 transition-transform" strokeWidth={2.5} />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
