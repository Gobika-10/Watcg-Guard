import { Navigate, Route, Routes } from "react-router-dom";
import { routePaths } from "../config/routePaths";
import { AppLayout } from "../layout/AppLayout";
import { AdministrationPage } from "../pages/administration/AdministrationPage";
import { ConfigurePage } from "../pages/configure/ConfigurePage";
import { DashboardPage } from "../pages/dashboard/DashboardPage";
import { InventoryPage } from "../pages/inventory/InventoryPage";
import { InvoicesPage } from "../pages/invoices/InvoicesPage";
import { MonitorPage } from "../pages/monitor/MonitorPage";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path={routePaths.dashboard} element={<DashboardPage />} />
        <Route path={routePaths.monitor} element={<MonitorPage />} />
        <Route path={routePaths.configure} element={<ConfigurePage />} />
        <Route path={routePaths.inventory} element={<InventoryPage />} />
        <Route path={routePaths.invoices} element={<InvoicesPage />} />
        <Route path={routePaths.administration} element={<AdministrationPage />} />
      </Route>
      <Route path="*" element={<Navigate to={routePaths.dashboard} replace />} />
    </Routes>
  );
};
