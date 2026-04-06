import { createSlice } from "@reduxjs/toolkit";
import { uiInitialState } from "./uiMockData";

export type UiIconKey =
  | "dashboard"
  | "newPurchase"
  | "renewals"
  | "invoicesBilling"
  | "usageReports"
  | "supportTickets"
  | "accountSettings"
  | "billing";

export interface UiState {
  brand: {
    name: string;
    subtitle: string;
  };
  topBarMeta: {
    company: string;
    tier: string;
    breadcrumbRoot: string;
  };
  navigationItems: Array<{
    label: string;
    path: string;
    iconKey: UiIconKey;
  }>;
  quickActions: Array<{
    label: string;
    path: string;
    iconKey: UiIconKey;
  }>;
}

const uiSlice = createSlice({
  name: "ui",
  initialState: uiInitialState,
  reducers: {},
});

export default uiSlice.reducer;
