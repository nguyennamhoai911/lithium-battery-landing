import { useState } from "react";
import { Download, AlertTriangle, ChevronDown, FileCheck, Cpu, Activity, CircuitBoard, Layers, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const TABS = [
  { id: "config", label: "Công cụ cấu hình", icon: Cpu },
  { id: "monitor", label: "Phần mềm giám sát", icon: Activity },
  { id: "firmware", label: "Gói firmware", icon: CircuitBoard },
  { id: "release", label: "Ghi chú phiên bản", icon: FileCheck },
  { id: "compat", label: "Tài liệu tương thích", icon: Layers },
];

const SOFTWARE = [
  {
    title: "PKG BMS Configurator v3.2",
    desc: "Cấu hình ngưỡng điện áp, giới hạn dòng, thuật toán cân bằng cell và tham số giao tiếp.",
    compat: ["Dòng xe nâng F-Series 48V / 80V", "Dòng AGV A-Series", "Dòng ESS Modular"],
    incompat: ["BMS legacy v1.0", "Firmware OEM tùy biến"],
    file: "ZIP · 28 MB · Windows 10/11",
    primary: "Tải xuống",
  },
  {
    title: "PKG Monitor Pro v2.5",
    desc: "Bảng giám sát thời gian thực: điện áp, dòng, nhiệt độ, SOC, SOH và trạng thái cảnh báo.",
    compat: ["Hệ thống PKG có CAN / RS485", "Dòng ESS Modular"],
    incompat: ["BMS thế hệ trước v1.x"],
    file: "EXE · 42 MB · Windows 10/11",
    primary: "Tải xuống",
  },
];

export function BMSZone() {
  const [tab, setTab] = useState("config");
  const [expanded, setExpanded] = useState<number | null>(0);
  const [showWarning, setShowWarning] = useState(false);
  const [agreed, setAgreed] = useState(false);

  return (
    <section className="relative py-24 lg:py-32 bg-[#0A0A0A] text-white overflow-hidden">
      {/* Pattern */}
      <div className="absolute inset-0 opacity-[0.07]">
        <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1440 800">
          {Array.from({ length: 30 }).map((_, i) => (
            <line key={i} x1="0" x2="1440" y1={i * 30} y2={i * 30} stroke="white" strokeWidth="0.5" />
          ))}
          {Array.from({ length: 60 }).map((_, i) => (
            <line key={`v${i}`} x1={i * 30} x2={i * 30} y1="0" y2="800" stroke="white" strokeWidth="0.5" />
          ))}
        </svg>
      </div>
      <div className="absolute right-0 top-0 w-[40%] h-full opacity-30">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1731400800900-1bce57414c09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200"
          alt="BMS board"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#0A0A0A]/70 to-[#0A0A0A]" />
      </div>
      <div className="absolute top-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E11D2E] to-transparent opacity-40" />

      <div className="relative max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-3 mb-5">
            <span className="text-[#E11D2E] text-[12px] tracking-[0.2em]">05 / KHU VỰC BMS & PHẦN MỀM</span>
            <div className="w-12 h-px bg-[#E11D2E]" />
          </div>
          <h2 className="text-[34px] lg:text-[52px] leading-[1.05] tracking-[-0.02em] mb-5" style={{ fontWeight: 500 }}>
            Trung tâm phần mềm BMS
          </h2>
          <p className="text-[16px] leading-relaxed text-white/65 max-w-2xl">
            Tải công cụ cấu hình, phần mềm giám sát, gói firmware và tài liệu tương thích cho hệ thống quản lý pin PKG Battery.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-px bg-white/10 mb-10 max-w-4xl">
          {TABS.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`relative flex items-center gap-2 px-5 py-3.5 text-[13px] tracking-wide transition-colors ${
                tab === t.id ? "bg-white text-black" : "bg-[#0A0A0A] text-white/65 hover:text-white"
              }`}
            >
              <t.icon className="w-4 h-4" />
              {t.label}
              {tab === t.id && <span className="absolute -bottom-px left-0 right-0 h-0.5 bg-[#E11D2E]" />}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-12 gap-6">
          {SOFTWARE.map((s, i) => (
            <div key={i} className="lg:col-span-6 border border-white/10 bg-white/[0.02] p-7 lg:p-8 hover:border-[#E11D2E]/40 transition-colors">
              <div className="flex items-start justify-between mb-3">
                <span className="text-[10px] tracking-[0.25em] text-[#E11D2E]">PHẦN MỀM</span>
                <span className="text-[11px] text-white/45">{s.file}</span>
              </div>
              <h3 className="text-[22px] tracking-tight leading-tight mb-3" style={{ fontWeight: 500 }}>{s.title}</h3>
              <p className="text-[14px] leading-relaxed text-white/65 mb-5">{s.desc}</p>

              <button
                onClick={() => setExpanded(expanded === i ? null : i)}
                className="w-full flex items-center justify-between py-3 border-t border-white/10 text-[13px] text-white/75 hover:text-white"
              >
                <span>Hướng dẫn tương thích</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${expanded === i ? "rotate-180" : ""}`} />
              </button>
              {expanded === i && (
                <div className="pt-3 pb-2 space-y-4 text-[13px]">
                  <div>
                    <div className="text-[11px] tracking-[0.2em] text-[#E11D2E] mb-2">TƯƠNG THÍCH</div>
                    <ul className="space-y-1.5 text-white/75">
                      {s.compat.map((c) => (
                        <li key={c} className="flex gap-2"><span className="text-[#E11D2E]">+</span>{c}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="text-[11px] tracking-[0.2em] text-white/45 mb-2">KHÔNG TƯƠNG THÍCH</div>
                    <ul className="space-y-1.5 text-white/55">
                      {s.incompat.map((c) => (
                        <li key={c} className="flex gap-2"><span>−</span>{c}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              <div className="flex flex-wrap gap-2 mt-5 pt-5 border-t border-white/10">
                <button className="flex items-center gap-2 px-5 py-2.5 bg-[#E11D2E] hover:bg-white hover:text-black text-[13px] tracking-wide transition-colors">
                  <Download className="w-4 h-4" /> {s.primary}
                </button>
                <button className="px-5 py-2.5 border border-white/20 hover:border-[#E11D2E] hover:text-[#E11D2E] text-[13px] tracking-wide transition-colors">
                  Xem ghi chú phiên bản
                </button>
              </div>
            </div>
          ))}

          {/* Firmware card with warning */}
          <div className="lg:col-span-12 grid lg:grid-cols-12 gap-6">
            <div className="lg:col-span-7 border border-white/10 bg-white/[0.02] p-7 lg:p-8">
              <div className="flex items-start justify-between mb-3">
                <span className="text-[10px] tracking-[0.25em] text-[#E11D2E]">FIRMWARE</span>
                <span className="text-[11px] text-white/45">ZIP · 5.4 MB · 04/2026</span>
              </div>
              <h3 className="text-[22px] tracking-tight leading-tight mb-3" style={{ fontWeight: 500 }}>
                Firmware dòng pin xe nâng v2.0
              </h3>
              <p className="text-[14px] leading-relaxed text-white/65 mb-5">
                Cập nhật firmware cải thiện ổn định giao tiếp với charger, ngưỡng bảo vệ nhiệt và báo cáo CAN cho mã cảnh báo.
              </p>

              <div className="border-t border-white/10 pt-5">
                <div className="text-[11px] tracking-[0.2em] text-white/45 mb-3">GHI CHÚ PHIÊN BẢN</div>
                <div className="space-y-3 text-[13px]">
                  <div>
                    <div className="text-white/85 mb-1">v2.0 — 04/2026</div>
                    <ul className="space-y-1 text-white/60 pl-4">
                      <li>· Cải thiện ổn định giao tiếp với charger</li>
                      <li>· Bổ sung tinh chỉnh ngưỡng bảo vệ nhiệt</li>
                      <li>· Cập nhật báo cáo CAN cho mã cảnh báo</li>
                    </ul>
                  </div>
                  <div className="opacity-70">
                    <div className="text-white/75 mb-1">v1.8 — 12/2025</div>
                    <ul className="space-y-1 text-white/55 pl-4">
                      <li>· Tối ưu thuật toán tính SOC</li>
                      <li>· Cải thiện logic cân bằng cell</li>
                    </ul>
                  </div>
                </div>
              </div>

              <button onClick={() => setShowWarning(true)} className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-[#E11D2E] hover:bg-white hover:text-black text-[13px] tracking-wide transition-colors">
                <Download className="w-4 h-4" /> Tải firmware
              </button>
            </div>

            <div className="lg:col-span-5 border border-[#E11D2E]/40 bg-[#E11D2E]/[0.06] p-7 lg:p-8">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-9 h-9 bg-[#E11D2E] flex items-center justify-center shrink-0">
                  <AlertTriangle className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="text-[11px] tracking-[0.2em] text-[#E11D2E]">LƯU Ý QUAN TRỌNG</div>
                  <h4 className="text-[18px] tracking-tight mt-1" style={{ fontWeight: 500 }}>Trước khi cài đặt firmware</h4>
                </div>
              </div>
              <p className="text-[13.5px] leading-relaxed text-white/70 mb-4">
                Trước khi cài đặt firmware, hãy kiểm tra đúng model sản phẩm, phiên bản phần cứng và phiên bản BMS hiện tại. Việc cài sai firmware có thể ảnh hưởng đến hoạt động của hệ thống.
              </p>
              <a href="#support" className="inline-flex items-center gap-2 text-[13px] text-[#E11D2E] tracking-wide hover:underline underline-offset-4">
                Liên hệ kỹ thuật trước khi cài
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Firmware warning modal */}
      {showWarning && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div onClick={() => setShowWarning(false)} className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
          <div className="relative bg-white text-black w-full max-w-lg p-8">
            <div className="flex items-start gap-3 mb-5">
              <div className="w-10 h-10 bg-[#E11D2E] flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-[11px] tracking-[0.2em] text-[#E11D2E]">LƯU Ý TRƯỚC KHI TẢI FIRMWARE</div>
                <h3 className="text-[22px] tracking-tight mt-1" style={{ fontWeight: 500 }}>Xác nhận tương thích firmware</h3>
              </div>
            </div>
            <p className="text-[14px] leading-relaxed text-black/70 mb-5">
              Trước khi cài đặt firmware, hãy kiểm tra đúng model sản phẩm, phiên bản phần cứng và phiên bản BMS hiện tại. Việc cài sai firmware có thể ảnh hưởng đến hoạt động của hệ thống.
            </p>
            <label className="flex items-start gap-3 mb-6 cursor-pointer">
              <input type="checkbox" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} className="mt-1 accent-[#E11D2E]" />
              <span className="text-[13px] leading-relaxed text-black/75">
                Tôi đã kiểm tra thông tin tương thích và hiểu rủi ro khi cài đặt sai firmware.
              </span>
            </label>
            <div className="flex flex-wrap gap-2">
              <button
                disabled={!agreed}
                className={`px-5 py-3 text-[13px] tracking-wide transition-colors ${
                  agreed ? "bg-black text-white hover:bg-[#E11D2E]" : "bg-black/15 text-black/45 cursor-not-allowed"
                }`}
              >
                Tiếp tục tải firmware
              </button>
              <button className="px-5 py-3 border border-black/15 text-[13px] tracking-wide hover:border-[#E11D2E] hover:text-[#E11D2E] transition-colors">
                Xem ghi chú phiên bản
              </button>
              <button onClick={() => setShowWarning(false)} className="px-5 py-3 text-[13px] tracking-wide text-black/60 hover:text-black">
                Hủy
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
