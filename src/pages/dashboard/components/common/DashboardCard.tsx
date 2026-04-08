import type { ReactNode } from "react";
import { cn } from "../../../../lib/utils";

interface DashboardCardProps {
  children: ReactNode;
  className?: string;
}

export const DashboardCard = ({ children, className }: DashboardCardProps) => {
  return <section className={cn("rounded-xl border border-slate-200 bg-white p-4.5 shadow-sm", className)}>{children}</section>;
};

