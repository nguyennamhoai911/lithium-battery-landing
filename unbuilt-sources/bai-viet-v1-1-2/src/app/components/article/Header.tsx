import { useEffect, useState } from "react";

const NAV = ["Giới thiệu", "Sản phẩm", "Giải pháp", "Bài viết", "Dự án", "Liên hệ"];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? Math.min(100, (y / h) * 100) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 h-[2px] bg-neutral-200/60">
        <div
          className="h-full bg-[#E11D2A] transition-[width] duration-150 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      <header
        className={`fixed top-[2px] left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-white/80 backdrop-blur-xl border-b border-black/5 py-3"
            : "bg-white/60 backdrop-blur-md py-5"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 group">
            <span className="inline-flex items-center justify-center w-8 h-8 bg-black text-white tracking-tight">
              <span className="text-[13px]">P</span>
            </span>
            <span className="tracking-[0.18em] text-black text-[13px]">
              PKG <span className="text-[#E11D2A]">BATTERY</span>
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-9">
            {NAV.map((item) => (
              <a
                key={item}
                href="#"
                className={`relative text-[13px] tracking-wide transition-colors ${
                  item === "Bài viết"
                    ? "text-black"
                    : "text-neutral-600 hover:text-black"
                }`}
              >
                {item}
                {item === "Bài viết" && (
                  <span className="absolute -bottom-1.5 left-0 right-0 h-[2px] bg-[#E11D2A]" />
                )}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center text-[12px] tracking-widest text-neutral-500">
              <span className="text-black">VI</span>
              <span className="mx-2 text-neutral-300">/</span>
              <span className="hover:text-black cursor-pointer">EN</span>
            </div>
            <button className="group relative inline-flex items-center gap-2 bg-black text-white px-5 py-2.5 overflow-hidden">
              <span className="relative z-10 text-[12px] tracking-[0.14em] uppercase">
                Nhận tư vấn
              </span>
              <span className="relative z-10 w-4 h-[1px] bg-white group-hover:w-6 transition-all" />
              <span className="absolute inset-0 bg-[#E11D2A] -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
