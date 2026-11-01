import React, { useState, useEffect, useCallback, lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Lenis from 'lenis'

import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Preloader from './components/layout/Preloader'
import PageTransition from './components/layout/PageTransition'
import ScrollProgress from './components/ui/ScrollProgress'
import CustomCursor from './components/ui/CustomCursor'

// Lazy-loaded pages for optimal initial bundle size and fast page loads
const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Programs = lazy(() => import('./pages/Programs'))
const Donations = lazy(() => import('./pages/Donations'))
const Gallery = lazy(() => import('./pages/Gallery'))

// Module-level guard: ensures preloader only runs once per initial app load or browser reload, never during in-app navigation
let hasAppPreloaded = false

const RouteFallback: React.FC = () => (
  <div className="min-h-[60vh] flex items-center justify-center" aria-busy="true" aria-label="Loading page">
    <div className="flex flex-col items-center gap-3">
      <div className="w-10 h-10 rounded-full border-2 border-orange/20 border-t-orange animate-spin" />
      <span className="font-mono-accent text-xs tracking-widest uppercase text-muted">Loading</span>
    </div>
  </div>
)

const AppRoutes: React.FC = () => {
  const location = useLocation()

  return (
    <PageTransition>
      <Suspense fallback={<RouteFallback />}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/donations" element={<Donations />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Suspense>
    </PageTransition>
  )
}

function App() {
  const [loaded, setLoaded] = useState(() => hasAppPreloaded)

  const handlePreloaderComplete = useCallback(() => {
    hasAppPreloaded = true
    setLoaded(true)
  }, [])

  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 2,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    const rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
    }
  }, [])

  return (
    <BrowserRouter>
      {/* Preloader animation: runs once on initial page load / refresh */}
      {!loaded && <Preloader onComplete={handlePreloaderComplete} />}

      {/* Global Scroll Progress Bar */}
      <ScrollProgress />

      {/* Custom Desktop Cursor */}
      <CustomCursor />

      {/* Navigation */}
      <Navbar />

      {/* Page Content with Transitions */}
      <AppRoutes />

      {/* Footer */}
      <Footer />
    </BrowserRouter>
  )
}

export default App
