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
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-flex items-center justify-center w-8 h-8 bg-[#E60023] text-white text-[11px]" style={{ fontWeight: 700 }}>09</span>
              <span className="text-[11px] tracking-[0.28em] text-[#0A0A0A]" style={{ fontWeight: 700 }}>HỖ TRỢ KỸ THUẬT</span>
            </div>
            <h2 className="text-[40px] lg:text-[64px] leading-[0.98] tracking-[-0.03em] mb-6" style={{ fontWeight: 700 }}>
              Cần hỗ trợ<br />
              từ <span className="text-[#E60023]">kỹ sư</span>?
            </h2>
            <p className="text-[17px] leading-[1.6] text-black/70 max-w-2xl mb-10">
              Đội ngũ kỹ thuật của PKG Battery có thể giúp bạn xác định đúng datasheet, manual, phần mềm BMS hoặc gói firmware phù hợp với cấu hình sản phẩm hiện tại.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#contact" className="group flex items-center gap-3 px-7 py-4 bg-[#0A0A0A] text-white text-[14px] tracking-wide hover:bg-[#E60023] transition-colors" style={{ fontWeight: 700 }}>
                <Headphones className="w-4 h-4" strokeWidth={2.5} />
                Trao đổi với kỹ sư
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" strokeWidth={2.5} />
              </a>
              <a href="#request" className="px-7 py-4 border-2 border-[#0A0A0A] text-[14px] tracking-wide hover:bg-[#0A0A0A] hover:text-white transition-colors" style={{ fontWeight: 700 }}>
                Gửi mã sản phẩm
              </a>
            </div>

            <div className="mt-12 grid sm:grid-cols-2 gap-3 max-w-2xl">
              <a href="mailto:support@pkgbattery.com" className="group flex items-center gap-4 p-4 border-2 border-[#0A0A0A]/15 hover:border-[#0A0A0A] hover:bg-white transition-colors">
                <span className="w-11 h-11 bg-[#0A0A0A] text-white flex items-center justify-center group-hover:bg-[#E60023] transition-colors"><Mail className="w-4 h-4" strokeWidth={2.2} /></span>
                <div>
                  <div className="text-[10px] tracking-[0.2em] text-black/55" style={{ fontWeight: 700 }}>EMAIL</div>
                  <div className="text-[14px]" style={{ fontWeight: 600 }}>support@pkgbattery.com</div>
                </div>
              </a>
              <a href="tel:+84" className="group flex items-center gap-4 p-4 border-2 border-[#0A0A0A]/15 hover:border-[#0A0A0A] hover:bg-white transition-colors">
                <span className="w-11 h-11 bg-[#0A0A0A] text-white flex items-center justify-center group-hover:bg-[#E60023] transition-colors"><Phone className="w-4 h-4" strokeWidth={2.2} /></span>
                <div>
                  <div className="text-[10px] tracking-[0.2em] text-black/55" style={{ fontWeight: 700 }}>HOTLINE</div>
                  <div className="text-[14px]" style={{ fontWeight: 600 }}>+84 XXX XXX XXX</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
