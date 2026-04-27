import { useState } from "react";
import { Search, X, ChevronDown, Download, Eye, Link2, Headphones, FileText, List, Rows3, Table2, Loader2, ArrowRight } from "lucide-react";

type Doc = {
  id: string;
  label: string;
  title: string;
  desc: string;
  tags: string[];
  fileType: string;
  size: string;
  updated: string;
  version: string;
  category: string;
  voltage?: string;
  primaryAction: string;
  secondaryAction: string;
};

const DOCS: Doc[] = [
  {
    id: "d1",
    label: "DATASHEET",
    title: "Datasheet pin lithium xe nâng 48V 200Ah",
    desc: "Thông số điện, đặc tính phóng nạp, tham số sạc, giao tiếp BMS và kích thước cơ khí cho ứng dụng xe nâng công nghiệp 48V.",
    tags: ["Pin xe nâng", "48V", "200Ah", "Giao tiếp CAN"],
    fileType: "PDF", size: "2.8 MB", updated: "04/2026", version: "1.4",
    category: "Pin xe nâng", voltage: "48V",
    primaryAction: "Tải xuống PDF", secondaryAction: "Xem trước",
  },
  {
    id: "d2",
    label: "MANUAL",
    title: "Manual lắp đặt và vận hành pin AGV",
    desc: "Quy trình lắp đặt, sơ đồ đấu nối, kiểm tra an toàn, hướng dẫn vận hành và bảng mã lỗi cho hệ thống pin AGV lithium.",
    tags: ["AGV", "Lắp đặt", "Vận hành", "Mã lỗi"],
    fileType: "PDF", size: "3.6 MB", updated: "03/2026", version: "2.1",
    category: "Pin AGV / Robot",
    primaryAction: "Tải manual", secondaryAction: "Liên hệ hỗ trợ",
  },
  {
    id: "d3",
    label: "PHẦN MỀM",
    title: "PKG BMS Configurator v3.2",
    desc: "Phần mềm cấu hình giám sát điện áp cell, nhiệt độ, giới hạn dòng, trạng thái giao tiếp và tham số bảo vệ cho các BMS PKG tương thích.",
    tags: ["BMS", "Phần mềm", "Windows", "CAN", "RS485"],
    fileType: "ZIP", size: "28 MB", updated: "02/2026", version: "3.2",
    category: "BMS & phần mềm",
    primaryAction: "Tải phần mềm", secondaryAction: "Xem ghi chú phiên bản",
  },
  {
    id: "d4",
    label: "CATALOGUE",
    title: "Catalogue dòng sản phẩm pin xe nâng 2026",
    desc: "Tổng quan toàn bộ dòng pin xe nâng PKG: cấu hình điện áp, dung lượng, ứng dụng và lợi thế kỹ thuật cốt lõi.",
    tags: ["Catalogue", "Pin xe nâng", "2026"],
    fileType: "PDF", size: "4.6 MB", updated: "04/2026", version: "1.0",
    category: "Pin xe nâng", voltage: "Đa cấp",
    primaryAction: "Tải catalogue", secondaryAction: "Xem trước",
  },
  {
    id: "d5",
    label: "FIRMWARE",
    title: "Firmware dòng pin xe nâng v2.0",
    desc: "Cập nhật firmware cải thiện ổn định giao tiếp với charger, ngưỡng bảo vệ nhiệt và báo cáo CAN cho mã cảnh báo.",
    tags: ["Firmware", "48V", "80V", "Pin xe nâng"],
    fileType: "ZIP", size: "5.4 MB", updated: "04/2026", version: "2.0",
    category: "Pin xe nâng", voltage: "48V / 80V",
    primaryAction: "Tải firmware", secondaryAction: "Xem ghi chú phiên bản",
  },
  {
    id: "d6",
    label: "CHỨNG CHỈ",
    title: "UN38.3 Test Summary — dòng pin xe nâng",
    desc: "Bản tóm tắt kết quả kiểm định UN38.3 phục vụ vận chuyển, kiểm tra an toàn và phê duyệt mua hàng cho dòng pin xe nâng.",
    tags: ["UN38.3", "Vận chuyển", "Pin xe nâng"],
    fileType: "PDF", size: "1.2 MB", updated: "01/2026", version: "1.0",
    category: "Pin xe nâng",
    primaryAction: "Tải chứng chỉ", secondaryAction: "Xem trước",
  },
];

const FILTERS = {
  product: ["Pin xe nâng", "Pin xe điện", "Pin AGV / Robot", "Pin ESS", "Trạm sạc", "BMS / Phần mềm", "OEM / ODM"],
  doctype: ["Catalogue", "Datasheet", "Manual", "Hướng dẫn lắp đặt", "Phần mềm BMS", "Firmware", "Chứng chỉ", "Phiếu an toàn (SDS)", "Báo cáo kiểm định"],
  voltage: ["24V", "36V", "48V", "72V", "80V", "96V", "Tùy chỉnh"],
  application: ["Logistics kho vận", "Xếp dỡ vật liệu", "AGV / Tự động hóa", "Di chuyển điện", "Solar / ESS", "Backup công nghiệp", "Tích hợp OEM"],
  language: ["Tiếng Anh", "Tiếng Việt", "Tiếng Trung"],
  period: ["Mới cập nhật", "2026", "2025", "Lưu trữ cũ"],
};

function FilterGroup({ title, items, active, toggle }: { title: string; items: string[]; active: string[]; toggle: (s: string) => void }) {
  const [open, setOpen] = useState(true);
  return (
    <div className="border-t border-black/10 py-5">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between mb-4 group">
        <span className="text-[12px] tracking-[0.2em] uppercase text-black/70">{title}</span>
        <ChevronDown className={`w-4 h-4 text-black/50 transition-transform ${open ? "" : "-rotate-90"}`} />
      </button>
      {open && (
        <div className="space-y-2.5">
          {items.map((it) => {
            const on = active.includes(it);
            return (
              <button
                key={it}
                onClick={() => toggle(it)}
                className={`w-full flex items-center gap-3 text-left text-[13px] group ${
                  on ? "text-black" : "text-black/65 hover:text-black"
                }`}
              >
                <span className={`w-4 h-4 border flex items-center justify-center transition-colors ${on ? "bg-black border-black" : "border-black/30 group-hover:border-black"}`}>
                  {on && <span className="w-1.5 h-1.5 bg-[#E11D2E]" />}
                </span>
                <span className={`${on ? "border-b border-[#E11D2E]" : ""}`}>{it}</span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

export function Library() {
  const [active, setActive] = useState<string[]>(["Pin xe nâng", "Datasheet", "48V"]);
  const [view, setView] = useState<"list" | "compact" | "table">("list");
  const [loading, setLoading] = useState(false);
  const [showSheet, setShowSheet] = useState(false);

  const toggle = (s: string) => {
    setLoading(true);
    setTimeout(() => setLoading(false), 700);
    setActive((arr) => (arr.includes(s) ? arr.filter((a) => a !== s) : [...arr, s]));
  };

  return (
    <section id="library" className="relative py-24 lg:py-32 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-5">
              <span className="text-[#E11D2E] text-[12px] tracking-[0.2em]">03 / THƯ VIỆN TÀI LIỆU</span>
              <div className="w-12 h-px bg-[#E11D2E]" />
            </div>
            <h2 className="text-[34px] lg:text-[44px] leading-[1.1] tracking-[-0.02em] mb-4" style={{ fontWeight: 500 }}>
              Toàn bộ tài liệu kỹ thuật
            </h2>
            <p className="text-[15px] leading-relaxed text-black/60 max-w-xl">
              Duyệt tài liệu chính thức của PKG Battery theo loại sản phẩm, điện áp, ứng dụng và danh mục tài liệu.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center border border-black/15 px-4 py-2.5 bg-white min-w-[260px]">
              <Search className="w-4 h-4 text-black/50 mr-2" />
              <input placeholder="Tìm trong kết quả…" className="bg-transparent outline-none text-[13px] flex-1 placeholder:text-black/40" />
            </div>
            <button className="flex items-center gap-2 border border-black/15 px-4 py-2.5 text-[13px]">
              Sắp xếp: Mới cập nhật <ChevronDown className="w-4 h-4" />
            </button>
            <div className="hidden md:flex border border-black/15">
              {[
                { k: "list", icon: List, label: "Danh sách" },
                { k: "compact", icon: Rows3, label: "Rút gọn" },
                { k: "table", icon: Table2, label: "Bảng kỹ thuật" },
              ].map((v) => (
                <button
                  key={v.k}
                  onClick={() => setView(v.k as any)}
                  className={`relative px-3 py-2.5 ${view === v.k ? "text-black" : "text-black/45 hover:text-black"}`}
                  aria-label={v.label}
                >
                  <v.icon className="w-4 h-4" />
                  {view === v.k && <span className="absolute left-2 right-2 -bottom-px h-0.5 bg-[#E11D2E]" />}
                </button>
              ))}
            </div>
            <button onClick={() => setShowSheet(true)} className="lg:hidden border border-black/15 px-4 py-2.5 text-[13px]">Bộ lọc</button>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-10">
          {/* Sidebar */}
          <aside className="hidden lg:block lg:col-span-3">
            <div className="sticky top-24">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[14px] tracking-tight" style={{ fontWeight: 500 }}>Bộ lọc</span>
                {active.length > 0 && (
                  <button onClick={() => setActive([])} className="text-[12px] text-black/50 hover:text-[#E11D2E] hover:underline decoration-[#E11D2E]">
                    Xóa tất cả
                  </button>
                )}
              </div>
              <div className="text-[12px] text-black/50 mb-2">
                {active.length === 0 ? "Chưa chọn bộ lọc" : `${active.length} bộ lọc đang áp dụng`}
              </div>

              <FilterGroup title="Loại sản phẩm" items={FILTERS.product} active={active} toggle={toggle} />
              <FilterGroup title="Loại tài liệu" items={FILTERS.doctype} active={active} toggle={toggle} />
              <FilterGroup title="Điện áp" items={FILTERS.voltage} active={active} toggle={toggle} />
              <FilterGroup title="Ứng dụng" items={FILTERS.application} active={active} toggle={toggle} />
              <FilterGroup title="Ngôn ngữ" items={FILTERS.language} active={active} toggle={toggle} />
              <FilterGroup title="Thời gian cập nhật" items={FILTERS.period} active={active} toggle={toggle} />
            </div>
          </aside>

          {/* Results */}
          <div className="lg:col-span-9">
            {/* Active filter chips */}
            <div className="flex flex-wrap items-center gap-2 mb-5">
              <span className="text-[13px] text-black/60">
                {loading ? "Đang cập nhật kết quả…" : `${DOCS.length} tài liệu phù hợp`}
              </span>
              {active.length > 0 && <span className="w-px h-4 bg-black/15 mx-1" />}
              {active.map((a) => (
                <button key={a} onClick={() => toggle(a)} className="group flex items-center gap-1.5 px-3 py-1 bg-black text-white text-[12px] tracking-wide">
                  {a}
                  <X className="w-3 h-3 opacity-70 group-hover:opacity-100" />
                </button>
              ))}
              {active.length > 0 && (
                <button onClick={() => setActive([])} className="text-[12px] text-black/55 hover:text-[#E11D2E] underline-offset-2 hover:underline">
                  Xóa tất cả bộ lọc
                </button>
              )}
            </div>

            {loading ? (
              <div className="space-y-px bg-black/8">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="bg-white px-6 py-7 flex items-center gap-6">
                    <div className="w-16 h-3 bg-black/10 animate-pulse" />
                    <div className="flex-1 space-y-3">
                      <div className="h-4 bg-black/10 w-2/3 animate-pulse" />
                      <div className="h-3 bg-black/8 w-full animate-pulse" />
                      <div className="h-3 bg-black/6 w-1/2 animate-pulse" />
                    </div>
                    <div className="w-32 h-9 bg-black/10 animate-pulse" />
                  </div>
                ))}
              </div>
            ) : view === "table" ? (
              <DocTable docs={DOCS} />
            ) : view === "compact" ? (
              <DocCompactList docs={DOCS} />
            ) : (
              <div className="divide-y divide-black/10 border-y border-black/10">
                {DOCS.map((d) => (
                  <DocRow key={d.id} d={d} />
                ))}
              </div>
            )}

            {/* Load more */}
            <div className="mt-10 flex flex-col items-center gap-3">
              <button className="group flex items-center gap-3 px-6 py-3.5 border border-black/15 hover:border-[#E11D2E] transition-colors text-[13px] tracking-wide">
                {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <span>Tải thêm tài liệu</span>}
                {!loading && <ArrowRight className="w-4 h-4 rotate-90 group-hover:translate-y-0.5 group-hover:text-[#E11D2E] transition-all" />}
              </button>
              <div className="text-[12px] text-black/50">Hiển thị 6 / 48 tài liệu</div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile filter bottom sheet */}
      {showSheet && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div onClick={() => setShowSheet(false)} className="absolute inset-0 bg-black/50" />
          <div className="absolute left-0 right-0 bottom-0 bg-white max-h-[85vh] flex flex-col">
            <div className="flex items-center justify-between px-5 py-4 border-b border-black/10">
              <div>
                <div className="text-[15px]" style={{ fontWeight: 500 }}>Lọc tài liệu</div>
                <div className="text-[12px] text-black/50">{active.length} bộ lọc đã chọn</div>
              </div>
              <button onClick={() => setShowSheet(false)} aria-label="Đóng"><X className="w-5 h-5" /></button>
            </div>
            <div className="flex-1 overflow-y-auto px-5">
              <FilterGroup title="Loại sản phẩm" items={FILTERS.product} active={active} toggle={toggle} />
              <FilterGroup title="Loại tài liệu" items={FILTERS.doctype} active={active} toggle={toggle} />
              <FilterGroup title="Điện áp" items={FILTERS.voltage} active={active} toggle={toggle} />
              <FilterGroup title="Ứng dụng" items={FILTERS.application} active={active} toggle={toggle} />
            </div>
            <div className="flex border-t border-black/10">
              <button onClick={() => setActive([])} className="flex-1 px-5 py-4 text-[14px] text-black/70">Xóa tất cả</button>
              <button onClick={() => setShowSheet(false)} className="flex-1 px-5 py-4 bg-black text-white text-[14px]">Áp dụng bộ lọc</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function DocRow({ d }: { d: Doc }) {
  return (
    <div className="group relative flex flex-col lg:flex-row gap-6 px-2 py-7 transition-colors hover:bg-[#FAFAFA]">
      <div className="absolute left-0 top-0 bottom-0 w-px bg-[#E11D2E] origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500" />
      <div className="lg:w-32 flex flex-row lg:flex-col items-start gap-2 shrink-0">
        <span className="text-[10px] tracking-[0.25em] px-2 py-1 border border-black/15 text-black/70 group-hover:border-[#E11D2E] group-hover:text-[#E11D2E] transition-colors">
          {d.label}
        </span>
        <span className="text-[11px] text-black/45 lg:mt-1">{d.fileType}</span>
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="text-[18px] lg:text-[20px] tracking-tight leading-snug mb-2" style={{ fontWeight: 500 }}>
          {d.title}
        </h3>
        <p className="text-[14px] leading-[1.6] text-black/60 max-w-3xl mb-4">{d.desc}</p>
        <div className="flex flex-wrap gap-x-1.5 gap-y-2 mb-4">
          {d.tags.map((t) => (
            <span key={t} className="text-[12px] text-black/65">
              {t}<span className="text-black/25 mx-1.5">/</span>
            </span>
          ))}
        </div>
        <div className="text-[12px] text-black/50 tracking-wide">
          {d.fileType} · {d.size} · Cập nhật {d.updated} · Phiên bản {d.version}
        </div>
      </div>
      <div className="flex flex-row lg:flex-col gap-2 lg:items-end shrink-0 lg:w-56">
        <button className="group/btn relative flex items-center justify-center gap-2 px-5 py-2.5 bg-black text-white text-[13px] tracking-wide hover:bg-[#E11D2E] transition-colors flex-1 lg:flex-none lg:w-full">
          <Download className="w-4 h-4" />
          {d.primaryAction}
        </button>
        <div className="flex gap-2 lg:w-full">
          <button className="flex-1 flex items-center justify-center gap-2 border border-black/15 px-3 py-2 text-[12px] text-black/70 hover:border-[#E11D2E] hover:text-[#E11D2E] transition-colors">
            <Eye className="w-3.5 h-3.5" /> {d.secondaryAction}
          </button>
          <button className="border border-black/15 px-3 py-2 text-black/70 hover:border-[#E11D2E] hover:text-[#E11D2E] transition-colors" aria-label="Sao chép liên kết">
            <Link2 className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}

function DocCompactList({ docs }: { docs: Doc[] }) {
  return (
    <div className="divide-y divide-black/10 border-y border-black/10">
      {docs.map((d) => (
        <div key={d.id} className="flex items-center gap-4 px-2 py-4 hover:bg-[#FAFAFA] group">
          <span className="text-[10px] tracking-[0.25em] w-24 text-black/55">{d.label}</span>
          <FileText className="w-4 h-4 text-black/40 shrink-0" />
          <div className="flex-1 min-w-0 truncate text-[14px]">{d.title}</div>
          <div className="hidden md:block text-[12px] text-black/50 w-28 text-right">{d.updated}</div>
          <button className="flex items-center gap-1.5 text-[12px] text-black hover:text-[#E11D2E]">
            <Download className="w-3.5 h-3.5" /> Tải xuống
          </button>
        </div>
      ))}
    </div>
  );
}

function DocTable({ docs }: { docs: Doc[] }) {
  return (
    <div className="border border-black/10 overflow-x-auto">
      <table className="w-full text-[13px]">
        <thead className="bg-black text-white">
          <tr>
            {["Tên tài liệu", "Loại sản phẩm", "Điện áp", "Loại", "Phiên bản", "Cập nhật", "Dung lượng", "Hành động"].map((h) => (
              <th key={h} className="px-4 py-3 text-left tracking-[0.1em] text-[11px] uppercase font-normal">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {docs.map((d) => (
            <tr key={d.id} className="border-t border-black/8 hover:bg-[#FAFAFA] group">
              <td className="px-4 py-3">{d.title}</td>
              <td className="px-4 py-3 text-black/65">{d.category}</td>
              <td className="px-4 py-3 text-black/65">{d.voltage ?? "—"}</td>
              <td className="px-4 py-3 text-black/65">{d.label}</td>
              <td className="px-4 py-3 text-black/65">{d.version}</td>
              <td className="px-4 py-3 text-black/65">{d.updated}</td>
              <td className="px-4 py-3 text-black/65">{d.size}</td>
              <td className="px-4 py-3">
                <button className="inline-flex items-center gap-1.5 text-black hover:text-[#E11D2E]">
                  <Download className="w-3.5 h-3.5" /> Tải
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
