# Titanium Studios — Architect Portfolio

A modern, premium architect portfolio website with a **White & Royal Blue** theme. Built with Next.js (App Router), Tailwind CSS, Framer Motion, and Three.js.

## Tech Stack

- **Next.js 14+** (App Router)
- **Tailwind CSS** (v4)
- **Framer Motion** — scroll and page animations
- **Three.js** (via React Three Fiber) — subtle 3D hero background
- **Responsive** — Desktop, Tablet, Mobile

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
├── app/
│   ├── page.tsx          # Landing (hero, CTA, philosophy)
│   ├── gallery/          # Masonry gallery, filters, lightbox
│   ├── about/            # Founder, mission, timeline, stats
│   └── contact/          # Form, map, office details
├── components/
│   ├── Navbar.tsx        # Sticky nav, mobile menu
│   ├── Footer.tsx
│   ├── PageTransition.tsx
│   ├── GlassCard.tsx
│   └── Scene3D.tsx       # Three.js particle background
├── lib/
│   └── constants.ts      # Site config, gallery images, video URL
└── public/
    ├── images/           # Add your architectural images here
    └── videos/           # Add hero video (e.g. hero.mp4) here
```

## Assets

- **Gallery**: The site uses placeholder image URLs from Unsplash. To use your own:
  - Add images to `public/images/` (e.g. `building-1.jpg`, `interior-1.jpg`).
  - Update `lib/constants.ts` — set `GALLERY_IMAGES` to use paths like `/images/building-1.jpg`.
- **Hero video**: A Pexels sample is used by default. For production:
  - Add a cinematic architectural video to `public/videos/hero.mp4`.
  - In `lib/constants.ts`, set `HERO_VIDEO = "/videos/hero.mp4"`.

## Features

- Full-width hero with background video and blue gradient overlay
- Sticky navbar with glassmorphism on scroll
- Gallery with category filters (Residential / Commercial / Interior) and lightbox
- About: founder section, mission/vision, timeline, stats counter
- Contact: validated form, Google Maps embed, office details, social links
- Smooth page transitions and scroll animations
- SEO-friendly metadata per page
- Blue glassmorphism cards and button micro-interactions

## Build

```bash
npm run build
npm start
```

## Theme

- **Primary**: White `#FFFFFF`
- **Accent**: Royal Blue `#1E3A8A`
- **Fonts**: Playfair Display (headings), Inter (body)
# Titanium-studios
