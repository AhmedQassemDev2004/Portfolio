import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Layout } from "@/components/ui/layout";

// Use Inter font which is more widely available and stable
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ahmed Qassem - Portfolio",
  description: "Full Stack Developer & AI Enthusiast",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
