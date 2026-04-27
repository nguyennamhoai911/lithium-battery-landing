import { Facebook, Linkedin, Youtube, ArrowUpRight } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="pt-24 pb-12 bg-white border-t border-zinc-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-8 h-8 bg-brand-red flex items-center justify-center font-bold text-white text-lg">P</div>
              <span className="font-bold text-lg tracking-tighter">PKG BATTERY</span>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed mb-8">
              Nhà cung cấp giải pháp pin lithium công nghiệp hàng đầu khu vực, đồng hành cùng doanh nghiệp tối ưu hóa năng lượng vận hành.
            </p>
            <div className="flex items-center gap-4">
              {[Linkedin, Facebook, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 border border-zinc-100 flex items-center justify-center text-zinc-400 hover:text-brand-red hover:border-brand-red transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h5 className="text-xs font-bold uppercase tracking-widest text-zinc-900 mb-8">Sản phẩm</h5>
            <ul className="space-y-4">
              {['Pin xe nâng điện', 'Pin lưu trữ năng lượng', 'Sạc công nghiệp', 'Hệ thống quản lý BMS'].map((item) => (
                <li key={item}><a href="#" className="text-zinc-500 text-sm hover:text-brand-red transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="text-xs font-bold uppercase tracking-widest text-zinc-900 mb-8">Về chúng tôi</h5>
            <ul className="space-y-4">
              {['Giới thiệu PKG', 'Năng lực sản xuất', 'Dự án tiêu biểu', 'Đối tác chiến lược'].map((item) => (
                <li key={item}><a href="#" className="text-zinc-500 text-sm hover:text-brand-red transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="text-xs font-bold uppercase tracking-widest text-zinc-900 mb-8">Văn phòng chính</h5>
            <p className="text-zinc-500 text-sm leading-relaxed mb-4">
              Lô Q-3, Đường số 7, KCN Long Hậu, Cần Giuộc, Long An, Việt Nam.
            </p>
            <a href="mailto:info@pkgbattery.com" className="text-sm font-bold text-zinc-900 flex items-center gap-2 hover:text-brand-red transition-colors">
              info@pkgbattery.com
              <ArrowUpRight size={14} />
            </a>
            <div className="mt-4 text-sm font-bold text-zinc-900">
              Hotline: +84 (28) 1234 5678
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[10px] text-zinc-400 uppercase tracking-widest font-semibold font-mono">
            © 2026 PKG BATTERY CO., LTD. ALL RIGHTS RESERVED.
          </div>
          <div className="flex gap-8 text-[10px] text-zinc-400 uppercase tracking-widest font-semibold">
            <a href="#" className="hover:text-brand-red transition-colors">Chính sách bảo mật</a>
            <a href="#" className="hover:text-brand-red transition-colors">Điều khoản dịch vụ</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
