import { useEffect, useRef } from 'react'
import gsap from 'gsap'

/**
 * Minimal ring cursor. Scales up over elements tagged with
 * data-cursor="expand" for that editorial hover polish.
 * Disabled automatically on touch devices via CSS (see index.css).
 */
export default function CustomCursor() {
  const ringRef = useRef(null)

  useEffect(() => {
    const ring = ringRef.current
    if (!ring) return
    if (window.matchMedia('(hover: none)').matches) return

    const quickX = gsap.quickTo(ring, 'x', { duration: 0.35, ease: 'power3.out' })
    const quickY = gsap.quickTo(ring, 'y', { duration: 0.35, ease: 'power3.out' })

    const move = (e) => {
      quickX(e.clientX)
      quickY(e.clientY)
    }

    const onOver = (e) => {
      if (e.target.closest('[data-cursor="expand"]')) {
        gsap.to(ring, { width: 64, height: 64, duration: 0.35, ease: 'power2.out' })
      }
    }
    const onOut = (e) => {
      if (e.target.closest('[data-cursor="expand"]')) {
        gsap.to(ring, { width: 28, height: 28, duration: 0.35, ease: 'power2.out' })
      }
    }

    window.addEventListener('mousemove', move)
    document.addEventListener('mouseover', onOver)
    document.addEventListener('mouseout', onOut)
    return () => {
      window.removeEventListener('mousemove', move)
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseout', onOut)
    }
  }, [])

  return <div ref={ringRef} className="cursor-ring hidden md:block" />
}
