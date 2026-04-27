export function EnergyLines({ className = "", color = "rgba(0,0,0,0.06)" }: { className?: string; color?: string }) {
  return (
    <svg className={`pointer-events-none absolute inset-0 w-full h-full ${className}`} preserveAspectRatio="none" viewBox="0 0 1440 800" fill="none">
      <defs>
        <linearGradient id="el-fade" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor={color} stopOpacity="0" />
          <stop offset="50%" stopColor={color} stopOpacity="1" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      {Array.from({ length: 14 }).map((_, i) => (
        <line key={i} x1="0" x2="1440" y1={50 + i * 55} y2={50 + i * 55} stroke="url(#el-fade)" strokeWidth="1" />
      ))}
      {Array.from({ length: 24 }).map((_, i) => (
        <line key={`v${i}`} x1={i * 60} x2={i * 60} y1="0" y2="800" stroke={color} strokeWidth="0.5" strokeDasharray="2 6" />
      ))}
    </svg>
  );
}

export function RedScanLine({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute left-0 right-0 h-px overflow-hidden ${className}`}>
      <div className="h-px w-1/3 bg-gradient-to-r from-transparent via-[#E11D2E] to-transparent animate-[scan_4s_ease-in-out_infinite]" />
      <style>{`@keyframes scan { 0% { transform: translateX(-50%);} 50% { transform: translateX(250%);} 100% { transform: translateX(-50%);} }`}</style>
    </div>
  );
}
