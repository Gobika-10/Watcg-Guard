import type { ReactNode } from "react";

interface DashboardSectionHeaderProps {
  title: string;
  action?: ReactNode;
  className?: string;
}

export const DashboardSectionHeader = ({
  title,
  action,
  className = "mb-4",
}: DashboardSectionHeaderProps) => {
  return (
    <div className={`flex items-center justify-between ${className}`}>
      <h3 className="text-base font-semibold text-slate-900">{title}</h3>
      {action ?? null}
    </div>
  );
};

