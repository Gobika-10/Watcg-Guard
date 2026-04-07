import { CreditCard } from "lucide-react";
import { AppBadge } from "../../../components/ui/AppBadge";
import { AppCard } from "../../../components/ui/AppCard";

interface PaymentMethod {
  id: string;
  label: string;
  expiry: string;
  isDefault: boolean;
}

interface PaymentMethodsCardProps {
  methods: PaymentMethod[];
}

export const PaymentMethodsCard = ({ methods }: PaymentMethodsCardProps) => {
  return (
    <AppCard className="rounded-2xl transition-shadow hover:shadow-md">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold text-slate-900">Payment Methods</h3>
        <button type="button" className="text-xs font-semibold text-sky-700 hover:text-sky-800 hover:underline">
          + Add New
        </button>
      </div>

      <div className="mt-3 space-y-2.5">
        {methods.map((method) => (
          <article
            key={method.id}
            className="flex items-center justify-between rounded-xl border border-sky-200 bg-gradient-to-r from-sky-50 to-white px-3.5 py-3 transition-colors hover:from-sky-100 hover:to-white"
          >
            <div className="flex items-center gap-2">
              <CreditCard className="h-4 w-4 text-slate-600" />
              <div>
                <p className="text-base font-semibold text-slate-800">{method.label}</p>
                <p className="text-xs text-slate-500">{method.expiry}</p>
              </div>
            </div>
            {method.isDefault ? (
              <AppBadge tone="green" size="md">
                Default
              </AppBadge>
            ) : null}
          </article>
        ))}
      </div>
    </AppCard>
  );
};
