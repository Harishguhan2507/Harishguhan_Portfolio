import { useEffect, useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import ThemeToggle from './ThemeToggle'

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Focus', href: '#focus' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const sections = navLinks.map((link) =>
      document.querySelector(link.href),
    )
    const handler = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2.5
      let current = 'hero'
      sections.forEach((section, index) => {
        if (section && scrollPosition >= section.offsetTop) {
          current = navLinks[index].href.replace('#', '')
        }
      })
      setActiveSection(current)
    }

    window.addEventListener('scroll', handler, { passive: true })
    handler()
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const menuItems = useMemo(
    () =>
      navLinks.map((link) => (
        <a
          key={link.href}
          href={link.href}
          onClick={() => setMenuOpen(false)}
          className={`block rounded-xl px-4 py-3 text-sm font-semibold uppercase tracking-[0.3em] transition ${
            activeSection === link.href.replace('#', '')
              ? 'text-emerald-500'
              : 'text-slate-800 dark:text-slate-200'
          }`}
        >
          {link.label}
        </a>
      )),
    [activeSection],
  )

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200/60 bg-white/80 backdrop-blur-xl transition-colors duration-500 dark:border-slate-900/60 dark:bg-slate-950/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 text-sm font-medium">
        <a
          href="#hero"
          className="text-lg font-semibold tracking-wide text-slate-900 transition hover:text-emerald-500 dark:text-white"
        >
          Harishguhan
        </a>
        <nav className="hidden items-center gap-6 text-slate-600 md:flex dark:text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`relative transition hover:text-emerald-500 ${
                activeSection === link.href.replace('#', '')
                  ? 'text-emerald-500'
                  : 'text-slate-700 dark:text-slate-200'
              }`}
            >
              <span className="pointer-events-none">{link.label}</span>
              {activeSection === link.href.replace('#', '') && (
                <span className="absolute inset-x-0 bottom-0 h-[2px] bg-emerald-500" />
              )}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button
            type="button"
            aria-label="Toggle navigation menu"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="md:hidden rounded-full border border-slate-200 px-3 py-2 text-slate-700 transition hover:border-emerald-400 hover:text-emerald-500 dark:border-slate-700 dark:text-slate-200"
          >
            {menuOpen ? (
              <XMarkIcon className="h-5 w-5" />
            ) : (
              <Bars3Icon className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-20 bg-white dark:bg-slate-950/90"
            onClick={() => setMenuOpen(false)}
          >
            <motion.nav
              key="mobile-menu-panel"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 220, damping: 28 }}
              className="relative mx-auto mt-24 flex h-auto w-full max-w-md flex-col gap-3 rounded-3xl border border-slate-200/50 bg-white px-6 py-8 shadow-2xl shadow-slate-900/20 dark:border-white/10 dark:bg-slate-900/80"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex justify-end">
                <button
                  type="button"
                  aria-label="Close navigation menu"
                  onClick={() => setMenuOpen(false)}
                  className="rounded-full border border-slate-200 p-2 text-slate-700 transition hover:border-emerald-400 hover:text-emerald-500 dark:border-white/10 dark:text-slate-100"
                >
                  <XMarkIcon className="h-4 w-4" />
                </button>
              </div>
              {menuItems}
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar
