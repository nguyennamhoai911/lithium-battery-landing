import { ImageWithFallback } from "../figma/ImageWithFallback";

export function Breadcrumb() {
  const items = ["Trang chủ", "Bài viết", "Công nghệ pin", "So sánh Lithium vs Lead Acid"];
  return (
    <nav className="flex flex-wrap items-center gap-2 text-[12px] tracking-wide text-neutral-500">
      {items.map((it, i) => (
        <span key={it} className="flex items-center gap-2">
          {i < items.length - 1 ? (
            <a href="#" className="hover:text-black transition-colors">{it}</a>
          ) : (
            <span className="text-black">{it}</span>
          )}
          {i < items.length - 1 && <span className="text-neutral-300">/</span>}
        </span>
      ))}
    </nav>
  );
}

export function Hero() {
  return (
    <section className="max-w-[1400px] mx-auto px-6 lg:px-12 pt-10">
      <Breadcrumb />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mt-10 lg:mt-14 items-end">
        <div className="lg:col-span-7">
          <div className="flex items-center gap-3 mb-8">
            <span className="w-8 h-[1px] bg-[#E11D2A]" />
            <span className="text-[11px] tracking-[0.24em] uppercase text-[#E11D2A]">
              Công nghệ pin · Insight
            </span>
          </div>

          <h1 className="text-[40px] md:text-[56px] lg:text-[68px] leading-[1.05] tracking-[-0.02em] text-black">
            Lithium vs Lead Acid:
            <br />
            <span className="text-neutral-400">Lựa chọn nào cho</span>
            <br />
            doanh nghiệp công nghiệp?
          </h1>

          <p className="mt-8 text-[17px] leading-[1.7] text-neutral-600 max-w-[600px]">
            Phân tích kỹ thuật và kinh tế giữa hai dòng pin phổ biến nhất trong vận
            hành công nghiệp — từ chu kỳ tuổi thọ, BMS, đến tổng chi phí sở hữu thực
            tế trong 5 năm.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 pt-6 border-t border-black/10">
            <Meta label="Tác giả" value="Nguyễn Quang Minh" />
            <Meta label="Cập nhật" value="20 · 04 · 2026" />
            <Meta label="Đọc trong" value="9 phút" />
            <Meta label="Chuyên mục" value="R&D · Lithium" />
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="relative">
            <div className="absolute -top-3 -left-3 w-16 h-[1px] bg-[#E11D2A]" />
            <div className="absolute -top-3 -left-3 w-[1px] h-16 bg-[#E11D2A]" />
            <div className="relative aspect-[16/9] overflow-hidden bg-neutral-100 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.35)]">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1672624254120-ebbe190b3519?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=85&w=1400"
                alt="Industrial lithium battery system"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/15 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                <span className="text-[10px] tracking-[0.24em] uppercase">PKG / Lab Series 04</span>
                <span className="text-[10px] tracking-[0.24em] uppercase opacity-80">16 : 9</span>
              </div>
            </div>
            <div className="mt-3 flex items-center justify-between text-[11px] tracking-widest uppercase text-neutral-400">
              <span>Photo · PKG Engineering</span>
              <span>Hà Nội · 2026</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col">
      <span className="text-[10px] tracking-[0.22em] uppercase text-neutral-400">{label}</span>
      <span className="text-[14px] text-black mt-1">{value}</span>
    </div>
  );
}
