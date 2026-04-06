import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type RenewalActionIconKey = "renew" | "add" | "upgrade" | "browse";
export type RenewalActionId = "renew" | "add" | "upgrade" | "browse";

interface RenewalAction {
  id: RenewalActionId;
  title: string;
  description: string;
  iconKey: RenewalActionIconKey;
  color: "blue" | "green" | "purple" | "amber";
}

interface RenewalBenefit {
  id: string;
  title: string;
  subtitle: string;
}

interface RenewalsState {
  hero: {
    title: string;
    subtitle: string;
  };
  activeAction: RenewalActionId;
  actions: RenewalAction[];
  benefitsTitle: string;
  benefits: RenewalBenefit[];
}

const initialState: RenewalsState = {
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

const renewalsSlice = createSlice({
  name: "renewals",
  initialState,
  reducers: {
    setActiveRenewalAction: (state, action: PayloadAction<RenewalActionId>) => {
      state.activeAction = action.payload;
    },
  },
});

export const { setActiveRenewalAction } = renewalsSlice.actions;
export default renewalsSlice.reducer;
