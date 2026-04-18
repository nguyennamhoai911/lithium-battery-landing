export function BackgroundSystem() {
  return (
    <div className="fixed inset-0 pointer-events-none">
      {/* Subtle warm to cool gradient base */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50/30 to-white" />

      {/* Metallic mist gradient - barely visible */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-100/20 via-transparent to-zinc-50/10" />

      {/* Red energy glow - strategic placement */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-red-500/3 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-red-600/2 rounded-full blur-3xl" />

      {/* Technical grid pattern - ultra subtle */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #000 1px, transparent 1px),
            linear-gradient(to bottom, #000 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }}
      />

      {/* Fine noise texture */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />

      {/* Radial highlights for depth */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-radial from-white/40 to-transparent blur-2xl" />
      <div className="absolute bottom-1/3 right-1/3 w-[600px] h-[600px] bg-gradient-radial from-gray-100/30 to-transparent blur-3xl" />
    </div>
  );
}
