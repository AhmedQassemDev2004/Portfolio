"use client";

import { Suspense, lazy } from "react";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/floating-navbar";
import {
  IconMessage,
  IconUser,
  IconBriefcase,
  IconLink,
  IconCode,
} from "@tabler/icons-react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import Navbar from "@/components/Navbar";

// Lazy load components that aren't immediately visible
const About = lazy(() => import("@/components/About"));
const Skills = lazy(() => import("@/components/ClientSkills"));
const Projects = lazy(() => import("@/components/Projects"));
const Blog = lazy(() => import("@/components/Blog"));
const Contact = lazy(() => import("@/components/Contact"));
const Footer = lazy(() => import("@/components/Footer"));

const items = [
  { name: "About", link: "/#about", icon: <IconUser className="h-4 w-4" /> },
  {
    name: "Skills",
    link: "/#skills",
    icon: <IconCode className="h-4 w-4" />,
  },
  {
    name: "Projects",
    link: "/#projects",
    icon: <IconBriefcase className="h-4 w-4" />,
  },
  { name: "Blog", link: "/#blog", icon: <IconLink className="h-4 w-4" /> },
  {
    name: "Contact",
    link: "/#contact",
    icon: <IconMessage className="h-4 w-4" />,
  },
];

export default function Home() {
  return (
    <div className="min-h-[100vh] bg-[#000000] relative">
      <div className="relative z-10">
        <Navbar />
        <Hero />
        {/* <BackgroundBeams /> */}
        <Suspense fallback={<div className="h-screen"></div>}>
          <About />
        </Suspense>

        <Suspense fallback={<div className="h-screen"></div>}>
          <Skills />
        </Suspense>

        <Suspense fallback={<div className="h-screen"></div>}>
          <Projects />
        </Suspense>

        {/* <Suspense fallback={<div className="h-screen"></div>}>
          <Blog />
        </Suspense> */}

        <Suspense fallback={<div className="h-screen"></div>}>
          <Contact />
        </Suspense>

        <Suspense fallback={<div className="h-screen"></div>}>
          <Footer />
        </Suspense>
      </div>
    </div>
  );
}
