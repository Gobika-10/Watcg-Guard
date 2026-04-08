import { SectionOverviewCard } from "../../common/components/SectionOverviewCard";

export const InventoryOverview = () => {
  return (
    <SectionOverviewCard
      eyebrow="Inventory"
      title="Inventory page is now part of the app"
      description="Use this page folder for product lists, license inventories, and account-level assets without mixing those pieces into the dashboard code."
      bullets={["Assets", "Licenses", "Account inventory"]}
    />
  );
};
