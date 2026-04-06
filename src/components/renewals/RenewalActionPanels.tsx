import { CheckCircle2 } from "lucide-react";
import { useMemo, useState } from "react";
import type { RenewalActionId } from "../../features/renewals/renewalsSlice";

interface RenewalActionPanelsProps {
  activeAction: RenewalActionId;
}

interface SubscriptionItem {
  customer: string;
  product: string;
  licenses: number;
  current: number;
  expiry: string;
  pricePerYear: string;
}

const subscriptions: SubscriptionItem[] = [
  { customer: "TechCorp Industries", product: "AuthPoint MFA", licenses: 200, current: 178, expiry: "30/6/2025", pricePerYear: "$700" },
  { customer: "Financial Services Group", product: "Firebox T45 Bundle", licenses: 50, current: 50, expiry: "3/5/2025", pricePerYear: "$12,400" },
  { customer: "TechCorp Industries", product: "DNSWatchGO", licenses: 500, current: 340, expiry: "15/12/2025", pricePerYear: "$600" },
  { customer: "Healthcare Plus", product: "WatchGuard Cloud", licenses: 100, current: 88, expiry: "10/3/2026", pricePerYear: "$480" },
  { customer: "Financial Services Group", product: "Panda Adaptive Defense 360", licenses: 350, current: 320, expiry: "20/8/2025", pricePerYear: "$1,925" },
  { customer: "Retail Solutions Inc", product: "WatchGuard EPDR", licenses: 200, current: 185, expiry: "15/7/2025", pricePerYear: "$840" },
];

export const RenewalActionPanels = ({ activeAction }: RenewalActionPanelsProps) => {
  const [selectedCustomer, setSelectedCustomer] = useState("All Customers");
  const [addCounts, setAddCounts] = useState<Record<string, number>>({});

  const customers = useMemo(
    () => ["All Customers", ...Array.from(new Set(subscriptions.map((s) => s.customer)))],
    []
  );

  const filtered = useMemo(
    () =>
      subscriptions.filter((s) => selectedCustomer === "All Customers" || s.customer === selectedCustomer),
    [selectedCustomer]
  );

  if (activeAction === "renew") {
    return (
      <section className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="mb-3 flex items-center justify-between">
          <h3 className="text-base font-semibold text-slate-900">Subscriptions Due for Renewal</h3>
          <select
            value={selectedCustomer}
            onChange={(e) => setSelectedCustomer(e.target.value)}
            className="h-9 rounded-lg border border-slate-300 bg-white px-3 text-sm"
          >
            {customers.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          {filtered.map((item) => (
            <article key={`${item.customer}-${item.product}`} className="flex items-center justify-between rounded-lg border border-slate-200 px-3 py-2.5">
              <div className="flex items-start gap-2">
                <input type="checkbox" className="mt-1" />
                <div>
                  <p className="text-[11px] text-slate-500">{item.customer}</p>
                  <p className="text-sm font-semibold text-slate-900">{item.product}</p>
                  <p className="text-xs text-slate-600">
                    {item.licenses} licenses | Expires {item.expiry}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-bold text-slate-900">{item.pricePerYear}</p>
                <p className="text-[11px] text-slate-500">per year</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    );
  }

  if (activeAction === "add") {
    return (
      <section className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="mb-3 flex items-center justify-between">
          <h3 className="text-base font-semibold text-slate-900">Add Licenses to Existing Subscriptions</h3>
          <select
            value={selectedCustomer}
            onChange={(e) => setSelectedCustomer(e.target.value)}
            className="h-9 rounded-lg border border-slate-300 bg-white px-3 text-sm"
          >
            {customers.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          {filtered.map((item) => {
            const count = addCounts[item.product] ?? 0;
            return (
              <article key={`${item.customer}-${item.product}`} className="rounded-lg border border-slate-200 px-3 py-2.5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-[11px] text-slate-500">{item.customer}</p>
                    <p className="text-sm font-semibold text-slate-900">{item.product}</p>
                    <p className="text-xs text-slate-600">Current: {item.current} / {item.licenses} licenses</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-slate-600">{item.pricePerYear}/license/year</p>
                    <button className="mt-2 rounded-md bg-sky-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-sky-700">
                      Add to Cart
                    </button>
                  </div>
                </div>

                <div className="mt-2 flex items-center gap-2">
                  <span className="text-xs text-slate-600">Add licenses:</span>
                  <button
                    type="button"
                    onClick={() =>
                      setAddCounts((prev) => ({ ...prev, [item.product]: Math.max(0, (prev[item.product] ?? 0) - 1) }))
                    }
                    className="h-7 w-7 rounded-md bg-slate-100 text-sm font-semibold"
                  >
                    -
                  </button>
                  <div className="flex h-7 min-w-[44px] items-center justify-center rounded-md border border-slate-300 bg-white text-xs font-semibold">
                    {count}
                  </div>
                  <button
                    type="button"
                    onClick={() => setAddCounts((prev) => ({ ...prev, [item.product]: (prev[item.product] ?? 0) + 1 }))}
                    className="h-7 w-7 rounded-md bg-slate-100 text-sm font-semibold"
                  >
                    +
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    );
  }

  if (activeAction === "upgrade") {
    const tiers = [
      { name: "Basic", price: "$50", features: ["Core Features", "24/7 Support"], cta: "Upgrade" },
      { name: "Professional", price: "$100", features: ["Core Features", "24/7 Support", "Advanced Analytics"], cta: "Current Plan", active: true },
      { name: "Enterprise", price: "$150", features: ["Core Features", "24/7 Support", "Advanced Analytics", "Dedicated Manager"], cta: "Upgrade" },
    ];
    return (
      <section className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
        <h3 className="mb-3 text-base font-semibold text-slate-900">Upgrade Your Subscription Tiers</h3>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
          {tiers.map((tier) => (
            <article
              key={tier.name}
              className={[
                "rounded-lg border p-3",
                tier.active ? "border-red-500 ring-1 ring-red-200" : "border-slate-200",
              ].join(" ")}
            >
              <h4 className="text-lg font-semibold text-slate-900">{tier.name}</h4>
              <p className="mt-1 text-3xl font-bold text-red-600">
                {tier.price}
                <span className="text-sm font-medium text-slate-600">/mo</span>
              </p>
              <ul className="mt-2 space-y-1">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-center gap-1.5 text-xs text-slate-700">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                    {f}
                  </li>
                ))}
              </ul>
              <button
                className={[
                  "mt-3 w-full rounded-md py-1.5 text-xs font-semibold",
                  tier.active ? "bg-red-600 text-white" : "bg-slate-200 text-slate-700 hover:bg-slate-300",
                ].join(" ")}
              >
                {tier.cta}
              </button>
            </article>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <h3 className="mb-3 text-base font-semibold text-slate-900">Browse New Products</h3>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
        {[
          { name: "AuthPoint Premium", desc: "Advanced identity protection", price: "$12/user/mo" },
          { name: "Cloud Security Suite", desc: "Secure cloud workloads at scale", price: "$24/license/year" },
          { name: "Threat Analytics+", desc: "Proactive threat intelligence insights", price: "$18/license/year" },
        ].map((p) => (
          <article key={p.name} className="rounded-lg border border-slate-200 bg-slate-50 p-3">
            <h4 className="text-sm font-semibold text-slate-900">{p.name}</h4>
            <p className="mt-1 text-xs text-slate-600">{p.desc}</p>
            <p className="mt-2 text-xs font-semibold text-slate-800">{p.price}</p>
            <button className="mt-2 rounded-md bg-sky-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-sky-700">
              Add Product
            </button>
          </article>
        ))}
      </div>
    </section>
  );
};
