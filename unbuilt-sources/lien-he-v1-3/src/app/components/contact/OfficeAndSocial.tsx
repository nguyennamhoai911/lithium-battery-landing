import { motion } from "motion/react";
import {
  MapPin,
  Clock,
  Phone,
  ExternalLink,
  Play,
  Facebook,
  Youtube,
  Linkedin,
  MessageCircle,
} from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function Office() {
  return (
    <section id="office-map" className="relative bg-white py-28 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <span className="text-[12px] uppercase tracking-[0.22em] text-red-600">
              06 — Head office
            </span>
            <h2 className="mt-4 text-[clamp(2rem,3.5vw,3rem)] leading-[1.05] tracking-[-0.02em]">
              Văn phòng PKGbattery tại Hà Nội.
            </h2>
            <p className="mt-5 text-neutral-600 leading-relaxed">
              Trụ sở chính kiêm Office & Support Center của PKGbattery đặt tại
              Đống Đa, Hà Nội — nơi tập trung đội ngũ kinh doanh dự án, kỹ sư
              OEM, vận hành kho và bộ phận hỗ trợ kỹ thuật.
            </p>

            <ul className="mt-8 space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 size-4 text-red-600" />
                <div>
                  <div className="text-neutral-900">PKGbattery Head Office</div>
                  <div className="text-neutral-600">
                    123 Thái Hà, Đống Đa, Hà Nội, Việt Nam
                  </div>
                </div>
              </li>
              <li className="flex gap-3">
                <Clock className="mt-0.5 size-4 text-red-600" />
                <div>
                  <div className="text-neutral-900">Giờ làm việc</div>
                  <div className="text-neutral-600">
                    Thứ 2 – Thứ 7, 8:00 – 18:00 (GMT+7)
                  </div>
                </div>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 size-4 text-red-600" />
                <div>
                  <div className="text-neutral-900">Tổng đài / Sales</div>
                  <div className="text-neutral-600">+84 989 120 088</div>
                </div>
              </li>
            </ul>

            <a
              href="https://maps.google.com/?q=Hanoi+Vietnam"
              className="mt-8 inline-flex items-center gap-2 border border-neutral-900 px-5 py-3 transition hover:bg-neutral-900 hover:text-white"
            >
              Open in Google Maps
              <ExternalLink className="size-4" />
            </a>
          </div>

          <div className="lg:col-span-8">
            <div className="relative h-[460px] w-full overflow-hidden border border-neutral-200 lg:h-[560px]">
              <iframe
                title="PKGbattery HQ"
                src="https://www.google.com/maps?q=Thai+Ha+Dong+Da+Hanoi&output=embed"
                className="h-full w-full grayscale-[40%]"
                loading="lazy"
              />
              {/* floating panel */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="absolute left-6 top-6 max-w-xs border border-neutral-900 bg-white p-5 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.35)]"
              >
                <div className="text-[11px] uppercase tracking-[0.2em] text-red-600">
                  Head office
                </div>
                <div className="mt-1 text-xl tracking-tight">PKGbattery HQ</div>
                <div className="mt-3 text-sm text-neutral-600 leading-relaxed">
                  123 Thái Hà, Đống Đa, Hà Nội. Office, kho hàng demo và showroom
                  sản phẩm. Đặt lịch tham quan bằng Zalo.
                </div>
                <a
                  href="tel:0989120088"
                  className="mt-4 inline-flex items-center gap-2 text-red-600 hover:underline"
                >
                  <Phone className="size-4" /> 0989 120 088
                </a>
              </motion.div>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3">
              {[
                "https://images.unsplash.com/photo-1717386255773-1e3037c81788?auto=format&fit=crop&w=600&q=80",
                "https://images.unsplash.com/photo-1607398027609-fbd1a06fb5d4?auto=format&fit=crop&w=600&q=80",
                "https://images.unsplash.com/photo-1705579611249-9861db5469ea?auto=format&fit=crop&w=600&q=80",
              ].map((src, i) => (
                <div
                  key={i}
                  className="relative aspect-[4/3] overflow-hidden border border-neutral-200"
                >
                  <ImageWithFallback
                    src={src}
                    alt="PKGbattery office"
                    className="size-full object-cover transition duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3 text-[11px] uppercase tracking-[0.18em] text-white">
                    {["Showroom", "Engineering lab", "Warehouse"][i]}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Social() {
  const tiles = [
    {
      label: "Product Test",
      title: "PKG-LFP 48V100Ah · 1C discharge cycle test",
      img: "https://images.unsplash.com/photo-1607398027609-fbd1a06fb5d4?auto=format&fit=crop&w=900&q=80",
      type: "video",
    },
    {
      label: "Factory Insight",
      title: "Bên trong dây chuyền lắp pack tại Hà Nội",
      img: "https://images.unsplash.com/photo-1730705788367-dbd288c40ee7?auto=format&fit=crop&w=900&q=80",
      type: "video",
    },
    {
      label: "Dealer Activity",
      title: "Khai trương đại lý PKGbattery Đà Nẵng",
      img: "https://images.unsplash.com/photo-1717386255773-1e3037c81788?auto=format&fit=crop&w=900&q=80",
      type: "image",
    },
    {
      label: "Technical Guide",
      title: "Cách đọc thông số BMS & lựa chọn cell phù hợp",
      img: "https://images.unsplash.com/photo-1695712551666-e0c354b1e6b9?auto=format&fit=crop&w=900&q=80",
      type: "image",
    },
  ];

  return (
    <section className="relative bg-neutral-50 py-28 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <span className="text-[12px] uppercase tracking-[0.22em] text-red-600">
              07 — Live presence
            </span>
            <h2 className="mt-4 text-[clamp(2rem,3.5vw,3rem)] leading-[1.05] tracking-[-0.02em]">
              See PKGbattery in action.
            </h2>
            <p className="mt-5 max-w-md text-neutral-600 leading-relaxed">
              Chưa sẵn sàng liên hệ ngay? Theo dõi PKGbattery để xem hoạt động
              thực tế: video test pin theo chu kỳ, hậu trường nhà máy, tin tức
              đại lý, hướng dẫn kỹ thuật và các dự án vận hành thực tế trên cả
              nước.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3">
              {[
                { i: <Facebook className="size-4" />, l: "Facebook", v: "82K followers" },
                { i: <Youtube className="size-4" />, l: "YouTube", v: "Test pin · Demo" },
                { i: <Linkedin className="size-4" />, l: "LinkedIn", v: "B2B · Partners" },
                { i: <MessageCircle className="size-4" />, l: "Zalo OA", v: "Chat & support" },
              ].map((s) => (
                <a
                  key={s.l}
                  href="#"
                  className="group flex items-center gap-3 border border-neutral-200 bg-white px-4 py-3 transition hover:border-neutral-900"
                >
                  <span className="inline-flex size-9 items-center justify-center border border-neutral-200 text-neutral-700 group-hover:border-red-600 group-hover:text-red-600">
                    {s.i}
                  </span>
                  <div className="leading-tight">
                    <div className="tracking-tight">{s.l}</div>
                    <div className="text-xs text-neutral-500">{s.v}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {tiles.map((t) => (
                <motion.a
                  key={t.title}
                  href="#"
                  whileHover={{ y: -4 }}
                  className="group relative block overflow-hidden border border-neutral-200 bg-white"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <ImageWithFallback
                      src={t.img}
                      alt={t.title}
                      className="size-full object-cover transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    {t.type === "video" && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="inline-flex size-14 items-center justify-center rounded-full bg-red-600/90 text-white shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)]">
                          <Play className="size-5" />
                        </span>
                      </div>
                    )}
                    <span className="absolute left-3 top-3 bg-white px-2 py-1 text-[10px] uppercase tracking-[0.18em]">
                      {t.label}
                    </span>
                  </div>
                  <div className="p-4">
                    <div className="text-neutral-900 tracking-tight">{t.title}</div>
                    <div className="mt-2 flex items-center justify-between text-xs text-neutral-500">
                      <span>pkgbattery.com / social</span>
                      <span className="text-red-600">View →</span>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
