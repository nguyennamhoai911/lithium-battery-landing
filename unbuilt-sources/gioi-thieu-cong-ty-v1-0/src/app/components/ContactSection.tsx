import { motion } from "motion/react";
import { useState } from "react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    needs: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white to-[#E5E5E5]/30">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <div className="w-12 h-1 bg-[#D61F26]" />
              <h2 className="text-4xl md:text-5xl text-[#111111] leading-tight">
                Bắt đầu nâng cấp<br />hệ thống năng lượng<br />của bạn hôm nay
              </h2>
            </div>

            <p className="text-lg text-[#2B2B2B]/80 leading-relaxed">
              Liên hệ với đội ngũ PKG Battery để được tư vấn giải pháp phù hợp với mô hình vận hành, nhu cầu kỹ thuật và định hướng đầu tư của doanh nghiệp. Từ giải pháp tiêu chuẩn đến các nhu cầu tùy biến riêng, chúng tôi sẵn sàng đồng hành để tìm ra phương án phù hợp nhất.
            </p>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/80 backdrop-blur-sm border border-[#E5E5E5] rounded-lg p-8 shadow-lg"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm text-[#2B2B2B] mb-2">
                  Họ tên *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-white border border-[#E5E5E5] rounded-sm focus:border-[#D61F26] focus:outline-none transition-colors"
                  placeholder="Nguyễn Văn A"
                />
              </div>

              <div>
                <label className="block text-sm text-[#2B2B2B] mb-2">
                  Công ty *
                </label>
                <input
                  type="text"
                  required
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-4 py-3 bg-white border border-[#E5E5E5] rounded-sm focus:border-[#D61F26] focus:outline-none transition-colors"
                  placeholder="Tên công ty"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-[#2B2B2B] mb-2">
                    Số điện thoại *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-[#E5E5E5] rounded-sm focus:border-[#D61F26] focus:outline-none transition-colors"
                    placeholder="0901234567"
                  />
                </div>

                <div>
                  <label className="block text-sm text-[#2B2B2B] mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-[#E5E5E5] rounded-sm focus:border-[#D61F26] focus:outline-none transition-colors"
                    placeholder="email@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-[#2B2B2B] mb-2">
                  Nhu cầu
                </label>
                <textarea
                  value={formData.needs}
                  onChange={(e) => setFormData({ ...formData, needs: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 bg-white border border-[#E5E5E5] rounded-sm focus:border-[#D61F26] focus:outline-none transition-colors resize-none"
                  placeholder="Mô tả nhu cầu của bạn..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-8 py-4 bg-gradient-to-r from-[#D61F26] to-[#B01A21] text-white rounded-sm hover:shadow-lg hover:shadow-[#D61F26]/50 transition-all"
              >
                Nhận tư vấn giải pháp
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
