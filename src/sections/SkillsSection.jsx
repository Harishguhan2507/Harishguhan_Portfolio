import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import { skillGroups } from '../data/skills'

const SkillsSection = () => (
  <section id="skills" className="px-6 py-12 sm:py-20">
    <div className="mx-auto max-w-6xl space-y-10">
      <SectionHeading
        pretitle="Expertise"
        title="Skills"
      />
      <div className="grid gap-6 md:grid-cols-2">
        {skillGroups.map((group, index) => (
          <motion.article
            key={group.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="rounded-3xl border border-slate-200/60 bg-white/90 p-6 shadow-lg shadow-slate-900/15 backdrop-card transition-colors duration-500 dark:border-white/10 dark:bg-white/5"
          >
            <div className="flex items-center gap-4 border-b border-slate-200/50 pb-4 dark:border-white/10">
              <group.icon className="h-5 w-5 text-emerald-500" />
              <div>
                <p className="text-sm uppercase tracking-[0.4em] text-emerald-500/70">{group.category}</p>
                <p className="text-sm text-slate-600 dark:text-slate-300">{group.description}</p>
              </div>
            </div>
            <div className="mt-5 space-y-3">
              {group.skills.map((skill) => {
                const SkillIcon = skill.icon ?? group.icon
                const iconColor = skill.iconColor ?? "text-emerald-500"

                return (
                  <div
                    key={skill.name}
                    className="rounded-2xl border border-slate-200/60 bg-slate-50 px-4 py-3 text-slate-900 transition hover:border-emerald-400/80 hover:bg-slate-100 dark:border-white/10 dark:bg-slate-900/40 dark:text-slate-100"
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-2xl border border-slate-200/60 bg-white shadow-sm shadow-slate-900/10 transition dark:border-white/10 dark:bg-slate-900/20">
                        <SkillIcon
                          className={`h-5 w-5 ${iconColor}`}
                        />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-900 dark:text-white">{skill.name}</p>
                        <p className="text-xs text-slate-500 dark:text-slate-300">{skill.detail}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
)

export default SkillsSection
