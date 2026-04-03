import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'

const focusPoints = ['Clean code', 'Performance', 'Scalable systems']

const AboutSection = () => (
  <section id="about" className="px-6 py-12 sm:py-20">
    <div className="mx-auto max-w-6xl space-y-10">
      <SectionHeading
        pretitle="Profile"
        title="About Me"
        subtitle="4+ years working on full-stack, cloud-native products with design-forward UIs."
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]"
      >
        <div className="rounded-3xl border border-slate-200/60 bg-white/90 p-8 shadow-xl shadow-indigo-500/10 backdrop-card transition-colors duration-500 dark:border-white/10 dark:bg-white/5">
          <p className="text-lg text-slate-900 dark:text-slate-200">
            I am a software engineer shaping cloud-native experiences with a strong focus on React, AWS,
            and Terraform. My work includes end-to-end ownership—from requirements and Figma-driven
            UI/UX through development, testing, and deployment—while ensuring high-quality engineering
            practices and stakeholder alignment.
          </p>
          <ul className="mt-8 space-y-3 text-sm text-slate-500 dark:text-slate-300">
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-emerald-300" />
              React + AWS + Terraform expertise powering scalable service layers and resilient tooling.
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-emerald-300" />
              Strong in UI/UX with Figma mockups, prototypes, and stakeholder collaboration on every release.
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-emerald-300" />
              Focused on clean code, observable performance, and systems built to scale with confidence.
            </li>
          </ul>
        </div>
        <div className="rounded-3xl border border-slate-200/60 bg-white/90 p-8 shadow-xl shadow-indigo-500/10 backdrop-card transition-colors duration-500 dark:border-white/10 dark:bg-white/5">
          <p className="text-sm uppercase tracking-[0.4em]">Focus Areas</p>
          <div className="mt-6 flex flex-wrap gap-3">
            {focusPoints.map((point) => (
              <span
                key={point}
                className="rounded-full border border-emerald-300/70 text-black bg-emerald-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-300/80"
              >
                {point}
              </span>
            ))}
          </div>
          <p className="mt-8 text-sm">
            UI/UX collaboration via Figma, rapid prototyping, and stakeholder sign-off ensures alignment
            before a single line of code is written.
          </p>
        </div>
      </motion.div>
    </div>
  </section>
)

export default AboutSection
