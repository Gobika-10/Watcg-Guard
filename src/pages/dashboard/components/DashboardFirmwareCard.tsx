import { DashboardCard } from "./common/DashboardCard";
import { DashboardSectionHeader } from "./common/DashboardSectionHeader";

interface DashboardFirmwareCardProps {
  title: string;
  readyNow: number;
  items: Array<{
    label: string;
    value: number;
    total: number;
    color: string;
  }>;
}

export const DashboardFirmwareCard = ({
  title,
  readyNow,
  items,
}: DashboardFirmwareCardProps) => {
  return (
    <DashboardCard className="rounded-[24px] border-slate-200/90 bg-gradient-to-br from-white via-white to-slate-50/50 p-4 shadow-[0_10px_24px_rgba(15,23,42,0.05)]">
      <DashboardSectionHeader
        title={title}
        action={
          <button className="text-xs font-medium text-cyan-700 transition hover:text-cyan-800">
            View All
          </button>
        }
      />

      <div className="mb-4 rounded-2xl bg-slate-50/80 px-3.5 py-3 ring-1 ring-slate-100">
        <p className="text-[2rem] font-semibold tracking-tight text-slate-900">{readyNow}</p>
        <p className="mt-0.5 text-xs font-medium text-slate-500">Devices ready to upgrade now</p>
      </div>

      <div className="space-y-4">
        {items.map((item) => {
          const percent = Math.round((item.value / item.total) * 100);

          return (
            <div
              key={item.label}
              className="rounded-xl bg-white/80 px-3 py-2.5 ring-1 ring-slate-100"
            >
              <div className="mb-2 flex items-center justify-between text-sm text-slate-700">
                <div className="flex items-center gap-2.5">
                  <span
                    className="h-2.5 w-2.5 rounded-full shadow-sm"
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="font-medium">{item.label}</span>
                </div>
                <span className="text-xs font-semibold text-slate-900">
                  {item.value} of {item.total}
                </span>
              </div>

              <div className="h-2.5 rounded-full bg-slate-200/80">
                <div
                  className="h-2.5 rounded-full shadow-[0_2px_6px_rgba(15,23,42,0.08)]"
                  style={{ width: `${percent}%`, backgroundColor: item.color }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </DashboardCard>
  );
};
