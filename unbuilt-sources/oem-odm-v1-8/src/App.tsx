/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useRef, useEffect } from "react";
import { 
  ChevronRight, 
  Settings, 
  Factory, 
  Zap, 
  ShieldCheck, 
  Users, 
  FileText, 
  ArrowRight, 
  CheckCircle2,
  AlertCircle,
  Cpu,
  Box,
  Layers,
  Database,
  Search,
  MessageSquare,
  Phone,
  Mail,
  Locate
} from "lucide-react";
import { motion, AnimatePresence, useScroll, useTransform, useInView } from "motion/react";

// --- Components ---

const Header = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-pkg-gray px-6 py-4 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-pkg-red flex items-center justify-center font-bold text-white text-xs">PKG</div>
        <span className="font-display font-bold tracking-tight text-xl">PKGBattery</span>
      </div>
      <div className="hidden md:flex items-center gap-8 text-sm font-medium">
        <a href="#solutions" className="hover:text-pkg-red transition-colors">Giải pháp</a>
        <a href="#dossier" className="hover:text-pkg-red transition-colors">Năng lực</a>
        <a href="#partners" className="hover:text-pkg-red transition-colors">Đối tác</a>
      </div>
      <button className="bg-pkg-black text-white px-5 py-2 text-sm font-medium hover:bg-pkg-red transition-all duration-300">
        Tư vấn kỹ thuật
      </button>
    </nav>
  );
};

// 1. Hero: Diagnostic Selector
const HeroDiagnostic = () => {
  const [activeProblem, setActiveProblem] = useState<number | null>(null);

  const problems = [
    {
      id: 1,
      label: "Tôi cần pin cho thiết bị công nghiệp đặc thù",
      response: "Chúng tôi phân tích dòng xả, môi trường làm việc và kích thước để đề xuất cell pin tối ưu (LFP/NCM)."
    },
    {
      id: 2,
      label: "Tôi muốn phát triển sản phẩm thương hiệu riêng",
      response: "Gói ODM toàn diện từ thiết kế vỏ, nhãn mác đến tài liệu kỹ thuật và đóng gói chuyên nghiệp."
    },
    {
      id: 3,
      label: "Tôi cần thay thế ắc quy chì bằng Lithium",
      response: "Thiết kế Drop-in Replacement với BMS tùy chỉnh để tương thích hoàn toàn với hệ thống sạc hiện tại."
    },
    {
      id: 4,
      label: "Tôi cần cấu hình pin theo kích thước riêng",
      response: "R&D cấu trúc pack pin linh hoạt, tối ưu không gian cho các thiết bị cầm tay hoặc robot tự hành."
    },
    {
      id: 5,
      label: "Tôi cần đối tác sản xuất ổn định tại Việt Nam",
      response: "Nhà máy tại Việt Nam giúp tối ưu logistics, hậu mãi nhanh chóng và kiểm soát chất lượng trực tiếp."
    }
  ];

  return (
    <section className="relative min-h-screen pt-32 pb-20 px-6 technical-grid noise-overlay overflow-hidden">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-pkg-gray border border-pkg-black/5 text-[10px] uppercase tracking-widest font-mono mb-6">
            <span className="w-2 h-2 bg-pkg-red rounded-full animate-pulse" />
            OEM/ODM Diagnostic Room
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-bold leading-[1.1] mb-8">
            Bạn đang cần giải quyết <br />
            <span className="text-pkg-red">bài toán nào?</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-md mb-12 leading-relaxed">
            Chọn bài toán gần nhất với nhu cầu của bạn. PKGBattery sẽ giúp chuyển nhu cầu kỹ thuật thành cấu hình sản phẩm có thể sản xuất.
          </p>
          <div className="flex gap-4">
            <button className="bg-pkg-red text-white py-4 px-8 font-semibold flex items-center gap-3 group hover:scale-105 transition-transform">
              Trao đổi với kỹ thuật <ChevronRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-pkg-red/5 to-transparent rounded-full blur-3xl -z-10" />
          <div className="space-y-3 relative">
            {problems.map((prob, idx) => (
              <motion.div
                key={prob.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 + 0.5 }}
                onMouseEnter={() => setActiveProblem(prob.id)}
                onMouseLeave={() => setActiveProblem(null)}
                className={`group cursor-pointer p-5 border transition-all duration-300 relative overflow-hidden ${
                  activeProblem === prob.id 
                    ? "bg-pkg-black border-pkg-black text-white" 
                    : "bg-white border-gray-200 hover:border-pkg-red"
                }`}
              >
                <div className="flex justify-between items-center relative z-10">
                  <span className={`text-sm font-medium ${activeProblem === prob.id ? "text-white" : "text-gray-800"}`}>
                    {prob.label}
                  </span>
                  <div className={`w-8 h-[1px] ${activeProblem === prob.id ? "bg-pkg-red w-12" : "bg-gray-300"} transition-all`} />
                </div>
                
                <AnimatePresence>
                  {activeProblem === prob.id && (
                    <motion.p
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="mt-4 text-xs text-gray-400 leading-relaxed font-mono"
                    >
                      {prob.response}
                    </motion.p>
                  )}
                </AnimatePresence>

                {/* Decorative Technical Line */}
                {activeProblem === prob.id && (
                  <motion.div 
                    layoutId="active-line"
                    className="absolute left-0 top-0 bottom-0 w-1 bg-pkg-red"
                  />
                )}
              </motion.div>
            ))}
          </div>

          {/* Visual Element: Dynamic Path Rendering */}
          <div className="absolute -right-12 top-0 bottom-0 pointer-events-none hidden xl:block">
            <svg width="200" height="100%" className="opacity-20 translate-y-10">
              <path d="M0,50 L100,50 L150,150 L200,150" stroke="currentColor" fill="none" strokeWidth="0.5" />
              <path d="M0,150 L100,150 L150,150 L200,50" stroke="currentColor" fill="none" strokeWidth="0.5" />
              <circle cx="150" cy="150" r="3" fill="#E31E24" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

// 2. Diagnostic Radar
const DiagnosticMap = () => {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  const nodes = [
    { id: "env", label: "Môi trường vận hành", desc: "Nhiệt độ, độ ẩm, độ rung xóc của thiết bị." },
    { id: "load", label: "Dòng xả & Thời gian", desc: "Phân tích peak current và nhu cầu duy trì năng lượng." },
    { id: "dim", label: "Kích thước & Kết cấu", desc: "Tối ưu hóa hình dạng pack pin theo không gian lắp đặt." },
    { id: "cycle", label: "Chu kỳ sạc/xả", desc: "Lựa chọn công nghệ cell đảm bảo tuổi thọ yêu cầu." },
    { id: "safe", label: "Yêu cầu an toàn", desc: "Các chứng chỉ UN38.3, MSDS hoặc tiêu chuẩn phòng nổ." }
  ];

  return (
    <section className="py-24 px-6 bg-white overflow-hidden" id="solutions">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Bản đồ chẩn đoán nhu cầu</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">Trước khi báo giá, chúng tôi làm rõ bài toán sử dụng thực tế để đảm bảo tính khả thi kỹ thuật.</p>
        </div>

        <div className="relative h-[500px] flex items-center justify-center">
          {/* Central Main Logic */}
          <div className="relative z-20 w-48 h-48 rounded-full border-2 border-pkg-black flex flex-col items-center justify-center bg-white red-glow group">
            <span className="text-[10px] font-mono text-gray-400 uppercase mb-2">Process Core</span>
            <span className="text-sm font-bold text-center px-4 leading-tight">Cấu hình pin phù hợp</span>
            <div className="absolute inset-0 rounded-full border border-pkg-red opacity-0 group-hover:scale-125 group-hover:opacity-10 transition-all duration-700" />
          </div>

          {/* Radar Lines & Nodes */}
          {nodes.map((node, i) => {
            const angle = (i * 360) / nodes.length - 90;
            const radius = 220;
            const x = Math.cos((angle * Math.PI) / 180) * radius;
            const y = Math.sin((angle * Math.PI) / 180) * radius;

            return (
              <div key={node.id} className="absolute transition-all duration-500" style={{ transform: `translate(${x}px, ${y}px)` }}>
                <motion.div 
                  onMouseEnter={() => setHoveredNode(node.id)}
                  onMouseLeave={() => setHoveredNode(null)}
                  whileHover={{ scale: 1.1 }}
                  className={`relative cursor-pointer p-4 border rounded-sm w-44 backdrop-blur-sm transition-colors ${
                    hoveredNode === node.id ? "bg-pkg-black text-white border-pkg-black" : "bg-white border-gray-100"
                  }`}
                >
                  <div className="text-xs font-bold mb-1">{node.label}</div>
                  <AnimatePresence>
                    {hoveredNode === node.id && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="text-[10px] text-gray-400 font-mono leading-relaxed"
                      >
                        {node.desc}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
                
                {/* Connection Line */}
                <svg className="absolute top-1/2 left-1/2 pointer-events-none overflow-visible" style={{ transform: `translate(-50%, -50%)` }}>
                  <line 
                    x1={0} y1={0} 
                    x2={-x} y2={-y} 
                    stroke={hoveredNode === node.id ? "#E31E24" : "#e5e7eb"} 
                    strokeWidth={hoveredNode === node.id ? "1.5" : "0.5"} 
                    className="transition-all duration-300"
                    strokeDasharray={hoveredNode === node.id ? "0" : "4 2"}
                  />
                  {hoveredNode === node.id && <circle cx={0} cy={0} r="4" fill="#E31E24" />}
                </svg>
              </div>
            );
          })}

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[440px] h-[440px] border border-gray-100 rounded-full pointer-events-none -z-10" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] border border-gray-50 rounded-full pointer-events-none -z-10" />
        </div>
      </div>
    </section>
  );
};

// 3. Exploded Layers View
const SimulationRoom = () => {
  const container = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"]
  });

  const layerY1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const layerY2 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const layerY3 = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const layerY4 = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const layers = [
    { title: "Lớp năng lượng", items: ["Cell grade A", "Điện áp danh định", "Dung lượng thực"], color: "bg-gray-100", y: layerY1 },
    { title: "Lớp điều khiển", items: ["BMS thông minh", "Giao tiếp RS485/CAN", "Bảo vệ đa cấp"], color: "bg-pkg-gray", y: layerY2 },
    { title: "Lớp cơ khí", items: ["Vỏ kim loại/nhựa cao cấp", "Thiết kế tản nhiệt", "Kết cấu chống rung"], color: "bg-gray-50", y: layerY3 },
    { title: "Lớp thương mại", items: ["Brand Logo", "Manual kỹ thuật", "Bao bì riêng"], color: "bg-white", y: layerY4 },
  ];

  return (
    <section ref={container} className="py-32 px-6 bg-pkg-black text-white overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-20 items-center">
        <div className="lg:sticky lg:top-40 lg:h-fit max-w-sm">
          <h2 className="text-4xl font-display font-bold mb-6">Mô phỏng giải pháp</h2>
          <p className="text-gray-400 mb-8 leading-relaxed">Mỗi dự án OEM/ODM được chuyển hóa thành một cấu hình riêng biệt, tối ưu cho từng bài toán vận hành thực tế.</p>
          <div className="flex flex-col gap-4">
             {layers.map((l, i) => (
                <div key={i} className="flex items-start gap-4">
                  <span className="text-pkg-red font-mono text-xs mt-1">0{i+1}</span>
                  <div>
                    <h4 className="font-bold text-sm mb-1">{l.title}</h4>
                    <div className="flex flex-wrap gap-x-3 gap-y-1">
                      {l.items.map((item, idx) => (
                        <span key={idx} className="text-[10px] text-gray-500 uppercase tracking-wide">{item}</span>
                      ))}
                    </div>
                  </div>
                </div>
             ))}
          </div>
        </div>

        <div className="relative w-full aspect-square md:aspect-video flex items-center justify-center">
          {/* Simulated Exploded View Graphic */}
          <div className="relative w-72 h-72 md:w-96 md:h-96 preserve-3d">
            {layers.map((layer, index) => (
               <motion.div
                key={index}
                style={{ y: layer.y, zIndex: 10 - index }}
                className={`absolute inset-0 border border-white/10 ${layer.color} shadow-2xl flex flex-col p-6 items-end justify-start`}
               >
                 <div className="text-pkg-black/20 text-6xl font-display font-bold absolute bottom-4 left-6">0{index + 1}</div>
                 <div className="absolute top-4 right-4 text-pkg-red">
                    <div className="w-10 h-[1px] bg-pkg-red mb-1" />
                    <span className="text-[8px] font-mono uppercase tracking-widest text-pkg-black font-bold">{layer.title}</span>
                 </div>
                 
                 {/* Internal grid patterns */}
                 <div className="w-full h-full opacity-5 pointer-events-none overflow-hidden mt-8">
                    <div className="technical-grid w-full h-full scale-50 opacity-20" />
                 </div>
               </motion.div>
            ))}
            
            {/* Core Battery Representation */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-32 bg-pkg-red/80 blur-2xl rounded-full animate-pulse z-0" />
          </div>
        </div>
      </div>
    </section>
  );
};

// 4. Comparison: Full Product vs Components
const ComparisonSplit = () => {
  return (
    <section className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
         <div className="text-center mb-20">
            <h2 className="text-3xl font-display font-bold mb-4">Chúng tôi sản xuất Full Product</h2>
            <p className="text-gray-500">PKGPattery không chỉ ghép linh kiện; chúng tôi làm chủ toàn bộ quy trình từ R&D đến thành phẩm.</p>
         </div>

         <div className="grid md:grid-cols-2 border border-pkg-gray">
            <div className="p-12 border-b md:border-b-0 md:border-r border-pkg-gray group hover:bg-pkg-gray transition-colors">
              <div className="flex items-center gap-4 mb-8">
                <AlertCircle className="text-gray-400" />
                <h3 className="text-xl font-bold font-display uppercase tracking-tight">Cách làm rời rạc</h3>
              </div>
              <ul className="space-y-6">
                {[
                  "Khách hàng tự gom cell, BMS, vỏ từ nhiều nguồn.",
                  "Khó kiểm soát độ tương thích và an toàn kỹ thuật.",
                  "Rủi ro lớn khi muốn mở rộng sản xuất hàng loạt.",
                  "Thiếu tài liệu hệ thống và quy trình kiểm định."
                ].map((text, i) => (
                  <li key={i} className="flex gap-4 items-start text-sm text-gray-500">
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-300 mt-1.5 shrink-0" />
                    {text}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-12 bg-pkg-black text-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-pkg-red skew-x-[-45deg] translate-x-16 -translate-y-16" />
              <div className="flex items-center gap-4 mb-8 relative z-10">
                <CheckCircle2 className="text-pkg-red" />
                <h3 className="text-xl font-bold font-display uppercase tracking-tight">Full Product Manufacturing</h3>
              </div>
              <ul className="space-y-6 relative z-10">
                {[
                  "Một đầu mối kỹ thuật chịu trách nhiệm toàn bộ dự án.",
                  "Cấu hình được thiết kế đồng bộ, tối ưu hiệu năng.",
                  "Kiểm soát chất lượng gắt gao (IQC, OQC, Aging Test).",
                  "Giải pháp dễ dàng lặp lại và mở rộng quy mô sản xuất.",
                  "Hỗ trợ kỹ thuật hậu mãi nhanh chóng từ nhà máy."
                ].map((text, i) => (
                  <li key={i} className="flex gap-4 items-start text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-pkg-red mt-1.5 shrink-0 shadow-sm shadow-pkg-red" />
                    {text}
                  </li>
                ))}
              </ul>
              {/* Highlight pattern overlay */}
              <div className="absolute inset-0 opacity-10 pointer-events-none">
                 <div className="technical-grid w-full h-full" />
              </div>
            </div>
         </div>
      </div>
    </section>
  );
};

// 5. Technical Dossier
const CapabilityDossier = () => {
  const stats = [
    { label: "Năm kinh nghiệm", value: "10+", icon: <Zap className="w-4 h-4" /> },
    { label: "Dự án triển khai", value: "500+", icon: <Layers className="w-4 h-4" /> },
    { label: "Ứng dụng công nghiệp", value: "15+", icon: <Settings className="w-4 h-4" /> },
    { label: "Chứng chỉ quốc tế", value: "UN38.3", icon: <ShieldCheck className="w-4 h-4" /> }
  ];

  return (
    <section className="py-32 px-6 bg-white noise-overlay overflow-hidden" id="dossier">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
            <div className="inline-block px-3 py-1 bg-pkg-black text-white text-[10px] uppercase font-mono mb-6">Expertise Level</div>
            <h2 className="text-4xl font-display font-bold mb-8">Bằng chứng năng lực & Hồ sơ kỹ thuật</h2>
            <div className="space-y-8">
              {stats.map((s, i) => (
                <div key={i} className="flex items-center gap-6 group">
                  <div className="text-3xl font-display font-bold text-pkg-red w-24 border-r border-pkg-gray">
                    {s.value}
                  </div>
                  <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-gray-500 font-medium">
                    {s.icon} {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-2/3 grid md:grid-cols-2 gap-6 relative">
            {/* Background floating visual cards imitating folders */}
            {[
              { title: "R&D tại chỗ", desc: "Đội ngũ kỹ thuật trực tiếp phân tích yêu cầu tại Việt Nam.", tag: "Xác thực" },
              { title: "Thử mẫu nhanh", desc: "Sẵn sàng sản xuất lượng nhỏ (Prototype) để khách hàng nghiệm thu.", tag: "Linh hoạt" },
              { title: "Logistics nội địa", desc: "Giao hàng và hỗ trợ bảo hành nhanh chóng, không chờ đợi nhập khẩu.", tag: "Tối ưu" },
              { title: "Chứng chỉ linh hoạt", desc: "Hỗ trợ hoàn thiện chứng chỉ UN, MSDS theo yêu cầu riêng lẻ.", tag: "Compliance" }
            ].map((card, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-pkg-gray p-8 relative overflow-hidden group cursor-default"
              >
                <div className="absolute -top-1 -right-1 text-[8px] bg-pkg-red text-white px-2 py-1 uppercase font-bold transform rotate-3">
                  {card.tag}
                </div>
                <FileText className="text-pkg-black mb-6 w-8 h-8 opacity-20 group-hover:opacity-100 transition-opacity" />
                <h4 className="text-lg font-bold mb-3">{card.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">{card.desc}</p>
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-pkg-black scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </motion.div>
            ))}
            
            {/* Visual overlay representing a factory footprint */}
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-pkg-gray/30 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

// 6. Risk Control Matrix
const RiskControl = () => {
  const risks = [
    { 
      id: "R-01", 
      problem: "Cấu hình không đúng nhu cầu sử dụng", 
      solution: "Làm rõ bài toán vận hành 7 bước trước khi thiết kế.",
      active: true 
    },
    { 
      id: "R-02", 
      problem: "Pin không ổn định khi tải nặng", 
      solution: "Tính toán dòng xả/nạp dư thừa 20% biên an toàn.",
      active: true 
    },
    { 
      id: "R-03", 
      problem: "Thiếu tài liệu kỹ thuật đồng bộ", 
      solution: "Bàn giao hồ sơ thiết kế, hướng dẫn sử dụng chuyên nghiệp.",
      active: true 
    },
    { 
      id: "R-04", 
      problem: "Khó khăn trong bảo hành nội địa", 
      solution: "Trạm bảo trì trực tiếp tại Việt Nam, phản hồi trong 24h.",
      active: true 
    }
  ];

  return (
    <section className="py-24 px-6 bg-pkg-black text-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <div className="flex items-center gap-2 text-pkg-red text-xs font-mono mb-4">
              <ShieldCheck className="w-4 h-4" /> [System Status: Secure]
            </div>
            <h2 className="text-4xl font-display font-bold">Rủi ro nào được kiểm soát?</h2>
          </div>
          <p className="text-gray-400 max-w-sm text-sm border-l border-pkg-red pl-6">
            Chúng tôi hiểu rằng chất lượng không chỉ nằm ở sản phẩm, mà nằm ở khả năng kiểm soát sự cố.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
           {risks.map((risk) => (
             <div key={risk.id} className="border border-white/10 p-8 flex flex-col md:flex-row gap-8 hover:bg-white/5 transition-colors group">
               <div className="shrink-0 flex flex-col items-center">
                  <div className="text-[10px] font-mono text-gray-500 mb-2">{risk.id}</div>
                  <div className="w-12 h-12 rounded-full border border-pkg-red flex items-center justify-center text-pkg-red bg-pkg-red/5 shadow-[0_0_15px_rgba(227,30,36,0.2)]">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
               </div>
               <div>
                  <h4 className="text-lg font-bold mb-3 text-white/90">{risk.problem}</h4>
                  <div className="flex items-start gap-3 p-3 bg-white/5 rounded-sm border-l-2 border-pkg-red">
                    <div className="text-[10px] font-mono text-pkg-red mt-1 uppercase">Solution</div>
                    <p className="text-sm text-gray-400">{risk.solution}</p>
                  </div>
               </div>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
};

// 7. Partner Scenarios
const PartnerScenarios = () => {
  const container = useRef<HTMLDivElement>(null);
  const { scrollXProgress } = useScroll({ container: container });

  const partners = [
    { 
      type: "Nhà sản xuất thiết bị", 
      insight: "Tích hợp năng lượng linh hoạt vào hệ thống robot AGV.",
      action: "Cần tư vấn cấu hình riêng" 
    },
    { 
      type: "Nhà phân phối pin", 
      insight: "Tạo thương hiệu độc quyền để tránh cạnh tranh về giá.",
      action: "Cần giải pháp Private Label" 
    },
    { 
      type: "Doanh nghiệp FDI", 
      insight: "Nguồn cung pin tại chỗ để đáp ứng yêu cầu tỷ lệ nội địa hóa.",
      action: "Cần đối tác tại Việt Nam" 
    },
    { 
      type: "Đơn vị giải pháp năng lượng", 
      insight: "Cần pack pin công suất lớn cho lưu trữ năng lượng ESS.",
      action: "Phát triển dự án lưu trữ" 
    }
  ];

  return (
    <section className="py-24 bg-pkg-gray overflow-hidden" id="partners">
      <div className="max-w-6xl mx-auto px-6 mb-12">
        <h2 className="text-3xl font-display font-bold uppercase tracking-tight">Dành cho nhiều kiểu đối tác</h2>
      </div>
      
      <div ref={container} className="overflow-x-auto no-scrollbar scroll-smooth flex pb-12 px-6 gap-6 md:gap-8">
        {partners.map((p, i) => (
          <div key={i} className="min-w-[300px] md:min-w-[450px] bg-white p-12 border-t-4 border-pkg-black flex flex-col justify-between shadow-sm hover:shadow-xl transition-all h-[400px]">
             <div>
               <div className="w-12 h-[1px] bg-pkg-red mb-8" />
               <h4 className="text-2xl font-bold font-display mb-6">{p.type}</h4>
               <p className="text-gray-500 italic text-lg leading-relaxed">"{p.insight}"</p>
             </div>
             <button className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest group">
               {p.action} <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform text-pkg-red" />
             </button>
          </div>
        ))}
      </div>
    </section>
  );
};

// 8. CTA: Consultation Bureau
const ContactBureau = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="py-32 px-6 bg-white noise-overlay relative overflow-hidden" id="contact">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-pkg-gray to-transparent" />
      
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20 items-start">
        <div>
          <h2 className="text-5xl font-display font-bold mb-8 italic">Bắt đầu bằng một buổi trao đổi kỹ thuật</h2>
          <p className="text-gray-600 mb-10 leading-relaxed text-lg">
            Với dự án OEM/ODM, chúng tôi không báo giá vội vã. PKGBattery ưu tiên tư vấn đúng bài toán vận hành trước khi đề xuất cấu hình kỹ thuật.
          </p>
          
          <div className="space-y-8">
            {[
              { icon: <MessageSquare className="text-pkg-red" />, title: "Chia sẻ nhu cầu", desc: "Gửi mô tả bài toán bạn đang cần giải quyết." },
              { icon: <Search className="text-pkg-red" />, title: "Làm rõ thông số", desc: "Kỹ thuật phản hồi để thống nhất cấu hình sơ bộ." },
              { icon: <Settings className="text-pkg-red" />, title: "Đề xuất & Thử mẫu", desc: "Thống nhất hướng triển khai và sản xuất mẫu thử." }
            ].map((step, i) => (
              <div key={i} className="flex gap-6">
                <div className="shrink-0 w-12 h-12 bg-pkg-gray flex items-center justify-center rounded-sm font-mono text-pkg-red">
                   {step.icon}
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">{step.title}</h4>
                  <p className="text-sm text-gray-500">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 flex flex-col sm:flex-row gap-8 border-t border-pkg-gray pt-12">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-pkg-gray flex items-center justify-center"><Phone className="w-4 h-4" /></div>
              <div>
                <span className="text-[10px] uppercase font-mono text-gray-400">Hotline Kỹ thuật</span>
                <p className="font-bold">090X XXX XXX</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-pkg-gray flex items-center justify-center"><Mail className="w-4 h-4" /></div>
              <div>
                <span className="text-[10px] uppercase font-mono text-gray-400">Email Dự án</span>
                <p className="font-bold">contact@pkgbattery.vn</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-pkg-black p-12 text-white relative">
          <div className="absolute inset-0 technical-grid opacity-5 pointer-events-none" />
          <h3 className="text-2xl font-display font-bold mb-8 border-b border-white/10 pb-6">Yêu cầu tư vấn kỹ thuật</h3>
          
          <form className="space-y-6 relative z-10" onSubmit={(e) => {e.preventDefault(); setSubmitted(true)}}>
             <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                   <label className="text-[10px] uppercase font-mono text-gray-500">Họ tên</label>
                   <input className="w-full bg-white/5 border border-white/10 p-3 focus:outline-none focus:border-pkg-red transition-colors" placeholder="Nguyễn Văn A" required />
                </div>
                <div className="space-y-2">
                   <label className="text-[10px] uppercase font-mono text-gray-500">Số điện thoại</label>
                   <input className="w-full bg-white/5 border border-white/10 p-3 focus:outline-none focus:border-pkg-red transition-colors" placeholder="090..." required />
                </div>
             </div>
             <div className="space-y-2">
                <label className="text-[10px] uppercase font-mono text-gray-500">Doanh nghiệp</label>
                <input className="w-full bg-white/5 border border-white/10 p-3 focus:outline-none focus:border-pkg-red transition-colors" placeholder="Công ty của bạn" />
             </div>
             <div className="space-y-2">
                <label className="text-[10px] uppercase font-mono text-gray-500">Loại bài toán</label>
                <select className="w-full bg-white/5 border border-white/10 p-3 focus:outline-none focus:border-pkg-red transition-colors appearance-none">
                  <option className="bg-pkg-black">Cần tư vấn cấu hình cho thiết bị</option>
                  <option className="bg-pkg-black">Cần làm sản phẩm thương hiệu riêng</option>
                  <option className="bg-pkg-black">Cần thay thế ắc quy công nghiệp</option>
                  <option className="bg-pkg-black">Khác</option>
                </select>
             </div>
             <div className="space-y-2">
                <label className="text-[10px] uppercase font-mono text-gray-500">Mô tả sơ bộ dự án</label>
                <textarea rows={4} className="w-full bg-white/5 border border-white/10 p-3 focus:outline-none focus:border-pkg-red transition-colors" placeholder="Dung lượng, điện áp, ứng dụng..." />
             </div>
             
             <button type="submit" className="w-full bg-pkg-red text-white py-4 font-bold tracking-widest uppercase hover:bg-pkg-red/90 transition-all active:scale-95 shadow-lg shadow-pkg-red/20">
               {submitted ? "Yêu cầu đã được gửi" : "Gửi yêu cầu tư vấn"}
             </button>
             {submitted && <p className="text-center text-[10px] text-pkg-red mt-4 animate-pulse uppercase tracking-widest font-mono">Đội ngũ kỹ thuật sẽ liên hệ lại trong vòng 24h.</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

// 9. Footer
const Footer = () => {
  return (
    <footer className="bg-pkg-black text-white pt-20 pb-10 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-pkg-red flex items-center justify-center font-bold text-white text-xs">PKG</div>
              <span className="font-display font-bold tracking-tight text-xl">PKGBattery</span>
            </div>
            <p className="text-gray-500 max-w-sm text-sm">
              Sản xuất pin lithium công nghiệp theo yêu cầu tại Việt Nam. Đồng hành cùng doanh nghiệp chuyển đổi năng lượng hiệu quả.
            </p>
          </div>
          <div>
            <h5 className="font-bold text-xs uppercase tracking-widest mb-6 border-l-2 border-pkg-red pl-4">Liên kết</h5>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><a href="#" className="hover:text-pkg-red transition-colors">Trang chủ</a></li>
              <li><a href="#" className="hover:text-pkg-red transition-colors">Sản phẩm</a></li>
              <li><a href="#" className="hover:text-pkg-red transition-colors">Dự án tiêu biểu</a></li>
              <li><a href="#" className="hover:text-pkg-red transition-colors">Chứng chỉ năng lực</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-xs uppercase tracking-widest mb-6 border-l-2 border-pkg-red pl-4">Thông tin</h5>
            <div className="space-y-4 text-sm text-gray-500">
              <div className="flex gap-3">
                <Locate className="w-4 h-4 shrink-0 mt-1" />
                <p>Nhà máy: Xã AB, Huyện CD, Tỉnh EF, Việt Nam</p>
              </div>
              <div className="flex gap-3">
                <Factory className="w-4 h-4 shrink-0 mt-1" />
                <p>Mã số doanh nghiệp: 01XXXXXXX</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-4">
           <p className="text-[10px] text-gray-600 font-mono">© 2024 PKGBATTERY. POWERED BY TECHNICAL EXPERTISE.</p>
           <div className="flex gap-6 text-[10px] font-mono text-gray-600 uppercase tracking-widest">
              <a href="#" className="hover:text-pkg-red">Privacy</a>
              <a href="#" className="hover:text-pkg-red">BMS Diagnostics</a>
              <a href="#" className="hover:text-pkg-red">Industrial Standards</a>
           </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="noise-overlay font-sans">
      <Header />
      <main>
        <HeroDiagnostic />
        <DiagnosticMap />
        <SimulationRoom />
        <ComparisonSplit />
        <CapabilityDossier />
        <RiskControl />
        <PartnerScenarios />
        <ContactBureau />
      </main>
      <Footer />
    </div>
  );
}
