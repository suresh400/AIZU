import React, { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Camera, ArrowRight, X, ChevronLeft, ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { albums } from '../../data/content'

const GallerySection: React.FC = () => {
  const [lightbox, setLightbox] = useState<{ albumIdx: number; imgIdx: number } | null>(null)

  const openLightbox = (albumIdx: number, imgIdx: number) => setLightbox({ albumIdx, imgIdx })
  const closeLightbox = () => setLightbox(null)

  const navigate = useCallback((dir: 1 | -1) => {
    if (!lightbox) return
    const album = albums[lightbox.albumIdx]
    const total = album.images.length
    setLightbox({ ...lightbox, imgIdx: (lightbox.imgIdx + dir + total) % total })
  }, [lightbox])

  // Keyboard nav
  React.useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (!lightbox) return
      if (e.key === 'ArrowRight') navigate(1)
      if (e.key === 'ArrowLeft') navigate(-1)
      if (e.key === 'Escape') closeLightbox()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [lightbox, navigate])

  return (
    <section className="py-20 md:py-28" style={{ background: '#FFF8ED' }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <motion.div className="section-tag mb-4 inline-flex" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
              Our Story in Pictures
            </motion.div>
            <motion.h2
              className="font-heading font-extrabold text-dark"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Photo Albums
            </motion.h2>
          </div>
          <Link to="/gallery" className="btn-outline text-sm shrink-0">
            View All Albums <ArrowRight size={14} />
          </Link>
        </div>

        {/* Album grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {albums.map((album, i) => (
            <motion.div
              key={album.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              onClick={() => openLightbox(i, 0)}
              whileHover={{ y: -4 }}
            >
              {/* Cover image */}
              <div className="relative overflow-hidden h-48">
                <motion.img
                  src={album.cover}
                  alt={album.title}
                  className="w-full h-full object-cover"
                  animate={{ scale: 1 }}
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.4 }}
                  loading="lazy"
                  onError={(e) => {
                    const el = e.target as HTMLImageElement
                    el.parentElement!.style.background = `linear-gradient(135deg, #FF6B00, #F59E0B)`
                    el.style.display = 'none'
                    const placeholder = document.createElement('div')
                    placeholder.style.cssText = 'position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:48px;'
                    placeholder.textContent = '📸'
                    el.parentElement!.appendChild(placeholder)
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="bg-white/90 text-dark text-sm font-semibold px-4 py-2 rounded-full">
                    View Album →
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="p-5">
                <h3 className="font-heading font-semibold text-dark text-base leading-tight mb-1.5">{album.title}</h3>
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
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="lightbox-overlay"
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
                className="max-h-[80vh] max-w-full rounded-2xl object-contain"
                onError={(e) => {
                  ;(e.target as HTMLImageElement).src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300"><rect width="400" height="300" fill="%232C1A00"/><text x="200" y="160" text-anchor="middle" fill="%23FF6B00" font-size="64">📸</text></svg>'
                }}
              />

              {/* Controls */}
              <button
                onClick={closeLightbox}
                className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-white/10 text-white hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="Close lightbox"
              >
                <X size={18} />
              </button>
              <button
                onClick={() => navigate(-1)}
                className="absolute left-[-50px] top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 text-white hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="Previous photo"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={() => navigate(1)}
                className="absolute right-[-50px] top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 text-white hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="Next photo"
              >
                <ChevronRight size={20} />
              </button>

              {/* Caption */}
              <div className="mt-3 text-center">
                <p className="text-white/70 text-sm">
                  {albums[lightbox.albumIdx]?.title} — Photo {lightbox.imgIdx + 1} of {albums[lightbox.albumIdx]?.images.length}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default GallerySection
