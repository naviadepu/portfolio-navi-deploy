import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  padding?: string;
  as?: "div" | "article" | "section";
}

export default function Card({
  children,
  className = "",
  padding = "p-8",
  as: Tag = "div",
}: CardProps) {
  return (
    <Tag
      className={`bg-surface border border-border rounded-sm ${padding} ${className}`}
    >
      {children}
    </Tag>
  );
}
