import { motion } from 'motion/react';
import { Award, Building2, Globe, Users } from 'lucide-react';

export function TrustStory() {
  const stats = [
    { icon: Building2, value: '500+', label: 'Enterprise Clients', description: 'Global industrial partners' },
    { icon: Globe, value: '45', label: 'Countries', description: 'Worldwide coverage network' },
    { icon: Users, value: '10K+', label: 'Systems Protected', description: 'Active warranty coverage' },
    { icon: Award, value: '99.8%', label: 'Claim Success', description: 'Industry-leading approval rate' },
  ];

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Continuity layer from hero */}
      <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-white/80 to-transparent" />

      {/* Subtle surface transition */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-50/40 to-transparent" />

      {/* Light technical pattern */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #000 0px, transparent 2px, transparent 40px)',
        }}
      />

      <div className="relative z-10 container mx-auto px-6 lg:px-12 max-w-7xl">
        {/* Section intro - overlapping from previous */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-20"
        >
          <div className="inline-block px-1 py-0.5 mb-6 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-transparent" />
            <span className="relative text-sm uppercase tracking-wider text-red-900/70">Built on Trust</span>
          </div>

          <h2 className="text-5xl lg:text-6xl mb-6 tracking-tight text-gray-900">
            Engineered for <span className="text-red-900">Reliability</span>
          </h2>

          <p className="text-xl text-gray-600 leading-relaxed">
            Every PKG battery warranty represents our commitment to industrial excellence.
            Backed by rigorous testing, global support infrastructure, and a proven track record
            of protecting mission-critical power systems across the most demanding environments.
          </p>
        </motion.div>

        {/* Stats grid - asymmetric layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{
                y: -4,
                transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
              }}
              className="group relative"
            >
              {/* Card with premium surface treatment */}
              <div className="relative h-full p-8 rounded-2xl bg-white/60 backdrop-blur-sm border border-gray-200/60 hover:border-red-200/60 transition-all duration-500">
                {/* Subtle gradient edge */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-red-50/0 via-transparent to-red-50/0 group-hover:from-red-50/50 group-hover:to-red-50/20 transition-all duration-500" />

                {/* Inner highlight */}
                <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent" />

                {/* Red accent line - appears on hover */}
                <motion.div
                  className="absolute top-0 left-0 w-1 h-0 bg-gradient-to-b from-red-500 to-red-600 rounded-full group-hover:h-full transition-all duration-500"
                />

                <div className="relative">
                  <stat.icon className="w-10 h-10 text-gray-900 mb-6 group-hover:text-red-900 transition-colors duration-500" strokeWidth={1.5} />

                  <div className="text-4xl lg:text-5xl mb-2 text-gray-900 group-hover:translate-x-1 transition-transform duration-500">
                    {stat.value}
                  </div>

                  <div className="text-lg mb-2 text-gray-900">
                    {stat.label}
                  </div>

                  <div className="text-sm text-gray-600">
                    {stat.description}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quality statement - floating */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-24 max-w-4xl mx-auto"
        >
          <div className="relative p-12 rounded-3xl bg-gradient-to-br from-gray-900 via-red-900/90 to-gray-900 overflow-hidden">
            {/* Texture overlay */}
            <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-white/20 to-transparent" />

            {/* Energy line accent */}
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-red-400 to-transparent" />

            <div className="relative text-center">
              <p className="text-2xl lg:text-3xl text-white/95 leading-relaxed">
                "Our warranty isn't just a promise—it's a precision-engineered
                protection system designed to match the reliability of PKG batteries themselves."
              </p>

              <div className="mt-8 text-sm text-white/60 uppercase tracking-wider">
                PKG Quality Assurance Division
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
