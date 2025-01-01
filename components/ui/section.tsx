import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export function Section({ children, className, ...props }: SectionProps) {
  return (
    <section
      className={cn(
        "flex min-h-[80vh] w-full items-center justify-center px-4 py-24 sm:px-6 lg:px-8",
        className,
      )}
      {...props}
    >
      {children}
    </section>
  );
}
