import type { DashboardState } from "./dashboardSlice";

export const dashboardInitialState: DashboardState = {
  stats: [
    {
      title: "Active Customers",
      value: "4",
      subtitle: "6 subscriptions",
      tone: "emerald",
    },
    {
      title: "Active Subscriptions",
      value: "5",
      subtitle: "Across 4 product lines",
      tone: "blue",
    },
    {
      title: "Total Licenses",
      value: "1,400",
      subtitle: "1,161 utilized / 239 available",
      tone: "emerald",
    },
    {
      title: "Outstanding Balance",
      value: "$4,280",
      subtitle: "Due by Apr 15, 2025",
      tone: "rose",
    },
    {
      title: "Renewals Due",
      value: "1",
      subtitle: "Next: May 3, 2025",
      tone: "orange",
    },
  ],
  subscriptions: [
    {
      customer: "TechCorp Industries",
      product: "AuthPoint MFA",
      category: "Identity",
      licenses: 200,
      utilized: 178,
      status: "Active",
      renewal: "Jun 2025",
    },
    {
      customer: "Financial Services Group",
      product: "Firebox T45 Bundle",
      category: "Network Security",
      licenses: 50,
      utilized: 50,
      status: "Expiring Soon",
      renewal: "May 2025",
    },
    {
      customer: "TechCorp Industries",
      product: "DNSWatchGO",
      category: "Network Security",
      licenses: 500,
      utilized: 340,
      status: "Active",
      renewal: "Dec 2025",
    },
    {
      customer: "Healthcare Plus",
      product: "WatchGuard Cloud",
      category: "Cloud",
      licenses: 100,
      utilized: 88,
      status: "Active",
      renewal: "Mar 2026",
    },
    {
      customer: "Financial Services Group",
      product: "Panda Adaptive Defense 360",
      category: "Endpoint",
      licenses: 350,
      utilized: 320,
      status: "Active",
      renewal: "Aug 2025",
    },
    {
      customer: "Retail Solutions Inc",
      product: "WatchGuard EPDR",
      category: "Endpoint",
      licenses: 200,
      utilized: 185,
      status: "Active",
      renewal: "Jul 2025",
    },
  ],
  accountHealth: {
    scoreLabel: "Good",
    summary: [
      "5/6 subscriptions current",
      "1 subscription expiring in 30 days",
      "Auto-renew enabled on 4 subs",
    ],
  },
  invoices: [
    {
      id: "INV-2025-0312",
      description: "AuthPoint MFA Renewal - 200 licenses",
      amount: "$12,400",
      date: "01/03/2025",
      status: "Paid",
    },

    
    {
      id: "INV-2025-0211",
      description: "DNSWatchGO Additional Licenses - 100 seats",
      amount: "$3,200",
      date: "01/02/2025",
      status: "Paid",
    },
    {
      id: "INV-2025-0401",
      description: "Panda Adaptive Defense 360 Renewal",
      amount: "$4,280",
      date: "01/04/2025",
      status: "Outstanding",
    },
  ],
  organizationHierarchy: [
    { name: "Acme IT Solutions", percentage: "100.00%", widthPercent: 100, tone: "red" },
    { name: "Financial Services Group", percentage: "84.54%", widthPercent: 84.54, tone: "green" },
    { name: "TechCorp Industries", percentage: "7.67%", widthPercent: 7.67, tone: "gray" },
    { name: "Retail Solutions Inc", percentage: "4.96%", widthPercent: 4.96, tone: "gray" },
    { name: "Healthcare Plus", percentage: "2.83%", widthPercent: 2.83, tone: "gray" },
  ],
  accountExecutive: {
    name: "Sarah Mitchell",
    role: "WatchGuard Partner Success",
    email: "sarah.mitchell@watchguard.com",
    phone: "+1 (206) 613-0895",
  },
};

