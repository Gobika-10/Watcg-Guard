import {
  Cloud,
  Flame,
  Lock,
  Shield,
  User,
  Globe,
} from "lucide-react";
import type {
  ProductItem,
  PurchaseCategoryKey,
} from "../../../data/newPurchase/newPurchaseSlice";
import { PurchaseButton } from "./PurchaseButton";

interface ProductGridProps {
  products: ProductItem[];
  selectedCategory: PurchaseCategoryKey;
  onConfigure: (productId: string) => void;
}

const iconMap = {
  flame: Flame,
  lock: Lock,
  globe: Globe,
  shield: Shield,
  user: User,
  cloud: Cloud,
};

export const ProductGrid = ({
  products,
  selectedCategory,
  onConfigure,
}: ProductGridProps) => {
  const filteredProducts = products.filter(
    (product) => product.category === selectedCategory
  );

  return (
    <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
      {filteredProducts.map((product) => {
        const Icon = iconMap[product.iconKey];

        return (
          <div
            key={product.id}
            className="group rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md"
          >
            <div
              className="flex h-10 w-10 items-center justify-center rounded-lg ring-1 ring-slate-200"
              style={{ backgroundColor: product.iconBg }}
            >
              <Icon
                className="h-5 w-5"
                style={{ color: product.iconColor }}
              />
            </div>

            <h4 className="mt-3 text-xl font-semibold leading-tight text-slate-900">
              {product.name}
            </h4>

            <p className="mt-1.5 min-h-[50px] text-sm leading-5 text-slate-500">
              {product.description}
            </p>

            <div className="mt-4 flex items-center justify-between gap-2">
              <span className="text-3xl font-bold tracking-tight text-slate-900">
                {product.priceLabel}
              </span>

              <PurchaseButton
                type="button"
                variant="danger"
                onClick={() => onConfigure(product.id)}
                className="h-10 px-4"
              >
                Configure
              </PurchaseButton>
            </div>
          </div>
        );
      })}
    </div>
  );
};
