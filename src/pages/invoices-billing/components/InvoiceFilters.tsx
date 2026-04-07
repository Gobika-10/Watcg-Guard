import { AppSelect } from "../../../components/ui/AppSelect";

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
      <AppSelect
        wrapperClassName="min-w-[132px]"
        value={selectedCustomer}
        onChange={(event) => onCustomerChange(event.target.value)}
        options={customers.map((option) => ({ value: option, label: option }))}
      />

      <AppSelect
        wrapperClassName="min-w-[90px]"
        value={selectedPeriod}
        onChange={(event) => onPeriodChange(event.target.value)}
        options={periods.map((option) => ({ value: option, label: option }))}
      />

      <AppSelect
        wrapperClassName="min-w-[90px]"
        value={selectedStatus}
        onChange={(event) => onStatusChange(event.target.value)}
        options={statuses.map((option) => ({ value: option, label: option }))}
      />
    </div>
  );
};
