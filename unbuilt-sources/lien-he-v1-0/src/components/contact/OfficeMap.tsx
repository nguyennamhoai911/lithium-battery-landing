import { MapPin, Clock, Phone, Navigation, ExternalLink } from 'lucide-react';

export default function OfficeMap() {
  return (
    <section className="bg-white relative overflow-hidden">
      <div className="grid lg:grid-cols-5 h-[600px]">
        {/* Info Column */}
        <div className="lg:col-span-2 bg-brand-dark p-12 lg:p-20 flex flex-col justify-center relative z-10">
          <div className="absolute top-0 right-0 p-8">
            <MapPin className="w-20 h-20 text-white/5" />
          </div>
          
          <div className="inline-flex items-center gap-2 text-brand-red font-bold text-sm tracking-widest uppercase mb-6">
            <div className="w-8 h-[2px] bg-brand-red" />
            Head Office
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-display font-medium text-white mb-8">
            Văn phòng tại <br/>
            <span className="font-bold">Hà Nội</span>
          </h2>
          
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="shrink-0 w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center">
                <MapPin className="w-6 h-6 text-brand-red" />
              </div>
              <div>
                <p className="text-white/40 text-[10px] uppercase font-bold tracking-widest mb-1">Địa chỉ</p>
                <p className="text-white text-lg font-medium leading-normal">
                  123 Thái Hà, Đống Đa,<br/>Hà Nội, Việt Nam
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="shrink-0 w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center">
                <Clock className="w-6 h-6 text-brand-red" />
              </div>
              <div>
                <p className="text-white/40 text-[10px] uppercase font-bold tracking-widest mb-1">Giờ làm việc</p>
                <p className="text-white text-lg font-medium leading-normal">
                  Thứ 2 – Thứ 7: 8:00 – 18:00<br/>Chủ nhật: Nghỉ
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="shrink-0 w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center">
                <Phone className="w-6 h-6 text-brand-red" />
              </div>
              <div>
                <p className="text-white/40 text-[10px] uppercase font-bold tracking-widest mb-1">Hotline văn phòng</p>
                <a href="tel:0989000000" className="text-white text-xl font-bold hover:text-brand-red transition-colors">
                  0989 000 000
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <a 
              href="https://maps.google.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-brand-dark px-8 py-4 rounded-full font-bold hover:bg-brand-red hover:text-white transition-all group"
            >
              <span>Xem trên Google Maps</span>
              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Map Column */}
        <div className="lg:col-span-3 h-[400px] lg:h-full relative overflow-hidden grayscale contrast-125 brightness-50 lg:grayscale-0 lg:contrast-100 lg:brightness-100 transition-all duration-700 hover:grayscale-0">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.4855427218683!2d105.81822767623696!3d21.013111487313366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab82dfb2390b%3A0xe54d6ea0f425ae7d!2zMTIzIFRow6FpIEjDoCwgVHJ1bmcgTGnhu4d0LCDEkOG7kW5nIMSQYSwgSMOgIE7hu5lpLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1714104000000!5m2!1svi!2s" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_100px_rgba(0,0,0,0.1)] lg:shadow-none" />
          
          {/* Overlay Map Badge */}
          <div className="absolute bottom-8 left-8 p-4 bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl border border-white flex items-center gap-4 hidden lg:flex">
             <div className="w-12 h-12 rounded-xl overflow-hidden shadow-inner">
                <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=100" alt="Building preview" />
             </div>
             <div>
               <p className="text-xs font-bold">Văn phòng chính</p>
               <p className="text-[10px] text-brand-dark/60 font-medium">PKGbattery Corporate Tower</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
