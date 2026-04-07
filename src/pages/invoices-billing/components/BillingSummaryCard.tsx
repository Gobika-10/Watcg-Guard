import { AppCard } from "../../../components/ui/AppCard";

interface BillingSummaryCardProps {
  currentBalance: string;
  lastPaymentAmount: string;
  lastPaymentDate: string;
  nextInvoiceDue: string;
}

export const BillingSummaryCard = ({
  currentBalance,
  lastPaymentAmount,
  lastPaymentDate,
  nextInvoiceDue,
}: BillingSummaryCardProps) => {
  return (
    <AppCard className="rounded-2xl transition-shadow hover:shadow-md">
      <h3 className="text-xl font-semibold text-slate-900">Billing Summary</h3>

      <div className="mt-3 rounded-xl border border-rose-100 bg-gradient-to-br from-rose-50 to-white px-4 py-3">
        <p className="text-xs font-medium text-slate-500">Current Balance</p>
        <p className="text-3xl font-bold tracking-tight text-rose-600">{currentBalance}</p>
      </div>

      <div className="mt-3 space-y-2 rounded-xl border border-slate-200 bg-slate-50/80 p-4">
        <div>
          <p className="text-xs font-medium text-slate-500">Last Payment</p>
          <p className="text-xl font-semibold text-slate-800">{lastPaymentAmount}</p>
          <p className="text-sm text-slate-500">{lastPaymentDate}</p>
        </div>
        <div className="border-t border-slate-200 pt-2.5">
          <p className="text-xs font-medium text-slate-500">Next Invoice Due</p>
          <p className="text-xl font-semibold text-slate-800">{nextInvoiceDue}</p>
        </div>
      </div>

      <button
        type="button"
        className="mt-3 h-11 w-full rounded-lg bg-red-600 text-sm font-semibold text-white shadow-sm transition hover:bg-red-700"
      >
        Pay Outstanding Balance
      </button>
    </AppCard>
  );
};
