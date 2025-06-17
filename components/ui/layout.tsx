"use client";

import { AnimatedBackground } from "./animated-background";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen bg-black">
      <AnimatedBackground />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
} 