import { Building2, RefreshCw, ShieldCheck, Users2 } from "lucide-react";
import { DashboardCard } from "./common/DashboardCard";

interface DashboardHeroProps {
  initials: string;
  greeting: string;
  workspace: string;
  accounts: number;
  delegatedAccounts: number;
  lastUpdated: string;
  tabs: Array<{
    label: string;
    active?: boolean;
    count?: number;
  }>;
}

export const DashboardHero = ({
  initials,
  greeting,
  workspace,
  accounts,
  delegatedAccounts,
  lastUpdated,
  tabs,
}: DashboardHeroProps) => {
  return (
    <DashboardCard className="overflow-hidden border-slate-200/90 bg-gradient-to-br from-white via-white to-slate-50/70 p-0 shadow-[0_10px_28px_rgba(15,23,42,0.06)]">
      <div className="relative overflow-hidden px-4 py-4 md:px-5">
        <div className="pointer-events-none absolute -left-10 top-0 h-24 w-24 rounded-full bg-sky-100/50 blur-2xl" />
        <div className="pointer-events-none absolute right-0 top-0 h-20 w-20 rounded-full bg-slate-100/80 blur-2xl" />

        <div className="relative flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-3.5">
            <div className="flex h-15 w-15 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 via-blue-500 to-blue-700 text-xl font-semibold text-white shadow-[0_10px_24px_rgba(37,99,235,0.28)] ring-4 ring-sky-100/80">
              {initials}
            </div>

            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1 rounded-full bg-sky-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-sky-700 ring-1 ring-sky-100">
                  <ShieldCheck className="h-3 w-3" />
                  Overview
                </span>
              </div>

              <h1 className="mt-2 text-[2rem] font-semibold tracking-tight text-slate-900 md:text-[2.2rem]">
                {greeting}
              </h1>

              <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-slate-600">
                <span className="inline-flex items-center gap-1.5">
                  <Building2 className="h-3.5 w-3.5 text-slate-400" />
                  {workspace}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Users2 className="h-3.5 w-3.5 text-slate-400" />
                  {accounts} Accounts
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Users2 className="h-3.5 w-3.5 text-slate-400" />
                  {delegatedAccounts} Delegated Accounts
                </span>
              </div>
            </div>
          </div>

          <div className="inline-flex items-center gap-2 self-start rounded-full border border-slate-200 bg-white/80 px-3.5 py-1.5 text-xs font-medium text-slate-600 shadow-sm backdrop-blur md:text-sm">
            <RefreshCw className="h-3.5 w-3.5 text-slate-500" />
            {lastUpdated}
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 border-t border-slate-200/90 bg-white/70 px-4 md:px-5">
        {tabs.map((tab) => (
          <button
            key={tab.label}
            type="button"
            className={[
              "relative flex h-11 items-center gap-1.5 rounded-t-lg px-1.5 text-xs font-medium transition md:text-sm",
              tab.active
                ? "text-slate-900"
                : "text-slate-500 hover:text-slate-700",
            ].join(" ")}
          >
            <span>{tab.label}</span>
            {typeof tab.count === "number" ? (
              <span className="inline-flex h-5 min-w-[20px] items-center justify-center rounded-full bg-rose-100 px-1.5 text-[10px] font-semibold text-rose-700">
                {tab.count}
              </span>
            ) : null}
            {tab.active ? <span className="absolute inset-x-1 bottom-0 h-0.5 rounded-full bg-red-500" /> : null}
          </button>
        ))}
      </div>
    </DashboardCard>
  );
};
