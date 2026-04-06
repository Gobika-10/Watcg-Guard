import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { invoicesBillingInitialState } from "./invoicesBillingMockData";

type InvoiceStatus = "Paid" | "Outstanding";

interface InvoiceItem {
  id: string;
  customer: string;
  date: string;
  description: string;
  amount: string;
  status: InvoiceStatus;
}

interface PaymentMethod {
  id: string;
  label: string;
  expiry: string;
  isDefault: boolean;
}

export interface InvoicesBillingState {
  filters: {
    customer: string;
    period: string;
    status: string;
  };
  filterOptions: {
    customers: string[];
    periods: string[];
    statuses: string[];
  };
  invoices: InvoiceItem[];
  billingSummary: {
    currentBalance: string;
    lastPaymentAmount: string;
    lastPaymentDate: string;
    nextInvoiceDue: string;
  };
  paymentMethods: PaymentMethod[];
  billingAddress: {
    company: string;
    lines: string[];
  };
  autoRenewEnabled: boolean;
}

const invoicesBillingSlice = createSlice({
  name: "invoicesBilling",
  initialState: invoicesBillingInitialState,
  reducers: {
    setCustomerFilter(state, action: PayloadAction<string>) {
      state.filters.customer = action.payload;
    },
    setPeriodFilter(state, action: PayloadAction<string>) {
      state.filters.period = action.payload;
    },
    setStatusFilter(state, action: PayloadAction<string>) {
      state.filters.status = action.payload;
    },
    toggleAutoRenew(state) {
      state.autoRenewEnabled = !state.autoRenewEnabled;
    },
  },
});

export const { setCustomerFilter, setPeriodFilter, setStatusFilter, toggleAutoRenew } =
  invoicesBillingSlice.actions;

export default invoicesBillingSlice.reducer;
