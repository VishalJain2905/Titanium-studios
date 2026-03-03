"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SITE_CONFIG } from "@/lib/constants";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const next: Record<string, string> = {};
    if (!formState.name.trim()) next.name = "Name is required";
    if (!formState.email.trim()) next.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      next.email = "Please enter a valid email";
    }
    if (!formState.subject.trim()) next.subject = "Subject is required";
    if (!formState.message.trim()) next.message = "Message is required";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
    setFormState({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  return (
    <div className="pt-24 pb-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl"
        >
          <h1 className="font-display text-4xl font-semibold text-[var(--accent)] md:text-5xl">
            Contact
          </h1>
          <p className="mt-4 text-lg text-[var(--muted)]">
            Have a project in mind? We&apos;d love to hear from you.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="glass rounded-2xl p-8 shadow-lg"
          >
            {submitted ? (
              <div className="py-12 text-center">
                <p className="font-display text-xl font-semibold text-[var(--accent)]">
                  Thank you for your message.
                </p>
                <p className="mt-2 text-[var(--muted)]">
                  We&apos;ll get back to you within 24 hours.
                </p>
                <motion.button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-[var(--accent)] underline"
                  whileHover={{ opacity: 0.8 }}
                >
                  Send another message
                </motion.button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[var(--foreground)]">
                    Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formState.name}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-lg border border-[var(--border)] bg-white px-4 py-3 text-[var(--foreground)] focus:border-[var(--accent)] focus:outline-none focus:ring-1 focus:ring-[var(--accent)]"
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[var(--foreground)]">
                    Email *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-lg border border-[var(--border)] bg-white px-4 py-3 text-[var(--foreground)] focus:border-[var(--accent)] focus:outline-none focus:ring-1 focus:ring-[var(--accent)]"
                    placeholder="you@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-[var(--foreground)]">
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formState.phone}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-lg border border-[var(--border)] bg-white px-4 py-3 text-[var(--foreground)] focus:border-[var(--accent)] focus:outline-none focus:ring-1 focus:ring-[var(--accent)]"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-[var(--foreground)]">
                    Subject *
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formState.subject}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-lg border border-[var(--border)] bg-white px-4 py-3 text-[var(--foreground)] focus:border-[var(--accent)] focus:outline-none focus:ring-1 focus:ring-[var(--accent)]"
                    placeholder="Project inquiry"
                  />
                  {errors.subject && (
                    <p className="mt-1 text-sm text-red-600">{errors.subject}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[var(--foreground)]">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formState.message}
                    onChange={handleChange}
                    className="mt-2 w-full resize-none rounded-lg border border-[var(--border)] bg-white px-4 py-3 text-[var(--foreground)] focus:border-[var(--accent)] focus:outline-none focus:ring-1 focus:ring-[var(--accent)]"
                    placeholder="Tell us about your project..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600">{errors.message}</p>
                  )}
                </div>
                <motion.button
                  type="submit"
                  className="w-full rounded-full bg-[var(--accent)] px-6 py-4 font-semibold text-white"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                </motion.button>
              </form>
            )}
          </motion.div>

          {/* Office + Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <div className="glass rounded-2xl p-8">
              <h3 className="font-display text-xl font-semibold text-[var(--accent)]">
                Office
              </h3>
              <ul className="mt-6 space-y-4 text-[var(--muted)]">
                <li className="flex gap-3">
                  <span className="text-[var(--accent)]">📍</span>
                  {SITE_CONFIG.address}
                </li>
                <li className="flex gap-3">
                  <span className="text-[var(--accent)]">✉️</span>
                  <a href={`mailto:${SITE_CONFIG.email}`} className="hover:text-[var(--accent)]">
                    {SITE_CONFIG.email}
                  </a>
                </li>
                <li className="flex gap-3">
                  <span className="text-[var(--accent)]">📞</span>
                  <a href={`tel:${SITE_CONFIG.phone.replace(/\s/g, "")}`} className="hover:text-[var(--accent)]">
                    {SITE_CONFIG.phone}
                  </a>
                </li>
              </ul>
            </div>

            <div className="overflow-hidden rounded-2xl border border-[var(--border)]">
              <iframe
                title="Office location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.184052058!2d-73.987844923273!3d40.748444971388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-64 w-full lg:h-80"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
