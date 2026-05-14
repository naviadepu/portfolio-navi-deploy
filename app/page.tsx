"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import StatusBar from "@/components/StatusBar";
import WindowPanel from "@/components/WindowPanel";
import SectionLabel from "@/components/SectionLabel";
import Card from "@/components/Card";
import { nowConfig } from "@/lib/siteConfig";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, ease: "easeOut", delay },
});

export default function Home() {
  return (
    <main>
      <StatusBar />

      {/* Hero */}
      <section className="px-4 sm:px-8 md:px-16 lg:px-24 pt-16 sm:pt-20 pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10 lg:gap-16">
            {/* Name block */}
            <div className="flex-1 min-w-0">
              <motion.h1
                {...fadeUp(0)}
                className="font-display text-[clamp(4rem,14vw,10rem)] font-black text-ink leading-[0.88] tracking-tight mb-5"
              >
                NAVI
              </motion.h1>
              <motion.p
                {...fadeUp(0.12)}
                className="text-ink-soft text-lg sm:text-xl font-sans mb-2 leading-relaxed"
              >
                frontend engineer + founder.{" "}
                <span className="text-ink font-medium">building Clutch.</span>
              </motion.p>
              <motion.p
                {...fadeUp(0.2)}
                className="font-mono text-[12px] text-ink-mute tracking-widest uppercase"
              >
                Atlanta, GA · GSU &rsquo;26 · F-1
              </motion.p>

              {/* Nav links under the name on desktop */}
              <motion.nav
                {...fadeUp(0.28)}
                aria-label="Main navigation"
                className="mt-10 hidden lg:flex items-center gap-8"
              >
                {[
                  { href: "/work", label: "work" },
                  { href: "/about", label: "about" },
                  { href: "/now", label: "now" },
                  { href: "/beyond", label: "beyond" },
                  { href: "/contact", label: "contact" },
                ].map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    className="font-mono text-[13px] text-ink-soft hover:text-ink transition-colors tracking-wide"
                  >
                    {label}
                  </Link>
                ))}
              </motion.nav>
            </div>

            {/* MEET NAVI window */}
            <motion.div {...fadeUp(0.18)} className="lg:w-72 xl:w-80 shrink-0">
              <WindowPanel title="MEET-NAVI">
                <div className="flex flex-col gap-4 p-5">
                  <div className="relative w-full h-48 sm:h-56 overflow-hidden rounded-sm bg-border">
                    <Image
                      src="/pic.jpeg"
                      alt="Navi Adepu"
                      fill
                      className="object-cover object-top"
                      priority
                      sizes="(max-width: 768px) 100vw, 320px"
                    />
                  </div>
                  <p className="font-mono text-[12px] text-ink-soft leading-relaxed tracking-wide">
                    junior at gsu studying cs. co-founded clutch, a daily
                    women&rsquo;s health platform. contributing to ai research at
                    animasentio lab. mostly i build things on the frontend.
                  </p>
                  <Link
                    href="/about"
                    className="font-mono text-[11px] text-accent hover:opacity-80 transition-opacity tracking-widest uppercase"
                  >
                    more about me →
                  </Link>
                </div>
              </WindowPanel>
            </motion.div>
          </div>

          {/* Mobile nav */}
          <motion.nav
            {...fadeUp(0.3)}
            aria-label="Main navigation"
            className="mt-10 lg:hidden flex flex-wrap gap-5"
          >
            {[
              { href: "/work", label: "work" },
              { href: "/about", label: "about" },
              { href: "/now", label: "now" },
              { href: "/beyond", label: "beyond" },
              { href: "/contact", label: "contact" },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="font-mono text-[13px] text-ink-soft hover:text-ink transition-colors tracking-wide"
              >
                {label}
              </Link>
            ))}
          </motion.nav>
        </div>
      </section>

      {/* Currently */}
      <section
        className="px-4 sm:px-8 md:px-16 lg:px-24 py-16 border-t border-border"
        aria-labelledby="currently-heading"
      >
        <div className="max-w-7xl mx-auto">
          <SectionLabel as="div" className="block mb-6">
            ** currently
          </SectionLabel>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Card padding="p-5" as="article">
              <div className="font-mono text-[11px] text-ink-mute mb-2 tracking-widest uppercase">
                building
              </div>
              <div className="font-sans font-medium text-ink text-sm">
                {nowConfig.building.title}
              </div>
              <div className="font-sans text-sm text-ink-soft mt-1 leading-relaxed">
                {nowConfig.building.description.split(".")[0]}.
              </div>
            </Card>
            <Card padding="p-5" as="article">
              <div className="font-mono text-[11px] text-ink-mute mb-2 tracking-widest uppercase">
                learning
              </div>
              <div className="font-sans text-sm text-ink leading-relaxed">
                {nowConfig.learning}
              </div>
            </Card>
            <Card padding="p-5" as="article">
              <div className="font-mono text-[11px] text-ink-mute mb-2 tracking-widest uppercase">
                reading
              </div>
              <div className="font-sans text-sm text-ink leading-relaxed">
                {nowConfig.reading}
              </div>
            </Card>
          </div>
          <div className="mt-4">
            <Link
              href="/now"
              className="font-mono text-[12px] text-ink-mute hover:text-ink transition-colors tracking-wide"
            >
              → full now page
            </Link>
          </div>
        </div>
      </section>

      {/* Section previews */}
      <section
        className="px-4 sm:px-8 md:px-16 lg:px-24 py-16 border-t border-border"
        aria-labelledby="explore-heading"
      >
        <div className="max-w-7xl mx-auto">
          <SectionLabel as="div" className="block mb-6">
            explore
          </SectionLabel>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              {
                href: "/work",
                label: "03 / WORK",
                title: "the work",
                desc: "Clutch, Vivience AI, Binder, and more shipped things.",
              },
              {
                href: "/about",
                label: "01 / ABOUT",
                title: "the journey",
                desc: "GSU CS junior, F-1, research contributor, builder.",
              },
              {
                href: "/beyond",
                label: "02 / BEYOND",
                title: "off the clock",
                desc: "Volleyball, ukulele, gym, and other side quests.",
              },
            ].map(({ href, label, title, desc }) => (
              <Link
                key={href}
                href={href}
                className="block group focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-bg rounded-sm"
              >
                <Card
                  padding="p-6"
                  className="h-full transition-shadow duration-200 group-hover:shadow-md cursor-pointer"
                >
                  <div className="font-mono text-[11px] text-ink-mute mb-3 tracking-widest uppercase">
                    {label}
                  </div>
                  <div className="font-display text-xl font-bold text-ink mb-2 group-hover:text-accent transition-colors duration-200">
                    {title}
                  </div>
                  <div className="font-sans text-sm text-ink-soft leading-relaxed">
                    {desc}
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 sm:px-8 md:px-16 lg:px-24 py-8 border-t border-border">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <span className="font-mono text-[12px] text-ink-mute tracking-wide">
            Atlanta, GA — Vaishnavi Adepu
          </span>
          <div className="flex items-center gap-6">
            <a
              href="mailto:vaishnavi.adepu444@email.com"
              className="font-mono text-[12px] text-ink-soft hover:text-ink transition-colors tracking-wide"
            >
              email
            </a>
            <a
              href="https://linkedin.com/in/vaishnavi-adepu444"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[12px] text-ink-soft hover:text-ink transition-colors tracking-wide"
            >
              linkedin
            </a>
            <a
              href="https://github.com/naviadepu"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[12px] text-ink-soft hover:text-ink transition-colors tracking-wide"
            >
              github
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
