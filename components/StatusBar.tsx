"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/work", label: "project" },
  { href: "/leadership", label: "leadership" },
  { href: "/startup", label: "startup" },
  { href: "/content", label: "content" },
  { href: "/contact", label: "contact" },
];

export default function StatusBar() {
  const pathname = usePathname();
  const [timeStr, setTimeStr] = useState("");
  const [dateStr, setDateStr] = useState("");

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTimeStr(
        new Intl.DateTimeFormat("en-US", {
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        }).format(now)
      );
      setDateStr(
        new Intl.DateTimeFormat("en-US", {
          month: "2-digit",
          day: "2-digit",
          year: "2-digit",
        }).format(now)
      );
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  const isHome = pathname === "/";

  return (
    <div
      role="banner"
      aria-label="Site navigation"
      className="w-full sticky top-0 z-50 bevel-raised px-2 py-1.5 flex items-center gap-2"
      style={{ borderTop: "none", borderLeft: "none", borderRight: "none" }}
    >
      <Link
        href="/"
        aria-label="Home"
        aria-current={isHome ? "page" : undefined}
        className={`shrink-0 flex items-center gap-1.5 px-3 py-1.5 font-mono text-[13px] font-bold text-ink select-none ${
          isHome ? "bevel-sunken" : "bevel-raised hover:brightness-105"
        }`}
      >
        Start
      </Link>

      <nav
        aria-label="Main navigation"
        className="flex items-center gap-1.5 overflow-x-auto flex-1 min-w-0"
        style={{ scrollbarWidth: "none" }}
      >
        {navLinks.map(({ href, label }) => {
          const active = pathname?.startsWith(href);
          return (
            <Link
              key={href}
              href={href}
              aria-current={active ? "page" : undefined}
              className={`shrink-0 px-3 py-1.5 font-mono text-[13px] text-ink whitespace-nowrap select-none transition-none ${
                active ? "bevel-sunken" : "bevel-raised hover:brightness-105"
              }`}
            >
              {label}
            </Link>
          );
        })}
      </nav>

      <div
        aria-hidden="true"
        className="shrink-0 bevel-well px-3 py-1.5 font-mono text-[13px] text-ink tabular-nums hidden sm:block"
      >
        {timeStr || "--:--"} · {dateStr || "--/--/--"}
      </div>
    </div>
  );
}
