import { useEffect, useState } from 'react';

interface CategoryNavProps {
  categories: { id: string; name: string }[];
  activeCategory: string;
  onCategoryChange: (id: string) => void;
}

export function CategoryNav({ categories, activeCategory, onCategoryChange }: CategoryNavProps) {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    onCategoryChange(id);
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className={`${isSticky ? 'fixed top-0 left-0 right-0 z-50 bg-white border-b border-neutral-200 shadow-sm' : 'relative'} transition-all duration-300`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex gap-1 overflow-x-auto no-scrollbar py-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => scrollToSection(category.id)}
              className={`relative px-6 py-3 text-sm font-medium whitespace-nowrap transition-all ${
                activeCategory === category.id
                  ? 'text-[#DC2626]'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              {category.name}
              {activeCategory === category.id && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#DC2626]" />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
