import { ArrowRight, Headphones, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { RedScanLine } from "./EnergyLines";

export function FinalCTA() {
  return (
    <section id="contact" className="relative bg-black text-white overflow-hidden">
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1739863306113-2629b0ed2a6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600"
          alt="Nhà máy PKG Battery"
          className="w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/40" />
        <div className="absolute inset-0 opacity-[0.08]">
          <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1440 600">
            {Array.from({ length: 20 }).map((_, i) => (
              <line key={i} x1="0" x2="1440" y1={i * 30} y2={i * 30} stroke="white" strokeWidth="0.4" />
            ))}
          </svg>
        </div>
      </div>
      <RedScanLine className="top-0" />

      <div className="relative max-w-[1440px] mx-auto px-6 lg:px-12 py-24 lg:py-36">
        <div className="grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3 mb-8">
              <span className="inline-flex items-center justify-center w-9 h-9 bg-[#E60023] text-white text-[11px]" style={{ fontWeight: 700 }}>12</span>
              <span className="text-[11px] tracking-[0.28em] text-white" style={{ fontWeight: 700 }}>TƯ VẤN DỰ ÁN</span>
            </div>
            <h2 className="text-[48px] sm:text-[64px] lg:text-[96px] leading-[0.95] tracking-[-0.035em] max-w-4xl" style={{ fontWeight: 700 }}>
              Cần tài liệu<br />
              <span className="text-[#E60023]">riêng theo dự án</span>?
            </h2>
            <p className="mt-8 text-[17px] lg:text-[19px] leading-[1.6] text-white/75 max-w-2xl">
              PKG Battery cung cấp tài liệu tùy chỉnh, hồ sơ tương thích và hỗ trợ kỹ thuật cho dự án pin công nghiệp, tích hợp OEM và triển khai hệ thống quy mô lớn.
            </p>
          </div>
          <div className="lg:col-span-4 flex flex-col gap-3">
            <a href="#support" className="group flex items-center justify-between px-6 py-5 bg-[#E11D2E] hover:bg-white hover:text-black text-[14px] tracking-wide transition-colors">
              <span className="flex items-center gap-3"><Headphones className="w-4 h-4" /> Yêu cầu hỗ trợ kỹ thuật</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#products" className="group flex items-center justify-between px-6 py-5 border border-white/20 hover:border-[#E11D2E] hover:text-[#E11D2E] text-[14px] tracking-wide transition-colors">
              <span>Khám phá dòng sản phẩm</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
      <RedScanLine className="bottom-0" />
    </section>
  );
}
