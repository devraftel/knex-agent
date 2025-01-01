"use client";

import { cn } from "@/lib/utils";

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
}

export function GradientText({ children, className }: GradientTextProps) {
  return (
    <span
      className={cn(
        "animate-gradient bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent",
        className,
      )}
    >
      {children}
    </span>
  );
}
