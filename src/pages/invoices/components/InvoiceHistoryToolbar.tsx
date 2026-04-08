import { CalendarDays, ChevronDown, Funnel, Search } from "lucide-react";

interface InvoiceHistoryToolbarProps {
  searchValue: string;
  onSearchChange: (value: string) => void;
}

export const InvoiceHistoryToolbar = ({
  searchValue,
  onSearchChange,
}: InvoiceHistoryToolbarProps) => {
  return (
    <div className="flex flex-col gap-3 border-b border-slate-200 px-6 py-4 md:flex-row md:items-center md:justify-between">
      <button
        type="button"
        className="inline-flex items-center gap-2 self-start rounded-md border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-600 transition hover:border-slate-300 hover:bg-slate-50"
      >
        <CalendarDays className="h-3.5 w-3.5 text-sky-700" />
        <span>Today: 2025-02-07</span>
        <ChevronDown className="h-3.5 w-3.5 text-slate-400" />
      </button>

      <div className="flex items-center gap-2 self-stretch md:self-auto">
        <button
          type="button"
          className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-slate-200 bg-white text-slate-500 transition hover:border-slate-300 hover:bg-slate-50 hover:text-slate-700"
          aria-label="Filter invoices"
        >
          <Funnel className="h-4 w-4" />
        </button>

        <label className="relative block min-w-[220px] flex-1 md:w-[240px] md:flex-none">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <input
            value={searchValue}
            onChange={(event) => onSearchChange(event.target.value)}
            placeholder="Search"
            className="h-9 w-full rounded-md border border-slate-200 bg-white pl-9 pr-9 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-sky-300 focus:ring-2 focus:ring-sky-100"
          />
          <Search className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-sky-700" />
        </label>
      </div>
    </div>
  );
};
