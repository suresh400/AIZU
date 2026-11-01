import React, { useEffect, useRef } from 'react'

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null)
  const dotRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Only show on desktop
    if (window.matchMedia('(hover: none)').matches) return

    let mouseX = 0
    let mouseY = 0
    let curX = 0
    let curY = 0

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY

      if (dotRef.current) {
        dotRef.current.style.left = `${mouseX}px`
        dotRef.current.style.top = `${mouseY}px`
      }
    }

    const handleMouseEnterInteractive = () => {
      cursorRef.current?.classList.add('hovering')
    }

    const handleMouseLeaveInteractive = () => {
      cursorRef.current?.classList.remove('hovering')
    }

    let rafId: number
    const animate = () => {
      curX += (mouseX - curX) * 0.12
      curY += (mouseY - curY) * 0.12

      if (cursorRef.current) {
        cursorRef.current.style.left = `${curX}px`
        cursorRef.current.style.top = `${curY}px`
      }

      rafId = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', handleMouseMove)
    animate()

    const interactives = document.querySelectorAll('a, button, [role="button"], .cursor-pointer')
    interactives.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnterInteractive)
      el.addEventListener('mouseleave', handleMouseLeaveInteractive)
    })

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(rafId)
      interactives.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnterInteractive)
        el.removeEventListener('mouseleave', handleMouseLeaveInteractive)
      })
    }
  }, [])

  // Don't render on touch devices
  if (typeof window !== 'undefined' && window.matchMedia('(hover: none)').matches) {
    return null
  }

  return (
    <>
      <div ref={cursorRef} id="custom-cursor" aria-hidden="true" />
      <div ref={dotRef} id="custom-cursor-dot" aria-hidden="true" />
    </>
  )
}

export default CustomCursor
