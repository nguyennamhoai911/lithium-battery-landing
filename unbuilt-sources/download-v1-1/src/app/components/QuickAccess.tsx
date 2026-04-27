import { ArrowUpRight, ScanSearch, Wrench, Cpu, ShieldCheck } from "lucide-react";

const ITEMS = [
  {
    key: "A",
    icon: ScanSearch,
    title: "Tôi đang đánh giá sản phẩm",
    desc: "So sánh thông số kỹ thuật, catalogue và tài liệu phù hợp ứng dụng trước khi chọn hệ thống pin lithium.",
    cta: "Xem datasheet",
    span: "lg:col-span-7",
  },
  {
    key: "B",
    icon: Wrench,
    title: "Tôi đang lắp đặt hoặc vận hành",
    desc: "Tìm manual lắp đặt, hướng dẫn vận hành, sơ đồ đấu nối và tài liệu xử lý sự cố cho hệ thống PKG đang sử dụng.",
    cta: "Xem manual",
    span: "lg:col-span-5",
  },
  {
    key: "C",
    icon: Cpu,
    title: "Tôi cần phần mềm BMS hoặc firmware",
    desc: "Tải công cụ cấu hình, phần mềm giám sát, gói firmware và ghi chú phiên bản cho các BMS PKG tương thích.",
    cta: "Mở khu vực phần mềm",
    span: "lg:col-span-5",
  },
  {
    key: "D",
    icon: ShieldCheck,
    title: "Tôi cần chứng chỉ và hồ sơ",
    desc: "Truy cập chứng chỉ tuân thủ, báo cáo kiểm định, hồ sơ vận chuyển và phiếu an toàn vật liệu (SDS).",
    cta: "Xem chứng chỉ",
    span: "lg:col-span-7",
  },
];

export function QuickAccess() {
  return (
    <section className="relative py-24 lg:py-32 bg-white border-t border-black/8">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-5">
              <span className="text-[#E11D2E] text-[12px] tracking-[0.2em]">01 / TRUY CẬP NHANH</span>
              <div className="w-12 h-px bg-[#E11D2E]" />
            </div>
            <h2 className="text-[34px] lg:text-[44px] leading-[1.1] tracking-[-0.02em]" style={{ fontWeight: 500 }}>
              Bạn đang tìm tài liệu cho mục đích nào?
            </h2>
          </div>
          <p className="max-w-md text-[15px] leading-relaxed text-black/60">
            Chọn đúng hành trình ngay từ đầu để hệ thống đề xuất các tài liệu phù hợp nhất với vai trò và nhu cầu của bạn.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-px bg-black/8">
          {ITEMS.map((it, idx) => (
            <a
              key={it.key}
              href="#library"
              className={`group relative bg-white p-8 lg:p-10 transition-colors duration-300 hover:bg-[#FAFAFA] ${it.span}`}
            >
              <div className="absolute left-0 top-0 bottom-0 w-px bg-[#E11D2E] origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500" />
              <div className="flex items-start justify-between mb-12">
                <div className="flex items-center gap-3">
                  <span className="text-[11px] tracking-[0.25em] text-black/40">{String(idx + 1).padStart(2, "0")}</span>
                  <div className="w-12 h-12 border border-black/15 flex items-center justify-center group-hover:border-[#E11D2E] group-hover:text-[#E11D2E] transition-colors">
                    <it.icon className="w-5 h-5" strokeWidth={1.5} />
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-black/30 group-hover:text-[#E11D2E] group-hover:rotate-12 transition-all" />
              </div>

              <h3 className="text-[22px] lg:text-[26px] leading-[1.2] tracking-tight mb-4 max-w-md" style={{ fontWeight: 500 }}>
                {it.title}
              </h3>
              <p className="text-[14px] leading-[1.6] text-black/60 max-w-lg mb-8">{it.desc}</p>

              <div className="inline-flex items-center gap-3 text-[13px] tracking-wide pt-4 border-t border-black/10 group-hover:border-[#E11D2E]/40 transition-colors">
                <span>{it.cta}</span>
                <span className="relative w-10 h-px bg-black/30 overflow-hidden">
                  <span className="absolute inset-0 bg-[#E11D2E] -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
