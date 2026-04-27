import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { SectionLabel, SectionHeading } from "./SectionLabel";

const CATS = [
  { id: "forklift", name: "Pin xe nâng", desc: "Datasheet, manual và hướng dẫn sạc cho pin lithium xe nâng công nghiệp tải trọng cao.", count: 24 },
  { id: "ev", name: "Pin xe điện", desc: "Tài liệu cho pin lithium xe điện du lịch và xe điện công nghiệp nhẹ.", count: 18 },
  { id: "agv", name: "Pin AGV / Robot", desc: "Tài liệu cho hệ pin lithium dùng trong AGV và robot tự động hóa nhà máy.", count: 16 },
  { id: "ess", name: "Hệ thống ESS", desc: "Tài liệu giải pháp lưu trữ năng lượng modular cho công nghiệp và backup.", count: 21 },
  { id: "charger", name: "Trạm sạc", desc: "Tài liệu trạm sạc và hạ tầng sạc tương thích nền tảng pin lithium PKG.", count: 12 },
  { id: "bms", name: "BMS & phần mềm", desc: "Phần mềm cấu hình, giám sát, firmware và ghi chú phiên bản BMS PKG.", count: 19 },
  { id: "oem", name: "Giải pháp OEM / ODM", desc: "Hồ sơ năng lực, tài liệu tham khảo và quy trình triển khai dự án OEM/ODM.", count: 9 },
];

export function CategoryNav() {
  const [active, setActive] = useState("forklift");
  const cur = CATS.find((c) => c.id === active)!;
  const idx = CATS.findIndex((c) => c.id === active);

  return (
    <section id="categories" className="relative py-24 lg:py-32 bg-[#F5F5F5]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-10 mb-14 lg:mb-20">
          <div className="lg:col-span-7">
            <SectionLabel num="02" label="DANH MỤC SẢN PHẨM" />
            <SectionHeading>
              Duyệt tài liệu theo<br />
              <span className="text-[#E60023]">dòng sản phẩm</span>
            </SectionHeading>
          </div>
          <div className="lg:col-span-5 lg:pt-12">
            <p className="text-[16px] leading-[1.6] text-black/70">
              Mỗi dòng sản phẩm có bộ tài liệu độc lập gồm catalogue, datasheet, manual lắp đặt, manual vận hành, phần mềm và chứng chỉ tương ứng.
            </p>
          </div>
        </div>

        {/* High-contrast tab bar */}
        <div className="hidden lg:flex items-stretch border-y-2 border-[#0A0A0A] bg-white">
          {CATS.map((c, i) => (
            <button
              key={c.id}
              onClick={() => setActive(c.id)}
              className={`relative flex-1 min-w-[140px] px-5 py-6 text-left transition-all ${
                active === c.id ? "bg-[#0A0A0A] text-white" : "hover:bg-[#FAFAFA]"
              } ${i > 0 ? "border-l-2 border-[#0A0A0A]/10" : ""}`}
            >
              <div className={`text-[11px] tracking-[0.25em] mb-3 ${active === c.id ? "text-[#E60023]" : "text-black/40"}`} style={{ fontWeight: 700 }}>
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="text-[15px] tracking-tight leading-tight" style={{ fontWeight: 700 }}>
                {c.name}
              </div>
              <div className={`text-[11px] mt-3 tracking-[0.15em] ${active === c.id ? "text-white/55" : "text-black/55"}`} style={{ fontWeight: 600 }}>
                {c.count} TÀI LIỆU
              </div>
              {active === c.id && <div className="absolute -bottom-0.5 left-0 right-0 h-1 bg-[#E60023]" />}
            </button>
          ))}
        </div>

        {/* Mobile pills */}
        <div className="lg:hidden flex gap-2 overflow-x-auto pb-2 -mx-1 px-1">
          {CATS.map((c) => (
            <button
              key={c.id}
              onClick={() => setActive(c.id)}
              className={`shrink-0 px-4 py-3 border-2 text-[13px] ${
                active === c.id ? "bg-[#0A0A0A] text-white border-[#0A0A0A]" : "border-[#0A0A0A]/20"
              }`}
              style={{ fontWeight: 600 }}
            >
              {c.name}
            </button>
          ))}
        </div>

        {/* Active detail */}
        <div className="mt-10 lg:mt-14 grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1 h-6 bg-[#E60023]" />
              <span className="text-[11px] tracking-[0.25em] text-[#E60023]" style={{ fontWeight: 700 }}>ĐANG XEM · {String(idx + 1).padStart(2, "0")} / 07</span>
            </div>
            <h3 className="text-[36px] lg:text-[48px] tracking-[-0.025em] mb-4 leading-[1.05]" style={{ fontWeight: 700 }}>
              {cur.name}
            </h3>
            <p className="text-[16px] leading-[1.65] text-black/70 max-w-2xl">{cur.desc}</p>
          </div>
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="bg-[#0A0A0A] text-white p-7 lg:p-8">
              <div className="text-[11px] tracking-[0.25em] text-[#E60023] mb-2" style={{ fontWeight: 700 }}>TỔNG TÀI LIỆU</div>
              <div className="flex items-baseline gap-3 mb-1">
                <span className="text-[80px] leading-none tracking-[-0.04em]" style={{ fontWeight: 700 }}>{cur.count}</span>
                <span className="text-[14px] text-white/55 tracking-[0.15em] uppercase pb-2" style={{ fontWeight: 600 }}>files</span>
              </div>
            </div>
            <a href="#library" className="group flex items-center justify-between border-2 border-[#0A0A0A] bg-white px-6 py-5 hover:bg-[#0A0A0A] hover:text-white transition-colors">
              <span className="text-[14px] tracking-wide" style={{ fontWeight: 700 }}>Xem toàn bộ tài liệu danh mục</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" strokeWidth={2.5} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
