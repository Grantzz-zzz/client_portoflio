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

export const reels = {
  home: {
    src: '/media/reel-1.mp4',
    poster: 'https://picsum.photos/seed/avery-home/900/1600',
    label: 'Reel 01 — Home',
  },
  about: {
    src: '/media/reel-2.mp4',
    poster: 'https://picsum.photos/seed/avery-about/900/1600',
    label: 'Reel 02 — About',
  },
  portfolio: {
    src: '/media/reel-3.mp4',
    poster: 'https://picsum.photos/seed/avery-portfolio/900/1600',
    label: 'Reel 03 — Portfolio',
  },
  editorial: {
    src: '/media/reel-4.mp4',
    poster: 'https://picsum.photos/seed/avery-editorial/900/1600',
    label: 'Reel 04 — Runway',
  },
  contact: {
    src: '/media/reel-5.mp4',
    poster: 'https://picsum.photos/seed/avery-contact/900/1600',
    label: 'Reel 05 — Contact',
  },
}

export const galleryImages = [
  { id: 'g1', src: '/media/gallery-1.jpg', alt: 'Portfolio still 1' },
  { id: 'g2', src: '/media/gallery-2.jpg', alt: 'Portfolio still 2' },
  { id: 'g3', src: '/media/gallery-3.jpg', alt: 'Portfolio still 3' },
  { id: 'g3', src: '/media/gallery-4.jpg', alt: 'Portfolio still 4' },
  { id: 'g3', src: '/media/gallery-5.jpg', alt: 'Portfolio still 5' },
   { id: 'g3', src: '/media/gallery-6.jpg', alt: 'Portfolio still 6' },
  { id: 'g3', src: '/media/gallery-7.jpg', alt: 'Portfolio still 7' },
  { id: 'g3', src: '/media/gallery-8.jpg', alt: 'Portfolio still 8' },


]

export const editorialStills = [
  { id: 'e1', src: 'https://picsum.photos/seed/avery-e1/500/700', alt: 'Runway still 1' },
  { id: 'e2', src: 'https://picsum.photos/seed/avery-e2/500/700', alt: 'Runway still 2' },
  { id: 'e3', src: 'https://picsum.photos/seed/avery-e3/500/700', alt: 'Runway still 3' },
  { id: 'e4', src: 'https://picsum.photos/seed/avery-e4/500/700', alt: 'Runway still 4' },
]
