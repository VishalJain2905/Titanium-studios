"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

interface VideoShowcaseCardProps {
  src: string;
  title: string;
  category: string;
  index: number;
}

export function VideoShowcaseCard({ src, title, category, index }: VideoShowcaseCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const visible = entry.isIntersecting;
        setIsInView(visible);
        if (visible) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.25, rootMargin: "0px" }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 * index }}
      className="group relative aspect-video overflow-hidden rounded-2xl bg-[var(--foreground)]"
    >
      <video
        ref={videoRef}
        src={src}
        muted
        loop
        playsInline
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        poster=""
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <p className="text-xs font-medium uppercase tracking-wider text-white/80">
          {category}
        </p>
        <p className="font-display text-xl font-semibold md:text-2xl mt-1">
          {title}
        </p>
      </div>
    </motion.div>
  );
}
