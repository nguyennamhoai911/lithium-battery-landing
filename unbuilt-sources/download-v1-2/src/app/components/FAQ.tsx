import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { SectionLabel, SectionHeading } from "./SectionLabel";

const QA = [
  {
    q: "Tôi có cần đăng nhập để tải tài liệu PKG Battery không?",
    a: "Không. Hầu hết tài liệu kỹ thuật có thể tải xuống trực tiếp mà không cần đăng nhập. Một số tài liệu theo dự án có thể yêu cầu liên hệ bộ phận kỹ thuật PKG.",
  },
  {
    q: "Làm sao biết datasheet nào đúng với sản phẩm của tôi?",
    a: "Sử dụng bộ lọc loại sản phẩm, điện áp, dung lượng và mã model. Nếu mã sản phẩm không có trong danh sách, vui lòng liên hệ kỹ thuật kèm số seri hoặc mã dự án.",
  },
  {
    q: "Tôi có thể tải phần mềm BMS trực tiếp không?",
    a: "Có. Các công cụ và phần mềm BMS tương thích đều có sẵn tại Trung tâm phần mềm BMS. Vui lòng kiểm tra ghi chú tương thích trước khi cài đặt.",
  },
  {
    q: "Tôi có nên tự cài firmware không?",
    a: "Firmware chỉ nên được cài sau khi xác nhận đúng model sản phẩm, phiên bản phần cứng và đã đọc ghi chú phiên bản. Nếu không chắc chắn, hãy liên hệ kỹ thuật PKG trước khi cài.",
  },
  {
    q: "Có cung cấp chứng chỉ và báo cáo kiểm định không?",
    a: "Có. PKG cung cấp các tài liệu an toàn, vận chuyển và tuân thủ như UN38.3, SDS và báo cáo kiểm định theo dòng sản phẩm khi có sẵn.",
  },
  {
    q: "Nếu tôi không tìm thấy tài liệu cần dùng thì sao?",
    a: "Sử dụng biểu mẫu “Gửi yêu cầu tài liệu” hoặc liên hệ kỹ thuật PKG. Một số tài liệu có thể thuộc dự án riêng hoặc chỉ cung cấp sau khi xác minh.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="relative py-24 lg:py-32 bg-[#FAFAFA] border-y border-black/8">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <SectionLabel num="11" label="CÂU HỎI" />
              <SectionHeading>
                Câu hỏi<br />
                <span className="text-[#E60023]">thường gặp</span>
              </SectionHeading>
              <p className="text-[16px] leading-[1.6] text-black/70 mt-6">
                Các câu hỏi của khách hàng kỹ thuật, bộ phận mua hàng và đối tác triển khai khi truy cập tài liệu PKG Battery.
              </p>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="border-t-2 border-[#0A0A0A]">
              {QA.map((item, i) => {
                const isOpen = open === i;
                return (
                  <div key={i} className={`border-b-2 ${isOpen ? "border-[#0A0A0A]" : "border-[#0A0A0A]/15"}`}>
                    <button
                      onClick={() => setOpen(isOpen ? null : i)}
                      className={`group w-full flex items-start justify-between gap-6 py-7 text-left transition-colors ${isOpen ? "bg-white" : "hover:bg-white/50"}`}
                    >
                      <div className="flex items-start gap-5 flex-1">
                        <span className={`text-[14px] tracking-[0.15em] mt-0.5 transition-colors ${isOpen ? "text-[#E60023]" : "text-black/45"}`} style={{ fontWeight: 700 }}>
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <div className="relative flex-1 pl-1">
                          <h3 className={`text-[20px] lg:text-[22px] tracking-[-0.01em] leading-[1.3] transition-colors ${isOpen ? "text-[#0A0A0A]" : "text-black/85 group-hover:text-[#0A0A0A]"}`} style={{ fontWeight: 700 }}>
                            {item.q}
                          </h3>
                          <div
                            className="grid transition-all duration-300 ease-out"
                            style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                          >
                            <div className="overflow-hidden">
                              <p className="pt-4 text-[15px] leading-[1.65] text-black/70 max-w-2xl">{item.a}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <span className={`shrink-0 w-10 h-10 flex items-center justify-center transition-colors ${isOpen ? "bg-[#E60023] text-white" : "bg-[#0A0A0A] text-white group-hover:bg-[#E60023]"}`}>
                        {isOpen ? <Minus className="w-4 h-4" strokeWidth={3} /> : <Plus className="w-4 h-4" strokeWidth={3} />}
                      </span>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
