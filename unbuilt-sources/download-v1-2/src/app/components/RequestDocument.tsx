import { useState } from "react";
import { ArrowRight, Search, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { SectionLabel } from "./SectionLabel";

export function RequestDocument() {
  const [state, setState] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [q, setQ] = useState("96V marine battery");
  const [showNoResult, setShowNoResult] = useState(true);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setState("loading");
    setTimeout(() => setState("success"), 1400);
  };

  return (
    <section id="request" className="relative py-24 lg:py-32 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12">
          {/* No result preview */}
          <div className="lg:col-span-5">
            <SectionLabel num="08" label="KHÔNG TÌM THẤY?" />
            <h2 className="text-[36px] lg:text-[52px] leading-[1.0] tracking-[-0.025em] mb-5" style={{ fontWeight: 700 }}>
              Không tìm thấy<br />
              <span className="text-[#E60023]">tài liệu cần?</span>
            </h2>
            <p className="text-[15px] leading-relaxed text-black/60 mb-8 max-w-md">
              Tài liệu có thể thuộc dự án riêng, đang được cập nhật hoặc chỉ cung cấp qua bộ phận kỹ thuật PKG Battery. Gửi mã sản phẩm và loại tài liệu cần tìm — đội ngũ của chúng tôi sẽ hỗ trợ.
            </p>

            {/* No-result preview block */}
            {showNoResult && (
              <div className="border border-black/10 p-6 bg-[#FAFAFA]">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] tracking-[0.2em] text-black/45">XEM TRƯỚC TRẠNG THÁI</span>
                  <button onClick={() => setShowNoResult(false)} className="text-[11px] text-black/45 hover:text-black">Ẩn</button>
                </div>
                <div className="flex items-start gap-3 mb-4">
                  <Search className="w-5 h-5 text-[#E11D2E] mt-0.5" />
                  <div>
                    <div className="text-[13px] text-black/55 mb-1">Truy vấn:</div>
                    <div className="text-[15px]" style={{ fontWeight: 500 }}>"{q}"</div>
                  </div>
                </div>
                <div className="border-t border-black/10 pt-4">
                  <div className="text-[15px] mb-2" style={{ fontWeight: 500 }}>Không tìm thấy tài liệu phù hợp</div>
                  <p className="text-[13px] leading-relaxed text-black/60 mb-4">
                    Tài liệu có thể thuộc dự án riêng, đang được lưu trữ hoặc chỉ cung cấp qua bộ phận kỹ thuật PKG Battery.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-black text-white text-[12px]">Gửi yêu cầu tài liệu</span>
                    <span className="px-3 py-1 border border-black/15 text-[12px]">Liên hệ hỗ trợ kỹ thuật</span>
                    <span className="px-3 py-1 border border-black/15 text-[12px]">Xóa tìm kiếm</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <div className="border border-black/10 p-8 lg:p-10 relative bg-white">
              <div className="absolute top-0 left-0 w-12 h-px bg-[#E11D2E]" />
              {state === "success" ? (
                <div className="py-10 text-center max-w-md mx-auto">
                  <div className="w-14 h-14 bg-[#E11D2E]/10 mx-auto flex items-center justify-center mb-5">
                    <CheckCircle2 className="w-7 h-7 text-[#E11D2E]" />
                  </div>
                  <h3 className="text-[24px] tracking-tight mb-3" style={{ fontWeight: 500 }}>Đã gửi yêu cầu</h3>
                  <p className="text-[14px] leading-relaxed text-black/60 mb-6">
                    Cảm ơn bạn. Đội ngũ kỹ thuật PKG Battery sẽ xem xét yêu cầu và liên hệ với bạn cùng tài liệu phù hợp.
                  </p>
                  <div className="flex justify-center gap-3">
                    <button onClick={() => setState("idle")} className="px-5 py-2.5 border border-black/15 text-[13px] hover:border-[#E11D2E]">Quay lại tài liệu</button>
                    <button className="px-5 py-2.5 bg-black text-white text-[13px] hover:bg-[#E11D2E]">Liên hệ hỗ trợ ngay</button>
                  </div>
                </div>
              ) : (
                <form onSubmit={submit} className="space-y-5">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[10px] tracking-[0.25em] text-[#E11D2E]">YÊU CẦU TÀI LIỆU</span>
                  </div>
                  <h3 className="text-[24px] lg:text-[28px] tracking-tight" style={{ fontWeight: 500 }}>
                    Gửi yêu cầu — đội kỹ thuật sẽ phản hồi
                  </h3>

                  <div className="grid md:grid-cols-2 gap-5">
                    <Field label="Mã sản phẩm / số seri" required placeholder="VD: PKG-FL-48V200-A" />
                    <Field label="Loại tài liệu cần tìm" required placeholder="VD: Datasheet / Manual / Firmware" />
                    <Field label="Tên doanh nghiệp" placeholder="Tên công ty" />
                    <Field label="Họ tên" required placeholder="Họ và tên" />
                    <Field label="Email" required type="email" placeholder="email@congty.vn" />
                    <Field label="Số điện thoại" placeholder="+84 …" />
                  </div>
                  <Field label="Mô tả thêm" textarea placeholder="Ngữ cảnh dự án, cấu hình hệ thống hoặc tài liệu cụ thể bạn cần…" />

                  {state === "error" && (
                    <div className="flex gap-3 p-3 border border-[#E11D2E]/40 bg-[#E11D2E]/[0.05] text-[13px]">
                      <AlertCircle className="w-4 h-4 text-[#E11D2E] mt-0.5" />
                      <span>Không thể gửi yêu cầu. Vui lòng thử lại hoặc liên hệ trực tiếp qua support@pkgbattery.com.</span>
                    </div>
                  )}

                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <button
                      type="submit"
                      disabled={state === "loading"}
                      className="group flex items-center gap-3 px-6 py-3.5 bg-black text-white text-[13px] tracking-wide hover:bg-[#E11D2E] transition-colors disabled:opacity-60"
                    >
                      {state === "loading" ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" /> Đang gửi yêu cầu…
                        </>
                      ) : (
                        <>
                          Gửi yêu cầu tài liệu
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>
                    <button type="button" className="text-[13px] text-black/65 hover:text-black underline-offset-4 hover:underline">
                      Liên hệ hỗ trợ kỹ thuật
                    </button>
                  </div>
                  <p className="text-[12px] text-black/45">
                    Bằng cách gửi, bạn đồng ý để PKG Battery liên hệ phản hồi về yêu cầu tài liệu này.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, required, type = "text", placeholder, textarea }: { label: string; required?: boolean; type?: string; placeholder?: string; textarea?: boolean }) {
  const [focused, setFocused] = useState(false);
  return (
    <label className="block">
      <div className="text-[12px] tracking-wide text-black/65 mb-2">
        {label} {required && <span className="text-[#E11D2E]">*</span>}
      </div>
      {textarea ? (
        <textarea
          rows={4}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder={placeholder}
          className={`w-full bg-white border-b-2 px-0 py-2.5 outline-none text-[14px] resize-none transition-colors ${focused ? "border-[#E11D2E]" : "border-black/15"}`}
        />
      ) : (
        <input
          type={type}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder={placeholder}
          className={`w-full bg-white border-b-2 px-0 py-2.5 outline-none text-[14px] transition-colors ${focused ? "border-[#E11D2E]" : "border-black/15"}`}
        />
      )}
    </label>
  );
}
