interface SectionLabelProps {
  children: string;
  className?: string;
  as?: "span" | "div" | "p";
}

export default function SectionLabel({
  children,
  className = "",
  as: Tag = "span",
}: SectionLabelProps) {
  return (
    <Tag
      className={`font-mono text-[13px] tracking-widest uppercase text-ink-soft ${className}`}
    >
      {children}
    </Tag>
  );
}
