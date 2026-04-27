import { motion } from "motion/react";
import { Phone, MessageCircle, ArrowRight, MapPin, Mail, Clock } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* grid pattern */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      {/* radial red glow */}
      <div
        aria-hidden
        className="absolute -right-40 top-1/3 h-[640px] w-[640px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(220,38,38,0.18) 0%, rgba(220,38,38,0) 70%)",
        }}
      />

      <div className="relative mx-auto max-w-[1400px] px-6 pt-24 pb-32 lg:px-12 lg:pt-32 lg:pb-40">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white/70 px-3 py-1.5 backdrop-blur"
            >
              <span className="size-1.5 rounded-full bg-red-600 animate-pulse" />
              <span className="text-[12px] tracking-[0.18em] uppercase text-neutral-700">
                Contact · Liên hệ doanh nghiệp
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="mt-7 max-w-[18ch] tracking-[-0.02em] text-[clamp(2.4rem,5.2vw,4.5rem)] leading-[1.02]"
            >
              Talk to{" "}
              <span className="relative inline-block">
                <span className="relative z-10">PKGbattery</span>
                <span className="absolute inset-x-0 bottom-1 -z-0 h-3 bg-red-600/90" />
              </span>{" "}
              Sales & Technical Team.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-7 max-w-[58ch] text-neutral-600 text-[1.05rem] leading-[1.7]"
            >
              Nhận tư vấn nhanh về giải pháp pin lithium, báo giá dự án, đăng ký
              đại lý, OEM/ODM, bảo hành và hỗ trợ kỹ thuật. Đội ngũ kỹ sư và
              sale của PKGbattery phản hồi trong giờ làm việc — không bot, không
              chờ đợi vô ích.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap"
            >
              <a
                href="tel:0989120088"
                className="group inline-flex items-center justify-center gap-3 rounded-none bg-red-600 px-7 py-4 text-white transition hover:bg-red-700 hover:shadow-[0_18px_40px_-12px_rgba(220,38,38,0.55)]"
              >
                <Phone className="size-5" />
                <span className="tracking-tight">Call Sales · 0989 120 088</span>
                <ArrowRight className="size-4 transition -translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100" />
              </a>
              <a
                href="https://zalo.me/0989120088"
                className="inline-flex items-center justify-center gap-3 border border-neutral-900 bg-neutral-900 px-7 py-4 text-white transition hover:bg-neutral-800"
              >
                <MessageCircle className="size-5" />
                Chat Zalo
              </a>
              <a
                href="#inquiry"
                className="inline-flex items-center justify-center gap-2 border border-neutral-300 px-6 py-4 text-neutral-900 transition hover:border-neutral-900"
              >
                Send an inquiry
                <ArrowRight className="size-4" />
              </a>
            </motion.div>

            <p className="mt-5 text-sm text-neutral-500">
              <Clock className="inline size-3.5 -mt-0.5 mr-1.5" />
              Sales team available Mon–Sat, 8:00–18:00 (GMT+7) · Đội ngũ phản hồi
              nhanh trong giờ làm việc.
            </p>

            {/* floating chips */}
            <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                { i: <Phone className="size-4" />, l: "Hotline", v: "24/7 Sales" },
                { i: <MessageCircle className="size-4" />, l: "Zalo", v: "< 5 min reply" },
                { i: <Mail className="size-4" />, l: "Email", v: "Within 24h" },
                { i: <MapPin className="size-4" />, l: "HQ", v: "Hà Nội · VN" },
              ].map((c, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.35 + i * 0.07 }}
                  className="flex items-center gap-3 border-l-2 border-red-600 bg-neutral-50 px-4 py-3"
                >
                  <span className="text-red-600">{c.i}</span>
                  <div className="leading-tight">
                    <div className="text-[11px] uppercase tracking-[0.16em] text-neutral-500">
                      {c.l}
                    </div>
                    <div className="text-neutral-900">{c.v}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* visual right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="relative lg:col-span-5"
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1730705788367-dbd288c40ee7?auto=format&fit=crop&w=1200&q=80"
                alt="PKGbattery factory line"
                className="size-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/70 via-black/30 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-red-600/30 mix-blend-screen" />

              {/* corner ticks */}
              <div className="absolute left-4 top-4 size-6 border-l-2 border-t-2 border-white" />
              <div className="absolute right-4 top-4 size-6 border-r-2 border-t-2 border-white" />
              <div className="absolute left-4 bottom-4 size-6 border-l-2 border-b-2 border-white" />
              <div className="absolute right-4 bottom-4 size-6 border-r-2 border-b-2 border-white" />

              <div className="absolute left-6 right-6 bottom-6 text-white">
                <div className="text-[11px] uppercase tracking-[0.22em] opacity-80">
                  PKG Manufacturing · Hà Nội
                </div>
                <div className="mt-1 text-2xl tracking-tight">
                  10+ năm kinh nghiệm · 8 đại lý · OEM/ODM
                </div>
              </div>
            </div>

            {/* floating spec card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="absolute -left-6 bottom-12 hidden border border-neutral-200 bg-white p-5 shadow-[0_24px_50px_-20px_rgba(0,0,0,0.25)] sm:block"
            >
              <div className="text-[11px] uppercase tracking-[0.18em] text-neutral-500">
                Avg. response
              </div>
              <div className="mt-1 flex items-baseline gap-2">
                <span className="text-4xl tracking-tight">12</span>
                <span className="text-neutral-500">phút · Zalo</span>
              </div>
              <div className="mt-3 h-1 w-full bg-neutral-100">
                <div className="h-full w-[88%] bg-red-600" />
              </div>
              <div className="mt-2 text-[11px] text-neutral-500">
                Based on Q1/2026 internal CRM data
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
