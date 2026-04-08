import { SectionOverviewCard } from "../../common/components/SectionOverviewCard";

export const MonitorOverview = () => {
  return (
    <SectionOverviewCard
      eyebrow="Monitor"
      title="Monitoring workspace is ready"
      description="Track alerts, device health, and platform activity from a dedicated page while keeping the same page-based component structure as the dashboard."
      bullets={["Alert health", "Device activity", "Operational insights"]}
    />
  );
};
