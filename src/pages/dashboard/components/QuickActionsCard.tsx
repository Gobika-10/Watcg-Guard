import type { ComponentType } from "react";
import { Link } from "react-router-dom";
import { DashboardCard } from "./common/DashboardCard";
import { DashboardSectionHeader } from "./common/DashboardSectionHeader";

interface ActionItem {
  label: string;
  path: string;
  Icon: ComponentType<{ className?: string }>;
}

interface QuickActionsCardProps {
  actions: ActionItem[];
}

export const QuickActionsCard = ({ actions }: QuickActionsCardProps) => {
  return (
    <DashboardCard>
      <DashboardSectionHeader title="Quick Actions" className="mb-3.5" />

      <div className="grid grid-cols-2 gap-3">
        {actions.map((action) => (
          <Link
            key={action.path}
            to={action.path}
            className="group flex min-h-[102px] flex-col items-center justify-center gap-2 rounded-lg border border-sky-200 bg-sky-50 px-2 py-3 text-center transition-all hover:border-sky-300 hover:bg-sky-100 active:scale-95"
          >
            <div className="flex h-7 w-7 items-center justify-center rounded-md bg-sky-100 ring-1 ring-sky-200 transition-colors group-hover:bg-sky-200">
              <action.Icon className="h-3.5 w-3.5 text-sky-700" />
            </div>
            <p className="text-[11px] font-semibold leading-tight text-sky-700">{action.label}</p>
          </Link>
        ))}
      </div>
    </DashboardCard>
  );
};
