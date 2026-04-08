import { ChevronLeft } from "lucide-react";

export const InvoiceHistoryHeader = () => {
  return (
    <div className="flex items-center gap-3 border-b border-slate-200 px-6 py-4">
      <button
        type="button"
        className="inline-flex items-center gap-1 rounded-md px-2.5 py-1.5 text-xs font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
      >
        <ChevronLeft className="h-3.5 w-3.5" />
        Back
      </button>

      <div className="h-5 w-px bg-slate-200" />

      <h1 className="text-sm font-medium text-slate-700">Invoice History</h1>
    </div>
  );
};
