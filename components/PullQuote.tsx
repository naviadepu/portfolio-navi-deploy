interface PullQuoteProps {
  children: string;
  attribution?: string;
}

export default function PullQuote({ children, attribution }: PullQuoteProps) {
  return (
    <blockquote className="border-l-[3px] border-accent pl-6 sm:pl-8 py-2 my-10">
      <p className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-ink leading-snug italic">
        &ldquo;{children}&rdquo;
      </p>
      {attribution && (
        <footer className="mt-4 font-mono text-[12px] text-ink-mute">
          — {attribution}
        </footer>
      )}
    </blockquote>
  );
}
