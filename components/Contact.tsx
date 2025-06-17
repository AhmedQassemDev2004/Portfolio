"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaInstagram,
  FaDiscord,
} from "react-icons/fa";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setSubmitStatus({
        type: 'success',
        message: 'Message sent successfully! I will get back to you soon.',
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error: unknown) {
      console.error('Error submitting form:', error);
      setSubmitStatus({
        type: 'error',
        message: error instanceof Error ? error.message : 'Failed to send message. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="relative min-h-screen w-full bg-neutral-950 py-24"
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
              Let&apos;s work together
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Contact form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-8 space-y-6"
            >
              <motion.form
                onSubmit={handleSubmit}
                className="space-y-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block font-mono text-sm text-white/70"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full border border-white/10 bg-white/5 px-4 py-3 font-mono text-sm text-white backdrop-blur-sm transition-colors focus:border-white/20 focus:outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block font-mono text-sm text-white/70"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full border border-white/10 bg-white/5 px-4 py-3 font-mono text-sm text-white backdrop-blur-sm transition-colors focus:border-white/20 focus:outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="mb-2 block font-mono text-sm text-white/70"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full border border-white/10 bg-white/5 px-4 py-3 font-mono text-sm text-white backdrop-blur-sm transition-colors focus:border-white/20 focus:outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block font-mono text-sm text-white/70"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full border border-white/10 bg-white/5 px-4 py-3 font-mono text-sm text-white backdrop-blur-sm transition-colors focus:border-white/20 focus:outline-none"
                  />
                </div>

                {submitStatus.type && (
                  <div
                    className={`p-4 text-sm ${
                      submitStatus.type === 'success'
                        ? 'bg-green-500/5 text-green-400'
                        : 'bg-red-500/5 text-red-400'
                    }`}
                  >
                    {submitStatus.message}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-white/5 border border-white/10 px-6 py-3 font-mono text-sm text-white backdrop-blur-sm transition-all hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </motion.form>
            </motion.div>

            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:col-span-4 space-y-8"
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
