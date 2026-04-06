import { createSlice } from "@reduxjs/toolkit";
import { routePaths } from "../../config/routePaths";

export type UiIconKey =
  | "dashboard"
  | "newPurchase"
  | "renewals"
  | "invoicesBilling"
  | "usageReports"
  | "supportTickets"
  | "accountSettings"
  | "billing";

interface UiState {
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

const initialState: UiState = {
  brand: {
    name: "WatchGuard",
    subtitle: "Partner Portal",
  },
  topBarMeta: {
    company: "Acme IT Solutions",
    tier: "Gold Partner",
    breadcrumbRoot: "Partner Portal",
  },
  navigationItems: [
    { label: "Dashboard", path: routePaths.dashboard, iconKey: "dashboard" },
    { label: "New Purchase", path: routePaths.newPurchase, iconKey: "newPurchase" },
    { label: "Renewals", path: routePaths.renewals, iconKey: "renewals" },
    {
      label: "Invoices & Billing",
      path: routePaths.invoicesBilling,
      iconKey: "invoicesBilling",
    },
    // { label: "Usage Reports", path: routePaths.usageReports, iconKey: "usageReports" },
    // { label: "Support Tickets", path: routePaths.supportTickets, iconKey: "supportTickets" },
    // {
    //   label: "Account Settings",
    //   path: routePaths.accountSettings,
    //   iconKey: "accountSettings",
    // },
  ],
  quickActions: [
    { label: "New Purchase", path: routePaths.newPurchase, iconKey: "newPurchase" },
    { label: "Renew", path: routePaths.renewals, iconKey: "renewals" },
    { label: "Invoices", path: routePaths.invoicesBilling, iconKey: "billing" },
    { label: "Support", path: routePaths.supportTickets, iconKey: "supportTickets" },
  ],
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {},
});

export default uiSlice.reducer;
