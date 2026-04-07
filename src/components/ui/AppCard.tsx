import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "../../lib/utils";

interface AppCardProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
}

export const AppCard = ({ children, className, ...props }: AppCardProps) => {
  return (
    <section
      className={cn("rounded-xl border border-slate-200 bg-white p-5 shadow-sm", className)}
      {...props}
    >
      {children}
    </section>
  );
};

