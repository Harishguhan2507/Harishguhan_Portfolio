import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'

const CertificationsSection = () => (
  <section id="certifications" className="px-6 py-12 sm:py-20">
    <div className="mx-auto max-w-6xl space-y-8">
      <SectionHeading
        pretitle="Proof"
        title="Certifications"
        subtitle="Validated knowledge in cloud architecture and resilient systems."
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="rounded-3xl border border-slate-200/60 bg-gradient-to-r from-white/80 via-emerald-100/50 to-white/80 p-8 shadow-xl shadow-emerald-200/20 backdrop-card transition-colors duration-500 dark:border-white/10 dark:from-slate-900/80 dark:via-slate-900/60 dark:to-slate-900/60"
      >
        <p className="text-sm uppercase tracking-[0.4em] text-emerald-200">AWS</p>
        <h3 className="mt-3 text-2xl font-semibold text-slate-900 dark:text-white">
          AWS Certified Solutions Architect – Associate (SAA-C03)
        </h3>
        <p className="mt-4 max-w-3xl text-sm text-slate-600 dark:text-slate-300">
          Demonstrates expertise in designing secure, cost-efficient, and scalable applications
          on the AWS platform and managing complex cloud architectures end-to-end.
        </p>
      </motion.div>
    </div>
  </section>
)

export default CertificationsSection
