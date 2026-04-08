import type { ComponentType } from "react";
import {
  CircleDot,
  Flame,
  Network,
  Radar,
  Shield,
  ShieldEllipsis,
  UserRoundCheck,
} from "lucide-react";
import type { DashboardProductIconKey } from "../../../data/dashboard/dashboardSlice";
import { DashboardCard } from "./common/DashboardCard";
import { DashboardSectionHeader } from "./common/DashboardSectionHeader";

const productIconMap: Record<DashboardProductIconKey, ComponentType<{ className?: string }>> = {
  networkSecurity: Flame,
  endpointSecurity: Shield,
  authPoint: UserRoundCheck,
  fireCloud: Flame,
  threatSync: Radar,
  mdr: CircleDot,
};

const iconToneMap: Record<DashboardProductIconKey, string> = {
  networkSecurity: "from-sky-50 to-cyan-50 text-sky-700 ring-sky-100",
  endpointSecurity: "from-indigo-50 to-blue-50 text-indigo-700 ring-indigo-100",
  authPoint: "from-emerald-50 to-teal-50 text-emerald-700 ring-emerald-100",
  fireCloud: "from-slate-50 to-slate-100 text-slate-600 ring-slate-200",
  threatSync: "from-violet-50 to-fuchsia-50 text-violet-700 ring-violet-100",
  mdr: "from-amber-50 to-orange-50 text-amber-700 ring-amber-100",
};

interface DashboardProductsPanelProps {
  items: Array<{
    name: string;
    accountsLabel: string;
    status: "Owned" | "Not Owned";
    iconKey: DashboardProductIconKey;
  }>;
}

export const DashboardProductsPanel = ({ items }: DashboardProductsPanelProps) => {
  return (
    <DashboardCard className="h-full rounded-[24px] border-slate-200/90 bg-gradient-to-br from-white via-white to-slate-50/40 p-4 shadow-[0_10px_24px_rgba(15,23,42,0.05)]">
      <DashboardSectionHeader
        title="My Products"
        action={
          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-slate-50 text-slate-500 ring-1 ring-slate-100">
            <Network className="h-4 w-4" />
          </div>
        }
        className="mb-4"
      />

      <div className="space-y-2.5">
        {items.map((item) => {
          const Icon = productIconMap[item.iconKey] ?? ShieldEllipsis;

          return (
            <div
              key={item.name}
              className="flex items-center gap-3 rounded-2xl bg-white/90 px-2.5 py-2 ring-1 ring-slate-100 transition hover:bg-white hover:shadow-sm"
            >
              <div
                className={[
                  "flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ring-1",
                  iconToneMap[item.iconKey],
                ].join(" ")}
              >
                <Icon className="h-4 w-4" />
              </div>

              <div className="min-w-0 flex-1">
                <p className="truncate text-[15px] font-medium text-slate-800">{item.name}</p>
                <p className="mt-0.5 text-xs font-medium text-slate-500">{item.accountsLabel}</p>
              </div>

              <span
                className={[
                  "rounded-full px-2.5 py-1 text-[11px] font-semibold tracking-tight",
                  item.status === "Owned"
                    ? "bg-emerald-100 text-emerald-700 ring-1 ring-emerald-100"
                    : "bg-slate-100 text-slate-600 ring-1 ring-slate-200",
                ].join(" ")}
              >
                {item.status}
              </span>
            </div>
          );
        })}
      </div>
    </DashboardCard>
  );
};
