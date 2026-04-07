import type { ReactNode } from "react";
import { cn } from "../../lib/utils";

interface AppSectionHeaderProps {
  title: string;
  action?: ReactNode;
  className?: string;
}

export const AppSectionHeader = ({ title, action, className }: AppSectionHeaderProps) => {
  return (
    <div className={cn("mb-4 flex items-center justify-between", className)}>
      <h3 className="text-base font-semibold text-slate-900">{title}</h3>
      {action ?? null}
    </div>
  );
};

