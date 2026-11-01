import React from 'react'
import { motion } from 'framer-motion'
import { partners } from '../../data/content'

const PartnersSection: React.FC = () => {
  const duplicated = [...partners, ...partners, ...partners, ...partners]

  return (
    <section className="py-16 md:py-24 overflow-hidden" style={{ background: '#F5EDD8' }}>
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="section-tag inline-flex mb-4">Our Partners</div>
          <h2 className="font-heading font-extrabold text-dark text-2xl md:text-4xl">
            Partners &amp; Investors
          </h2>
          <p className="text-muted text-sm md:text-base mt-2 max-w-xl mx-auto">
            Backed by world-class organizations driving innovation
          </p>
        </motion.div>
      </div>

      <div className="relative overflow-hidden">
        {/* Soft edge gradient masks */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#F5EDD8] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#F5EDD8] to-transparent z-10 pointer-events-none" />

        <div className="marquee-track">
          {duplicated.map((partner, i) => (
            <a
              key={i}
              href={partner.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center mx-4 md:mx-6 shrink-0 group focus:outline-none"
              title={`${partner.name} - ${partner.category}`}
              aria-label={partner.name}
            >
              <div className="h-20 md:h-24 px-8 md:px-10 py-3.5 rounded-2xl bg-white/95 backdrop-blur-sm border border-orange/15 shadow-sm group-hover:shadow-card-hover group-hover:border-orange/40 group-hover:-translate-y-1 transition-all duration-300 flex items-center justify-center min-w-[200px] md:min-w-[240px]">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-10 md:h-14 w-auto max-w-[190px] md:max-w-[220px] object-contain transition-all duration-300 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    const el = e.target as HTMLImageElement
                    el.style.display = 'none'
                    const span = document.createElement('span')
                    span.className = 'font-heading font-bold text-dark text-base'
                    span.textContent = partner.name
                    el.parentElement!.appendChild(span)
                  }}
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PartnersSection
