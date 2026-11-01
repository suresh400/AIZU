import React from 'react'
import { motion } from 'framer-motion'
import { BarChart3, Bot, Coins, Activity, ArrowLeftRight, Heart, TrendingUp, ExternalLink } from 'lucide-react'
import { ecosystem } from '../../data/content'

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string; style?: React.CSSProperties }>> = {
  BarChart3, Bot, Coins, Activity, ArrowLeftRight, Heart, TrendingUp,
}

const statusStyles: Record<string, string> = {
  live: 'badge-live',
  coming: 'badge-coming',
  development: 'badge-development',
}

const EcosystemSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28" style={{ background: '#2C1A00' }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-4 text-xs font-semibold tracking-widest uppercase font-mono-accent"
            style={{ background: 'rgba(255,107,0,0.15)', color: '#FF6B00', border: '1px solid rgba(255,107,0,0.2)' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {ecosystem.tag}
          </motion.div>
          <motion.h2
            className="font-heading font-extrabold text-white"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            {ecosystem.heading}
          </motion.h2>
          <motion.p
            className="mt-2 text-sm md:text-base max-w-2xl mx-auto"
            style={{ color: 'rgba(255,248,237,0.6)' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {ecosystem.subheading}
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {ecosystem.items.map((item, i) => {
            const Icon = iconMap[item.icon] || Heart
            const isFeatured = i === 0 || i === 2
            return (
              <motion.a
                key={item.name}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={`
                  group relative rounded-2xl p-6 overflow-hidden cursor-pointer block
                  transition-all duration-300
                  ${isFeatured ? 'sm:col-span-2 lg:col-span-1' : ''}
                `}
                style={{
                  background: 'rgba(255,248,237,0.04)',
                  border: '1px solid rgba(255,107,0,0.12)',
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                whileHover={{ y: -4 }}
              >
                {/* Spotlight on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: 'radial-gradient(400px circle at 50% 50%, rgba(255,107,0,0.08), transparent 60%)',
                  }}
                />

                {/* Border glow on hover */}
                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    border: '1px solid rgba(255,107,0,0.3)',
                    boxShadow: '0 0 20px rgba(255,107,0,0.1)',
                  }}
                />

                {/* Icon */}
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: 'rgba(255,107,0,0.12)' }}
                >
                  <Icon size={20} style={{ color: '#FF6B00' }} />
                </div>

                {/* Name + status */}
                <div className="flex items-start justify-between gap-2 mb-3">
                  <h3 className="font-heading font-bold text-white text-base leading-tight">{item.name}</h3>
                  <span
                    className={`shrink-0 px-2 py-0.5 rounded-full text-xs font-medium font-mono-accent ${statusStyles[item.statusType]}`}
                  >
                    {item.status}
                  </span>
                </div>

                <p style={{ color: 'rgba(255,248,237,0.55)' }} className="text-sm leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Arrow */}
                <div
                  className="flex items-center gap-1 text-xs font-medium opacity-0 group-hover:opacity-100 transition-all duration-200 translate-y-1 group-hover:translate-y-0"
                  style={{ color: '#FF6B00' }}
                >
                  Visit <ExternalLink size={11} />
                </div>
              </motion.a>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default EcosystemSection
