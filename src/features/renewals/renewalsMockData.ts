import type { RenewalsState } from "./renewalsSlice";

export const renewalsInitialState: RenewalsState = {
  hero: {
    title: "Manage + Expand Subscriptions",
    subtitle: "Select an action below to renew, expand, or enhance your WatchGuard services",
  },
  activeAction: "renew",
  actions: [
    {
      id: "renew",
      title: "Renew Existing Subscriptions",
      description: "Extend your current subscriptions",
      iconKey: "renew",
      color: "blue",
    },
    {
      id: "add",
      title: "Add Licenses / Seats",
      description: "Increase capacity for existing products",
      iconKey: "add",
      color: "green",
    },
    {
      id: "upgrade",
      title: "Upgrade Tier / Level",
      description: "Access advanced features",
      iconKey: "upgrade",
      color: "purple",
    },
    {
      id: "browse",
      title: "Browse New Products",
      description: "Explore additional solutions",
      iconKey: "browse",
      color: "amber",
    },
  ],
  benefitsTitle: "Outcome Benefits",
  benefits: [
    {
      id: "subscription-updated",
      title: "Subscriptions Updated",
      subtitle: "Licenses adjusted instantly",
    },
    {
      id: "confirmation-invoice",
      title: "Confirmation + Invoice",
      subtitle: "Emailed to MSP",
    },
    {
      id: "auto-provisioned",
      title: "Auto-Provisioned",
      subtitle: "No manual steps",
    },
    {
      id: "health-review",
      title: "Health Review",
      subtitle: "Proactive alerts",
    },
  ],
};

