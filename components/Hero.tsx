"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <motion.section 
      style={{ opacity }}
      className="relative min-h-screen w-full overflow-hidden bg-neutral-950"
    >
      {/* Subtle Background Effects */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-neutral-950 to-neutral-900" />
        
        {/* Minimal cursor effect */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background: `radial-gradient(400px circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(255, 255, 255, 0.03), transparent 40%)`,
          }}
        />
        
        {/* Subtle noise texture */}
        <div className="absolute inset-0 opacity-[0.015] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:32px_32px]" />
      </div>

      <motion.div 
        style={{ y }}
        className="relative max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 min-h-screen flex items-center"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center w-full">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Simple status */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-neutral-400 text-sm font-mono"
            >
              Available for work
            </motion.div>

            {/* Clean heading */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-light text-white leading-tight tracking-tight"
              >
                Ahmed Qassem
              </motion.h1>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-xl sm:text-2xl text-neutral-400 font-light"
              >
                Creative Developer
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-base text-neutral-500 max-w-md leading-relaxed"
            >
              I build digital experiences that combine thoughtful design 
              with clean, efficient code.
            </motion.p>

            {/* Minimal action buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex gap-6 pt-4"
            >
              <Link
                href="#projects"
                className="text-white hover:text-neutral-300 transition-colors duration-200 text-sm font-mono underline underline-offset-4"
              >
                View work
              </Link>
              
              <Link
                href="#contact"
                className="text-neutral-400 hover:text-white transition-colors duration-200 text-sm font-mono"
              >
                Get in touch
              </Link>
            </motion.div>

            {/* Clean social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex gap-6 pt-8"
            >
              {[
                { href: "https://github.com/yourusername", label: "GitHub" },
                { href: "https://linkedin.com/in/yourusername", label: "LinkedIn" },
                { href: "https://twitter.com/yourusername", label: "Twitter" },
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                  className="text-neutral-500 hover:text-white transition-colors duration-200 text-sm font-mono"
                >
                  {social.label}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Clean Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative lg:block hidden"
          >
            <div className="relative w-[400px] h-[400px] mx-auto">
              {/* Simple image container */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800">
                <Image
                  src="/me.jpg"
                  alt="Ahmed Qassem"
                  fill
                  className="object-cover"
                  priority
                />
                
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/20 via-transparent to-transparent" />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Simple scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          className="flex flex-col items-center gap-2 cursor-pointer"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <div className="w-px h-12 bg-gradient-to-b from-transparent via-neutral-600 to-transparent">
            <motion.div
              animate={{
                y: [0, 24, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-px h-2 bg-white"
            />
          </div>
          <span className="text-neutral-600 text-xs font-mono">scroll</span>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}