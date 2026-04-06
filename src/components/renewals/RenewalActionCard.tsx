import type { ComponentType } from "react";
import { Plus, RefreshCw, ShoppingCart, TrendingUp } from "lucide-react";
import type { RenewalActionIconKey } from "../../features/renewals/renewalsSlice";

interface RenewalActionCardProps {
  title: string;
  description: string;
  iconKey: RenewalActionIconKey;
  color: "blue" | "green" | "purple" | "amber";
  active?: boolean;
  onClick?: () => void;
}

const iconMap: Record<RenewalActionIconKey, ComponentType<{ className?: string }>> = {
  renew: RefreshCw,
  add: Plus,
  upgrade: TrendingUp,
  browse: ShoppingCart,
};

const colorMap: Record<
  RenewalActionCardProps["color"],
  { icon: string; ring: string; glow: string; text: string }
> = {
  blue:   { icon: "bg-blue-500",    ring: "ring-blue-100",    glow: "bg-blue-50",    text: "text-blue-600" },
  green:  { icon: "bg-emerald-500", ring: "ring-emerald-100", glow: "bg-emerald-50", text: "text-emerald-600" },
  purple: { icon: "bg-violet-500",  ring: "ring-violet-100",  glow: "bg-violet-50",  text: "text-violet-600" },
  amber:  { icon: "bg-amber-500",   ring: "ring-amber-100",   glow: "bg-amber-50",   text: "text-amber-600" },
};

export const RenewalActionCard = ({
  title,
  description,
  iconKey,
  color,
  active = false,
  onClick,
}: RenewalActionCardProps) => {
  const Icon = iconMap[iconKey];
  const c = colorMap[color];

  return (
    <article
      onClick={onClick}
      className={[
        "group relative cursor-pointer overflow-hidden rounded-2xl border bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg",
        active ? "border-red-500 ring-1 ring-red-200" : "border-slate-100 hover:border-slate-200",
      ].join(" ")}
    >
      {/* Subtle background glow */}
      <div className={`absolute -right-4 -top-4 h-20 w-20 rounded-full ${c.glow} blur-xl transition-opacity duration-300 opacity-0 group-hover:opacity-100`} />

      <div className={`relative inline-flex rounded-xl p-3 text-white shadow-sm ring-4 ${c.icon} ${c.ring}`}>
        <Icon className="h-5 w-5" />
      </div>

      <h4 className="mt-4 text-lg font-bold text-slate-900">{title}</h4>
      <p className="mt-1.5 text-sm leading-relaxed text-slate-500">{description}</p>

      <span className={`mt-4 inline-flex items-center gap-1 text-sm font-semibold ${c.text}`}>
        Get started
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
  );
};
