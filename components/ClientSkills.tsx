"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { getSkills } from "@/sanity/lib/queries";
import { motion, useInView } from "framer-motion";
import { urlFor } from "@/sanity/lib/image";
import { Skill } from "@/sanity/lib/types";

export default function Skills() {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [loading, setLoading] = useState(true);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    async function fetchSkills() {
      try {
        const skillsData = await getSkills();
        setSkills(skillsData);
      } catch (error) {
        console.error("Error fetching skills:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchSkills();
  }, []);

  return (
    <section id="skills" className="relative bg-neutral-950 py-24">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-neutral-950 to-neutral-900" />
        <div className="absolute inset-0 opacity-[0.015] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:32px_32px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          {/* Header */}
          <div className="space-y-4">
            <div className="text-neutral-400 text-sm font-mono">
              Skills
            </div>
            <h2 className="text-3xl sm:text-4xl font-light text-white leading-tight">
              Technologies I work with
            </h2>
          </div>

          {/* Skills Grid */}
          {loading ? (
            <div className="flex items-center justify-center py-20">
              <div className="w-px h-12 bg-gradient-to-b from-transparent via-neutral-600 to-transparent">
                <motion.div
                  animate={{
                    y: [0, 24, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="w-px h-2 bg-white"
                />
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-8">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill._id || index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.05,
                  }}
                  className="flex flex-col items-center gap-3 group"
                >
                  <div className="w-16 h-16 relative bg-neutral-900/50 border border-neutral-800 rounded-lg flex items-center justify-center overflow-hidden group-hover:border-neutral-700 transition-colors duration-200">
                    {skill.image ? (
                      <Image
                        src={urlFor(skill.image).url()}
                        alt={skill.name}
                        width={32}
                        height={32}
                        className="w-8 h-8 object-contain opacity-90"
                        unoptimized={true}
                      />
                    ) : (
                      <div className="w-8 h-8 bg-neutral-800 rounded flex items-center justify-center">
                        <span className="text-neutral-500 text-xs">?</span>
                      </div>
                    )}
                  </div>
                  <span className="text-neutral-500 text-xs font-mono text-center leading-tight">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}