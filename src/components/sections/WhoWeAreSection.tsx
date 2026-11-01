import React, { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { whoWeAre } from '../../data/content'

const WhoWeAreSection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ['start end', 'end start'],
  })
  const imageY = useTransform(scrollYProgress, [0, 1], ['5%', '-5%'])

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-center" ref={ref}>
          {/* Left: Image with parallax */}
          <motion.div
            ref={imageRef}
            className="relative rounded-3xl overflow-hidden h-[400px] md:h-[500px]"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <motion.img
              src={whoWeAre.image}
              alt="Who We Are — AIZU Foundation community work"
              className="absolute inset-0 w-full h-full object-cover"
              style={{ y: imageY }}
              loading="lazy"
              onError={(e) => {
                const el = e.target as HTMLImageElement
                el.parentElement!.style.background = 'linear-gradient(135deg, #FF6B00 0%, #F59E0B 50%, #2C1A00 100%)'
                el.style.display = 'none'
                const overlay = document.createElement('div')
                overlay.style.cssText = 'position:absolute;inset:0;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:16px;'
                overlay.innerHTML = '<div style="font-size:64px">🤝</div><span style="color:white;font-family:Bricolage Grotesque;font-size:24px;font-weight:bold;text-align:center;padding:0 24px;">Community. Care. Code.</span>'
                el.parentElement!.appendChild(overlay)
              }}
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(44,26,0,0.3) 0%, transparent 60%)' }} />

            {/* Badge */}
            <motion.div
              className="absolute bottom-6 left-6 right-6 glass rounded-2xl p-4 flex items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <div className="w-12 h-12 rounded-full bg-orange flex items-center justify-center shrink-0">
                <span className="text-white text-xl">🌱</span>
              </div>
              <div>
                <p className="font-heading font-bold text-dark text-sm">Founded 2024</p>
                <p className="text-muted text-xs">Bridging tech and community</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Text content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
          >
            <div className="section-tag mb-5 inline-flex">{whoWeAre.tag}</div>

            <h2
              className="font-heading font-extrabold text-dark mb-6"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
            >
              {whoWeAre.heading}
            </h2>

            {whoWeAre.paragraphs.map((para, i) => (
              <motion.p
                key={i}
                className="text-body text-base leading-relaxed mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.15, duration: 0.6 }}
              >
                {para}
              </motion.p>
            ))}

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.7 }}
            >
              <Link to={whoWeAre.button.href} className="btn-primary mt-4">
                {whoWeAre.button.label} <ArrowRight size={16} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default WhoWeAreSection
