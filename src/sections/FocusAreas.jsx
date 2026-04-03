import { motion } from 'framer-motion'
import {
  SparklesIcon,
  BoltIcon,
  CogIcon,
  PencilSquareIcon,
} from '@heroicons/react/24/outline'
import SectionHeading from '../components/SectionHeading'

const focusItems = [
  {
    label: 'Clean Code',
    description: 'Readable, maintainable implementations with strong linting and testing.',
    icon: SparklesIcon,
  },
  {
    label: 'Performance',
    description: 'Profiling and tuning to keep interactions sub-100ms.',
    icon: BoltIcon,
  },
  {
    label: 'Scalable Systems',
    description: 'Modular services and resilient infrastructure for growth.',
    icon: CogIcon,
  },
  {
    label: 'UI/UX Collaboration',
    description:
      'Figma-led prototyping and stakeholder alignment before code lands in production.',
    icon: PencilSquareIcon,
  },
]

const FocusAreas = () => (
  <section id="focus" className="px-6 py-12 sm:py-20">
    <div className="mx-auto max-w-6xl space-y-6">
      <SectionHeading
        pretitle="Mindset"
        title="Focus Areas"
      />
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="rounded-3xl border border-slate-200/60 bg-white/90 p-6 shadow-lg shadow-slate-900/15 backdrop-card transition duration-500 hover:-translate-y-1 hover:shadow-2xl dark:border-white/10 dark:bg-white/5"
      >
        <div className="grid gap-4 md:grid-cols-2">
          {focusItems.map((item) => (
            <div
              key={item.label}
              className="flex items-start gap-4 rounded-2xl border border-white/20 bg-slate-50/80 p-4 transition hover:border-emerald-400/80 hover:bg-white dark:border-slate-800/60 dark:bg-slate-900/50"
            >
              <item.icon className="h-6 w-6 flex-shrink-0 text-emerald-500" />
              <div>
                <p className="text-base font-semibold text-slate-900 dark:text-white">
                  {item.label}
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-300">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.article>
    </div>
  </section>
)

export default FocusAreas
