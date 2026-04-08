import type { ComponentType } from "react";
import { ArrowRight, MessageCircle, Zap } from "lucide-react";
import type { DashboardActionIconKey } from "../../../data/dashboard/dashboardSlice";
import { DashboardCard } from "./common/DashboardCard";

const iconMap: Record<DashboardActionIconKey, ComponentType<{ className?: string }>> = {
  spark: Zap,
  feedback: MessageCircle,
};

const toneStyles: Record<
  "mint" | "sky",
  {
    card: string;
    icon: string;
    link: string;
  }
> = {
  mint: {
    card: "from-rose-50 via-white to-cyan-50",
    icon: "from-amber-50 to-rose-50 text-slate-700 ring-rose-100",
    link: "text-cyan-700 hover:text-cyan-800",
  },
  sky: {
    card: "from-white via-sky-50 to-cyan-50",
    icon: "from-sky-50 to-cyan-50 text-slate-700 ring-sky-100",
    link: "text-cyan-700 hover:text-cyan-800",
  },
};

interface DashboardActionCardProps {
  title: string;
  description: string;
  linkLabel: string;
  iconKey: DashboardActionIconKey;
  tone: "mint" | "sky";
}

export const DashboardActionCard = ({
  title,
  description,
  linkLabel,
  iconKey,
  tone,
}: DashboardActionCardProps) => {
  const Icon = iconMap[iconKey];
  const style = toneStyles[tone];

  return (
    <DashboardCard
      className={[
        "group relative overflow-hidden rounded-[24px] border-slate-200/90 bg-gradient-to-br p-4 shadow-[0_10px_24px_rgba(15,23,42,0.05)] transition hover:-translate-y-0.5 hover:shadow-[0_14px_28px_rgba(15,23,42,0.08)]",
        style.card,
      ].join(" ")}
    >
      <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-white/40 blur-2xl" />

      <div
        className={[
          "relative flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br shadow-sm ring-1",
          style.icon,
        ].join(" ")}
      >
        <Icon className="h-4.5 w-4.5" />
      </div>

      <div className="relative mt-4">
        <h3 className="text-[1.15rem] font-semibold leading-tight text-slate-900">{title}</h3>
        <p className="mt-2 max-w-[24ch] text-sm leading-6 text-slate-600">{description}</p>
      </div>

      <button
        type="button"
        className={[
          "relative mt-4 inline-flex items-center gap-1.5 text-sm font-semibold transition",
          style.link,
        ].join(" ")}
      >
        {linkLabel}
        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
      </button>
    </DashboardCard>
  );
};
