"use client";

import { Suspense, lazy } from "react";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

// Lazy load components that aren't immediately visible
const About = lazy(() => import("@/components/About"));
const Skills = lazy(() => import("@/components/ClientSkills"));
const Projects = lazy(() => import("@/components/Projects"));
const Contact = lazy(() => import("@/components/Contact"));


export default function Home() {
  return (
    <div className="min-h-[100vh] bg-[#000000] relative">
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Suspense fallback={<div className="h-screen"></div>}>
          <About />
        </Suspense>

        <Suspense fallback={<div className="h-screen"></div>}>
          <Projects />
        </Suspense>

        <Suspense fallback={<div className="h-screen"></div>}>
          <Skills />
        </Suspense>


        {/* <Suspense fallback={<div className="h-screen"></div>}>
          <Blog />
        </Suspense> */}

        <Suspense fallback={<div className="h-screen"></div>}>
          <Contact />
        </Suspense>
      </div>
    </div>
  );
}
