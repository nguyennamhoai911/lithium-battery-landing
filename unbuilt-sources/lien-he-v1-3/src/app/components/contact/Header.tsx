import { Phone, MessageCircle, Menu } from "lucide-react";
import { useEffect, useState } from "react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-all ${
        scrolled
          ? "bg-white/90 backdrop-blur border-b border-neutral-200"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 lg:px-12">
        <a href="#" className="flex items-center gap-3">
          <span className="inline-flex size-9 items-center justify-center bg-neutral-900 text-white tracking-tight">
            PK
          </span>
          <span className="hidden tracking-tight sm:block">
            <span className="text-neutral-900">PKG</span>
            <span className="text-red-600">battery</span>
          </span>
        </a>

        <nav className="hidden gap-8 text-sm text-neutral-700 lg:flex">
          {[
            ["Inquiry", "#inquiry"],
            ["Dealers", "#dealers"],
            ["Office & Map", "#office-map"],
            ["FAQ", "#faq"],
          ].map(([l, h]) => (
            <a
              key={l}
              href={h}
              className="relative transition hover:text-red-600"
            >
              {l}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="tel:0989120088"
            className="hidden items-center gap-2 bg-red-600 px-4 py-2.5 text-sm text-white hover:bg-red-700 sm:inline-flex"
          >
            <Phone className="size-4" /> Call Sales
          </a>
          <a
            href="https://zalo.me/0989120088"
            className="hidden items-center gap-2 border border-neutral-900 px-4 py-2.5 text-sm hover:bg-neutral-900 hover:text-white md:inline-flex"
          >
            <MessageCircle className="size-4" /> Zalo
          </a>
          <button className="inline-flex size-10 items-center justify-center border border-neutral-200 lg:hidden">
            <Menu className="size-5" />
          </button>
        </div>
      </div>
    </header>
  );
}

export function StickyMobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-neutral-200 bg-white lg:hidden">
      <a
        href="tel:0989120088"
        className="flex items-center justify-center gap-2 bg-red-600 px-4 py-4 text-white"
      >
        <Phone className="size-4" /> Call Sales
      </a>
      <a
        href="https://zalo.me/0989120088"
        className="flex items-center justify-center gap-2 bg-neutral-900 px-4 py-4 text-white"
      >
        <MessageCircle className="size-4" /> Chat Zalo
      </a>
    </div>
  );
}
