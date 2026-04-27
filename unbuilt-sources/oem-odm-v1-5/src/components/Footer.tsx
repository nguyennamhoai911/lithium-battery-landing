import { Facebook, Linkedin, Twitter, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-6">
             <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-brand-red flex items-center justify-center rounded-sm">
                <span className="text-white font-bold text-lg">P</span>
              </div>
              <span className="font-bold text-xl tracking-tighter">
                PKGBATTERY
              </span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed">
              Giải pháp năng lượng lithium tùy chỉnh cho doanh nghiệp dẫn đầu. Chúng tôi đồng hành cùng sự phát triển bền vững của nền công nghiệp Việt Nam.
            </p>
            <div className="flex gap-4">
              {[<Facebook />, <Linkedin />, <Twitter />, <Youtube />].map((icon, i) => (
                <a key={i} href="#" className="w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center rounded-lg hover:bg-brand-red hover:border-brand-red transition-all">
                  <span className="w-5 h-5 opacity-60 hover:opacity-100">{icon}</span>
                </a>
              ))}
            </div>
          </div>

          <div>
             <h4 className="font-bold mb-6 uppercase tracking-widest text-xs text-brand-red">Sản phẩm</h4>
             <ul className="space-y-4 text-sm text-white/50">
               <li><a href="#" className="hover:text-white transition-colors">Pin xe nâng điện</a></li>
               <li><a href="#" className="hover:text-white transition-colors">Pin robot AGV/AMR</a></li>
               <li><a href="#" className="hover:text-white transition-colors">Pin xe điện chuyên dụng</a></li>
               <li><a href="#" className="hover:text-white transition-colors">Hệ thống ESS</a></li>
               <li><a href="#" className="hover:text-white transition-colors">Linh kiện & BMS</a></li>
             </ul>
          </div>

          <div>
             <h4 className="font-bold mb-6 uppercase tracking-widest text-xs text-brand-red">Công ty</h4>
             <ul className="space-y-4 text-sm text-white/50">
               <li><a href="#" className="hover:text-white transition-colors">Về chúng tôi</a></li>
               <li><a href="#" className="hover:text-white transition-colors">Năng lực sản xuất</a></li>
               <li><a href="#" className="hover:text-white transition-colors">Tin tức & Sự kiện</a></li>
               <li><a href="#" className="hover:text-white transition-colors">Tuyển dụng</a></li>
               <li><a href="#" className="hover:text-white transition-colors">Hệ thống đại lý</a></li>
             </ul>
          </div>

          <div>
             <h4 className="font-bold mb-6 uppercase tracking-widest text-xs text-brand-red">Văn phòng</h4>
             <div className="text-sm text-white/50 space-y-4">
               <p>KCN VSIP II-A, Huỳnh Văn Lũy, P. Phú Tân, TP. Thủ Dầu Một, Bình Dương.</p>
               <p>Hotline: 090.XXX.XXXX</p>
               <p>Email: contact@pkgbattery.com.vn</p>
             </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/20 text-xs italic">
            © 2026 PKGBattery Company Limited. All Rights Reserved.
          </p>
          <div className="flex gap-8 text-xs text-white/20">
            <a href="#" className="hover:text-white">Điều khoản sử dụng</a>
            <a href="#" className="hover:text-white">Chính sách bảo mật</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
