import { useState } from 'react'
import PageWrapper from '../components/PageWrapper.jsx'
import VideoReel from '../components/VideoReel.jsx'
import SplitHeadline from '../components/SplitHeadline.jsx'
import ScrollReveal from '../components/ScrollReveal.jsx'
import { reels } from '../data/media.js'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Wire this up to your form handler / email service of choice.
    setSent(true)
  }

  return (
    <PageWrapper>
      <section className="px-6 md:px-12 pb-24 grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-7">
          <p className="kicker text-charcoal mb-6">05 — Contact</p>
          <SplitHeadline
            text="Let's work together."
            className="font-display font-light text-spread leading-[1.05] mb-12"
          />

          <ScrollReveal>
            <form onSubmit={handleSubmit} className="max-w-lg space-y-8">
              <label className="block">
                <span className="kicker text-charcoal/50">Name</span>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-transparent border-b hairline focus:border-ink outline-none py-2 font-display text-xl"
                />
              </label>
              <label className="block">
                <span className="kicker text-charcoal/50">Email</span>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-transparent border-b hairline focus:border-ink outline-none py-2 font-display text-xl"
                />
              </label>
              <label className="block">
                <span className="kicker text-charcoal/50">Message</span>
                <textarea
                  required
                  rows={3}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-transparent border-b hairline focus:border-ink outline-none py-2 font-display text-xl resize-none"
                />
              </label>
              <button
                type="submit"
                data-cursor="expand"
                className="kicker border border-ink px-8 py-4 hover:bg-ink hover:text-cream transition-colors duration-300"
              >
                {sent ? 'Sent — thank you' : 'Send message'}
              </button>
            </form>
          </ScrollReveal>

          <div className="mt-16 kicker text-charcoal/60 space-y-1">
            <p>booking@averylane.com</p>
            <p>Instagram — TikTok</p>
          </div>
        </div>

        <div className="md:col-span-4 md:col-start-9">
          <VideoReel {...reels.contact} className="w-full" />
        </div>
      </section>
    </PageWrapper>
  )
}
