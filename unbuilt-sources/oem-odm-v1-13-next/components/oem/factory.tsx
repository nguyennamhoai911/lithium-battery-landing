import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

const tiles = [
  {
    src: "/placeholder.svg?height=900&width=720&query=industrial%20lithium%20battery%20factory%20interior%20long%20view%20assembly%20line%20vietnam%20moody%20lighting",
    alt: "Tổng thể nhà máy sản xuất pin lithium PKGBattery",
    caption: "Khu vực dây chuyền lắp ráp",
    label: "Assembly",
    span: "lg:col-span-7 aspect-[4/3]",
  },
  {
    src: "/placeholder.svg?height=600&width=600&query=engineer%20female%20vietnam%20battery%20R%26D%20laboratory%20technical%20equipment%20serious%20focus",
    alt: "Kỹ sư R&D PKGBattery làm việc trong phòng thí nghiệm",
    caption: "Phòng kỹ thuật & R&D",
    label: "R&D",
    span: "lg:col-span-5 aspect-[4/3]",
  },
  {
    src: "/placeholder.svg?height=600&width=600&query=BMS%20battery%20pack%20assembly%20worker%20gloves%20industrial%20close%20up%20wires%20circuit",
    alt: "Lắp ráp BMS và cấu hình pack pin",
    caption: "Lắp ráp BMS & pack pin",
    label: "BMS",
    span: "lg:col-span-4 aspect-[1/1]",
  },
  {
    src: "/placeholder.svg?height=600&width=900&query=lithium%20battery%20cell%20inspection%20quality%20control%20industrial%20microscope%20gloves%20technician",
    alt: "Kiểm tra chất lượng cell pin lithium tại PKGBattery",
    caption: "Kiểm tra chất lượng cell",
    label: "QC line",
    span: "lg:col-span-4 aspect-[1/1]",
  },
  {
    src: "/placeholder.svg?height=600&width=900&query=industrial%20battery%20factory%20warehouse%20packaging%20workers%20Vietnam%20clean%20organized%20rows",
    alt: "Khu vực đóng gói và bàn giao tại nhà máy PKGBattery",
    caption: "Đóng gói & bàn giao",
    label: "Outbound",
    span: "lg:col-span-4 aspect-[1/1]",
  },
]

export function Factory() {
  return (
    <section
      id="nha-may"
      className="relative py-24 lg:py-32 bg-ink text-ink-foreground overflow-hidden"
      aria-labelledby="factory-heading"
    >
      <div className="absolute inset-0 bg-grid-dark opacity-50" aria-hidden />
      <div className="absolute inset-0 bg-noise opacity-60" aria-hidden />
      <div
        className="absolute -top-40 left-1/3 h-[500px] w-[500px] rounded-full blur-3xl opacity-30"
        style={{ background: "radial-gradient(closest-side, var(--brand) 0%, transparent 70%)" }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-[1280px] px-5 lg:px-10">
        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 mb-12 lg:mb-16">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-5">
              <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-brand">
                05 — Nhà máy & con người
              </span>
              <span className="h-px w-10 bg-brand/70" aria-hidden />
            </div>
            <h2
              id="factory-heading"
              className="text-balance text-[34px] sm:text-[42px] lg:text-[54px] font-semibold tracking-tight leading-[1.05]"
            >
              Một nhà máy thật.{" "}
              <span className="text-ink-foreground/55">Đội ngũ thật.</span>{" "}
              <span className="text-brand">Năng lực thật.</span>
            </h2>
          </div>
          <div className="lg:col-span-5 self-end">
            <p className="text-[15px] leading-relaxed text-ink-foreground/75 max-w-md">
              Khu vực sản xuất, R&D, kiểm tra chất lượng và đóng gói đều nằm trong nhà máy PKGBattery
              tại Việt Nam. Tham quan nhà máy luôn là lựa chọn cho các đối tác nghiêm túc.
            </p>
            <a
              href="#lien-he"
              className="mt-6 inline-flex items-center gap-2 text-[14px] font-medium text-ink-foreground hover:text-brand transition-colors"
            >
              Đặt lịch tham quan nhà máy
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>

        {/* Collage */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 lg:gap-5">
          {tiles.map((t, i) => (
            <figure
              key={i}
              className={`group relative overflow-hidden rounded-sm bg-ink-2 ${t.span}`}
            >
              <Image
                src={t.src || "/placeholder.svg"}
                alt={t.alt}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover opacity-85 transition-all duration-700 group-hover:scale-[1.04] group-hover:opacity-100"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, transparent 40%, color-mix(in oklch, var(--ink) 80%, transparent) 100%)",
                }}
              />
              <figcaption className="absolute inset-x-0 bottom-0 p-5 flex items-end justify-between gap-3 text-ink-foreground">
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.22em] opacity-70">
                    {t.label}
                  </div>
                  <div className="mt-1 text-[14px] font-medium leading-tight">{t.caption}</div>
                </div>
                <span className="opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-sm bg-brand">
                    <ArrowUpRight className="h-4 w-4 text-brand-foreground" />
                  </span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.22em] text-ink-foreground/50">
          * Hình ảnh hiện tại là placeholder — sẽ thay bằng ảnh nhà máy thật sau khi khách hàng cung cấp.
        </p>
      </div>
    </section>
  )
}
