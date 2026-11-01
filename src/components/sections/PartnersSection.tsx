import React from 'react'
import { motion } from 'framer-motion'
import { partners } from '../../data/content'

const PartnersSection: React.FC = () => {
  const doubled = [...partners, ...partners, ...partners]

  return (
    <section className="py-16 md:py-20 overflow-hidden" style={{ background: '#F5EDD8' }}>
      <div className="max-w-7xl mx-auto px-6 mb-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="section-tag inline-flex mb-4">Our Partners</div>
          <h2 className="font-heading font-bold text-dark text-2xl md:text-3xl">
            Partners & Investors
          </h2>
          <p className="text-muted text-sm mt-2">
            Backed by world-class organizations driving innovation
          </p>
        </motion.div>
      </div>

      <div className="relative">
        <div className="marquee-track">
          {doubled.map((partner, i) => (
            <a
              key={i}
              href={partner.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center mx-8 shrink-0"
              aria-label={partner.name}
            >
              <div className="flex items-center justify-center gap-3 px-6 py-3 rounded-2xl bg-white border border-orange/10 hover:border-orange/30 hover:shadow-orange transition-all duration-300 group min-w-[140px]">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-8 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100"
                  onError={(e) => {
                    const el = e.target as HTMLImageElement
                    el.style.display = 'none'
                    const span = document.createElement('span')
                    span.className = 'font-heading font-bold text-dark text-sm'
                    span.textContent = partner.name
                    el.parentElement!.appendChild(span)
                  }}
                />
                <span className="font-heading font-semibold text-dark text-sm group-hover:text-orange transition-colors">
                  {partner.name}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PartnersSection
