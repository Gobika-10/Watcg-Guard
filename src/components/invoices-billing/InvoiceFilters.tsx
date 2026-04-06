import { ChevronDown } from "lucide-react";

interface InvoiceFiltersProps {
  customers: string[];
  periods: string[];
  statuses: string[];
  selectedCustomer: string;
  selectedPeriod: string;
  selectedStatus: string;
  onCustomerChange: (value: string) => void;
  onPeriodChange: (value: string) => void;
  onStatusChange: (value: string) => void;
}

const baseSelectClass =
  "h-10 w-full appearance-none rounded-xl border border-slate-300 bg-white px-4 pr-10 text-sm font-medium text-slate-700 shadow-sm outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100";

export const InvoiceFilters = ({
  customers,
  periods,
  statuses,
  selectedCustomer,
  selectedPeriod,
  selectedStatus,
  onCustomerChange,
  onPeriodChange,
  onStatusChange,
}: InvoiceFiltersProps) => {
  return (
    <div className="mb-3.5 grid grid-cols-1 gap-2.5 sm:grid-cols-3">
      <div className="relative min-w-[132px]">
        <select
          className={baseSelectClass}
          value={selectedCustomer}
          onChange={(event) => onCustomerChange(event.target.value)}
        >
          {customers.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
      </div>

      <div className="relative min-w-[90px]">
        <select
          className={baseSelectClass}
          value={selectedPeriod}
          onChange={(event) => onPeriodChange(event.target.value)}
        >
          {periods.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
      </div>

      <div className="relative min-w-[90px]">
        <select
          className={baseSelectClass}
          value={selectedStatus}
          onChange={(event) => onStatusChange(event.target.value)}
        >
          {statuses.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
      </div>
    </div>
  );
};
