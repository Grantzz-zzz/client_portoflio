import { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'

const LINKS = [
  { to: '/', num: '01', label: 'Home' },
  { to: '/about', num: '02', label: 'About' },
  { to: '/portfolio', num: '03', label: 'Portfolio' },
  { to: '/editorial', num: '04', label: 'Editorial' },
  { to: '/contact', num: '05', label: 'Contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 py-6 md:px-12 md:py-8 mix-blend-difference text-cream">
        <NavLink to="/" className="font-display text-lg tracking-widest2 uppercase" data-cursor="expand">
          Iyah Manalo
        </NavLink>

        {/* Desktop inline nav */}
        <nav className="hidden md:flex gap-8 kicker">
          {LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `relative pb-1 transition-colors duration-300 ${isActive ? 'opacity-100' : 'opacity-60 hover:opacity-100'}`
              }
              data-cursor="expand"
            >
              {({ isActive }) => (
                <>
                  {l.num} — {l.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute left-0 -bottom-0.5 h-px w-full bg-cream"
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Mobile trigger */}
        <button
          onClick={() => setOpen(true)}
          className="md:hidden kicker"
          aria-label="Open menu"
          data-cursor="expand"
        >
          Menu
        </button>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 bg-ink text-cream flex flex-col justify-between p-8"
          >
            <div className="flex justify-between items-center">
              <span className="font-display text-lg tracking-widest2 uppercase">Iyah Manalo</span>
              <button onClick={() => setOpen(false)} className="kicker" aria-label="Close menu">
                Close
              </button>
            </div>

            <nav className="flex flex-col gap-2">
              {LINKS.map((l, i) => (
                <motion.div
                  key={l.to}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                >
                  <NavLink
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className="font-display text-5xl leading-tight hover:opacity-60 transition-opacity"
                  >
                    <span className="kicker align-super mr-3 opacity-50">{l.num}</span>
                    {l.label}
                  </NavLink>
                </motion.div>
              ))}
            </nav>

            <div className="kicker opacity-50">{location.pathname}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
