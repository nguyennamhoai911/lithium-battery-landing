import { ImageWithFallback } from "../figma/ImageWithFallback";
import { ArrowUpRight } from "lucide-react";

const PRODUCTS = [
  {
    name: "PKG-LFP-200",
    use: "ESS công nghiệp · 48V 200Ah",
    img: "https://images.unsplash.com/photo-1732030373864-d37573915751?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=85&w=900",
  },
  {
    name: "PKG-AGV Series",
    use: "Pin xe AGV · Sạc nhanh đa ca",
    img: "https://images.unsplash.com/photo-1664635032368-28eeb16de0d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=85&w=900",
  },
  {
    name: "PKG-Forklift LFP",
    use: "Pin xe nâng · Thay thế lead acid",
    img: "https://images.unsplash.com/photo-1700952633135-fd1d2a74a557?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=85&w=900",
  },
];

const ARTICLES = [
  {
    cat: "Case study",
    title: "Nhà máy dệt 200 công nhân chuyển đổi pin xe nâng — kết quả sau 18 tháng",
    date: "12 · 04 · 2026",
    img: "https://images.unsplash.com/photo-1684695749267-233af13276d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=85&w=1600",
    featured: true,
  },
  {
    cat: "Kỹ thuật",
    title: "BMS nhiều lớp: vì sao nó quyết định độ an toàn của một pack pin",
    date: "02 · 04 · 2026",
    img: "https://images.unsplash.com/photo-1739863306113-2629b0ed2a6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=85&w=1200",
  },
  {
    cat: "Insight",
    title: "Tổng chi phí sở hữu pin: 5 sai lầm phổ biến khi tính ROI",
    date: "28 · 03 · 2026",
    img: "https://images.unsplash.com/photo-1727373203588-82996710c2af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=85&w=1200",
  },
];

export function RelatedProducts() {
  return (
    <section className="max-w-[1400px] mx-auto px-6 lg:px-12 mt-32">
      <div className="flex items-end justify-between border-b border-black/10 pb-6 mb-12">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <span className="w-6 h-[1px] bg-[#E11D2A]" />
            <span className="text-[10px] tracking-[0.26em] uppercase text-neutral-500">
              Solutions
            </span>
          </div>
          <h2 className="text-[32px] md:text-[40px] tracking-[-0.015em] text-black">
            Giải pháp liên quan
          </h2>
        </div>
        <a href="#" className="hidden md:inline-flex items-center gap-2 text-[12px] tracking-[0.2em] uppercase text-black border-b border-black pb-1 hover:text-[#E11D2A] hover:border-[#E11D2A] transition-colors">
          Xem toàn bộ <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-black/10 border border-black/10">
        {PRODUCTS.map((p) => (
          <a
            key={p.name}
            href="#"
            className="group bg-white p-6 hover:bg-neutral-50 transition-colors"
          >
            <div className="aspect-[4/3] overflow-hidden bg-neutral-100">
              <ImageWithFallback
                src={p.img}
                alt={p.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
              />
            </div>
            <div className="mt-6 flex items-start justify-between gap-4">
              <div>
                <h3 className="text-[20px] tracking-[-0.01em] text-black">{p.name}</h3>
                <p className="mt-2 text-[13px] text-neutral-500">{p.use}</p>
              </div>
              <span className="w-9 h-9 border border-black/20 flex items-center justify-center group-hover:bg-[#E11D2A] group-hover:border-[#E11D2A] group-hover:text-white transition-colors shrink-0">
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export function RelatedArticles() {
  const [feat, ...rest] = ARTICLES;
  return (
    <section className="max-w-[1400px] mx-auto px-6 lg:px-12 mt-28">
      <div className="flex items-end justify-between border-b border-black/10 pb-6 mb-12">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <span className="w-6 h-[1px] bg-[#E11D2A]" />
            <span className="text-[10px] tracking-[0.26em] uppercase text-neutral-500">
              Tiếp tục đọc
            </span>
          </div>
          <h2 className="text-[32px] md:text-[40px] tracking-[-0.015em] text-black">
            Bài viết liên quan
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <a href="#" className="lg:col-span-7 group">
          <div className="aspect-[16/9] overflow-hidden bg-neutral-100">
            <ImageWithFallback
              src={feat.img}
              alt={feat.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
            />
          </div>
          <div className="mt-6 flex items-center gap-4 text-[10px] tracking-[0.24em] uppercase">
            <span className="text-[#E11D2A]">{feat.cat}</span>
            <span className="text-neutral-300">·</span>
            <span className="text-neutral-500">{feat.date}</span>
          </div>
          <h3 className="mt-4 text-[26px] md:text-[30px] leading-[1.2] tracking-[-0.015em] text-black max-w-[26ch] group-hover:text-[#E11D2A] transition-colors">
            {feat.title}
          </h3>
        </a>

        <div className="lg:col-span-5 flex flex-col divide-y divide-black/10">
          {rest.map((a) => (
            <a key={a.title} href="#" className="group flex gap-5 py-6 first:pt-0">
              <div className="w-32 sm:w-40 aspect-[16/9] shrink-0 overflow-hidden bg-neutral-100">
                <ImageWithFallback
                  src={a.img}
                  alt={a.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 text-[10px] tracking-[0.22em] uppercase">
                  <span className="text-[#E11D2A]">{a.cat}</span>
                  <span className="text-neutral-300">·</span>
                  <span className="text-neutral-500">{a.date}</span>
                </div>
                <h4 className="mt-3 text-[16px] leading-[1.35] tracking-[-0.005em] text-black group-hover:text-[#E11D2A] transition-colors">
                  {a.title}
                </h4>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
