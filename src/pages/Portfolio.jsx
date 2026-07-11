import PageWrapper from '../components/PageWrapper.jsx'
import VideoReel from '../components/VideoReel.jsx'
import Bouquet from '../components/Bouquet.jsx'
import SplitHeadline from '../components/SplitHeadline.jsx'
import ScrollReveal from '../components/ScrollReveal.jsx'
import { reels, galleryImages } from '../data/media.js'

export default function Portfolio() {
  return (
    <PageWrapper>
      <section className="px-6 md:px-12 pb-24">
        <div className="max-w-2xl mb-16">
          <p className="kicker text-charcoal mb-6">03 — Portfolio</p>
          <SplitHeadline
            text="A working archive."
            className="font-display font-light text-spread leading-[1.05]"
          />
        </div>

        <Bouquet images={galleryImages} />

        <ScrollReveal className="mt-24 md:mt-32 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-5">
            <VideoReel {...reels.portfolio} className="w-full" />
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <p className="kicker text-charcoal/50 mb-4">Movement</p>
            <p className="font-display font-light text-3xl md:text-4xl leading-snug text-charcoal max-w-lg">
              Stills tell you what the work looked like. This is closer to
              what it felt like in the room.
            </p>
          </div>
        </ScrollReveal>
      </section>
    </PageWrapper>
  )
}
