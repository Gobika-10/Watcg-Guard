import { ArrowDown, ArrowUp, ArrowUpDown } from "lucide-react";
import { useMemo, useState, type ReactNode } from "react";
import { cn } from "../../lib/utils";

type SortDirection = "asc" | "desc";

type AppTablePrimitive = string | number | boolean | null | undefined;

export interface AppTableColumn<T> {
  key: string;
  header?: ReactNode;
  field?: keyof T;
  sortable?: boolean;
  className?: string;
  headerClassName?: string;
  cellClassName?: string;
  valueGetter?: (row: T, index: number) => AppTablePrimitive;
  render?: (row: T, index: number, value: AppTablePrimitive) => ReactNode;
  comparator?: (a: T, b: T) => number;
}

export interface AppTableDefaultColumn<T> {
  className?: string;
  headerClassName?: string;
  cellClassName?: string;
  sortable?: boolean;
  render?: (row: T, index: number, value: AppTablePrimitive) => ReactNode;
}

interface AppTableProps<T> {
  columnDefs: AppTableColumn<T>[];
  rowData: T[];
  rowKey: (row: T, index: number) => string;
  gridClassName: string;
  className?: string;
  bodyClassName?: string;
  rowClassName?: string | ((row: T, index: number) => string);
  emptyState?: ReactNode;
  defaultColDef?: AppTableDefaultColumn<T>;
  initialSort?: {
    key: string;
    direction?: SortDirection;
  };
}

const getColumnValue = <T,>(
  column: AppTableColumn<T>,
  row: T,
  index: number,
): AppTablePrimitive => {
  if (column.valueGetter) {
    return column.valueGetter(row, index);
  }

  if (column.field) {
    return row[column.field] as AppTablePrimitive;
  }

  return undefined;
};

const comparePrimitiveValues = (left: AppTablePrimitive, right: AppTablePrimitive) => {
  if (typeof left === "number" && typeof right === "number") {
    return left - right;
  }

  return String(left ?? "").localeCompare(String(right ?? ""), undefined, {
    numeric: true,
    sensitivity: "base",
  });
};

export const AppTable = <T,>({
  columnDefs,
  rowData,
  rowKey,
  gridClassName,
  className,
  bodyClassName,
  rowClassName,
  emptyState = "No records found.",
  defaultColDef,
  initialSort,
}: AppTableProps<T>) => {
  const [sortState, setSortState] = useState<{
    key: string;
    direction: SortDirection;
  } | null>(initialSort ? { key: initialSort.key, direction: initialSort.direction ?? "asc" } : null);

  const sortedRows = useMemo(() => {
    if (!sortState) {
      return rowData;
    }

    const activeColumn = columnDefs.find((column) => column.key === sortState.key);

    if (!activeColumn) {
      return rowData;
    }

    const sorted = [...rowData].sort((left, right) => {
      if (activeColumn.comparator) {
        return activeColumn.comparator(left, right);
      }

      const leftValue = getColumnValue(activeColumn, left, 0);
      const rightValue = getColumnValue(activeColumn, right, 0);

      return comparePrimitiveValues(leftValue, rightValue);
    });

    return sortState.direction === "asc" ? sorted : sorted.reverse();
  }, [columnDefs, rowData, sortState]);

  const toggleSort = (column: AppTableColumn<T>) => {
    const isSortable = column.sortable ?? defaultColDef?.sortable ?? false;

    if (!isSortable) {
      return;
    }

    setSortState((current) => {
      if (!current || current.key !== column.key) {
        return { key: column.key, direction: "asc" };
      }

      return {
        key: column.key,
        direction: current.direction === "asc" ? "desc" : "asc",
      };
    });
  };

  const renderSortIcon = (column: AppTableColumn<T>) => {
    const isSortable = column.sortable ?? defaultColDef?.sortable ?? false;

    if (!isSortable) {
      return null;
    }

    if (sortState?.key !== column.key) {
      return <ArrowUpDown className="h-3.5 w-3.5 text-slate-400" />;
    }

    return sortState.direction === "asc" ? (
      <ArrowUp className="h-3.5 w-3.5 text-sky-700" />
    ) : (
      <ArrowDown className="h-3.5 w-3.5 text-sky-700" />
    );
  };

  return (
    <div className={cn("overflow-hidden border border-slate-200", className)}>
      <div
        className={cn(
          "bg-slate-100/90 text-[11px] font-medium text-slate-500",
          gridClassName,
        )}
      >
        {columnDefs.map((column, index) => {
          const isSortable = column.sortable ?? defaultColDef?.sortable ?? false;

          return (
            <button
              key={column.key}
              type="button"
              onClick={() => toggleSort(column)}
              className={cn(
                "flex items-center gap-1.5 px-4 py-3 text-left",
                index !== columnDefs.length - 1 && "border-r border-slate-200",
                isSortable ? "cursor-pointer transition hover:bg-slate-200/70" : "cursor-default",
                defaultColDef?.className,
                defaultColDef?.headerClassName,
                column.className,
                column.headerClassName,
              )}
            >
              <span>{column.header ?? column.key}</span>
              {renderSortIcon(column)}
            </button>
          );
        })}
      </div>

      <div className={cn("max-h-[505px] overflow-auto", bodyClassName)}>
        {sortedRows.length > 0 ? (
          sortedRows.map((row, index) => (
            <div
              key={rowKey(row, index)}
              className={cn(
                "text-[11px] text-slate-600 transition hover:bg-slate-50",
                gridClassName,
                index !== sortedRows.length - 1 && "border-b border-slate-100",
                typeof rowClassName === "function" ? rowClassName(row, index) : rowClassName,
              )}
            >
              {columnDefs.map((column, columnIndex) => {
                const value = getColumnValue(column, row, index);
                const content = column.render
                  ? column.render(row, index, value)
                  : defaultColDef?.render
                    ? defaultColDef.render(row, index, value)
                    : value;

                return (
                  <div
                    key={column.key}
                    className={cn(
                      "px-4 py-3.5",
                      columnIndex !== columnDefs.length - 1 && "border-r border-slate-100",
                      defaultColDef?.className,
                      defaultColDef?.cellClassName,
                      column.className,
                      column.cellClassName,
                    )}
                  >
                    {content}
                  </div>
                );
              })}
            </div>
          ))
        ) : (
          <div className="px-4 py-10 text-center text-sm text-slate-500">{emptyState}</div>
        )}
      </div>
    </div>
  );
};
