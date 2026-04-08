import { useInvoiceHistory } from "../../../hooks";
import { InvoiceHistoryHeader } from "./InvoiceHistoryHeader";
import { InvoiceHistoryPagination } from "./InvoiceHistoryPagination";
import { InvoiceHistoryTable } from "./InvoiceHistoryTable";
import { InvoiceHistoryToolbar } from "./InvoiceHistoryToolbar";

export const InvoiceHistoryView = () => {
  const {
    error,
    searchValue,
    currentPage,
    pageSize,
    totalRecords,
    totalPages,
    paginatedRows,
    handlePageChange,
    handlePageSizeChange,
    handleSearchChange,
  } = useInvoiceHistory();

  return (
    <section className="overflow-hidden border border-slate-200 bg-white shadow-[0_14px_40px_rgba(15,23,42,0.06)]">
      <InvoiceHistoryHeader />
      <InvoiceHistoryToolbar searchValue={searchValue} onSearchChange={handleSearchChange} />
      <InvoiceHistoryTable rows={paginatedRows} />
      {error ? <div className="px-6 pb-2 text-xs text-rose-600">{error}</div> : null}
      <InvoiceHistoryPagination
        currentPage={currentPage}
        pageSize={pageSize}
        totalRecords={totalRecords}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        onPageSizeChange={handlePageSizeChange}
      />
    </section>
  );
};
