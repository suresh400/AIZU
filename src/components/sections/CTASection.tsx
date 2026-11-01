import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import { cta } from '../../data/content'

const CTASection: React.FC = () => {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(135deg, #FF6B00 0%, #FF8C00 30%, #F59E0B 60%, #FF6B00 100%)' }}
          animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        {/* Noise texture */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`
        }} />
        {/* Orbs */}
        <motion.div
          className="absolute w-96 h-96 rounded-full opacity-30"
          style={{ background: 'radial-gradient(ellipse, rgba(255,255,255,0.3) 0%, transparent 70%)', top: '-100px', right: '10%' }}
          animate={{ scale: [1, 1.2, 1], y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute w-64 h-64 rounded-full opacity-20"
          style={{ background: 'radial-gradient(ellipse, rgba(255,255,255,0.3) 0%, transparent 70%)', bottom: '-50px', left: '5%' }}
          animate={{ scale: [1.1, 0.9, 1.1], y: [0, 15, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6 text-xs font-semibold tracking-widest uppercase font-mono-accent"
          style={{ background: 'rgba(255,255,255,0.2)', color: 'white', border: '1px solid rgba(255,255,255,0.3)' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Sparkles size={12} /> Get Involved
        </motion.div>

        <motion.h2
          className="font-heading font-extrabold text-white mb-5"
          style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', textShadow: '0 2px 20px rgba(0,0,0,0.15)' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          {cta.heading}
        </motion.h2>

        <motion.p
          className="text-white/80 text-base md:text-lg leading-relaxed mb-10 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {cta.subheading}
        </motion.p>

        <motion.a
          href={cta.button.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-4 bg-white text-orange font-heading font-bold text-base rounded-full shadow-glass-lg hover:shadow-orange-lg transition-all duration-300 group"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
          whileHover={{ scale: 1.05, y: -3 }}
          whileTap={{ scale: 0.97 }}
        >
          {cta.button.label}
          <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
        </motion.a>
      </div>
    </section>
  )
}

export default CTASection
