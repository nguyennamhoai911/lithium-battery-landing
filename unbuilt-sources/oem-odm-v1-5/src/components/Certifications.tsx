import { motion } from 'motion/react';

const certs = [
  { name: 'UN38.3', label: 'Safety for Transport' },
  { name: 'CE', label: 'Euro Compliance' },
  { name: 'ISO 9001', label: 'Quality Management' },
  { name: 'RoHS', label: 'Environmental' },
  { name: 'MSDS', label: 'Material Safety' },
];

export default function Certifications() {
  return (
    <section className="py-20 bg-white border-y border-gray-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-24">
          {certs.map((cert, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center gap-2 group cursor-help"
            >
              <div className="text-3xl md:text-4xl font-black text-gray-200 group-hover:text-brand-red transition-colors duration-500 tracking-tighter">
                {cert.name}
              </div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                {cert.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
