"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const currentYear = new Date().getFullYear();

  return (
    <section
      ref={ref}
      className="relative w-full bg-neutral-950 py-16 border-t border-neutral-800/50"
    >
      {/* Subtle background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-neutral-950 to-neutral-900" />
        <div className="absolute inset-0 opacity-[0.015] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:32px_32px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          {/* Header */}
          <div className="space-y-4">
            <div className="text-neutral-400 text-sm font-mono">
              Footer
            </div>
            <h2 className="text-3xl sm:text-4xl font-light text-white leading-tight">
              Let&apos;s connect
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Brand */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-6 space-y-6"
            >
              <Link href="/" className="inline-block">
                <h3 className="text-2xl font-light text-white">
                  Ahmed<span className="text-neutral-400">Qassem</span>
                </h3>
              </Link>
              <p className="text-neutral-400 text-sm font-mono">
                Full Stack Web Developer & AI Enthusiast
              </p>
            </motion.div>

            {/* Navigation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:col-span-6 space-y-8"
            >
              <nav className="flex flex-wrap gap-6">
                {[
                  { href: "#about", label: "About" },
                  { href: "#projects", label: "Projects" },
                  { href: "#blog", label: "Blog" },
                  { href: "#contact", label: "Contact" },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-neutral-400 hover:text-white text-sm font-mono transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              <div className="text-neutral-500 text-sm font-mono">
                © {currentYear} Ahmed Qassem. All rights reserved.
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
