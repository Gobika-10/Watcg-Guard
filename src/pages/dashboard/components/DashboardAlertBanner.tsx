import { AlertCircle, ChevronRight } from "lucide-react";

interface DashboardAlertBannerProps {
  message: string;
}

export const DashboardAlertBanner = ({ message }: DashboardAlertBannerProps) => {
  return (
    <div className="flex items-center justify-between gap-2.5 rounded-xl border border-rose-200 bg-gradient-to-r from-rose-100 via-rose-50 to-rose-100 px-3.5 py-2.5 text-[12px] text-rose-900 shadow-sm">
      <div className="flex items-center gap-2.5">
        <span className="flex h-6.5 w-6.5 shrink-0 items-center justify-center rounded-full bg-white/70 ring-1 ring-rose-200">
          <AlertCircle className="h-3 w-3 text-rose-700" />
        </span>
        <p className="font-medium">{message}</p>
      </div>
      <ChevronRight className="h-3.5 w-3.5 shrink-0 text-rose-700" />
    </div>
  );
};
