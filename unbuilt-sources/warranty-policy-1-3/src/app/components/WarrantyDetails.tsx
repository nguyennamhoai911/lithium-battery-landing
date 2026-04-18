import { motion } from 'motion/react';
import { CheckCircle2, XCircle, FileText, Wrench } from 'lucide-react';
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';

export function WarrantyDetails() {
  const covered = [
    'Manufacturing defects in materials and workmanship',
    'Battery capacity degradation below 70% within warranty period',
    'Cell failure or premature degradation',
    'BMS (Battery Management System) malfunction',
    'Thermal management system failures',
    'Structural integrity issues',
    'Performance issues under normal operating conditions',
    'Labor costs for authorized repair or replacement',
  ];

  const excluded = [
    'Damage from improper installation or modification',
    'Misuse, abuse, or operation outside specifications',
    'Damage from external causes (fire, flood, power surge)',
    'Normal wear and tear',
    'Unauthorized repairs or alterations',
    'Cosmetic damage that doesn\'t affect performance',
    'Failure to follow maintenance guidelines',
    'Force majeure events',
  ];

  const process = [
    { step: 'Report', description: 'Contact PKG technical support with issue details and system information' },
    { step: 'Assessment', description: 'Remote diagnostics or on-site inspection by certified technicians' },
    { step: 'Approval', description: 'Warranty claim review and approval within 48-72 hours' },
    { step: 'Resolution', description: 'Repair, replacement, or credit issued per coverage terms' },
  ];

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Unified system background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50/30 to-white" />

      {/* Latent grid for logic connection */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #000 1px, transparent 1px),
            linear-gradient(to bottom, #000 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px'
        }}
      />

      {/* Subtle contour lines */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: 'repeating-radial-gradient(circle at 50% 50%, transparent 0, transparent 100px, #000 100px, transparent 101px)',
        }}
      />

      <div className="relative z-10 container mx-auto px-6 lg:px-12 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white/60 backdrop-blur-sm border border-gray-200/60">
            <FileText className="w-4 h-4 text-red-600" />
            <span className="text-sm uppercase tracking-wider text-gray-700">Warranty Terms</span>
          </div>

          <h2 className="text-5xl lg:text-6xl mb-6 tracking-tight text-gray-900">
            Complete <span className="text-red-900">Transparency</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Clear, comprehensive coverage details so you know exactly what's protected
            and how to access your warranty benefits.
          </p>
        </motion.div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* What's Covered */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative p-8 rounded-2xl bg-gradient-to-br from-green-50/30 via-white/60 to-white/80 backdrop-blur-sm border border-gray-200/70 h-full">
              {/* Accent */}
              <div className="absolute top-0 left-0 w-1 h-24 bg-gradient-to-b from-green-500 to-emerald-600 rounded-full" />

              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-white" strokeWidth={2} />
                </div>
                <h3 className="text-2xl text-gray-900">What's Covered</h3>
              </div>

              <div className="space-y-3">
                {covered.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="flex items-start gap-3 group"
                  >
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300" strokeWidth={2} />
                    <span className="text-gray-700 leading-relaxed">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Exclusions */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative p-8 rounded-2xl bg-gradient-to-br from-red-50/20 via-white/60 to-white/80 backdrop-blur-sm border border-gray-200/70 h-full">
              {/* Accent */}
              <div className="absolute top-0 left-0 w-1 h-24 bg-gradient-to-b from-red-500 to-red-600 rounded-full" />

              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center">
                  <XCircle className="w-6 h-6 text-white" strokeWidth={2} />
                </div>
                <h3 className="text-2xl text-gray-900">Exclusions</h3>
              </div>

              <div className="space-y-3">
                {excluded.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="flex items-start gap-3 group"
                  >
                    <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300" strokeWidth={2} />
                    <span className="text-gray-700 leading-relaxed">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Claim Process Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="relative p-8 lg:p-12 rounded-3xl bg-gradient-to-br from-gray-900 via-red-900/90 to-gray-900 overflow-hidden">
            {/* Texture */}
            <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-white/20 to-transparent" />

            {/* Top accent line */}
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-red-400 to-transparent" />

            <div className="relative">
              <div className="flex items-center gap-3 mb-10">
                <Wrench className="w-8 h-8 text-white/90" strokeWidth={1.5} />
                <h3 className="text-3xl text-white">Claim Process</h3>
              </div>

              <div className="grid md:grid-cols-4 gap-6">
                {process.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative"
                  >
                    {/* Connector line */}
                    {index < process.length - 1 && (
                      <div className="hidden md:block absolute top-6 left-[calc(100%+0.75rem)] w-6 h-0.5 bg-white/20" />
                    )}

                    <div className="relative">
                      <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center mb-4">
                        <span className="text-xl text-white">{index + 1}</span>
                      </div>

                      <h4 className="text-lg mb-2 text-white">{item.step}</h4>
                      <p className="text-sm text-white/70 leading-relaxed">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto"
        >
          <h3 className="text-3xl mb-8 text-gray-900 text-center">Frequently Asked Questions</h3>

          <Accordion.Root type="single" collapsible className="space-y-4">
            {[
              {
                q: 'How do I register my warranty?',
                a: 'Warranty registration is automatic upon system activation. You will receive confirmation via email with your warranty certificate and coverage details within 48 hours of installation.',
              },
              {
                q: 'What documentation do I need for a claim?',
                a: 'Required documentation includes: original purchase invoice, installation records, maintenance logs, and detailed description of the issue with supporting diagnostic data from your BMS.',
              },
              {
                q: 'How long does claim processing take?',
                a: 'Initial assessment: 24-48 hours. Full claim review and approval: 48-72 hours. Resolution timeline depends on the specific issue but typically ranges from 3-10 business days.',
              },
              {
                q: 'Is international coverage available?',
                a: 'Yes, PKG warranty is honored globally through our network of certified service centers in 45 countries. Coverage terms remain consistent regardless of location.',
              },
            ].map((faq, index) => (
              <Accordion.Item
                key={index}
                value={`item-${index}`}
                className="relative rounded-xl bg-white/70 backdrop-blur-sm border border-gray-200/70 overflow-hidden hover:border-gray-300 transition-colors duration-300"
              >
                <Accordion.Trigger className="group w-full flex items-center justify-between p-6 text-left">
                  <span className="text-lg text-gray-900 pr-8">{faq.q}</span>
                  <ChevronDown className="w-5 h-5 text-gray-600 transition-transform duration-300 group-data-[state=open]:rotate-180" />
                </Accordion.Trigger>

                <Accordion.Content className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                  <div className="px-6 pb-6 text-gray-700 leading-relaxed">
                    {faq.a}
                  </div>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </motion.div>
      </div>
    </section>
  );
}
