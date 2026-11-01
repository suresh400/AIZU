import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Coins, Check } from 'lucide-react'
import { coin } from '../../data/content'
import CountUp from '../ui/CountUp'

const CoinSection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section className="relative py-20 md:py-28 overflow-hidden" style={{ background: 'linear-gradient(180deg, #FFF8ED 0%, #F5EDD8 100%)' }}>
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
          style={{ background: 'radial-gradient(ellipse, rgba(255,107,0,0.08) 0%, transparent 70%)' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-center" ref={ref}>
          {/* Left: Coin Image */}
          <motion.div
            className="relative flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <div className="relative">
              {/* Glow ring */}
              <motion.div
                className="absolute inset-[-30px] rounded-full"
                style={{ background: 'radial-gradient(ellipse, rgba(255,107,0,0.2) 0%, transparent 70%)' }}
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              />

              <motion.div
                className="relative rounded-3xl overflow-hidden shadow-orange-lg"
                whileHover={{ scale: 1.02, rotate: 1 }}
                transition={{ type: 'spring', stiffness: 200 }}
              >
                <img
                  src={coin.coinImage}
                  alt="AIZU Coins"
                  className="w-full max-w-[380px] h-auto object-cover rounded-3xl"
                  loading="lazy"
                  onError={(e) => {
                    const el = e.target as HTMLImageElement
                    el.parentElement!.innerHTML = `
                      <div style="width:380px;height:280px;background:linear-gradient(135deg,#2C1A00,#3D2600);border-radius:24px;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:12px;">
                        <div style="font-size:64px;">🪙</div>
                        <span style="color:#FF6B00;font-weight:bold;font-size:20px;font-family:Space Grotesk">AIZU COIN</span>
                      </div>
                    `
                  }}
                />
              </motion.div>

              {/* Badge */}
              <motion.div
                className="absolute -bottom-4 -right-4 glass-orange rounded-2xl px-4 py-3 text-center shadow-orange"
                initial={{ scale: 0, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : {}}
                transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
              >
                <p className="font-mono-accent font-bold text-orange text-xl">10M</p>
                <p className="text-muted text-xs mt-0.5">AIZU COINS</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
          >
            <h2 className="font-heading font-extrabold text-dark" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
              {coin.heading}{' '}
              <span className="gradient-text">{coin.subHeading}</span>
            </h2>

            <p className="mt-3 text-body text-sm md:text-base">
              <span className="text-orange font-semibold">{coin.tagline}</span>{' '}
              {coin.taglineRest}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-6 p-5 rounded-2xl bg-white/60 border border-orange/10">
              {coin.stats.map((s, i) => (
                <div key={s.label} className="text-center">
                  <p className="font-mono-accent font-bold text-2xl text-orange">
                    {isInView ? <CountUp end={s.raw} suffix={s.value.replace(/[0-9]/g, '')} duration={2 + i * 0.3} /> : '—'}
                  </p>
                  <p className="text-muted text-xs mt-1">{s.label}</p>
                </div>
              ))}
            </div>

            {/* Allocation bar */}
            <div className="mt-5">
              <div className="flex items-center justify-between mb-2">
                <span className="text-muted text-xs">{coin.allocationLabel}</span>
                <span className="text-orange font-mono-accent font-bold text-xs">{coin.allocationValue}</span>
              </div>
              <div className="h-2 bg-cream-sand rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{ background: 'linear-gradient(90deg, #FF6B00, #F59E0B)' }}
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${coin.allocationPercent}%` } : {}}
                  transition={{ duration: 1.5, delay: 0.5, ease: 'easeOut' }}
                />
              </div>
            </div>

            <p className="text-muted text-sm leading-relaxed mt-4">{coin.description}</p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-5">
              {coin.tags.map((tag, i) => (
                <motion.span
                  key={tag}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-white border border-orange/15 text-body"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.7 + i * 0.1 }}
                >
                  <Check size={10} className="text-orange" />
                  {tag}
                </motion.span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-7">
              {coin.buttons.map((btn) => (
                <a
                  key={btn.label}
                  href={btn.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={btn.primary ? 'btn-primary' : 'btn-outline'}
                >
                  {btn.label}
                  {btn.primary && <Coins size={16} />}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default CoinSection
