"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { SITE_CONFIG, HERO_VIDEO, HERO_BG_IMAGE, STATS, FEATURED_PROJECTS, TESTIMONIAL, SHOWCASE_VIDEOS } from "@/lib/constants";
import { Scene3D } from "@/components/Scene3D";
import { VideoShowcaseCard } from "@/components/VideoShowcaseCard";

export default function HomePage() {
  return (
    <>
      {/* Hero — video background from /public/videos/bg.mp4 */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0f172a]">
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover"
            poster={HERO_BG_IMAGE}
          >
            <source src={HERO_VIDEO} type="video/mp4" />
          </video>
          {/* Lighter overlay so the architecture stays visible */}
          <div
            className="absolute inset-0 bg-gradient-to-b from-[#1E3A8A]/60 via-[#1E3A8A]/40 to-[#1E3A8A]/70"
            aria-hidden
          />
        </div>

        <div className="absolute inset-0 opacity-20">
          <Scene3D />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="font-display text-sm font-medium uppercase tracking-[0.2em] text-white/90 md:text-base"
          >
            {SITE_CONFIG.subtitle}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-4 font-display text-4xl font-medium tracking-tight text-white drop-shadow-lg md:text-6xl lg:text-7xl"
          >
            {SITE_CONFIG.tagline}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-6 max-w-2xl mx-auto text-base text-white/90 md:text-lg"
          >
            {SITE_CONFIG.description}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-10"
          >
            <Link href="/gallery">
              <motion.span
                className="inline-block rounded-full bg-white px-8 py-4 font-semibold text-[#1E3A8A] shadow-xl"
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}
                whileTap={{ scale: 0.98 }}
              >
                View Projects
              </motion.span>
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="h-10 w-6 rounded-full border-2 border-white/50 flex flex-col items-center justify-end pb-1"
          >
            <motion.span
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="h-2 w-2 rounded-full bg-white"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Stats strip — credibility at a glance */}
      <section className="border-y border-[var(--border)] bg-white py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i }}
                className="text-center"
              >
                <p className="font-display text-4xl font-semibold text-[var(--accent)] md:text-5xl">
                  {stat.value}
                  {stat.suffix}
                </p>
                <p className="mt-1 text-sm font-medium uppercase tracking-wider text-[var(--muted)]">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured projects — visual preview */}
      <section className="py-24 md:py-32 bg-[var(--background)]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-medium uppercase tracking-wider text-[var(--accent)]"
          >
            Selected Work
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-1 font-display text-3xl font-semibold text-[var(--foreground)] md:text-4xl"
          >
            Featured Projects
          </motion.h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {FEATURED_PROJECTS.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i }}
              >
                <Link href={project.href} className="group block">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-[var(--border)]">
                    <Image
                      src={project.src}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <p className="text-xs font-medium uppercase tracking-wider text-white/90">
                        {project.category}
                      </p>
                      <p className="font-display text-xl font-semibold">{project.title}</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <Link href="/gallery">
              <motion.span
                className="inline-block rounded-full border-2 border-[var(--accent)] px-6 py-3 font-semibold text-[var(--accent)]"
                whileHover={{ scale: 1.03, backgroundColor: "var(--accent)", color: "white" }}
                whileTap={{ scale: 0.98 }}
              >
                View Full Gallery
              </motion.span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Video showcase — our work in motion */}
      <section className="py-24 md:py-32 bg-[var(--border)]/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-medium uppercase tracking-wider text-[var(--accent)]"
          >
            Our Work in Motion
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-1 font-display text-3xl font-semibold text-[var(--foreground)] md:text-4xl"
          >
            Project Showcase
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-4 max-w-2xl text-[var(--muted)]"
          >
            See our architecture come to life—from exteriors to interiors.
          </motion.p>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SHOWCASE_VIDEOS.map((video, i) => (
              <VideoShowcaseCard
                key={video.src + video.title}
                src={video.src}
                title={video.title}
                category={video.category}
                index={i}
              />
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <Link href="/gallery">
              <motion.span
                className="inline-block rounded-full bg-[var(--accent)] px-6 py-3 font-semibold text-white"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                Explore Full Gallery
              </motion.span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured section — architect-led */}
      <section className="relative py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-medium uppercase tracking-wider text-[var(--accent)]"
          >
            Who We Are
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl font-semibold text-[var(--accent)] md:text-4xl mt-1"
          >
            Our Philosophy
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-6 max-w-3xl text-lg text-[var(--muted)]"
          >
            We are architects and designers who believe buildings should elevate everyday life. Every line, material, and space is chosen to create environments that inspire and endure—from residential sanctuaries to commercial landmarks.
          </motion.p>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {[
              { title: "Residential", desc: "Luxury homes that reflect your vision." },
              { title: "Commercial", desc: "Spaces that inspire productivity and growth." },
              { title: "Interior", desc: "Detail-driven interiors with timeless appeal." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i }}
                className="glass rounded-2xl border border-[var(--glass-border)] p-8"
              >
                <h3 className="font-display text-xl font-semibold text-[var(--accent)]">
                  {item.title}
                </h3>
                <p className="mt-3 text-[var(--muted)]">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial — social proof */}
      <section className="relative overflow-hidden bg-[var(--accent)] py-24 md:py-32">
        <div className="absolute inset-0 opacity-50 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:48px_48px]" aria-hidden />
        <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
          <motion.blockquote
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-2xl font-medium leading-relaxed text-white md:text-3xl md:leading-relaxed"
          >
            &ldquo;{TESTIMONIAL.quote}&rdquo;
          </motion.blockquote>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-8 text-white/90"
          >
            — {TESTIMONIAL.author}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-sm text-white/70"
          >
            {TESTIMONIAL.role}
          </motion.p>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-medium uppercase tracking-wider text-[var(--accent)]"
          >
            Why Titanium Studios
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-1 font-display text-3xl font-semibold text-[var(--foreground)] md:text-4xl"
          >
            Craft, Care & Collaboration
          </motion.h2>
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Award-winning", desc: "Recognized for excellence in residential and commercial design." },
              { title: "End-to-end", desc: "From concept to completion, we guide every phase." },
              { title: "Sustainable", desc: "Materials and systems chosen for longevity and impact." },
              { title: "Personal", desc: "Every project is unique—tailored to you and your place." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.08 * i }}
                className="glass rounded-2xl border border-[var(--glass-border)] p-6"
              >
                <h3 className="font-display text-lg font-semibold text-[var(--accent)]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-[var(--muted)]">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--accent)] py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl font-semibold text-white md:text-4xl"
          >
            Ready to Build Your Vision?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-4 text-white/90"
          >
            Let&apos;s discuss your next project.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8"
          >
            <Link href="/contact">
              <motion.span
                className="inline-block rounded-full border-2 border-white px-8 py-4 font-semibold text-white"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                whileTap={{ scale: 0.98 }}
              >
                Get in Touch
              </motion.span>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
