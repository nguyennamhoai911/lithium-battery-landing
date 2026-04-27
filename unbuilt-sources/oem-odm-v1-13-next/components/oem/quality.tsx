import { CheckCircle2 } from "lucide-react"

const checks = [
  { code: "QC.01", title: "Kiểm soát nguồn linh kiện đầu vào", desc: "Cell, BMS, vật liệu cơ khí được kiểm tra theo tiêu chuẩn nội bộ trước khi đưa vào sản xuất." },
  { code: "QC.02", title: "Kiểm tra cấu hình kỹ thuật", desc: "Đo kiểm điện áp, dung lượng, nội trở, cân bằng cell trước khi đóng pack." },
  { code: "QC.03", title: "Kiểm tra an toàn", desc: "Thử nghiệm bảo vệ quá tải, ngắn mạch, quá nhiệt, đảm bảo BMS hoạt động đúng kịch bản." },
  { code: "QC.04", title: "Kiểm tra hiệu năng", desc: "Đánh giá hiệu suất sạc – xả, độ ổn định và đặc tính theo hồ sơ thiết kế." },
  { code: "QC.05", title: "Kiểm tra trước bàn giao", desc: "Kiểm tra cuối cùng theo checklist riêng cho từng đơn hàng trước khi xuất xưởng." },
  { code: "QC.06", title: "Hỗ trợ chứng chỉ theo yêu cầu", desc: "Đồng hành cùng khách hàng để chuẩn bị tài liệu, chứng chỉ phục vụ dự án và xuất khẩu." },
]

const stats = [
  { value: "100+", label: "dự án đã thực hiện" },
  { value: "20+", label: "nhóm ứng dụng công nghiệp" },
  { value: "06", label: "lớp kiểm tra chất lượng" },
  { value: "VN", label: "đối tác trong & ngoài nước" },
]

export function Quality() {
  return (
    <section
      id="chat-luong"
      className="relative py-24 lg:py-32 bg-background overflow-hidden"
      aria-labelledby="qa-heading"
    >
      <div className="mx-auto max-w-[1280px] px-5 lg:px-10">
        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 mb-14 lg:mb-20">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-5">
              <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-brand">
                06 — Kiểm soát chất lượng
              </span>
              <span className="h-px w-10 bg-brand" aria-hidden />
            </div>
            <h2
              id="qa-heading"
              className="text-balance text-[34px] sm:text-[42px] lg:text-[52px] font-semibold tracking-tight leading-[1.05]"
            >
              Pin công nghiệp phải{" "}
              <span className="text-foreground/40">an toàn, ổn định, đáng tin</span> — chúng tôi xây
              dựng quy trình theo logic đó.
            </h2>
          </div>
          <p className="lg:col-span-5 text-[15px] leading-relaxed text-foreground/70 self-end">
            Mỗi lô sản phẩm đi qua nhiều lớp kiểm tra trước khi rời nhà máy. Khách hàng có thể yêu cầu báo
            cáo kỹ thuật chi tiết cho từng dự án.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 border-y border-hairline">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`px-5 py-8 lg:py-10 ${i !== 0 ? "lg:border-l" : ""} ${i % 2 === 1 ? "border-l" : ""} border-hairline ${i > 1 ? "border-t lg:border-t-0" : ""}`}
            >
              <div className="flex items-baseline gap-2">
                <span className="text-[44px] lg:text-[56px] font-semibold tracking-tight leading-none">
                  {s.value}
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-brand" aria-hidden />
              </div>
              <div className="mt-3 text-[13px] text-foreground/65 leading-snug">{s.label}</div>
            </div>
          ))}
        </div>
        <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
          * Số liệu placeholder — có thể chỉnh theo thực tế PKGBattery.
        </p>

        {/* Checks: lab-style table */}
        <div className="mt-14 lg:mt-20 grid lg:grid-cols-2 gap-4 lg:gap-5">
          {checks.map((c) => (
            <article
              key={c.code}
              className="group relative bg-surface border border-hairline rounded-sm p-6 lg:p-7 hover:border-foreground transition-colors"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-brand">
                  {c.code}
                </span>
                <CheckCircle2 className="h-5 w-5 text-foreground/30 group-hover:text-brand transition-colors" strokeWidth={1.6} />
              </div>
              <h3 className="text-[18px] sm:text-[19px] font-semibold tracking-tight leading-snug">
                {c.title}
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-foreground/70">{c.desc}</p>

              {/* Bottom indicator bar */}
              <div className="mt-6 flex items-center gap-2">
                <span className="h-px flex-1 bg-hairline" />
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-foreground/50">
                  Pass criteria
                </span>
                <span className="h-1 w-10 bg-brand" aria-hidden />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
