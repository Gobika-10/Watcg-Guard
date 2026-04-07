import type { ComponentProps } from "react";
import { AppSectionHeader } from "../../../../components/ui/AppSectionHeader";

type DashboardSectionHeaderProps = ComponentProps<typeof AppSectionHeader>;

export const DashboardSectionHeader = (props: DashboardSectionHeaderProps) => {
  return <AppSectionHeader {...props} />;
};
