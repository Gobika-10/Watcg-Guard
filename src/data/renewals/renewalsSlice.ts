import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { renewalsInitialState } from "./renewalsMockData";

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

export interface RenewalsState {
  hero: {
    title: string;
    subtitle: string;
  };
  activeAction: RenewalActionId;
  actions: RenewalAction[];
  benefitsTitle: string;
  benefits: RenewalBenefit[];
}

const renewalsSlice = createSlice({
  name: "renewals",
  initialState: renewalsInitialState,
  reducers: {
    setActiveRenewalAction: (state, action: PayloadAction<RenewalActionId>) => {
      state.activeAction = action.payload;
    },
  },
});

export const { setActiveRenewalAction } = renewalsSlice.actions;
export default renewalsSlice.reducer;
