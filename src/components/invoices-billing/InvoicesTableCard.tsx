import { InvoiceFilters } from "./InvoiceFilters";

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
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h3 className="text-2xl font-semibold tracking-tight text-slate-900">Invoices</h3>
          <p className="mt-0.5 text-xs text-slate-500">Track and manage invoice activity</p>
        </div>
        <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-600 shadow-sm">
          {invoices.length} Records
        </span>
      </div>

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
                  <span
                    className={[
                      "inline-flex rounded-full px-2.5 py-1 text-xs font-semibold",
                      invoice.status === "Paid"
                        ? "bg-emerald-100 text-emerald-700"
                        : "bg-amber-100 text-amber-700",
                    ].join(" ")}
                  >
                    {invoice.status}
                  </span>
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
    </section>
  );
};
