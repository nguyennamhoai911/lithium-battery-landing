import { FileBadge2 } from "lucide-react"

const certs = [
  { code: "ISO 9001", title: "Hệ thống quản lý chất lượng", note: "Áp dụng cho quy trình sản xuất nội bộ" },
  { code: "UN 38.3", title: "Vận chuyển pin lithium an toàn", note: "Đáp ứng yêu cầu logistics quốc tế" },
  { code: "CE", title: "Tương thích thị trường EU", note: "Cho các sản phẩm xuất khẩu khi cần" },
  { code: "MSDS", title: "Tài liệu an toàn vật liệu", note: "Cung cấp theo từng đơn hàng" },
  { code: "RoHS", title: "Hạn chế chất độc hại", note: "Theo yêu cầu dự án" },
  { code: "Khác", title: "Chứng chỉ theo yêu cầu", note: "PKGBattery đồng hành chuẩn bị tài liệu" },
]

const partners = ["Đối tác A", "Đối tác B", "Đối tác C", "Đối tác D", "Đối tác E", "Đối tác F"]

export function Certifications() {
  return (
    <section
      className="relative py-24 lg:py-32 bg-background"
      aria-labelledby="cert-heading"
    >
      <div className="mx-auto max-w-[1280px] px-5 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 mb-14 lg:mb-16">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-5">
              <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-brand">
                07 — Chứng chỉ & đối tác
              </span>
              <span className="h-px w-10 bg-brand" aria-hidden />
            </div>
            <h2
              id="cert-heading"
              className="text-balance text-[34px] sm:text-[42px] lg:text-[52px] font-semibold tracking-tight leading-[1.05]"
            >
              Bằng chứng về năng lực,{" "}
              <span className="text-foreground/40">không chỉ là lời cam kết.</span>
            </h2>
          </div>
          <p className="lg:col-span-5 text-[15px] leading-relaxed text-foreground/70 self-end">
            PKGBattery đang đồng hành cùng nhiều đối tác trong các dự án pin công nghiệp, phân phối và sản
            xuất theo yêu cầu — trong nước và quốc tế.
          </p>
        </div>

        {/* Certificates as technical documents */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {certs.map((c) => (
            <article
              key={c.code}
              className="group relative bg-surface border border-hairline rounded-sm p-6 transition-all hover:border-foreground hover:bg-background"
            >
              {/* Document header */}
              <div className="flex items-center justify-between border-b border-hairline pb-4 mb-4">
                <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-foreground/60">
                  Reference doc
                </span>
                <FileBadge2 className="h-4 w-4 text-foreground/40 group-hover:text-brand transition-colors" strokeWidth={1.6} />
              </div>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-[24px] font-semibold tracking-tight leading-none">{c.code}</span>
                <span className="h-1 w-1 rounded-full bg-brand" />
              </div>
              <h3 className="text-[15px] font-medium leading-snug text-foreground">
                {c.title}
              </h3>
              <p className="mt-2 text-[12.5px] leading-relaxed text-foreground/60">{c.note}</p>

              {/* Stamp-like footer */}
              <div className="mt-6 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.18em] text-foreground/45">
                <span>PKGBattery</span>
                <span>VN · Manufacture</span>
              </div>
            </article>
          ))}
        </div>

        {/* Partners */}
        <div className="mt-16 lg:mt-20">
          <div className="flex items-center gap-4 mb-8">
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
              Đối tác đồng hành
            </span>
            <span className="h-px flex-1 bg-hairline" />
          </div>
          <ul className="grid grid-cols-3 sm:grid-cols-6 border-y border-hairline divide-x divide-hairline">
            {partners.map((p) => (
              <li
                key={p}
                className="group h-20 flex items-center justify-center px-4 text-foreground/35 hover:text-brand transition-colors"
              >
                <span className="font-mono text-[11px] uppercase tracking-[0.22em] group-hover:tracking-[0.26em] transition-all">
                  {p}
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
            * Logo placeholder — sẽ thay thế bằng logo đối tác thực tế.
          </p>
        </div>
      </div>
    </section>
  )
}
