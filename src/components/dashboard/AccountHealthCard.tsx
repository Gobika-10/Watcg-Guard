import { CheckCircle2, CircleAlert } from "lucide-react";
import { DashboardCard } from "./common/DashboardCard";
import { DashboardSectionHeader } from "./common/DashboardSectionHeader";

interface AccountHealthCardProps {
  scoreLabel: string;
  summary: string[];
}

export const AccountHealthCard = ({ scoreLabel, summary }: AccountHealthCardProps) => {
  return (
    <DashboardCard>
      <DashboardSectionHeader title="Account Health" className="mb-0" />

      <div className="mt-4 flex items-center gap-4">
        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-4 border-emerald-500 bg-emerald-100 text-lg font-bold text-emerald-700">
          {scoreLabel}
        </div>
        <ul className="flex-1 space-y-1.5">
          {summary.map((line, idx) => (
            <li key={line} className="flex items-start gap-2 rounded-md bg-slate-50 px-2.5 py-1.5 text-[11px] text-slate-600">
              {idx === 1 ? (
                <CircleAlert className="mt-0.5 h-3 w-3 shrink-0 text-amber-600" />
              ) : (
                <CheckCircle2 className="mt-0.5 h-3 w-3 shrink-0 text-emerald-600" />
              )}
              <span>{line}</span>
            </li>
          ))}
        </ul>
      </div>
    </DashboardCard>
  );
};
