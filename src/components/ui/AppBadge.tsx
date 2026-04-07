import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "../../lib/utils";

type BadgeTone = "neutral" | "blue" | "green" | "amber" | "rose" | "violet";

interface AppBadgeProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  tone?: BadgeTone;
  size?: "sm" | "md";
  withRing?: boolean;
}

const toneClasses: Record<BadgeTone, string> = {
  neutral: "bg-slate-100 text-slate-700",
  blue: "bg-blue-100 text-blue-700",
  green: "bg-emerald-100 text-emerald-700",
  amber: "bg-amber-100 text-amber-700",
  rose: "bg-rose-100 text-rose-700",
  violet: "bg-violet-100 text-violet-700",
};

export const AppBadge = ({
  children,
  className,
  tone = "neutral",
  size = "sm",
  withRing = false,
  ...props
}: AppBadgeProps) => {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full font-semibold",
        toneClasses[tone],
        size === "sm" ? "px-2 py-0.5 text-[10px]" : "px-2.5 py-1 text-xs",
        withRing && "ring-1 ring-current/20",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};

