import { 
  FileText, 
  Settings, 
  Zap, 
  ShieldCheck, 
  Truck, 
  Cpu, 
  Wrench, 
  Download,
  Info,
  ExternalLink,
  MessageSquare,
  Search,
  Filter,
  ArrowRight,
  Database,
  Monitor
} from 'lucide-react';

export interface Document {
  id: string;
  label: 'DATASHEET' | 'MANUAL' | 'CATALOGUE' | 'CERTIFICATE' | 'SOFTWARE' | 'FIRMWARE' | 'TEST REPORT';
  title: string;
  description: string;
  category: string;
  tags: string[];
  type: 'PDF' | 'ZIP' | 'EXE';
  size: string;
  updatedAt: string;
  version: string;
  voltage?: string;
  capacity?: string;
}

export const PRODUCT_CATEGORIES = [
  { id: 'forklift', name: 'Pin xe nâng điện', count: 24, icon: Truck },
  { id: 'ev', name: 'Pin xe điện du lịch', count: 18, icon: Zap },
  { id: 'agv', name: 'Pin AGV / Robot', count: 16, icon: Cpu },
  { id: 'ess', name: 'Hệ thống lưu trữ ESS', count: 12, icon: Database },
  { id: 'charger', name: 'Trạm sạc & Phụ kiện', count: 8, icon: Settings },
  { id: 'bms', name: 'Phần mềm & BMS', count: 10, icon: Monitor },
];

export const DOCUMENTS: Document[] = [
  {
    id: '1',
    label: 'CATALOGUE',
    title: 'Catalogue sản phẩm PKG Battery 2026',
    description: 'Tổng quan chi tiết các dòng sản phẩm lithium công nghiệp, ứng dụng và lợi thế kỹ thuật cốt lõi của PKG Battery.',
    category: 'Tổng hợp',
    tags: ['Toàn bộ sản phẩm', '2026', 'Profile'],
    type: 'PDF',
    size: '12.4 MB',
    updatedAt: '04/2026',
    version: '1.0'
  },
  {
    id: '2',
    label: 'DATASHEET',
    title: 'Datasheet Pin Lithium Xe Nâng 48V 200Ah',
    description: 'Thông số kỹ thuật điện, hiệu suất xả, thông số sạc, chi tiết giao tiếp BMS và kích thước cơ khí.',
    category: 'forklift',
    tags: ['Pin xe nâng', '48V', '200Ah', 'Giao tiếp CAN'],
    type: 'PDF',
    size: '2.8 MB',
    updatedAt: '04/2026',
    version: '1.4',
    voltage: '48V',
    capacity: '200Ah'
  },
  {
    id: '3',
    label: 'MANUAL',
    title: 'Hướng dẫn lắp đặt & vận hành Pin AGV',
    description: 'Quy trình lắp đặt, sơ đồ đấu nối, kiểm tra an toàn, quy trình vận hành và mã lỗi xử lý sự cố cho hệ pin AGV.',
    category: 'agv',
    tags: ['AGV', 'Lắp đặt', 'Vận hành', 'Xử lý lỗi'],
    type: 'PDF',
    size: '3.6 MB',
    updatedAt: '03/2026',
    version: '2.1'
  },
  {
    id: '4',
    label: 'SOFTWARE',
    title: 'PKG BMS Configurator v3.2',
    description: 'Phần mềm cấu hình giám sát điện áp cell, nhiệt độ, giới hạn dòng điện và trạng thái bảo vệ cho các dòng BMS PKG.',
    category: 'bms',
    tags: ['BMS', 'Cấu hình', 'Windows', 'CAN', 'RS485'],
    type: 'ZIP',
    size: '28 MB',
    updatedAt: '02/2026',
    version: '3.2'
  },
  {
    id: '5',
    label: 'CERTIFICATE',
    title: 'Chứng chỉ UN38.3 - Dòng Pin Xe Nâng F-Series',
    description: 'Báo cáo thử nghiệm và chứng nhận an toàn vận chuyển quốc tế cho dòng pin lithium xe nâng.',
    category: 'forklift',
    tags: ['Chứng chỉ', 'Vận chuyển', 'An toàn', 'UN38.3'],
    type: 'PDF',
    size: '4.2 MB',
    updatedAt: '01/2026',
    version: '2026'
  },
  {
    id: '6',
    label: 'FIRMWARE',
    title: 'Firmware nâng cấp bộ sạc CAN v2.0',
    description: 'Bản cập nhật firmware cải thiện độ ổn định giao tiếp với bộ sạc và tối ưu hóa ngưỡng bảo vệ nhiệt độ.',
    category: 'charger',
    tags: ['Firmware', 'Sạc', 'Giao tiếp CAN'],
    type: 'ZIP',
    size: '5.4 MB',
    updatedAt: '03/2026',
    version: '2.0'
  }
];

export const FAQS = [
  {
    q: 'Tôi có cần tài khoản để tải tài liệu của PKG Battery không?',
    a: 'Không. Hầu hết các tài liệu kỹ thuật phổ thông đều có sẵn để tải trực tiếp. Một số tài liệu đặc thù theo dự án có thể yêu cầu liên hệ trực hệ bộ phận kỹ thuật.'
  },
  {
    q: 'Làm thế nào để biết datasheet nào khớp với sản phẩm của tôi?',
    a: 'Bạn hãy sử dụng bộ lọc theo Điện áp (Voltage) và Dung lượng (Capacity) hoặc mã sản phẩm (Model Code). Nếu không tìm thấy, hãy gửi mã Serial Number cho chúng tôi.'
  },
  {
    q: 'Tôi có nên tự cài đặt Firmware không?',
    a: 'Việc cài đặt Firmware chỉ nên thực hiện sau khi đã kiểm tra kỹ khả năng tương thích của phần cứng. Khuyến khích liên hệ kỹ sư PKG để được hướng dẫn trực tiếp trước khi nâng cấp.'
  },
  {
    q: 'PKG Battery có cung cấp hồ sơ năng lực (Company Profile) không?',
    a: 'Có, bạn có thể tìm thấy Company Profile và các chứng chỉ quản lý chất lượng ISO trong mục "Sổ tay sản phẩm" hoặc "Chứng chỉ".'
  }
];
