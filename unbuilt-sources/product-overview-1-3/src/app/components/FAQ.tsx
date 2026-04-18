import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Làm thế nào để chọn cấu hình pin phù hợp với xe nâng của tôi?',
      answer: 'Việc lựa chọn cấu hình pin phụ thuộc vào nhiều yếu tố: điện áp xe nâng (24V, 48V, 80V), tải trọng nâng, thời gian hoạt động mỗi ca, môi trường làm việc. Đội ngũ kỹ thuật PKG Battery sẽ tư vấn cấu hình tối ưu dựa trên thông số kỹ thuật xe nâng và nhu cầu sử dụng thực tế của bạn. Hãy liên hệ với chúng tôi để được đánh giá chi tiết.'
    },
    {
      question: 'PKG Battery có hỗ trợ tùy chỉnh OEM/ODM không?',
      answer: 'Có, chúng tôi hoàn toàn hỗ trợ tùy chỉnh OEM/ODM theo yêu cầu kỹ thuật cụ thể. Bạn có thể tùy chỉnh điện áp, dung lượng, kích thước, vỏ case, đầu kết nối, và các tính năng BMS. Số lượng đặt hàng tối thiểu cho OEM/ODM là 10 bộ. Thời gian sản xuất thường từ 3-4 tuần tùy vào mức độ tùy chỉnh.'
    },
    {
      question: 'Pin Lithium có thể sử dụng được trong môi trường nào?',
      answer: 'Pin Lithium PKG Battery được thiết kế cho môi trường công nghiệp khắc nghiệt, hoạt động ổn định từ -20°C đến 60°C. Cấp bảo vệ IP65 chống bụi và nước. Phù hợp với kho lạnh, nhà máy sản xuất, kho vận ngoài trời, trung tâm logistics. Tuy nhiên, không khuyến nghị sử dụng trong môi trường có nguy cơ cháy nổ hoặc hóa chất ăn mòn mạnh.'
    },
    {
      question: 'Thời gian sạc đầy pin là bao lâu?',
      answer: 'Thời gian sạc đầy 100% từ 2-3 giờ tùy theo dung lượng pin. Sạc đến 80% chỉ mất khoảng 1.5-2 giờ. PKG Battery hỗ trợ sạc cơ hội (opportunity charging), nghĩa là bạn có thể sạc pin trong thời gian nghỉ giải lao hoặc chuyển ca mà không cần chờ đến khi pin gần hết. Điều này giúp tối ưu thời gian hoạt động của xe nâng.'
    },
    {
      question: 'Tuổi thọ của pin Lithium PKG là bao lâu?',
      answer: 'Pin Lithium PKG Battery có tuổi thọ từ 5000 đến 7000 chu kỳ sạc-xả ở độ sâu phóng điện 80% (DOD 80%). Trong điều kiện sử dụng thực tế, tuổi thọ thường đạt 8-10 năm. Đây là con số gấp 3-4 lần so với ắc quy chì acid truyền thống. Pin vẫn giữ được trên 80% dung lượng sau 5000 chu kỳ.'
    },
    {
      question: 'Tôi có cần thay đổi hệ thống sạc hiện tại không?',
      answer: 'Trong hầu hết trường hợp, bạn có thể sử dụng bộ sạc Lithium chuyên dụng mà PKG Battery cung cấp. Nếu xe nâng hiện tại đang dùng sạc cho ắc quy chì, bạn sẽ cần nâng cấp lên bộ sạc Lithium để đảm bảo hiệu suất và an toàn. Chúng tôi có các gói giải pháp trọn gói bao gồm pin + sạc, hoặc có thể tư vấn sạc tương thích với pin.'
    },
    {
      question: 'PKG Battery có hỗ trợ tư vấn kỹ thuật và sau bán hàng không?',
      answer: 'Có, chúng tôi cung cấp hỗ trợ kỹ thuật toàn diện: tư vấn lựa chọn sản phẩm, hướng dẫn lắp đặt, đào tạo vận hành, bảo hành sản phẩm, và hỗ trợ kỹ thuật 24/7. Bảo hành tiêu chuẩn 2-3 năm tùy model. Chúng tôi có đội ngũ kỹ thuật sẵn sàng hỗ trợ trực tiếp tại địa điểm của khách hàng nếu cần.'
    },
    {
      question: 'Chi phí chuyển đổi sang pin Lithium có đáng không?',
      answer: 'Mặc dù chi phí đầu tư ban đầu cao hơn ắc quy chì, nhưng pin Lithium mang lại ROI rất tốt trong dài hạn. Bạn sẽ tiết kiệm: 40-50% chi phí vận hành (điện, bảo trì), tăng 30-40% năng suất do không cần thời gian chết để thay pin, không cần phòng sạc riêng, giảm nhân công bảo trì. Thời gian hoàn vốn trung bình từ 2-3 năm.'
    }
  ];

  return (
    <section id="faq" className="py-24 lg:py-32 bg-zinc-50">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-red-600/10 rounded-full mb-6">
            <HelpCircle className="w-8 h-8 text-red-600" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-zinc-900 mb-6">
            Câu hỏi thường gặp
          </h2>
          <p className="text-xl text-zinc-600">
            Giải đáp các thắc mắc phổ biến về pin Lithium cho xe nâng điện
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-zinc-200 rounded-lg overflow-hidden hover:border-red-600 transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-start justify-between gap-4 p-6 text-left hover:bg-zinc-50 transition-colors"
              >
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-zinc-900 pr-8">
                    {faq.question}
                  </h3>
                </div>
                <div className={`flex-shrink-0 w-6 h-6 flex items-center justify-center transition-transform duration-300 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}>
                  <ChevronDown className="w-5 h-5 text-red-600" />
                </div>
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-6 text-zinc-600 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center p-8 bg-white border border-zinc-200 rounded-lg">
          <h3 className="text-2xl font-bold text-zinc-900 mb-3">
            Vẫn còn câu hỏi?
          </h3>
          <p className="text-zinc-600 mb-6">
            Đội ngũ kỹ thuật PKG Battery sẵn sàng giải đáp mọi thắc mắc của bạn
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded transition-colors">
              Liên hệ tư vấn
            </button>
            <button className="px-6 py-3 border border-zinc-300 hover:border-red-600 hover:text-red-600 text-zinc-700 rounded transition-colors">
              Gọi: 1900 xxxx
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
