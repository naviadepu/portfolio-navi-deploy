"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { IconType } from "react-icons";
import {
  SiTypescript,
  SiJavascript,
  SiPython,
  SiCplusplus,
  SiHtml5,
  SiCss3,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiFirebase,
  SiFlask,
  SiFastapi,
  SiTailwindcss,
  SiFigma,
  SiPostgresql,
  SiMongodb,
  SiPandas,
  SiScikitlearn,
  SiGit,
  SiGithub,
  SiLinux,
  SiDocker,
  SiPytest,
  SiJira,
  SiLinkedin,
} from "react-icons/si";
import { FaJava, FaAws } from "react-icons/fa6";
import { TbDatabase } from "react-icons/tb";
import { MdEmail } from "react-icons/md";
import StatusBar from "@/components/StatusBar";
import WindowPanel from "@/components/WindowPanel";
import SectionLabel from "@/components/SectionLabel";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, ease: "easeOut", delay },
});

const linkedinUrl = "https://www.linkedin.com/in/vaishnavi-adepu444";

const skills: { name: string; Icon: IconType }[] = [
  { name: "TypeScript", Icon: SiTypescript },
  { name: "JavaScript", Icon: SiJavascript },
  { name: "Python", Icon: SiPython },
  { name: "Java", Icon: FaJava },
  { name: "C++", Icon: SiCplusplus },
  { name: "SQL", Icon: TbDatabase },
  { name: "HTML", Icon: SiHtml5 },
  { name: "CSS", Icon: SiCss3 },
  { name: "React", Icon: SiReact },
  { name: "Next.js", Icon: SiNextdotjs },
  { name: "Node.js", Icon: SiNodedotjs },
  { name: "Express", Icon: SiExpress },
  { name: "Firebase", Icon: SiFirebase },
  { name: "Flask", Icon: SiFlask },
  { name: "FastAPI", Icon: SiFastapi },
  { name: "Tailwind", Icon: SiTailwindcss },
  { name: "Figma", Icon: SiFigma },
  { name: "PostgreSQL", Icon: SiPostgresql },
  { name: "MongoDB", Icon: SiMongodb },
  { name: "AWS", Icon: FaAws },
  { name: "pandas", Icon: SiPandas },
  { name: "scikit-learn", Icon: SiScikitlearn },
  { name: "Git", Icon: SiGit },
  { name: "GitHub", Icon: SiGithub },
  { name: "Linux", Icon: SiLinux },
  { name: "Docker", Icon: SiDocker },
  { name: "Pytest", Icon: SiPytest },
  { name: "Jira", Icon: SiJira },
];

const socials = [
  {
    label: "linkedin",
    value: "vaishnavi-adepu444",
    href: linkedinUrl,
    Icon: SiLinkedin,
  },
  {
    label: "github",
    value: "naviadepu",
    href: "https://github.com/naviadepu",
    Icon: SiGithub,
  },
  {
    label: "email",
    value: "vaishnavi.adepu444@gmail.com",
    href: "mailto:vaishnavi.adepu444@gmail.com",
    Icon: MdEmail,
  },
];

export default function Home() {
  return (
    <main>
      <StatusBar />

      {/* Hero / about me */}
      <section className="px-4 sm:px-8 md:px-16 lg:px-24 pt-12 sm:pt-16 pb-10 sm:pb-12">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <motion.div {...fadeUp(0)} className="mb-10">
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-black text-ink leading-[0.9]">
              about
              <br />
              me!
              <span
                aria-hidden="true"
                className="inline-block w-[0.1em] h-[0.7em] bg-accent align-middle ml-2 animate-blink"
              />
            </h1>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            {/* Left column */}
            <div className="flex-1 min-w-0">
              {/* Name + LinkedIn + brief blurb */}
              <motion.div {...fadeUp(0.06)} className="mb-12">
                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-display text-2xl sm:text-3xl font-black text-accent hover:opacity-80 transition-opacity"
                >
                  vaishnavi (navi) adepu
                  <span aria-hidden="true" className="text-lg sm:text-xl">
                    ↗
                  </span>
                </a>
                <p className="font-sans text-ink-soft text-base sm:text-lg leading-relaxed italic mt-3 max-w-xl">
                  junior at Georgia State studying CS, building products end
                  to end — React/Next.js frontends, Python/Flask backends,
                  and everything in between. Founder of Clutch, research
                  assistant at the GSU Digital Humans Lab, and always looking
                  for the next thing worth building.
                </p>
              </motion.div>

              {/* Skills */}
              <motion.div {...fadeUp(0.12)} className="mb-12">
                <SectionLabel as="div" className="block mb-5">
                  skills
                </SectionLabel>
                <div className="flex flex-wrap gap-3">
                  {skills.map(({ name, Icon }) => (
                    <div
                      key={name}
                      title={name}
                      className="bevel-raised rounded-full w-11 h-11 flex items-center justify-center text-lg text-ink shrink-0"
                    >
                      <Icon aria-hidden="true" />
                      <span className="sr-only">{name}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Education */}
              <motion.div {...fadeUp(0.18)}>
                <SectionLabel as="div" className="block mb-5">
                  education
                </SectionLabel>
                <div className="space-y-1.5">
                  <div className="font-mono text-[12px] font-bold text-ink-mute tracking-wide">
                    Expected Dec 2027
                  </div>
                  <div className="font-display text-xl sm:text-2xl font-black text-ink uppercase">
                    Georgia State University
                  </div>
                  <div className="font-sans text-ink-soft text-sm sm:text-base italic">
                    B.S. in Computer Science · Honors College · GPA 3.93 ·
                    Atlanta, GA
                  </div>
                  <div className="font-mono text-[11px] text-ink-mute leading-relaxed pt-2">
                    Awards: NCWIT Winner, GSURF Microsoft Scholarship, STEM
                    Scholar x2, HackHers 1st Place
                  </div>
                  <div className="font-mono text-[11px] text-ink-mute leading-relaxed">
                    Coursework: Data Structures &amp; Algorithms,
                    Object-Oriented Programming, Computer Organization,
                    Database Systems, Software Development, Web Development
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right column — MEET-NAVI + SOCIALS windows */}
            <motion.div
              {...fadeUp(0.1)}
              className="lg:w-72 xl:w-80 shrink-0 relative self-start"
            >
              <WindowPanel title="MEET-NAVI">
                <div className="relative w-full h-64 sm:h-72 lg:h-80 overflow-hidden bg-border">
                  <Image
                    src="/pic.jpeg"
                    alt="Vaishnavi (Navi) Adepu"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 320px"
                  />
                </div>
              </WindowPanel>

              <WindowPanel
                title="SOCIALS"
                className="w-[88%] -mt-8 ml-auto relative z-10"
              >
                <div className="p-4 space-y-3">
                  {socials.map(({ label, value, href, Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target={label === "email" ? undefined : "_blank"}
                      rel={label === "email" ? undefined : "noopener noreferrer"}
                      className="flex items-center gap-2.5 group"
                    >
                      <Icon
                        aria-hidden="true"
                        className="text-base text-ink shrink-0"
                      />
                      <span className="font-mono text-[12px] text-ink-soft group-hover:text-accent transition-colors truncate">
                        {value}
                      </span>
                    </a>
                  ))}
                </div>
              </WindowPanel>
            </motion.div>
          </div>

        </div>
      </section>
    </main>
  );
}
