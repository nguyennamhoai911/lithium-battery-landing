import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowRight } from 'lucide-react';

interface ProductCardProps {
  image: string;
  name: string;
  description?: string;
  specs: string[];
  featured?: boolean;
  className?: string;
}

export function ProductCard({ image, name, description, specs, featured = false, className = '' }: ProductCardProps) {
  return (
    <div 
      className={`group relative bg-white border border-neutral-200 overflow-hidden transition-all duration-300 hover:border-neutral-400 hover:shadow-lg ${className}`}
    >
      <div className={`relative overflow-hidden bg-neutral-50 ${featured ? 'aspect-[4/3]' : 'aspect-square'}`}>
        <ImageWithFallback
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className={`${featured ? 'p-8' : 'p-6'}`}>
        <h3 className={`font-medium text-neutral-900 mb-2 ${featured ? 'text-xl' : 'text-base'}`}>
          {name}
        </h3>
        
        {description && (
          <p className="text-sm text-neutral-600 mb-4 line-clamp-2">
            {description}
          </p>
        )}
        
        <div className="flex flex-wrap gap-2 mb-4">
          {specs.map((spec, index) => (
            <span 
              key={index}
              className="inline-flex items-center px-3 py-1 text-xs font-medium bg-neutral-100 text-neutral-700"
            >
              {spec}
            </span>
          ))}
        </div>
        
        <button className="inline-flex items-center gap-2 text-sm font-medium text-neutral-900 group-hover:text-[#DC2626] transition-colors">
          <span>Chi tiết</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
}
