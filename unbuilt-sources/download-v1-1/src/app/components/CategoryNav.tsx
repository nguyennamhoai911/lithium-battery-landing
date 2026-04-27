import { useState } from "react";
import { ArrowRight } from "lucide-react";

const CATS = [
  { id: "forklift", name: "Pin xe nâng", desc: "Datasheet, manual và hướng dẫn sạc cho pin lithium xe nâng công nghiệp.", count: 24 },
  { id: "ev", name: "Pin xe điện", desc: "Tài liệu cho pin lithium xe điện du lịch và xe điện công nghiệp nhẹ.", count: 18 },
  { id: "agv", name: "Pin AGV / Robot", desc: "Tài liệu kỹ thuật cho hệ thống pin lithium dùng trong AGV và robot tự động hóa.", count: 16 },
  { id: "ess", name: "Hệ thống ESS", desc: "Tài liệu giải pháp lưu trữ năng lượng modular cho ứng dụng công nghiệp và backup.", count: 21 },
  { id: "charger", name: "Trạm sạc", desc: "Tài liệu trạm sạc và hạ tầng sạc tương thích nền tảng pin lithium PKG.", count: 12 },
  { id: "bms", name: "BMS & phần mềm", desc: "Phần mềm cấu hình, giám sát, firmware và ghi chú phiên bản BMS PKG.", count: 19 },
  { id: "oem", name: "Giải pháp OEM / ODM", desc: "Hồ sơ năng lực, tài liệu tham khảo và quy trình triển khai dự án OEM/ODM.", count: 9 },
];

export function CategoryNav() {
  const [active, setActive] = useState("forklift");
  const cur = CATS.find((c) => c.id === active)!;

  return (
    <section id="categories" className="relative py-24 lg:py-28 bg-[#FAFAFA] border-y border-black/8">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end mb-14">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-5">
              <span className="text-[#E11D2E] text-[12px] tracking-[0.2em]">02 / DANH MỤC SẢN PHẨM</span>
              <div className="w-12 h-px bg-[#E11D2E]" />
            </div>
            <h2 className="text-[34px] lg:text-[44px] leading-[1.1] tracking-[-0.02em]" style={{ fontWeight: 500 }}>
              Duyệt tài liệu theo dòng sản phẩm
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-[15px] leading-relaxed text-black/60">
              Mỗi dòng sản phẩm có bộ tài liệu độc lập gồm catalogue, datasheet, manual lắp đặt, manual vận hành, phần mềm và chứng chỉ tương ứng.
            </p>
          </div>
        </div>

        {/* Technical index strip */}
        <div className="relative">
          <div className="hidden lg:flex items-stretch border-t border-b border-black/15 bg-white overflow-x-auto">
            {CATS.map((c, i) => (
              <button
                key={c.id}
                onClick={() => setActive(c.id)}
                className={`relative flex-1 min-w-[160px] px-5 py-5 text-left transition-colors ${
                  active === c.id ? "bg-black text-white" : "hover:bg-black/[0.03]"
                } ${i > 0 ? "border-l border-black/10" : ""}`}
              >
                <div className={`text-[10px] tracking-[0.25em] mb-2 ${active === c.id ? "text-[#E11D2E]" : "text-black/40"}`}>
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="text-[14px] tracking-tight leading-tight" style={{ fontWeight: 500 }}>
                  {c.name}
                </div>
                <div className={`text-[11px] mt-2 ${active === c.id ? "text-white/60" : "text-black/45"}`}>
                  {c.count} tài liệu
                </div>
                {active === c.id && <div className="absolute -bottom-px left-0 right-0 h-0.5 bg-[#E11D2E]" />}
              </button>
            ))}
          </div>

          {/* Mobile pills */}
          <div className="lg:hidden flex gap-2 overflow-x-auto pb-2 -mx-1 px-1">
            {CATS.map((c) => (
              <button
                key={c.id}
                onClick={() => setActive(c.id)}
                className={`shrink-0 px-4 py-2.5 border text-[13px] ${
                  active === c.id ? "bg-black text-white border-black" : "border-black/15"
                }`}
              >
                {c.name}
              </button>
            ))}
          </div>

          {/* Active detail */}
          <div className="mt-10 lg:mt-12 grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7">
              <div className="text-[12px] tracking-[0.2em] text-[#E11D2E] mb-3">DANH MỤC ĐANG XEM</div>
              <h3 className="text-[28px] lg:text-[34px] tracking-tight mb-4" style={{ fontWeight: 500 }}>
                {cur.name}
              </h3>
              <p className="text-[15px] leading-relaxed text-black/65 max-w-2xl">{cur.desc}</p>
            </div>
            <div className="lg:col-span-5 flex flex-col gap-4">
              <div className="flex items-baseline gap-3 border-t border-black/10 pt-5">
                <span className="text-[44px] tracking-tight" style={{ fontWeight: 500 }}>{cur.count}</span>
                <span className="text-[13px] text-black/55 tracking-[0.15em] uppercase">tài liệu chính thức</span>
              </div>
              <a href="#library" className="group inline-flex items-center justify-between border border-black/15 px-5 py-4 hover:border-[#E11D2E] transition-colors">
                <span className="text-[14px] tracking-wide">Xem toàn bộ tài liệu danh mục</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 group-hover:text-[#E11D2E] transition-all" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
