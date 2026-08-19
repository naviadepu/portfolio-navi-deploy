"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import TagPill from "./TagPill";

interface ProjectCardProps {
  title: string;
  tagline: string;
  image: string;
  stack: string[];
  slug: string;
  year: string;
  role: string;
  hasImage?: boolean;
  accentColor?: string;
}

export default function ProjectCard({
  title,
  tagline,
  image,
  stack,
  slug,
  year,
  role,
  hasImage = true,
  accentColor,
}: ProjectCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={`/work/${slug}`}
      className="block focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-bg rounded-sm"
      aria-label={`View ${title} case study`}
    >
      <motion.article
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        animate={{ y: hovered ? -3 : 0 }}
        transition={{ duration: 0.15, ease: "easeOut" }}
        className="bevel-well overflow-hidden"
      >
        {/* Cover */}
        <div className="relative w-full h-52 sm:h-60 overflow-hidden">
          {hasImage ? (
            <Image
              src={image}
              alt={`${title} preview`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
            />
          ) : (
            <div
              className="w-full h-full flex items-center justify-center"
              style={{
                background: accentColor
                  ? `linear-gradient(135deg, ${accentColor}18 0%, ${accentColor}08 100%)`
                  : "linear-gradient(135deg, var(--border) 0%, var(--bg) 100%)",
              }}
            >
              <span
                className="font-display text-5xl font-black opacity-20 select-none"
                aria-hidden="true"
              >
                {title[0]}
              </span>
            </div>
          )}
        </div>

        {/* Body */}
        <div className="p-6">
          <div className="flex items-start justify-between gap-4 mb-2">
            <h3
              className="font-display text-2xl font-bold transition-colors duration-200"
              style={{ color: hovered ? "var(--accent)" : "var(--ink)" }}
            >
              {title}
            </h3>
            <span className="font-mono text-[11px] text-ink-mute shrink-0 pt-1.5 tracking-wide">
              {year}
            </span>
          </div>
          <p className="text-ink-soft text-sm leading-relaxed mb-2">{tagline}</p>
          <div className="font-mono text-[12px] text-ink-mute mb-4 tracking-wide">
            {role}
          </div>

          <AnimatePresence>
            {hovered && (
              <motion.div
                key="tags"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.15 }}
                className="overflow-hidden"
              >
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {stack.map((tag) => (
                    <TagPill key={tag} label={tag} />
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.article>
    </Link>
  );
}
