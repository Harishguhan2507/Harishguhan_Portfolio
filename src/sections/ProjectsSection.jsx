import { useEffect, useState } from 'react'
import { ArrowTopRightOnSquareIcon, CodeBracketSquareIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import { projects } from '../data/projects'

const skeletons = [1, 2, 3]

const ProjectsSection = () => {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 900)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section id="projects" className="px-6 py-12 sm:py-20">
      <div className="mx-auto max-w-6xl space-y-10">
        <SectionHeading
          pretitle="Work"
          title="Projects"
          subtitle="Modern, high-grade initiatives showing reproducible impact and polished UX."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {loaded
            ? projects.map((project, index) => (
                <motion.article
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="flex h-full flex-col rounded-3xl border border-slate-200/60 bg-white/90 p-6 shadow-2xl shadow-slate-200/30 backdrop-card transition-colors duration-500 dark:border-white/10 dark:bg-slate-900/60"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{project.title}</h3>
                      <p className="text-sm text-slate-500 dark:text-slate-300">{project.description}</p>
                    </div>
                  </div>
                  <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                    {project.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-3">
                        <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.stack.map((stack) => (
                    <span
                      key={`${project.id}-${stack}`}
                      className="rounded-full border border-slate-200/60 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.4em] text-emerald-500 dark:border-white/10 dark:text-emerald-200"
                    >
                        {stack}
                      </span>
                    ))}
                  </div>
                </motion.article>
              ))
            : skeletons.map((skeleton) => (
                <div
                  key={skeleton}
                  className="h-full animate-pulse rounded-3xl border border-white/10 bg-slate-900/60 p-6 backdrop-card"
                >
                  <div className="h-5 w-3/4 rounded-full bg-slate-700" />
                  <div className="mt-3 space-y-3">
                    <span className="block h-3 w-full rounded-full bg-slate-700" />
                    <span className="block h-3 w-5/6 rounded-full bg-slate-700" />
                    <span className="block h-3 w-4/6 rounded-full bg-slate-700" />
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    <span className="h-6 w-16 rounded-full bg-slate-700" />
                    <span className="h-6 w-20 rounded-full bg-slate-700" />
                    <span className="h-6 w-12 rounded-full bg-slate-700" />
                  </div>
                  <div className="mt-6 flex gap-3">
                    <span className="h-9 w-28 rounded-full bg-slate-700" />
                    <span className="h-9 w-32 rounded-full bg-slate-700" />
                  </div>
                </div>
              ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
