import { motion } from "motion/react";
import {
  Award,
  Factory,
  Network,
  Cpu,
  Clock,
  ShieldCheck,
  Download,
  FileText,
  Quote,
} from "lucide-react";

const STATS = [
  { i: <Factory className="size-5" />, n: "10+", l: "Năm sản xuất battery" },
  { i: <Network className="size-5" />, n: "8", l: "Đại lý uỷ quyền VN" },
  { i: <Cpu className="size-5" />, n: "OEM/ODM", l: "Custom battery pack" },
  { i: <Clock className="size-5" />, n: "24h", l: "Business response" },
  { i: <ShieldCheck className="size-5" />, n: "QC", l: "Certified quality control" },
  { i: <Award className="size-5" />, n: "ISO·CE·UL", l: "Tiêu chuẩn quốc tế" },
];

export function TrustStrip() {
  return (
    <section className="relative bg-neutral-950 py-24 text-white">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-red-600 to-transparent"
      />
      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="text-[12px] uppercase tracking-[0.22em] text-red-500">
              08 — Capability strip
            </span>
            <h2 className="mt-3 text-[clamp(1.8rem,3vw,2.5rem)] tracking-[-0.02em]">
              Năng lực sản xuất, chất lượng và mạng lưới — đã được kiểm chứng.
            </h2>
          </div>
          <p className="max-w-md text-neutral-400 text-sm">
            Mỗi pack pin xuất xưởng đều trải qua quy trình QC nội bộ 14 bước,
            kiểm tra dung lượng thực tế, BMS, cân bằng cell và đóng gói chống va
            đập theo tiêu chuẩn vận chuyển hàng hoá nguy hiểm UN38.3.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 divide-x divide-y divide-neutral-800 border border-neutral-800 md:grid-cols-3 lg:grid-cols-6 lg:divide-y-0">
          {STATS.map((s, i) => (
            <motion.div
              key={s.l}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="group relative p-7"
            >
              <span className="absolute left-0 top-0 h-[2px] w-0 bg-red-600 transition-all duration-500 group-hover:w-full" />
              <div className="text-red-500">{s.i}</div>
              <div className="mt-5 text-3xl tracking-tight">{s.n}</div>
              <div className="mt-1 text-sm text-neutral-400">{s.l}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Quotes() {
  return (
    <section className="relative bg-white py-28">
      <div className="mx-auto max-w-[1100px] px-6 lg:px-12">
        <div className="relative border-l-4 border-red-600 pl-8">
          <Quote className="absolute -left-3 -top-3 size-6 bg-white text-red-600" />
          <p className="text-2xl leading-[1.5] tracking-[-0.01em] text-neutral-900">
            “Không có pack pin tốt nếu thiếu BMS được tinh chỉnh đúng tải. Khi
            tư vấn cho khách dự án, chúng tôi luôn yêu cầu thông số tải đỉnh,
            nhiệt độ vận hành và chu kỳ sạc thực tế — chỉ khi đó cấu hình pin
            mới thực sự bền và tiết kiệm chi phí dài hạn.”
          </p>
          <div className="mt-6 flex items-center gap-4 text-sm">
            <div className="size-12 rounded-full bg-gradient-to-br from-neutral-800 to-neutral-600" />
            <div>
              <div className="tracking-tight">Trần Quốc Anh</div>
              <div className="text-neutral-500">
                Head of OEM Engineering · PKGbattery
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ROI() {
  return (
    <section className="relative bg-white pb-28">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <span className="text-[12px] uppercase tracking-[0.22em] text-red-600">
              ROI / TCO Analysis
            </span>
            <h2 className="mt-4 text-[clamp(1.8rem,3vw,2.6rem)] leading-[1.1] tracking-[-0.02em]">
              Vì sao chuyển sang LiFePO4 lại hoàn vốn trong 18–24 tháng?
            </h2>
            <p className="mt-5 text-neutral-600 leading-relaxed">
              Phân tích dưới đây so sánh chi phí sở hữu (TCO) trong 5 năm giữa
              ắc-quy chì axit truyền thống và pack LiFePO4 PKGbattery cho ứng
              dụng UPS / lưu trữ dự phòng 5kWh, vận hành 1 chu kỳ/ngày.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-neutral-600">
              <li>• Tuổi thọ chu kỳ tăng từ ~500 lên 4.000+ chu kỳ.</li>
              <li>• Hiệu suất nạp/xả thực tế từ 80% lên 96%.</li>
              <li>• Không bảo trì điện dịch, không xả khí trong phòng kín.</li>
              <li>• Khả năng giám sát từ xa qua BMS / cổng RS485.</li>
            </ul>
          </div>

          <div className="lg:col-span-7">
            <div className="overflow-hidden border border-neutral-200">
              <table className="w-full text-sm">
                <thead className="bg-neutral-900 text-white">
                  <tr>
                    <th className="px-5 py-4 text-left tracking-[0.12em] uppercase text-[11px]">
                      Hạng mục (5 năm)
                    </th>
                    <th className="px-5 py-4 text-right tracking-[0.12em] uppercase text-[11px]">
                      Chì axit
                    </th>
                    <th className="px-5 py-4 text-right tracking-[0.12em] uppercase text-[11px] bg-red-600">
                      LiFePO4 PKG
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200">
                  {[
                    ["Đầu tư ban đầu", "18.500.000 ₫", "42.000.000 ₫"],
                    ["Số lần thay thế", "3 lần", "0 lần"],
                    ["Chi phí thay thế tích luỹ", "37.000.000 ₫", "0 ₫"],
                    ["Tiêu thụ điện sạc dư", "8.400.000 ₫", "1.900.000 ₫"],
                    ["Bảo trì / vận hành", "6.200.000 ₫", "900.000 ₫"],
                    ["Tổng TCO 5 năm", "70.100.000 ₫", "44.800.000 ₫"],
                  ].map((row, i) => (
                    <tr
                      key={i}
                      className={
                        i === 5 ? "bg-neutral-50 font-medium" : "bg-white"
                      }
                    >
                      <td className="px-5 py-3.5 text-neutral-700">{row[0]}</td>
                      <td className="px-5 py-3.5 text-right text-neutral-600">
                        {row[1]}
                      </td>
                      <td className="px-5 py-3.5 text-right text-red-600">
                        {row[2]}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-neutral-500">
              * Số liệu mô phỏng nội bộ dựa trên cấu hình UPS 48V/100Ah, giá
              điện công nghiệp trung bình 2.6 0₫/kWh, cập nhật 2026.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Downloads() {
  const files = [
    {
      t: "PKGbattery — B2B Capability Profile 2026",
      d: "12 trang · Hồ sơ năng lực doanh nghiệp, dây chuyền, QC, dự án tiêu biểu.",
      size: "PDF · 4.8MB",
    },
    {
      t: "OEM / ODM Battery Pack Spec Template",
      d: "Form thông số đầu vào để PKG đề xuất cấu hình cell, BMS, vỏ và chứng chỉ.",
      size: "XLSX · 220KB",
    },
    {
      t: "Dealer Policy & Pricing Tier (NDA)",
      d: "Chính sách phân phối, chiết khấu vùng, KPI và hỗ trợ marketing.",
      size: "PDF · 2.1MB",
    },
  ];
  return (
    <section className="relative bg-neutral-50 py-28">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <span className="text-[12px] uppercase tracking-[0.22em] text-red-600">
              Document hub
            </span>
            <h2 className="mt-4 text-[clamp(1.8rem,3vw,2.4rem)] tracking-[-0.02em]">
              Tài liệu doanh nghiệp & kỹ thuật.
            </h2>
            <p className="mt-4 text-neutral-600">
              Tải các tài liệu chính thức để chuẩn bị cuộc trao đổi sâu hơn với
              đội ngũ PKGbattery — phù hợp cho phòng mua hàng, kỹ thuật, đầu tư
              và đối tác phân phối.
            </p>
          </div>
          <div className="lg:col-span-8 space-y-3">
            {files.map((f) => (
              <a
                key={f.t}
                href="#"
                className="group flex items-center justify-between gap-6 border border-neutral-200 bg-white p-5 transition hover:border-neutral-900"
              >
                <div className="flex items-start gap-4">
                  <span className="inline-flex size-11 items-center justify-center border border-neutral-200 text-neutral-700 group-hover:border-red-600 group-hover:text-red-600">
                    <FileText className="size-5" />
                  </span>
                  <div>
                    <div className="tracking-tight">{f.t}</div>
                    <div className="mt-1 text-sm text-neutral-500">{f.d}</div>
                    <div className="mt-1 text-xs text-neutral-400">{f.size}</div>
                  </div>
                </div>
                <span className="inline-flex items-center gap-2 text-sm text-red-600">
                  <Download className="size-4" />
                  Download
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
