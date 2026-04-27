import { motion } from 'motion/react';
import { Article } from '../types';

interface KeyTakeawaysProps {
  takeaways: Article['takeaways'];
}

export const KeyTakeaways = ({ takeaways }: KeyTakeawaysProps) => {
  return (
    <section className="py-20 bg-zinc-50 border-b border-zinc-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          <div className="lg:w-1/4">
            <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-4 flex items-center gap-4">
              <span className="w-10 h-[1px] bg-brand-red" />
              Quick Insights
            </h2>
            <p className="text-lg font-medium text-zinc-900 leading-snug">
              Các giá trị cốt lõi bài viết này phân tích cho doanh nghiệp của bạn.
            </p>
          </div>

          <div className="lg:w-3/4 grid md:grid-cols-3 gap-12 relative">
            {takeaways.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative z-10"
              >
                <span className="absolute -top-12 -left-2 text-8xl font-black text-zinc-200 select-none -z-10 leading-none">
                  0{index + 1}
                </span>
                <h3 className="text-xl font-bold mb-4 pt-4 border-t border-zinc-200">
                  {item.title}
                </h3>
                <p className="text-zinc-600 leading-relaxed text-sm">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
