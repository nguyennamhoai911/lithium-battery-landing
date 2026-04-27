import { Battery, Linkedin, Facebook, Youtube, Globe } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-black pt-20 pb-10 text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 lg:col-span-1">
            <a href="/" className="flex items-center gap-2 mb-8 group">
              <div className="w-12 h-12 bg-brand-red flex items-center justify-center rounded-sm">
                <Battery className="text-white w-7 h-7" />
              </div>
              <div>
                <span className="text-2xl font-display font-black tracking-tighter">
                  PKG<span className="text-brand-red">BATTERY</span>
                </span>
                <p className="text-[10px] tracking-[0.3em] font-bold uppercase text-brand-gray-muted">
                   Industrial Energy
                </p>
              </div>
            </a>
            <p className="text-brand-gray-muted leading-relaxed mb-8 max-w-xs">
              Đơn vị hàng đầu Việt Nam chuyên cung cấp các giải pháp lưu trữ năng lượng tùy chỉnh cho mọi thiết bị công nghiệp.
            </p>
            <div className="flex gap-4">
              {[Linkedin, Facebook, Youtube, Globe].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center text-brand-gray-muted hover:bg-brand-red hover:text-white hover:border-brand-red transition-all">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-brand-red mb-8">Giải pháp</h4>
            <ul className="space-y-4 text-brand-gray-muted text-sm font-medium">
              <li><a href="#" className="hover:text-white transition-colors">Pin xe nâng (Forklift)</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pin AGV / Robot</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pin xe Golf / EV</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Hệ thống lưu trữ ESS</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pin viễn thông UPS</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-brand-red mb-8">Công ty</h4>
            <ul className="space-y-4 text-brand-gray-muted text-sm font-medium">
              <li><a href="#" className="hover:text-white transition-colors">Về PKGBattery</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Năng lực sản xuất</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Dự án tiêu biểu</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Chứng nhận quốc tế</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Tin tức & Sự kiện</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-brand-red mb-8">Hỗ trợ</h4>
            <ul className="space-y-4 text-brand-gray-muted text-sm font-medium">
              <li><a href="#" className="hover:text-white transition-colors">Tài liệu kỹ thuật</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Yêu cầu báo giá</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Chính sách bảo hành</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Quy trình OEM</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Trung tâm bảo trì</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase font-bold tracking-widest text-brand-gray-muted">
          <p>© {currentYear} PKGBATTERY SOLUTIONS. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
