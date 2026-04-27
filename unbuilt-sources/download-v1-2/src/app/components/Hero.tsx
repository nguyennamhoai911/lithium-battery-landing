import { useState } from "react";
import { Search, ArrowRight, Headphones, Command, ArrowDown } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const SUGGEST = [
  { title: "Datasheet pin xe nâng 48V 200Ah", meta: "Datasheet · PDF · 04/2026" },
  { title: "Catalogue dòng pin xe nâng 2026", meta: "Catalogue · PDF · 4.6 MB" },
  { title: "Manual lắp đặt pin xe nâng 48V", meta: "Manual · PDF · v2.1" },
  { title: "PKG BMS Configurator dòng xe nâng", meta: "Software · ZIP · v3.2" },
];

const RECENT = ["datasheet xe nâng 48V", "phần mềm BMS", "manual AGV", "chứng chỉ UN38.3"];

export function Hero() {
  const [focused, setFocused] = useState(false);
  const [query, setQuery] = useState("");
  const showSuggest = focused && query.length > 0;
  const showRecent = focused && query.length === 0;

  return (
    <section className="relative pt-28 lg:pt-36 pb-0 overflow-hidden bg-white">
      <div className="relative max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-end pb-16 lg:pb-24">
          <div className="lg:col-span-7 relative">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-2 h-2 bg-[#E60023]" />
              <span className="tracking-[0.28em] text-[11px] text-black" style={{ fontWeight: 600 }}>
                PKG BATTERY · TECHNICAL RESOURCES
              </span>
              <div className="flex-1 h-px bg-black/20 max-w-[100px]" />
            </div>

            <h1 className="text-[52px] sm:text-[68px] lg:text-[92px] leading-[0.95] tracking-[-0.035em] text-[#0A0A0A] mb-8" style={{ fontWeight: 700 }}>
              Trung tâm<br />
              tài liệu<br />
              <span className="relative inline-block">
                <span className="relative z-10 text-white px-3">kỹ thuật</span>
                <span className="absolute inset-0 bg-[#E60023]" />
              </span>
            </h1>

            <p className="text-[17px] lg:text-[19px] leading-[1.55] text-black/75 max-w-2xl mb-10" style={{ fontWeight: 400 }}>
              Catalogue, datasheet, manual, phần mềm BMS, gói firmware và chứng chỉ chính thức cho hệ thống pin lithium công nghiệp PKG Battery.{" "}
              <span className="text-[#0A0A0A]" style={{ fontWeight: 600 }}>Tải miễn phí — không cần đăng nhập.</span>
            </p>

            {/* Search bar — high contrast */}
            <div className="relative max-w-[640px]">
              <div
                className={`relative flex items-center bg-white border-2 transition-all duration-200 ${
                  focused ? "border-[#E60023] shadow-[0_0_0_6px_rgba(230,0,35,0.10)]" : "border-[#0A0A0A]"
                }`}
              >
                <Search className={`w-5 h-5 ml-5 transition-colors ${focused ? "text-[#E60023]" : "text-[#0A0A0A]"}`} strokeWidth={2.5} />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onFocus={() => setFocused(true)}
                  onBlur={() => setTimeout(() => setFocused(false), 150)}
                  placeholder="Tìm theo mã, điện áp, loại tài liệu…"
                  className="flex-1 px-4 py-[18px] bg-transparent outline-none text-[15px] text-black placeholder:text-black/45"
                  style={{ fontWeight: 500 }}
                />
                <div className="hidden md:flex items-center gap-1 mr-3 px-2.5 py-1 border border-black/15 text-black/55 text-[11px] tracking-wide" style={{ fontWeight: 600 }}>
                  <Command className="w-3 h-3" /> K
                </div>
                <button className="h-full px-7 py-[18px] bg-[#0A0A0A] text-white text-[14px] tracking-wide hover:bg-[#E60023] transition-colors flex items-center gap-2" style={{ fontWeight: 600 }}>
                  Tìm kiếm
                  <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
                </button>
              </div>

              {focused && (
                <div className="absolute left-0 right-0 top-full mt-2 bg-white border-2 border-[#0A0A0A] shadow-[0_24px_50px_-15px_rgba(0,0,0,0.25)] z-30">
                  {showRecent && (
                    <div className="p-4">
                      <div className="text-[11px] tracking-[0.22em] text-black/55 mb-3" style={{ fontWeight: 600 }}>TÌM KIẾM GẦN ĐÂY</div>
                      <div className="flex flex-wrap gap-2">
                        {RECENT.map((r) => (
                          <button key={r} className="px-3 py-1.5 border border-black/15 text-[13px] hover:bg-[#0A0A0A] hover:text-white hover:border-[#0A0A0A] transition-colors" style={{ fontWeight: 500 }}>
                            {r}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                  {showSuggest && (
                    <div>
                      <div className="px-5 pt-4 pb-2 text-[11px] tracking-[0.22em] text-black/55 flex items-center justify-between" style={{ fontWeight: 600 }}>
                        <span>GỢI Ý PHÙ HỢP</span>
                        <span className="text-black/45" style={{ fontWeight: 500 }}>Nhấn Enter để tìm</span>
                      </div>
                      {SUGGEST.map((s, i) => (
                        <button key={i} className="group w-full flex items-center gap-4 px-5 py-3 border-t border-black/8 text-left hover:bg-[#FAFAFA]">
                          <div className="w-1 h-10 bg-transparent group-hover:bg-[#E60023] transition-colors" />
                          <div className="flex-1 min-w-0">
                            <div className="text-[14px] text-black truncate" style={{ fontWeight: 500 }}>
                              {s.title.split(/(48V|xe nâng)/i).map((p, idx) =>
                                /48V|xe nâng/i.test(p) ? (
                                  <mark key={idx} className="bg-[#E60023] text-white px-1">{p}</mark>
                                ) : (
                                  <span key={idx}>{p}</span>
                                )
                              )}
                            </div>
                            <div className="text-[12px] text-black/55 mt-0.5">{s.meta}</div>
                          </div>
                          <ArrowRight className="w-4 h-4 text-black/30 group-hover:text-[#E60023] group-hover:translate-x-0.5 transition-all" />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px]">
              <span className="text-black/55" style={{ fontWeight: 500 }}>Tìm phổ biến:</span>
              {["Pin xe nâng 48V", "Manual AGV", "Phần mềm BMS", "Chứng chỉ UN38.3"].map((t) => (
                <button key={t} className="text-[#0A0A0A] hover:text-[#E60023] underline-offset-4 decoration-2 hover:underline transition-colors" style={{ fontWeight: 500 }}>
                  {t}
                </button>
              ))}
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-3">
              <a href="#library" className="group inline-flex items-center gap-3 px-6 py-3.5 bg-[#0A0A0A] text-white text-[14px] tracking-wide hover:bg-[#E60023] transition-colors" style={{ fontWeight: 600 }}>
                Duyệt 240+ tài liệu
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" strokeWidth={2.5} />
              </a>
              <a href="#support" className="group inline-flex items-center gap-2 px-6 py-3.5 border-2 border-[#0A0A0A] text-[14px] tracking-wide hover:bg-[#0A0A0A] hover:text-white transition-colors" style={{ fontWeight: 600 }}>
                <Headphones className="w-4 h-4" strokeWidth={2.5} />
                Liên hệ kỹ thuật
              </a>
            </div>
          </div>

          {/* Right visual — strong dark block for contrast */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] bg-[#0A0A0A] overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1687858490665-68306e08c364?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900"
                alt="Pin lithium công nghiệp PKG"
                className="w-full h-full object-cover opacity-70 mix-blend-luminosity"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />
              <div className="absolute top-0 right-0 w-1 h-1/3 bg-[#E60023]" />
              <div className="absolute top-6 left-6 right-6 flex items-start justify-between">
                <div className="text-white">
                  <div className="text-[10px] tracking-[0.28em] text-[#E60023]" style={{ fontWeight: 700 }}>SYSTEM</div>
                  <div className="text-[14px] mt-1" style={{ fontWeight: 600 }}>PKG-FL-48V-200Ah</div>
                </div>
                <div className="text-right text-white">
                  <div className="text-[10px] tracking-[0.28em] text-white/55" style={{ fontWeight: 600 }}>STATUS</div>
                  <div className="flex items-center gap-1.5 mt-1 text-[12px]" style={{ fontWeight: 600 }}>
                    <span className="w-1.5 h-1.5 bg-[#E60023] animate-pulse" />
                    LIVE
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="grid grid-cols-3 gap-3 mb-4 pb-4 border-b border-white/15">
                  {[
                    ["51.2V", "Nominal"],
                    ["200Ah", "Capacity"],
                    ["≥6000", "Cycles"],
                  ].map(([k, v]) => (
                    <div key={v}>
                      <div className="text-[20px] tracking-tight" style={{ fontWeight: 700 }}>{k}</div>
                      <div className="text-[10px] tracking-[0.2em] text-white/55 mt-0.5" style={{ fontWeight: 600 }}>{v.toUpperCase()}</div>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between text-[11px]">
                  <span className="text-white/65" style={{ fontWeight: 500 }}>CAN 2.0B / RS485</span>
                  <span className="text-[#E60023] tracking-[0.2em]" style={{ fontWeight: 700 }}>v1.4 · APR 2026</span>
                </div>
              </div>
            </div>
            {/* Caption pin */}
            <div className="absolute -left-3 top-8 bg-white border-2 border-[#0A0A0A] px-3 py-1.5 text-[10px] tracking-[0.22em]" style={{ fontWeight: 700 }}>
              REF.01 / DATASHEET
            </div>
          </div>
        </div>

        {/* Stats strip — strong rhythm */}
        <div className="grid grid-cols-2 md:grid-cols-4 border-t-2 border-[#0A0A0A]">
          {[
            ["240+", "Tài liệu chính thức"],
            ["07", "Dòng sản phẩm"],
            ["03", "Ngôn ngữ"],
            ["24/7", "Hỗ trợ kỹ sư"],
          ].map(([k, v], i) => (
            <div key={v} className={`relative py-7 lg:py-9 px-5 ${i > 0 ? "md:border-l-2 border-[#0A0A0A]/10" : ""} ${i === 0 ? "border-r-2 border-[#0A0A0A]/10 md:border-r-2" : ""}`}>
              <div className="text-[42px] lg:text-[56px] leading-none tracking-[-0.03em] text-[#0A0A0A]" style={{ fontWeight: 700 }}>{k}</div>
              <div className="text-[11px] tracking-[0.22em] text-black/65 mt-3" style={{ fontWeight: 600 }}>{v.toUpperCase()}</div>
              {i === 0 && <div className="absolute top-0 left-0 w-12 h-1 bg-[#E60023]" />}
            </div>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <div className="hidden lg:flex absolute right-12 bottom-6 items-center gap-2 text-[11px] tracking-[0.22em] text-black/50" style={{ fontWeight: 600 }}>
        <ArrowDown className="w-3.5 h-3.5" /> CUỘN ĐỂ KHÁM PHÁ
      </div>
    </section>
  );
}
