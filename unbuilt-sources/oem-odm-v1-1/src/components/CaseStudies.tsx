import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    category: "Logistics Automation",
    title: "AGV Company",
    desc: "Hệ thống pin 24V 60Ah với giao thức CANBUS 2.0B, sạc nhanh 1C.",
    image: "https://images.unsplash.com/photo-1563911302283-d2bc129e7370?auto=format&fit=crop&q=80&w=1000",
  },
  {
    category: "Internal Transport",
    title: "Forklift Fleet Manager",
    desc: "Chuyển đổi 50 xe nâng Lead-acid sang Lithium 48V 400Ah, tăng runtime 40%.",
    image: "https://images.unsplash.com/photo-1542435503-956c469947f6?auto=format&fit=crop&q=80&w=1000",
  },
  {
    category: "Recreation & Resort",
    title: "Eco Resort Golf Cart",
    desc: "Pin 72V module mỏng, chống muối biển, tích hợp Mobile App quản lý fleet.",
    image: "https://images.unsplash.com/photo-1549466654-424a8735e573?auto=format&fit=crop&q=80&w=1000",
  },
];

export default function CaseStudies() {
  return (
    <section id="dự án" className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <h2 className="text-sm font-bold text-brand uppercase tracking-[0.2em] mb-4">Case Studies</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-industrial-black tracking-tighter">
              Những giải pháp <br /> đã được <span className="text-brand">thực chứng</span>
            </h3>
          </div>
          <motion.button 
            whileHover={{ x: 5 }}
            className="text-industrial-black font-bold flex items-center gap-2 border-b-2 border-brand pb-2 group transition-all"
          >
            Xem tất cả dự án
            <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
          </motion.button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[3/4] rounded-sm overflow-hidden mb-6">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-industrial-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="space-y-3">
                <span className="text-[10px] font-bold text-brand uppercase tracking-widest">{project.category}</span>
                <h4 className="text-2xl font-bold text-industrial-black uppercase tracking-tight">{project.title}</h4>
                <p className="text-sm text-industrial-gray leading-relaxed pr-8">{project.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
