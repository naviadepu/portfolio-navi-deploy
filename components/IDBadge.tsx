import Image from "next/image";
import { ReactNode } from "react";

interface IDBadgeProps {
  image: string;
  alt: string;
  name: string;
  role: string;
  meta?: string;
  rotate?: number;
  className?: string;
  children?: ReactNode;
}

export default function IDBadge({
  image,
  alt,
  name,
  role,
  meta,
  rotate = -3,
  className = "",
  children,
}: IDBadgeProps) {
  return (
    <div
      style={{ transform: `rotate(${rotate}deg)` }}
      className={`relative w-full ${className}`}
    >
      {/* Lanyard strap */}
      <div
        aria-hidden="true"
        className="mx-auto h-10 w-2 bg-ink"
        style={{ clipPath: "polygon(20% 0, 80% 0, 100% 100%, 0% 100%)" }}
      />
      {/* Clip */}
      <div
        aria-hidden="true"
        className="mx-auto -mt-1 h-4 w-10 bevel-raised flex items-center justify-center"
      >
        <span className="h-1.5 w-1.5 bg-ink" />
      </div>

      {/* Badge body */}
      <div className="mt-1 bevel-raised p-0.5 overflow-hidden">
        <div className="relative w-full h-48 sm:h-56 bg-border">
          <Image
            src={image}
            alt={alt}
            fill
            className="object-cover object-top"
            priority
            sizes="(max-width: 768px) 100vw, 320px"
          />
        </div>
        <div className="p-4 bg-surface border-t-2 border-dashed border-border">
          <div className="font-display text-lg font-black text-ink leading-tight">
            {name}
          </div>
          <div className="font-mono text-[11px] text-ink-soft tracking-widest uppercase mt-0.5">
            {role}
          </div>
          {meta && (
            <div className="font-mono text-[10px] text-ink-mute tracking-wide mt-1">
              {meta}
            </div>
          )}
          {children}
        </div>
      </div>
    </div>
  );
}
