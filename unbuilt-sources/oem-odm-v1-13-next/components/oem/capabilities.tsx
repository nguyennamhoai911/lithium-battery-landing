"use client"

import Image from "next/image"
import { useState } from "react"
import { Cpu, Layers, Package, ShieldAlert, Boxes, Tag } from "lucide-react"
import { cn } from "@/lib/utils"

const capabilities = [
  {
    code: "C-01",
    icon: Cpu,
    title: "Tư vấn cấu hình theo ứng dụng",
    desc: "Phân tích bài toán vận hành, đề xuất cấu hình điện áp, dung lượng, dòng xả phù hợp với thiết bị thực tế.",
    spec: ["Voltage", "Capacity", "C-rate", "Cycle life"],
  },
  {
    code: "C-02",
    icon: Layers,
    title: "Thiết kế pack theo kích thước",
    desc: "Thiết kế cơ khí pack pin theo không gian lắp đặt, trọng lượng, vị trí cổng kết nối và yêu cầu tản nhiệt.",
    spec: ["Mechanical", "Cooling", "Layout", "Weight"],
  },
  {
    code: "C-03",
    icon: Package,
    title: "Tùy chỉnh vỏ, kết cấu, thương hiệu",
    desc: "Vỏ pack, kết cấu chịu lực, giao tiếp truyền thông, in thương hiệu, bao bì đều có thể tùy biến theo yêu cầu.",
    spec: ["Enclosure", "I/O", "Branding", "Packaging"],
  },
  {
    code: "C-04",
    icon: ShieldAlert,
    title: "BMS, an toàn, thử nghiệm thực tế",
    desc: "Lựa chọn và cấu hình BMS, thử nghiệm an toàn, kiểm tra hiệu năng theo điều kiện vận hành mô phỏng.",
    spec: ["BMS", "Safety", "EMC", "Field-test"],
  },
  {
    code: "C-05",
    icon: Boxes,
    title: "Sản xuất mẫu & sản xuất hàng loạt",
    desc: "Từ prototype, pilot run đến sản xuất hàng loạt với năng lực kiểm soát chất lượng đồng đều giữa các lô.",
    spec: ["Prototype", "Pilot", "Mass-prod", "Batch QC"],
  },
  {
    code: "C-06",
    icon: Tag,
    title: "Private label & sản phẩm riêng",
    desc: "Hỗ trợ đối tác xây dựng dòng sản phẩm pin riêng, từ tài liệu kỹ thuật đến hỗ trợ sau bán hàng.",
    spec: ["Private label", "Docs", "After-sales", "Logistics"],
  },
]

export function Capabilities() {
  const [active, setActive] = useState(0)
  const Active = capabilities[active]
  const ActiveIcon = Active.icon

  return (
    <section
      id="oem-odm"
      className="relative py-24 lg:py-32 bg-surface overflow-hidden"
      aria-labelledby="cap-heading"
    >
      {/* Tech pattern */}
      <div className="absolute inset-0 bg-grid-light opacity-50" aria-hidden />
      <div className="absolute inset-x-0 top-0 h-px bg-hairline" aria-hidden />

      <div className="relative mx-auto max-w-[1280px] px-5 lg:px-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14 lg:mb-20">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-5">
              <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-brand">
                02 — Năng lực OEM/ODM
              </span>
              <span className="h-px w-10 bg-brand" aria-hidden />
            </div>
            <h2
              id="cap-heading"
              className="text-balance text-[34px] sm:text-[42px] lg:text-[52px] font-semibold tracking-tight leading-[1.05]"
            >
              Mọi cấu phần của một pack pin đều có thể được{" "}
              <span className="text-brand">thiết kế lại</span> theo bài toán của bạn.
            </h2>
          </div>
          <p className="text-[15px] leading-relaxed text-foreground/70 max-w-md">
            Di chuột qua từng năng lực để xem chi tiết kỹ thuật. PKGBattery hỗ trợ doanh nghiệp ở
            mọi giai đoạn — từ tư vấn ban đầu đến vận hành sau sản xuất.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left: visual exploded view */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative aspect-[4/5] sm:aspect-[5/6] lg:aspect-[4/5] rounded-sm overflow-hidden bg-ink">
              <Image
                src="/placeholder.svg?height=900&width=720&query=exploded%20view%20industrial%20lithium%20battery%20pack%20technical%20drawing%20black%20background%20cells%20BMS%20enclosure"
                alt="Sơ đồ exploded view pack pin lithium công nghiệp"
                fill
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
              <div className="absolute inset-0 bg-grid-dark opacity-30" />

              {/* Floating spec callouts */}
              <div className="absolute top-6 left-6 right-6 flex items-start justify-between text-ink-foreground">
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.22em] opacity-70">
                    {Active.code}
                  </div>
                  <div className="mt-1 text-[15px] font-medium">{Active.title}</div>
                </div>
                <div className="h-9 w-9 rounded-sm bg-brand/15 border border-brand/40 inline-flex items-center justify-center">
                  <ActiveIcon className="h-4 w-4 text-brand" />
                </div>
              </div>

              {/* Dashed connectors */}
              <svg
                className="absolute inset-0 h-full w-full pointer-events-none"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                aria-hidden
              >
                <line x1="50" y1="50" x2="20" y2="20" stroke="var(--brand)" strokeWidth="0.2" strokeDasharray="0.6 0.6" opacity="0.7" />
                <line x1="50" y1="50" x2="86" y2="22" stroke="var(--brand)" strokeWidth="0.2" strokeDasharray="0.6 0.6" opacity="0.7" />
                <line x1="50" y1="50" x2="18" y2="86" stroke="var(--brand)" strokeWidth="0.2" strokeDasharray="0.6 0.6" opacity="0.7" />
                <line x1="50" y1="50" x2="84" y2="84" stroke="var(--brand)" strokeWidth="0.2" strokeDasharray="0.6 0.6" opacity="0.7" />
              </svg>

              {/* Spec table */}
              <div className="absolute bottom-6 left-6 right-6 text-ink-foreground">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-3 gap-y-2 border-t border-white/15 pt-4">
                  {Active.spec.map((s) => (
                    <div key={s} className="flex items-center gap-2 min-w-0">
                      <span className="h-1 w-1 rounded-full bg-brand shrink-0" />
                      <span className="font-mono text-[10px] uppercase tracking-[0.18em] truncate">
                        {s}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right: capability flow list */}
          <div className="lg:col-span-7 order-1 lg:order-2 relative">
            <ul className="divide-y divide-hairline border-y border-hairline">
              {capabilities.map((c, i) => {
                const Icon = c.icon
                const isActive = active === i
                return (
                  <li key={c.code}>
                    <button
                      type="button"
                      onMouseEnter={() => setActive(i)}
                      onFocus={() => setActive(i)}
                      onClick={() => setActive(i)}
                      className={cn(
                        "group w-full text-left grid grid-cols-[48px_1fr_auto] items-center gap-5 py-6 px-1 transition-colors",
                        isActive ? "bg-background" : "bg-transparent hover:bg-background/60",
                      )}
                      aria-pressed={isActive}
                    >
                      <span className="font-mono text-[11px] tracking-[0.18em] text-muted-foreground">
                        {c.code}
                      </span>
                      <span className="flex items-center gap-4 min-w-0">
                        <span
                          className={cn(
                            "inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-sm border transition-colors",
                            isActive
                              ? "bg-foreground border-foreground text-background"
                              : "bg-background border-hairline text-foreground",
                          )}
                        >
                          <Icon className="h-4 w-4" strokeWidth={1.6} aria-hidden />
                        </span>
                        <span className="min-w-0">
                          <span
                            className={cn(
                              "block text-[16px] sm:text-[17px] font-medium tracking-tight truncate transition-colors",
                              isActive && "text-foreground",
                            )}
                          >
                            {c.title}
                          </span>
                          <span
                            className={cn(
                              "block mt-1 text-[13px] text-foreground/60 max-w-[560px] transition-all overflow-hidden",
                              isActive ? "max-h-20 opacity-100" : "max-h-0 sm:max-h-5 opacity-70 sm:truncate",
                            )}
                          >
                            {c.desc}
                          </span>
                        </span>
                      </span>
                      <span
                        className={cn(
                          "h-1.5 w-1.5 rounded-full transition-all",
                          isActive ? "bg-brand scale-150" : "bg-foreground/20",
                        )}
                        aria-hidden
                      />
                    </button>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
