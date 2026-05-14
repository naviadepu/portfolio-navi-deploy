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

const photos = [
  {
    src: "/binder1.png",
    alt: "Pitching at entrepreneurship competition",
    caption: "pitching binder",
  },
  {
    src: "/binder2.jpeg",
    alt: "Presenting startup solution",
    caption: "presenting the solution",
  },
  {
    src: "/binder3.jpeg",
    alt: "Answering questions",
    caption: "q&a round",
  },
  {
    src: "/pic3.jpeg",
    alt: "Navi",
    caption: "somewhere on campus",
  },
];

const interests = [
  { label: "volleyball", note: "setter, rec league" },
  { label: "ukulele", note: "learning slowly" },
  { label: "gym", note: "4–5x a week" },
  { label: "cooking", note: "south Indian food mostly" },
  { label: "reading", note: "fiction + non-fiction" },
  { label: "travel", note: "always planning next trip" },
];

export default function Beyond() {
  return (
    <main>
      <StatusBar />

      <div className="px-4 sm:px-8 md:px-16 lg:px-24 py-16 sm:py-20">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <motion.div {...fadeUp(0)} className="mb-12 sm:mb-16">
            <SectionLabel as="div" className="block mb-4">
              02 / beyond
            </SectionLabel>
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-black text-ink">
              off the clock
            </h1>
          </motion.div>

          {/* Intro */}
          <motion.div {...fadeUp(0.08)} className="mb-12">
            <p className="font-sans text-ink-soft text-base sm:text-lg leading-relaxed max-w-xl">
              building things is one part of it. the rest is volleyball, ukulele
              chords i can&rsquo;t quite nail, and figuring out south indian
              recipes from memory.
            </p>
          </motion.div>

          {/* Photo strip */}
          <motion.div {...fadeUp(0.12)} className="mb-14">
            <PhotoStrip photos={photos} />
          </motion.div>

          {/* Interests grid */}
          <motion.div {...fadeUp(0.18)}>
            <SectionLabel as="div" className="block mb-6">
              things i do
            </SectionLabel>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {interests.map((item) => (
                <div
                  key={item.label}
                  className="bg-surface border border-border rounded-sm p-4"
                >
                  <div className="font-display text-base font-bold text-ink mb-1">
                    {item.label}
                  </div>
                  <div className="font-mono text-[11px] text-ink-mute tracking-wide">
                    {item.note}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Nav */}
          <motion.div
            {...fadeUp(0.28)}
            className="mt-14 flex items-center justify-between"
          >
            <Link
              href="/"
              className="font-mono text-[12px] text-ink-soft hover:text-ink transition-colors tracking-wide"
            >
              ← home
            </Link>
            <Link
              href="/contact"
              className="font-mono text-[12px] text-ink-soft hover:text-ink transition-colors tracking-wide"
            >
              let&rsquo;s talk →
            </Link>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
