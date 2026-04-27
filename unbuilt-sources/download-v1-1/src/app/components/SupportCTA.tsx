import { Headphones, Mail, Phone, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function SupportCTA() {
  return (
    <section id="support" className="relative py-24 lg:py-28 bg-gradient-to-b from-white to-[#F5F5F5] overflow-hidden">
      <div className="absolute right-0 top-0 bottom-0 w-[45%] opacity-30 lg:opacity-50">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1742281692582-3507d7219c33?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200"
          alt="Kỹ sư PKG Battery"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/40 to-white" />
      </div>

      <div className="relative max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-5">
              <span className="text-[#E11D2E] text-[12px] tracking-[0.2em]">09 / HỖ TRỢ KỸ THUẬT</span>
              <div className="w-12 h-px bg-[#E11D2E]" />
            </div>
            <h2 className="text-[36px] lg:text-[52px] leading-[1.05] tracking-[-0.02em] mb-5" style={{ fontWeight: 500 }}>
              Cần hỗ trợ kỹ thuật từ kỹ sư?
            </h2>
            <p className="text-[16px] leading-relaxed text-black/65 max-w-2xl mb-8">
              Đội ngũ kỹ thuật của PKG Battery có thể giúp bạn xác định đúng datasheet, manual, phần mềm BMS hoặc gói firmware phù hợp với cấu hình sản phẩm hiện tại.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#contact" className="group flex items-center gap-3 px-6 py-4 bg-black text-white text-[14px] tracking-wide hover:bg-[#E11D2E] transition-colors">
                <Headphones className="w-4 h-4" />
                Trao đổi với kỹ sư
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#request" className="px-6 py-4 border border-black/20 text-[14px] tracking-wide hover:border-[#E11D2E] hover:text-[#E11D2E] transition-colors">
                Gửi mã sản phẩm
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-10 gap-y-4 text-[14px]">
              <a href="mailto:support@pkgbattery.com" className="flex items-center gap-3 text-black/75 hover:text-black">
                <span className="w-9 h-9 border border-black/15 flex items-center justify-center"><Mail className="w-4 h-4" /></span>
                support@pkgbattery.com
              </a>
              <a href="tel:+84" className="flex items-center gap-3 text-black/75 hover:text-black">
                <span className="w-9 h-9 border border-black/15 flex items-center justify-center"><Phone className="w-4 h-4" /></span>
                Hotline: +84 XXX XXX XXX
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
