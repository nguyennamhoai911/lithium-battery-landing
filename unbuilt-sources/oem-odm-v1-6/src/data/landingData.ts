import { 
  Cpu, 
  Battery, 
  Settings, 
  ShieldCheck, 
  Truck, 
  Zap, 
  Search, 
  DraftingCompass, 
  Microscope, 
  Activity, 
  Factory, 
  CheckCircle2,
  AlertTriangle,
  Bot,
  Warehouse,
  Construction,
  Radio,
  FileText,
  Clock
} from "lucide-react";

export const PAIN_POINTS = [
  {
    title: "Pin tiêu chuẩn không vừa khoang máy",
    problem: "Nhiều thiết bị có không gian lắp đặt đặc thù, pin bán sẵn thường quá lớn hoặc không đúng hình dạng.",
    solution: "Thiết kế kích thước, vỏ pin, vị trí cổng kết nối và gá lắp theo đúng bản vẽ thiết bị của bạn.",
    icon: DraftingCompass
  },
  {
    title: "Thời lượng vận hành không đạt kỳ vọng",
    problem: "Tính toán sai dung lượng hoặc dùng cell kém chất lượng khiến máy dừng đột ngột giữa ca làm việc.",
    solution: "Tính toán dung lượng, dòng xả và profile tải thực tế để đảm bảo thời gian vận hành ổn định.",
    icon: Battery
  },
  {
    title: "Khó khăn trong giao tiếp hệ thống (BMS)",
    problem: "BMS không tương thích với bộ điều khiển máy, gây lỗi CANBUS/RS485 hoặc không hiển thị % pin.",
    solution: "Tùy biến Smart BMS hỗ trợ CANBUS, RS485, Bluetooth hoặc giao thức riêng theo yêu cầu.",
    icon: Cpu
  },
  {
    title: "Hỗ trợ kỹ thuật xa xôi, phản hồi chậm",
    problem: "Làm việc với NCC nước ngoài mất nhiều thời gian trao đổi, khó xử lý khi cần chỉnh sửa mẫu nhanh.",
    solution: "Đội ngũ kỹ sư tại Việt Nam hỗ trợ trực tiếp, xử lý mẫu thử trong vài tuần, giao tiếp thuận tiện.",
    icon: Activity
  },
  {
    title: "Thiếu hồ sơ chứng nhận pháp lý",
    problem: "Gặp rào cản khi xuất khẩu hoặc vận chuyển do thiếu UN38.3, MSDS hoặc CE.",
    solution: "Cung cấp đầy đủ bộ hồ sơ kỹ thuật, chứng nhận an toàn và vận chuyển cho thị trường mục tiêu.",
    icon: ShieldCheck
  }
];

export const AUDIENCE_GROUPS = [
  {
    category: "Nhà sản xuất máy móc",
    description: "Cần tích hợp pin lithium trực tiếp vào thiết bị gốc, yêu cầu đồng bộ cao về kỹ thuật.",
    icon: Settings
  },
  {
    category: "Đơn vị AGV & Robotics",
    description: "Cần giải pháp pin sạc nhanh, dòng xả cao, ổn định và có giao tiếp thông minh.",
    icon: Bot
  },
  {
    category: "Xe nâng & Thiết bị kho",
    description: "Thay thế ắc quy chì truyền thống bằng lithium để tăng hiệu suất và giảm bảo trì.",
    icon: Warehouse
  },
  {
    category: "Xe Golf & Xe điện chuyên dụng",
    description: "Tùy chỉnh hệ thống pin 48V-72V cho các dòng xe điện du lịch, xe kéo công nghiệp.",
    icon: Zap
  }
];

export const CAPABILITIES = [
  { label: "Điện áp", value: "12V - 96V+", detail: "Hệ thống điện áp tùy chỉnh theo dải hoạt động của motor." },
  { label: "Dung lượng", value: "20Ah - 500Ah+", detail: "Mở rộng linh hoạt theo yêu cầu thời gian vận hành." },
  { label: "Lõi Pin (Cell)", value: "LiFePO4 / NMC", detail: "Tùy chọn hóa học phù hợp giữa độ an toàn và mật độ năng lượng." },
  { label: "Giao tiếp", value: "CANBUS / RS485", detail: "Tích hợp sâu vào hệ thống điều khiển của khách hàng." },
  { label: "Vỏ Pin", value: "Thép / Nhôm / ABS", detail: "Thiết kế chống rung, chống nước IP65/IP67." },
  { label: "Cổng kết nối", value: "Anderson / Aviation", detail: "Đa dạng chuẩn kết nối công nghiệp theo thiết kế máy." }
];

export const APPLICATIONS = [
  {
    title: "Xe nâng & Thiết bị kho",
    description: "Thay thế ắc quy chì-axit, hỗ trợ sạc tranh thủ, tuổi thọ gấp 3-5 lần.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
    icon: Truck
  },
  {
    title: "AGV & Robot tự hành",
    description: "Kích thước gọn, dòng xả ổn định, giao tiếp mượt mà với MCU/PLC.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800",
    icon: Bot
  },
  {
    title: "Xe Golf & Du lịch",
    description: "Trọng lượng nhẹ hơn, tăng quãng đường di chuyển mỗi lần sạc.",
    image: "https://images.unsplash.com/photo-1594473760762-48568b248749?auto=format&fit=crop&q=80&w=800",
    icon: Zap
  },
  {
    title: "Lưu trữ ESS & Viễn thông",
    description: "Dự phòng năng lượng cho trạm BTS, UPS công nghiệp và hệ mặt trời.",
    image: "https://images.unsplash.com/photo-1548332968-3e4293f353ea?auto=format&fit=crop&q=80&w=800",
    icon: Radio
  }
];

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Khảo sát & Tiếp nhận",
    desc: "Tiếp nhận bản vẽ, thông số điện áp, dòng xả và không gian lắp đặt.",
    input: "Bản vẽ máy, Yêu cầu kỹ thuật",
    output: "Phân tích khả thi"
  },
  {
    step: "02",
    title: "Thiết kế giải pháp",
    desc: "Chọn cell, cấu hình BMS và mô phỏng 3D vỏ pin.",
    input: "Dữ liệu khảo sát",
    output: "Profile kỹ thuật & Báo giá"
  },
  {
    step: "03",
    title: "Sản xuất mẫu thử",
    desc: "Lắp ráp prototype để kiểm tra độ tương thích thực tế.",
    input: "Bản vẽ duyệt",
    output: "Mẫu thử (Prototype)"
  },
  {
    step: "04",
    title: "Test & Hiệu chỉnh",
    desc: "Chạy thử trên máy thật, điều chỉnh firmware BMS nếu cần.",
    input: "Phản hồi hiện trường",
    output: "Phiên bản Final"
  },
  {
    step: "05",
    title: "Sản xuất hàng loạt",
    desc: "Sản xuất theo quy chuẩn ISO, kiểm soát chất lượng từng lô.",
    input: "Đơn đặt hàng",
    output: "Sản phẩm & Hồ sơ chứng nhận"
  }
];

export const QUALITY_STANDARDS = [
  { title: "IQC", desc: "Kiểm soát cell và linh kiện đầu vào nghiêm ngặt." },
  { title: "Assembly QC", desc: "Giám sát quá trình hàn laser và đấu nối 100%." },
  { title: "Aging Test", desc: "Chu kỳ sạc xả liên tục để kiểm tra độ ổn định nhiệt." },
  { title: "OQC", desc: "Kiểm tra ngoại quan và chức năng trước khi đóng gói." }
];

export const CASE_STUDIES = [
  {
    title: "Hệ pin lithium 48V cho xe nâng Toyota",
    problem: "Ắc quy chì nặng, sạc lâu, cần bảo trì nước cất thường xuyên.",
    solution: "Pack LiFePO4 48V 400Ah, vỏ thép, tản nhiệt tự nhiên.",
    result: "Tăng thời gian làm việc từ 6h lên 10h, sạc đầy trong 2h."
  },
  {
    title: "Pin siêu gọn cho AGV Logistic",
    problem: "Khoang pin hẹp, yêu cầu giao tiếp RS485 với trung tâm điều khiển.",
    solution: "Thiết kế pack 24V 100Ah dạng dẹt, BMS thông minh.",
    result: "Giảm 30% diện tích pin, tích hợp thành công vào khung AGV mới."
  }
];

export const FAQS = [
  {
    q: "PKGBattery có nhận làm mẫu 1 bộ không?",
    a: "Có. Chúng tôi hỗ trợ làm mẫu thử (prototype) cho các dự án OEM/ODM để khách hàng kiểm tra tính tương thích trước khi sản xuất hàng loạt."
  },
  {
    q: "Thời gian thiết kế và làm mẫu mất bao lâu?",
    a: "Thông thường từ 10-21 ngày tùy vào độ phức tạp của pack và tính sẵn có của linh kiện đặc thù."
  },
  {
    q: "Pin có đủ hồ sơ vận chuyển hàng không/đường biển không?",
    a: "Tất cả pack pin xuất xưởng đều đi kèm MSDS, UN38.3 và tài liệu hướng dẫn vận chuyển an toàn."
  },
  {
    q: "Có hỗ trợ tùy chỉnh logo thương hiệu riêng không?",
    a: "Hoàn toàn có thể. Chúng tôi hỗ trợ in ấn tem nhãn, logo dập nổi trên vỏ thép và tài liệu HDSD theo thương hiệu của khách hàng."
  }
];
