import React from 'react'
import { motion } from 'framer-motion'
import { countries } from '../../data/content'

const CountriesSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <motion.div className="section-tag inline-flex mb-4" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            Global Presence
          </motion.div>
          <motion.h2
            className="font-heading font-extrabold text-dark"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Countries We Are In
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {countries.map((country, i) => (
            <motion.div
              key={country.name}
              className="flip-card h-60 cursor-default"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="flip-card-inner rounded-2xl">
                {/* Front */}
                <div className="flip-card-front rounded-2xl overflow-hidden shadow-card">
                  <img
                    src={country.image}
                    alt={country.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p className="text-3xl mb-1">{country.flag}</p>
                    <h3 className="font-heading font-bold text-white text-xl">{country.name}</h3>
                  </div>
                </div>

                {/* Back */}
                <div
                  className="flip-card-back rounded-2xl p-6 flex flex-col items-center justify-center text-center"
                  style={{ background: `linear-gradient(135deg, ${country.color}20, ${country.color}40)`, border: `1px solid ${country.color}30` }}
                >
                  <p className="text-4xl mb-3">{country.flag}</p>
                  <h3 className="font-heading font-bold text-dark text-lg mb-2">{country.name}</h3>
                  <p className="text-body text-sm leading-relaxed">{country.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CountriesSection
