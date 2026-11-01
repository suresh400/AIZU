import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { stats } from '../../data/content'
import CountUp from '../ui/CountUp'

const StatsSection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section className="py-16 md:py-20 relative overflow-hidden" style={{ background: '#F5EDD8' }}>
      {/* Background gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, rgba(255,107,0,0.06) 0%, transparent 70%)' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="text-center p-6 rounded-2xl bg-white/60 border border-orange/10 hover:border-orange/25 transition-colors"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: i * 0.12, duration: 0.5, ease: 'backOut' }}
              whileHover={{ y: -4, boxShadow: '0 12px 40px rgba(255,107,0,0.1)' }}
            >
              <p className="font-mono-accent font-bold text-4xl md:text-5xl text-orange mb-2">
                {isInView ? (
                  <CountUp end={stat.value} suffix={stat.suffix} duration={2 + i * 0.2} />
                ) : (
                  '0'
                )}
              </p>
              <p className="text-muted text-sm font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StatsSection
