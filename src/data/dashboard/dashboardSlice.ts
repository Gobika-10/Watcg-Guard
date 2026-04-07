import { createSlice } from "@reduxjs/toolkit";
import { dashboardInitialState } from "./dashboardMockData";

type StatTone = "emerald" | "blue" | "rose" | "orange";
type SubscriptionStatus = "Active" | "Expiring Soon";

export interface DashboardState {
  stats: Array<{
    title: string;
    value: string;
    subtitle: string;
    note?: string;
    tone: StatTone;
  }>;
  subscriptions: Array<{
    customer: string;
    product: string;
    category: string;
    licenses: number;
    utilized: number;
    status: SubscriptionStatus;
    renewal: string;
  }>;
  accountHealth: {
    scoreLabel: string;
    summary: string[];
  };
  invoices: Array<{
    id: string;
    description: string;
    amount: string;
    date: string;
    status: "Paid" | "Outstanding";
  }>;
  organizationHierarchy: Array<{
    name: string;
    percentage: string;
    widthPercent: number;
    tone: "red" | "green" | "gray";
  }>;
  accountExecutive: {
    name: string;
    role: string;
    email: string;
    phone: string;
  };
}

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: dashboardInitialState,
  reducers: {},
});

export default dashboardSlice.reducer;
