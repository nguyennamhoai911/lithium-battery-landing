import { motion } from "motion/react";
import { Linkedin, Facebook, Twitter, Globe, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-white pt-24 pb-12 border-t border-neutral-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 md:col-span-1 space-y-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-brand flex items-center justify-center rounded-sm">
                <span className="text-white font-extrabold text-sm tracking-tighter">PKG</span>
              </div>
              <span className="text-industrial-black font-bold text-lg tracking-tight uppercase">Battery</span>
            </div>
            <p className="text-sm text-neutral-500 leading-relaxed max-w-xs">
              Đơn vị dẫn đầu tại Việt Nam trong lĩnh vực nghiên cứu, thiết kế và sản xuất các giải pháp Pin Lithium thông minh cho công nghiệp.
            </p>
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full bg-neutral-50 flex items-center justify-center hover:bg-brand hover:text-white transition-colors cursor-pointer">
                <Linkedin className="w-4 h-4" />
              </div>
              <div className="w-8 h-8 rounded-full bg-neutral-50 flex items-center justify-center hover:bg-brand hover:text-white transition-colors cursor-pointer">
                <Facebook className="w-4 h-4" />
              </div>
              <div className="w-8 h-8 rounded-full bg-neutral-50 flex items-center justify-center hover:bg-brand hover:text-white transition-colors cursor-pointer">
                <Twitter className="w-4 h-4" />
              </div>
              <div className="w-8 h-8 rounded-full bg-neutral-50 flex items-center justify-center hover:bg-brand hover:text-white transition-colors cursor-pointer">
                <Globe className="w-4 h-4" />
              </div>
            </div>
          </div>

          <div className="col-span-1">
            <h4 className="font-bold text-industrial-black mb-6 uppercase text-xs tracking-widest">Sản phẩm</h4>
            <ul className="space-y-4 text-sm text-neutral-500 font-medium">
              <li><a href="#" className="hover:text-brand transition-colors">Pin xe nâng điện</a></li>
              <li><a href="#" className="hover:text-brand transition-colors">Pin xe Golf</a></li>
              <li><a href="#" className="hover:text-brand transition-colors">Hệ thống pin AGV</a></li>
              <li><a href="#" className="hover:text-brand transition-colors">Bộ lưu trữ ESS</a></li>
              <li><a href="#" className="hover:text-brand transition-colors">Pin UPS công nghiệp</a></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="font-bold text-industrial-black mb-6 uppercase text-xs tracking-widest">Dịch vụ</h4>
            <ul className="space-y-4 text-sm text-neutral-500 font-medium">
              <li><a href="#" className="hover:text-brand transition-colors">Thiết kế OEM</a></li>
              <li><a href="#" className="hover:text-brand transition-colors">Sản xuất ODM</a></li>
              <li><a href="#" className="hover:text-brand transition-colors">Tư vấn kỹ thuật</a></li>
              <li><a href="#" className="hover:text-brand transition-colors">Hỗ trợ sau bán hàng</a></li>
              <li><a href="#" className="hover:text-brand transition-colors">Chính sách bảo hành</a></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="font-bold text-industrial-black mb-6 uppercase text-xs tracking-widest">Chứng nhận</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="h-12 bg-neutral-50 rounded-sm border border-neutral-100 flex items-center justify-center px-2">
                <span className="text-[10px] font-black text-neutral-400">ISO 9001</span>
              </div>
              <div className="h-12 bg-neutral-50 rounded-sm border border-neutral-100 flex items-center justify-center px-2">
                <span className="text-[10px] font-black text-neutral-400">CE / ROHS</span>
              </div>
              <div className="h-12 bg-neutral-50 rounded-sm border border-neutral-100 flex items-center justify-center px-2">
                <span className="text-[10px] font-black text-neutral-400">UN 38.3</span>
              </div>
              <div className="h-12 bg-neutral-50 rounded-sm border border-neutral-100 flex items-center justify-center px-2">
                <span className="text-[10px] font-black text-neutral-400">UL LISTED</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-neutral-100 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs font-medium text-neutral-400 italic">
            © 2024 PKGBattery Manufacturing. Toàn quyền sở hữu. 
            <span className="ml-4 md:inline hidden">Design for Performance.</span>
          </p>
          <motion.button 
            onClick={scrollToTop}
            whileHover={{ y: -5 }}
            className="w-12 h-12 bg-industrial-black text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-brand/20 hover:bg-brand transition-all"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
