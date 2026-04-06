import { FileText, Plus, RefreshCw, Ticket } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { SubscriptionsExpandedView } from "../../components/dashboard/SubscriptionsExpandedView";
import { routePaths } from "../../config/routePaths";

const quickCards = [
  { title: "View Invoices", subtitle: "Pay outstanding", Icon: FileText, tone: "blue" },
  { title: "Auto-Renew", subtitle: "Manage settings", Icon: RefreshCw, tone: "emerald" },
  { title: "Promo Code", subtitle: "Redeem code", Icon: Plus, tone: "violet" },
  { title: "Support", subtitle: "Get help", Icon: Ticket, tone: "amber" },
];

export const SubscriptionsPage = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-4">
      <SubscriptionsExpandedView />

      <section className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-4">
        {quickCards.map((card, index) => (
          <article
            key={card.title}
            className={[
              "group relative overflow-hidden rounded-xl border bg-white p-4 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md",
              index === 0
                ? "border-blue-500 ring-1 ring-blue-100"
                : "border-slate-200 hover:border-slate-300",
            ].join(" ")}
          >
            <div
              className={[
                "mx-auto flex h-10 w-10 items-center justify-center rounded-lg ring-4",
                card.tone === "blue" && "bg-blue-500 text-white ring-blue-100",
                card.tone === "emerald" && "bg-emerald-500 text-white ring-emerald-100",
                card.tone === "violet" && "bg-violet-500 text-white ring-violet-100",
                card.tone === "amber" && "bg-amber-500 text-white ring-amber-100",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              <card.Icon className="h-5 w-5" />
            </div>

            <h4 className="mt-3 text-lg font-semibold text-slate-900">{card.title}</h4>
            <p className="mt-0.5 text-xs text-slate-600">{card.subtitle}</p>

            <span
              className={[
                "mt-2 inline-flex items-center gap-1 text-xs font-semibold",
                card.tone === "blue" && "text-blue-600",
                card.tone === "emerald" && "text-emerald-600",
                card.tone === "violet" && "text-violet-600",
                card.tone === "amber" && "text-amber-600",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              Open
              <svg
                className="h-3.5 w-3.5 transition-transform duration-150 group-hover:translate-x-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </article>
        ))}
      </section>

      <div className="flex justify-end">
        <button
          type="button"
          onClick={() => navigate(routePaths.dashboard)}
          className="rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition-all hover:-translate-y-0.5 hover:bg-slate-50 hover:shadow"
        >
          Back to Dashboard
        </button>
      </div>
    </div>
  );
};
