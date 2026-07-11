# Iyah Manalo — Editorial Portfolio

A 5-page luxury editorial portfolio site. React + Vite, Tailwind CSS,
Framer Motion (page/component transitions), GSAP + ScrollTrigger
(scroll reveals, headline splits, the bouquet gallery stagger-in).

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview   # preview the production build locally
```

## Adding your real media

- **Reels:** drop your 5 portrait videos into `public/media/` named
  `reel-1.mp4` through `reel-5.mp4` (see `public/media/README.md`).
  Each page uses one, independently — there's no shared carousel.
  Until a file exists, that reel falls back to a placeholder poster
  image automatically, so nothing breaks in the meantime.
- **Gallery / editorial stills:** currently pulled from placeholder
  images so the "bouquet" gallery on the Portfolio page and the
  runway strip on the Editorial page have something to demo with.
  Swap the `src` values in `src/data/media.js` for your own photos
  whenever you're ready — same shape, no other code changes needed.
- **Copy:** the name, bio, and measurements on the About page are
  placeholder copy — replace directly in `src/pages/About.jsx`,
  `Home.jsx`, and `Editorial.jsx`.

## Project structure

```
src/
  components/
    Bouquet.jsx        — the fanned image cluster (signature element)
    CustomCursor.jsx    — desktop ring cursor
    Footer.jsx
    Layout.jsx          — wraps every route: nav + cursor + footer
    Lightbox.jsx         — full-screen image view w/ shared transition
    Nav.jsx             — inline desktop nav + full-screen mobile menu
    PageWrapper.jsx     — Framer Motion page transition wrapper
    ScrollReveal.jsx    — GSAP ScrollTrigger fade/slide-in wrapper
    SplitHeadline.jsx   — GSAP word-stagger headline reveal
    VideoReel.jsx       — one independent portrait video, per page
  data/
    media.js            — all reel + image paths in one place
  pages/
    Home.jsx / About.jsx / Portfolio.jsx / Editorial.jsx / Contact.jsx
```

## Notes

- Every reel is its own component instance mounted only on its own
  page/route — switching pages unmounts the previous video and mounts
  the next, so nothing is carouseled or shared.
- `prefers-reduced-motion` is respected throughout (GSAP reveals and
  the custom cursor both check for it).
- The custom ring cursor is desktop-only and disables itself on touch
  devices automatically.
- Colors, fonts, and type scale live in `tailwind.config.js` — that's
  the single place to adjust the palette or swap in licensed fonts
  (Cormorant Garamond / Inter are used as free stand-ins for Canela /
  Neue Haas in the original brief).
