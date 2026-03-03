import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Explore our residential, commercial, and interior architecture projects.",
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
