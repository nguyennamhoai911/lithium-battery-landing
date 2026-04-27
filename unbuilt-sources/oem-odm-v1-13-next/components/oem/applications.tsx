"use client"

import { useState } from "react"
import { Forklift, Bot, Warehouse, Battery, Car, Wrench, FolderCog } from "lucide-react"
import { cn } from "@/lib/utils"

const apps = [
  {
    icon: Forklift,
    title: "Xe nâng điện",
    desc: "Pin chuyên dụng cho xe nâng điện công nghiệp với độ bền chu kỳ cao và khả năng sạc nhanh.",
    pos: "top-[8%] left-[6%]",
  },
  {
    icon: Bot,
    title: "AGV / Robot công nghiệp",
    desc: "Cấu hình pin tối ưu cho AGV và robot di động, đảm bảo runtime và độ ổn định trong vận hành liên tục.",
    pos: "top-[6%] right-[8%]",
  },
  {
    icon: Warehouse,
    title: "Thiết bị lưu kho",
    desc: "Giải pháp pin cho thiết bị lưu kho, kho thông minh, hệ thống vận chuyển nội bộ.",
    pos: "top-[42%] left-[2%]",
  },
  {
    icon: Battery,
    title: "Hệ thống UPS / backup",
    desc: "Pin lithium công nghiệp cho UPS, năng lượng dự phòng và lưu trữ năng lượng.",
    pos: "top-[44%] right-[2%]",
  },
  {
    icon: Car,
    title: "Xe điện chuyên dụng",
    desc: "Pin cho xe điện chuyên dụng, xe công vụ, xe nội bộ trong nhà máy và khu công nghiệp.",
    pos: "bottom-[8%] left-[10%]",
  },
  {
    icon: Wrench,
    title: "Thiết bị công nghiệp tùy chỉnh",
    desc: "Cấu hình pin riêng cho thiết bị công nghiệp đặc thù, không tìm thấy ở giải pháp chuẩn.",
    pos: "bottom-[6%] right-[10%]",
  },
]

export function Applications() {
  const [hover, setHover] = useState<number | null>(null)

  return (
    <section
      id="ung-dung"
      className="relative py-24 lg:py-32 bg-surface-2 overflow-hidden"
      aria-labelledby="apps-heading"
    >
      <div className="absolute inset-0 bg-grid-light opacity-50" aria-hidden />

      <div className="relative mx-auto max-w-[1280px] px-5 lg:px-10">
        <div className="max-w-2xl mb-14 lg:mb-16">
          <div className="flex items-center gap-3 mb-5">
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-brand">
              04 — Ứng dụng công nghiệp
            </span>
            <span className="h-px w-10 bg-brand" aria-hidden />
          </div>
          <h2
            id="apps-heading"
            className="text-balance text-[34px] sm:text-[42px] lg:text-[52px] font-semibold tracking-tight leading-[1.05]"
          >
            Một nền tảng pin lithium công nghiệp,{" "}
            <span className="text-foreground/40">nhiều bài toán doanh nghiệp khác nhau.</span>
          </h2>
        </div>

        {/* Cluster layout */}
        <div className="relative mx-auto max-w-[1100px] aspect-[16/11] sm:aspect-[16/10] hidden md:block">
          {/* Connecting svg */}
          <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 100 70"
            preserveAspectRatio="none"
            aria-hidden
          >
            <defs>
              <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="var(--brand)" stopOpacity="0.18" />
                <stop offset="60%" stopColor="var(--brand)" stopOpacity="0" />
              </radialGradient>
            </defs>
            <rect x="30" y="20" width="40" height="30" fill="url(#coreGlow)" />
            {/* lines from core to apps */}
            {[
              [50, 35, 14, 12],
              [50, 35, 86, 10],
              [50, 35, 8, 38],
              [50, 35, 92, 38],
              [50, 35, 18, 60],
              [50, 35, 82, 60],
            ].map(([x1, y1, x2, y2], i) => (
              <line
                key={i}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke={hover === i ? "var(--brand)" : "color-mix(in oklch, var(--foreground) 14%, transparent)"}
                strokeWidth="0.18"
                strokeDasharray="0.5 0.5"
              />
            ))}
          </svg>

          {/* Core */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] sm:w-[320px]">
            <div className="relative bg-ink text-ink-foreground rounded-sm p-6 overflow-hidden">
              <div className="absolute inset-0 bg-grid-dark opacity-40" />
              <div className="absolute inset-0 bg-noise opacity-50" />
              <div className="relative">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] opacity-70">
                    Core platform
                  </span>
                </div>
                <h3 className="mt-3 text-[22px] font-semibold leading-tight tracking-tight">
                  Industrial Lithium Battery Platform
                </h3>
                <p className="mt-2 text-[12.5px] leading-relaxed opacity-75">
                  Nền tảng pin lithium công nghiệp PKGBattery — tùy biến theo từng ứng dụng, từng khách hàng.
                </p>
                <div className="mt-4 grid grid-cols-3 gap-2 font-mono text-[10px] uppercase tracking-[0.18em] opacity-80">
                  <span>12V–800V</span>
                  <span>BMS</span>
                  <span>QA</span>
                </div>
              </div>
              <span className="absolute -inset-1 -z-10 rounded-sm bg-brand/20 blur-2xl" aria-hidden />
            </div>
          </div>

          {/* Application nodes */}
          {apps.map((a, i) => {
            const Icon = a.icon
            const isHover = hover === i
            return (
              <button
                key={a.title}
                type="button"
                onMouseEnter={() => setHover(i)}
                onMouseLeave={() => setHover(null)}
                onFocus={() => setHover(i)}
                onBlur={() => setHover(null)}
                className={cn(
                  "absolute group text-left",
                  a.pos,
                  "w-[220px] transition-transform duration-300",
                  isHover && "z-10",
                )}
                aria-label={a.title}
              >
                <span
                  className={cn(
                    "block bg-background border rounded-sm p-4 transition-all duration-300",
                    isHover ? "border-brand shadow-[0_18px_50px_-18px_color-mix(in_oklch,var(--brand)_50%,transparent)]" : "border-hairline",
                  )}
                >
                  <span className="flex items-center gap-2.5">
                    <span
                      className={cn(
                        "inline-flex h-8 w-8 items-center justify-center rounded-sm transition-colors",
                        isHover ? "bg-brand text-brand-foreground" : "bg-foreground text-background",
                      )}
                    >
                      <Icon className="h-4 w-4" strokeWidth={1.6} />
                    </span>
                    <span className="text-[14px] font-medium tracking-tight">{a.title}</span>
                  </span>
                  <span
                    className={cn(
                      "block mt-3 text-[12.5px] leading-relaxed text-foreground/65 transition-all duration-300 overflow-hidden",
                      isHover ? "max-h-32 opacity-100" : "max-h-0 opacity-0",
                    )}
                  >
                    {a.desc}
                  </span>
                </span>
              </button>
            )
          })}

          {/* Specialty floating */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-background border border-hairline text-[12px] text-foreground/75">
            <FolderCog className="h-3.5 w-3.5 text-brand" />
            Dự án đặc thù theo yêu cầu doanh nghiệp
          </div>
        </div>

        {/* Mobile fallback list */}
        <ul className="md:hidden grid gap-3">
          <li className="bg-ink text-ink-foreground rounded-sm p-5">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] opacity-70">Core</div>
            <div className="mt-1 text-[18px] font-semibold leading-tight">
              Industrial Lithium Battery Platform
            </div>
            <p className="mt-2 text-[12.5px] leading-relaxed opacity-75">
              Nền tảng pin lithium công nghiệp PKGBattery — tùy biến theo từng ứng dụng.
            </p>
          </li>
          {apps.map((a) => {
            const Icon = a.icon
            return (
              <li key={a.title} className="bg-background border border-hairline rounded-sm p-4">
                <div className="flex items-center gap-2.5">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-sm bg-foreground text-background">
                    <Icon className="h-4 w-4" strokeWidth={1.6} />
                  </span>
                  <span className="text-[14px] font-medium tracking-tight">{a.title}</span>
                </div>
                <p className="mt-2 text-[13px] leading-relaxed text-foreground/65">{a.desc}</p>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
