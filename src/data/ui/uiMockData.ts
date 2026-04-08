import { routePaths } from "../../config/routePaths";
import type { UiState } from "./uiSlice";

export const uiInitialState: UiState = {
  brand: {
    name: "WatchGuard",
    subtitle: "Cloud",
  },
  topBarMeta: {
    company: "John Smith",
    tier: "Administrator",
    breadcrumbRoot: "Dashboard",
    userInitials: "JS",
  },
  navigationItems: [
    { label: "Dashboard", path: routePaths.dashboard, iconKey: "dashboard" },
    { label: "Monitor", path: routePaths.monitor, iconKey: "monitor" },
    { label: "Configure", path: routePaths.configure, iconKey: "configure" },
    { label: "Inventory", path: routePaths.inventory, iconKey: "inventory" },
    { label: "Invoices", path: routePaths.invoices, iconKey: "invoices" },
    { label: "Administration", path: routePaths.administration, iconKey: "administration" },
  ],
};
