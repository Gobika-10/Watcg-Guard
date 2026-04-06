import { ChevronDown } from "lucide-react";

interface CustomerItem {
  id: string;
  label: string;
}

interface CustomerSelectProps {
  customers: CustomerItem[];
  value: string;
  onChange: (value: string) => void;
}

export const CustomerSelect = ({ customers, value, onChange }: CustomerSelectProps) => {
  return (
    <div>
      <label htmlFor="customer-select" className="text-sm font-semibold text-slate-800">
        Select Customer
      </label>
      <div className="relative mt-2">
        <select
          id="customer-select"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className="h-11 w-full appearance-none rounded-xl border border-slate-300 bg-white px-4 pr-10 text-sm font-medium text-slate-800 shadow-sm outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
        >
          {customers.map((customer) => (
            <option key={customer.id} value={customer.id}>
              {customer.label}
            </option>
          ))}
        </select>
        <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
      </div>
    </div>
  );
};
