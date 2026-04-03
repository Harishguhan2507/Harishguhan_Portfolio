const SectionHeading = ({ pretitle, title, subtitle }) => (
  <div className="max-w-3xl pb-6">
    <p className="text-xs uppercase tracking-[0.6em] text-emerald-500/80">{pretitle}</p>
    <h2 className="mt-3 text-3xl font-semibold text-slate-900 md:text-4xl dark:text-white">{title}</h2>
    {subtitle && <p className="mt-3 text-base text-slate-600 dark:text-slate-300">{subtitle}</p>}
  </div>
)

export default SectionHeading
