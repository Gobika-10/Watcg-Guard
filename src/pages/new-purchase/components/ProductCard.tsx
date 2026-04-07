import { Cloud, Flame, Globe2, Lock, Shield, UserRound } from "lucide-react";
import type { ComponentType } from "react";
import type { ProductIconKey } from "../../../data/newPurchase/newPurchaseSlice";

interface ProductCardProps {
  name: string;
  description: string;
  priceLabel: string;
  iconKey: ProductIconKey;
  onConfigure?: () => void;
}

const iconMap: Record<ProductIconKey, ComponentType<{ className?: string }>> = {
  flame: Flame,
  lock: Lock,
  globe: Globe2,
  shield: Shield,
  user: UserRound,
  cloud: Cloud,
};

const toneMap: Record<ProductIconKey, string> = {
  flame: "text-orange-500",
  lock: "text-amber-500",
  globe: "text-sky-500",
  shield: "text-violet-500",
  user: "text-emerald-500",
  cloud: "text-cyan-500",
};

export const ProductCard = ({
  name,
  description,
  priceLabel,
  iconKey,
  onConfigure,
}: ProductCardProps) => {
  const Icon = iconMap[iconKey];

  return (
    <article className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <Icon className={`h-6 w-6 ${toneMap[iconKey]}`} />
      <h3 className="mt-2.5 text-xl font-bold text-slate-900">{name}</h3>
      <p className="mt-1.5 min-h-[44px] text-sm leading-relaxed text-slate-600">{description}</p>
      <p className="mt-3 text-slate-600">
        <span className="text-sm">Starting from </span>
        <span className="text-2xl font-bold text-slate-900">{priceLabel}</span>
        <span className="text-sm">/user/yr</span>
      </p>
      <button
        type="button"
        onClick={onConfigure}
        className="mt-3 w-full rounded-lg bg-sky-600 px-3 py-2 text-sm font-semibold text-white transition hover:bg-sky-700"
      >
        Configure {"->"}
      </button>
    </article>
  );
};
