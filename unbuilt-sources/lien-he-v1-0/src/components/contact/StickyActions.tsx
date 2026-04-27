import { Phone, MessageCircle } from 'lucide-react';

export default function StickyActions() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden px-4 pb-6 pointer-events-none">
      <div className="flex gap-3 pointer-events-auto">
        <a 
          href="tel:0989000000" 
          className="flex-1 bg-brand-red text-white py-4 rounded-2xl flex items-center justify-center gap-2 font-bold shadow-2xl active:scale-95 transition-transform"
        >
          <Phone className="w-5 h-5" />
          <span>Gọi Sale</span>
        </a>
        <button 
          className="flex-1 bg-brand-dark text-white py-4 rounded-2xl flex items-center justify-center gap-2 font-bold shadow-2xl active:scale-95 transition-transform"
        >
          <MessageCircle className="w-5 h-5 text-green-400" fill="currentColor" />
          <span>Chat Zalo</span>
        </button>
      </div>
    </div>
  );
}
