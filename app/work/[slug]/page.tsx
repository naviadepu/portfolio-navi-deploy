"use client";

import { use } from "react";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import StatusBar from "@/components/StatusBar";
import WindowPanel from "@/components/WindowPanel";
import SectionLabel from "@/components/SectionLabel";
import Card from "@/components/Card";
import TagPill from "@/components/TagPill";
import PullQuote from "@/components/PullQuote";
import PhotoStrip from "@/components/PhotoStrip";
import { projects } from "@/lib/siteConfig";

const imageExists: Record<string, boolean> = {
  clutch: true,
  vivience: true,
  binder: true,
};

const clutchPhotos = [
  {
    src: "/clutch-tabling-1.jpg",
    alt: "Tabling for Clutch at GSU market day",
    caption: "tabling at GSU market day",
  },
  {
    src: "/clutch-tabling-2.jpg",
    alt: "Talking to a student about Clutch",
    caption: "pitching Clutch one conversation at a time",
  },
  {
    src: "/clutch-social-mission.jpg",
    alt: "Clutch Instagram post — The Mission",
    caption: "@clutchhq_ — the mission",
  },
  {
    src: "/clutch-social-thankyou.jpg",
    alt: "Clutch Instagram post — 50+ sign-ups thank you",
    caption: "@clutchhq_ — 50+ sign-ups",
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, ease: "easeOut", delay },
});

export default function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const isClutch = slug === "clutch";
  const accentStyle = isClutch
    ? ({ "--accent": "var(--clutch-pink)" } as React.CSSProperties)
    : {};
  const backHref = project.isStartup ? "/startup" : "/work";
  const backLabel = project.isStartup ? "← all startups" : "← all work";

  return (
    <div style={accentStyle}>
      <main>
        <StatusBar />

        <div className="px-4 sm:px-8 md:px-16 lg:px-24 py-12 sm:py-16">
          <div className="max-w-4xl mx-auto">
            {/* Window chrome */}
            <motion.div {...fadeUp(0)} className="mb-10">
              <WindowPanel title={project.title} backHref={backHref}>
                {/* Hero image */}
                <div className="relative w-full h-56 sm:h-72 md:h-96 overflow-hidden bg-border">
                  {imageExists[slug] ? (
                    <Image
                      src={project.image}
                      alt={`${project.title} hero screenshot`}
                      fill
                      className="object-cover"
                      priority
                      sizes="(max-width: 768px) 100vw, 896px"
                    />
                  ) : (
                    <div
                      className="w-full h-full flex flex-col items-center justify-center gap-3"
                      style={{
                        background: isClutch
                          ? "linear-gradient(135deg, #FF009018 0%, #FF009005 100%)"
                          : "linear-gradient(135deg, var(--border) 0%, var(--bg) 100%)",
                      }}
                    >
                      <span
                        className="font-display text-7xl sm:text-8xl font-black opacity-15 select-none"
                        aria-hidden="true"
                        style={{ color: "var(--accent)" }}
                      >
                        {project.title[0]}
                      </span>
                      <span className="font-mono text-[11px] text-ink-mute tracking-widest uppercase">
                        screenshots coming
                      </span>
                    </div>
                  )}
                </div>
              </WindowPanel>
            </motion.div>

            {/* Title block */}
            <motion.div {...fadeUp(0.08)} className="mb-12">
              <div className="flex flex-wrap items-baseline gap-4 mb-3">
                <h1 className="font-display text-4xl sm:text-5xl font-black text-ink">
                  {project.title}
                </h1>
                <span className="font-mono text-[12px] text-ink-mute tracking-wide">
                  {project.year}
                </span>
              </div>
              <p className="text-ink-soft text-lg leading-relaxed mb-3">
                {project.tagline}
              </p>
              <div className="font-mono text-[12px] text-ink-mute tracking-wide">
                {project.role}
              </div>
            </motion.div>

            {/* Photo strip */}
            {isClutch && (
              <motion.div {...fadeUp(0.1)} className="mb-12">
                <SectionLabel as="div" className="block mb-4">
                  in the field
                </SectionLabel>
                <PhotoStrip photos={clutchPhotos} />
              </motion.div>
            )}

            {/* 01 / PROBLEM */}
            <motion.div {...fadeUp(0.12)} className="mb-8">
              <Card padding="p-6 sm:p-8" as="section">
                <SectionLabel as="div" className="block mb-4">
                  01 / problem
                </SectionLabel>
                <p className="font-sans text-ink leading-relaxed">
                  {project.problem}
                </p>
              </Card>
            </motion.div>

            {/* 02 / MY ROLE */}
            <motion.div {...fadeUp(0.16)} className="mb-8">
              <Card padding="p-6 sm:p-8" as="section">
                <SectionLabel as="div" className="block mb-4">
                  02 / my role
                </SectionLabel>
                <p className="font-sans text-ink leading-relaxed">
                  {project.myRole}
                </p>
              </Card>
            </motion.div>

            {/* 03 / STACK */}
            <motion.div {...fadeUp(0.2)} className="mb-8">
              <Card padding="p-6 sm:p-8" as="section">
                <SectionLabel as="div" className="block mb-4">
                  03 / stack
                </SectionLabel>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tag) => (
                    <TagPill key={tag} label={tag} />
                  ))}
                </div>
              </Card>
            </motion.div>

            {/* 04 / DECISIONS */}
            <motion.div {...fadeUp(0.24)} className="mb-8">
              <Card padding="p-6 sm:p-8" as="section">
                <SectionLabel as="div" className="block mb-6">
                  04 / decisions
                </SectionLabel>
                <div className="space-y-8">
                  {project.decisions.map((d, i) => (
                    <div key={i}>
                      <h3 className="font-display text-xl font-bold text-ink mb-2">
                        {d.title}
                      </h3>
                      <p className="font-sans text-ink-soft leading-relaxed">
                        {d.description}
                      </p>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>

            {/* Pull quote */}
            {isClutch && (
              <motion.div {...fadeUp(0.27)} className="mb-8">
                <PullQuote>
                  i care about how products feel, not just whether they work.
                </PullQuote>
              </motion.div>
            )}

            {/* 05 / OUTCOME */}
            <motion.div {...fadeUp(0.28)} className="mb-12">
              <Card padding="p-6 sm:p-8" as="section">
                <SectionLabel as="div" className="block mb-4">
                  05 / outcome
                </SectionLabel>
                <p className="font-sans text-ink leading-relaxed">
                  {project.outcome}
                </p>
              </Card>
            </motion.div>

            {/* Links */}
            <motion.div
              {...fadeUp(0.32)}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-12"
            >
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block focus:outline-none focus:ring-2 focus:ring-accent rounded-sm"
                >
                  <Card
                    padding="p-5"
                    className="hover:brightness-105 active:bevel-sunken transition-[filter] duration-150 cursor-pointer group"
                  >
                    <div className="font-mono text-[11px] text-ink-mute mb-1.5 tracking-widest uppercase">
                      {slug === "vivience" ? "featured" : "live project"}
                    </div>
                    <div className="font-display text-lg font-bold text-ink group-hover:text-accent transition-colors">
                      {slug === "vivience" ? "Read the feature →" : "View live →"}
                    </div>
                  </Card>
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block focus:outline-none focus:ring-2 focus:ring-accent rounded-sm"
                >
                  <Card
                    padding="p-5"
                    className="hover:brightness-105 active:bevel-sunken transition-[filter] duration-150 cursor-pointer group"
                  >
                    <div className="font-mono text-[11px] text-ink-mute mb-1.5 tracking-widest uppercase">
                      source
                    </div>
                    <div className="font-display text-lg font-bold text-ink group-hover:text-accent transition-colors">
                      GitHub →
                    </div>
                  </Card>
                </a>
              )}
            </motion.div>

            {/* Nav */}
            <div className="flex items-center justify-between pt-4 border-t border-border">
              <Link
                href={backHref}
                className="font-mono text-[12px] text-ink-soft hover:text-ink transition-colors tracking-wide"
              >
                {backLabel}
              </Link>
              <Link
                href="/"
                className="font-mono text-[12px] text-ink-soft hover:text-ink transition-colors tracking-wide"
              >
                home →
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
