import { motion } from 'motion/react';
import { Battery, Shield, Zap } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Cinematic layered background */}
      <div className="absolute inset-0">
        {/* Atmospheric gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 via-white to-red-50/20" />

        {/* Red energy line */}
        <div className="absolute top-1/4 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-red-500/30 to-transparent" />

        {/* Scanning lines */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'repeating-linear-gradient(0deg, #000 0px, transparent 1px, transparent 4px)',
          }}
        />

        {/* Dot grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-12 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-red-50/80 to-transparent border border-red-100/50 mb-8">
              <Shield className="w-4 h-4 text-red-600" />
              <span className="text-sm text-red-900/80">Premium Protection System</span>
            </div>

            <h1 className="text-6xl lg:text-7xl mb-6 tracking-tight">
              <span className="block text-gray-900">PKG Industrial</span>
              <span className="block bg-gradient-to-r from-gray-900 via-red-900 to-gray-900 bg-clip-text text-transparent">Battery Warranty</span>
            </h1>

            <p className="text-xl text-gray-600 mb-10 max-w-xl leading-relaxed">
              Precision-engineered protection for mission-critical power systems.
              Comprehensive coverage designed for industrial excellence.
            </p>

            <div className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-gradient-to-r from-gray-900 to-red-900 text-white rounded-lg hover:shadow-xl hover:shadow-red-900/20 transition-all duration-300"
              >
                View Coverage Details
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-white/60 backdrop-blur-sm text-gray-900 rounded-lg border border-gray-200/80 hover:border-red-200 hover:bg-red-50/30 transition-all duration-300"
              >
                Download Warranty Guide
              </motion.button>
            </div>
          </motion.div>

          {/* Right visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Battery illustration container */}
            <div className="relative aspect-square">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-radial from-red-500/10 via-red-500/5 to-transparent blur-3xl" />

              {/* Main battery visual */}
              <div className="relative h-full flex items-center justify-center">
                <div className="relative">
                  {/* Energy rings */}
                  <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0, 0.3] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-0 rounded-full border-2 border-red-500/30"
                  />
                  <motion.div
                    animate={{ scale: [1, 1.4, 1], opacity: [0.2, 0, 0.2] }}
                    transition={{ duration: 3, delay: 0.5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-0 rounded-full border-2 border-red-500/20"
                  />

                  {/* Battery icon */}
                  <div className="relative bg-gradient-to-br from-gray-900 to-red-900 p-16 rounded-3xl shadow-2xl border border-white/10">
                    <Battery className="w-32 h-32 text-white" strokeWidth={1.5} />

                    {/* Energy indicator */}
                    <motion.div
                      animate={{ opacity: [1, 0.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    >
                      <Zap className="w-16 h-16 text-red-400 fill-red-400" />
                    </motion.div>
                  </div>

                  {/* Stats floating cards */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="absolute -left-12 top-1/4 bg-white/80 backdrop-blur-md px-6 py-4 rounded-xl shadow-lg border border-gray-200/50"
                  >
                    <div className="text-3xl text-gray-900">10</div>
                    <div className="text-sm text-gray-600">Years Coverage</div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    className="absolute -right-12 bottom-1/4 bg-white/80 backdrop-blur-md px-6 py-4 rounded-xl shadow-lg border border-gray-200/50"
                  >
                    <div className="text-3xl text-red-900">100%</div>
                    <div className="text-sm text-gray-600">Replacement</div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-white/50" />
    </section>
  );
}
