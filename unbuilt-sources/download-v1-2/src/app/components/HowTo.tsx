import { ArrowRight } from "lucide-react";
import { SectionLabel, SectionHeading } from "./SectionLabel";

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
              <SectionLabel num="07" label="HƯỚNG DẪN" />
              <SectionHeading>
                Cách tìm<br />
                <span className="text-[#E60023]">đúng tài liệu</span>
              </SectionHeading>
              <p className="text-[16px] leading-[1.6] text-black/70 mb-8 mt-6">
                Lộ trình ngắn dành cho người dùng chưa chắc chắn nên tải tài liệu nào — từ kỹ sư vận hành đến bộ phận mua hàng.
              </p>
              <a href="#support" className="group inline-flex items-center gap-3 px-6 py-4 bg-[#0A0A0A] text-white text-[13px] tracking-wide hover:bg-[#E60023] transition-colors" style={{ fontWeight: 700 }}>
                Cần hỗ trợ xác định model?
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" strokeWidth={2.5} />
              </a>
            </div>
          </div>

          <div className="lg:col-span-8 relative">
            <div className="absolute left-[36px] top-4 bottom-4 w-0.5 bg-[#0A0A0A]/15 hidden md:block" />
            <ol className="space-y-7 md:space-y-8">
              {STEPS.map((s, i) => (
                <li key={s.n} className="relative grid md:grid-cols-[88px_1fr] gap-5 items-start">
                  <div className="flex md:flex-col items-center md:items-start gap-3 md:gap-2">
                    <div className={`relative w-[72px] h-[72px] flex items-center justify-center transition-colors ${
                      i === 0 ? "bg-[#E60023] text-white" : "bg-white border-2 border-[#0A0A0A] text-[#0A0A0A]"
                    }`}>
                      <span className="text-[24px] tracking-tight" style={{ fontWeight: 700 }}>{s.n}</span>
                    </div>
                  </div>
                  <div className="md:pt-4">
                    <h3 className="text-[22px] lg:text-[26px] tracking-[-0.01em] leading-[1.2] mb-3" style={{ fontWeight: 700 }}>
                      {s.title}
                    </h3>
                    <p className="text-[15px] leading-[1.65] text-black/70 max-w-2xl">{s.desc}</p>
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
