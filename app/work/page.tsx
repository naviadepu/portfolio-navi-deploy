"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import StatusBar from "@/components/StatusBar";
import SectionLabel from "@/components/SectionLabel";
import ProjectCard from "@/components/ProjectCard";
import { projects, archiveProjects } from "@/lib/siteConfig";

const imageExists: Record<string, boolean> = {
  clutch: false,
  vivience: false,
  binder: true,
};

const accentColors: Record<string, string> = {
  clutch: "#FF0090",
  vivience: "#7B2E2A",
  binder: "#7B2E2A",
};

export default function WorkPage() {
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
            className="mb-14 sm:mb-16"
          >
            <SectionLabel as="div" className="block mb-4">
              03 projects
            </SectionLabel>
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-black text-ink">
              the work
            </h1>
          </motion.div>

          {/* Featured projects grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-20" role="list">
            {projects.map((project, i) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.12 }}
                role="listitem"
                className={project.isLead ? "md:col-span-2" : ""}
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

          {/* Archive */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <SectionLabel as="div" className="block mb-6">
              ** from the archive
            </SectionLabel>
            <ul className="space-y-3">
              {archiveProjects.map((p) => (
                <li key={p.title} className="flex items-baseline gap-4">
                  {p.url ? (
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-display text-lg font-bold text-ink hover:text-accent transition-colors"
                    >
                      {p.title}
                    </a>
                  ) : (
                    <span className="font-display text-lg font-bold text-ink-soft">
                      {p.title}
                    </span>
                  )}
                  <span className="font-sans text-sm text-ink-mute hidden sm:block">
                    {p.description}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer className="px-4 sm:px-8 md:px-16 lg:px-24 py-8 border-t border-border">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link
            href="/"
            className="font-mono text-[12px] text-ink-soft hover:text-ink transition-colors tracking-wide"
          >
            ← home
          </Link>
          <span className="font-mono text-[12px] text-ink-mute tracking-wide">
            naviadepu
          </span>
        </div>
      </footer>
    </main>
  );
}
