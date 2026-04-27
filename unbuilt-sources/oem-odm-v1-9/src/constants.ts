import { 
  Battery, 
  Settings, 
  Zap, 
  Box, 
  Factory, 
  Search, 
  ShieldCheck, 
  Users,
  Cpu,
  Layers,
  ClipboardCheck,
  Activity
} from 'lucide-react';
import { DiagnosticProblem, SolutionLayer, RiskItem, PartnerScenario } from './types';

export const PROBLEMS: DiagnosticProblem[] = [
  {
    id: 'industrial',
    title: 'Pin cho thiết bị công nghiệp',
    description: 'Yêu cầu dòng xả cao, độ bền trong môi trường khắc nghiệt và sạc nhanh.',
    icon: Factory
  },
  {
    id: 'private-label',
    title: 'Sản phẩm pin thương hiệu riêng',
    description: 'Cần thiết kế vỏ, bao bì và tài liệu hướng dẫn chuyên nghiệp nhất.',
    icon: Box
  },
  {
    id: 'lead-acid-replacement',
    title: 'Thay thế ắc quy chì sang Lithium',
    description: 'Giảm trọng lượng, tăng tuổi thọ và tối ưu không gian lắp đặt.',
    icon: Zap
  },
  {
    id: 'custom-spec',
    title: 'Cấu hình pin theo kích thước riêng',
    description: 'Không gian giới hạn, hình dạng phức tạp hoặc điện áp không tiêu chuẩn.',
    icon: Battery
  },
  {
    id: 'stable-partner',
    title: 'Đối tác sản xuất tại Việt Nam',
    description: 'Cần sự ổn định về nguồn cung, kiểm soát chất lượng và hỗ trợ kỹ thuật gần.',
    icon: Users
  }
];

export const SOLUTION_LAYERS: SolutionLayer[] = [
  {
    title: 'Lớp Năng Lượng',
    description: 'Trái tim của hệ thống điện.',
    details: ['Cell pin LiFePO4/NMC loại A', 'Điện áp 12V - 800V', 'Dung lượng tùy chỉnh']
  },
  {
    title: 'Lớp Điều Khiển',
    description: 'Trí tuệ quản lý an toàn.',
    details: ['BMS thông minh kết nối truyền thông', 'Cân bằng cell chủ động', 'Bảo vệ đa tầng']
  },
  {
    title: 'Lớp Cơ Khí',
    description: 'Bộ khung bảo vệ bền bỉ.',
    details: ['Vỏ thép sơn tĩnh điện/Nhôm', 'Chống nước IP65/IP67', 'Kích thước fit theo máy']
  },
  {
    title: 'Lớp Thương Mại',
    description: 'Nhận diện thương hiệu đối tác.',
    details: ['In khắc Logo Laser', 'Bao bì chuẩn xuất khẩu', 'Tài liệu hướng dẫn riêng']
  },
  {
    title: 'Lớp Kiểm Tra',
    description: 'Cam kết chất lượng đầu ra.',
    details: ['Test dòng xả thực tế', 'Kiểm tra độ rung/nhiệt', 'Chứng chỉ an toàn quốc tế']
  }
];

export const RISK_CONTROLS: RiskItem[] = [
  {
    risk: 'Cấu hình không đúng nhu cầu thực tế',
    solution: 'Phân tích môi trường vận hành và dòng xả đỉnh trước khi thiết kế.'
  },
  {
    risk: 'Pin không ổn định sau 1 năm sử dụng',
    solution: 'Sử dụng Cell loại A và BMS có thuật toán cân bằng cell thông minh.'
  },
  {
    risk: 'Linh kiện không đồng nhất khi sản xuất loạt',
    solution: 'Quy trình kiểm soát đầu vào nghiêm ngặt theo tiêu chuẩn ISO.'
  },
  {
    risk: 'Khó khăn khi bảo hành linh kiện lẻ',
    solution: 'PKGBattery hỗ trợ kỹ thuật trực tiếp tại nhà máy và kho linh kiện sẵn có.'
  }
];

export const PARTNER_SCENARIOS: PartnerScenario[] = [
  {
    title: 'Nhà sản xuất thiết bị gốc (OEM)',
    insight: 'Cần bộ nguồn tích hợp hoàn hảo vào thiết kế tổng thể của máy.',
    suggestion: 'Tư vấn tích hợp giao tiếp CAN/RS485.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Nhà phân phối độc quyền',
    insight: 'Cần sự khác biệt về mẫu mã và bảo hộ giải pháp trên thị trường.',
    suggestion: 'Thiết kế diện mạo riêng và private label.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800'
  }
];
