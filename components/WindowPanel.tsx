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
  const closeBtn =
    "flex items-center justify-center w-[18px] h-[18px] bevel-raised text-ink text-[11px] font-bold leading-none active:bevel-sunken";

  return (
    <div className={`bevel-raised p-0.5 ${className}`}>
      {/* Title bar */}
      <div className="titlebar-gradient text-white font-mono text-[13px] font-bold tracking-wide uppercase px-2 py-1 flex items-center justify-between select-none crt-text">
        <span className="truncate">{title}</span>
        {backHref ? (
          <Link href={backHref} aria-label="Close and go back" className={closeBtn}>
            ×
          </Link>
        ) : (
          <span aria-hidden="true" className={closeBtn}>
            ×
          </span>
        )}
      </div>
      {/* Content */}
      <div className="bg-surface">{children}</div>
    </div>
  );
}
