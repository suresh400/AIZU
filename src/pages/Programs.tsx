import React from 'react'
import { motion } from 'framer-motion'
import { programs } from '../data/content'
import CTASection from '../components/sections/CTASection'
import StatsSection from '../components/sections/StatsSection'

const Programs: React.FC = () => {
  return (
    <main>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden" style={{ background: 'linear-gradient(160deg, #F5EDD8 0%, #FFF8ED 100%)' }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(255,107,0,0.1) 0%, transparent 60%)' }} />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div className="section-tag inline-flex mb-5" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>
            {programs.tag}
          </motion.div>
          <motion.h1 className="font-heading font-extrabold text-dark" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)' }} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            {programs.heading}
          </motion.h1>
          <motion.p className="text-muted text-base md:text-lg mt-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}>
            {programs.subheading}
          </motion.p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
          <svg viewBox="0 0 1440 60" className="w-full fill-white">
            <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" />
          </svg>
        </div>
      </section>

      {/* Programs */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          {programs.items.map((program, i) => (
            <motion.article
              key={program.id}
              className={`grid md:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-card`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              {/* Content */}
              <div className={`p-8 md:p-12 flex flex-col justify-center ${i % 2 === 1 ? 'md:order-2' : ''}`}
                style={{ background: '#FFF8ED' }}>
                <span className="section-tag mb-4 self-start">{program.label}</span>
                <h2 className="font-heading font-bold text-dark text-2xl md:text-3xl mb-4">{program.title}</h2>
                <p className="text-body text-sm md:text-base leading-relaxed mb-3">{program.description}</p>
                <p className="text-muted text-sm leading-relaxed mb-5">{program.detail}</p>

                {program.stats.length > 0 && (
                  <div className="grid grid-cols-2 gap-3 mb-5">
                    {program.stats.map((stat) => (
                      <div key={stat.label} className="bg-white rounded-xl p-3 text-center border border-orange/10">
                        <p className="font-mono-accent font-bold text-orange text-xl">{stat.value}</p>
                        <p className="text-muted text-xs mt-0.5">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                )}

                <div className="flex flex-wrap gap-2 mb-6">
                  {program.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full text-xs font-medium bg-orange/8 text-orange border border-orange/15">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Image */}
              <div className={`relative min-h-[300px] overflow-hidden ${i % 2 === 1 ? 'md:order-1' : ''}`}>
                <img
                  src={program.image}
                  alt={program.title}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                  onError={(e) => {
                    const el = e.target as HTMLImageElement
                    el.parentElement!.style.background = 'linear-gradient(135deg, #FF6B00, #F59E0B)'
                    el.style.display = 'none'
                  }}
                />
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <StatsSection />
      <CTASection />
    </main>
  )
}

export default Programs
