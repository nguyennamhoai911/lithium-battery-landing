import { motion } from 'motion/react';
import { Award, ShieldCheck, Factory, Timer, Zap, ThumbsUp } from 'lucide-react';

export default function TrustStrip() {
  const items = [
    { icon: Factory, label: "10+ Years", sub: "Battery Experience" },
    { icon: ShieldCheck, label: "Certified", sub: "ISO 9001, CE, MSDS" },
    { icon: Award, label: "8 Dealers", sub: "Across Vietnam" },
    { icon: Timer, label: "24h Response", sub: "Business Inquiry" },
    { icon: Zap, label: "Custom Solutions", sub: "OEM/ODM Capability" },
    { icon: ThumbsUp, label: "2 Year Warranty", sub: "Genuine Product" }
  ];

  return (
    <div className="bg-brand-dark overflow-hidden py-12 relative">
      <div className="absolute inset-0 opacity-10">
         <div className="technical-grid h-full" />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="mb-4 inline-block opacity-40 group-hover:opacity-100 transition-all group-hover:scale-110">
                  <Icon className="w-8 h-8 text-brand-red" strokeWidth={1.5} />
                </div>
                <p className="text-white font-bold text-sm mb-1">{item.label}</p>
                <p className="text-white/40 text-[10px] uppercase font-medium tracking-widest">{item.sub}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
