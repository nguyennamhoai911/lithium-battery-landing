const COLS = [
  {
    title: "Sản phẩm",
    items: ["Pin xe nâng", "Pin AGV", "Hệ thống ESS", "Trạm sạc", "BMS"],
  },
  {
    title: "Tài liệu",
    items: ["Trung tâm tài liệu kỹ thuật", "Catalogue", "Datasheet", "Manual", "Phần mềm BMS", "Chứng chỉ"],
  },
  {
    title: "Hỗ trợ",
    items: ["Hỗ trợ kỹ thuật", "Yêu cầu tài liệu", "Liên hệ kinh doanh", "Bảo hành"],
  },
  {
    title: "Doanh nghiệp",
    items: ["Về PKG Battery", "Nhà máy sản xuất", "Chất lượng", "Tin tức"],
  },
];

export function SiteFooter() {
  return (
    <footer className="relative bg-black text-white">
      <div className="h-px bg-gradient-to-r from-transparent via-[#E11D2E] to-transparent" />
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-9 h-9 bg-white flex items-center justify-center">
                <div className="w-1.5 h-5 bg-[#E11D2E]" />
                <div className="w-1.5 h-5 bg-black ml-0.5" />
              </div>
              <div className="leading-tight">
                <div className="tracking-[0.2em] text-[11px] text-white/50">PKG</div>
                <div className="tracking-tight" style={{ fontWeight: 600 }}>BATTERY</div>
              </div>
            </div>
            <p className="text-[14px] leading-relaxed text-white/55 max-w-sm mb-6">
              Giải pháp pin lithium công nghiệp B2B: pin xe nâng, AGV, ESS, trạm sạc, BMS và phần mềm cấu hình.
            </p>
            <div className="text-[13px] text-white/65 space-y-1">
              <div>support@pkgbattery.com</div>
              <div>Hotline: +84 XXX XXX XXX</div>
            </div>
          </div>
          {COLS.map((c) => (
            <div key={c.title} className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-5">
                <span className="w-1.5 h-1.5 bg-[#E60023]" />
                <span className="text-[11px] tracking-[0.25em] text-white" style={{ fontWeight: 700 }}>{c.title.toUpperCase()}</span>
              </div>
              <ul className="space-y-3 text-[13.5px]">
                {c.items.map((it) => (
                  <li key={it}>
                    <a href="#" className="text-white/75 hover:text-[#E60023] transition-colors" style={{ fontWeight: 500 }}>
                      {it}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-6 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[12px] text-white/45">
          <div>© {new Date().getFullYear()} PKG Battery. Tài liệu kỹ thuật được duy trì bởi đội tài liệu PKG Battery.</div>
          <div className="flex flex-wrap gap-6">
            <a href="#" className="hover:text-white">Chính sách bảo mật</a>
            <a href="#" className="hover:text-white">Điều khoản sử dụng</a>
            <a href="#" className="hover:text-white">Cookie</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
