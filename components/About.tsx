"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { client } from "@/lib/sanity.client";
import { AboutType } from "@/lib/types";

export default function About() {
  const [aboutData, setAboutData] = useState<AboutType | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const query = `*[_type == "about"][0] {
          title,
          subtitle,
          paragraphs,
          location,
          yearsOfExperience
        }`;
        
        const data = await client.fetch(query);
        setAboutData(data);
      } catch (error) {
        console.error('Error fetching about data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAboutData();
  }, []);

  if (isLoading || !aboutData) {
    return (
      <section id="about" className="relative bg-neutral-950 py-24">
        <div className="relative max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-neutral-400">Loading...</div>
        </div>
      </section>
    );
  }

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
              dangerouslySetInnerHTML={{__html:aboutData.title}}
            >
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
            {aboutData.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}