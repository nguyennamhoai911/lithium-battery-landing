export function SectionLabel({ num, label }: { num: string; label: string }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <span className="inline-flex items-center justify-center w-8 h-8 bg-[#E60023] text-white text-[11px] tracking-wide" style={{ fontWeight: 700 }}>
        {num}
      </span>
      <span className="text-[11px] tracking-[0.28em] text-[#0A0A0A]" style={{ fontWeight: 700 }}>{label}</span>
      <div className="flex-1 h-px bg-[#0A0A0A]/20 max-w-[80px]" />
    </div>
  );
}

export function SectionHeading({ children, eyebrow }: { children: React.ReactNode; eyebrow?: string }) {
  return (
    <h2
      className="text-[38px] sm:text-[48px] lg:text-[64px] leading-[1.0] tracking-[-0.03em] text-[#0A0A0A]"
      style={{ fontWeight: 700 }}
    >
      {children}
    </h2>
  );
}
