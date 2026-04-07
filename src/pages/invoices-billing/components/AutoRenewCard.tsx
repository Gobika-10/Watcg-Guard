import { AppBadge } from "../../../components/ui/AppBadge";
import { AppCard } from "../../../components/ui/AppCard";
import { AppSwitch } from "../../../components/ui/AppSwitch";

interface AutoRenewCardProps {
  enabled: boolean;
  onToggle: () => void;
}

export const AutoRenewCard = ({ enabled, onToggle }: AutoRenewCardProps) => {
  return (
    <AppCard className="rounded-2xl transition-shadow hover:shadow-md">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <h3 className="text-xl font-semibold leading-none text-slate-900">Auto-Renew Settings</h3>
            <AppBadge tone={enabled ? "green" : "neutral"} size="md">
              {enabled ? "Enabled" : "Disabled"}
            </AppBadge>
          </div>
          <p className="mt-2 text-sm text-slate-600">Enable auto-renew for all subscriptions</p>
          <p className="mt-1 text-[11px] leading-relaxed text-slate-500">
            When enabled, your subscriptions will automatically renew before expiration using your
            default payment method.
          </p>
        </div>

        <AppSwitch checked={enabled} onToggle={onToggle} ariaLabel="Toggle auto renew" className="mt-0.5" />
      </div>
    </AppCard>
  );
};
