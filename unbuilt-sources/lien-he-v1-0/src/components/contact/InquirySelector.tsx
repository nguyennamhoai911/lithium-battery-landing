import { motion } from 'motion/react';
import { InquiryType } from '../../types';
import { 
  Calculator, 
  Store, 
  Cpu, 
  Wrench, 
  ShieldCheck, 
  Handshake, 
  LucideIcon 
} from 'lucide-react';

interface SelectorProps {
  selected: InquiryType;
  onSelect: (type: InquiryType) => void;
}

interface Tile {
  id: InquiryType;
  title: string;
  description: string;
  icon: LucideIcon;
}

const tiles: Tile[] = [
  {
    id: InquiryType.QUOTE,
    title: "Yêu cầu báo giá",
    description: "Dành cho mua số lượng lớn, dự án và báo giá sản phẩm lẻ.",
    icon: Calculator
  },
  {
    id: InquiryType.DEALER,
    title: "Đăng ký đại lý",
    description: "Hợp tác nhà phân phối, cửa hàng và đối tác khu vực.",
    icon: Store
  },
  {
    id: InquiryType.OEM_ODM,
    title: "Dự án OEM/ODM",
    description: "Thiết kế và sản xuất pack pin theo yêu cầu kỹ thuật riêng.",
    icon: Cpu
  },
  {
    id: InquiryType.TECHNICAL,
    title: "Hỗ trợ kỹ thuật",
    description: "Tư vấn lắp đặt, vận hành và xử lý sự cố kỹ thuật.",
    icon: Wrench
  },
  {
    id: InquiryType.WARRANTY,
    title: "Bảo hành sản phẩm",
    description: "Tra cứu bảo hành, yêu cầu sửa chữa và đổi trả.",
    icon: ShieldCheck
  },
  {
    id: InquiryType.PARTNERSHIP,
    title: "Hợp tác khác",
    description: "Truyền thông, cung ứng và các vấn đề thương mại khác.",
    icon: Handshake
  }
];

export default function InquirySelector({ selected, onSelect }: SelectorProps) {
  return (
    <div className="mb-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4">Bạn cần PKGbattery hỗ trợ điều gì?</h2>
        <p className="text-brand-dark/60 max-w-2xl mx-auto">
          Chọn đúng nhu cầu để đội ngũ phụ trách có thể phản hồi bạn nhanh chóng và chính xác nhất.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tiles.map((tile) => {
          const isSelected = selected === tile.id;
          const Icon = tile.icon;

          return (
            <motion.button
              key={tile.id}
              onClick={() => onSelect(tile.id)}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.98 }}
              className={`relative p-8 rounded-3xl text-left transition-all duration-300 border-2 group ${
                isSelected 
                ? "bg-brand-dark border-brand-dark text-white shadow-2xl shadow-brand-dark/20" 
                : "bg-white border-brand-soft text-brand-dark hover:border-brand-red/30 hover:shadow-xl"
              }`}
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-colors ${
                isSelected ? "bg-brand-red text-white" : "bg-brand-soft text-brand-red group-hover:bg-brand-red/10"
              }`}>
                <Icon className="w-7 h-7" />
              </div>
              
              <h3 className="text-xl font-bold mb-3">{tile.title}</h3>
              <p className={`text-sm leading-relaxed ${isSelected ? "text-gray-400" : "text-brand-dark/60"}`}>
                {tile.description}
              </p>
              
              {isSelected && (
                <motion.div 
                  layoutId="active-indicator"
                  className="absolute bottom-4 right-8 text-brand-red"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-red shadow-[0_0_10px_rgba(227,30,36,0.8)]" />
                </motion.div>
              )}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
