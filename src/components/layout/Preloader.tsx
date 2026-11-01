import React, { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Preloader: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0)
  const [done, setDone] = useState(false)
  const onCompleteRef = useRef(onComplete)
  onCompleteRef.current = onComplete

  useEffect(() => {
    let completed = false
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          if (!completed) {
            completed = true
            clearInterval(interval)
            setTimeout(() => {
              setDone(true)
              setTimeout(() => {
                onCompleteRef.current()
              }, 500)
            }, 200)
          }
          return 100
        }
        return p + Math.random() * 18 + 8
      })
    }, 70)

    return () => clearInterval(interval)
  }, []) // Empty dependency array: runs strictly once on mount

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[999999] flex flex-col items-center justify-center pointer-events-auto"
          style={{ background: '#2C1A00' }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          {/* Background radial glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(255,107,0,0.18) 0%, transparent 70%)',
            }}
          />

          {/* Logo */}
          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: 'backOut' }}
            className="mb-8 relative"
          >
            {/* Glow ring */}
            <motion.div
              className="absolute inset-[-12px] rounded-full border-2 border-orange/30"
              animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.8, 0.3] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />
            <div className="w-20 h-20 rounded-full bg-orange/15 border border-orange/30 flex items-center justify-center p-3 shadow-lg">
              <img
                src="/assets/images/aizu-logo.png"
                alt="AIZU Foundation"
                className="w-14 h-14 object-contain"
                onError={(e) => {
                  ;(e.target as HTMLImageElement).src = '/favicon.svg'
                }}
              />
            </div>
          </motion.div>

          {/* Brand text */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-center mb-10"
          >
            <h1 className="font-heading font-bold text-white text-2xl tracking-widest">
              AIZU <span className="text-orange">FOUNDATION</span>
            </h1>
            <p className="text-orange/70 text-xs mt-1.5 tracking-widest font-mono-accent uppercase">
              Building Communities. Empowering Futures.
            </p>
          </motion.div>

          {/* Progress bar */}
          <div className="w-52 h-1 bg-white/10 rounded-full overflow-hidden shadow-inner">
            <motion.div
              className="h-full bg-gradient-to-r from-orange to-amber rounded-full"
              style={{ width: `${Math.min(progress, 100)}%` }}
              transition={{ ease: 'easeOut' }}
            />
          </div>
          <p className="text-orange/60 text-xs mt-3 font-mono-accent font-semibold tracking-wider">
            {Math.min(Math.round(progress), 100)}%
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Preloader
