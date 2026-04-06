import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Footer } from "./components/Footer";
import { SideNav } from "./components/SideNav";
import { TopBar } from "./components/TopBar";

export const AppLayout = () => {
  const location = useLocation();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    if (!mobileNavOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileNavOpen]);

  useEffect(() => {
    setMobileNavOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!mobileNavOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileNavOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [mobileNavOpen]);

  return (
    <div className="flex min-h-screen bg-slate-100 text-slate-900">
      <SideNav className="hidden lg:block" />

      <div
        className={[
          "fixed inset-0 z-40 bg-slate-900/45 transition-opacity duration-200 lg:hidden",
          mobileNavOpen ? "opacity-100" : "pointer-events-none opacity-0",
        ].join(" ")}
        onClick={() => setMobileNavOpen(false)}
      />

      <div
        className={[
          "fixed inset-y-0 left-0 z-50 w-[283px] transform transition-transform duration-200 ease-out lg:hidden",
          mobileNavOpen ? "translate-x-0" : "-translate-x-full",
        ].join(" ")}
      >
        <button
          type="button"
          onClick={() => setMobileNavOpen(false)}
          aria-label="Close menu"
          className="absolute right-3 top-3 z-10 rounded-lg bg-white/10 p-1.5 text-white backdrop-blur hover:bg-white/20"
        >
          <X className="h-4 w-4" />
        </button>
        <SideNav className="h-full w-full" onNavigate={() => setMobileNavOpen(false)} />
      </div>

      <div className="flex min-h-screen flex-1 flex-col">
        <TopBar onMenuClick={() => setMobileNavOpen(true)} />
        <main className="flex-1 p-4 md:p-6">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};
