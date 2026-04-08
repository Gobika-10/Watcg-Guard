import type { ColDef } from "ag-grid-community";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { AgGridReact } from "ag-grid-react";
import { useMemo, type CSSProperties } from "react";

interface AppAgGridTableProps<T> {
  rowData: T[];
  columnDefs: ColDef<T>[];
  className?: string;
  headerHeight?: number;
  rowHeight?: number;
  style?: CSSProperties;
  defaultColDef?: ColDef<T>;
}

export const AppAgGridTable = <T,>({
  rowData,
  columnDefs,
  className,
  headerHeight = 46,
  rowHeight = 44,
  style,
  defaultColDef,
}: AppAgGridTableProps<T>) => {
  const mergedDefaultColDef = useMemo<ColDef<T>>(
    () => ({
      resizable: false,
      suppressMovable: true,
      sortable: true,
      editable: false,
      ...defaultColDef,
    }),
    [defaultColDef],
  );

  return (
    <div
      className={["ag-theme-quartz", className].filter(Boolean).join(" ")}
      style={
        {
          width: "100%",
          "--ag-background-color": "#ffffff",
          "--ag-foreground-color": "#475569",
          "--ag-header-background-color": "#f7f8fa",
          "--ag-header-foreground-color": "#64748b",
          "--ag-border-color": "#cbd5e1",
          "--ag-row-border-color": "#e2e8f0",
          "--ag-header-column-separator-color": "#cbd5e1",
          "--ag-cell-horizontal-border": "solid #e2e8f0",
          "--ag-border-radius": "0px",
          "--ag-wrapper-border-radius": "0px",
          "--ag-cell-horizontal-padding": "16px",
          "--ag-header-height": `${headerHeight}px`,
          "--ag-row-height": `${rowHeight}px`,
          "--ag-font-size": "11px",
          "--ag-font-family": "inherit",
          "--ag-selected-row-background-color": "transparent",
          "--ag-range-selection-border-color": "transparent",
          "--ag-control-panel-background-color": "#ffffff",
          "--ag-odd-row-background-color": "#ffffff",
          "--ag-row-hover-color": "#f8fafc",
          ...style,
        } as CSSProperties
      }
    >
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
        defaultColDef={mergedDefaultColDef}
        animateRows={false}
        headerHeight={headerHeight}
        rowHeight={rowHeight}
        suppressCellFocus
        suppressRowClickSelection
        suppressColumnMoveAnimation
        suppressRowHoverHighlight={false}
        suppressMenuHide
        domLayout="autoHeight"
      />
    </div>
  );
};
