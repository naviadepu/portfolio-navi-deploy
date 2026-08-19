import { ReactNode } from "react";

interface StickerProps {
  children: ReactNode;
  rotate?: number;
  className?: string;
  variant?: "pin" | "tape" | "solid";
  color?: string;
}

const variantClasses: Record<NonNullable<StickerProps["variant"]>, string> = {
  pin: "bevel-raised text-ink",
  tape: "bg-bg border border-dashed border-ink-mute text-ink-soft",
  solid: "bevel-raised text-white",
};

export default function Sticker({
  children,
  rotate = -6,
  className = "",
  variant = "pin",
  color,
}: StickerProps) {
  return (
    <span
      aria-hidden="true"
      style={{
        transform: `rotate(${rotate}deg)`,
        backgroundColor: variant === "solid" ? color ?? "var(--accent)" : undefined,
        boxShadow: "0 3px 10px rgba(20,19,15,0.2)",
      }}
      className={`inline-flex items-center gap-1.5 select-none whitespace-nowrap px-3 py-1.5 font-mono text-[12px] font-bold tracking-widest uppercase ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
