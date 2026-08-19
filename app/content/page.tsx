"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import StatusBar from "@/components/StatusBar";
import SectionLabel from "@/components/SectionLabel";
import Card from "@/components/Card";
import Sticker from "@/components/Sticker";
import TagPill from "@/components/TagPill";
import { contentConfig } from "@/lib/siteConfig";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, ease: "easeOut", delay },
});

const posts = [
  { src: "/clutch-social-mission.jpg", alt: "Clutch Instagram post — The Mission" },
  { src: "/clutch-social-thankyou.jpg", alt: "Clutch Instagram post — 50+ sign-ups" },
];

export default function ContentPage() {
  return (
    <main>
      <StatusBar />

      <div className="px-4 sm:px-8 md:px-16 lg:px-24 py-16 sm:py-20">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <motion.div {...fadeUp(0)} className="mb-12 sm:mb-16">
            <SectionLabel as="div" className="block mb-4">
              05 / content
            </SectionLabel>
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-black text-ink">
              {contentConfig.handle}
            </h1>
            <p className="font-sans text-ink-soft text-base sm:text-lg leading-relaxed max-w-xl mt-5">
              since {contentConfig.since}, posting the build-in-public side of
              Clutch — what actually happens between the pitch deck and the
              product.
            </p>
          </motion.div>

          {/* Pillars */}
          <motion.div {...fadeUp(0.1)} className="mb-12 flex flex-wrap gap-2">
            {contentConfig.pillars.map((p) => (
              <TagPill key={p} label={p} />
            ))}
          </motion.div>

          {/* Recent posts */}
          <motion.div {...fadeUp(0.13)} className="mb-14">
            <SectionLabel as="div" className="block mb-4">
              from the feed
            </SectionLabel>
            <div className="grid grid-cols-2 gap-3 max-w-md">
              {posts.map((post) => (
                <div
                  key={post.src}
                  className="relative w-full aspect-square overflow-hidden border border-border bg-border"
                >
                  <Image
                    src={post.src}
                    alt={post.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 45vw, 220px"
                  />
                </div>
              ))}
            </div>
          </motion.div>

          {/* Platforms */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-14">
            {contentConfig.platforms.map((platform, i) => (
              <motion.div key={platform.name} {...fadeUp(0.16 + i * 0.08)}>
                <a
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-bg rounded-sm h-full"
                  aria-label={`${platform.name}: ${contentConfig.handle}`}
                >
                  <Card
                    padding="p-6"
                    className="h-full hover:brightness-105 active:bevel-sunken transition-[filter] duration-150 cursor-pointer relative"
                  >
                    <Sticker
                      rotate={i % 2 === 0 ? -5 : 6}
                      className="absolute -top-3 -right-3"
                      variant="solid"
                      color={platform.name === "Instagram" ? "#E1306C" : "#111111"}
                    >
                      {platform.name === "Instagram" ? "📸" : "🎵"}
                    </Sticker>
                    <div className="font-mono text-[11px] text-ink-mute mb-2 tracking-widest uppercase">
                      {platform.name}
                    </div>
                    <div className="font-display text-lg font-bold text-ink group-hover:text-accent transition-colors duration-200 mb-2">
                      {contentConfig.handle}
                    </div>
                    <p className="font-sans text-sm text-ink-soft leading-relaxed mb-3">
                      {platform.description}
                    </p>
                    <div className="font-mono text-[11px] text-ink-mute tracking-wide">
                      ↗ follow along
                    </div>
                  </Card>
                </a>
              </motion.div>
            ))}
          </div>

          {/* Closer */}
          <motion.div {...fadeUp(0.36)} className="mb-14">
            <p className="font-sans text-ink-soft text-sm leading-relaxed">
              the startup that started it all lives at{" "}
              <Link href="/work/clutch" className="text-accent hover:opacity-80 transition-opacity">
                /work/clutch →
              </Link>
            </p>
          </motion.div>

          {/* Nav */}
          <motion.div
            {...fadeUp(0.4)}
            className="flex items-center justify-between border-t border-border pt-6"
          >
            <Link
              href="/startup"
              className="font-mono text-[12px] text-ink-soft hover:text-ink transition-colors tracking-wide"
            >
              ← startup
            </Link>
            <Link
              href="/contact"
              className="font-mono text-[12px] text-ink-soft hover:text-ink transition-colors tracking-wide"
            >
              contact →
            </Link>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
