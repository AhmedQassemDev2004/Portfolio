"use client";

import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="relative bg-neutral-950 py-24">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-neutral-950 to-neutral-900" />
        <div className="absolute inset-0 opacity-[0.015] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:32px_32px]" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          {/* Header */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-neutral-400 text-sm font-mono"
            >
              About me
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl font-light text-white leading-tight"
            >
              Who I am
            </motion.h2>
          </div>

          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-8 text-neutral-400 leading-relaxed text-lg max-w-3xl"
          >
            <p>
              I'm a creative developer based in Cairo, passionate about building 
              digital experiences that matter. With over 5 years in the industry, 
              I've worked with startups and established companies to bring ideas 
              to life through code.
            </p>
            
            <p>
              My approach is simple: understand the problem, design a solution, 
              and build it with clean, maintainable code. I believe great software 
              should be both functional and beautiful, solving real problems while 
              providing an enjoyable user experience.
            </p>

            <p>
              When I'm not coding, I explore new technologies, contribute to open 
              source projects, and experiment with creative coding. I'm fascinated 
              by the intersection of art and technology, and how we can use code 
              as a medium for creative expression.
            </p>

            <p>
              I value collaboration, continuous learning, and building things that 
              make a positive impact. Whether it's a complex web application or a 
              simple landing page, I bring the same level of care and attention 
              to every project.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}