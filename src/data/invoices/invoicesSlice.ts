import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { InvoiceHistoryRow } from "./invoicesMockData";

export interface InvoicesState {
  rows: InvoiceHistoryRow[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: InvoicesState = {
  rows: [],
  status: "idle",
  error: null,
};

const invoicesSlice = createSlice({
  name: "invoices",
  initialState,
  reducers: {
    requestInvoiceHistory: (state) => {
      state.status = "loading";
      state.error = null;
    },
    setInvoiceHistoryRows: (state, action: PayloadAction<InvoiceHistoryRow[]>) => {
      state.rows = action.payload;
      state.status = "succeeded";
      state.error = null;
    },
    setInvoiceHistoryFailure: (state, action: PayloadAction<string>) => {
      state.status = "failed";
      state.error = action.payload;
    },
  },
});

export const {
  requestInvoiceHistory,
  setInvoiceHistoryRows,
  setInvoiceHistoryFailure,
} = invoicesSlice.actions;

export default invoicesSlice.reducer;
