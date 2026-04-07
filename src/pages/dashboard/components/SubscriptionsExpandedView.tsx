import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import { AppBadge } from "../../../components/ui/AppBadge";
import { AppProgressBar } from "../../../components/ui/AppProgressBar";
import { AppSelect } from "../../../components/ui/AppSelect";
import { AppSwitch } from "../../../components/ui/AppSwitch";

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

        <AppSelect
          value={customer}
          onChange={(e) => setCustomer(e.target.value)}
          options={customers.map((item) => ({ value: item, label: item }))}
        />
        <AppSelect
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          options={categories.map((item) => ({ value: item, label: item }))}
        />
        <AppSelect
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          options={statuses.map((item) => ({ value: item, label: item }))}
        />
      </div>

      <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-inner">
        <table className="w-full min-w-[1080px] text-left">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50/80 text-[10px] uppercase tracking-wide text-slate-500">
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
                <th key={head} className="px-3 py-2.5 font-semibold">
                  {head}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.map((row) => (
              <tr key={row.productCode} className="border-b border-slate-100 transition-colors hover:bg-sky-50/40">
                <td className="px-3 py-3 text-[13px] text-slate-800">{row.customer}</td>
                <td className="px-3 py-3">
                  <p className="text-base font-semibold text-slate-900">{row.product}</p>
                  <p className="text-[11px] text-slate-500">{row.productCode}</p>
                </td>
                <td className="px-3 py-3">
                  <AppBadge
                    size="md"
                    withRing
                    tone={
                      row.category === "Identity" || row.category === "Cloud"
                        ? "green"
                        : row.category === "Network Security" || row.category === "Endpoint"
                          ? "blue"
                          : "neutral"
                    }
                  >
                    {row.category}
                  </AppBadge>
                </td>
                <td className="px-3 py-3 text-[13px]">{row.term}</td>
                <td className="px-3 py-3 text-[15px] font-bold text-slate-900">{row.total}</td>
                <td className="px-3 py-3 text-[15px]">{row.used}</td>
                <td className="px-3 py-3">
                  <AppProgressBar value={row.utilization} />
                  <p className="mt-1 text-[12px] font-semibold text-slate-700">{row.utilization}%</p>
                </td>
                <td className="px-3 py-3">
                  <AppBadge
                    size="md"
                    tone={row.status === "Active" ? "green" : "amber"}
                  >
                    {row.status}
                  </AppBadge>
                </td>
                <td className="px-3 py-3">
                  <AppSwitch
                    checked={row.autoRenew}
                    onToggle={() => toggleAutoRenew(row.productCode)}
                    ariaLabel={`Toggle auto-renew for ${row.product}`}
                    showText={false}
                  />
                </td>
                <td className="px-3 py-3 text-[13px]">{row.renewal}</td>
                <td className="px-3 py-3">
                  <div className="flex gap-2.5 text-[13px] font-semibold text-sky-700">
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
