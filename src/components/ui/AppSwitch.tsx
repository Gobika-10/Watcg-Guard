import { cn } from "../../lib/utils";

interface AppSwitchProps {
  checked: boolean;
  onToggle: () => void;
  ariaLabel: string;
  className?: string;
  showText?: boolean;
}

export const AppSwitch = ({
  checked,
  onToggle,
  ariaLabel,
  className,
  showText = true,
}: AppSwitchProps) => {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={ariaLabel}
      onClick={onToggle}
      className={cn(
        "group relative inline-flex h-7 w-[70px] items-center rounded-full transition-all duration-200",
        checked ? "bg-emerald-600" : "bg-slate-300",
        className
      )}
    >
      {showText ? (
        <>
          <span
            className={cn(
              "absolute inset-y-0 left-2 flex items-center text-[9px] font-bold tracking-wide text-white/90 transition-opacity",
              checked ? "opacity-100" : "opacity-0"
            )}
          >
            ON
          </span>
          <span
            className={cn(
              "absolute inset-y-0 right-2 flex items-center text-[9px] font-bold tracking-wide text-white/80 transition-opacity",
              checked ? "opacity-0" : "opacity-100"
            )}
          >
            OFF
          </span>
        </>
      ) : null}

      <span
        className={cn(
          "absolute top-0.5 h-6 w-6 rounded-full bg-white transition-transform duration-200",
          checked ? "translate-x-10" : "translate-x-0.5"
        )}
      />
    </button>
  );
};

