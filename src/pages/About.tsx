import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles, CheckCircle2, Users } from 'lucide-react'
import { about } from '../data/content'
import CTASection from '../components/sections/CTASection'

const PageHero: React.FC<{ tag: string; heading: string; sub: string }> = ({ tag, heading, sub }) => (
  <section className="relative pt-32 pb-20 overflow-hidden" style={{ background: 'linear-gradient(160deg, #F5EDD8 0%, #FFF8ED 100%)' }}>
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        background: 'radial-gradient(ellipse at 50% 0%, rgba(255,107,0,0.12) 0%, transparent 65%)',
      }}
    />
    <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
      <motion.div
        className="section-tag inline-flex mb-5 gap-1.5"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Sparkles size={12} /> {tag}
      </motion.div>
      <motion.h1
        className="font-heading font-extrabold text-dark"
        style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)' }}
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        {heading}
      </motion.h1>
      <motion.p
        className="text-muted text-base md:text-lg mt-4 max-w-xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.35 }}
      >
        {sub}
      </motion.p>
    </div>
    <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
      <svg viewBox="0 0 1440 60" className="w-full fill-white">
        <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" />
      </svg>
    </div>
  </section>
)

const About: React.FC = () => {
  const [filter, setFilter] = useState<string>('All')

  const filterTabs = ['All', 'Executive', 'Associate Founder', 'Foundation Member']

  const filteredMembers = filter === 'All'
    ? about.team.members
    : filter === 'Executive'
    ? about.team.members.filter((m) => m.badge === 'Executive')
    : filter === 'Associate Founder'
    ? about.team.members.filter((m) => m.badge === 'Associate Founder' || m.badge === 'Chairman')
    : about.team.members.filter((m) => m.badge === 'Foundation Member')

  return (
    <main>
      <PageHero tag={about.hero.tag} heading={about.hero.heading} sub={about.hero.subheading} />

      {/* Identity & Alternating Grid */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <motion.div
              className="section-tag inline-flex mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {about.identity.tag}
            </motion.div>
            <motion.h2
              className="font-heading font-extrabold text-dark text-3xl md:text-4xl mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              {about.identity.heading}
            </motion.h2>
            <motion.p
              className="text-muted text-base md:text-lg leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              {about.identity.paragraph}
            </motion.p>
          </div>

          {/* Row 1: Image Left, Origin Right */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
            <motion.div
              className="relative group"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="absolute -inset-2 bg-gradient-to-r from-orange to-amber rounded-3xl opacity-20 blur-xl group-hover:opacity-35 transition duration-500" />
              <div className="relative rounded-3xl overflow-hidden border border-orange/15 shadow-xl aspect-[4/3] bg-cream-sand/20">
                <img
                  src={about.originStory.image}
                  alt={about.originStory.heading}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.src = '/assets/images/community.jpeg'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/40 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/40 shadow-sm flex items-center justify-between">
                  <span className="font-heading font-bold text-dark text-sm">AIZU Community Care</span>
                  <span className="text-orange text-xs font-mono-accent font-semibold">Est. 2024</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-cream-light/60 border border-orange/15 rounded-3xl p-8 md:p-10 shadow-sm relative overflow-hidden"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange/10 border border-orange/20 text-orange font-mono-accent text-xs font-semibold uppercase tracking-wider mb-5">
                {about.originStory.tag}
              </div>
              <h3 className="font-heading font-extrabold text-dark text-2xl md:text-3xl mb-4 leading-tight">
                {about.originStory.heading}
              </h3>
              <p className="text-body text-base md:text-lg leading-relaxed mb-4">
                {about.originStory.p1}
              </p>
              <p className="text-muted text-sm md:text-base leading-relaxed">
                {about.originStory.p2}
              </p>
            </motion.div>
          </div>

          {/* Row 2: Vision Left, Tech Image Right */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="order-2 lg:order-1 bg-cream-light/60 border border-orange/15 rounded-3xl p-8 md:p-10 shadow-sm relative overflow-hidden"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange/10 border border-orange/20 text-orange font-mono-accent text-xs font-semibold uppercase tracking-wider mb-5">
                {about.vision.tag}
              </div>
              <h3 className="font-heading font-extrabold text-dark text-2xl md:text-3xl mb-2 leading-tight">
                {about.vision.heading}
              </h3>
              <p className="text-orange font-heading font-bold text-lg md:text-xl italic mb-4">
                {about.vision.quote}
              </p>
              <p className="text-body text-sm md:text-base leading-relaxed mb-6">
                {about.vision.description}
              </p>

              <div className="space-y-3 pt-2 border-t border-orange/10">
                {about.vision.points.map((point) => (
                  <div key={point} className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-orange shrink-0" />
                    <span className="font-heading font-semibold text-dark text-sm md:text-base">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="order-1 lg:order-2 relative group"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="absolute -inset-2 bg-gradient-to-r from-amber to-orange rounded-3xl opacity-20 blur-xl group-hover:opacity-35 transition duration-500" />
              <div className="relative rounded-3xl overflow-hidden border border-orange/15 shadow-xl aspect-[4/3] bg-cream-sand/20">
                <img
                  src={about.vision.image}
                  alt={about.vision.heading}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.src = '/assets/images/FutureTech.jpg'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/40 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/40 shadow-sm flex items-center justify-between">
                  <span className="font-heading font-bold text-dark text-sm">Future Tech & Welfare</span>
                  <span className="text-orange text-xs font-mono-accent font-semibold">Web3 × AI</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Banner */}
      <section className="relative py-20 overflow-hidden" style={{ background: '#2C1A00' }}>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(255,107,0,0.18) 0%, transparent 70%)',
          }}
        />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.h2
            className="font-heading font-extrabold text-white text-3xl md:text-5xl mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {about.missionBanner.heading}
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl leading-relaxed text-cream-sand/90 font-medium"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
          >
            {about.missionBanner.description}
          </motion.p>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-20 md:py-28" style={{ background: '#FFF8ED' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <motion.div
              className="section-tag inline-flex mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Users size={12} /> {about.team.tag}
            </motion.div>
            <motion.h2
              className="font-heading font-extrabold text-dark text-3xl md:text-4xl mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {about.team.heading}
            </motion.h2>
            <motion.p
              className="text-muted text-base max-w-xl mx-auto mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              {about.team.subheading}
            </motion.p>

            {/* Filter Tabs */}
            <div className="inline-flex flex-wrap justify-center gap-2 p-1.5 bg-cream-sand/30 rounded-2xl border border-orange/15 mb-10">
              {filterTabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setFilter(tab)}
                  className={`px-4 py-2 rounded-xl text-xs md:text-sm font-semibold transition-all duration-200 ${
                    filter === tab
                      ? 'bg-orange text-white shadow-sm'
                      : 'text-dark/70 hover:text-dark hover:bg-white/60'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Team Cards Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            <AnimatePresence>
              {filteredMembers.map((member, i) => (
                <motion.div
                  layout
                  key={member.name}
                  className="bg-white rounded-2xl overflow-hidden border border-orange/15 shadow-sm hover:shadow-card-hover hover:border-orange/30 transition-all duration-300 group flex flex-col"
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, delay: i * 0.05 }}
                  whileHover={{ y: -6 }}
                >
                  <div className="relative aspect-square overflow-hidden bg-gradient-to-b from-orange/10 to-cream-sand/20">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.style.opacity = '0.6'
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] font-mono-accent font-semibold text-orange shadow-sm border border-orange/20">
                      {member.badge}
                    </span>
                  </div>

                  <div className="p-5 text-center flex-grow flex flex-col justify-between">
                    <div>
                      <h3 className="font-heading font-bold text-dark text-base md:text-lg leading-snug mb-1 group-hover:text-orange transition-colors">
                        {member.name}
                      </h3>
                      <p className="text-orange font-medium text-xs md:text-sm">
                        {member.role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <CTASection />
    </main>
  )
}

export default About
