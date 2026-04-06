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
      <select
        id="customer-select"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="mt-2 h-11 w-full rounded-lg border border-slate-300 bg-white px-3 text-sm text-slate-800 shadow-sm outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
      >
        {customers.map((customer) => (
          <option key={customer.id} value={customer.id}>
            {customer.label}
          </option>
        ))}
      </select>
    </div>
  );
};
