const ITEMS = [
  {
    title: "Tổng chi phí sở hữu thấp hơn 38%",
    desc: "Sau 5 năm vận hành liên tục, lithium tiết kiệm vượt trội nhờ tuổi thọ chu kỳ gấp 4–6 lần lead acid.",
  },
  {
    title: "BMS chủ động bảo vệ hệ thống",
    desc: "Hệ thống quản lý pin thông minh ngăn quá nhiệt, quá dòng và cân bằng cell theo thời gian thực.",
  },
  {
    title: "Sạc nhanh, giảm downtime",
    desc: "Thời gian sạc rút ngắn 70%, cho phép vận hành đa ca mà không cần dự phòng dung lượng.",
  },
];

export function KeyTakeaways() {
  return (
    <section className="max-w-[1400px] mx-auto px-6 lg:px-12 mt-24 lg:mt-32">
      <div className="flex items-end justify-between mb-12 border-b border-black/10 pb-6">
        <div className="flex items-center gap-3">
          <span className="w-6 h-[1px] bg-[#E11D2A]" />
          <span className="text-[11px] tracking-[0.24em] uppercase text-neutral-500">
            Quick Insight
          </span>
        </div>
        <span className="text-[11px] tracking-[0.2em] uppercase text-neutral-400 hidden md:block">
          3 điểm chính · 30 giây đọc
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
        {ITEMS.map((it, i) => (
          <div key={it.title} className="relative pt-2">
            <span className="absolute -top-6 -left-1 text-[120px] leading-none tracking-tighter text-neutral-100 select-none">
              0{i + 1}
            </span>
            <div className="relative">
              <span className="block w-10 h-[2px] bg-[#E11D2A] mb-6" />
              <h3 className="text-[22px] leading-[1.25] tracking-[-0.01em] text-black max-w-[18ch]">
                {it.title}
              </h3>
              <p className="mt-4 text-[15px] leading-[1.7] text-neutral-600 max-w-[34ch]">
                {it.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
