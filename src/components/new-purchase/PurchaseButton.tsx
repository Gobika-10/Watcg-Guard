import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "../../lib/utils";

type PurchaseButtonVariant = "primary" | "secondary" | "danger";

interface PurchaseButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: PurchaseButtonVariant;
  fullWidth?: boolean;
}

const variantClasses: Record<PurchaseButtonVariant, string> = {
  primary:
    "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-sm hover:from-orange-600 hover:to-orange-700",
  secondary:
    "border border-slate-300 bg-white text-slate-900 hover:border-slate-400 hover:bg-slate-50",
  danger: "bg-red-600 text-white shadow-sm hover:bg-red-700",
};

export const PurchaseButton = ({
  children,
  variant = "primary",
  fullWidth = false,
  className,
  ...props
}: PurchaseButtonProps) => {
  return (
    <button
      {...props}
      className={cn(
        "h-11 rounded-lg px-4 text-sm font-semibold transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-60",
        variantClasses[variant],
        fullWidth && "w-full",
        className
      )}
    >
      {children}
    </button>
  );
};

