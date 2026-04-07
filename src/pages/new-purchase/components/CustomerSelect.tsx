import { AppSelect } from "../../../components/ui/AppSelect";

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
      <div className="mt-2">
        <AppSelect
          id="customer-select"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className="h-11 text-slate-800"
          options={customers.map((customer) => ({ value: customer.id, label: customer.label }))}
        />
      </div>
    </div>
  );
};
