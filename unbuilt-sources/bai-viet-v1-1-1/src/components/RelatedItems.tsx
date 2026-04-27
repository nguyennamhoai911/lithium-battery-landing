import { motion } from 'motion/react';
import { Product, RelatedArticle } from '../types';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

interface RelatedSectionProps {
  products: Product[];
  articles: RelatedArticle[];
}

export const RelatedSection = ({ products, articles }: RelatedSectionProps) => {
  return (
    <section className="py-32 border-t border-zinc-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Related Products */}
        <div className="mb-32">
          <div className="flex items-end justify-between mb-16">
            <div>
              <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-6 flex items-center gap-4">
                <span className="w-10 h-[1px] bg-brand-red" />
                Giải pháp liên quan
              </h2>
              <h3 className="text-4xl font-bold tracking-tight">Thiết kế cho hiệu năng cực đại</h3>
            </div>
            <a href="#" className="hidden sm:flex items-center gap-2 text-sm font-bold group">
              Xem tất cả sản phẩm
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {products.map((p) => (
              <a key={p.id} href={p.link} className="group overflow-hidden">
                <div className="aspect-square bg-zinc-100 overflow-hidden mb-6 relative">
                  <img 
                    src={p.imageUrl} 
                    alt={p.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight size={20} className="text-white" />
                  </div>
                </div>
                <h4 className="text-lg font-bold mb-2 group-hover:text-brand-red transition-colors">{p.name}</h4>
                <p className="text-zinc-500 text-sm leading-relaxed">{p.useCase}</p>
              </a>
            ))}
          </div>
        </div>

        {/* Related Articles */}
        <div>
          <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-16 flex items-center gap-4">
            <span className="w-10 h-[1px] bg-brand-red" />
            Tiếp tục tìm hiểu
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {articles.map((article) => (
              <a key={article.id} href="#" className="flex gap-6 group">
                <div className="w-24 h-24 flex-shrink-0 bg-zinc-100 overflow-hidden">
                  <img 
                    src={article.imageUrl} 
                    alt={article.title} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-brand-red mb-2 block">{article.category}</span>
                  <h4 className="text-sm font-bold leading-snug group-hover:underline decoration-brand-red transition-all">{article.title}</h4>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
