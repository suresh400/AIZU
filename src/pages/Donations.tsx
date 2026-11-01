import React, { useState, useEffect, useCallback } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Heart, Coins, ExternalLink, ArrowRight, X, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react'
import { Link } from 'react-router-dom'
import { donations } from '../data/content'

const Donations: React.FC = () => {
  const [activePhotoModal, setActivePhotoModal] = useState<string[] | null>(null)
  const [photoIdx, setPhotoIdx] = useState(0)

  const openPhotos = (photos: string[]) => {
    setActivePhotoModal(photos)
    setPhotoIdx(0)
  }

  const closePhotos = useCallback(() => {
    setActivePhotoModal(null)
  }, [])

  const nextPhoto = useCallback(() => {
    if (!activePhotoModal) return
    setPhotoIdx((prev) => (prev + 1) % activePhotoModal.length)
  }, [activePhotoModal])

  const prevPhoto = useCallback(() => {
    if (!activePhotoModal) return
    setPhotoIdx((prev) => (prev - 1 + activePhotoModal.length) % activePhotoModal.length)
  }, [activePhotoModal])

  // Prevent background scrolling and enable keyboard navigation when modal is open
  useEffect(() => {
    if (activePhotoModal) {
      document.body.style.overflow = 'hidden'
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') closePhotos()
        if (e.key === 'ArrowRight') nextPhoto()
        if (e.key === 'ArrowLeft') prevPhoto()
      }
      window.addEventListener('keydown', handleKeyDown)
      return () => {
        document.body.style.overflow = ''
        window.removeEventListener('keydown', handleKeyDown)
      }
    } else {
      document.body.style.overflow = ''
    }
  }, [activePhotoModal, closePhotos, nextPhoto, prevPhoto])

  return (
    <main>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden" style={{ background: 'linear-gradient(160deg, #F5EDD8 0%, #FFF8ED 100%)' }}>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(255,107,0,0.12) 0%, transparent 65%)' }}
        />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            className="section-tag inline-flex mb-5 gap-1.5"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Heart size={12} /> {donations.hero.tag}
          </motion.div>
          <motion.h1
            className="font-heading font-extrabold text-dark"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)' }}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {donations.hero.heading}
          </motion.h1>
          <motion.p
            className="text-muted text-base md:text-lg mt-4 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
          >
            {donations.hero.subheading}
          </motion.p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
          <svg viewBox="0 0 1440 60" className="w-full fill-white">
            <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" />
          </svg>
        </div>
      </section>

      {/* Member Donations */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <motion.div
              className="section-tag inline-flex mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {donations.memberSection.tag}
            </motion.div>
            <motion.h2
              className="font-heading font-extrabold text-dark text-3xl md:text-4xl mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              {donations.memberSection.heading}
            </motion.h2>
            <motion.p
              className="text-muted text-base"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              {donations.memberSection.subheading}
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {donations.events.map((event, i) => (
              <motion.div
                key={event.title}
                className="bg-cream-light/40 rounded-3xl overflow-hidden border border-orange/15 shadow-sm hover:shadow-card-hover hover:border-orange/30 transition-all duration-300 flex flex-col group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -6 }}
              >
                {/* Image Frame */}
                <div className="relative h-56 overflow-hidden bg-cream-sand/20">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                    onError={(e) => {
                      const el = e.target as HTMLImageElement
                      el.src = '/assets/images/FoodDonation.jpeg'
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent pointer-events-none" />

                  {/* Top Left Icon Pill */}
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full shadow-sm flex items-center gap-1.5 border border-white/50">
                    <span className="text-base">{event.icon}</span>
                    <span className="font-heading font-bold text-dark text-xs uppercase tracking-wider">
                      {event.title.includes('Food') ? 'Food Drive' : 'Community Care'}
                    </span>
                  </div>
                </div>

                {/* Body */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    {/* Subtitle tag */}
                    <div className="text-orange text-xs font-mono-accent font-semibold uppercase tracking-wider mb-2">
                      {event.subtitle}
                    </div>

                    <h3 className="font-heading font-extrabold text-dark text-xl leading-snug mb-3 group-hover:text-orange transition-colors">
                      {event.title}
                    </h3>

                    <p className="text-body text-sm leading-relaxed mb-5">
                      {event.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {event.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-orange/8 border border-orange/15 rounded-full text-xs font-medium text-dark/80"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Special News Highlight Box if present */}
                    {event.newsHighlight && (
                      <div className="bg-orange/10 border border-orange/25 rounded-2xl p-3.5 mb-5 flex items-center gap-3">
                        <img
                          src={event.newsHighlight.image}
                          alt="News Coverage"
                          className="w-14 h-14 object-cover rounded-xl shrink-0 border border-orange/20 shadow-sm"
                          onError={(e) => {
                            const el = e.target as HTMLImageElement
                            el.style.display = 'none'
                          }}
                        />
                        <div>
                          <span className="text-[11px] font-mono-accent font-bold text-orange uppercase tracking-wider block mb-0.5">
                            {event.newsHighlight.tag}
                          </span>
                          <p className="text-xs text-dark font-medium leading-tight">
                            {event.newsHighlight.text}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-orange/10 mt-auto">
                    {event.hasGallery && event.gallery ? (
                      <button
                        onClick={() => openPhotos(event.gallery!)}
                        className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-orange text-white text-xs font-bold font-mono-accent hover:bg-orange-dark shadow-sm transition-all duration-200 cursor-pointer"
                      >
                        <ImageIcon size={14} /> View Photos ({event.gallery.length}) →
                      </button>
                    ) : (
                      <Link
                        to="/gallery"
                        className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-orange/10 border border-orange/20 text-orange text-xs font-bold font-mono-accent hover:bg-orange hover:text-white transition-all duration-200"
                      >
                        View Gallery →
                      </Link>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AIZU Ecosystem Coin Donations */}
      <section className="py-20 md:py-28 relative overflow-hidden" style={{ background: '#1A1005' }}>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at 50% 30%, rgba(255,107,0,0.15) 0%, transparent 70%)',
          }}
        />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <motion.div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-4 text-xs font-semibold tracking-widest uppercase font-mono-accent"
              style={{
                background: 'rgba(255,107,0,0.15)',
                color: '#FF6B00',
                border: '1px solid rgba(255,107,0,0.25)',
              }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <Coins size={12} /> {donations.coinSection.tag}
            </motion.div>
            <motion.h2
              className="font-heading font-extrabold text-white text-3xl md:text-5xl mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {donations.coinSection.heading}
            </motion.h2>
            <motion.p
              className="text-base text-cream-sand/80"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
            >
              {donations.coinSection.subheading}
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {donations.coinSection.cards.map((card, i) => (
              <motion.div
                key={card.title}
                className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-orange/40 hover:bg-white/[0.08] transition-all duration-300 relative group flex flex-col justify-between"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ y: -6 }}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-4xl">{card.icon}</span>
                    <span className="px-3 py-1 rounded-full text-xs font-mono-accent font-semibold bg-orange/20 text-orange border border-orange/30">
                      {card.badge}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-white text-2xl mb-1">
                    {card.title}
                  </h3>
                  <div className="text-orange text-xs font-mono-accent font-semibold uppercase tracking-wider mb-4">
                    {card.subtitle}
                  </div>

                  <p className="text-cream-sand/75 text-sm md:text-base leading-relaxed mb-6">
                    {card.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {card.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-white/10 rounded-full text-xs text-white/90 font-mono-accent border border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href={card.button.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 px-5 rounded-2xl bg-orange text-white font-mono-accent font-bold text-sm hover:bg-orange-dark shadow-md transition-all duration-200"
                >
                  {card.button.label}
                  <ExternalLink size={15} />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Want to Contribute? Section */}
      <section className="relative py-20 overflow-hidden bg-orange text-white text-center">
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <motion.h2
            className="font-heading font-extrabold text-3xl md:text-5xl mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {donations.cta.heading}
          </motion.h2>
          <motion.p
            className="text-white/90 text-base md:text-lg mb-8 max-w-xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
          >
            {donations.cta.description}
          </motion.p>
          <motion.a
            href={donations.cta.button.href}
            className="inline-flex items-center gap-2 bg-white text-orange font-heading font-bold text-base px-8 py-3.5 rounded-2xl shadow-lg hover:bg-cream-light hover:scale-105 transition-all duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            {donations.cta.button.label}
            <ArrowRight size={18} />
          </motion.a>
        </div>
      </section>

      {/* Interactive Photo Lightbox Modal - Portaled to document.body for flawless viewport centering */}
      {typeof document !== 'undefined' &&
        createPortal(
          <AnimatePresence>
            {activePhotoModal && (
              <motion.div
                className="fixed inset-0 z-[9999999] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-6"
                style={{
                  position: 'fixed',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  width: '100vw',
                  height: '100vh',
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={closePhotos}
              >
                <motion.div
                  className="relative max-w-4xl w-full bg-[#1e1308] border border-orange/30 rounded-3xl overflow-hidden p-5 md:p-6 shadow-2xl flex flex-col items-center my-auto"
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.95, opacity: 0 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Header bar */}
                  <div className="w-full flex items-center justify-between pb-3 mb-3 border-b border-white/10">
                    <div>
                      <h4 className="font-heading font-bold text-white text-base md:text-lg">
                        Special Friends Special School Kapra
                      </h4>
                      <p className="text-orange text-xs font-mono-accent">
                        Photo {photoIdx + 1} of {activePhotoModal.length}
                      </p>
                    </div>
                    <button
                      onClick={closePhotos}
                      className="text-white/70 hover:text-white p-2 rounded-full bg-white/10 hover:bg-orange transition-all cursor-pointer"
                      aria-label="Close photo preview"
                    >
                      <X size={20} />
                    </button>
                  </div>

                  {/* Main Image Viewport */}
                  <div className="relative w-full aspect-[16/10] max-h-[60vh] flex items-center justify-center overflow-hidden rounded-2xl bg-black/60 mb-4">
                    <img
                      src={activePhotoModal[photoIdx]}
                      alt={`Food donation photo ${photoIdx + 1}`}
                      className="max-w-full max-h-full object-contain"
                    />

                    {/* Left/Right Navigation Buttons */}
                    <button
                      onClick={prevPhoto}
                      className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/70 text-white hover:bg-orange transition-all cursor-pointer shadow-lg"
                      aria-label="Previous photo"
                    >
                      <ChevronLeft size={24} />
                    </button>
                    <button
                      onClick={nextPhoto}
                      className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/70 text-white hover:bg-orange transition-all cursor-pointer shadow-lg"
                      aria-label="Next photo"
                    >
                      <ChevronRight size={24} />
                    </button>
                  </div>

                  {/* Thumbnails row */}
                  <div className="flex gap-2.5 justify-center overflow-x-auto py-1 max-w-full">
                    {activePhotoModal.map((src, idx) => (
                      <button
                        key={src}
                        onClick={() => setPhotoIdx(idx)}
                        className={`w-16 h-12 rounded-xl overflow-hidden border-2 transition-all shrink-0 cursor-pointer ${
                          photoIdx === idx
                            ? 'border-orange scale-105 shadow-md shadow-orange/30'
                            : 'border-transparent opacity-50 hover:opacity-80'
                        }`}
                      >
                        <img src={src} alt="" className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </main>
  )
}

export default Donations
