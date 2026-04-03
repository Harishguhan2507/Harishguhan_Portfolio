import { EnvelopeIcon, LinkIcon, CodeBracketIcon } from '@heroicons/react/24/solid'
import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'

const contacts = [
  {
    label: 'Email',
    value: 'harishguhanm.official2507@gmail.com',
    href: 'mailto:harishguhanm.official2507@gmail.com',
    icon: EnvelopeIcon,
  },
  {
    label: 'LinkedIn',
    value: '/in/harishguhan',
    href: 'https://www.linkedin.com/in/harishguhan-muruganantham-105083221/',
    icon: LinkIcon,
  },
  {
    label: 'GitHub',
    value: '/harishguhan',
    href: 'https://github.com/harishguhan',
    icon: CodeBracketIcon,
  },
]

const ContactSection = () => (
  <section id="contact" className="px-4 sm:px-6 py-12 sm:py-20">
  <div className="mx-auto max-w-6xl space-y-8">
    <SectionHeading
      pretitle="Connect"
      title="Contact"
      subtitle="Responsive, available, and ready for the next engineering challenge."
    />

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="rounded-3xl border border-slate-200/60 bg-white/90 p-5 sm:p-6 md:p-8 shadow-xl shadow-emerald-200/30 backdrop-card transition-colors duration-500 dark:border-white/10 dark:bg-slate-900/50"
    >
      <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
        Whether you are building a new product, migrating workloads to the cloud, or refining UX, I
        am always interested in collaborating on thoughtful, scalable solutions.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {contacts.map((contact) => (
          <a
            key={contact.label}
            href={contact.href}
            target="_blank"
            rel="noreferrer"
            className="group flex items-start gap-3 sm:gap-4 rounded-2xl border border-slate-200/60 bg-slate-50/80 px-4 sm:px-5 py-4 text-sm text-slate-900 transition hover:border-emerald-400/80 hover:bg-slate-100 dark:border-white/10 dark:bg-slate-900/30 dark:text-slate-100"
          >
            <contact.icon className="h-5 w-5 flex-shrink-0 text-emerald-500" />
            <div>
              <p className="text-xs uppercase tracking-[0.3em] sm:tracking-[0.4em] text-emerald-500/80">
                {contact.label}
              </p>
              <p className="text-sm sm:text-base font-semibold text-slate-900 dark:text-slate-50 break-all">
                {contact.value}
              </p>
            </div>
          </a>
        ))}
      </div>
    </motion.div>
  </div>
</section>
)

export default ContactSection
