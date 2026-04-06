import type { ComponentType } from "react";
import { CreditCard, Headset, PackagePlus, RefreshCw } from "lucide-react";
import { useAppSelector } from "../../app/hooks";
import { AccountExecutiveCard } from "../../components/dashboard/AccountExecutiveCard";
import { AccountHealthCard } from "../../components/dashboard/AccountHealthCard";
import { OrganizationHierarchyCard } from "../../components/dashboard/OrganizationHierarchyCard";
import { QuickActionsCard } from "../../components/dashboard/QuickActionsCard";
import { RecentInvoicesCard } from "../../components/dashboard/RecentInvoicesCard";
import { StatCard } from "../../components/dashboard/StatCard";
import { SubscriptionTable } from "../../components/dashboard/SubscriptionTable";
import type { UiIconKey } from "../../features/ui/uiSlice";

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
  const dashboard = useAppSelector((state) => state.dashboard);
  const quickActions = useAppSelector((state) => state.ui.quickActions);
  const quickActionsWithIcons = quickActions.map((action) => ({
    label: action.label,
    path: action.path,
    Icon: quickActionIconMap[action.iconKey],
  }));

  return (
    <div className="space-y-4 p-4">
      {/* Stat strip */}
      <section className="grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-5">
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

      {/* Subscriptions + sidebar */}
      <section className="grid grid-cols-1 gap-4 xl:grid-cols-[2fr_1fr]">
        <SubscriptionTable data={dashboard.subscriptions} />
        <div className="space-y-4">
          <AccountHealthCard
            scoreLabel={dashboard.accountHealth.scoreLabel}
            summary={dashboard.accountHealth.summary}
          />
          <QuickActionsCard actions={quickActionsWithIcons} />
        </div>
      </section>

      {/* Invoices + AE */}
      <section className="grid grid-cols-1 gap-4 xl:grid-cols-[2fr_1fr]">
        <RecentInvoicesCard invoices={dashboard.invoices} />
        <AccountExecutiveCard
          name={dashboard.accountExecutive.name}
          role={dashboard.accountExecutive.role}
          email={dashboard.accountExecutive.email}
          phone={dashboard.accountExecutive.phone}
        />
      </section>

      {/* Org hierarchy - full width compact bar */}
      <OrganizationHierarchyCard items={dashboard.organizationHierarchy} />
    </div>
  );
};
