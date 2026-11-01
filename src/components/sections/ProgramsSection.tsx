import React, { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { programs } from '../../data/content'

const ProgramsSection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.div
            className="section-tag mb-4 inline-flex"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {programs.tag}
          </motion.div>
          <motion.h2
            className="font-heading font-extrabold text-dark"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            {programs.heading}
          </motion.h2>
          <motion.p
            className="text-muted mt-2 text-base"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {programs.subheading}
          </motion.p>
        </div>

        {/* Cards */}
        <div ref={ref} className="space-y-8">
          {programs.items.map((program, i) => (
            <motion.div
              key={program.id}
              className="grid md:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow duration-300 spotlight-card"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.6, ease: 'easeOut' }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect()
                e.currentTarget.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`)
                e.currentTarget.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`)
              }}
            >
              {/* Content */}
              <div
                className={`p-8 md:p-10 flex flex-col justify-center ${i % 2 === 1 ? 'md:order-2' : ''}`}
                style={{ background: i % 2 === 0 ? '#FFF8ED' : '#FFF8ED' }}
              >
                <span className="section-tag mb-4 self-start">{program.label}</span>
                <h3 className="font-heading font-bold text-dark text-2xl md:text-3xl mb-4">
                  {program.title}
                </h3>
                <p className="text-body text-sm md:text-base leading-relaxed mb-3">{program.description}</p>
                <p className="text-muted text-sm leading-relaxed mb-5">{program.detail}</p>

                {/* Program stats */}
                {program.stats.length > 0 && (
                  <div className="grid grid-cols-2 gap-3 mb-5">
                    {program.stats.map((stat) => (
                      <div key={stat.label} className="bg-white rounded-xl p-3 text-center">
                        <p className="font-mono-accent font-bold text-orange text-xl">{stat.value}</p>
                        <p className="text-muted text-xs mt-0.5">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {program.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-orange/8 text-orange border border-orange/15"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link to="/programs" className="btn-primary self-start text-sm">
                  Learn More <ArrowRight size={14} />
                </Link>
              </div>

              {/* Image */}
              <div className={`relative min-h-[280px] md:min-h-0 overflow-hidden ${i % 2 === 1 ? 'md:order-1' : ''}`}>
                <motion.img
                  src={program.image}
                  alt={program.title}
                  className="absolute inset-0 w-full h-full object-cover"
                  animate={hoveredIndex === i ? { scale: 1.06 } : { scale: 1 }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                  loading="lazy"
                  onError={(e) => {
                    const el = e.target as HTMLImageElement
                    el.parentElement!.style.background = 'linear-gradient(135deg, #FF6B00, #F59E0B)'
                    el.style.display = 'none'
                  }}
                />
                {/* Overlay gradient */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      i % 2 === 0
                        ? 'linear-gradient(90deg, rgba(255,248,237,0.3) 0%, transparent 50%)'
                        : 'linear-gradient(-90deg, rgba(255,248,237,0.3) 0%, transparent 50%)',
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Link to="/programs" className="btn-primary">
            View All Programs <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default ProgramsSection
