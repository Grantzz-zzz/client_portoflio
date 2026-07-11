/**
 * PLACEHOLDER MEDIA
 * ------------------
 * Reels point at /media/reel-N.mp4 — drop your real portrait video
 * files into /public/media/ with these exact names and they'll pick
 * up automatically. Until then, each <VideoReel> gracefully falls
 * back to its poster still (see components/VideoReel.jsx).
 *
 * Gallery stills use placeholder portrait images so the bouquet
 * component has something to demo. Swap `src` for your own images
 * in /public/media/ whenever you're ready — same shape, no code
 * changes needed elsewhere.
 */

const mediaBase = `${import.meta.env.BASE_URL}media/`

export const reels = {
  home: {
    src: `${mediaBase}reel-1.mp4`,
    poster: 'https://picsum.photos/seed/avery-home/900/1600',
    label: 'Reel 01 — Home',
  },
  about: {
    src: `${mediaBase}reel-2.mp4`,
    poster: 'https://picsum.photos/seed/avery-about/900/1600',
    label: 'Reel 02 — About',
  },
  portfolio: {
    src: `${mediaBase}reel-3.mp4`,
    poster: 'https://picsum.photos/seed/avery-portfolio/900/1600',
    label: 'Reel 03 — Portfolio',
  },
  editorial: {
    src: `${mediaBase}reel-4.mp4`,
    poster: 'https://picsum.photos/seed/avery-editorial/900/1600',
    label: 'Reel 04 — Runway',
  },
  contact: {
    src: `${mediaBase}reel-5.mp4`,
    poster: 'https://picsum.photos/seed/avery-contact/900/1600',
    label: 'Reel 05 — Contact',
  },
}

export const galleryImages = [
  { id: 'g1', src: `${mediaBase}gallery-1.jpg`, alt: 'Portfolio still 1' },
  { id: 'g2', src: `${mediaBase}gallery-2.jpg`, alt: 'Portfolio still 2' },
  { id: 'g3', src: `${mediaBase}gallery-3.jpg`, alt: 'Portfolio still 3' },
  { id: 'g4', src: `${mediaBase}gallery-4.jpg`, alt: 'Portfolio still 4' },
  { id: 'g5', src: `${mediaBase}gallery-5.jpg`, alt: 'Portfolio still 5' },
  { id: 'g6', src: `${mediaBase}gallery-6.jpg`, alt: 'Portfolio still 6' },
  { id: 'g7', src: `${mediaBase}gallery-7.jpg`, alt: 'Portfolio still 7' },
  { id: 'g8', src: `${mediaBase}gallery-8.jpg`, alt: 'Portfolio still 8' },


]

export const editorialStills = [
  { id: 'e1', src: `${mediaBase}Featured-Works-1.mp4`, alt: 'Featured work 1' },
  { id: 'e2', src: `${mediaBase}Featured-Works-2.mp4`, alt: 'Featured work 2' },
  { id: 'e3', src: `${mediaBase}Featured-Works-3.mp4`, alt: 'Featured work 3' },
  { id: 'e4', src: `${mediaBase}Featured-Works-4.mp4`, alt: 'Featured work 4' },
]
