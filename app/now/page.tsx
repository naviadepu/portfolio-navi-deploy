"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import StatusBar from "@/components/StatusBar";
import SectionLabel from "@/components/SectionLabel";
import Card from "@/components/Card";
import { nowConfig } from "@/lib/siteConfig";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, ease: "easeOut", delay },
});

const items = [
  { label: "building", value: nowConfig.building.description, title: nowConfig.building.title },
  { label: "reading", value: nowConfig.reading },
  { label: "learning", value: nowConfig.learning },
  { label: "listening", value: nowConfig.listening },
];

export default function NowPage() {
  return (
    <main>
      <StatusBar />

      <div className="px-4 sm:px-8 md:px-16 lg:px-24 py-16 sm:py-20">
        <div className="max-w-2xl mx-auto">
          <motion.div {...fadeUp(0)} className="mb-12">
            <SectionLabel as="div" className="block mb-4">
              current.exe
            </SectionLabel>
            <h1 className="font-display text-5xl sm:text-6xl font-black text-ink">
              now
            </h1>
          </motion.div>

          <div className="space-y-4">
            {items.map((item, i) => (
              <motion.div key={item.label} {...fadeUp(0.08 + i * 0.06)}>
                <Card padding="p-6" as="section">
                  <SectionLabel as="div" className="block mb-3">
                    {item.label}
                  </SectionLabel>
                  {item.title && (
                    <div className="font-display text-xl font-bold text-ink mb-2">
                      {item.title}
                    </div>
                  )}
                  <p className="font-sans text-ink-soft leading-relaxed text-sm">
                    {item.value}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeUp(0.4)} className="mt-10">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[11px] text-ink-mute tracking-widest uppercase">
                last updated · {nowConfig.lastUpdated}
              </span>
              <Link
                href="/"
                className="font-mono text-[12px] text-ink-soft hover:text-ink transition-colors tracking-wide"
              >
                ← home
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
