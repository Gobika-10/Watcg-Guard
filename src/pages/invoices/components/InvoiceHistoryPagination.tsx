import { ChevronsLeft, ChevronsRight, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";

interface InvoiceHistoryPaginationProps {
  currentPage: number;
  pageSize: number;
  totalRecords: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  onPageSizeChange: (pageSize: number) => void;
}

const pageSizeOptions = [5, 10, 25, 50];

export const InvoiceHistoryPagination = ({
  currentPage,
  pageSize,
  totalRecords,
  totalPages,
  onPageChange,
  onPageSizeChange,
}: InvoiceHistoryPaginationProps) => {
  const isFirstPage = currentPage <= 1;
  const isLastPage = currentPage >= totalPages;

  return (
    <div className="flex flex-col gap-4 border-t border-slate-100 px-6 pb-6 pt-4 md:flex-row md:items-center md:justify-between">
      <div className="text-[11px] text-slate-500">
        <span className="font-medium text-slate-700">{totalRecords}</span> total records
        <span className="mx-2 text-slate-300">|</span>
        <span className="font-medium text-slate-700">{totalPages}</span> pages
      </div>

      <div className="flex flex-wrap items-center justify-end gap-3 text-[11px] text-slate-500">
        <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50/80 px-2.5 py-2 shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
          <span className="text-[11px] font-medium text-slate-500">Rows</span>
          <div className="relative">
            <select
              value={pageSize}
              onChange={(event) => onPageSizeChange(Number(event.target.value))}
              className="h-9 appearance-none rounded-xl border border-slate-200 bg-white pl-3 pr-9 text-[11px] font-semibold text-slate-700 outline-none transition hover:border-slate-300 hover:bg-slate-50 focus:border-sky-300 focus:ring-2 focus:ring-sky-100"
              aria-label="Rows per page"
            >
              {pageSizeOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-slate-500" />
          </div>
          <span className="text-[11px] text-slate-500">Per page</span>
        </div>

        <div className="flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-2 py-2 shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
          <div
            className="inline-flex h-8 min-w-8 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 px-2 text-[11px] font-semibold text-slate-700"
            aria-label="Current page"
          >
            {currentPage}
          </div>

          <button
            type="button"
            onClick={() => onPageChange(1)}
            disabled={isFirstPage}
            className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-sky-700 transition hover:bg-sky-50 disabled:pointer-events-none disabled:text-slate-300"
            aria-label="First page"
          >
            <ChevronsLeft className="h-3.5 w-3.5" />
          </button>
          <button
            type="button"
            onClick={() => onPageChange(currentPage - 1)}
            disabled={isFirstPage}
            className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-sky-700 transition hover:bg-sky-50 disabled:pointer-events-none disabled:text-slate-300"
            aria-label="Previous page"
          >
            <ChevronLeft className="h-3.5 w-3.5" />
          </button>
          <button
            type="button"
            onClick={() => onPageChange(currentPage - 1)}
            disabled={isFirstPage}
            className="rounded-lg px-2.5 py-1.5 text-[11px] font-medium text-slate-600 transition hover:bg-slate-50 hover:text-slate-900 disabled:pointer-events-none disabled:text-slate-300"
          >
            Back
          </button>
          <button
            type="button"
            onClick={() => onPageChange(currentPage + 1)}
            disabled={isLastPage}
            className="rounded-lg bg-sky-50 px-2.5 py-1.5 text-[11px] font-semibold text-sky-700 transition hover:bg-sky-100 disabled:pointer-events-none disabled:bg-slate-50 disabled:text-slate-300"
          >
            Next
          </button>
          <button
            type="button"
            onClick={() => onPageChange(currentPage + 1)}
            disabled={isLastPage}
            className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-sky-700 transition hover:bg-sky-50 disabled:pointer-events-none disabled:text-slate-300"
            aria-label="Next page"
          >
            <ChevronRight className="h-3.5 w-3.5" />
          </button>
          <button
            type="button"
            onClick={() => onPageChange(totalPages)}
            disabled={isLastPage}
            className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-sky-700 transition hover:bg-sky-50 disabled:pointer-events-none disabled:text-slate-300"
            aria-label="Last page"
          >
            <ChevronsRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
