import PageWrapper from '../components/PageWrapper.jsx'
import VideoReel from '../components/VideoReel.jsx'
import ScrollReveal from '../components/ScrollReveal.jsx'
import SplitHeadline from '../components/SplitHeadline.jsx'
import { reels } from '../data/media.js'

export default function About() {
  return (
    <PageWrapper>
      <section className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-4 px-6 md:px-12 pb-24">
        <div className="md:col-span-5 md:col-start-1">
          <VideoReel {...reels.about} className="w-full" />
        </div>

        <div className="md:col-span-6 md:col-start-7 flex flex-col justify-center pt-8 md:pt-0">
          <p className="kicker text-charcoal mb-6">02 — About</p>
          <SplitHeadline
            text="Presence, before anything else."
            className="font-display font-light text-spread leading-[1.05] mb-10"
          />

          <ScrollReveal>
            <p className="font-display italic text-2xl md:text-3xl leading-relaxed text-charcoal mb-8 max-w-xl">
              "The camera doesn't need performance. It needs stillness it can
              trust."
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="max-w-xl space-y-5 font-body text-sm md:text-base leading-relaxed text-charcoal">
              <p>
                Avery started in front of the camera almost by accident — a
                street cast at nineteen that turned into a first booking, then
                a season, then a career spent moving between editorial sets
                and runway calls.
              </p>
              <p>
                Five years on, the throughline is the same: less about
                performing for a lens, more about being read by it honestly.
                That's the note that keeps coming back from photographers and
                directors alike.
              </p>
              <p>
                Currently based between New York and Milan, open to
                editorial, runway, and campaign work worldwide.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2} className="mt-10 border-t hairline pt-6 grid grid-cols-3 gap-4 max-w-xl">
            {[
              ['Height', "5'10\""],
              ['Based', 'NY / Milan'],
              ['Focus', 'Editorial'],
            ].map(([label, value]) => (
              <div key={label}>
                <p className="kicker text-charcoal/50 mb-1">{label}</p>
                <p className="font-display text-lg">{value}</p>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </section>
    </PageWrapper>
  )
}
