"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaInstagram,
} from "react-icons/fa";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      id="contact"
      ref={ref}
      className="relative w-full bg-neutral-950 py-24"
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
              Contact
            </div>
            <h2 className="text-3xl sm:text-4xl font-light text-white leading-tight">
              Let&apos;s connect
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:col-span-6 space-y-8"
            >
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <FaEnvelope className="text-neutral-500 w-4 h-4" />
                  <a
                    href="mailto:ahmedqasem043@gmail.com"
                    className="text-neutral-400 text-sm font-mono hover:text-neutral-300 transition-colors duration-200"
                  >
                    ahmedqasem043@gmail.com
                  </a>
                </div>
              </div>

              <div className="space-y-4">
                <div className="text-neutral-400 text-sm font-mono">
                  Social
                </div>
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-neutral-900/50 border border-neutral-800 hover:bg-neutral-800/50 hover:border-neutral-700 transition-colors duration-200 group"
                      title={link.name}
                    >
                      <span className="text-neutral-500 group-hover:text-neutral-300 transition-colors duration-200">
                        {link.icon}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/AhmedQassemDev2004",
    icon: <FaGithub />,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/ahmedmqassem/",
    icon: <FaLinkedin />,
  },
  {
    name: "Instagram",
    url: "https://instagram.com/qassem041",
    icon: <FaInstagram />,
  },
];
