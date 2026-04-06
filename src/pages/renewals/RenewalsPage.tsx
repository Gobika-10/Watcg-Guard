import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { OutcomeBenefits } from "../../components/renewals/OutcomeBenefits";
import { RenewalActionCard } from "../../components/renewals/RenewalActionCard";
import { RenewalActionPanels } from "../../components/renewals/RenewalActionPanels";
import { RenewalsHero } from "../../components/renewals/RenewalsHero";
import { setActiveRenewalAction } from "../../features/renewals/renewalsSlice";

export const RenewalsPage = () => {
  const dispatch = useAppDispatch();
  const renewals = useAppSelector((state) => state.renewals);

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
            active={renewals.activeAction === action.id}
            onClick={() => dispatch(setActiveRenewalAction(action.id))}
          />
        ))}
      </section>

      <RenewalActionPanels activeAction={renewals.activeAction} />

      <OutcomeBenefits title={renewals.benefitsTitle} items={renewals.benefits} />
    </div>
  );
};
