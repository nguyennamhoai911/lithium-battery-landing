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
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-px bg-[#E11D2E]" />
              <span className="text-[#E11D2E] text-[12px] tracking-[0.25em]">12 / TƯ VẤN DỰ ÁN</span>
            </div>
            <h2 className="text-[40px] lg:text-[68px] leading-[1.05] tracking-[-0.02em] max-w-3xl" style={{ fontWeight: 500 }}>
              Cần tài liệu kỹ thuật riêng theo dự án?
            </h2>
            <p className="mt-7 text-[16px] lg:text-[18px] leading-relaxed text-white/65 max-w-2xl">
              PKG Battery cung cấp tài liệu tùy chỉnh, hồ sơ tương thích và hỗ trợ kỹ thuật cho các dự án pin công nghiệp, tích hợp OEM và triển khai hệ thống quy mô lớn.
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
