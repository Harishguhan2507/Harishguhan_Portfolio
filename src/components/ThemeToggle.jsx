import { useEffect, useState } from 'react'
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid'

const ThemeToggle = () => {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    if (typeof window === 'undefined') return
    const storedTheme = window.localStorage.getItem('portfolio-theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const nextTheme = storedTheme || (prefersDark ? 'dark' : 'light')
    setTheme(nextTheme)
    document.documentElement.classList.toggle('dark', nextTheme === 'dark')
  }, [])

  const toggleTheme = () => {
    setTheme((prev) => {
      const next = prev === 'dark' ? 'light' : 'dark'
      document.documentElement.classList.toggle('dark', next === 'dark')
      window.localStorage.setItem('portfolio-theme', next)
      return next
    })
  }

  return (
    <button
      onClick={toggleTheme}
      type="button"
      aria-label="Toggle theme"
      className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300/60 bg-white/80 text-slate-900 transition hover:border-emerald-400 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-100"
    >
      {theme === 'dark' ? (
        <SunIcon className="h-5 w-5 text-amber-400" />
      ) : (
        <MoonIcon className="h-5 w-5 text-sky-400" />
      )}
    </button>
  )
}

export default ThemeToggle
