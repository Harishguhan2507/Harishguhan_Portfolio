import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'

const responsibilities = [
  'Led end-to-end development from requirements to UI/UX, development, and cloud deployment.',
  'Designed UI/UX in Figma with stakeholder reviews, ensuring accessibility and approvals before each release.',
  'Implemented React.js frontends with reusable patterns and component-driven architecture.',
  'Built AWS Lambda + AppSync backends, following GraphQL best practices for observability.',
  'Managed infrastructure with Terraform, keeping environments consistent and versioned.',
  'Enforced clean code via SonarQube, ESLint, automated testing, and DevOps-ready pipelines.',
  'Monitored production health through CloudWatch dashboards and alerting.',
  'Operated in Agile rituals tracked in Jira, shipping iteratively with sprint demos.',
]

const ExperienceSection = () => (
  <section id="experience" className="px-6 py-12 sm:py-20">
    <div className="mx-auto max-w-6xl space-y-10">
      <SectionHeading
        pretitle="Career"
        title="Experience"
        subtitle="Software Engineer crafting cloud-native solutions end-to-end."
      />
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="rounded-3xl border border-slate-200/60 bg-white/90 p-10 shadow-xl shadow-emerald-200/20 backdrop-card transition-colors duration-500 dark:border-white/10 dark:bg-slate-900/40"
      >
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">Software Engineer</h3>
        </div>
        <p className="mt-4 text-base text-slate-600 dark:text-slate-300">
          Driving modern product delivery across UI/UX, cloud services, and infrastructure with
          measurable velocity and reliability for global teams.
        </p>
        <ul className="mt-6 grid gap-3 text-sm text-slate-500 sm:grid-cols-2 dark:text-slate-300">
          {responsibilities.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-emerald-300" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </motion.article>
    </div>
  </section>
)

export default ExperienceSection
