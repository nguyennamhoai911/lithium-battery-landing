import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { dealers } from '../../data';
import { MapPin, Phone, ExternalLink, Filter, ChevronRight, Navigation } from 'lucide-react';

export default function DealerNetwork() {
  const [activeRegion, setActiveRegion] = useState<string>("All");
  const [selectedDealerId, setSelectedDealerId] = useState<string | null>(dealers[0].id);

  const filteredDealers = activeRegion === "All" 
    ? dealers 
    : dealers.filter(d => d.region === activeRegion);

  const regions = ["All", "North", "Central", "South"];
  const regionLabels: Record<string, string> = {
    "All": "Tất cả",
    "North": "Miền Bắc",
    "Central": "Miền Trung",
    "South": "Miền Nam"
  };

  return (
    <section className="py-24 bg-brand-soft/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
          <div>
            <div className="inline-flex items-center gap-2 text-brand-red font-bold text-sm tracking-widest uppercase mb-4">
              <div className="w-8 h-[2px] bg-brand-red" />
              Network Presence
            </div>
            <h2 className="text-4xl lg:text-5xl font-display font-medium mb-4">Hệ thống đại lý <br/> <span className="font-bold">Toàn quốc</span></h2>
            <p className="text-brand-dark/60 max-w-xl">
              PKGbattery sở hữu mạng lưới đại lý và điểm hỗ trợ kỹ thuật rộng khắp Việt Nam, đảm bảo dịch vụ nhanh chóng nhất cho khách hàng.
            </p>
          </div>

          <div className="flex bg-white p-1.5 rounded-full shadow-sm border border-brand-soft self-start">
            {regions.map((reg) => (
              <button
                key={reg}
                onClick={() => setActiveRegion(reg)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
                  activeRegion === reg 
                  ? "bg-brand-red text-white shadow-lg shadow-brand-red/20" 
                  : "text-brand-dark/60 hover:text-brand-dark"
                }`}
              >
                {regionLabels[reg]}
              </button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Dealer List */}
          <div className="space-y-4 max-h-[800px] overflow-y-auto pr-4 custom-scrollbar">
            {filteredDealers.map((dealer) => {
              const isActive = selectedDealerId === dealer.id;
              return (
                <motion.button
                  key={dealer.id}
                  layout
                  onClick={() => setSelectedDealerId(dealer.id)}
                  className={`w-full text-left p-6 rounded-3xl border-2 transition-all ${
                    isActive 
                    ? "bg-white border-brand-red shadow-xl" 
                    : "bg-transparent border-transparent hover:bg-white hover:border-brand-soft"
                  }`}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-10 h-10 rounded-xl bg-brand-soft flex items-center justify-center">
                      <MapPin className={`w-5 h-5 ${isActive ? "text-brand-red" : "text-brand-dark/30"}`} />
                    </div>
                    <div className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                      dealer.region === "North" ? "bg-blue-50 text-blue-600" :
                      dealer.region === "Central" ? "bg-yellow-50 text-yellow-600" :
                      "bg-green-50 text-green-600"
                    }`}>
                      {regionLabels[dealer.region]}
                    </div>
                  </div>

                  <h4 className="text-lg font-bold mb-2">{dealer.name}</h4>
                  <p className="text-sm text-brand-dark/60 mb-6 leading-relaxed flex items-start gap-2">
                    <span className="shrink-0 mt-1 opacity-40">•</span>
                    {dealer.address}
                  </p>

                  <div className="flex items-center gap-4 pt-4 border-t border-brand-soft">
                    <a href={`tel:${dealer.phone}`} className="flex items-center gap-2 text-xs font-bold text-brand-dark hover:text-brand-red transition-colors">
                      <Phone className="w-3.5 h-3.5" />
                      {dealer.phone}
                    </a>
                    <button className="flex items-center gap-2 text-xs font-bold text-brand-dark/40 hover:text-brand-dark transition-colors">
                      <Navigation className="w-3.5 h-3.5" />
                      Chỉ đường
                    </button>
                    {isActive && (
                      <motion.div 
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="ml-auto flex items-center gap-1 text-brand-red text-xs font-bold"
                      >
                        Active
                        <div className="w-1 h-1 rounded-full bg-brand-red" />
                      </motion.div>
                    )}
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Visual Map Placeholder */}
          <div className="relative sticky top-24">
            <div className="aspect-[4/5] bg-brand-dark rounded-[3rem] overflow-hidden shadow-2xl relative">
              {/* Complex SVG Map Mockup */}
              <div className="absolute inset-0 opacity-10 technical-grid" />
              <div className="absolute inset-0 p-12">
                <svg viewBox="0 0 400 800" className="w-full h-full opacity-20 fill-white stroke-white/20">
                  <path d="M120 100 Q150 50, 200 80 T250 150 T300 300 T200 450 T150 600 T180 750" fill="none" strokeDasharray="4 4" />
                   {/* Simplified Vietnam Outline */}
                   <path d="M150,50 L180,70 L200,100 L210,150 L200,200 L180,250 L170,320 L160,400 L180,480 L200,550 L220,620 L230,700 L210,750 L180,780 L150,750 L160,700 L150,650 L130,580 L140,500 L150,420 L140,350 L130,280 L140,200 L150,150 Z" />
                </svg>
              </div>

              {/* Fake Markers based on coordinates */}
              {filteredDealers.map((dealer) => {
                const isActive = selectedDealerId === dealer.id;
                // Calculate position based on lat/lng (mocking 0-100 range)
                const top = `${100 - (dealer.lat - 8) * 6}%`; 
                const left = `${(dealer.lng - 103) * 15}%`;

                return (
                  <motion.div
                    key={dealer.id}
                    className="absolute z-10"
                    style={{ top, left }}
                  >
                    <button 
                      onClick={() => setSelectedDealerId(dealer.id)}
                      className="group relative"
                    >
                      {isActive && (
                        <motion.div 
                          layoutId="map-glow"
                          className="absolute -inset-4 bg-brand-red/30 rounded-full blur-xl scale-125"
                        />
                      )}
                      <div className={`relative w-4 h-4 rounded-full border-2 transition-all ${
                        isActive ? "bg-brand-red border-white scale-150 rotate-0" : "bg-white/40 border-white/20 backdrop-blur-sm group-hover:bg-white group-hover:scale-125"
                      }`} />
                      
                      <AnimatePresence>
                        {isActive && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white text-brand-dark px-4 py-2 rounded-xl text-[10px] font-bold whitespace-nowrap shadow-2xl border border-brand-soft z-20"
                          >
                            {dealer.name}
                            <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-white" />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </button>
                  </motion.div>
                );
              })}

              <div className="absolute bottom-12 left-12 right-12 glass-panel p-8 rounded-3xl border-white/10 text-white">
                <div className="flex items-center gap-2 text-brand-red text-xs font-bold uppercase tracking-widest mb-2">
                  <div className="w-2 h-2 rounded-full bg-brand-red" />
                  Live Coverage
                </div>
                <h5 className="text-xl font-bold mb-4">Đại lý và Bảo hành</h5>
                <p className="text-xs text-white/60 leading-relaxed">
                  Chúng tôi đang liên tục mở rộng mạng lưới. Nếu bạn quan tâm và muốn trở thành đối tác phân phối của PKGbattery, hãy liên hệ với chúng tôi ngay hôm nay.
                </p>
                <button className="mt-6 text-xs font-bold inline-flex items-center gap-2 group">
                  Đăng ký đại lý ngay
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
