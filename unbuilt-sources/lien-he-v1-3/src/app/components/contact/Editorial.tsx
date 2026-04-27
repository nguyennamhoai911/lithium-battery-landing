import { motion } from "motion/react";
import { useState } from "react";
import { Plus, Minus, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

const FAQ = [
  {
    q: "Tôi cần báo giá nhanh cho dự án — quy trình mất bao lâu?",
    a: "Sau khi gửi form Request a Quote hoặc gọi hotline, sale phụ trách dự án sẽ liên hệ trong vòng 12 phút (giờ làm việc). Báo giá chính thức kèm thông số kỹ thuật, điều khoản giao hàng và bảo hành thường được phát hành trong vòng 24 giờ làm việc với sản phẩm có sẵn, 3–5 ngày với cấu hình OEM tuỳ chỉnh.",
  },
  {
    q: "Đăng ký đại lý có yêu cầu doanh thu tối thiểu không?",
    a: "Có. PKGbattery áp dụng chính sách phân vùng độc quyền theo tỉnh/thành để bảo vệ quyền lợi đại lý. Doanh thu cam kết tối thiểu sẽ thay đổi theo khu vực — từ 200 triệu/tháng cho khu vực thử nghiệm đến trên 1 tỷ/tháng cho thành phố lớn. Đội Channel sẽ trao đổi cụ thể sau khi nhận được hồ sơ.",
  },
  {
    q: "OEM/ODM tối thiểu bao nhiêu pack? Có hỗ trợ thiết kế cơ khí không?",
    a: "MOQ thử nghiệm là 50 pack cho cấu hình tiêu chuẩn (LFP 12V / 24V / 48V) và từ 200 pack cho cấu hình tuỳ chỉnh BMS / vỏ. Đội kỹ sư hỗ trợ từ định nghĩa yêu cầu, lựa chọn cell, mô phỏng nhiệt, layout BMS đến khuôn vỏ và chứng chỉ vận chuyển UN38.3.",
  },
  {
    q: "Sản phẩm PKGbattery có chứng chỉ vận chuyển hàng không không?",
    a: "Có. Toàn bộ pack sản xuất tại nhà máy của PKG đều test theo UN38.3 và có MSDS chuẩn cho vận chuyển hàng không / đường biển. Với đơn hàng OEM dung lượng lớn, PKG hỗ trợ đăng ký test bổ sung và làm việc với đơn vị forwarder của khách.",
  },
  {
    q: "Tôi đã mua hàng nhưng pin xuống dung lượng nhanh — quy trình bảo hành ra sao?",
    a: "Vui lòng gửi form Warranty Claim kèm serial number, ngày mua và mô tả lỗi. Đội kỹ thuật sẽ kiểm tra log từ BMS (nếu có cổng giao tiếp) và đề xuất phương án: kiểm định tại trung tâm bảo hành, đổi mới hoặc sửa chữa. Thời gian xử lý trung bình 5–10 ngày làm việc.",
  },
  {
    q: "PKGbattery có hỗ trợ tư vấn từ xa không?",
    a: "Có. Đội kỹ thuật cung cấp tư vấn miễn phí qua Zalo, video call hoặc email cho khách dự án và đại lý uỷ quyền — bao gồm tính toán sơ bộ dung lượng, lựa chọn BMS, sơ đồ lắp đặt và kiểm tra tương thích inverter / charger.",
  },
];

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="relative bg-white py-28">
      <div className="mx-auto max-w-[1100px] px-6 lg:px-12">
        <div className="text-center">
          <span className="text-[12px] uppercase tracking-[0.22em] text-red-600">
            Frequently asked
          </span>
          <h2 className="mt-4 text-[clamp(2rem,3.5vw,3rem)] tracking-[-0.02em]">
            Câu hỏi thường gặp khi liên hệ PKGbattery.
          </h2>
        </div>

        <div className="mt-12 divide-y divide-neutral-200 border-t border-b border-neutral-200">
          {FAQ.map((f, i) => {
            const o = open === i;
            return (
              <button
                key={f.q}
                onClick={() => setOpen(o ? null : i)}
                className="block w-full px-1 py-6 text-left transition hover:bg-neutral-50"
              >
                <div className="flex items-start justify-between gap-6">
                  <span className="text-lg tracking-tight text-neutral-900">
                    {f.q}
                  </span>
                  <span
                    className={`mt-1 inline-flex size-8 shrink-0 items-center justify-center border transition ${
                      o
                        ? "border-red-600 bg-red-600 text-white"
                        : "border-neutral-300 text-neutral-700"
                    }`}
                  >
                    {o ? <Minus className="size-4" /> : <Plus className="size-4" />}
                  </span>
                </div>
                <motion.div
                  initial={false}
                  animate={{
                    height: o ? "auto" : 0,
                    opacity: o ? 1 : 0,
                    marginTop: o ? 16 : 0,
                  }}
                  className="overflow-hidden"
                >
                  <p className="max-w-3xl text-neutral-600 leading-relaxed">
                    {f.a}
                  </p>
                </motion.div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const RELATED_PRODUCTS = [
  {
    t: "PKG-LFP 48V 100Ah Server Rack",
    s: "5.12 kWh · BMS RS485 · UPS / data center",
    img: "https://images.unsplash.com/photo-1600428235269-c326df6361fe?auto=format&fit=crop&w=900&q=80",
  },
  {
    t: "PKG-EV 72V 60Ah Lithium Pack",
    s: "Xe điện 3 bánh / golf cart commercial",
    img: "https://images.unsplash.com/photo-1732030373864-d37573915751?auto=format&fit=crop&w=900&q=80",
  },
  {
    t: "PKG-ESS 51.2V 280Ah Cabinet",
    s: "Lưu trữ năng lượng mặt trời thương mại",
    img: "https://images.unsplash.com/photo-1636817098062-8dbc0cf735f0?auto=format&fit=crop&w=900&q=80",
  },
];

export function RelatedProducts() {
  return (
    <section className="relative bg-neutral-50 py-28">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="flex items-end justify-between">
          <div>
            <span className="text-[12px] uppercase tracking-[0.22em] text-red-600">
              Related products
            </span>
            <h2 className="mt-3 text-[clamp(1.8rem,3vw,2.4rem)] tracking-[-0.02em]">
              Sản phẩm khách thường hỏi nhất khi liên hệ.
            </h2>
          </div>
          <a href="#" className="hidden text-sm text-neutral-700 hover:text-red-600 md:inline-flex items-center gap-1">
            View all products <ArrowRight className="size-4" />
          </a>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {RELATED_PRODUCTS.map((p) => (
            <a
              key={p.t}
              href="#"
              className="group block border border-neutral-200 bg-white"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <ImageWithFallback
                  src={p.img}
                  alt={p.t}
                  className="size-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <div className="text-[11px] uppercase tracking-[0.2em] text-red-600">
                  Product
                </div>
                <div className="mt-2 tracking-tight">{p.t}</div>
                <div className="mt-1 text-sm text-neutral-500">{p.s}</div>
                <div className="mt-4 inline-flex items-center gap-1 text-sm text-neutral-900 transition group-hover:text-red-600">
                  Datasheet & quote <ArrowRight className="size-4" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

const ARTICLES = [
  {
    t: "Hướng dẫn chọn pin LiFePO4 cho hệ solar 5–15kWh hộ kinh doanh",
    c: "Insight · 8 phút đọc",
  },
  {
    t: "BMS rời vs BMS tích hợp: cái nào phù hợp cho dự án đại trà?",
    c: "Engineering · 6 phút đọc",
  },
  {
    t: "Câu chuyện đại lý: Mở rộng kênh phân phối pin tại miền Trung",
    c: "Channel · 5 phút đọc",
  },
];

export function RelatedArticles() {
  return (
    <section className="relative bg-white py-28">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <span className="text-[12px] uppercase tracking-[0.22em] text-red-600">
              Related reading
            </span>
            <h2 className="mt-3 text-[clamp(1.8rem,3vw,2.4rem)] tracking-[-0.02em]">
              Bài viết hữu ích cho người chuẩn bị liên hệ.
            </h2>
            <p className="mt-5 text-neutral-600">
              Trước khi gọi sale, nhiều khách hàng B2B đọc các bài viết này để có
              cuộc trao đổi tập trung và tiết kiệm thời gian — đặc biệt với dự
              án solar, UPS và xe điện.
            </p>
          </div>
          <div className="lg:col-span-8 divide-y divide-neutral-200 border-y border-neutral-200">
            {ARTICLES.map((a, i) => (
              <a
                key={a.t}
                href="#"
                className="group flex items-center justify-between gap-6 py-6 transition hover:bg-neutral-50 px-2"
              >
                <div className="flex items-start gap-6">
                  <span className="text-neutral-400 tracking-tight">
                    0{i + 1}
                  </span>
                  <div>
                    <div className="text-lg tracking-tight text-neutral-900">
                      {a.t}
                    </div>
                    <div className="mt-1 text-sm text-neutral-500">{a.c}</div>
                  </div>
                </div>
                <ArrowRight className="size-5 text-neutral-400 transition group-hover:text-red-600 group-hover:translate-x-1" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-neutral-950 py-28 text-white">
      <div
        aria-hidden
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(circle at 80% 50%, rgba(220,38,38,0.55), transparent 60%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />
      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <span className="text-[12px] uppercase tracking-[0.22em] text-red-500">
              Ready to talk
            </span>
            <h2 className="mt-4 text-[clamp(2.4rem,5vw,4.5rem)] leading-[1.02] tracking-[-0.02em]">
              Sẵn sàng trao đổi về nhu cầu pin của bạn?
            </h2>
            <p className="mt-6 max-w-2xl text-neutral-400 text-lg leading-relaxed">
              Liên hệ đội ngũ PKGbattery để nhận tư vấn giải pháp phù hợp cho
              doanh nghiệp hoặc dự án. Sale, kỹ sư OEM và bộ phận Channel cùng
              vận hành — giúp bạn nhận đúng đề xuất ngay lần đầu trao đổi.
            </p>
          </div>
          <div className="lg:col-span-4 flex flex-col gap-3">
            <a
              href="tel:0989120088"
              className="inline-flex items-center justify-between gap-3 bg-red-600 px-6 py-5 text-lg hover:bg-red-700"
            >
              <span>Call Sales · 0989 120 088</span>
              <ArrowRight className="size-5" />
            </a>
            <a
              href="https://zalo.me/0989120088"
              className="inline-flex items-center justify-between gap-3 border border-white/30 px-6 py-5 hover:bg-white/5"
            >
              <span>Chat Zalo</span>
              <ArrowRight className="size-5" />
            </a>
            <a
              href="#inquiry"
              className="inline-flex items-center justify-between gap-3 px-6 py-5 text-neutral-300 hover:text-white"
            >
              <span>Gửi inquiry chi tiết</span>
              <ArrowRight className="size-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
