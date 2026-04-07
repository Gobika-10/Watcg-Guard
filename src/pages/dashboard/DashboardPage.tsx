import type { ComponentType } from "react";
import { CreditCard, Headset, PackagePlus, RefreshCw } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { AccountExecutiveCard } from "./components/AccountExecutiveCard";
import { AccountHealthCard } from "./components/AccountHealthCard";
import { OrganizationHierarchyCard } from "./components/OrganizationHierarchyCard";
import { QuickActionsCard } from "./components/QuickActionsCard";
import { RecentInvoicesCard } from "./components/RecentInvoicesCard";
import { StatCard } from "./components/StatCard";
import { SubscriptionTable } from "./components/SubscriptionTable";
import { routePaths } from "../../config/routePaths";
import type { UiIconKey } from "../../data/ui/uiSlice";

const quickActionIconMap: Record<UiIconKey, ComponentType<{ className?: string }>> = {
  dashboard: PackagePlus,
  newPurchase: PackagePlus,
  renewals: RefreshCw,
  invoicesBilling: CreditCard,
  usageReports: CreditCard,
  supportTickets: Headset,
  accountSettings: CreditCard,
  billing: CreditCard,
};

export const DashboardPage = () => {
  const navigate = useNavigate();
  const dashboard = useAppSelector((state) => state.dashboard);
  const quickActions = useAppSelector((state) => state.ui.quickActions);
  const quickActionsWithIcons = quickActions.map((action) => ({
    label: action.label,
    path: action.path,
    Icon: quickActionIconMap[action.iconKey],
  }));

  return (
    <div className="space-y-5">
      <section className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-5">
        {dashboard.stats.map((stat, index) => (
          <StatCard
            key={stat.title}
            index={index}
            title={stat.title}
            value={stat.value}
            subtitle={stat.subtitle}
            note={stat.note}
            tone={stat.tone}
          />
        ))}
      </section>

      <section className="grid grid-cols-1 gap-5 xl:grid-cols-[2fr_1fr]">
        <SubscriptionTable
          data={dashboard.subscriptions}
          onViewAll={() => navigate(routePaths.dashboardSubscriptions)}
        />
        <div className="space-y-6">
          <AccountHealthCard
            scoreLabel={dashboard.accountHealth.scoreLabel}
            summary={dashboard.accountHealth.summary}
          />
          <QuickActionsCard actions={quickActionsWithIcons} />
        </div>
      </section>

      <section className="grid grid-cols-1 gap-5 xl:grid-cols-[2fr_1fr]">
        <RecentInvoicesCard invoices={dashboard.invoices} />
        <AccountExecutiveCard
          name={dashboard.accountExecutive.name}
          role={dashboard.accountExecutive.role}
          email={dashboard.accountExecutive.email}
          phone={dashboard.accountExecutive.phone}
        />
      </section>

      <OrganizationHierarchyCard items={dashboard.organizationHierarchy} />
    </div>
  );
};
