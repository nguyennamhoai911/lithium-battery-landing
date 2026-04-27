import { Battery, Mail, Phone, MapPin, Globe, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white pt-24 pb-32 lg:pb-12 border-t border-brand-soft">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-20">
          {/* Brand Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-8">
              <div className="bg-brand-red p-1.5 rounded-lg">
                <Battery className="w-5 h-5 text-white" fill="currentColor" />
              </div>
              <span className="text-xl font-display font-bold tracking-tight">
                PKG<span className="text-brand-red">battery</span>
              </span>
            </div>
            <p className="text-brand-dark/60 text-sm leading-relaxed mb-8">
              Chuyên gia cung cấp giải pháp pin lithium-ion và hệ thống lưu trữ năng lượng (ESS) hàng đầu tại Việt Nam. OEM/ODM chuyên nghiệp cho mọi nhu cầu.
            </p>
            <div className="flex gap-4">
              {['FB', 'YT', 'IN', 'LN'].map(soc => (
                <button key={soc} className="w-8 h-8 rounded-lg bg-brand-soft flex items-center justify-center text-[10px] font-bold text-brand-dark/40 hover:bg-brand-red hover:text-white transition-all">
                  {soc}
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="font-bold text-brand-dark mb-8 uppercase tracking-widest text-xs">Sản phẩm</h5>
            <ul className="space-y-4">
              {['Pin Lưu trữ (ESS)', 'Pin xe Golf', 'Pin xe điện EV', 'Pin Viễn thông', 'Pin thiết kế riêng'].map(item => (
                <li key={item}>
                  <a href="#" className="text-sm text-brand-dark/60 hover:text-brand-red transition-colors flex items-center group">
                    {item}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 ml-1 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-brand-dark mb-8 uppercase tracking-widest text-xs">Hệ thống</h5>
            <ul className="space-y-4">
              {['Tìm đại lý', 'Chính sách đại lý', 'Bảo hành điện tử', 'Hỗ trợ kỹ thuật', 'Tài liệu kỹ thuật'].map(item => (
                <li key={item}>
                  <a href="#" className="text-sm text-brand-dark/60 hover:text-brand-red transition-colors flex items-center group">
                    {item}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 ml-1 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h5 className="font-bold text-brand-dark mb-8 uppercase tracking-widest text-xs">Liên hệ trực tiếp</h5>
            <div className="space-y-6">
              <div className="flex gap-3">
                <Phone className="w-4 h-4 text-brand-red shrink-0" />
                <div>
                  <p className="text-xs font-bold text-brand-dark">Hotline Tư vấn</p>
                  <p className="text-sm text-brand-dark/60">0989 000 000</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Mail className="w-4 h-4 text-brand-red shrink-0" />
                <div>
                  <p className="text-xs font-bold text-brand-dark">Email liên hệ</p>
                  <p className="text-sm text-brand-dark/60">contact@pkgbattery.com</p>
                </div>
              </div>
              <div className="flex gap-3">
                <MapPin className="w-4 h-4 text-brand-red shrink-0" />
                <div>
                  <p className="text-xs font-bold text-brand-dark">Văn phòng</p>
                  <p className="text-sm text-brand-dark/60">123 Thái Hà, Đống Đa, Hà Nội</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-brand-soft flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-brand-dark/40 font-medium">
            © 2024 PKGbattery Co., Ltd. All rights reserved. Designed for Excellence.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-[10px] font-bold text-brand-dark/40 hover:text-brand-dark uppercase tracking-widest transition-colors">Privacy Policy</a>
            <a href="#" className="text-[10px] font-bold text-brand-dark/40 hover:text-brand-dark uppercase tracking-widest transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
