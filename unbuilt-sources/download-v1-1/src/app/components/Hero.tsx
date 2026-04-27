import { useState } from "react";
import { Search, ArrowRight, Headphones, Command } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { EnergyLines, RedScanLine } from "./EnergyLines";

const SUGGEST = [
  { title: "Datasheet pin xe nâng 48V 200Ah", meta: "Datasheet · PDF · Cập nhật 04/2026" },
  { title: "Catalogue dòng pin xe nâng 2026", meta: "Catalogue · PDF · 4.6 MB" },
  { title: "Hướng dẫn lắp đặt pin xe nâng 48V", meta: "Manual · PDF · Phiên bản 2.1" },
  { title: "Phần mềm PKG BMS Configurator dòng xe nâng", meta: "Software · ZIP · Phiên bản 3.2" },
];

const RECENT = ["datasheet xe nâng 48V", "phần mềm BMS", "manual AGV", "chứng chỉ UN38.3"];

export function Hero() {
  const [focused, setFocused] = useState(false);
  const [query, setQuery] = useState("");
  const showSuggest = focused && query.length > 0;
  const showRecent = focused && query.length === 0;

  return (
    <section className="relative pt-32 lg:pt-40 pb-20 lg:pb-28 overflow-hidden bg-white">
      <EnergyLines />
      <div className="absolute right-0 top-0 w-[55%] h-full pointer-events-none">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1687858490665-68306e08c364?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1400"
            alt="Pin lithium công nghiệp PKG"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/40 to-white" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-white/30" />
          <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#E11D2E]/40 to-transparent" />
        </div>
      </div>

      <div className="relative max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-[#E11D2E]" />
            <span className="tracking-[0.25em] text-[11px] text-black/70">PKG BATTERY · TRUNG TÂM TÀI LIỆU KỸ THUẬT</span>
          </div>
          <h1 className="text-[44px] lg:text-[68px] leading-[1.05] tracking-[-0.02em] text-black mb-6" style={{ fontWeight: 500 }}>
            Trung tâm tài liệu<br />
            <span className="relative inline-block">
              kỹ thuật
              <span className="absolute -bottom-2 left-0 right-0 h-[3px] bg-[#E11D2E]" />
            </span>
            <span className="text-black/30"> / Downloads</span>
          </h1>
          <p className="text-[17px] lg:text-[19px] leading-[1.55] text-black/65 max-w-2xl mb-10">
            Truy cập catalogue, datasheet, manual, phần mềm BMS, gói firmware và chứng chỉ chính thức cho hệ thống pin lithium công nghiệp PKG Battery — tải miễn phí, không cần đăng nhập.
          </p>

          <div className="relative max-w-2xl">
            <div
              className={`relative flex items-center bg-white border transition-all duration-300 ${
                focused ? "border-[#E11D2E] shadow-[0_0_0_4px_rgba(225,29,46,0.08)]" : "border-black/15"
              }`}
            >
              <Search className={`w-5 h-5 ml-5 transition-colors ${focused ? "text-[#E11D2E]" : "text-black/50"}`} />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onFocus={() => setFocused(true)}
                onBlur={() => setTimeout(() => setFocused(false), 150)}
                placeholder="Tìm theo mã sản phẩm, điện áp, loại tài liệu hoặc từ khóa…"
                className="flex-1 px-4 py-5 bg-transparent outline-none text-[15px] text-black placeholder:text-black/40"
              />
              <div className="hidden md:flex items-center gap-1 mr-3 px-2.5 py-1 border border-black/12 text-black/50 text-[11px] tracking-wide">
                <Command className="w-3 h-3" /> K
              </div>
              <button className="h-full px-7 py-5 bg-black text-white text-[14px] tracking-wide hover:bg-[#E11D2E] transition-colors flex items-center gap-2">
                Tìm kiếm
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {focused && (
              <div className="absolute left-0 right-0 top-full mt-2 bg-white border border-black/10 shadow-[0_24px_50px_-20px_rgba(0,0,0,0.18)] z-30">
                {showRecent && (
                  <div className="p-4">
                    <div className="text-[11px] tracking-[0.2em] text-black/45 mb-3">TÌM KIẾM GẦN ĐÂY</div>
                    <div className="flex flex-wrap gap-2">
                      {RECENT.map((r) => (
                        <button key={r} className="px-3 py-1.5 border border-black/10 text-[13px] hover:border-[#E11D2E] hover:text-[#E11D2E] transition-colors">
                          {r}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
                {showSuggest && (
                  <div>
                    <div className="px-5 pt-4 pb-2 text-[11px] tracking-[0.2em] text-black/45 flex items-center justify-between">
                      <span>GỢI Ý PHÙ HỢP</span>
                      <span className="text-black/40">Nhấn Enter để tìm</span>
                    </div>
                    {SUGGEST.map((s, i) => (
                      <button key={i} className="group w-full flex items-center gap-4 px-5 py-3 border-t border-black/5 text-left hover:bg-black/[0.03]">
                        <div className="w-1 h-8 bg-transparent group-hover:bg-[#E11D2E] transition-colors" />
                        <div className="flex-1 min-w-0">
                          <div className="text-[14px] text-black truncate">
                            {s.title.split(/(48V|forklift|xe nâng)/i).map((p, idx) =>
                              /48V|forklift|xe nâng/i.test(p) ? (
                                <mark key={idx} className="bg-[#E11D2E]/10 text-[#E11D2E] px-0.5">{p}</mark>
                              ) : (
                                <span key={idx}>{p}</span>
                              )
                            )}
                          </div>
                          <div className="text-[12px] text-black/50 mt-0.5">{s.meta}</div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-black/30 group-hover:text-[#E11D2E] group-hover:translate-x-0.5 transition-all" />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3 text-[13px] text-black/60">
            <span>Tìm phổ biến:</span>
            {["Pin xe nâng 48V", "Manual AGV", "Phần mềm BMS", "Chứng chỉ UN38.3"].map((t) => (
              <button key={t} className="hover:text-[#E11D2E] transition-colors">
                {t}
              </button>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            <a href="#library" className="group inline-flex items-center gap-2 text-[14px] tracking-wide">
              Duyệt toàn bộ tài liệu
              <span className="relative w-12 h-px bg-black/30 overflow-hidden">
                <span className="absolute inset-0 bg-[#E11D2E] -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
              </span>
            </a>
            <a href="#support" className="group inline-flex items-center gap-2 text-[14px] tracking-wide text-black/70 hover:text-black">
              <Headphones className="w-4 h-4" />
              Liên hệ hỗ trợ kỹ thuật
            </a>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-8 max-w-2xl">
            {[
              ["240+", "Tài liệu chính thức"],
              ["7", "Dòng sản phẩm"],
              ["3", "Ngôn ngữ"],
              ["24/7", "Hỗ trợ kỹ sư"],
            ].map(([k, v]) => (
              <div key={k}>
                <div className="text-[28px] tracking-tight" style={{ fontWeight: 500 }}>{k}</div>
                <div className="text-[12px] tracking-[0.15em] uppercase text-black/50 mt-1">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <RedScanLine className="bottom-0" />
    </section>
  );
}
