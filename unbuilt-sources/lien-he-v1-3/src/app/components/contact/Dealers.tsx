import { useState } from "react";
import { motion } from "motion/react";
import { Phone, Navigation, MessageCircle, MapPin } from "lucide-react";
import { DEALERS } from "./data";

const FILTERS = [
  { k: "all", l: "Tất cả · 8 đại lý" },
  { k: "north", l: "Miền Bắc" },
  { k: "central", l: "Miền Trung" },
  { k: "south", l: "Miền Nam" },
] as const;

export function Dealers() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]["k"]>("all");
  const [hover, setHover] = useState<string | null>(null);

  const list = DEALERS.filter((d) => filter === "all" || d.region === filter);

  return (
    <section id="dealers" className="relative bg-neutral-50 py-28 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div>
            <span className="text-[12px] uppercase tracking-[0.22em] text-red-600">
              05 — Dealer network
            </span>
            <h2 className="mt-4 max-w-2xl text-[clamp(2rem,3.5vw,3rem)] leading-[1.05] tracking-[-0.02em]">
              Hệ thống 8 đại lý PKGbattery trên toàn quốc.
            </h2>
            <p className="mt-5 max-w-xl text-neutral-600 leading-relaxed">
              Mạng lưới đại lý uỷ quyền của PKGbattery bao phủ ba miền Bắc — Trung
              — Nam, đảm bảo khách hàng dự án và người dùng cuối luôn có điểm hỗ
              trợ kỹ thuật, kho hàng và bảo hành gần nhất.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {FILTERS.map((f) => (
              <button
                key={f.k}
                onClick={() => setFilter(f.k)}
                className={`border px-4 py-2 text-sm transition ${
                  filter === f.k
                    ? "border-neutral-900 bg-neutral-900 text-white"
                    : "border-neutral-300 text-neutral-700 hover:border-neutral-900"
                }`}
              >
                {f.l}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Map illustration */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[3/4] w-full overflow-hidden border border-neutral-200 bg-white">
              <div
                aria-hidden
                className="absolute inset-0 opacity-[0.05]"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)",
                  backgroundSize: "32px 32px",
                }}
              />
              {/* Stylized VN shape */}
              <svg viewBox="0 0 100 110" className="absolute inset-0 h-full w-full p-6">
                <path
                  d="M50,4 C58,8 64,14 66,22 C70,28 70,34 64,40 C58,46 60,52 56,58 C52,66 60,72 56,80 C52,88 44,90 42,96 C40,102 46,106 44,108 C36,108 30,98 34,90 C38,82 32,76 36,68 C40,60 30,54 36,46 C42,38 42,30 38,24 C34,18 40,8 50,4 Z"
                  fill="rgba(0,0,0,0.04)"
                  stroke="rgba(0,0,0,0.15)"
                  strokeWidth="0.6"
                />
              </svg>
              {DEALERS.map((d) => {
                const active = hover === d.id || filter === d.region;
                return (
                  <button
                    key={d.id}
                    onMouseEnter={() => setHover(d.id)}
                    onMouseLeave={() => setHover(null)}
                    className="absolute -translate-x-1/2 -translate-y-1/2"
                    style={{ left: `${d.x}%`, top: `${d.y}%` }}
                  >
                    <span className="relative flex">
                      <span
                        className={`absolute inline-flex size-full animate-ping rounded-full ${
                          active ? "bg-red-500/60" : "bg-neutral-400/30"
                        }`}
                      />
                      <span
                        className={`relative inline-flex size-3 rounded-full border-2 ${
                          active
                            ? "border-red-600 bg-red-600"
                            : "border-neutral-800 bg-white"
                        }`}
                      />
                    </span>
                    {hover === d.id && (
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 whitespace-nowrap border border-neutral-900 bg-neutral-900 px-2 py-1 text-[11px] text-white">
                        {d.name.replace("PKGbattery Dealer ", "")}
                      </span>
                    )}
                  </button>
                );
              })}

              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between border-t border-neutral-200 pt-4 text-xs text-neutral-500">
                <span className="inline-flex items-center gap-2">
                  <span className="size-2 rounded-full bg-red-600" /> Authorized
                  dealer
                </span>
                <span>Map · stylized VN</span>
              </div>
            </div>
          </div>

          {/* List */}
          <div className="lg:col-span-7">
            <div className="divide-y divide-neutral-200 border border-neutral-200 bg-white">
              {list.map((d, i) => (
                <motion.div
                  key={d.id}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                  onMouseEnter={() => setHover(d.id)}
                  onMouseLeave={() => setHover(null)}
                  className={`grid grid-cols-1 gap-4 p-6 transition md:grid-cols-12 md:items-center ${
                    hover === d.id ? "bg-neutral-50" : ""
                  }`}
                >
                  <div className="md:col-span-5">
                    <div className="text-[11px] uppercase tracking-[0.18em] text-red-600">
                      {d.regionLabel}
                    </div>
                    <div className="mt-1 tracking-tight text-lg">{d.name}</div>
                    <div className="mt-2 flex items-start gap-2 text-sm text-neutral-600">
                      <MapPin className="mt-0.5 size-4 shrink-0 text-neutral-400" />
                      <span>{d.address}</span>
                    </div>
                  </div>
                  <div className="md:col-span-3 text-sm text-neutral-600">
                    <div className="text-neutral-900 tracking-tight">{d.phone}</div>
                    <div className="text-xs">{d.email}</div>
                    <div className="mt-1 text-xs">{d.hours}</div>
                  </div>
                  <div className="md:col-span-4 flex flex-wrap justify-end gap-2">
                    <a
                      href={`tel:${d.phone.replace(/\s/g, "")}`}
                      className="inline-flex items-center gap-2 bg-red-600 px-3.5 py-2 text-sm text-white hover:bg-red-700"
                    >
                      <Phone className="size-3.5" /> Gọi
                    </a>
                    <a
                      href="https://zalo.me/0989120088"
                      className="inline-flex items-center gap-2 border border-neutral-900 px-3.5 py-2 text-sm hover:bg-neutral-900 hover:text-white"
                    >
                      <MessageCircle className="size-3.5" /> Zalo
                    </a>
                    <a
                      href="https://maps.google.com"
                      className="inline-flex items-center gap-2 border border-neutral-300 px-3.5 py-2 text-sm hover:border-neutral-900"
                    >
                      <Navigation className="size-3.5" /> Chỉ đường
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>

            <p className="mt-4 text-xs text-neutral-500">
              * Dữ liệu cập nhật Q1/2026. Chính sách giá, hàng tồn, lịch giao và
              ưu đãi dự án có thể khác nhau giữa các đại lý — vui lòng xác nhận
              trực tiếp.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
