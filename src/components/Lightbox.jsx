import { AnimatePresence, motion } from 'framer-motion'

export default function Lightbox({ image, onClose }) {
  return (
    <AnimatePresence>
      {image && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="fixed inset-0 z-[60] bg-ink/95 flex items-center justify-center p-6 md:p-16"
          onClick={onClose}
        >
          <motion.img
            layoutId={`bouquet-${image.id}`}
            src={image.src}
            alt={image.alt}
            className="max-h-full max-w-full object-contain shadow-2xl"
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          />
          <button
            onClick={onClose}
            className="absolute top-6 right-6 md:top-10 md:right-12 kicker text-cream/80 hover:text-cream"
            aria-label="Close image"
          >
            Close
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
