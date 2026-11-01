import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Send, MessageCircle, ArrowUp, Mail, ExternalLink } from 'lucide-react'
import { footer } from '../../data/content'

const TwitterIcon: React.FC<{ size?: number; className?: string }> = ({ size = 16, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 24.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

const socialIconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Send,
  Twitter: TwitterIcon,
  MessageCircle,
}

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-orange text-white overflow-hidden">
      {/* Wave top */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden leading-none rotate-180">
        <svg viewBox="0 0 1440 80" className="w-full h-20 fill-cream-light">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" />
        </svg>
      </div>

      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-light/30 via-orange to-orange-dark pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2.5 mb-4">
              <img
                src={footer.logo.src}
                alt={footer.logo.alt}
                className="w-10 h-10 object-contain brightness-0 invert"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none'
                }}
              />
              <span className="font-heading font-bold text-lg tracking-wider text-white">
                AIZU <span className="text-orange-100">FOUNDATION</span>
              </span>
            </Link>
            <p className="text-orange-100 text-sm leading-relaxed mb-5">{footer.tagline}</p>
            <div className="flex items-center gap-3">
              {footer.socials.map((social) => {
                const Icon = socialIconMap[social.icon] || Send
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center text-white hover:bg-white hover:text-orange transition-all duration-200"
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon size={16} />
                  </motion.a>
                )
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-white text-base mb-4">Quick Links</h3>
            <ul className="space-y-2.5">
              {footer.quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-orange-100 text-sm hover:text-white transition-colors animated-link"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Ecosystem */}
          <div>
            <h3 className="font-heading font-semibold text-white text-base mb-4">Ecosystem</h3>
            <ul className="space-y-2.5">
              {footer.ecosystem.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-100 text-sm hover:text-white transition-colors flex items-center gap-1 group"
                  >
                    {link.label}
                    <ExternalLink size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-semibold text-white text-base mb-4">Contact</h3>
            <div className="space-y-3">
              <a
                href={`mailto:${footer.contact.email}`}
                className="flex items-center gap-2 text-orange-100 text-sm hover:text-white transition-colors"
              >
                <Mail size={14} />
                {footer.contact.email}
              </a>
              <a
                href={footer.contact.websiteHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-orange-100 text-sm hover:text-white transition-colors"
              >
                <ExternalLink size={14} />
                {footer.contact.website}
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-orange-100 text-xs">{footer.copyright}</p>
          <p className="text-orange-200 text-xs italic">{footer.disclaimer}</p>
        </div>
      </div>

      {/* Back to top */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-dark text-white flex items-center justify-center shadow-orange z-50 hover:bg-orange-dark transition-colors"
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Back to top"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2 }}
      >
        <ArrowUp size={20} />
      </motion.button>
    </footer>
  )
}

export default Footer
