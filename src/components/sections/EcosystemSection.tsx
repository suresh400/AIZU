import React from 'react'
import { motion } from 'framer-motion'
import {
  BarChart3,
  Bot,
  Coins,
  Activity,
  ArrowLeftRight,
  Heart,
  Smartphone,
  Sparkles,
} from 'lucide-react'
import { ecosystem } from '../../data/content'

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string; style?: React.CSSProperties }>> = {
  BarChart3,
  Bot,
  Coins,
  Activity,
  ArrowLeftRight,
  Heart,
  Smartphone,
}

const EcosystemSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden" style={{ background: '#221400' }}>
      {/* Background radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute left-1/2 top-1/4 -translate-x-1/2 w-[800px] h-[500px] rounded-full opacity-30"
          style={{ background: 'radial-gradient(ellipse, rgba(255,107,0,0.15) 0%, transparent 70%)' }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-4 text-xs font-semibold tracking-widest uppercase font-mono-accent"
            style={{ background: 'rgba(255,107,0,0.15)', color: '#FF6B00', border: '1px solid rgba(255,107,0,0.3)' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Sparkles size={12} /> {ecosystem.tag}
          </motion.div>
          <motion.h2
            className="font-heading font-extrabold text-white"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            {ecosystem.heading}
          </motion.h2>
          <motion.p
            className="mt-4 text-base md:text-lg max-w-3xl mx-auto leading-relaxed"
            style={{ color: 'rgba(255,248,237,0.7)' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {ecosystem.subheading}
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {ecosystem.items.map((item, i) => {
            const Icon = iconMap[item.icon] || Heart
            const isFeatured = i === 0 // AIZUEX Exchange gets 2 cols on lg/xl
            const hasLink = Boolean(item.href)

            const CardWrapper = hasLink ? 'a' : 'div'
            const linkProps = hasLink
              ? {
                  href: item.href,
                  target: item.href.startsWith('http') ? '_blank' : undefined,
                  rel: item.href.startsWith('http') ? 'noopener noreferrer' : undefined,
                }
              : {}

            return (
              <motion.div
                key={item.name}
                className={`
                  ${isFeatured ? 'md:col-span-2 lg:col-span-2 xl:col-span-2' : 'col-span-1'}
                  flex
                `}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.5 }}
              >
                <CardWrapper
                  {...linkProps}
                  className={`
                    w-full group relative rounded-3xl p-7 md:p-8 flex flex-col justify-between overflow-hidden
                    transition-all duration-300
                    ${hasLink ? 'cursor-pointer hover:-translate-y-1.5' : 'cursor-default'}
                  `}
                  style={{
                    background: 'linear-gradient(145deg, rgba(255,248,237,0.06) 0%, rgba(255,248,237,0.02) 100%)',
                    border: '1px solid rgba(255,107,0,0.16)',
                    boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.25)',
                  }}
                >
                  {/* Spotlight on hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{
                      background: 'radial-gradient(500px circle at 50% 30%, rgba(255,107,0,0.12), transparent 70%)',
                    }}
                  />

                  {/* Border glow on hover */}
                  <div
                    className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{
                      border: '1px solid rgba(255,107,0,0.45)',
                      boxShadow: 'inset 0 0 20px rgba(255,107,0,0.08), 0 10px 30px rgba(255,107,0,0.15)',
                    }}
                  />

                  <div>
                    {/* Top Row: Icon + Badge */}
                    <div className="flex items-center justify-between gap-3 mb-6">
                      <div
                        className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110"
                        style={{
                          background: 'linear-gradient(135deg, rgba(255,107,0,0.25) 0%, rgba(255,107,0,0.08) 100%)',
                          border: '1px solid rgba(255,107,0,0.3)',
                        }}
                      >
                        <Icon size={24} style={{ color: '#FF6B00' }} />
                      </div>

                      <span
                        className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-bold font-mono-accent tracking-wide"
                        style={{
                          background: 'rgba(255,107,0,0.15)',
                          color: '#FF8C00',
                          border: '1px solid rgba(255,107,0,0.25)',
                        }}
                      >
                        {item.badge}
                      </span>
                    </div>

                    {/* Name */}
                    <h3
                      className={`font-heading font-extrabold text-white mb-3 group-hover:text-orange transition-colors ${
                        isFeatured ? 'text-2xl md:text-3xl' : 'text-xl'
                      }`}
                    >
                      {item.name}
                    </h3>

                    {/* Description */}
                    <p
                      style={{ color: 'rgba(255,248,237,0.7)' }}
                      className={`leading-relaxed mb-6 ${isFeatured ? 'text-base md:text-lg max-w-2xl' : 'text-sm'}`}
                    >
                      {item.description}
                    </p>
                  </div>

                  {/* Bottom Action */}
                  <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                    {hasLink ? (
                      <span className="inline-flex items-center gap-1.5 text-sm font-heading font-bold text-orange group-hover:gap-2.5 transition-all duration-300">
                        {item.actionLabel}
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 text-xs font-mono-accent font-semibold tracking-wider uppercase text-white/40">
                        {item.actionLabel}
                      </span>
                    )}
                  </div>
                </CardWrapper>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default EcosystemSection
