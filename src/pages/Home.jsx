import PageWrapper from '../components/PageWrapper.jsx'
import VideoReel from '../components/VideoReel.jsx'
import SplitHeadline from '../components/SplitHeadline.jsx'
import { reels, galleryImages } from '../data/media.js'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <PageWrapper>
      <section className="relative min-h-[100svh] -mt-24 md:-mt-32 bg-ink pt-24 md:pt-32">
        <div className="mx-auto grid w-full max-w-[1600px] grid-cols-1 md:grid-cols-3">
          <div className="hidden aspect-[9/16] md:block">
            <img src={galleryImages[0].src} alt={galleryImages[0].alt} className="h-full w-full object-cover opacity-70" />
          </div>
          <VideoReel {...reels.home} className="w-full" />
          <div className="hidden aspect-[9/16] md:block">
            <img src={galleryImages[1].src} alt={galleryImages[1].alt} className="h-full w-full object-cover opacity-70" />
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-ink/20" />

        <div className="relative z-10 flex h-full flex-col justify-end px-6 pb-16 text-cream md:px-12 md:pb-20">
          <p className="kicker mb-4 opacity-80">Beauty • Fashion • Lifestyle</p>
          <SplitHeadline text="Iyah Manalo" className="font-display font-light text-hero leading-[0.95]" />
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 0.7 }} className="mt-6 max-w-md font-body text-sm font-light opacity-90 md:text-base">
            Beauty, fashion, and lifestyle content creator based in Manila, Philippines.
          </motion.p>
        </div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.3, duration: 0.8 }} className="absolute bottom-6 right-6 kicker text-cream/80 md:right-12">
          Scroll
        </motion.div>
      </section>
    </PageWrapper>
  )
}
