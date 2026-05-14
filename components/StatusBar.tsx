"use client";

import { useEffect, useState } from "react";
import { statusConfig } from "@/lib/siteConfig";

export default function StatusBar() {
  const [timeStr, setTimeStr] = useState("");

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const hm = new Intl.DateTimeFormat("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      }).format(now);
      const date = new Intl.DateTimeFormat("en-US", {
        month: "2-digit",
        day: "2-digit",
        year: "2-digit",
      }).format(now);
      setTimeStr(`${hm} · ${date}`);
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  const statusText = `${statusConfig.building} · ${statusConfig.listening} · last commit ${statusConfig.lastCommit}`;

  return (
    <div
      role="banner"
      aria-label="Site status bar"
      className="w-full sticky top-0 z-50 bg-ink font-mono text-[13px] leading-none px-4 py-2 flex items-center justify-between gap-6"
    >
      <time
        dateTime={new Date().toISOString()}
        aria-live="polite"
        aria-label="Current time"
        className="shrink-0 text-bg tabular-nums tracking-wide"
      >
        {timeStr}
      </time>
      <span
        aria-hidden="true"
        className="hidden sm:block truncate text-ink-mute text-[12px] tracking-wide"
        style={{ color: "rgba(247,244,238,0.45)" }}
      >
        {statusText}
      </span>
    </div>
  );
}
