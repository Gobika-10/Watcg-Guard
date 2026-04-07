import type { NewPurchaseState } from "./newPurchaseSlice";

export const newPurchaseInitialState: NewPurchaseState = {
  activeStep: 1,
  selectedCustomerId: "c1",
  selectedCategory: "networkSecurity",
  selectedProductId: null,

  steps: [
    { key: "browse", title: "Step 1", subtitle: "Browse" },
    { key: "configure", title: "Step 2", subtitle: "Configure" },
    { key: "reviewCart", title: "Step 3", subtitle: "Review Cart" },
    { key: "placeOrder", title: "Step 4", subtitle: "Place Order" },
    { key: "confirmation", title: "Step 5", subtitle: "Confirmation" },
  ],

  customers: [
    { id: "c1", label: "Acme Corporation" },
    { id: "c2", label: "GlobalTech Industries" },
    { id: "c3", label: "Nexus Solutions Ltd." },
    { id: "c4", label: "Pinnacle Enterprises" },
    { id: "c5", label: "Brightwave Networks" },
  ],

  categories: [
    {
      key: "networkSecurity",
      label: "Network Security",
      iconKey: "lock",
      cls: "net",
      color: "#3b6ef8",
      bg: "#eff3ff",
    },
    {
      key: "endpoint",
      label: "Endpoint",
      iconKey: "shield",
      cls: "end",
      color: "#7c3aed",
      bg: "#f5f3ff",
    },
    {
      key: "identity",
      label: "Identity",
      iconKey: "user",
      cls: "id",
      color: "#059669",
      bg: "#ecfdf5",
    },
    {
      key: "cloud",
      label: "Cloud",
      iconKey: "cloud",
      cls: "cld",
      color: "#0284c7",
      bg: "#f0f9ff",
    },
  ],

  products: [
    {
      id: "p1",
      category: "networkSecurity",
      name: "FortiGate NGFW",
      description:
        "Next-gen firewall with deep packet inspection and advanced threat protection.",
      priceLabel: "$12.00",
      iconKey: "flame",
      iconColor: "#ea6b0f",
      iconBg: "#fff7ed",
    },
    {
      id: "p2",
      category: "networkSecurity",
      name: "Secure DNS Guard",
      description:
        "Blocks malicious domains before connection with real-time threat intelligence.",
      priceLabel: "$4.50",
      iconKey: "globe",
      iconColor: "#0284c7",
      iconBg: "#f0f9ff",
    },
    {
      id: "p3",
      category: "networkSecurity",
      name: "Zero Trust Network",
      description:
        "Enforce least-privilege access across your entire network infrastructure.",
      priceLabel: "$18.00",
      iconKey: "lock",
      iconColor: "#7c3aed",
      iconBg: "#f5f3ff",
    },
    {
      id: "p4",
      category: "endpoint",
      name: "EDR Pro Suite",
      description:
        "Endpoint detection & response with AI-powered behavioral analysis.",
      priceLabel: "$9.00",
      iconKey: "shield",
      iconColor: "#7c3aed",
      iconBg: "#f5f3ff",
    },
    {
      id: "p5",
      category: "endpoint",
      name: "DLP Agent",
      description:
        "Prevent sensitive data exfiltration with content-aware policy enforcement.",
      priceLabel: "$6.50",
      iconKey: "lock",
      iconColor: "#d97706",
      iconBg: "#fffbeb",
    },
    {
      id: "p6",
      category: "identity",
      name: "SSO & MFA Platform",
      description:
        "Unified single sign-on with adaptive multi-factor authentication flows.",
      priceLabel: "$7.00",
      iconKey: "user",
      iconColor: "#059669",
      iconBg: "#ecfdf5",
    },
    {
      id: "p7",
      category: "identity",
      name: "PAM Vault",
      description:
        "Privileged access management with session recording and just-in-time access.",
      priceLabel: "$14.00",
      iconKey: "lock",
      iconColor: "#3b6ef8",
      iconBg: "#eff3ff",
    },
    {
      id: "p8",
      category: "cloud",
      name: "CSPM Shield",
      description:
        "Continuous cloud security posture management across AWS, Azure & GCP.",
      priceLabel: "$11.00",
      iconKey: "cloud",
      iconColor: "#0284c7",
      iconBg: "#f0f9ff",
    },
    {
      id: "p9",
      category: "cloud",
      name: "Cloud WAF",
      description:
        "Web application firewall with OWASP Top 10 protection and DDoS mitigation.",
      priceLabel: "$8.00",
      iconKey: "flame",
      iconColor: "#ea6b0f",
      iconBg: "#fff7ed",
    },
  ],
};

