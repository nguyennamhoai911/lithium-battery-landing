import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Send,
  Search,
  Building2,
  Wrench,
  ShieldCheck,
  Factory,
  Handshake,
  Tag,
  ArrowRight,
  ArrowUpRight,
  Clock,
  CheckCircle2,
  Upload,
  Plus,
  Minus,
  PlayCircle,
  FileText,
  Download,
  Facebook,
  Youtube,
  Linkedin,
  Navigation,
  ChevronRight,
  Activity,
  Zap,
} from "lucide-react";

const RED = "#E11D2A";

/* ============================================================
   SHARED — Tech grid background
============================================================ */
export function TechGrid({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 ${className}`}
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)",
        backgroundSize: "56px 56px",
        maskImage:
          "radial-gradient(ellipse at center, black 35%, transparent 80%)",
      }}
    />
  );
}

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
   SECTION 1 — Action Hub Header
============================================================ */
export function ActionHub() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-[#fafafa] border-b border-neutral-200"
    >
      <TechGrid />
      <div
        aria-hidden
        className="absolute -top-40 -right-40 w-[520px] h-[520px] rounded-full opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(225,29,42,0.18) 0%, transparent 70%)",
        }}
      />
      <div className="relative max-w-[1280px] mx-auto px-6 lg:px-10 pt-10 pb-20">
        {/* Top bar */}
        <div className="flex items-center justify-between pb-10 border-b border-neutral-200">
          <div className="flex items-center gap-3">
            <div
              className="w-9 h-9 rounded-sm flex items-center justify-center"
              style={{ background: "#0a0a0a" }}
            >
              <Zap size={18} color="#fff" strokeWidth={2.4} />
            </div>
            <div className="leading-tight">
              <div style={{ fontWeight: 700, letterSpacing: "0.02em" }}>
                PKG<span style={{ color: RED }}>battery</span>
              </div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-neutral-500">
                Contact Command Hub
              </div>
            </div>
          </div>
          <nav className="hidden md:flex gap-7 text-[13px] text-neutral-600">
            <a href="#routes" className="hover:text-black">Routes</a>
            <a href="#form" className="hover:text-black">Form</a>
            <a href="#dealers" className="hover:text-black">Dealers</a>
            <a href="#map" className="hover:text-black">Map</a>
            <a href="#faq" className="hover:text-black">FAQ</a>
          </nav>
          <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-neutral-200">
            <span
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ background: RED }}
            />
            <span className="text-[12px] text-neutral-700">
              Live: Sales online · Mon–Sat 8:00–18:00
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-12">
          {/* Left — Headline */}
          <div className="lg:col-span-7">
            <SectionLabel idx="01" label="Action Hub" />
            <h1
              className="mt-6 leading-[1.02] tracking-tight"
              style={{ fontSize: "clamp(40px, 5.4vw, 76px)", fontWeight: 700 }}
            >
              Connect with the <br />
              right{" "}
              <span style={{ color: RED }}>PKGbattery</span> team —
              <span className="text-neutral-400"> instantly.</span>
            </h1>
            <p className="mt-6 max-w-xl text-neutral-600 leading-relaxed">
              Whether you need pricing, dealer support, OEM/ODM consultation,
              warranty service or technical guidance, we route your request to
              the right team within business hours.
            </p>
            <p className="mt-2 max-w-xl text-neutral-500 italic text-[14px]">
              Kết nối đúng đội ngũ PKGbattery — báo giá, đại lý, OEM/ODM, bảo
              hành, hỗ trợ kỹ thuật.
            </p>

            {/* Quick action dock */}
            <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-3">
              {[
                { icon: Phone, label: "Call Sales", sub: "Quotation & urgent", href: "#" },
                { icon: MessageCircle, label: "Chat Zalo", sub: "Fast response", href: "#" },
                { icon: Send, label: "Send Request", sub: "Route to team", href: "#form" },
                { icon: MapPin, label: "Find Dealer", sub: "Across Vietnam", href: "#dealers" },
              ].map((q, i) => (
                <motion.a
                  key={q.label}
                  href={q.href}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.07, duration: 0.4 }}
                  className="group relative bg-white border border-neutral-200 px-4 py-4 hover:border-black transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <q.icon size={18} />
                    <ArrowUpRight
                      size={16}
                      className="opacity-0 group-hover:opacity-100 transition"
                    />
                  </div>
                  <div className="mt-6 leading-tight">
                    <div style={{ fontWeight: 600 }}>{q.label}</div>
                    <div className="text-[12px] text-neutral-500 mt-1">
                      {q.sub}
                    </div>
                  </div>
                  <span
                    className="absolute left-0 bottom-0 h-[2px] w-0 group-hover:w-full transition-all"
                    style={{ background: RED }}
                  />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Right — Live Contact Panel */}
          <div className="lg:col-span-5">
            <div className="relative bg-black text-white p-7 lg:p-8 overflow-hidden">
              <div
                aria-hidden
                className="absolute -top-24 -right-24 w-72 h-72 rounded-full blur-3xl opacity-50"
                style={{
                  background:
                    "radial-gradient(circle, rgba(225,29,42,0.55) 0%, transparent 70%)",
                }}
              />
              <div className="relative">
                <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.22em] text-neutral-400">
                  <span>Live Contact Panel</span>
                  <span className="flex items-center gap-2">
                    <span
                      className="w-2 h-2 rounded-full animate-pulse"
                      style={{ background: RED }}
                    />
                    Online
                  </span>
                </div>

                <div className="mt-8">
                  <div className="text-[11px] tracking-[0.18em] uppercase text-neutral-400">
                    Sales Hotline
                  </div>
                  <div
                    className="mt-2"
                    style={{ fontSize: 42, fontWeight: 700, letterSpacing: "-0.02em" }}
                  >
                    0989 <span style={{ color: RED }}>XXX</span> XXX
                  </div>
                  <a
                    href="tel:0989000000"
                    className="mt-3 inline-flex items-center gap-2 px-5 py-3 text-[13px]"
                    style={{ background: RED, color: "white", fontWeight: 600 }}
                  >
                    <Phone size={15} /> Call Sales Now
                  </a>
                </div>

                <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-5">
                  <Stat label="Zalo Support" value="Chat now" iconAccent />
                  <Stat label="Email" value="contact@pkgbattery.com" />
                  <Stat label="Business hours" value="Mon–Sat · 8:00–18:00" />
                  <Stat label="Response promise" value="≤ 24 business hrs" />
                </div>

                <div className="mt-8 pt-5 border-t border-white/10 flex items-center justify-between text-[11px] text-neutral-400 uppercase tracking-[0.18em]">
                  <span>Region · Vietnam</span>
                  <span className="flex items-center gap-2">
                    <Activity size={12} /> Hanoi HQ
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-3 grid grid-cols-3 gap-3 text-[11px] uppercase tracking-[0.16em] text-neutral-500">
              <div className="bg-white border border-neutral-200 px-3 py-2.5">
                <span className="block text-neutral-900" style={{ fontWeight: 600 }}>
                  8
                </span>
                Dealers VN
              </div>
              <div className="bg-white border border-neutral-200 px-3 py-2.5">
                <span className="block text-neutral-900" style={{ fontWeight: 600 }}>
                  24h
                </span>
                Reply
              </div>
              <div className="bg-white border border-neutral-200 px-3 py-2.5">
                <span className="block text-neutral-900" style={{ fontWeight: 600 }}>
                  OEM/ODM
                </span>
                Capable
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({
  label,
  value,
  iconAccent,
}: {
  label: string;
  value: string;
  iconAccent?: boolean;
}) {
  return (
    <div>
      <div className="text-[10px] tracking-[0.18em] uppercase text-neutral-400">
        {label}
      </div>
      <div
        className="mt-1 text-[14px]"
        style={{ color: iconAccent ? RED : "white", fontWeight: 500 }}
      >
        {value}
      </div>
    </div>
  );
}

/* ============================================================
   SECTION 2 — Contact Routing Matrix
============================================================ */
const ROUTES = [
  {
    id: "price",
    label: "Price & Bulk Order",
    tag: "Fastest",
    icon: Tag,
    desc: "For enterprises needing quotations, large quantity orders or projects.",
    channel: "Call Sales + Quote Form",
    info: "Product type · Quantity · Application",
  },
  {
    id: "dealer",
    label: "Dealer Partnership",
    tag: "Dealer",
    icon: Handshake,
    desc: "For distributors and stores joining the PKGbattery dealer network.",
    channel: "Dealer Form + follow-up call",
    info: "Province · Business model · Experience",
  },
  {
    id: "oem",
    label: "OEM / ODM Engineering",
    tag: "Technical",
    icon: Factory,
    desc: "For projects requiring custom-designed battery packs.",
    channel: "Technical Form + file upload",
    info: "Voltage · Capacity · Cell type · Application",
  },
  {
    id: "tech",
    label: "Technical Support",
    tag: "Support",
    icon: Wrench,
    desc: "For installation help, compatibility checks and technical issues.",
    channel: "Support Form + Zalo",
    info: "Product · Issue · Image / video",
  },
  {
    id: "warranty",
    label: "Warranty Service",
    tag: "After-sales",
    icon: ShieldCheck,
    desc: "For warranty cases, product defects, serial verification.",
    channel: "Warranty Form",
    info: "Serial · Purchase date · Issue media",
  },
  {
    id: "biz",
    label: "Business Partnership",
    tag: "B2B",
    icon: Building2,
    desc: "For commercial collaboration, supply, media and partnerships.",
    channel: "Email + inquiry form",
    info: "Company · Proposal · Message",
  },
];

export function RoutingMatrix() {
  const [active, setActive] = useState("price");
  const current = ROUTES.find((r) => r.id === active)!;

  return (
    <section
      id="routes"
      className="relative bg-white border-b border-neutral-200"
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 py-24">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div>
            <SectionLabel idx="02" label="Routing Matrix" />
            <h2
              className="mt-5 tracking-tight"
              style={{ fontSize: "clamp(30px, 3.6vw, 50px)", fontWeight: 700 }}
            >
              Choose the fastest route <br />
              for your request.
            </h2>
            <p className="mt-3 text-neutral-600 italic text-[14px]">
              Chọn tuyến liên hệ phù hợp nhất với nhu cầu của bạn.
            </p>
          </div>
          <div className="flex items-center gap-2 text-[11px] tracking-[0.18em] uppercase text-neutral-500">
            <span
              className="inline-block w-2 h-2 rounded-full"
              style={{ background: RED }}
            />
            6 active routes
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left — route list */}
          <div className="lg:col-span-5 space-y-2">
            {ROUTES.map((r) => {
              const isActive = r.id === active;
              return (
                <button
                  key={r.id}
                  onClick={() => setActive(r.id)}
                  className="w-full text-left group relative flex items-center gap-4 px-5 py-4 border transition-all"
                  style={{
                    background: isActive ? "#0a0a0a" : "white",
                    color: isActive ? "white" : "#0a0a0a",
                    borderColor: isActive ? "#0a0a0a" : "rgba(0,0,0,0.1)",
                  }}
                >
                  <div
                    className="w-9 h-9 flex items-center justify-center"
                    style={{
                      background: isActive ? RED : "#f4f4f4",
                      color: isActive ? "white" : "#0a0a0a",
                    }}
                  >
                    <r.icon size={16} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span style={{ fontWeight: 600 }}>{r.label}</span>
                      <span
                        className="text-[10px] tracking-[0.18em] uppercase px-1.5 py-0.5"
                        style={{
                          background: isActive
                            ? "rgba(255,255,255,0.1)"
                            : "#f4f4f4",
                          color: isActive ? "white" : "#717171",
                        }}
                      >
                        {r.tag}
                      </span>
                    </div>
                    <div
                      className="text-[12px] mt-0.5"
                      style={{
                        color: isActive
                          ? "rgba(255,255,255,0.6)"
                          : "#737373",
                      }}
                    >
                      {r.channel}
                    </div>
                  </div>
                  <ChevronRight
                    size={16}
                    style={{
                      color: isActive ? RED : "#a3a3a3",
                      transition: "transform 250ms",
                      transform: isActive ? "translateX(4px)" : "none",
                    }}
                  />
                </button>
              );
            })}
          </div>

          {/* Right — central panel */}
          <div className="lg:col-span-7">
            <div className="relative bg-[#fafafa] border border-neutral-200 p-8 lg:p-10 min-h-[420px] overflow-hidden">
              <TechGrid />
              <div className="relative">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current.id}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-neutral-500">
                      <span
                        className="w-6 h-px"
                        style={{ background: RED }}
                      />
                      Route detail · {current.tag}
                    </div>
                    <h3
                      className="mt-5"
                      style={{
                        fontSize: 36,
                        fontWeight: 700,
                        letterSpacing: "-0.02em",
                      }}
                    >
                      {current.label}
                    </h3>
                    <p className="mt-4 text-neutral-600 max-w-xl leading-relaxed">
                      {current.desc}
                    </p>

                    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="bg-white border border-neutral-200 p-5">
                        <div className="text-[10px] uppercase tracking-[0.18em] text-neutral-500">
                          Recommended channel
                        </div>
                        <div className="mt-2" style={{ fontWeight: 600 }}>
                          {current.channel}
                        </div>
                      </div>
                      <div className="bg-white border border-neutral-200 p-5">
                        <div className="text-[10px] uppercase tracking-[0.18em] text-neutral-500">
                          Required info
                        </div>
                        <div className="mt-2" style={{ fontWeight: 600 }}>
                          {current.info}
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 flex flex-wrap gap-3">
                      <a
                        href="#form"
                        className="inline-flex items-center gap-2 px-5 py-3 text-[13px]"
                        style={{ background: RED, color: "white", fontWeight: 600 }}
                      >
                        Start this route <ArrowRight size={14} />
                      </a>
                      <a
                        href="tel:0989000000"
                        className="inline-flex items-center gap-2 px-5 py-3 text-[13px] border border-neutral-300 hover:border-black"
                        style={{ fontWeight: 600 }}
                      >
                        <Phone size={14} /> Call Sales
                      </a>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   SECTION 3 — Priority Contact Channels
============================================================ */
export function PriorityChannels() {
  return (
    <section className="relative bg-[#fafafa] border-b border-neutral-200">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 py-24">
        <div className="max-w-2xl">
          <SectionLabel idx="03" label="Priority Channels" />
          <h2
            className="mt-5 tracking-tight"
            style={{ fontSize: "clamp(30px, 3.6vw, 50px)", fontWeight: 700 }}
          >
            Need fast support? <br /> Start here.
          </h2>
          <p className="mt-3 text-neutral-600 italic text-[14px]">
            Cần hỗ trợ nhanh? Bắt đầu tại đây.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-5">
          {/* Hotline — large */}
          <div
            className="lg:col-span-7 relative overflow-hidden p-10 lg:p-12 text-white"
            style={{ background: "#0a0a0a" }}
          >
            <div
              aria-hidden
              className="absolute right-0 bottom-0 w-[500px] h-[500px] rounded-full blur-3xl opacity-40"
              style={{
                background:
                  "radial-gradient(circle, rgba(225,29,42,0.45), transparent 70%)",
              }}
            />
            <div className="relative">
              <div className="flex items-center gap-3 text-[11px] tracking-[0.22em] uppercase text-neutral-400">
                <Phone size={14} /> Sales Hotline
              </div>
              <div
                className="mt-6"
                style={{ fontSize: 64, fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1 }}
              >
                0989 <span style={{ color: RED }}>XXX</span> XXX
              </div>
              <p className="mt-6 max-w-md text-neutral-300">
                Best for quotation, urgent project discussion and product
                consultation. A specialist picks up within business hours.
              </p>
              <a
                href="tel:0989000000"
                className="mt-8 inline-flex items-center gap-2 px-6 py-3.5"
                style={{ background: RED, color: "white", fontWeight: 600 }}
              >
                Call Sales Now <ArrowRight size={16} />
              </a>
              <div className="mt-10 grid grid-cols-3 gap-6 max-w-md text-[11px] uppercase tracking-[0.18em] text-neutral-500">
                <div>
                  <span className="text-white block" style={{ fontWeight: 600 }}>
                    Mon–Sat
                  </span>
                  Open
                </div>
                <div>
                  <span className="text-white block" style={{ fontWeight: 600 }}>
                    8 → 18h
                  </span>
                  Hours
                </div>
                <div>
                  <span className="text-white block" style={{ fontWeight: 600 }}>
                    Vietnam
                  </span>
                  Region
                </div>
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-5">
            <div className="bg-white border border-neutral-200 p-7 hover:border-black transition group">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-[11px] tracking-[0.22em] uppercase text-neutral-500">
                  <MessageCircle size={14} /> Zalo Support
                </div>
                <ArrowUpRight
                  size={16}
                  className="opacity-0 group-hover:opacity-100 transition"
                />
              </div>
              <p className="mt-5 text-neutral-700">
                Chat with PKGbattery for quick product questions, photos,
                documents and follow-up support.
              </p>
              <a
                href="#"
                className="mt-5 inline-flex items-center gap-2 px-4 py-2.5 border border-neutral-300 hover:border-black"
                style={{ fontWeight: 600, fontSize: 13 }}
              >
                Open Zalo Chat <ArrowRight size={14} />
              </a>
            </div>

            <div className="grid grid-cols-2 gap-5">
              <div className="bg-white border border-neutral-200 p-5">
                <div className="flex items-center gap-2 text-[11px] tracking-[0.22em] uppercase text-neutral-500">
                  <Mail size={13} /> Email
                </div>
                <div className="mt-4 text-[14px]" style={{ fontWeight: 600 }}>
                  contact@<br />pkgbattery.com
                </div>
                <div className="mt-3 text-[12px] text-neutral-500">
                  Formal docs, proposals, technical files.
                </div>
              </div>
              <div className="bg-white border border-neutral-200 p-5">
                <div className="flex items-center gap-2 text-[11px] tracking-[0.22em] uppercase text-neutral-500">
                  <MapPin size={13} /> Office
                </div>
                <div className="mt-4 text-[14px]" style={{ fontWeight: 600 }}>
                  Hà Nội,<br />Việt Nam
                </div>
                <a
                  href="#map"
                  className="mt-3 inline-flex items-center gap-1 text-[12px]"
                  style={{ color: RED, fontWeight: 600 }}
                >
                  View directions <ArrowRight size={12} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   SECTION 4+5 — Guided Inquiry + Dynamic Form Workspace
============================================================ */
const INQUIRY_TYPES = [
  { id: "quote", label: "Quote", vi: "Báo giá", icon: Tag },
  { id: "dealer", label: "Dealer", vi: "Đại lý", icon: Handshake },
  { id: "oem", label: "OEM/ODM", vi: "OEM/ODM", icon: Factory },
  { id: "tech", label: "Technical", vi: "Kỹ thuật", icon: Wrench },
  { id: "warranty", label: "Warranty", vi: "Bảo hành", icon: ShieldCheck },
  { id: "other", label: "Other", vi: "Khác", icon: Send },
];

export function InquiryFlow() {
  const [type, setType] = useState("quote");
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="form" className="relative bg-white border-b border-neutral-200">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left header */}
          <div className="lg:col-span-5">
            <SectionLabel idx="04" label="Guided Inquiry Flow" />
            <h2
              className="mt-5 tracking-tight"
              style={{ fontSize: "clamp(30px, 3.4vw, 48px)", fontWeight: 700 }}
            >
              Send a structured request.
            </h2>
            <p className="mt-4 text-neutral-600 leading-relaxed max-w-md">
              A few focused details help our team respond faster and more
              accurately. Choose your request type — the form adapts to ask
              only what's relevant.
            </p>

            {/* Stepper */}
            <ol className="mt-10 space-y-4">
              {[
                { n: "01", t: "Choose request type", d: "Quote · Dealer · OEM/ODM · Technical · Warranty · Other" },
                { n: "02", t: "Add details", d: "Adaptive fields based on your route" },
                { n: "03", t: "Receive response", d: "Within 24 business hours" },
              ].map((s, i) => (
                <li key={s.n} className="flex gap-4">
                  <div
                    className="w-9 h-9 flex items-center justify-center flex-shrink-0 text-[12px]"
                    style={{
                      background: i === 0 ? "#0a0a0a" : "white",
                      color: i === 0 ? "white" : "#0a0a0a",
                      border: "1px solid #0a0a0a",
                      fontWeight: 600,
                    }}
                  >
                    {s.n}
                  </div>
                  <div>
                    <div style={{ fontWeight: 600 }}>{s.t}</div>
                    <div className="text-[13px] text-neutral-500 mt-0.5">
                      {s.d}
                    </div>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-10 bg-[#fafafa] border border-neutral-200 p-5">
              <div className="text-[11px] uppercase tracking-[0.18em] text-neutral-500">
                What happens next?
              </div>
              <ul className="mt-3 space-y-2 text-[13px] text-neutral-700">
                <li className="flex gap-2">
                  <CheckCircle2 size={14} style={{ color: RED }} className="mt-0.5 flex-shrink-0" />
                  We capture and verify your contact details
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 size={14} style={{ color: RED }} className="mt-0.5 flex-shrink-0" />
                  Routed to the right specialist team
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 size={14} style={{ color: RED }} className="mt-0.5 flex-shrink-0" />
                  Initial response by phone, Zalo or email
                </li>
              </ul>
            </div>
          </div>

          {/* Right — Workspace */}
          <div className="lg:col-span-7">
            <div className="border border-neutral-200">
              {/* Side rail / inquiry selector */}
              <div className="grid grid-cols-3 sm:grid-cols-6 border-b border-neutral-200">
                {INQUIRY_TYPES.map((t) => {
                  const isActive = t.id === type;
                  return (
                    <button
                      key={t.id}
                      onClick={() => {
                        setType(t.id);
                        setSubmitted(false);
                      }}
                      className="relative px-3 py-4 text-[12px] flex flex-col items-center gap-1.5 transition"
                      style={{
                        background: isActive ? "#0a0a0a" : "white",
                        color: isActive ? "white" : "#525252",
                      }}
                    >
                      <t.icon size={16} />
                      <span style={{ fontWeight: 600 }}>{t.label}</span>
                      {isActive && (
                        <span
                          className="absolute left-0 right-0 bottom-0 h-[2px]"
                          style={{ background: RED }}
                        />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Form area */}
              <div className="p-7 lg:p-9 bg-white">
                <AnimatePresence mode="wait">
                  {submitted ? (
                    <SuccessState key="success" onReset={() => setSubmitted(false)} />
                  ) : (
                    <motion.form
                      key={type}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.28 }}
                      onSubmit={(e) => {
                        e.preventDefault();
                        setSubmitted(true);
                      }}
                    >
                      <DynamicForm type={type} />
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  optional,
  helper,
  children,
}: {
  label: string;
  optional?: boolean;
  helper?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-[12px]" style={{ fontWeight: 600 }}>
          {label}
          {optional && (
            <span className="ml-2 text-neutral-400" style={{ fontWeight: 400 }}>
              optional
            </span>
          )}
        </span>
      </div>
      {children}
      {helper && (
        <div className="mt-1 text-[11px] text-neutral-500">{helper}</div>
      )}
    </label>
  );
}

const inputCls =
  "w-full bg-white border border-neutral-300 px-3.5 py-2.5 text-[14px] focus:outline-none focus:border-black transition";

function DynamicForm({ type }: { type: string }) {
  const titleMap: Record<string, { title: string; cta: string; side: string }> = {
    quote: {
      title: "Request a Product Quote",
      cta: "Send Quote Request",
      side: "For urgent pricing, call our sales hotline directly.",
    },
    dealer: {
      title: "Apply to Become a PKGbattery Dealer",
      cta: "Apply for Dealer Program",
      side: "Our team will review your region and contact you about dealer policy.",
    },
    oem: {
      title: "Start an OEM/ODM Battery Project",
      cta: "Request OEM/ODM Consultation",
      side: "Unsure about specs? Describe your application — we'll suggest the next step.",
    },
    tech: {
      title: "Request Technical Support",
      cta: "Send Technical Request",
      side: "Attach images or video to speed up diagnosis.",
    },
    warranty: {
      title: "Submit Warranty Request",
      cta: "Submit Warranty Case",
      side: "Have your serial number and purchase channel ready.",
    },
    other: {
      title: "Send a General Business Inquiry",
      cta: "Send Inquiry",
      side: "We respond to partnership and media requests within 2 business days.",
    },
  };
  const meta = titleMap[type];

  return (
    <div>
      <h3 style={{ fontSize: 22, fontWeight: 700 }}>{meta.title}</h3>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label="Full name">
          <input className={inputCls} placeholder="Nguyễn Văn A" required />
        </Field>
        <Field label="Phone number">
          <input className={inputCls} placeholder="09xx xxx xxx" required />
        </Field>
        <Field label="Email">
          <input className={inputCls} type="email" placeholder="you@company.com" required />
        </Field>
        <Field label="Company">
          <input className={inputCls} placeholder="Company / store name" />
        </Field>
      </div>

      {/* Type-specific */}
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {type === "quote" && (
          <>
            <Field label="Product category">
              <select className={inputCls}>
                <option>Lithium Battery</option>
                <option>Energy Storage Battery</option>
                <option>Golf Cart Battery</option>
                <option>EV Battery</option>
                <option>UPS Battery</option>
                <option>Custom Battery Pack</option>
              </select>
            </Field>
            <Field label="Estimated quantity">
              <input className={inputCls} placeholder="e.g. 50 packs / 200 kWh" />
            </Field>
            <Field label="Application">
              <select className={inputCls}>
                <option>Solar storage</option>
                <option>EV</option>
                <option>Golf cart</option>
                <option>UPS</option>
                <option>Industrial equipment</option>
                <option>Other</option>
              </select>
            </Field>
            <Field label="Preferred contact method">
              <select className={inputCls}>
                <option>Phone</option>
                <option>Zalo</option>
                <option>Email</option>
              </select>
            </Field>
          </>
        )}
        {type === "dealer" && (
          <>
            <Field label="Province / city">
              <input className={inputCls} placeholder="e.g. Hà Nội" />
            </Field>
            <Field label="Current sales channel">
              <select className={inputCls}>
                <option>Showroom</option>
                <option>Online</option>
                <option>Project sales</option>
                <option>Technical service</option>
                <option>Other</option>
              </select>
            </Field>
            <Field label="Experience in battery / energy">
              <select className={inputCls}>
                <option>Under 1 year</option>
                <option>1–3 years</option>
                <option>Over 3 years</option>
              </select>
            </Field>
            <Field label="Expected market area">
              <input className={inputCls} placeholder="Region / provinces" />
            </Field>
          </>
        )}
        {type === "oem" && (
          <>
            <Field label="Battery chemistry">
              <select className={inputCls}>
                <option>LiFePO4</option>
                <option>NMC</option>
                <option>LTO</option>
                <option>Not sure</option>
              </select>
            </Field>
            <Field label="Voltage requirement">
              <input className={inputCls} placeholder="e.g. 48V / 51.2V" />
            </Field>
            <Field label="Capacity requirement">
              <input className={inputCls} placeholder="e.g. 100Ah / 5kWh" />
            </Field>
            <Field label="Application / device type">
              <input className={inputCls} placeholder="e.g. AGV, ESS cabinet" />
            </Field>
            <Field label="Sample / production quantity" optional>
              <input className={inputCls} placeholder="e.g. 5 samples / 500 units" />
            </Field>
            <Field label="Upload technical file" optional helper="PDF, DWG, JPG · max 20MB">
              <div className={`${inputCls} flex items-center gap-2 text-neutral-500 cursor-pointer`}>
                <Upload size={14} /> Choose file
              </div>
            </Field>
          </>
        )}
        {type === "tech" && (
          <>
            <Field label="Product model">
              <input className={inputCls} placeholder="e.g. PKG-LFP-48-100" />
            </Field>
            <Field label="Serial number" optional>
              <input className={inputCls} placeholder="SN…" />
            </Field>
            <Field label="Issue category">
              <select className={inputCls}>
                <option>Installation</option>
                <option>Charging</option>
                <option>Compatibility</option>
                <option>Performance</option>
                <option>Other</option>
              </select>
            </Field>
            <Field label="Preferred callback time">
              <input className={inputCls} placeholder="e.g. Mon afternoon" />
            </Field>
          </>
        )}
        {type === "warranty" && (
          <>
            <Field label="Product model">
              <input className={inputCls} placeholder="Model" />
            </Field>
            <Field label="Serial number">
              <input className={inputCls} placeholder="SN…" />
            </Field>
            <Field label="Purchase date">
              <input className={inputCls} type="date" />
            </Field>
            <Field label="Purchase channel">
              <select className={inputCls}>
                <option>PKGbattery</option>
                <option>Authorized dealer</option>
                <option>Other</option>
              </select>
            </Field>
            <Field label="Dealer name" optional>
              <input className={inputCls} placeholder="If applicable" />
            </Field>
            <Field label="Upload product / serial photo" optional helper="JPG, PNG, MP4 · max 50MB">
              <div className={`${inputCls} flex items-center gap-2 text-neutral-500 cursor-pointer`}>
                <Upload size={14} /> Choose file
              </div>
            </Field>
          </>
        )}
        {type === "other" && (
          <Field label="Inquiry type">
            <select className={inputCls}>
              <option>Partnership</option>
              <option>Media</option>
              <option>Procurement</option>
              <option>Recruitment</option>
              <option>Other</option>
            </select>
          </Field>
        )}
      </div>

      <div className="mt-4">
        <Field label="Message" helper="Tell us about your application, quantity, timeline.">
          <textarea
            className={`${inputCls} min-h-[110px] resize-y`}
            placeholder="Briefly describe your need…"
          />
        </Field>
      </div>

      <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <p className="text-[11px] text-neutral-500 max-w-md">
          By submitting, you agree to PKGbattery contacting you about this
          request. Your data is protected per our privacy policy.
        </p>
        <button
          type="submit"
          className="inline-flex items-center gap-2 px-6 py-3.5"
          style={{ background: RED, color: "white", fontWeight: 600 }}
        >
          {meta.cta} <ArrowRight size={15} />
        </button>
      </div>

      <div className="mt-5 text-[11px] uppercase tracking-[0.18em] text-neutral-500 border-t border-neutral-200 pt-4">
        Side note · {meta.side}
      </div>
    </div>
  );
}

function SuccessState({ onReset }: { onReset: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="py-6"
    >
      <div
        className="w-12 h-12 flex items-center justify-center"
        style={{ background: RED }}
      >
        <CheckCircle2 size={22} color="white" />
      </div>
      <h3 className="mt-6" style={{ fontSize: 26, fontWeight: 700 }}>
        Request received. Our team will follow up soon.
      </h3>
      <p className="mt-3 text-neutral-600 max-w-lg">
        Your inquiry has been routed to the relevant PKGbattery team. For
        urgent requests, please call sales or chat via Zalo.
      </p>
      <div className="mt-7 flex flex-wrap gap-3">
        <a href="tel:0989000000" className="inline-flex items-center gap-2 px-5 py-3 text-[13px]" style={{ background: RED, color: "white", fontWeight: 600 }}>
          <Phone size={14} /> Call Sales Now
        </a>
        <a href="#" className="inline-flex items-center gap-2 px-5 py-3 text-[13px] border border-neutral-300 hover:border-black" style={{ fontWeight: 600 }}>
          <MessageCircle size={14} /> Chat Zalo
        </a>
        <a href="#dealers" className="inline-flex items-center gap-2 px-5 py-3 text-[13px] border border-neutral-300 hover:border-black" style={{ fontWeight: 600 }}>
          <MapPin size={14} /> View Dealer Network
        </a>
        <button
          onClick={onReset}
          className="inline-flex items-center gap-2 px-5 py-3 text-[13px] text-neutral-500 hover:text-black"
        >
          Send another request
        </button>
      </div>
    </motion.div>
  );
}

/* ============================================================
   SECTION 6 — Response Process Timeline
============================================================ */
export function ProcessTimeline() {
  const steps = [
    { t: "Request Received", d: "We capture your contact details, request type and key technical information." },
    { t: "Routed to the Right Team", d: "Sales, dealer development, technical support or warranty team receives your request." },
    { t: "Initial Response", d: "PKGbattery contacts you by phone, Zalo or email depending on your preference." },
    { t: "Solution / Next Step", d: "You receive quotation, technical consultation, dealer policy or warranty guidance." },
  ];
  return (
    <section className="relative bg-[#fafafa] border-b border-neutral-200">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 py-24">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div>
            <SectionLabel idx="05" label="Response Process" />
            <h2
              className="mt-5 tracking-tight"
              style={{ fontSize: "clamp(30px, 3.4vw, 48px)", fontWeight: 700 }}
            >
              What happens after you contact us.
            </h2>
          </div>
          <div className="flex items-center gap-2 text-[11px] tracking-[0.18em] uppercase text-neutral-500">
            <Clock size={13} /> Typical reply ≤ 24h
          </div>
        </div>

        <div className="mt-14 relative">
          <div
            aria-hidden
            className="hidden lg:block absolute top-7 left-0 right-0 h-px"
            style={{
              background:
                "linear-gradient(90deg, rgba(0,0,0,0.15), rgba(0,0,0,0.15))",
            }}
          />
          <div
            aria-hidden
            className="hidden lg:block absolute top-7 left-0 h-px"
            style={{ background: RED, width: "100%" }}
          />
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {steps.map((s, i) => (
              <div key={s.t} className="relative">
                <div
                  className="w-14 h-14 flex items-center justify-center text-[14px] relative z-10"
                  style={{
                    background: "white",
                    border: "1px solid #0a0a0a",
                    fontWeight: 700,
                  }}
                >
                  0{i + 1}
                </div>
                <div className="mt-5" style={{ fontSize: 18, fontWeight: 700 }}>
                  {s.t}
                </div>
                <p className="mt-2 text-[14px] text-neutral-600 leading-relaxed">
                  {s.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
