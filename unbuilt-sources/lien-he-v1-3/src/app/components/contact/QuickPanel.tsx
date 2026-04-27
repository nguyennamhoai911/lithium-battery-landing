import { Phone, MessageCircle, Mail, MapPin, ArrowUpRight } from "lucide-react";

const items = [
  {
    icon: <Phone className="size-5" />,
    label: "Sales Hotline",
    sub: "Hotline tư vấn",
    value: "0989 120 088",
    href: "tel:0989120088",
    micro: "Phù hợp khi cần báo giá hoặc tư vấn nhanh.",
    primary: true,
  },
  {
    icon: <MessageCircle className="size-5" />,
    label: "Zalo Support",
    sub: "Chat with PKGbattery",
    value: "zalo.me/pkgbattery",
    href: "https://zalo.me/0989120088",
    micro: "Phản hồi trung bình dưới 12 phút trong giờ làm việc.",
    primary: true,
  },
  {
    icon: <Mail className="size-5" />,
    label: "Official Email",
    sub: "Văn bản & đề xuất",
    value: "contact@pkgbattery.com",
    href: "mailto:contact@pkgbattery.com",
    micro: "Dùng cho hồ sơ doanh nghiệp, tài liệu, đề nghị chính thức.",
    primary: false,
  },
  {
    icon: <MapPin className="size-5" />,
    label: "Head Office",
    sub: "Hà Nội, Việt Nam",
    value: "View on map ↓",
    href: "#office-map",
    micro: "123 Thái Hà, Đống Đa — T2–T7, 8:00–18:00.",
    primary: false,
  },
];

export function QuickPanel() {
  return (
    <section className="relative -mt-16 px-6 lg:px-12 z-10">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid grid-cols-1 divide-y divide-neutral-200 border border-neutral-200 bg-white shadow-[0_30px_60px_-30px_rgba(0,0,0,0.18)] md:grid-cols-2 md:divide-x md:divide-y-0 lg:grid-cols-4">
          {items.map((it) => (
            <a
              key={it.label}
              href={it.href}
              className={`group relative flex flex-col gap-4 p-7 transition hover:bg-neutral-50 ${
                it.primary ? "lg:bg-white" : ""
              }`}
            >
              {it.primary && (
                <span className="absolute left-0 top-0 h-full w-[3px] bg-red-600" />
              )}
              <div className="flex items-center justify-between">
                <span
                  className={`inline-flex size-10 items-center justify-center border ${
                    it.primary
                      ? "border-red-600 text-red-600"
                      : "border-neutral-300 text-neutral-700"
                  }`}
                >
                  {it.icon}
                </span>
                <ArrowUpRight className="size-4 text-neutral-400 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-red-600" />
              </div>
              <div>
                <div className="text-[11px] uppercase tracking-[0.18em] text-neutral-500">
                  {it.label}
                </div>
                <div className="mt-1 text-neutral-500 text-sm">{it.sub}</div>
                <div className="mt-3 text-[1.35rem] tracking-tight text-neutral-900">
                  {it.value}
                </div>
              </div>
              <p className="mt-auto text-sm text-neutral-500 leading-relaxed">
                {it.micro}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
