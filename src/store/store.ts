import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import dashboardReducer from "../data/dashboard/dashboardSlice";
import invoicesReducer from "../data/invoices/invoicesSlice";
import { rootSaga } from "../data/rootSaga";
import uiReducer from "../data/ui/uiSlice";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    dashboard: dashboardReducer,
    invoices: invoicesReducer,
    ui: uiReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: false,
    }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
