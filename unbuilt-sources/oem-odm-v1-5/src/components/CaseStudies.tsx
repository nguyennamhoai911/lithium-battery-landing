import { motion } from 'motion/react';
import { ExternalLink, Quote } from 'lucide-react';

const cases = [
  {
    title: "Xe nâng điện Heli",
    category: "Logistics",
    challenge: "Pin nguyên bản chì-axit sạc quá chậm, ảnh hưởng tiến độ kho 3 ca.",
    solution: "Thay thế bằng hệ pin LiFePO4 80V 400Ah tích hợp sạc nhanh 2h.",
    result: "Tăng 40% hiệu suất vận hành, không cần bảo trì định kỳ.",
    image: "https://images.unsplash.com/photo-1518005020253-268e36e8b4e6?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Robot AGV tự hành",
    category: "Smart Factory",
    challenge: "Cần pin cực mỏng nhưng dung lượng cao để tối ưu trọng tâm robot.",
    solution: "Thiết kế layout cell nằm ngang, vỏ nhôm CNC giải nhiệt tốt.",
    result: "Chạy liên tục 12h, tích hợp giao thức CANBUS điều khiển thông minh.",
    image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Xe điện sân Golf",
    category: "Mobility",
    challenge: "Địa hình dốc yêu cầu dòng xả tức thời cực cao.",
    solution: "Cụm pin 48V High-Rate với hệ thống BMS quản lý nhiệt chủ động.",
    result: "Khả năng leo dốc mượt mà, tuổi thọ pin tăng gấp 3 lần.",
    image: "https://images.unsplash.com/photo-1531641011685-61bd117eb898?q=80&w=2070&auto=format&fit=crop"
  }
];

export default function CaseStudies() {
  return (
    <section className="py-32 bg-white" id="case-studies">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-6 tracking-tight"
            >
              Case Study <span className="text-brand-red"> thực tế</span>
            </motion.h2>
            <p className="text-gray-500 text-lg">
              Minh chứng thuyết phục nhất thông qua các dự án đã triển khai thành công cho khách hàng B2B.
            </p>
          </div>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 font-bold text-sm tracking-widest uppercase border-b-2 border-brand-red pb-2 h-fit"
          >
            Tất cả dự án <ExternalLink className="w-4 h-4" />
          </motion.button>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {cases.map((project, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col h-full group"
            >
              <div className="aspect-[4/3] overflow-hidden rounded-2xl mb-8 relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider text-charcoal">
                  {project.category}
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-charcoal mb-4 group-hover:text-brand-red transition-colors">{project.title}</h3>
              
              <div className="flex-1 space-y-6">
                 <div>
                   <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Thách thức</div>
                   <p className="text-sm text-gray-600 italic">"{project.challenge}"</p>
                 </div>
                 <div className="p-4 bg-gray-50 rounded-xl border-l-4 border-brand-red">
                   <div className="text-[10px] font-bold uppercase tracking-widest text-brand-red mb-2">Giải pháp của PKG</div>
                   <p className="text-sm font-medium text-charcoal">{project.solution}</p>
                 </div>
                 <div className="flex items-center gap-3">
                   <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center text-green-600">
                      <BarChart3 className="w-4 h-4" />
                   </div>
                   <p className="text-sm font-bold text-green-700">{project.result}</p>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BarChart3(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 3v18h18" />
      <path d="M18 17V9" />
      <path d="M13 17V5" />
      <path d="M8 17v-3" />
    </svg>
  );
}
