"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

const socialLinks = [
  { name: "GitHub", url: "https://github.com/yourusername" },
  { name: "LinkedIn", url: "https://linkedin.com/in/yourusername" },
  { name: "Twitter", url: "https://twitter.com/yourusername" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-neutral-950/80 backdrop-blur-md border-b border-white/[0.03]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16">
          {/* Minimal Logo */}
          <Link
            href="#home"
            className="text-white/60 font-mono text-sm hover:text-white transition-colors duration-200 tracking-wide"
          >
            aq.
          </Link>

          {/* Desktop Navigation - Ultra Clean */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
              >
                <Link
                  href={item.href}
                  className="text-neutral-400 text-sm font-mono hover:text-white transition-colors duration-200 relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-200 group-hover:w-full" />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Minimal Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-neutral-400 hover:text-white transition-colors duration-200 p-2"
            aria-label="Menu"
          >
            <div className="w-5 h-4 relative flex flex-col justify-between">
              <span
                className={`block h-px bg-current transition-all duration-300 origin-center ${
                  isOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              />
              <span
                className={`block h-px bg-current transition-all duration-300 ${
                  isOpen ? "opacity-0 scale-0" : ""
                }`}
              />
              <span
                className={`block h-px bg-current transition-all duration-300 origin-center ${
                  isOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu - Minimal Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-neutral-950/90 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Menu Content */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="absolute top-full left-0 right-0 bg-neutral-950/95 backdrop-blur-md border-b border-white/[0.03]"
            >
              <div className="max-w-6xl mx-auto px-6 py-8">
                {/* Navigation Links */}
                <div className="space-y-6">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="block text-white/60 text-lg font-mono hover:text-white transition-colors duration-200"
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Social Links */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  className="pt-8 mt-8 border-t border-white/[0.03]"
                >
                  <div className="flex gap-6">
                    {socialLinks.map((link) => (
                      <a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-neutral-500 hover:text-white transition-colors duration-200 text-sm font-mono"
                      >
                        {link.name}
                      </a>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}