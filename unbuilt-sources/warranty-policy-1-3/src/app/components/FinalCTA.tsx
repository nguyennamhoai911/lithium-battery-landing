import { motion } from 'motion/react';
import { ArrowRight, Download, Mail, Phone } from 'lucide-react';

export function FinalCTA() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Cinematic finish background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-gray-100" />

      {/* Dramatic light rays */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-blue-500/5" />

      {/* Multiple radial glows for depth */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-radial from-red-500/10 to-transparent blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-[800px] h-[800px] bg-gradient-radial from-blue-500/8 to-transparent blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-radial from-white/40 to-transparent blur-3xl" />

      {/* Energy path */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent" />

      {/* Fine grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #000 0.5px, transparent 0.5px),
            linear-gradient(to bottom, #000 0.5px, transparent 0.5px)
          `,
          backgroundSize: '80px 80px'
        }}
      />

      <div className="relative z-10 container mx-auto px-6 lg:px-12 max-w-7xl">
        {/* Main CTA block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Hero CTA card */}
          <div className="relative p-12 lg:p-16 rounded-3xl bg-gradient-to-br from-gray-900 via-red-900 to-gray-900 overflow-hidden">
            {/* Sophisticated texture layers */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5" />
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]" />

            {/* Metallic edge highlights */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-400/30 to-transparent" />

            {/* Scan line effect */}
            <motion.div
              animate={{ y: ['-100%', '200%'] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent"
              style={{ height: '100px' }}
            />

            <div className="relative text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="text-5xl lg:text-6xl mb-6 text-white tracking-tight">
                  Ready to Protect Your Investment?
                </h2>

                <p className="text-xl lg:text-2xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
                  Experience the confidence of PKG's precision-engineered warranty protection.
                  Our technical team is ready to support your power infrastructure.
                </p>

                {/* CTA buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="group relative px-10 py-5 bg-white text-gray-900 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-white/20"
                  >
                    <div className="relative flex items-center gap-3">
                      <span className="text-lg">Get Started Today</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>

                    {/* Hover shine effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      animate={{ x: ['-200%', '200%'] }}
                      transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                    />
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="group px-10 py-5 bg-white/10 backdrop-blur-sm text-white rounded-xl border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300 flex items-center gap-3"
                  >
                    <Download className="w-5 h-5" />
                    <span className="text-lg">Download Full Terms</span>
                  </motion.button>
                </div>

                {/* Contact options */}
                <div className="grid md:grid-cols-3 gap-8 pt-12 border-t border-white/10">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-center"
                  >
                    <Phone className="w-8 h-8 text-red-400 mx-auto mb-3" strokeWidth={1.5} />
                    <div className="text-sm text-white/60 mb-1">24/7 Support Hotline</div>
                    <div className="text-lg text-white">1-800-PKG-SUPPORT</div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-center"
                  >
                    <Mail className="w-8 h-8 text-red-400 mx-auto mb-3" strokeWidth={1.5} />
                    <div className="text-sm text-white/60 mb-1">Technical Support</div>
                    <div className="text-lg text-white">warranty@pkg-industrial.com</div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="text-center"
                  >
                    <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center mx-auto mb-3">
                      <div className="w-3 h-3 rounded-full bg-red-400" />
                    </div>
                    <div className="text-sm text-white/60 mb-1">Response Time</div>
                    <div className="text-lg text-white">&lt; 24 Hours</div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Footer branding */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <div className="text-4xl lg:text-5xl mb-4 tracking-tight">
            <span className="bg-gradient-to-r from-gray-900 via-red-900 to-gray-900 bg-clip-text text-transparent">
              PKG Industrial
            </span>
          </div>
          <p className="text-gray-600 text-lg">
            Precision Engineering. Absolute Protection.
          </p>

          {/* Decorative end mark */}
          <div className="mt-12 flex items-center justify-center gap-2">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-gray-300" />
            <div className="w-2 h-2 rounded-full bg-red-500" />
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-gray-300" />
          </div>
        </motion.div>
      </div>

      {/* Final ambient glow */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-gray-100 to-transparent" />
    </section>
  );
}
