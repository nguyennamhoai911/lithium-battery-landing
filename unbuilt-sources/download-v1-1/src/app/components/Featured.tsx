import { ArrowRight, Download, BookOpen, Cpu, ShieldCheck } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Featured() {
  return (
    <section className="relative py-24 lg:py-32 bg-[#FAFAFA] border-y border-black/8">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-5">
              <span className="text-[#E11D2E] text-[12px] tracking-[0.2em]">04 / TÀI LIỆU ĐỀ XUẤT</span>
              <div className="w-12 h-px bg-[#E11D2E]" />
            </div>
            <h2 className="text-[34px] lg:text-[44px] leading-[1.1] tracking-[-0.02em] mb-4" style={{ fontWeight: 500 }}>
              Tài liệu được khách hàng kỹ thuật yêu cầu nhiều nhất
            </h2>
            <p className="text-[15px] leading-relaxed text-black/60 max-w-xl">
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
                <span className="text-[10px] tracking-[0.25em] px-2 py-1 border border-white/30">CATALOGUE 2026</span>
                <span className="text-[11px] text-white/55 tracking-wide">PDF · 4.6 MB · Cập nhật 04/2026</span>
              </div>
              <h3 className="text-[32px] lg:text-[44px] leading-[1.05] tracking-tight max-w-lg" style={{ fontWeight: 500 }}>
                Catalogue sản phẩm PKG Battery 2026
              </h3>
              <p className="mt-5 text-[15px] leading-relaxed text-white/70 max-w-lg">
                Tổng quan đầy đủ các dòng pin lithium công nghiệp PKG, ứng dụng triển khai thực tế và lợi thế kỹ thuật cốt lõi.
              </p>
              <div className="mt-auto pt-10 flex items-center justify-between">
                <button className="inline-flex items-center gap-3 px-6 py-3.5 bg-[#E11D2E] hover:bg-white hover:text-black transition-colors text-[14px] tracking-wide">
                  <Download className="w-4 h-4" />
                  Tải catalogue
                </button>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
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
                className="group relative bg-white p-6 lg:p-7 flex items-start gap-5 hover:bg-white border border-black/8 hover:border-black transition-colors"
              >
                <div className="absolute left-0 top-0 bottom-0 w-px bg-[#E11D2E] origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500" />
                <div className="w-11 h-11 border border-black/15 flex items-center justify-center shrink-0 group-hover:border-[#E11D2E] group-hover:text-[#E11D2E] transition-colors">
                  <it.icon className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[10px] tracking-[0.25em] text-black/45 mb-1.5">{it.label}</div>
                  <h4 className="text-[16px] tracking-tight leading-snug mb-1.5" style={{ fontWeight: 500 }}>{it.title}</h4>
                  <p className="text-[13px] leading-relaxed text-black/55 mb-3">{it.desc}</p>
                  <div className="inline-flex items-center gap-2 text-[12px] tracking-wide group-hover:text-[#E11D2E] transition-colors">
                    {it.cta}
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
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
