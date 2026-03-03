export const SITE_CONFIG = {
  name: "Titanium Studios",
  tagline: "Designing Spaces That Inspire",
  subtitle: "Architecture & Interior Design Studio",
  description: "Premium architectural design studio crafting luxury residential, commercial, and interior spaces.",
  email: "hello@titaniumstudios.com",
  phone: "+1 (555) 123-4567",
  address: "123 Design District, New York, NY 10001",
  social: {
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
    pinterest: "https://pinterest.com",
    twitter: "https://twitter.com",
  },
};

// Placeholder image URLs - replace with your assets in /public/images
// Using Unsplash for demo - swap to /images/xxx.jpg for production
export const GALLERY_IMAGES = {
  exterior: [
    { id: "1", src: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80", title: "Luxury Residence", category: "residential" },
    { id: "2", src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80", title: "Modern Villa", category: "residential" },
    { id: "3", src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80", title: "Minimalist Home", category: "residential" },
    { id: "4", src: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80", title: "Corporate Tower", category: "commercial" },
    { id: "5", src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80", title: "Skyline Office", category: "commercial" },
    { id: "6", src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80", title: "Urban Pavilion", category: "commercial" },
  ],
  interior: [
    { id: "7", src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80", title: "Marble Interior", category: "interior" },
    { id: "8", src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80", title: "Living Space", category: "interior" },
    { id: "9", src: "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=800&q=80", title: "Minimal Lounge", category: "interior" },
  ],
};

export const HERO_VIDEO = "/videos/bg1.mp4";

// Hero poster/fallback image (shown before video loads)
export const HERO_BG_IMAGE =
  "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&q=90";

export const ABOUT_TIMELINE = [
  { year: "2015", title: "Foundation", description: "Titanium Studios founded with a vision for timeless architecture." },
  { year: "2018", title: "Expansion", description: "Opened second studio and won first international award." },
  { year: "2021", title: "Innovation", description: "Launched sustainable design division and smart home integration." },
  { year: "2024", title: "Today", description: "Leading luxury residential and commercial projects worldwide." },
];

export const STATS = [
  { value: 150, suffix: "+", label: "Projects Completed" },
  { value: 9, suffix: "", label: "Years of Excellence" },
  { value: 80, suffix: "+", label: "Happy Clients" },
];

// Landing page: featured projects (show first 3 from gallery)
export const FEATURED_PROJECTS = [
  { title: "Luxury Residence", category: "Residential", src: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80", href: "/gallery" },
  { title: "Corporate Tower", category: "Commercial", src: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80", href: "/gallery" },
  { title: "Marble Interior", category: "Interior", src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80", href: "/gallery" },
];

// Testimonial for landing
export const TESTIMONIAL = {
  quote: "Titanium Studios didn't just design our home—they gave us a place that feels like us. Every detail was considered.",
  author: "Sarah & James Mitchell",
  role: "Residential clients",
};

// Video showcase: add your project videos to /public/videos/ and list them here
export const SHOWCASE_VIDEOS = [
  { src: "/videos/bg1.mp4", title: "Signature Exterior", category: "Residential" },
  { src: "/videos/bg.mp4", title: "Architectural Vision", category: "Commercial" },
  // Add a third: { src: "/videos/interior.mp4", title: "Interior Spaces", category: "Interior" },
];
