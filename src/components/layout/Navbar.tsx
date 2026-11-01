import React, { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { nav } from '../../data/content'

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [atTop, setAtTop] = useState(true)
  const lastScrollY = useRef(0)
  const location = useLocation()
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (y) => {
    setAtTop(y < 50)
    if (y > lastScrollY.current && y > 80) {
      setHidden(true)
    } else {
      setHidden(false)
    }
    lastScrollY.current = y
  })

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false)
  }, [location.pathname])

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/'
    return location.pathname.startsWith(href)
  }

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-[100] flex justify-center px-4 py-3"
        animate={{ y: hidden ? -100 : 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <motion.nav
          className={`
            flex items-center justify-between gap-8 px-5 py-2.5 rounded-full
            transition-all duration-300 max-w-5xl w-full
            ${atTop
              ? 'bg-cream/80 backdrop-blur-sm border border-orange-glow shadow-glass'
              : 'bg-white/90 backdrop-blur-xl border border-orange/10 shadow-glass-lg'
            }
          `}
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.5, ease: 'easeOut' }}
        >
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 shrink-0" aria-label="AIZU Foundation Home">
            <img
              src={nav.logo.src}
              alt={nav.logo.alt}
              className="w-8 h-8 object-contain"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40"><circle cx="20" cy="20" r="18" fill="%23FF6B00"/><text x="20" y="26" text-anchor="middle" fill="white" font-size="14" font-weight="bold">A</text></svg>'
              }}
            />
            <span className="font-heading font-bold text-sm tracking-wider">
              <span className="text-dark">AIZU</span>{' '}
              <span className="text-orange">FOUNDATION</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-1">
            {nav.links.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className={`
                    relative px-4 py-2 text-sm font-medium font-body rounded-full transition-all duration-200
                    ${isActive(link.href)
                      ? 'bg-orange text-white shadow-orange'
                      : 'text-dark hover:text-orange hover:bg-orange/5'
                    }
                  `}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-full text-dark hover:text-orange hover:bg-orange/5 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </motion.nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-[90] md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-dark/60 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />

            {/* Menu panel */}
            <motion.div
              className="absolute top-20 left-4 right-4 bg-white rounded-3xl shadow-glass-lg overflow-hidden"
              initial={{ scale: 0.95, opacity: 0, y: -20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: -20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            >
              <div className="p-6">
                <ul className="space-y-1">
                  {nav.links.map((link, i) => (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <Link
                        to={link.href}
                        className={`
                          block px-4 py-3 rounded-xl text-base font-medium font-body transition-all
                          ${isActive(link.href)
                            ? 'bg-orange text-white'
                            : 'text-dark hover:bg-orange/5 hover:text-orange'
                          }
                        `}
                        onClick={() => setIsOpen(false)}
                      >
                        {link.label}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
                <div className="mt-4 pt-4 border-t border-cream">
                  <a
                    href="https://t.me/aizuofficial"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full justify-center text-sm"
                  >
                    Join Community
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
