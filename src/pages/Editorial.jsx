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
          <p className="kicker text-charcoal/50 mb-6">Featured Works</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {editorialStills.map((img) => (
              <div key={img.id} className="mx-auto aspect-[9/16] w-full max-w-[240px] rounded-[2rem] border-[6px] border-ink bg-ink p-1 shadow-[0_18px_35px_rgba(17,17,17,0.2)]">
                <div className="relative h-full w-full overflow-hidden rounded-[1.55rem] bg-black">
                  <div aria-hidden="true" className="absolute left-1/2 top-2 z-10 h-1.5 w-14 -translate-x-1/2 rounded-full bg-black/90" />
                  <video
                    src={img.src}
                    aria-label={img.alt}
                    className="h-full w-full object-contain"
                    muted
                    loop
                    autoPlay
                    playsInline
                    preload="metadata"
                  />
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>
    </PageWrapper>
  )
}
