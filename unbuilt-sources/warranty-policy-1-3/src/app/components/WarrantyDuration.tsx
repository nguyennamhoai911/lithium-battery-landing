import { motion } from 'motion/react';
import { Calendar, Clock, TrendingUp, Shield } from 'lucide-react';

export function WarrantyDuration() {
  const timeline = [
    {
      year: '0-3',
      label: 'Full Replacement',
      coverage: '100%',
      description: 'Comprehensive zero-cost replacement for any covered defects',
      color: 'bg-green-500'
    },
    {
      year: '3-6',
      label: 'Premium Coverage',
      coverage: '90%',
      description: 'Continued high-level protection with minimal cost sharing',
      color: 'bg-blue-500'
    },
    {
      year: '6-8',
      label: 'Standard Coverage',
      coverage: '75%',
      description: 'Reliable protection for extended operational lifecycle',
      color: 'bg-violet-500'
    },
    {
      year: '8-10',
      label: 'Extended Protection',
      coverage: '60%',
      description: 'Long-term support for mature battery systems',
      color: 'bg-orange-500'
    },
  ];

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Bridge element - connecting from previous */}
      <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-red-300/40 to-transparent" />

      {/* Precision dashboard moment background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/40 via-white to-gray-50/30" />

      {/* Technical grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #000 0.5px, transparent 0.5px),
            linear-gradient(to bottom, #000 0.5px, transparent 0.5px)
          `,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-red-500/5 via-transparent to-transparent blur-3xl" />

      <div className="relative z-10 container mx-auto px-6 lg:px-12 max-w-7xl">
        {/* Header - centered precision */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white/60 backdrop-blur-sm border border-gray-200/60">
            <Calendar className="w-4 h-4 text-red-600" />
            <span className="text-sm uppercase tracking-wider text-gray-700">Coverage Timeline</span>
          </div>

          <h2 className="text-5xl lg:text-6xl mb-6 tracking-tight text-gray-900">
            Decade of <span className="text-red-900">Confidence</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Our tiered warranty system provides comprehensive protection throughout
            your battery's operational lifetime, with clearly defined coverage levels.
          </p>
        </motion.div>

        {/* Timeline visualization */}
        <div className="max-w-6xl mx-auto mb-16">
          {/* Timeline bar */}
          <div className="relative mb-12">
            <div className="absolute top-1/2 left-0 right-0 h-2 bg-gradient-to-r from-green-500 via-blue-500 via-violet-500 to-orange-500 rounded-full opacity-20" />
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-green-500 via-blue-500 via-violet-500 to-orange-500" />

            {/* Year markers */}
            <div className="relative flex justify-between pt-8">
              {[0, 3, 6, 8, 10].map((year, i) => (
                <motion.div
                  key={year}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex flex-col items-center"
                >
                  <div className="w-4 h-4 rounded-full bg-gradient-to-br from-gray-900 to-red-900 border-2 border-white shadow-lg -mt-10" />
                  <div className="mt-2 text-sm text-gray-900">Year {year}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Coverage cards grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {timeline.map((period, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative"
              >
                {/* Card */}
                <div className="relative h-full p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-200/70 hover:border-gray-300 overflow-hidden transition-all duration-500">
                  {/* Color accent bar */}
                  <div className={`absolute top-0 left-0 right-0 h-1 ${period.color}`} />

                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative">
                    {/* Year range */}
                    <div className="flex items-center gap-2 mb-4">
                      <Clock className="w-5 h-5 text-gray-600" strokeWidth={1.5} />
                      <span className="text-sm uppercase tracking-wider text-gray-600">Years {period.year}</span>
                    </div>

                    {/* Coverage percentage */}
                    <div className="text-5xl mb-2 text-gray-900 group-hover:scale-105 transition-transform duration-500">
                      {period.coverage}
                    </div>

                    {/* Label */}
                    <h4 className="text-lg mb-3 text-gray-900">
                      {period.label}
                    </h4>

                    {/* Divider */}
                    <div className="w-12 h-px bg-gradient-to-r from-gray-300 to-transparent mb-4" />

                    {/* Description */}
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {period.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Additional info panel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative p-8 lg:p-12 rounded-3xl bg-gradient-to-br from-white/80 via-gray-50/40 to-white/80 backdrop-blur-sm border border-gray-200/60 overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-radial from-red-500/10 to-transparent blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-radial from-blue-500/10 to-transparent blur-3xl" />

            <div className="relative grid md:grid-cols-3 gap-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" strokeWidth={2} />
                </div>
                <div>
                  <h5 className="mb-2 text-gray-900">No Hidden Terms</h5>
                  <p className="text-sm text-gray-600">Transparent coverage with clearly documented terms</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" strokeWidth={2} />
                </div>
                <div>
                  <h5 className="mb-2 text-gray-900">Transferable</h5>
                  <p className="text-sm text-gray-600">Full warranty transfers to new system owners</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-white" strokeWidth={2} />
                </div>
                <div>
                  <h5 className="mb-2 text-gray-900">Extension Available</h5>
                  <p className="text-sm text-gray-600">Optional extended coverage up to 15 years</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
