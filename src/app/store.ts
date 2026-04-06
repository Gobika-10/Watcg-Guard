import { configureStore } from "@reduxjs/toolkit";
import dashboardReducer from "../features/dashboard/dashboardSlice";
import invoicesBillingReducer from "../features/invoicesBilling/invoicesBillingSlice";
import newPurchaseReducer from "../features/newPurchase/newPurchaseSlice";
import renewalsReducer from "../features/renewals/renewalsSlice";
import uiReducer from "../features/ui/uiSlice";

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
