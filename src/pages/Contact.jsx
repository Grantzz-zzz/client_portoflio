import { useState } from 'react'
import PageWrapper from '../components/PageWrapper.jsx'
import VideoReel from '../components/VideoReel.jsx'
import SplitHeadline from '../components/SplitHeadline.jsx'
import ScrollReveal from '../components/ScrollReveal.jsx'
import { reels } from '../data/media.js'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  const handleSubmit = (e) => { e.preventDefault(); setSent(true) }
  return (
    <PageWrapper>
      <section className="grid grid-cols-1 gap-8 px-6 pb-24 md:grid-cols-12 md:px-12">
        <div className="md:col-span-7">
          <p className="kicker mb-6 text-charcoal">05 — Contact</p>
          <SplitHeadline text="Partnership opportunities." className="font-display font-light text-spread leading-[1.05] mb-12" />
          <ScrollReveal className="mb-12 max-w-lg space-y-6 text-charcoal">
            <div><p className="kicker mb-2 text-charcoal/50">Content Creation</p><p>Luxury beauty, fashion, wellness, and lifestyle content for TikTok, Instagram, and digital campaigns.</p></div>
            <div><p className="kicker mb-2 text-charcoal/50">Campaign Modeling</p><p>Beauty campaigns • Makeup collections • Skincare launches • Commercial • Editorial • E-commerce</p></div>
            <div><p className="kicker mb-2 text-charcoal/50">Brand Partnerships</p><p>Sponsored campaigns • Brand ambassadorships • PR collaborations • Event appearances</p></div>
          </ScrollReveal>
          <ScrollReveal>
            <form onSubmit={handleSubmit} className="max-w-lg space-y-8">
              {[['Name', 'text', 'name'], ['Email', 'email', 'email']].map(([label, type, key]) => <label key={key} className="block"><span className="kicker text-charcoal/50">{label}</span><input type={type} required value={form[key]} onChange={(e) => setForm({ ...form, [key]: e.target.value })} className="w-full border-b bg-transparent py-2 font-display text-xl outline-none hairline focus:border-ink" /></label>)}
              <label className="block"><span className="kicker text-charcoal/50">Message</span><textarea required rows={3} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full resize-none border-b bg-transparent py-2 font-display text-xl outline-none hairline focus:border-ink" /></label>
              <button type="submit" data-cursor="expand" className="kicker border border-ink px-8 py-4 transition-colors duration-300 hover:bg-ink hover:text-cream">{sent ? 'Sent — thank you' : 'Send message'}</button>
            </form>
          </ScrollReveal>
          <div className="mt-16 space-y-1 kicker text-charcoal/60"><p>booking@iyahmanalo.com</p><p>Instagram — TikTok</p></div>
        </div>
        <div className="md:col-span-4 md:col-start-9"><VideoReel {...reels.contact} className="w-full" /></div>
      </section>
    </PageWrapper>
  )
}
