import { all, fork } from "redux-saga/effects";
import { watchInvoicesSaga } from "./invoices/invoicesSaga";

export function* rootSaga() {
  yield all([fork(watchInvoicesSaga)]);
}
