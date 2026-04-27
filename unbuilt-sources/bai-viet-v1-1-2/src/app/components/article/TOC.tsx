import { useEffect, useState } from "react";

export const SECTIONS = [
  { id: "context", label: "Bối cảnh ngành công nghiệp" },
  { id: "spec", label: "So sánh kỹ thuật cốt lõi" },
  { id: "table", label: "Bảng thông số chi tiết" },
  { id: "video", label: "Cấu trúc cell & BMS" },
  { id: "roi", label: "ROI và tổng chi phí 5 năm" },
  { id: "download", label: "Tài liệu kỹ thuật" },
  { id: "conclusion", label: "Khuyến nghị triển khai" },
];

export function TOC() {
  const [active, setActive] = useState(SECTIONS[0].id);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY + 220;
      let current = SECTIONS[0].id;
      for (const s of SECTIONS) {
        const el = document.getElementById(s.id);
        if (el && el.offsetTop <= y) current = s.id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <aside className="hidden lg:block sticky top-32 self-start">
      <div className="text-[10px] tracking-[0.26em] uppercase text-neutral-400 mb-6">
        Mục lục
      </div>
      <ul className="space-y-1">
        {SECTIONS.map((s, i) => {
          const isActive = active === s.id;
          return (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className={`group flex items-start gap-3 py-2 pr-2 text-[13px] leading-snug transition-colors ${
                  isActive ? "text-black" : "text-neutral-500 hover:text-black"
                }`}
              >
                <span
                  className={`mt-2 h-[1px] transition-all duration-300 ${
                    isActive ? "w-6 bg-[#E11D2A]" : "w-3 bg-neutral-300"
                  }`}
                />
                <span>
                  <span className="block text-[10px] tracking-widest text-neutral-400">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {s.label}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
