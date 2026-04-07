import { BadgeDollarSign, Boxes, CalendarClock, KeyRound, UsersRound } from "lucide-react";
import { AppBadge } from "../../../components/ui/AppBadge";
import { AppCard } from "../../../components/ui/AppCard";

type StatTone = "emerald" | "blue" | "rose" | "orange";

const toneStyles: Record<
  StatTone,
  { text: string; softText: string; bg: string; ring: string; glow: string }
> = {
  emerald: {
    text: "text-emerald-600",
    softText: "text-emerald-700",
    bg: "bg-emerald-100",
    ring: "ring-emerald-200",
    glow: "bg-emerald-100/80",
  },
  blue: {
    text: "text-sky-600",
    softText: "text-sky-700",
    bg: "bg-sky-100",
    ring: "ring-sky-200",
    glow: "bg-sky-100/80",
  },
  rose: {
    text: "text-rose-600",
    softText: "text-rose-700",
    bg: "bg-rose-100",
    ring: "ring-rose-200",
    glow: "bg-rose-100/80",
  },
  orange: {
    text: "text-orange-600",
    softText: "text-orange-700",
    bg: "bg-orange-100",
    ring: "ring-orange-200",
    glow: "bg-orange-100/80",
  },
};

const icons = [UsersRound, Boxes, KeyRound, BadgeDollarSign, CalendarClock];

interface StatCardProps {
  index: number;
  title: string;
  value: string;
  subtitle: string;
  note?: string;
  tone: StatTone;
}

export const StatCard = ({ index, title, value, subtitle, note, tone }: StatCardProps) => {
  const Icon = icons[index] ?? UsersRound;
  const s = toneStyles[tone];

  return (
    <AppCard className="group relative overflow-hidden p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md">
      <div className="pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full blur-2xl transition-opacity group-hover:opacity-90 opacity-70">
        <div className={`h-full w-full rounded-full ${s.glow}`} />
      </div>

      <div className="relative flex items-start justify-between">
        <div className={`inline-flex items-center justify-center rounded-xl p-2.5 ring-1 ${s.bg} ${s.ring}`}>
          <Icon className={`h-[18px] w-[18px] ${s.text}`} />
        </div>
        <AppBadge className={s.softText} tone={tone === "blue" ? "blue" : tone === "rose" ? "rose" : tone === "orange" ? "amber" : "green"}>
          Live
        </AppBadge>
      </div>

      <p className="mt-3 text-3xl font-bold leading-none tracking-tight text-slate-900">{value}</p>
      <p className="mt-1.5 text-sm font-semibold text-slate-800">{title}</p>
      <p className="mt-1 text-xs text-slate-500">{subtitle}</p>
      {note && <p className="mt-0.5 text-xs font-medium text-slate-600">{note}</p>}
    </AppCard>
  );
};
