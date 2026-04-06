import { useMemo } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { AutoRenewCard } from "../../components/invoices-billing/AutoRenewCard";
import { BillingAddressCard } from "../../components/invoices-billing/BillingAddressCard";
import { BillingSummaryCard } from "../../components/invoices-billing/BillingSummaryCard";
import { InvoicesTableCard } from "../../components/invoices-billing/InvoicesTableCard";
import { PaymentMethodsCard } from "../../components/invoices-billing/PaymentMethodsCard";
import {
  setCustomerFilter,
  setPeriodFilter,
  setStatusFilter,
  toggleAutoRenew,
} from "../../features/invoicesBilling/invoicesBillingSlice";

export const InvoicesBillingPage = () => {
  const dispatch = useAppDispatch();
  const billing = useAppSelector((state) => state.invoicesBilling);

  const filteredInvoices = useMemo(() => {
    return billing.invoices.filter((invoice) => {
      const customerMatch =
        billing.filters.customer === "All Customers" ||
        invoice.customer === billing.filters.customer;

      const statusMatch =
        billing.filters.status === "All Status" || invoice.status === billing.filters.status;

      return customerMatch && statusMatch;
    });
  }, [billing.invoices, billing.filters.customer, billing.filters.status]);

  return (
    <div className="space-y-4">
      <section className="rounded-2xl border border-slate-200 bg-gradient-to-r from-white via-sky-50/60 to-white p-5 shadow-sm">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold text-slate-900">Invoices & Billing Overview</h2>
            <p className="mt-1 text-sm text-slate-600">
              Track invoices, manage payment methods, and control auto-renew settings.
            </p>
          </div>
          <div className="rounded-xl border border-rose-200 bg-rose-50 px-4 py-2.5 text-right">
            <p className="text-xs font-medium text-slate-500">Outstanding</p>
            <p className="text-2xl font-bold tracking-tight text-rose-600">{billing.billingSummary.currentBalance}</p>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,2fr)_minmax(320px,1fr)]">
        <InvoicesTableCard
          invoices={filteredInvoices}
          filterOptions={billing.filterOptions}
          filters={billing.filters}
          onCustomerChange={(value) => dispatch(setCustomerFilter(value))}
          onPeriodChange={(value) => dispatch(setPeriodFilter(value))}
          onStatusChange={(value) => dispatch(setStatusFilter(value))}
        />

        <div className="space-y-4 lg:sticky lg:top-4 lg:h-fit">
          <BillingSummaryCard
            currentBalance={billing.billingSummary.currentBalance}
            lastPaymentAmount={billing.billingSummary.lastPaymentAmount}
            lastPaymentDate={billing.billingSummary.lastPaymentDate}
            nextInvoiceDue={billing.billingSummary.nextInvoiceDue}
          />

          <PaymentMethodsCard methods={billing.paymentMethods} />

          <BillingAddressCard
            company={billing.billingAddress.company}
            lines={billing.billingAddress.lines}
          />

          <AutoRenewCard
            enabled={billing.autoRenewEnabled}
            onToggle={() => dispatch(toggleAutoRenew())}
          />
        </div>
      </div>
    </div>
  );
};
