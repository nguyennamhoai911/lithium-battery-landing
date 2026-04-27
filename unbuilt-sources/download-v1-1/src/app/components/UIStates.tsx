import { useState } from "react";
import { X, Download, Link2, FileText, CheckCircle2, AlertCircle, Headphones, Mail, Phone, Send, ChevronRight } from "lucide-react";

/* Document Preview Modal */
export function PreviewModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[60] flex items-stretch justify-end">
      <div onClick={onClose} className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <div className="relative w-full max-w-3xl bg-white shadow-2xl flex flex-col animate-[slidein_0.3s_ease-out]">
        <style>{`@keyframes slidein { from { transform: translateX(40px); opacity: 0;} to { transform: translateX(0); opacity:1;} }`}</style>
        <div className="flex items-start justify-between px-7 py-5 border-b border-black/10">
          <div>
            <div className="flex items-center gap-2 text-[11px] tracking-[0.2em] text-[#E11D2E] mb-2">
              <span>DATASHEET</span>
              <span className="w-1 h-1 bg-black/30 rounded-full" />
              <span className="text-black/55">PDF · 2.8 MB · Phiên bản 1.4</span>
            </div>
            <h3 className="text-[20px] tracking-tight" style={{ fontWeight: 500 }}>
              Datasheet pin lithium xe nâng 48V 200Ah
            </h3>
            <div className="text-[12px] text-black/50 mt-1">Cập nhật 04/2026</div>
          </div>
          <button onClick={onClose} aria-label="Đóng" className="text-black/55 hover:text-black"><X className="w-5 h-5" /></button>
        </div>
        <div className="flex-1 overflow-y-auto p-7 bg-[#FAFAFA]">
          <div className="aspect-[1/1.3] bg-white border border-black/10 max-w-md mx-auto p-6 relative">
            <div className="absolute top-4 right-4 text-[10px] tracking-[0.25em] text-[#E11D2E]">PKG · DATASHEET</div>
            <div className="text-[10px] tracking-[0.2em] text-black/50 mb-2">DOC-FL48-200-V1.4</div>
            <div className="text-[16px] tracking-tight mb-6" style={{ fontWeight: 500 }}>48V 200Ah Lithium Forklift Battery</div>
            <div className="space-y-1.5 text-[10px] text-black/65">
              {["Nominal voltage: 51.2V", "Nominal capacity: 200Ah", "Energy: 10.24kWh", "Cycle life: ≥6000 @ 80% DoD", "Communication: CAN 2.0B / RS485", "Operating temp: -20°C ~ +60°C"].map((s) => (
                <div key={s} className="flex justify-between border-b border-black/8 pb-1">{s.split(":")[0]}<span className="text-black/85">{s.split(":")[1]}</span></div>
              ))}
            </div>
            <div className="absolute bottom-4 left-6 right-6 text-[9px] tracking-[0.2em] text-black/40 flex justify-between">
              <span>PAGE 01 / 12</span>
              <span>PKGBATTERY.COM</span>
            </div>
          </div>
          <div className="mt-6 max-w-md mx-auto text-[12px] text-black/50 text-center">
            Bản xem trước rút gọn — tải file để xem đầy đủ.
          </div>
        </div>
        <div className="border-t border-black/10 p-5 flex flex-wrap gap-3">
          <button className="flex items-center gap-2 px-5 py-3 bg-black text-white text-[13px] tracking-wide hover:bg-[#E11D2E] transition-colors">
            <Download className="w-4 h-4" /> Tải xuống PDF
          </button>
          <button className="flex items-center gap-2 px-5 py-3 border border-black/15 text-[13px] hover:border-[#E11D2E] hover:text-[#E11D2E] transition-colors">
            <Link2 className="w-4 h-4" /> Sao chép liên kết
          </button>
          <div className="ml-auto text-[12px] text-black/50 self-center">
            Tài liệu liên quan: <span className="text-black hover:text-[#E11D2E] cursor-pointer">Manual lắp đặt 48V</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* Toast */
type Toast = { kind: "success" | "error"; title: string; desc?: string; id: number };
export function ToastHost({ items, dismiss }: { items: Toast[]; dismiss: (id: number) => void }) {
  return (
    <div className="fixed bottom-6 right-6 z-[70] flex flex-col gap-3 max-w-sm">
      {items.map((t) => (
        <div key={t.id} className={`relative flex gap-3 p-4 bg-white shadow-[0_20px_50px_-15px_rgba(0,0,0,0.25)] border-l-2 ${t.kind === "success" ? "border-[#E11D2E]" : "border-black"}`}>
          {t.kind === "success" ? <CheckCircle2 className="w-5 h-5 text-[#E11D2E] mt-0.5" /> : <AlertCircle className="w-5 h-5 text-black mt-0.5" />}
          <div className="flex-1 min-w-0">
            <div className="text-[14px]" style={{ fontWeight: 500 }}>{t.title}</div>
            {t.desc && <div className="text-[12.5px] text-black/60 mt-0.5">{t.desc}</div>}
            <div className="flex gap-3 mt-2 text-[12px]">
              <button className="text-[#E11D2E] hover:underline underline-offset-4">Tài liệu liên quan</button>
              <button className="text-black/65 hover:text-black">Sao chép liên kết</button>
            </div>
          </div>
          <button onClick={() => dismiss(t.id)} className="text-black/40 hover:text-black"><X className="w-4 h-4" /></button>
        </div>
      ))}
    </div>
  );
}

/* Support drawer */
export function SupportDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[60] flex items-stretch justify-end">
      <div onClick={onClose} className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <div className="relative w-full max-w-md bg-white flex flex-col animate-[slidein_0.3s_ease-out]">
        <div className="flex items-center justify-between px-6 py-5 border-b border-black/10">
          <div>
            <div className="text-[11px] tracking-[0.2em] text-[#E11D2E]">HỖ TRỢ KỸ THUẬT</div>
            <h3 className="text-[20px] tracking-tight mt-1" style={{ fontWeight: 500 }}>PKG Engineering Desk</h3>
          </div>
          <button onClick={onClose}><X className="w-5 h-5" /></button>
        </div>
        <div className="p-6 flex-1 overflow-y-auto">
          <p className="text-[14px] text-black/65 leading-relaxed mb-6">
            Đội ngũ kỹ thuật PKG Battery phản hồi trong giờ hành chính. Với dự án triển khai hoặc firmware, vui lòng cung cấp mã sản phẩm và phiên bản BMS.
          </p>
          <div className="space-y-2">
            {[
              { icon: Headphones, label: "Trao đổi với kỹ sư", desc: "Tư vấn chọn datasheet, manual, BMS phù hợp" },
              { icon: Send, label: "Gửi yêu cầu tài liệu", desc: "Khi tài liệu chưa có sẵn trong thư viện" },
              { icon: FileText, label: "Gửi mã sản phẩm", desc: "Để được khớp đúng phiên bản tài liệu" },
              { icon: Phone, label: "Gọi hotline kỹ thuật", desc: "+84 XXX XXX XXX" },
              { icon: Mail, label: "Email hỗ trợ", desc: "support@pkgbattery.com" },
            ].map((it) => (
              <button key={it.label} className="group w-full flex items-center gap-4 p-4 border border-black/10 hover:border-[#E11D2E] transition-colors text-left">
                <div className="w-10 h-10 border border-black/15 flex items-center justify-center group-hover:border-[#E11D2E] group-hover:text-[#E11D2E] transition-colors">
                  <it.icon className="w-4 h-4" strokeWidth={1.5} />
                </div>
                <div className="flex-1">
                  <div className="text-[14px]" style={{ fontWeight: 500 }}>{it.label}</div>
                  <div className="text-[12px] text-black/55 mt-0.5">{it.desc}</div>
                </div>
                <ChevronRight className="w-4 h-4 text-black/30 group-hover:text-[#E11D2E] group-hover:translate-x-1 transition-all" />
              </button>
            ))}
          </div>
        </div>
        <div className="p-5 border-t border-black/10 bg-[#FAFAFA] text-[12px] text-black/55">
          Mọi yêu cầu được phản hồi trong vòng 24 giờ làm việc.
        </div>
      </div>
    </div>
  );
}

/* Floating support button + bottom action bar */
export function FloatingActions({ onPreview, onDownload, onSupport }: { onPreview: () => void; onDownload: () => void; onSupport: () => void }) {
  return (
    <>
      <button
        onClick={onSupport}
        className="fixed right-5 bottom-5 z-40 group flex items-center gap-2 pl-4 pr-5 py-3 bg-black text-white shadow-[0_10px_30px_-5px_rgba(0,0,0,0.4)] hover:bg-[#E11D2E] transition-colors"
      >
        <Headphones className="w-4 h-4" />
        <span className="text-[13px] tracking-wide">Hỗ trợ kỹ thuật</span>
      </button>

      {/* Demo trigger row (visible at top of demo) */}
      <div className="fixed left-5 bottom-5 z-40 hidden lg:flex flex-col gap-2">
        <button onClick={onPreview} className="flex items-center gap-2 px-3 py-2 bg-white border border-black/10 text-[12px] hover:border-[#E11D2E]">
          <FileText className="w-3.5 h-3.5" /> Xem trước tài liệu
        </button>
        <button onClick={onDownload} className="flex items-center gap-2 px-3 py-2 bg-white border border-black/10 text-[12px] hover:border-[#E11D2E]">
          <Download className="w-3.5 h-3.5" /> Mô phỏng tải xuống
        </button>
      </div>
    </>
  );
}

export function useAutoToast(): [Toast[], (t: Omit<Toast, "id">) => void, (id: number) => void] {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const push = (t: Omit<Toast, "id">) => {
    const id = Date.now() + Math.random();
    setToasts((arr) => [...arr, { ...t, id }]);
    setTimeout(() => setToasts((arr) => arr.filter((x) => x.id !== id)), 4500);
  };
  const dismiss = (id: number) => setToasts((arr) => arr.filter((x) => x.id !== id));
  return [toasts, push, dismiss];
}
