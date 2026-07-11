import { useEffect, useRef } from 'react'
import gsap from 'gsap'

/**
 * Splits `text` into words, wraps each in a clipped span, and
 * reveals them with a staggered translateY + clip-path animation
 * on mount. Used for the big oversized editorial headlines.
 */
export default function SplitHeadline({ text, as: Tag = 'h1', className = '', delay = 0 }) {
  const containerRef = useRef(null)

  useEffect(() => {
    const words = containerRef.current?.querySelectorAll('[data-word]')
    if (!words || words.length === 0) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) {
      gsap.set(words, { opacity: 1, y: 0 })
      return
    }

    gsap.fromTo(
      words,
      { y: '110%', opacity: 0 },
      {
        y: '0%',
        opacity: 1,
        duration: 1,
        ease: 'power4.out',
        stagger: 0.06,
        delay,
      }
    )
  }, [text, delay])

  return (
    <Tag ref={containerRef} className={className} aria-label={text}>
      {text.split(' ').map((word, i) => (
        <span key={i} className="inline-block overflow-hidden align-top pr-[0.25em]">
          <span data-word className="inline-block">
            {word}
          </span>
        </span>
      ))}
    </Tag>
  )
}
