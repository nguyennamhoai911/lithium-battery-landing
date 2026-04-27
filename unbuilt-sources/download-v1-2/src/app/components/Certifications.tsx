import { Check, ArrowRight } from "lucide-react";
import { SectionLabel, SectionHeading } from "./SectionLabel";

const GROUPS = [
  {
    label: "01",
    title: "Vận chuyển & An toàn",
    items: [
      { name: "UN38.3 Test Summary", meta: "PDF · 1.2 MB · 2026" },
      { name: "Phiếu an toàn vật liệu (SDS)", meta: "PDF · 0.9 MB · 2026" },
      { name: "Hướng dẫn xử lý pin lithium", meta: "PDF · 1.8 MB · 2025" },
    ],
  },
  {
    label: "02",
    title: "Chất lượng & Sản xuất",
    items: [
      { name: "Chứng chỉ ISO 9001", meta: "PDF · 0.6 MB · 2025" },
      { name: "Hồ sơ quy trình kiểm soát chất lượng", meta: "PDF · 2.4 MB · 2026" },
      { name: "Tham chiếu kiểm tra nhà máy", meta: "PDF · 1.1 MB · 2025" },
    ],
  },
  {
    label: "03",
    title: "Tuân thủ Sản phẩm",
    items: [
      { name: "Hồ sơ chứng nhận CE", meta: "PDF · 1.4 MB · 2026" },
      { name: "Tham chiếu RoHS / môi trường", meta: "PDF · 0.7 MB · 2025" },
      { name: "Báo cáo kiểm định theo dòng sản phẩm", meta: "PDF · 3.0 MB · 2026" },
    ],
  },
];

export function Certifications() {
  return (
    <section className="relative py-24 lg:py-32 bg-white">
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1440 800">
          {Array.from({ length: 30 }).map((_, i) => (
            <line key={i} x1="0" x2="1440" y1={i * 30} y2={i * 30} stroke="black" strokeWidth="0.3" strokeDasharray="2 8" />
          ))}
        </svg>
      </div>
      <div className="relative max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-10 mb-14 lg:mb-20">
          <div className="lg:col-span-7">
            <SectionLabel num="06" label="CHỨNG CHỈ & TUÂN THỦ" />
            <SectionHeading>
              Hồ sơ kiểm định,<br />
              an toàn & <span className="text-[#E60023]">tuân thủ</span>
            </SectionHeading>
          </div>
          <div className="lg:col-span-5 lg:pt-12">
            <p className="text-[16px] leading-[1.6] text-black/70">
              Hồ sơ chính thức phục vụ kiểm tra an toàn, vận chuyển, phê duyệt mua hàng và kiểm định kỹ thuật cho bộ phận kỹ thuật và pháp lý.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-1 bg-[#0A0A0A] border-y-2 border-[#0A0A0A]">
          {GROUPS.map((g) => (
            <div key={g.label} className="bg-white p-8 lg:p-10">
              <div className="flex items-center gap-3 mb-7">
                <span className="inline-flex items-center justify-center w-8 h-8 bg-[#0A0A0A] text-white text-[11px]" style={{ fontWeight: 700 }}>{g.label}</span>
                <div className="flex-1 h-0.5 bg-[#0A0A0A]" />
              </div>
              <h3 className="text-[24px] lg:text-[28px] tracking-[-0.02em] leading-[1.15] mb-8" style={{ fontWeight: 700 }}>{g.title}</h3>
              <ul className="space-y-0">
                {g.items.map((it, idx) => (
                  <li key={it.name} className="group">
                    <a href="#library" className={`flex items-start gap-4 py-4 ${idx > 0 ? "border-t-2 border-[#0A0A0A]/8" : ""} group-hover:bg-[#FAFAFA] -mx-2 px-2 transition-colors`}>
                      <span className="w-6 h-6 bg-[#E60023] flex items-center justify-center mt-0.5 shrink-0">
                        <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
                      </span>
                      <div className="flex-1 min-w-0">
                        <div className="text-[15px] leading-snug" style={{ fontWeight: 600 }}>{it.name}</div>
                        <div className="text-[12px] text-black/55 mt-1 tracking-wide" style={{ fontWeight: 500 }}>{it.meta}</div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-black/30 group-hover:text-[#E60023] group-hover:translate-x-1 transition-all" strokeWidth={2.5} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 max-w-3xl text-[13px] text-black/55 leading-relaxed">
          Toàn bộ hồ sơ kiểm định được duy trì bởi bộ phận tài liệu kỹ thuật của PKG Battery. Vui lòng liên hệ bộ phận hỗ trợ nếu dự án của bạn cần tài liệu chưa có trong danh sách công khai.
        </div>
      </div>
    </section>
  );
}
