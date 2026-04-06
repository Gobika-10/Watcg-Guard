interface AutoRenewCardProps {
  enabled: boolean;
  onToggle: () => void;
}

export const AutoRenewCard = ({ enabled, onToggle }: AutoRenewCardProps) => {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <h3 className="text-xl font-semibold leading-none text-slate-900">Auto-Renew Settings</h3>
            <span
              className={[
                "rounded-full px-2.5 py-1 text-[11px] font-semibold leading-none",
                enabled ? "bg-emerald-100 text-emerald-700" : "bg-slate-100 text-slate-600",
              ].join(" ")}
            >
              {enabled ? "Enabled" : "Disabled"}
            </span>
          </div>
          <p className="mt-2 text-sm text-slate-600">Enable auto-renew for all subscriptions</p>
          <p className="mt-1 text-[11px] leading-relaxed text-slate-500">
            When enabled, your subscriptions will automatically renew before expiration using your
            default payment method.
          </p>
        </div>

        <button
          type="button"
          role="switch"
          aria-checked={enabled}
          aria-label="Toggle auto renew"
          onClick={onToggle}
          className={[
            "group relative mt-0.5 inline-flex h-8 w-14 shrink-0 items-center rounded-full border transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 active:scale-[0.98]",
            enabled
              ? "border-emerald-500 bg-emerald-500 shadow-[0_0_0_3px_rgba(16,185,129,0.12)] hover:bg-emerald-600"
              : "border-slate-300 bg-slate-300 hover:bg-slate-400",
          ].join(" ")}
        >
          <span
            className={[
              "pointer-events-none absolute inset-y-0 left-2 flex items-center text-[9px] font-bold tracking-wide text-white/90 transition-opacity duration-200",
              enabled ? "opacity-100" : "opacity-0",
            ].join(" ")}
          >
            ON
          </span>
          <span
            className={[
              "pointer-events-none absolute inset-y-0 right-2 flex items-center text-[9px] font-bold tracking-wide text-white/80 transition-opacity duration-200",
              enabled ? "opacity-0" : "opacity-100",
            ].join(" ")}
          >
            OFF
          </span>
          <span
            className={[
              "absolute left-1 top-1 h-6 w-6 rounded-full bg-white shadow-md transition-transform duration-200 group-active:scale-95",
              enabled ? "translate-x-6" : "translate-x-0",
            ].join(" ")}
          />
        </button>
      </div>
    </section>
  );
};
