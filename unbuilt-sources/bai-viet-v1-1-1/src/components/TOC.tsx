import { motion, AnimatePresence } from 'motion/react';
import { List, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';

export const TOC = () => {
  const [headings, setHeadings] = useState<{ id: string; text: string; level: number }[]>([]);
  const [activeId, setActiveId] = useState<string>('');
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll('.reading-content h2, .reading-content h3'))
      .map((el) => ({
        id: el.id,
        text: el.textContent || '',
        level: Number(el.tagName.substring(1)),
      }));
    setHeadings(elements);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-10% 0px -80% 0px' }
    );

    document.querySelectorAll('.reading-content h2, .reading-content h3').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -100;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
    setIsMobileOpen(false);
  };

  return (
    <>
      {/* Desktop TOC */}
      <aside className="hidden xl:block sticky top-32 w-64 mr-12 select-none h-fit">
        <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-zinc-400 mb-8">
          <List size={16} className="text-brand-red" />
          Mục lục bài viết
        </div>
        <nav className="flex flex-col gap-4 border-l-2 border-zinc-100">
          {headings.map((h) => (
            <button
              key={h.id}
              onClick={() => scrollTo(h.id)}
              className={`text-left text-sm transition-all pl-6 relative ${
                h.id === activeId 
                  ? 'text-zinc-900 font-bold' 
                  : 'text-zinc-400 hover:text-zinc-600'
              } ${h.level === 3 ? 'ml-4 text-xs' : ''}`}
            >
              {h.id === activeId && (
                <motion.div 
                  layoutId="active-marker"
                  className="absolute left-[-2px] top-0 w-[2px] h-full bg-brand-red"
                />
              )}
              {h.text}
            </button>
          ))}
        </nav>
      </aside>

      {/* Mobile Sticky Button & Bottom Sheet */}
      <div className="xl:hidden fixed bottom-6 right-6 z-[60]">
        <button 
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="flex items-center gap-3 bg-brand-black text-white px-5 py-3 shadow-xl rounded-full text-xs font-bold uppercase tracking-widest"
        >
          <List size={16} />
          Mục lục
          <ChevronDown size={16} className={`transition-transform ${isMobileOpen ? 'rotate-180' : ''}`} />
        </button>
      </div>

      <AnimatePresence>
        {isMobileOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[70] lg:hidden"
            />
            <motion.div 
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed bottom-0 left-0 w-full bg-white rounded-t-[32px] p-8 pb-12 z-[80] lg:hidden max-h-[80vh] overflow-y-auto"
            >
              <div className="w-12 h-1 bg-zinc-200 rounded-full mx-auto mb-8" />
              <div className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-6">Mục lục</div>
              <nav className="flex flex-col gap-6">
                {headings.map((h) => (
                  <button
                    key={h.id}
                    onClick={() => scrollTo(h.id)}
                    className={`text-left text-lg font-semibold ${
                      h.id === activeId ? 'text-brand-red' : 'text-zinc-900'
                    } ${h.level === 3 ? 'ml-6 text-sm opacity-70' : ''}`}
                  >
                    {h.text}
                  </button>
                ))}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
