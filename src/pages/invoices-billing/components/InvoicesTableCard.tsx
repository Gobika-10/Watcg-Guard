import { InvoiceFilters } from "./InvoiceFilters";
import { AppBadge } from "../../../components/ui/AppBadge";
import { AppCard } from "../../../components/ui/AppCard";
import { AppSectionHeader } from "../../../components/ui/AppSectionHeader";

interface InvoiceItem {
  id: string;
  customer: string;
  date: string;
  description: string;
  amount: string;
  status: "Paid" | "Outstanding";
}

interface InvoicesTableCardProps {
  invoices: InvoiceItem[];
  filterOptions: {
    customers: string[];
    periods: string[];
    statuses: string[];
  };
  filters: {
    customer: string;
    period: string;
    status: string;
  };
  onCustomerChange: (value: string) => void;
  onPeriodChange: (value: string) => void;
  onStatusChange: (value: string) => void;
}

export const InvoicesTableCard = ({
  invoices,
  filterOptions,
  filters,
  onCustomerChange,
  onPeriodChange,
  onStatusChange,
}: InvoicesTableCardProps) => {
  return (
    <AppCard className="rounded-2xl">
      <AppSectionHeader
        className="mb-0"
        title="Invoices"
        action={
          <AppBadge tone="neutral" size="md" withRing className="shadow-sm">
            {invoices.length} Records
          </AppBadge>
        }
      />
      <p className="mt-0.5 text-xs text-slate-500">Track and manage invoice activity</p>

      <InvoiceFilters
        customers={filterOptions.customers}
        periods={filterOptions.periods}
        statuses={filterOptions.statuses}
        selectedCustomer={filters.customer}
        selectedPeriod={filters.period}
        selectedStatus={filters.status}
        onCustomerChange={onCustomerChange}
        onPeriodChange={onPeriodChange}
        onStatusChange={onStatusChange}
      />

      <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-inner">
        <table className="w-full min-w-[760px]">
          <thead className="bg-slate-50/80">
            <tr className="border-b border-slate-200 text-left">
              {["Customer", "Invoice #", "Date", "Description", "Amount", "Status", "Actions"].map(
                (head) => (
                  <th
                    key={head}
                    className="px-4 py-3 text-[11px] font-semibold uppercase tracking-wide text-slate-500 first:pl-5 last:pr-5"
                  >
                    {head}
                  </th>
                )
              )}
            </tr>
          </thead>
          <tbody>
            {invoices.map((invoice) => (
              <tr
                key={invoice.id}
                className="border-b border-slate-100 transition-colors hover:bg-sky-50/40"
              >
                <td className="px-4 py-3.5 text-sm text-slate-700 first:pl-5">{invoice.customer}</td>
                <td className="px-4 py-3.5 text-sm font-semibold text-slate-800">{invoice.id}</td>
                <td className="px-4 py-3.5 text-sm text-slate-700">{invoice.date}</td>
                <td className="px-4 py-3.5 text-sm leading-6 text-slate-700">{invoice.description}</td>
                <td className="px-4 py-3.5 text-sm font-bold text-slate-900">{invoice.amount}</td>
                <td className="px-4 py-3.5">
                  <AppBadge tone={invoice.status === "Paid" ? "green" : "amber"} size="md">
                    {invoice.status}
                  </AppBadge>
                </td>
                <td className="px-4 py-3.5 text-sm last:pr-5">
                  <button
                    type="button"
                    className="font-semibold text-sky-700 hover:text-sky-800 hover:underline"
                  >
                    View
                  </button>
                  <span className="px-1.5 text-slate-400">&bull;</span>
                  <button
                    type="button"
                    className="font-semibold text-sky-700 hover:text-sky-800 hover:underline"
                  >
                    PDF
                  </button>
                  {invoice.status === "Outstanding" ? (
                    <>
                      <span className="px-1.5 text-slate-400">&bull;</span>
                      <button
                        type="button"
                        className="font-semibold text-rose-600 hover:text-rose-700 hover:underline"
                      >
                        Pay Now
                      </button>
                    </>
                  ) : null}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AppCard>
  );
};
