"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { GALLERY_IMAGES } from "@/lib/constants";

type Category = "all" | "residential" | "commercial" | "interior";

const allImages = [...GALLERY_IMAGES.exterior, ...GALLERY_IMAGES.interior];

const categories: { id: Category; label: string }[] = [
  { id: "all", label: "All" },
  { id: "residential", label: "Residential" },
  { id: "commercial", label: "Commercial" },
  { id: "interior", label: "Interior" },
];

export default function GalleryPage() {
  const [filter, setFilter] = useState<Category>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = filter === "all"
    ? allImages
    : allImages.filter((img) => img.category === filter);

  const openLightbox = useCallback((index: number) => setLightboxIndex(index), []);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  return (
    <div className="pt-24 pb-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display text-4xl font-semibold text-[var(--accent)] md:text-5xl"
        >
          Gallery
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mt-4 text-lg text-[var(--muted)]"
        >
          A selection of our residential, commercial, and interior projects.
        </motion.p>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-10 flex flex-wrap gap-3"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setFilter(cat.id)}
              className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all ${
                filter === cat.id
                  ? "bg-[var(--accent)] text-white shadow-md"
                  : "bg-white text-[var(--foreground)] ring-1 ring-[var(--border)] hover:ring-[var(--accent)]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Masonry grid */}
        <motion.div
          layout
          className="mt-12 columns-1 gap-6 sm:columns-2 lg:columns-3"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="mb-6 break-inside-avoid"
              >
                <motion.button
                  type="button"
                  className="group relative block w-full overflow-hidden rounded-2xl bg-[var(--border)]"
                  onClick={() => openLightbox(index)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <Image
                      src={item.src}
                      alt={item.title}
                      width={800}
                      height={600}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      unoptimized
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-left opacity-0 transition-opacity group-hover:opacity-100">
                    <p className="font-display text-lg font-medium text-white drop-shadow">
                      {item.title}
                    </p>
                    <p className="text-sm capitalize text-white/80">{item.category}</p>
                  </div>
                </motion.button>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={closeLightbox}
          >
            <button
              type="button"
              aria-label="Close"
              className="absolute right-6 top-6 text-3xl text-white hover:text-white/80"
              onClick={closeLightbox}
            >
              ×
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative max-h-[90vh] max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={filtered[lightboxIndex].src}
                alt={filtered[lightboxIndex].title}
                width={1200}
                height={800}
                className="max-h-[90vh] w-auto rounded-lg object-contain"
                unoptimized
              />
              <p className="mt-4 text-center font-display text-xl text-white">
                {filtered[lightboxIndex].title}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
