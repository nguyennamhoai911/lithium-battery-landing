import Image from "next/image"
import { ArrowRight, Phone } from "lucide-react"

export function Hero() {
  return (
    <section
      className="relative overflow-hidden pt-28 lg:pt-32 pb-20 lg:pb-28 bg-background"
      aria-label="Giới thiệu PKGBattery OEM/ODM"
    >
      {/* Subtle technical grid */}
      <div className="absolute inset-0 bg-grid-light opacity-60 [mask-image:radial-gradient(ellipse_at_top_left,black_30%,transparent_75%)]" aria-hidden />
      {/* Soft red glow accent */}
      <div
        className="absolute -top-40 -right-32 h-[520px] w-[520px] rounded-full blur-3xl opacity-20 animate-pulse-soft"
        style={{ background: "radial-gradient(closest-side, var(--brand) 0%, transparent 70%)" }}
        aria-hidden
      />

      {/* Big dark mass on the right (no rigid 2-column) */}
      <div
        className="absolute right-0 top-24 hidden lg:block w-[46%] h-[560px] bg-ink rounded-bl-[2px]"
        aria-hidden
      >
        <div className="absolute inset-0 bg-grid-dark opacity-40" />
        <div className="absolute inset-0 bg-noise opacity-50" />
        {/* Ascending energy lines */}
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 600 560"
          preserveAspectRatio="none"
          aria-hidden
        >
          <defs>
            <linearGradient id="hLine" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0%" stopColor="var(--brand)" stopOpacity="0" />
              <stop offset="50%" stopColor="var(--brand)" stopOpacity="0.7" />
              <stop offset="100%" stopColor="var(--brand)" stopOpacity="0" />
            </linearGradient>
          </defs>
          <line x1="0" y1="120" x2="600" y2="120" stroke="url(#hLine)" strokeWidth="1" />
          <line x1="0" y1="280" x2="600" y2="280" stroke="url(#hLine)" strokeWidth="1" />
          <line x1="0" y1="440" x2="600" y2="440" stroke="url(#hLine)" strokeWidth="1" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-[1280px] px-5 lg:px-10 grid lg:grid-cols-12 gap-10 lg:gap-8">
        {/* Left: copy */}
        <div className="lg:col-span-7 relative">
          <div className="inline-flex items-center gap-3 mb-7">
            <span className="relative inline-flex h-2 w-2">
              <span className="absolute inset-0 rounded-full bg-brand" />
              <span className="absolute inset-0 rounded-full bg-brand animate-ping opacity-60" />
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
              OEM / ODM · Industrial Lithium
            </span>
            <span className="h-px w-16 bg-hairline-strong" aria-hidden />
          </div>

          <h1 className="text-balance font-semibold tracking-tight leading-[1.04] text-[40px] sm:text-[52px] lg:text-[68px]">
            Sản xuất pin lithium công nghiệp{" "}
            <span className="relative inline-block">
              <span className="relative z-10">theo yêu cầu</span>
              <span
                className="absolute left-0 right-0 bottom-1 h-[10px] bg-brand/20 -z-0"
                aria-hidden
              />
            </span>{" "}
            cho doanh nghiệp.
          </h1>

          <p className="mt-7 max-w-[640px] text-pretty text-[16px] lg:text-[17px] leading-relaxed text-foreground/75">
            PKGBattery đồng hành từ tư vấn kỹ thuật, thiết kế giải pháp, thử mẫu đến sản xuất hoàn thiện
            tại nhà máy riêng tại Việt Nam — phục vụ doanh nghiệp, nhà máy và đối tác phân phối trong và
            ngoài nước.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <a
              href="tel:+842871000000"
              className="group inline-flex items-center justify-center gap-2.5 h-12 px-6 rounded-sm bg-brand text-brand-foreground text-[14px] font-medium tracking-tight hover:bg-brand-strong transition-all hover:shadow-[0_8px_30px_-8px_color-mix(in_oklch,var(--brand)_60%,transparent)]"
            >
              <Phone className="h-4 w-4" aria-hidden />
              Gọi tư vấn dự án
              <ArrowRight className="h-4 w-4 -translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all" />
            </a>
            <a
              href="#lien-he"
              className="group inline-flex items-center justify-center gap-2.5 h-12 px-6 rounded-sm border border-foreground/15 text-foreground text-[14px] font-medium tracking-tight hover:border-foreground hover:bg-foreground/[0.03] transition-colors"
            >
              Gửi yêu cầu thiết kế
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Trust line */}
          <ul className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-3 max-w-[640px]">
            {[
              "Nhà máy riêng",
              "Hỗ trợ R&D",
              "Thiết kế theo yêu cầu",
              "Kiểm soát đầu vào – đầu ra",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <span className="mt-1.5 h-1 w-3 bg-brand shrink-0" aria-hidden />
                <span className="text-[13px] leading-snug text-foreground/80">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: visual composition */}
        <div className="lg:col-span-5 relative min-h-[420px] lg:min-h-[560px]">
          {/* Floating product image with gradient mask */}
          <div className="absolute -top-2 right-0 lg:right-[-40px] w-[88%] aspect-[4/5] rounded-sm overflow-hidden">
            <div className="absolute inset-0">
              <Image
                src="/placeholder.svg?height=900&width=720&query=industrial%20lithium%20battery%20pack%20close%20up%20on%20black%20background%20studio%20lighting%20product%20photography%20technical"
                alt="Pin lithium công nghiệp PKGBattery sản xuất theo yêu cầu"
                fill
                priority
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-cover"
              />
            </div>
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(135deg, color-mix(in oklch, var(--ink) 25%, transparent) 0%, transparent 40%), linear-gradient(0deg, color-mix(in oklch, var(--ink) 60%, transparent) 0%, transparent 35%)",
              }}
              aria-hidden
            />
            {/* Technical caption */}
            <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-ink-foreground">
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] opacity-70">
                  Pack reference · 048
                </div>
                <div className="text-[13px] mt-1 leading-tight font-medium">
                  Lithium · 48V / 200Ah · BMS tích hợp
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-brand" aria-hidden />
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] opacity-80">
                  In-house
                </span>
              </div>
            </div>
          </div>

          {/* Stat float card */}
          <div className="absolute bottom-2 left-0 lg:-left-6 w-[260px] bg-background border border-hairline rounded-sm p-5 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.18)]">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                Capacity
              </span>
              <span className="h-1 w-1 rounded-full bg-brand" />
            </div>
            <div className="mt-2 flex items-baseline gap-1">
              <span className="text-[40px] font-semibold tracking-tight leading-none">100+</span>
              <span className="text-[12px] text-muted-foreground">dự án đã triển khai</span>
            </div>
            <div className="mt-3 h-px bg-hairline" />
            <div className="mt-3 flex items-center justify-between text-[11px] text-muted-foreground">
              <span>Pack tùy biến</span>
              <span className="font-mono">12V – 800V</span>
            </div>
          </div>

          {/* Vertical scan line accent */}
          <div className="absolute top-4 right-2 h-[60%] w-px bg-gradient-to-b from-transparent via-brand/60 to-transparent" aria-hidden>
            <span className="absolute inset-0 animate-scan-y bg-gradient-to-b from-transparent via-brand to-transparent" />
          </div>
        </div>
      </div>

      {/* Bottom thin line */}
      <div className="mt-20 mx-auto max-w-[1280px] px-5 lg:px-10 flex items-center gap-4">
        <span className="h-px flex-1 bg-hairline" />
        <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
          Cuộn để khám phá năng lực
        </span>
        <span className="h-px w-12 bg-foreground" />
      </div>
    </section>
  )
}
