import { delay, put, takeLatest } from "redux-saga/effects";
import { invoiceHistoryRows } from "./invoicesMockData";
import {
  requestInvoiceHistory,
  setInvoiceHistoryFailure,
  setInvoiceHistoryRows,
} from "./invoicesSlice";

function* loadInvoiceHistoryWorker() {
  try {
    yield delay(150);
    yield put(setInvoiceHistoryRows(invoiceHistoryRows));
  } catch {
    yield put(setInvoiceHistoryFailure("Unable to load invoice history."));
  }
}

export function* watchInvoicesSaga() {
  yield takeLatest(requestInvoiceHistory.type, loadInvoiceHistoryWorker);
}
