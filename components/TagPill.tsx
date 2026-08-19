interface TagPillProps {
  label: string;
}

export default function TagPill({ label }: TagPillProps) {
  return (
    <span className="inline-block bevel-raised font-mono text-[12px] tracking-wide px-2.5 py-1 text-ink whitespace-nowrap">
      {label}
    </span>
  );
}
