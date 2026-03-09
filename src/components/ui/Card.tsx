import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
}

export function Card({ children, className, hover = false, glow = false }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl bg-surface-card border border-surface-border p-6",
        hover &&
          "transition-all duration-300 hover:border-brand-500/30 hover:-translate-y-1 hover:shadow-brand",
        glow && "glow-primary",
        className
      )}
    >
      {children}
    </div>
  );
}
