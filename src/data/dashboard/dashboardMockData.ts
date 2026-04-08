import type { DashboardState } from "./dashboardSlice";

export const dashboardInitialState: DashboardState = {
  billingNotice:
    "To activate your subscription billing, please provide a payment method. You'll be taken to our secure payment provider to finalize this process.",
  hero: {
    initials: "JS",
    greeting: "Hi John",
    workspace: "WatchGuard Cloud Demo",
    accounts: 47,
    delegatedAccounts: 7,
    lastUpdated: "Last update 15 minutes ago",
    tabs: [
      { label: "Home", active: true },
      { label: "Threats" },
      { label: "Licenses", count: 2 },
    ],
  },
  overviewStats: [
    {
      title: "Cloud-Managed Fireboxes",
      value: "18",
      subtitle: "In 5 accounts",
      iconKey: "cloudFirebox",
    },
    {
      title: "Locally-Managed Fireboxes",
      value: "11",
      subtitle: "In 5 accounts",
      iconKey: "firebox",
    },
    {
      title: "Access Points",
      value: "7",
      subtitle: "In 5 accounts",
      iconKey: "accessPoint",
    },
    {
      title: "Protected Endpoints",
      value: "208",
      subtitle: "In 15 accounts",
      iconKey: "endpoint",
    },
    {
      title: "Protected Users",
      value: "87",
      subtitle: "In 15 accounts",
      iconKey: "user",
    },
  ],
  myProducts: [
    { name: "Network Security", accountsLabel: "In 5 accounts", status: "Owned", iconKey: "networkSecurity" },
    { name: "Endpoint Security", accountsLabel: "In 5 accounts", status: "Owned", iconKey: "endpointSecurity" },
    { name: "AuthPoint", accountsLabel: "In 5 accounts", status: "Owned", iconKey: "authPoint" },
    { name: "FireCloud", accountsLabel: "In 0 accounts", status: "Not Owned", iconKey: "fireCloud" },
    { name: "ThreatSync+", accountsLabel: "In 0 accounts", status: "Not Owned", iconKey: "threatSync" },
    { name: "MDR", accountsLabel: "In 5 accounts", status: "Owned", iconKey: "mdr" },
  ],
  deviceStatus: {
    title: "Firebox and Access Point Status",
    totalDevices: 36,
    segments: [
      { label: "Connected", value: 12, color: "#64a95d" },
      { label: "Not Connected", value: 4, color: "#ca3b2d" },
      { label: "Inactive", value: 3, color: "#6d6f74" },
      { label: "Never Connected", value: 17, color: "#121214" },
    ],
  },
  firmwareUpgrades: {
    title: "Firebox and Access Point Firmware Upgrades",
    readyNow: 19,
    items: [
      { label: "Fireboxes", value: 12, total: 18, color: "#7bd8c3" },
      { label: "Access Points", value: 7, total: 7, color: "#9fc6fb" },
    ],
  },
  endpointProtection: {
    title: "Endpoint Security Protection Status",
    rows: [
      {
        accountName: "Paris",
        product: "Prime",
        endpoints: 23,
        statusSegments: [
          { value: 62, color: "#7ad8c3" },
          { value: 6, color: "#9ac0f5" },
          { value: 6, color: "#5a88c5" },
          { value: 6, color: "#a46ad7" },
        ],
      },
      {
        accountName: "Bilbao",
        product: "Basic",
        endpoints: 17,
        statusSegments: [
          { value: 84, color: "#7ad8c3" },
          { value: 16, color: "#8eb8ee" },
        ],
      },
      {
        accountName: "Roma",
        product: "Basic",
        endpoints: 11,
        statusSegments: [
          { value: 61, color: "#7ad8c3" },
          { value: 13, color: "#93b8ed" },
          { value: 10, color: "#5b86bf" },
          { value: 16, color: "#2e68a8" },
        ],
      },
      {
        accountName: "New York",
        product: "Prime",
        endpoints: 20,
        statusSegments: [
          { value: 84, color: "#7ad8c3" },
          { value: 16, color: "#8eb8ee" },
        ],
      },
      {
        accountName: "Manchester",
        product: "Basic",
        endpoints: 33,
        statusSegments: [
          { value: 62, color: "#7ad8c3" },
          { value: 15, color: "#a9c7ef" },
          { value: 23, color: "#5c86c4" },
        ],
      },
    ],
    totalRows: 30,
  },
  actionCards: [
    {
      title: "Try New Products",
      description: "Explore additional products.",
      linkLabel: "Start a trial",
      iconKey: "spark",
      tone: "mint",
    },
    {
      title: "Provide Your Feedback",
      description: "We want to know what you think about our products.",
      linkLabel: "Provide feedback",
      iconKey: "feedback",
      tone: "sky",
    },
  ],
};
