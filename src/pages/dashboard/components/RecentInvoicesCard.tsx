import { DashboardCard } from "./common/DashboardCard";
import { DashboardSectionHeader } from "./common/DashboardSectionHeader";
import { AppBadge } from "../../../components/ui/AppBadge";

interface Invoice {
  id: string;
  description: string;
  amount: string;
  date: string;
  status: "Paid" | "Outstanding";
}

interface RecentInvoicesCardProps {
  invoices: Invoice[];
}

export const RecentInvoicesCard = ({ invoices }: RecentInvoicesCardProps) => {
  return (
    <DashboardCard>
      <DashboardSectionHeader title="Recent Invoices" />

      <div className="space-y-1.5">
        {invoices.map((invoice) => (
          <article
            key={invoice.id}
            className="flex items-center gap-3 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5 transition-colors hover:bg-slate-100"
          >
            <div className="min-w-0 flex-1">
              <p className="text-xs font-semibold text-slate-900">{invoice.id}</p>
              <p className="truncate text-[11px] text-slate-500">{invoice.description}</p>
            </div>

            <div className="shrink-0 text-right">
              <p className="text-xs font-bold text-slate-900">{invoice.amount}</p>
              <p className="text-[11px] text-slate-500">{invoice.date}</p>
            </div>

            <AppBadge
              className="shrink-0"
              tone={invoice.status === "Paid" ? "green" : "amber"}
              withRing
            >
              {invoice.status}
            </AppBadge>

            <button
              type="button"
              className="shrink-0 text-[11px] font-semibold text-sky-700 transition-colors hover:text-sky-800"
            >
              Download
            </button>
          </article>
        ))}
      </div>
    </DashboardCard>
  );
};
