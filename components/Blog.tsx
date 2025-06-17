"use client";
import { motion } from "motion/react";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";

export default function Blog() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const categories = ["ALL", "Web Development", "AI", "Data Science"];

  // Filter blogs based on selected category
  const filteredBlogs =
    selectedCategory === "ALL"
      ? blogs
      : blogs.filter(
          (blog) => blog.category === selectedCategory.toLowerCase()
        );

  // Limit to 5 blogs for display
  const displayedBlogs = filteredBlogs.slice(0, 5);

  return (
    <motion.section
      id="blog"
      ref={ref}
      initial={{ opacity: 0, y: 10, scale: 0.5 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="max-w-5xl mx-auto px-8 py-20 flex justify-center flex-col items-center"
    >
      <h1 className="text-4xl font-bold text-white mb-8 text-center">
        LATEST BLOGS
      </h1>

      <div className="flex gap-2 mb-8 flex-wrap justify-center">
        {categories.map((category, key) => (
          <button
            key={key}
            className={`cursor-pointer px-4 py-2 rounded-full transition-colors duration-200 ${
              selectedCategory === category
                ? "bg-white text-black"
                : "bg-transparent text-white border border-white hover:bg-white hover:text-black"
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="w-full max-w-4xl">
        {displayedBlogs.map((blog, index) => (
          <motion.div
            key={blog.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="mb-10 group"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <Link
              href={blog.link}
              className="flex flex-col md:flex-row gap-6 hover:no-underline"
            >
              <motion.div
                className="md:w-1/3 w-full h-48 md:h-40 overflow-hidden rounded-xl relative flex-shrink-0"
                animate={{
                  y: hoveredIndex === index ? -5 : 0,
                  transition: { duration: 0.3 },
                }}
              >
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://via.placeholder.com/400x200/0C0E23/ffffff?text=Blog+Image";
                  }}
                />
                <div className="absolute top-3 left-3 bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                  {blog.category}
                </div>
              </motion.div>

              <div className="md:w-2/3 w-full">
                <div className="flex items-center text-gray-400 text-sm mb-2">
                  <span>{blog.date}</span>
                  <span className="mx-2">•</span>
                  <span>{blog.readTime} min read</span>
                </div>
                <motion.h3
                  className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors"
                  animate={{
                    scale: hoveredIndex === index ? 1.02 : 1,
                    transition: { duration: 0.2 },
                  }}
                >
                  {blog.title}
                </motion.h3>
                <p className="text-gray-400 text-sm mb-4">{blog.excerpt}</p>
                <motion.span
                  className="inline-flex items-center text-blue-400 group-hover:text-blue-300 transition-colors"
                  animate={{
                    x: hoveredIndex === index ? 5 : 0,
                    transition: { duration: 0.3 },
                  }}
                >
                  Read More →
                </motion.span>
              </div>
            </Link>

            {index < filteredBlogs.length - 1 && (
              <div className="border-b border-gray-800 mt-10"></div>
            )}
          </motion.div>
        ))}
      </div>

      {filteredBlogs.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-10"
        >
          <p className="text-gray-400">No blogs found in this category.</p>
        </motion.div>
      )}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-10 flex justify-center"
      >
        <Link
          href="/blog"
          className="text-blue-400 hover:text-blue-300 transition-colors text-lg font-medium"
        >
          See more →
        </Link>
      </motion.div>
    </motion.section>
  );
}

// Sample blog data
const blogs = [
  {
    id: 1,
    title: "Building Modern Web Applications with Next.js",
    excerpt:
      "Learn how to leverage the power of Next.js to build fast, SEO-friendly web applications with server-side rendering and static site generation.",
    date: "May 15, 2023",
    readTime: 8,
    category: "web development",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
    link: "/blog/building-with-nextjs",
  },
  {
    id: 2,
    title: "Introduction to Machine Learning Algorithms",
    excerpt:
      "A comprehensive guide to understanding the fundamentals of machine learning algorithms and how they can be applied to solve real-world problems.",
    date: "April 22, 2023",
    readTime: 12,
    category: "ai",
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2065&auto=format&fit=crop",
    link: "/blog/machine-learning-intro",
  },
  {
    id: 3,
    title: "Data Visualization Techniques for Effective Storytelling",
    excerpt:
      "Discover how to transform complex data into compelling visual narratives that communicate insights clearly and effectively.",
    date: "March 10, 2023",
    readTime: 10,
    category: "data science",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    link: "/blog/data-visualization",
  },
  {
    id: 4,
    title: "The Future of AI in Web Development",
    excerpt:
      "Exploring how artificial intelligence is transforming the web development landscape and what developers need to know to stay ahead.",
    date: "February 28, 2023",
    readTime: 7,
    category: "ai",
    image:
      "https://images.unsplash.com/photo-1677442135136-760c813028c0?q=80&w=2070&auto=format&fit=crop",
    link: "/blog/ai-in-web-development",
  },
  {
    id: 5,
    title: "Responsive Design Principles for Modern Websites",
    excerpt:
      "Essential principles and best practices for creating responsive websites that provide optimal viewing experiences across all devices.",
    date: "January 15, 2023",
    readTime: 6,
    category: "web development",
    image:
      "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=2070&auto=format&fit=crop",
    link: "/blog/responsive-design",
  },
  {
    id: 6,
    title: "Big Data Analysis: Tools and Techniques",
    excerpt:
      "An overview of the most effective tools and techniques for analyzing large datasets and extracting valuable insights.",
    date: "December 5, 2022",
    readTime: 9,
    category: "data science",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    link: "/blog/big-data-analysis",
  },
  {
    id: 7,
    title: "The Rise of TypeScript in Modern Web Development",
    excerpt:
      "Why TypeScript has become the preferred choice for large-scale JavaScript applications and how it improves developer productivity.",
    date: "November 18, 2022",
    readTime: 7,
    category: "web development",
    image:
      "https://images.unsplash.com/photo-1627398242454-45a1465c2479?q=80&w=2074&auto=format&fit=crop",
    link: "/blog/typescript-in-web-development",
  },
  {
    id: 8,
    title: "Ethical Considerations in Artificial Intelligence",
    excerpt:
      "Exploring the ethical challenges and responsibilities that come with developing and deploying AI systems in various domains.",
    date: "October 5, 2022",
    readTime: 11,
    category: "ai",
    image:
      "https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?q=80&w=2070&auto=format&fit=crop",
    link: "/blog/ai-ethics",
  },
];
