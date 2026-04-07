import type { ComponentType } from "react";
import {
  BarChart3,
  FileText,
  Headset,
  Home,
  Package2,
  Receipt,
  RefreshCw,
  Settings,
  Star,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import type { UiIconKey } from "../../data/ui/uiSlice";

const iconMap: Record<UiIconKey, ComponentType<{ className?: string }>> = {
  dashboard: Home,
  newPurchase: Package2,
  renewals: RefreshCw,
  invoicesBilling: FileText,
  usageReports: BarChart3,
  supportTickets: Headset,
  accountSettings: Settings,
  billing: Receipt,
};

interface SideNavProps {
  className?: string;
  onNavigate?: () => void;
}

export const SideNav = ({ className = "", onNavigate }: SideNavProps) => {
  const { brand, navigationItems } = useAppSelector((state) => state.ui);

  return (
    <aside
      className={[
        "min-h-screen w-[283px] shrink-0 border-r border-white/10 bg-[#142B57] text-white",
        className,
      ].join(" ")}
    >
      <div className="flex h-full flex-col">
        <div className="border-b border-white/10 px-6 py-6">
          <h1 className="text-[22px] font-semibold tracking-tight text-white">{brand.name}</h1>
          {brand.subtitle ? <p className="mt-1 text-xs text-white/60">{brand.subtitle}</p> : null}
        </div>

        <nav className="flex-1 px-3 py-5">
          <div className="space-y-2">
            {navigationItems.map((item) => {
              const Icon = iconMap[item.iconKey];

              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={onNavigate}
                  className={({ isActive }) =>
                    [
                      "group relative flex items-center gap-4 rounded-[14px] px-5 py-4 text-[15px] font-medium transition-all duration-200 ease-out",
                      isActive
                        ? "border border-white/30 bg-[#2B2448] text-red-500 shadow-[0_8px_18px_rgba(0,0,0,0.22)]"
                        : "text-white/90 hover:-translate-y-[1px] hover:bg-white/8 hover:text-white hover:shadow-[0_6px_16px_rgba(0,0,0,0.18)]",
                    ].join(" ")
                  }
                >
                  {({ isActive }) => (
                    <>
                      {isActive ? (
                        <span className="absolute left-0 top-1/2 h-[84%] w-[3px] -translate-y-1/2 rounded-r-full bg-red-600" />
                      ) : null}

                      <Icon
                        className={[
                          "h-5 w-5 shrink-0 transition-transform duration-200",
                          isActive ? "text-red-500" : "text-white/80 group-hover:scale-110 group-hover:text-white",
                        ].join(" ")}
                      />

                      <span className={isActive ? "leading-none text-red-500" : "leading-none text-white/90"}>
                        {item.label}
                      </span>
                    </>
                  )}
                </NavLink>
              );
            })}
          </div>
        </nav>

        <div className="px-4 pb-5">
          <div className="rounded-xl border border-white/12 bg-white/6 p-4 backdrop-blur-sm">
            <div className="mb-3 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-yellow-400 text-white shadow-sm">
                <Star className="h-4 w-4 fill-current" />
              </div>
              <span className="font-semibold text-white">Gold Partner</span>
            </div>

            <div className="space-y-1 text-sm text-white/80">
              <p className="font-medium text-white/90">Account Manager</p>
              <p>Sarah Mitchell</p>
              <button className="text-sm text-blue-300 transition-colors hover:text-blue-200 hover:underline">
                Contact
              </button>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};
