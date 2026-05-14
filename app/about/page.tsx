"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import StatusBar from "@/components/StatusBar";
import SectionLabel from "@/components/SectionLabel";
import PhotoStrip from "@/components/PhotoStrip";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, ease: "easeOut", delay },
});

const timeline = [
  { year: "2022", label: "started at GSU", note: "CS major, Atlanta" },
  { year: "2023", label: "built Binder", note: "solo — 50+ users" },
  { year: "2024", label: "joined Animasentio Lab", note: "AI + UX research, IEEE ComComAp 2025" },
  { year: "2024", label: "co-founded Clutch", note: "frontend lead, 200+ waitlist" },
  { year: "2026", label: "junior year", note: "actively looking for Fall '26 internships" },
];

const photos = [
  { src: "/pic.jpeg", alt: "Navi", caption: "me, probably thinking about UI" },
  { src: "/pic3.jpeg", alt: "Navi", caption: "GSU campus" },
  { src: "/binder1.png", alt: "Pitching Binder", caption: "pitching binder at competition" },
];

export default function About() {
  return (
    <main>
      <StatusBar />

      <div className="px-4 sm:px-8 md:px-16 lg:px-24 py-16 sm:py-20">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <motion.div {...fadeUp(0)} className="mb-12 sm:mb-16">
            <SectionLabel as="div" className="block mb-4">
              01 / about
            </SectionLabel>
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-black text-ink">
              hello
            </h1>
          </motion.div>

          {/* Photo strip */}
          <motion.div {...fadeUp(0.08)} className="mb-14">
            <PhotoStrip photos={photos} />
          </motion.div>

          {/* Bio */}
          <motion.div {...fadeUp(0.14)} className="mb-16 space-y-5">
            <p className="font-sans text-ink text-lg sm:text-xl leading-relaxed">
              i&rsquo;m a junior at GSU studying CS. last year i co-founded{" "}
              <Link href="/work/clutch" className="text-accent hover:opacity-80 transition-opacity">
                clutch
              </Link>
              , a daily women&rsquo;s health platform, and started contributing
              to AI research at the animasentio lab.
            </p>
            <p className="font-sans text-ink-soft text-base sm:text-lg leading-relaxed">
              mostly i build things on the frontend. i care about how products
              feel, not just whether they work. i got into engineering through
              a love of making things that other people actually use — there&rsquo;s
              nothing like watching someone interact with something you built.
            </p>
            <p className="font-sans text-ink-soft text-base sm:text-lg leading-relaxed">
              i&rsquo;m from India, studying on an F-1 visa. Atlanta has been
              a good home base — good food, good people, surprisingly great
              for building things.
            </p>
          </motion.div>

          {/* Timeline */}
          <motion.div {...fadeUp(0.2)}>
            <SectionLabel as="div" className="block mb-6">
              timeline
            </SectionLabel>
            <div className="space-y-4">
              {timeline.map((item, i) => (
                <div
                  key={i}
                  className="flex items-baseline gap-4 sm:gap-6 py-3 border-b border-border last:border-0"
                >
                  <span className="font-mono text-[12px] text-ink-mute tracking-wide shrink-0 w-10">
                    {item.year}
                  </span>
                  <span className="font-sans font-medium text-ink text-sm">
                    {item.label}
                  </span>
                  <span className="font-mono text-[11px] text-ink-mute tracking-wide hidden sm:block">
                    {item.note}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Nav */}
          <motion.div
            {...fadeUp(0.3)}
            className="mt-14 flex items-center justify-between"
          >
            <Link
              href="/"
              className="font-mono text-[12px] text-ink-soft hover:text-ink transition-colors tracking-wide"
            >
              ← home
            </Link>
            <Link
              href="/work"
              className="font-mono text-[12px] text-ink-soft hover:text-ink transition-colors tracking-wide"
            >
              the work →
            </Link>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
