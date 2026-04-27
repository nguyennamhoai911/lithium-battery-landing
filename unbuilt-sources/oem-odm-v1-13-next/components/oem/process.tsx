const steps = [
  {
    n: "01",
    title: "Tiếp nhận nhu cầu",
    desc: "Lắng nghe bài toán vận hành, ứng dụng cụ thể, các ràng buộc về kích thước, môi trường và sản lượng.",
    tag: "Discovery",
  },
  {
    n: "02",
    title: "Tư vấn kỹ thuật & đề xuất giải pháp",
    desc: "Đội kỹ thuật phân tích yêu cầu, đề xuất hướng cấu hình điện áp, dung lượng và cấu trúc pack phù hợp.",
    tag: "Engineering",
  },
  {
    n: "03",
    title: "Thiết kế cấu hình / bản mẫu",
    desc: "Phát triển bản vẽ, lựa chọn cell, thiết kế BMS, cơ khí và bao bì. Lên prototype để đánh giá thực tế.",
    tag: "Design",
  },
  {
    n: "04",
    title: "Kiểm tra, hiệu chỉnh, xác nhận",
    desc: "Thử nghiệm hiệu năng, kiểm tra an toàn, hiệu chỉnh thông số, xác nhận với khách hàng trước khi vào sản xuất.",
    tag: "Validation",
  },
  {
    n: "05",
    title: "Sản xuất",
    desc: "Sản xuất tại nhà máy PKGBattery với quy trình kiểm soát chất lượng từng công đoạn và từng lô hàng.",
    tag: "Production",
  },
  {
    n: "06",
    title: "Bàn giao & hỗ trợ sau sản xuất",
    desc: "Bàn giao theo tiến độ cam kết, hỗ trợ kỹ thuật, hướng dẫn vận hành và đồng hành ở các giai đoạn tiếp theo.",
    tag: "Delivery & Support",
  },
]

export function Process() {
  return (
    <section
      id="quy-trinh"
      className="relative py-24 lg:py-32 bg-background overflow-hidden"
      aria-labelledby="proc-heading"
    >
      {/* Subtle background fade from light to slightly tinted */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, transparent 0%, color-mix(in oklch, var(--ink) 4%, transparent) 100%)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-[1280px] px-5 lg:px-10">
        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 mb-14 lg:mb-20">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-5">
              <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-brand">
                03 — Quy trình hợp tác
              </span>
              <span className="h-px w-10 bg-brand" aria-hidden />
            </div>
            <h2
              id="proc-heading"
              className="text-balance text-[34px] sm:text-[42px] lg:text-[52px] font-semibold tracking-tight leading-[1.05]"
            >
              Sáu bước rõ ràng từ{" "}
              <span className="text-foreground/40">trao đổi nhu cầu</span> đến{" "}
              <span className="text-brand">bàn giao sản phẩm.</span>
            </h2>
          </div>
          <p className="lg:col-span-5 text-[15px] leading-relaxed text-foreground/70 self-end">
            Mỗi bước có đầu ra cụ thể và được xác nhận với khách hàng trước khi tiến sang bước tiếp theo.
            Tiến độ và chất lượng luôn được theo dõi xuyên suốt dự án.
          </p>
        </div>

        {/* Timeline */}
        <ol className="relative">
          {/* Vertical red line */}
          <span
            className="absolute left-[18px] sm:left-[24px] top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-brand/70 to-transparent"
            aria-hidden
          />
          {steps.map((s, i) => (
            <li
              key={s.n}
              className="group relative grid grid-cols-[40px_1fr] sm:grid-cols-[56px_1fr] gap-5 sm:gap-8 pb-12 last:pb-0"
            >
              {/* Node */}
              <div className="relative flex items-start justify-center pt-1">
                <span className="relative inline-flex h-5 w-5 items-center justify-center">
                  <span className="absolute inset-0 rounded-full bg-background border-2 border-foreground" />
                  <span className="relative h-1.5 w-1.5 rounded-full bg-brand" />
                </span>
              </div>

              <div className="grid sm:grid-cols-[1fr_auto] gap-3 items-start border-b border-hairline pb-12 group-last:border-0 group-last:pb-0">
                <div className="max-w-[640px]">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-mono text-[11px] tracking-[0.22em] text-muted-foreground">
                      Bước {s.n}
                    </span>
                    <span
                      className="font-mono text-[10px] uppercase tracking-[0.18em] px-2 py-0.5 rounded-sm border border-hairline text-foreground/70"
                    >
                      {s.tag}
                    </span>
                  </div>
                  <h3 className="text-[22px] sm:text-[26px] font-semibold tracking-tight leading-snug">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-[14.5px] leading-relaxed text-foreground/70">
                    {s.desc}
                  </p>
                </div>
                <div className="hidden sm:flex flex-col items-end gap-1 pt-2">
                  <span
                    className="font-mono text-[44px] leading-none tracking-tight"
                    style={{ color: "color-mix(in oklch, var(--foreground) 10%, transparent)" }}
                  >
                    {s.n}
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
