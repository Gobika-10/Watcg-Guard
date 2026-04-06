import type { StepItem } from "../../features/newPurchase/newPurchaseSlice";

interface PurchaseStepperProps {
  activeStep: number;
  steps: StepItem[];
}

export const PurchaseStepper = ({ activeStep, steps }: PurchaseStepperProps) => {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
      <div className="flex items-center gap-2.5 overflow-x-auto">
        {steps.map((step, i) => {
          const num = i + 1;
          const isActive = num === activeStep;
          const isDone = num < activeStep;

          return (
            <div key={step.key} className="flex min-w-fit flex-1 items-center">
              <div className="flex items-center gap-2">
                <div
                  className={[
                    "flex h-8 w-8 items-center justify-center rounded-full text-xs font-semibold shadow-sm ring-1",
                    isDone
                      ? "bg-emerald-500 text-white ring-emerald-400/60"
                      : isActive
                        ? "bg-red-600 text-white ring-red-400/60"
                        : "bg-slate-100 text-slate-700 ring-slate-200",
                  ].join(" ")}
                >
                  {num}
                </div>

                <div className="whitespace-nowrap">
                  <p className="text-sm font-semibold text-slate-900">{step.title}</p>
                  <p className={["text-xs", isActive || isDone ? "text-slate-700" : "text-slate-400"].join(" ")}>
                    {step.subtitle}
                  </p>
                </div>
              </div>

              {i < steps.length - 1 && (
                <div className={["mx-2 h-1 flex-1 rounded-full", isDone ? "bg-emerald-500" : "bg-slate-200"].join(" ")} />
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
