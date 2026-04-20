import { Mail, Phone, MapPin, Facebook, Linkedin, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#111111] text-white">
      <div className="container mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl tracking-wider">PKG BATTERY</h3>
              <div className="h-1 w-12 bg-[#D61F26] mt-2" />
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Tiên phong giải pháp năng lượng Lithium tại Việt Nam
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg">Liên hệ</h4>
            <div className="space-y-3 text-sm text-white/70">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0 text-[#D61F26]" />
                <span>Việt Nam</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 flex-shrink-0 text-[#D61F26]" />
                <span>Hotline: 1900 xxxx</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 flex-shrink-0 text-[#D61F26]" />
                <span>info@pkgbattery.vn</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg">Menu nhanh</h4>
            <nav className="space-y-2 text-sm text-white/70">
              <a href="#" className="block hover:text-[#D61F26] transition-colors">Giới thiệu</a>
              <a href="#" className="block hover:text-[#D61F26] transition-colors">Sản phẩm</a>
              <a href="#" className="block hover:text-[#D61F26] transition-colors">Giải pháp</a>
              <a href="#" className="block hover:text-[#D61F26] transition-colors">Liên hệ</a>
            </nav>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-lg">Kết nối</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-[#D61F26] rounded-full flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-[#D61F26] rounded-full flex items-center justify-center transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-[#D61F26] rounded-full flex items-center justify-center transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50">
            <p>&copy; 2026 PKG Battery. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-[#D61F26] transition-colors">Chính sách bảo mật</a>
              <a href="#" className="hover:text-[#D61F26] transition-colors">Điều khoản sử dụng</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
