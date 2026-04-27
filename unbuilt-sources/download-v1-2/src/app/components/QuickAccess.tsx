import { ArrowUpRight, ScanSearch, Wrench, Cpu, ShieldCheck } from "lucide-react";
import { SectionLabel, SectionHeading } from "./SectionLabel";

const ITEMS = [
  {
    key: "01",
    icon: ScanSearch,
    title: "Tôi đang đánh giá sản phẩm",
    desc: "So sánh thông số kỹ thuật, catalogue và tài liệu phù hợp ứng dụng trước khi chọn hệ thống pin lithium.",
    cta: "Xem datasheet",
    span: "lg:col-span-7",
    dark: true,
  },
  {
    key: "02",
    icon: Wrench,
    title: "Tôi đang lắp đặt và vận hành",
    desc: "Manual lắp đặt, hướng dẫn vận hành, sơ đồ đấu nối và tài liệu xử lý sự cố cho hệ thống PKG đang sử dụng.",
    cta: "Xem manual",
    span: "lg:col-span-5",
  },
  {
    key: "03",
    icon: Cpu,
    title: "Tôi cần phần mềm BMS / firmware",
    desc: "Công cụ cấu hình, phần mềm giám sát, gói firmware và ghi chú phiên bản cho các BMS PKG tương thích.",
    cta: "Mở khu vực phần mềm",
    span: "lg:col-span-5",
  },
  {
    key: "04",
    icon: ShieldCheck,
    title: "Tôi cần chứng chỉ và hồ sơ",
    desc: "Chứng chỉ tuân thủ, báo cáo kiểm định, hồ sơ vận chuyển và phiếu an toàn vật liệu (SDS).",
    cta: "Xem chứng chỉ",
    span: "lg:col-span-7",
    dark: true,
  },
];

export function QuickAccess() {
  return (
    <section className="relative py-24 lg:py-32 bg-white border-t-2 border-[#0A0A0A]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-10 mb-14 lg:mb-20">
          <div className="lg:col-span-7">
            <SectionLabel num="01" label="TRUY CẬP NHANH" />
            <SectionHeading>
              Bạn đang tìm tài liệu<br />
              cho <span className="text-[#E60023]">mục đích nào</span>?
            </SectionHeading>
          </div>
          <div className="lg:col-span-5 lg:pt-12">
            <p className="text-[16px] leading-[1.6] text-black/70" style={{ fontWeight: 400 }}>
              Chọn đúng hành trình ngay từ đầu để hệ thống đề xuất các tài liệu phù hợp nhất với vai trò và nhu cầu của bạn.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-1 bg-[#0A0A0A]">
          {ITEMS.map((it) => {
            const dark = it.dark;
            return (
              <a
                key={it.key}
                href="#library"
                className={`group relative p-8 lg:p-12 transition-all duration-300 ${it.span} ${
                  dark ? "bg-[#0A0A0A] text-white hover:bg-[#E60023]" : "bg-white text-[#0A0A0A] hover:bg-[#FAFAFA]"
                }`}
              >
                <div className={`absolute top-0 left-0 w-full h-1 ${dark ? "bg-[#E60023]" : "bg-[#0A0A0A]"} origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />
                <div className="flex items-start justify-between mb-16">
                  <span className={`text-[64px] leading-none tracking-tight ${dark ? "text-white/15" : "text-black/12"}`} style={{ fontWeight: 700 }}>
                    {it.key}
                  </span>
                  <div className={`w-14 h-14 border-2 flex items-center justify-center transition-colors ${
                    dark ? "border-white/20 group-hover:border-white group-hover:bg-white group-hover:text-[#E60023]" : "border-[#0A0A0A] group-hover:bg-[#0A0A0A] group-hover:text-white"
                  }`}>
                    <it.icon className="w-6 h-6" strokeWidth={2} />
                  </div>
                </div>

                <h3 className="text-[26px] lg:text-[32px] leading-[1.1] tracking-[-0.02em] mb-4 max-w-md" style={{ fontWeight: 700 }}>
                  {it.title}
                </h3>
                <p className={`text-[14.5px] leading-[1.6] max-w-lg mb-10 ${dark ? "text-white/75" : "text-black/65"}`} style={{ fontWeight: 400 }}>
                  {it.desc}
                </p>

                <div className={`inline-flex items-center gap-3 text-[13px] tracking-wide pt-5 border-t-2 ${
                  dark ? "border-white/20" : "border-[#0A0A0A]"
                }`} style={{ fontWeight: 700 }}>
                  <span>{it.cta}</span>
                  <ArrowUpRight className="w-5 h-5 group-hover:rotate-12 transition-transform" strokeWidth={2.5} />
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
