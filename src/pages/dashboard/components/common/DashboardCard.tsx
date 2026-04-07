import type { ComponentProps } from "react";
import { AppCard } from "../../../../components/ui/AppCard";

type DashboardCardProps = ComponentProps<typeof AppCard>;

export const DashboardCard = (props: DashboardCardProps) => {
  return <AppCard {...props} />;
};
