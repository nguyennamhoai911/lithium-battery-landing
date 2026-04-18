import { motion } from 'motion/react';
import { Battery, Cpu, Gauge, Shield, Zap, ThermometerSun } from 'lucide-react';

export function ProductCoverage() {
  const products = [
    {
      category: 'Lithium Iron Phosphate',
      model: 'LiFePO4 Series',
      icon: Battery,
      image: '🔋',
      specs: ['10-Year Coverage', 'Cycle Count Guarantee', 'Thermal Protection'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      category: 'Advanced Energy Storage',
      model: 'ESS Industrial',
      icon: Zap,
      image: '⚡',
      specs: ['12-Year Coverage', 'System Integration', 'Smart Monitoring'],
      color: 'from-violet-500 to-purple-500'
    },
    {
      category: 'High-Performance Power',
      model: 'HPP Commercial',
      icon: Gauge,
      image: '⚙️',
      specs: ['8-Year Coverage', 'Peak Load Protection', 'Rapid Response'],
      color: 'from-orange-500 to-red-500'
    },
    {
      category: 'Thermal Management',
      model: 'TMS Series',
      icon: ThermometerSun,
      image: '🌡️',
      specs: ['5-Year Coverage', 'Climate Certified', 'Extreme Conditions'],
      color: 'from-emerald-500 to-teal-500'
    },
  ];

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Visual motif continuation */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-radial from-red-500/5 to-transparent blur-3xl" />

      {/* Surface layer */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50/20 to-white" />

      {/* Diagonal scan lines */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: 'repeating-linear-gradient(-45deg, #000 0px, transparent 1px, transparent 60px)',
        }}
      />

      <div className="relative z-10 container mx-auto px-6 lg:px-12 max-w-7xl">
        {/* Header with asymmetric layout */}
        <div className="grid lg:grid-cols-5 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2"
          >
            <div className="sticky top-24">
              <div className="inline-flex items-center gap-2 mb-6">
                <Shield className="w-5 h-5 text-red-600" />
                <span className="text-sm uppercase tracking-wider text-red-900/70">Coverage Portfolio</span>
              </div>

              <h2 className="text-5xl lg:text-6xl tracking-tight text-gray-900 mb-6">
                Complete Product Protection
              </h2>

              <div className="w-16 h-0.5 bg-gradient-to-r from-red-500 to-transparent mb-6" />

              <p className="text-lg text-gray-600 leading-relaxed">
                Comprehensive warranty coverage across our entire industrial battery portfolio,
                each engineered to the same exacting standards.
              </p>
            </div>
          </motion.div>

          <div className="lg:col-span-3">
            {/* Product grid - asymmetric */}
            <div className="grid md:grid-cols-2 gap-6">
              {products.map((product, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="group relative"
                  style={{
                    gridColumn: index === 1 ? 'span 2' : 'span 1',
                  }}
                >
                  {/* Card surface */}
                  <div className="relative h-full p-8 rounded-2xl bg-white/70 backdrop-blur-sm border border-gray-200/70 hover:border-gray-300 overflow-hidden transition-all duration-500">
                    {/* Gradient overlay on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                    {/* Top highlight */}
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />

                    {/* Accent line */}
                    <motion.div
                      className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${product.color} scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500`}
                    />

                    <div className="relative">
                      {/* Icon */}
                      <div className="mb-6 flex items-center justify-between">
                        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${product.color} p-3 flex items-center justify-center`}>
                          <product.icon className="w-full h-full text-white" strokeWidth={1.5} />
                        </div>

                        <div className="text-4xl group-hover:scale-110 transition-transform duration-500">
                          {product.image}
                        </div>
                      </div>

                      <div className="mb-2 text-sm text-gray-600 uppercase tracking-wide">
                        {product.category}
                      </div>

                      <h3 className="text-2xl mb-6 text-gray-900 group-hover:translate-x-1 transition-transform duration-500">
                        {product.model}
                      </h3>

                      {/* Specs */}
                      <div className="space-y-3">
                        {product.specs.map((spec, i) => (
                          <div key={i} className="flex items-center gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-gray-400 group-hover:bg-red-500 transition-colors duration-500" />
                            <span className="text-sm text-gray-700">{spec}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional coverage note - floating panel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative p-8 rounded-2xl bg-gradient-to-r from-gray-50/80 to-red-50/30 border border-gray-200/50 backdrop-blur-sm">
            <div className="absolute top-1/2 right-8 w-32 h-32 bg-gradient-radial from-red-500/10 to-transparent blur-2xl" />

            <div className="relative flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center">
                <Cpu className="w-6 h-6 text-white" strokeWidth={2} />
              </div>

              <div className="flex-1">
                <h4 className="text-xl mb-2 text-gray-900">Custom Integration Coverage</h4>
                <p className="text-gray-700">
                  For specialized battery configurations and custom industrial integrations,
                  contact our technical team for tailored warranty solutions.
                </p>
              </div>

              <button className="flex-shrink-0 px-6 py-3 bg-white border border-gray-300 rounded-lg hover:border-red-300 hover:bg-red-50/50 transition-all duration-300 text-gray-900">
                Contact Team
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
