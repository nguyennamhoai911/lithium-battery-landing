import { Facebook, Linkedin, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-brand-dark/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-8 h-8 bg-brand-red flex items-center justify-center font-bold text-white rounded-sm">
                PKG
              </div>
              <span className="font-display font-bold text-xl tracking-tighter">
                BATTERY <span className="text-brand-red">.</span>
              </span>
            </div>
            <p className="text-brand-dark/50 text-sm leading-relaxed mb-8">
              Chuyên gia giải pháp pin lithium công nghiệp, sản xuất OEM/ODM theo tiêu chuẩn quốc tế tại Việt Nam.
            </p>
            <div className="flex gap-4">
              {[Facebook, Linkedin, Twitter, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-brand-dark/10 flex items-center justify-center text-brand-dark hover:border-brand-red hover:text-brand-red transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-8 uppercase text-xs tracking-widest text-brand-red">Sản phẩm & Giải pháp</h4>
            <ul className="space-y-4 text-sm font-medium text-brand-dark/60">
              <li><a href="#" className="hover:text-brand-red transition-colors">Xe nâng điện (Forklift)</a></li>
              <li><a href="#" className="hover:text-brand-red transition-colors">AGV / Robot công nghiệp</a></li>
              <li><a href="#" className="hover:text-brand-red transition-colors">Lưu trữ năng lượng (ESS)</a></li>
              <li><a href="#" className="hover:text-brand-red transition-colors">UPS / Backup System</a></li>
              <li><a href="#" className="hover:text-brand-red transition-colors">Xe điện chuyên dụng</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-8 uppercase text-xs tracking-widest text-brand-red">Dịch vụ OEM/ODM</h4>
            <ul className="space-y-4 text-sm font-medium text-brand-dark/60">
              <li><a href="#" className="hover:text-brand-red transition-colors">Tư vấn cấu hình kỹ thuật</a></li>
              <li><a href="#" className="hover:text-brand-red transition-colors">Thiết kế mẫu thử (Prototype)</a></li>
              <li><a href="#" className="hover:text-brand-red transition-colors">Sản xuất quy mô lớn</a></li>
              <li><a href="#" className="hover:text-brand-red transition-colors">Kiểm định chất lượng</a></li>
              <li><a href="#" className="hover:text-brand-red transition-colors">Hỗ trợ chứng chỉ quốc tế</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-8 uppercase text-xs tracking-widest text-brand-red">Thông tin liên hệ</h4>
            <ul className="space-y-4 text-sm font-medium text-brand-dark/60">
              <li>Nhà máy: Khu công nghiệp XYZ, Tỉnh ABC, Việt Nam</li>
              <li>VPĐD: Quận 1, TP. Hồ Chí Minh</li>
              <li>Hotline: 09x xxx xxxx</li>
              <li>Email: info@pkgbattery.com</li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-brand-dark/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-brand-dark/40 font-medium">
            © {new Date().getFullYear()} PKGBattery Industrial Lithium Solutions. All rights reserved.
          </p>
          <div className="flex gap-8 text-xs font-bold text-brand-dark/40 uppercase tracking-widest">
            <a href="#" className="hover:text-brand-red transition-colors">Quy trình</a>
            <a href="#" className="hover:text-brand-red transition-colors">Chính sách bảo mật</a>
            <a href="#" className="hover:text-brand-red transition-colors">Điều khoản hợp tác</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
