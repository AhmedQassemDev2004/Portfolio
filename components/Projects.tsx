"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { client } from "@/sanity/client";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [projects, setProjects] = useState<Project[]>([]);
  const [filtered, setFiltered] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setIsLoading(true);
        const query = `*[_type == "project"]{
          _id,
          title,
          description,
          link,
          category,
          "image": images[0].asset->url,
          "images": images[].asset->url,
          "skills": skills[]->{
            _id,
            name,
            "image": image.asset->url
          }
        }`;

        const data = await client.fetch(query);
        setProjects(data);
        setFiltered(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, []);

  useEffect(() => {
    if (selectedCategory === "all") {
      setFiltered(projects);
    } else {
      setFiltered(projects.filter(p => p.category === selectedCategory));
    }
  }, [selectedCategory, projects]);

  const categories = [
    { id: "all", label: "All work" },
    { id: "web", label: "Web" },
    { id: "ai", label: "AI" }
  ];

  return (
    <section
      id="projects"
      ref={ref}
      className="relative min-h-screen w-full bg-neutral-950"
    >
      {/* Subtle background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-neutral-950 to-neutral-900" />
        <div className="absolute inset-0 opacity-[0.015] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:32px_32px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-24">
        {/* Clean header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-light text-white mb-4 tracking-tight">
            Selected work
          </h2>
          <p className="text-neutral-500 text-base max-w-md leading-relaxed">
            A collection of projects that showcase different approaches to problem-solving.
          </p>
        </motion.div>

        {/* Simple category filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex gap-8 mb-16 border-b border-neutral-800 pb-4"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`text-sm font-mono transition-colors duration-200 ${
                selectedCategory === cat.id
                  ? "text-white"
                  : "text-neutral-500 hover:text-neutral-300"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Loading state */}
        {isLoading ? (
          <div className="flex justify-center items-center min-h-[300px]">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="w-6 h-6 border border-neutral-600 border-t-white rounded-full"
            />
          </div>
        ) : (
          <>
            {/* Projects grid */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-12"
            >
              {filtered.map((project, idx) => (
                <motion.div
                  key={project._id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: idx * 0.1,
                    ease: "easeOut"
                  }}
                  className="group border-b border-neutral-800/50 pb-12 last:border-b-0"
                >
                  <ProjectCard
                    title={project.title}
                    description={project.description}
                    link={project.link}
                    image={project.image}
                    category={project.category}
                    images={project.images}
                    index={idx + 1}
                    skills={project.skills}
                  />
                </motion.div>
              ))}
            </motion.div>

            {/* Empty state */}
            {filtered.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="text-center py-16"
              >
                <p className="text-neutral-500 text-sm font-mono">
                  No projects found in this category
                </p>
              </motion.div>
            )}
          </>
        )}
      </div>
    </section>
  );
}

type Project = {
  _id: string;
  title: string;
  description: string;
  link: string;
  image: string;
  category: string;
  images: string[];
  skills: {
    _id: string;
    name: string;
    image: string;
  }[];
};