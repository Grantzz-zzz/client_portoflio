import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

export default function VideoReel({
  src,
  poster,
  label,
  className = '',
  rounded = false,
}) {
  const videoRef = useRef(null)
  const [errored, setErrored] = useState(false)

  useEffect(() => {
    const v = videoRef.current
    if (!v) return

    v.muted = true
    const playPromise = v.play()
    if (playPromise && typeof playPromise.catch === 'function') {
      playPromise.catch((err) => {
        console.warn(`[VideoReel] autoplay blocked for ${src}:`, err.name, err.message)
      })
    }

    return () => {
      v.pause()
    }
  }, [src])

  return (
    <motion.div
      initial={{ opacity: 0, scale: 1.02 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`relative aspect-[9/16] overflow-hidden bg-charcoal ${rounded ? 'rounded-sm' : ''} ${className}`}
    >
      {!errored ? (
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          src={src}
          poster={poster}
          muted
          loop
          autoPlay
          playsInline
          onError={() => setErrored(true)}
        />
      ) : (
        <img
          src={poster}
          alt={label ? `${label} — portrait still` : 'Portrait placeholder'}
          className="h-full w-full object-cover"
        />
      )}
      {label && (
        <div className="absolute bottom-4 left-4 kicker text-cream/90 mix-blend-difference">
          {label}
        </div>
      )}
    </motion.div>
  )
}
