import { Bell, Menu, Settings, UserCircle2 } from "lucide-react";
import { useLocation } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { routePaths } from "../../config/routePaths";

interface TopBarProps {
  onMenuClick?: () => void;
}

export const TopBar = ({ onMenuClick }: TopBarProps) => {
  const location = useLocation();
  const { topBarMeta, navigationItems } = useAppSelector((state) => state.ui);
  const activeNav = navigationItems.find((item) => item.path === location.pathname);
  const pageName =
    location.pathname === routePaths.dashboardSubscriptions
      ? "Active Subscriptions"
      : activeNav?.label ?? "Dashboard";

  return (
    <header className="border-b border-slate-200 bg-gradient-to-b from-white to-slate-50/70 px-5 py-3.5 md:px-7">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-3">
          <button
            type="button"
            onClick={onMenuClick}
            aria-label="Open menu"
            className="mt-0.5 rounded-xl border border-slate-200 bg-white p-2 text-slate-600 shadow-sm transition hover:border-slate-300 hover:text-slate-900 lg:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>

          <div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">{pageName}</h2>
            <p className="mt-1 text-sm font-medium text-slate-500">
              {topBarMeta.breadcrumbRoot} / {pageName}
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3 md:gap-4">
          <div className="mt-0.5 hidden items-center gap-2 text-slate-500 md:flex">
            <button
              type="button"
              className="relative rounded-xl border border-slate-200 bg-white p-2.5 text-slate-500 shadow-sm transition-all hover:-translate-y-0.5 hover:border-slate-300 hover:text-slate-900 hover:shadow"
              aria-label="Notifications"
            >
              <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-red-500" />
              <Bell className="h-5 w-5" />
            </button>
            <button
              type="button"
              className="rounded-xl border border-slate-200 bg-white p-2.5 text-slate-500 shadow-sm transition-all hover:-translate-y-0.5 hover:border-slate-300 hover:text-slate-900 hover:shadow"
              aria-label="Settings"
            >
              <Settings className="h-5 w-5" />
            </button>
          </div>

          <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-2.5 py-1.5 shadow-sm">
            <div className="text-right leading-tight">
              <p className="text-sm font-semibold text-slate-900">{topBarMeta.company}</p>
              <p className="text-xs font-medium text-amber-600">{topBarMeta.tier}</p>
            </div>
            <div className="rounded-full bg-gradient-to-br from-slate-700 to-slate-900 p-0.5">
              <UserCircle2 className="h-9 w-9 text-white" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
