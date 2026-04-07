import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { OutcomeBenefits } from "./components/OutcomeBenefits";
import { RenewalActionCard } from "./components/RenewalActionCard";
import { RenewalActionPanels } from "./components/RenewalActionPanels";
import { RenewalsHero } from "./components/RenewalsHero";
import { setActiveRenewalAction } from "../../data/renewals/renewalsSlice";

export const RenewalsPage = () => {
  const dispatch = useAppDispatch();
  const renewals = useAppSelector((state) => state.renewals);
  const [hasActionSelection, setHasActionSelection] = useState(false);

  return (
    <div className="space-y-4">
      <RenewalsHero title={renewals.hero.title} subtitle={renewals.hero.subtitle} />

      <section className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-4">
        {renewals.actions.map((action) => (
          <RenewalActionCard
            key={action.id}
            title={action.title}
            description={action.description}
            iconKey={action.iconKey}
            color={action.color}
            active={hasActionSelection && renewals.activeAction === action.id}
            onClick={() => {
              setHasActionSelection(true);
              dispatch(setActiveRenewalAction(action.id));
            }}
          />
        ))}
      </section>

      <RenewalActionPanels activeAction={renewals.activeAction} />

      <OutcomeBenefits title={renewals.benefitsTitle} items={renewals.benefits} />
    </div>
  );
};
