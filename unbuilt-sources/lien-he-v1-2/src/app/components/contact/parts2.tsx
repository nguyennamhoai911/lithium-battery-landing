import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Send,
  Search,
  ArrowRight,
  ArrowUpRight,
  Plus,
  Minus,
  PlayCircle,
  FileText,
  Download,
  Facebook,
  Youtube,
  Linkedin,
  Navigation,
  Quote,
  ExternalLink,
} from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

const RED = "#E11D2A";

function SectionLabel({ idx, label }: { idx: string; label: string }) {
  return (
    <div className="inline-flex items-center gap-3 tracking-[0.22em] uppercase text-[11px] text-neutral-500">
      <span className="inline-block w-8 h-px bg-neutral-400" />
      <span>{idx}</span>
      <span className="text-neutral-700">{label}</span>
    </div>
  );
}

/* ============================================================
   SECTION 7 — Vietnam Dealer Locator
============================================================ */
const DEALERS = [
  { id: "hn", city: "Hà Nội", region: "north", regionLabel: "Hà Nội & miền Bắc", addr: "123 Thái Hà, Đống Đa, Hà Nội", phone: "0989 XXX XXX", x: 47, y: 18 },
  { id: "bn", city: "Bắc Ninh", region: "north", regionLabel: "Bắc Ninh, Bắc Giang, Thái Nguyên", addr: "KCN Yên Phong, Bắc Ninh", phone: "0966 XXX XXX", x: 52, y: 22 },
  { id: "hp", city: "Hải Phòng", region: "north", regionLabel: "Hải Phòng, Quảng Ninh, Hải Dương", addr: "95 Cầu Đất, Ngô Quyền, Hải Phòng", phone: "0933 XXX XXX", x: 60, y: 26 },
  { id: "na", city: "Nghệ An", region: "central", regionLabel: "Bắc Trung Bộ", addr: "88 Lê Lợi, TP. Vinh, Nghệ An", phone: "0977 XXX XXX", x: 50, y: 42 },
  { id: "dn", city: "Đà Nẵng", region: "central", regionLabel: "Miền Trung", addr: "80 Trần Hưng Đạo, Sơn Trà, Đà Nẵng", phone: "0909 XXX XXX", x: 62, y: 56 },
  { id: "bd", city: "Bình Dương", region: "south", regionLabel: "Đông Nam Bộ", addr: "VSIP 1, Thuận An, Bình Dương", phone: "0935 XXX XXX", x: 50, y: 78 },
  { id: "hcm", city: "TP. Hồ Chí Minh", region: "south", regionLabel: "TP.HCM & lân cận", addr: "123 Điện Biên Phủ, Bình Thạnh, TP.HCM", phone: "0988 XXX XXX", x: 52, y: 83 },
  { id: "ct", city: "Cần Thơ", region: "south", regionLabel: "Miền Tây Nam Bộ", addr: "12 Mậu Thân, Ninh Kiều, Cần Thơ", phone: "0911 XXX XXX", x: 42, y: 88 },
];

export function DealerLocator() {
  const [filter, setFilter] = useState<"all" | "north" | "central" | "south">("all");
  const [active, setActive] = useState("hn");
  const [query, setQuery] = useState("");

  const filtered = DEALERS.filter(
    (d) =>
      (filter === "all" || d.region === filter) &&
      (!query || d.city.toLowerCase().includes(query.toLowerCase()))
  );
  const current = DEALERS.find((d) => d.id === active);

  return (
    <section id="dealers" className="relative bg-white border-b border-neutral-200">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 py-24">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div>
            <SectionLabel idx="06" label="Dealer Locator" />
            <h2
              className="mt-5 tracking-tight"
              style={{ fontSize: "clamp(30px, 3.6vw, 50px)", fontWeight: 700 }}
            >
              Find PKGbattery dealers <br />
              across Vietnam.
            </h2>
            <p className="mt-3 text-neutral-600 max-w-xl">
              Connect with authorized dealers and regional support points for
              faster local consultation.
            </p>
          </div>
          <div className="text-[11px] uppercase tracking-[0.18em] text-neutral-500 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full" style={{ background: RED }} /> 8 active locations
          </div>
        </div>

        {/* Filters + search */}
        <div className="mt-10 flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
          <div className="flex flex-wrap gap-1 border border-neutral-200 p-1 self-start">
            {(["all", "north", "central", "south"] as const).map((r) => (
              <button
                key={r}
                onClick={() => setFilter(r)}
                className="px-4 py-2 text-[12px] uppercase tracking-[0.16em] transition"
                style={{
                  background: filter === r ? "#0a0a0a" : "transparent",
                  color: filter === r ? "white" : "#525252",
                  fontWeight: 600,
                }}
              >
                {r === "all" ? "All Vietnam" : r === "north" ? "North" : r === "central" ? "Central" : "South"}
              </button>
            ))}
          </div>
          <div className="relative md:w-80">
            <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by province or dealer name"
              className="w-full pl-10 pr-3 py-2.5 border border-neutral-300 text-[13px] focus:outline-none focus:border-black"
            />
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Map */}
          <div className="lg:col-span-7 relative bg-[#fafafa] border border-neutral-200 aspect-[4/5] lg:aspect-auto lg:min-h-[640px] overflow-hidden">
            <VietnamMap dealers={filtered} active={active} setActive={setActive} />
          </div>

          {/* Dealer list */}
          <div className="lg:col-span-5 flex flex-col">
            {filtered.length === 0 && (
              <div className="border border-neutral-200 p-6 text-[13px] text-neutral-500">
                Contact PKGbattery sales team for support in your area.
              </div>
            )}
            <div className="space-y-2 max-h-[640px] overflow-y-auto pr-1">
              {filtered.map((d) => {
                const isActive = d.id === active;
                return (
                  <button
                    key={d.id}
                    onClick={() => setActive(d.id)}
                    className="w-full text-left border p-5 transition"
                    style={{
                      background: isActive ? "#0a0a0a" : "white",
                      color: isActive ? "white" : "#0a0a0a",
                      borderColor: isActive ? "#0a0a0a" : "rgba(0,0,0,0.1)",
                    }}
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="text-[10px] uppercase tracking-[0.18em]" style={{ color: isActive ? "rgba(255,255,255,0.5)" : "#a3a3a3" }}>
                          {d.regionLabel}
                        </div>
                        <div className="mt-1" style={{ fontSize: 17, fontWeight: 700 }}>
                          PKGbattery Dealer · {d.city}
                        </div>
                        <div className="mt-2 text-[13px] flex items-start gap-2" style={{ color: isActive ? "rgba(255,255,255,0.7)" : "#525252" }}>
                          <MapPin size={13} className="mt-0.5 flex-shrink-0" /> {d.addr}
                        </div>
                        <div className="mt-1.5 text-[13px] flex items-center gap-2" style={{ color: isActive ? "rgba(255,255,255,0.7)" : "#525252" }}>
                          <Phone size={13} /> {d.phone}
                        </div>
                      </div>
                      <span className="w-2.5 h-2.5 rounded-full mt-1" style={{ background: RED }} />
                    </div>

                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-4 flex flex-wrap gap-2"
                      >
                        <a href="tel:0989000000" className="inline-flex items-center gap-1.5 px-3 py-2 text-[12px]" style={{ background: RED, color: "white", fontWeight: 600 }}>
                          <Phone size={12} /> Call
                        </a>
                        <a href="#" className="inline-flex items-center gap-1.5 px-3 py-2 text-[12px] bg-white text-black" style={{ fontWeight: 600 }}>
                          <Navigation size={12} /> Direction
                        </a>
                        <a href="#" className="inline-flex items-center gap-1.5 px-3 py-2 text-[12px] bg-white text-black" style={{ fontWeight: 600 }}>
                          <MessageCircle size={12} /> Zalo
                        </a>
                      </motion.div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function VietnamMap({
  dealers,
  active,
  setActive,
}: {
  dealers: typeof DEALERS;
  active: string;
  setActive: (id: string) => void;
}) {
  return (
    <div className="absolute inset-0">
      {/* grid lines */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full"
      >
        {/* Stylized Vietnam silhouette */}
        <path
          d="M 38 8 Q 42 6 48 10 L 54 14 Q 60 18 58 24 L 56 30 Q 60 34 64 38 L 68 46 Q 70 54 66 60 L 60 66 Q 56 72 54 78 L 50 86 Q 46 92 40 92 L 38 88 Q 42 80 44 72 L 46 64 Q 44 58 40 54 L 36 48 Q 32 42 36 36 L 40 30 Q 38 24 36 18 Z"
          fill="rgba(0,0,0,0.04)"
          stroke="rgba(0,0,0,0.18)"
          strokeWidth="0.25"
        />
        {/* connecting lines */}
        {dealers.map((d, i) => {
          if (i === 0) return null;
          const prev = dealers[i - 1];
          return (
            <line
              key={d.id}
              x1={prev.x}
              y1={prev.y}
              x2={d.x}
              y2={d.y}
              stroke={d.id === active || prev.id === active ? RED : "rgba(0,0,0,0.18)"}
              strokeWidth="0.18"
              strokeDasharray="0.6 0.6"
            />
          );
        })}
      </svg>

      {/* markers */}
      {dealers.map((d) => {
        const isActive = d.id === active;
        return (
          <button
            key={d.id}
            onClick={() => setActive(d.id)}
            className="absolute -translate-x-1/2 -translate-y-1/2 group"
            style={{ left: `${d.x}%`, top: `${d.y}%` }}
          >
            {isActive && (
              <span
                className="absolute inset-0 -m-3 rounded-full animate-ping"
                style={{ background: RED, opacity: 0.25 }}
              />
            )}
            <span
              className="relative block rounded-full"
              style={{
                width: isActive ? 18 : 12,
                height: isActive ? 18 : 12,
                background: RED,
                boxShadow: isActive ? "0 0 0 4px rgba(225,29,42,0.18)" : "0 0 0 2px white",
                transition: "all 250ms",
              }}
            />
            <span
              className="absolute left-1/2 -translate-x-1/2 mt-2 px-2 py-1 text-[10px] whitespace-nowrap"
              style={{
                background: isActive ? "#0a0a0a" : "white",
                color: isActive ? "white" : "#525252",
                border: "1px solid rgba(0,0,0,0.1)",
                fontWeight: 600,
              }}
            >
              {d.city}
            </span>
          </button>
        );
      })}

      {/* legend */}
      <div className="absolute top-4 left-4 bg-white border border-neutral-200 px-3 py-2 text-[10px] uppercase tracking-[0.18em] text-neutral-500">
        Vietnam · Dealer Network
      </div>
      <div className="absolute bottom-4 right-4 bg-black text-white px-3 py-2 text-[10px] uppercase tracking-[0.18em] flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full" style={{ background: RED }} />
        {dealers.length} active
      </div>
    </div>
  );
}

/* ============================================================
   SECTION 8 — Headquarters & Map Verification
============================================================ */
export function Headquarters() {
  return (
    <section id="map" className="relative bg-[#fafafa] border-b border-neutral-200">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <SectionLabel idx="07" label="Head Office" />
            <h2
              className="mt-5 tracking-tight"
              style={{ fontSize: "clamp(30px, 3.4vw, 48px)", fontWeight: 700 }}
            >
              PKGbattery <br /> Head Office.
            </h2>
            <p className="mt-4 text-neutral-600 max-w-md leading-relaxed">
              Our main office and business support center in Hà Nội, Việt Nam.
              For planned visits, please contact our team in advance.
            </p>

            <div className="mt-10 space-y-5">
              {[
                { label: "Office", value: "PKGbattery Head Office" },
                { label: "Address", value: "123 Thái Hà, Đống Đa, Hà Nội" },
                { label: "Hours", value: "Monday – Saturday · 8:00 – 18:00" },
                { label: "Phone", value: "0989 XXX XXX" },
                { label: "Email", value: "contact@pkgbattery.com" },
              ].map((r) => (
                <div key={r.label} className="grid grid-cols-3 gap-3 pb-4 border-b border-neutral-200">
                  <div className="text-[11px] uppercase tracking-[0.18em] text-neutral-500 col-span-1">
                    {r.label}
                  </div>
                  <div className="col-span-2" style={{ fontWeight: 500 }}>
                    {r.value}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#" className="inline-flex items-center gap-2 px-5 py-3 text-[13px]" style={{ background: RED, color: "white", fontWeight: 600 }}>
                <ExternalLink size={14} /> Open Google Maps
              </a>
              <a href="tel:0989000000" className="inline-flex items-center gap-2 px-5 py-3 text-[13px] border border-neutral-300 hover:border-black" style={{ fontWeight: 600 }}>
                <Phone size={14} /> Call Office
              </a>
              <a href="mailto:contact@pkgbattery.com" className="inline-flex items-center gap-2 px-5 py-3 text-[13px] border border-neutral-300 hover:border-black" style={{ fontWeight: 600 }}>
                <Mail size={14} /> Email Us
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 relative">
            <div className="relative aspect-[4/3] bg-neutral-200 overflow-hidden border border-neutral-300">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1400&q=80&auto=format&fit=crop"
                alt="PKGbattery head office map area"
                className="absolute inset-0 w-full h-full object-cover"
                style={{ filter: "grayscale(0.9) contrast(1.05)" }}
              />
              <div className="absolute inset-0" style={{ background: "rgba(255,255,255,0.4)" }} />

              {/* marker */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <span className="absolute inset-0 -m-4 rounded-full animate-ping" style={{ background: RED, opacity: 0.2 }} />
                <span className="relative block w-5 h-5 rounded-full" style={{ background: RED, boxShadow: "0 0 0 4px white" }} />
              </div>

              {/* Floating identity panel */}
              <div className="absolute left-6 bottom-6 bg-white border border-neutral-200 p-5 max-w-xs shadow-lg">
                <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-neutral-500">
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: RED }} /> Verified location
                </div>
                <div className="mt-3" style={{ fontWeight: 700 }}>
                  PKGbattery Head Office
                </div>
                <div className="mt-1 text-[13px] text-neutral-600">
                  123 Thái Hà, Đống Đa, Hà Nội
                </div>
                <a href="#" className="mt-3 inline-flex items-center gap-1 text-[12px]" style={{ color: RED, fontWeight: 600 }}>
                  Get directions <ArrowRight size={12} />
                </a>
              </div>

              <div className="absolute right-4 top-4 bg-black text-white px-3 py-2 text-[10px] uppercase tracking-[0.18em]">
                Hà Nội · Việt Nam
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   SECTION 9 — Social Activity Proof
============================================================ */
const SOCIAL_TILES = [
  {
    label: "Product Test",
    title: "Watch how PKGbattery products are tested before delivery.",
    image: "https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?w=1200&q=80&auto=format&fit=crop",
    big: true,
    isVideo: true,
  },
  {
    label: "Dealer Activity",
    title: "Updates from our authorized dealer network in Vietnam.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=900&q=80&auto=format&fit=crop",
  },
  {
    label: "Technical Guide",
    title: "Battery usage, installation and maintenance tips.",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=900&q=80&auto=format&fit=crop",
  },
  {
    label: "Factory Insight",
    title: "Behind-the-scenes production and quality control.",
    image: "https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=900&q=80&auto=format&fit=crop",
    isVideo: true,
  },
  {
    label: "Delivery Update",
    title: "Energy storage delivery for industrial project.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=900&q=80&auto=format&fit=crop",
  },
];

export function SocialProof() {
  return (
    <section className="relative bg-white border-b border-neutral-200">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 py-24">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div>
            <SectionLabel idx="08" label="Activity Proof" />
            <h2
              className="mt-5 tracking-tight"
              style={{ fontSize: "clamp(30px, 3.6vw, 50px)", fontWeight: 700 }}
            >
              Follow real PKGbattery <br /> updates.
            </h2>
            <p className="mt-3 text-neutral-600 max-w-xl">
              Product tests, dealer activities, technical videos, delivery
              updates and behind-the-scenes content from our team.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <SocialBtn icon={Facebook} label="Facebook" />
            <SocialBtn icon={Youtube} label="YouTube" />
            <SocialBtn icon={Linkedin} label="LinkedIn" />
            <SocialBtn icon={MessageCircle} label="Zalo" accent />
          </div>
        </div>

        <div className="mt-12 grid grid-cols-12 gap-4">
          {/* Big tile */}
          <SocialTile tile={SOCIAL_TILES[0]} className="col-span-12 lg:col-span-7 aspect-[16/10]" />
          <SocialTile tile={SOCIAL_TILES[1]} className="col-span-6 lg:col-span-5 aspect-[4/5] lg:aspect-[5/6]" />
          <SocialTile tile={SOCIAL_TILES[2]} className="col-span-6 lg:col-span-4 aspect-square" />
          <SocialTile tile={SOCIAL_TILES[3]} className="col-span-6 lg:col-span-4 aspect-square" />
          <SocialTile tile={SOCIAL_TILES[4]} className="col-span-12 lg:col-span-4 aspect-[16/9] lg:aspect-square" />
        </div>
      </div>
    </section>
  );
}

function SocialBtn({ icon: Icon, label, accent }: { icon: any; label: string; accent?: boolean }) {
  return (
    <a
      href="#"
      className="group relative inline-flex items-center gap-2 px-4 py-2.5 border text-[12px]"
      style={{
        borderColor: "rgba(0,0,0,0.15)",
        color: accent ? RED : "#0a0a0a",
        fontWeight: 600,
      }}
    >
      <Icon size={14} /> {label}
      <span
        className="absolute left-0 bottom-0 h-[2px] w-0 group-hover:w-full transition-all"
        style={{ background: RED }}
      />
    </a>
  );
}

function SocialTile({
  tile,
  className,
}: {
  tile: (typeof SOCIAL_TILES)[number];
  className?: string;
}) {
  return (
    <a
      href="#"
      className={`group relative overflow-hidden ${className || ""}`}
    >
      <ImageWithFallback
        src={tile.image}
        alt={tile.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
      />
      <div
        className="absolute inset-0 transition-opacity"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.75) 100%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
        style={{
          background:
            "linear-gradient(180deg, rgba(225,29,42,0.15) 0%, rgba(0,0,0,0.85) 100%)",
        }}
      />
      <div className="absolute top-4 left-4 px-2 py-1 bg-white/95 text-[10px] uppercase tracking-[0.18em]" style={{ fontWeight: 600 }}>
        {tile.label}
      </div>
      {tile.isVideo && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-90">
          <PlayCircle size={56} strokeWidth={1} />
        </div>
      )}
      <div className="absolute left-4 right-4 bottom-4 text-white">
        <div
          className="leading-snug transition-transform group-hover:-translate-y-1"
          style={{ fontWeight: 600, fontSize: tile.big ? 20 : 15 }}
        >
          {tile.title}
        </div>
        <div className="mt-2 inline-flex items-center gap-1 text-[12px] opacity-80">
          Watch <ArrowUpRight size={12} />
        </div>
      </div>
    </a>
  );
}

/* ============================================================
   SECTION 10 — Capability & Trust Evidence
============================================================ */
export function Capability() {
  return (
    <section className="relative bg-[#fafafa] border-b border-neutral-200">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 py-24">
        <div className="max-w-2xl">
          <SectionLabel idx="09" label="Capability & Trust" />
          <h2
            className="mt-5 tracking-tight"
            style={{ fontSize: "clamp(30px, 3.4vw, 48px)", fontWeight: 700 }}
          >
            Built for business-critical battery applications.
          </h2>
        </div>

        {/* Stat band */}
        <div
          className="mt-12 text-white grid grid-cols-2 lg:grid-cols-5 divide-x divide-white/10"
          style={{ background: "#0a0a0a" }}
        >
          {[
            { v: "8", l: "Authorized Dealers · Vietnam" },
            { v: "OEM/ODM", l: "Custom Battery Packs" },
            { v: "Tech", l: "Support Team Onsite" },
            { v: "QC'd", l: "Products for Business" },
            { v: "Fast", l: "Sales · Phone & Zalo" },
          ].map((s) => (
            <div key={s.l} className="px-6 py-8">
              <div style={{ fontSize: 30, fontWeight: 700, letterSpacing: "-0.02em" }}>
                {s.v}
              </div>
              <div className="mt-2 text-[11px] uppercase tracking-[0.18em] text-neutral-400">
                {s.l}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Capability matrix */}
          <div className="lg:col-span-8 bg-white border border-neutral-200">
            <div className="px-6 py-4 border-b border-neutral-200 flex items-center justify-between">
              <div className="text-[11px] uppercase tracking-[0.18em] text-neutral-500">
                Capability Matrix
              </div>
              <div className="text-[11px] text-neutral-500">Need · Support · Route</div>
            </div>
            <table className="w-full text-[13px]">
              <tbody>
                {[
                  ["Bulk purchase", "Product recommendation, quotation, availability", "Call Sales / Quote Form"],
                  ["Dealer partnership", "Regional review, dealer policy, onboarding", "Dealer Form"],
                  ["OEM/ODM", "Technical review, configuration, file assessment", "OEM/ODM Form"],
                  ["Technical issue", "Usage guidance, troubleshooting, compatibility", "Technical Support Form"],
                  ["Warranty case", "Serial verification, purchase channel check", "Warranty Form"],
                ].map((row, i) => (
                  <tr key={i} className="border-t border-neutral-200 hover:bg-neutral-50 transition">
                    <td className="px-6 py-4" style={{ fontWeight: 600, width: "22%" }}>
                      {row[0]}
                    </td>
                    <td className="px-6 py-4 text-neutral-600">{row[1]}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className="inline-flex items-center gap-1.5 text-[12px] px-2 py-1 border"
                        style={{ borderColor: RED, color: RED, fontWeight: 600 }}
                      >
                        {row[2]} <ArrowRight size={11} />
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Quote */}
          <div className="lg:col-span-4 relative bg-black text-white p-8 overflow-hidden">
            <Quote size={56} style={{ color: RED }} className="opacity-90" />
            <p
              className="mt-5 leading-snug"
              style={{ fontSize: 22, fontWeight: 500, letterSpacing: "-0.01em" }}
            >
              The best contact experience in a technical B2B industry is not
              the shortest form — it is the clearest route to the right team.
            </p>
            <div
              aria-hidden
              className="my-6 h-px w-12"
              style={{ background: RED }}
            />
            <div className="text-[11px] uppercase tracking-[0.22em] text-neutral-400">
              PKGbattery <br /> Customer Support Strategy
            </div>
          </div>
        </div>

        {/* File download card */}
        <div className="mt-6 bg-white border border-neutral-200 p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-2">
            <div className="relative w-24 h-32 mx-auto lg:mx-0">
              <div className="absolute inset-0 bg-neutral-100 border border-neutral-300" />
              <div className="absolute top-2 right-2 w-6 h-6 bg-white border border-neutral-300" />
              <div className="absolute left-2 right-2 top-12 space-y-1.5">
                <div className="h-1 bg-neutral-300" />
                <div className="h-1 bg-neutral-300 w-3/4" />
                <div className="h-1 bg-neutral-300" />
                <div className="h-1 bg-neutral-300 w-1/2" />
              </div>
              <div
                className="absolute bottom-0 left-0 right-0 px-2 py-1 text-white text-[10px] tracking-[0.18em] uppercase"
                style={{ background: RED, fontWeight: 700 }}
              >
                PDF
              </div>
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="text-[10px] uppercase tracking-[0.22em] text-neutral-500 flex items-center gap-3">
              <span>Company Profile</span>
              <span>·</span>
              <span>PDF · 4.2MB</span>
              <span>·</span>
              <span>Updated 2026</span>
            </div>
            <h3 className="mt-3" style={{ fontSize: 24, fontWeight: 700 }}>
              Download PKGbattery Company Profile
            </h3>
            <p className="mt-2 text-neutral-600 max-w-xl">
              Get an overview of our battery solutions, dealer network, OEM/ODM
              capability and business contact information.
            </p>
          </div>
          <div className="lg:col-span-3 flex lg:justify-end">
            <a
              href="#"
              className="inline-flex items-center gap-2 px-5 py-3.5 w-full lg:w-auto justify-center"
              style={{ background: "#0a0a0a", color: "white", fontWeight: 600 }}
            >
              <Download size={15} /> Download PDF Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   SECTION 11 — Support FAQ
============================================================ */
const FAQS = [
  {
    q: "Which contact channel should I use for fastest response?",
    a: "For urgent quotation or project consultation, call our sales hotline. For quick follow-up with images or documents, use Zalo. For formal business documents, use our official email.",
  },
  {
    q: "Can I request a quotation without complete technical specifications?",
    a: "Yes. You can describe your application, expected quantity and usage scenario. Our team will suggest the suitable battery configuration.",
  },
  {
    q: "How do I apply to become a PKGbattery dealer?",
    a: "Select the Dealer route, provide your province, business type and experience. Our team will review your area and contact you about dealer policy.",
  },
  {
    q: "What information is needed for OEM/ODM consultation?",
    a: "Useful details include voltage, capacity, cell chemistry, application, expected quantity and any available drawing or reference product.",
  },
  {
    q: "What should I prepare for warranty support?",
    a: "Please prepare product model, serial number, purchase date, purchase channel and photos/videos showing the issue.",
  },
  {
    q: "Can I visit the PKGbattery office directly?",
    a: "Please contact our team in advance to schedule a visit so the relevant person can support you properly.",
  },
  {
    q: "Do you have dealers outside Hà Nội?",
    a: "Yes. PKGbattery has a dealer network in multiple regions of Vietnam. Use the dealer locator to find the nearest support point.",
  },
  {
    q: "Can I follow PKGbattery on social media before contacting?",
    a: "Yes. You can follow Facebook, YouTube, LinkedIn or Zalo to view product updates, technical videos, dealer activities and real project content.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="relative bg-white border-b border-neutral-200">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <SectionLabel idx="10" label="Support FAQ" />
            <h2
              className="mt-5 tracking-tight"
              style={{ fontSize: "clamp(30px, 3.4vw, 46px)", fontWeight: 700 }}
            >
              Contact & support FAQ.
            </h2>
            <p className="mt-3 text-neutral-600 italic text-[14px]">
              Câu hỏi thường gặp khi liên hệ PKGbattery.
            </p>

            <div className="mt-8 bg-[#fafafa] border border-neutral-200 p-5">
              <div className="text-[11px] uppercase tracking-[0.18em] text-neutral-500">
                Still need help?
              </div>
              <a
                href="tel:0989000000"
                className="mt-3 inline-flex items-center gap-2"
                style={{ color: RED, fontWeight: 600 }}
              >
                <Phone size={15} /> Call Sales Now <ArrowRight size={13} />
              </a>
            </div>
          </div>

          <div className="lg:col-span-8">
            {FAQS.map((f, i) => {
              const isOpen = i === open;
              return (
                <div
                  key={i}
                  className="border-t border-neutral-200 last:border-b relative"
                >
                  {isOpen && (
                    <span
                      className="absolute left-0 top-0 bottom-0 w-[2px]"
                      style={{ background: RED }}
                    />
                  )}
                  <button
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    className="w-full flex items-start justify-between gap-6 py-5 text-left"
                  >
                    <div className="flex items-start gap-5">
                      <span
                        className="text-[12px] uppercase tracking-[0.18em] mt-1.5"
                        style={{ color: isOpen ? RED : "#a3a3a3", fontWeight: 600 }}
                      >
                        Q.{String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="pr-4" style={{ fontSize: 17, fontWeight: 600 }}>
                        {f.q}
                      </span>
                    </div>
                    <span
                      className="w-9 h-9 flex-shrink-0 flex items-center justify-center border"
                      style={{
                        borderColor: isOpen ? "#0a0a0a" : "rgba(0,0,0,0.15)",
                        background: isOpen ? "#0a0a0a" : "white",
                        color: isOpen ? "white" : "#0a0a0a",
                      }}
                    >
                      {isOpen ? <Minus size={15} /> : <Plus size={15} />}
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28 }}
                        className="overflow-hidden"
                      >
                        <p className="pl-[5.5rem] pr-12 pb-6 text-neutral-600 leading-relaxed max-w-3xl">
                          {f.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   SECTION 12 — Final Conversion Dock
============================================================ */
export function FinalDock() {
  return (
    <section
      className="relative overflow-hidden text-white"
      style={{ background: "#0a0a0a" }}
    >
      <div
        aria-hidden
        className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full blur-3xl opacity-50"
        style={{
          background:
            "radial-gradient(circle, rgba(225,29,42,0.4), transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="absolute -top-40 -right-32 w-[500px] h-[500px] rounded-full blur-3xl opacity-30"
        style={{
          background:
            "radial-gradient(circle, rgba(225,29,42,0.5), transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      <div className="relative max-w-[1280px] mx-auto px-6 lg:px-10 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7">
            <div className="text-[11px] uppercase tracking-[0.22em] text-neutral-400 flex items-center gap-3">
              <span className="w-8 h-px bg-neutral-500" />
              11 · Final Dock
            </div>
            <h2
              className="mt-6 tracking-tight"
              style={{ fontSize: "clamp(36px, 4.6vw, 64px)", fontWeight: 700 }}
            >
              Ready to move your <br />
              battery request <span style={{ color: RED }}>forward</span>?
            </h2>
            <p className="mt-5 max-w-xl text-neutral-300">
              Choose the fastest way to connect with PKGbattery sales,
              technical or dealer support team.
            </p>
            <p className="mt-2 max-w-xl text-neutral-500 italic text-[14px]">
              Sẵn sàng trao đổi nhu cầu pin của bạn? Chọn cách nhanh nhất bên dưới.
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-3">
            <a
              href="tel:0989000000"
              className="group flex items-center justify-between px-6 py-5"
              style={{ background: RED, color: "white", fontWeight: 600 }}
            >
              <span className="flex items-center gap-3">
                <Phone size={18} /> Call Sales Now
              </span>
              <ArrowRight size={18} className="transition group-hover:translate-x-1" />
            </a>
            <a
              href="#"
              className="group flex items-center justify-between px-6 py-5 bg-white text-black"
              style={{ fontWeight: 600 }}
            >
              <span className="flex items-center gap-3">
                <MessageCircle size={18} /> Chat via Zalo
              </span>
              <ArrowRight size={18} className="transition group-hover:translate-x-1" />
            </a>
            <a
              href="#form"
              className="group flex items-center justify-between px-6 py-5 border border-white/20 hover:border-white"
              style={{ fontWeight: 600 }}
            >
              <span className="flex items-center gap-3">
                <Send size={18} /> Send Structured Request
              </span>
              <ArrowRight size={18} className="transition group-hover:translate-x-1" />
            </a>

            <div className="mt-3 flex items-center justify-between text-[11px] uppercase tracking-[0.18em] text-neutral-500">
              <span>Mon–Sat · 8:00–18:00</span>
              <span>Reply ≤ 24h</span>
            </div>
          </div>
        </div>

        {/* Footer mini */}
        <div className="mt-20 pt-6 border-t border-white/10 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-[12px] text-neutral-500">
          <div>
            © 2026 PKGbattery · Hà Nội, Việt Nam · contact@pkgbattery.com
          </div>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white">Facebook</a>
            <a href="#" className="hover:text-white">YouTube</a>
            <a href="#" className="hover:text-white">LinkedIn</a>
            <a href="#" className="hover:text-white">Zalo</a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   STICKY RAILS
============================================================ */
export function StickyRail() {
  return (
    <div className="hidden lg:flex fixed right-5 top-1/2 -translate-y-1/2 z-40 flex-col gap-2">
      {[
        { icon: Phone, label: "Call", href: "tel:0989000000", accent: true },
        { icon: MessageCircle, label: "Zalo", href: "#" },
        { icon: Mail, label: "Email", href: "mailto:contact@pkgbattery.com" },
        { icon: ArrowUpRight, label: "Top", href: "#top" },
      ].map((b, i) => (
        <a
          key={i}
          href={b.href}
          className="group relative flex items-center"
        >
          <span
            className="w-11 h-11 flex items-center justify-center border transition"
            style={{
              background: b.accent ? RED : "white",
              color: b.accent ? "white" : "#0a0a0a",
              borderColor: b.accent ? RED : "rgba(0,0,0,0.15)",
            }}
          >
            <b.icon size={16} />
          </span>
          <span
            className="absolute right-full mr-2 px-3 py-2 bg-black text-white text-[11px] uppercase tracking-[0.18em] opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition whitespace-nowrap"
            style={{ fontWeight: 600 }}
          >
            {b.label}
          </span>
        </a>
      ))}
    </div>
  );
}

export function MobileBar() {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 grid grid-cols-3 border-t border-neutral-200 bg-white">
      <a
        href="tel:0989000000"
        className="flex flex-col items-center justify-center py-3 gap-1"
        style={{ background: RED, color: "white", fontWeight: 600 }}
      >
        <Phone size={16} />
        <span className="text-[11px] uppercase tracking-[0.18em]">Call</span>
      </a>
      <a href="#" className="flex flex-col items-center justify-center py-3 gap-1" style={{ fontWeight: 600 }}>
        <MessageCircle size={16} />
        <span className="text-[11px] uppercase tracking-[0.18em]">Zalo</span>
      </a>
      <a href="#form" className="flex flex-col items-center justify-center py-3 gap-1" style={{ fontWeight: 600 }}>
        <Send size={16} />
        <span className="text-[11px] uppercase tracking-[0.18em]">Form</span>
      </a>
    </div>
  );
}
