import { configureStore } from "@reduxjs/toolkit";
import dashboardReducer from "../data/dashboard/dashboardSlice";
import invoicesBillingReducer from "../data/invoicesBilling/invoicesBillingSlice";
import newPurchaseReducer from "../data/newPurchase/newPurchaseSlice";
import renewalsReducer from "../data/renewals/renewalsSlice";
import uiReducer from "../data/ui/uiSlice";

export const store = configureStore({
  reducer: {
    dashboard: dashboardReducer,
    invoicesBilling: invoicesBillingReducer,
    newPurchase: newPurchaseReducer,
    renewals: renewalsReducer,
    ui: uiReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
