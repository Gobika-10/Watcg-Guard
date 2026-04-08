import { useAppSelector } from "../../hooks";
import { DashboardActionCard } from "./components/DashboardActionCard";
import { DashboardAlertBanner } from "./components/DashboardAlertBanner";
import { DashboardDeviceStatusCard } from "./components/DashboardDeviceStatusCard";
import { DashboardEndpointTableCard } from "./components/DashboardEndpointTableCard";
import { DashboardFirmwareCard } from "./components/DashboardFirmwareCard";
import { DashboardHero } from "./components/DashboardHero";
import { DashboardOverviewStat } from "./components/DashboardOverviewStat";
import { DashboardProductsPanel } from "./components/DashboardProductsPanel";

export const DashboardPage = () => {
  const dashboard = useAppSelector((state) => state.dashboard);

  return (
    <div className="space-y-2">
      <DashboardAlertBanner message={dashboard.billingNotice} />

      <DashboardHero
        initials={dashboard.hero.initials}
        greeting={dashboard.hero.greeting}
        workspace={dashboard.hero.workspace}
        accounts={dashboard.hero.accounts}
        delegatedAccounts={dashboard.hero.delegatedAccounts}
        lastUpdated={dashboard.hero.lastUpdated}
        tabs={dashboard.hero.tabs}
      />

      <section className="grid grid-cols-1 gap-2 xl:grid-cols-[minmax(0,1.85fr)_320px]">
        <div className="space-y-2">
          <div className="grid grid-cols-1 gap-2 md:grid-cols-2 2xl:grid-cols-5">
            {dashboard.overviewStats.map((stat) => (
              <DashboardOverviewStat
                key={stat.title}
                title={stat.title}
                value={stat.value}
                subtitle={stat.subtitle}
                iconKey={stat.iconKey}
              />
            ))}
          </div>

          <div className="grid grid-cols-1 gap-2 2xl:grid-cols-2">
            <DashboardDeviceStatusCard
              title={dashboard.deviceStatus.title}
              totalDevices={dashboard.deviceStatus.totalDevices}
              segments={dashboard.deviceStatus.segments}
            />
            <DashboardFirmwareCard
              title={dashboard.firmwareUpgrades.title}
              readyNow={dashboard.firmwareUpgrades.readyNow}
              items={dashboard.firmwareUpgrades.items}
            />
          </div>
        </div>

        <DashboardProductsPanel items={dashboard.myProducts} />
      </section>

      <section className="grid grid-cols-1 gap-2 xl:grid-cols-[minmax(0,1.85fr)_320px]">
        <DashboardEndpointTableCard
          title={dashboard.endpointProtection.title}
          rows={dashboard.endpointProtection.rows}
          totalRows={dashboard.endpointProtection.totalRows}
        />

        <div className="space-y-2">
          {dashboard.actionCards.map((card) => (
            <DashboardActionCard
              key={card.title}
              title={card.title}
              description={card.description}
              linkLabel={card.linkLabel}
              iconKey={card.iconKey}
              tone={card.tone}
            />
          ))}
        </div>
      </section>
    </div>
  );
};
