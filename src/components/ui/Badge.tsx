import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "primary" | "success" | "warning" | "danger";
  className?: string;
}

export function Badge({
  children,
  variant = "default",
  className,
}: BadgeProps) {
  const variants = {
    default: "bg-surface-muted text-white/70 border border-surface-border",
    primary: "bg-brand-500/10 text-brand-400 border border-brand-500/30",
    success: "bg-accent-mint/10 text-accent-mint border border-accent-mint/30",
    warning: "bg-accent-peach/10 text-accent-peach border border-accent-peach/30",
    danger: "bg-accent-coral/10 text-accent-coral border border-accent-coral/30",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium font-display",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
