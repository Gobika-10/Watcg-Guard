import { Navigate, Route, Routes } from "react-router-dom";
import { routePaths } from "../config/routePaths";
import { AppLayout } from "../layout/AppLayout";
import { AccountSettingsPage } from "../pages/account-settings/AccountSettingsPage";
import { DashboardPage } from "../pages/dashboard/DashboardPage";
import { SubscriptionsPage } from "../pages/dashboard/SubscriptionsPage";
import { InvoicesBillingPage } from "../pages/invoices-billing/InvoicesBillingPage";
import { NewPurchasePage } from "../pages/new-purchase/NewPurchasePage";
import { RenewalsPage } from "../pages/renewals/RenewalsPage";
import { SupportTicketsPage } from "../pages/support-tickets/SupportTicketsPage";
import { UsageReportsPage } from "../pages/usage-reports/UsageReportsPage";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path={routePaths.dashboard} element={<DashboardPage />} />
        <Route path={routePaths.dashboardSubscriptions} element={<SubscriptionsPage />} />
        <Route path={routePaths.newPurchase} element={<NewPurchasePage />} />
        <Route path={routePaths.renewals} element={<RenewalsPage />} />
        <Route path={routePaths.invoicesBilling} element={<InvoicesBillingPage />} />
        <Route path={routePaths.usageReports} element={<UsageReportsPage />} />
        <Route path={routePaths.supportTickets} element={<SupportTicketsPage />} />
        <Route path={routePaths.accountSettings} element={<AccountSettingsPage />} />
      </Route>
      <Route path="*" element={<Navigate to={routePaths.dashboard} replace />} />
    </Routes>
  );
};
