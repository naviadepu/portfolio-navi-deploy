"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import StatusBar from "@/components/StatusBar";
import SectionLabel from "@/components/SectionLabel";
import Card from "@/components/Card";
import Sticker from "@/components/Sticker";
import { leadership } from "@/lib/siteConfig";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, ease: "easeOut", delay },
});

const badges = ["📌 est. leadership", "🎀 exec board"];

export default function LeadershipPage() {
  return (
    <main>
      <StatusBar />

      <div className="px-4 sm:px-8 md:px-16 lg:px-24 py-16 sm:py-20">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <motion.div {...fadeUp(0)} className="mb-12 sm:mb-16">
            <SectionLabel as="div" className="block mb-4">
              03 / leadership
            </SectionLabel>
            <div className="flex flex-wrap items-center gap-4">
              <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-black text-ink">
                on campus
              </h1>
              <Sticker rotate={7}>{badges[0]}</Sticker>
            </div>
            <p className="font-sans text-ink-soft text-base sm:text-lg leading-relaxed max-w-xl mt-5">
              running a club is its own kind of shipping — budgets, people,
              and events that have to happen on time whether or not the code
              does.
            </p>
          </motion.div>

          {/* Roles */}
          <div className="space-y-6">
            {leadership.map((item, i) => (
              <motion.div key={item.org} {...fadeUp(0.1 + i * 0.1)}>
                <Card padding="p-6 sm:p-8" as="article" className="relative">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div>
                      <div className="font-display text-2xl font-bold text-ink">
                        {item.role}
                      </div>
                      <div className="font-sans text-ink-soft text-sm mt-0.5">
                        {item.org}
                      </div>
                    </div>
                    <Sticker rotate={i % 2 === 0 ? -6 : 5} variant="tape">
                      {item.dates}
                    </Sticker>
                  </div>
                  <p className="font-sans text-ink leading-relaxed mb-5">
                    {item.description}
                  </p>
                  <ul className="space-y-2">
                    {item.highlights.map((h, hi) => (
                      <li
                        key={hi}
                        className="font-sans text-sm text-ink-soft leading-relaxed flex gap-2.5"
                      >
                        <span className="text-accent shrink-0" aria-hidden="true">
                          —
                        </span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Nav */}
          <motion.div
            {...fadeUp(0.4)}
            className="mt-14 flex items-center justify-between border-t border-border pt-6"
          >
            <Link
              href="/work"
              className="font-mono text-[12px] text-ink-soft hover:text-ink transition-colors tracking-wide"
            >
              ← work
            </Link>
            <Link
              href="/startup"
              className="font-mono text-[12px] text-ink-soft hover:text-ink transition-colors tracking-wide"
            >
              startup →
            </Link>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
