import type { InvoicesBillingState } from "./invoicesBillingSlice";

export const invoicesBillingInitialState: InvoicesBillingState = {
  filters: {
    customer: "All Customers",
    period: "All Time",
    status: "All Status",
  },
  filterOptions: {
    customers: ["All Customers", "TechCorp Industries", "Financial Services Group"],
    periods: ["All Time", "Last 30 Days", "Last 90 Days", "This Year"],
    statuses: ["All Status", "Paid", "Outstanding"],
  },
  invoices: [
    {
      id: "INV-2025-0312",
      customer: "TechCorp Industries",
      date: "01/03/2025",
      description: "AuthPoint MFA Renewal - 200 licenses",
      amount: "$12,400",
      status: "Paid",
    },
    {
      id: "INV-2025-0211",
      customer: "TechCorp Industries",
      date: "01/02/2025",
      description: "DNSWatchGO Additional Licenses - 100 seats",
      amount: "$3,200",
      status: "Paid",
    },
    {
      id: "INV-2025-0401",
      customer: "Financial Services Group",
      date: "01/04/2025",
      description: "Panda Adaptive Defense 360 Renewal",
      amount: "$4,280",
      status: "Outstanding",
    },
    {
      id: "INV-2025-0115",
      customer: "Financial Services Group",
      date: "15/01/2025",
      description: "Firebox T45 Bundle Annual Service",
      amount: "$8,900",
      status: "Paid",
    },
  ],
  billingSummary: {
    currentBalance: "$4,280",
    lastPaymentAmount: "$12,400",
    lastPaymentDate: "01/03/2025",
    nextInvoiceDue: "May 1, 2025",
  },
  paymentMethods: [
    {
      id: "visa-4242",
      label: "Visa ending in 4242",
      expiry: "Expires 12/2026",
      isDefault: true,
    },
  ],
  billingAddress: {
    company: "Acme IT Solutions",
    lines: [
      "123 Business Park Drive",
      "Suite 400",
      "San Francisco, CA 94107",
      "United States",
    ],
  },
  autoRenewEnabled: true,
};

