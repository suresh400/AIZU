import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { GraduationCap, Lightbulb, Globe, Heart, ArrowRight, Sparkles } from 'lucide-react'
import { hero } from '../../data/content'

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  GraduationCap,
  Lightbulb,
  Globe,
  Heart,
}

const FloatingCard: React.FC<{
  icon: string
  title: string
  subtitle: string
  delay: number
  style?: React.CSSProperties
}> = ({ icon, title, subtitle, delay, style }) => {
  const Icon = iconMap[icon] || Heart
  return (
    <motion.div
      className="absolute glass rounded-2xl p-4 shadow-card min-w-[130px]"
      style={style}
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 2.2 + delay, duration: 0.5, ease: 'backOut' }}
    >
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4 + delay, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="w-9 h-9 rounded-xl bg-orange/10 flex items-center justify-center mb-2.5">
          <Icon size={18} className="text-orange" />
        </div>
        <p className="font-heading font-semibold text-dark text-sm leading-tight">{title}</p>
        <p className="text-muted text-xs mt-0.5">{subtitle}</p>
      </motion.div>
    </motion.div>
  )
}

// Animated Aurora background
const Aurora: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Orb 1 */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full"
        style={{
          background: 'radial-gradient(ellipse, rgba(255,107,0,0.12) 0%, transparent 70%)',
          top: '-100px',
          right: '-100px',
        }}
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      {/* Orb 2 */}
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full"
        style={{
          background: 'radial-gradient(ellipse, rgba(245,158,11,0.1) 0%, transparent 70%)',
          bottom: '50px',
          left: '100px',
        }}
        animate={{
          scale: [1.1, 0.9, 1.1],
          x: [0, -20, 0],
          y: [0, 20, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />
      {/* Orb 3 */}
      <motion.div
        className="absolute w-[300px] h-[300px] rounded-full"
        style={{
          background: 'radial-gradient(ellipse, rgba(255,107,0,0.08) 0%, transparent 70%)',
          top: '50%',
          left: '40%',
        }}
        animate={{ scale: [0.9, 1.1, 0.9] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />
      {/* Grid dots */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'radial-gradient(circle, #FF6B00 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
    </div>
  )
}

const HeroSection: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null)

  const cardPositions = [
    { style: { top: '5%', right: '25%' } },
    { style: { top: '35%', right: '8%' } },
    { style: { top: '60%', right: '30%' } },
    { style: { top: '30%', right: '42%' } },
  ]

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: 'linear-gradient(160deg, #F5EDD8 0%, #FFF8ED 50%, #F5EDD8 100%)',
      }}
    >
      <Aurora />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            {/* Tag */}
            <motion.div
              className="section-tag mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.9, duration: 0.5 }}
            >
              <Sparkles size={12} />
              {hero.tag}
            </motion.div>

            {/* Headline */}
            <div className="mb-6 overflow-hidden">
              <motion.h1
                className="font-heading font-extrabold leading-[1.1] text-dark"
                style={{ fontSize: 'clamp(2.5rem, 5.5vw, 4.5rem)' }}
              >
                {hero.headline.map((line, i) => (
                  <motion.span
                    key={i}
                    className="block"
                    initial={{ y: 60, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      delay: 2.0 + i * 0.12,
                      duration: 0.7,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                  >
                    {i === 1 ? (
                      <span className="gradient-text">{line}</span>
                    ) : (
                      line
                    )}
                  </motion.span>
                ))}
              </motion.h1>
            </div>

            {/* Paragraph */}
            <motion.p
              className="text-body text-base md:text-lg leading-relaxed mb-8 max-w-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.3, duration: 0.6 }}
            >
              {hero.paragraph}
            </motion.p>

            {/* Buttons */}
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.5, duration: 0.5 }}
            >
              {hero.buttons.map((btn) => {
                const isMail = btn.href.startsWith('mailto:')
                const isHttp = btn.href.startsWith('http')
                return isMail || isHttp ? (
                  <a
                    key={btn.label}
                    href={btn.href}
                    target={isHttp ? '_blank' : undefined}
                    rel={isHttp ? 'noopener noreferrer' : undefined}
                    className={btn.primary ? 'btn-primary' : 'btn-outline'}
                  >
                    {btn.label}
                    {btn.primary && <ArrowRight size={16} />}
                  </a>
                ) : (
                  <Link
                    key={btn.label}
                    to={btn.href}
                    className={btn.primary ? 'btn-primary' : 'btn-outline'}
                  >
                    {btn.label}
                    {btn.primary && <ArrowRight size={16} />}
                  </Link>
                )
              })}
            </motion.div>

            {/* Stats pills */}
            <motion.div
              className="flex flex-wrap gap-4 mt-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.7, duration: 0.6 }}
            >
              {[
                { n: '4', label: 'Countries' },
                { n: '500+', label: 'Families Helped' },
                { n: '7', label: 'Ecosystem Products' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2">
                  <span className="font-mono-accent font-bold text-orange text-lg">{item.n}</span>
                  <span className="text-muted text-sm">{item.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Floating cards */}
          <div className="relative hidden lg:block h-[420px]">
            {hero.floatingCards.map((card, i) => (
              <FloatingCard
                key={card.title}
                icon={card.icon}
                title={card.title}
                subtitle={card.subtitle}
                delay={i * 0.15}
                style={cardPositions[i]?.style}
              />
            ))}

            {/* Central visual element */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              style={{
                top: '20%',
                left: '10%',
                right: '10%',
              }}
            >
              <motion.div
                className="w-48 h-48 rounded-full"
                style={{
                  background:
                    'radial-gradient(ellipse, rgba(255,107,0,0.15) 0%, rgba(245,158,11,0.08) 50%, transparent 80%)',
                  border: '1px solid rgba(255,107,0,0.15)',
                }}
                animate={{ scale: [1, 1.05, 1], rotate: [0, 5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
        <svg viewBox="0 0 1440 80" className="w-full fill-white" style={{ fill: '#FFF8ED' }}>
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" />
        </svg>
      </div>
    </section>
  )
}

export default HeroSection
