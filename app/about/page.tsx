"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ABOUT_TIMELINE, STATS } from "@/lib/constants";

export default function AboutPage() {
  const { scrollYProgress } = useScroll();
  const parallaxY = useTransform(scrollYProgress, [0, 0.3], [0, 80]);

  return (
    <div className="pt-24 pb-20">
      {/* Hero */}
      <section className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl"
        >
          <h1 className="font-display text-4xl font-semibold text-[var(--accent)] md:text-5xl">
            About Us
          </h1>
          <p className="mt-6 text-lg text-[var(--muted)]">
            We are a team of architects and designers dedicated to creating spaces that inspire. Since 2015, we have delivered over 150 projects across residential, commercial, and interior design.
          </p>
        </motion.div>
      </section>

      {/* Founder + Parallax */}
      <section className="relative mt-20 overflow-hidden">
        <motion.div style={{ y: parallaxY }} className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-[var(--border)]"
            >
              <Image
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80"
                alt="Founder"
                fill
                className="object-cover"
                unoptimized
              />
            </motion.div>
            <div className="flex flex-col justify-center">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-display text-2xl font-semibold text-[var(--accent)] md:text-3xl"
              >
                Our Founder
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="mt-4 text-[var(--muted)]"
              >
                With over two decades of experience in luxury architecture, our founder leads a studio where every detail matters. We believe in sustainable materials, timeless design, and spaces that improve how people live and work.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="mt-8 space-y-6"
              >
                <div>
                  <h3 className="font-display text-lg font-semibold text-[var(--foreground)]">
                    Mission
                  </h3>
                  <p className="mt-2 text-[var(--muted)]">
                    To design buildings and interiors that are beautiful, functional, and enduring—elevating the human experience through architecture.
                  </p>
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-[var(--foreground)]">
                    Vision
                  </h3>
                  <p className="mt-2 text-[var(--muted)]">
                    To be the most trusted name in premium architectural design, known for innovation, craftsmanship, and client satisfaction.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Stats */}
      <section className="mt-24 bg-[var(--accent)] py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-3">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i }}
                className="text-center"
              >
                <p className="font-display text-4xl font-semibold text-white md:text-5xl">
                  {stat.value}
                  {stat.suffix}
                </p>
                <p className="mt-2 text-white/90">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl font-semibold text-[var(--accent)]"
        >
          Our Journey
        </motion.h2>
        <div className="mt-12 space-y-0">
          {ABOUT_TIMELINE.map((item, i) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 * i }}
              className="flex gap-8 border-l-2 border-[var(--border)] pl-8 pb-12 last:pb-0"
            >
              <span className="font-display text-lg font-semibold text-[var(--accent)]">
                {item.year}
              </span>
              <div>
                <h3 className="font-display text-xl font-semibold text-[var(--foreground)]">
                  {item.title}
                </h3>
                <p className="mt-1 text-[var(--muted)]">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
