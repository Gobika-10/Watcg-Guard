import type { ComponentType } from "react";
import {
  Flame,
  MonitorSmartphone,
  RadioTower,
  Router,
  ShieldCheck,
  UsersRound,
} from "lucide-react";
import type { DashboardOverviewIconKey } from "../../../data/dashboard/dashboardSlice";
import { DashboardCard } from "./common/DashboardCard";

const iconMap: Record<DashboardOverviewIconKey, ComponentType<{ className?: string }>> = {
  cloudFirebox: Flame,
  firebox: Router,
  accessPoint: RadioTower,
  endpoint: MonitorSmartphone,
  user: UsersRound,
};

const accentMap: Record<DashboardOverviewIconKey, string> = {
  cloudFirebox: "from-sky-500/10 via-cyan-100/70 to-transparent",
  firebox: "from-cyan-500/10 via-sky-100/70 to-transparent",
  accessPoint: "from-blue-500/10 via-cyan-100/70 to-transparent",
  endpoint: "from-teal-500/10 via-cyan-100/70 to-transparent",
  user: "from-sky-500/10 via-blue-100/70 to-transparent",
};

interface DashboardOverviewStatProps {
  title: string;
  value: string;
  subtitle: string;
  iconKey: DashboardOverviewIconKey;
}

export const DashboardOverviewStat = ({
  title,
  value,
  subtitle,
  iconKey,
}: DashboardOverviewStatProps) => {
  const Icon = iconMap[iconKey] ?? ShieldCheck;

  return (
    <DashboardCard className="group relative min-h-[100px] overflow-hidden rounded-[24px] border-slate-200/90 bg-gradient-to-br from-white via-white to-slate-50/60 p-3.5 shadow-[0_8px_18px_rgba(15,23,42,0.05)] transition hover:-translate-y-0.5 hover:shadow-[0_14px_28px_rgba(15,23,42,0.08)]">
      <div className={`pointer-events-none absolute inset-x-0 top-0 h-14 bg-gradient-to-r ${accentMap[iconKey]}`} />

      <div className="relative flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="text-[2.35rem] font-semibold leading-none tracking-[-0.04em] text-slate-900">
            {value}
          </p>
          <h3 className="mt-3 max-w-[15ch] text-[1rem] font-medium leading-[1.18] text-slate-800 md:text-[1.05rem]">
            {title}
          </h3>
          <p className="mt-2 inline-flex rounded-full bg-slate-50 px-2 py-0.5 text-[11px] font-medium text-slate-500 ring-1 ring-slate-100">
            {subtitle}
          </p>
        </div>

        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-50 to-sky-50 text-cyan-800 ring-1 ring-cyan-100 shadow-sm">
          <Icon className="h-4 w-4" />
        </div>
      </div>
    </DashboardCard>
  );
};
