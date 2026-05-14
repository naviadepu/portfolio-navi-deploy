"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import StatusBar from "@/components/StatusBar";
import SectionLabel from "@/components/SectionLabel";
import Card from "@/components/Card";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, ease: "easeOut", delay },
});

const links = [
  {
    label: "email",
    value: "vaishnavi.adepu444@email.com",
    href: "mailto:vaishnavi.adepu444@email.com",
    external: false,
  },
  {
    label: "linkedin",
    value: "vaishnavi-adepu444",
    href: "https://www.linkedin.com/in/vaishnavi-adepu444",
    external: true,
  },
  {
    label: "github",
    value: "naviadepu",
    href: "https://github.com/naviadepu",
    external: true,
  },
  {
    label: "resume",
    value: "download PDF",
    href: "/resume.pdf",
    external: false,
    download: true,
  },
];

export default function Contact() {
  return (
    <main>
      <StatusBar />

      <div className="px-4 sm:px-8 md:px-16 lg:px-24 py-16 sm:py-20">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <motion.div {...fadeUp(0)} className="mb-12 sm:mb-16">
            <SectionLabel as="div" className="block mb-4">
              say hello
            </SectionLabel>
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-black text-ink">
              let&rsquo;s talk
            </h1>
          </motion.div>

          {/* Intro text */}
          <motion.div {...fadeUp(0.08)} className="mb-12">
            <p className="font-sans text-ink-soft text-base sm:text-lg leading-relaxed max-w-lg">
              open to frontend internship conversations for Fall 2026. also
              happy to talk about Clutch, building things, or literally anything
              else.
            </p>
          </motion.div>

          {/* Links grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-14">
            {links.map((link, i) => (
              <motion.div key={link.label} {...fadeUp(0.12 + i * 0.06)}>
                <a
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  download={link.download ? true : undefined}
                  className="block group focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-bg rounded-sm"
                  aria-label={`${link.label}: ${link.value}`}
                >
                  <Card
                    padding="p-6"
                    className="h-full hover:shadow-md transition-shadow cursor-pointer"
                  >
                    <div className="font-mono text-[11px] text-ink-mute mb-2 tracking-widest uppercase">
                      {link.label}
                    </div>
                    <div className="font-display text-lg font-bold text-ink group-hover:text-accent transition-colors duration-200 break-all">
                      {link.value}
                    </div>
                    <div className="font-mono text-[11px] text-ink-mute mt-2 tracking-wide">
                      {link.external ? "↗ open" : link.download ? "↓ download" : "→ send"}
                    </div>
                  </Card>
                </a>
              </motion.div>
            ))}
          </div>

          {/* Closer */}
          <motion.div {...fadeUp(0.36)} className="text-center mb-14">
            <p className="font-display text-xl sm:text-2xl font-bold text-ink-mute italic">
              thanks for taking a look.
            </p>
          </motion.div>

          {/* Nav */}
          <motion.div
            {...fadeUp(0.4)}
            className="flex items-center justify-between border-t border-border pt-6"
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
