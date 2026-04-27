import { ImageWithFallback } from "../figma/ImageWithFallback";
import { FileText, Download, Play } from "lucide-react";

function H2({ id, eyebrow, children }: { id: string; eyebrow: string; children: React.ReactNode }) {
  return (
    <div id={id} className="scroll-mt-32 mt-20 first:mt-0">
      <div className="flex items-center gap-3 mb-4">
        <span className="w-6 h-[1px] bg-[#E11D2A]" />
        <span className="text-[10px] tracking-[0.26em] uppercase text-[#E11D2A]">{eyebrow}</span>
      </div>
      <h2 className="text-[32px] md:text-[36px] leading-[1.15] tracking-[-0.015em] text-black">
        {children}
      </h2>
    </div>
  );
}

const P = ({ children }: { children: React.ReactNode }) => (
  <p className="mt-6 text-[17px] leading-[1.78] text-neutral-700">{children}</p>
);

export function ArticleBody() {
  return (
    <article className="prose-none max-w-[760px]">
      <H2 id="context" eyebrow="01 · Bối cảnh">
        Khi vận hành công nghiệp đặt lại bài toán năng lượng
      </H2>
      <P>
        Trong 24 tháng qua, các nhà máy sản xuất, kho logistics và trung tâm dữ liệu
        tại Việt Nam đã đồng loạt rà soát lại hạ tầng năng lượng dự phòng. Lý do
        không nằm ở giá điện — mà ở <strong className="text-black">độ tin cậy của hệ thống vận hành</strong>{" "}
        khi downtime một giờ có thể tương đương hàng trăm triệu đồng tổn thất.
      </P>
      <P>
        Lead acid từng là lựa chọn mặc định trong nhiều thập kỷ. Nhưng với chu kỳ
        tuổi thọ giới hạn, thời gian sạc kéo dài và yêu cầu bảo trì cao, công nghệ
        này đang dần trở thành một <em>nút thắt vận hành</em> hơn là giải pháp.
      </P>

      <blockquote className="mt-10 mb-2 pl-8 border-l-2 border-[#E11D2A] py-2">
        <p className="text-[22px] leading-[1.5] tracking-[-0.01em] text-black">
          “Chuyển đổi sang lithium không còn là quyết định công nghệ — đó là quyết
          định tài chính.”
        </p>
        <footer className="mt-4 text-[12px] tracking-[0.18em] uppercase text-neutral-500">
          — Trần Hữu Đức, Giám đốc Kỹ thuật, PKG Battery
        </footer>
      </blockquote>

      <H2 id="spec" eyebrow="02 · Kỹ thuật">
        So sánh kỹ thuật cốt lõi
      </H2>
      <P>
        Khác biệt thực sự giữa hai công nghệ không nằm ở hóa học cell, mà ở cách
        toàn hệ thống được thiết kế để vận hành liên tục. Một bộ pin lithium công
        nghiệp PKG bao gồm ba lớp:
      </P>
      <ul className="mt-6 space-y-3 text-[17px] leading-[1.7] text-neutral-700">
        {[
          "Cell LiFePO₄ cấp độ A, dung sai dung lượng dưới 2%",
          "BMS chủ động giám sát 16 thông số/giây cho mỗi cell",
          "Vỏ thép phủ epoxy, IP65, chịu rung động cấp công nghiệp",
        ].map((it) => (
          <li key={it} className="flex gap-4">
            <span className="mt-3 w-3 h-[1px] bg-[#E11D2A] shrink-0" />
            <span>{it}</span>
          </li>
        ))}
      </ul>

      <figure className="my-14">
        <div className="aspect-[16/9] overflow-hidden bg-neutral-100">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1647427060118-4911c9821b82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=85&w=1600"
            alt="Battery production facility"
            className="w-full h-full object-cover"
          />
        </div>
        <figcaption className="mt-3 flex items-center justify-between text-[11px] tracking-widest uppercase text-neutral-400">
          <span>Hình 01 · Dây chuyền lắp ráp pack PKG-LFP-200</span>
          <span>16 : 9</span>
        </figcaption>
      </figure>

      <H2 id="table" eyebrow="03 · Dữ liệu">
        Bảng thông số chi tiết
      </H2>
      <P>
        Số liệu dưới đây tổng hợp từ phòng thí nghiệm PKG dựa trên điều kiện vận hành
        liên tục 25°C, dòng xả định mức 0.5C, chu kỳ DOD 80%.
      </P>

      <SpecTable />

      <H2 id="video" eyebrow="04 · Video">
        Cấu trúc cell & BMS bên trong
      </H2>
      <P>
        Đoạn video kỹ thuật dài 2 phút giới thiệu kiến trúc bên trong một module
        PKG-LFP-200, bao gồm sơ đồ cân bằng cell và logic bảo vệ ba lớp.
      </P>

      <div className="mt-8 relative aspect-[16/9] overflow-hidden bg-black group cursor-pointer">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1717386255777-ce60792a2a56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=85&w=1600"
          alt="Battery cell structure video"
          className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative">
            <span className="absolute inset-0 -m-4 border border-white/30 rounded-full group-hover:scale-110 transition-transform" />
            <button className="relative w-20 h-20 rounded-full bg-[#E11D2A] flex items-center justify-center group-hover:scale-105 transition-transform">
              <Play className="w-7 h-7 text-white fill-white ml-1" />
            </button>
          </div>
        </div>
        <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-white text-[11px] tracking-widest uppercase">
          <span>PKG Lab · Cell Architecture</span>
          <span>02 : 14</span>
        </div>
      </div>

      <H2 id="roi" eyebrow="05 · Tài chính">
        ROI và tổng chi phí 5 năm
      </H2>
      <P>
        Khi tính trọn vòng đời, lithium đắt hơn 2.4× ở chi phí đầu tư ban đầu, nhưng
        rẻ hơn 38% ở tổng chi phí sở hữu sau 5 năm — chưa kể giá trị downtime tránh
        được, vốn không xuất hiện trên bảng giá.
      </P>

      <div className="mt-10 grid grid-cols-3 gap-px bg-black/10 border border-black/10">
        {[
          { v: "−38%", l: "Tổng chi phí 5 năm" },
          { v: "4.6×", l: "Tuổi thọ chu kỳ" },
          { v: "−70%", l: "Thời gian sạc" },
        ].map((s) => (
          <div key={s.l} className="bg-white p-8">
            <div className="text-[40px] leading-none tracking-[-0.02em] text-[#E11D2A]">
              {s.v}
            </div>
            <div className="mt-3 text-[12px] tracking-[0.18em] uppercase text-neutral-500">
              {s.l}
            </div>
          </div>
        ))}
      </div>

      <H2 id="download" eyebrow="06 · Tài liệu">
        Tải tài liệu kỹ thuật
      </H2>
      <P>
        Đội ngũ kỹ thuật có thể tải các tài liệu chuyên sâu để tham khảo trong quá
        trình đánh giá phương án.
      </P>

      <div className="mt-8 space-y-3">
        {[
          { t: "PKG-LFP-200 · Datasheet kỹ thuật", k: "PDF", s: "2.4 MB" },
          { t: "Catalogue dòng pin công nghiệp 2026", k: "PDF", s: "8.1 MB" },
          { t: "Chứng nhận UN38.3 · IEC 62619", k: "ZIP", s: "5.7 MB" },
        ].map((f) => (
          <a
            key={f.t}
            href="#"
            className="group flex items-center gap-5 border border-black/10 hover:border-black p-5 transition-colors"
          >
            <div className="w-12 h-12 bg-neutral-50 flex items-center justify-center shrink-0 group-hover:bg-[#E11D2A] group-hover:text-white transition-colors">
              <FileText className="w-5 h-5" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[15px] text-black truncate">{f.t}</div>
              <div className="mt-1 text-[11px] tracking-[0.18em] uppercase text-neutral-500">
                {f.k} · {f.s}
              </div>
            </div>
            <Download className="w-5 h-5 text-neutral-400 group-hover:text-[#E11D2A] transition-colors shrink-0" />
          </a>
        ))}
      </div>

      <H2 id="conclusion" eyebrow="07 · Khuyến nghị">
        Triển khai lộ trình chuyển đổi
      </H2>
      <P>
        Với hầu hết doanh nghiệp công nghiệp, chuyển đổi sang lithium không nhất
        thiết phải làm cùng lúc. PKG khuyến nghị lộ trình ba giai đoạn — bắt đầu từ
        cụm thiết bị có downtime cost cao nhất, sau đó mở rộng theo dữ liệu vận hành
        thực tế.
      </P>
      <P>
        Đội ngũ kỹ thuật của chúng tôi có thể đồng hành đánh giá tải, chu kỳ và cấu
        hình BMS phù hợp với từng nhà máy — không thông qua bảng giá có sẵn, mà
        thông qua khảo sát thực địa.
      </P>
    </article>
  );
}

function SpecTable() {
  const cols = ["Thông số", "Lithium LiFePO₄", "Lead Acid VRLA", "Chênh lệch"];
  const rows: Array<{ k: string; v: [string, string, string]; hl?: boolean }> = [
    { k: "Điện áp danh định", v: ["48 V", "48 V", "—"] },
    { k: "Dung lượng", v: ["200 Ah", "200 Ah", "—"] },
    { k: "Chu kỳ tuổi thọ (DOD 80%)", v: ["6,000+", "1,300", "+361%"], hl: true },
    { k: "Thời gian sạc", v: ["1.5 giờ", "8 – 10 giờ", "−81%"], hl: true },
    { k: "Hiệu suất xả", v: ["98%", "80–85%", "+15%"] },
    { k: "Khối lượng", v: ["62 kg", "168 kg", "−63%"] },
    { k: "BMS tích hợp", v: ["Có · 16 cell monitor", "Không", "—"] },
    { k: "Ứng dụng", v: ["Đa ca, ESS, AGV", "Dự phòng nhẹ", "—"] },
  ];

  return (
    <div className="mt-8 overflow-x-auto -mx-6 px-6 md:mx-0 md:px-0">
      <table className="w-full min-w-[640px] border-collapse">
        <thead>
          <tr className="border-y-2 border-black">
            {cols.map((c, i) => (
              <th
                key={c}
                className={`py-4 text-[10px] tracking-[0.22em] uppercase text-black ${
                  i === 0 ? "text-left pr-6" : "text-right pl-6"
                } ${i === cols.length - 1 ? "text-[#E11D2A]" : ""}`}
              >
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr
              key={r.k}
              className={`border-b border-black/10 hover:bg-neutral-50 transition-colors ${
                r.hl ? "bg-[#E11D2A]/[0.03]" : ""
              }`}
            >
              <td className="py-4 pr-6 text-[14px] text-black">{r.k}</td>
              <td className="py-4 pl-6 text-right text-[14px] text-black tabular-nums">
                {r.v[0]}
              </td>
              <td className="py-4 pl-6 text-right text-[14px] text-neutral-500 tabular-nums">
                {r.v[1]}
              </td>
              <td
                className={`py-4 pl-6 text-right text-[14px] tabular-nums ${
                  r.hl ? "text-[#E11D2A]" : "text-neutral-400"
                }`}
              >
                {r.v[2]}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
