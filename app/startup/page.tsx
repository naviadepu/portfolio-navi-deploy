"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import StatusBar from "@/components/StatusBar";
import SectionLabel from "@/components/SectionLabel";
import ProjectCard from "@/components/ProjectCard";
import Sticker from "@/components/Sticker";
import { projects } from "@/lib/siteConfig";

const imageExists: Record<string, boolean> = {
  clutch: true,
  binder: true,
};

const accentColors: Record<string, string> = {
  clutch: "#FF0090",
  binder: "#7B2E2A",
};

const startups = projects.filter((p) => p.isStartup);

export default function StartupPage() {
  return (
    <main>
      <StatusBar />

      <div className="px-4 sm:px-8 md:px-16 lg:px-24 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="mb-14 sm:mb-16 relative"
          >
            <SectionLabel as="div" className="block mb-4">
              04 / startup
            </SectionLabel>
            <div className="flex flex-wrap items-center gap-4">
              <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-black text-ink">
                building things
              </h1>
              <Sticker rotate={-8} className="hidden sm:inline-flex">
                ★ founder mode
              </Sticker>
            </div>
            <p className="font-sans text-ink-soft text-base sm:text-lg leading-relaxed max-w-xl mt-5">
              two startups, two very different problems. one live, one in beta
              — both mine end to end, from the first line of code to the
              people using them.
            </p>
          </motion.div>

          {/* Startups grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-16" role="list">
            {startups.map((project, i) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.12 }}
                role="listitem"
              >
                <ProjectCard
                  title={project.title}
                  tagline={project.tagline}
                  image={project.image}
                  stack={project.stack}
                  slug={project.slug}
                  year={project.year}
                  role={project.role}
                  hasImage={imageExists[project.slug]}
                  accentColor={accentColors[project.slug]}
                />
              </motion.div>
            ))}
          </div>

          {/* Content creation pointer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="border-t border-border pt-8"
          >
            <p className="font-sans text-ink-soft text-sm leading-relaxed">
              posting the behind-the-scenes of building Clutch as{" "}
              <Link href="/content" className="text-accent hover:opacity-80 transition-opacity">
                @clutchhq_ →
              </Link>
            </p>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer className="px-4 sm:px-8 md:px-16 lg:px-24 py-8 border-t border-border">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link
            href="/leadership"
            className="font-mono text-[12px] text-ink-soft hover:text-ink transition-colors tracking-wide"
          >
            ← leadership
          </Link>
          <Link
            href="/content"
            className="font-mono text-[12px] text-ink-soft hover:text-ink transition-colors tracking-wide"
          >
            content →
          </Link>
        </div>
      </footer>
    </main>
  );
}
