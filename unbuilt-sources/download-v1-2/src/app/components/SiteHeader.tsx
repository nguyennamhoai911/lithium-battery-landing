import { useEffect, useState } from "react";
import { Search, Globe, Menu, X, ChevronRight } from "lucide-react";

const NAV = [
  { label: "Sản phẩm", href: "#products" },
  { label: "Giải pháp", href: "#solutions" },
  { label: "Công nghệ", href: "#technology" },
  { label: "Tài liệu", href: "#resources", active: true },
  { label: "Doanh nghiệp", href: "#company" },
  { label: "Liên hệ", href: "#contact" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/98 backdrop-blur border-b-2 border-[#0A0A0A]" : "bg-white/0"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 h-16 lg:h-20 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <div className="relative">
            <div className="w-9 h-9 bg-black flex items-center justify-center">
              <div className="w-1.5 h-5 bg-[#E11D2E]" />
              <div className="w-1.5 h-5 bg-white ml-0.5" />
            </div>
            <div className="absolute -bottom-0.5 left-0 w-9 h-px bg-[#E11D2E]" />
          </div>
          <div className="leading-tight">
            <div className="tracking-[0.2em] text-[11px] text-black/60">PKG</div>
            <div className="tracking-tight" style={{ fontWeight: 600 }}>BATTERY</div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV.map((n) => (
            <a
              key={n.label}
              href={n.href}
              className={`relative text-[13.5px] tracking-wide transition-colors ${
                n.active ? "text-[#0A0A0A]" : "text-black/75 hover:text-[#0A0A0A]"
              } group`}
              style={{ fontWeight: 600 }}
            >
              {n.label}
              <span
                className={`absolute -bottom-2 left-0 h-0.5 bg-[#E60023] transition-all duration-300 ${
                  n.active ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-5">
          <button aria-label="Tìm kiếm" className="text-black/70 hover:text-black">
            <Search className="w-[18px] h-[18px]" />
          </button>
          <button className="flex items-center gap-1.5 text-[13px] text-black/70 hover:text-black tracking-wide">
            <Globe className="w-[16px] h-[16px]" /> VI
          </button>
          <a
            href="#contact"
            className="group flex items-center gap-2 px-5 py-3 bg-[#0A0A0A] text-white text-[13px] tracking-wide hover:bg-[#E60023] transition-colors"
            style={{ fontWeight: 700 }}
          >
            Liên hệ kinh doanh
            <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" strokeWidth={2.5} />
          </a>
        </div>

        <button onClick={() => setOpen(true)} className="lg:hidden text-black" aria-label="Mở menu">
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 bg-white flex flex-col">
          <div className="flex items-center justify-between px-6 h-16 border-b border-black/8">
            <span className="tracking-tight" style={{ fontWeight: 600 }}>PKG BATTERY</span>
            <button onClick={() => setOpen(false)} aria-label="Đóng">
              <X className="w-6 h-6" />
            </button>
          </div>
          <nav className="flex-1 flex flex-col px-6 py-8 gap-4">
            {NAV.map((n) => (
              <a key={n.label} href={n.href} onClick={() => setOpen(false)} className="py-3 border-b border-black/8 flex items-center justify-between">
                <span className={n.active ? "text-[#E11D2E]" : ""}>{n.label}</span>
                <ChevronRight className="w-4 h-4 text-black/40" />
              </a>
            ))}
          </nav>
          <a href="#contact" className="m-6 px-5 py-4 bg-black text-white text-center tracking-wide">Liên hệ kinh doanh</a>
        </div>
      )}
    </header>
  );
}
