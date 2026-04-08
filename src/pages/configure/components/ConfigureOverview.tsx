import { SectionOverviewCard } from "../../common/components/SectionOverviewCard";

export const ConfigureOverview = () => {
  return (
    <SectionOverviewCard
      eyebrow="Configure"
      title="Configuration page scaffold is in place"
      description="This section gives us a clean home for policy, service, and deployment setup screens, following the same page-component pattern as the dashboard."
      bullets={["Policy setup", "Service controls", "Deployment actions"]}
    />
  );
};
