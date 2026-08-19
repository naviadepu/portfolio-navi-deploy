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
      className={`font-mono text-[13px] font-bold tracking-widest uppercase text-accent underline decoration-2 underline-offset-2 ${className}`}
    >
      {children}
    </Tag>
  );
}
