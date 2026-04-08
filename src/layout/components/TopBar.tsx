import { Bell, CircleHelp, Menu } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useAppSelector } from "../../hooks";
import watchGuardLogo from "../../assets/images.png";

interface TopBarProps {
  onMenuClick?: () => void;
}

export const TopBar = ({ onMenuClick }: TopBarProps) => {
  const { topBarMeta, navigationItems } = useAppSelector((state) => state.ui);

  return (
    <header className="border-b border-white/8 bg-[#0a0a0a] px-4 py-2.5 text-white md:px-5">
      <div className="mx-auto flex max-w-[1920px] items-center justify-between gap-3">
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={onMenuClick}
            aria-label="Open menu"
            className="rounded-lg border border-white/10 bg-white/5 p-2 text-white/80 transition hover:bg-white/10 lg:hidden"
          >
            <Menu className="h-4 w-4" />
          </button>

          <div className="hidden items-center lg:flex">
            <img
              src={watchGuardLogo}
              alt="WatchGuard"
              className="block h-11 w-auto object-contain"
            />
          </div>

          <nav className="hidden items-center gap-1 lg:flex">
            {navigationItems.map((item) => (
              <NavLink
                key={item.label}
                to={item.path}
                className={({ isActive }) =>
                  [
                    "rounded-md px-4 py-2.5 text-[14px] font-medium transition",
                    isActive
                      ? "bg-white/8 text-white shadow-inner ring-1 ring-white/6"
                      : "text-white/80 hover:bg-white/6 hover:text-white",
                  ].join(" ")
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-2.5">
          <div className="hidden items-center gap-2 md:flex">
            <button
              type="button"
              className="relative rounded-full p-2 text-white/85 transition hover:bg-white/10 hover:text-white"
              aria-label="Notifications"
            >
              <Bell className="h-5 w-5" />
            </button>
            <button
              type="button"
              className="rounded-full p-2 text-white/85 transition hover:bg-white/10 hover:text-white"
              aria-label="Help"
            >
              <CircleHelp className="h-5 w-5" />
            </button>
          </div>

          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#6ea1ef] text-base font-semibold text-white shadow-sm">
            {topBarMeta.userInitials}
          </div>
        </div>
      </div>
    </header>
  );
};
