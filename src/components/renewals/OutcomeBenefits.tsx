import { CheckCircle2 } from "lucide-react";

interface Benefit {
  id: string;
  title: string;
  subtitle: string;
}

interface OutcomeBenefitsProps {
  title: string;
  items: Benefit[];
}

export const OutcomeBenefits = ({ title, items }: OutcomeBenefitsProps) => {
  return (
    <section className="rounded-2xl border border-emerald-100 bg-gradient-to-br from-emerald-50 to-teal-50/60 p-6 shadow-sm">
      <div className="flex items-center gap-2.5">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500 shadow-sm">
          <CheckCircle2 className="h-4 w-4 text-white" />
        </div>
        <h3 className="text-xl font-bold text-slate-900">{title}</h3>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-4">
        {items.map((item) => (
          <article
            key={item.id}
            className="group flex items-start gap-3 rounded-xl border border-emerald-100 bg-white/70 p-4 shadow-sm backdrop-blur-sm transition-all duration-150 hover:border-emerald-200 hover:bg-white hover:shadow-md"
          >
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
            <div>
              <h4 className="text-sm font-semibold text-slate-900">{item.title}</h4>
              <p className="mt-0.5 text-xs leading-relaxed text-slate-500">{item.subtitle}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
