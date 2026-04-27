import { ArrowRight } from "lucide-react";

const STEPS = [
  { n: "01", title: "Xác định dòng sản phẩm", desc: "Chọn nhóm sản phẩm: pin xe nâng, pin AGV, ESS, trạm sạc hoặc BMS." },
  { n: "02", title: "Khớp điện áp và dung lượng", desc: "Dùng điện áp, dung lượng hoặc mã model để thu hẹp danh sách tài liệu." },
  { n: "03", title: "Chọn mục đích tài liệu", desc: "Datasheet để đánh giá, manual để vận hành, chứng chỉ để tuân thủ, firmware để cập nhật hệ thống." },
  { n: "04", title: "Kiểm tra phiên bản và ngày cập nhật", desc: "Luôn dùng phiên bản mới nhất, trừ khi hệ thống của bạn yêu cầu phiên bản cũ tương thích." },
  { n: "05", title: "Liên hệ kỹ thuật khi không chắc chắn", desc: "Với firmware, cấu hình BMS hoặc tài liệu theo dự án, hãy liên hệ kỹ thuật trước khi áp dụng thay đổi." },
];

export function HowTo() {
  return (
    <section className="relative py-24 lg:py-32 bg-[#FAFAFA] border-y border-black/8">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <div className="flex items-center gap-3 mb-5">
                <span className="text-[#E11D2E] text-[12px] tracking-[0.2em]">07 / HƯỚNG DẪN</span>
                <div className="w-12 h-px bg-[#E11D2E]" />
              </div>
              <h2 className="text-[34px] lg:text-[42px] leading-[1.1] tracking-[-0.02em] mb-5" style={{ fontWeight: 500 }}>
                Cách tìm đúng tài liệu
              </h2>
              <p className="text-[15px] leading-relaxed text-black/60 mb-8">
                Lộ trình ngắn dành cho người dùng chưa chắc chắn nên tải tài liệu nào — từ kỹ sư vận hành đến bộ phận mua hàng.
              </p>
              <a href="#support" className="group inline-flex items-center gap-3 px-5 py-3 bg-black text-white text-[13px] tracking-wide hover:bg-[#E11D2E] transition-colors">
                Cần hỗ trợ xác định model?
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-8 relative">
            <div className="absolute left-[32px] top-2 bottom-2 w-px bg-black/10 hidden md:block" />
            <ol className="space-y-8 md:space-y-10">
              {STEPS.map((s, i) => (
                <li key={s.n} className="relative grid md:grid-cols-[80px_1fr] gap-5 items-start">
                  <div className="flex md:flex-col items-center md:items-start gap-3 md:gap-2">
                    <div className="relative w-[64px] h-[64px] border border-black/15 bg-white flex items-center justify-center">
                      <span className="text-[18px] tracking-tight" style={{ fontWeight: 500 }}>{s.n}</span>
                      {i === 0 && <span className="absolute -top-px -left-px w-2 h-2 bg-[#E11D2E]" />}
                    </div>
                  </div>
                  <div className="md:pt-3">
                    <h3 className="text-[20px] lg:text-[22px] tracking-tight leading-tight mb-2" style={{ fontWeight: 500 }}>
                      {s.title}
                    </h3>
                    <p className="text-[14px] leading-relaxed text-black/60 max-w-2xl">{s.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
