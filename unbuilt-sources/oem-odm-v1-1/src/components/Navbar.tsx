import { motion } from "motion/react";
import { Menu, X, ChevronRight } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] bg-white/80 backdrop-blur-md border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-brand flex items-center justify-center rounded-sm">
            <span className="text-white font-extrabold text-xl tracking-tighter">PKG</span>
          </div>
          <span className="text-industrial-black font-bold text-xl tracking-tight uppercase">Battery</span>
        </div>

        <div className="hidden md:flex items-center gap-10">
          {["Giải pháp", "Năng lực", "Quy trình", "Dự án"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-industrial-gray hover:text-brand transition-colors"
            >
              {item}
            </a>
          ))}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-brand text-white px-6 py-2.5 rounded-sm text-sm font-bold flex items-center gap-2 group"
          >
            Liên hệ tư vấn
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>

        <button className="md:hidden text-industrial-black" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-b border-neutral-100 px-6 py-8 flex flex-col gap-6"
        >
          {["Giải pháp", "Năng lực", "Quy trình", "Dự án"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-lg font-bold text-industrial-black"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
          <button className="bg-brand text-white px-6 py-4 rounded-sm text-lg font-bold">
            Liên hệ ngay
          </button>
        </motion.div>
      )}
    </nav>
  );
}
