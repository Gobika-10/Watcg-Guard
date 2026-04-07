import { cn } from "../../lib/utils";

interface AppProgressBarProps {
  value: number;
  className?: string;
  tone?: "good" | "warn" | "danger";
}

const toneMap: Record<NonNullable<AppProgressBarProps["tone"]>, string> = {
  good: "from-emerald-400 to-emerald-600",
  warn: "from-amber-400 to-orange-500",
  danger: "from-rose-500 to-red-500",
};

export const AppProgressBar = ({ value, className, tone }: AppProgressBarProps) => {
  const normalized = Math.max(0, Math.min(100, value));
  const autoTone = normalized >= 90 ? "danger" : normalized >= 80 ? "warn" : "good";
  const toneClass = toneMap[tone ?? autoTone];

  return (
    <div className={cn("h-2.5 w-28 rounded-full bg-slate-200/90", className)}>
      <div
        className={cn("h-2.5 rounded-full bg-gradient-to-r", toneClass)}
        style={{ width: `${normalized}%` }}
      />
    </div>
  );
};

