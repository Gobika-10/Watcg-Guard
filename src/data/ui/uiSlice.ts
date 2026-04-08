import { createSlice } from "@reduxjs/toolkit";
import { uiInitialState } from "./uiMockData";

export type UiIconKey =
  | "dashboard"
  | "monitor"
  | "configure"
  | "inventory"
  | "invoices"
  | "administration";

export interface UiState {
  brand: {
    name: string;
    subtitle: string;
  };
  topBarMeta: {
    company: string;
    tier: string;
    breadcrumbRoot: string;
    userInitials: string;
  };
  navigationItems: Array<{
    label: string;
    path: string;
    iconKey: UiIconKey;
    active?: boolean;
  }>;
}

const uiSlice = createSlice({
  name: "ui",
  initialState: uiInitialState,
  reducers: {},
});

export default uiSlice.reducer;
