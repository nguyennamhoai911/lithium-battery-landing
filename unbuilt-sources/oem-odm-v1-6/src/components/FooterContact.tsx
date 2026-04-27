import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { SectionTitle, Button, GlassCard } from "./Common";
import { FAQS } from "../data/landingData";
import { ChevronDown, Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <SectionTitle 
          centered
          eyebrow="Giải đáp thắc mắc"
          title="Câu hỏi thường gặp"
          description="Những thông tin cơ bản giúp bạn chuẩn bị tốt hơn trước khi bắt đầu dự án OEM/ODM."
        />

        <div className="border border-slate-100 rounded-sm overflow-hidden">
          {FAQS.map((faq, idx) => (
            <div key={idx} className="border-b border-slate-100 last:border-0">
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors"
              >
                <span className="font-bold text-slate-900 text-lg leading-snug">{faq.q}</span>
                <ChevronDown className={`shrink-0 text-slate-400 transition-transform duration-300 ${openIndex === idx ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-slate-600 leading-relaxed bg-slate-50/50">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    app: "",
    req: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Yêu cầu của bạn đã được gửi. Đội ngũ PKGBattery sẽ phản hồi sớm nhất!");
  };

  return (
    <section id="contact" className="py-24 bg-slate-950 text-white relative overflow-hidden">
      {/* Visual background accents */}
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,#dc262610_0%,transparent_50%)] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          <div className="lg:w-1/2">
            <SectionTitle 
              dark
              eyebrow="Bắt đầu dự án"
              title="Cùng kiến tạo trái tim năng lượng cho máy móc của bạn"
              description="Để chúng tôi tư vấn được chính xác nhất, vui lòng gửi kèm các thông số kỹ thuật sơ bộ mà bạn đang hướng tới."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0">
                  <Mail size={18} className="text-red-500" />
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-1">Email</h4>
                  <p className="text-white font-medium">oem@pkgbattery.com</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0">
                  <Phone size={18} className="text-red-500" />
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-1">Hotline Kỹ thuật</h4>
                  <p className="text-white font-medium">+84 9XX XXX XXX</p>
                </div>
              </div>
              <div className="flex gap-4 items-start col-span-full">
                <div className="w-10 h-10 bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0">
                  <MapPin size={18} className="text-red-500" />
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-1">Địa chỉ nhà máy</h4>
                  <p className="text-white font-medium">Khu Công nghiệp VSIP, Bình Dương, Việt Nam</p>
                </div>
              </div>
            </div>

            <div className="p-8 bg-red-600/10 border border-red-600/20 rounded-sm">
              <h5 className="font-bold text-red-500 uppercase tracking-widest text-xs mb-4">Checklist chuẩn bị</h5>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-400">
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-red-600 rounded-full" /> Điện áp (V) & Dung lượng (Ah)
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-red-600 rounded-full" /> Kích thước khoang chứa
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-red-600 rounded-full" /> Dòng xả liên tục & đỉnh
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-red-600 rounded-full" /> Môi trường vận hành
                </li>
              </ul>
            </div>
          </div>

          <div className="lg:w-1/2">
            <GlassCard className="bg-white p-8 sm:p-10 text-slate-900 border-0">
              <h3 className="text-2xl font-bold mb-8 italic tracking-tight">Gửi thông tin yêu cầu OEM/ODM</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Họ và tên</label>
                    <input required type="text" className="w-full bg-slate-50 border-b-2 border-slate-100 p-3 focus:border-red-600 outline-none transition-colors" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Công ty</label>
                    <input required type="text" className="w-full bg-slate-50 border-b-2 border-slate-100 p-3 focus:border-red-600 outline-none transition-colors" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Email</label>
                    <input required type="email" className="w-full bg-slate-50 border-b-2 border-slate-100 p-3 focus:border-red-600 outline-none transition-colors" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Số điện thoại / Zalo</label>
                    <input required type="tel" className="w-full bg-slate-50 border-b-2 border-slate-100 p-3 focus:border-red-600 outline-none transition-colors" />
                  </div>
                </div>
                <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Ứng dụng (Xe nâng, AGV, ESS...)</label>
                    <input required type="text" className="w-full bg-slate-50 border-b-2 border-slate-100 p-3 focus:border-red-600 outline-none transition-colors" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Yêu cầu kỹ thuật chi tiết</label>
                  <textarea rows={4} className="w-full bg-slate-50 border-b-2 border-slate-100 p-3 focus:border-red-600 outline-none transition-colors resize-none"></textarea>
                </div>
                <Button type="submit" className="w-full" size="lg"> Gửi yêu cầu tư vấn kỹ thuật </Button>
                <p className="text-[10px] text-center text-slate-400 uppercase tracking-wider font-medium">Kỹ sư PKGBattery sẽ phản hồi trong 24 giờ làm việc</p>
              </form>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-slate-950 pt-20 pb-10 border-t border-slate-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 justify-between mb-20">
          <div className="max-w-sm">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-red-600 flex items-center justify-center rounded-sm">
                <span className="text-white font-black text-sm tracking-tighter">PK</span>
              </div>
              <span className="font-bold text-xl tracking-tight text-white">PKGBattery</span>
            </div>
            <p className="text-slate-500 leading-relaxed mb-8">
              Đối tác hàng đầu tại Việt Nam chuyên thiết kế và sản xuất hệ thống pin lithium tùy chỉnh theo yêu cầu công nghiệp.
            </p>
            <div className="flex gap-4">
               <a href="#" className="w-10 h-10 bg-slate-900 flex items-center justify-center hover:bg-red-600 transition-colors text-white">
                  <MessageCircle size={18} />
               </a>
               <a href="#" className="w-10 h-10 bg-slate-900 flex items-center justify-center hover:bg-red-600 transition-colors text-white">
                  <Mail size={18} />
               </a>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
            <div>
              <h4 className="text-white font-bold uppercase text-[10px] tracking-[0.3em] mb-6">Giải pháp</h4>
              <ul className="space-y-4 text-sm text-slate-500">
                <li><a href="#" className="hover:text-red-500 transition-colors">Tùy chỉnh OEM</a></li>
                <li><a href="#" className="hover:text-red-500 transition-colors">Sản xuất ODM</a></li>
                <li><a href="#" className="hover:text-red-500 transition-colors">Thiết kế BMS</a></li>
                <li><a href="#" className="hover:text-red-500 transition-colors">Năng lực nhà máy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold uppercase text-[10px] tracking-[0.3em] mb-6">Ứng dụng</h4>
              <ul className="space-y-4 text-sm text-slate-500">
                <li><a href="#" className="hover:text-red-500 transition-colors">Xe nâng điện</a></li>
                <li><a href="#" className="hover:text-red-500 transition-colors">Robot AGV</a></li>
                <li><a href="#" className="hover:text-red-500 transition-colors">Hệ lưu trữ ESS</a></li>
                <li><a href="#" className="hover:text-red-500 transition-colors">Xe Golf / Du lịch</a></li>
              </ul>
            </div>
            <div className="col-span-2 lg:col-span-1">
              <h4 className="text-white font-bold uppercase text-[10px] tracking-[0.3em] mb-6">Trợ giúp</h4>
              <ul className="space-y-4 text-sm text-slate-500">
                <li><a href="#" className="hover:text-red-500 transition-colors">Hồ sơ năng lực</a></li>
                <li><a href="#" className="hover:text-red-500 transition-colors">Chính sách bảo mật</a></li>
                <li><a href="#" className="hover:text-red-500 transition-colors">Bảo hành hệ thống</a></li>
                <li><a href="#" className="hover:text-red-500 transition-colors">Liên hệ báo giá</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 pt-10 border-t border-slate-900/50">
          <p className="text-[10px] text-slate-600 uppercase tracking-widest font-bold">
            © 2026 PKGBATTERY INDUSTRIAL. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-6">
             <span className="text-[10px] text-slate-600 font-medium uppercase tracking-widest">Proudly Made in Vietnam</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
