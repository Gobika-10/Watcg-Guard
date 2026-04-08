import { Building2 } from "lucide-react";
import { DashboardCard } from "./common/DashboardCard";
import { DashboardSectionHeader } from "./common/DashboardSectionHeader";

interface DashboardEndpointTableCardProps {
  title: string;
  rows: Array<{
    accountName: string;
    product: string;
    endpoints: number;
    statusSegments: Array<{
      value: number;
      color: string;
    }>;
  }>;
  totalRows: number;
}

const productToneMap: Record<string, string> = {
  Prime: "bg-sky-50 text-sky-700 ring-sky-100",
  Basic: "bg-slate-100 text-slate-700 ring-slate-200",
};

export const DashboardEndpointTableCard = ({
  title,
  rows,
  totalRows,
}: DashboardEndpointTableCardProps) => {
  return (
    <DashboardCard className="overflow-hidden rounded-[24px] border-slate-200/90 bg-gradient-to-br from-white via-white to-slate-50/40 p-0 shadow-[0_10px_24px_rgba(15,23,42,0.05)]">
      <div className="px-4 py-3.5">
        <DashboardSectionHeader title={title} className="mb-0" />
      </div>

      <div className="overflow-x-auto border-t border-slate-100">
        <table className="w-full min-w-[760px]">
          <thead className="bg-slate-50/90">
            <tr className="text-left text-[11px] uppercase tracking-[0.08em] text-slate-500">
              {["Account Name", "Product", "Endpoints", "Status"].map((label) => (
                <th key={label} className="px-4 py-2.5 font-medium">
                  {label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => {
              const primarySegment = row.statusSegments[0];
              const primaryPercent = row.statusSegments.reduce((sum, segment) => sum + segment.value, 0)
                ? primarySegment.value
                : 0;

              return (
                <tr
                  key={row.accountName}
                  className="border-t border-slate-100 bg-white/80 transition hover:bg-slate-50/80"
                >
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2.5 text-sm text-slate-800">
                      <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-slate-50 text-slate-500 ring-1 ring-slate-100">
                        <Building2 className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="font-medium text-slate-800">{row.accountName}</p>
                        <p className="text-[11px] text-slate-500">Endpoint workspace</p>
                      </div>
                    </div>
                  </td>

                  <td className="px-4 py-3">
                    <span
                      className={[
                        "inline-flex rounded-full px-2.5 py-1 text-[11px] font-semibold ring-1",
                        productToneMap[row.product] ?? "bg-slate-100 text-slate-700 ring-slate-200",
                      ].join(" ")}
                    >
                      {row.product}
                    </span>
                  </td>

                  <td className="px-4 py-3">
                    <div className="inline-flex min-w-[52px] items-center justify-center rounded-xl bg-slate-50 px-3 py-1.5 text-sm font-semibold text-slate-800 ring-1 ring-slate-100">
                      {row.endpoints}
                    </div>
                  </td>

                  <td className="px-4 py-3">
                    <div className="space-y-1.5">
                      <div className="rounded-full bg-slate-100/80 p-0.5">
                        <div className="flex h-3 overflow-hidden rounded-full bg-white/40">
                          {row.statusSegments.map((segment, index) => (
                            <div
                              key={`${row.accountName}-${index}`}
                              style={{
                                width: `${segment.value}%`,
                                backgroundColor: segment.color,
                              }}
                            />
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-[11px]">
                        <span className="font-medium text-slate-500">Protected mix</span>
                        <span className="font-semibold text-slate-700">{primaryPercent}% healthy</span>
                      </div>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between border-t border-slate-100 px-4 py-3 text-sm">
        <span className="text-slate-600">Showing 5 of {totalRows} rows.</span>
        <button type="button" className="font-medium text-cyan-700 transition hover:text-cyan-800">
          View All
        </button>
      </div>
    </DashboardCard>
  );
};
