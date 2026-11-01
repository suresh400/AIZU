import React, { useState, useCallback, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Camera, X, ChevronLeft, ChevronRight, Image } from 'lucide-react'
import { albums, gallery } from '../data/content'

const Gallery: React.FC = () => {
  const [selectedAlbum, setSelectedAlbum] = useState<number | null>(null)
  const [lightbox, setLightbox] = useState<{ albumIdx: number; imgIdx: number } | null>(null)

  const openLightbox = (albumIdx: number, imgIdx: number) => setLightbox({ albumIdx, imgIdx })
  const closeLightbox = () => setLightbox(null)

  const navigate = useCallback((dir: 1 | -1) => {
    if (!lightbox) return
    const album = albums[lightbox.albumIdx]
    const total = album.images.length
    setLightbox({ ...lightbox, imgIdx: (lightbox.imgIdx + dir + total) % total })
  }, [lightbox])

  useEffect(() => {
    if (lightbox) {
      document.body.style.overflow = 'hidden'
      const handler = (e: KeyboardEvent) => {
        if (e.key === 'ArrowRight') navigate(1)
        if (e.key === 'ArrowLeft') navigate(-1)
        if (e.key === 'Escape') closeLightbox()
      }
      window.addEventListener('keydown', handler)
      return () => {
        document.body.style.overflow = ''
        window.removeEventListener('keydown', handler)
      }
    } else {
      document.body.style.overflow = ''
    }
  }, [lightbox, navigate])

  return (
    <main>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden" style={{ background: 'linear-gradient(160deg, #F5EDD8 0%, #FFF8ED 100%)' }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(255,107,0,0.1) 0%, transparent 60%)' }} />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div className="section-tag inline-flex mb-5" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>
            {gallery.hero.tag}
          </motion.div>
          <motion.h1 className="font-heading font-extrabold text-dark" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)' }} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            {gallery.hero.heading}
          </motion.h1>
          <motion.p className="text-muted text-base md:text-lg mt-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}>
            {gallery.hero.subheading}
          </motion.p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
          <svg viewBox="0 0 1440 60" className="w-full fill-white">
            <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" />
          </svg>
        </div>
      </section>

      {/* Albums Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {selectedAlbum === null ? (
            /* Album overview */
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {albums.map((album, i) => (
                <motion.div
                  key={album.id}
                  className="group bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 cursor-pointer border border-orange/8"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ y: -6 }}
                  onClick={() => setSelectedAlbum(i)}
                >
                  <div className="relative overflow-hidden h-52">
                    <motion.img
                      src={album.cover}
                      alt={album.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.07 }}
                      transition={{ duration: 0.4 }}
                      loading="lazy"
                      onError={(e) => {
                        const el = e.target as HTMLImageElement
                        el.parentElement!.style.background = 'linear-gradient(135deg, #FF6B00, #F59E0B)'
                        el.style.display = 'none'
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="bg-white/90 text-dark text-sm font-semibold px-4 py-2 rounded-full">View Album</span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h2 className="font-heading font-semibold text-dark text-base leading-tight mb-1.5">{album.title}</h2>
                    <p className="text-muted text-sm leading-relaxed mb-3 line-clamp-2">{album.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5 text-muted text-xs">
                        <Camera size={12} />
                        <span>{album.count}</span>
                      </div>
                      <span className="text-orange text-xs font-semibold">View →</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            /* Album detail */
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <div className="flex items-center gap-4 mb-8">
                <button
                  onClick={() => setSelectedAlbum(null)}
                  className="flex items-center gap-2 text-orange font-semibold text-sm hover:underline"
                >
                  ← Back to Albums
                </button>
                <div>
                  <h2 className="font-heading font-bold text-dark text-2xl">{albums[selectedAlbum].title}</h2>
                  <p className="text-muted text-sm">{albums[selectedAlbum].count}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {albums[selectedAlbum].images.map((img, imgIdx) => (
                  <motion.div
                    key={imgIdx}
                    className="relative rounded-xl overflow-hidden cursor-pointer group"
                    style={{ paddingBottom: '75%' }}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: imgIdx * 0.03 }}
                    onClick={() => openLightbox(selectedAlbum, imgIdx)}
                  >
                    <img
                      src={img}
                      alt={`${albums[selectedAlbum].title} - Photo ${imgIdx + 1}`}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                      onError={(e) => {
                        const el = e.target as HTMLImageElement
                        el.parentElement!.style.background = 'linear-gradient(135deg, #FF6B00, #F59E0B)'
                        el.style.display = 'none'
                        const icon = document.createElement('div')
                        icon.style.cssText = 'position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:32px;'
                        icon.textContent = '📸'
                        el.parentElement!.appendChild(icon)
                      }}
                    />
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Image size={24} className="text-white" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Lightbox - Portaled to document.body for flawless viewport centering */}
      {typeof document !== 'undefined' &&
        createPortal(
          <AnimatePresence>
            {lightbox && (
              <motion.div
                className="fixed inset-0 z-[9999999] bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
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
                onClick={closeLightbox}
                role="dialog"
                aria-modal="true"
                aria-label="Photo lightbox"
              >
                <motion.div
                  className="relative max-w-5xl max-h-[90vh] mx-4"
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.9 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <img
                    src={albums[lightbox.albumIdx]?.images[lightbox.imgIdx]}
                    alt="Gallery photo"
                    className="max-h-[80vh] max-w-full rounded-2xl object-contain mx-auto"
                    onError={(e) => {
                      ;(e.target as HTMLImageElement).src =
                        'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300"><rect width="400" height="300" fill="%232C1A00"/><text x="200" y="160" text-anchor="middle" fill="%23FF6B00" font-size="64">📸</text></svg>'
                    }}
                  />
                  <button
                    onClick={closeLightbox}
                    className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-white/10 text-white hover:bg-orange flex items-center justify-center transition-colors cursor-pointer"
                    aria-label="Close"
                  >
                    <X size={18} />
                  </button>
                  <button
                    onClick={() => navigate(-1)}
                    className="absolute left-[-50px] top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 text-white hover:bg-orange flex items-center justify-center transition-colors cursor-pointer shadow-lg"
                    aria-label="Previous"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={() => navigate(1)}
                    className="absolute right-[-50px] top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 text-white hover:bg-orange flex items-center justify-center transition-colors cursor-pointer shadow-lg"
                    aria-label="Next"
                  >
                    <ChevronRight size={20} />
                  </button>
                  <p className="text-center text-white/70 text-sm mt-3">
                    {albums[lightbox.albumIdx]?.title} — {lightbox.imgIdx + 1} /{' '}
                    {albums[lightbox.albumIdx]?.images.length}
                  </p>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </main>
  )
}

export default Gallery
