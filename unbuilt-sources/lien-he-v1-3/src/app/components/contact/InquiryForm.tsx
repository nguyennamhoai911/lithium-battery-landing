import { useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Calculator,
  Store,
  Cpu,
  Wrench,
  ShieldCheck,
  Handshake,
  Check,
  Upload,
  ArrowRight,
  ArrowDown,
  Phone,
  MessageCircle,
  Loader2,
  Pencil,
} from "lucide-react";
import {
  INQUIRIES,
  PRODUCT_OPTIONS,
  APPLICATIONS,
  type InquiryKey,
} from "./data";

const ICON: Record<string, JSX.Element> = {
  calculator: <Calculator className="size-5" />,
  store: <Store className="size-5" />,
  cpu: <Cpu className="size-5" />,
  wrench: <Wrench className="size-5" />,
  shield: <ShieldCheck className="size-5" />,
  handshake: <Handshake className="size-5" />,
};

function Field({
  label,
  required,
  children,
  hint,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
  hint?: string;
}) {
  return (
    <label className="block">
      <span className="mb-2 inline-flex items-center gap-1.5 text-[12px] uppercase tracking-[0.16em] text-neutral-600">
        {label}
        {required && <span className="text-red-600">*</span>}
      </span>
      {children}
      {hint && <span className="mt-1.5 block text-xs text-neutral-500">{hint}</span>}
    </label>
  );
}

const inputClass =
  "w-full border border-neutral-300 bg-white px-4 py-3.5 text-neutral-900 outline-none transition placeholder:text-neutral-400 focus:border-neutral-900 focus:ring-2 focus:ring-red-600/20";

function StepBadge({ n, label, done }: { n: string; label: string; done?: boolean }) {
  return (
    <div className="inline-flex items-center gap-3">
      <span
        className={`inline-flex size-9 items-center justify-center border tracking-tight ${
          done
            ? "border-red-600 bg-red-600 text-white"
            : "border-neutral-900 bg-neutral-900 text-white"
        }`}
      >
        {done ? <Check className="size-4" /> : n}
      </span>
      <div>
        <div className="text-[10px] uppercase tracking-[0.22em] text-neutral-500">
          Step {n}
        </div>
        <div className="text-neutral-900 tracking-tight">{label}</div>
      </div>
    </div>
  );
}

export function InquirySection() {
  const [active, setActive] = useState<InquiryKey | null>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const formRef = useRef<HTMLDivElement>(null);
  const selectorRef = useRef<HTMLDivElement>(null);

  const current = active ? INQUIRIES.find((i) => i.key === active)! : null;

  function pick(key: InquiryKey) {
    setActive(key);
    setStatus("idle");
    requestAnimationFrame(() => {
      formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  function changeChoice() {
    selectorRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  function submit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setTimeout(() => setStatus("success"), 1200);
  }

  return (
    <section id="inquiry" className="relative bg-white py-28 lg:py-36">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />
      <div className="relative mx-auto max-w-[1280px] px-6 lg:px-12">
        {/* Section heading */}
        <div className="max-w-3xl">
          <span className="text-[12px] uppercase tracking-[0.22em] text-red-600">
            03 — Smart Inquiry · 2 bước
          </span>
          <h2 className="mt-4 text-[clamp(2rem,3.5vw,3rem)] leading-[1.05] tracking-[-0.02em]">
            Bạn cần PKGbattery hỗ trợ điều gì?
          </h2>
          <p className="mt-5 text-neutral-600 leading-relaxed">
            Quy trình rất ngắn: <b className="text-neutral-900">chọn nhu cầu</b>{" "}
            ở Bước 1 — form ở Bước 2 sẽ tự động hiển thị đúng các trường cần
            thiết. Bạn không phải điền những thông tin không liên quan.
          </p>
        </div>

        {/* Unified panel: Step 1 + Step 2 */}
        <div className="mt-12 overflow-hidden border border-neutral-200 bg-white">
          {/* STEP 1 — selector */}
          <div ref={selectorRef} className="relative bg-neutral-50/70 p-6 sm:p-10">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <StepBadge n="01" label="Chọn loại nhu cầu của bạn" done={!!active} />
              <span className="text-xs text-neutral-500">
                {active
                  ? "Đã chọn ✓ — kéo xuống Bước 02 để điền form"
                  : "Bấm vào một thẻ bên dưới để bắt đầu"}
              </span>
            </div>

            <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {INQUIRIES.map((i) => {
                const isActive = i.key === active;
                return (
                  <button
                    key={i.key}
                    type="button"
                    onClick={() => pick(i.key)}
                    className={`group relative flex items-start gap-4 border p-5 text-left transition ${
                      isActive
                        ? "border-neutral-900 bg-neutral-900 text-white shadow-[0_18px_40px_-20px_rgba(0,0,0,0.45)]"
                        : "border-neutral-200 bg-white text-neutral-900 hover:-translate-y-0.5 hover:border-neutral-900"
                    }`}
                  >
                    <span
                      className={`inline-flex size-11 shrink-0 items-center justify-center border transition ${
                        isActive
                          ? "border-red-500 bg-red-600 text-white"
                          : "border-neutral-300 text-neutral-700 group-hover:border-red-600 group-hover:text-red-600"
                      }`}
                    >
                      {ICON[i.iconKey]}
                    </span>
                    <div className="min-w-0">
                      <div className="tracking-tight">{i.title}</div>
                      <div
                        className={`mt-0.5 text-xs ${
                          isActive ? "text-neutral-400" : "text-neutral-500"
                        }`}
                      >
                        {i.titleVi}
                      </div>
                      <p
                        className={`mt-2 text-xs leading-relaxed ${
                          isActive ? "text-neutral-300" : "text-neutral-500"
                        }`}
                      >
                        {i.desc}
                      </p>
                      <span
                        className={`mt-3 inline-flex items-center gap-1 text-[11px] uppercase tracking-[0.16em] ${
                          isActive ? "text-red-400" : "text-red-600 opacity-0 group-hover:opacity-100"
                        }`}
                      >
                        {isActive ? "Đang chọn ✓" : "Chọn nhu cầu này"}
                        <ArrowRight className="size-3" />
                      </span>
                    </div>
                    {isActive && (
                      <span className="absolute right-3 top-3 inline-flex size-5 items-center justify-center bg-red-600 text-white">
                        <Check className="size-3" />
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Connector arrow */}
          <div className="relative flex justify-center bg-white">
            <div className="absolute inset-x-0 top-1/2 h-px bg-neutral-200" />
            <div
              className={`relative -translate-y-0 px-4 py-3 text-xs uppercase tracking-[0.2em] transition ${
                active ? "bg-red-600 text-white" : "bg-neutral-200 text-neutral-600"
              }`}
            >
              <span className="inline-flex items-center gap-2">
                <ArrowDown className="size-3.5" />
                {active ? "Tiếp tục Bước 02" : "Chọn Bước 01 trước"}
              </span>
            </div>
          </div>

          {/* STEP 2 — form (locked until selection) */}
          <div ref={formRef} className="relative p-6 sm:p-10">
            {/* Locked overlay */}
            {!active && (
              <div className="absolute inset-0 z-10 flex items-center justify-center bg-white/80 backdrop-blur-sm">
                <div className="text-center px-6">
                  <div className="inline-flex size-12 items-center justify-center border border-neutral-300 text-neutral-500">
                    <ArrowDown className="size-5 rotate-180" />
                  </div>
                  <div className="mt-4 text-lg tracking-tight text-neutral-900">
                    Form đang chờ bạn chọn nhu cầu ở Bước 01
                  </div>
                  <p className="mt-2 max-w-sm mx-auto text-sm text-neutral-500">
                    Chọn 1 trong 6 thẻ phía trên để hệ thống mở đúng các trường
                    cần điền — không thừa, không thiếu.
                  </p>
                  <button
                    type="button"
                    onClick={changeChoice}
                    className="mt-5 inline-flex items-center gap-2 bg-neutral-900 px-5 py-2.5 text-sm text-white hover:bg-red-600"
                  >
                    Quay lên Bước 01 <ArrowRight className="size-4 rotate-[-90deg]" />
                  </button>
                </div>
              </div>
            )}

            <div className={!active ? "pointer-events-none opacity-30" : ""}>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <StepBadge n="02" label="Điền form theo nhu cầu đã chọn" />

                {/* Active selection chip */}
                {current && (
                  <button
                    type="button"
                    onClick={changeChoice}
                    className="group inline-flex items-center gap-3 border border-neutral-900 bg-neutral-900 px-4 py-2 text-white transition hover:bg-red-600"
                  >
                    <span className="inline-flex size-6 items-center justify-center bg-red-600 text-white group-hover:bg-white group-hover:text-red-600">
                      {ICON[current.iconKey]}
                    </span>
                    <span className="text-sm tracking-tight">
                      Đang điền: <b>{current.titleVi}</b>
                    </span>
                    <span className="ml-2 inline-flex items-center gap-1 text-[11px] uppercase tracking-[0.18em] opacity-80">
                      <Pencil className="size-3" /> Đổi
                    </span>
                  </button>
                )}
              </div>

              <AnimatePresence mode="wait">
                {status !== "success" ? (
                  <motion.form
                    key={active ?? "empty"}
                    onSubmit={submit}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25 }}
                    className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2"
                  >
                    <Field label="Họ và tên / Full name" required>
                      <input className={inputClass} placeholder="Nguyễn Văn A" required />
                    </Field>
                    <Field label="Số điện thoại / Phone" required>
                      <input
                        className={inputClass}
                        type="tel"
                        placeholder="0989 ___ ___"
                        required
                      />
                    </Field>
                    <Field label="Email" required>
                      <input
                        className={inputClass}
                        type="email"
                        placeholder="you@company.com"
                        required
                      />
                    </Field>
                    <Field
                      label="Công ty / Company"
                      required={
                        active === "quote" || active === "dealer" || active === "oem"
                      }
                    >
                      <input className={inputClass} placeholder="PKG Industries Co., Ltd." />
                    </Field>

                    {active === "quote" && (
                      <>
                        <Field label="Sản phẩm quan tâm" required>
                          <select className={inputClass} required defaultValue="">
                            <option value="" disabled>
                              — Chọn dòng sản phẩm —
                            </option>
                            {PRODUCT_OPTIONS.map((p) => (
                              <option key={p}>{p}</option>
                            ))}
                          </select>
                        </Field>
                        <Field label="Số lượng / Công suất dự án" required>
                          <input
                            className={inputClass}
                            placeholder="VD: 200 packs · 48V 100Ah"
                            required
                          />
                        </Field>
                        <Field label="Ứng dụng / Application">
                          <select className={inputClass} defaultValue="">
                            <option value="" disabled>
                              — Chọn ứng dụng —
                            </option>
                            {APPLICATIONS.map((a) => (
                              <option key={a}>{a}</option>
                            ))}
                          </select>
                        </Field>
                        <Field label="Thời điểm cần báo giá">
                          <select className={inputClass} defaultValue="Trong tuần">
                            <option>Trong tuần</option>
                            <option>Trong tháng</option>
                            <option>Quý tới</option>
                            <option>Đang khảo sát</option>
                          </select>
                        </Field>
                      </>
                    )}

                    {active === "dealer" && (
                      <>
                        <Field label="Tỉnh / Khu vực muốn phân phối" required>
                          <input className={inputClass} placeholder="VD: Hải Dương + Hưng Yên" required />
                        </Field>
                        <Field label="Kinh nghiệm kinh doanh">
                          <select className={inputClass} defaultValue="1–3 năm">
                            <option>Dưới 1 năm</option>
                            <option>1–3 năm</option>
                            <option>Trên 3 năm</option>
                          </select>
                        </Field>
                        <Field label="Kênh bán hiện tại">
                          <select className={inputClass} defaultValue="Showroom">
                            <option>Showroom</option>
                            <option>Online / TMĐT</option>
                            <option>Dự án B2B</option>
                            <option>Đại lý kỹ thuật</option>
                            <option>Khác</option>
                          </select>
                        </Field>
                        <Field label="Doanh thu pin/tháng (VND)">
                          <select className={inputClass} defaultValue="50–200tr">
                            <option>Dưới 50tr</option>
                            <option>50–200tr</option>
                            <option>200tr–1 tỷ</option>
                            <option>Trên 1 tỷ</option>
                          </select>
                        </Field>
                      </>
                    )}

                    {active === "oem" && (
                      <>
                        <Field label="Loại cell" required>
                          <select className={inputClass} required defaultValue="">
                            <option value="" disabled>— Chọn —</option>
                            <option>LiFePO4</option>
                            <option>NMC</option>
                            <option>LTO</option>
                            <option>Chưa rõ — cần tư vấn</option>
                          </select>
                        </Field>
                        <Field label="Voltage / Điện áp (V)" required>
                          <input className={inputClass} placeholder="VD: 48V" required />
                        </Field>
                        <Field label="Capacity / Dung lượng (Ah)" required>
                          <input className={inputClass} placeholder="VD: 100Ah" required />
                        </Field>
                        <Field label="Số lượng dự kiến">
                          <input className={inputClass} placeholder="Mẫu / Sản xuất hàng loạt" />
                        </Field>
                        <div className="md:col-span-2">
                          <Field
                            label="Tài liệu kỹ thuật / Bản vẽ"
                            hint="PDF, JPG, STEP — tối đa 25MB. Optional."
                          >
                            <div className="flex items-center gap-3 border border-dashed border-neutral-300 bg-white px-4 py-5 text-sm text-neutral-500">
                              <Upload className="size-4" />
                              Kéo thả file hoặc click để chọn
                            </div>
                          </Field>
                        </div>
                      </>
                    )}

                    {active === "tech" && (
                      <>
                        <Field label="Sản phẩm đang sử dụng" required>
                          <input className={inputClass} placeholder="VD: PKG-LFP-48V100Ah" required />
                        </Field>
                        <Field label="Serial / Mã đơn hàng">
                          <input className={inputClass} placeholder="Optional" />
                        </Field>
                        <Field label="Thời gian thuận tiện gọi lại">
                          <select className={inputClass} defaultValue="Sáng (8–12h)">
                            <option>Sáng (8–12h)</option>
                            <option>Chiều (13–17h)</option>
                            <option>Cuối ngày (17–20h)</option>
                          </select>
                        </Field>
                      </>
                    )}

                    {active === "warranty" && (
                      <>
                        <Field label="Sản phẩm" required>
                          <input className={inputClass} required />
                        </Field>
                        <Field label="Serial number" required>
                          <input className={inputClass} placeholder="VD: PKG-2024-XXXX" required />
                        </Field>
                        <Field label="Ngày mua">
                          <input className={inputClass} type="date" />
                        </Field>
                        <Field label="Mua tại">
                          <select className={inputClass} defaultValue="PKGbattery (HQ)">
                            <option>PKGbattery (HQ)</option>
                            <option>Đại lý uỷ quyền</option>
                            <option>Khác</option>
                          </select>
                        </Field>
                      </>
                    )}

                    {active === "partnership" && (
                      <Field label="Loại yêu cầu">
                        <select className={inputClass} defaultValue="Hợp tác thương mại">
                          <option>Hợp tác thương mại</option>
                          <option>Truyền thông / báo chí</option>
                          <option>Cung ứng / vendor</option>
                          <option>Tuyển dụng</option>
                          <option>Khác</option>
                        </select>
                      </Field>
                    )}

                    <div className="md:col-span-2">
                      <Field
                        label="Nội dung / Message"
                        required
                        hint="Càng cụ thể, đội ngũ phụ trách phản hồi càng nhanh và chính xác."
                      >
                        <textarea
                          className={inputClass + " min-h-[140px] resize-y"}
                          placeholder={
                            current
                              ? `Mô tả yêu cầu liên quan đến "${current.titleVi}"...`
                              : "Mô tả nhu cầu, ứng dụng, deadline..."
                          }
                          required
                        />
                      </Field>
                    </div>

                    {current && (
                      <div className="md:col-span-2 -mt-2 border-l-2 border-red-600 bg-red-50/60 px-4 py-3 text-sm text-neutral-700">
                        <b className="text-neutral-900">Sau khi gửi:</b>{" "}
                        {current.microcopy}
                      </div>
                    )}

                    <div className="md:col-span-2 flex flex-col items-start justify-between gap-4 border-t border-neutral-200 pt-5 sm:flex-row sm:items-center">
                      <p className="text-xs text-neutral-500 max-w-md">
                        Bằng việc gửi form, bạn đồng ý cho PKGbattery liên hệ
                        lại qua điện thoại / email. Dữ liệu được bảo vệ và
                        không chia sẻ cho bên thứ ba.
                      </p>
                      <button
                        disabled={status === "loading" || !active}
                        className="inline-flex items-center gap-3 bg-red-600 px-7 py-3.5 text-white transition hover:bg-red-700 disabled:opacity-70"
                      >
                        {status === "loading" ? (
                          <Loader2 className="size-4 animate-spin" />
                        ) : (
                          <ArrowRight className="size-4" />
                        )}
                        {current?.cta ?? "Gửi yêu cầu"}
                      </button>
                    </div>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="py-10 text-center"
                  >
                    <div className="mx-auto inline-flex size-16 items-center justify-center bg-red-600/10 text-red-600">
                      <Check className="size-8" />
                    </div>
                    <h3 className="mt-6 text-3xl tracking-tight">
                      Your request has been received.
                    </h3>
                    <p className="mx-auto mt-3 max-w-lg text-neutral-600">
                      PKGbattery team will contact you within business hours.
                      For urgent requests, please call our sales hotline
                      directly.
                    </p>
                    <div className="mt-8 flex flex-wrap justify-center gap-3">
                      <a
                        href="tel:0989120088"
                        className="inline-flex items-center gap-2 bg-neutral-900 px-6 py-3 text-white"
                      >
                        <Phone className="size-4" /> Call Sales
                      </a>
                      <a
                        href="https://zalo.me/0989120088"
                        className="inline-flex items-center gap-2 border border-neutral-900 px-6 py-3"
                      >
                        <MessageCircle className="size-4" /> Chat Zalo
                      </a>
                      <button
                        onClick={() => {
                          setStatus("idle");
                          setActive(null);
                          requestAnimationFrame(() =>
                            selectorRef.current?.scrollIntoView({
                              behavior: "smooth",
                            })
                          );
                        }}
                        className="text-sm text-neutral-600 underline underline-offset-4 hover:text-red-600"
                      >
                        Submit another inquiry
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Process below — secondary info */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {[
            {
              t: "Định tuyến yêu cầu",
              d: "Form đến đúng team: Sales B2B, Channel, OEM, After-sales hoặc Partnership.",
            },
            {
              t: "Liên hệ xác nhận",
              d: "Gọi điện hoặc Zalo trong ~12 phút (giờ làm việc) để xác nhận thông số.",
            },
            {
              t: "Đề xuất chính thức",
              d: "Gửi quotation, dealer policy, OEM proposal hoặc kế hoạch xử lý trong 24h.",
            },
          ].map((s, i) => (
            <div
              key={s.t}
              className="border border-neutral-200 bg-white p-5"
            >
              <div className="text-[11px] uppercase tracking-[0.2em] text-red-600">
                Phase 0{i + 1}
              </div>
              <div className="mt-2 tracking-tight">{s.t}</div>
              <p className="mt-1 text-sm text-neutral-500 leading-relaxed">
                {s.d}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
