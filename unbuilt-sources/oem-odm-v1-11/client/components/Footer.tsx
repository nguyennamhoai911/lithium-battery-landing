import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-black text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-brand-red rounded-lg flex items-center justify-center text-white font-bold text-sm">
                PB
              </div>
              <span className="font-bold text-lg">PKGBattery</span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Sản xuất pin lithium công nghiệp theo yêu cầu cho doanh nghiệp
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Liên kết</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-brand-red transition-colors text-sm"
                >
                  Giới thiệu
                </a>
              </li>
              <li>
                <a
                  href="#capabilities"
                  className="text-gray-400 hover:text-brand-red transition-colors text-sm"
                >
                  Năng lực OEM/ODM
                </a>
              </li>
              <li>
                <a
                  href="#process"
                  className="text-gray-400 hover:text-brand-red transition-colors text-sm"
                >
                  Quy trình hợp tác
                </a>
              </li>
              <li>
                <a
                  href="#applications"
                  className="text-gray-400 hover:text-brand-red transition-colors text-sm"
                >
                  Ứng dụng
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Hỗ trợ</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-brand-red transition-colors text-sm"
                >
                  Tài liệu kỹ thuật
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-brand-red transition-colors text-sm"
                >
                  Câu hỏi thường gặp
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-brand-red transition-colors text-sm"
                >
                  Liên hệ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Liên hệ</h4>
            <ul className="space-y-3">
              <li className="flex gap-3 items-start">
                <Phone className="w-5 h-5 text-brand-red flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-400">Điện thoại</p>
                  <p className="text-white font-semibold">+84 (0) 123 456 789</p>
                </div>
              </li>
              <li className="flex gap-3 items-start">
                <Mail className="w-5 h-5 text-brand-red flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="text-white font-semibold">info@pkgbattery.com</p>
                </div>
              </li>
              <li className="flex gap-3 items-start">
                <MapPin className="w-5 h-5 text-brand-red flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-400">Địa chỉ</p>
                  <p className="text-white font-semibold text-sm">
                    Hà Nội, Việt Nam
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8 md:pt-12">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-xs md:text-sm">
              © {currentYear} PKGBattery. Tất cả quyền được bảo lưu.
            </p>
            <div className="flex gap-6 text-gray-400 text-sm">
              <a href="#" className="hover:text-brand-red transition-colors">
                Chính sách bảo mật
              </a>
              <a href="#" className="hover:text-brand-red transition-colors">
                Điều khoản sử dụng
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
