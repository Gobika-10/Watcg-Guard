import { DashboardCard } from "./common/DashboardCard";
import { DashboardSectionHeader } from "./common/DashboardSectionHeader";

interface DashboardDeviceStatusCardProps {
  title: string;
  totalDevices: number;
  segments: Array<{
    label: string;
    value: number;
    color: string;
  }>;
}

const createConicGradient = (
  segments: DashboardDeviceStatusCardProps["segments"],
  total: number
) => {
  let current = 0;
  return segments
    .map((segment) => {
      const start = (current / total) * 360;
      current += segment.value;
      const end = (current / total) * 360;
      return `${segment.color} ${start}deg ${end}deg`;
    })
    .join(", ");
};

export const DashboardDeviceStatusCard = ({
  title,
  totalDevices,
  segments,
}: DashboardDeviceStatusCardProps) => {
  const total = segments.reduce((sum, segment) => sum + segment.value, 0);

  return (
    <DashboardCard className="rounded-[24px] border-slate-200/90 bg-gradient-to-br from-white via-white to-slate-50/60 p-4 shadow-[0_10px_24px_rgba(15,23,42,0.05)]">
      <DashboardSectionHeader
        title={title}
        action={
          <button className="text-xs font-medium text-cyan-700 transition hover:text-cyan-800">
            View All
          </button>
        }
      />

      <div className="grid gap-4 lg:grid-cols-[168px_1fr]">
        <div className="flex justify-center">
          <div
            className="relative flex h-34 w-34 items-center justify-center rounded-full p-1 shadow-inner ring-1 ring-slate-200/80"
            style={{
              background: `conic-gradient(${createConicGradient(segments, total)})`,
            }}
          >
            <div className="flex h-22 w-22 flex-col items-center justify-center rounded-full bg-white shadow-[inset_0_2px_8px_rgba(15,23,42,0.06)]">
              <span className="text-[2rem] font-semibold tracking-tight text-slate-900">
                {totalDevices}
              </span>
              <span className="text-[11px] font-medium text-slate-500">Devices</span>
            </div>
          </div>
        </div>

        <div className="grid content-center gap-2.5">
          {segments.map((segment) => (
            <div
              key={segment.label}
              className="flex items-center justify-between rounded-xl bg-white/80 px-3 py-2 ring-1 ring-slate-100"
            >
              <div className="flex items-center gap-2.5 text-sm text-slate-700">
                <span
                  className="h-2.5 w-2.5 rounded-full shadow-sm"
                  style={{ backgroundColor: segment.color }}
                />
                <span className="font-medium">{segment.label}</span>
              </div>
              <span className="text-sm font-semibold text-slate-900">{segment.value}</span>
            </div>
          ))}
        </div>
      </div>
    </DashboardCard>
  );
};
