import { SectionOverviewCard } from "../../common/components/SectionOverviewCard";

export const AdministrationOverview = () => {
  return (
    <SectionOverviewCard
      eyebrow="Administration"
      title="Administration section is structured and ready"
      description="This page keeps user management, permissions, and workspace-level controls in a dedicated page folder while reusing the shared UI shell."
      bullets={["User access", "Permissions", "Workspace controls"]}
    />
  );
};
