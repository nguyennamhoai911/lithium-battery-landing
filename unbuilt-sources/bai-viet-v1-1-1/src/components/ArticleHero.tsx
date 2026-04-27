import { motion } from 'motion/react';
import { Article } from '../types';
import { Clock, User, Calendar } from 'lucide-react';

interface ArticleHeroProps {
  article: Article;
}

export const ArticleHero = ({ article }: ArticleHeroProps) => {
  return (
    <section className="pt-32 pb-16 lg:pt-48 lg:pb-24 border-b border-zinc-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-medium text-zinc-400 mb-8 uppercase tracking-widest">
          <span>Trang chủ</span>
          <span className="w-1 h-1 bg-zinc-300 rounded-full" />
          <span>Bài viết</span>
          <span className="w-1 h-1 bg-zinc-300 rounded-full" />
          <span className="text-zinc-900">{article.category}</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          {/* Left: Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <span className="inline-block px-3 py-1 bg-brand-red text-white text-[10px] font-bold uppercase tracking-widest mb-6">
              {article.category}
            </span>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight leading-[1.1] mb-8">
              {article.title}
            </h1>
            <p className="text-lg lg:text-xl text-zinc-500 leading-relaxed max-w-xl mb-12">
              {article.subtitle}
            </p>

            <div className="flex flex-wrap items-center gap-y-4 gap-x-10 text-xs text-zinc-400 uppercase tracking-widest font-semibold">
              <div className="flex items-center gap-2">
                <User size={14} className="text-zinc-300" />
                <span className="text-zinc-600">{article.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={14} className="text-zinc-300" />
                <span>{article.publishDate}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-brand-red" />
                <span className="text-zinc-900">{article.readingTime}</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Image */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className={`relative aspect-[${article.heroImage.ratio.replace(':', '/')}] bg-zinc-100 overflow-hidden group`}
          >
            <img 
              src={article.heroImage.url} 
              alt={article.title}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-brand-black/5 mix-blend-multiply transition-opacity group-hover:opacity-0" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
