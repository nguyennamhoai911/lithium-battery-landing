/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { 
  ChevronRight, 
  ArrowRight, 
  CheckCircle2, 
  AlertCircle, 
  Zap, 
  Phone, 
  Mail, 
  MapPin, 
  Search,
  Settings,
  Cpu,
  Layers,
  ShieldCheck,
  Activity,
  Factory,
  Battery
} from 'lucide-react';
import { PROBLEMS, SOLUTION_LAYERS, RISK_CONTROLS, PARTNER_SCENARIOS } from './constants';

const Header = () => (
  <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 px-6 py-4 flex justify-between items-center">
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 bg-red-600 flex items-center justify-center rounded">
        <span className="text-white font-bold text-lg">P</span>
      </div>
      <span className="font-bold tracking-tight text-xl">PKGBattery</span>
    </div>
    <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
      <a href="#diagnostic" className="hover:text-red-600 transition-colors">Bài toán</a>
      <a href="#lab" className="hover:text-red-600 transition-colors">Giải pháp</a>
      <a href="#dossier" className="hover:text-red-600 transition-colors">Năng lực</a>
      <a href="#contact" className="px-4 py-2 bg-black text-white rounded hover:bg-red-600 transition-colors">Liên hệ kỹ thuật</a>
    </div>
  </nav>
);

const HeroDiagnostic = () => {
  const [activeProblem, setActiveProblem] = useState<string | null>(null);

  return (
    <section id="diagnostic" className="pt-32 pb-20 px-6 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold tracking-tight mb-6"
          >
            Bạn đang cần phát triển <br />
            <span className="text-red-600">một giải pháp pin lithium riêng?</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 text-lg max-w-2xl"
          >
            Chọn bài toán gần nhất với nhu cầu của bạn. PKGBattery sẽ giúp chuyển nhu cầu kỹ thuật thành cấu hình sản phẩm có thể sản xuất.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            {PROBLEMS.map((problem) => (
              <motion.button
                key={problem.id}
                onMouseEnter={() => setActiveProblem(problem.id)}
                onMouseLeave={() => setActiveProblem(null)}
                className={`w-full text-left p-6 rounded-xl border transition-all relative overflow-hidden group ${
                  activeProblem === problem.id 
                    ? 'border-red-600 bg-red-50/30' 
                    : 'border-gray-100 hover:border-gray-300'
                }`}
              >
                <div className="flex items-start gap-4 relative z-10">
                  <div className={`p-3 rounded-lg ${activeProblem === problem.id ? 'bg-red-600 text-white' : 'bg-gray-100 text-gray-400 group-hover:bg-gray-200'}`}>
                    <problem.icon size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{problem.title}</h3>
                    <p className="text-sm text-gray-500 line-clamp-2">{problem.description}</p>
                  </div>
                </div>
                {activeProblem === problem.id && (
                  <motion.div 
                    layoutId="outline"
                    className="absolute inset-0 border-2 border-red-600 rounded-xl"
                  />
                )}
              </motion.button>
            ))}
            <div className="pt-6">
              <button className="flex items-center gap-2 text-red-600 font-semibold hover:gap-4 transition-all">
                Trao đổi trực tiếp với kỹ thuật <ArrowRight size={18} />
              </button>
            </div>
          </div>

          <div className="relative aspect-square">
            <div className="absolute inset-0 border border-dashed border-gray-200 rounded-full animate-spin-slow" />
            <div className="absolute inset-4 border border-dashed border-red-200 rounded-full" />
            
            <div className="absolute inset-0 flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProblem || 'default'}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="text-center p-8 bg-white shadow-2xl rounded-2xl border border-gray-100 max-w-[300px] relative z-20"
                >
                  {activeProblem ? (
                    <>
                      <div className="text-red-600 font-mono text-xs mb-4">DIAGNOSING_REQUEST</div>
                      <p className="text-gray-600 text-sm italic">
                        "PKGBattery tiếp cận dự án này bằng việc đánh giá tải đỉnh (Peak Load) và chu kỳ sạc-xả dư địa để tối ưu dung lượng cell..."
                      </p>
                    </>
                  ) : (
                    <>
                      <Search className="mx-auto text-red-600 mb-4" size={32} />
                      <p className="font-medium">Vui lòng chọn bài toán của bạn để xem cách chúng tôi tiếp cận.</p>
                    </>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Technical Lines Decoration */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
              <line x1="0" y1="50%" x2="100%" y2="50%" stroke="gray" strokeWidth="0.5" strokeDasharray="4 4" />
              <line x1="50%" y1="0" x2="50%" y2="100%" stroke="gray" strokeWidth="0.5" strokeDasharray="4 4" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

const DiagnosisMap = () => {
  const axes = [
    'Môi trường vận hành',
    'Dòng xả / Công suất',
    'Kết cấu / Kích thướt',
    'Chu kỳ sạc xả',
    'Bảo mật dữ liệu BMS',
    'Kế hoạch sản xuất'
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="flex-1">
            <div className="inline-block px-3 py-1 bg-red-100 text-red-600 text-xs font-bold rounded mb-4">
              BẢN ĐỒ CHẨN ĐOÁN NHU CẦU
            </div>
            <h2 className="text-3xl font-bold mb-6">Trước khi báo giá, chúng tôi làm rõ bài toán sử dụng thực tế.</h2>
            <p className="text-gray-500 mb-8">
              Thay vì báo giá dựa trên danh sách linh kiện, PKGBattery phân tích các trục kỹ thuật cốt lõi để đảm bảo pin vận hành bền bỉ trong thiết bị của bạn.
            </p>
            <div className="space-y-4">
              {axes.map((axis, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-red-600 rounded-full" />
                  <span className="text-sm font-medium text-gray-700">{axis}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 relative flex justify-center">
            <div className="w-[400px] h-[400px] border border-gray-200 rounded-full relative flex items-center justify-center">
              {[...Array(3)].map((_, i) => (
                <div 
                  key={i} 
                  className="absolute border border-gray-200 rounded-full" 
                  style={{ width: `${(i + 1) * 33}%`, height: `${(i + 1) * 33}%` }} 
                />
              ))}
              
              <div className="absolute inset-0">
                {axes.map((axis, i) => {
                  const angle = (i * 360) / axes.length;
                  return (
                    <div 
                      key={i}
                      className="absolute left-1/2 top-1/2 w-[50%] h-[1px] bg-gray-200 origin-left"
                      style={{ transform: `rotate(${angle}deg)` }}
                    >
                      <div 
                        className="absolute right-0 w-2 h-2 bg-red-600 rounded-full -mt-1 shadow-[0_0_10px_rgba(220,38,38,0.5)]" 
                        style={{ transform: `rotate(-${angle}deg)` }}
                      />
                      <span 
                        className="absolute left-full ml-4 whitespace-nowrap text-[10px] font-mono text-gray-400 uppercase"
                        style={{ transform: `translateY(-50%) rotate(-${angle}deg)` }}
                      >
                        {axis}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="relative z-10 w-24 h-24 bg-white border border-red-600 rounded-full flex flex-col items-center justify-center shadow-xl">
                <span className="text-[10px] font-bold text-red-600">CONFIG</span>
                <Battery size={24} className="text-gray-900" />
                <span className="text-[8px] text-gray-400 mt-1 uppercase">Ready</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SolutionLab = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <section id="lab" ref={containerRef} className="py-32 bg-white relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 uppercase tracking-tighter">Phòng Mô Phỏng Giải Pháp</h2>
          <p className="text-gray-500 max-w-xl mx-auto">Từ yêu cầu vận hành đến cấu hình sản phẩm cụ thể qua từng lớp kỹ thuật.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-24">
            {SOLUTION_LAYERS.map((layer, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative pl-12 border-l-2 border-red-600"
              >
                <div className="absolute left-[-11px] top-0 w-5 h-5 bg-white border-4 border-red-600 rounded-full" />
                <h3 className="text-xl font-bold mb-2 uppercase tracking-wide">{layer.title}</h3>
                <p className="text-gray-500 mb-4">{layer.description}</p>
                <ul className="space-y-2">
                  {layer.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                      <div className="w-1 h-1 bg-red-600" /> {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <div className="sticky top-40 hidden lg:block">
            <div className="relative w-full aspect-[3/4] bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 flex items-center justify-center pt-20">
              <div className="absolute top-8 left-8 text-[10px] font-mono text-gray-400">PROJECT_SIM_024</div>
              
              <div className="space-y-4">
                {SOLUTION_LAYERS.map((_, i) => {
                  const scale = 1 - i * 0.1;
                  const y = i * -60;
                  return (
                    <motion.div
                      key={i}
                      style={{ 
                        scale,
                        y: useTransform(scrollYProgress, [0, 1], [y, y - 100]),
                        opacity: useTransform(scrollYProgress, [0, 0.2 + i * 0.15], [0, 1])
                      }}
                      className="w-64 h-32 bg-white rounded-lg shadow-lg border border-red-100 flex items-center justify-center relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.05)_0%,transparent_70%)]" />
                      <div className="font-bold text-red-600 opacity-20 text-4xl">{i+1}</div>
                    </motion.div>
                  );
                })}
              </div>
              
              <div className="absolute bottom-8 right-8 flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-[10px] font-mono text-gray-400">SYSTEMS_ALIGNED</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ManufacturingComparison = () => {
  return (
    <section className="py-24 bg-black text-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-2xl font-bold mb-4 px-4 py-2 border border-white/20 inline-block uppercase tracking-widest">
            Chúng tôi sản xuất Full Product, không chỉ ghép linh kiện
          </h2>
        </div>

        <div className="grid md:grid-cols-2 divide-x divide-white/10">
          <div className="p-12 space-y-8 opacity-50 grayscale hover:opacity-100 transition-all group">
            <div className="text-red-500 font-bold text-xs uppercase tracking-widest">Cách làm rời rạc</div>
            <h3 className="text-3xl font-bold">Khách hàng tự gom linh kiện & lắp ráp đơn giản</h3>
            <ul className="space-y-6">
              {[
                'Khó kiểm soát độ tương thích giữa Cell và BMS.',
                'Rủi ro chập cháy khi quy mô sản xuất tăng lên.',
                'Thiếu tài liệu kỹ thuật và tiêu chuẩn kiểm tra.',
                'Khó bảo hành vì linh kiện từ nhiều nguồn khác nhau.'
              ].map((text, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <AlertCircle className="text-red-500 shrink-0" size={20} />
                  <span className="text-gray-400 text-sm">{text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-12 space-y-8 border-l-2 border-red-600 bg-gradient-to-br from-red-950/20 to-transparent">
            <div className="text-red-500 font-bold text-xs uppercase tracking-widest">Cách làm PKGBattery</div>
            <h3 className="text-3xl font-bold">Giải pháp sản xuất tích hợp một đầu mối</h3>
            <ul className="space-y-6">
              {[
                'Cấu hình đồng bộ ngay từ khi thiết kế.',
                'Kiểm soát nghiêm ngặt đầu vào - đầu ra tại xưởng.',
                'Quy trình sản xuất công nghiệp, dễ lặp lại cho lô lớn.',
                'Hỗ trợ kỹ thuật trực tiếp, đầy đủ hồ sơ năng lực.'
              ].map((text, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <CheckCircle2 className="text-green-500 shrink-0" size={20} />
                  <span className="text-gray-300 text-sm">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

const CapabilityDossier = () => {
  const stats = [
    { label: 'Năm kinh nghiệm', val: '10+' },
    { label: 'Dự án triển khai', val: '500+' },
    { label: 'Bước kiểm tra chất lượng', val: '12' },
    { label: 'Đối tác doanh nghiệp', val: '200+' }
  ];

  return (
    <section id="dossier" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16">
          <div className="md:w-1/3">
            <h2 className="text-4xl font-bold mb-6 italic">Bằng chứng năng lực</h2>
            <p className="text-gray-500 mb-8 font-serif leading-relaxed">
              Trình bày dưới dạng hồ sơ kỹ thuật (Dossier), không phải quảng cáo. Mọi số liệu đều có căn cứ từ năng lực thực tế tại nhà máy.
            </p>
            <div className="space-y-8">
              {stats.map((stat, i) => (
                <div key={i}>
                  <div className="text-3xl font-bold text-red-600 font-mono mb-1">{stat.val}</div>
                  <div className="text-sm font-medium uppercase tracking-wider text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="md:w-2/3 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="aspect-[4/5] bg-gray-100 rounded-lg overflow-hidden relative group">
                <img 
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800" 
                  alt="Factory" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute top-2 left-2 bg-red-600 text-white text-[8px] px-2 py-1 font-bold uppercase">FACTORY_SEC_A</div>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg border-l-4 border-black">
                <h4 className="font-bold mb-2 uppercase text-sm">Nhà máy riêng tại Việt Nam</h4>
                <p className="text-xs text-gray-500">Chủ động hoàn toàn về thời gian sản xuất và linh kiện dự phòng.</p>
              </div>
            </div>
            <div className="space-y-4 pt-12">
              <div className="p-6 bg-red-600 text-white rounded-lg">
                <h4 className="font-bold mb-2 uppercase text-sm">R&D & Thiết kế</h4>
                <p className="text-xs text-white/80">Đội ngũ kỹ sư làm việc trực tiếp trên bài toán của khách hàng.</p>
              </div>
              <div className="aspect-[4/5] bg-gray-100 rounded-lg overflow-hidden relative group">
                <img 
                  src="https://images.unsplash.com/photo-1551033406-611cf9a28f67?auto=format&fit=crop&q=80&w=800" 
                  alt="R&D" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute top-2 left-2 bg-black text-white text-[8px] px-2 py-1 font-bold uppercase">LAB_TECH_01</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const RiskControl = () => {
  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-16 text-center">Rủi ro nào được kiểm soát?</h2>
        <div className="relative">
          {/* Technical UI elements */}
          <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
            <div className="grid grid-cols-12 h-full border-gray-900 border">
              {[...Array(11)].map((_, i) => <div key={i} className="border-r border-gray-900" />)}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
            {RISK_CONTROLS.map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm relative group hover:border-red-600 transition-all">
                <div className="absolute top-2 right-2 flex items-center gap-1">
                  <div className="w-1.5 h-1.5 bg-red-600 rounded-full animate-pulse" />
                  <span className="text-[10px] font-mono text-red-600">SECURE</span>
                </div>
                <div className="mb-4 text-red-600 font-bold text-xs uppercase tracking-tighter">Bài toán lo ngại</div>
                <p className="text-sm font-bold mb-6 text-gray-900">{item.risk}</p>
                <div className="pt-4 border-t border-gray-100">
                  <div className="mb-2 text-gray-400 font-bold text-[10px] uppercase tracking-tighter">Giải pháp PKG</div>
                  <p className="text-xs text-gray-500 leading-relaxed">{item.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactFaq = () => {
  return (
    <section id="contact" className="py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-4xl font-bold mb-6 tracking-tighter uppercase">Bắt đầu bằng một buổi trao đổi kỹ thuật</h2>
            <p className="text-gray-500 mb-10 leading-relaxed">
              Với dự án OEM/ODM, báo giá chỉ chính xác khi hiểu rõ ứng dụng, thông số, môi trường vận hành và kế hoạch sản xuất. PKGBattery ưu tiên tư vấn đúng trước khi đề xuất cấu hình.
            </p>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-red-50 text-red-600 flex items-center justify-center rounded-xl shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <div className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-1">Cần gấp?</div>
                  <a href="tel:+84123456789" className="text-xl font-bold hover:text-red-600 transition-colors">09xx.xxx.xxx</a>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-red-50 text-red-600 flex items-center justify-center rounded-xl shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <div className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-1">Gửi tài liệu kỹ thuật?</div>
                  <a href="mailto:contact@pkgbattery.com" className="text-xl font-bold hover:text-red-600 transition-colors">contact@pkgbattery.com</a>
                </div>
              </div>
            </div>

            <div className="mt-16 p-8 bg-gray-50 rounded-2xl border border-gray-100">
              <h4 className="font-bold mb-4 uppercase text-xs tracking-widest text-red-600">Bước tiếp theo:</h4>
              <ul className="space-y-4">
                {[
                  'Bạn chia sẻ nhu cầu hoặc bài toán.',
                  'Kỹ thuật trao đổi để làm rõ thông số.',
                  'PKGBattery đề xuất hướng cấu hình.',
                  'Thống nhất bước thử mẫu hoặc báo giá.'
                ].map((step, i) => (
                  <li key={i} className="flex gap-3 text-sm text-gray-600">
                    <span className="font-mono text-red-600">0{i+1}.</span>
                    {step}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-black text-white p-10 rounded-3xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-600 skew-x-12 translate-x-16 -translate-y-16" />
            <h3 className="text-2xl font-bold mb-8 relative z-10">Gửi mô tả dự án</h3>
            <form className="space-y-6 relative z-10">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Họ và tên</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg p-3 outline-none focus:border-red-600 transition-all text-sm" placeholder="Nguyễn Văn A" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Số điện thoại</label>
                  <input type="tel" className="w-full bg-white/5 border border-white/10 rounded-lg p-3 outline-none focus:border-red-600 transition-all text-sm" placeholder="09xxxxxxx" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Tên doanh nghiệp</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg p-3 outline-none focus:border-red-600 transition-all text-sm" placeholder="Công ty TNHH PKG" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Yêu cầu ưu tiên</label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    'Tư vấn cấu hình',
                    'Làm sản phẩm riêng',
                    'Thay thế ắc quy',
                    'Private Label'
                  ].map((label, i) => (
                    <label key={i} className="flex items-center gap-2 p-3 bg-white/5 border border-white/10 rounded-lg cursor-pointer hover:bg-white/10 transition-all">
                      <input type="checkbox" className="hidden" />
                      <span className="text-xs text-gray-400">{label}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Mô tả bài toán</label>
                <textarea className="w-full bg-white/5 border border-white/10 rounded-lg p-3 outline-none focus:border-red-600 transition-all text-sm h-32 resize-none" placeholder="Hãy mô tả ngắn gọn thiết bị hoặc mong muốn của bạn..." />
              </div>
              <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-xl transition-all shadow-[0_0_20px_rgba(220,38,38,0.3)]">
                GỬI YÊU CẦU TƯ VẤN
              </button>
              <p className="text-[10px] text-gray-500 text-center">
                Chúng tôi bảo mật 100% thông tin dự án của bạn.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-gray-950 text-white pt-20 pb-10">
    <div className="max-w-6xl mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between gap-12 border-b border-white/5 pb-20 mb-10">
        <div className="max-w-xs">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-red-600 flex items-center justify-center rounded">
              <span className="text-white font-bold text-lg">P</span>
            </div>
            <span className="font-bold tracking-tight text-xl uppercase">PKGBattery</span>
          </div>
          <p className="text-sm text-gray-500 leading-relaxed italic">
            "Từ bài toán vận hành đến sản phẩm pin hoàn chỉnh. Chúng tôi không chỉ bán pin, chúng tôi xây dựng nền tảng năng lượng."
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
          <div>
            <h5 className="font-bold text-xs uppercase tracking-widest mb-6">Dịch vụ</h5>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#" className="hover:text-red-500 transition-colors">Thiết kế OEM/ODM</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Sản xuất Private Label</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">R&D Giải pháp Pin</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-xs uppercase tracking-widest mb-6">Liên kết</h5>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#" className="hover:text-red-500 transition-colors">Hồ sơ năng lực</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Chứng chỉ</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Văn hóa doanh nghiệp</a></li>
            </ul>
          </div>
          <div className="col-span-2 md:col-span-1">
            <h5 className="font-bold text-xs uppercase tracking-widest mb-6">Trụ sở</h5>
            <div className="space-y-4 text-sm text-gray-500">
              <div className="flex gap-2">
                <MapPin size={16} className="shrink-0 text-red-600" />
                <span>Nhà máy: KCN ABC, Tỉnh XYZ, Việt Nam</span>
              </div>
              <div className="flex gap-2">
                <Phone size={16} className="shrink-0 text-red-600" />
                <span>Hotline: 09xx.xxx.xxx</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-gray-600 uppercase tracking-widest">
        <div>© 2024 PKGBattery Co., Ltd. All rights reserved.</div>
        <div className="flex gap-8">
          <a href="#" className="hover:text-red-500 transition-colors">Chính sách bảo mật</a>
          <a href="#" className="hover:text-red-500 transition-colors">Điều khoản dịch vụ</a>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-red-600 selection:text-white scroll-smooth">
      <Header />
      <main>
        <HeroDiagnostic />
        <DiagnosisMap />
        <SolutionLab />
        <ManufacturingComparison />
        <CapabilityDossier />
        <RiskControl />
        <ContactFaq />
      </main>
      <Footer />
    </div>
  );
}
