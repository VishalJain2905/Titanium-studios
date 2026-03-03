"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SITE_CONFIG } from "@/lib/constants";

const socialLinks = [
  { name: "Instagram", href: SITE_CONFIG.social.instagram, icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" },
  { name: "LinkedIn", href: SITE_CONFIG.social.linkedin, icon: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" },
  { name: "Pinterest", href: SITE_CONFIG.social.pinterest, icon: "M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z" },
];

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="font-display text-lg font-semibold text-[var(--accent)]">
              Titanium Studios
            </h3>
            <p className="mt-2 text-sm text-[var(--muted)]">
              {SITE_CONFIG.description}
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[var(--foreground)]">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-2">
              {["/", "/gallery", "/about", "/contact"].map((href, i) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-[var(--muted)] transition-colors hover:text-[var(--accent)]"
                  >
                    {["Home", "Gallery", "About", "Contact"][i]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[var(--foreground)]">
              Contact
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-[var(--muted)]">
              <li>{SITE_CONFIG.address}</li>
              <li>
                <a href={`mailto:${SITE_CONFIG.email}`} className="hover:text-[var(--accent)]">
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li>
                <a href={`tel:${SITE_CONFIG.phone.replace(/\s/g, "")}`} className="hover:text-[var(--accent)]">
                  {SITE_CONFIG.phone}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[var(--foreground)]">
              Follow Us
            </h4>
            <div className="mt-4 flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="rounded-full p-2 text-[var(--muted)] transition-colors hover:bg-[var(--accent)]/10 hover:text-[var(--accent)]"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d={social.icon} />
                  </svg>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-[var(--border)] pt-8 text-center text-sm text-[var(--muted)]">
          © {new Date().getFullYear()} Titanium Studios. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
