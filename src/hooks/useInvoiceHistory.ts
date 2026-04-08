import { useEffect, useMemo, useState } from "react";
import { requestInvoiceHistory } from "../data/invoices/invoicesSlice";
import { useAppDispatch, useAppSelector } from "./reduxHooks";

export const useInvoiceHistory = () => {
  const dispatch = useAppDispatch();
  const { rows, status, error } = useAppSelector((state) => state.invoices);
  const [searchValue, setSearchValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  useEffect(() => {
    if (status === "idle") {
      dispatch(requestInvoiceHistory());
    }
  }, [dispatch, status]);

  const filteredRows = useMemo(() => {
    const query = searchValue.trim().toLowerCase();

    if (!query) {
      return rows;
    }

    return rows.filter(
      (row) =>
        row.invoiceName.toLowerCase().includes(query) ||
        row.amount.toLowerCase().includes(query) ||
        row.issueDate.toLowerCase().includes(query),
    );
  }, [rows, searchValue]);

  const totalRecords = filteredRows.length;
  const totalPages = Math.max(1, Math.ceil(totalRecords / pageSize));

  const paginatedRows = useMemo(() => {
    const safePage = Math.min(currentPage, totalPages);
    const start = (safePage - 1) * pageSize;
    return filteredRows.slice(start, start + pageSize);
  }, [currentPage, filteredRows, pageSize, totalPages]);

  const handlePageChange = (page: number) => {
    setCurrentPage(Math.min(Math.max(page, 1), totalPages));
  };

  const handlePageSizeChange = (nextPageSize: number) => {
    setPageSize(nextPageSize);
    setCurrentPage(1);
  };

  const handleSearchChange = (value: string) => {
    setSearchValue(value);
    setCurrentPage(1);
  };

  return {
    status,
    error,
    searchValue,
    currentPage: Math.min(currentPage, totalPages),
    pageSize,
    totalRecords,
    totalPages,
    paginatedRows,
    handlePageChange,
    handlePageSizeChange,
    handleSearchChange,
  };
};
