import { ArrowRight, Download, BookOpen, Cpu, ShieldCheck } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { SectionLabel, SectionHeading } from "./SectionLabel";

export function Featured() {
  return (
    <section className="relative py-24 lg:py-32 bg-[#F5F5F5]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-10 mb-14 lg:mb-20">
          <div className="lg:col-span-7">
            <SectionLabel num="04" label="TÀI LIỆU ĐỀ XUẤT" />
            <SectionHeading>
              Được kỹ sư yêu cầu<br />
              <span className="text-[#E60023]">nhiều nhất</span>
            </SectionHeading>
          </div>
          <div className="lg:col-span-5 lg:pt-12">
            <p className="text-[16px] leading-[1.6] text-black/70">
              Bắt đầu với những tài liệu được sử dụng nhiều nhất cho đánh giá sản phẩm, lắp đặt và kiểm định kỹ thuật.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-6">
          {/* Featured large */}
          <a href="#library" className="group lg:col-span-7 relative bg-black text-white p-8 lg:p-12 overflow-hidden">
            <div className="absolute inset-0">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1739863306113-2629b0ed2a6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1400"
                alt="Catalogue PKG Battery 2026"
                className="w-full h-full object-cover opacity-40 group-hover:opacity-50 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black via-black/70 to-black/20" />
            </div>
            <div className="relative flex flex-col h-full min-h-[420px]">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-[10px] tracking-[0.28em] px-2.5 py-1.5 bg-[#E60023] text-white" style={{ fontWeight: 700 }}>CATALOGUE 2026</span>
                <span className="text-[11px] text-white/65 tracking-[0.15em]" style={{ fontWeight: 600 }}>PDF · 4.6 MB · 04/2026</span>
              </div>
              <h3 className="text-[36px] lg:text-[56px] leading-[0.95] tracking-[-0.025em] max-w-lg" style={{ fontWeight: 700 }}>
                Catalogue PKG Battery 2026
              </h3>
              <p className="mt-6 text-[16px] leading-[1.6] text-white/75 max-w-lg">
                Tổng quan đầy đủ các dòng pin lithium công nghiệp PKG, ứng dụng triển khai thực tế và lợi thế kỹ thuật cốt lõi.
              </p>
              <div className="mt-auto pt-12 flex items-center justify-between">
                <button className="inline-flex items-center gap-3 px-7 py-4 bg-[#E60023] hover:bg-white hover:text-[#0A0A0A] transition-colors text-[14px] tracking-wide" style={{ fontWeight: 700 }}>
                  <Download className="w-4 h-4" strokeWidth={2.5} />
                  Tải catalogue
                </button>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" strokeWidth={2.5} />
              </div>
            </div>
          </a>

          {/* 3 small */}
          <div className="lg:col-span-5 grid grid-rows-3 gap-6">
            {[
              {
                icon: BookOpen,
                label: "HƯỚNG DẪN CHỌN",
                title: "Hướng dẫn chọn pin xe nâng theo ứng dụng",
                desc: "Cách khớp điện áp, dung lượng và tham số sạc với hồ sơ vận hành thực tế.",
                cta: "Xem hướng dẫn",
              },
              {
                icon: Cpu,
                label: "BMS & PHẦN MỀM",
                title: "Gói phần mềm và firmware BMS PKG",
                desc: "Công cụ cấu hình, gói firmware mới nhất và ghi chú phiên bản cho hệ BMS PKG.",
                cta: "Mở khu vực BMS",
              },
              {
                icon: ShieldCheck,
                label: "AN TOÀN & VẬN CHUYỂN",
                title: "Hồ sơ an toàn và vận chuyển pin lithium",
                desc: "Bộ tài liệu UN38.3, SDS và hồ sơ tuân thủ phục vụ vận chuyển và kiểm định.",
                cta: "Xem chứng chỉ",
              },
            ].map((it, i) => (
              <a
                key={i}
                href="#library"
                className="group relative bg-white p-6 lg:p-7 flex items-start gap-5 border-2 border-[#0A0A0A]/10 hover:border-[#0A0A0A] hover:bg-white transition-all"
              >
                <div className="w-12 h-12 bg-[#0A0A0A] text-white flex items-center justify-center shrink-0 group-hover:bg-[#E60023] transition-colors">
                  <it.icon className="w-5 h-5" strokeWidth={2} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[10px] tracking-[0.25em] text-[#E60023] mb-1.5" style={{ fontWeight: 700 }}>{it.label}</div>
                  <h4 className="text-[18px] tracking-[-0.01em] leading-snug mb-2" style={{ fontWeight: 700 }}>{it.title}</h4>
                  <p className="text-[13.5px] leading-[1.55] text-black/65 mb-4">{it.desc}</p>
                  <div className="inline-flex items-center gap-2 text-[12px] tracking-wide group-hover:text-[#E60023] transition-colors" style={{ fontWeight: 700 }}>
                    {it.cta}
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" strokeWidth={2.5} />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
