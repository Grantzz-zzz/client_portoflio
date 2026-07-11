import PageWrapper from '../components/PageWrapper.jsx'
import VideoReel from '../components/VideoReel.jsx'
import ScrollReveal from '../components/ScrollReveal.jsx'
import SplitHeadline from '../components/SplitHeadline.jsx'
import { reels, editorialStills } from '../data/media.js'

export default function Editorial() {
  return (
    <PageWrapper>
      <section className="px-6 md:px-12 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-7">
            <p className="kicker text-charcoal mb-6">04 — Editorial</p>
            <SplitHeadline
              text="On the runway."
              className="font-display font-light text-spread leading-[1.05] mb-8"
            />
            <ScrollReveal>
              <p className="font-body text-sm md:text-base leading-relaxed text-charcoal max-w-lg">
                Fall/Winter presentation, downtown showroom. Four looks, one
                walk, shot and cut the same evening — included here as full
                movement rather than a single frame.
              </p>
            </ScrollReveal>
          </div>
          <div className="md:col-span-4 md:col-start-9 flex md:justify-end">
            <VideoReel {...reels.editorial} className="w-full max-w-sm" />
          </div>
        </div>

        <ScrollReveal delay={0.15} className="mt-20 md:mt-28">
          <p className="kicker text-charcoal/50 mb-6">Stills from the show</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {editorialStills.map((img) => (
              <div key={img.id} className="aspect-[3/4] overflow-hidden bg-beige">
                <video
                  src={img.src}
                  aria-label={img.alt}
                  className="h-full w-full object-cover"
                  muted
                  loop
                  autoPlay
                  playsInline
                  preload="metadata"
                />
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>
    </PageWrapper>
  )
}
