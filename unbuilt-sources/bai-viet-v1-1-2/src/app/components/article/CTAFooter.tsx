import { ArrowUpRight } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="mt-32 bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />
      <div className="absolute -top-px left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#E11D2A] to-transparent" />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 py-24 md:py-32 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-7">
          <div className="flex items-center gap-3 mb-8">
            <span className="w-8 h-[1px] bg-[#E11D2A]" />
            <span className="text-[11px] tracking-[0.26em] uppercase text-[#E11D2A]">
              Tư vấn chuyên sâu
            </span>
          </div>
          <h2 className="text-[40px] md:text-[56px] leading-[1.05] tracking-[-0.02em]">
            Bạn đang cân nhắc<br />
            <span className="text-neutral-500">chuyển sang</span> pin lithium
            <br />công nghiệp?
          </h2>
          <p className="mt-8 text-[16px] leading-[1.7] text-neutral-400 max-w-[520px]">
            Đội ngũ kỹ thuật PKG sẽ cùng bạn đánh giá tải vận hành thực tế, đề xuất
            cấu hình phù hợp và báo giá minh bạch theo từng phương án.
          </p>
        </div>

        <div className="lg:col-span-5 lg:pl-10 lg:border-l border-white/10 flex flex-col justify-between">
          <ul className="space-y-5">
            {[
              ["01", "Tư vấn cấu hình theo phụ tải thực tế"],
              ["02", "Đánh giá vận hành tại nhà máy"],
              ["03", "Báo giá phù hợp · cam kết bảo hành"],
            ].map(([n, t]) => (
              <li key={n} className="flex gap-5 items-baseline">
                <span className="text-[11px] tracking-[0.22em] text-[#E11D2A]">{n}</span>
                <span className="text-[16px] text-white/90">{t}</span>
              </li>
            ))}
          </ul>

          <div className="mt-12 flex flex-col sm:flex-row gap-3">
            <button className="group relative inline-flex items-center justify-between gap-4 bg-[#E11D2A] text-white px-7 py-5 overflow-hidden">
              <span className="relative z-10 text-[12px] tracking-[0.18em] uppercase">
                Đăng ký tư vấn
              </span>
              <ArrowUpRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              <span className="absolute inset-0 bg-white/10 -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
            </button>
            <button className="group inline-flex items-center justify-between gap-4 border border-white/30 text-white px-7 py-5 hover:border-white transition-colors">
              <span className="text-[12px] tracking-[0.18em] uppercase">Xem sản phẩm</span>
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const cols = [
    {
      h: "PKG Battery",
      items: ["Giới thiệu", "Năng lực sản xuất", "Tin tức", "Tuyển dụng"],
    },
    {
      h: "Sản phẩm",
      items: ["Pin LFP công nghiệp", "Pin xe nâng AGV", "ESS lưu trữ", "BMS · Phụ kiện"],
    },
    {
      h: "Hỗ trợ",
      items: ["Tư vấn kỹ thuật", "Bảo hành", "Tài liệu · Catalogue", "Liên hệ"],
    },
  ];
  return (
    <footer className="bg-neutral-50 border-t border-black/10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20 grid grid-cols-2 md:grid-cols-5 gap-10">
        <div className="col-span-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center justify-center w-8 h-8 bg-black text-white">
              <span className="text-[13px]">P</span>
            </span>
            <span className="tracking-[0.18em] text-black text-[13px]">
              PKG <span className="text-[#E11D2A]">BATTERY</span>
            </span>
          </div>
          <p className="mt-6 text-[14px] leading-[1.7] text-neutral-600 max-w-[36ch]">
            Giải pháp năng lượng điện hóa cho doanh nghiệp công nghiệp — từ pin
            lithium công nghiệp đến hệ thống lưu trữ ESS chuyên dụng.
          </p>
          <div className="mt-8 text-[12px] tracking-[0.18em] uppercase text-neutral-500">
            Trụ sở · Hà Nội · Việt Nam
          </div>
        </div>

        {cols.map((c) => (
          <div key={c.h}>
            <h4 className="text-[11px] tracking-[0.22em] uppercase text-black mb-5">
              {c.h}
            </h4>
            <ul className="space-y-3">
              {c.items.map((it) => (
                <li key={it}>
                  <a href="#" className="text-[14px] text-neutral-600 hover:text-[#E11D2A] transition-colors">
                    {it}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-black/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-6 flex flex-wrap gap-4 items-center justify-between text-[11px] tracking-[0.16em] uppercase text-neutral-500">
          <span>© 2026 PKG Battery · Mọi quyền được bảo lưu</span>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-black">Chính sách bảo mật</a>
            <a href="#" className="hover:text-black">Điều khoản</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
