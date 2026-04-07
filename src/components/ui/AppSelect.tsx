import { ChevronDown } from "lucide-react";
import type { SelectHTMLAttributes } from "react";
import { cn } from "../../lib/utils";

interface SelectOption {
  label: string;
  value: string;
}

interface AppSelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "children"> {
  options: SelectOption[];
  wrapperClassName?: string;
}

export const AppSelect = ({ options, className, wrapperClassName, ...props }: AppSelectProps) => {
  return (
    <div className={cn("relative", wrapperClassName)}>
      <select
        className={cn(
          "h-10 w-full appearance-none rounded-xl border border-slate-300 bg-white px-4 pr-10 text-sm font-medium text-slate-700 shadow-sm outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100",
          className
        )}
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
    </div>
  );
};

