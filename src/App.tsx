import React, { useState, useEffect, useCallback } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Lenis from 'lenis'

import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Preloader from './components/layout/Preloader'
import PageTransition from './components/layout/PageTransition'
import ScrollProgress from './components/ui/ScrollProgress'
import CustomCursor from './components/ui/CustomCursor'

import Home from './pages/Home'
import About from './pages/About'
import Programs from './pages/Programs'
import Donations from './pages/Donations'
import Gallery from './pages/Gallery'

// Module-level guard: ensures preloader only runs once per initial app load or browser reload, never during in-app navigation
let hasAppPreloaded = false

const AppRoutes: React.FC = () => {
  const location = useLocation()

  return (
    <PageTransition>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/donations" element={<Donations />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="*" element={<Home />} />
      </Routes>
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
