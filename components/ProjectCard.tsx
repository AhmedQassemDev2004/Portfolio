import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import ProjectModal from "./ProjectModal";

type ProjectCardProps = {
  title: string;
  description: string;
  link: string;
  github: string;
  image: string;
  category: string;
  images: string[];
  index: number;
  skills: {
    _id: string;
    name: string;
    image: string;
  }[];
};

export default function ProjectCard({
  title,
  description,
  link,
  github,
  image,
  category,
  images,
  index,
  skills,
}: ProjectCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="group cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Project Number */}
          <div className="hidden lg:block lg:col-span-1">
            <span className="text-neutral-600 text-sm font-mono">
              {String(index).padStart(2, '0')}
            </span>
          </div>

          {/* Project Image */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-neutral-900 border border-neutral-800 group-hover:border-neutral-700 transition-colors duration-300">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              
              {/* Subtle overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Image count indicator */}
              {images.length > 1 && (
                <div className="absolute top-4 right-4">
                  <span className="text-xs font-mono text-white/80 bg-black/50 px-2 py-1 rounded backdrop-blur-sm">
                    +{images.length - 1}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Project Details */}
          <div className="lg:col-span-6 space-y-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-xl sm:text-2xl font-light text-white group-hover:text-neutral-300 transition-colors duration-200">
                  {title}
                </h3>
                <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider">
                  {category}
                </span>
              </div>
              
              <p className="text-neutral-400 text-sm leading-relaxed max-w-md">
                {description}
              </p>

              {/* Skills */}
              {skills && skills.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {skills.map((skill) => (
                    <div
                      key={skill._id}
                      className="flex items-center gap-1.5 px-2 py-1 bg-neutral-900/50 border border-neutral-800 rounded-md group-hover:border-neutral-700 transition-colors duration-200"
                    >
                      {skill.image ? (
                        <Image
                          src={skill.image}
                          alt={skill.name}
                          width={14}
                          height={14}
                          className="w-3.5 h-3.5 object-contain opacity-90"
                          unoptimized={true}
                        />
                      ) : (
                        <div className="w-3.5 h-3.5 bg-neutral-800 rounded flex items-center justify-center">
                          <span className="text-neutral-500 text-[8px]">?</span>
                        </div>
                      )}
                      <span className="text-neutral-500 text-xs font-mono">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="flex items-center gap-6 pt-2">
              <button 
                className="text-neutral-500 hover:text-white transition-colors duration-200 text-sm font-mono underline underline-offset-4"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsModalOpen(true);
                }}
              >
                View details
              </button>
              
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-500 hover:text-white transition-colors duration-200 text-sm font-mono flex items-center gap-2"
                onClick={(e) => e.stopPropagation()}
              >
                Visit project
                <svg
                  className="w-3 h-3 transition-transform group-hover:translate-x-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>

              {github && (
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-500 hover:text-white transition-colors duration-200 text-sm font-mono flex items-center gap-2"
                  onClick={(e) => e.stopPropagation()}
                >
                  View code
                  <svg
                    className="w-3 h-3"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>

      <ProjectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        images={images}
        title={title}
        description={description}
        link={link}
        github={github}
        category={category}
        skills={skills}
      />
    </>
  );
}