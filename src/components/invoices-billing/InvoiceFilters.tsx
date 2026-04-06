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
  "h-10 rounded-lg border border-slate-300 bg-white px-3.5 text-sm font-medium text-slate-700 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100";

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
      <select
        className={`${baseSelectClass} min-w-[132px]`}
        value={selectedCustomer}
        onChange={(event) => onCustomerChange(event.target.value)}
      >
        {customers.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      <select
        className={`${baseSelectClass} min-w-[90px]`}
        value={selectedPeriod}
        onChange={(event) => onPeriodChange(event.target.value)}
      >
        {periods.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      <select
        className={`${baseSelectClass} min-w-[90px]`}
        value={selectedStatus}
        onChange={(event) => onStatusChange(event.target.value)}
      >
        {statuses.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};
