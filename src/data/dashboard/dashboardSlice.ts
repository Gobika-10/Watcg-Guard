import { createSlice } from "@reduxjs/toolkit";
import { dashboardInitialState } from "./dashboardMockData";

export type DashboardOverviewIconKey =
  | "cloudFirebox"
  | "firebox"
  | "accessPoint"
  | "endpoint"
  | "user";

export type DashboardProductIconKey =
  | "networkSecurity"
  | "endpointSecurity"
  | "authPoint"
  | "fireCloud"
  | "threatSync"
  | "mdr";

export type DashboardActionIconKey = "spark" | "feedback";

export interface DashboardState {
  billingNotice: string;
  hero: {
    initials: string;
    greeting: string;
    workspace: string;
    accounts: number;
    delegatedAccounts: number;
    lastUpdated: string;
    tabs: Array<{
      label: string;
      active?: boolean;
      count?: number;
    }>;
  };
  overviewStats: Array<{
    title: string;
    value: string;
    subtitle: string;
    iconKey: DashboardOverviewIconKey;
  }>;
  myProducts: Array<{
    name: string;
    accountsLabel: string;
    status: "Owned" | "Not Owned";
    iconKey: DashboardProductIconKey;
  }>;
  deviceStatus: {
    title: string;
    totalDevices: number;
    segments: Array<{
      label: string;
      value: number;
      color: string;
    }>;
  };
  firmwareUpgrades: {
    title: string;
    readyNow: number;
    items: Array<{
      label: string;
      value: number;
      total: number;
      color: string;
    }>;
  };
  endpointProtection: {
    title: string;
    rows: Array<{
      accountName: string;
      product: string;
      endpoints: number;
      statusSegments: Array<{
        value: number;
        color: string;
      }>;
    }>;
    totalRows: number;
  };
  actionCards: Array<{
    title: string;
    description: string;
    linkLabel: string;
    iconKey: DashboardActionIconKey;
    tone: "mint" | "sky";
  }>;
}

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: dashboardInitialState,
  reducers: {},
});

export default dashboardSlice.reducer;
