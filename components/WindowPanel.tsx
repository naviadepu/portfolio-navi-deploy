import { ReactNode } from "react";
import Link from "next/link";

interface WindowPanelProps {
  title: string;
  children: ReactNode;
  backHref?: string;
  className?: string;
}

export default function WindowPanel({
  title,
  children,
  backHref,
  className = "",
}: WindowPanelProps) {
  return (
    <div
      className={`border border-border rounded-sm overflow-hidden shadow-sm ${className}`}
    >
      {/* Title bar */}
      <div className="bg-ink text-bg font-mono text-[12px] tracking-widest uppercase px-3 py-2 flex items-center justify-between select-none">
        <span>{title}</span>
        <div className="flex items-center gap-1.5">
          {/* Decorative window dots */}
          <span
            className="block w-2.5 h-2.5 rounded-full"
            style={{ background: "rgba(247,244,238,0.15)" }}
            aria-hidden="true"
          />
          <span
            className="block w-2.5 h-2.5 rounded-full"
            style={{ background: "rgba(247,244,238,0.15)" }}
            aria-hidden="true"
          />
          {backHref ? (
            <Link
              href={backHref}
              aria-label="Close and return to work"
              className="block w-2.5 h-2.5 rounded-full bg-accent hover:opacity-80 transition-opacity focus:outline-none focus:ring-1 focus:ring-bg focus:ring-offset-1 focus:ring-offset-ink"
            />
          ) : (
            <span
              className="block w-2.5 h-2.5 rounded-full bg-accent"
              role="button"
              aria-label="Close panel (decorative)"
            />
          )}
        </div>
      </div>
      {/* Content */}
      <div className="bg-surface">{children}</div>
    </div>
  );
}
