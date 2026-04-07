import { CheckCircle2, Clock3 } from "lucide-react";
import { DashboardCard } from "./common/DashboardCard";
import { DashboardSectionHeader } from "./common/DashboardSectionHeader";
import { AppBadge } from "../../../components/ui/AppBadge";

interface Subscription {
  customer: string;
  product: string;
  category: string;
  licenses: number;
  utilized: number;
  status: "Active" | "Expiring Soon";
  renewal: string;
}

interface SubscriptionTableProps {
  data: Subscription[];
  onViewAll?: () => void;
}

export const SubscriptionTable = ({ data, onViewAll }: SubscriptionTableProps) => {
  return (
    <DashboardCard>
      <DashboardSectionHeader
        title="Active Subscriptions"
        action={
          <button
            type="button"
            onClick={onViewAll}
            className="rounded-md bg-sky-100 px-2.5 py-1 text-[11px] font-semibold text-sky-700 ring-1 ring-sky-200 transition-colors hover:bg-sky-200"
          >
            View All
          </button>
        }
      />

      <div className="overflow-x-auto">
        <table className="w-full min-w-[700px] text-left">
          <thead>
            <tr className="border-b border-slate-200">
              {["Customer", "Product", "Category", "Licenses", "Utilized", "Status", "Renewal", "Actions"].map(
                (col) => (
                  <th
                    key={col}
                    className="pb-2.5 pr-4 text-[10px] font-semibold uppercase tracking-widest text-slate-500"
                  >
                    {col}
                  </th>
                )
              )}
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr
                key={`${row.customer}-${row.product}`}
                className="border-b border-slate-100 transition-colors hover:bg-slate-50"
              >
                <td className="py-3 pr-4 text-xs text-slate-600">{row.customer}</td>
                <td className="py-3 pr-4 text-xs font-semibold text-slate-900">{row.product}</td>
                <td className="py-3 pr-4">
                  <AppBadge
                    size="md"
                    withRing
                    className="whitespace-nowrap"
                    tone={
                      row.category === "Identity" || row.category === "Cloud"
                        ? "green"
                        : row.category === "Network Security" || row.category === "Endpoint"
                          ? "blue"
                          : "neutral"
                    }
                  >
                    {row.category}
                  </AppBadge>
                </td>
                <td className="py-3 pr-4 text-xs text-slate-600">{row.licenses}</td>
                <td className="py-3 pr-4 text-xs text-slate-600">{row.utilized}</td>
                <td className="py-3 pr-4">
                  <span className="inline-flex items-center gap-1.5 text-xs text-slate-600">
                    {row.status === "Active" ? (
                      <CheckCircle2 className="h-3 w-3 text-emerald-600" />
                    ) : (
                      <Clock3 className="h-3 w-3 text-amber-600" />
                    )}
                    {row.status}
                  </span>
                </td>
                <td className="py-3 pr-4 text-xs text-slate-600">{row.renewal}</td>
                <td className="py-3">
                  <div className="flex gap-3 text-[11px] font-semibold text-sky-700">
                    <button type="button" className="transition-colors hover:text-sky-800">
                      Renew
                    </button>
                    <button type="button" className="transition-colors hover:text-sky-800">
                      Add Seats
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DashboardCard>
  );
};
