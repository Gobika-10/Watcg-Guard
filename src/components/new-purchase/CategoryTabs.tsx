import type { ComponentType } from "react";
import { Cloud, Lock, Shield, UserRound } from "lucide-react";
import type {
  PurchaseCategoryIconKey,
  PurchaseCategoryKey,
} from "../../features/newPurchase/newPurchaseSlice";

interface CategoryItem {
  key: PurchaseCategoryKey;
  label: string;
  iconKey: PurchaseCategoryIconKey;
}

interface CategoryTabsProps {
  categories: CategoryItem[];
  selectedKey: PurchaseCategoryKey;
  onSelect: (key: PurchaseCategoryKey) => void;
  showSelection?: boolean;
}

const iconMap: Record<PurchaseCategoryIconKey, ComponentType<{ className?: string }>> = {
  lock: Lock,
  shield: Shield,
  user: UserRound,
  cloud: Cloud,
};

const iconToneMap: Record<PurchaseCategoryKey, string> = {
  networkSecurity: "text-blue-600",
  endpoint: "text-violet-600",
  identity: "text-emerald-600",
  cloud: "text-sky-600",
};

export const CategoryTabs = ({
  categories,
  selectedKey,
  onSelect,
  showSelection = true,
}: CategoryTabsProps) => {
  return (
    <div className="mt-4 grid grid-cols-2 gap-2.5 xl:grid-cols-4">
      {categories.map((category) => {
        const Icon = iconMap[category.iconKey];
        const isSelected = showSelection && selectedKey === category.key;

        return (
          <button
            key={category.key}
            type="button"
            onClick={() => onSelect(category.key)}
            className={[
              "group rounded-xl border bg-white px-3 py-3 text-center transition-all",
              isSelected
                ? "border-red-500 bg-red-50/40 ring-2 ring-red-100 shadow-sm"
                : "border-slate-200 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-sm",
            ].join(" ")}
          >
            <div className="mx-auto flex h-9 w-9 items-center justify-center rounded-lg bg-slate-50 ring-1 ring-slate-200 transition-colors group-hover:bg-white">
              <Icon className={`h-5 w-5 ${iconToneMap[category.key]}`} />
            </div>
            <p className="mt-2 text-sm font-semibold text-slate-800">{category.label}</p>
          </button>
        );
      })}
    </div>
  );
};

export default CategoryTabs;
