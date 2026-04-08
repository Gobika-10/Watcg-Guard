import type { ColDef, ICellRendererParams } from "ag-grid-community";
import { Download } from "lucide-react";
import { useMemo } from "react";
import { AppAgGridTable } from "../../../components/ui/AppAgGridTable";
import type { InvoiceHistoryRow } from "../../../data/invoices/invoicesMockData";

interface InvoiceHistoryTableProps {
  rows: InvoiceHistoryRow[];
}

const DownloadCell = ({ data }: ICellRendererParams<InvoiceHistoryRow>) => {
  if (!data) {
    return null;
  }

  return (
    <button
      type="button"
      className="inline-flex h-7 w-7 items-center justify-center rounded-md text-slate-500 transition hover:bg-slate-100 hover:text-slate-800"
      aria-label={`Download ${data.invoiceName}`}
    >
      <Download className="h-3.5 w-3.5" />
    </button>
  );
};

export const InvoiceHistoryTable = ({ rows }: InvoiceHistoryTableProps) => {
  const headerHeight = 46;
  const rowHeight = 44;

  const columnDefs = useMemo<ColDef<InvoiceHistoryRow>[]>(
    () => [
      {
        headerName: "Invoice",
        field: "invoiceName",
        flex: 1.8,
        sortable: true,
        cellClass: "invoice-grid-cell invoice-grid-cell--strong",
      },
      {
        headerName: "Invoice Amount",
        field: "amount",
        flex: 1.2,
        sortable: true,
        cellClass: "invoice-grid-cell",
      },
      {
        headerName: "Issue Date",
        field: "issueDate",
        flex: 1.2,
        sortable: true,
        sort: "desc",
        cellClass: "invoice-grid-cell",
      },
      {
        headerName: "Download .CSV",
        field: "id",
        flex: 1,
        sortable: false,
        cellRenderer: DownloadCell,
        cellClass: "invoice-grid-cell invoice-grid-cell--download",
      },
    ],
    [],
  );

  return (
    <div className="px-6 py-5">
      <AppAgGridTable
        rowData={rows}
        columnDefs={columnDefs}
        className="invoice-history-grid ag-theme-quartz border border-slate-300"
        headerHeight={headerHeight}
        rowHeight={rowHeight}
      />
    </div>
  );
};
