import { Search } from "lucide-react";
import { useMemo, useState } from "react";

interface DetailedSubscription {
  customer: string;
  product: string;
  productCode: string;
  category: string;
  term: string;
  total: number;
  used: number;
  utilization: number;
  status: "Active" | "Expiring Soon";
  autoRenew: boolean;
  renewal: string;
}

interface SubscriptionsExpandedViewProps {
  onClose?: () => void;
}

const seedData: DetailedSubscription[] = [
  {
    customer: "TechCorp Industries",
    product: "AuthPoint MFA",
    productCode: "PWGTISPNT1YRB5",
    category: "Identity",
    term: "1 Year",
    total: 200,
    used: 178,
    utilization: 89,
    status: "Active",
    autoRenew: true,
    renewal: "30/6/2025",
  },
  {
    customer: "Financial Services Group",
    product: "Firebox T45 Bundle",
    productCode: "T55BASAPT1YR",
    category: "Network Security",
    term: "1 Year",
    total: 50,
    used: 50,
    utilization: 100,
    status: "Expiring Soon",
    autoRenew: false,
    renewal: "3/5/2025",
  },
  {
    customer: "TechCorp Industries",
    product: "DNSWatchGO",
    productCode: "PWGDNSWATCHGO1YRB4",
    category: "Network Security",
    term: "1 Year",
    total: 500,
    used: 340,
    utilization: 68,
    status: "Active",
    autoRenew: true,
    renewal: "15/12/2025",
  },
  {
    customer: "Healthcare Plus",
    product: "WatchGuard Cloud",
    productCode: "PWGCLOUD1YRB1",
    category: "Cloud",
    term: "1 Year",
    total: 100,
    used: 88,
    utilization: 88,
    status: "Active",
    autoRenew: true,
    renewal: "10/3/2026",
  },
  {
    customer: "Financial Services Group",
    product: "Panda Adaptive Defense 360",
    productCode: "PWESSAEPDR1YRB4",
    category: "Endpoint",
    term: "1 Year",
    total: 350,
    used: 320,
    utilization: 91,
    status: "Active",
    autoRenew: true,
    renewal: "20/8/2025",
  },
  {
    customer: "Retail Solutions Inc",
    product: "WatchGuard EPDR",
    productCode: "PWESSEPDR1YRB6",
    category: "Endpoint",
    term: "1 Year",
    total: 200,
    used: 185,
    utilization: 93,
    status: "Active",
    autoRenew: false,
    renewal: "15/7/2025",
  },
];

const utilizationClass = (value: number) => {
  if (value >= 90) return "bg-red-500";
  if (value >= 80) return "bg-amber-500";
  return "bg-emerald-500";
};

const categoryBadgeStyles: Record<string, string> = {
  Identity: "bg-emerald-100 text-emerald-700 ring-emerald-200",
  Cloud: "bg-emerald-100 text-emerald-700 ring-emerald-200",
  "Network Security": "bg-blue-100 text-blue-700 ring-blue-200",
  Endpoint: "bg-blue-100 text-blue-700 ring-blue-200",
};

export const SubscriptionsExpandedView = ({ onClose }: SubscriptionsExpandedViewProps) => {
  const [search, setSearch] = useState("");
  const [customer, setCustomer] = useState("All Customers");
  const [category, setCategory] = useState("All Categories");
  const [status, setStatus] = useState("All Status");
  const [rows, setRows] = useState(seedData);

  const customers = ["All Customers", ...Array.from(new Set(seedData.map((s) => s.customer)))];
  const categories = ["All Categories", ...Array.from(new Set(seedData.map((s) => s.category)))];
  const statuses = ["All Status", "Active", "Expiring Soon"];

  const filtered = useMemo(
    () =>
      rows.filter((row) => {
        const searchMatch =
          !search ||
          row.product.toLowerCase().includes(search.toLowerCase()) ||
          row.productCode.toLowerCase().includes(search.toLowerCase());
        const customerMatch = customer === "All Customers" || row.customer === customer;
        const categoryMatch = category === "All Categories" || row.category === category;
        const statusMatch = status === "All Status" || row.status === status;
        return searchMatch && customerMatch && categoryMatch && statusMatch;
      }),
    [rows, search, customer, category, status]
  );

  const toggleAutoRenew = (code: string) => {
    setRows((prev) =>
      prev.map((row) =>
        row.productCode === code ? { ...row, autoRenew: !row.autoRenew } : row
      )
    );
  };

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h3 className="text-2xl font-semibold tracking-tight text-slate-900">All Active Subscriptions</h3>
          <p className="mt-0.5 text-xs text-slate-500">Search, filter, and manage every active subscription.</p>
        </div>
        {onClose ? (
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg border border-slate-300 px-3 py-1.5 text-xs font-semibold text-slate-700 transition hover:bg-slate-50"
          >
            Back
          </button>
        ) : null}
      </div>

      <div className="mb-4 grid grid-cols-1 gap-2.5 md:grid-cols-[2fr_1fr_1fr_1fr]">
        <label className="flex h-10 items-center gap-2 rounded-lg border border-slate-300 bg-white px-3 shadow-sm transition focus-within:border-sky-500 focus-within:ring-2 focus-within:ring-sky-100">
          <Search className="h-4 w-4 text-slate-400" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by product name..."
            className="w-full bg-transparent text-sm outline-none"
          />
        </label>

        <select
          value={customer}
          onChange={(e) => setCustomer(e.target.value)}
          className="h-10 rounded-lg border border-slate-300 bg-white px-3 text-sm shadow-sm outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
        >
          {customers.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="h-10 rounded-lg border border-slate-300 bg-white px-3 text-sm shadow-sm outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
        >
          {categories.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="h-10 rounded-lg border border-slate-300 bg-white px-3 text-sm shadow-sm outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
        >
          {statuses.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
      </div>

      <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-inner">
        <table className="w-full min-w-[1080px] text-left">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50/80 text-[11px] uppercase tracking-wide text-slate-500">
              {[
                "Customer",
                "Product",
                "Category",
                "Term",
                "Total",
                "Used",
                "Utilization",
                "Status",
                "Auto-Renew",
                "Renewal",
                "Actions",
              ].map((head) => (
                <th key={head} className="px-3 py-3 font-semibold">
                  {head}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.map((row) => (
              <tr key={row.productCode} className="border-b border-slate-100 transition-colors hover:bg-sky-50/40">
                <td className="px-3 py-3.5 text-sm text-slate-800">{row.customer}</td>
                <td className="px-3 py-3.5">
                  <p className="text-lg font-semibold text-slate-900">{row.product}</p>
                  <p className="text-xs text-slate-500">{row.productCode}</p>
                </td>
                <td className="px-3 py-3.5">
                  <span
                    className={[
                      "inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ring-1",
                      categoryBadgeStyles[row.category] ?? "bg-slate-100 text-slate-700 ring-slate-200",
                    ].join(" ")}
                  >
                    {row.category}
                  </span>
                </td>
                <td className="px-3 py-3.5 text-sm">{row.term}</td>
                <td className="px-3 py-3.5 text-sm font-bold text-slate-900">{row.total}</td>
                <td className="px-3 py-3.5 text-sm">{row.used}</td>
                <td className="px-3 py-3.5">
                  <div className="h-2 w-28 rounded-full bg-slate-200">
                    <div
                      className={`h-2 rounded-full ${utilizationClass(row.utilization)}`}
                      style={{ width: `${row.utilization}%` }}
                    />
                  </div>
                  <p className="mt-1 text-xs font-semibold text-slate-700">{row.utilization}%</p>
                </td>
                <td className="px-3 py-3.5">
                  <span
                    className={[
                      "inline-flex rounded-full px-2.5 py-1 text-xs font-semibold",
                      row.status === "Active"
                        ? "bg-emerald-100 text-emerald-700"
                        : "bg-amber-100 text-amber-700",
                    ].join(" ")}
                  >
                    {row.status}
                  </span>
                </td>
                <td className="px-3 py-3.5">
                  <button
                    type="button"
                    onClick={() => toggleAutoRenew(row.productCode)}
                    aria-label={`Toggle auto-renew for ${row.product}`}
                    className={[
                      "relative h-7 w-[70px] rounded-full transition",
                      row.autoRenew ? "bg-emerald-600" : "bg-slate-300",
                    ].join(" ")}
                  >
                    <span
                      className={[
                        "absolute inset-y-0 left-2 flex items-center text-[9px] font-bold tracking-wide text-white/90 transition-opacity",
                        row.autoRenew ? "opacity-100" : "opacity-0",
                      ].join(" ")}
                    >
                      ON
                    </span>
                    <span
                      className={[
                        "absolute inset-y-0 right-2 flex items-center text-[9px] font-bold tracking-wide text-white/80 transition-opacity",
                        row.autoRenew ? "opacity-0" : "opacity-100",
                      ].join(" ")}
                    >
                      OFF
                    </span>
                    <span
                      className={[
                        "absolute top-0.5 h-6 w-6 rounded-full bg-white transition",
                        row.autoRenew ? "left-10" : "left-0.5",
                      ].join(" ")}
                    />
                  </button>
                </td>
                <td className="px-3 py-3.5 text-sm">{row.renewal}</td>
                <td className="px-3 py-3.5">
                  <div className="flex gap-3 text-sm font-semibold text-sky-700">
                    <button type="button" className="hover:text-sky-800 hover:underline">
                      Renew
                    </button>
                    <button type="button" className="hover:text-sky-800 hover:underline">
                      Add Seats
                    </button>
                    <button type="button" className="hover:text-sky-800 hover:underline">
                      View Details
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

