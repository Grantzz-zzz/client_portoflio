import PageWrapper from '../components/PageWrapper.jsx'
import VideoReel from '../components/VideoReel.jsx'
import ScrollReveal from '../components/ScrollReveal.jsx'
import SplitHeadline from '../components/SplitHeadline.jsx'
import { reels } from '../data/media.js'

export default function About() {
  return (
    <PageWrapper>
      <section className="grid grid-cols-1 gap-8 px-6 pb-24 md:grid-cols-12 md:gap-4 md:px-12">
        <div className="md:col-span-5 md:col-start-1"><VideoReel {...reels.about} className="w-full" /></div>
        <div className="flex flex-col justify-center pt-8 md:col-span-6 md:col-start-7 md:pt-0">
          <p className="kicker mb-6 text-charcoal">02 — About</p>
          <SplitHeadline text="Elevated content, honestly told." className="font-display font-light text-spread leading-[1.05] mb-10" />
          <ScrollReveal><p className="mb-8 max-w-xl font-display text-2xl italic leading-relaxed text-charcoal md:text-3xl">“The most impactful content feels genuine while remaining visually refined.”</p></ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="max-w-xl space-y-5 font-body text-sm leading-relaxed text-charcoal md:text-base">
              <p>Hi, I’m Iyah Manalo, a beauty, fashion, and lifestyle content creator based in the Philippines.</p>
              <p>I create clean, elevated content that blends luxury aesthetics with authentic storytelling. My passion lies in beauty, skincare, fashion, wellness, and lifestyle, where I showcase products through engaging GRWMs, product features, event coverage, and everyday experiences.</p>
              <p>My goal is to help brands connect with their audience through high-quality, relatable content that inspires trust and drives engagement.</p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2} className="mt-10 grid max-w-xl grid-cols-3 gap-4 border-t hairline pt-6">
            {[['Based', 'Philippines'], ['Focus', 'Beauty / Fashion / Lifestyle'], ['Formats', 'GRWMs / Events / Campaigns']].map(([label, value]) => <div key={label}><p className="kicker mb-1 text-charcoal/50">{label}</p><p className="font-display text-lg">{value}</p></div>)}
          </ScrollReveal>
        </div>
      </section>
    </PageWrapper>
  )
}
