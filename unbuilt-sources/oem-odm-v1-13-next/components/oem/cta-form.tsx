"use client"

import type React from "react"
import { useState } from "react"
import { ArrowRight, Phone, Paperclip, Mail, MapPin, Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"

export function CtaForm() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    // Placeholder submit. Wire to backend later.
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 800)
  }

  return (
    <section
      id="lien-he"
      className="relative py-24 lg:py-32 bg-ink text-ink-foreground overflow-hidden"
      aria-labelledby="cta-heading"
    >
      <div className="absolute inset-0 bg-grid-dark opacity-50" aria-hidden />
      <div className="absolute inset-0 bg-noise opacity-50" aria-hidden />
      <div
        className="absolute -bottom-32 -right-32 h-[520px] w-[520px] rounded-full blur-3xl opacity-25"
        style={{ background: "radial-gradient(closest-side, var(--brand) 0%, transparent 70%)" }}
        aria-hidden
      />
      <div
        className="absolute -top-40 -left-32 h-[400px] w-[400px] rounded-full blur-3xl opacity-15"
        style={{ background: "radial-gradient(closest-side, var(--brand) 0%, transparent 70%)" }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-[1280px] px-5 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Left: copy */}
          <div className="lg:col-span-5 self-start">
            <div className="flex items-center gap-3 mb-6">
              <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-brand">
                08 — Tư vấn dự án
              </span>
              <span className="h-px w-10 bg-brand/70" aria-hidden />
            </div>
            <h2
              id="cta-heading"
              className="text-balance text-[34px] sm:text-[42px] lg:text-[52px] font-semibold tracking-tight leading-[1.05]"
            >
              Bạn đang cần phát triển một{" "}
              <span className="text-brand">sản phẩm pin riêng?</span>
            </h2>
            <p className="mt-6 text-pretty text-[15px] leading-relaxed text-ink-foreground/75 max-w-md">
              Hãy chia sẻ nhu cầu ứng dụng, thông số mong muốn hoặc bài toán vận hành. Đội ngũ
              PKGBattery sẽ tư vấn hướng cấu hình phù hợp trước khi báo giá.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <a
                href="tel:+842871000000"
                className="group inline-flex items-center justify-center gap-2.5 h-12 px-6 rounded-sm bg-brand text-brand-foreground text-[14px] font-medium tracking-tight hover:bg-brand-strong transition-colors"
              >
                <Phone className="h-4 w-4" />
                Gọi tư vấn ngay
              </a>
              <a
                href="mailto:hello@pkgbattery.com"
                className="group inline-flex items-center justify-center gap-2.5 h-12 px-6 rounded-sm border border-white/15 text-ink-foreground hover:border-white hover:bg-white/5 text-[14px] font-medium tracking-tight transition-colors"
              >
                <Mail className="h-4 w-4" />
                hello@pkgbattery.com
              </a>
            </div>

            <ul className="mt-10 space-y-4 text-[13.5px] text-ink-foreground/75">
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 text-brand mt-0.5 shrink-0" />
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-foreground/55">
                    Hotline doanh nghiệp
                  </div>
                  <div>+84 28 7100 0000</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-brand mt-0.5 shrink-0" />
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-foreground/55">
                    Nhà máy
                  </div>
                  <div>Khu công nghiệp · Việt Nam</div>
                </div>
              </li>
            </ul>
          </div>

          {/* Right: form card */}
          <div className="lg:col-span-7">
            <div className="relative rounded-sm border border-white/10 bg-ink-2/60 backdrop-blur-sm p-6 sm:p-8 lg:p-10 glow-red">
              {submitted ? (
                <div className="flex flex-col items-start gap-4 py-8">
                  <div className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-brand">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                    Đã gửi yêu cầu
                  </div>
                  <h3 className="text-[24px] sm:text-[28px] font-semibold tracking-tight">
                    Cảm ơn bạn — chúng tôi sẽ liên hệ trong thời gian sớm nhất.
                  </h3>
                  <p className="text-[14px] leading-relaxed text-ink-foreground/75 max-w-md">
                    Đội ngũ PKGBattery sẽ rà soát thông tin và phản hồi qua điện thoại hoặc email để hẹn
                    buổi tư vấn kỹ thuật.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-2 inline-flex items-center gap-2 text-[13px] text-ink-foreground/80 hover:text-brand transition-colors"
                  >
                    Gửi yêu cầu khác
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              ) : (
                <form className="grid grid-cols-1 sm:grid-cols-2 gap-5" onSubmit={onSubmit}>
                  <Field label="Họ tên" name="name" required placeholder="Nguyễn Văn A" />
                  <Field label="Số điện thoại" name="phone" required type="tel" placeholder="+84 ..." />
                  <Field label="Doanh nghiệp" name="company" placeholder="Tên công ty" className="sm:col-span-2" />
                  <Field
                    label="Nhu cầu / ứng dụng"
                    name="application"
                    placeholder="Ví dụ: pin cho AGV 48V / 200Ah, hoạt động 16h/ngày..."
                    className="sm:col-span-2"
                    multiline
                  />
                  <div className="sm:col-span-2">
                    <label className="block">
                      <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-foreground/55">
                        Tệp đính kèm (tuỳ chọn)
                      </span>
                      <span className="mt-2 flex items-center gap-3 px-3 py-2.5 rounded-sm border border-dashed border-white/15 bg-white/[0.02] text-[13px] text-ink-foreground/70 cursor-pointer hover:border-white/35 transition-colors">
                        <Paperclip className="h-4 w-4 text-brand" />
                        <span>Tải lên bản vẽ, datasheet hoặc mô tả kỹ thuật</span>
                        <input type="file" name="attachment" className="sr-only" />
                      </span>
                    </label>
                  </div>

                  <div className="sm:col-span-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                    <p className="text-[12px] text-ink-foreground/55 leading-relaxed max-w-sm">
                      Thông tin của bạn chỉ dùng để tư vấn dự án. PKGBattery cam kết không chia sẻ cho bên
                      thứ ba.
                    </p>
                    <button
                      type="submit"
                      disabled={loading}
                      className={cn(
                        "group inline-flex items-center justify-center gap-2.5 h-12 px-6 rounded-sm bg-brand text-brand-foreground text-[14px] font-medium tracking-tight transition-all disabled:opacity-70",
                        "hover:bg-brand-strong",
                      )}
                    >
                      {loading ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          Đang gửi…
                        </>
                      ) : (
                        <>
                          Gửi yêu cầu dự án
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
  className,
  multiline,
}: {
  label: string
  name: string
  type?: string
  placeholder?: string
  required?: boolean
  className?: string
  multiline?: boolean
}) {
  return (
    <label className={cn("block", className)}>
      <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-foreground/55">
        {label}
        {required ? <span className="text-brand"> *</span> : null}
      </span>
      {multiline ? (
        <textarea
          name={name}
          placeholder={placeholder}
          required={required}
          rows={4}
          className="mt-2 w-full bg-transparent border border-white/15 rounded-sm px-3 py-2.5 text-[14px] text-ink-foreground placeholder:text-ink-foreground/30 focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/30 transition-all resize-none"
        />
      ) : (
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          required={required}
          className="mt-2 w-full h-11 bg-transparent border border-white/15 rounded-sm px-3 text-[14px] text-ink-foreground placeholder:text-ink-foreground/30 focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/30 transition-all"
        />
      )}
    </label>
  )
}
