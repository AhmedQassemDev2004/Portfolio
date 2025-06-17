import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";

type ProjectModalProps = {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  title: string;
  description: string;
  link: string;
  category: string;
  skills: {
    _id: string;
    name: string;
    image: string;
  }[];
};

export default function ProjectModal({
  isOpen,
  onClose,
  images,
  title,
  description,
  link,
  category,
  skills,
}: ProjectModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Reset current image when modal opens
  useEffect(() => {
    if (isOpen) {
      setCurrentImageIndex(0);
    }
  }, [isOpen]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft") {
        setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
      } else if (e.key === "ArrowRight") {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, images.length, onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed inset-0 z-50 bg-neutral-950/95 backdrop-blur-sm"
          onClick={onClose}
        >
          <div className="h-full flex flex-col max-w-7xl mx-auto">
            {/* Clean header */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="flex items-center justify-between p-6 sm:p-8 border-b border-neutral-800"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-4">
                <h2 className="text-2xl sm:text-3xl font-light text-white tracking-tight">
                  {title}
                </h2>
                <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider">
                  {category}
                </span>
              </div>
              
              <button
                onClick={onClose}
                className="text-neutral-500 hover:text-white transition-colors duration-200 p-2"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </motion.div>

            {/* Main content */}
            <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
              {/* Image section */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="flex-1 relative min-h-[50vh] lg:min-h-0 bg-neutral-900"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={images[currentImageIndex]}
                  alt={`${title} - Image ${currentImageIndex + 1}`}
                  fill
                  className="object-contain"
                  priority
                />
                
                {/* Simple navigation */}
                {images.length > 1 && (
                  <>
                    <button
                      onClick={() => setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors duration-200 p-3"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M15 19l-7-7 7-7"
                        />
                      </svg>
                    </button>
                    
                    <button
                      onClick={() => setCurrentImageIndex((prev) => (prev + 1) % images.length)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors duration-200 p-3"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </>
                )}

                {/* Image counter */}
                {images.length > 1 && (
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                    <span className="text-xs font-mono text-white/60 bg-black/30 px-3 py-1 rounded backdrop-blur-sm">
                      {currentImageIndex + 1} / {images.length}
                    </span>
                  </div>
                )}
              </motion.div>

              {/* Details section */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="w-full lg:w-[350px] p-6 sm:p-8 border-t lg:border-t-0 lg:border-l border-neutral-800 overflow-y-auto space-y-8"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Description */}
                <div>
                  <h3 className="text-sm font-mono text-neutral-500 uppercase tracking-wider mb-3">
                    About
                  </h3>
                  <p className="text-neutral-300 text-sm leading-relaxed">
                    {description}
                  </p>
                </div>

                {/* Skills section */}
                {skills && skills.length > 0 && (
                  <div>
                    <h3 className="text-sm font-mono text-neutral-500 uppercase tracking-wider mb-3">
                      Technologies
                    </h3>
                    <div className="grid grid-cols-4 gap-3">
                      {skills.map((skill) => (
                        <div
                          key={skill._id}
                          className="flex flex-col items-center gap-2"
                        >
                          <div className="w-10 h-10 relative bg-neutral-900/50 border border-neutral-800 rounded-lg flex items-center justify-center overflow-hidden">
                            {skill.image ? (
                              <Image
                                src={skill.image}
                                alt={skill.name}
                                width={24}
                                height={24}
                                className="w-6 h-6 object-contain opacity-90"
                                unoptimized={true}
                              />
                            ) : (
                              <div className="w-6 h-6 bg-neutral-800 rounded flex items-center justify-center">
                                <span className="text-neutral-500 text-xs">?</span>
                              </div>
                            )}
                          </div>
                          <span className="text-neutral-500 text-xs font-mono text-center leading-tight">
                            {skill.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Image thumbnails */}
                {images.length > 1 && (
                  <div>
                    <h3 className="text-sm font-mono text-neutral-500 uppercase tracking-wider mb-3">
                      Gallery
                    </h3>
                    <div className="grid grid-cols-4 gap-2">
                      {images.map((img, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentImageIndex(idx)}
                          className={`relative aspect-square rounded-lg overflow-hidden border transition-colors duration-200 ${
                            currentImageIndex === idx 
                              ? 'border-white' 
                              : 'border-neutral-700 hover:border-neutral-600'
                          }`}
                        >
                          <Image
                            src={img}
                            alt={`${title} - Thumbnail ${idx + 1}`}
                            fill
                            className="object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Project link */}
                <div>
                  <h3 className="text-sm font-mono text-neutral-500 uppercase tracking-wider mb-3">
                    Link
                  </h3>
                  <Link 
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-neutral-300 hover:text-white transition-colors duration-200 text-sm font-mono underline underline-offset-4"
                  >
                    Visit project
                    <svg
                      className="w-3 h-3"
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
                  </Link>
                </div>

                {/* Close hint */}
                <div className="pt-4 border-t border-neutral-800">
                  <p className="text-xs font-mono text-neutral-600">
                    Press ESC or click outside to close
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}