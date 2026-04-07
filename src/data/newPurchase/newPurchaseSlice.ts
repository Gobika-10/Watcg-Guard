import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { newPurchaseInitialState } from "./newPurchaseMockData";

export type PurchaseStepKey =
  | "browse"
  | "configure"
  | "reviewCart"
  | "placeOrder"
  | "confirmation";

export type PurchaseCategoryKey =
  | "networkSecurity"
  | "endpoint"
  | "identity"
  | "cloud";

export type PurchaseCategoryIconKey = "lock" | "shield" | "user" | "cloud";
export type ProductIconKey =
  | "flame"
  | "lock"
  | "globe"
  | "shield"
  | "user"
  | "cloud";

export interface StepItem {
  key: PurchaseStepKey;
  title: string;
  subtitle: string;
}

export interface CustomerItem {
  id: string;
  label: string;
}

export interface CategoryItem {
  key: PurchaseCategoryKey;
  label: string;
  iconKey: PurchaseCategoryIconKey;
  color: string;
  bg: string;
  cls: string;
}

export interface ProductItem {
  id: string;
  category: PurchaseCategoryKey;
  name: string;
  description: string;
  priceLabel: string;
  iconKey: ProductIconKey;
  iconColor: string;
  iconBg: string;
}

export interface NewPurchaseState {
  activeStep: number;
  selectedCustomerId: string;
  selectedCategory: PurchaseCategoryKey;
  selectedProductId: string | null;
  steps: StepItem[];
  customers: CustomerItem[];
  categories: CategoryItem[];
  products: ProductItem[];
}

const newPurchaseSlice = createSlice({
  name: "newPurchase",
  initialState: newPurchaseInitialState,
  reducers: {
    setSelectedCustomer(state, action: PayloadAction<string>) {
      state.selectedCustomerId = action.payload;
    },

    setSelectedCategory(state, action: PayloadAction<PurchaseCategoryKey>) {
      state.selectedCategory = action.payload;
    },

    goToConfigureStep(state, action: PayloadAction<string>) {
      state.selectedProductId = action.payload;
      state.activeStep = 2;
    },

    nextStep(state) {
      if (state.activeStep < 5) {
        state.activeStep += 1;
      }
    },

    prevStep(state) {
      if (state.activeStep > 1) {
        state.activeStep -= 1;
      }
    },

    setActiveStep(state, action: PayloadAction<number>) {
      if (action.payload >= 1 && action.payload <= 5) {
        state.activeStep = action.payload;
      }
    },

    resetPurchaseFlow(state) {
      state.activeStep = 1;
      state.selectedCustomerId = "c1";
      state.selectedCategory = "networkSecurity";
      state.selectedProductId = null;
    },
  },
});

export const {
  setSelectedCustomer,
  setSelectedCategory,
  goToConfigureStep,
  nextStep,
  prevStep,
  setActiveStep,
  resetPurchaseFlow,
} = newPurchaseSlice.actions;

export default newPurchaseSlice.reducer;
