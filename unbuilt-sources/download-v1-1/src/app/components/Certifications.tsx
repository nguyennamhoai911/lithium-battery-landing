import { Check, ArrowRight } from "lucide-react";

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
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end mb-14">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-5">
              <span className="text-[#E11D2E] text-[12px] tracking-[0.2em]">06 / CHỨNG CHỈ & TUÂN THỦ</span>
              <div className="w-12 h-px bg-[#E11D2E]" />
            </div>
            <h2 className="text-[34px] lg:text-[44px] leading-[1.1] tracking-[-0.02em]" style={{ fontWeight: 500 }}>
              Hồ sơ kiểm định, an toàn và tuân thủ
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-[15px] leading-relaxed text-black/60">
              Truy cập hồ sơ chính thức phục vụ kiểm tra an toàn, vận chuyển, phê duyệt mua hàng và kiểm định kỹ thuật của bộ phận kỹ thuật và pháp lý.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-px bg-black/8 border-y border-black/8">
          {GROUPS.map((g) => (
            <div key={g.label} className="bg-white p-8 lg:p-10">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-[10px] tracking-[0.25em] text-black/45">NHÓM {g.label}</span>
                <div className="flex-1 h-px bg-black/10" />
              </div>
              <h3 className="text-[22px] tracking-tight leading-snug mb-7" style={{ fontWeight: 500 }}>{g.title}</h3>
              <ul className="space-y-5">
                {g.items.map((it) => (
                  <li key={it.name} className="group">
                    <a href="#library" className="flex items-start gap-3 py-2 border-t border-black/8 hover:border-black transition-colors">
                      <span className="w-5 h-5 border border-[#E11D2E] flex items-center justify-center mt-0.5 shrink-0">
                        <Check className="w-3 h-3 text-[#E11D2E]" />
                      </span>
                      <div className="flex-1 min-w-0">
                        <div className="text-[14.5px] leading-snug">{it.name}</div>
                        <div className="text-[12px] text-black/50 mt-1">{it.meta}</div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-black/30 group-hover:text-[#E11D2E] group-hover:translate-x-0.5 transition-all" />
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
