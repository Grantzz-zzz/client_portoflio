import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import Lightbox from './Lightbox.jsx'

/**
 * Desktop layout preset per slot: position, rotation, and size —
 * hand-placed so the cluster reads as "fanned on a light table"
 * rather than a grid. Cycles if there are more/fewer images.
 */
const SLOTS = [
  { top: '4%', left: '6%', rotate: -6, w: 'w-44 md:w-56', h: 'h-56 md:h-72', z: 10 },
  { top: '2%', left: '32%', rotate: 3, w: 'w-52 md:w-64', h: 'h-64 md:h-80', z: 20 },
  { top: '18%', left: '56%', rotate: -3, w: 'w-44 md:w-52', h: 'h-56 md:h-72', z: 15 },
  { top: '0%', left: '76%', rotate: 5, w: 'w-40 md:w-48', h: 'h-52 md:h-64', z: 5 },
  { top: '42%', left: '10%', rotate: 4, w: 'w-48 md:w-60', h: 'h-60 md:h-72', z: 12 },
  { top: '48%', left: '40%', rotate: -4, w: 'w-44 md:w-56', h: 'h-56 md:h-72', z: 18 },
  { top: '44%', left: '66%', rotate: 2, w: 'w-40 md:w-52', h: 'h-52 md:h-64', z: 8 },
  { top: '58%', left: '22%', rotate: -2, w: 'w-36 md:w-44', h: 'h-48 md:h-60', z: 22 },
]

export default function Bouquet({ images }) {
  const containerRef = useRef(null)
  const [lightboxImage, setLightboxImage] = useState(null)
  const [hovered, setHovered] = useState(null)
  const [mobileActive, setMobileActive] = useState(0)

  useEffect(() => {
    const items = containerRef.current?.querySelectorAll('[data-bouquet-item]')
    if (!items || items.length === 0) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) {
      gsap.set(items, { opacity: 1, scale: 1 })
      return
    }

    gsap.fromTo(
      items,
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 0.9, ease: 'power2.out', stagger: 0.1 }
    )
  }, [images])

  return (
    <div ref={containerRef}>
      {/* Desktop: fanned cluster */}
      <div className="relative hidden md:block h-[720px] w-full">
        {images.map((img, i) => {
          const slot = SLOTS[i % SLOTS.length]
          const isHovered = hovered === i
          const someoneElseHovered = hovered !== null && hovered !== i
          return (
            <motion.button
              key={img.id}
              data-bouquet-item
              data-cursor="expand"
              style={{ top: slot.top, left: slot.left, zIndex: isHovered ? 50 : slot.z }}
              className={`absolute ${slot.w} ${slot.h} shadow-lg bg-white p-1.5`}
              initial={{ rotate: slot.rotate }}
              animate={{
                rotate: isHovered ? 0 : slot.rotate,
                scale: isHovered ? 1.05 : someoneElseHovered ? 0.97 : 1,
                y: isHovered ? -14 : 0,
                opacity: someoneElseHovered ? 0.8 : 1,
              }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => setLightboxImage(img)}
              aria-label={`Open ${img.alt}`}
            >
              <motion.img
                layoutId={`bouquet-${img.id}`}
                src={img.src}
                alt={img.alt}
                className="h-full w-full object-cover"
              />
            </motion.button>
          )
        })}
      </div>

      {/* Mobile: swipeable, tap-to-front stack */}
      <div className="md:hidden flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 -mx-6 px-6">
        {images.map((img, i) => (
          <button
            key={img.id}
            data-cursor="expand"
            onClick={() => {
              setMobileActive(i)
              setLightboxImage(img)
            }}
            className={`snap-center shrink-0 w-64 h-80 shadow-lg bg-white p-1.5 transition-transform duration-300 ${
              mobileActive === i ? 'scale-100 rotate-0' : 'scale-95 rotate-1'
            }`}
          >
            <img src={img.src} alt={img.alt} className="h-full w-full object-cover" />
          </button>
        ))}
      </div>

      <Lightbox image={lightboxImage} onClose={() => setLightboxImage(null)} />
    </div>
  )
}
