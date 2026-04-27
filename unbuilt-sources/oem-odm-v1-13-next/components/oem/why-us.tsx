import { Factory, FlaskConical, Settings2, Boxes, ShieldCheck, Users2 } from "lucide-react"

const reasons = [
  {
    icon: Factory,
    title: "Nhà máy riêng tại Việt Nam",
    desc: "Toàn bộ quy trình sản xuất đặt tại nhà máy của PKGBattery, đảm bảo tốc độ, tính linh hoạt và quyền kiểm soát chất lượng.",
  },
  {
    icon: Boxes,
    title: "Mạnh về full product, không chỉ linh kiện",
    desc: "Tập trung sản xuất sản phẩm pin hoàn thiện thay vì chỉ cung cấp cell rời, phù hợp với nhu cầu doanh nghiệp.",
  },
  {
    icon: Settings2,
    title: "Thiết kế theo yêu cầu",
    desc: "Cấu hình điện áp, dung lượng, dòng xả, kích thước, vỏ và giao tiếp được tùy chỉnh theo bài toán vận hành thực tế.",
  },
  {
    icon: FlaskConical,
    title: "Phù hợp nhiều ứng dụng công nghiệp",
    desc: "Từ xe nâng, AGV, robot, thiết bị lưu kho đến UPS, năng lượng dự phòng và thiết bị công nghiệp đặc thù.",
  },
  {
    icon: ShieldCheck,
    title: "Kiểm soát đầu vào – đầu ra",
    desc: "Linh kiện, bán thành phẩm và thành phẩm đều được kiểm tra theo quy trình kỹ thuật trước khi bàn giao.",
  },
  {
    icon: Users2,
    title: "Đội ngũ kỹ thuật đồng hành",
    desc: "Kỹ sư PKGBattery tham gia từ khâu tư vấn, thiết kế đến hỗ trợ sau sản xuất cho từng dự án.",
  },
]

export function WhyUs() {
  return (
    <section
      id="nang-luc"
      className="relative py-24 lg:py-32 bg-background"
      aria-labelledby="why-heading"
    >
      <div className="mx-auto max-w-[1280px] px-5 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left: editorial heading */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 self-start">
            <div className="flex items-center gap-3 mb-6">
              <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-brand">
                01 — Vì sao chọn PKGBattery
              </span>
              <span className="h-px w-10 bg-brand" aria-hidden />
            </div>
            <h2
              id="why-heading"
              className="text-balance text-[34px] sm:text-[42px] lg:text-[52px] font-semibold tracking-tight leading-[1.05]"
            >
              Doanh nghiệp cần một đối tác{" "}
              <span className="text-foreground/40">làm thật, hiểu thật, kiểm soát thật.</span>
            </h2>
            <p className="mt-6 text-pretty text-[15px] leading-relaxed text-foreground/70 max-w-md">
              PKGBattery không phải đại lý phân phối. Chúng tôi là nhà máy sản xuất pin lithium công nghiệp,
              đồng hành cùng doanh nghiệp ở từng bước cấu hình giải pháp.
            </p>

            <div className="mt-10 inline-flex items-center gap-3 px-4 py-3 border border-hairline rounded-sm bg-surface">
              <span className="h-1.5 w-1.5 rounded-full bg-brand" />
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-foreground/70">
                In-house manufacturing · R&D · QA
              </span>
            </div>
          </div>

          {/* Right: reasons running on a vertical technical axis */}
          <div className="lg:col-span-7 relative">
            {/* Vertical axis line */}
            <div
              className="absolute left-[22px] top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-foreground/20 to-transparent hidden sm:block"
              aria-hidden
            />
            <ul className="space-y-10 sm:space-y-12">
              {reasons.map((r, i) => {
                const Icon = r.icon
                const num = String(i + 1).padStart(2, "0")
                return (
                  <li
                    key={r.title}
                    className="group relative grid grid-cols-[44px_1fr] sm:grid-cols-[44px_1fr] gap-5 sm:gap-7 items-start"
                  >
                    <div className="relative flex flex-col items-center">
                      <span className="relative inline-flex h-11 w-11 items-center justify-center rounded-sm bg-background border border-hairline group-hover:border-brand group-hover:bg-foreground group-hover:text-background transition-all duration-300">
                        <Icon className="h-[18px] w-[18px]" strokeWidth={1.5} aria-hidden />
                      </span>
                      <span className="mt-2 font-mono text-[10px] tracking-[0.18em] text-muted-foreground">
                        {num}
                      </span>
                    </div>
                    <div className="pt-1.5">
                      <h3 className="text-[19px] sm:text-[20px] font-semibold tracking-tight leading-snug">
                        {r.title}
                      </h3>
                      <p className="mt-2 text-[14.5px] leading-relaxed text-foreground/70 max-w-[560px]">
                        {r.desc}
                      </p>
                      <span className="mt-4 inline-block h-px w-0 bg-brand transition-all duration-500 group-hover:w-12" />
                    </div>
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
