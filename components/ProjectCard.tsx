import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import ProjectModal from "./ProjectModal";

type ProjectCardProps = {
  title: string;
  description: string;
  link: string;
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
        category={category}
        skills={skills}
      />
    </>
  );
}