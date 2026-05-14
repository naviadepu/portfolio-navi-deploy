interface TagPillProps {
  label: string;
}

export default function TagPill({ label }: TagPillProps) {
  return (
    <span className="inline-block font-mono text-[12px] tracking-wide px-2.5 py-1 border border-border text-ink-soft rounded-sm bg-bg whitespace-nowrap">
      {label}
    </span>
  );
}
